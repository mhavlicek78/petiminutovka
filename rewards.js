// Bonusové karty. Rekordy planety se získávají za postup na novou úroveň,
// Zlatá edice za velké milníky (podmínky jsou v app.js).
window.RECORD_SERIES = {
  hory:    { name: 'Hory',    color: '#2f6fa8', sky: '#eaf1f8' },
  voda:    { name: 'Voda',    color: '#17837f', sky: '#e6f4f3' },
  extremy: { name: 'Extrémy', color: '#b8860b', sky: '#f8f1e2' },
};
window.RECORDS = [
  { id: 'everest',   s: 'hory', name: 'Mount Everest', stars: 4, stats: [['Výška', '8 849 m'], ['Pohoří', 'Himálaj'], ['První výstup', '1953'], ['Země', 'Nepál / Čína']] },
  { id: 'k2',        s: 'hory', name: 'K2', stars: 4, stats: [['Výška', '8 611 m'], ['Pohoří', 'Karákoram'], ['První výstup', '1954'], ['Země', 'Pákistán / Čína']] },
  { id: 'aconcagua', s: 'hory', name: 'Aconcagua', stars: 3, stats: [['Výška', '6 961 m'], ['Pohoří', 'Andy'], ['První výstup', '1897'], ['Země', 'Argentina']] },
  { id: 'denali',    s: 'hory', name: 'Denali', stars: 3, stats: [['Výška', '6 190 m'], ['Pohoří', 'Aljašské'], ['První výstup', '1913'], ['Země', 'USA']] },
  { id: 'kilimand',  s: 'hory', name: 'Kilimandžáro', stars: 2, stats: [['Výška', '5 895 m'], ['Typ', 'sopka'], ['První výstup', '1889'], ['Země', 'Tanzanie']] },
  { id: 'montblanc', s: 'hory', name: 'Mont Blanc', stars: 2, stats: [['Výška', '~4 806 m'], ['Pohoří', 'Alpy'], ['První výstup', '1786'], ['Země', 'Francie / Itálie']] },

  { id: 'challenger', s: 'voda', name: 'Challengerova hlubina', stars: 4, stats: [['Hloubka', '~10 935 m'], ['Oceán', 'Tichý'], ['První sestup', '1960'], ['Příkop', 'Marianský']] },
  { id: 'nil',        s: 'voda', name: 'Nil', stars: 3, stats: [['Délka', '~6 650 km'], ['Kontinent', 'Afrika'], ['Ústí', 'Středozemní moře'], ['Země v povodí', '11']] },
  { id: 'amazonka',   s: 'voda', name: 'Amazonka', stars: 3, stats: [['Délka', '~6 400 km'], ['Průtok', '~209 000 m³/s'], ['Ústí', 'Atlantik'], ['Rekord', 'největší průtok']] },
  { id: 'bajkal',     s: 'voda', name: 'Bajkal', stars: 3, stats: [['Hloubka', '1 642 m'], ['Stáří', '25–30 mil. let'], ['Země', 'Rusko'], ['Rekord', 'nejhlubší jezero']] },
  { id: 'kaspicke',   s: 'voda', name: 'Kaspické moře', stars: 2, stats: [['Plocha', '~371 000 km²'], ['Hladina', '~−28 m'], ['Pobřežní státy', '5'], ['Rekord', 'největší jezero']] },
  { id: 'salto',      s: 'voda', name: 'Salto Ángel', stars: 2, stats: [['Výška', '979 m'], ['Volný pád', '807 m'], ['Země', 'Venezuela'], ['Rekord', 'nejvyšší vodopád']] },

  { id: 'vostok',    s: 'extremy', name: 'Stanice Vostok', stars: 4, stats: [['Teplota', '−89,2 °C'], ['Datum', '21. 7. 1983'], ['Místo', 'Antarktida'], ['Rekord', 'nejnižší naměřená']] },
  { id: 'mrtve',     s: 'extremy', name: 'Mrtvé moře', stars: 3, stats: [['Hladina', '~−440 m'], ['Pokles', '>1 m ročně'], ['Slanost', '~10× oceán'], ['Rekord', 'nejnižší souš']] },
  { id: 'maunakea',  s: 'extremy', name: 'Mauna Kea', stars: 3, stats: [['Ode dna', '~10 200 m'], ['Nad mořem', '4 207 m'], ['Místo', 'Havaj'], ['Rekord', 'nejvyšší od základny']] },
  { id: 'gronsko',   s: 'extremy', name: 'Grónsko', stars: 2, stats: [['Plocha', '~2,17 mil. km²'], ['Pod ledem', '~80 %'], ['Patří', 'Dánsko'], ['Rekord', 'největší ostrov']] },
  { id: 'sahara',    s: 'extremy', name: 'Sahara', stars: 2, stats: [['Plocha', '~9,2 mil. km²'], ['Kontinent', 'Afrika'], ['Typ', 'horká poušť'], ['Rekord', 'největší horká poušť']] },
  { id: 'atacama',   s: 'extremy', name: 'Atacama', stars: 2, stats: [['Srážky', 'místy <1 mm/rok'], ['Země', 'Chile'], ['Typ', 'pobřežní poušť'], ['Rekord', 'nejsušší nepolární']] },
];
window.GOLD = [
  { id: 'serie7',    num: 1,  title: '7 dní v řadě',     sub: 'Týden bez vynechání' },
  { id: 'serie30',   num: 2,  title: '30 dní v řadě',    sub: 'Ani jeden vynechaný den' },
  { id: 'serie100',  num: 3,  title: '100 dní v řadě',   sub: 'Návyk na celý život' },
  { id: 'mistr-vyziva',    num: 4,  title: 'Mistr oblasti', sub: 'Všechny lekce z Výživy', area: 'vyziva' },
  { id: 'mistr-telo',      num: 5,  title: 'Mistr oblasti', sub: 'Všechny lekce z Lidského těla', area: 'telo' },
  { id: 'mistr-ekonomie',  num: 6,  title: 'Mistr oblasti', sub: 'Všechny lekce z Ekonomie', area: 'ekonomie' },
  { id: 'mistr-historie',  num: 7,  title: 'Mistr oblasti', sub: 'Všechny lekce z Historie', area: 'historie' },
  { id: 'mistr-veda',      num: 8,  title: 'Mistr oblasti', sub: 'Všechny lekce z Vědy', area: 'veda' },
  { id: 'mistr-cestovani', num: 9,  title: 'Mistr oblasti', sub: 'Všechny lekce z Cestování', area: 'cestovani' },
  { id: 'zvladnuto50', num: 10, title: '50 zvládnutých', sub: '50 kartiček v přihrádce 4 a výš' },
  { id: 'perfekt20',   num: 11, title: 'Perfekcionista', sub: '20 lekcí s kvízem 3/3 napoprvé' },
  { id: 'sberatel',    num: 12, title: 'Sběratel',       sub: 'Kompletní Rekordy planety' },
];
