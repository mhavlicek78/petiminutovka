// Bonusové karty. Rekordy planety se získávají za postup na novou úroveň,
// Zlatá edice za velké milníky (podmínky jsou v app.js).
window.RECORD_SERIES = {
  hory:    { name: 'Hory',    color: '#2f6fa8', sky: '#eaf1f8' },
  voda:    { name: 'Voda',    color: '#17837f', sky: '#e6f4f3' },
  extremy: { name: 'Extrémy', color: '#b8860b', sky: '#f8f1e2' },
  zvirata: { name: 'Zvířata', color: '#5f8a1a', sky: '#eef5e2' },
  vynalezy:{ name: 'Vynálezy', color: '#8a6a4a', sky: '#f4eee7' },
  vesmir:  { name: 'Vesmír',  color: '#3b3f8f', sky: '#e9eaf7' },
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

  { id: 'plejtvak', s: 'zvirata', name: 'Plejtvák obrovský', stars: 4, stats: [['Délka', 'až ~30 m'], ['Hmotnost', 'až ~150 t i víc'], ['Potrava', 'kril'], ['Rekord', 'největší živočich všech dob']] },
  { id: 'zralok',   s: 'zvirata', name: 'Žralok grónský', stars: 4, stats: [['Věk', '~400 let (odhad)'], ['Dospívá', 'kolem 150 let'], ['Moře', 'sev. Atlantik, Arktida'], ['Rekord', 'nejdéle žijící obratlovec']] },
  { id: 'sokol',    s: 'zvirata', name: 'Sokol stěhovavý', stars: 3, stats: [['Střemhlavý let', 'přes 320 km/h'], ['Výskyt', 'všude kromě Antarktidy'], ['Lov', 'ptáci za letu'], ['Rekord', 'nejrychlejší živočich']] },
  { id: 'rybak',    s: 'zvirata', name: 'Rybák dlouhoocasý', stars: 3, stats: [['Tah', '~70 000 km ročně'], ['Trasa', 'Arktida ↔ Antarktida'], ['Hmotnost', '~100 g'], ['Rekord', 'nejdelší tah']] },
  { id: 'gepard',   s: 'zvirata', name: 'Gepard', stars: 2, stats: [['Rychlost', '~100 km/h'], ['Sprint', 'jen stovky metrů'], ['Výskyt', 'Afrika, Írán'], ['Rekord', 'nejrychlejší na souši']] },
  { id: 'slon',     s: 'zvirata', name: 'Slon africký', stars: 2, stats: [['Hmotnost', 'až ~6 t'], ['Březost', '~22 měsíců'], ['Výskyt', 'Afrika'], ['Rekord', 'největší suchozemské zvíře']] },

  { id: 'www',        s: 'vynalezy', name: 'World Wide Web', stars: 4, stats: [['Návrh', '1989'], ['Autor', 'Tim Berners-Lee'], ['Místo', 'CERN'], ['Volně k užití', 'od 1993']] },
  { id: 'tranzistor', s: 'vynalezy', name: 'Tranzistor', stars: 4, stats: [['Rok', '1947'], ['Kde', 'Bell Labs'], ['Nobelova cena', '1956'], ['Dnes', 'miliardy v čipu']] },
  { id: 'letadlo',    s: 'vynalezy', name: 'Letadlo', stars: 3, stats: [['Rok', '1903'], ['Vynálezci', 'bratři Wrightové'], ['První let', '12 s, 37 m'], ['Místo', 'Kitty Hawk, USA']] },
  { id: 'telefon',    s: 'vynalezy', name: 'Telefon', stars: 3, stats: [['Patent', '1876'], ['Vynálezce', 'A. G. Bell'], ['Spor', 'Gray, Meucci'], ['Dnes', 'chytrý telefon']] },
  { id: 'kontejner',  s: 'vynalezy', name: 'Kontejner', stars: 2, stats: [['Rok', '1956'], ['Vynálezce', 'Malcom McLean'], ['Délky', '20 a 40 stop'], ['Dopad', 'levná doprava zboží']] },
  { id: 'zarovka',    s: 'vynalezy', name: 'Žárovka', stars: 2, stats: [['Rok', '1879'], ['Vynálezci', 'Edison, Swan'], ['Vlákno', 'uhlíkové'], ['Nástupce', 'LED']] },

  { id: 'voyager',  s: 'vesmir', name: 'Voyager 1', stars: 4, stats: [['Start', '1977'], ['Vzdálenost', 'přes 25 mld. km'], ['Mezihvězdný prostor', 'od 2012'], ['Rekord', 'nejvzdálenější lidský objekt']] },
  { id: 'proxima',  s: 'vesmir', name: 'Proxima Centauri', stars: 4, stats: [['Vzdálenost', '4,24 sv. let'], ['Typ', 'červený trpaslík'], ['Planeta', 'Proxima b (2016)'], ['Rekord', 'nejbližší hvězda po Slunci']] },
  { id: 'olympus',  s: 'vesmir', name: 'Olympus Mons', stars: 3, stats: [['Výška', '~22 km'], ['Průměr', '~600 km'], ['Planeta', 'Mars'], ['Rekord', 'nejvyšší sopka Sluneční soustavy']] },
  { id: 'jupiter',  s: 'vesmir', name: 'Jupiter', stars: 3, stats: [['Objem', '~1 300 Zemí'], ['Den', '~10 h'], ['Známá bouře', 'Velká rudá skvrna'], ['Rekord', 'největší planeta']] },
  { id: 'slunce',   s: 'vesmir', name: 'Slunce', stars: 2, stats: [['Podíl hmoty', '~99,86 %'], ['Povrch', '~5 500 °C'], ['Světlo k Zemi', '~8 min 20 s'], ['Stáří', '~4,6 mld. let']] },
  { id: 'mesic',    s: 'vesmir', name: 'Měsíc', stars: 2, stats: [['Vzdálenost', '~384 400 km'], ['Přistání', '20. 7. 1969'], ['Gravitace', '~1/6 Země'], ['Vzdaluje se', '~3,8 cm ročně']] },
];
const MISTR = [['vyziva', 'Výživy'], ['telo', 'Lidského těla'], ['ekonomie', 'Ekonomie'], ['historie', 'Historie'], ['veda', 'Vědy'], ['cestovani', 'Cestování'],
  ['sport', 'Sportovní vědy'], ['pomoc', 'První pomoci'], ['zdravi', 'Zdraví a prevence'], ['tech', 'Technologií a AI'], ['priroda', 'Přírody a zvířat'],
  ['vynalezy', 'Vynálezů a techniky'], ['filozofie', 'Filozofie'], ['svet', 'Světa a institucí']];
window.GOLD = [
  { id: 'serie7',    title: '7 dní v řadě',   sub: 'Týden bez vynechání' },
  { id: 'serie30',   title: '30 dní v řadě',  sub: 'Ani jeden vynechaný den' },
  { id: 'serie100',  title: '100 dní v řadě', sub: 'Návyk na celý život' },
  ...MISTR.map(([a, n]) => ({ id: 'mistr-' + a, title: 'Mistr oblasti', sub: 'Všechny lekce z ' + n, area: a })),
  { id: 'zvladnuto50', title: '50 zvládnutých', sub: '50 kartiček v přihrádce 4 a výš' },
  { id: 'perfekt20',   title: 'Perfekcionista', sub: '20 lekcí s kvízem 3/3 napoprvé' },
  { id: 'sberatel',    title: 'Sběratel',       sub: 'Kompletní Rekordy planety' },
].map((g, i) => ({ ...g, num: i + 1 }));
