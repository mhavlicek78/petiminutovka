// Knihovna lekcí. Správná odpověď je v datech vždy první, aplikace pořadí míchá.
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
L.push(
{
  id: "ce1", area: "cestovani", title: "Hlavní města, která zaskočí",
  text: [
    "U řady zemí není hlavním městem to největší nebo nejznámější. Austrálie má Canberru, ne Sydney ani Melbourne: obě města se o titul přela, a tak se v roce 1908 vybralo místo mezi nimi a postavilo se zcela nové město. Kanada má Ottawu (ne Toronto) a Turecko Ankaru, kterou Atatürk v roce 1923 záměrně zvolil místo Istanbulu jako symbol nového státu.",
    "Brazílie si také postavila nové hlavní město: Brasília nahradila Rio de Janeiro v roce 1960, aby se rozvoj přesunul do vnitrozemí.",
    "Některé země mají dvě „hlavní“ města. V Nizozemsku je ústavním hlavním městem Amsterdam, ale vláda, parlament i král sídlí v Haagu. Bolívie má ústavní hlavní město Sucre a sídlo vlády v La Paz. Švýcarsko oficiální hlavní město vůbec nemá – Bern je „spolkové město“, kde sídlí vláda."
  ],
  takeaway: "Největší ≠ hlavní: Canberra, Ottawa, Ankara, Brasília. Nizozemsko a Bolívie mají hlavní město a sídlo vlády odděleně.",
  evidence: "silné", evidenceNote: "Ověřitelná fakta; u Švýcarska jde o právní detail (Bern je ‚Bundesstadt‘).",
  sources: [{ name: "CIA World Factbook; Encyclopaedia Britannica (hesla jednotlivých zemí)" }],
  quiz: [
    { q: "Které město je hlavním městem Austrálie?", o: ["Canberra", "Sydney", "Melbourne", "Perth"], why: "Canberra vznikla jako kompromis mezi Sydney a Melbourne." },
    { q: "Kde sídlí nizozemská vláda a parlament?", o: ["V Haagu", "V Amsterdamu", "V Rotterdamu", "V Utrechtu"], why: "Amsterdam je ústavní hlavní město, ale vláda sídlí v Haagu." },
    { q: "Které město nahradilo v roce 1960 Rio de Janeiro jako hlavní město Brazílie?", o: ["Brasília", "São Paulo", "Salvador", "Manaus"], why: "Brasília byla postavena na zelené louce ve vnitrozemí." }
  ],
  cards: [
    { f: "Hlavní města: Austrálie, Kanada, Turecko?", b: "Canberra, Ottawa, Ankara." },
    { f: "Které země mají oddělené hlavní město a sídlo vlády?", b: "Nizozemsko (Amsterdam / Haag), Bolívie (Sucre / La Paz)." }
  ]
},
{
  id: "ce2", area: "cestovani", title: "Nejvyšší hory kontinentů",
  text: [
    "„Koruna planety“ (Seven Summits) jsou nejvyšší vrcholy sedmi kontinentů. Nejvyšší je Mount Everest – podle společného čínsko-nepálského měření z roku 2020 má 8 848,86 m.",
    "Další: Aconcagua v Argentině (6 961 m, nejvyšší hora mimo Asii), Denali na Aljašce (6 190 m), Kilimandžáro v Tanzanii (5 895 m – samostatně stojící sopka), Elbrus na Kavkaze (5 642 m) a Vinsonův masiv v Antarktidě (4 892 m).",
    "U Austrálie a Oceánie se seznamy liší: buď Puncak Jaya na Nové Guineji (4 884 m), nebo Kosciuszko na australské pevnině (jen 2 228 m). Sporný je i Elbrus – podle toho, kudy vedeme hranici Evropy, může být nejvyšší horou Evropy místo Mont Blancu (4 806 m)."
  ],
  takeaway: "Everest 8 849 m, Aconcagua 6 961 m, Denali 6 190 m, Kilimandžáro 5 895 m, Elbrus 5 642 m, Vinson 4 892 m.",
  evidence: "silné", evidenceNote: "Výšky z oficiálních měření; pořadí v Evropě a Oceánii závisí na definici hranic.",
  sources: [{ name: "Encyclopaedia Britannica: Seven Summits; Xinhua/Nepal Survey Department – výška Everestu (2020)" }],
  quiz: [
    { q: "Jaká je oficiální výška Mount Everestu podle měření z roku 2020?", o: ["8 848,86 m", "8 611 m", "9 012 m", "8 516 m"], why: "Čína a Nepál ji v prosinci 2020 společně oznámily." },
    { q: "Která hora je nejvyšší mimo Asii?", o: ["Aconcagua", "Denali", "Kilimandžáro", "Mont Blanc"], why: "Aconcagua v Andách měří 6 961 m." },
    { q: "Proč se někdy uvádí jako nejvyšší hora Evropy Elbrus, a ne Mont Blanc?", o: ["Záleží na tom, kudy vedeme hranici Evropy", "Mont Blanc se zmenšil", "Elbrus je v Alpách", "Mont Blanc je ve Švýcarsku"], why: "Elbrus leží na Kavkaze, který se podle některých definic počítá do Evropy." }
  ],
  cards: [
    { f: "Nejvyšší hora Afriky a její výška?", b: "Kilimandžáro, 5 895 m." },
    { f: "Nejvyšší hora Jižní a Severní Ameriky?", b: "Aconcagua (6 961 m) a Denali (6 190 m)." }
  ]
},
{
  id: "ce3", area: "cestovani", title: "Nil, nebo Amazonka?",
  text: [
    "Podle většiny referenčních zdrojů (například americké geologické služby USGS) je nejdelší řekou světa Nil s přibližně 6 650 km, těsně před Amazonkou s asi 6 400 km.",
    "Spor ale není uzavřený. Délka řeky závisí na tom, který přítok považujeme za pramen a kde přesně končí ústí. Brazilští vědci v roce 2007 započítali vzdálenější pramen v peruánských Andách a jižní ústí kolem ostrova Marajó – vyšlo jim, že Amazonka měří asi 6 992 km, a je tedy delší než Nil.",
    "Nesporné je jiné: Amazonka je největší řekou světa podle průtoku, tedy objemu vody, a to s obrovským náskokem. Třetí nejdelší řekou je čínská Jang-c’-ťiang. Nejdelší řekou Česka je Vltava (430 km)."
  ],
  takeaway: "Nil (~6 650 km) je „oficiálně“ nejdelší, ale podle jiných měření vede Amazonka. Ta je nesporně největší podle průtoku.",
  evidence: "sporné", evidenceNote: "Délka řek závisí na definici pramene a ústí; geografický konsenzus se zatím přiklání k Nilu.",
  sources: [
    { name: "Britannica: How long is the Amazon River?", url: "https://www.britannica.com/story/how-long-is-the-amazon-river" },
    { name: "USGS – délky řek" }
  ],
  quiz: [
    { q: "Proč je spor o nejdelší řeku světa těžké rozhodnout?", o: ["Délka závisí na tom, kde určíme pramen a ústí", "Řeky nikdo neměřil", "Nil teče do kopce", "Amazonka vysychá"], why: "Volba pramene a ústí může délku změnit o stovky kilometrů." },
    { q: "Ve kterém ukazateli Amazonka nesporně vede?", o: ["Průtok (objem vody)", "Počet mostů", "Teplota vody", "Délka"], why: "Průtokem Amazonka výrazně převyšuje všechny ostatní řeky." },
    { q: "Jaká je nejdelší řeka Česka?", o: ["Vltava", "Labe", "Morava", "Odra"], why: "Vltava měří 430 km; Labe je delší jen celkově, na českém území je kratší." }
  ],
  cards: [
    { f: "Nil vs. Amazonka – běžně uváděné délky?", b: "Nil ~6 650 km, Amazonka ~6 400 km (jiná měření až ~6 990 km)." },
    { f: "Největší řeka světa podle průtoku?", b: "Amazonka – s velkým náskokem." }
  ]
},
{
  id: "ce4", area: "cestovani", title: "Extrémy oceánů a moří",
  text: [
    "Tichý oceán je největší – pokrývá zhruba třetinu povrchu Země, víc než všechny pevniny dohromady. Leží v něm i nejhlubší známé místo: Challengerova hlubina v Marianském příkopu. Měření se liší podle metody, ale vycházejí zhruba na 10 900–11 000 m. Mount Everest by se do ní vešel a nad vrcholem by zbyly ještě asi dva kilometry vody.",
    "Opačný extrém je Mrtvé moře na hranici Izraele a Jordánska. Je to vlastně slané jezero a jeho hladina je nejníže položeným místem souše na Zemi – kolem roku 2025 asi 440 m pod úrovní moře. Ročně klesá o více než metr, protože se odebírá voda z řeky Jordán a těží se z něj minerály.",
    "Největším jezerem světa je Kaspické moře. Nejhlubším je Bajkal (1 642 m), který obsahuje zhruba pětinu sladké povrchové vody planety."
  ],
  takeaway: "Tichý oceán ≈ třetina povrchu Země; Challengerova hlubina ~11 km; hladina Mrtvého moře ~440 m pod mořem a dál klesá.",
  evidence: "silné", evidenceNote: "Měření; hloubka Challengerovy hlubiny se mezi měřeními liší o desítky metrů.",
  sources: [
    { name: "NOAA NCEI: The Mariana Trench", url: "https://www.ncei.noaa.gov/node/239" },
    { name: "Britannica: Dead Sea", url: "https://www.britannica.com/place/Dead-Sea" }
  ],
  quiz: [
    { q: "Jak hluboká je zhruba Challengerova hlubina?", o: ["Asi 11 km", "Asi 3 km", "Asi 25 km", "Asi 900 m"], why: "Měření se pohybují kolem 10 900–11 000 m." },
    { q: "Kde je nejníže položené místo souše na Zemi?", o: ["U Mrtvého moře", "V Nizozemsku", "V Death Valley", "U Kaspického moře"], why: "Hladina Mrtvého moře je asi 440 m pod úrovní moře." },
    { q: "Které jezero je nejhlubší na světě?", o: ["Bajkal", "Kaspické moře", "Tanganika", "Viktoriino jezero"], why: "Bajkal je hluboký 1 642 m." }
  ],
  cards: [
    { f: "Nejhlubší místo oceánu?", b: "Challengerova hlubina v Marianském příkopu, ~11 km." },
    { f: "Proč Mrtvé moře klesá?", b: "Odběr vody z Jordánu a těžba minerálů; ročně klesá o více než 1 m." }
  ]
},
{
  id: "ce5", area: "cestovani", title: "Vlajky s příběhem",
  text: [
    "Téměř všechny státní vlajky jsou obdélníkové. Výjimkou je Nepál, jehož vlajku tvoří dva nad sebou položené trojúhelníky. Švýcarsko a Vatikán mají vlajky čtvercové (na moři Švýcarsko užívá obdélníkovou verzi).",
    "Dánská vlajka Dannebrog se tradičně považuje za nejstarší nepřetržitě používanou státní vlajku. Legenda ji spojuje s bitvou roku 1219, doložená je od 14. století. Podle ní vznikl i skandinávský kříž na vlajkách Švédska, Norska, Finska a Islandu.",
    "Některé vlajky jsou si nebezpečně podobné: Čad a Rumunsko mají téměř shodnou modro-žluto-červenou trikolóru, Indonésie a Monako mají obě červeno-bílou vlajku, liší se jen poměrem stran. Česká vlajka s modrým klínem byla přijata v roce 1920 pro Československo a Česko si ji ponechalo i po roce 1993."
  ],
  takeaway: "Nepál = jediná nečtyřúhelníková vlajka; Švýcarsko a Vatikán čtvercové; Dánsko má tradičně nejstarší vlajku.",
  evidence: "silné", evidenceNote: "Ověřitelná fakta; stáří Dannebrogu se opírá zčásti o legendu.",
  sources: [{ name: "Encyclopaedia Britannica: Flag of Nepal, Flag of Denmark; Whitney Smith, Flags Through the Ages (1975)" }],
  quiz: [
    { q: "Která země má jako jediná státní vlajku, která není čtyřúhelník?", o: ["Nepál", "Bhútán", "Švýcarsko", "Japonsko"], why: "Nepálská vlajka je tvořena dvěma trojúhelníky." },
    { q: "Které dvě státní vlajky jsou čtvercové?", o: ["Švýcarsko a Vatikán", "Dánsko a Norsko", "Japonsko a Korea", "Čad a Rumunsko"], why: "Švýcarská i vatikánská vlajka mají poměr stran 1 : 1." },
    { q: "Kdy byla přijata vlajka s modrým klínem?", o: ["V roce 1920", "V roce 1993", "V roce 1848", "V roce 1968"], why: "Přijalo ji Československo; Česko si ji po rozdělení ponechalo." }
  ],
  cards: [
    { f: "Která vlajka se považuje za nejstarší nepřetržitě užívanou?", b: "Dánský Dannebrog (legenda 1219, doložen od 14. století)." },
    { f: "Které dvojice vlajek si lze snadno splést?", b: "Čad × Rumunsko; Indonésie × Monako." }
  ]
},
{
  id: "ce6", area: "cestovani", title: "Zvyky, které je dobré znát",
  text: [
    "Spropitné: v USA se v restauraci běžně dává 15–20 % a pro obsluhu je to podstatná část mzdy. V Japonsku se naopak spropitné obvykle nedává a může působit rozpačitě – dobrá obsluha se tam považuje za samozřejmost.",
    "Gesta: v Bulharsku (a zčásti v Albánii) se při „ano“ tradičně kývá hlavou ze strany na stranu a při „ne“ nahoru a dolů – přesně naopak než u nás. V Thajsku se hlava považuje za nejposvátnější část těla, takže se nikoho nedotýkej na hlavě, a mířit na lidi nebo sochy Buddhy chodidly je urážlivé.",
    "U jídla: v Japonsku i Číně nezapichuj hůlky svisle do misky s rýží – připomíná to pohřební obřad. V Japonsku se také nepředává jídlo z hůlek do hůlek, ze stejného důvodu."
  ],
  takeaway: "USA: spropitné 15–20 %, Japonsko: spropitné se nedává. Bulharsko: kývání naopak. Thajsko: nedotýkat se hlavy. Hůlky nezapichovat do rýže.",
  evidence: "střední", evidenceNote: "Obecně popsané zvyklosti; ve velkých městech a u mladší generace se mohou lišit.",
  sources: [{ name: "Japan National Tourism Organization – etiketa; Lonely Planet – průvodci po jednotlivých zemích" }],
  quiz: [
    { q: "Jak je to se spropitným v Japonsku?", o: ["Obvykle se nedává", "Je povinných 20 %", "Dává se jen v hotovosti v obálce na stole", "Dává se pouze řidičům"], why: "Spropitné v Japonsku není běžné a může působit rozpačitě." },
    { q: "Co znamená v Bulharsku tradičně kývání hlavou nahoru a dolů?", o: ["Ne", "Ano", "Děkuji", "Pozdrav"], why: "Význam gest pro ano/ne je v Bulharsku opačný než u nás." },
    { q: "Proč nezapichovat hůlky svisle do rýže?", o: ["Připomíná to pohřební obřad", "Hůlky se zlomí", "Je to znamení, že chceš účet", "Rýže vystydne"], why: "Svisle zapíchnuté hůlky připomínají obětinu za zemřelé." }
  ],
  cards: [
    { f: "Spropitné v USA vs. Japonsku?", b: "USA: běžně 15–20 %; Japonsko: obvykle se nedává." },
    { f: "Na co dát pozor v Thajsku?", b: "Nedotýkat se hlavy, nemířit na lidi a Buddhu chodidly." }
  ]
},
{
  id: "ce7", area: "cestovani", title: "Slavní rodáci z nečekaných míst",
  text: [
    "Freddie Mercury, frontman skupiny Queen, se narodil v roce 1946 jako Farrokh Bulsara v Kamenném městě na Zanzibaru. Dětství strávil zčásti v Indii a do Anglie se rodina přestěhovala až v roce 1964.",
    "Napoleon Bonaparte se narodil v roce 1769 na Korsice – jen rok poté, co ostrov získala Francie od Janovské republiky. Kdyby se narodil o něco dřív, narodil by se jako janovský poddaný. Spisovatel Rudyard Kipling, autor Knihy džunglí, se narodil v Bombaji (Mumbaji) a Albert Camus v Alžírsku, tehdy francouzské kolonii.",
    "Marie Curie-Skłodowská, jediná osoba se dvěma Nobelovými cenami ve dvou různých přírodovědných oborech (fyzika 1903, chemie 1911), se narodila ve Varšavě v tehdy ruské části Polska. Vědeckou kariéru prožila ve Francii."
  ],
  takeaway: "Mercury – Zanzibar, Napoleon – Korsika (rok po připojení k Francii), Kipling – Bombaj, Camus – Alžírsko, Curie – Varšava.",
  evidence: "silné", evidenceNote: "Dobře doložené životopisné údaje.",
  sources: [{ name: "Encyclopaedia Britannica (životopisná hesla); NobelPrize.org – Marie Curie" }],
  quiz: [
    { q: "Kde se narodil Freddie Mercury?", o: ["Na Zanzibaru", "V Londýně", "V Bombaji", "V Teheránu"], why: "Narodil se v roce 1946 v Kamenném městě na Zanzibaru." },
    { q: "Co je zajímavé na Napoleonově rodišti?", o: ["Korsika patřila Francii teprve od roku před jeho narozením", "Narodil se v Paříži", "Narodil se na lodi", "Narodil se v Itálii po sjednocení"], why: "Francie získala Korsiku od Janova v roce 1768." },
    { q: "Ve kterých oborech získala Marie Curie Nobelovu cenu?", o: ["Fyzika a chemie", "Medicína a chemie", "Fyzika a literatura", "Jen chemie"], why: "Fyzika 1903 a chemie 1911." }
  ],
  cards: [
    { f: "Rodiště Freddieho Mercuryho a Rudyarda Kiplinga?", b: "Zanzibar (1946) a Bombaj/Mumbaj (1865)." },
    { f: "Marie Curie – rodiště a Nobelovy ceny?", b: "Varšava; fyzika 1903, chemie 1911." }
  ]
}
);
L.push(
{
  id: "sp1", area: "sport", title: "Polarizovaný trénink: 80 % lehce",
  text: [
    "Stephen Seiler analyzoval tréninkové deníky špičkových vytrvalců (běžkařů, veslařů, cyklistů) a zjistil podobný vzorec: zhruba 80 % tréninků probíhá v nízké intenzitě (dá se při nich mluvit) a jen asi 20 % ve vysoké. Střední „šedá zóna“ – svižné tempo, které unaví, ale nepřinese největší podnět – se u nich objevuje překvapivě málo.",
    "Randomizovaná studie Stöggla a Sperlicha (2014) srovnala u rekreačních vytrvalců čtyři modely tréninku po 9 týdnů. Polarizovaný model zlepšil VO₂max a výkon nejvíc.",
    "Proč to funguje: lehký objem buduje aerobní základ (mitochondrie, kapiláry) a přitom málo unavuje. Díky tomu můžeš intervaly odjet opravdu tvrdě. Častá chyba amatérů je běhat všechno ve středním tempu – každý trénink pak trochu bolí a žádný není skutečně kvalitní."
  ],
  takeaway: "Zhruba 80 % tréninku lehce (konverzační tempo), 20 % tvrdě. Vyhýbej se tomu, aby všechno bylo „středně“.",
  evidence: "střední", evidenceNote: "Silná pozorovací data u elitních sportovců a několik randomizovaných studií; u amatérů s malým objemem může fungovat i jiné rozložení.",
  sources: [
    { name: "Seiler, What is best practice for training intensity and duration distribution? Int J Sports Physiol Perform 2010" },
    { name: "Stöggl & Sperlich, Frontiers in Physiology 2014", url: "https://doi.org/10.3389/fphys.2014.00033" }
  ],
  quiz: [
    { q: "Jaký podíl tréninku vytrvalci v polarizovaném modelu tráví v nízké intenzitě?", o: ["Zhruba 80 %", "Zhruba 20 %", "Zhruba 50 %", "100 %"], why: "Typické rozložení je asi 80 : 20 ve prospěch nízké intenzity." },
    { q: "Co je častou chybou amatérských vytrvalců?", o: ["Většinu tréninků jezdí ve středním tempu", "Trénují příliš lehce", "Dělají příliš mnoho regenerace", "Spí příliš dlouho"], why: "Střední tempo unavuje, ale nepřináší maximální podnět – „šedá zóna“." },
    { q: "Jak poznáš nízkou intenzitu bez měřáku?", o: ["Dá se při ní plynule mluvit", "Nedá se při ní mluvit vůbec", "Tep je nad 180", "Po tréninku zvracíš"], why: "Konverzační test je jednoduchý a dobře koreluje s první ventilační hranicí." }
  ],
  cards: [
    { f: "Polarizovaný trénink – rozložení intenzity?", b: "~80 % nízká intenzita, ~20 % vysoká, minimum „šedé zóny“." },
    { f: "Proč tolik lehkého tréninku?", b: "Buduje aerobní základ s malou únavou, takže intervaly mohou být opravdu kvalitní." }
  ]
},
{
  id: "sp2", area: "sport", title: "Pravidlo 10 % a progresivní přetížení",
  text: [
    "Aby se tělo zlepšovalo, musí zátěž postupně růst – to je princip progresivního přetížení. Bez něj se výkonnost zastaví, příliš rychlé zvyšování ale vede k přetížení a zranění.",
    "Mezi běžci se traduje „pravidlo 10 %“: týdenní objem nezvyšovat o víc než 10 %. Randomizovaná studie Buista a kol. (2008) u 532 začínajících běžců ale nenašla rozdíl ve výskytu zranění mezi skupinou, která zvyšovala objem o 10 % týdně, a skupinou s rychlejším nárůstem. Pravidlo je tedy rozumná pomůcka, ne prokázaný zákon.",
    "Co v praxi dává větší smysl: zvyšovat zátěž postupně, každý 3.–4. týden zařadit lehčí (odlehčovací) týden a sledovat signály – přetrvávající bolest, horší spánek, zvýšený klidový tep. Riziko zranění zvyšují hlavně náhlé skoky, například po nemoci nebo dovolené."
  ],
  takeaway: "Zátěž zvyšuj postupně a pravidelně odlehčuj. Pravidlo 10 % je užitečná pomůcka, ale jeho ochranný efekt se v randomizované studii nepotvrdil.",
  evidence: "střední", evidenceNote: "Princip přetížení je pevně doložený; konkrétní hranice 10 % podporu v randomizované studii nemá.",
  sources: [{ name: "Buist a kol., No effect of a graded training program on the number of running-related injuries, Am J Sports Med 2008" }],
  quiz: [
    { q: "Co zjistila studie Buista (2008) o pravidle 10 %?", o: ["Výskyt zranění se mezi skupinami nelišil", "Pravidlo snížilo zranění na polovinu", "Pravidlo zranění zvýšilo", "Studie se zraněními nezabývala"], why: "Mezi postupným (10 %) a rychlejším nárůstem nebyl rozdíl ve zraněních." },
    { q: "Co je progresivní přetížení?", o: ["Postupné zvyšování tréninkové zátěže", "Trénink do úplného vyčerpání", "Trénink jen jednou týdně", "Náhlé zdvojnásobení objemu"], why: "Tělo se adaptuje, jen když zátěž postupně roste." },
    { q: "Jak často se obvykle zařazuje odlehčovací týden?", o: ["Každý 3.–4. týden", "Jednou ročně", "Každý druhý den", "Nikdy"], why: "Odlehčení umožní vstřebat předchozí zátěž." }
  ],
  cards: [
    { f: "Pravidlo 10 % – jak silný je důkaz?", b: "Slabý: v RCT (Buist 2008) nesnížilo výskyt zranění. Je to pomůcka, ne zákon." },
    { f: "Co nejvíc zvyšuje riziko zranění?", b: "Náhlé skoky v zátěži, např. po pauze nebo nemoci." }
  ]
},
{
  id: "sp3", area: "sport", title: "Taper: jak se vyladit na závod",
  text: [
    "Taper je období před důležitým závodem, kdy se snižuje tréninková zátěž, aby odezněla únava a projevila se nabraná výkonnost.",
    "Metaanalýza Bosqueta a kol. (2007) shrnula 27 studií: nejlepší výsledek přinesl taper trvající zhruba dva týdny (8–14 dní), při kterém se objem tréninku sníží asi o 41–60 %, ale intenzita i frekvence tréninků zůstanou zachované. Výkon se v průměru zlepšil o 2–3 %, což je na závodní úrovni hodně.",
    "Nejčastější chyby: snížit i intenzitu (tělo „usne“), nebo v posledních dnech dohánět, co se nestihlo. Během taperu je normální cítit se zvláštně neklidný – energie, která se nemá kam vybít, je spíš dobré znamení."
  ],
  takeaway: "Asi 2 týdny před závodem sniž objem o 40–60 %, ale intenzitu a počet tréninků nech. Zlepšení bývá kolem 2–3 %.",
  evidence: "silné", evidenceNote: "Metaanalýza řady kontrolovaných studií; optimální délka se liší podle sportu a individuálně.",
  sources: [{ name: "Bosquet a kol., Effects of tapering on performance: a meta-analysis, Med Sci Sports Exerc 2007" }],
  quiz: [
    { q: "O kolik se podle metaanalýzy Bosqueta (2007) nejlépe snižuje objem při taperu?", o: ["O 41–60 %", "O 5 %", "O 90–100 %", "Objem se zvyšuje"], why: "Nejlepší efekt mělo snížení objemu o 41–60 %." },
    { q: "Co se má během taperu zachovat?", o: ["Intenzita a frekvence tréninků", "Celkový objem", "Délka dlouhých běhů", "Nic, má se úplně odpočívat"], why: "Udržení intenzity zabrání ztrátě adaptací." },
    { q: "Jaké zlepšení výkonu taper v průměru přinesl?", o: ["Asi 2–3 %", "Asi 20–30 %", "Žádné", "Asi 0,1 %"], why: "Na závodní úrovni je 2–3 % velký rozdíl." }
  ],
  cards: [
    { f: "Optimální taper podle Bosqueta (2007)?", b: "~8–14 dní, objem −41–60 %, intenzita a frekvence zachované." },
    { f: "Nejčastější chyby při taperu?", b: "Snížit i intenzitu, nebo na poslední chvíli dohánět trénink." }
  ]
},
{
  id: "sp4", area: "sport", title: "Strečink, rozcvička a prevence zranění",
  text: [
    "Dlouhé statické protahování těsně před výkonem může krátkodobě snížit sílu a výbušnost. Přehled Behma a kol. (2016) ukázal, že efekt je hlavně u výdrží delších než 60 sekund na sval; kratší výdrže v rámci rozcvičení mají malý nebo žádný negativní dopad.",
    "Lepší je dynamická rozcvička: postupně zrychlovat, kroužení, výpady, náběhy – připraví svaly, šlachy i nervový systém.",
    "A co prevence zranění? Metaanalýza Lauersena a kol. (2014) zahrnula 25 randomizovaných studií s více než 26 000 sportovci. Silový trénink snížil počet sportovních zranění na méně než třetinu, proprioceptivní (balanční) trénink přibližně na polovinu – samotný strečink žádný průkazný ochranný efekt neměl."
  ],
  takeaway: "Před výkonem dynamická rozcvička místo dlouhého statického strečinku. Nejlepší prevence zranění je silový trénink.",
  evidence: "silné", evidenceNote: "Systematické přehledy a metaanalýzy randomizovaných studií.",
  sources: [
    { name: "Behm a kol., Appl Physiol Nutr Metab 2016 (akutní efekty strečinku)" },
    { name: "Lauersen a kol., Br J Sports Med 2014", url: "https://doi.org/10.1136/bjsports-2013-092538" }
  ],
  quiz: [
    { q: "Který typ tréninku nejvíc snížil sportovní zranění v metaanalýze Lauersena (2014)?", o: ["Silový trénink", "Statický strečink", "Dlouhé běhy", "Masáže"], why: "Silový trénink snížil zranění na méně než třetinu." },
    { q: "Kdy statický strečink před výkonem nejvíc snižuje sílu?", o: ["Při výdržích delších než 60 s", "Při výdržích kratších než 10 s", "Nikdy", "Jen ve vodě"], why: "Negativní efekt se projevuje hlavně u dlouhých výdrží." },
    { q: "Jaký průkazný ochranný efekt měl samotný strečink proti zraněním?", o: ["Žádný průkazný", "Snížil zranění na třetinu", "Zcela je odstranil", "Zranění zdvojnásobil"], why: "Strečink v metaanalýze nevykázal významnou ochranu." }
  ],
  cards: [
    { f: "Nejlepší prevence sportovních zranění (Lauersen 2014)?", b: "Silový trénink – zranění na méně než 1/3; strečink bez průkazného efektu." },
    { f: "Jakou rozcvičku před výkonem?", b: "Dynamickou; dlouhé statické výdrže (>60 s) mohou krátkodobě snížit sílu." }
  ]
},
{
  id: "sp5", area: "sport", title: "Sacharidy během vytrvalostního výkonu",
  text: [
    "Zásoby glykogenu ve svalech a játrech vystačí při intenzivním vytrvalostním výkonu zhruba na 90–120 minut. Pak hrozí „zeď“ – prudký pokles výkonu.",
    "Odborná doporučení (ACSM 2016, Jeukendrup 2014) uvádějí: při výkonu kolem 1–2,5 hodiny přijímat 30–60 g sacharidů za hodinu, při delších výkonech až 90 g za hodinu. Vyšších dávek lze dosáhnout jen kombinací glukózy a fruktózy, protože se ve střevě vstřebávají různými přenašeči.",
    "Střevo je trénovatelné: kdo zkouší vysoký příjem poprvé až na závodě, riskuje žaludeční potíže. Proto se doporučuje závodní výživu vyzkoušet na delších trénincích. U výkonů pod hodinu stačí často jen vypláchnout ústa sacharidovým nápojem – i to v některých studiích zlepšilo výkon."
  ],
  takeaway: "1–2,5 h výkonu: 30–60 g sacharidů/h; delší výkony: až 90 g/h (glukóza + fruktóza). Výživu trénuj předem.",
  evidence: "silné", evidenceNote: "Odborná stanoviska založená na řadě kontrolovaných studií; individuální tolerance se liší.",
  sources: [
    { name: "Jeukendrup, A step towards personalized sports nutrition, Sports Med 2014" },
    { name: "Thomas, Erdman, Burke: ACSM/AND/DC Position Stand, Med Sci Sports Exerc 2016" }
  ],
  quiz: [
    { q: "Kolik sacharidů za hodinu se doporučuje při výkonech delších než ~2,5 h?", o: ["Až 90 g", "Do 10 g", "Přes 300 g", "Žádné"], why: "Až 90 g/h, pokud jde o kombinaci glukózy a fruktózy." },
    { q: "Proč se pro vysoký příjem kombinuje glukóza s fruktózou?", o: ["Vstřebávají se různými přenašeči", "Fruktóza je sladší", "Glukóza je zakázaná", "Kvůli barvě"], why: "Dva různé přenašeče zvyšují celkovou kapacitu vstřebávání." },
    { q: "Proč zkoušet závodní výživu předem na tréninku?", o: ["Střevo se dá na vyšší příjem natrénovat", "Kvůli pravidlům závodu", "Aby gely nezvětraly", "Není to potřeba"], why: "Postupný trénink střeva snižuje žaludeční potíže." }
  ],
  cards: [
    { f: "Sacharidy při výkonu 1–2,5 h?", b: "30–60 g/h." },
    { f: "Sacharidy při výkonu nad 2,5 h?", b: "Až 90 g/h, kombinace glukózy a fruktózy." }
  ]
},
{
  id: "sp6", area: "sport", title: "Spánek jako legální zlepšovák",
  text: [
    "Ve studii Cheri Mah a kol. (2011) prodloužili basketbalisté Stanfordovy univerzity na 5–7 týdnů spánek s cílem 10 hodin v posteli denně. Zrychlil se jim sprint, zlepšila přesnost střelby (trestné hody i trojky zhruba o 9 %) a cítili se lépe fyzicky i psychicky.",
    "Studie byla malá (11 hráčů) a bez kontrolní skupiny, ale dobře zapadá do širších dat: nedostatek spánku zhoršuje vytrvalost, rozhodování, vnímání námahy a zvyšuje riziko zranění. Například u dospívajících sportovců byl spánek kratší než 8 hodin spojen s vyšším výskytem zranění (Milewski a kol., 2014).",
    "Prakticky: před důležitým výkonem „nasbírat spánek“ v předchozích dnech pomáhá víc než se snažit vyspat noc před závodem, kdy nervozita spánek často zkracuje. Krátký odpolední spánek (20–30 minut) také může zlepšit výkon i pozornost."
  ],
  takeaway: "Víc spánku = lepší výkon. Spánkový „vklad“ v dnech před závodem je důležitější než poslední noc.",
  evidence: "střední", evidenceNote: "Konzistentní souvislosti a menší intervenční studie; velké randomizované studie chybí.",
  sources: [
    { name: "Mah a kol., The effects of sleep extension on the athletic performance of collegiate basketball players, Sleep 2011", url: "https://doi.org/10.5665/SLEEP.1132" },
    { name: "Milewski a kol., J Pediatr Orthop 2014" }
  ],
  quiz: [
    { q: "O kolik se zhruba zlepšila přesnost střelby basketbalistů po prodloužení spánku?", o: ["Asi o 9 %", "Asi o 90 %", "Vůbec", "Zhoršila se"], why: "Trestné hody i trojky se zlepšily zhruba o 9 procentních bodů." },
    { q: "Proč je síla důkazů u této studie jen střední?", o: ["Malý vzorek a chybějící kontrolní skupina", "Studie byla zfalšovaná", "Hráči nespali", "Byla provedena na myších"], why: "11 hráčů bez kontrolní skupiny – výsledky jsou spíš ukazatel." },
    { q: "Kdy je nejdůležitější dobře spát před závodem?", o: ["V dnech před závodem", "Jen noc před závodem", "Den po závodě", "Na tom nezáleží"], why: "Noc před závodem bývá kvůli nervozitě horší; rozhoduje dlouhodobý spánek." }
  ],
  cards: [
    { f: "Studie Mah (2011) – co prodloužení spánku přineslo?", b: "Rychlejší sprint a asi o 9 % přesnější střelbu u basketbalistů." },
    { f: "Spánek a riziko zranění u mladých sportovců?", b: "Spánek pod 8 h byl spojen s vyšším výskytem zranění (Milewski 2014)." }
  ]
},

{
  id: "pp1", area: "pomoc", title: "Resuscitace: volej a stlačuj",
  text: [
    "Když někdo nereaguje, zavolej záchrannou službu 155 (nebo 112) a zapni hlasitý odposlech. Podle doporučení Evropské rady pro resuscitaci (ERC 2025) se má volat u každého člověka, který nereaguje – není potřeba nejdřív složitě ověřovat dýchání. Dispečer tě celou situací provede.",
    "Pokud postižený nedýchá normálně – a pozor, ojedinělé lapavé nádechy nejsou normální dýchání, ale častý projev zástavy – začni stlačovat hrudník: dlaně doprostřed hrudníku (na dolní polovinu hrudní kosti), propnuté paže, frekvence 100–120 stlačení za minutu, hloubka 5–6 cm, a vždy nech hrudník úplně vrátit.",
    "Kdo není vyškolený v dýchání z úst do úst, má podle ERC dělat jen nepřerušované stlačování. Vyškolený zachránce střídá 30 stlačení a 2 vdechy. Stlačování je velmi namáhavé – pokud je víc zachránců, střídejte se zhruba každé 2 minuty a nepřerušujte, dokud nepřevezmou záchranáři nebo se člověk neprobere."
  ],
  takeaway: "Nereaguje → 155 a hlasitý odposlech. Nedýchá normálně → stlačuj střed hrudníku 100–120×/min do hloubky 5–6 cm, bez přestávek.",
  evidence: "silné", evidenceNote: "Mezinárodní doporučení ERC 2025 založená na konsenzu ILCOR. Tato lekce nenahrazuje praktický kurz první pomoci.",
  sources: [{ name: "ERC Guidelines 2025: Adult Basic Life Support, Resuscitation 2025", url: "https://doi.org/10.1016/j.resuscitation.2025.110771" }],
  quiz: [
    { q: "Jakou frekvencí se má stlačovat hrudník?", o: ["100–120 za minutu", "30–40 za minutu", "200 za minutu", "Jednou za 10 sekund"], why: "ERC doporučuje 100–120 stlačení za minutu." },
    { q: "Do jaké hloubky stlačovat hrudník dospělého?", o: ["5–6 cm", "1–2 cm", "10–12 cm", "Jen se dotknout"], why: "Aspoň 5 cm, ale ne víc než 6 cm." },
    { q: "Jak brát ojedinělé lapavé nádechy u člověka v bezvědomí?", o: ["Jako známku zástavy – začít stlačovat", "Jako normální dýchání", "Jako známku, že spí", "Jako důvod čekat"], why: "Lapavé dýchání je častý projev srdeční zástavy." }
  ],
  cards: [
    { f: "Resuscitace dospělého – frekvence a hloubka?", b: "100–120 stlačení/min, hloubka 5–6 cm, nechat hrudník vrátit." },
    { f: "Netrénovaný zachránce – stlačování, nebo i dýchání?", b: "Jen nepřerušované stlačování hrudníku; vyškolený 30 : 2." }
  ]
},
{
  id: "pp2", area: "pomoc", title: "AED: přístroj, který tě navede",
  text: [
    "Automatický externí defibrilátor (AED) je přenosný přístroj, který sám vyhodnotí srdeční rytmus a pokud je potřeba, doporučí nebo podá elektrický výboj. Po zapnutí mluví a krok za krokem navádí – kam nalepit elektrody, kdy se postiženého nedotýkat a kdy pokračovat ve stlačování.",
    "U náhlé srdeční zástavy rozhoduje čas. Šance na přežití klesá s každou minutou bez defibrilace zhruba o 7–10 %, pokud nikdo neresuscituje. Kvalitní stlačování hrudníku tento pokles výrazně zpomaluje – proto se resuscitace a AED kombinují.",
    "Výboj nelze podat omylem: přístroj ho dovolí jen u rytmu, který se defibrilací léčí. Riziko, že zachránce postiženému ublíží, je podle ERC velmi nízké. V Česku pomáhá najít nejbližší AED aplikace Záchranka, která umí zároveň přivolat pomoc."
  ],
  takeaway: "AED tě navede hlasem a výboj podá jen tehdy, když je potřeba. Každá minuta bez defibrilace snižuje šanci na přežití zhruba o 7–10 %.",
  evidence: "silné", evidenceNote: "Doporučení ERC; procento poklesu za minutu je odhad z observačních dat.",
  sources: [
    { name: "ERC Guidelines 2025: Adult Basic Life Support", url: "https://doi.org/10.1016/j.resuscitation.2025.110771" },
    { name: "Aplikace Záchranka (ČR)" }
  ],
  quiz: [
    { q: "O kolik zhruba klesá šance na přežití s každou minutou bez defibrilace (bez resuscitace)?", o: ["O 7–10 %", "O 0,5 %", "O 50 %", "Neklesá"], why: "Bez resuscitace klesá šance zhruba o 7–10 % za minutu." },
    { q: "Může AED podat výboj člověku, který ho nepotřebuje?", o: ["Ne, výboj umožní jen u defibrilovatelného rytmu", "Ano, kdykoli se zmáčkne tlačítko", "Ano, vždy po zapnutí", "Jen v noci"], why: "Přístroj sám analyzuje rytmus." },
    { q: "Co dělat, když AED zrovna analyzuje nebo dává výboj?", o: ["Nedotýkat se postiženého", "Pokračovat ve stlačování", "Odpojit elektrody", "Postiženého otočit"], why: "Během analýzy a výboje se nikdo nesmí postiženého dotýkat." }
  ],
  cards: [
    { f: "Pokles šance na přežití bez defibrilace?", b: "Zhruba 7–10 % za minutu (bez resuscitace)." },
    { f: "Jak v ČR najít nejbližší AED?", b: "Aplikace Záchranka – ukáže AED a přivolá pomoc." }
  ]
},
{
  id: "pp3", area: "pomoc", title: "Dušení: záda, pak břicho",
  text: [
    "Pokud se člověk dusí, ale dokáže kašlat a mluvit, jde o částečnou obstrukci – povzbuzuj ho ke kašli a nezasahuj. Kašel je nejúčinnější způsob, jak předmět vypudit.",
    "Pokud kašlat ani mluvit nemůže, postupuje se podle ERC takto: předkloň ho a dej až 5 úderů dlaní mezi lopatky. Když to nepomůže, proveď až 5 stlačení nadbřišku (Heimlichův manévr): stoupni si za něj, sevřenou pěst polož mezi pupek a dolní konec hrudní kosti, druhou rukou ji obejmi a prudce zatlač dovnitř a nahoru. Pak opět 5 úderů do zad – a střídej.",
    "Když člověk ztratí vědomí, zavolej 155 a začni resuscitaci. Po Heimlichově manévru by měl postiženého vyšetřit lékař, protože může dojít k vnitřnímu poranění. U malých dětí a kojenců se postup liší."
  ],
  takeaway: "Kašle → nech ho kašlat. Nemůže kašlat → 5× úder mezi lopatky, 5× stlačení nadbřišku, střídat. Bezvědomí → 155 a resuscitace.",
  evidence: "silné", evidenceNote: "Doporučení ERC pro dospělé; postup u kojenců je odlišný.",
  sources: [{ name: "ERC Guidelines 2025: Adult Basic Life Support (obstrukce dýchacích cest cizím tělesem)", url: "https://doi.org/10.1016/j.resuscitation.2025.110771" }],
  quiz: [
    { q: "Co dělat, když se dusící se člověk dokáže kašlat?", o: ["Povzbuzovat ho ke kašli", "Hned provést Heimlichův manévr", "Dát mu napít", "Položit ho na záda"], why: "Účinný kašel je nejlepší způsob, jak předmět vypudit." },
    { q: "Jaký je správný sled u člověka, který nemůže kašlat?", o: ["5 úderů mezi lopatky, pak 5 stlačení nadbřišku, střídat", "Jen stlačení nadbřišku", "Jen čekat na záchranku", "Dýchání z úst do úst"], why: "ERC doporučuje střídat údery do zad a stlačení nadbřišku." },
    { q: "Proč by měl po Heimlichově manévru postiženého vyšetřit lékař?", o: ["Hrozí vnitřní poranění", "Kvůli pojišťovně", "Není to potřeba", "Aby dostal antibiotika"], why: "Stlačení nadbřišku může poranit vnitřní orgány." }
  ],
  cards: [
    { f: "Dušení dospělého – postup, když nemůže kašlat?", b: "5× úder mezi lopatky → 5× stlačení nadbřišku → střídat; bezvědomí → 155 a KPR." },
    { f: "Kde přesně při Heimlichově manévru?", b: "Pěst mezi pupek a dolní konec hrudní kosti, tlak dovnitř a nahoru." }
  ]
},
{
  id: "pp4", area: "pomoc", title: "Mozková mrtvice: čas je mozek",
  text: [
    "Mrtvici pomáhá rozpoznat zkratka FAST (v češtině často „Tvář, Ruka, Řeč, Čas“): pokleslý koutek úst, slabost nebo necitlivost jedné ruky, nesrozumitelná nebo zmatená řeč. Pokud se objeví i jen jeden z příznaků, volej okamžitě 155 – i když příznaky odezní.",
    "Proč spěchat: při typické cévní mozkové příhodě odumírá podle odhadu Savera (2006) zhruba 1,9 milionu neuronů každou minutu. Léčba, která rozpustí sraženinu (trombolýza), se obvykle podává do 4,5 hodiny od začátku příznaků, mechanické odstranění sraženiny (trombektomie) lze u vybraných pacientů provést i později.",
    "Důležitá informace pro lékaře je čas, kdy příznaky začaly (nebo kdy byl člověk naposledy v pořádku). Postiženému nedávej jíst ani pít – může mít poruchu polykání."
  ],
  takeaway: "Pokleslý koutek, slabá ruka, porucha řeči → hned 155 a zapamatuj si čas začátku. Každá minuta znamená miliony neuronů.",
  evidence: "silné", evidenceNote: "Mezinárodní doporučení; časová okna léčby se u jednotlivých pacientů liší.",
  sources: [
    { name: "Saver, Time is brain – quantified, Stroke 2006", url: "https://doi.org/10.1161/01.STR.0000196957.55928.ab" },
    { name: "European Stroke Organisation – doporučení pro trombolýzu" }
  ],
  quiz: [
    { q: "Co znamená zkratka FAST?", o: ["Tvář, ruka, řeč, čas", "Horečka, alergie, spánek, teplota", "Rychlá pomoc bez volání", "Pády, artróza, svaly, tlak"], why: "Face, Arm, Speech, Time – rozpoznání mrtvice." },
    { q: "Kolik neuronů podle odhadu odumírá každou minutu neléčené mrtvice?", o: ["Asi 1,9 milionu", "Asi 19", "Asi 1 900", "Žádné"], why: "Saver (2006) odhadl ~1,9 milionu neuronů za minutu." },
    { q: "Do kolika hodin od začátku příznaků se obvykle podává trombolýza?", o: ["Do 4,5 hodiny", "Do 48 hodin", "Do týdne", "Kdykoli"], why: "Standardní časové okno pro trombolýzu je 4,5 hodiny." }
  ],
  cards: [
    { f: "Příznaky mrtvice (FAST)?", b: "Pokleslý koutek, slabá ruka, porucha řeči → ihned 155." },
    { f: "Co si zapamatovat pro lékaře u mrtvice?", b: "Čas začátku příznaků (nebo kdy byl naposledy v pořádku)." }
  ]
},
{
  id: "pp5", area: "pomoc", title: "Silné krvácení",
  text: [
    "Život ohrožující krvácení může zabít během několika minut – rychleji, než dorazí záchranka. Prvním krokem je přímý tlak: silně přitlač ránu dlaní, ideálně přes čistou látku nebo obvaz, a nepřestávej. Pak přilož tlakový obvaz. Volej 155.",
    "Pokud silné krvácení z končetiny nejde zastavit tlakem, doporučuje ERC použít škrtidlo (turniket) – nad ránou, utáhnout, dokud krvácení nepřestane, a zapsat čas přiložení. Improvizované škrtidlo z provázku bývá málo účinné; pokud máš ve výbavě (např. v autě nebo na túry) skutečné škrtidlo, je to výrazně lepší.",
    "Předměty zaklíněné v ráně nevytahuj – mohou krvácení tlumit. Fixuj je a tlač kolem nich. U podezření na šok uložení postiženého vleže a udržování tepla také pomáhá."
  ],
  takeaway: "Silné krvácení: přímý tlak → tlakový obvaz → 155. Nejde zastavit na končetině → škrtidlo nad ránou a zapsat čas.",
  evidence: "silné", evidenceNote: "Doporučení ERC pro první pomoc. Lekce nenahrazuje praktický kurz.",
  sources: [{ name: "ERC Guidelines 2025: First Aid", url: "https://www.erc.edu/science-research/" }],
  quiz: [
    { q: "Co je první krok u silného krvácení?", o: ["Silný přímý tlak na ránu", "Zvednout nohy a čekat", "Vytáhnout předmět z rány", "Polít ránu alkoholem"], why: "Přímý tlak je nejrychlejší a nejúčinnější první zásah." },
    { q: "Kdy použít škrtidlo?", o: ["Když krvácení z končetiny nejde zastavit tlakem", "U každého škrábnutí", "Na krk", "Nikdy"], why: "Škrtidlo je pro život ohrožující krvácení z končetin." },
    { q: "Co udělat se zaklíněným předmětem v ráně?", o: ["Nechat ho tam a fixovat", "Rychle ho vytáhnout", "Zatlačit hlouběji", "Uříznout"], why: "Předmět může krvácení tlumit; vytažení ho může zhoršit." }
  ],
  cards: [
    { f: "Silné krvácení – postup?", b: "Přímý tlak → tlakový obvaz → 155; na končetině při selhání tlaku škrtidlo." },
    { f: "Co zapsat po přiložení škrtidla?", b: "Čas přiložení." }
  ]
},
{
  id: "pp6", area: "pomoc", title: "Úpal a podchlazení",
  text: [
    "Úpal (přehřátí s teplotou nad 40 °C) je život ohrožující stav. Varovné příznaky: zmatenost, neobvyklé chování, horká kůže, zrychlený tep, až bezvědomí. Může se objevit i u zdravých sportovců při běhu v horku.",
    "Postup: volej 155, přesuň postiženého do stínu a co nejrychleji ho chlaď. ERC doporučuje jako nejúčinnější ponoření těla až po krk do studené vody; pokud to nejde, polévej ho vodou, ofukuj a přikládej chladné obklady na celé tělo. Rychlost ochlazení rozhoduje o následcích.",
    "Podchlazení je opačný problém: třes, později zpomalení, zmatenost a ospalost. Zabraň dalším ztrátám tepla – přesun do závětří, izolace od země, suché oblečení, přikrýt hlavu. S podchlazeným člověkem manipuluj šetrně a teplé sladké nápoje dávej jen při plném vědomí. Při zmatenosti nebo bezvědomí volej 155."
  ],
  takeaway: "Úpal: 155 a rychle chladit, nejlépe ponořením do studené vody. Podchlazení: zabránit dalším ztrátám tepla, šetrně manipulovat, pít jen při plném vědomí.",
  evidence: "silné", evidenceNote: "Doporučení ERC pro první pomoc.",
  sources: [{ name: "ERC Guidelines 2025: First Aid", url: "https://www.erc.edu/science-research/" }],
  quiz: [
    { q: "Jaký způsob chlazení u úpalu doporučuje ERC jako nejúčinnější?", o: ["Ponoření těla do studené vody", "Studený obklad jen na čelo", "Pomalé ochlazování v místnosti", "Pití horkého čaje"], why: "Ponoření do studené vody ochladí tělo nejrychleji." },
    { q: "Který příznak odlišuje úpal od běžného vyčerpání z horka?", o: ["Zmatenost nebo neobvyklé chování", "Žízeň", "Pocení", "Únava"], why: "Porucha vědomí a chování ukazuje na úpal – akutní stav." },
    { q: "Kdy dát podchlazenému teplý sladký nápoj?", o: ["Jen při plném vědomí", "Vždy, i v bezvědomí", "Nikdy", "Jen alkohol"], why: "Při poruše vědomí hrozí vdechnutí tekutiny." }
  ],
  cards: [
    { f: "Úpal – postup?", b: "155, stín, rychlé chlazení – nejlépe ponoření do studené vody." },
    { f: "Podchlazení – hlavní zásady?", b: "Zabránit dalším ztrátám tepla, izolace od země, šetrná manipulace, nápoj jen při plném vědomí." }
  ]
}
);
L.push(
{
  id: "zd1", area: "zdravi", title: "Krevní tlak: tichý zabiják",
  text: [
    "Vysoký krevní tlak obvykle nebolí, a proto se mu říká tichý zabiják. Dlouhodobě přitom poškozuje cévy, srdce, mozek, ledviny i oči a patří k hlavním rizikovým faktorům infarktu a mrtvice.",
    "Evropská kardiologická společnost (ESC) v doporučeních z roku 2024 rozlišuje tři pásma: normální tlak pod 120/70 mmHg, zvýšený tlak 120–139/70–89 mmHg a hypertenzi od 140/90 mmHg. U většiny léčených pacientů doporučuje cílit na systolický tlak 120–129 mmHg, pokud ho dobře snášejí.",
    "Měření v ordinaci může být zkreslené („syndrom bílého pláště“), proto má velkou hodnotu domácí měření: v klidu vsedě, po pěti minutách odpočinku, paže v úrovni srdce, několik dní ráno a večer. Tlak snižuje pravidelný pohyb, méně soli, méně alkoholu, zdravá hmotnost a dostatek spánku."
  ],
  takeaway: "Normál pod 120/70, zvýšený 120–139/70–89, hypertenze od 140/90 (ESC 2024). Nebolí, proto ho měř – ideálně i doma.",
  evidence: "silné", evidenceNote: "Doporučení ESC 2024 založená na velkých randomizovaných studiích a metaanalýzách.",
  sources: [{ name: "McEvoy a kol., 2024 ESC Guidelines for the management of elevated blood pressure and hypertension, Eur Heart J 2024", url: "https://doi.org/10.1093/eurheartj/ehae178" }],
  quiz: [
    { q: "Od jaké hodnoty definuje ESC (2024) hypertenzi?", o: ["Od 140/90 mmHg", "Od 120/80 mmHg", "Od 160/100 mmHg", "Od 100/60 mmHg"], why: "Hypertenze je od 140/90; pásmo 120–139/70–89 je „zvýšený tlak“." },
    { q: "Proč se vysokému tlaku říká tichý zabiják?", o: ["Obvykle nebolí, ale poškozuje cévy", "Způsobuje ztrátu hlasu", "Projevuje se jen v noci", "Je vždy dědičný"], why: "Většina lidí s vysokým tlakem nemá žádné příznaky." },
    { q: "Jak správně měřit tlak doma?", o: ["V klidu vsedě po 5 minutách, paže v úrovni srdce", "Hned po běhu", "Vestoje se zvednutou rukou", "Jednou za rok"], why: "Standardizované podmínky dávají spolehlivé hodnoty." }
  ],
  cards: [
    { f: "Pásma krevního tlaku podle ESC 2024?", b: "Normál <120/70 · zvýšený 120–139/70–89 · hypertenze ≥140/90." },
    { f: "Cílový systolický tlak u léčené hypertenze (ESC 2024)?", b: "120–129 mmHg, pokud ho pacient dobře snáší." }
  ]
},
{
  id: "zd2", area: "zdravi", title: "LDL cholesterol: příčina, ne jen ukazatel",
  text: [
    "Cholesterol v krvi přenášejí lipoproteiny. LDL („zlý“ cholesterol) se ukládá do stěn tepen a tvoří plaky, které mohou prasknout a způsobit infarkt nebo mrtvici.",
    "Konsenzus Evropské společnosti pro aterosklerózu (Ference a kol., 2017) shrnul data z genetických studií, kohort i randomizovaných studií: LDL není jen ukazatel rizika, ale přímá příčina aterosklerózy. Platí přitom, že rozhoduje celková „dávka“ – jak vysoký LDL je a jak dlouho. Proto má smysl začít s prevencí včas.",
    "Jaká hodnota je „dobrá“, záleží na celkovém riziku člověka (věk, tlak, kouření, cukrovka, rodinná anamnéza) – u zdravého nízkorizikového člověka platí jiný cíl než po infarktu. LDL snižuje strava s menším podílem nasycených tuků a víc vlákniny, pohyb a zdravá hmotnost; u vyššího rizika i léky."
  ],
  takeaway: "LDL cholesterol přímo způsobuje aterosklerózu; rozhoduje jeho výše × doba působení. Cílová hodnota závisí na celkovém riziku.",
  evidence: "silné", evidenceNote: "Konsenzus založený na genetických, observačních a randomizovaných datech.",
  sources: [{ name: "Ference a kol., EAS Consensus Statement, Eur Heart J 2017", url: "https://doi.org/10.1093/eurheartj/ehx144" }],
  quiz: [
    { q: "Co podle konsenzu EAS (2017) platí o LDL cholesterolu?", o: ["Je přímou příčinou aterosklerózy", "Je jen neškodný ukazatel", "Chrání cévy", "Nemá s infarktem souvislost"], why: "Genetická i intervenční data ukazují příčinnou souvislost." },
    { q: "Na čem závisí cílová hodnota LDL?", o: ["Na celkovém kardiovaskulárním riziku", "Jen na věku", "Na krevní skupině", "Je pro všechny stejná"], why: "U vysokého rizika jsou cíle přísnější." },
    { q: "Proč má smysl začít s prevencí včas?", o: ["Rozhoduje výše LDL i doba jeho působení", "Cholesterol se s věkem sám snižuje", "Starší lidé se léčit nemohou", "Nemá smysl"], why: "Kumulativní expozice LDL určuje riziko." }
  ],
  cards: [
    { f: "LDL cholesterol – příčina, nebo ukazatel?", b: "Přímá příčina aterosklerózy (EAS 2017); rozhoduje výše × doba." },
    { f: "Na čem závisí cílová hodnota LDL?", b: "Na celkovém riziku (věk, tlak, kouření, cukrovka, rodina)." }
  ]
},
{
  id: "zd3", area: "zdravi", title: "Alkohol: konec „sklenky pro zdraví“?",
  text: [
    "Desítky let se tradovalo, že malé množství alkoholu chrání srdce. Vycházelo to z observačních studií, kde mírní pijáci vycházeli lépe než abstinenti (tzv. J-křivka).",
    "Novější analýzy ale ukazují metodický problém: mezi „abstinenty“ byli často bývalí pijáci, kteří přestali kvůli nemoci, což je dělalo zdánlivě nemocnějšími. Metaanalýza Zhaa a kol. (2023) zahrnující přes 100 studií po korekci těchto chyb ochranný efekt mírného pití nenašla. Světová zdravotnická organizace (WHO) v roce 2023 uvedla, že pro zdraví neexistuje bezpečná míra pití alkoholu.",
    "Alkohol je navíc prokázaný karcinogen (rakovina úst, jícnu, jater, prsu, tlustého střeva) a riziko roste už od malých dávek. Pro sportovce je důležité i to, že zhoršuje spánek a regeneraci – což se často projeví na nočním HRV."
  ],
  takeaway: "Ochranný efekt „sklenky denně“ se po opravě metodických chyb nepotvrdil. Podle WHO neexistuje bezpečná míra; méně je lépe.",
  evidence: "sporné", evidenceNote: "Škodlivost vyšších dávek je jistá; u velmi malých dávek se odborníci stále přou o velikost rizika.",
  sources: [
    { name: "Zhao a kol., JAMA Network Open 2023", url: "https://doi.org/10.1001/jamanetworkopen.2023.6185" },
    { name: "WHO/Europe: No level of alcohol consumption is safe for our health (2023)" }
  ],
  quiz: [
    { q: "Jaká chyba zkreslovala staré studie o „zdravém“ pití?", o: ["Mezi abstinenty byli bývalí pijáci, kteří přestali kvůli nemoci", "Lidé pili příliš málo vody", "Studie zkoumaly jen víno", "Žádná"], why: "Tento „sick quitter“ efekt dělal abstinenty zdánlivě nemocnějšími." },
    { q: "Co uvedla WHO v roce 2023?", o: ["Neexistuje bezpečná míra pití alkoholu pro zdraví", "Dvě sklenky denně jsou zdravé", "Pivo je zdravější než voda", "Alkohol chrání před rakovinou"], why: "WHO zdůraznila, že riziko rakoviny roste už od malých dávek." },
    { q: "Proč je síla důkazů u malých dávek vedena jako „sporná“?", o: ["Velikost rizika u velmi malých dávek se stále diskutuje", "Alkohol nikdo nezkoumal", "Vyšší dávky jsou zdravé", "Studie jsou zakázané"], why: "U vyšších dávek je škodlivost jistá, u velmi malých je debata o velikosti efektu." }
  ],
  cards: [
    { f: "Chrání malé množství alkoholu srdce?", b: "Po korekci metodických chyb ochranný efekt nenalezen (Zhao 2023)." },
    { f: "Stanovisko WHO k alkoholu (2023)?", b: "Pro zdraví neexistuje bezpečná míra pití." }
  ]
},
{
  id: "zd4", area: "zdravi", title: "Screening v Česku: co a kdy",
  text: [
    "Screening je vyšetření lidí bez příznaků s cílem zachytit nemoc včas, kdy je léčba nejúspěšnější. V Česku hradí pojišťovny několik celopopulačních programů.",
    "Rakovina tlustého střeva a konečníku: od roku 2026 se hranice posunula a nárok mají lidé od 45 do 74 let – buď test na skryté krvácení ve stolici, nebo rovnou screeningová kolonoskopie. Česko tím patří k zemím s nejnižší věkovou hranicí. Kolonoskopie má výhodu, že při ní lze odstranit polypy dřív, než se z nich stane rakovina.",
    "Dále funguje screening rakoviny prsu (mamografie od 45 let jednou za dva roky) a děložního hrdla a programy časného záchytu rakoviny plic u dlouholetých kuřáků a rakoviny prostaty. O tom, co se týká právě tebe, je nejlepší mluvit s praktickým lékařem při preventivní prohlídce, na kterou je nárok jednou za dva roky."
  ],
  takeaway: "Rakovina tlustého střeva: hrazený screening od 45 do 74 let (od 2026). Preventivní prohlídka u praktika jednou za 2 roky.",
  evidence: "silné", evidenceNote: "Organizované screeningové programy snižují úmrtnost; konkrétní věkové hranice se v čase mění – ověř si aktuální stav.",
  sources: [
    { name: "Ministerstvo zdravotnictví ČR – Screening kolorektálního karcinomu", url: "https://mzd.gov.cz/category/programy-a-strategie/screeningove-programy/screening-kolorektalniho-karcinomu/" },
    { name: "Národní screeningové centrum ÚZIS ČR" }
  ],
  quiz: [
    { q: "Od kolika let je v Česku od roku 2026 hrazený screening rakoviny tlustého střeva?", o: ["Od 45 let", "Od 60 let", "Od 30 let", "Od 70 let"], why: "Hranice se posunula z 50 na 45 let (do 74 let)." },
    { q: "Jakou výhodu má screeningová kolonoskopie?", o: ["Lze při ní odstranit polypy dřív, než se z nich stane rakovina", "Je bezbolestná a bez přípravy", "Dělá se doma", "Odhalí všechny nemoci"], why: "Odstranění polypů rakovině přímo předchází." },
    { q: "Jak často je nárok na preventivní prohlídku u praktického lékaře?", o: ["Jednou za 2 roky", "Jednou za 10 let", "Každý měsíc", "Jen jednou za život"], why: "Dospělí mají nárok na preventivní prohlídku jednou za dva roky." }
  ],
  cards: [
    { f: "Screening rakoviny tlustého střeva v ČR (od 2026)?", b: "45–74 let: test na skryté krvácení, nebo screeningová kolonoskopie." },
    { f: "Mamografický screening v ČR?", b: "Od 45 let, jednou za dva roky." }
  ]
},
{
  id: "zd5", area: "zdravi", title: "Vitamín D: komu pomůže",
  text: [
    "Vitamín D si tělo vyrábí v kůži působením UVB záření. V Česku (kolem 50° severní šířky) je ale slunce zhruba od října do března tak nízko, že se ho v kůži tvoří jen málo. Nedostatek je proto v zimě častý.",
    "Velká randomizovaná studie VITAL (Manson a kol., 2019) podávala přes 25 000 lidem 2 000 IU vitamínu D denně po dobu asi 5 let. Ve srovnání s placebem nesnížila výskyt rakoviny ani srdečně-cévních onemocnění. Podobně vyšla i australská studie D-Health.",
    "To neznamená, že vitamín D nemá smysl: je nezbytný pro kosti a svaly a u lidí s prokázaným nedostatkem doplňování dává smysl. Plošné „zázračné“ účinky u lidí s dostatečnou hladinou se ale nepotvrdily. Hladinu lze zjistit krevním testem (25-OH vitamín D)."
  ],
  takeaway: "V zimě se v Česku vitamín D v kůži skoro netvoří. Doplňování pomáhá při nedostatku, ale u lidí s dobrou hladinou rakovině ani infarktům nepředchází.",
  evidence: "silné", evidenceNote: "Velké randomizované studie (VITAL, D-Health); přínos pro specifické skupiny se dál zkoumá.",
  sources: [{ name: "Manson a kol., Vitamin D Supplements and Prevention of Cancer and Cardiovascular Disease, NEJM 2019", url: "https://doi.org/10.1056/NEJMoa1809944" }],
  quiz: [
    { q: "Co ukázala studie VITAL o vitamínu D?", o: ["Nesnížil výskyt rakoviny ani srdečně-cévních nemocí", "Snížil rakovinu na polovinu", "Zvýšil riziko infarktu", "Vyléčil cukrovku"], why: "Ve srovnání s placebem nebyl rozdíl v hlavních výsledcích." },
    { q: "Proč je v Česku v zimě nedostatek vitamínu D častý?", o: ["Slunce je nízko a UVB nestačí na tvorbu v kůži", "Lidé jedí méně ryb", "V zimě se vitamín D rozkládá", "Kvůli smogu"], why: "Na 50° s. š. je od října do března UVB záření slabé." },
    { q: "Jak zjistit hladinu vitamínu D?", o: ["Krevním testem 25-OH vitamínu D", "Podle barvy kůže", "Měřením tlaku", "Nijak"], why: "25-OH vitamín D je standardní ukazatel zásob." }
  ],
  cards: [
    { f: "Studie VITAL – výsledek?", b: "2 000 IU vitamínu D denně nesnížilo rakovinu ani srdečně-cévní nemoci." },
    { f: "Kdy se v ČR vitamín D v kůži skoro netvoří?", b: "Zhruba od října do března." }
  ]
},
{
  id: "zd6", area: "zdravi", title: "Kroky: kolik jich opravdu stačí",
  text: [
    "Číslo 10 000 kroků denně se rozšířilo s japonským krokoměrem z roku 1965 jako marketingový slogan – nevzniklo z vědeckého výzkumu.",
    "Metaanalýza Palucha a kol. (2022) zahrnula 15 kohort s téměř 50 000 lidmi. Riziko úmrtí klesalo s přibývajícími kroky, ale u lidí nad 60 let se přínos ustálil zhruba při 6 000–8 000 krocích denně a u mladších dospělých při 8 000–10 000. Už přechod z nejnižší skupiny (kolem 3 500 kroků) do vyšších přinesl velký pokles rizika.",
    "Prakticky: největší přínos má, když se málo aktivní člověk začne hýbat víc. U trénovaného sportovce, který pravidelně běhá a posiluje, už počet kroků není hlavní ukazatel – důležitější je kondice (VO₂max) a síla."
  ],
  takeaway: "10 000 kroků je marketing. Přínos se ustaluje kolem 6–8 tisíc kroků (60+) a 8–10 tisíc (mladší); největší zisk má neaktivní člověk.",
  evidence: "střední", evidenceNote: "Metaanalýza velkých kohort – souvislost, ne nutně příčina.",
  sources: [{ name: "Paluch a kol., Daily steps and all-cause mortality, Lancet Public Health 2022", url: "https://doi.org/10.1016/S2468-2667(21)00302-9" }],
  quiz: [
    { q: "Odkud pochází číslo 10 000 kroků?", o: ["Z marketingu japonského krokoměru", "Z velké randomizované studie", "Z doporučení WHO", "Z armády"], why: "Šlo o reklamní slogan krokoměru z roku 1965." },
    { q: "Kde se podle Palucha (2022) ustálil přínos u lidí nad 60 let?", o: ["Kolem 6 000–8 000 kroků", "Kolem 2 000 kroků", "Kolem 20 000 kroků", "Neustálil se"], why: "U starších dospělých další kroky už riziko významně nesnižovaly." },
    { q: "Kdo má z navýšení kroků největší přínos?", o: ["Málo aktivní lidé", "Maratonci", "Lidé, kteří už chodí 15 000 kroků", "Nikdo"], why: "Největší pokles rizika je při odchodu z nejnižší skupiny." }
  ],
  cards: [
    { f: "Kolik kroků stačí podle metaanalýzy Palucha (2022)?", b: "60+ let: ~6–8 tisíc; mladší: ~8–10 tisíc denně." },
    { f: "Odkud je číslo 10 000 kroků?", b: "Marketing japonského krokoměru z roku 1965." }
  ]
},

{
  id: "te_ai1", area: "tech", title: "Jak fungují jazykové modely",
  text: [
    "Velké jazykové modely (LLM), jako je Claude nebo ChatGPT, se učí na obrovském množství textu. Základní úloha je překvapivě jednoduchá: předpovědět, jaké slovo (přesněji „token“, tedy kousek slova) bude následovat. Opakováním této předpovědi vzniká celá odpověď.",
    "Po základním tréninku se modely dál dolaďují – učí se na příkladech a na hodnocení od lidí, aby byly užitečné, pravdivé a bezpečné. Díky obrovskému rozsahu tréninku umí shrnovat, překládat, programovat nebo vysvětlovat.",
    "Slabinou jsou „halucinace“: model může sebejistě napsat něco, co zní věrohodně, ale není pravda – třeba neexistující citaci. Znalosti modelu navíc končí k určitému datu. Proto je u důležitých informací dobré chtít zdroje a ověřovat je – nebo použít model, který umí vyhledávat na webu."
  ],
  takeaway: "LLM předpovídají další token textu; umí toho hodně, ale mohou si vymýšlet. U důležitých věcí chtěj zdroje a ověřuj.",
  evidence: "silné", evidenceNote: "Popis principu je zjednodušený, ale odpovídá tomu, jak modely fungují.",
  sources: [{ name: "Vaswani a kol., Attention Is All You Need, 2017 (architektura Transformer)", url: "https://arxiv.org/abs/1706.03762" }],
  quiz: [
    { q: "Co je základní úloha, na které se jazykový model učí?", o: ["Předpovídat další token textu", "Vyhledávat v databázi odpovědí", "Kopírovat Wikipedii", "Překládat jen z angličtiny"], why: "Generování textu je opakovaná předpověď dalšího tokenu." },
    { q: "Co jsou „halucinace“ jazykových modelů?", o: ["Věrohodně znějící, ale nepravdivé odpovědi", "Chyby v pravopisu", "Pomalé odpovědi", "Obrázky ve snu"], why: "Model může sebejistě vytvořit neexistující fakta nebo citace." },
    { q: "Jak se nejlépe bránit halucinacím u důležitých informací?", o: ["Chtít zdroje a ověřovat je", "Ptát se stejnou otázkou desetkrát", "Psát velkými písmeny", "Nijak"], why: "Ověření v kvalitních zdrojích je nejspolehlivější." }
  ],
  cards: [
    { f: "Jak jazykový model vytváří odpověď?", b: "Opakovanou předpovědí dalšího tokenu (kousku slova)." },
    { f: "Co je halucinace AI?", b: "Sebejistě podaná, věrohodně znějící, ale nepravdivá informace." }
  ]
},
{
  id: "te_ai2", area: "tech", title: "Phishing a telefonní podvody",
  text: [
    "Podvodníci nejčastěji útočí na emoce: spěch („účet bude zablokován“), strach („někdo se pokouší vybrat vaše peníze“) nebo autoritu (banka, policie, nadřízený). Cílem je, abys jednal dřív, než začneš přemýšlet.",
    "Číslo nebo jméno odesílatele lze podvrhnout – hovor se může tvářit, jako by šel přímo z čísla tvé banky. Nově se objevují i hlasové klony vytvořené umělou inteligencí, které napodobí hlas známého člověka. Banka po tobě nikdy nebude chtít heslo, PIN, kód z SMS ani převod peněz na „bezpečný účet“.",
    "Obrana: zpomal, zavěs a zavolej zpět na číslo, které znáš (z karty nebo oficiálního webu). Na odkazy v SMS a e-mailech neklikej – do bankovnictví chod přes vlastní aplikaci. Ve firmě se vyplatí pravidlo, že každý neobvyklý požadavek na platbu se ověřuje druhým kanálem."
  ],
  takeaway: "Spěch a strach jsou varovné signály. Banka nikdy nechce heslo, kód ani převod na „bezpečný účet“. Zavěs a zavolej zpět na známé číslo.",
  evidence: "silné", evidenceNote: "Shrnutí doporučení bank, policie a NÚKIB; metody podvodníků se rychle vyvíjejí.",
  sources: [{ name: "NÚKIB a Policie ČR – doporučení k podvodům; Česká bankovní asociace – kampaně proti podvodům" }],
  quiz: [
    { q: "Co banka po klientovi nikdy nechce?", o: ["Heslo, PIN, kód z SMS nebo převod na „bezpečný účet“", "Návštěvu pobočky", "Aktualizaci aplikace", "Kontrolu výpisu"], why: "Tyto požadavky jsou typické znaky podvodu." },
    { q: "Hovor ukazuje číslo tvé banky. Znamená to, že volá banka?", o: ["Ne, číslo lze podvrhnout", "Ano, vždy", "Ano, pokud je den", "Jen u mobilů"], why: "Podvržení čísla volajícího (spoofing) je běžná technika." },
    { q: "Jaká je nejlepší reakce na podezřelý hovor?", o: ["Zavěsit a zavolat zpět na známé číslo", "Rychle udělat, co chtějí", "Sdělit jen polovinu kódu", "Poslat jim fotku karty"], why: "Zpětné volání na ověřené číslo odhalí podvod." }
  ],
  cards: [
    { f: "Hlavní znaky podvodu?", b: "Spěch, strach, autorita; požadavek na heslo, kód nebo převod peněz." },
    { f: "Pravidlo pro neobvyklé platby ve firmě?", b: "Vždy ověřit druhým kanálem (zpětný hovor na známé číslo)." }
  ]
},
{
  id: "te_ai3", area: "tech", title: "Hesla, správce hesel a dvoufázové ověření",
  text: [
    "Americký standardizační institut NIST v doporučeních pro digitální identitu (SP 800-63B) změnil řadu dřívějších zvyklostí: délka hesla je důležitější než složitost, není vhodné nutit uživatele k pravidelné změně hesla (vede to k slabým variantám typu Heslo1, Heslo2) a hesla se mají kontrolovat proti seznamům uniklých hesel.",
    "Největší riziko je používat stejné heslo na více místech. Když unikne z jedné služby, útočníci ho automaticky zkoušejí jinde. Řešením je správce hesel, který pro každou službu vytvoří a pamatuje si dlouhé jedinečné heslo – stačí si pamatovat jedno silné hlavní heslo.",
    "Dvoufázové ověření (2FA) přidá druhý krok – kód z aplikace, potvrzení v telefonu nebo bezpečnostní klíč. Výrazně snižuje riziko převzetí účtu i při úniku hesla. Novější „passkeys“ nahrazují hesla úplně a jsou odolné proti phishingu."
  ],
  takeaway: "Dlouhá jedinečná hesla ve správci hesel + dvoufázové ověření. Pravidelná vynucená změna hesel se už nedoporučuje.",
  evidence: "silné", evidenceNote: "Doporučení NIST SP 800-63B a bezpečnostních autorit.",
  sources: [{ name: "NIST SP 800-63B: Digital Identity Guidelines – Authentication", url: "https://pages.nist.gov/800-63-4/sp800-63b.html" }],
  quiz: [
    { q: "Co je podle NIST u hesla důležitější?", o: ["Délka", "Povinné speciální znaky", "Pravidelná změna každý měsíc", "Použití jména"], why: "Delší hesla jsou výrazně odolnější." },
    { q: "Proč je nebezpečné používat stejné heslo na více službách?", o: ["Únik z jedné služby otevře i ostatní", "Služby to zakazují", "Heslo se opotřebuje", "Není to nebezpečné"], why: "Útočníci uniklá hesla automaticky zkoušejí jinde." },
    { q: "Co přináší dvoufázové ověření?", o: ["Účet je chráněný i při úniku hesla", "Rychlejší internet", "Nahrazuje antivirus", "Nic"], why: "Útočník potřebuje kromě hesla i druhý faktor." }
  ],
  cards: [
    { f: "Hlavní doporučení NIST pro hesla?", b: "Délka > složitost, bez vynucené pravidelné změny, kontrola proti uniklým heslům." },
    { f: "Proč správce hesel?", b: "Každá služba má dlouhé jedinečné heslo; pamatuješ si jen jedno hlavní." }
  ]
},
{
  id: "te_ai4", area: "tech", title: "Mooreův zákon",
  text: [
    "V roce 1965 si Gordon Moore, pozdější spoluzakladatel firmy Intel, všiml, že počet tranzistorů na čipu se každý rok zhruba zdvojnásobuje. V roce 1975 odhad upravil na zdvojnásobení zhruba každé dva roky.",
    "Nejde o přírodní zákon, ale o pozorování, které se zároveň stalo cílem celého odvětví. Platilo pozoruhodně dlouho: od tisíců tranzistorů v prvních mikroprocesorech na začátku 70. let po desítky miliard v dnešních čipech.",
    "V posledních letech se tempo zpomaluje, protože tranzistory se blíží atomárním rozměrům a výroba je extrémně drahá. Výkon dál roste i jinými cestami – specializovanými čipy (např. pro umělou inteligenci), skládáním čipů na sebe a lepším softwarem."
  ],
  takeaway: "Mooreův zákon: počet tranzistorů na čipu se zhruba každé 2 roky zdvojnásobuje (Moore 1965/1975). Tempo dnes zpomaluje.",
  evidence: "silné", evidenceNote: "Historicky doložené pozorování, ne fyzikální zákon.",
  sources: [{ name: "Moore, Cramming more components onto integrated circuits, Electronics 1965; Computer History Museum" }],
  quiz: [
    { q: "Jak často se podle Mooreova zákona (upraveného 1975) zdvojnásobuje počet tranzistorů na čipu?", o: ["Zhruba každé 2 roky", "Každý den", "Každých 20 let", "Nikdy"], why: "Moore v roce 1975 upravil odhad na zhruba dva roky." },
    { q: "Co je Mooreův zákon?", o: ["Pozorování a cíl odvětví, ne přírodní zákon", "Fyzikální zákon jako gravitace", "Zákon schválený parlamentem", "Pravidlo pro hesla"], why: "Jde o empirické pozorování trendu." },
    { q: "Proč tempo Mooreova zákona zpomaluje?", o: ["Tranzistory se blíží atomárním rozměrům", "Nikdo už čipy nepotřebuje", "Byl zakázán", "Kvůli nedostatku písku"], why: "Fyzikální limity a náklady výroby." }
  ],
  cards: [
    { f: "Mooreův zákon?", b: "Počet tranzistorů na čipu se zhruba každé 2 roky zdvojnásobuje (1965, upraveno 1975)." },
    { f: "Kudy roste výkon, když Mooreův zákon zpomaluje?", b: "Specializované čipy (AI), skládání čipů, lepší software." }
  ]
},
{
  id: "te_ai5", area: "tech", title: "Zámek v prohlížeči neznamená důvěryhodný web",
  text: [
    "Ikona zámku a adresa začínající na https znamenají, že spojení mezi tvým zařízením a webem je šifrované – nikdo po cestě (třeba na veřejné wi-fi) nemůže data číst ani měnit.",
    "Zámek ale neříká nic o tom, kdo web provozuje a jestli je poctivý. Šifrovací certifikát dnes zdarma a během minut získá kdokoli, včetně podvodníků. Většina phishingových stránek proto zámek má také.",
    "Důležitější je kontrolovat samotnou adresu: podvodné weby používají podobná jména (ceska-sporitelna-overeni.com), překlepy nebo jiné domény. Nejbezpečnější je do bankovnictví a důležitých služeb chodit přes vlastní záložku nebo aplikaci, ne přes odkaz v e-mailu či SMS."
  ],
  takeaway: "Zámek = šifrované spojení, ne poctivý web. Kontroluj adresu a do banky choď přes vlastní záložku nebo aplikaci.",
  evidence: "silné", evidenceNote: "Technický princip HTTPS; doporučení bezpečnostních autorit.",
  sources: [{ name: "NÚKIB – doporučení pro bezpečné chování na internetu; Let's Encrypt – o certifikátech" }],
  quiz: [
    { q: "Co zaručuje zámek (https) v prohlížeči?", o: ["Šifrované spojení", "Že web je poctivý", "Že web patří bance", "Že web nemá viry"], why: "HTTPS chrání přenos dat, neověřuje poctivost provozovatele." },
    { q: "Mají podvodné weby zámek?", o: ["Často ano – certifikát lze získat zdarma", "Nikdy", "Jen v noci", "Jen na mobilu"], why: "Certifikát je dostupný komukoli." },
    { q: "Jak nejbezpečněji otevřít internetové bankovnictví?", o: ["Přes vlastní záložku nebo aplikaci", "Přes odkaz v SMS", "Přes odkaz v e-mailu", "Přes reklamu ve vyhledávači"], why: "Vyhneš se podvrženým odkazům." }
  ],
  cards: [
    { f: "Co znamená zámek v prohlížeči?", b: "Šifrované spojení – ne to, že je web poctivý." },
    { f: "Na co se dívat místo zámku?", b: "Na přesnou adresu (doménu); do banky přes vlastní záložku/aplikaci." }
  ]
},
{
  id: "te_ai6", area: "tech", title: "Zálohy: pravidlo 3-2-1",
  text: [
    "Data se ztrácejí překvapivě často: porucha disku, ztracený telefon, omylem smazaný soubor, krádež nebo vyděračský software (ransomware), který soubory zašifruje a požaduje výkupné.",
    "Osvědčené pravidlo 3-2-1 říká: měj 3 kopie dat, na 2 různých typech úložišť a 1 kopii mimo domov či kancelář (například v cloudu). Pokud jedna kopie selže, zbývají další.",
    "Důležité detaily: synchronizace (třeba sdílená složka) není záloha – smazání nebo zašifrování se zrcadlí všude. Dobrá záloha uchovává starší verze souborů. A zálohu je potřeba občas vyzkoušet obnovit – nevyzkoušená záloha může být nefunkční."
  ],
  takeaway: "3 kopie, 2 typy úložiště, 1 mimo místo. Synchronizace není záloha a zálohu je potřeba občas vyzkoušet obnovit.",
  evidence: "silné", evidenceNote: "Obecně uznávaná praxe v IT (např. doporučení US-CERT/CISA).",
  sources: [{ name: "CISA – Data Backup Options; NÚKIB – doporučení k zálohování" }],
  quiz: [
    { q: "Co znamená pravidlo 3-2-1?", o: ["3 kopie, 2 typy úložiště, 1 mimo místo", "3 hesla, 2 účty, 1 počítač", "Zálohovat 3× ročně", "3 disky v jednom počítači"], why: "Rozložení kopií chrání před většinou typů ztráty." },
    { q: "Je synchronizovaná složka (např. sdílený disk) záloha?", o: ["Ne, smazání či zašifrování se zrcadlí", "Ano, vždy", "Ano, pokud je v cloudu", "Jen o víkendu"], why: "Synchronizace přenese i chyby a útoky." },
    { q: "Proč zálohu občas zkoušet obnovit?", o: ["Nevyzkoušená záloha může být nefunkční", "Aby nezastarala", "Je to povinné ze zákona", "Není to potřeba"], why: "Ověří se, že data jdou opravdu obnovit." }
  ],
  cards: [
    { f: "Pravidlo zálohování 3-2-1?", b: "3 kopie dat, 2 různé typy úložiště, 1 kopie mimo místo." },
    { f: "Proč synchronizace není záloha?", b: "Smazání nebo zašifrování se okamžitě přenese všude." }
  ]
}
);
L.push(
{
  id: "pr1", area: "priroda", title: "Plejtvák obrovský: největší tvor všech dob",
  text: [
    "Plejtvák obrovský dorůstá délky kolem 30 metrů a hmotnosti přes 150 tun. Je větší než kterýkoli známý dinosaurus – je to největší živočich, o kterém víme, že kdy žil.",
    "Přesto se živí drobným krilem (korýši dlouhými pár centimetrů). Nabere obrovské množství vody, kosticemi ji procedí a krill spolkne. Během krmné sezóny takto spořádá denně několik tun potravy. Jeho hluboké zvuky patří k nejhlasitějším ve světě zvířat a pod vodou se šíří na stovky kilometrů.",
    "Ve 20. století lov velryb téměř vyhubil celé populace, zvlášť v Jižním oceánu, kde byly uloveny statisíce plejtváků. Od roku 1966 je druh mezinárodně chráněn. Populace se pomalu zotavuje, ale stále je zařazen mezi ohrožené druhy."
  ],
  takeaway: "~30 m a přes 150 t – největší živočich všech dob, který se živí drobným krilem. Lov ve 20. století ho téměř vyhubil.",
  evidence: "silné", evidenceNote: "Dobře doložené údaje; maximální rozměry jsou odhady z historických úlovků.",
  sources: [{ name: "IUCN Red List: Balaenoptera musculus; NOAA Fisheries – Blue Whale" }],
  quiz: [
    { q: "Čím se živí plejtvák obrovský?", o: ["Krilem", "Žraloky", "Tuleni", "Řasami z mořského dna"], why: "Kosticemi cedí z vody drobné korýše – kril." },
    { q: "Od kdy je plejtvák obrovský mezinárodně chráněn?", o: ["Od roku 1966", "Od roku 1866", "Od roku 2016", "Není chráněn"], why: "Komerční lov byl zakázán v roce 1966." },
    { q: "Jak velký je plejtvák obrovský ve srovnání s dinosaury?", o: ["Větší než kterýkoli známý dinosaurus", "Menší než většina dinosaurů", "Stejně velký jako T. rex", "Srovnání nelze udělat"], why: "Je to největší známý živočich v historii Země." }
  ],
  cards: [
    { f: "Rozměry plejtváka obrovského?", b: "Kolem 30 m a přes 150 t – největší živočich všech dob." },
    { f: "Od kdy je plejtvák chráněn?", b: "Od roku 1966 (zákaz komerčního lovu)." }
  ]
},
{
  id: "pr2", area: "priroda", title: "Gepard: rychlost není všechno",
  text: [
    "Gepard je nejrychlejší suchozemské zvíře – v krátkém sprintu dosahuje rychlosti kolem 90–100 km/h. Má lehkou kostru, dlouhé nohy, pružnou páteř a ocas, který při ostrých zatáčkách funguje jako kormidlo.",
    "Studie Wilsona a kol. (2013), která sledovala divoké gepardy obojky s GPS a akcelerometry, ukázala, že o úspěchu lovu rozhoduje víc zrychlení a schopnost prudce zpomalit a změnit směr než nejvyšší rychlost. Typická honička je krátká – obvykle jen kolem 200 metrů.",
    "Delší sprint gepard nezvládne kvůli přehřátí a vyčerpání. Po úspěšném lovu musí často odpočívat a kořist mu nezřídka ukradnou silnější lvi nebo hyeny. Gepard je dnes zranitelný druh; ve volné přírodě jich žije jen několik tisíc."
  ],
  takeaway: "Gepard běží kolem 90–100 km/h, ale lov vyhrává hlavně zrychlením a obratností. Honička trvá jen pár stovek metrů.",
  evidence: "silné", evidenceNote: "Měření z terénních i laboratorních studií; maximální rychlost se mezi studiemi liší.",
  sources: [{ name: "Wilson a kol., Locomotion dynamics of hunting in wild cheetahs, Nature 2013", url: "https://doi.org/10.1038/nature12295" }],
  quiz: [
    { q: "Co podle studie Wilsona (2013) nejvíc rozhoduje o úspěchu lovu geparda?", o: ["Zrychlení a obratnost", "Jen nejvyšší rychlost", "Síla čelistí", "Barva srsti"], why: "Rychlé zrychlení, brzdění a změna směru byly klíčové." },
    { q: "Jak dlouhá bývá typická honička geparda?", o: ["Kolem 200 metrů", "Kolem 5 kilometrů", "Kolem 20 metrů", "Celý den"], why: "Sprinty jsou krátké kvůli přehřátí a vyčerpání." },
    { q: "K čemu slouží gepardovi dlouhý ocas při běhu?", o: ["Jako kormidlo při zatáčkách", "K plašení kořisti", "K chlazení", "Nemá žádnou funkci"], why: "Ocas pomáhá udržet rovnováhu při prudkých změnách směru." }
  ],
  cards: [
    { f: "Rychlost geparda?", b: "Kolem 90–100 km/h v krátkém sprintu." },
    { f: "Co rozhoduje o úspěchu lovu geparda?", b: "Zrychlení a obratnost víc než maximální rychlost (Wilson 2013)." }
  ]
},
{
  id: "pr3", area: "priroda", title: "Odkud pochází kyslík, který dýcháme",
  text: [
    "Často se říká, že Amazonie je „plíce planety“. Prales sice vyrábí obrovské množství kyslíku fotosyntézou, ale téměř stejné množství zase spotřebují jeho vlastní stromy, zvířata, houby a mikroorganismy při dýchání a rozkladu. Čistý přínos kyslíku z Amazonie do atmosféry je proto blízko nule. Pro klima je ale nenahraditelná – ukládá obrovské množství uhlíku.",
    "Podle NOAA pochází zhruba polovina kyslíku na Zemi z oceánu, hlavně z drobného fytoplanktonu. Jen jediná mikroskopická sinice Prochlorococcus, nejhojnější fotosyntetizující organismus na planetě, se odhadem podílí až na 20 % kyslíku v biosféře.",
    "Kyslík v atmosféře se přitom hromadil miliardy let. I kdyby fotosyntéza na chvíli ustala, zásoba ve vzduchu by vydržela velmi dlouho – skutečné riziko úbytku lesů a planktonu je hlavně v uhlíku a klimatu, ne v tom, že bychom se zadusili."
  ],
  takeaway: "Asi polovina kyslíku pochází z oceánského planktonu. Amazonie má čistý přínos kyslíku blízko nule, ale je zásadní zásobárnou uhlíku.",
  evidence: "silné", evidenceNote: "Shoda vědeckých zdrojů; podíly jednotlivých organismů jsou odhady.",
  sources: [{ name: "NOAA Ocean Service: How much oxygen comes from the ocean?", url: "https://oceanservice.noaa.gov/facts/ocean-oxygen.html" }],
  quiz: [
    { q: "Jaký podíl kyslíku na Zemi pochází zhruba z oceánu?", o: ["Asi polovina", "Asi 1 %", "Prakticky všechen", "Žádný"], why: "NOAA uvádí, že asi 50 % kyslíku produkuje oceán, hlavně plankton." },
    { q: "Proč je čistý přínos kyslíku z Amazonie blízko nule?", o: ["Prales spotřebuje skoro tolik kyslíku, kolik vyrobí", "Stromy v Amazonii nefotosyntetizují", "Kyslík odvane vítr", "Amazonie je poušť"], why: "Dýchání a rozklad spotřebují většinu vyrobeného kyslíku." },
    { q: "Jak se jmenuje sinice, která je nejhojnějším fotosyntetizujícím organismem?", o: ["Prochlorococcus", "Penicillium", "Escherichia coli", "Plankton obecný"], why: "Prochlorococcus vyrábí odhadem až 20 % kyslíku biosféry." }
  ],
  cards: [
    { f: "Kolik kyslíku pochází z oceánu?", b: "Zhruba polovina, hlavně z fytoplanktonu (NOAA)." },
    { f: "Je Amazonie „plíce planety“?", b: "Čistý přínos kyslíku je blízko nule; je ale zásadní zásobárnou uhlíku." }
  ]
},
{
  id: "pr4", area: "priroda", title: "Rybák dlouhoocasý: rekordman v tahu",
  text: [
    "Rybák dlouhoocasý váží zhruba 100 gramů, ale každý rok létá mezi hnízdišti v Arktidě a zimovišti u Antarktidy. Díky tomu zažívá víc denního světla než kterýkoli jiný živočich – léto na severu i na jihu.",
    "Egevang a kol. (2010) připevnili rybákům z Grónska a Islandu miniaturní lokátory vážící jen asi 1,4 gramu. Zjistili, že ptáci neletí přímo, ale po klikaté trase využívající převládající větry, a ročně urazí v průměru asi 70 000 km – nejdelší známý tah ze všech zvířat.",
    "Rybáci se mohou dožít přes 30 let. Za život tak nalétají kolem 2,4 milionu kilometrů – to odpovídá zhruba třem cestám na Měsíc a zpět."
  ],
  takeaway: "Pták o váze ~100 g létá ročně ~70 000 km mezi Arktidou a Antarktidou – za život jako třikrát na Měsíc a zpět.",
  evidence: "silné", evidenceNote: "Měření pomocí geolokátorů; jednotliví ptáci se liší.",
  sources: [{ name: "Egevang a kol., Tracking of Arctic terns reveals longest animal migration, PNAS 2010", url: "https://doi.org/10.1073/pnas.0909493107" }],
  quiz: [
    { q: "Kolik kilometrů ročně v průměru nalétá rybák dlouhoocasý?", o: ["Asi 70 000 km", "Asi 700 km", "Asi 7 000 km", "Asi 700 000 km"], why: "Egevang (2010) změřil průměr kolem 70 900 km." },
    { q: "Proč rybáci neletí přímou trasou?", o: ["Využívají převládající větry", "Ztrácejí orientaci", "Hledají staré kamarády", "Letí jen v noci"], why: "Klikatá trasa po větru šetří energii." },
    { q: "Čím je rybák výjimečný kromě délky tahu?", o: ["Zažívá nejvíc denního světla ze všech živočichů", "Je největší pták", "Nemusí jíst", "Létá pozpátku"], why: "Střídá léto v Arktidě a v Antarktidě." }
  ],
  cards: [
    { f: "Roční tah rybáka dlouhoocasého?", b: "Asi 70 000 km mezi Arktidou a Antarktidou (Egevang 2010)." },
    { f: "Kolik nalétá rybák za život?", b: "Kolem 2,4 milionu km – zhruba 3× na Měsíc a zpět." }
  ]
},
{
  id: "pr5", area: "priroda", title: "Žralok grónský: 400 let pod ledem",
  text: [
    "Žralok grónský žije ve studených vodách severního Atlantiku a Severního ledového oceánu. Plave velmi pomalu – kolem 1 km/h – a roste jen asi centimetr za rok.",
    "Jak zjistit věk zvířete, které nemá letokruhy? Nielsen a kol. (2016) využili radiouhlíkovou metodu na čočce oka, která se tvoří už před narozením a během života se nemění. Největší zkoumaná samice měla odhadem 392 let (s nejistotou ±120 let). Žralok grónský je tak nejdéle žijícím známým obratlovcem.",
    "Pohlavně dospívá teprve kolem 150 let věku. To dělá druh velmi zranitelným: populace, která přijde o dospělé jedince (například jako vedlejší úlovek rybářů), se obnovuje celá staletí."
  ],
  takeaway: "Žralok grónský se dožívá odhadem kolem 400 let a dospívá až kolem 150 let – nejdéle žijící známý obratlovec.",
  evidence: "střední", evidenceNote: "Metoda je inovativní a vědecky uznávaná, ale odhad věku má velkou nejistotu (±120 let).",
  sources: [{ name: "Nielsen a kol., Eye lens radiocarbon reveals centuries of longevity in the Greenland shark, Science 2016", url: "https://doi.org/10.1126/science.aaf1703" }],
  quiz: [
    { q: "Jak se určoval věk žraloků grónských?", o: ["Radiouhlíkovou metodou z čočky oka", "Počítáním zubů", "Podle letokruhů v ploutvích", "Podle délky ocasu"], why: "Oční čočka se tvoří před narozením a nemění se." },
    { q: "Kolem kolika let žralok grónský pohlavně dospívá?", o: ["Kolem 150 let", "Kolem 5 let", "Kolem 30 let", "Nikdy"], why: "Pozdní dospívání dělá druh velmi zranitelným." },
    { q: "Proč je síla důkazů vedena jako „střední“?", o: ["Odhad věku má velkou nejistotu", "Žraloky nikdo neviděl", "Studie byla vyvrácena", "Žraloci žijí jen 20 let"], why: "Odhad 392 let má rozpětí ±120 let." }
  ],
  cards: [
    { f: "Věk žraloka grónského?", b: "Odhadem kolem 400 let (392 ± 120) – nejdéle žijící známý obratlovec." },
    { f: "Proč je žralok grónský zranitelný?", b: "Dospívá až kolem 150 let, populace se obnovuje staletí." }
  ]
},
{
  id: "pr6", area: "priroda", title: "Pět velkých vymírání",
  text: [
    "V historii Země došlo k pěti hromadným vymíráním, při kterých během geologicky krátké doby zmizela velká část druhů.",
    "Největší bylo permské vymírání zhruba před 252 miliony let – zaniklo odhadem kolem 90 % mořských druhů a velká část suchozemských. Hlavní příčinou byly obrovské sopečné erupce na Sibiři, které vyvolaly prudké oteplení, okyselení oceánů a úbytek kyslíku ve vodě.",
    "Nejznámější je vymírání na konci křídy před 66 miliony let, kdy zmizeli neptačí dinosauři a zhruba tři čtvrtiny druhů. Příčinou byl dopad asteroidu o průměru kolem 10 km v místě dnešního kráteru Chicxulub v Mexiku. Ptáci jsou přitom potomci dinosaurů, kteří katastrofu přežili. Řada vědců dnes mluví o probíhajícím šestém vymírání, které způsobuje člověk."
  ],
  takeaway: "Největší vymírání: perm (~252 mil. let, ~90 % mořských druhů). Dinosaury vyhubil asteroid Chicxulub před 66 mil. let – ptáci jsou jejich potomci.",
  evidence: "silné", evidenceNote: "Vědecký konsenzus; podíly vymřelých druhů jsou odhady.",
  sources: [{ name: "Encyclopaedia Britannica: Mass extinction; Schulte a kol., Science 2010 (Chicxulub)" }],
  quiz: [
    { q: "Které vymírání bylo největší?", o: ["Permské (~252 mil. let)", "Na konci křídy", "Ve středověku", "Ordovické bylo jediné"], why: "Na konci permu zaniklo kolem 90 % mořských druhů." },
    { q: "Co vyhubilo neptačí dinosaury?", o: ["Dopad asteroidu (Chicxulub)", "Doba ledová", "Lidé", "Nedostatek trávy"], why: "Asteroid o průměru ~10 km dopadl před 66 miliony let." },
    { q: "Kteří živočichové jsou potomky dinosaurů?", o: ["Ptáci", "Krokodýli", "Savci", "Žraloci"], why: "Ptáci jsou linie dinosaurů, která přežila." }
  ],
  cards: [
    { f: "Největší hromadné vymírání?", b: "Permské, ~252 mil. let, ~90 % mořských druhů (sibiřský vulkanismus)." },
    { f: "Konec dinosaurů?", b: "Asteroid Chicxulub, 66 mil. let; přežili ptačí dinosauři." }
  ]
},

{
  id: "vn1", area: "vynalezy", title: "Bratři Wrightové: 12 sekund, které změnily svět",
  text: [
    "Dne 17. prosince 1903 u Kitty Hawk v Severní Karolíně vzlétl Orville Wright v letounu Flyer. První let trval 12 sekund a měřil asi 37 metrů – kratší než rozpětí křídel dnešního dopravního letadla. Čtvrtý let toho dne s Wilburem za řízením trval 59 sekund a měřil asi 260 metrů.",
    "Wrightové byli majitelé obchodu s jízdními koly, ne vědci s titulem. Jejich klíčový přínos nebyl motor, ale řízení: vymysleli systém ovládání ve třech osách (kroucení křídel, výškovka, směrovka), který v principu používají letadla dodnes. Postavili si i vlastní aerodynamický tunel a přepočítali nepřesná data svých předchůdců.",
    "Od prvního letu k přistání na Měsíci uběhlo jen 66 let."
  ],
  takeaway: "17. 12. 1903: první řízený motorový let (12 s, 37 m). Klíčem bylo řízení ve třech osách, ne motor.",
  evidence: "silné", evidenceNote: "Dobře zdokumentovaná historie.",
  sources: [{ name: "Smithsonian National Air and Space Museum: The Wright Brothers" }],
  quiz: [
    { q: "Jak dlouho trval první let bratří Wrightů?", o: ["12 sekund", "12 minut", "2 hodiny", "1 sekundu"], why: "První let 17. 12. 1903 trval 12 sekund a měřil asi 37 m." },
    { q: "Co bylo hlavním přínosem Wrightů?", o: ["Systém řízení ve třech osách", "Vynález spalovacího motoru", "Proudový motor", "Vrtulník"], why: "Řiditelnost byla klíčový problém, který vyřešili." },
    { q: "Čím se bratři Wrightové původně živili?", o: ["Měli obchod s jízdními koly", "Byli profesoři fyziky", "Byli námořníci", "Byli bankéři"], why: "Zkušenosti z výroby kol využili při stavbě letadla." }
  ],
  cards: [
    { f: "První řízený motorový let?", b: "17. 12. 1903, Kitty Hawk, Orville Wright – 12 s, 37 m." },
    { f: "Hlavní přínos Wrightů?", b: "Řízení ve třech osách (kroucení křídel, výškovka, směrovka)." }
  ]
},
{
  id: "vn2", area: "vynalezy", title: "Telefon: závod o hodiny",
  text: [
    "Dne 14. února 1876 podal Alexander Graham Bell na americkém patentovém úřadu žádost o patent na telefon. Téhož dne podal Elisha Gray předběžné oznámení (caveat) na podobné zařízení. Bell patent získal 7. března 1876 a spor o prvenství se táhl roky.",
    "Do historie se zapsal také Ital Antonio Meucci, který na zařízení pro přenos hlasu pracoval už o desetiletí dříve, ale neměl peníze na obnovení předběžné patentové ochrany. Americká Sněmovna reprezentantů v roce 2002 jeho přínos oficiálně uznala.",
    "První srozumitelná věta po telefonu zazněla 10. března 1876, kdy Bell zavolal na svého asistenta: „Pane Watsone, pojďte sem, chci vás vidět.“"
  ],
  takeaway: "Bell podal patent 14. 2. 1876 – v týž den jako Gray. Prvenství se dodnes diskutuje i kvůli Meuccimu.",
  evidence: "silné", evidenceNote: "Data jsou doložená; otázka „skutečného“ vynálezce je historiky diskutovaná.",
  sources: [{ name: "Library of Congress: Alexander Graham Bell Papers; US House Resolution 269 (2002)" }],
  quiz: [
    { q: "Kdo podal oznámení o podobném vynálezu ve stejný den jako Bell?", o: ["Elisha Gray", "Thomas Edison", "Nikola Tesla", "Guglielmo Marconi"], why: "Gray podal caveat 14. 2. 1876, stejně jako Bell svou žádost." },
    { q: "Čí přínos k telefonu uznala Sněmovna reprezentantů USA v roce 2002?", o: ["Antonia Meucciho", "Thomase Edisona", "Samuela Morse", "Jamese Watta"], why: "Meucci pracoval na přenosu hlasu dřív, ale nemohl si dovolit patent." },
    { q: "Kdy zazněla první srozumitelná věta po telefonu?", o: ["10. března 1876", "1. ledna 1900", "4. července 1776", "14. února 1850"], why: "Bell zavolal na asistenta Watsona." }
  ],
  cards: [
    { f: "Patent na telefon – kdy a kdo?", b: "Bell podal 14. 2. 1876 (týž den jako Gray), udělen 7. 3. 1876." },
    { f: "Kdo je „zapomenutý“ vynálezce telefonu?", b: "Antonio Meucci – uznán Sněmovnou reprezentantů USA v roce 2002." }
  ]
},
{
  id: "vn3", area: "vynalezy", title: "Tranzistor: malý spínač, velká revoluce",
  text: [
    "V prosinci 1947 předvedli John Bardeen a Walter Brattain v laboratořích Bell Labs první funkční tranzistor. William Shockley krátce nato navrhl jeho praktičtější podobu. Všichni tři získali v roce 1956 Nobelovu cenu za fyziku.",
    "Tranzistor je polovodičová součástka, která funguje jako spínač nebo zesilovač. Nahradil elektronky – velké, křehké a energeticky náročné skleněné baňky, kterých měly první počítače tisíce a často se přepalovaly.",
    "Tranzistor umožnil miniaturizaci: tranzistorová rádia, kalkulačky, počítače a nakonec chytré telefony. Dnešní čipy obsahují desítky miliard tranzistorů a tranzistor je považován za nejvyráběnější lidský výrobek v historii."
  ],
  takeaway: "Tranzistor (Bell Labs, 1947) nahradil elektronky a umožnil celou moderní elektroniku. Nobelova cena 1956.",
  evidence: "silné", evidenceNote: "Dobře zdokumentovaná historie techniky.",
  sources: [{ name: "NobelPrize.org: The Nobel Prize in Physics 1956; Computer History Museum" }],
  quiz: [
    { q: "Kde vznikl první tranzistor?", o: ["V Bell Labs", "V IBM", "V CERNu", "V Applu"], why: "Bardeen a Brattain ho předvedli v Bell Labs v roce 1947." },
    { q: "Co tranzistor nahradil?", o: ["Elektronky", "Baterie", "Kabely", "Magnetofony"], why: "Elektronky byly velké, křehké a energeticky náročné." },
    { q: "Kdy získali vynálezci tranzistoru Nobelovu cenu?", o: ["V roce 1956", "V roce 1901", "V roce 1999", "Nezískali ji"], why: "Bardeen, Brattain a Shockley – Nobelova cena za fyziku 1956." }
  ],
  cards: [
    { f: "Vznik tranzistoru?", b: "1947, Bell Labs – Bardeen, Brattain (a Shockley); Nobelova cena 1956." },
    { f: "Co tranzistor nahradil?", b: "Elektronky – velké, křehké a energeticky náročné." }
  ]
},
{
  id: "vn4", area: "vynalezy", title: "Edison a žárovka: vynález i systém",
  text: [
    "Edison žárovku nevynalezl jako první. Elektrické světlo zkoumala řada vynálezců před ním a Angličan Joseph Swan předváděl funkční žárovku s uhlíkovým vláknem zhruba ve stejné době. Obě firmy se později spojily.",
    "Edisonův tým v říjnu 1879 otestoval žárovku s uhlíkovým vláknem, která svítila přes 13 hodin. Pak systematicky vyzkoušel tisíce materiálů; vlákno z karbonizovaného bambusu vydrželo přes 1 000 hodin.",
    "Edisonův skutečný přínos byl celý systém: generátory, rozvodná síť, vypínače, pojistky i elektroměry. V roce 1882 spustil v New Yorku elektrárnu Pearl Street, která dodávala proud domům a firmám. Žárovka bez sítě by byla jen kuriozita."
  ],
  takeaway: "Edison nebyl první, kdo žárovku sestrojil. Jeho hlavní přínos byl celý systém výroby a rozvodu elektřiny (Pearl Street, 1882).",
  evidence: "silné", evidenceNote: "Historický konsenzus; podíl jednotlivých vynálezců se interpretuje různě.",
  sources: [{ name: "Smithsonian: Edison's Lightbulb; Encyclopaedia Britannica: Joseph Swan" }],
  quiz: [
    { q: "Kdo předváděl funkční žárovku s uhlíkovým vláknem zhruba ve stejné době jako Edison?", o: ["Joseph Swan", "Nikola Tesla", "Michael Faraday", "James Watt"], why: "Swan v Anglii; obě firmy se později spojily." },
    { q: "V čem byl Edisonův hlavní přínos?", o: ["V celém systému výroby a rozvodu elektřiny", "Ve vynálezu elektřiny", "Ve vynálezu baterie", "Ve vynálezu LED"], why: "Elektrárna, síť, pojistky a elektroměry udělaly ze žárovky praktickou věc." },
    { q: "Z čeho bylo vlákno, které vydrželo přes 1 000 hodin?", o: ["Z karbonizovaného bambusu", "Ze zlata", "Z wolframu", "Z bavlny"], why: "Edisonův tým testoval tisíce materiálů; bambus vyšel nejlépe." }
  ],
  cards: [
    { f: "Byl Edison první, kdo sestrojil žárovku?", b: "Ne – současně např. Joseph Swan; Edisonův přínos byl celý systém." },
    { f: "Pearl Street (1882)?", b: "Edisonova elektrárna v New Yorku dodávající proud domům a firmám." }
  ]
},
{
  id: "vn5", area: "vynalezy", title: "World Wide Web: „vágní, ale vzrušující“",
  text: [
    "Internet a web nejsou totéž. Internet je síť propojených počítačů, jejíž kořeny sahají k americkému ARPANETu z roku 1969. World Wide Web je služba, která na internetu běží: propojené stránky s odkazy, které otevíráš v prohlížeči.",
    "Web navrhl Tim Berners-Lee v CERNu u Ženevy. V březnu 1989 sepsal návrh na systém sdílení informací a jeho nadřízený na něj připsal: „Vágní, ale vzrušující“. V roce 1991 spustil první webovou stránku a navrhl i základy, které platí dodnes – HTML, adresy URL a protokol HTTP.",
    "Klíčové rozhodnutí přišlo 30. dubna 1993: CERN uvolnil technologii webu volně k užití bez poplatků. Právě to umožnilo jeho bleskové rozšíření."
  ],
  takeaway: "Web (Berners-Lee, CERN, 1989–1991) není totéž co internet. CERN ho v roce 1993 uvolnil zdarma – a to rozhodlo o jeho úspěchu.",
  evidence: "silné", evidenceNote: "Dobře zdokumentovaná historie.",
  sources: [{ name: "CERN: A short history of the Web", url: "https://home.cern/science/computing/birth-web/short-history-web" }],
  quiz: [
    { q: "Kde vznikl World Wide Web?", o: ["V CERNu", "V Silicon Valley", "Na MIT", "V Microsoftu"], why: "Tim Berners-Lee ho navrhl v CERNu u Ženevy." },
    { q: "Jaký je rozdíl mezi internetem a webem?", o: ["Internet je síť, web je služba stránek s odkazy na ní", "Je to totéž", "Web je starší než internet", "Internet funguje jen v USA"], why: "Internet vznikl dřív (ARPANET 1969), web je jedna z jeho služeb." },
    { q: "Co se stalo 30. dubna 1993?", o: ["CERN uvolnil web volně k užití", "Vznikl Google", "Vyšel první iPhone", "Byl vypnut ARPANET"], why: "Bezplatné uvolnění umožnilo masové rozšíření webu." }
  ],
  cards: [
    { f: "Kdo a kde vytvořil web?", b: "Tim Berners-Lee, CERN; návrh 1989, první stránka 1991." },
    { f: "Proč se web tak rychle rozšířil?", b: "CERN ho 30. 4. 1993 uvolnil zdarma k užití." }
  ]
},
{
  id: "vn6", area: "vynalezy", title: "Kontejner: krabice, která změnila obchod",
  text: [
    "Ještě v polovině 20. století se zboží nakládalo na lodě kus po kusu – pytle, bedny, sudy. Nakládka i vykládka trvaly dny, potřebovaly armády přístavních dělníků a docházelo ke krádežím i škodám.",
    "Americký podnikatel v dopravě Malcom McLean přišel s jednoduchým nápadem: přenášet celé ocelové kontejnery z kamionu rovnou na loď. Dne 26. dubna 1956 vyplula z Newarku do Houstonu loď Ideal X s 58 kontejnery. Podle známého propočtu klesly náklady na naložení tuny zboží z 5,86 dolaru na zhruba 16 centů.",
    "Standardizované kontejnery (20 a 40 stop) se staly základem globálního obchodu. Výrazně zlevnily dopravu, umožnily výrobní řetězce napříč kontinenty a změnily podobu přístavů po celém světě – je to příklad, že převratná inovace nemusí být technologicky složitá."
  ],
  takeaway: "McLeanův kontejner (1956) zlevnil nakládku tuny zboží z 5,86 $ na ~0,16 $ a umožnil globální obchod. Jednoduchá inovace, obrovský dopad.",
  evidence: "silné", evidenceNote: "Historická data; propočet nákladů je často citovaný údaj z roku 1956.",
  sources: [{ name: "Marc Levinson, The Box: How the Shipping Container Made the World Smaller (2006)" }],
  quiz: [
    { q: "Kdo stojí za zavedením kontejnerové přepravy?", o: ["Malcom McLean", "Henry Ford", "Thomas Edison", "Elon Musk"], why: "McLean vyslal první kontejnerovou loď Ideal X v roce 1956." },
    { q: "Na kolik zhruba klesly náklady na naložení tuny zboží?", o: ["Z 5,86 $ na asi 0,16 $", "Z 1 $ na 0,90 $", "Zůstaly stejné", "Zvýšily se"], why: "Známý propočet z roku 1956 ukazuje pokles o více než 95 %." },
    { q: "Jaké jsou standardní délky kontejnerů?", o: ["20 a 40 stop", "5 a 10 metrů", "100 a 200 stop", "Každý je jiný"], why: "Standardizace umožnila stejné jeřáby, lodě i vozy po celém světě." }
  ],
  cards: [
    { f: "První kontejnerová loď?", b: "Ideal X, 26. 4. 1956, Newark → Houston, 58 kontejnerů (Malcom McLean)." },
    { f: "Proč byl kontejner revoluční?", b: "Standardizace a přímá překládka – doprava zboží zlevnila o řády." }
  ]
}
);
L.push(
{
  id: "fi1", area: "filozofie", title: "Sókratés: filozof otázek",
  text: [
    "Sókratés (asi 470–399 př. n. l.) sám nenapsal ani řádek. Známe ho hlavně z dialogů svého žáka Platóna, takže se dodnes vede debata, co je skutečně Sókratovo a co Platónovo.",
    "Jeho metodou bylo klást otázky: vyptával se lidí, kteří se považovali za odborníky – na spravedlnost, odvahu, ctnost – a postupně ukazoval rozpory v jejich odpovědích. Tvrdil, že je moudřejší než ostatní jen v tom, že si je vědom své nevědomosti. Podle Platónovy Obrany prohlásil, že nezkoumaný život nestojí za to, aby byl žit.",
    "V roce 399 př. n. l. byl v Athénách obviněn z bezbožnosti a kažení mládeže a odsouzen k smrti. Možnosti útěku odmítl a vypil jed z bolehlavu. Sókratovská metoda – učit kladením otázek – se dodnes používá ve výuce, koučinku i terapii."
  ],
  takeaway: "Sókratés nic nenapsal, znát ho z Platóna. Jeho metoda: klást otázky a odhalovat rozpory. Odsouzen k smrti 399 př. n. l.",
  evidence: "silné", evidenceNote: "Historicky doložené údaje; obraz Sókratova myšlení je zprostředkovaný Platónem a Xenofóntem.",
  sources: [{ name: "Stanford Encyclopedia of Philosophy: Socrates", url: "https://plato.stanford.edu/entries/socrates/" }],
  quiz: [
    { q: "Odkud o Sókratově myšlení víme nejvíc?", o: ["Z dialogů jeho žáka Platóna", "Z jeho vlastních knih", "Z jeho dopisů", "Z jeho deníku"], why: "Sókratés sám nic nenapsal." },
    { q: "Co je sókratovská metoda?", o: ["Kladení otázek, které odhalují rozpory", "Dlouhé přednášky", "Memorování textů", "Matematické důkazy"], why: "Dialog a otázky vedou k hlubšímu porozumění." },
    { q: "Jak Sókratés zemřel?", o: ["Vypil jed z bolehlavu po odsouzení", "Padl v bitvě", "Zemřel stářím ve vyhnanství", "Utonul"], why: "Byl odsouzen v roce 399 př. n. l. a útěk odmítl." }
  ],
  cards: [
    { f: "Proč víme o Sókratovi hlavně nepřímo?", b: "Nic nenapsal; známe ho z Platóna (a Xenofónta)." },
    { f: "Sókratovská metoda?", b: "Kladení otázek, které odhalují rozpory a vedou k vlastnímu poznání." }
  ]
},
{
  id: "fi2", area: "filozofie", title: "Stoicismus: co je ve tvé moci",
  text: [
    "Stoicismus založil Zénón z Kitia kolem roku 300 př. n. l. v Athénách. Jméno získal podle sloupoví Stoa poikilé, kde Zénón učil. Nejznámějšími stoiky jsou Seneca, bývalý otrok Epiktétos a římský císař Marcus Aurelius.",
    "Základem je rozlišení, které Epiktétos uvádí hned na začátku své Příručky: některé věci jsou v naší moci (naše úsudky, rozhodnutí a jednání), jiné ne (počasí, chování druhých, výsledek závodu). Zbytečně trpíme, když se trápíme tím, co neovlivníme – energii je lepší věnovat tomu, co ovlivnit můžeme.",
    "Stoicismus nevolá po potlačování emocí, ale po tom, nenechat se jimi ovládat. Myšlenka, že nás netrápí samotné události, ale naše názory na ně, inspirovala i zakladatele moderní kognitivně-behaviorální terapie Alberta Ellise a Aarona Becka."
  ],
  takeaway: "Rozlišuj, co je v tvé moci (úsudky, jednání) a co ne (výsledky, druzí). Energii dávej jen do prvního.",
  evidence: "silné", evidenceNote: "Shrnutí dochovaných textů a jejich historického vlivu.",
  sources: [
    { name: "Epiktétos, Příručka (Encheiridion), kap. 1" },
    { name: "Stanford Encyclopedia of Philosophy: Stoicism", url: "https://plato.stanford.edu/entries/stoicism/" }
  ],
  quiz: [
    { q: "Podle čeho dostal stoicismus jméno?", o: ["Podle sloupoví Stoa poikilé v Athénách", "Podle filozofa jménem Stoikos", "Podle řeckého slova pro klid", "Podle ostrova Stoa"], why: "Zénón učil pod malovaným sloupovím (stoa)." },
    { q: "Co je podle Epiktéta v naší moci?", o: ["Naše úsudky a jednání", "Počasí", "Chování druhých lidí", "Výsledek závodu"], why: "Dichotomie kontroly je základ stoické praxe." },
    { q: "Kterou moderní terapii stoicismus inspiroval?", o: ["Kognitivně-behaviorální terapii", "Psychoanalýzu", "Homeopatii", "Hypnózu"], why: "Ellis a Beck se k myšlenkám stoiků výslovně hlásili." }
  ],
  cards: [
    { f: "Stoická dichotomie kontroly?", b: "V naší moci: úsudky, rozhodnutí, jednání. Mimo ni: výsledky, druzí, okolnosti." },
    { f: "Tři nejznámější stoici?", b: "Seneca, Epiktétos, Marcus Aurelius." }
  ]
},
{
  id: "fi3", area: "filozofie", title: "Aristotelés: ctnost jako zlatý střed",
  text: [
    "Aristotelés (384–322 př. n. l.), žák Platóna a vychovatel Alexandra Makedonského, se ptal, co je pro člověka nejvyšší dobro. Odpověděl: eudaimonia – často překládáno jako štěstí, přesněji „dobrý, naplněný život“.",
    "K němu podle Aristotela vedou ctnosti, které leží uprostřed mezi dvěma krajnostmi: statečnost mezi zbabělostí a zbrklostí, štědrost mezi lakotou a marnotratností. Střed přitom není matematický průměr, ale to, co je správné v dané situaci.",
    "Ctnost se podle něj nezískává poznáním, ale cvikem – stáváme se spravedlivými tím, že jednáme spravedlivě, podobně jako se člověk stává hráčem na nástroj hraním. Známý citát „Jsme tím, co opakovaně děláme…“ ale od Aristotela není: je to parafráze amerického spisovatele Willa Duranta z roku 1926."
  ],
  takeaway: "Ctnost je střed mezi krajnostmi a získává se cvikem. Citát „Jsme tím, co opakovaně děláme“ je Durantova parafráze, ne Aristotelés.",
  evidence: "silné", evidenceNote: "Shrnutí Etiky Níkomachovy; přiřazení citátu Durantovi je doložené.",
  sources: [
    { name: "Aristotelés, Etika Níkomachova (kn. II)" },
    { name: "Will Durant, The Story of Philosophy (1926)" }
  ],
  quiz: [
    { q: "Co je podle Aristotela statečnost?", o: ["Střed mezi zbabělostí a zbrklostí", "Krajnost bez strachu", "Opak moudrosti", "Vrozená vlastnost"], why: "Ctnost leží mezi nedostatkem a přebytkem." },
    { q: "Jak se podle Aristotela ctnost získává?", o: ["Cvikem a opakovaným jednáním", "Jen čtením knih", "Narozením", "Náhodou"], why: "Stáváme se spravedlivými tím, že jednáme spravedlivě." },
    { q: "Kdo je autorem citátu „Jsme tím, co opakovaně děláme…“?", o: ["Will Durant (parafráze Aristotela)", "Aristotelés", "Sókratés", "Seneca"], why: "Jde o Durantovo shrnutí Aristotelových myšlenek z roku 1926." }
  ],
  cards: [
    { f: "Aristotelův zlatý střed?", b: "Ctnost leží mezi dvěma krajnostmi (např. statečnost mezi zbabělostí a zbrklostí)." },
    { f: "„Jsme tím, co opakovaně děláme“ – kdo?", b: "Will Durant (1926), parafráze Aristotela." }
  ]
},
{
  id: "fi4", area: "filozofie", title: "Occamova břitva",
  text: [
    "Occamova břitva je zásada, podle které bychom ze dvou vysvětlení, která stejně dobře odpovídají faktům, měli dát přednost tomu jednoduššímu – s menším počtem předpokladů. Jmenuje se po anglickém františkánském mnichovi a filozofovi Williamu z Ockhamu (asi 1287–1347).",
    "Zajímavost: nejznámější latinská formulace („entity se nemají množit bez nutnosti“) se v Ockhamových dílech nevyskytuje. Objevuje se až o staletí později, v 17. století. Myšlenka jednoduchosti je ale skutečně jeho a měla ji už i řada starších myslitelů.",
    "Důležité je, co břitva neříká: není to důkaz, že jednodušší vysvětlení je pravdivé. Je to pracovní pravidlo pro výběr mezi hypotézami. Svět bývá někdy skutečně složitý – břitva jen radí nepřidávat předpoklady, které nic nevysvětlují."
  ],
  takeaway: "Ze stejně dobrých vysvětlení volíme to s menším počtem předpokladů. Je to pracovní pravidlo, ne důkaz pravdy.",
  evidence: "silné", evidenceNote: "Filozofický princip; historické údaje o formulaci jsou doložené.",
  sources: [{ name: "Stanford Encyclopedia of Philosophy: William of Ockham", url: "https://plato.stanford.edu/entries/ockham/" }],
  quiz: [
    { q: "Co říká Occamova břitva?", o: ["Ze stejně dobrých vysvětlení volíme to s menším počtem předpokladů", "Jednodušší vysvětlení je vždy pravdivé", "Složitá vysvětlení jsou lepší", "Nikdy nevěř vědcům"], why: "Je to heuristika pro výběr mezi rovnocennými hypotézami." },
    { q: "Je nejznámější latinská formulace břitvy přímo v Ockhamových dílech?", o: ["Ne, objevuje se až v 17. století", "Ano, v jeho první knize", "Ano, na jeho náhrobku", "Ockham nikdy neexistoval"], why: "Myšlenka je jeho, konkrétní věta pochází od pozdějších autorů." },
    { q: "Čím Occamova břitva není?", o: ["Důkazem, že jednodušší vysvětlení je pravdivé", "Pracovním pravidlem", "Pomůckou pro výběr hypotéz", "Filozofickým principem"], why: "Svět bývá někdy složitý; břitva jen radí nepřidávat zbytečné předpoklady." }
  ],
  cards: [
    { f: "Occamova břitva?", b: "Ze stejně dobrých vysvětlení volit to s menším počtem předpokladů." },
    { f: "Je Occamova břitva důkaz?", b: "Ne, je to pracovní pravidlo, ne záruka pravdy." }
  ]
},
{
  id: "fi5", area: "filozofie", title: "Descartes: myslím, tedy jsem",
  text: [
    "René Descartes (1596–1650) chtěl postavit poznání na zcela pevném základu. Rozhodl se proto pochybovat o všem, o čem se pochybovat dá: o smyslech (mohou klamat), o tom, že nesní, dokonce i o matematice – co když ho klame nějaký zlomyslný démon?",
    "Jednu věc ale zpochybnit nelze: když pochybuji, myslím, a když myslím, musím existovat. Tuto myšlenku zformuloval v Rozpravě o metodě (1637) francouzsky jako „Je pense, donc je suis“. Známá latinská podoba „Cogito, ergo sum“ se objevuje v jeho Principech filozofie z roku 1644.",
    "Descartes je považován za otce novověké filozofie. Byl i významný matematik – kartézská souřadnicová soustava (osy x a y) nese jeho jméno. Jeho oddělení mysli a těla (dualismus) je dodnes předmětem debat ve filozofii i neurovědě."
  ],
  takeaway: "Metodická pochybnost vede k jediné jistotě: pochybuji, tedy myslím, tedy jsem (Rozprava o metodě, 1637).",
  evidence: "silné", evidenceNote: "Shrnutí Descartových děl a jejich vlivu.",
  sources: [{ name: "Stanford Encyclopedia of Philosophy: René Descartes", url: "https://plato.stanford.edu/entries/descartes/" }],
  quiz: [
    { q: "Ve kterém díle Descartes poprvé publikoval myšlenku „myslím, tedy jsem“?", o: ["V Rozpravě o metodě (1637)", "V Ústavě", "V Kritice čistého rozumu", "V Bibli"], why: "Francouzsky „Je pense, donc je suis“, 1637." },
    { q: "Proč se Descartes rozhodl o všem pochybovat?", o: ["Aby našel zcela jistý základ poznání", "Protože byl skeptik ze zásady", "Kvůli sporu s církví", "Ze zábavy"], why: "Metodická pochybnost měla odhalit to, co pochybnosti odolá." },
    { q: "Který matematický nástroj nese Descartovo jméno?", o: ["Kartézská souřadnicová soustava", "Pythagorova věta", "Eulerovo číslo", "Logaritmus"], why: "Osy x a y – „kartézský“ podle latinského Cartesius." }
  ],
  cards: [
    { f: "„Myslím, tedy jsem“ – kde a kdy?", b: "Descartes, Rozprava o metodě, 1637 (latinsky v Principech 1644)." },
    { f: "Co je metodická pochybnost?", b: "Pochybovat o všem, co lze, abychom našli to, co pochybnosti odolá." }
  ]
},
{
  id: "fi6", area: "filozofie", title: "Tramvajové dilema: důsledky, nebo pravidla?",
  text: [
    "Rozjetá tramvaj se řítí na pět lidí na kolejích. Můžeš přehodit výhybku – pak zabije jednoho člověka na vedlejší koleji. Uděláš to? Myšlenkový experiment navrhla britská filozofka Philippa Foot v roce 1967, název „trolley problem“ zavedla později Judith Jarvis Thomson.",
    "Dilema staví proti sobě dva velké přístupy k etice. Utilitarismus (Jeremy Bentham, John Stuart Mill) hodnotí čin podle důsledků – správné je to, co přinese nejvíc dobra nejvíce lidem. Deontologie (Immanuel Kant) zdůrazňuje povinnosti a pravidla: s člověkem se nesmí zacházet jen jako s prostředkem k cíli.",
    "Většina lidí výhybku přehodí, ale když je místo výhybky potřeba strčit člověka z mostu, aby tramvaj zastavil, většina odmítne – přestože počty jsou stejné. Rozdíl ukazuje, že naše morální intuice nejsou čistě utilitární. Dnes se dilema řeší i v praxi, například při programování samořiditelných aut."
  ],
  takeaway: "Utilitarismus hodnotí důsledky, Kant povinnosti a pravidla. Tramvajové dilema (Foot, 1967) ukazuje, že naše intuice kombinují obojí.",
  evidence: "silné", evidenceNote: "Filozofické koncepty; reakce lidí jsou doložené řadou experimentálních studií.",
  sources: [
    { name: "Philippa Foot, The Problem of Abortion and the Doctrine of the Double Effect, Oxford Review 1967" },
    { name: "Stanford Encyclopedia of Philosophy: Kant's Moral Philosophy", url: "https://plato.stanford.edu/entries/kant-moral/" }
  ],
  quiz: [
    { q: "Kdo navrhl tramvajové dilema?", o: ["Philippa Foot (1967)", "Immanuel Kant", "Sókratés", "John Stuart Mill"], why: "Foot ho popsala v roce 1967, název později zavedla Thomson." },
    { q: "Podle čeho hodnotí čin utilitarismus?", o: ["Podle důsledků", "Podle úmyslu bohů", "Podle tradice", "Podle zákona"], why: "Správné je to, co přinese nejvíc dobra nejvíce lidem." },
    { q: "Co ukazuje rozdíl mezi výhybkou a strčením z mostu?", o: ["Naše intuice nejsou čistě utilitární", "Lidé neumí počítat", "Mosty jsou nebezpečné", "Nic"], why: "Při stejných počtech lidé odmítají přímo použít člověka jako prostředek." }
  ],
  cards: [
    { f: "Utilitarismus vs. deontologie?", b: "Utilitarismus: rozhodují důsledky. Deontologie (Kant): rozhodují povinnosti a pravidla." },
    { f: "Tramvajové dilema – autor?", b: "Philippa Foot, 1967 (název zavedla Judith Jarvis Thomson)." }
  ]
},

{
  id: "sv1", area: "svet", title: "OSN: jak funguje",
  text: [
    "Organizace spojených národů vznikla 24. října 1945, po druhé světové válce, s cílem udržovat mír a mezinárodní bezpečnost. Má 193 členských států. Československo patřilo mezi zakládající členy, Česká republika je členem od roku 1993 jako jeden z nástupnických států.",
    "Valné shromáždění, kde má každý stát jeden hlas, přijímá rezoluce, které jsou ale většinou jen doporučující. Závazná rozhodnutí může přijímat Rada bezpečnosti: má 15 členů, z toho 5 stálých – USA, Rusko, Čína, Velká Británie a Francie – s právem veta. Jediné veto kteréhokoli z nich rozhodnutí zablokuje.",
    "Pod OSN patří také řada specializovaných organizací – například Světová zdravotnická organizace (WHO), UNICEF, UNESCO nebo Světový potravinový program."
  ],
  takeaway: "OSN (1945) má 193 členů. Závazně rozhoduje jen Rada bezpečnosti; 5 stálých členů má právo veta.",
  evidence: "silné", evidenceNote: "Faktické údaje k roku 2026.",
  sources: [{ name: "United Nations: About Us; UN Security Council", url: "https://www.un.org/en/about-us" }],
  quiz: [
    { q: "Kolik členských států má OSN?", o: ["193", "50", "27", "245"], why: "OSN má 193 členských států." },
    { q: "Který orgán OSN může přijímat závazná rozhodnutí?", o: ["Rada bezpečnosti", "Valné shromáždění", "UNESCO", "Generální tajemník sám"], why: "Rezoluce Valného shromáždění jsou většinou doporučující." },
    { q: "Kolik stálých členů s právem veta má Rada bezpečnosti?", o: ["5", "15", "1", "10"], why: "USA, Rusko, Čína, Velká Británie a Francie." }
  ],
  cards: [
    { f: "Stálí členové Rady bezpečnosti OSN?", b: "USA, Rusko, Čína, Velká Británie, Francie – mají právo veta." },
    { f: "Vznik OSN a počet členů?", b: "24. 10. 1945; 193 členských států." }
  ]
},
{
  id: "sv2", area: "svet", title: "EU: kdo co dělá (a co je Rada Evropy)",
  text: [
    "Evropská unie má 27 členských států; Česko je členem od 1. května 2004. Názvy institucí jsou matoucí, ale jejich role se dá shrnout jednoduše.",
    "Evropská komise navrhuje zákony a dohlíží na jejich dodržování. Evropský parlament, jediná přímo volená instituce EU, a Rada EU (ministři členských států pro danou oblast) návrhy společně projednávají a schvalují. Evropská rada – setkání hlav států a předsedů vlád – určuje hlavní politický směr, ale zákony nepřijímá.",
    "Pozor na záměnu: Rada Evropy se sídlem ve Štrasburku není součástí EU. Je to samostatná organizace se 46 členy, která se věnuje lidským právům a demokracii a pod kterou patří Evropský soud pro lidská práva."
  ],
  takeaway: "Komise navrhuje, Parlament a Rada EU schvalují, Evropská rada udává směr. Rada Evropy (Štrasburk, 46 členů) není součástí EU.",
  evidence: "silné", evidenceNote: "Faktické údaje k roku 2026.",
  sources: [{ name: "European Union: Institutions and bodies", url: "https://european-union.europa.eu/institutions-law-budget/institutions-and-bodies_cs" }],
  quiz: [
    { q: "Která instituce EU navrhuje zákony?", o: ["Evropská komise", "Evropská rada", "Rada Evropy", "Evropský soud pro lidská práva"], why: "Komise má právo legislativní iniciativy." },
    { q: "Je Rada Evropy součástí EU?", o: ["Ne, je to samostatná organizace", "Ano, je to vláda EU", "Ano, je to parlament EU", "Je to jiný název Evropské rady"], why: "Rada Evropy (46 členů) se věnuje lidským právům, sídlí ve Štrasburku." },
    { q: "Od kdy je Česko členem EU?", o: ["Od 1. května 2004", "Od 1. ledna 1993", "Od roku 1999", "Od roku 2010"], why: "Česko vstoupilo do EU spolu s dalšími devíti zeměmi." }
  ],
  cards: [
    { f: "Hlavní instituce EU a jejich role?", b: "Komise navrhuje · Parlament + Rada EU schvalují · Evropská rada udává směr." },
    { f: "Rada Evropy vs. Evropská rada?", b: "Rada Evropy = samostatná organizace (46 členů, lidská práva); Evropská rada = summit EU." }
  ]
},
{
  id: "sv3", area: "svet", title: "NATO a článek 5",
  text: [
    "Severoatlantická aliance (NATO) vznikla 4. dubna 1949 podpisem Severoatlantické smlouvy ve Washingtonu. Zakládajících států bylo 12, dnes jich je 32 – nejnovějšími členy jsou Finsko (2023) a Švédsko (2024). Česko je členem od 12. března 1999.",
    "Jádrem smlouvy je článek 5 o kolektivní obraně: ozbrojený útok na jednoho člena se považuje za útok na všechny. Každý člen pak podnikne kroky, které považuje za nutné – nejde tedy o automatický závazek vyslat vojáky, ale o závazek pomoci.",
    "Článek 5 byl v historii aktivován jen jednou – po teroristických útocích na USA 11. září 2001. NATO rozhoduje konsenzem, tedy shodou všech členů."
  ],
  takeaway: "NATO (1949) má 32 členů, Česko od 1999. Článek 5: útok na jednoho = útok na všechny; aktivován jen jednou, po 11. září 2001.",
  evidence: "silné", evidenceNote: "Faktické údaje k roku 2026.",
  sources: [{ name: "NATO: Collective defence and Article 5", url: "https://www.nato.int/cps/en/natohq/topics_110496.htm" }],
  quiz: [
    { q: "Kolikrát byl aktivován článek 5 Severoatlantické smlouvy?", o: ["Jednou, po 11. září 2001", "Nikdy", "Desetkrát", "Při každé válce"], why: "Jediná aktivace byla po útocích na USA v roce 2001." },
    { q: "Od kdy je Česko členem NATO?", o: ["Od 12. března 1999", "Od 1. května 2004", "Od roku 1949", "Od roku 1993"], why: "Spolu s Polskem a Maďarskem v roce 1999." },
    { q: "Jak NATO přijímá rozhodnutí?", o: ["Konsenzem všech členů", "Prostou většinou", "Rozhoduje jen USA", "Losem"], why: "Rozhodnutí vyžadují shodu všech spojenců." }
  ],
  cards: [
    { f: "Článek 5 NATO?", b: "Útok na jednoho člena = útok na všechny; aktivován jen po 11. 9. 2001." },
    { f: "NATO – vznik a počet členů?", b: "4. 4. 1949, 12 zakladatelů; dnes 32 (Česko od 1999)." }
  ]
},
{
  id: "sv4", area: "svet", title: "Jak se volí v Česku",
  text: [
    "Do Poslanecké sněmovny se volí 200 poslanců na čtyři roky poměrným systémem: hlasuje se pro kandidátní listiny stran a mandáty se dělí podle podílu hlasů. Do Sněmovny se dostane strana s alespoň 5 % hlasů; pro koalice dvou stran platí hranice 8 % a pro koalice tří a více stran 11 %. Preferenčními hlasy lze posunout konkrétní kandidáty na listině.",
    "Senát má 81 senátorů volených na šest let většinovým systémem v jednomandátových obvodech. Pokud nikdo nezíská nadpoloviční většinu, koná se druhé kolo mezi dvěma nejúspěšnějšími kandidáty. Každé dva roky se volí třetina Senátu, takže horní komora nikdy není obměněna celá najednou.",
    "Prezidenta od roku 2013 volí občané přímo, rovněž dvoukolovým systémem, na pět let."
  ],
  takeaway: "Sněmovna: 200 poslanců, poměrný systém, hranice 5 % (koalice 8 % / 11 %). Senát: 81 senátorů, většinový systém, třetina každé 2 roky.",
  evidence: "silné", evidenceNote: "Platný volební systém (stav k roku 2026).",
  sources: [{ name: "Český statistický úřad – volby.cz; zákon č. 247/1995 Sb., o volbách do Parlamentu ČR" }],
  quiz: [
    { q: "Jaký volební systém se používá pro Poslaneckou sněmovnu?", o: ["Poměrný", "Většinový dvoukolový", "Losování", "Nepřímá volba"], why: "Mandáty se dělí podle podílu hlasů stranám." },
    { q: "Jak často se obměňuje třetina Senátu?", o: ["Každé 2 roky", "Každých 6 let celý", "Každý rok", "Každé 4 roky"], why: "Senátoři jsou voleni na 6 let, třetina každé 2 roky." },
    { q: "Od kdy volí občané prezidenta přímo?", o: ["Od roku 2013", "Od roku 1990", "Od roku 1993", "Od roku 2004"], why: "Do roku 2013 volil prezidenta parlament." }
  ],
  cards: [
    { f: "Hranice pro vstup do Sněmovny?", b: "5 % pro strany, 8 % pro koalice dvou, 11 % pro koalice tří a více stran." },
    { f: "Senát ČR – počet a volba?", b: "81 senátorů, 6 let, většinový dvoukolový systém, třetina každé 2 roky." }
  ]
},
{
  id: "sv5", area: "svet", title: "Centrální banka a inflační cíl",
  text: [
    "Česká národní banka (ČNB) má jako hlavní cíl udržovat cenovou stabilitu. Konkrétně cílí inflaci 2 % s tolerančním pásmem ±1 procentní bod. Podobný cíl – 2 % ve střednědobém horizontu – má i Evropská centrální banka pro eurozónu.",
    "Hlavním nástrojem jsou úrokové sazby. Když inflace roste nad cíl, banka sazby zvyšuje: úvěry zdražují, lidé a firmy méně utrácejí a investují a růst cen se zpomalí. Když je inflace pod cílem nebo ekonomika slábne, sazby snižuje. Účinek se projevuje se zpožděním zhruba jednoho až dvou let.",
    "Proč 2 %, a ne nula? Mírná inflace dává bance prostor sazby v krizi snížit a snižuje riziko deflace (dlouhodobého poklesu cen), která může ekonomiku zablokovat. Centrální banky jsou nezávislé na vládě, aby měnovou politiku nepodřizovaly krátkodobým politickým cílům."
  ],
  takeaway: "ČNB cílí inflaci 2 % (±1 p. b.), hlavním nástrojem jsou úrokové sazby; účinek se projeví s 1–2letým zpožděním.",
  evidence: "silné", evidenceNote: "Oficiální rámec měnové politiky ČNB a ECB.",
  sources: [{ name: "Česká národní banka: Měnová politika – inflační cílování", url: "https://www.cnb.cz/cs/menova-politika/" }],
  quiz: [
    { q: "Jaký inflační cíl má ČNB?", o: ["2 % ±1 procentní bod", "0 %", "5 %", "10 %"], why: "Cíl 2 % s tolerančním pásmem ±1 p. b." },
    { q: "Co obvykle udělá centrální banka, když inflace výrazně překračuje cíl?", o: ["Zvýší úrokové sazby", "Sníží úrokové sazby", "Vytiskne víc peněz", "Zakáže zdražování"], why: "Vyšší sazby tlumí poptávku a tím růst cen." },
    { q: "Proč centrální banky necílí nulovou inflaci?", o: ["Mírná inflace dává prostor v krizi a snižuje riziko deflace", "Nula je technicky nemožná", "Kvůli daním", "Nulová inflace je nezákonná"], why: "Deflace může ekonomiku zablokovat a sazby nelze snadno snižovat pod nulu." }
  ],
  cards: [
    { f: "Inflační cíl ČNB?", b: "2 % s tolerančním pásmem ±1 procentní bod." },
    { f: "Jak rychle působí změna úrokových sazeb?", b: "Se zpožděním zhruba 1–2 roky." }
  ]
},
{
  id: "sv6", area: "svet", title: "Mezinárodní soudy: který řeší co",
  text: [
    "Mezinárodní soudní dvůr (ICJ) v Haagu je soudní orgán OSN. Rozhoduje spory mezi státy – například o hranice nebo výklad smluv – a vydává posudky. Jednotlivce nesoudí.",
    "Mezinárodní trestní soud (ICC), také v Haagu, naopak soudí jednotlivce za nejzávažnější zločiny: genocidu, zločiny proti lidskosti, válečné zločiny a zločin agrese. Vznikl na základě Římského statutu z roku 1998 a funguje od roku 2002. Není součástí OSN a jeho pravomoc uznávají jen státy, které statut ratifikovaly.",
    "V Evropě působí další dva: Evropský soud pro lidská práva ve Štrasburku (patří pod Radu Evropy a rozhoduje stížnosti na porušení Úmluvy o lidských právech) a Soudní dvůr EU v Lucemburku (vykládá a chrání právo Evropské unie)."
  ],
  takeaway: "ICJ (Haag) = spory mezi státy; ICC (Haag) = jednotlivci za nejtěžší zločiny; ESLP (Štrasburk) = lidská práva; SDEU (Lucemburk) = právo EU.",
  evidence: "silné", evidenceNote: "Faktické údaje o institucích.",
  sources: [{ name: "International Court of Justice; International Criminal Court – About; Evropský soud pro lidská práva" }],
  quiz: [
    { q: "Který soud soudí jednotlivce za genocidu a válečné zločiny?", o: ["Mezinárodní trestní soud (ICC)", "Mezinárodní soudní dvůr (ICJ)", "Soudní dvůr EU", "Ústavní soud ČR"], why: "ICC soudí jednotlivce, ICJ řeší spory mezi státy." },
    { q: "Kde sídlí Evropský soud pro lidská práva?", o: ["Ve Štrasburku", "V Bruselu", "V Haagu", "V Lucemburku"], why: "Patří pod Radu Evropy se sídlem ve Štrasburku." },
    { q: "Co řeší Mezinárodní soudní dvůr (ICJ)?", o: ["Spory mezi státy", "Trestné činy jednotlivců", "Spory mezi firmami", "Sportovní spory"], why: "ICJ je soudní orgán OSN pro spory mezi státy." }
  ],
  cards: [
    { f: "ICJ vs. ICC?", b: "ICJ: spory mezi státy (orgán OSN). ICC: jednotlivci za nejtěžší zločiny (Římský statut)." },
    { f: "ESLP vs. Soudní dvůr EU?", b: "ESLP (Štrasburk): lidská práva, Rada Evropy. SDEU (Lucemburk): právo EU." }
  ]
}
);
window.LESSONS = L;
