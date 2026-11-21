# Pětiminutovka

Osobní mikro-learningová webová aplikace: denně jedna krátká lekce, 3 kvízové otázky a opakování kartiček (Leitnerův systém 1 · 3 · 7 · 16 · 35 dní). Oblasti: výživa, lidské tělo, ekonomie, historie, věda. Každá lekce uvádí zdroje a sílu důkazů.

- Statický web (HTML, CSS, JS) na GitHub Pages
- Synchronizace pokroku: Cloudflare Worker `petiminutovka` + KV `petiminutovka-pokrok` (složka `worker/`)
- Obsah: `lessons.js`
