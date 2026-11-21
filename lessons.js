// Knihovna lekcí – první dávka (30 lekcí). Správná odpověď je v datech vždy první, aplikace pořadí míchá.
const L = [];
// Výživa + Lidské tělo. V kvízu je správná odpověď vždy první (aplikace pořadí míchá).
L.push(
{
  id: "vy1", area: "vyziva", title: "Kolik bílkovin opravdu potřebuješ",
  text: [
    "Oficiální doporučená dávka bílkovin (RDA) je 0,8 g na kilogram tělesné hmotnosti denně. Je to ale minimum, které brání nedostatku u běžné populace, ne optimum pro člověka, který silově trénuje.",
    "Největší metaanalýza na toto téma (Morton a kol., 2018; 49 studií, 1 863 účastníků) zjistila, že přidávání bílkovin zvyšuje přírůstky svalové hmoty a síly při silovém tréninku, ale přibližně nad 1,6 g/kg/den se další přínos pro svalovou hmotu už neprojevil. Horní mez intervalu spolehlivosti sahala zhruba k 2,2 g/kg, proto se v praxi doporučuje rozmezí 1,6–2,2 g/kg.",
    "Efekt doplňování bílkovin s věkem slábne – starší lidé tak potřebují spíš víc bílkovin a hlavně pravidelný silový podnět. Bílkoviny bez tréninku svaly samy nevybudují."
  ],
  takeaway: "Pro silově trénujícího dospělého je rozumný cíl kolem 1,6 g/kg/den; víc už svalům prakticky nepomáhá.",
  evidence: "silné", evidenceNote: "Metaanalýza randomizovaných studií; horní mez je méně jistá.",
  sources: [{ name: "Morton a kol., Br J Sports Med 2018", url: "https://doi.org/10.1136/bjsports-2017-097608" }],
  quiz: [
    { q: "Nad jakým denním příjmem bílkovin se v metaanalýze Mortona (2018) přestaly zvyšovat přírůstky svalové hmoty?", o: ["~1,6 g/kg", "~0,8 g/kg", "~3,0 g/kg", "~1,0 g/kg"], why: "Bod zlomu vyšel na 1,62 g/kg/den." },
    { q: "Co vyjadřuje doporučená dávka 0,8 g/kg?", o: ["Minimum k předejití nedostatku u běžné populace", "Optimum pro sportovce", "Maximální bezpečný příjem", "Dávku pro hubnutí"], why: "RDA pokrývá potřebu téměř všech zdravých lidí, ale nezohledňuje cíle tréninku." },
    { q: "Jak podle metaanalýzy ovlivňuje věk účinek doplňování bílkovin?", o: ["S rostoucím věkem účinek klesá", "S věkem účinek roste", "Věk nemá vliv", "Účinek mají jen lidé nad 60 let"], why: "Starší svaly reagují na bílkoviny slaběji (tzv. anabolická rezistence)." }
  ],
  cards: [
    { f: "Optimální denní příjem bílkovin při silovém tréninku (podle Mortona 2018)?", b: "Kolem 1,6 g/kg/den, prakticky 1,6–2,2 g/kg." },
    { f: "Doporučená denní dávka bílkovin (RDA)?", b: "0,8 g/kg – minimum, ne optimum." }
  ]
},
{
  id: "vy2", area: "vyziva", title: "Vláknina: nenápadný hrdina",
  text: [
    "Vláknina je část rostlinné potravy, kterou tenké střevo nestráví. V tlustém střevě ji ale částečně zpracují bakterie a vznikají přitom látky prospěšné pro střevní sliznici.",
    "Série metaanalýz v časopise The Lancet (Reynolds a kol., 2019) shrnula téměř 40 let výzkumu: lidé s nejvyšším příjmem vlákniny měli o 15–30 % nižší celkovou i kardiovaskulární úmrtnost a nižší výskyt cukrovky 2. typu nebo rakoviny tlustého střeva než lidé s nejnižším příjmem. Největší snížení rizika se ukázalo při příjmu 25–29 g denně, přičemž vyšší příjem mohl přinést ještě víc.",
    "Většina lidí na světě sní méně než 20 g denně. Nejjednodušší cesta nahoru: luštěniny, celozrnné obiloviny, ovesné vločky, zelenina, ovoce, ořechy."
  ],
  takeaway: "Cíl je aspoň 25–30 g vlákniny denně; většina lidí jí přijímá méně než 20 g.",
  evidence: "střední", evidenceNote: "Převážně observační data, doplněná randomizovanými studiemi rizikových faktorů; autoři hodnotí jistotu jako střední.",
  sources: [{ name: "Reynolds a kol., The Lancet 2019", url: "https://doi.org/10.1016/S0140-6736(18)31809-9" }],
  quiz: [
    { q: "Při jakém denním příjmu vlákniny bylo snížení rizik v metaanalýze Reynoldse (2019) největší?", o: ["25–29 g", "5–10 g", "10–15 g", "60–70 g"], why: "Autoři uvádějí nejvýraznější přínos mezi 25 a 29 g denně." },
    { q: "O kolik byla nižší celková úmrtnost u lidí s nejvyšším příjmem vlákniny?", o: ["O 15–30 %", "O 1–2 %", "O 50–60 %", "Nebyla nižší"], why: "Srovnání nejvyšší a nejnižší skupiny příjmu ukázalo pokles o 15–30 %." },
    { q: "Proč je síla důkazů u vlákniny jen „střední“?", o: ["Většina dat je observačních", "Nikdo ji nezkoumal", "Výsledky studií jsou si navzájem v rozporu", "Vláknina je škodlivá"], why: "Observační studie neprokazují příčinu tak spolehlivě jako randomizované studie." }
  ],
  cards: [
    { f: "Doporučený denní příjem vlákniny?", b: "Aspoň 25–30 g; většina lidí sní méně než 20 g." },
    { f: "Nejlepší zdroje vlákniny?", b: "Luštěniny, celozrnné obiloviny, ovesné vločky, zelenina, ovoce, ořechy." }
  ]
},
{
  id: "vy3", area: "vyziva", title: "Kofein jako legální doping",
  text: [
    "Kofein je jedna z mála látek, u kterých je zlepšení sportovního výkonu opakovaně prokázané. Podle stanoviska International Society of Sports Nutrition (2021) zlepšuje výkon v dávce 3–6 mg na kg tělesné hmotnosti. Nejčastěji se bere asi 60 minut před výkonem. Nejvýraznější a nejstabilnější efekt má u vytrvalostních výkonů, pomáhá ale i síle a sprintu.",
    "Vyšší dávky (kolem 9 mg/kg) přinášejí hlavně vedlejší účinky – úzkost, bušení srdce, horší spánek – a výkon už dál nezlepšují. Lidé se navíc liší rychlostí, jakou kofein odbourávají, a to je zčásti dané geneticky.",
    "Pro zdravé dospělé považuje EFSA za bezpečné do 400 mg kofeinu denně (a do 200 mg v jedné dávce). Káva přitom obsahuje velmi rozdílné množství kofeinu podle druhu a přípravy."
  ],
  takeaway: "3–6 mg/kg asi hodinu před výkonem funguje; víc už jen zhoršuje vedlejší účinky, hlavně spánek.",
  evidence: "silné", evidenceNote: "Desítky randomizovaných studií a metaanalýz; účinek se mezi lidmi liší.",
  sources: [
    { name: "ISSN position stand: caffeine, JISSN 2021", url: "https://doi.org/10.1186/s12970-020-00383-4" },
    { name: "EFSA: Scientific opinion on the safety of caffeine, 2015", url: "https://doi.org/10.2903/j.efsa.2015.4102" }
  ],
  quiz: [
    { q: "Jaká dávka kofeinu podle ISSN spolehlivě zlepšuje výkon?", o: ["3–6 mg/kg", "0,5 mg/kg", "10–15 mg/kg", "Jakákoli dávka, nezáleží na ní"], why: "Účinné rozmezí je 3–6 mg/kg, minimální účinná dávka může být kolem 2 mg/kg." },
    { q: "Kolik kofeinu denně považuje EFSA za bezpečné pro zdravého dospělého?", o: ["Do 400 mg", "Do 100 mg", "Do 1 000 mg", "Žádné množství není bezpečné"], why: "EFSA uvádí 400 mg/den a 200 mg v jedné dávce." },
    { q: "U jakého typu výkonu má kofein nejkonzistentnější efekt?", o: ["Vytrvalostní", "Jen u šachů", "Jen u maximální síly", "U žádného"], why: "Stanovisko ISSN uvádí, že nejkonzistentnější středně velké až velké přínosy má kofein u aerobní vytrvalosti." }
  ],
  cards: [
    { f: "Účinná dávka kofeinu pro výkon a kdy ji vzít?", b: "3–6 mg/kg, typicky 60 min před výkonem." },
    { f: "Bezpečný denní příjem kofeinu (EFSA)?", b: "Do 400 mg/den, max. 200 mg najednou." }
  ]
},
{
  id: "vy4", area: "vyziva", title: "Ultra-zpracované potraviny a experiment NIH",
  text: [
    "Klasifikace NOVA dělí potraviny podle míry zpracování. Ultra-zpracované potraviny obsahují složky typické pro průmyslovou výrobu – ztužené tuky, glukózo-fruktózový sirup, aromata nebo emulgátory.",
    "Až do roku 2019 existovaly hlavně observační studie. Pak Kevin Hall z amerických NIH zavřel 20 dobrovolníků na metabolickou jednotku: dva týdny dostávali ultra-zpracovanou stravu a dva týdny minimálně zpracovanou. Nabízená jídla měla stejný obsah kalorií, cukru, tuku, vlákniny i makroživin a lidé mohli jíst, kolik chtěli.",
    "Výsledek: na ultra-zpracované stravě snědli v průměru asi o 500 kcal denně víc, jedli rychleji a přibírali. Na minimálně zpracované stravě hubli. Studie byla malá a krátká, ale jako první ukázala příčinnou souvislost, nejen korelaci."
  ],
  takeaway: "Ultra-zpracované jídlo svádí k přejídání – v experimentu NIH to bylo asi +500 kcal denně při stejné nabídce živin.",
  evidence: "střední", evidenceNote: "Kvalitní randomizovaná studie, ale jen 20 lidí a 2 týdny na každou stravu.",
  sources: [{ name: "Hall a kol., Cell Metabolism 2019", url: "https://doi.org/10.1016/j.cmet.2019.05.008" }],
  quiz: [
    { q: "O kolik kalorií denně víc snědli účastníci na ultra-zpracované stravě?", o: ["Asi o 500 kcal", "Asi o 50 kcal", "Asi o 2 000 kcal", "Snědli méně"], why: "Průměrný rozdíl byl přibližně 500 kcal denně." },
    { q: "Co dělalo studii Halla výjimečnou?", o: ["Byla to randomizovaná studie s kontrolovanou stravou", "Měla milion účastníků", "Trvala 20 let", "Používala jen dotazníky"], why: "Šlo o první randomizovanou kontrolovanou studii, která mohla ukázat příčinnou souvislost." },
    { q: "Jak se lišila nabízená jídla v obou typech stravy?", o: ["Mírou zpracování; kalorie a makroživiny byly srovnatelné", "Ultra-zpracovaná měla dvojnásobek kalorií", "Minimálně zpracovaná neobsahovala tuk", "Nijak"], why: "Jídla byla záměrně srovnaná podle kalorií, cukru, tuku, vlákniny i makroživin." }
  ],
  cards: [
    { f: "Hlavní výsledek studie NIH (Hall 2019) o ultra-zpracovaných potravinách?", b: "Při volném příjmu +~500 kcal/den a přírůstek hmotnosti oproti minimálně zpracované stravě." },
    { f: "Co je klasifikace NOVA?", b: "Systém, který dělí potraviny podle míry zpracování; nejvyšší skupinou jsou ultra-zpracované potraviny." }
  ]
},
{
  id: "vy5", area: "vyziva", title: "Pitný režim bez mýtů",
  text: [
    "Pravidlo „osm sklenic vody denně“ nemá pevný vědecký základ. EFSA doporučuje celkový příjem vody kolem 2,5 l denně pro muže a 2,0 l pro ženy – včetně vody z jídla, které obvykle pokryje zhruba pětinu potřeby. Káva a čaj se do příjmu také počítají.",
    "Pro výkon je důležitější něco jiného: ztráta tekutin přesahující asi 2 % tělesné hmotnosti může zhoršit vytrvalostní výkon, zvlášť v teple (stanovisko ACSM). Při dlouhém běhu v horku tak má smysl pít podle plánu, ne jen podle žízně.",
    "Opačný extrém je také rizikový: nadměrné pití čisté vody při velmi dlouhých výkonech může vést k hyponatrémii (nízké hladině sodíku v krvi). Praktický test: zvaž se před tréninkem a po něm – úbytek o 1 kg znamená zhruba 1 litr vypocené tekutiny."
  ],
  takeaway: "Žádné univerzální sklenice; při dlouhém výkonu v teple hlídej, aby ztráta tekutin nepřesáhla ~2 % hmotnosti, ale nepřepíjej se.",
  evidence: "střední", evidenceNote: "Doporučení odborných společností; hranice 2 % je orientační a mezi jednotlivci se liší.",
  sources: [
    { name: "EFSA: Dietary reference values for water, 2010", url: "https://doi.org/10.2903/j.efsa.2010.1459" },
    { name: "ACSM Position Stand: Exercise and Fluid Replacement (Sawka a kol., 2007)" }
  ],
  quiz: [
    { q: "Jaký úbytek tělesné hmotnosti vlivem pocení začíná zhoršovat vytrvalostní výkon?", o: ["Asi nad 2 %", "Už 0,1 %", "Až nad 15 %", "Pocení výkon nikdy neovlivní"], why: "ACSM uvádí, že ztráta nad ~2 % může snížit aerobní výkon, hlavně v teple." },
    { q: "Jaký celkový denní příjem vody doporučuje EFSA dospělému muži?", o: ["Asi 2,5 l včetně vody z jídla", "Přesně 8 sklenic čisté vody", "5 l čisté vody", "1 l"], why: "2,5 l pro muže a 2,0 l pro ženy, včetně vody z potravy." },
    { q: "Jaké riziko hrozí při nadměrném pití čisté vody během velmi dlouhého výkonu?", o: ["Hyponatrémie", "Hypertenze", "Anémie", "Žádné"], why: "Ředění sodíku v krvi (hyponatrémie) může být nebezpečné." }
  ],
  cards: [
    { f: "Od jakého úbytku tekutin klesá vytrvalostní výkon?", b: "Orientačně nad ~2 % tělesné hmotnosti." },
    { f: "Jak rychle odhadnout ztrátu potem?", b: "Zvážit se před tréninkem a po něm: 1 kg ≈ 1 litr tekutin." }
  ]
},
{
  id: "vy6", area: "vyziva", title: "Kreatin: nejlépe prozkoumaný doplněk",
  text: [
    "Kreatin je látka, kterou si tělo vyrábí samo a kterou přijímáme hlavně z masa a ryb. Ve svalech slouží jako rychlá zásoba energie pro krátké, intenzivní úsilí – sprinty, zvedání, skoky.",
    "Podle stanoviska ISSN (Kreider a kol., 2017) je kreatin-monohydrát nejúčinnější dostupný doplněk pro zvýšení vysoce intenzivní výkonnosti a přírůstků svalové hmoty při tréninku. U zdravých lidí se při doporučeném dávkování považuje za bezpečný.",
    "Dávkování: buď nasycovací fáze (zhruba 0,3 g/kg denně po 5–7 dní), nebo jednodušeji 3–5 g denně – svaly se pak nasytí zhruba za 3–4 týdny. Na načasování příliš nezáleží, rozhoduje dlouhodobá pravidelnost. Na začátku může přibýt 1–2 kg hmotnosti díky vodě zadržené ve svalech."
  ],
  takeaway: "3–5 g kreatin-monohydrátu denně, každý den; plný efekt zhruba po 3–4 týdnech.",
  evidence: "silné", evidenceNote: "Stovky studií; nejlépe zdokumentovaný sportovní doplněk.",
  sources: [{ name: "Kreider a kol., ISSN position stand: creatine, JISSN 2017", url: "https://doi.org/10.1186/s12970-017-0173-z" }],
  quiz: [
    { q: "Jaká je běžná udržovací denní dávka kreatin-monohydrátu?", o: ["3–5 g", "50 g", "0,1 g", "30 g"], why: "3–5 g denně stačí k nasycení svalů během několika týdnů." },
    { q: "Pro jaký typ úsilí je kreatin nejdůležitější?", o: ["Krátké, vysoce intenzivní úsilí", "Spánek", "Trávení tuků", "Velmi pomalou chůzi"], why: "Kreatin-fosfát rychle obnovuje ATP při krátkých intenzivních výkonech." },
    { q: "Proč může po začátku užívání kreatinu přibýt 1–2 kg?", o: ["Zadržením vody ve svalech", "Přírůstkem tuku", "Otokem kloubů", "Nemůže"], why: "Kreatin osmoticky váže vodu ve svalových buňkách." }
  ],
  cards: [
    { f: "Udržovací dávka kreatinu a kdy se svaly nasytí?", b: "3–5 g denně, nasycení zhruba za 3–4 týdny." },
    { f: "Na co je kreatin nejúčinnější?", b: "Vysoce intenzivní krátký výkon a přírůstek svalové hmoty při tréninku." }
  ]
},
{
  id: "te1", area: "telo", title: "Spánek: kolik a proč",
  text: [
    "Americké odborné společnosti pro spánkovou medicínu (AASM a SRS) se v roce 2015 shodly, že dospělí by měli pravidelně spát 7 a více hodin. Dlouhodobě kratší spánek je spojený s vyšším rizikem obezity, cukrovky, vysokého tlaku, srdečních onemocnění, deprese a s horší imunitou.",
    "Spánek probíhá v cyklech zhruba po 90 minutách. Hluboký spánek (fáze N3) převažuje v první polovině noci a souvisí s fyzickou regenerací a uvolňováním růstového hormonu. REM spánku přibývá k ránu a je důležitý pro paměť a emoce. Když si zkrátíš noc o ranní hodiny, přicházíš hlavně o REM.",
    "Nedostatek spánku zhoršuje i sportovní výkon, vnímání námahy a rozhodování – přitom lidé po několika krátkých nocích vlastní pokles výkonu často podceňují."
  ],
  takeaway: "7+ hodin pravidelně; ranní hodiny spánku jsou hlavně REM, takže časné vstávání ubírá z jiné části spánku než pozdní usínání.",
  evidence: "silné", evidenceNote: "Konsenzus odborných společností na základě rozsáhlé literatury.",
  sources: [{ name: "Watson a kol., Recommended amount of sleep for a healthy adult, Sleep 2015", url: "https://doi.org/10.5665/sleep.4716" }],
  quiz: [
    { q: "Kolik spánku doporučují AASM a SRS dospělým?", o: ["7 a více hodin", "Přesně 5 hodin", "4–5 hodin", "10 a více hodin"], why: "Konsenzus z roku 2015 doporučuje pravidelně 7+ hodin." },
    { q: "Ve které části noci převažuje hluboký spánek?", o: ["V první polovině", "K ránu", "Rovnoměrně celou noc", "Jen při odpoledním spánku"], why: "N3 dominuje v prvních cyklech, REM přibývá k ránu." },
    { q: "O jakou fázi spánku přicházíš hlavně, když vstáváš dřív?", o: ["REM", "Hluboký spánek N3", "Žádnou", "Usínání"], why: "Delší úseky REM jsou soustředěné do posledních cyklů noci." }
  ],
  cards: [
    { f: "Délka jednoho spánkového cyklu?", b: "Přibližně 90 minut." },
    { f: "Kdy v noci převažuje hluboký spánek a kdy REM?", b: "Hluboký (N3) v první polovině noci, REM k ránu." }
  ]
},
{
  id: "te2", area: "telo", title: "VO₂max: kondice jako ukazatel délky života",
  text: [
    "VO₂max je maximální množství kyslíku, které tělo dokáže využít – nejlepší jednotlivé měřítko aerobní (kardiorespirační) zdatnosti.",
    "Studie Cleveland Clinic (Mandsager a kol., 2018) sledovala 122 007 lidí po zátěžovém testu na běžícím pásu. Úmrtnost klesala s každou vyšší skupinou zdatnosti a horní hranice přínosu se nenašla. Lidé s nejnižší zdatností měli po zohlednění dalších faktorů zhruba pětkrát vyšší riziko úmrtí než „elitní“ skupina (nejlepší ~2,3 % pro svůj věk a pohlaví). Nízká kondice byla podobně rizikovým faktorem jako kouření nebo cukrovka.",
    "VO₂max s věkem klesá, ale dá se trénovat v každém věku – kombinace hodně objemu v nízké intenzitě a menšího podílu intervalů. Hodnoty z chytrých hodinek jsou jen odhad, nejsou to laboratorní měření; užitečné jsou hlavně pro sledování trendu."
  ],
  takeaway: "Kardiorespirační zdatnost patří k nejsilnějším ukazatelům dlouhověkosti a horní mez přínosu nebyla nalezena.",
  evidence: "silné", evidenceNote: "Velmi velká observační kohorta, konzistentní s dalšími studiemi; příčinnost nelze zcela prokázat.",
  sources: [{ name: "Mandsager a kol., JAMA Network Open 2018", url: "https://doi.org/10.1001/jamanetworkopen.2018.3605" }],
  quiz: [
    { q: "Jak se lišilo riziko úmrtí mezi skupinou s nejnižší a „elitní“ zdatností?", o: ["Asi 5× vyšší u nejnižší", "Nijak", "O 5 % vyšší", "Elitní skupina měla vyšší riziko"], why: "Upravený poměr rizik low vs. elite vyšel přibližně 5,0." },
    { q: "Našla studie horní hranici, za kterou už vyšší kondice nepřináší nic?", o: ["Ne", "Ano, u průměrné kondice", "Ano, u lidí nad 70 let", "Studie to nezkoumala"], why: "Autoři výslovně uvádějí, že horní limit přínosu nepozorovali." },
    { q: "Jak brát VO₂max z chytrých hodinek?", o: ["Jako odhad vhodný ke sledování trendu", "Jako přesné laboratorní měření", "Jako diagnózu", "Jako zbytečný údaj"], why: "Hodinky VO₂max odhadují z tepu a tempa; přesnost je omezená, ale trend je užitečný." }
  ],
  cards: [
    { f: "Co měří VO₂max?", b: "Maximální množství kyslíku, které tělo dokáže využít – měřítko aerobní zdatnosti." },
    { f: "Hlavní zjištění Mandsager 2018?", b: "Vyšší kondice = nižší úmrtnost bez horní hranice; nejnižší vs. elitní skupina ~5× vyšší riziko." }
  ]
},
{
  id: "te3", area: "telo", title: "Síla stisku a stárnutí svalů",
  text: [
    "Se stárnutím ubývá svalové hmoty i síly – tento proces se nazývá sarkopenie. Odhady se liší, často se uvádí ztráta svalové hmoty zhruba 3–8 % za dekádu po třicítce a zrychlení po šedesátce. Síla přitom obvykle klesá ještě rychleji než samotná hmota.",
    "Studie PURE (Leong a kol., The Lancet 2015) změřila sílu stisku ruky u téměř 140 000 lidí ze 17 zemí. Každých 5 kg nižší síly stisku znamenalo o 16 % vyšší riziko úmrtí z jakékoli příčiny. Jako ukazatel úmrtnosti fungovala síla stisku lépe než systolický krevní tlak.",
    "Dobrá zpráva: svaly reagují na silový trénink v každém věku. V klasické studii (Fiatarone a kol., 1990) devadesátníci po 8 týdnech silového tréninku výrazně zvýšili sílu nohou."
  ],
  takeaway: "Síla je ukazatel zdraví, ne jen výkonu. Síla stisku je jednoduchý a silný prediktor úmrtnosti a silový trénink funguje v každém věku.",
  evidence: "silné", evidenceNote: "Velká mezinárodní kohorta (souvislost, ne nutně příčina); rozsah ztráty svalů za dekádu je jen odhad.",
  sources: [
    { name: "Leong a kol., The Lancet 2015 (PURE)", url: "https://pubmed.ncbi.nlm.nih.gov/25982160/" },
    { name: "Fiatarone a kol., JAMA 1990" }
  ],
  quiz: [
    { q: "O kolik stoupalo riziko úmrtí s každými 5 kg nižší síly stisku (PURE)?", o: ["O 16 %", "O 1 %", "O 160 %", "Neměnilo se"], why: "Poměr rizik byl 1,16 na každých 5 kg nižší síly." },
    { q: "Jak se jmenuje úbytek svalové hmoty a síly s věkem?", o: ["Sarkopenie", "Osteoporóza", "Atrofie zraku", "Hypertrofie"], why: "Sarkopenie = věkem podmíněná ztráta svalů; osteoporóza se týká kostí." },
    { q: "Co ukázala studie Fiatarone (1990) u devadesátníků?", o: ["Silový trénink výrazně zvýšil sílu", "Ve vysokém věku se síla zvýšit nedá", "Trénink zvýšil úrazovost", "Pomohla jen strava"], why: "Svaly reagují na silový podnět i ve velmi vysokém věku." }
  ],
  cards: [
    { f: "Síla stisku a úmrtnost (PURE 2015)?", b: "Každých −5 kg ≈ +16 % riziko úmrtí; silnější prediktor než systolický tlak." },
    { f: "Co je sarkopenie?", b: "Úbytek svalové hmoty a síly s věkem; síla klesá rychleji než hmota." }
  ]
},
{
  id: "te4", area: "telo", title: "Adaptace: sval roste mezi tréninky",
  text: [
    "Trénink sám o sobě je stres, který dočasně snižuje výkonnost. Zlepšení – adaptace – vzniká až během zotavení, kdy tělo odpovídá na podnět a připravuje se zvládnout ho příště lépe.",
    "Po silovém tréninku zůstává zvýšená syntéza svalových bílkovin (proces stavby svalu) zhruba 24–48 hodin, u netrénovaných déle, u trénovaných kratší dobu. Proto se pro růst svalů vyplatí trénovat každou svalovou partii zhruba dvakrát týdně a rozložit bílkoviny do několika jídel během dne.",
    "Bez dostatečného zotavení se únava sčítá, výkonnost dlouhodobě klesá a roste riziko zranění i přetížení. Regenerace – spánek, jídlo, lehčí dny – je tedy součástí tréninku. Měřit ji pomáhá kombinace objektivních dat (klidový tep, HRV) a subjektivního pocitu."
  ],
  takeaway: "Trénink dává podnět, zlepšení přichází v zotavení. Bez regenerace nevzniká adaptace, jen únava.",
  evidence: "silné", evidenceNote: "Základní princip fyziologie zátěže; přesná délka zvýšené syntézy svalových bílkovin se liší podle studie a trénovanosti.",
  sources: [
    { name: "MacDougall a kol., Can J Appl Physiol 1995; Phillips a kol., Am J Physiol 1997" },
    { name: "Schoenfeld a kol., Sports Med 2016 – metaanalýza frekvence tréninku" }
  ],
  quiz: [
    { q: "Jak dlouho zůstává po silovém tréninku zvýšená syntéza svalových bílkovin?", o: ["Zhruba 24–48 hodin", "5 minut", "2 týdny", "Vůbec se nezvyšuje"], why: "Studie ukazují zvýšení trvající řádově 1–2 dny." },
    { q: "Kdy vzniká vlastní zlepšení výkonnosti?", o: ["Během zotavení po tréninku", "Jen během samotného tréninku", "Jen ve spánku před závodem", "Nikdy"], why: "Trénink je podnět; adaptace probíhá v době zotavení." },
    { q: "Jak často trénovat jednu svalovou partii, má-li co nejlépe růst?", o: ["Zhruba 2× týdně", "1× měsíčně", "Každé 2 hodiny", "Nezáleží na tom"], why: "Metaanalýza Schoenfelda (2016) ukázala výhodu frekvence 2× týdně oproti 1× týdně." }
  ],
  cards: [
    { f: "Délka zvýšené syntézy svalových bílkovin po silovém tréninku?", b: "Zhruba 24–48 h (u trénovaných kratší)." },
    { f: "Proč je regenerace součást tréninku?", b: "Adaptace vzniká během zotavení; bez něj se jen sčítá únava." }
  ]
},
{
  id: "te5", area: "telo", title: "HRV: co ti hodinky a prsten říkají",
  text: [
    "Variabilita srdeční frekvence (HRV) vyjadřuje kolísání času mezi jednotlivými údery srdce. Vyšší HRV obecně odráží převahu parasympatiku – části nervového systému pro „odpočinek a trávení“.",
    "HRV je velmi individuální: srovnávat své číslo s jinými lidmi nedává smysl. Užitečný je trend vůči vlastnímu průměru za delší období (např. 7 dní proti 30–60 dnům). Krátkodobě HRV snižuje alkohol, pozdní jídlo, nemoc, stres, horko, nedostatek spánku a také tvrdý trénink.",
    "Studie s tréninkem řízeným podle HRV (intenzita se upravuje podle ranních hodnot) ukazují mírný přínos pro vytrvalostní výkon oproti pevnému plánu a méně nechtěné únavy. Efekt ale není velký a HRV je jen jeden signál – rozhodovat by se mělo spolu s klidovým tepem, spánkem a pocitem."
  ],
  takeaway: "Sleduj trend HRV vůči vlastnímu průměru, ne jednotlivé ráno a ne srovnání s ostatními.",
  evidence: "střední", evidenceNote: "Fyziologický základ je pevný; přínos HRV pro řízení tréninku je v metaanalýzách mírný a nejednotný.",
  sources: [
    { name: "Plews a kol., Training adaptation and heart rate variability in elite endurance athletes, Sports Med 2013" },
    { name: "Granero-Gallegos a kol., HRV-guided training: systematický přehled a metaanalýza, IJERPH 2020" }
  ],
  quiz: [
    { q: "Jak nejlépe interpretovat HRV?", o: ["Jako trend vůči vlastnímu dlouhodobému průměru", "Srovnáním s kamarády", "Podle jediného rána", "Jako přesnou diagnózu"], why: "HRV je vysoce individuální a den ode dne kolísá." },
    { q: "Co obvykle krátkodobě HRV snižuje?", o: ["Alkohol, nemoc, nedostatek spánku", "Kvalitní spánek", "Lehký den volna", "Nic, HRV je stabilní"], why: "Všechny tyto faktory zvyšují zátěž sympatiku." },
    { q: "Jak silný je důkaz, že trénink řízený podle HRV zlepšuje výkon?", o: ["Mírný a nejednotný přínos", "Obrovský, vždy funguje", "Prokázaně škodí", "Neexistují žádné studie"], why: "Metaanalýzy ukazují spíš malé přínosy a jednotlivé studie se liší." }
  ],
  cards: [
    { f: "Co vyjadřuje vyšší HRV?", b: "Obecně převahu parasympatiku (stav klidu a regenerace)." },
    { f: "Jak číst HRV?", b: "Krátkodobý průměr (7 dní) proti dlouhodobému (30–60 dní), ne jednotlivá rána." }
  ]
},
{
  id: "te6", area: "telo", title: "Mikrobiom: bakterií není 10× víc",
  text: [
    "Desítky let se opakovalo, že bakterií je v lidském těle desetkrát víc než lidských buněk. Číslo vycházelo z hrubého odhadu ze 70. let.",
    "Sender, Fuchs a Milo (2016) vše přepočítali na „referenčního muže“ (70 kg, 20–30 let): v těle má asi 30 bilionů lidských buněk a asi 38 bilionů bakterií – poměr je tedy zhruba 1 : 1. Bakterie váží dohromady jen asi 0,2 kg. Téměř všechny žijí v tlustém střevě a autoři s nadsázkou poznamenali, že jedno vyprázdnění může poměr převrátit ve prospěch lidských buněk.",
    "Zajímavost navíc: asi 90 % lidských buněk tvoří krvinky, hlavně červené. Přínosnost mikrobiomu tím ale nijak neklesá – ovlivňuje trávení, imunitu i metabolismus a nejvíc ho živí právě vláknina."
  ],
  takeaway: "Bakterií je v těle zhruba stejně jako lidských buněk (~38 vs. ~30 bilionů), ne desetkrát víc.",
  evidence: "silné", evidenceNote: "Pečlivý výpočet z nejlepších dostupných dat; u jednotlivých lidí se čísla liší.",
  sources: [{ name: "Sender, Fuchs, Milo, PLOS Biology 2016", url: "https://doi.org/10.1371/journal.pbio.1002533" }],
  quiz: [
    { q: "Jaký je podle Sendera a kol. (2016) poměr bakterií a lidských buněk v těle?", o: ["Zhruba 1 : 1", "10 : 1", "100 : 1", "1 : 100"], why: "Asi 38 bilionů bakterií na 30 bilionů lidských buněk." },
    { q: "Kde žije naprostá většina bakterií v těle?", o: ["V tlustém střevě", "Na kůži", "V plicích", "V krvi"], why: "Obsah tlustého střeva převyšuje všechny ostatní lokality o řády." },
    { q: "Které buňky tvoří většinu lidských buněk v těle?", o: ["Krvinky (hlavně červené)", "Svalové buňky", "Neurony", "Kožní buňky"], why: "Buňky krvetvorné linie tvoří asi 90 % počtu lidských buněk." }
  ],
  cards: [
    { f: "Kolik bakterií a lidských buněk má referenční člověk?", b: "~38 bilionů bakterií, ~30 bilionů lidských buněk (≈1 : 1)." },
    { f: "Kolik váží všechny bakterie v těle?", b: "Asi 0,2 kg." }
  ]
}
);
L.push(
{
  id: "ek1", area: "ekonomie", title: "Složené úročení a pravidlo 72",
  text: [
    "Složené úročení znamená, že úrok se připisuje nejen z původní částky, ale i z dříve připsaných úroků. Růst tak není přímka, ale zrychlující se křivka – a rozhoduje hlavně čas.",
    "Rychlý odhad nabízí pravidlo 72: vyděl 72 roční procentní sazbou a dostaneš přibližný počet let, za které se částka zdvojnásobí. Při 6 % ročně je to asi 12 let, při 8 % asi 9 let. Pro sazby kolem 6–10 % je odhad velmi přesný.",
    "Pravidlo funguje i obráceně, u nákladů a inflace: při inflaci 3 % ročně se ceny zdvojnásobí zhruba za 24 let. Stejně tak se „zdvojují“ dluhy s vysokým úrokem – u kreditní karty s 24 % za pouhé 3 roky."
  ],
  takeaway: "72 ÷ úrok v % ≈ počet let do zdvojnásobení. Funguje pro výnosy, inflaci i dluhy.",
  evidence: "silné", evidenceNote: "Matematika, ne empirie; pravidlo 72 je přibližné.",
  sources: [{ name: "Standardní finanční matematika (např. Investopedia: Rule of 72)" }],
  quiz: [
    { q: "Za kolik let se zhruba zdvojnásobí investice s výnosem 8 % ročně?", o: ["Asi za 9 let", "Asi za 72 let", "Asi za 3 roky", "Asi za 20 let"], why: "72 ÷ 8 = 9." },
    { q: "Za jak dlouho se při inflaci 3 % ročně zdvojnásobí ceny?", o: ["Asi za 24 let", "Asi za 3 roky", "Asi za 72 let", "Nikdy"], why: "72 ÷ 3 = 24." },
    { q: "Co je u složeného úročení nejdůležitější proměnná vedle sazby?", o: ["Čas", "Barva bankovky", "Den v týdnu", "Název banky"], why: "Exponenciální růst se nejvíc projeví na dlouhém horizontu." }
  ],
  cards: [
    { f: "Pravidlo 72?", b: "72 ÷ roční sazba v % ≈ počet let do zdvojnásobení." },
    { f: "Dluh s úrokem 24 % – za jak dlouho se zdvojnásobí?", b: "Zhruba za 3 roky (72 ÷ 24)." }
  ]
},
{
  id: "ek2", area: "ekonomie", title: "Reálný výnos: inflace jako tichá daň",
  text: [
    "Nominální výnos je číslo, které vidíš na výpisu. Reálný výnos říká, o kolik ti doopravdy vzrostla kupní síla. Přibližně platí: reálný výnos ≈ nominální výnos − inflace (tzv. Fisherova rovnice).",
    "Spořicí účet s úrokem 3 % při inflaci 4 % tedy znamená reálnou ztrátu asi 1 % ročně, přestože zůstatek roste. Hotovost „pod polštářem“ ztrácí kupní sílu celou výší inflace.",
    "Proto se dlouhodobé peníze, které nebudeš potřebovat roky, obvykle investují do aktiv s vyšším očekávaným reálným výnosem (např. akcie), za cenu vyššího kolísání. Krátkodobá rezerva naopak patří na bezpečné a dostupné místo, i když reálně trochu ztrácí – jejím úkolem je dostupnost, ne výnos."
  ],
  takeaway: "Reálný výnos ≈ nominální výnos − inflace. Rostoucí zůstatek ještě neznamená, že bohatneš.",
  evidence: "silné", evidenceNote: "Ekonomická definice; přesný vzorec je (1+n)/(1+i) − 1.",
  sources: [{ name: "Irving Fisher, The Theory of Interest (1930); ČNB – vysvětlení inflace" }],
  quiz: [
    { q: "Spořicí účet nese 3 %, inflace je 4 %. Jaký je přibližný reálný výnos?", o: ["−1 %", "+7 %", "+3 %", "+1 %"], why: "3 % − 4 % = −1 % kupní síly ročně." },
    { q: "Co vyjadřuje reálný výnos?", o: ["Změnu kupní síly", "Číslo na bankovním výpisu", "Výši poplatků", "Daň z příjmu"], why: "Reálný výnos očišťuje nominální výnos o inflaci." },
    { q: "Jaký je hlavní úkol krátkodobé finanční rezervy?", o: ["Dostupnost a bezpečí", "Maximální výnos", "Spekulace", "Daňová optimalizace"], why: "Rezerva má být po ruce, když je potřeba; výnos je až druhořadý." }
  ],
  cards: [
    { f: "Fisherova rovnice (zjednodušeně)?", b: "Reálný výnos ≈ nominální výnos − inflace." },
    { f: "Kolik ztrácí hotovost v šuplíku?", b: "Kupní sílu v celé výši inflace." }
  ]
},
{
  id: "ek3", area: "ekonomie", title: "Náklady obětované příležitosti",
  text: [
    "Každé rozhodnutí má skrytou cenu: hodnotu nejlepší alternativy, které ses vzdal. Ekonomové jí říkají náklady obětované příležitosti (opportunity cost).",
    "Příklad: hodina, kterou majitel firmy stráví ruční přípravou faktur, nestojí „nic“ – stojí ji jednání s klientem, trénink nebo čas s rodinou, které místo toho mohly proběhnout. Podobně peníze vázané v nevyužitém majetku přicházejí o výnos, který by mohly mít jinde.",
    "Psychologické výzkumy ukazují, že lidé na alternativy často spontánně nemyslí (Frederick a kol., 2009). Pomáhá jednoduchá otázka: „Co jiného bych za tyto peníze nebo tento čas mohl mít?“ Už samotné připomenutí alternativy znatelně mění rozhodnutí."
  ],
  takeaway: "Skutečná cena rozhodnutí = nejlepší alternativa, které se vzdáváš. Ptej se: co jiného bych za to mohl mít?",
  evidence: "silné", evidenceNote: "Základní ekonomický koncept; psychologická část (zanedbávání alternativ) je experimentálně doložená.",
  sources: [{ name: "Frederick, Novemsky a kol., Opportunity Cost Neglect, Journal of Consumer Research 2009" }],
  quiz: [
    { q: "Co jsou náklady obětované příležitosti?", o: ["Hodnota nejlepší alternativy, které ses vzdal", "Účetní odpisy", "Cena v akci", "Poplatek bance"], why: "Jde o ušlý užitek z nejlepší nezvolené možnosti." },
    { q: "Co pomáhá omezit zanedbávání alternativ?", o: ["Výslovně se zeptat, co jiného bych za to mohl mít", "Rozhodovat rychleji", "Ignorovat čas", "Dívat se jen na cenu"], why: "Připomenutí alternativ v experimentech měnilo rozhodnutí." },
    { q: "Hodina strávená rutinní administrativou místo jednání s klientem…", o: ["…má skrytou cenu v podobě ušlé příležitosti", "…je zdarma", "…má cenu jen tehdy, když se za ni platí", "…nemá žádnou ekonomickou hodnotu"], why: "Čas má alternativní využití, takže má i cenu." }
  ],
  cards: [
    { f: "Opportunity cost jednou větou?", b: "Cena rozhodnutí = hodnota nejlepší alternativy, které se vzdáš." },
    { f: "Kontrolní otázka proti zanedbání alternativ?", b: "„Co jiného bych za tyto peníze nebo tento čas mohl mít?“" }
  ]
},
{
  id: "ek4", area: "ekonomie", title: "Past utopených nákladů",
  text: [
    "Utopené náklady (sunk costs) jsou peníze, čas nebo úsilí, které jsi už vynaložil a nedostaneš je zpět. Racionálně by neměly ovlivňovat rozhodnutí o budoucnosti – ta má záviset jen na budoucích přínosech a nákladech.",
    "Lidé je přesto zohledňují. V klasickém experimentu (Arkes a Blumer, 1985) si účastníci omylem koupili dva lyžařské zájezdy na stejný víkend: dražší, o kterém věděli, že je bude bavit méně, a levnější, který by je bavil víc. Většina se rozhodla jet na ten dražší – protože „za něj dala víc“.",
    "V praxi se to projevuje dokončováním neperspektivních projektů, setrváváním u nevýhodných zakázek nebo dojídáním talíře, i když už nemáš hlad. Pomáhá otázka: „Kdybych začínal dnes od nuly, rozhodl bych se stejně?“"
  ],
  takeaway: "Co je utraceno, je utraceno. Rozhoduj jen podle budoucích nákladů a přínosů: kdybys začínal dnes, šel bys do toho?",
  evidence: "silné", evidenceNote: "Opakovaně doložené v experimentech i v praxi; síla efektu se liší podle situace.",
  sources: [{ name: "Arkes & Blumer, The Psychology of Sunk Cost, Organizational Behavior and Human Decision Processes 1985" }],
  quiz: [
    { q: "Co jsou utopené náklady?", o: ["Již vynaložené a nevratné náklady", "Budoucí náklady", "Náklady na lodní dopravu", "Skryté daně"], why: "Jde o minulé výdaje, které už nelze získat zpět." },
    { q: "Co většina účastníků udělala v experimentu s lyžařskými zájezdy?", o: ["Zvolila dražší zájezd, přestože ji měl bavit méně", "Zvolila levnější zájezd", "Nejela nikam", "Oba zájezdy zrušila"], why: "Vyšší vynaložená cena převážila nad očekávaným užitkem." },
    { q: "Jaká otázka pomáhá proti pasti utopených nákladů?", o: ["Kdybych začínal dnes od nuly, rozhodl bych se stejně?", "Kolik jsem už do toho dal?", "Co tomu řeknou ostatní?", "Jak to vrátit zpátky?"], why: "Přesouvá pozornost na budoucí náklady a přínosy." }
  ],
  cards: [
    { f: "Pravidlo pro utopené náklady?", b: "Neovlivňují racionální rozhodnutí; rozhodují jen budoucí náklady a přínosy." },
    { f: "Test proti pasti utopených nákladů?", b: "„Kdybych začínal dnes od nuly, rozhodl bych se stejně?“" }
  ]
},
{
  id: "ek5", area: "ekonomie", title: "Averze ke ztrátě",
  text: [
    "Teorie vyhlídek (prospect theory) Kahnemana a Tverského (1979) popsala, že ztráty vnímáme silněji než stejně velké zisky. Míru tohoto efektu vyjadřuje koeficient averze ke ztrátě λ: kolikrát víc „bolí“ ztráta, než „těší“ stejný zisk.",
    "Často citovaná hodnota λ = 2,25 pochází z jediné studie z roku 1992 s 25 studenty. Rozsáhlá metaanalýza (Brown, Imai, Vieider a Camerer, 2024; 607 odhadů ze 150 studií) dospěla k průměru zhruba 1,96, s 95% intervalem přibližně 1,8–2,1. Efekt tedy existuje a „dvakrát“ je rozumná zkratka – jen se mezi lidmi a situacemi výrazně liší.",
    "Prakticky: kvůli averzi ke ztrátě lidé předčasně prodávají ziskové investice a drží ty ztrátové, a v nabídkách funguje rámování „o co přijdete“ silněji než „co získáte“."
  ],
  takeaway: "Ztráta bolí zhruba dvakrát víc, než těší stejný zisk – průměr metaanalýzy je asi 2, ale mezi lidmi a situacemi se výrazně liší.",
  evidence: "střední", evidenceNote: "Průměr je robustní, ale velikost efektu silně závisí na situaci; někteří autoři (Gal & Rucker 2018) zpochybňují, jak obecně platí.",
  sources: [
    { name: "Brown a kol., Meta-analysis of Empirical Estimates of Loss Aversion, J Econ Lit 2024", url: "https://doi.org/10.1257/jel.20221698" },
    { name: "Kahneman & Tversky, Prospect Theory, Econometrica 1979" }
  ],
  quiz: [
    { q: "Jaký průměrný koeficient averze ke ztrátě vyšel v metaanalýze z roku 2024?", o: ["Asi 1,96", "Asi 10", "Přesně 1,0", "Asi 0,5"], why: "Průměr 1,955 s intervalem 1,82–2,10." },
    { q: "Odkud pochází často citovaná hodnota λ = 2,25?", o: ["Z jedné studie z roku 1992 s 25 studenty", "Z metaanalýzy 150 studií", "Z dat centrální banky", "Z průzkumu na milionu lidí"], why: "Tversky & Kahneman (1992), malý vzorek." },
    { q: "Jak se averze ke ztrátě typicky projevuje u investorů?", o: ["Drží ztrátové pozice a předčasně prodávají ziskové", "Nakupují jen dluhopisy", "Investují výhradně do zlata", "Neprojevuje se"], why: "Tento jev se nazývá disposition effect." }
  ],
  cards: [
    { f: "Averze ke ztrátě – průměrný koeficient (metaanalýza 2024)?", b: "≈ 2 (1,96; interval 1,8–2,1)." },
    { f: "Co je disposition effect?", b: "Sklon prodávat ziskové investice příliš brzy a ztrátové držet příliš dlouho." }
  ]
},
{
  id: "ek6", area: "ekonomie", title: "Poplatky a indexové investování",
  text: [
    "Poplatek 1 % ročně vypadá nevinně. Při hrubém výnosu 7 % ročně ale za 30 let sníží konečnou částku zhruba o čtvrtinu: (1,06 / 1,07)³⁰ ≈ 0,75. Poplatky se totiž úročí stejně jako výnosy – jen proti tobě.",
    "Aktivně řízené fondy se snaží trh porazit, ale po odečtení poplatků se to dlouhodobě daří jen menšině. Pravidelné srovnání SPIVA od S&P Dow Jones Indices (konec roku 2024) ukázalo, že za 15 let zaostalo za indexem S&P 500 přes 90 % amerických akciových fondů velkých společností.",
    "Proto bývá výchozí rozumnou volbou pro dlouhodobé investování levný, široce diverzifikovaný indexový fond nebo ETF. Nejde o investiční doporučení – rozhodují tvoje cíle, horizont, tolerance k riziku a daně."
  ],
  takeaway: "1 % poplatků ročně může za 30 let sebrat asi čtvrtinu výsledku; za 15 let poráží index jen malá menšina aktivních fondů.",
  evidence: "silné", evidenceNote: "Matematika poplatků je jednoznačná; data SPIVA jsou robustní pro USA, jinde se mírně liší.",
  sources: [{ name: "S&P Dow Jones Indices – SPIVA", url: "https://www.spglobal.com/spdji/en/research-insights/spiva/" }],
  quiz: [
    { q: "O kolik přibližně sníží poplatek 1 % ročně konečnou částku za 30 let (při hrubém výnosu 7 %)?", o: ["Asi o čtvrtinu", "O 1 %", "O 90 %", "Vůbec"], why: "(1,06/1,07)^30 ≈ 0,75." },
    { q: "Kolik amerických fondů velkých společností za 15 let zaostalo za S&P 500 (SPIVA, konec 2024)?", o: ["Přes 90 %", "Asi 10 %", "Přesně polovina", "Žádný"], why: "V 15letém horizontu zaostalo přes 90 % fondů." },
    { q: "Proč poplatky působí tak silně?", o: ["Úročí se stejně jako výnos, jen proti tobě", "Jsou jednorázové", "Platí se jen při prodeji", "Nepůsobí"], why: "Každý rok zmenší základ, ze kterého se dál zhodnocuje." }
  ],
  cards: [
    { f: "Dopad 1% ročního poplatku za 30 let?", b: "Zhruba −25 % konečné částky." },
    { f: "Co ukazuje srovnání SPIVA?", b: "V dlouhém horizontu většina aktivních fondů zaostává za indexem (USA, 15 let: přes 90 %)." }
  ]
}
);
L.push(
{
  id: "hi1", area: "historie", title: "Černá smrt (1347–1351)",
  text: [
    "V roce 1347 dorazil mor po obchodních trasách z Černého moře do Středomoří a během čtyř let se rozšířil po většině Evropy. Původcem byla bakterie Yersinia pestis, kterou přenášely hlavně blechy z hlodavců. Plicní forma se šířila i kapénkami mezi lidmi. Původce potvrdila v roce 2011 analýza DNA z ostatků obětí.",
    "Odhady obětí se liší, nejčastěji se uvádí, že zemřelo 30–50 % obyvatel Evropy, tedy desítky milionů lidí. České země byly podle tradičního výkladu v první vlně zasaženy méně než třeba Itálie nebo Anglie, novější výzkumy to ale zčásti zpochybňují.",
    "Dlouhodobé následky byly hluboké: kvůli nedostatku pracovní síly vzrostly mzdy a vyjednávací síla rolníků, což v západní Evropě urychlilo rozpad nevolnictví. Epidemie zároveň vedla ke vzniku karantény – slovo pochází z italského „quaranta giorni“ (40 dní), původně z Benátek a Dubrovníku."
  ],
  takeaway: "Černá smrt zabila asi třetinu až polovinu Evropanů a nedostatek pracovní síly změnil hospodářství a společnost.",
  evidence: "silné", evidenceNote: "Historický konsenzus; přesné počty obětí jsou odhady.",
  sources: [{ name: "Encyclopaedia Britannica: Black Death; Bos a kol., Nature 2011 (genom Y. pestis)" }],
  quiz: [
    { q: "Jaká část obyvatel Evropy podle běžných odhadů zemřela na černou smrt?", o: ["30–50 %", "1–2 %", "5–10 %", "90 %"], why: "Většina odhadů se pohybuje mezi třetinou a polovinou populace." },
    { q: "Co bylo původcem černé smrti?", o: ["Bakterie Yersinia pestis", "Virus chřipky", "Plíseň", "Otrava vody"], why: "Potvrdila to analýza DNA z ostatků obětí." },
    { q: "Odkud pochází slovo karanténa?", o: ["Z italského „quaranta giorni“ – 40 dní", "Z latinského „cura“ – péče", "Z arabského označení pro lékaře", "Z řeckého „karos“ – spánek"], why: "Lodě musely čekat 40 dní, než mohly přistát." }
  ],
  cards: [
    { f: "Černá smrt – roky a odhad obětí v Evropě?", b: "1347–1351; asi 30–50 % populace." },
    { f: "Ekonomický důsledek černé smrti?", b: "Nedostatek pracovní síly → vyšší mzdy, oslabení nevolnictví na západě Evropy." }
  ]
},
{
  id: "hi2", area: "historie", title: "Gutenberg a knihtisk",
  text: [
    "Johannes Gutenberg v Mohuči kolem roku 1450 spojil několik vynálezů do funkčního systému: pohyblivé kovové literky odlévané v ručním licím přístroji, olejovou tiskařskou barvu a lis odvozený od vinařských lisů.",
    "Jeho dvaačtyřicetiřádková Bible byla dokončena přibližně v letech 1454–1455 v nákladu zhruba 180 výtisků, z nichž se dodnes zachovalo kolem padesáti. Pohyblivé typy přitom znali už dříve v Číně a Koreji. Pro latinku s malým počtem znaků se ale ukázaly mimořádně výhodné.",
    "Do roku 1500 vytiskly evropské tiskárny odhadem miliony knih. Cena knih prudce klesla, šířila se gramotnost, vědecké poznatky se daly přesně kopírovat a reformace mohla šířit letáky a překlady Bible rychleji, než je stihla cenzura zastavit."
  ],
  takeaway: "Gutenbergův systém (kolem 1450) zlevnil a urychlil kopírování informací – technologický zlom podobný internetu.",
  evidence: "silné", evidenceNote: "Historický konsenzus; počty výtisků jsou odhady.",
  sources: [{ name: "Encyclopaedia Britannica: Johannes Gutenberg; Eisenstein, The Printing Press as an Agent of Change (1979)" }],
  quiz: [
    { q: "Kolik výtisků Gutenbergovy Bible zhruba vzniklo?", o: ["Asi 180", "Asi 5", "Asi 18 000", "Asi 1 milion"], why: "Odhady se drží kolem 180 kusů, zachovalo se jich asi 50." },
    { q: "Co bylo na Gutenbergově přínosu klíčové?", o: ["Propojení kovových liter, barvy a lisu do funkčního systému", "Vynález papíru", "Vynález písma", "Vynález pohyblivých typů vůbec poprvé na světě"], why: "Pohyblivé typy existovaly dříve v Asii; zásluhou Gutenberga byl celý výrobní systém." },
    { q: "Kdy byla dokončena Gutenbergova Bible?", o: ["Kolem 1454–1455", "Kolem 1150", "Kolem 1620", "Kolem 1789"], why: "Dílo bylo hotové v polovině 50. let 15. století." }
  ],
  cards: [
    { f: "Gutenbergova Bible – kdy a v jakém nákladu?", b: "Kolem 1454–1455, asi 180 výtisků." },
    { f: "Kde existovaly pohyblivé typy dřív než v Evropě?", b: "V Číně a Koreji." }
  ]
},
{
  id: "hi3", area: "historie", title: "Wattův kondenzátor a průmyslová revoluce",
  text: [
    "První prakticky používaný parní stroj sestrojil Thomas Newcomen v roce 1712, sloužil hlavně k čerpání vody z dolů. Byl ale velmi neúsporný: válec se při každém zdvihu ochlazoval a znovu ohříval, takže spotřeboval obrovské množství uhlí.",
    "James Watt si v roce 1769 nechal patentovat oddělený kondenzátor – pára kondenzovala v samostatné nádobě a válec zůstával horký. Spotřeba paliva klesla zhruba na čtvrtinu. Ve spolupráci s podnikatelem Matthewem Boultonem pak přidal mechanismus pro otáčivý pohyb, takže stroj mohl pohánět továrny.",
    "Celá průmyslová revoluce ale nebyla jeden vynález: zásadní byly také levné uhlí, vyšší mzdy v Británii (vyplácelo se nahrazovat lidskou práci stroji), patentová ochrana a rozvinutý kapitálový trh."
  ],
  takeaway: "Watt nevynalezl parní stroj, ale výrazně ho zefektivnil (1769). Revoluce byla souhrou technologie, energie a ekonomických pobídek.",
  evidence: "silné", evidenceNote: "Technické fakty jsou jisté; podíl jednotlivých příčin revoluce je mezi historiky předmětem debaty.",
  sources: [{ name: "Encyclopaedia Britannica: James Watt; Robert C. Allen, The British Industrial Revolution in Global Perspective (2009)" }],
  quiz: [
    { q: "Co si James Watt nechal v roce 1769 patentovat?", o: ["Oddělený kondenzátor", "Parní lokomotivu", "Elektromotor", "Spalovací motor"], why: "Kondenzace páry mimo válec výrazně snížila spotřebu paliva." },
    { q: "Kdo sestrojil první prakticky používaný parní stroj (1712)?", o: ["Thomas Newcomen", "James Watt", "Isaac Newton", "George Stephenson"], why: "Newcomenův atmosférický stroj čerpal vodu z dolů." },
    { q: "Proč se podle historika R. C. Allena vyplatilo mechanizovat právě v Británii?", o: ["Kombinace vysokých mezd a levného uhlí", "Nízké mzdy", "Nedostatek uhlí", "Zákaz strojů jinde v Evropě"], why: "Drahá práce a levná energie dělaly stroje výhodnými." }
  ],
  cards: [
    { f: "Wattův přínos (1769)?", b: "Oddělený kondenzátor – spotřeba paliva klesla zhruba na čtvrtinu." },
    { f: "Proč průmyslová revoluce začala v Británii (podle Allena)?", b: "Vysoké mzdy + levné uhlí → vyplácelo se nahrazovat práci stroji." }
  ]
},
{
  id: "hi4", area: "historie", title: "Velká hospodářská krize",
  text: [
    "V říjnu 1929 se zhroutila newyorská burza a během následujících let se americká ekonomika propadla do nejhlubší krize moderní doby. Průmyslová výroba v USA klesla mezi lety 1929 a 1933 zhruba o polovinu a nezaměstnanost v roce 1933 dosáhla přibližně 25 %. Zkrachovaly tisíce bank.",
    "Krach na burze sám o sobě nebyl jedinou příčinou. Milton Friedman a Anna Schwartz (1963) ukázali, že rozhodující bylo, když Federální rezervní systém nechal padat banky a peněžní zásoba se smrštila zhruba o třetinu. Krizi navíc šířil zlatý standard a obchodní protekcionismus (Smoot-Hawleyho celní zákon z roku 1930).",
    "Z krize vzešly instituce, které platí dodnes: pojištění vkladů, aktivnější centrální banky a víra, že stát má v hluboké recesi zasáhnout. Reakce na finanční krizi v roce 2008 se z této zkušenosti výslovně poučila."
  ],
  takeaway: "Krach v roce 1929 krizi spustil, ale hlubokou ji udělaly bankovní krachy, smrštění peněžní zásoby a protekcionismus.",
  evidence: "silné", evidenceNote: "Data jsou jistá; váha jednotlivých příčin je mezi ekonomy stále diskutovaná.",
  sources: [{ name: "Friedman & Schwartz, A Monetary History of the United States (1963); Federal Reserve History: The Great Depression" }],
  quiz: [
    { q: "Jaká byla přibližně nezaměstnanost v USA v roce 1933?", o: ["Asi 25 %", "Asi 3 %", "Asi 60 %", "Asi 8 %"], why: "Vrchol nezaměstnanosti byl kolem čtvrtiny pracovní síly." },
    { q: "Co podle Friedmana a Schwartzové krizi zásadně prohloubilo?", o: ["Smrštění peněžní zásoby a pády bank", "Příliš mnoho peněz v oběhu", "Nízké cla", "Válka"], why: "Fed nezabránil bankovní panice a peněžní zásoba klesla asi o třetinu." },
    { q: "Která instituce vznikla jako reakce na bankovní krachy?", o: ["Pojištění vkladů", "Bitcoin", "Euro", "Mezinárodní vesmírná stanice"], why: "V USA vznikla v roce 1933 FDIC." }
  ],
  cards: [
    { f: "Velká hospodářská krize – nezaměstnanost USA 1933?", b: "Asi 25 %." },
    { f: "Hlavní ponaučení Friedmana a Schwartzové?", b: "Centrální banka nesmí nechat zhroutit bankovní systém a peněžní zásobu." }
  ]
},
{
  id: "hi5", area: "historie", title: "Marshallův plán a československé „ne“",
  text: [
    "V červnu 1947 představil americký ministr zahraničí George Marshall program hospodářské obnovy Evropy. V letech 1948–1952 poskytly USA západoevropským zemím zhruba 13 miliard dolarů – v dnešních cenách přes 150 miliard. Pomoc obnovila obchod, infrastrukturu i důvěru a přispěla k pozdější evropské integraci.",
    "Československá vláda 7. července 1947 jednomyslně souhlasila s účastí na přípravné konferenci v Paříži. Dne 9. července si Stalin předvolal československou delegaci do Moskvy a vláda 10. července souhlas odvolala. Jan Masaryk to podle svědků komentoval slovy, že do Moskvy odjížděl jako ministr suverénního státu a vrací se jako sovětský čeledín.",
    "Odmítnutí Marshallova plánu je považováno za jeden z prvních jasných signálů, že Československo patří do sovětské sféry – ještě před únorem 1948."
  ],
  takeaway: "Marshallův plán (≈13 mld. USD) pomohl obnovit západní Evropu; Československo účast pod tlakem Moskvy v červenci 1947 odvolalo.",
  evidence: "silné", evidenceNote: "Historický konsenzus; Masarykův výrok je doložen svědectvími, ne přesným záznamem.",
  sources: [{ name: "Office of the Historian, U.S. Department of State: Marshall Plan; Ústav pro studium totalitních režimů" }],
  quiz: [
    { q: "Kolik zhruba poskytly USA v rámci Marshallova plánu?", o: ["Asi 13 miliard USD (tehdejších)", "Asi 13 milionů USD", "Asi 1 bilion USD", "Nic, šlo jen o půjčky Sovětskému svazu"], why: "Program v letech 1948–1952 představoval přibližně 13 miliard tehdejších dolarů." },
    { q: "Co se stalo s československou účastí v červenci 1947?", o: ["Vláda ji po zásahu Moskvy odvolala", "Československo získalo nejvíc peněz", "Československo plán samo navrhlo", "Účast odmítly USA"], why: "Souhlas ze 7. července byl 10. července odvolán po jednání se Stalinem." },
    { q: "V jakých letech probíhal Marshallův plán?", o: ["1948–1952", "1919–1923", "1939–1945", "1961–1965"], why: "Program byl spuštěn v dubnu 1948 a trval do roku 1952." }
  ],
  cards: [
    { f: "Marshallův plán – roky a objem?", b: "1948–1952, asi 13 mld. USD (v dnešních cenách přes 150 mld.)." },
    { f: "Kdy Československo odvolalo účast na Marshallově plánu?", b: "10. července 1947, po předvolání delegace do Moskvy." }
  ]
},
{
  id: "hi6", area: "historie", title: "Sametová revoluce v kostce",
  text: [
    "Dne 17. listopadu 1989 se v Praze konala povolená studentská demonstrace k 50. výročí uzavření českých vysokých škol nacisty. Na Národní třídě ji tvrdě rozehnaly pořádkové jednotky. Zpráva o zásahu (včetně nepravdivé zprávy o mrtvém studentovi) vyvolala vlnu protestů.",
    "Studenti a divadla vyhlásili stávku, 19. listopadu vzniklo Občanské fórum v čele s Václavem Havlem a na Slovensku Verejnosť proti násiliu. Na Letenské pláni se 25. a 26. listopadu sešly statisíce lidí a 27. listopadu proběhla dvouhodinová generální stávka. Federální shromáždění 29. listopadu zrušilo článek ústavy o vedoucí úloze KSČ.",
    "Dne 10. prosince jmenoval Gustáv Husák vládu národního porozumění a abdikoval. Federální shromáždění zvolilo 29. prosince 1989 Václava Havla prezidentem. Celý přechod proběhl za šest týdnů a bez obětí na životech."
  ],
  takeaway: "Od zásahu na Národní třídě 17. 11. po zvolení Havla 29. 12. 1989 uběhlo jen šest týdnů – bez obětí na životech.",
  evidence: "silné", evidenceNote: "Dobře zdokumentované události.",
  sources: [{ name: "Ústav pro studium totalitních režimů; Encyclopaedia Britannica: Velvet Revolution" }],
  quiz: [
    { q: "Kdy byl Václav Havel poprvé zvolen prezidentem?", o: ["29. prosince 1989", "17. listopadu 1989", "1. ledna 1993", "10. prosince 1989"], why: "Zvolilo ho Federální shromáždění 29. 12. 1989." },
    { q: "Ke kterému výročí se konala studentská demonstrace 17. listopadu 1989?", o: ["K 50. výročí uzavření vysokých škol nacisty", "K výročí vzniku republiky", "K výročí upálení Jana Palacha", "K výročí února 1948"], why: "17. listopadu 1939 nacisté uzavřeli české vysoké školy." },
    { q: "Kdy proběhla generální stávka?", o: ["27. listopadu 1989", "1. května 1989", "21. srpna 1989", "31. prosince 1989"], why: "Dvouhodinová stávka 27. listopadu ukázala podporu celé společnosti." }
  ],
  cards: [
    { f: "Klíčová data sametové revoluce?", b: "17. 11. Národní třída · 19. 11. OF · 27. 11. generální stávka · 29. 12. Havel prezidentem." },
    { f: "Co zrušilo Federální shromáždění 29. 11. 1989?", b: "Článek ústavy o vedoucí úloze KSČ." }
  ]
},
{
  id: "ve1", area: "veda", title: "Korelace není kauzalita",
  text: [
    "Když dvě věci rostou spolu, ještě to neznamená, že jedna způsobuje druhou. Prodej zmrzliny a počet utonutí v létě rostou společně, ale příčinou obojího je třetí faktor – teplo. Tomu se říká zavádějící (matoucí) proměnná (confounder).",
    "Observační studie (sledujeme lidi, kteří si něco vybrali sami) umí souvislosti dobře najít, ale lidé, kteří například jedí víc zeleniny, se obvykle liší i v mnoha jiných věcech – víc se hýbou, méně kouří, mají vyšší příjmy. Randomizovaná kontrolovaná studie (RCT) přiděluje zásah losem, takže se tyto rozdíly mezi skupinami v průměru vyrovnají.",
    "V hierarchii důkazů proto obvykle nejvýš stojí systematické přehledy a metaanalýzy dobrých RCT, pod nimi jednotlivé RCT, pak kohortové studie a dál případové studie a názory odborníků. Kvalita konkrétní studie ale může tuto hierarchii zvrátit."
  ],
  takeaway: "Než uvěříš titulku „X způsobuje Y“, zeptej se: šlo o randomizovanou studii, nebo jen o souvislost s možnými třetími faktory?",
  evidence: "silné", evidenceNote: "Základní princip vědecké metody.",
  sources: [{ name: "Oxford Centre for Evidence-Based Medicine: Levels of Evidence; Cochrane Handbook" }],
  quiz: [
    { q: "Prodej zmrzliny a utonutí rostou spolu. Co je nejpravděpodobnější vysvětlení?", o: ["Společná příčina – teplé počasí", "Zmrzlina způsobuje utonutí", "Utonutí zvyšuje prodej zmrzliny", "Jde o náhodu bez vysvětlení"], why: "Teplo zvyšuje jak spotřebu zmrzliny, tak koupání." },
    { q: "Proč je randomizace v RCT tak důležitá?", o: ["Vyrovná ostatní rozdíly mezi skupinami", "Zlevní studii", "Zaručí pozitivní výsledek", "Zvýší počet účastníků"], why: "Los rozdělí známé i neznámé faktory do skupin rovnoměrně." },
    { q: "Co obvykle stojí na vrcholu hierarchie důkazů?", o: ["Systematické přehledy a metaanalýzy kvalitních RCT", "Názor známého odborníka", "Jedna případová studie", "Článek v novinách"], why: "Spojují více kvalitních studií a snižují vliv náhody." }
  ],
  cards: [
    { f: "Co je confounder (zavádějící proměnná)?", b: "Třetí faktor, který ovlivňuje obě sledované veličiny a vytváří zdánlivou příčinnou souvislost." },
    { f: "Proč RCT lépe prokazuje příčinu než observační studie?", b: "Randomizace vyrovná ostatní rozdíly mezi skupinami." }
  ]
},
{
  id: "ve2", area: "veda", title: "Relativní vs. absolutní riziko",
  text: [
    "Titulek „X zvyšuje riziko rakoviny o 50 %“ zní děsivě. Pokud je ale výchozí riziko 2 z 1 000, zvýšení o 50 % znamená 3 z 1 000 – tedy absolutní nárůst o 1 člověka z tisíce. Relativní riziko (o kolik procent se riziko změní) bez výchozí hodnoty skoro nic neříká.",
    "Reálný příklad: IARC (agentura WHO pro výzkum rakoviny) v roce 2015 uvedla, že každých 50 g zpracovaného masa denně zvyšuje riziko kolorektálního karcinomu přibližně o 18 %. Je to relativní číslo. Jak velký je absolutní dopad, záleží na výchozím celoživotním riziku, které se v Evropě pohybuje v řádu jednotek procent.",
    "Užitečný je také ukazatel NNT (number needed to treat): kolik lidí musí podstupovat léčbu nebo opatření, aby jeden z nich získal přínos. U léků ho lze dopočítat jako 1 ÷ absolutní snížení rizika."
  ],
  takeaway: "U každého „zvyšuje riziko o X %“ se ptej: z jaké výchozí hodnoty? Teprve absolutní riziko ukazuje skutečný dopad.",
  evidence: "silné", evidenceNote: "Statistický princip; příklad IARC je oficiální odhad.",
  sources: [{ name: "Bouvard a kol. (IARC), Lancet Oncology 2015", url: "https://doi.org/10.1016/S1470-2045(15)00444-1" }],
  quiz: [
    { q: "Výchozí riziko je 2 z 1 000 a vzroste o 50 %. Jaké je nové riziko?", o: ["3 z 1 000", "52 z 1 000", "500 z 1 000", "1 z 1 000"], why: "Polovina z 2 je 1, tedy 2 + 1 = 3 z 1 000." },
    { q: "O kolik zvyšuje každých 50 g zpracovaného masa denně relativní riziko kolorektálního karcinomu (IARC)?", o: ["Asi o 18 %", "Asi o 180 %", "Asi o 1,8 %", "Vůbec"], why: "IARC 2015 uvádí asi 18 % na každých 50 g denně." },
    { q: "Jak vypočítat NNT?", o: ["1 ÷ absolutní snížení rizika", "1 ÷ relativní snížení rizika", "Počet účastníků × 2", "Absolutní riziko × 100"], why: "Např. pokles absolutního rizika o 2 procentní body → NNT = 50." }
  ],
  cards: [
    { f: "Relativní vs. absolutní riziko?", b: "Relativní = o kolik % se riziko změní; absolutní = skutečný rozdíl v počtu případů." },
    { f: "Co je NNT?", b: "Kolik lidí je potřeba léčit, aby měl přínos jeden; NNT = 1 ÷ absolutní snížení rizika." }
  ]
},
{
  id: "ve3", area: "veda", title: "Placebo: skutečné, ale omezené",
  text: [
    "Placebo efekt je zlepšení, které nastane po neúčinném zásahu (například cukrové pilulce) díky očekávání a kontextu léčby. Část „efektu placeba“ v klinických studiích ale ve skutečnosti tvoří přirozené zlepšení nemoci a návrat k průměru (regrese k průměru) – lidé se často léčí, když je jim nejhůř.",
    "Systematický přehled Cochrane (Hróbjartsson a Gøtzsche, 2010) srovnal placebo se skupinami bez jakékoli léčby. Obecně nenašel významné klinické účinky placeba, ale ukázal možný přínos u výsledků, které hlásí sami pacienti – hlavně u bolesti a nevolnosti. Objektivně měřitelné ukazatele (krevní testy, růst nádoru) placebo prakticky neovlivňuje.",
    "Prakticky: když se po něčem „cítíš lépe“, nemusí to znamenat, že to funguje fyziologicky. Proto mají kvalitní studie placebovou kontrolu a zaslepení."
  ],
  takeaway: "Placebo působí hlavně na subjektivní pocity (bolest, nevolnost), ne na objektivní ukazatele – a část jeho účinku je jen přirozené zlepšení.",
  evidence: "silné", evidenceNote: "Cochrane přehled; velikost efektu na bolest se mezi studiemi liší.",
  sources: [{ name: "Hróbjartsson & Gøtzsche, Cochrane Database Syst Rev 2010", url: "https://doi.org/10.1002/14651858.CD003974.pub3" }],
  quiz: [
    { q: "U jakých výsledků Cochrane přehled našel možný účinek placeba?", o: ["Subjektivních – hlavně bolest a nevolnost", "Krevních testů", "Růstu nádorů", "Zlomenin"], why: "Efekt byl patrný hlavně u výsledků, které hlásí sami pacienti." },
    { q: "Co tvoří část zdánlivého placebo efektu v klinických studiích?", o: ["Přirozené zlepšení a regrese k průměru", "Chemické účinky cukru", "Chyba v laboratoři", "Nic, efekt je vždy čistě psychologický"], why: "Lidé se často léčí ve chvíli, kdy jsou na tom nejhůř, a pak se zlepší i sami." },
    { q: "Proč mají kvalitní studie placebovou skupinu a zaslepení?", o: ["Aby oddělily skutečný účinek od očekávání", "Aby byly levnější", "Kvůli zákonu o reklamě", "Nemají je"], why: "Bez kontroly nelze poznat, co je účinek zásahu a co očekávání." }
  ],
  cards: [
    { f: "Na co placebo podle Cochrane působí?", b: "Hlavně na subjektivní výsledky (bolest, nevolnost), ne na objektivní ukazatele." },
    { f: "Co je regrese k průměru?", b: "Extrémní hodnoty se při dalším měření přirozeně přibližují k průměru." }
  ]
},
{
  id: "ve4", area: "veda", title: "Antibiotická rezistence",
  text: [
    "Bakterie se množí rychle a náhodné mutace nebo geny získané od jiných bakterií jim mohou dát odolnost vůči antibiotikům. Každé použití antibiotika „vyřadí“ citlivé bakterie a zvýhodní ty odolné. Je to evoluce přírodním výběrem v přímém přenosu.",
    "Rozsáhlá analýza GRAM v časopise The Lancet (2022) odhadla, že v roce 2019 zemřelo na infekce přímo způsobené rezistentními bakteriemi asi 1,27 milionu lidí a s rezistencí bylo spojeno téměř 5 milionů úmrtí. WHO řadí antimikrobiální rezistenci mezi největší globální zdravotní hrozby.",
    "Co pomáhá: brát antibiotika jen tehdy, když je předepíše lékař kvůli bakteriální infekci (na viry, jako je chřipka nebo běžné nachlazení, nefungují), dodržet předepsané dávkování a omezovat jejich plošné použití v zemědělství."
  ],
  takeaway: "Rezistence je evoluce v přímém přenosu – v roce 2019 přímo způsobila asi 1,27 milionu úmrtí. Antibiotika nefungují na viry.",
  evidence: "silné", evidenceNote: "Mechanismus je jistý; počty úmrtí jsou modelové odhady.",
  sources: [{ name: "Antimicrobial Resistance Collaborators (GRAM), The Lancet 2022", url: "https://doi.org/10.1016/S0140-6736(21)02724-0" }],
  quiz: [
    { q: "Kolik úmrtí v roce 2019 podle GRAM přímo způsobily rezistentní bakterie?", o: ["Asi 1,27 milionu", "Asi 1 270", "Asi 127 milionů", "Žádné"], why: "Přímo připsaná úmrtí ~1,27 mil.; spojená s rezistencí ~4,95 mil." },
    { q: "Proč antibiotika nepomáhají na chřipku?", o: ["Chřipku způsobuje virus", "Chřipka je příliš slabá", "Antibiotika fungují jen u dětí", "Pomáhají vždy"], why: "Antibiotika cílí na struktury bakterií, které viry nemají." },
    { q: "Jak vzniká rezistence na úrovni populace bakterií?", o: ["Přírodním výběrem odolných bakterií", "Bakterie se to naučí ve škole", "Antibiotika se v těle rozpadnou na jiné látky", "Rezistence nevzniká"], why: "Antibiotikum zahubí citlivé bakterie a odolné se pak volně množí." }
  ],
  cards: [
    { f: "Úmrtí přímo způsobená antibiotickou rezistencí v roce 2019 (GRAM)?", b: "Asi 1,27 milionu (s rezistencí spojeno téměř 5 milionů)." },
    { f: "Proč antibiotika nefungují na viry?", b: "Cílí na bakteriální struktury (buněčná stěna, ribozomy), které viry nemají." }
  ]
},
{
  id: "ve5", area: "veda", title: "Skleníkový efekt: fyzika v kostce",
  text: [
    "Země přijímá energii ze Slunce hlavně ve viditelném světle a vyzařuje ji zpět jako infračervené (tepelné) záření. Některé plyny – vodní pára, oxid uhličitý (CO₂), metan – infračervené záření pohlcují a zpětně vyzařují, takže část tepla zůstává u povrchu. Bez přirozeného skleníkového efektu by průměrná teplota Země byla zhruba −18 °C místo přibližně +15 °C.",
    "Pohlcování infračerveného záření molekulami CO₂ změřil John Tyndall už v roce 1859 a Svante Arrhenius v roce 1896 poprvé spočítal, jak by změna množství CO₂ ovlivnila teplotu.",
    "Před průmyslovou revolucí obsahovala atmosféra kolem 280 ppm CO₂. Měření na observatoři Mauna Loa ukazují v polovině 20. let 21. století hodnoty kolem 425 ppm – nejvíc nejméně za stovky tisíc let, jak dokládají ledovcová jádra."
  ],
  takeaway: "Skleníkový efekt je změřená fyzika z 19. století; koncentrace CO₂ vzrostla z ~280 na ~425 ppm.",
  evidence: "silné", evidenceNote: "Fyzikální mechanismus a měření koncentrace jsou jednoznačné; přesná citlivost klimatu je odhad s rozptylem.",
  sources: [
    { name: "NOAA Global Monitoring Laboratory – Trends in CO₂", url: "https://gml.noaa.gov/ccgg/trends/" },
    { name: "IPCC AR6, Working Group I (2021)" }
  ],
  quiz: [
    { q: "Jaká by byla zhruba průměrná teplota Země bez přirozeného skleníkového efektu?", o: ["Asi −18 °C", "Asi +40 °C", "Asi +15 °C", "Asi −100 °C"], why: "Skleníkový efekt přidává zhruba 33 °C." },
    { q: "Jaká byla koncentrace CO₂ před průmyslovou revolucí?", o: ["Asi 280 ppm", "Asi 28 ppm", "Asi 2 800 ppm", "Asi 425 ppm"], why: "Ledovcová jádra ukazují kolem 280 ppm." },
    { q: "Kdo v roce 1859 změřil, že CO₂ pohlcuje tepelné záření?", o: ["John Tyndall", "Albert Einstein", "Isaac Newton", "Charles Darwin"], why: "Tyndall prováděl laboratorní měření pohlcování infračerveného záření plyny." }
  ],
  cards: [
    { f: "CO₂ v atmosféře: před průmyslovou revolucí vs. dnes?", b: "Asi 280 ppm → asi 425 ppm (polovina 20. let 21. století)." },
    { f: "Teplota Země bez skleníkového efektu?", b: "Asi −18 °C místo zhruba +15 °C." }
  ]
},
{
  id: "ve6", area: "veda", title: "Penicilin: šťastná náhoda nestačila",
  text: [
    "V září 1928 si Alexander Fleming v Londýně všiml, že plíseň Penicillium kontaminovala jednu z jeho misek s bakteriemi stafylokoka a kolem ní bakterie nerostly. Výsledek publikoval v roce 1929, ale penicilin se mu nepodařilo stabilně izolovat a jeho léčebný potenciál zůstal deset let téměř nevyužitý.",
    "Zlom přišel až v Oxfordu: Howard Florey a Ernst Chain se svým týmem (včetně Normana Heatleyho) penicilin kolem roku 1940 vyčistili a prokázali jeho účinek na myších a poté i na lidech. Za války pak americký průmysl zvládl masovou výrobu.",
    "Nobelovu cenu za fyziologii a medicínu získali v roce 1945 všichni tři – Fleming, Florey i Chain. Příběh dobře ukazuje, že objev je jen začátek: od pozorování k léku vedla dlouhá a týmová práce."
  ],
  takeaway: "Fleming penicilin objevil (1928), ale lékem se stal díky Floreymu, Chainovi a průmyslové výrobě o více než deset let později.",
  evidence: "silné", evidenceNote: "Dobře zdokumentovaná historie vědy.",
  sources: [{ name: "NobelPrize.org: The Nobel Prize in Physiology or Medicine 1945; American Chemical Society: Discovery and Development of Penicillin" }],
  quiz: [
    { q: "Kdo sdílel Nobelovu cenu za penicilin v roce 1945?", o: ["Fleming, Florey a Chain", "Jen Fleming", "Pasteur a Koch", "Watson a Crick"], why: "Cenu získali všichni tři." },
    { q: "Kdy Fleming pozoroval účinek plísně na bakterie?", o: ["V roce 1928", "V roce 1828", "V roce 1945", "V roce 1960"], why: "Pozorování proběhlo v září 1928, publikace následovala v roce 1929." },
    { q: "Co se podařilo oxfordskému týmu kolem roku 1940?", o: ["Penicilin vyčistit a prokázat jeho léčebný účinek", "Objevit plíseň poprvé", "Vynalézt očkování", "Vyrobit první antibiotikum syntetickou cestou"], why: "Florey a Chain proměnili laboratorní pozorování v použitelný lék." }
  ],
  cards: [
    { f: "Penicilin – objev a cesta k léku?", b: "Fleming 1928 → Florey a Chain, Oxford ~1940 → masová výroba za války → Nobelova cena 1945." },
    { f: "Ponaučení z příběhu penicilinu?", b: "Objev je jen začátek; k použitelnému výsledku vede týmová a vytrvalá práce." }
  ]
}
);
window.LESSONS = L;
