(() => {
'use strict';

const SYNC_URL = 'https://petiminutovka.complex-evidence-1ef350b1.workers.dev';
const STATE_KEY = 'p5_state', CODE_KEY = 'p5_code';
const AREAS = {
  vyziva:   { name: 'Výživa',      color: 'var(--vyziva)' },
  telo:     { name: 'Lidské tělo', color: 'var(--telo)' },
  ekonomie: { name: 'Ekonomie',    color: 'var(--ekonomie)' },
  historie: { name: 'Historie',    color: 'var(--historie)' },
  veda:     { name: 'Věda',        color: 'var(--veda)' },
};
const INTERVAL = [0, 1, 3, 7, 16, 35];   // dny podle přihrádky 1–5
const REVIEW_LIMIT = 8;
const XP = { lesson: 10, quiz: 5, card: 2 };
const LESSONS = window.LESSONS || [];
const byId = Object.fromEntries(LESSONS.map((l) => [l.id, l]));
const DAY = 86400000;

// ---------- úložiště ----------
const ls = {
  get(k) { try { return localStorage.getItem(k); } catch { return null; } },
  set(k, v) { try { localStorage.setItem(k, v); } catch {} },
  del(k) { try { localStorage.removeItem(k); } catch {} },
};
const num = (x) => typeof x === 'number' && isFinite(x);
const empty = () => ({ lessons: {}, quiz: {}, cards: {}, days: {} });
let state = (() => { try { return merge(empty(), JSON.parse(ls.get(STATE_KEY) || 'null')); } catch { return empty(); } })();

function merge(a, b) {
  a = a || {}; b = b || {};
  const out = empty();
  for (const src of [a.lessons || {}, b.lessons || {}])
    for (const k in src) if (num(src[k]) && (out.lessons[k] == null || src[k] < out.lessons[k])) out.lessons[k] = src[k];
  for (const src of [a.quiz || {}, b.quiz || {}])
    for (const k in src) { const x = src[k]; if (x && num(x.t) && (x.c === 0 || x.c === 1) && (!out.quiz[k] || x.t < out.quiz[k].t)) out.quiz[k] = { c: x.c, t: x.t }; }
  for (const src of [a.cards || {}, b.cards || {}])
    for (const k in src) { const x = src[k]; if (x && num(x.ts) && num(x.box) && num(x.due) && (!out.cards[k] || x.ts > out.cards[k].ts)) out.cards[k] = { box: x.box, due: x.due, ts: x.ts, seen: num(x.seen) ? x.seen : 0, right: num(x.right) ? x.right : 0 }; }
  for (const src of [a.days || {}, b.days || {}])
    for (const k in src) if (src[k] === true && /^\d{4}-\d{2}-\d{2}$/.test(k)) out.days[k] = true;
  return out;
}
function save() { ls.set(STATE_KEY, JSON.stringify(state)); schedulePush(); }

// ---------- čas ----------
const pad = (n) => String(n).padStart(2, '0');
const dayKey = (d = new Date()) => d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate());
const midnight = (d = new Date()) => new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime();
const addDays = (t, n) => { const d = new Date(t); d.setDate(d.getDate() + n); return d.getTime(); };
const markToday = () => { state.days[dayKey()] = true; };

// ---------- výpočty ----------
const cardIds = (l) => l.cards.map((_, i) => l.id + ':' + i);
const dueCards = () => Object.entries(state.cards).filter(([k, c]) => byId[k.split(':')[0]] && c.due <= Date.now()).sort((a, b) => a[1].due - b[1].due).map(([k]) => k);
const levelOf = (xp, k) => Math.floor((1 + Math.sqrt(1 + (4 * xp) / k)) / 2); // práh úrovně l: k·l·(l−1)
const levelStart = (l, k) => k * l * (l - 1);
const AREA_K = 25, TOTAL_K = 100;

function areaStats(area) {
  const ls_ = LESSONS.filter((l) => l.area === area);
  let lessons = 0, qc = 0, qn = 0, right = 0, mastered = 0, cardsN = 0;
  for (const l of ls_) {
    if (state.lessons[l.id]) lessons++;
    l.quiz.forEach((_, i) => { const q = state.quiz[l.id + ':' + i]; if (q) { qn++; qc += q.c; } });
    for (const k of cardIds(l)) { const c = state.cards[k]; if (c) { cardsN++; right += c.right; if (c.box >= 4) mastered++; } }
  }
  const xp = lessons * XP.lesson + qc * XP.quiz + right * XP.card;
  return { total: ls_.length, lessons, qc, qn, mastered, cardsN, xp, level: levelOf(xp, AREA_K) };
}
function totals() {
  const per = Object.fromEntries(Object.keys(AREAS).map((a) => [a, areaStats(a)]));
  const xp = Object.values(per).reduce((s, x) => s + x.xp, 0);
  const qc = Object.values(per).reduce((s, x) => s + x.qc, 0), qn = Object.values(per).reduce((s, x) => s + x.qn, 0);
  const lessons = Object.values(per).reduce((s, x) => s + x.lessons, 0);
  const mastered = Object.values(per).reduce((s, x) => s + x.mastered, 0);
  return { per, xp, qc, qn, lessons, mastered, level: levelOf(xp, TOTAL_K), streak: streak(), activeDays: Object.keys(state.days).length };
}
function streak() {
  let d = new Date(), n = 0;
  if (!state.days[dayKey(d)]) d.setDate(d.getDate() - 1);   // dnešek ještě může přijít
  while (state.days[dayKey(d)]) { n++; d.setDate(d.getDate() - 1); }
  return n;
}
function pickLesson(area) {
  const open = LESSONS.filter((l) => !state.lessons[l.id] && (!area || l.area === area));
  if (!open.length) return null;
  if (area) return open[0];
  const areas = [...new Set(open.map((l) => l.area))];
  const score = (a) => {
    const done = LESSONS.filter((l) => l.area === a && state.lessons[l.id]);
    return [done.length, Math.max(0, ...done.map((l) => state.lessons[l.id]))];
  };
  areas.sort((x, y) => { const a = score(x), b = score(y); return a[0] - b[0] || a[1] - b[1]; });
  return open.find((l) => l.area === areas[0]);
}

// ---------- pomocné ----------
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const app = document.getElementById('app');
const chip = (area) => '<span class="chip"><i style="background:' + AREAS[area].color + '"></i>' + esc(AREAS[area].name) + '</span>';
const evClass = (e) => ({ 'silné': 'silne', 'střední': 'stredni', 'slabé': 'slabe', 'sporné': 'sporne' }[e] || 'stredni');
const pct = (a, b) => (b ? Math.round((100 * a) / b) : 0);
function shuffle(arr) { const a = arr.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
function plural(n, one, few, many) { return n === 1 ? one : n >= 2 && n <= 4 ? few : many; }
function toast(msg) { const t = document.createElement('div'); t.className = 'toast'; t.textContent = msg; document.body.appendChild(t); setTimeout(() => t.remove(), 2600); }
function show(html) { app.innerHTML = html; window.scrollTo(0, 0); }

// ---------- obrazovky ----------
let session = null;

function home() {
  session = null;
  const t = totals(), next = pickLesson(), due = dueCards().length;
  const nextArea = next ? next.area : null;
  let hero;
  if (next) {
    hero = '<div class="card hero"><div class="eyebrow">Dnešní pětiminutovka</div><h1>' + esc(next.title) + '</h1>'
      + '<p>' + chip(nextArea) + ' <span class="muted small">· 1 lekce, 3 otázky' + (due ? ', ' + Math.min(due, REVIEW_LIMIT) + ' ' + plural(Math.min(due, REVIEW_LIMIT), 'kartička', 'kartičky', 'kartiček') : '') + '</span></p>'
      + '<button class="btn block" data-act="start">Začít</button></div>';
  } else {
    hero = '<div class="card hero"><div class="eyebrow">Knihovna dokončena</div><h1>Všech ' + LESSONS.length + ' lekcí máš za sebou</h1>'
      + '<p class="muted">Nové lekce se budou přidávat. Mezitím drž znalosti čerstvé opakováním.</p>'
      + '<button class="btn block" data-act="review"' + (due ? '' : ' disabled') + '>' + (due ? 'Opakovat (' + due + ')' : 'Dnes není co opakovat') + '</button></div>';
  }
  const areas = Object.entries(AREAS).map(([k, a]) => {
    const s = t.per[k], lo = levelStart(s.level, AREA_K), hi = levelStart(s.level + 1, AREA_K);
    return '<button class="area" data-area="' + k + '"><b>' + esc(a.name) + '</b><span class="lvl">Úroveň ' + s.level + ' · ' + s.lessons + '/' + s.total + ' lekcí</span>'
      + '<div class="bar"><span style="width:' + pct(s.xp - lo, hi - lo) + '%;background:' + a.color + '"></span></div></button>';
  }).join('');
  show(hero
    + (next && due ? '<div class="row" style="margin-top:12px"><button class="btn ghost" data-act="review">Jen opakování (' + due + ')</button></div>' : '')
    + '<h2>Přehled</h2><div class="kpis">'
    + kpi('Úroveň ' + t.level, t.xp + ' XP celkem') + kpi(t.streak, plural(t.streak, 'den v řadě', 'dny v řadě', 'dní v řadě'))
    + kpi(t.qn ? pct(t.qc, t.qn) + ' %' : '–', 'úspěšnost v kvízech') + kpi(t.mastered, 'zvládnutých kartiček') + '</div>'
    + '<h2>Oblasti</h2><p class="muted small">Klepnutím zvolíš lekci z konkrétní oblasti.</p><div class="areas">' + areas + '</div>'
    + syncLine());
}
const kpi = (b, s) => '<div class="kpi"><b>' + esc(b) + '</b><span>' + esc(s) + '</span></div>';
function syncLine() {
  const code = ls.get(CODE_KEY);
  return '<p class="muted small" style="margin-top:28px">' + (code ? 'Synchronizace: ' + esc(syncState.text) : 'Pokrok je uložený jen v tomto zařízení. <button class="linkish" data-go="settings" style="background:none;border:0;padding:0;color:var(--accent);text-decoration:underline">Zapnout synchronizaci</button>') + '</p>';
}

function startSession(area, reviewOnly) {
  const lesson = reviewOnly ? null : pickLesson(area);
  const before = totals();
  const steps = [];
  if (lesson) {
    steps.push({ type: 'lesson', id: lesson.id });
    lesson.quiz.forEach((q, i) => {
      const order = shuffle(q.o.map((_, j) => j));
      steps.push({ type: 'quiz', id: lesson.id, i, order });
    });
  }
  const exclude = lesson ? new Set(cardIds(lesson)) : new Set();
  dueCards().filter((k) => !exclude.has(k)).slice(0, REVIEW_LIMIT).forEach((k) => steps.push({ type: 'card', key: k }));
  if (!steps.length) { toast('Teď není co opakovat.'); return home(); }
  steps.push({ type: 'done' });
  session = { steps, pos: 0, before, gainedQuiz: 0, cardsRight: 0, cardsTotal: 0, lessonId: lesson ? lesson.id : null };
  renderStep();
}

function progressBar() {
  const n = session.steps.length - 1;
  return '<div class="progress" aria-hidden="true">' + session.steps.slice(0, n).map((_, i) => '<span class="' + (i < session.pos ? 'on' : '') + '"></span>').join('') + '</div>';
}

function lessonHtml(l) {
  return '<article class="lesson"><p style="margin:4px 0 8px">' + chip(l.area) + '</p><h1>' + esc(l.title) + '</h1>'
    + l.text.map((p) => '<p>' + esc(p) + '</p>').join('')
    + '<div class="takeaway">' + esc(l.takeaway) + '</div>'
    + '<div class="evidence"><span class="ev ' + evClass(l.evidence) + '">Důkazy: ' + esc(l.evidence) + '</span><span class="muted">' + esc(l.evidenceNote) + '</span></div>'
    + '<div class="sources"><b>Zdroje</b><ul>' + l.sources.map((s) => '<li>' + (s.url ? '<a href="' + esc(s.url) + '" target="_blank" rel="noopener">' + esc(s.name) + '</a>' : esc(s.name)) + '</li>').join('') + '</ul></div></article>';
}

function renderStep() {
  const st = session.steps[session.pos];
  if (st.type === 'lesson') {
    show(progressBar() + lessonHtml(byId[st.id]) + '<div style="margin-top:22px"><button class="btn block" data-act="next">Na kvíz</button></div>');
  } else if (st.type === 'quiz') {
    const l = byId[st.id], q = l.quiz[st.i];
    show(progressBar() + '<p class="muted small">Otázka ' + (st.i + 1) + ' ze ' + l.quiz.length + ' · ' + esc(l.title) + '</p>'
      + '<div class="q">' + esc(q.q) + '</div><div class="opts">'
      + st.order.map((j) => '<button class="opt" data-opt="' + j + '">' + esc(q.o[j]) + '</button>').join('') + '</div><div id="after"></div>');
  } else if (st.type === 'card') {
    const [lid, ci] = st.key.split(':'), c = byId[lid].cards[+ci];
    show(progressBar() + '<p class="muted small">Opakování · ' + esc(AREAS[byId[lid].area].name) + '</p>'
      + '<div class="card flash" data-act="flip" role="button" tabindex="0" aria-label="Otočit kartičku"><div class="side">Otázka</div><div class="txt">' + esc(c.f) + '</div><p class="muted small" style="margin:14px 0 0">Klepnutím otočíš</p></div><div id="after"></div>');
  } else {
    finish();
  }
}

function answerQuiz(j) {
  const st = session.steps[session.pos], l = byId[st.id], q = l.quiz[st.i], ok = j === 0;
  app.querySelectorAll('.opt').forEach((b) => { b.disabled = true; const v = +b.dataset.opt; if (v === 0) b.classList.add('right'); else if (v === j) b.classList.add('wrong'); });
  const key = st.id + ':' + st.i;
  if (!state.quiz[key]) { state.quiz[key] = { c: ok ? 1 : 0, t: Date.now() }; if (ok) session.gainedQuiz++; }
  // po poslední otázce je lekce hotová a kartičky jdou do opakování
  if (st.i === l.quiz.length - 1 && !state.lessons[l.id]) {
    state.lessons[l.id] = Date.now();
    const due = addDays(midnight(), INTERVAL[1]);
    for (const k of cardIds(l)) if (!state.cards[k]) state.cards[k] = { box: 1, due, ts: Date.now(), seen: 0, right: 0 };
  }
  markToday(); save();
  document.getElementById('after').innerHTML = '<div class="why"><b class="' + (ok ? 'good' : 'bad') + '">' + (ok ? 'Správně. ' : 'Ne tak docela. ') + '</b>' + esc(q.why) + '</div>'
    + '<div style="margin-top:16px"><button class="btn block" data-act="next">Pokračovat</button></div>';
  app.querySelector('[data-act="next"]').focus({ preventScroll: true });
}

function flipCard() {
  const st = session.steps[session.pos], el = app.querySelector('.flash');
  if (!el || el.classList.contains('back')) return;
  const [lid, ci] = st.key.split(':'), c = byId[lid].cards[+ci];
  el.classList.add('back');
  el.innerHTML = '<div class="side">Odpověď</div><div class="txt">' + esc(c.b) + '</div>';
  document.getElementById('after').innerHTML = '<p class="muted small center" style="margin-top:16px">Věděl jsi to?</p><div class="row"><button class="btn ghost" data-grade="0">Nevěděl</button><button class="btn" data-grade="1">Věděl</button></div>';
}

function gradeCard(ok) {
  const st = session.steps[session.pos], c = state.cards[st.key];
  const box = ok ? Math.min(c.box + 1, 5) : 1;
  state.cards[st.key] = { box, due: addDays(midnight(), INTERVAL[box]), ts: Date.now(), seen: c.seen + 1, right: c.right + (ok ? 1 : 0) };
  session.cardsTotal++; if (ok) session.cardsRight++;
  markToday(); save(); next();
}

function next() { session.pos++; renderStep(); }

function finish() {
  const a = session.before, b = totals(), gained = b.xp - a.xp;
  const ups = Object.keys(AREAS).filter((k) => b.per[k].level > a.per[k].level).map((k) => AREAS[k].name + ' → úroveň ' + b.per[k].level);
  if (b.level > a.level) ups.unshift('Celková úroveň ' + b.level);
  const lesson = session.lessonId ? byId[session.lessonId] : null;
  show('<div class="card center stack" style="padding:28px 20px"><p class="muted">Hotovo</p><div class="big">+' + gained + ' XP</div>'
    + (ups.length ? '<p class="levelup">Nová úroveň: ' + ups.map(esc).join(', ') + '</p>' : '')
    + '<p class="muted small">' + (lesson ? 'Kvíz ' + session.gainedQuiz + '/' + lesson.quiz.length + ' napoprvé správně' : '')
    + (session.cardsTotal ? (lesson ? ' · ' : '') + 'kartičky ' + session.cardsRight + '/' + session.cardsTotal : '') + '</p>'
    + (lesson ? '<p class="small">Kartičky z dnešní lekce se objeví v opakování zítra.</p>' : '')
    + '</div><div class="stack" style="margin-top:16px"><button class="btn block" data-go="home">Zpět na přehled</button>'
    + (pickLesson() ? '<button class="btn ghost block" data-act="start">Ještě jednu lekci</button>' : '') + '</div>');
  session = null;
}

function stats() {
  const t = totals();
  const rows = Object.entries(AREAS).map(([k, a]) => {
    const s = t.per[k];
    return '<li><span>' + chip(k) + '</span><span class="muted small">úr. ' + s.level + ' · ' + s.xp + ' XP · ' + s.lessons + '/' + s.total + ' lekcí · kvíz ' + (s.qn ? pct(s.qc, s.qn) + ' %' : '–') + ' · ' + s.mastered + '/' + s.cardsN + ' kart.</span></li>';
  }).join('');
  const boxes = [1, 2, 3, 4, 5].map((bx) => Object.values(state.cards).filter((c) => c.box === bx).length);
  const maxBox = Math.max(1, ...boxes);
  const heat = []; for (let i = 27; i >= 0; i--) { const d = new Date(); d.setDate(d.getDate() - i); heat.push('<span class="' + (state.days[dayKey(d)] ? 'on' : '') + '" title="' + dayKey(d) + '"></span>'); }
  const done = LESSONS.filter((l) => state.lessons[l.id]).sort((x, y) => state.lessons[y.id] - state.lessons[x.id]);
  show('<h1>Statistiky</h1><div class="kpis" style="margin-top:14px">'
    + kpi('Úroveň ' + t.level, t.xp + ' XP') + kpi(t.lessons + '/' + LESSONS.length, 'dokončených lekcí')
    + kpi(t.streak, plural(t.streak, 'den v řadě', 'dny v řadě', 'dní v řadě')) + kpi(t.activeDays, plural(t.activeDays, 'aktivní den', 'aktivní dny', 'aktivních dní')) + '</div>'
    + '<h2>Posledních 28 dní</h2><div class="card"><div class="heat">' + heat.join('') + '</div></div>'
    + '<h2>Podle oblastí</h2><div class="card"><ul class="list">' + rows + '</ul></div>'
    + '<h2>Kartičky podle přihrádek</h2><div class="card"><p class="muted small">Přihrádka 1 = opakuješ zítra, 5 = za 5 týdnů. Od přihrádky 4 je kartička „zvládnutá“.</p>'
    + boxes.map((n, i) => '<div style="display:flex;align-items:center;gap:10px;margin:6px 0"><span class="small" style="width:22px">' + (i + 1) + '</span><div class="bar" style="flex:1;margin:0;height:10px"><span style="width:' + pct(n, maxBox) + '%;background:var(--accent)"></span></div><span class="small muted" style="width:28px;text-align:right">' + n + '</span></div>').join('') + '</div>'
    + '<h2>Dokončené lekce</h2>' + (done.length ? '<div class="card"><ul class="list">' + done.map((l) => '<li><button data-read="' + l.id + '">' + esc(l.title) + '</button><span>' + chip(l.area) + '</span></li>').join('') + '</ul></div>' : '<p class="muted">Zatím žádné.</p>'));
}

function readLesson(id) { show(lessonHtml(byId[id]) + '<div style="margin-top:22px"><button class="btn ghost block" data-go="stats">Zpět</button></div>'); }

function areaPick(area) {
  const l = pickLesson(area);
  if (!l) { toast('V oblasti ' + AREAS[area].name + ' máš všechny lekce hotové.'); return; }
  startSession(area, false);
}

// ---------- synchronizace ----------
const syncState = { text: 'vypnutá', busy: false };
let pushTimer = null;
const WORDS = ['jablko', 'hora', 'reka', 'sova', 'kamen', 'les', 'mrak', 'jezero', 'ohen', 'vitr', 'kniha', 'most', 'hvezda', 'louka', 'pramen', 'buk', 'jestrab', 'vlna', 'skala', 'zahrada'];
const suggestCode = () => { const p = () => WORDS[Math.floor(Math.random() * WORDS.length)]; let a = p(), b = p(); while (b === a) b = p(); return a + '-' + b + '-' + (1000 + Math.floor(Math.random() * 9000)); };
const normCode = (c) => c.trim().toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/\s+/g, '-');
async function codeHash(code) {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode('petiminutovka:' + code));
  return [...new Uint8Array(buf)].map((x) => x.toString(16).padStart(2, '0')).join('');
}
async function syncNow(mode) {
  const code = ls.get(CODE_KEY); if (!code) return false;
  syncState.busy = true;
  try {
    const url = SYNC_URL + '/p/' + (await codeHash(code));
    const res = await fetch(url, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(state) });
    if (!res.ok) throw new Error('HTTP ' + res.status);
    const data = (await res.json()).data;
    const merged = merge(state, data);
    const changed = JSON.stringify(merged) !== JSON.stringify(state);
    state = merged; ls.set(STATE_KEY, JSON.stringify(state));
    const d = new Date(); syncState.text = 'synchronizováno v ' + pad(d.getHours()) + ':' + pad(d.getMinutes());
    if (changed && !session && mode !== 'quiet') rerender();
    return true;
  } catch (e) {
    syncState.text = navigator.onLine === false ? 'bez připojení – odešle se později' : 'nedostupná (' + (e.message || 'chyba') + ')';
    return false;
  } finally { syncState.busy = false; }
}
function schedulePush() { if (!ls.get(CODE_KEY)) return; clearTimeout(pushTimer); pushTimer = setTimeout(() => syncNow('quiet'), 1200); }

