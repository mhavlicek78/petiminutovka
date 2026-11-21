// Pětiminutovka – synchronizace pokroku mezi zařízeními.
// Vazba (binding) na KV namespace "petiminutovka-pokrok" se musí jmenovat POKROK.
const ORIGINS = [
  "https://mhavlicek78.github.io",
  "http://127.0.0.1:8000",
  "http://localhost:8000",
];
const MAX = 256 * 1024;

const num = (x) => typeof x === "number" && isFinite(x);

// Slučování je komutativní a idempotentní: nezáleží na pořadí ani opakování.
function merge(a, b) {
  a = a || {};
  b = b || {};
  const out = { lessons: {}, quiz: {}, cards: {}, days: {} };
  // lessons: id -> čas prvního dokončení (bereme dřívější)
  for (const src of [a.lessons || {}, b.lessons || {}])
    for (const k in src)
      if (num(src[k]) && (out.lessons[k] == null || src[k] < out.lessons[k])) out.lessons[k] = src[k];
  // quiz: id otázky -> {c: správně 0/1, t: čas} – platí první pokus
  for (const src of [a.quiz || {}, b.quiz || {}])
    for (const k in src) {
      const x = src[k];
      if (x && num(x.t) && (x.c === 0 || x.c === 1) && (!out.quiz[k] || x.t < out.quiz[k].t))
        out.quiz[k] = { c: x.c, t: x.t };
    }
  // cards: id -> {box, due, ts, seen, right} – platí nejnovější stav
  for (const src of [a.cards || {}, b.cards || {}])
    for (const k in src) {
      const x = src[k];
      if (x && num(x.ts) && num(x.box) && num(x.due) && (!out.cards[k] || x.ts > out.cards[k].ts))
        out.cards[k] = { box: x.box, due: x.due, ts: x.ts, seen: num(x.seen) ? x.seen : 0, right: num(x.right) ? x.right : 0 };
    }
  // days: "YYYY-MM-DD" -> true (aktivní dny)
  for (const src of [a.days || {}, b.days || {}])
    for (const k in src) if (src[k] === true && /^\d{4}-\d{2}-\d{2}$/.test(k)) out.days[k] = true;
  return out;
}

function cors(req) {
  const o = req.headers.get("Origin");
  return {
    "Access-Control-Allow-Origin": ORIGINS.includes(o) ? o : ORIGINS[0],
    "Access-Control-Allow-Methods": "GET, PUT, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Max-Age": "86400",
    Vary: "Origin",
  };
}

const json = (req, data, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { ...cors(req), "Content-Type": "application/json", "Cache-Control": "no-store" },
  });

export default {
  async fetch(req, env) {
    if (req.method === "OPTIONS") return new Response(null, { status: 204, headers: cors(req) });
    const path = new URL(req.url).pathname;
    const m = path.match(/^\/p\/([a-f0-9]{64})$/);
    if (!m) return json(req, { ok: true, app: "petiminutovka" }, path === "/" ? 200 : 404);
    const key = "p:" + m[1];
    if (req.method === "GET") {
      const data = await env.POKROK.get(key, "json");
      return json(req, { data: data || null });
    }
    if (req.method === "PUT") {
      const text = await req.text();
      if (text.length > MAX) return json(req, { error: "too_large" }, 413);
      let body;
      try { body = JSON.parse(text); } catch { return json(req, { error: "bad_json" }, 400); }
      const old = await env.POKROK.get(key, "json");
      const merged = merge(merge({}, old), body);
      if (JSON.stringify(merged) !== JSON.stringify(old)) await env.POKROK.put(key, JSON.stringify(merged));
      return json(req, { data: merged });
    }
    return json(req, { error: "method" }, 405);
  },
};

export { merge };