function settings() {
  const code = ls.get(CODE_KEY);
  const sync = code
    ? '<div class="card stack"><p><b>Synchronizace je zapnutá</b></p><p>Kód: <code style="font-size:17px">' + esc(code) + '</code></p><p class="muted small">Stav: ' + esc(syncState.text) + '. Na dalším zařízení zadej stejný kód.</p>'
      + '<div class="row"><button class="btn ghost" data-act="syncnow">Synchronizovat teď</button><button class="btn ghost" data-act="syncoff">Odpojit toto zařízení</button></div></div>'
    : '<div class="card stack"><p><b>Synchronizace mezi zařízeními</b></p><p class="muted small">Vymysli si kód (nebo nech vygenerovat) a stejný kód zadej na iPhonu i na Macu. Pokrok se sloučí – nic se neztratí.</p>'
      + '<form data-form="sync" autocomplete="off" class="stack"><input type="text" id="code" placeholder="např. sova-most-4821" autocapitalize="none" spellcheck="false">'
      + '<div class="row"><button type="button" class="btn ghost" data-act="suggest">Vymyslet kód</button><button type="submit" class="btn">Propojit</button></div><p class="err" id="err" role="alert"></p></form></div>';
  show('<h1>Nastavení</h1><h2>Synchronizace</h2>' + sync
    + '<h2>Přidat na plochu</h2><div class="card"><p class="small"><b>iPhone:</b> v Safari Sdílet → Přidat na plochu.</p><p class="small" style="margin:0"><b>Mac:</b> v Safari Soubor → Přidat do Docku (nebo jen záložka).</p></div>'
    + '<h2>O obsahu</h2><div class="card"><p class="small">Knihovna má ' + LESSONS.length + ' lekcí. Každá uvádí zdroje a sílu důkazů. Kartičky se opakují v intervalech 1 · 3 · 7 · 16 · 35 dní; když odpověď nevíš, kartička se vrací na začátek.</p></div>'
    + '<h2>Smazat pokrok</h2><div class="card"><p class="muted small">Smaže pokrok v tomto zařízení. Pokud máš zapnutou synchronizaci, data na serveru zůstanou a po připojení se vrátí.</p><button class="btn ghost" data-act="reset">Smazat pokrok v tomto zařízení</button></div>');
}

function rerender() {
  const v = app.dataset.view;
  if (v === 'stats') stats(); else if (v === 'settings') settings(); else if (v === 'home') home();
}
function go(view) { app.dataset.view = view; session = null; if (view === 'stats') stats(); else if (view === 'settings') settings(); else home(); }

// ---------- události ----------
document.addEventListener('click', async (e) => {
  const t = e.target.closest('button, [data-act], [data-go], [data-area], [data-read]'); if (!t) return;
  if (t.dataset.go) return go(t.dataset.go);
  if (t.dataset.area) { app.dataset.view = 'session'; return areaPick(t.dataset.area); }
  if (t.dataset.read) { app.dataset.view = 'read'; return readLesson(t.dataset.read); }
  if (t.dataset.opt != null && !t.disabled) return answerQuiz(+t.dataset.opt);
  if (t.dataset.grade != null) return gradeCard(t.dataset.grade === '1');
  switch (t.dataset.act) {
    case 'start': app.dataset.view = 'session'; return startSession(null, false);
    case 'review': app.dataset.view = 'session'; return startSession(null, true);
    case 'next': return next();
    case 'flip': return flipCard();
    case 'suggest': { const i = document.getElementById('code'); i.value = suggestCode(); return; }
    case 'syncnow': t.disabled = true; await syncNow(); return settings();
    case 'syncoff': ls.del(CODE_KEY); syncState.text = 'vypnutá'; toast('Zařízení odpojeno. Pokrok zůstal uložený i tady.'); return settings();
    case 'reset':
      if (t.dataset.confirm !== '1') { t.dataset.confirm = '1'; t.textContent = 'Opravdu smazat? Klepni znovu'; return; }
      state = empty(); ls.set(STATE_KEY, JSON.stringify(state)); toast('Pokrok smazán.'); return go('home');
  }
});
document.addEventListener('keydown', (e) => {
  if ((e.key === 'Enter' || e.key === ' ') && e.target.matches('.flash')) { e.preventDefault(); flipCard(); }
});
document.addEventListener('submit', async (e) => {
  if (e.target.dataset.form !== 'sync') return;
  e.preventDefault();
  const raw = document.getElementById('code').value, err = document.getElementById('err'), code = normCode(raw);
  if (code.length < 8) { err.textContent = 'Kód musí mít aspoň 8 znaků.'; return; }
  ls.set(CODE_KEY, code); err.textContent = 'Propojuji…';
  const ok = await syncNow('quiet');
  if (!ok) { ls.del(CODE_KEY); err.textContent = 'Nepodařilo se spojit se serverem: ' + syncState.text + '.'; return; }
  toast('Propojeno. Pokrok je sloučený.'); settings();
});
document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'visible') syncNow(); });

app.dataset.view = 'home';
home();
syncNow();
if ('serviceWorker' in navigator && location.protocol === 'https:') navigator.serviceWorker.register('sw.js').catch(() => {});
})();
