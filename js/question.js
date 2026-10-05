const quiz = [
    {
      "date": "10-1",
      "id": 1,
      "question": "Hogy hívják a Dzsungel könyvében szereplő kígyót?",
      "options": ["Szí", "Akela", "Ká", "Balu"],
      "answer": 2,
      "expl": "A Dzsungel könyvében szereplő kígyó neve Ká."
    }, {
      "date": "10-1",
      "id": 2,
      "question": "Mi a neve ma Abbáziának?",
      "options": ["Rijeka", "Opatija", "Osijek", "Zadar"],
      "answer": 1,
      "expl": "Abbázia neve ma Opatija."
    }, {
      "date": "10-1",
      "id": 3,
      "question": "Melyik magyar utazót nevezik a „homok atyjá”-nak?",
      "options": ["Almásy László", "Teleki Sámuel", "Bíró Lajos", "Reguly Antal"],
      "answer": 0,
      "expl": "A „homok atyja” Almásy László utazó, Afrika-kutató, felfedező, pilóta, autóversenyző jelzője."
    }, {
      "date": "10-1",
      "id": 4,
      "question": "Hányadik században élt Kis Pippin?",
      "options": ["VI.", "VIII.", "X.", "XII."],
      "answer": 1,
      "expl": "Kis Pippin frank király a VIII. században élt (714–768)."
    }, {
      "date": "10-1",
      "id": 5,
      "question": "Melyik sport szakszava a fless?",
      "options": ["tenisz", "vívás", "boksz", "íjászat"],
      "answer": 1,
      "expl": "A fless a lerohanásszerű támadás neve a vívásban."
    }, {
      "date": "10-1",
      "id": 6,
      "question": "Mi a skulptúra?",
      "options": ["államfői székhely", "végrehajtó bizottság", "szobrászat", "zavargás"],
      "answer": 2,
      "expl": "A skulptúra jelentése: szobrászat."
    }, {
      "date": "10-1",
      "id": 7,
      "question": "Melyik ország zászlójában nincs piros/vörös szín?",
      "options": ["Monaco", "Kanada", "Ukrajna", "Lengyelország"],
      "answer": 2,
      "expl": "Ukrajna a kakukktojás, zászlója kék-sárga."
    }, {
      "date": "10-1",
      "id": 8,
      "question": "Melyik európai főváros nevét fordíthatjuk „füstölgő öbölnek”?",
      "options": ["Stockholm (Svédország)", "Reykjavík (Izland)", "Podgorica (Montenegró)", "Asztana (Kazahsztán)"],
      "answer": 1,
      "expl": "A név eredete a terület hévízforrásaiból felszálló gőzre utal, amelyet Izland első telepesei, köztük Ingólfur Arnarson, megfigyeltek, amikor megérkeztek a szigetre."
    }, {
      "date": "10-1",
      "id": 9,
      "question": "Charles Dickens *Két város regénye* melyik történelmi esemény hátterében játszódik?",
      "options": ["Hétéves háború", "Nagy londoni tűzvész", "A francia forradalom", "Az Egyesült Királyság létrejöttekor"],
      "answer": 2,
      "expl": "A Két város regénye Párizsban és Londonban játszódik az 1789-es forradalom előtt és alatt. Két város, két férfi, egy fiatal nő. A klasszikus szerelmi háromszöget izgalmassá teszik a felvett és elcserélt nevek, a hasonmások és álöltözetek, miközben lassan, de biztosan újabb és újabb személyes titkok kerülnek napvilágra..."
    }, {
      "date": "10-1",
      "id": 10,
      "question": "Melyik európai város neve jelent magyarul fehér várost?",
      "options": ["Lisszabon", "Amszterdam", "Helsinki", "Belgrád"],
      "answer": 3,
      "expl": "A „fehér város” Belgrád nevének jelentése."
    }, {
      "date": "10-2",
      "id": 1,
      "question": "Mit nevez a népnyelv esthajnalcsillagnak?",
      "options": ["a Napot", "a Vénusz bolygót", "a Sarkcsillagot", "a Kis Medvét"],
      "answer": 1,
      "expl": "Esthajnalcsillagnak a Vénusz bolygót nevezzük."
    }, {
      "date": "10-2",
      "id": 2,
      "question": "Mi a neve a hajunkat és körmünket alkotó fehérjéknek?",
      "options": ["protein", "karbamid", "albumin", "keratin"],
      "answer": 3,
      "expl": "A körmünket és hajunkat alkotó fehérje a keratin."
    }, {
      "date": "10-2",
      "id": 3,
      "question": "Melyik rokon népet nevezik cseremisznek is?",
      "options": ["a marikat", "a finneket", "a vogulokat", "az osztjákokat"],
      "answer": 0,
      "expl": "A marikat nevezik cseremiszeknek is."
    }, {
      "date": "10-2",
      "id": 4,
      "question": "Hányadik században élt Oliver Cromwell?",
      "options": ["XV.", "XVI.", "XVII.", "XVIII."],
      "answer": 2,
      "expl": "Oliver Cromwell a XVII. században élt (1599–1658)."
    }, {
      "date": "10-2",
      "id": 5,
      "question": "Ki a szerelem istene a hindu mitológiában?",
      "options": ["Indra", "Krisna", "Káma", "Manu"],
      "answer": 2,
      "expl": "A szerelem istene a hindu mitológiában Káma."
    }, {
      "date": "10-2",
      "id": 6,
      "question": "Melyik ország a pandamackók őshazája?",
      "options": ["Ausztrália", "Kína", "Japán", "Észak-Amerika"],
      "answer": 1,
      "expl": "A pandamedvék őshazája Kína."
    }, {
      "date": "10-2",
      "id": 7,
      "question": "Ki festette a Guernicát?",
      "options": ["Dali", "Picasso", "Cézanne", "Severini"],
      "answer": 1,
      "expl": "A *Guernica* Picasso műve."
    }, {
      "date": "10-2",
      "id": 8,
      "question": "Milyen hosszú egy angol láb (foot)?",
      "options": ["0,30 m", "0,74 m", "0,97 m", "1,14 m"],
      "answer": 0,
      "expl": "Egy láb 0,3048 m."
    }, {
      "date": "10-2",
      "id": 9,
      "question": "Melyik tengerben fekszik Ciprus?",
      "options": ["a Tirrén-tengerben", "az Égei-tengerben", "az Adriai-tengerben", "a Földközi-tengerben"],
      "answer": 3,
      "expl": "Ciprus a Földközi-tengerben fekszik."
    }, {
      "date": "10-2",
      "id": 10,
      "question": "Minek az istennője Diana a római mitológiában?",
      "options": ["vadászat", "tudás", "szépség", "háború"],
      "answer": 0,
      "expl": "Diana a vadászat istennője."
    }, {
      "date": "10-3",
      "id": 1,
      "question": "Ki volt az egri vár védője 1552-ben?",
      "options": ["Jurisics Miklós", "Zrínyi Miklós", "Dobó István", "Hunyadi János"],
      "answer": 2,
      "expl": "Az egri várat Dobó István védte."
    }, {
      "date": "10-3",
      "id": 2,
      "question": "Melyik sportágban fordult elő (kétszer is), hogy az olimpiai dobogó mindhárom fokán magyar versenyző állt?",
      "options": ["úszás", "kardvívás", "öttusa", "birkózás"],
      "answer": 1,
      "expl": "A kardvívásban fordult elő, hogy az olimpiai dobogó mindhárom fokán magyar versenyző állt: 1912-ben és 1952-ben."
    }, {
      "date": "10-3",
      "id": 3,
      "question": "Mennyi az értéke a következő római számnak: MCXLVII?",
      "options": ["967", "1147", "1467", "1547"],
      "answer": 1,
      "expl": "A megadott római szám értéke 1147."
    }, {
      "date": "10-3",
      "id": 4,
      "question": "Ki a zeneszerzője a *Jolanta* című operának?",
      "options": ["Haydn", "Csajkovszkij", "Leoncavallo", "Prokofjev"],
      "answer": 1,
      "expl": "A Jolanta Csajkovszkij operája."
    }, {
      "date": "10-3",
      "id": 5,
      "question": "Mekkora időtartamot jelent a fertályóra?",
      "options": ["15 perc", "30 perc", "45 perc", "60 perc"],
      "answer": 0,
      "expl": "A fertályóra negyedórányi időtartamot jelent."
    }, {
      "date": "10-3",
      "id": 6,
      "question": "Mi a kolorádóbogár közismertebb neve?",
      "options": ["szarvasbogár", "szentjánosbogár", "lucernabogár", "krumplibogár"],
      "answer": 3,
      "expl": "A kolorádóbogár a krumplibogár ritkábban használt neve."
    }, {
      "date": "10-3",
      "id": 7,
      "question": "Melyik Európa legmagasabb hegycsúcsa?",
      "options": ["Mont Blanc", "Matterhorn", "Mount Everest", "Zugspitze"],
      "answer": 0,
      "expl": "Európa legmagasabb hegycsúcsa a Mont Blanc (4807 m)."
    }, {
      "date": "10-3",
      "id": 8,
      "question": "Hányadik században élt Dugovics Titusz?",
      "options": ["XIII.", "XIV.", "XV.", "XVI."],
      "answer": 2,
      "expl": "Dugovics Titusz végvári vitéz a XV. században élt (?–1456)."
    }, {
      "date": "10-3",
      "id": 9,
      "question": "Milyen nemzetiségű volt Greta Garbo?",
      "options": ["dán", "holland", "svéd", "finn"],
      "answer": 2,
      "expl": "Greta Garbo svéd nemzetiségű volt."
    }, {
      "date": "10-3",
      "id": 10,
      "question": "Angliában Winston Churchillt háborús csúcsminiszterré nevezik ki, Németország lerohanja a Benelux államokat, az Egyesült Államokba emigrál Bartók Béla, Kálmán Imre, Ábrahám Kálmán, bemutatják Chaplin *Diktátor* című filmjét, megjelenik Arthur Koestler *Sötétség délben* című regénye. Mikor?",
      "options": ["1930", "1935", "1940", "1945"],
      "answer": 2,
      "expl": "Ezek az események 1940-ben történtek"
    }, {
      "date": "10-4",
      "id": 1,
      "question": "Mi a sziamang?",
      "options": ["zöldfűszer", "török fegyver", "japán étel", "állat"],
      "answer": 3,
      "expl": "A sziamang Szumátra szigetén honos gibbon."
    }, {
      "date": "10-4",
      "id": 2,
      "question": "Melyik rockzenekar tagjai: Mick Jagger, Keith Richard, Ron Wood, Bill Wyman, Charlie Watts?",
      "options": ["Shadows", "Rolling Stones", "Jethro Tull", "Yardbirds"],
      "answer": 1,
      "expl": "A felsorolt zenészek a Rolling Stones tagjai."
    }, {
      "date": "10-4",
      "id": 3,
      "question": "Mi a görög ábécé utolsó betűje?",
      "options": ["dzéta", "üpszilon", "gamma", "ómega"],
      "answer": 3,
      "expl": "A görög ábécé utolsó betűje az ómega."
    }, {
      "date": "10-4",
      "id": 4,
      "question": "Hány csontunk van?",
      "options": ["124", "206", "322", "534"],
      "answer": 1,
      "expl": "Csontjaink száma 206."
    }, {
      "date": "10-4",
      "id": 5,
      "question": "Ki találta fel a dinamitot?",
      "options": ["Thomas Alva Edison", "Benjamin Franklin", "Alfred Nobel", "Wilhelm Siemens"],
      "answer": 2,
      "expl": "A dinamit Alfred Nobel találmánya."
    }, {
      "date": "10-4",
      "id": 6,
      "question": "Milyen méretű a ring?",
      "options": ["610 × 610 cm", "490 × 490 cm", "535 × 535 cm", "820 × 820 cm"],
      "answer": 0,
      "expl": "A ring mérete 610 × 610 cm."
    }, {
      "date": "10-4",
      "id": 7,
      "question": "Ki festette az *Esterházy Madonna* című festményt?",
      "options": ["Raffaello", "Caravaggio", "Leonardo da Vinci", "Lucas van Leyden"],
      "answer": 0,
      "expl": "Az Esterházy Madonna című festményt Raffaello festette."
    }, {
      "date": "10-4",
      "id": 8,
      "question": "Melyik a világ legkisebb állama?",
      "options": ["Monaco", "Liechtenstein", "Vatikán", "Mali"],
      "answer": 2,
      "expl": "A világ legkisebb állama Vatikán (0,44 km^2^)."
    }, {
      "date": "10-4",
      "id": 9,
      "question": "Mi a beri-beri betegség oka?",
      "options": ["a B-vitamin-hiány", "a D-vitamin-hiány", "az A-vitamin-hiány", "a C-vitamin-hiány"],
      "answer": 0,
      "expl": " A beri-beri betegséget a B-vitamin hiánya okozza."
    }, {
      "date": "10-4",
      "id": 10,
      "question": "Napóleon Itália királya, Nelson admirális halálos sebet kap, Franciaországban eltörlik a forradalmi időszámítást, Beethoven megírja *Apassionata* című művét. Mikor?",
      "options": ["1805", "1815", "1825", "1835"],
      "answer": 0,
      "expl": "Ezek az események 1805-ben történtek."
    }, {
      "date": "10-5",
      "id": 1,
      "question": "Melyik játék nem kártyajáték?",
      "options": ["kanaszta", "bridzs", "dáma", "rikiki"],
      "answer": 2,
      "expl": "A dáma a kakukktojás: táblás logikai játék."
    }, {
      "date": "10-5",
      "id": 2,
      "question": "Apja Kronosz, anyja Rhea, felesége Héra. Ki ő?",
      "options": ["Jupiter", "Zeusz", "Uránusz", "Atlasz"],
      "answer": 1,
      "expl": "Kronosz és Rhea fia, Héra férje Zeusz."
    }, {
      "date": "10-5",
      "id": 3,
      "question": "Hány fős csapatok játszanak a kézilabdacsapatban?",
      "options": ["6", "7", "9", "11"],
      "answer": 1,
      "expl": "A kézilabdacsapat 7 tagból áll."
    }, {
      "date": "10-5",
      "id": 4,
      "question": "Elizabeth Bennet, Marianne Dashwood, Anne Elliot, Emma Woodhouse. Melyik írónő hősei?",
      "options": ["Katherine Mansfield", "Charlotte Brontë", "Jane Austen", "Virginia Woolf"],
      "answer": 2,
      "expl": "A felsoroltak Jane Austen angol írónő hősnői."
    }, {
      "date": "10-5",
      "id": 5,
      "question": "Melyik ország fővárosa Caracas?",
      "options": ["Venezuela", "Trinidad és Tobago", "Peru", "Uruguay"],
      "answer": 0,
      "expl": "Caracas Venezuela fővárosa, gazdasági és kulturális központja. Népessége 1,9 millió fő. A gyilkosságok magas száma miatt a világ egyik legveszélyesebb városának számít."
      }, {
      "date": "10-5",
      "id": 6,
      "question": "Kit nevezünk az „anyák megmentőjének”?",
      "options": ["Haynal Imrét", "Bókay Jánost", "Semmelweis Ignácot", "Lenhossék Mihályt"],
      "answer": 2,
      "expl": "Semmelweis Ignác szülészorvost nevezzük az anyák megmentőjének."
    }, {
      "date": "10-5",
      "id": 7,
      "question": "Ki találta fel a dinamót?",
      "options": ["Rudolf Diesel", "Thomas Alva Edison", "Puskás Tivadar", "Jedlik Ányos"],
      "answer": 3,
      "expl": "A dinamót Jedlik Ányos találta fel 1861-ben."
    }, {
      "date": "10-5",
      "id": 8,
      "question": "Hány kerülete van Budapestnek?",
      "options": ["21", "22", "23", "24"],
      "answer": 2,
      "expl": "Budapest 23 kerületből áll."
    }, {
      "date": "10-5",
      "id": 9,
      "question": "Melyik ország zászlójában nem szerepel zöld szín?",
      "options": ["Hollandia", "India", "Banglades", "Brazília"],
      "answer": 0,
      "expl": "Hollandia zászlójában nincs zöld szín."
    }, {
      "date": "10-5",
      "id": 10,
      "question": "Átadják a lakihegyi adótornyot, elindul az első budapesti trolibuszjárat, Báthory István erdélyi fejedelem születésének 400. évfordulójára Báthory Emlékévet rendeznek, Gödöllőn tartják a dzsemborit, a cserkész világtalálkozót. Mikor?",
      "options": ["1929", "1925", "1941", "1933"],
      "answer": 3,
      "expl": "1933 történései."
    }, {
      "date": "10-6",
      "id": 1,
      "question": "Ki alkotta a *Gondolkodó* című szobrot?",
      "options": ["Donatello", "Giovanni Bernini", "Auguste Rodin", "Leonardo da Vinci"],
      "answer": 2,
      "expl": "A *Gondolkodó* című szobrot Rodin festette."
    }, {
      "date": "10-6",
      "id": 2,
      "question": "Milyen eredetű tánc a mambó?",
      "options": ["kubai", "afrikai", "spanyol", "brazil"],
      "answer": 0,
      "expl": "A mambó kubai eredetű tánc."
    }, {
      "date": "10-6",
      "id": 3,
      "question": "Ki rendezte az *Elfújta a szél* című filmet?",
      "options": ["Cukor György", "Victor Fleming", "Kertész Mihály", "Tony Richardson"],
      "answer": 1,
      "expl": "Az „Elfújta a szél” című filmet Victor Fleming rendezte 1939-ben."
    }, {
      "date": "10-6",
      "id": 4,
      "question": "Mi a Kis Medve csillagkép latin neve?",
      "options": ["Ursa Minor", "Canis Minor", "Ursa Maior", "Canis Maior"],
      "answer": 0,
      "expl": "A Kis Medve csillagkép latin neve Ursa Minor."
    }, {
      "date": "10-6",
      "id": 5,
      "question": "Mi a pelikán másik neve?",
      "options": ["albatrosz", "kárókatona", "gödény", "szalakóta"],
      "answer": 2,
      "expl": "A pelikán más néven gödény."
    }, {
      "date": "10-6",
      "id": 6,
      "question": "Ki volt a „jégmezők lovagja”?",
      "options": ["Alekszandr Nyevszkij", "Borisz Godunov", "Rettegett Iván", "Mihail Fjodorovics"],
      "answer": 0,
      "expl": "A „jégmezők lovagja” Alekszandr Nyevszkij novgorodi és vlagyimiri fejedelem."
    }, {
      "date": "10-6",
      "id": 7,
      "question": "Melyik városunk műemléke a Cifra-malom?",
      "options": ["Győr", "Szeged", "Székesfehérvár", "Tata"],
      "answer": 3,
      "expl": "A Cifra-malom Tata műemléke."
    }, {
      "date": "10-6",
      "id": 8,
      "question": "Ki mondta: „Omnia vincit amor”, azaz a szerelem mindent legyőz?",
      "options": ["Horatius", "Homérosz", "Vergilius", "Catullus"],
      "answer": 2,
      "expl": "Omnia vincit amor: idézet Vergilius Eclogae-jából."
    }, {
      "date": "10-6",
      "id": 9,
      "question": "Hogyan halt meg Pierre Curie?",
      "options": ["öngyilkos lett", "lelőtték", "lovaskocsi halálra gázolta", "fehérvérűségben"],
      "answer": 2,
      "expl": "Pierre Curie-t lovaskocsi gázolta halálra."
    }, {
      "date": "10-6",
      "id": 10,
      "question": "Görög–török háború tör ki Krétáért; összeül az első cionista kongresszus; McKinley az USA 25. elnöke; hazánkban aratósztrájkok kezdődnek; meghal Brahms és Daudet. Mikor?",
      "options": ["1876", "1897", "1913", "1924"],
      "answer": 1,
      "expl": "1897-ben történtek ezek az események."
    }, {
      "date": "10-7",
      "id": 1,
      "question": "Kicsoda vagy micsoda a kazuár?",
      "options": ["baktérium", "röpképtelen madár", "bükkfaféle", "szarvasmarhaféle"],
      "answer": 1,
      "expl": "A kazuár Észak-Ausztráliában honos röpképtelen madár."
    }, {
      "date": "10-7",
      "question": "Mi az áramerősség SI-mértékegysége?",
      "options": ["volt", "pascal", "amper", "ohm"],
      "answer": 2,
      "expl": "Az áramerősség SI-mértékegysége az amper."
    }, {
      "date": "10-7",
      "id": 3,
      "question": "Hányadik században élt Rembrandt?",
      "options": ["XV.", "XVI.", "XVII.", "XVIII."],
      "answer": 2,
      "expl": "Rembrandt holland festőművész a XVII. században élt (1606–1669)."
    }, {
      "date": "10-7",
      "id": 4,
      "question": "Nyelvünk melyik részén érzékeljük a sós ízt?",
      "options": ["nyelvünk hegyén", "nyelvünk szélén", "nyelvünk tövén", "nyelvünk közepén"],
      "answer": 0,
      "expl": "A sós ízt nyelvünk hegyén érzékeljük."
    }, {
      "date": "10-7",
      "id": 5,
      "question": "Ki a főszereplője a következő filmeknek: Ilyenek voltunk, Távol Afrikától, Mezítláb a parkban?",
      "options": ["Marlon Brando", "Robert Redford", "Robert De Niro", "Jack Nicholson"],
      "answer": 1,
      "expl": "A felsorolt filmek főszereplője Robert Redford."
    }, {
      "date": "10-7",
      "id": 6,
      "question": "Melyik sportág kiváló képviselője Al(fred) Oerter?",
      "options": ["diszkoszvetés", "gerelyhajítás", "kalapácsvetés", "magasugrás"],
      "answer": 0,
      "expl": "Al Oerter a diszkoszvetés négyszeres olimpiai bajnoka."
    }, {
      "date": "10-7",
      "id": 7,
      "question": "Melyik szervünk alulműködésének leggyakoribb oka a jódhiány?",
      "options": ["pajzsmirigy", "vese", "máj", "epe"],
      "answer": 0,
      "expl": "A pajzsmirigy hormonjainak képzéséhez a szervezetnek jódra van szüksége, annak hiányában anyagcserezavarok, valamint fejlődési rendellenességek léphetnek fel."
    }, {
      "date": "10-7",
      "id": 8,
      "question": "Hol született Ady Endre?",
      "options": ["Debrecenben", "Zilahon", "Érdmindszenten", "Nagyváradon"],
      "answer": 2,
      "expl": "Ady Endre Érmindszenten született."
    }, {
      "date": "10-7",
      "id": 9,
      "question": "Melyik USA-állam területén található a Grand Canyon?",
      "options": ["Coloradóban", "Nebraskában", "Arizonában", "Kaliforniában"],
      "answer": 2,
      "expl": "A Grand Canyon Arizonában található."
    }, {
      "date": "10-7",
      "id": 10,
      "question": "A waterlooi csatában megsemmisül Napóleon hadserege; az orosz cár, az osztrák császár és a porosz király megköti a Szent Szövetséget; aláírják a második párizsi békét; megkezdődik a Hanság rendezése; megjelenik Fazekas Mihály *Lúdas Matyi* című műve. Mikor?",
      "options": ["1805", "1815", "1825", "1835"],
      "answer": 1,
      "expl": "1815-ben történtek ezek az események."
    }, {
      "date": "10-8",
      "id": 1,
      "question": "Ki írta alá amerikai részről 1972-ben a SALT&#150;I szerződést a Szovjetunióval?",
      "options": ["J. Carter", "R. Reagan", "G. Ford", "R. Nixon"],
      "answer": 3,
      "expl": "A SALT-1 szerződést Nixon és Brezsnyev írta alá."
    }, {
      "date": "10-8",
      "id": 2,
      "question": "Kinek a szállóigéje: „Ne zavard köreimet!”?",
      "options": ["Ptolemaiosz", "Arkhimédész", "Euklidész", "Meneláosz"],
      "answer": 1,
      "expl": "A „Ne zavard köreimet!” szállóigét Arkhimédésznek tulajdonítják."
    }, {
      "date": "10-8",
      "id": 3,
      "question": "Melyik német város neve volt 1953&#150;1990 között Karl-Marx-Stadt?",
      "options": ["Chemnitz", "Aachen", "Dachau", "Kiel"],
      "answer": 0,
      "expl": "Karl-Marx-Stadt Chemnitz neve volt 1953–1990 között."
    }, {
      "date": "10-8",
      "id": 4,
      "question": "Ki festette a Tépéscsinálók című festményt?",
      "options": ["Székely Bertalan", "Rippl-Rónai József", "Munkácsy Mihály", "Barabás Miklós"],
      "answer": 2,
      "expl": "A „Tépéscsinálók” Munkácsy Mihály festménye."
    }, {
      "date": "10-8",
      "id": 5,
      "question": "Melyik pápától kapta koronáját István király?",
      "options": ["VI. Gergelytől", "XVI. Jánostól", "II. Szilvesztertől", "VIII. Leótól"],
      "answer": 2,
      "expl": "István királyunk II. Szilvesztertől kapta koronáját."
    }, {
      "date": "10-8",
      "id": 6,
      "question": "Melyik labdajáték kapta nevét egy angol városról?",
      "options": ["curling", "rögbi", "golf", "krikett"],
      "answer": 1,
      "expl": "A rögbi névadója Rugby városa."
    }, {
      "date": "10-8",
      "id": 7,
      "question": "Mi a művészneve Robert Allen Zimmermannak, az amerikai folk- és rockzene nagy alakjának?",
      "options": ["Neil Diamond", "Paul Simon", "David Bowie", "Bob Dylan"],
      "answer": 3,
      "expl": "Robert Allen Zimmerman művészneve Bob Dylan."
    }, {
      "date": "10-8",
      "id": 8,
      "question": "Melyik színésznő nyerte el négyszer az Oscar-díjat?",
      "options": ["Greta Garbo", "Jane Fonda", "Katharine Hepburn", "Elizabeth Taylor"],
      "answer": 2,
      "expl": "Katharine Hepburn amerikai színésznő nyerte el négyszer az Oscar-díjat."
    }, {
      "date": "10-8",
      "id": 9,
      "question": "Ki a tűzoltók és kéményseprők védőszentje?",
      "options": ["Szent Flórián", "Szent Domonkos", "Szent Balázs", "Szent Benedek"],
      "answer": 0,
      "expl": "A tűzoltók és kéményseprők védőszentje Szent Flórián."
    }, {
      "date": "10-8",
      "id": 10,
      "question": "Spanyolországban kikiáltják a köztársaságot, egyesül Buda, Pest és Óbuda, Verdi megkomponálja a Requiemet, Zeppelin léghajót épít. Mikor?",
      "options": ["1867", "1873", "1891", "1902"],
      "answer": 1,
      "expl": "1873-ban történtek ezek az események."

    }, {
      "date": "10-9",
      "id": 1,
      "question": "Hogy hívják Drezda folyóját?",
      "options": ["Duna", "Elba", "Rajna", "Majna"],
      "answer": 1,
      "expl": "Drezda folyója az Elba."
    }, {
      "date": "10-9",
      "id": 2,
      "question": "Ki vagy mi a mozzarella?",
      "options": ["trópusi gyümölcs", "fűszeres likőr", "olasz sajt", "ragadozó madár"],
      "answer": 2,
      "expl": "A mozzarella olasz sajt."
    }, {
      "date": "10-9",
      "id": 3,
      "question": "Melyik földrészen folyik a Yukon folyó?",
      "options": ["Ausztráliában", "Afrikában", "Dél-Amerikában", "Észak-Amerikában"],
      "answer": 3,
      "expl": "A Yukon folyó Észak-Amerika folyója."
    }, {
      "date": "10-9",
      "id": 4,
      "question": "Melyik az az ország, amelyet az Atlanti- és az Indiai-óceán is határol?",
      "options": ["Dél-afrikai Köztársaság", "Madagaszkár", "Srí Lanka", "Venezuela"],
      "answer": 0,
      "expl": "Dél-afrikai Köztársaság partjait nyugaton az Atlanti-óceán, keleten az Indiai-óceán mossa."
    }, {
      "date": "10-9",
      "id": 5,
      "question": "Melyik keresztnevünk jelentése győző, győztes?",
      "options": ["Miksa", "Demeter", "Viktor", "Pál"],
      "answer": 2,
      "expl": "Viktor keresztnevünk jelentése győző, győztes."
    }, {
      "date": "10-9",
      "id": 6,
      "id": 4,
      "question": "Melyik városunkban van a Vasarely-múzeum?",
      "options": ["Budapesten", "Pécsett", "Szegeden", "Sopronban"],
      "answer": 1,
      "expl": "A Vasarely-múzeum Pécsett található."
    }, {
      "date": "10-9",
      "id": 7,
      "question": "Melyik város ad otthont évenként a Wagner-művek ünnepi játékainak?",
      "options": ["Bayreuth", "Weimar", "München", "Zürich"],
      "answer": 0,
      "expl": "A Wagner-művek ünnepi játékainak Bayreuth ad otthont."
    }, {
      "date": "10-9",
      "id": 8,
      "question": "Melyik újkori olimpián indulhattak először nők?",
      "options": ["1904-ben (Saint Louis)", "1908-ban (London)", "1912-ben (Stockholm)", "1916-ban (Berlin)"],
      "answer": 1,
      "expl": "A nők először 1908-ban indulhattak az olimpián."
    }, {
      "date": "10-9",
      "id": 9,
      "question": "Melyik bolygó felszíni hőmérséklete a legmagasabb?",
      "options": ["Merkúré", "Vénuszé", "Marsé", "Szaturnuszé"],
      "answer": 1,
      "expl": "A Vénusz bolygó felszíni hőmérséklete a legmagasabb: 460 Celsius-fok."
    }, {
      "date": "10-9",
      "id": 10,
      "question": "*Ványa bácsi*, *Sirály*, *A három nővér*, *Cseresznyéskert*. Kinek a művei?",
      "options": ["Tolsztoj", "Gorkij", "Csehov", "Asimov"],
      "answer": 2,
      "expl": "A felsorolt művek Csehov munkái."
    }, {
      "date": "10-10",
      "id": 1,
      "question": "Mi a neve ma Perzsiának?",
      "options": ["Törökország", "Irán", "Mongólia", "Szíria"],
      "answer": 1,
      "expl": "1935-ben Perzsia nevét Iránra változtatta."
    }, {
      "date": "10-10",
      "id": 2,
      "question": "Mit nevezünk X-sugaraknak is?",
      "options": ["infravörös sugarat", "röntgensugarat", "katódsugarat", "ultraibolya sugarat"],
      "answer": 1,
      "expl": "Röntgen nevezte el az általa felfedezett sugárzást X-sugaraknak."
    }, {
      "date": "10-10",
      "id": 3,
      "question": "Milyen hangszer a dulcián?",
      "options": ["ütős", "pengetős", "fúvós", "billentyűs"],
      "answer": 2,
      "expl": "A dulcián fafúvós hangszer."
    }, {
      "date": "10-10",
      "id": 4,
      "question": "Hol van az Egyesült Nemzetek Szervezetének székhelye?",
      "options": ["Londonban", "Brüsszelben", "Párizsban", "New Yorkban"],
      "answer": 3,
      "expl": "Egyesült Nemzetek Szervezetének székhelye New York."
    }, {
      "date": "10-10",
      "id": 5,
      "question": "Melyik ország pénzneme a real?",
      "options": ["Brazíliaé", "Észtországé", "Indonéziáé", "Kuvaité"],
      "answer": 0,
      "expl": "A real Brazília pénzneme."
    }, {
      "date": "10-10",
      "id": 6,
      "id": 7,
      "question": "Mi a kaméliás hölgy történetét feldolgozó opera címe?",
      "options": ["Lammermoori Lucia", "Tosca", "Giselle", "Traviata"],
      "answer": 3,
      "expl": "A kaméliás hölgy történetét feldolgozó opera Verdi Traviatája."
    }, {
      "date": "10-10",
      "id": 7,
      "question": "Melyik megye nem határos Veszprém megyével?",
      "options": ["Komárom-Esztergom megye", "Győr-Moson-Sopron megye", "Vas megye", "Tolna megye"],
      "answer": 3,
      "expl": "Tolna megye nem határos Veszprém megyével."
    }, {
      "date": "10-10",
      "id": 8,
      "question": "Ki volt Beke Manó?",
      "options": ["fizikus", "matematikus", "szobrász", "politikus"],
      "answer": 1,
      "expl": "Beke Manó (1862–1946) matematikus volt."
    }, {
      "date": "10-10",
      "id": 9,
      "question": "",
      "question": "Melyik városban van a Scala operaház?",
      "options": ["Milánóban", "Madridban", "Barcelonában", "Stuttgartban"],
      "answer": 0,
      "expl": "A Scala operaház Milánóban található."
    }, {
      "date": "10-10",
      "id": 10,
      "question": "Az USA megvásárolja Oroszországtól Alaszkát, Miksa császárt kivégzik Mexikóban, Budán megkoronázzák Ferenc Józsefet, Nobel előállítja a dinamitot, bemutatják Erkel Dózsa György című operáját. Mikor?",
      "options": ["1852", "1862", "1867", "1877"],
      "answer": 2,
      "expl": "1867-ben történtek ezek az események."
    }, {
      "date": "10-11",
      "id": 1,
      "question": "Ki volt az Árpád-ház kihalása utáni első királyunk?",
      "options": ["Cseh Vencel", "Bajor Ottó", "Károly Róbert", "I. Ulászló"],
      "answer": 0,
      "expl": "Az Árpád-ház kihalása utáni első királyunk Vencel volt (1301–1305)."
    }, {
      "date": "10-11",
      "id": 2,
      "question": "Melyik írónk hőse Esti Kornél?",
      "options": ["Arany Jánosé", "Jókai Móré", "Kosztolányi Dezsőé", "Krúdy Gyuláé"],
      "answer": 2,
      "expl": "Esti Kornél Kosztolányi Dezső hőse."
    }, {
      "date": "10-11",
      "id": 3,
      "question": "Melyik az USA legnagyobb területű állama?",
      "options": ["Pennsylvania", "Alaszka", "Arizona", "Texas"],
      "answer": 1,
      "expl": "Az USA legnagyobb területű állama Alaszka."

    }, {
      "date": "10-11",
      "id": 4,
      "question": "Mi Kuba pénzneme?",
      "options": ["peseta", "peso", "dollár", "escudo"],
      "answer": 1,
      "expl": "Kuba pénzneme a peso."
    }, {
      "date": "10-11",
      "id": 5,
      "question": "Melyik városunk latin neve Arrabona?",
      "options": ["Pécs", "Kőszeg", "Győr", "Székesfehérvár"],
      "answer": 2,
      "expl": "Arrabona Győr latin neve."
    }, {
      "date": "10-11",
      "id": 6,
      "question": "Melyik földünk legnagyobb sivatagja?",
      "options": ["Kalahári", "Kara-kum", "Góbi", "Szahara"],
      "answer": 3,
      "expl": "Földünk legnagyobb sivatagja a Szahara."
    }, {
      "date": "10-11",
      "id": 7,
      "question": "Hányadik században élt Mátyás király?",
      "options": ["XII.", "XIII.", "XIV.", "XV."],
      "answer": 3,
      "expl": "Mátyás király a XV. században élt (1443–1490)."
    }, {
      "date": "10-11",
      "id": 8,
      "question": "Mi a bajazzo szó jelentése?",
      "options": ["középkori lovag", "pojáca, bohóc", "ókori római kereskedő", "hírnök, futár"],
      "answer": 1,
      "expl": "A bajazzo szó jelentése bohóc, pojáca."
    }, {
      "date": "10-11",
      "id": 9,
      "question": "Melyik Shakespeare-mű szereplője Shylock?",
      "options": ["Othello", "Minden jó, ha vége jó", "A velencei kalmár", "Szeget szeggel"],
      "answer": 2,
      "expl": "Shylock a Velencei kalmár szereplője."
    }, {
      "date": "10-11",
      "id": 10,
      "question": "Véget ér a „salétromháború”, meghal Karl Marx és Wagner, bemutatják Madách Az ember tragédiája című drámáját, első útjára indul az Orient Expressz. Mikor?",
      "options": ["1867", "1883", "1899", "1905"],
      "answer": 1,
      "expl": "Ezek az események 1883-ban történtek."
    }, {
      "date": "10-12",
      "id": 1,
      "question": "Milyen hosszú egy yard?",
      "options": ["0,9144 m", "0,3048 m", "1,3410 m", "0,7144 m"],
      "answer": 0,
      "expl": "Egy yard 0,9144 m."
    }, {
      "date": "10-12",
      "id": 2,
      "question": "Ki volt Bródy Imre (1891&#150;1944)?",
      "options": ["író, költő", "fizikus, feltaláló", "zeneszerző", "ázsia-kutató"],
      "answer": 1,
      "expl": "Bródy Imre fizikus, a kriptontöltésű izzólámpa feltalálója."
    }, {
      "date": "10-12",
      "id": 3,
      "question": "Kik a zapotékok?",
      "options": ["magyar népcsoport", "cseh népcsoport", "örmény népcsoport", "indián népcsoport"],
      "answer": 3,
      "expl": "A zapotékok indián népcsoport."
    }, {
      "date": "10-12",
      "id": 4,
      "question": "Ki második olimpiai bajnokunk?",
      "options": ["Hajós Alfréd (úszás)", "Halmay Zoltán (úszás)", "Bauer Rudolf (diszkoszvetés)", "Weisz Richárd (birkózás)"],
      "answer": 2,
      "expl": "Második olimpiai bajnokunk Bauer Rudolf volt (1900, Párizs)."
    }, {
      "date": "10-12",
      "id": 5,
      "question": "Mikor volt a százéves háború?",
      "options": ["1229&#150;1330", "1337&#150;1453", "1457&#150;1555", "1490&#150;1601"],
      "answer": 1,
      "expl": "A százéves háború kisebb megszakításokkal 1337 és 1453 között volt."
    }, {
      "date": "10-12",
      "id": 6,
      "question": "Ki volt többek között a *Top Hat*, a *Mókás arc* (Funny Face) és a *Brodway Melody* című filmek táncos sztárja?",
      "options": ["Fred Astaire", "Gene Kelly", "Ted Shawn", "Bob Fosse"],
      "answer": 0,
      "expl": "A felsorolt filmek táncossztárja Fred Astaire volt."
    }, {
      "date": "10-12",
      "id": 7,
      "question": "Hány hónapig vemhes az elefánt?",
      "options": ["5", "11", "22", "42"],
      "answer": 2,
      "expl": "Az elefánt 22 hónapig vemhes."
    }, {
      "date": "10-12",
      "id": 8,
      "question": "Melyik vitamin hiánya okozza a farkasvakságot?",
      "options": ["A-vitamin", "B6-vitamin", "C-vitamin", "D-vitamin"],
      "answer": 0,
      "expl": "A farkasvakságot az A-vitamin hiánya okozza."
    }, {
      "date": "10-12",
      "id": 9,
      "question": "Ki fedezte fel a mágneses indukciót?",
      "options": ["Ampere", "Faraday", "Bosch", "Gay-Lussac"],
      "answer": 1,
      "expl": "A mágneses indukció Faraday felfedezése."
    }, {
      "date": "10-12",
      "id": 10,
      "question": "A magyar kormány megkapja a Vix-jegyzéket, Berlinben kirobban a Spartacus-felkelés, az USA-ban életbe lép a szesztilalom, több európai országban szavazati jogot kapnak a nők. Mikor?",
      "options": ["1899", "1910", "1919", "1933"],
      "answer": 2,
      "expl": "Ezek az események 1919-ban történtek."
    }, {
      "date": "10-13",
      "id": 1,
      "question": "Mi az abszint?",
      "options": ["a halhatatlanság itala", "erős pálinka", "félédes pezsgő", "rumfajta"],
      "answer": 1,
      "expl": "Az abszint zöld színű, erős pálinka."
    }, {
      "date": "10-13",
      "id": 2,
      "question": "Hány újkori olimpia maradt el?",
      "options": ["1", "2", "3", "4"],
      "answer": 2,
      "expl": "Három újkori olimpia maradt el (1916, 1940, 1944)."
    }, {
      "date": "10-13",
      "id": 3,
      "question": "Melyik országban készítik a Daewoo-gépkocsikat?",
      "options": ["India", "Japán", "Dél-Korea", "Kína"],
      "answer": 2,
      "expl": "A Daewoo-k Dél-Koreában készülnek."
    }, {
      "date": "10-13",
      "id": 4,
      "question": "Ki írta a *Puszták népe* című szociográfiát?",
      "options": ["Bertha Bulcsú", "Fekete István", "Illyés Gyula", "Veres Péter"],
      "answer": 2,
      "expl": "A *Puszták népe* című szociográfiát Illyés Gyula írta."
    }, {
      "date": "10-13",
      "id": 5,
      "question": "Milyen hangszer a kornett?",
      "options": ["pengetős", "ütős", "billentyűs", "fúvós"],
      "answer": 3,
      "expl": "A kornett rézfúvós hangszer."
    }, {
      "date": "10-13",
      "id": 6,
      "question": "Ki volt a „nagy palóc”?",
      "options": ["Mikszáth Kálmán", "Jókai Mór", "Arany János", "Móricz Zsigmond"],
      "answer": 0,
      "expl": "A nagy palóc Mikszáth Kálmán jelzője."
    }, {
      "date": "10-13",
      "id": 7,
      "question": "Milyen nemzetiségű volt Andersen?",
      "options": ["svéd", "finn", "dán", "norvég"],
      "answer": 2,
      "expl": "Hans Christian Andersen dán író."
    }, {
      "date": "10-13",
      "id": 8,
      "question": "Melyik a farsangi időszak első napja?",
      "options": ["Szent Antal napja", "Vízkereszt", "Balázs napja", "Gyertyaszentelő Boldog-asszony napja"],
      "answer": 1,
      "expl": "A farsangi időszak kezdete Vízkereszt napja (január 6)."
    }, {
      "date": "10-13",
      "id": 9,
      "question": "Melyik szervünket gyógyítja a pulmonológus?",
      "options": ["tüdőnket", "gyomrunkat", "agyunkat", "hormonrendszerünket"],
      "answer": 0,
      "expl": "A pulmonológus tüdőgyógyász."
    }, {
      "date": "10-13",
      "id": 10,
      "question": "Kirobban a hatnapos arab&#150;izraeli háború; meghal Che Guevara; Barnard professzor végrehajtja az első emberi szívátültetést; bemutatják Antonioni *Nagyítás* című filmjét, hazánkban bevezetik a gyermekgondozási segélyt. Mikor?",
      "options": ["1960", "1967", "1972", "1975"],
      "answer": 1,
      "expl": "1967-ben történtek ezek az események."
    }, {
      "date": "10-14",
      "id": 1,
      "question": "Mi volt az első pénznem hazánkban?",
      "options": ["poltúra", "garas", "dénár", "pengő"],
      "answer": 2,
      "expl": "Az első hazai pénznemünk a dénár volt."
    }, {
      "date": "10-14",
      "id": 2,
      "question": "Ki volt a „Fekete bég”?",
      "options": ["III. Ahmed", "Kasztrióta György", "Nádasdy Ferenc", "II. Bajazid"],
      "answer": 2,
      "expl": "A Fekete bég Nádasdy Ferenc, a tizenötéves háború egyik híres hadvezérének jelzője."
    }, {
      "date": "10-14",
      "id": 3,
      "question": "Melyik együttes indult el a világsiker útján a Waterloo című dalukkal?",
      "options": ["Beatles", "ABBA", "Bee Gees", "Boney M"],
      "answer": 1,
      "expl": "A Waterloo a svéd ABBA első világsikere."
    }, {
      "date": "10-14",
      "id": 4,
      "question": "Melyik várost hívták a rómaiak Lutetiának?",
      "options": ["Athént", "Londont", "Párizst", "Damaszkuszt"],
      "answer": 2,
      "expl": "Párizs latin neve Lutetia."
    }, {
      "date": "10-14",
      "id": 5,
      "question": "Mit jelent a budoár szó?",
      "options": ["illemhely", "legénylakás", "öltözőszoba", "oldalszoba, fülke"],
      "answer": 2,
      "expl": "A budoár női öltözőszoba, kis szalon."
    }, {
      "date": "10-14",
      "id": 6,
      "question": "Melyik olimpián vonták fel először az ötkarikás lobogót?",
      "options": ["1912-ben (Stockholm)", "1920-ban (Antwerpen)", "1928-ban (Amszterdam)", "1936-ban (Berlin)"],
      "answer": 1,
      "expl": "1920-ban, Antwerpenben, az ország adományaként vonták fel először az ötkarikás lobogót."
    }, {
      "date": "10-14",
      "id": 7,
      "question": "Ki az archeológus?",
      "options": ["barlangász", "földtantudós", "régész", "bélyegszakértő"],
      "answer": 2,
      "expl": "Az archeológus régész."
    }, {
      "date": "10-14",
      "id": 8,
      "question": "Hol fekszik Salvador?",
      "options": ["Közép-Afrikában", "Dél-Amerikában", "Nyugat-Ázsiában", "Közép-Amerikában"],
      "answer": 3,
      "expl": "Salvador közép-amerikai ország."
    }, {
      "date": "10-14",
      "id": 9,
      "question": "Mi a tátorján?",
      "options": ["pengetős hangszer", "édesvízi hal", "védett növény", "díszfa"],
      "answer": 2,
      "expl": "A tátorján védett növény."
    }, {
      "date": "10-14",
      "id": 10,
      "question": "A Szapolyai-párti országgyűlés királlyá választja a csecsemő János Zsigmondot, megalakul a jezsuita rend, VIII. Henrik oltár elé vezeti negyedik és ötödik feleségét, meghal Johann Faustus német orvos. Mikor?",
      "options": ["1450", "1505", "1540", "1594"],
      "answer": 2,
      "expl": "1540-ben történtek ezek az események."
    }, {
      "date": "10-15",
      "id": 1,
      "question": "Melyik kémiai elem édesíti meg a gyümölcsöt?",
      "options": ["szacharóz", "cellulóz", "viszkóz", "glükóz"],
      "answer": 3,
      "expl": "Glükóztartalmától édes a gyümölcs."
    }, {
      "date": "10-15",
      "id": 2,
      "question": "Melyik bolygó holdjait nevezték el Shakespeare-alakokról?",
      "options": ["Neptunuszét", "Uránuszét", "Szaturnuszét", "Plutóét"],
      "answer": 1,
      "expl": "Az Uránusz 15 holdját nevezték el Shakespeare-hősökről."
    }, {
      "date": "10-15",
      "id": 3,
      "question": "Ki találta fel a villámhárítót és a bifokális szemüveget?",
      "options": ["Sir Richard Arkwright", "Benjamin Franklin", "Thomas Alva Edison", "Alfred Nobel"],
      "answer": 1,
      "expl": "A villámhárító és a bifokális szemüveg Benjamin Franklin találmánya."
    }, {
      "date": "10-15",
      "id": 4,
      "question": "Ki volt az első magyar női olimpiai bajnok?",
      "options": ["Elek Ilona", "Gyarmati Olga", "Csák Ibolya", "Gyenge Valéria"],
      "answer": 2,
      "expl": "Első női olimpiai bajnokunk Csák Ibolya (1936, Berlin, magasugrás)."
    }, {
      "date": "10-15",
      "id": 5,
      "question": "Ki festette az Éjjeli őrjárat című festményt?",
      "options": ["Caravaggio", "Dürer", "Pisanello", "Rembrandt"],
      "answer": 3,
      "expl": "Az Éjjeli őrjáratot Rembrandt festette."
    }, {
      "date": "10-15",
      "id": 6,
      "question": "Hány holdhónap van egy évben?",
      "options": ["10", "11", "12", "13"],
      "answer": 3,
      "expl": "Egy év 13 holdhónapból áll."
    }, {
      "date": "10-15",
      "id": 7,
      "question": "Mi az alabástrom?",
      "options": ["féldrágakő", "középkori fegyver", "gipszfajta", "liliomfélék egyik faja"],
      "answer": 2,
      "expl": "Az alabástrom finomszemcsés gipsz."
    }, {
      "date": "10-15",
      "id": 8,
      "question": "Hány liter vére van egy felnőtt embernek?",
      "options": ["kb. 2", "kb. 5", "kb. 7", "kb. 10"],
      "answer": 1,
      "expl": "Egy felnőtt embernek kb. 5 l vére van."
    }, {
      "date": "10-15",
      "id": 9,
      "question": "Miről kapta a Kanári-szigetek a nevét?",
      "options": ["kutyákról", "énekes madarakról", "felfedezője nevéről", "a felfedező expedíció hajójáról"],
      "answer": 0,
      "expl": "A Kanári szigetek nevét a kutya latin nevéről (Canis) kapta."
    }, {
      "date": "10-15",
      "id": 10,
      "question": "Melyik ország a kukorica őshazája?",
      "options": ["Portugália", "India", "Mexikó", "Új-Zéland"],
      "answer": 2,
      "expl": "A kukorica Mexikóból származik."
    }, {
      "date": "10-16",
      "id": 1,
      "question": "Melyik városban van a Balatoni Múzeum?",
      "options": ["Siófokon", "Keszthelyen", "Balatonalmádiban", "Tihanyban"],
      "answer": 1,
      "expl": "A Balatoni Múzeum Keszthelyen található."
    }, {
      "date": "10-16",
      "id": 2,
      "question": "Hány fős csapatok játszanak a gyeplabdában?",
      "options": ["6", "8", "11", "12"],
      "answer": 2,
      "expl": "A gyeplabdacsapat 11 főből áll."
    }, {
      "date": "10-16",
      "id": 3,
      "question": "Mi a neve ma Karlsbadnak?",
      "options": ["Karlovac", "Karlsruhe", "Karlovy Vary", "Károlyfalva"],
      "answer": 2,
      "expl": "Karlsbad neve ma Karlovy Vary."
    }, {
      "date": "10-16",
      "id": 4,
      "question": "Melyik költőhöz fűződik a költészet napja?",
      "options": ["Ady Endréhez", "Kosztolányi Dezsőhöz", "Kölcsey Ferenchez", "József Attilához"],
      "answer": 3,
      "expl": "József Attila születésnapjának évfordulóján ünnepeljük a költészet napját."
    }, {
      "date": "10-16",
      "id": 5,
      "question": "Melyik madár tud hátrafelé repülni?",
      "options": ["albatrosz", "kolibri", "sarlósfecske", "ökörszem"],
      "answer": 1,
      "expl": "A kolibri tud hátrafelé repülni."
    }, {
      "date": "10-16",
      "id": 6,
      "question": "Melyik zenemű szereplője Napóleon?",
      "options": ["A bűvös vadász", "Háry János", "Álarcosbál", "Parsifal"],
      "answer": 1,
      "expl": "Kodály Zoltán: Háry János című művében szerepel Napóleon."
    }, {
      "date": "10-16",
      "id": 7,
      "question": "Mit mér a barométer?",
      "options": ["fókusztávolságot", "légnyomást", "szélerősséget", "gáznyomást"],
      "answer": 1,
      "expl": "A barométer a légnyomás mérőeszköze."
    }, {
      "date": "10-16",
      "id": 8,
      "question": "Hány kg 20 tonna?",
      "options": ["200", "2000", "20 000", "200 000"],
      "answer": 2,
      "expl": "20 tonna 20 000 kilogramm."
    }, {
      "date": "10-16",
      "id": 9,
      "question": "Melyik várost nevezzük az Örök Városnak?",
      "options": ["Párizst", "Rómát", "Londont", "Bécset"],
      "answer": 1,
      "expl": "Rómát nevezzük az Örök Városnak."
    }, {
      "date": "10-16",
      "id": 10,
      "question": "Meghal Garibaldi, Olaszország csatlakozik a kettős szövetséghez, világkiállítás Moszkvában, Koch felfedezi a tbc bacilusát. Mikor?",
      "options": ["1836", "1849", "1882", "1909"],
      "answer": 2,
      "expl": "1882-ben történtek ezek az események."
    }, {
      "date": "10-17",
      "id": 1,
      "question": "Ki mondta: „Az állam én vagyok”?",
      "options": ["XIV. Lajos", "I. Ferenc József", "Mátyás király", "VIII. Henrik"],
      "answer": 0,
      "expl": "„Az állam én vagyok” kijelentést XIV. Lajosnak tulajdonítják."
    }, {
      "date": "10-17",
      "id": 2,
      "question": "Hány aranyérmet szerzett úszásban Mark Spitz a müncheni olimpián?",
      "options": ["4", "7", "8", "10"],
      "answer": 1,
      "expl": "Mark Spitz a müncheni olimpián 7 aranyérmet nyert."
    }, {
      "date": "10-17",
      "id": 3,
      "question": "Ki tervezte az első Volkswagen gépkocsit?",
      "options": ["Karl Friedrich Benz", "Gottlieb Wilhelm Daimler", "Adam Opel", "Ferdinand Porsche"],
      "answer": 3,
      "expl": "Az első Volkswagen gépkocsit Ferdinand Porsche tervezte."
    }, {
      "date": "10-17",
      "id": 4,
      "question": "Hány húrja van a hegedűnek?",
      "options": ["3", "4", "5", "6"],
      "answer": 1,
      "expl": "A hegedűnek 4 húrja van."
    }, {
      "date": "10-17",
      "id": 5,
      "question": "Ki ismerte fel a szabadesés törvényét?",
      "options": ["Avogadro", "Newton", "Rayleigh", "Galilei"],
      "answer": 3,
      "expl": "A szabadesés felismerője Galileo Galilei."
    }, {
      "date": "10-17",
      "id": 6,
      "question": "Mi a vatelin szó jelentése?",
      "options": ["gallér", "kenőcs", "meleg bélés", "műszőrme"],
      "answer": 2,
      "expl": "A vatelin bélésanyag."
    }, {
      "date": "10-17",
      "id": 7,
      "question": "Melyik ország pénzneme a riál?",
      "options": ["Pakisztáné", "Indiáé", "Iraké", "Iráné"],
      "answer": 3,
      "expl": "A riál Irán pénzneme."
    }, {
      "date": "10-17",
      "id": 8,
      "question": "Hányan voltak az apostolok, Jézus közvetlen tanítványai?",
      "options": ["3", "6", "10", "12"],
      "answer": 3,
      "expl": "Az apostolok száma 12."
    }, {
      "date": "10-17",
      "id": 9,
      "question": "Mi volt Mianmar neve 1989-ig?",
      "options": ["Burma", "Becsuána-föld", "Felső-Volta", "Rhodesia"],
      "answer": 0,
      "expl": "Burma neve 1989 óta Mianmar."
    }, {
      "date": "10-17",
      "id": 10,
      "question": "Ki játszotta az Esőember című film autista főhősének testvérét?",
      "options": ["Tom Cruise", "Richard Gere", "Dustin Hoffman", "Michael Douglas"],
      "answer": 0,
      "expl": "A Dustin Hoffman által alakított „Esőember” testvérét Tom Cruise játszotta."
    }, {
      "date": "10-18",
      "id": 1,
      "question": "Hol találhatók palóc házak?",
      "options": ["Kalotaszegen", "Mezőkövesden", "Hollókőn", "Göcsejen"],
      "answer": 2,
      "expl": "A palóc házak Hollókő nevezetességei."
    }, {
      "date": "10-18",
      "id": 2,
      "question": "Melyik magyar rendező kapott először Oscar-díjat?",
      "options": ["Szabó István", "Jancsó Miklós", "Bacsó Béla", "Rófusz Ferenc"],
      "answer": 3,
      "expl": "Első Oscar-díjas rendezőnk Rófusz Ferenc (1981, *A légy* című rajzfilmért)."
    }, {
      "date": "10-18",
      "id": 3,
      "question": "Melyik magyar labdarúgócsapat nyerte a legtöbb bajnokságot?",
      "options": ["Ferencváros", "Vasas", "Budapesti Honvéd", "Újpesti Dózsa"],
      "answer": 0,
      "expl": "A legtöbb labdarúgó-bajnokságot a Ferencváros csapata nyerte."
    }, {
      "date": "10-18",
      "id": 4,
      "question": "Mi Elefántcsontpart fővárosa?",
      "options": ["Abidjan", "Luanda", "Yamoussoukro", "Nairobi"],
      "answer": 2,
      "expl": "Elefáncsontpart fővárosa Yamoussoukro."
    }, {
      "date": "10-18",
      "id": 5,
      "question": "Ki Bánk bán felesége Katona József drámájában?",
      "options": ["Mária", "Gertrudis", "Melinda", "Izidóra"],
      "answer": 2,
      "expl": "Katona József drámájában Bánk bán felesége Melinda."
    }, {
      "date": "10-18",
      "id": 6,
      "question": "Honnan kapta a farmernadrág, azaz a jeans a nevét?",
      "options": ["az aranyásókról", "Genováról", "az indigóról", "a cowboyok becenevéről"],
      "answer": 1,
      "expl": "Genovai (angolul Jean) bevándorlókról kapta a farmer a nevét."
    }, {
      "date": "10-18",
      "id": 7,
      "question": "Ki volt a „haza bölcse”?",
      "options": ["II. Rákóczi Ferenc", "Széchenyi István", "Kossuth Lajos", "Deák Ferenc"],
      "answer": 3,
      "expl": "Deák Ferenc viseli a „haza bölcse” címet."
    }, {
      "date": "10-18",
      "id": 8,
      "question": "Mit készítettek a vargák?",
      "options": ["lábbeliket", "szőrme- és prémruházatot", "hordókat", "faeszközöket"],
      "answer": 0,
      "expl": "A vargák a nyersbőr kikészítésével  és egyszerűbb lábbelik készítésével foglalkoztak."
    }, {
      "date": "10-18",
      "id": 9,
      "question": "Ki repülte át először a La Manche csatornát?",
      "options": ["Richard E. Byrd", "Louis Blériot", "Lincoln Ellsworth", "Orville Wright"],
      "answer": 1,
      "expl": "1909-ben Louis Blériot repülte át elsőként a La Manche csatornát."
    }, {
      "date": "10-18",
      "id": 10,
      "question": "Az USA kongresszusa eltörli a rabszolgaságot, Deák Ferenc a Pesti Naplóban közzéteszi kiegyezési ajánlatát, Mendel megfogalmazza örökléstani törvényeit, megjelenik Lewis Carrol Alice Csodaországban című meseregénye. Mikor?",
      "options": ["1852", "1858", "1865", "1880"],
      "answer": 2,
      "expl": "1865-ben történtek ezek az események."
    }, {
      "date": "10-19",
      "id": 1,
      "question": "Mi a nevük az élő vagy elhalt fán élősködő gombáknak?",
      "options": ["gubacs", "baktérium", "hifa", "tapló"],
      "answer": 3,
      "expl": "A fán élősködő gombák a taplók."
    }, {
      "date": "10-19",
      "id": 2,
      "question": "Melyik növény fajtái: sün, szivacs, pézsma, sár?",
      "options": ["tök", "bab", "paprika", "gomba"],
      "answer": 0,
      "expl": "A felsorolt növényfajok a tökfélékhez tartoznak."
    }, {
      "date": "10-19",
      "id": 3,
      "question": "Ki a milimári?",
      "options": ["szobalány", "virágáruslány", "kalaposlány", "tejárusnő"],
      "answer": 3,
      "expl": "A milimári tejárusnő."
    }, {
      "date": "10-19",
      "id": 4,
      "question": "Kinek a felesége volt Laborfalvy Róza?",
      "options": ["Móricz Zsigmondé", "Jókai Móré", "Arany Jánosé", "Mikszáth Kálmáné"],
      "answer": 1,
      "expl": "Laborfalvy Róza Jókai Mór felesége volt."
    }, {
      "date": "10-19",
      "id": 5,
      "question": "Melyik sportág nem tartozik az öttusába?",
      "options": ["párbajtőrvívás", "terepfutás", "távolugrás", "pisztolylövés"],
      "answer": 2,
      "expl": "Távolugrás nem szerepel az öttusában."
    }, {
      "date": "10-19",
      "id": 6,
      "question": "Ki követte II. Andrást a magyar trónon?",
      "options": ["IV. Béla", "III. András", "III. László", "V. István"],
      "answer": 0,
      "expl": "II. Andrást IV. Béla követte a magyar trónon."
    }, {
      "date": "10-19",
      "id": 7,
      "question": "Ki volt az USA elnöke 1953&#150;1961 között?",
      "options": ["Harry S. Truman", "Calvin Coolidge", "Richard M. Nixon", "Dwight D. Eisenhower"],
      "answer": 3,
      "expl": "D. D. Eisenhower volt az USA elnöke 1953 és 1961 között."
    }, {
      "date": "10-19",
      "id": 8,
      "question": "Az olimpiai karikán melyik földrészt szimbolizálja a zöld szín?",
      "options": ["Amerikát", "Európát", "Ázsiát", "Afrikát"],
      "answer": 1,
      "expl": "Az olimpiai karikák közül a zöld Európát szimbolizálja."
    }, {
      "date": "10-19",
      "id": 9,
      "question": "Hány évenként tűnik fel a Halley-üstökös?",
      "options": ["23", "41", "76", "101"],
      "answer": 2,
      "expl": "A Halley-üstökös keringési ideje 76 év."
    }, {
      "date": "10-19",
      "id": 10,
      "question": "Angliában elkezdődik a rózsák háborúja, Gutenberg János nyomdájában elkészül a 42 soros biblia, Kapisztrán János Magyarországra jön keresztes háborút prédikálni. Mikor?",
      "options": ["1405", "1428", "1455", "1502"],
      "answer": 2,
      "expl": "1455-ben történtek ezek az események."
    }, {
      "date": "10-20",
      "id": 1,
      "question": "Mi a tipi?",
      "options": ["afrikai madárfaj", "indián sátor", "alsószoknya", "tökféle"],
      "answer": 1,
      "expl": "A tipi indián sátor."
    }, {
      "date": "10-20",
      "id": 2,
      "question": "Ki festette az *Egri nők* című festményt?",
      "options": ["Aba Novák Vilmos", "Munkácsy Mihály", "Székely Bertalan", "Orlai Petrich Soma"],
      "answer": 2,
      "expl": "Az *Egri nők* című festményt Székely Bertalan festette."
    }, {
      "date": "10-20",
      "id": 3,
      "question": "Mit neveztek fekete halálnak a középkorban?",
      "options": ["pestist", "kolerát", "himlőt", "leprát"],
      "answer": 0,
      "expl": "Fekete halál a pestis neve volt."
    }, {
      "date": "10-20",
      "id": 4,
      "question": "Mikor volt az első világkiállítás?",
      "options": ["1839-ben", "1851-ben", "1880-ban", "1889-ben"],
      "answer": 1,
      "expl": "1851-ben Londonban volt az első világkiállítás."
    }, {
      "date": "10-20",
      "id": 5,
      "question": "Ki fedezte fel a penicillint?",
      "options": ["Fleming", "Koch", "Pasteur", "Ehrlich"],
      "answer": 0,
      "expl": "A penicillint Fleming fedezte fel."
    }, {
      "date": "10-20",
      "id": 6,
      "question": "Melyik találmányt fedezték fel a legkorábban?",
      "options": ["zongora", "ingaóra", "könyvnyomtatás", "tükrös távcső"],
      "answer": 2,
      "expl": "A könyvnyomtatást fedezték fel a legkorábban (1454) (ingaóra: 1657, tükrös távcső: 1668, zongora: 1710)."
    }, {
      "date": "10-20",
      "id": 7,
      "question": "Milyen eredetű tánc a mazurka?",
      "options": ["cseh", "lengyel", "orosz", "német"],
      "answer": 1,
      "expl": "A mazurka lengyel eredetű tánc."
    }, {
      "date": "10-20",
      "id": 8,
      "question": "Mi Brazília hivatalos nyelve?",
      "options": ["spanyol", "portugál", "angol", "brazil"],
      "answer": 1,
      "expl": "Brazília hivatalos nyelve a portugál."
    }, {
      "date": "10-20",
      "id": 9,
      "question": "Szovjetuniót felveszik a Népszövetségbe, a hosszú kések éjszakáján meggyilkolják az SA vezetőit, a bécsi felkelés, Kínában megkezdődik a hosszú menetelés, a Curie házaspár felfedezi a mesterséges radioaktivitást. Mikor?",
      "options": ["1928", "1934", "1938", "1941"],
      "answer": 1,
      "expl": "1934-ben történtek ezek az események."
    }, {
      "date": "10-20",
      "id": 10,
      "question": "Meghal Richelieu bíboros, Jules Mazarin lép helyébe; Angliában betiltják a színházakat; a franciák megalapítják Montreált; Rembrandt megfesti az *Éjjeli őrjáratot*; Tasman felfedezi Új-Zélandot. Mikor?",
      "options": ["1598", "1642", "1687", "1696"],
      "answer": 1,
      "expl": "1642-ben történtek ezek az események."
    }, {
      "date": "10-21",
      "id": 1,
      "question": "Ki a római mitológia főistene?",
      "options": ["Jupiter", "Mars", "Mercurius", "Atlasz"],
      "answer": 0,
      "expl": "A római mitológia főistene Jupiter."
    }, {
      "date": "10-21",
      "id": 2,
      "question": "Ki volt az első Forma&#150;1-es bajnokság győztese?",
      "options": ["Jack Brabham", "Alberto Ascari", "Juan Fangio", "Mike Hawthorne"],
      "answer": 2,
      "expl": "A Forma-1 első bajnoka Juan Fangio volt (1951)."
    }, {
      "date": "10-21",
      "id": 3,
      "question": "Melyik ország nem határos Lengyelországgal?",
      "options": ["Belorusszia", "Lettország", "Ukrajna", "Szlovákia"],
      "answer": 1,
      "expl": "Lettország nem határos Lengyelországgal."
    }, {
      "date": "10-21",
      "id": 4,
      "question": "Melyik költőnkhöz-írónkhoz kapcsolódik a magyar dráma napja?",
      "options": ["Katona Józsefhez", "Madách Imréhez", "Illyés Gyulához", "Vörösmarty Mihályhoz"],
      "answer": 1,
      "expl": "Madách Imre: Az ember tragédiája című műve ősbemutatójának napján ünnepeljük a magyar dráma napját."
    }, {
      "date": "10-21",
      "id": 5,
      "question": "Melyik földrészt szimbolizálja a piros karika az olimpiai ötkarikán?",
      "options": ["Ázsiát", "Afrikát", "Amerikát", "Európát"],
      "answer": 2,
      "expl": "Az olimpiai karikák közül a piros az amerikai földrészt szimbolizálja."
    }, {
      "date": "10-21",
      "id": 6,
      "question": "Hányadik században élt Medici Katalin?",
      "options": ["XIV.", "XV.", "XVI.", "XVII."],
      "answer": 2,
      "expl": "Medici Katalin a XVI. században élt (1519–1589)."
    }, {
      "date": "10-21",
      "id": 7,
      "question": "Melyik két város között épült az első vasútvonal hazánkban?",
      "options": ["Pest&#150;Vác", "Pest&#150;Szolnok", "Pest&#150;Cegléd", "Pest&#150;Celldömölk"],
      "answer": 0,
      "expl": "Hazánkban elsőként Pest és Vác között épült vasútvonal (1846)."
    }, {
      "date": "10-21",
      "id": 8,
      "question": "Melyik Jókai-mű szereplője Baradlay Jenő?",
      "options": ["Névtelen vár", "Kőszívű ember fiai", "Aranyember", "És mégis mozog a Föld"],
      "answer": 1,
      "expl": "Baradlay Jenő a Kőszívű ember fiai című Jókai-mű szereplője."
    }, {
      "date": "10-21",
      "id": 9,
      "question": "Ki rendezte a következő filmeket: A kaland, Napfogyatkozás, Vörös sivatag, Zabriskie Point, Két távirat?",
      "options": ["B. Bertolucci", "M. Antonioni", "L. Bunuel", "A. Kuroszava"],
      "answer": 1,
      "expl": "A felsorolt filmek rendezője Antonioni."
    }, {
      "date": "10-21",
      "id": 10,
      "question": "Fidel Castro Kuba miniszterelnöke, a kínaiak vérbe fojtják a tibeti felkelést, a szovjet Luna&#150;2 lefényképezi a hold túlsó oldalát, Alaszka az USA 49. tagállama. Mikor?",
      "options": ["1946", "1954", "1959", "1964"],
      "answer": 2,
      "expl": "1959-ben történtek ezek az események."
    }, {
      "date": "10-22",
      "id": 1,
      "question": "Hány fős csapatok játsszák a curlinget?",
      "options": ["3", "4", "6", "7"],
      "answer": 1,
      "expl": "4-4 fős csapatok játsszák a curlinget."
    }, {
      "date": "10-22",
      "id": 2,
      "question": "Melyik kémiai elemet nevezték el a napról?",
      "options": ["argont", "ozmiumot", "héliumot", "radont"],
      "answer": 2,
      "expl": "A napról a hélium kapta a nevét."
    }, {
      "date": "10-22",
      "id": 3,
      "question": "Hol található az Ermitázs?",
      "options": ["Madridban", "Párizsban", "Prágában", "Szentpétervárott"],
      "answer": 3,
      "expl": "Az Ermitázs Szentpétervárott található."
    }, {
      "date": "10-22",
      "id": 4,
      "question": "Mi a bizon?",
      "options": ["bölény", "kiskabát, zakó", "ostoba ember", "szőlőfajta"],
      "answer": 0,
      "expl": "A bizon bölény."
    }, {
      "date": "10-22",
      "id": 5,
      "question": "Melyik városunk római neve Flaxum?",
      "options": ["Kőszeg", "Szombathely", "Zalaegerszeg", "Mosonmagyaróvár"],
      "answer": 3,
      "expl": "Flaxum Mosonmagyaróvár latin neve."
    }, {
      "date": "10-22",
      "id": 6,
      "question": "Mi történt 1789. augusztus 26-án?",
      "options": ["A francia alkotmányozó gyűlés elfogadta az Emberi és Polgári Jogok Nyilatkozatát", "Párizsban a nép megostromolta a Bastille-t", "A francia nemzetgyűlés felszabadította a jobbágyokat", "A labdaházi eskü"],
      "answer": 0,
      "expl": "A megadott napon fogadták el az Emberi és Polgári Jogok Nyilatkozatát."
    }, {
      "date": "10-22",
      "id": 7,
      "question": "Melyik író nyert olimpiai bajnokságot?",
      "options": ["Martin Andersen Nexo", "Maurice Maeterlinck", "Isaac Asimov", "Klaus Mann"],
      "answer": 1,
      "expl": "1896-ban evezésben olimpiai bajnokságot nyert Maurice Maeterlinck."
    }, {
      "date": "10-22",
      "id": 8,
      "question": "Ki mondta: „A háborúhoz három dolog kell: pénz, pénz, pénz!”?",
      "options": ["W. Churchill", "R. Montecuccoli", "M. Antonius", "O. Cromwell"],
      "answer": 1,
      "expl": "A szállóige Raimondo Montecuccoli osztrák hadvezértől származik."
    }, {
      "date": "10-22",
      "id": 9,
      "question": "Kit neveznek „fekete gyöngyszem”-nek?",
      "options": ["Carl Lewist", "Magic Johnsont", "Muhammad Alit", "Pelét"],
      "answer": 3,
      "expl": "A „fekete gyöngyszem” Pelé jelzője."
    }, {
      "date": "10-22",
      "id": 10,
      "question": "Indira Gandhi pártja győz az indiai, Ronald Reagan az amerikai választásokon, kirobban az iraki&#150;iráni háború, meghal Tito, sztrájkok kezdődnek Lengyelországban, Farkas Bertalan űrrepülése. Mikor?",
      "options": ["1977", "1980", "1982", "1984"],
      "answer": 1,
      "expl": "1980-ban történtek ezek az események."
    }, {
      "date": "10-23",
      "id": 1,
      "question": "Hányadik században élt Budai Nagy Antal?",
      "options": ["XIV.", "XV.", "XVI.", "XVII."],
      "answer": 1,
      "expl": "Budai Nagy Antal a XV. században élt (?–1437)."
    }, {
      "date": "10-23",
      "id": 2,
      "question": "Melyik szervünk betegsége a trachoma?",
      "options": ["szív", "fül", "szem", "gyomor"],
      "answer": 2,
      "expl": "A trachoma szembetegség."
    }, {
      "date": "10-23",
      "id": 3,
      "question": "Mi a paraplé?",
      "options": ["mellvéd", "rövid kabát", "esernyő", "füstölő"],
      "answer": 2,
      "expl": "A paraplé jelentése esernyő."
    }, {
      "date": "10-23",
      "id": 4,
      "question": "Minek a rövidítése a FAO?",
      "options": ["Egyesült Nemzetek Élelmezési és Mezőgazdasági Szervezetének", "Egyesült Nemzetek Gyermekvédelmi Alapjának", "Egyesült Nemzetek Környezetvédő Programjának", "Egyesült Nemzetek Nevelésügyi, Tudományos és Kulturális Szervezetének"],
      "answer": 0,
      "expl": "A FAO az Egyesült Nemzetek Élelmezési és Mezőgazdasági Szervezete nevének rövidítése."
    }, {
      "date": "10-23",
      "id": 5,
      "question": "Melyik szó nem francia eredetű?",
      "options": ["arzén", "migrén", "tribün", "trubadúr"],
      "answer": 0,
      "expl": "A sötétszürke, rideg, erősen mérgező kémiai elem, az arzén héber eredetű szó."
    }, {
      "date": "10-23",
      "id": 6,
      "question": "Mi a szurokfű fűszerünk ma már gyakrabban használt görög–latin eredetű neve?",
      "options": ["kurkuma", "snidling", "kardamon", "oregánó"],
      "answer": 3,
      "expl": "A szurokfű fűszerünk ma leginkább oregánó néven ismert."
    }, {
      "date": "10-23",
      "id": 7,
      "question": "Kik alapították Karthágó városát?",
      "options": ["sumérok", "föníciaiak", "babilóniaiak", "perzsák"],
      "answer": 1,
      "expl": "Karthágót i. e. 814-ben a föníciai telepesek alapították."
    }, {
      "date": "10-23",
      "id": 8,
      "question": "Hogy nevezik a teniszben a fogadhatatlan szervát?",
      "options": ["szett", "brék", "ász", "necc"],
      "answer": 0,
      "expl": "Ásznak nevezzük és azonnali pontszerzést jelent az adogató számára, ha a fogadó fél bele sem tud érni a szabályos adogatásba."
    }, {
      "date": "10-23",
      "id": 9,
      "question": "Melyik magyar film karakterei: Kerekes András, Tóth Panna, Lohrák Lajoska, Piri, Pufi?",
      "options": ["Kétszer kettő néha öt", "Fel a fejjel", "Egy pikoló világos", "Mese a 12 találatról"],
      "answer": 0,
      "expl": "Zenthe Ferenc és Ferrari Violetta főszereplésével készült, a *Kétszer kettő néha öt* című zenés vígjáték karakterei voltak a felsoroltak."
    }, {
      "date": "10-23",
      "id": 10,
      "question": "Elindul az első autóbuszjárat Budapesten; Albert Einstein közzéteszi általános relativitáselméletét; Detroitban legördül az egymilliomodik Ford autó a futószalagról; máig egyetlen esetben adódott úgy, hogy apa és fia, a brit William és Lawrence Bragg közös tevékenységért kapta meg a fizikai Nobel-díjat; egy német U20-as tengeralattjáró megtorpedózza és elsüllyeszti a Lusitania utasszállító hajót. Mikor?",
      "options": ["1912", "1915", "1919", "1923"],
      "answer": 1,
      "expl": "1915-ben történtek ezek az események."
    }, {
      "date": "10-24",
      "id": 1,
      "question": "Mi a neve a réz- vagy bronztárgyakon keletkező nemes rozsdának?",
      "options": ["pigment", "lüszter", "patina", "metallizáció"],
      "answer": 2,
      "expl": "A nemes rozsdát patinának nevezik."
    }, {
      "date": "10-24",
      "id": 2,
      "question": "Honnan ered a Csendes-óceán neve?",
      "options": ["Nevét egy ősi polinéz legenda alapján kapta, amely szerint egy hatalmas teknős nyugodt vizet teremtett a tengeren, hogy megvédje az utazókat a viharoktól.", "Magellán és csapata békésen hajóztak át a térképeken nem szereplő ismeretlen vizeken, így a „csendes tenger” nevet kapta. A hajósok a Csendes-óceánt megelőzően kifejezetten viharos tengeri utakon jártak, itt nyugodt, békés vizekre leltek.", "A Csendes-óceán eredetileg „Arany-óceán” néven volt ismert, mert az első felfedezők aranyhomokot találtak partjainál, de később átnevezték, hogy jobban tükrözze békés vizeit.", "Nevét azért kapta, mert a korai térképkészítők tévedésből úgy hitték, hogy ez az óceán szélcsendes terület, ahol soha nem alakulnak ki viharok."],
      "answer": 0,
      "expl": ""
    }, {
      "date": "10-24",
      "id": 3,
      "question": "Mi az ökörnyál?",
      "options": ["csillagkép", "védett növény", "pókfonál", "kóros nyálfolyás"],
      "answer": 2,
      "expl": "Az ökörnyál a levegőben lebegő pókfonál neve."
    }, {
      "date": "10-24",
      "id": 4,
      "question": "Melyik városban van a Szent Márk-székesegyház?",
      "options": ["Madridban", "Velencében", "Londonban", "Párizsban"],
      "answer": 1,
      "expl": "A Szent Márk-székesegyház Velencében található."
    }, {
      "date": "10-24",
      "id": 5,
      "question": "Ki mondta: „Humorban nem ismerem a tréfát.”?",
      "options": ["Gobbi Hilda", "Markos József", "Karinthy Frigyes", "Kellér Dezső"],
      "answer": 2,
      "expl": "A szállóige Karinthy Frigyestől származik."
    }, {
      "date": "10-24",
      "id": 6,
      "question": "Ki tervezte a budapesti Erzsébet-kilátót?",
      "options": ["Schulek Frigyes", "Hauszmann Alajos", "Steindl Imre", "Pollack Mihály"],
      "answer": 0,
      "expl": "A budapesti Erzsébet-kilátót Schulek Frigyes tervezte."
    }, {
      "date": "10-24",
      "id": 7,
      "question": "Mi a lacrosse?",
      "options": ["francia ételkülönlegesség", "kétkerekű kocsi", "fúvós hangszer", "indián eredetű labdajáték"],
      "answer": 3,
      "expl": "A lacrosse indián eredetű labdajáték."
    }, {
      "date": "10-24",
      "id": 8,
      "question": "Melyik zenei utasítás jelentése: halkan, lágyan?",
      "options": ["forte", "piano", "allegro", "andante"],
      "answer": 1,
      "expl": "Halkan, csendesen, lágyan: ez a piano zenei utasítás jelentése."
    }, {
      "date": "10-24",
      "id": 9,
      "question": "Mi a vaporettó?",
      "options": ["szicíliai étel", "velencei vízibusz", "oltárkép", "olasz udvari tánc"],
      "answer": 1,
      "expl": "A vaporettó velencei vízibusz."
    }, {
      "date": "10-24",
      "id": 10,
      "question": "Ki az orvosok és a kórházak védőszentje?",
      "options": ["Szent Gellért", "Szent Ambrosius", "Szent Rókus", "Szent Péter"],
      "answer": 2,
      "expl": "Az orvosok és kórházak védőszentje Szent Rókus."
    }, {
      "date": "10-25",
      "id": 1,
      "question": "Ki volt II. Rákóczi Ferenc édesanyja?",
      "options": ["Báthori Erzsébet", "Zrínyi Ilona", "Szilágyi Erzsébet", "Podjebrád Katalin"],
      "answer": 1,
      "expl": "II. Rákóczi Ferenc édesanyja Zrínyi Ilona."
    }, {
      "date": "10-25",
      "id": 2,
      "question": "Kinek a szobra a Diszkoszvető?",
      "options": ["Lüszipposz", "Mürón", "Giovanni da Bologna", "Alkamenész"],
      "answer": 1,
      "expl": "A „Diszkoszvető” Mürón alkotása."
    }, {
      "date": "10-25",
      "id": 3,
      "question": "Ha ezen a napon esik, 40 napig esik... tartja a népi időjóslás. Melyik napon?",
      "options": ["április 1-jén", "május 29-én", "június 8-án", "június 24-én"],
      "answer": 2,
      "expl": "A negyvennapos esőt, illetve szárazságot június 8-án, Medárd napján jósolják."
    }, {
      "date": "10-25",
      "id": 4,
      "question": "Mi Jamaica fővárosa?",
      "options": ["Cayenne", "Bogota", "Caracas", "Kingston"],
      "answer": 3,
      "expl": "Jamaica fővárosa Kingston."
    }, {
      "date": "10-25",
      "id": 5,
      "question": "Mikor volt az első labdarúgó-világbajnokság?",
      "options": ["1910-ben (Anglia)", "1924-ben (Argentína)", "1930-ban (Uruguay)", "1934-ben (Olaszország)"],
      "answer": 2,
      "expl": "Az első labdarúgó-világbajnokságot 1930-ban rendezték."
    }, {
      "date": "10-25",
      "id": 6,
      "question": "Milyen hangszer a tamburin?",
      "options": ["pengetős", "ütős", "fúvós", "billentyűs"],
      "answer": 1,
      "expl": "A tamburin ütős hangszer."
    }, {
      "date": "10-25",
      "id": 7,
      "question": "Hányadik században élt George Washington?",
      "options": ["XVI.", "XVII.", "XVIII.", "XIX."],
      "answer": 2,
      "expl": "George Washington a XVIII. században élt (1732–1799)."
    }, {
      "date": "10-25",
      "id": 8,
      "question": "Ki a hindu mitológia főistene?",
      "options": ["Káma", "Krisna", "Manu", "Indra"],
      "answer": 3,
      "expl": "A hindu mitológia főistene Indra."
    }, {
      "date": "10-25",
      "id": 9,
      "question": "Melyik Földünk legnépesebb országa?",
      "options": ["India", "Kína", "Ausztrália", "Észak-Amerika"],
      "answer": 0,
      "expl": "Földünk legnépesebb ország India (1.426.000.000 fő; 2024. július)"
    }, {
      "date": "10-25",
      "id": 10,
      "question": "Az USA hadat üzen az Osztrák&#150;Magyar Monarchiának, Finnország és Litvánia kikiáltja függetlenségét, agyonlövik Mata Harit, hazánkban lemond Tisza István és Esterházy Móric kormánya, megjelenik Freud *Bevezetés a pszichonalízisbe* című műve. Mikor?",
      "options": ["1901", "1917", "1923", "1937"],
      "answer": 1,
      "expl": "Ezek az események 1917-ben történtek."
    }, {
      "date": "10-26",
      "id": 1,
      "question": "Hol található Madagaszkár?",
      "options": ["a Karib-tengerben", "az Indiai-óceánban", "az Arab-tengerben", "a Csendes-óceánban"],
      "answer": 1,
      "expl": "Madagaszkár az Indiai-óceánban fekszik."
    }, {
      "date": "10-26",
      "id": 2,
      "question": "Ki volt George Everest, a Mount Everest névadója?",
      "options": ["gyarmatosító", "Ázsia-kutató", "térképész", "alkirály"],
      "answer": 2,
      "expl": "Sir George Everest angol térképész volt."
    }, {
      "date": "10-26",
      "id": 3,
      "question": "Ki a A nagy Gatsby, a Keresztapa-trilógia, az Apokalipszis, most című filmek rendezője?",
      "options": ["A. Parker", "M. Scorsese", "S. Kubrick", "F. F. Coppola"],
      "answer": 3,
      "expl": "A felsorolt filmek rendezője Francis Ford Coppola."
    }, {
      "date": "10-26",
      "id": 4,
      "question": "Ki festette a *Magányos cédrus* című festményt?",
      "options": ["Csontváry Kosztka Tivadar", "Munkácsy Mihály", "Rippl-Rónai József", "Szinyei Merse Pál"],
      "answer": 0,
      "expl": "A Magányos cédrus Csontváry Kosztka Tivadar műve."
    }, {
      "date": "10-26",
      "id": 5,
      "question": "Ki/mi a kacagány?",
      "options": ["énekes madár", "stílbútor csavart díszítése", "prémes bőrkabátka", "juhfajta"],
      "answer": 2,
      "expl": "A kacagány vállra vetve viselhető, prémes bőrkabát."
    }, {
      "date": "10-26",
      "id": 6,
      "question": "Mit mérünk a Beaufort-skálán?",
      "options": ["földrengés erősségét", "szélerősséget", "intelligenciát", "folyadékok sűrűségét"],
      "answer": 1,
      "expl": "A Beaufort-skálán a szélerősséget mérjük."
    }, {
      "date": "10-26",
      "id": 7,
      "question": "Melyik országot nevezzük a felkelő nap országának?",
      "options": ["Kínát", "Spanyolországot", "Japánt", "Görögországot"],
      "answer": 2,
      "expl": "A felkelő nap országának Japánt nevezzük."
    }, {
      "date": "10-26",
      "id": 8,
      "question": "Hol zajlott a három császár csatája?",
      "options": ["Borogyinónál", "Augsburgnál", "Austerlitznél", "Königgrätznél"],
      "answer": 2,
      "expl": "A három császár csatája Austerlitznél zajlott (1805. február 2.)."
    }, {
      "date": "10-26",
      "id": 9,
      "question": "Melyik Budapest legmagasabb pontja?",
      "options": ["Gellért-hegy", "János-hegy", "Szabadság-hegy", "Csúcs-hegy"],
      "answer": 1,
      "expl": "Budapest legmagasabb pontja a János-hegy (529 m)."
    }, {
      "date": "10-26",
      "id": 10,
      "question": "Ceausescu lesz a román kommunista párt vezetője, Marcos a Fülöp-szigetek elnöke, New Yorkban meggyilkolják Malcolm X-et, hazánkban hivatalba lép a Kállay-kormány. Mikor?",
      "options": ["1957", "1961", "1965", "1972"],
      "answer": 2,
      "expl": "Ezek az események 1965-ben történtek."
    }, {
      "date": "10-27",
      "id": 1,
      "question": "Mi a rizsma?",
      "options": ["mértékegység", "szépségápolószer", "szeszes ital", "hántolatlan rizs"],
      "answer": 0,
      "expl": "A rizsma a papírmennyiség mértékegysége (1000 ív)."
    }, {
      "date": "10-27",
      "id": 2,
      "question": "Melyikük született legkorábban?",
      "options": ["Mark Twain", "Anton Csehov", "Jules Verne", "Móricz Zsigmond"],
      "answer": 2,
      "expl": "Jules Verne született a legkorábban, 1828-ban. (Mark Twain: 1835; Csehov: 1860; Móricz Zsigmond: 1879)"
    }, {
      "date": "10-27",
      "id": 3,
      "question": "Melyik ország zászlójában nincs zöld szín?",
      "options": ["Olaszországéban", "Portugáliáéban", "Spanyolországéban", "Litvániáéban"],
      "answer": 2,
      "expl": "Spanyolország zászlójában nincs zöld szín."
    }, {
      "date": "10-27",
      "id": 4,
      "question": "Milyen hangszer a tuba?",
      "options": ["fúvós", "ütős", "pengetős", "billentyűs"],
      "answer": 0,
      "expl": "A tuba rézfúvós hangszer."
    }, {
      "date": "10-27",
      "id": 5,
      "question": "Ki volt az impresszionizmus vezető egyénisége?",
      "options": ["Dalí", "Monet", "Kokoschka", "Duchamp"],
      "answer": 1,
      "expl": "Az impresszionizmus vezető egyénisége Claude Oscar Monet volt."
    }, {
      "date": "10-27",
      "id": 6,
      "question": "Melyik nem Mikszáth-mű?",
      "options": ["Új Zrínyiász", "A fekete város", "Szent Péter esernyője", "Kivilágos kivirradtig"],
      "answer": 3,
      "expl": "A „Kivilágos kivirradtig” Móricz Zsigmond műve."
    }, {
      "date": "10-27",
      "id": 7,
      "question": "Melyik királyunkat vakították meg?",
      "options": ["I. Andrást", "V. Istvánt", "II. Bélát", "Aba Sámuelt"],
      "answer": 2,
      "expl": "II. Bélát, Álmos herceg fiát vakíttatta meg Könyves Kálmán."
    }, {
      "date": "10-27",
      "id": 8,
      "question": "Ki vezette a borogyinói csatában az orosz hadakat?",
      "options": ["Mensikov", "Szuvorov", "Patyomkin", "Kutuzov"],
      "answer": 3,
      "expl": "A borogyinói csatában az orosz hadakat Kutuzov vezette."
    }, {
      "date": "10-27",
      "id": 9,
      "question": "Melyik városunkban található a Szigligeti Színház?",
      "options": ["Szolnokon", "Budapesten", "Kaposváron", "Szegeden"],
      "answer": 0,
      "expl": "A Szigligeti Színház Szolnokon található."
    }, {
      "date": "10-27",
      "id": 10,
      "question": "Hogyan hívják az alvilágot őrző mitológiai kutyát?",
      "options": ["Nesszosz", "Kerberosz", "Hádész", "Sziszüphosz"],
      "answer": 1,
      "expl": "Az alvilágot őrző mitológiai kutyát Kerberosznak hívják."
    }, {
      "date": "10-28",
      "id": 1,
      "question": "Mit alapított 1878-ban Catherine és William Booth?",
      "options": ["a BBC-t", "a Vöröskeresztet", "az Üdvhadsereget", "a The Times napilapot"],
      "answer": 2,
      "expl": "Catherine és William Booth a vallási-jótékonysági szervezet, az Üdvhadsereg alapítói."
    }, {
      "date": "10-28",
      "id": 2,
      "question": "Mi a hinduk szent folyója?",
      "options": ["Indus", "Gangesz", "Krisna", "Mekong"],
      "answer": 1,
      "expl": "A hinduk szent folyója a Gangesz."
    }, {
      "date": "10-28",
      "id": 3,
      "question": "Melyik két ország kötötte meg a 1494-ben a tordesillas-i egyezményt?",
      "options": ["Franciaország&#150;Portugália", "Spanyolország&#150;Franciaország", "Portugália&#150;Oroszország", "Spanyolország&#150;Portugália"],
      "answer": 3,
      "expl": "Spanyolország és Portugália a tordesillas-i egyezményben kijelölte és felosztotta a feltárandó gyarmatvilágot."
    }, {
      "date": "10-28",
      "id": 4,
      "question": "Ki találta fel a drót nélküli távírót?",
      "options": ["Werner von Siemens", "Thomas Alva Edison", "Samuel Morse", "Guglielmo Marconi"],
      "answer": 3,
      "expl": "A drót nélküli távírót Marconi találta fel."
    }, {
      "date": "10-28",
      "id": 5,
      "question": "Melyik magyar király adta ki az Aranybullát?",
      "options": ["I. Géza", "Könyves Kálmán", "II. András", "IV. István"],
      "answer": 2,
      "expl": "1222-ben a szerviensek követelésére II. András adta ki az Aranybullát."
    }, {
      "date": "10-28",
      "id": 6,
      "question": "Bakócz Tamás bíboros alulmarad a pápaválasztáson, XII. Lajos elveszti észak-itáliai területeit, Vasco Núnez de Balboa első európaiként megpillantja és Dél-tengernek nevezi el a Csendes-óceánt, Niccolo Machiavelli *A fejedelem* címmel megírja a politikatudomány alapművét. Mikor?",
      "options": ["1499", "1513", "1577", "1591"],
      "answer": 1,
      "expl": "1513-ban történtek a felsorolt események."
    }, {
      "date": "10-28",
      "id": 7,
      "question": "Melyik operában hangzik el az ékszerária?",
      "options": ["Gounod Faustjában", "Verdi Don Carlosában", "Csajkovszkij Anyeginjében", "Mozart Varázsfuvolájában"],
      "answer": 0,
      "expl": "Az ékszerária Gounod Faustjában hangzik el."
    }, {
      "date": "10-28",
      "id": 8,
      "question": "Melyik állat bőréből készül a sevró?",
      "options": ["sertésbőrből", "kígyóbőrből", "kecskegidabőrből", "antilopbőrből"],
      "answer": 2,
      "expl": "A sevró kecskegidabőrből készül."
    }, {
      "date": "10-28",
      "id": 9,
      "question": "Milyen szín a fréz?",
      "options": ["csontfehér", "eperszín", "sötétlila", "barackszín"],
      "answer": 1,
      "expl": "A fréz eperszínt jelent."
    }, {
      "date": "10-28",
      "id": 10,
      "question": "Bolgár népfelkelés tör ki a török uralom ellen, Magyarország és Ausztria megújítja a kiegyezési megállapodást, megjelenik Twain Tom Sawyer kalandjai című regénye, elkészül Otto robbanómotorja, átadják a Margit-hidat. Mikor?",
      "options": ["1861", "1869", "1876", "1899"],
      "answer": 2,
      "expl": "1876-ben történtek ezek az események."
    }, {
      "date": "10-29",
      "id": 1,
      "question": "Melyik olimpiára vitték először fáklyás váltófutással az Olümpiában meggyújtott lángot?",
      "options": ["az 1908-as londoni olimpiára", "az 1924-es párizsi olimpiára", "az 1936-os berlini olimpiára", "az 1952-es helsinki olimpiára"],
      "answer": 2,
      "expl": "Az 1936-os berlini olimpiára vitték először váltófutással az olimpiai lángot."
    }, {
      "date": "10-29",
      "id": 2,
      "question": "Melyik orosz művet zenésítette meg Petrovics Emil?",
      "options": ["a Pikk dámát", "a Bűn és bűnhődést", "az Anna Kareninát", "az Éjjeli menedékhelyet"],
      "answer": 1,
      "expl": "Petrovics Emil A Bűn és bűnhődés című Dosztojevszkij-művet zenésítette meg."
    }, {
      "date": "10-29",
      "id": 3,
      "question": "Mi a spektákulum?",
      "options": ["üzérkedés", "szemüveg", "botrány", "nagyító"],
      "answer": 2,
      "expl": "A spektákulum jelentése botrány, lárma."
    }, {
      "date": "10-29",
      "id": 4,
      "question": "Milyen stílusban épült a jáki templom?",
      "options": ["klasszicista", "román", "barokk", "romantikus"],
      "answer": 1,
      "expl": "A jáki templom román stílusban épült."
    }, {
      "date": "10-29",
      "id": 5,
      "question": "Hány fővároson folyik keresztül a Duna?",
      "options": ["2", "4", "3", "5"],
      "answer": 2,
      "expl": "A Duna három fővároson folyik keresztül: Belgrádon, Bécsen és Budapesten."
    }, {
      "date": "10-29",
      "id": 6,
      "question": "Ki/mi a feddan?",
      "options": ["arab vallási vezető", "ázsiai pénzegység", "egyiptomi területmérték", "indiai pengetős hangszer"],
      "answer": 2,
      "expl": "A feddan egyiptomi területmérték."
    }, {
      "date": "10-29",
      "id": 7,
      "question": "Hány színből áll a szivárvány?",
      "options": ["4", "6", "5", "7"],
      "answer": 1,
      "expl": "A szivárvány hat színből: ibolya, kék, zöld, sárga, narancs, vörös áll."
    }, {
      "date": "10-29",
      "id": 8,
      "question": "Melyik sport szakszava a salchow?",
      "options": ["műkorcsolya", "torna", "műugrás", "vívás"],
      "answer": 0,
      "expl": "A salchow a műkorcsolya egyik ugrása, első bemutatójáról, Ulrich Salchowról elnevezve."
    }, {
      "date": "10-29",
      "id": 9,
      "question": "Hol található a Moszkitó-part?",
      "options": ["Közép-Amerikában", "Ázsiában", "Dél-Afrikában", "Észak-Amerikában"],
      "answer": 0,
      "expl": "A Moszkitó-part Közép-Amerikában, Nicaragua és Honduras területén található."
    }, {
      "date": "10-29",
      "id": 10,
      "question": "Kicsoda Baba Jaga?",
      "options": ["iszlám vallási vezető", "indiai nagymogul", "az Ezeregyéjszaka alakja", "az orosz népmesék boszorkánya"],
      "answer": 3,
      "expl": "Baba Jaga az orosz népmesék boszorkánya."
    }, {
      "date": "10-30",
      "id": 1,
      "question": "Mi a fényerősség SI-mértékegysége?",
      "options": ["lux", "kandela", "lumen", "ohm"],
      "answer": 1,
      "expl": "A fényerősség SI-mértékegysége a kandela."
    }, {
      "date": "10-30",
      "id": 2,
      "question": "Hányadik században élt Murillo?",
      "options": ["XV.", "XVI.", "XVII.", "XVIII."],
      "answer": 2,
      "expl": "Murillo a XVII. században élt (1618-1682)."
    }, {
      "date": "10-30",
      "id": 3,
      "question": "Melyik szervünk termeli az inzulint?",
      "options": ["máj", "hasnyálmirigy", "mellékvese", "pajzsmirigy"],
      "answer": 1,
      "expl": "Az inzulint a hasnyálmirigy termeli."
    }, {
      "date": "10-30",
      "id": 4,
      "question": "Ki a főszereplője a következő filmeknek: A nap szerelmese, Spartacus, Pisztolypárbaj?",
      "options": ["Marlon Brando", "Tony Curtis", "Kirk Douglas", "Charles Laughton"],
      "answer": 2,
      "expl": "A felsorolt filmek főszereplője Kirk Douglas."
    }, {
      "date": "10-30",
      "id": 5,
      "question": "Melyik USA-állam székhelye Denver?",
      "options": ["Coloradóé", "Iowáé", "Texasé", "Indianáé"],
      "answer": 0,
      "expl": "Denver Colorado székhelye."
    }, {
      "date": "10-30",
      "id": 6,
      "question": "Hol született Petőfi Sándor?",
      "options": ["Aszódon", "Kecskeméten", "Kiskőrösön", "Szabadszálláson"],
      "answer": 2,
      "expl": "Petőfi Sándor Kiskőrösön született."
    }, {
      "date": "10-30",
      "id": 7,
      "question": "Kivel nem találkozhatott Shakespeare?",
      "options": ["El Grecóval", "Pázmány Péterrel", "Claudio Monteverdivel", "II. Henrik francia királlyal"],
      "answer": 3,
      "expl": "Shakespeare (1564-1616) II. Henrikkel (1519-1559) nem találkozhatott."
    }, {
      "date": "10-30",
      "id": 8,
      "question": "Ki alkotta meg a bolygók mozgását leíró 3 törvényt?",
      "options": ["Kopernikusz", "Galilei", "Kepler", "Newton"],
      "answer": 2,
      "expl": "A bolygók mozgását leíró 3 törvényt Kepler alkotta."
    }, {
      "date": "10-30",
      "id": 9,
      "question": "Melyik ország folyója az Ebro?",
      "options": ["Belgiumé", "Svájcé", "Bulgáriáé", "Spanyolországé"],
      "answer": 3,
      "expl": "Az Ebro Spanyolország folyója."
    }, {
      "date": "10-30",
      "id": 10,
      "question": "Grósz Károly hazánk miniszterelnöke, Kádár János Kínába látogat, megkezdi működését az Adó- és Pénzügyi Ellenőrzési Hivatal, Willy Brandt lemond a Német Szociáldemokrata Párt elnöki tisztségéről, Matthias Rust sportrepülőgépével leszáll Moszkvában a Vörös téren. Mikor?",
      "options": ["1985", "1986", "1987", "1988"],
      "answer": 2,
      "expl": "1987-ben történtek ezek az események."
    }, {
      "date": "10-31",
      "id": 1,
      "question": "Mikor lett világbajnok a Regőczy&#150;Sallay jégtáncospár?",
      "options": ["1978-ban", "1980-ban", "1982-ben", "1984-ben"],
      "answer": 1,
      "expl": "A Regőczy–Sallay jégtáncospár 1980-ban volt világbajnok."
    }, {
      "date": "10-31",
      "id": 2,
      "question": "Ki volt II. Erzsébet angol királynő apja?",
      "options": ["VI. György", "VIII. Edvard", "IV. Vilmos", "V. Károly"],
      "answer": 0,
      "expl": "II. Erzsébet angol királynő apja VI. György volt."
    }, {
      "date": "10-31",
      "id": 3,
      "question": "Kinek a szállóigéje: „Utánam a vízözön!”?",
      "options": ["Ferenc Józsefé", "VIII. Henriké", "Stuart Máriáé", "XV. Lajosé"],
      "answer": 3,
      "expl": "Az „Utánam a vízözön” szállóigét XV. Lajosnak tulajdonítják."
    }, {
      "date": "10-31",
      "id": 4,
      "question": "Ki hajózta először körbe a Földet?",
      "options": ["Bering", "Vasco da Gama", "Magellán", "Scott"],
      "answer": 2,
      "expl": "Először Magellán hajózta körbe a Földet."
    }, {
      "date": "10-31",
      "id": 5,
      "question": "Ki volt II. Rákóczi Ferenc udvari festője?",
      "options": ["Zichy Mihály", "Mányoki Ádám", "Donát János Dániel", "Barabás Miklós"],
      "answer": 1,
      "expl": "A II. Rákóczi Ferenc udvari festője Mányoki Ádám volt."
    }, {
      "date": "10-31",
      "id": 6,
      "question": "Mi a sósav képlete?",
      "options": ["LaCl", "NaOH", "HCl", "NaCl"],
      "answer": 2,
      "expl": "A sósav hidrogénklorid, képlete: HCl."
    }, {
      "date": "10-31",
      "id": 7,
      "question": "Melyik tánc nem magyar eredetű?",
      "options": ["legényes", "verbunkos", "keringő", "csárdás"],
      "answer": 2,
      "expl": "A keringő nem magyar, hanem német-osztrák eredetű."
    }, {
      "date": "10-31",
      "id": 8,
      "question": "Milyen fajtájú kutya Eric Knight Lassie-je?",
      "options": ["német juhászkutya", "skót juhászkutya", "bernáthegyi", "bulldog"],
      "answer": 1,
      "expl": "Eric Knight Lassie-je skót juhászkutya."
    }, {
      "date": "10-31",
      "id": 9,
      "question": "Kit neveztek a zene drámaírójának?",
      "options": ["Verdit", "Wagnert", "Puccinit", "Sztravinszkijt"],
      "answer": 1,
      "expl": "A zene drámaírójának Wagnert nevezik."
    }, {
      "date": "10-31",
      "id": 10,
      "question": "Meghal I. József császár, utóda III. Károly, akit még ebben az évben német&#150;római császárrá is választanak, a szatmári megegyezéssel lezárul a Rákóczi-szabadságharc, Cristofori megépíti az első zongorát, Ascotban megrendezik az első lóversenyt. Mikor?",
      "options": ["1687", "1711", "1726", "1769"],
      "answer": 1,
      "expl": "1711-ben történtek ezek az események."
    }, {
      "date": "11-1",
      "id": 1,
      "question": "Melyik Jókai-mű szereplője Hany Istók?",
      "options": ["Névtelen vár", "És mégis mozog a Föld", "Rab Ráby", "Egy magyar nábob"],
      "answer": 0,
      "expl": "Hany Istók a Névtelen vár szereplője."
    }, {
      "date": "11-1",
      "id": 2,
      "question": "Melyik Shakespeare-műből vált szállóigévé ez a mondat: „Végső, de nem utolsó!”?",
      "options": ["Hamlet", "Othello", "Macbeth", "Lear király"],
      "answer": 3,
      "expl": "A szállóige Shakespeare Lear királyából való."
    }, {
      "date": "11-1",
      "id": 3,
      "question": "Melyik sport szakszava a bodicsek?",
      "options": ["birkózás", "ökölvívás", "jégkorong", "cselgáncs"],
      "answer": 2,
      "expl": "A bodicsek a jégkorong szakszava."
    }, {
      "date": "11-1",
      "id": 4,
      "question": "Melyik nem szélfajta?",
      "options": ["misztrál", "bóra", "barkán", "sirokkó"],
      "answer": 2,
      "expl": "A barkán nem szél, hanem futóhomokfajta."
    }, {
      "date": "11-1",
      "id": 5,
      "question": "Ki volt Nero császár nevelője?",
      "options": ["Arisztotelész", "Seneca", "Szilénosz", "Mentór"],
      "answer": 1,
      "expl": "Nero császár nevelője Seneca volt."
    }, {
      "date": "11-1",
      "id": 6,
      "question": "Kinek a főhőse Kakuk Marci?",
      "options": ["Galgóczi Erzsébet", "Babits Mihály", "Tersánszky Józsi Jenő", "Kisfaludy Károly"],
      "answer": 2,
      "expl": "Kakuk Marci Tersánszky Józsi Jenő főhőse."
    }, {
      "date": "11-1",
      "id": 7,
      "question": "Melyik ország pénzneme a lari?",
      "options": ["Grúziáé", "Észtországé", "Kirgizisztáné", "Tadzsikisztáné"],
      "answer": 0,
      "expl": "A lari Grúzia pénzneme."
    }, {
      "date": "11-1",
      "id": 8,
      "question": "Melyik csata fővezére volt Tomori Pál?",
      "options": ["kenyérmezei csatáé", "ménfői csatáé", "rozgonyi csatáé", "mohácsi csatáé"],
      "answer": 3,
      "expl": "Tomori Pál a mohácsi ütközet egyik fővezére volt."
    }, {
      "date": "11-1",
      "id": 9,
      "question": "Hány percig tart egy menet az ökölvívásban?",
      "options": ["2", "4", "3", "5"],
      "answer": 2,
      "expl": "Az ökölvívásban 3 percig tart egy menet."
    }, {
      "date": "11-1",
      "id": 10,
      "question": "Hol él a kacsacsőrű emlős?",
      "options": ["Kínában", "Ausztráliában", "Dél-Amerikában", "Dél-Európában"],
      "answer": 1,
      "expl": "A kacsacsőrű emlős Ausztráliában él."
    }, {
      "date": "11-2",
      "id": 1,
      "question": "Mely fémek ötvözete a bronz?",
      "options": ["vas + nikkel", "magnézium + réz", "ón + vas", "réz + ón"],
      "answer": 3,
      "expl": "A bronz réz és ón ötvözete."
    }, {
      "date": "11-2",
      "id": 2,
      "question": "Melyik város Nógrád megye székhelye?",
      "options": ["Balassagyarmat", "Eger", "Salgótarján", "Kaposvár"],
      "answer": 2,
      "expl": "Nógrád megye székhelye Salgótarján."
    }, {
      "date": "11-2",
      "id": 3,
      "question": "Melyik megye nem határos Bács-Kiskun megyével?",
      "options": ["Tolna megye", "Somogy megye", "Baranya megye", "Csongrád megye"],
      "answer": 1,
      "expl": "Somogy megye nem határos Bács-Kiskun megyével."
    }, {
      "date": "11-2",
      "id": 4,
      "question": "Ki volt Benyovszky Móric?",
      "options": ["honvédtiszt, aradi vértanú", "utazó", "szobrász", "országbíró"],
      "answer": 1,
      "expl": "Benyovszky Móric (1746-1786) utazó volt."
    }, {
      "date": "11-2",
      "id": 5,
      "question": "Ki vezette az 1437-es erdélyi parasztfelkelést?",
      "options": ["Dózsa György", "Császár Péter", "Karácsony György", "Budai Nagy Antal"],
      "answer": 3,
      "expl": "Az 1437-es erdélyi parasztfelkelést Budai Nagy Antal vezette."
    }, {
      "date": "11-2",
      "id": 6,
      "question": "Melyik nem Andrew Lloyd Webber musicalje?",
      "options": ["Porgy és Bess", "Az operaház fantomja", "Evita", "Macskák"],
      "answer": 0,
      "expl": "A Porgy és Bess Gershwin operája."
    }, {
      "date": "11-2",
      "id": 7,
      "question": "Hol ölték meg 1968-ban Robert Kennedyt, az amerikai demokrata párt elnökjelöltjét?",
      "options": ["Sacramentóban", "Houstonban", "Los Angelesben", "New Orleansban"],
      "answer": 2,
      "expl": "Robert Kennedy Los Angelesben lett merénylet áldozata."
    }, {
      "date": "11-2",
      "id": 8,
      "question": "Melyik író hőse volt Grant kapitány?",
      "options": ["Verne Gyuláé", "ifj. Alexander Dumas-é", "Daniel Defoe-é", "Rudyard Kiplingé"],
      "answer": 0,
      "expl": "Grant kapitány Verne Gyula hőse."
    }, {
      "date": "11-2",
      "id": 9,
      "question": "Mi India pénzneme?",
      "options": ["drachma", "dirham", "rúpia", "tugrik"],
      "answer": 2,
      "expl": "India pénzneme a rúpia."
    }, {
      "date": "11-2",
      "id": 10,
      "question": "A 2. magyar hadsereg pusztulása a Donnál, a varsói gettóban lázadás tör ki, lezajlik a kurszki csata, Hevesy György kémiai Nobel-díjat kap. Mikor?",
      "options": ["1940", "1941", "1943", "1945"],
      "answer": 2,
      "expl": "1943-ban történtek ezek az események."
    }, {
      "date": "11-3",
      "id": 1,
      "question": "Melyik ország latin neve Bohemia?",
      "options": ["Lengyelország", "Hollandia", "Ausztria", "Csehország"],
      "answer": 3,
      "expl": "Bohemia Csehország latin neve."
    }, {
      "date": "11-3",
      "id": 2,
      "question": "Melyik földünk legnagyobb félszigete?",
      "options": ["Arab-félsziget", "Alaszka", "Szomáli-félsziget", "Csukcs-félsziget"],
      "answer": 0,
      "expl": "Földünk legnagyobb félszigete az Arab-félsziget."
    }, {
      "date": "11-3",
      "question": "Ki volt az Inka Birodalom utolsó uralkodója?",
      "options": ["Machu Picchu", "Atahualpa", "Huayna Capap", "Tupac Amaru"],
      "answer": 1,
      "expl": "Az Inka Birodalom utolsó uralkodója Atahualpa (1502-1533) volt."
    }, {
      "date": "11-3",
      "id": 4,
      "question": "Mi a butella?",
      "options": ["alsószoknya", "függőhíd", "zsold", "pálinkatartó"],
      "answer": 3,
      "expl": "A butella ólommázas, cserép pálinkásflaska."
    }, {
      "date": "11-3",
      "id": 5,
      "question": "Melyik Shakespeare-mű szereplője Prospero?",
      "options": ["Othello", "Tévedések vígjátéka", "Vihar", "Téli rege"],
      "answer": 2,
      "expl": "Prospero a Vihar szereplője."
    }, {
      "date": "11-3",
      "id": 6,
      "question": "Kiről nevezték el az erő mértékegységét?",
      "options": ["Wattról", "Newtonról", "Joule-ról", "Ampére-ről"],
      "answer": 1,
      "expl": "Az erő mértékegységét Newtonról nevezték el."
    }, {
      "date": "11-3",
      "id": 7,
      "question": "Ki volt Xantus János (1825&#150;1894)?",
      "options": ["orvos", "matematikus", "zeneszerző", "néprajzkutató"],
      "answer": 3,
      "expl": "Xantus János néprajzkutató volt, a pesti Állatkert egyik alapítója"
    }, {
      "date": "11-3",
      "id": 8,
      "question": "Mi volt Magyarország fővárosa 1847-ben?",
      "options": ["Esztergom", "Pozsony", "Székesfehérvár", "Bécs"],
      "answer": 1,
      "expl": "Magyarország fővárosa 1526-1848 között Pozsony volt."
    }, {
      "date": "11-3",
      "id": 9,
      "question": "Melyik olimpián nyertek aranyérmet: Csík Ferenc, Elek Ilona, Zombori Ödön, Kárpáti Károly, Harangi Imre?",
      "options": ["1932-ben (Los Angeles)", "1936-ban (Berlin)", "1948-ban (London)", "1952-ben (Helsinki)"],
      "answer": 1,
      "expl": "A felsorolt sportolók az 1936-os berlini olimpia bajnokai voltak."
    }, {
      "date": "11-3",
      "id": 10,
      "question": "Angliában véget ér a „rózsák háborúja”, Mátyás király elfoglalja Alsó-Ausztriát és öt hónapi ostrom után bevonul Bécsbe, a pestisjárványok megelőzése érdekében felállított velencei egészségügyi magisztrátus a karantén időtartamát 40 napban állapítja meg. Mikor?",
      "options": ["1463", "1485", "1493", "1501"],
      "answer": 1,
      "expl": "Ezek az események 1485-ban történtek."
    }, {
      "date": "11-4",
      "id": 1,
      "question": "Melyik uralkodóház tagja volt Károly Róbert?",
      "options": ["Anjou", "Habsburg", "Jagello", "Hohenzollern"],
      "answer": 0,
      "expl": "Károly Róbert az Anjou-uralkodóház tagja volt."
    }, {
      "date": "11-4",
      "id": 2,
      "question": "Ki volt többek között a Bosszúvágy, a Piszkos 12 és a Hét mesterlövész című filmek főszereplője?",
      "options": ["Henry Fonda", "Telly Savalas", "Charles Bronson", "Robert De Niro"],
      "answer": 2,
      "expl": "A felsorolt filmek főszereplője Charles Bronson."
    }, {
      "date": "11-4",
      "id": 3,
      "question": "Melyik hangszert nevezik a hangszerek királynőjének?",
      "options": ["a zongorát", "az orgonát", "a hárfát", "a hegedűt"],
      "answer": 1,
      "expl": "A hangszerek királynőjének az orgonát nevezik."
    }, {
      "date": "11-4",
      "id": 4,
      "question": "Ki találta fel az izzólámpát?",
      "options": ["Ampere", "Berliner", "Edison", "Siemens"],
      "answer": 2,
      "expl": "Az izzólámpát Edison találta fel."
    }, {
      "date": "11-4",
      "id": 5,
      "question": "Melyik várost nevezik az „Észak Velencéjének”?",
      "options": ["Stockholmot", "Oslót", "Szentpétervárt", "Tallint"],
      "answer": 2,
      "expl": "Szentpétervárt nevezik az „Észak Velencéjének”."
    }, {
      "date": "11-4",
      "id": 6,
      "question": "Ki/mi a fandango?",
      "options": ["teherszállító hajó", "fűszernövény", "hegyvidéki madárfaj", "spanyol tánc"],
      "answer": 3,
      "expl": "A fandango spanyol népi tánc."
    }, {
      "date": "11-4",
      "id": 7,
      "question": "Melyik sportág neves versenyzőnője volt Almássy Zsuzsa?",
      "options": ["tőrvívás", "műkorcsolya", "tornasport", "úszás"],
      "answer": 1,
      "expl": "Almássy Zsuzsa műkorcsolyázó volt."
    }, {
      "date": "11-4",
      "id": 8,
      "question": "Ki festette a Vihartól megvadult ló című képet?",
      "options": ["David", "Gauguin", "Delacroix", "Manet"],
      "answer": 2,
      "expl": "A „Vihartól megvadult ló” Delacroix festménye."
    }, {
      "date": "11-4",
      "id": 9,
      "question": "Ki mondta: „A tett halála az okoskodás”?",
      "options": ["Winston Churchill", "Madách Imre", "Julius Caesar", "Shakespeare"],
      "answer": 1,
      "expl": "A szállóige Madách Imre: Az ember tragédiája című művéből ered."
    }, {
      "date": "11-4",
      "id": 10,
      "question": "Mi történt 1517. október 31-én?",
      "options": ["Kitört a nagy német parasztháború.", "Meghalt II. Ulászló cseh és magyar király.", "Luther Márton közzétette 95 tézisét.", "VIII. Henrik az anglikán egyház fejének nevezte ki magát."],
      "answer": 2,
      "expl": "Ezen a napon Luther Márton kiszegezte téziseit a wittenbergi vár kapujára, innen számítjuk a reformáció kezdetét."
    }, {
      "date": "11-5",
      "id": 1,
      "question": "Milyen hangszer a bandura?",
      "options": ["pengetős", "ütős", "billentyűs", "fúvós"],
      "answer": 0,
      "expl": "A bandura orosz pengetős hangszer."
    }, {
      "date": "11-5",
      "id": 2,
      "question": "Kit neveztek a második honalapítónknak?",
      "options": ["I. Gézát", "I. Andrást", "IV. Bélát", "II. Istvánt"],
      "answer": 2,
      "expl": "IV. Béla királyunk a második honalapítónk."
    }, {
      "date": "11-5",
      "id": 3,
      "question": "Milyen nemzetiségű volt Ibsen?",
      "options": ["norvég", "francia", "spanyol", "ír"],
      "answer": 0,
      "expl": "Henrik Ibsen norvég költő, író."
    }, {
      "date": "11-5",
      "id": 4,
      "question": "Milyen színű lesz a lakmuszpapír lúg hatására?",
      "options": ["fekete", "kék", "piros", "zöld"],
      "answer": 1,
      "expl": "A lakmuszpapír lúg hatására kék színű lesz."
    }, {
      "date": "11-5",
      "id": 5,
      "question": "Ki az infektológus?",
      "options": ["tüdőgyógyász", "fertőző betegségek orvosa", "fogorvos", "gyermekorvos"],
      "answer": 1,
      "expl": "Az infektológus a fertőző betegségek orvosa."
    }, {
      "date": "11-5",
      "id": 6,
      "question": "Melyik országnak nem frank a pénzneme?",
      "options": ["Luxemburg", "Liechenstein", "Marokkó", "Madagaszkár"],
      "answer": 2,
      "expl": "Marokkó pénzeme nem frank, hanem dirham."
    }, {
      "date": "11-5",
      "id": 7,
      "question": "Hol született Hunyadi Mátyás?",
      "options": ["Déván", "Temesváron", "Kolozsvárott", "Hunyadon"],
      "answer": 2,
      "expl": "Hunyadi Mátyás Kolozsvárott született."
    }, {
      "date": "11-5",
      "id": 8,
      "question": "Melyik együttes énekese volt Jim Morrison?",
      "options": ["Pink Floyd", "Dire Straits", "Bee Gees", "Doors"],
      "answer": 3,
      "expl": "Jim Morrison a Doors együttes énekese volt."
    }, {
      "date": "11-5",
      "id": 9,
      "question": "Ki mondta: „...és mégis mozog (a Föld)!”?",
      "options": ["Kepler", "Kopernikusz", "Galilei", "Halley"],
      "answer": 2,
      "expl": "A szállóigét Galileinek tulajdonítják."
    }, {
      "date": "11-5",
      "id": 10,
      "question": "Elkezdődik a 15 éves háború, a Habsburgok és az Oszmán&#150;Török Birodalom háborúja Magyarország birtoklásáért, IV. Henrik francia király katolikus hitre tér („Párizs megér egy misét!”), kocsmai verekedésben leszúrják Christopher Marlowe-t. Mikor?",
      "options": ["1506", "1541", "1593", "1619"],
      "answer": 2,
      "expl": "1593-ban történtek ezek az események."
    }, {
      "date": "11-6",
      "id": 1,
      "question": "Melyik település római kori neve Savaria?",
      "options": ["Keszthely", "Győr", "Szombathely", "Sopron"],
      "answer": 2,
      "expl": "Savaria Szombathely római kori neve."
    }, {
      "date": "11-6",
      "id": 2,
      "question": "Mi az ekvátor?",
      "options": ["egyenlítő", "délkör", "látóhatár", "napóra"],
      "answer": 0,
      "expl": "Az ekvátor égi egyenlítő."
    }, {
      "date": "11-6",
      "id": 3,
      "question": "Melyik olimpián szereztük a legtöbb olimpiai aranyérmet?",
      "options": ["1936-os berlini olimpián", "1952-es helsinki olimpián", "1972-es müncheni olimpián", "1980-as moszkvai olimpián"],
      "answer": 1,
      "expl": "Az 1952-es helsinki olimpián szereztük eddig a legtöbb aranyérmet."
    }, {
      "date": "11-6",
      "id": 4,
      "question": "Hányféle Nobel-díj van?",
      "options": ["4", "6", "5", "7"],
      "answer": 1,
      "expl": "Hatféle Nobel-díjat osztanak (fizikai, kémiai, orvosi-fiziológiai, irodalmi, közgazdasági és békedíj)."
    }, {
      "date": "11-6",
      "id": 5,
      "question": "Hol látható Magyarországon diadalív?",
      "options": ["Kőszegen", "Székesfehérvárott", "Szegeden", "Vácott"],
      "answer": 3,
      "expl": "Hazánkban Vácott látható diadalív."
    }, {
      "date": "11-6",
      "id": 6,
      "question": "Melyik országban van az asszuáni gát?",
      "options": ["Szudánban", "Egyiptomban", "Szaúd-Arábiában", "Törökországban"],
      "answer": 1,
      "expl": "Az asszuáni gát Egyiptomban található."
    }, {
      "date": "11-6",
      "id": 7,
      "question": "Ki találta fel a bányászok biztonsági lámpáját?",
      "options": ["James Maxwell", "Niels Bohr", "William Talbot", "Humphry Davy"],
      "answer": 3,
      "expl": "Humphry Davy találta fel a bányászok biztonsági lámpáját."
    }, {
      "date": "11-6",
      "id": 8,
      "question": "Mi a gyepürózsa közismertebb neve?",
      "options": ["kamélia", "galagonya", "bojtorján", "csipkerózsa"],
      "answer": 3,
      "expl": "A gyepürózsa a csipkerózsa kevésbé ismert neve."
    }, {
      "date": "11-6",
      "id": 9,
      "question": "Melyik város nevezetessége a Práter?",
      "options": ["München", "Pozsony", "Bécs", "Madrid"],
      "answer": 2,
      "expl": "A Práter Bécs nevezetessége."
    }, {
      "date": "11-6",
      "id": 10,
      "question": "Napóleon seregei elfoglalják Rómát, Svájcot, elkezdődik az egyiptomi hadjárat, az abukiri ütközetben Nelson admirális flottája legyőzi a franciákat, Jenner felfedezi, hogy tehénhimlő váladékával immunizálható az emberi szervezet, meghal Galvani és Casanova. Mikor?",
      "options": ["1788", "1794", "1798", "1801"],
      "answer": 2,
      "expl": "1798-ban történtek ezek az események."
    }, {
      "date": "11-7",
      "id": 1,
      "question": "Mikor rendezték az első Forma&#150;1-es futamot Magyarországon?",
      "options": ["1978-ban", "1982-ben", "1986-ban", "1990-ben"],
      "answer": 2,
      "expl": "Az első magyarországi Forma-1-es futamot 1986-ban rendezték."
    }, {
      "date": "11-7",
      "id": 2,
      "question": "Ki festette a *Napraforgók* című festményt?",
      "options": ["Vincent van Gogh", "Rippl-Rónai József", "Paul Gauguin", "Paul Cézanne"],
      "answer": 0,
      "expl": "A *Napraforgók* című festményt Vincent van Gogh festette."
    }, {
      "date": "11-7",
      "id": 3,
      "question": "Ki írta a *Száz év magány* című művet?",
      "options": ["Gabriel García Márquez", "Federico García Lorca", "Alberto Moravia", "Erich Maria Remarque"],
      "answer": 0,
      "expl": "A *Száz év magány* című művet Márquez írta."
    }, {
      "date": "11-7",
      "id": 4,
      "question": "Mi a násfa?",
      "options": ["karmesteri pálca", "dísznövény", "ékköves aranyékszer", "rétegelt faáru"],
      "answer": 2,
      "expl": "A násfa zománcozott, ékköves aranyékszer."
    }, {
      "date": "11-7",
      "id": 5,
      "question": "Ki a zeneszerzője a *Bál a Savoyban* című operettnek?",
      "options": ["Ábrahám Pál", "Fényes Szabolcs", "Huszka Jenő", "Kálmán Imre"],
      "answer": 0,
      "expl": "A *Bál a Savoyban* című operett zeneszerzője Ábrahám Pál."
    }, {
      "date": "11-7",
      "id": 6,
      "question": "Mi a múzsák szent állata?",
      "options": ["macska", "pillangó", "méh", "hattyú"],
      "answer": 2,
      "expl": "A múzsák szent állata a méh."
    }, {
      "date": "11-7",
      "id": 7,
      "question": "Melyik országban uralkodott Hős Boleszláv?",
      "options": ["Csehországban", "Lengyelországban", "Oroszországban", "a Bizánci Birodalomban"],
      "answer": 1,
      "expl": "Hős Boleszláv lengyel király volt."
    }, {
      "date": "11-7",
      "id": 8,
      "question": "Mikor érdemelte ki Wesselényi Miklós az „árvízi hajós” címet?",
      "options": ["1806-ban", "1838-ban", "1849-ben", "1867-ben"],
      "answer": 1,
      "expl": "Wesselényi Miklós az 1838-as pesti árvízben veszélybe jutott emberek megmentőjeként érdemelte ki az „árvízi hajós” címet."
    }, {
      "date": "11-7",
      "id": 9,
      "question": "Melyik sportoló nem a tornasport képviselője?",
      "options": ["Borkai Zsolt", "Keleti Ágnes", "Szőke Katalin", "Pelle István"],
      "answer": 2,
      "expl": "Szőke Katalin az úszósport kiválósága."
    }, {
      "date": "11-7",
      "id": 10,
      "question": "Roosevelt lesz az Egyesült Államok elnöke, Irak függetlenné válik, hazánkban Gömbös Gyula alakít kormányt, Szent-Györgyi Albert mesterségesen előállítja a C-vitamint, megrendezik az első bridzs Európa-bajnokságot. Mikor?",
      "options": ["1920", "1928", "1932", "1937"],
      "answer": 2,
      "expl": "1932-ben történtek ezek az események."
    }, {
      "date": "11-8",
      "id": 1,
      "question": "Mi a neve ma Raguzának?",
      "options": ["Opatija", "Zadar", "Karlovy Vary", "Dubrovnik"],
      "answer": 3,
      "expl": "Raguza neve ma Dubrovnik."
    }, {
      "date": "11-8",
      "id": 2,
      "question": "Melyik rajzfilmfigurát nem Walt Disney rajzolta?",
      "options": ["Popeye", "Miki egér", "Plútó kutya", "Frédi"],
      "answer": 3,
      "expl": "Frédi nem Disney, hanem a Hanna–Barbera páros rajzfilmfigurája."
    }, {
      "date": "11-8",
      "id": 3,
      "question": "Hány pár kromoszómánk van?",
      "options": ["16", "23", "31", "47"],
      "answer": 1,
      "expl": "23 pár kromoszómánk van."
    }, {
      "date": "11-8",
      "id": 4,
      "question": "Melyik zeneszerző műve a *Kis éji zene*?",
      "options": ["Csajkovszkij", "Bach", "Mozart", "Liszt"],
      "answer": 2,
      "expl": "A *Kis éji zene* Mozart műve."
    }, {
      "date": "11-8",
      "id": 5,
      "question": "Melyik mű nem Bródy Sándor alkotása?",
      "options": ["A fűtő ", "A dada", "A tanítónő", "A medikus"],
      "answer": 0,
      "expl": "*A fűtő* nem Bródy Sándor, hanem Hajnóczy Péter műve."
    }, {
      "date": "11-8",
      "id": 6,
      "question": "Mi a csobolyó?",
      "options": ["kézmosóedény", "a gémeskút vödörtartó rúdja", "innivalót tároló faedény", "vizelde"],
      "answer": 2,
      "expl": "A csobolyó innivalót tároló faedény."
    }, {
      "date": "11-8",
      "id": 7,
      "question": "Melyik szerzetesrend magyar alapítású?",
      "options": ["az Ágoston-rend", "a trinitárius rend", "a pálos rend", "a bencés rend"],
      "answer": 2,
      "expl": "Az egyetlen magyar alapítású szerzetesrend a pálosok rendje."
    }, {
      "date": "11-8",
      "id": 8,
      "question": "Melyik sportágban nyertünk a moszkvai olimpián két aranyérmet?",
      "options": ["birkózásban", "tornában", "úszásban", "kajakban"],
      "answer": 0,
      "expl": "A moszkvai olimpián birkózásban szereztünk két aranyérmet (Kocsis Ferenc, Növényi Norbert)."
    }, {
      "date": "11-8",
      "id": 9,
      "question": "Melyikük nem tartozik a hinduizmus istenhármassága közé?",
      "options": ["Brahma", "Siva", "Visnu", "Su"],
      "answer": 3,
      "expl": "Su nem hindu, hanem egyiptomi isten."
    }, {
      "date": "11-8",
      "id": 10,
      "question": "De Gaulle leköszön hivataláról, Woodstockban rockfesztivált rendeznek, megkezdődik az amerikai csapatok kivonása Vietnamból, elkészül az első Boeing&#150;747 és az első Concorde. Mikor?",
      "options": ["1964", "1967", "1969", "1972"],
      "answer": 2,
      "expl": "1969-ben történtek ezek az események."
    }, {
      "date": "11-9",
      "id": 1,
      "question": "Ki a dervis?",
      "options": ["sámán varázsló", "mohamedán uralkodó", "iszlám szerzetes", "török hitoktató, pap"],
      "answer": 2,
      "expl": "A dervis iszlám szerzetesrend tagja."
    }, {
      "date": "11-9",
      "id": 2,
      "question": "Melyik városunk nevezetessége az Isis-szentély?",
      "options": ["Debrecené", "Szombathelyé", "Szegedé", "Pécsé"],
      "answer": 1,
      "expl": "Az Isis-szentély Szombathely nevezetessége."
    }, {
      "date": "11-9",
      "id": 3,
      "question": "Kinek a hőse Hercule Poirot?",
      "options": ["Raymond Chandleré", "George Simenoné", "Conan Doyle-é", "Agatha Christié"],
      "answer": 3,
      "expl": "Hercule Poirot Agatha Christie hőse."
    }, {
      "date": "11-9",
      "id": 4,
      "question": "Ki volt Benjamin Britten?",
      "options": ["kémikus", "író, költő", "zeneszerző", "politikus"],
      "answer": 2,
      "expl": "Benjamin Britten zeneszerző volt (1913–1976)."
    }, {
      "date": "11-9",
      "id": 5,
      "question": "Ki úszta először 1 percen belül a 100 méteres távot?",
      "options": ["Johnny Weissmüller", "Mark Spitz", "Michael Gross", "Matthew Biondi"],
      "answer": 0,
      "expl": "A 100 méteres távot Johnny Weissmüller úszta először 1 percen belül, 1924-ben."
    }, {
      "date": "11-9",
      "id": 6,
      "question": "Melyik filmben nem játszott Dustin Hoffman?",
      "options": ["Aranyoskám", "Esőember", "Diploma előtt", "Kallódó emberek"],
      "answer": 3,
      "expl": "A Dustin Hoffman a „Kallódó emberek” című filmben nem játszott."
    }, {
      "date": "11-9",
      "id": 7,
      "question": "Mi a baobab közismertebb neve?",
      "options": ["aranyeső", "galagonya", "bambusz", "majomkenyérfa"],
      "answer": 3,
      "expl": "A baobab ismertebb nevén majomkenyérfa."
    }, {
      "date": "11-9",
      "id": 8,
      "question": "Hol található a Matyó Múzeum?",
      "options": ["Kalocsán", "Hollókőn", "Mezőkövesden", "Bujákon"],
      "answer": 2,
      "expl": "A Matyó Múzeum Mezőkövesden található."
    }, {
      "date": "11-9",
      "id": 9,
      "question": "Melyik űrhajóval repült a világűrbe Tyereskova?",
      "options": ["Vosztok&#150;6", "Szaljut&#150;1", "Voszhod&#150;2", "Szajuz&#150;4"],
      "answer": 0,
      "expl": "Tyereskova űrhajója a Vosztok-6 volt."
    }, {
      "date": "11-9",
      "id": 10,
      "question": "Ki írta a *Pickwick Klub* című regényt?",
      "question": "Ki írta a *Pickwick Klub* című regényt?",
      "options": ["Mark Twain", "Charles Dickens", "Ernest Hemingway", "Arthur Miller"],
      "answer": 1,
      "expl": "A *Picwick Klub* Dickens regénye."
    }, {
      "date": "11-10",
      "id": 1,
      "question": "Melyik megyénkben van a Szelidi-tó?",
      "options": ["Bács-Kiskun megyében", "Pest megyében", "Hajdú-Bihar megyében", "Veszprém megyében"],
      "answer": 0,
      "expl": "A Szelidi-tó a Bács-Kiskun megyei Dunapataj határában van."
    }, {
      "date": "11-10",
      "id": 2,
      "question": "Ki volt a „vaskancellár”?",
      "options": ["Margaret Thatcher", "Otto von Bismarck", "Brandt Willy", "Klemens Metternich"],
      "answer": 1,
      "expl": "Otto von Bismarck viseli a „vaskancellár” címet."
    }, {
      "date": "11-10",
      "id": 3,
      "question": "Mit készítettek a pintérek?",
      "options": ["lábbeliket", "prémruházatot", "hordót, faárut", "kerekeket"],
      "answer": 2,
      "expl": "A pintérek faáruk készítésével foglalkoznak."
    }, {
      "date": "11-10",
      "id": 4,
      "question": "Hogyan halt meg Moliére?",
      "options": ["előadás közben, színpadon", "párbajban", "rablógyilkosság áldozata lett", "megmérgezték"],
      "answer": 0,
      "expl": "Moliére a *Képzelt beteg* előadásán, a színpadon halt meg."
    }, {
      "date": "11-10",
      "id": 5,
      "question": "Melyik növénycsalád tagja a dohány?",
      "options": ["szittyóféléké", "agávéféléké", "burgonyaféléké", "mályvaféléké"],
      "answer": 2,
      "expl": "A dohány a burgonyafélék családjába tartozik."
    }, {
      "date": "11-10",
      "id": 6,
      "question": "Hol látható Leonardo da Vinci Mona Lisa című festménye?",
      "options": ["a párizsi Louvre-ban", "a szentpétervári Ermitázsban", "a British Museumban", "a madridi Pradóban"],
      "answer": 0,
      "expl": "A „Mona Lisa” című festmény a párizsi Louvre-ban látható."
    }, {
      "date": "11-10",
      "id": 7,
      "question": "Melyik uralkodó kancellárja volt Morus Tamás?",
      "options": ["II. Jakabé", "VIII. Henriké", "Orániai Vilmosé", "I. Erzsébeté"],
      "answer": 1,
      "expl": "Morus Tamás VIII. Henrik kancellárja volt."
    }, {
      "date": "11-10",
      "id": 8,
      "question": "Milyen állat látható a Hunyadiak címerében?",
      "options": ["oroszlán", "kígyó", "sas", "holló"],
      "answer": 3,
      "expl": "A Hunyadiak címerében holló látható."
    }, {
      "date": "11-10",
      "id": 9,
      "question": "Mivel foglalkozik a geriátria?",
      "options": ["származástannal", "időskori betegségekkel", "öröklődéssel", "őslényekkel"],
      "answer": 1,
      "expl": "A geriátria az időskori betegségekkel foglalkozó tudományág."
    }, {
      "date": "11-10",
      "id": 10,
      "question": "Az orosz cár halálát követően kirobban a dekabrista felkelés, Bolivár felszabadítja Bolíviát a spanyol gyarmati uralom alól, útjára indul az első gőzvonat Darlington és Stockton között, Széchenyi István felajánlja egyévi jövedelmét a létrehozandó tudományos akadémia céljára. Mikor?",
      "options": ["1803", "1825", "1838", "1847"],
      "answer": 1,
      "expl": "1825-ben történtek ezek az események."
    }, {
      "date": "11-11",
      "id": 1,
      "question": "Melyik olimpián nyertek aranyérmet: Hesz Mihály, Németh Angéla, Tatai Tibor, Varga János?",
      "options": ["1956-ban (Melbourne)", "1960-ban (Róma)", "1968-ban (Mexikó)", "1972-ben (München)"],
      "answer": 2,
      "expl": "1968-ban nyertek olimpiai bajnokságot a felsorolt sportolók."
    }, {
      "date": "11-11",
      "id": 2,
      "question": "Melyikük nem múzsa?",
      "options": ["Uránia", "Hesztia", "Kalliopé", "Polühümnia"],
      "answer": 1,
      "expl": "Hesztia nem múzsa, hanem a családi tűzhely és az áldozati tűz istennője."
    }, {
      "date": "11-11",
      "id": 3,
      "question": "Ki vagy mi a karcer?",
      "options": ["kubikos", "daganat", "törtető", "fogda"],
      "answer": 3,
      "expl": "A karcer fogda."
    }, {
      "date": "11-11",
      "id": 4,
      "question": "Ki volt Nino Rota?",
      "options": ["atomfizikus", "felfedező", "zeneszerző", "drámaíró"],
      "answer": 2,
      "expl": "Nino Rota zeneszerző volt (1911-1979), Fellini állandó munkatársa."
    }, {
      "date": "11-11",
      "id": 5,
      "question": "Mi a neve ma Anatóliának?",
      "options": ["Törökország", "Nápoly", "Kis-Ázsia", "Atlasz-hegység"],
      "answer": 2,
      "expl": "Anatólia ma Kis-Ázsia."
    }, {
      "date": "11-11",
      "id": 6,
      "question": "Hol található a József Attila Múzeum?",
      "options": ["Makón", "Budapesten", "Szegeden", "Tiszacsécsén"],
      "answer": 0,
      "expl": "A József Attila Múzeum Makón található."
    }, {
      "date": "11-11",
      "id": 7,
      "question": "Hány °C-on fagy meg a tengervíz?",
      "options": ["-12,8", "-2,5", "0", "nem fagy meg"],
      "answer": 1,
      "expl": "A tengervíz sótartartalma miatt -2,5 °C-on fagy meg."
    }, {
      "date": "11-11",
      "id": 8,
      "question": "Kinek a zeneműve a Mátrai képek?",
      "options": ["Bartók Béláé", "Egressy Bénié", "Erkel Ferencé", "Kodály Zoltáné"],
      "answer": 3,
      "expl": "A „Mátrai képek” Kodály Zoltán zeneműve."
    }, {
      "date": "11-11",
      "id": 9,
      "question": "Mi a herélt kos neve?",
      "options": ["jerke", "ürü", "kos", "foklyó"],
      "answer": 1,
      "expl": "A herélt kos neve ürü."
    }, {
      "date": "11-11",
      "id": 10,
      "question": "Egyiptom és Szíria egyesül, megtartják az Európi Gazdasági Közösség első közgyűlését, Münnich Ferenc lesz a miniszterelnökünk, megalakul a NASA, megjelenik Neumann János A számítógép és az agy című műve. Mikor?",
      "options": ["1949", "1958", "1961", "1964"],
      "answer": 1,
      "expl": "1958-ban történtek ezek az események."
    }, {
      "date": "11-12",
      "id": 1,
      "question": "Melyik állat terjeszti a sárgalázat?",
      "options": ["cecelégy", "szúnyog", "bolha", "kullancs"],
      "answer": 1,
      "expl": "A sárgalázat a maláriához hasonlóan a szúnyog terjeszti."
    }, {
      "date": "11-12",
      "id": 2,
      "question": "Melyik hangszer virtuóza David Ojsztrah?",
      "options": ["zongora", "cselló", "hegedű", "gordonka"],
      "answer": 2,
      "expl": "David Ojsztrah orosz hegedűművész."
    }, {
      "date": "11-12",
      "id": 3,
      "question": "Mi a neve a Plútó holdjának?",
      "options": ["Charon", "Ceres", "Phobos", "Io"],
      "answer": 0,
      "expl": "A Plútó holdja a Charon."
    }, {
      "date": "11-12",
      "id": 4,
      "question": "Ki építette az első megbízhatóan működő mechanikus számológépet?",
      "options": ["Charles Babbage", "Blaise Pascal", "Gottfried Leibniz", "Pierre Simon Laplace"],
      "answer": 1,
      "expl": "Az első működő mechanikus számológépet Blaise Pascal alkotta."
    }, {
      "date": "11-12",
      "id": 5,
      "question": "Melyik hajó nem Kolombuszé volt?",
      "options": ["Santa Maria", "Argo", "Nina", "Pinta"],
      "answer": 1,
      "expl": "Az Argo mitológiai hajó, nem Kolombuszé."
    }, {
      "date": "11-12",
      "id": 6,
      "question": "Melyik földrajzi terület nem Ausztria tartománya?",
      "options": ["Vorarlberg", "Tirol", "Karintia", "Sankt Gallen"],
      "answer": 3,
      "expl": "Sankt Gallen svájci kanton, nem osztrák tartomány."
    }, {
      "date": "11-12",
      "id": 7,
      "question": "Mit zárt le a karlócai béke?",
      "options": ["az osztrák örökösödési háborút", "a Rákóczi-szabadságharcot", "a Bocskai-szabadságharcot", "a 150 éves magyarországi török uralmat"],
      "answer": 3,
      "expl": "A karlócai béke a 150 éves magyarországi török uralmat zárta le."
    }, {
      "date": "11-12",
      "id": 8,
      "question": "Hol található az Arany János Múzeum?",
      "options": ["Debrecenben", "Kisújszálláson", "Nagykőrösön", "Szolnokon"],
      "answer": 2,
      "expl": "Az Arany János Múzeum Nagykőrösön található."
    }, {
      "date": "11-12",
      "id": 9,
      "question": "Ki mondta: „Sokan azt gondolják: Magyarország volt; én azt szeretném hinni: lesz!”?",
      "options": ["Széchenyi István", "Madách Imre", "Kossuth Lajos", "Csokonai Vitéz Mihály"],
      "answer": 0,
      "expl": "A szállóige Széchenyi Istvántól származik."
    }, {
      "date": "11-12",
      "id": 10,
      "question": "Megalakul a II. Internacionálé és az Interparlamentáris Unió, Rudolf trónörökös öngyilkos lesz Mayerlingben, megnyílik a párizsi világkiállítás, megindul Budapesten az első rendszeres villamosjárat. Mikor?",
      "options": ["1867", "1874", "1881", "1889"],
      "answer": 3,
      "expl": "1889-ben történtek ezek az események."
    }, {
      "date": "11-13",
      "id": 1,
      "question": "Melyik ország volt Lusitania néven a Római Birodalom része?",
      "options": ["Bulgária", "Portugália", "Franciaország", "Spanyolország"],
      "answer": 1,
      "expl": "Lusitania Portugália római kori neve."
    }, {
      "date": "11-13",
      "id": 2,
      "question": "Mi a kalamáris?",
      "options": ["üvegfényű ásvány", "tintatartó", "mohamedán uralkodói cím", "kemény lekvár"],
      "answer": 1,
      "expl": "A kalamáris tintatartó."
    }, {
      "date": "11-13",
      "id": 3,
      "question": "Melyik zenei utasítás jelentése: erősen, hangosan?",
      "options": ["forte", "piano", "allegro", "andante"],
      "answer": 0,
      "expl": "Erősen, hangosan: ez a forte zenei utasítás jelentése."
    }, {
      "date": "11-13",
      "id": 4,
      "question": "Hány évig élt Matuzsálem?",
      "options": ["333 éves koráig", "585 éves koráig", "969 éves koráig", "1001 éves koráig"],
      "answer": 2,
      "expl": "Matuzsálem 969 évig élt (1 Móz. 5.27)."
    }, {
      "date": "11-13",
      "id": 5,
      "question": "Mi a salavári?",
      "options": ["indiai étel", "portugál tánc", "keleti buggyos nadrág", "lengyel nyelvjárás"],
      "answer": 2,
      "expl": "A salavári buggyos keleti nadrág."
    }, {
      "date": "11-13",
      "id": 6,
      "question": "Ki a vadászok védőszentje?",
      "options": ["Szent Gellért", "Szent Ambrosius", "Szent Hubertus", "Szent Demeter"],
      "answer": 2,
      "expl": "A vadászok védőszentje Szent Hubertus."
    }, {
      "date": "11-13",
      "id": 7,
      "question": "Milyen hangszer a buzuki?",
      "options": ["pengetős", "ütős", "fúvós", "billentyűs"],
      "answer": 0,
      "expl": "A buzuki pengetős hangszer."
    }, {
      "date": "11-13",
      "id": 8,
      "question": "Melyik Shakespeare-műben hangzik el: „Cordelia mit tegyen? Hallgat s szeret.”?",
      "options": ["Othello", "Lear király", "Hamlet", "Makrancos hölgy"],
      "answer": 1,
      "expl": "Az idézet Shakespeare Lear királyából való."
    }, {
      "date": "11-13",
      "id": 9,
      "question": "Apja Zeusz, anyja Démétér, férje Hádész. Ki ő?",
      "options": ["Aphrodité", "Erisz", "Perszephoné", "Gaia"],
      "answer": 2,
      "expl": "Zeusz és Démétér lánya, Hádész felesége: ő Perszephoné."
    }, {
      "date": "11-13",
      "question": "V. Ferdinánd elfoglalja Granadát, Spanyolországból kiűzi a mórokat és a zsidókat, Izabella királynő támogatja Kolombusz Kristóf vállalkozását, Kinizsi Pál szétveri a lázadó fekete sereget, meghal Lorenzo Medici. Mikor?",
      "options": ["1467", "1479", "1489", "1492"],
      "answer": 3,
      "expl": "Ezek az események 1492-ben történtek."
    }, {
      "date": "11-14",
      "id": 1,
      "question": "Kiről nevezték el a frekvencia mértékegységét?",
      "options": ["Maxwellről", "Biotról", "Hertzről", "Oerstedről"],
      "answer": 2,
      "expl": "A frekvencia mértékegységét Hertzről nevezték el."
    }, {
      "date": "11-14",
      "id": 2,
      "question": "Melyik ország csapata nyerte az 1996-os labdarúgó Európa-bajnokságot?",
      "options": ["Anglia", "Spanyolország", "Németország", "Olaszország"],
      "answer": 2,
      "expl": "Az 1996-os labdarúgó Európa-bajnokságot Németország csapata nyerte meg."
    }, {
      "date": "11-14",
      "id": 3,
      "question": "Mi Venezuela fővárosa?",
      "options": ["Cayenne", "Bogota", "Caracas", "Kingston"],
      "answer": 2,
      "expl": "Venezuela fővárosa Caracas."
    }, {
      "date": "11-14",
      "id": 4,
      "question": "Melyik írásával vált világhírűvé Françoise Sagan?",
      "options": ["Jó estét, Mrs. Campbell!", "Jó reggelt, Vietnam!", "Jónapot elefánt!", "Jóreggelt, búbánat!"],
      "answer": 3,
      "expl": "Françoise Sagan „Jóreggelt, búbánat!” című írásával 18 évesen vált világhírűvé."
    }, {
      "date": "11-14",
      "id": 5,
      "question": "Melyik táncot tette halhatatlanná Offenbach?",
      "options": ["a keringőt", "a flamencót", "a kánkánt", "a szvinget"],
      "answer": 2,
      "expl": "Offenbach a kánkánt tette halhatatlanná."
    }, {
      "date": "11-14",
      "id": 6,
      "question": "Melyik állat a zsiráf legközelebbi rokona?",
      "options": ["járvorszarvas", "alpaka", "kétpúpú teve", "okapi"],
      "answer": 3,
      "expl": "A zsiráf legközelebbi rokona az okapi."
    }, {
      "date": "11-14",
      "id": 7,
      "question": "Melyik operában szerepel a rózsaária?",
      "options": ["a Traviatában", "a Figaró házasságában", "A varázsfuvolában", "a Don Carlosban"],
      "answer": 1,
      "expl": "A rózsaária Mozart Figaró házassága című operájában hangzik el."
    }, {
      "date": "11-14",
      "id": 8,
      "question": "Melyik királyunk felesége volt Antiochiai Anna?",
      "options": ["II. Ferencé", "I. Lajosé", "III. Béláé", "Luxemburgi Zsigmondé"],
      "answer": 2,
      "expl": "Antiochiai Anna III. Béla felesége volt."
    }, {
      "date": "11-14",
      "id": 9,
      "question": "Melyik uralkodónkat nevezték kalapos királynak?",
      "options": ["I. Ferencet", "I. Rudolfot", "II. Józsefet", "II. Ferdinándot"],
      "answer": 2,
      "expl": "II. József nem koronáztatta meg magát, ezért kapta a kalapos király jelzőt."
    }, {
      "date": "11-14",
      "id": 10,
      "question": "Földnélküli János angol király beleegyezik a Magna Charta kibocsátásába, Dzsingisz kán elfoglalja Pekinget, Szt. Domonkos Toulouse-ban megalapítja a róla elnevezett kolduló rendet, a lateráni zsinat egyházi intézménnyé nyilvánítja az inkvizíciót. Mikor?",
      "options": ["1118", "1196", "1215", "1294"],
      "answer": 2,
      "expl": "Ezek az események 1215-ben történtek."
    }, {
      "date": "11-15",
      "id": 1,
      "question": "Melyik városunkban található a Nádasdy-vár?",
      "options": ["Esztergomban", "Füzéren", "Keszthelyen", "Sárváron"],
      "answer": 3,
      "expl": "A Nádasdy-vár Sárváron található."
    }, {
      "date": "11-15",
      "id": 2,
      "question": "Ki rendezte a Mechanikus narancs, a Spartacus és a Ragyogás című filmeket?",
      "options": ["A. Parker", "M. Scorsese", "S. Kubrick", "F. F. Coppola"],
      "answer": 2,
      "expl": "A felsorolt filmek rendezője Stanley Kubrick."
    }, {
      "date": "11-15",
      "id": 3,
      "question": "Mi a neve a tenger alatti földrengések okozta óriási hullámoknak?",
      "options": ["limán", "polder", "cunami", "turzás"],
      "answer": 2,
      "expl": "A tenger alatti földrengések okozta óriási hullám a cunami."
    }, {
      "date": "11-15",
      "id": 4,
      "question": "Melyik ország felségterülete a Ferenc József-föld?",
      "options": ["Oroszországé", "Ausztriáé", "Norvégiáé", "Franciaországé"],
      "answer": 0,
      "expl": "A Ferenc József-föld Oroszország felségterülete."
    }, {
      "date": "11-15",
      "id": 5,
      "question": "Ki írta az Aranysárkány című regényt?",
      "options": ["Babits Mihály", "Németh László", "Mikszáth Kálmán", "Kosztolányi Dezső"],
      "answer": 3,
      "expl": "Az „Aranysárkány” Kosztolányi Dezső műve."
    }, {
      "date": "11-15",
      "id": 6,
      "question": "A kosárlabda gyűrűje a talajszinttől milyen magasan van?",
      "options": ["2,95 m", "3,05 m", "2,55 m", "3,25 m"],
      "answer": 1,
      "expl": "A kosárlaba kosarának gyűrűje 10 láb, azaz 3,05 m magasságban van."
    }, {
      "date": "11-15",
      "id": 7,
      "question": "Mikor van Szent Mihály ünnepnapja?",
      "options": ["március 25-én", "június 24-én", "szeptember 29-én", "december 13-án"],
      "answer": 2,
      "expl": "Szent Mihály napja szeptember 29-én van."
    }, {
      "date": "11-15",
      "id": 8,
      "question": "Melyik német városban zajlott le Hitler sikertelen sörpuccsa?",
      "options": ["Lipcsében", "Hamburgban", "Münchenben", "Berlinben"],
      "answer": 2,
      "expl": "Hitler sikertelen hatalomátvételi kísérlete Münchenben volt."
    }, {
      "date": "11-15",
      "id": 9,
      "question": "Melyik betegség ellen adják a Sabin-cseppeket?",
      "options": ["kanyaró", "tbc", "rózsahimlő", "gyermekbénulás"],
      "answer": 3,
      "expl": "A Sabin-cseppeket a járványos gyermekbénulás megelőzésére adják."
    }, {
      "date": "11-15",
      "id": 10,
      "question": "Cromwell legyőzi a skótokat, II. Károly Franciaországba menekül, a gyulafehérvári országgyűlés fejedelemmé választja a 7 éves I. Rákóczi Ferencet, Hobbes Leviatán címmel kiadja államelméleti munkáját. Mikor?",
      "options": ["1577", "1599", "1614", "1651"],
      "answer": 3,
      "expl": "1651-ben történtek a felsorolt események."
    }, {
      "date": "11-16",
      "id": 1,
      "question": "Hányszorosát jelöli a mértékegységnek a hekto előtag?",
      "options": ["10-szeresét", "100-szorosát", "1000-szeresét", "10 000-szeresét"],
      "answer": 1,
      "expl": "A hekto előtag a mértékegység százszorosát jelenti."
    }, {
      "date": "11-16",
      "id": 2,
      "question": "Mi a dűne?",
      "options": ["iszaplerakódás", "kőzettörmelék", "futóhomokbucka", "olajmező"],
      "answer": 2,
      "expl": "A dűne futóhomokbucka."
    }, {
      "date": "11-16",
      "id": 3,
      "question": "Milyen állat a fürge cselle?",
      "options": ["rovar", "madár", "hal", "rágcsáló"],
      "answer": 2,
      "expl": "A fürge cselle halfajta."
    }, {
      "date": "11-16",
      "id": 4,
      "question": "Mi az antropológia?",
      "options": ["embertan", "őslénytan", "alaktan", "növénytan"],
      "answer": 0,
      "expl": "Az antropológia jelentése embertan."
    }, {
      "date": "11-16",
      "id": 5,
      "question": "Melyik játék nem labdajáték?",
      "options": ["pelota", "pétanque", "krikett", "lacrosse"],
      "answer": 1,
      "expl": "A pétanque nem labdajáték, hanem francia golyójáték."
    }, {
      "date": "11-16",
      "id": 6,
      "question": "Mi a Velencei Filmfesztivál díja?",
      "options": ["Arany Pálma", "Arany Glóbusz", "Arany Oroszlán", "Arany Medve"],
      "answer": 2,
      "expl": "A Velencei Filmfesztivál díja az Arany Oroszlán."
    }, {
      "date": "11-16",
      "id": 7,
      "question": "Milyen állat képében szöktette meg Zeusz Európét?",
      "options": ["sas", "ló", "bika", "sárkány"],
      "answer": 2,
      "expl": "Zeusz bika képében szöktette meg Európét."
    }, {
      "date": "11-16",
      "id": 8,
      "question": "Kik voltak a bojárok?",
      "options": ["főnemesek", "papok", "szökött jobbágyok", "pogányok"],
      "answer": 0,
      "expl": "A bojárok magas tisztségeket viselő főnemesek."
    }, {
      "date": "11-16",
      "id": 9,
      "question": "Melyik városunkban működött a Schola Medicinalis, az első orvosi akadémiánk?",
      "options": ["Sopronban", "Egerben", "Budán", "Debrecenben"],
      "answer": 1,
      "expl": "A Schola Medicinalis Egerben működött."
    }, {
      "date": "11-16",
      "id": 10,
      "question": "Hol volt a „népek csatája”?",
      "options": ["Lipcsénél", "Austerlitznél", "Augsburgnál", "Marengónál"],
      "answer": 0,
      "expl": "A „népek csatájának” a lipcsei csatát nevezzük (1813)."
    }, {
      "date": "11-17",
      "id": 1,
      "question": "Ki rendszerezte elsőként a növényvilág egyedeit?",
      "options": ["Kitaibel Pál", "Carl von Linné", "Paracelsus", "Gregor Mendel"],
      "answer": 1,
      "expl": "Linné rendszerezte elsőként a növényvilág egyedeit."
    }, {
      "date": "11-17",
      "id": 2,
      "question": "Mit zárt le a zsitvatoroki béke?",
      "options": ["a Bocskai-szabadságharcot", "az osztrák&#150;török háborút", "a Rákóczi-szabadságharcot", "a 15 éves háborút"],
      "answer": 3,
      "expl": "A zsitvatoroki béke a 15 éves háborút zárta le."
    }, {
      "date": "11-17",
      "id": 3,
      "question": "Ki a zene védőszentje?",
      "options": ["Szent Cecília", "Szent Ágnes", "Szent Katalin", "Szent Erzsébet"],
      "answer": 0,
      "expl": "A zene védőszentje Szent Cecília."
    }, {
      "date": "11-17",
      "id": 4,
      "question": "Miről olvasható összefoglaló az 1872-ben Thébában felfedezett Ebers-papiruszon?",
      "options": ["asztrológiáról", "mezőgazdaságról", "geometriáról", "orvostudományról"],
      "answer": 3,
      "expl": "Az Ebers-papiruszon az egyiptomi orvostudományról olvashatunk."
    }, {
      "date": "11-17",
      "id": 5,
      "question": "Melyik várost rombolta le földrengés 1906-ban?",
      "options": ["Lisszabont", "San Franciscót", "Tokiót", "Mexikóvárost"],
      "answer": 1,
      "expl": "1906-ban San Franciscót rombolta le földrengés."
    }, {
      "date": "11-17",
      "id": 6,
      "question": "Kirobban a francia&#150;porosz háború, III. Napóleon fogságba esik; Róma csatlakozik az Olasz Királysághoz, ezzel megszűnik az Egyházi Állam; Schliemann feltárja Trója városát; átadják a forgalomnak a budavári siklót. Mikor?",
      "options": ["1829", "1852", "1870", "1889"],
      "answer": 2,
      "expl": "1870-ben történtek ezek az események."
    }, {
      "date": "11-17",
      "id": 7,
      "question": "Mivel köti össze a Földközi-tengert a Szuezi-csatorna?",
      "options": ["az Atlanti-óceánnal", "a Vörös-tengerrel", "a Fekete-tengerrel", "a Kaszpi-tengerrel"],
      "answer": 1,
      "expl": "A Földközi-tengert a Vörös-tengerrel köti össze a Szuezi-csatorna."
    }, {
      "date": "11-17",
      "id": 8,
      "question": "Hogyan nevezik Zeusz pajzsát?",
      "options": ["scutum", "spádé", "égisz", "bola"],
      "answer": 2,
      "expl": "Zeusz pajzsát égisznek nevezték."
    }, {
      "date": "11-17",
      "id": 9,
      "question": "Melyik rockzenekar énekese Robert Plant?",
      "options": ["AC/DC", "Def Leppard", "Led Zeppelin", "Jethro Tull"],
      "answer": 2,
      "expl": "Robert Plant a Led Zeppelin énekese."
    }, {
      "date": "11-17",
      "id": 10,
      "question": "Melyik keresztnév eredeti jelentése áfonya?",
      "options": ["Katalin", "Mirtill", "Ingrid", "Klára"],
      "answer": 1,
      "expl": "A Mirtill eredeti jelentése áfonya."
    }, {
      "date": "11-18",
      "id": 1,
      "question": "Hol található a Hagia Sophia?",
      "options": ["Athénben", "Damaszkuszban", "Isztambulban", "Jeruzsálemben"],
      "answer": 2,
      "expl": "A Hagia Sophia Isztambulban látható."
    }, {
      "date": "11-18",
      "id": 2,
      "question": "Kik semmisítették meg Babilóniát?",
      "options": ["törökök", "perzsák", "trákok", "asszírok"],
      "answer": 1,
      "expl": "Babilóniát a perzsák rombolták le."
    }, {
      "date": "11-18",
      "id": 3,
      "question": "Melyik olimpián szerzett 4 aranyérmet Keleti Ágnes?",
      "options": ["1952-es helsinki olimpián", "1956-os melbourni olimpián", "1960-as római olimpián", "1964-es tokiói olimpián"],
      "answer": 1,
      "expl": "Keleti Ágnes az 1956-os melbourni olimpián szerzett 4 aranyérmet."
    }, {
      "date": "11-18",
      "id": 4,
      "question": "Mi Dél-Amerika legmagasabb pontja?",
      "options": ["Chimborazo", "Cotopaxi", "Citlaltépetl", "Aconcagua"],
      "answer": 3,
      "expl": "Dél-Amerika legmagasabb pontja az Aconcagua (6959 m)."
    }, {
      "date": "11-18",
      "id": 5,
      "question": "Ki írta alá a SALT&#150;I szerződést az Egyesült Államok részéről?",
      "options": ["G. Ford", "R. Nixon", "J. Carter", "R. Reagan"],
      "answer": 1,
      "expl": "A SALT-I szerződést az USA részéről R. Nixon írta alá."
    }, {
      "date": "11-18",
      "id": 6,
      "question": "Melyik nem halogén elem?",
      "options": ["fluor", "jód", "argon", "bróm"],
      "answer": 1,
      "expl": "Az argon nem halogén elem."
    }, {
      "date": "11-18",
      "id": 7,
      "question": "Ki a veterinárius?",
      "options": ["földbirtokos", "házaló könyvkereskedő", "hittérítő", "állatorvos"],
      "answer": 3,
      "expl": "A veterinárius az állatorvos régies neve."
    }, {
      "date": "11-18",
      "id": 8,
      "question": "Mi volt Pallasz Athéné szent állata?",
      "options": ["bagoly", "galamb", "hattyú", "méh"],
      "answer": 0,
      "expl": "Pallasz Athéné szent állata a bagoly."
    }, {
      "date": "11-18",
      "id": 9,
      "question": "Ki a főszereplője a következő filmeknek: Cartouche, Ászok ásza, Két nap az élet?",
      "options": ["Marlon Brando", "Jean-Paul Belmondo", "Tony Curtis", "Alain Delon"],
      "answer": 1,
      "expl": "A felsorolt filmek főszereplője Jean-Paul Belmondo."
    }, {
      "date": "11-18",
      "id": 10,
      "question": "A 4. keresztes hadjárat során a keresztes hadak elfoglalják Konstantinápolyt és létrehozzák a latin császárságot, a normandiai hercegség Franciaországé lesz, meghal Imre magyar király, a trónra négyéves fia, III. László lép. Mikor?",
      "options": ["1172", "1204", "1266", "1321"],
      "answer": 1,
      "expl": "1204-ben történtek ezek az események."
    }, {
      "date": "11-19",
      "id": 1,
      "question": "Melyik megyében található Hódmezővásárhely?",
      "options": ["Bács-Kiskun", "Hajdú-Bihar", "Békés", "Csongrád"],
      "answer": 3,
      "expl": "Hódmezővásárhely Csongrád-Csanád megyében van."
    }, {
      "date": "11-19",
      "id": 2,
      "question": "Hány feleségük lehet a mohamedán vallású férfiaknak?",
      "options": ["4", "6", "8", "nincs korlátozva"],
      "answer": 0,
      "expl": "A mohamedán vallású férfiaknak 4 feleségük lehet, amennyiben pártatlanul és egyenlően tudja ellátni őket."
    }, {
      "date": "11-19",
      "id": 3,
      "question": "Mi a diftéria köznapi neve?",
      "options": ["szamárköhögés", "torokgyík", "tüdőgyulladás", "gyermekbénulás"],
      "answer": 1,
      "expl": "A diftéria köznapi neve a torokgyík."
    }, {
      "date": "11-19",
      "id": 4,
      "question": "Milyen élőlény az éjkirálynője?",
      "options": ["kaktusz", "pók", "lepke", "tavirózsa"],
      "answer": 0,
      "expl": "Az éjkirálynője kaktuszfajta."
    }, {
      "date": "11-19",
      "id": 5,
      "question": "Ki mondta: „Robespierre, követni fogsz ez úton!”?",
      "options": ["Jean Paul Marat", "Louis Antoine Léon de Saint-Just", "Jacques René Hébert", "Georges-Jacques Danton"],
      "answer": 3,
      "expl": "Az idézet Dantontól származik."
    }, {
      "date": "11-19",
      "id": 6,
      "question": "Ki volt az első osztrák császár?",
      "options": ["II. Ferenc", "VI. Károly", "I. Lipót", "III. Miksa"],
      "answer": 0,
      "expl": "Az első osztrák császár II. Ferenc volt (1804)."
    }, {
      "date": "11-19",
      "id": 7,
      "question": "1305-ben az angol király karjának hosszát tette meg yard néven a törvényes hosszmértékegységnek. Ki volt ő?",
      "options": ["Oroszlánszívű Richard", "Hódító Vilmos", "I. Edward", "V. Henrik"],
      "answer": 2,
      "expl": "1305-ben I. Edward uralkodott Angliában."
    }, {
      "date": "11-19",
      "id": 8,
      "question": "Melyik nem mesterséges nyelv?",
      "options": ["eszperantó", "volapük", "ido", "urdu"],
      "answer": 3,
      "expl": "Az urdu Pakisztán hivatalos nyelve."
    }, {
      "date": "11-19",
      "id": 9,
      "question": "Melyik nem erszényes állat?",
      "options": ["mungó", "koala", "kuszkusz", "oposszum"],
      "answer": 0,
      "expl": "A mungónak nincs erszénye, a menyéthez hasonló ragadozó emlős."
    }, {
      "date": "11-19",
      "id": 10,
      "question": "Melyik törzs nem germán eredetű?",
      "options": ["vandálok", "frankok", "szászok", "belgák"],
      "answer": 3,
      "expl": "A belgák kelta eredetű népcsoport."
    }, {
      "date": "11-20",
      "id": 1,
      "question": "Hol található az István király Múzeum?",
      "options": ["Esztergomban", "Székesfehérvárott", "Pannonhalmán", "Egerben"],
      "answer": 1,
      "expl": "Az István király Múzeum Székesfehérvárott van."
    }, {
      "date": "11-20",
      "id": 2,
      "question": "A levegőnek hányadrésze nitrogén?",
      "options": ["1/2", "4/5", "2/3", "1/10"],
      "answer": 1,
      "expl": "A levegő négyötöde (78%) nitrogén."
    }, {
      "date": "11-20",
      "id": 3,
      "question": "Mi Lisszabon folyója?",
      "options": ["Guadiana", "Ebro", "Tejo", "Minho"],
      "answer": 1,
      "expl": "Lisszabon folyója a Tejo."
    }, {
      "date": "11-20",
      "id": 4,
      "question": "Milyen az, aki olyan mint Buridán szamara?",
      "options": ["csökönyös", "ostoba", "döntésképtelen", "vén"],
      "answer": 2,
      "expl": "Buridán szamara éhen halt, mert nem tudott választani két szénacsomó közül."
    }, {
      "date": "11-20",
      "id": 5,
      "question": "Ki a Lulu című opera zeneszerzője?",
      "options": ["Friedrich von Flotow", "Alban Berg", "Pietro Mascagni", "Carl Maria von Weber"],
      "answer": 1,
      "expl": "Lulu Alban Berg operája."
    }, {
      "date": "11-20",
      "id": 6,
      "question": "Minek nevezik a görög mitológia kígyólábú óriásait?",
      "options": ["küklopszok", "titánok", "héroszok", "gigászok"],
      "answer": 3,
      "expl": "A görög mitológia kígyólábú óriásai a gigászok."
    }, {
      "date": "11-20",
      "id": 7,
      "question": "Hogy nevezték a francia trónörökösöket?",
      "options": ["dauphin", "bonne", "cavalier", "kadét"],
      "answer": 0,
      "expl": "A francia trónörökösöket dauphinnek nevezték."
    }, {
      "date": "11-20",
      "id": 8,
      "question": "Ki álmodta meg Naconxypán városát?",
      "options": ["Csontváry-Kosztka Tivadar", "Rippl-Rónai József", "Szántó Piroska", "Gulácsy Lajos"],
      "answer": 3,
      "expl": "Naconxypán városának megálmodója és festője Gulácsy Lajos."
    }, {
      "date": "11-20",
      "id": 9,
      "question": "Milyen szekér az ekhós szekér?",
      "options": ["négyökrös", "lőszerszállító", "ponyvával fedett", "ember vontatta"],
      "answer": 2,
      "expl": "A ponyvával fedett szekeret nevezték ekhós szekérnek."
    }, {
      "date": "11-20",
      "id": 10,
      "question": "Németország, Ausztria&#150;Magyarország és Oroszország uralkodói megkötik a „három császár szövetségét”, Edison bemutatja áramfejlesztőjét, Puskás Tivadar telefonhírmondója megkezdi működését, megalakul az MTI. Mikor?",
      "options": ["1849", "1860", "1873", "1881"],
      "answer": 3,
      "expl": "1881-ben történtek ezek az események."
    }, {
      "date": "11-21",
      "id": 1,
      "question": "Melyik tánc cseh eredetű?",
      "options": ["polka", "mazurka", "horo", "jota"],
      "answer": 0,
      "expl": "A polka cseh eredetű tánc."
    }, {
      "date": "11-21",
      "id": 2,
      "question": "Melyik város Tolna megye székhelye?",
      "options": ["Dombóvár", "Szekszárd", "Kaposvár", "Salgótarján"],
      "answer": 1,
      "expl": "Tolna megye székhelye Szekszárd."
    }, {
      "date": "11-21",
      "id": 3,
      "question": "Kiről kapta nevét az 1801-ben felfedezett első kisbolygó?",
      "options": ["Viktória királynőről", "Ceres istennőről", "Sába királynőjéről", "Mirandáról, Shakespeare hősnőjéről"],
      "answer": 1,
      "expl": "Az első kisbolygó Ceres istennőről kapta nevét."
    }, {
      "date": "11-21",
      "id": 4,
      "question": "Ki fordította le magyar nyelvre Milne Micimackóját?",
      "options": ["Tamkó Sirató Károly", "Vas István", "Karinthy Frigyes", "Weöres Sándor"],
      "answer": 2,
      "expl": "Milne „Micimackóját” Karinthy Frigyes fordította magyar nyelvre."
    }, {
      "date": "11-21",
      "id": 5,
      "question": "Ki Dietrich Fischer-Dieskau?",
      "options": ["politikus", "operaénekes", "Nobel-díjas kémikus", "színész"],
      "answer": 1,
      "expl": "Dietrich Fischer-Dieskau operaénekes, karmester."
    }, {
      "date": "11-21",
      "id": 6,
      "question": "Melyik országot köti össze a Simplon-alagút Olaszországgal?",
      "options": ["Ausztriát", "Franciaországot", "Svájcot", "Németországot"],
      "answer": 2,
      "expl": "A Simplon-alagút Olaszországot Svájccal köti össze."
    }, {
      "date": "11-21",
      "id": 7,
      "question": "Ki találta fel a gőzgépet?",
      "options": ["George Stephenson", "William Murdock", "Thomas Alva Edison", "James Watt"],
      "answer": 3,
      "expl": "A gőzgépet James Watt találta fel."
    }, {
      "date": "11-21",
      "id": 8,
      "question": "Ki volt az eperjesi hóhér?",
      "options": ["Castaldo", "Wallenstein", "Montecuccoli", "Caraffa"],
      "answer": 3,
      "expl": "Az eperjesi vértörvényszék elnöke Caraffa generális volt."
    }, {
      "date": "11-21",
      "id": 9,
      "question": "Milyen miniszteri tárcája volt Kossuth Lajosnak a Batthyány-kormányban?",
      "options": ["belügyi", "pénzügyi", "hadügyi", "igazságügyi"],
      "answer": 1,
      "expl": "Kossuth a Batthyány-kormány pénzügyminisztere volt."
    }, {
      "date": "11-21",
      "id": 10,
      "question": "Paul von Hindenburg a Német Köztársaság elnöke, Reza Pahlavi Perzsia uralkodója, aláírják a locarnói szerződést, Marconi rádió-összeköttetést létesít London és Sydney között, bemutatják Eizenstein Patyomkin páncélos és Chaplin Aranyláz című filmjét. Mikor?",
      "options": ["1920", "1921", "1925", "1931"],
      "answer": 2,
      "expl": "1925-ben történtek ezek az események."
    }, {
      "date": "11-22",
      "id": 1,
      "question": "Mivel mérgezték meg Hamlet apját?",
      "options": ["arzénnel", "ciánnal", "beléndekkel", "maszlaggal"],
      "answer": 2,
      "expl": "Hamlet apját beléndekkel mérgezték meg."
    }, {
      "date": "11-22",
      "id": 2,
      "question": "A magyar rendek „életüket és vérüket” ajánlják fel Mária Terézia trónjának védelmére, Oroszország új uralkodója Nagy Péter lánya, Erzsébet, Bering felfedezi Alaszkát, meghal Vivaldi. Mikor?",
      "options": ["1694", "1708", "1723", "1741"],
      "answer": 3,
      "expl": "Ezek az események 1741-ben történtek."
    }, {
      "date": "11-22",
      "id": 3,
      "question": "Mikor van kiskarácsony napja?",
      "options": ["december 1-jén", "december 13-án", "december 22-én", "január 1-jén"],
      "answer": 0,
      "expl": "Kiskarácsony napja január 1-jén van."
    }, {
      "date": "11-22",
      "id": 4,
      "question": "Ki volt Ditrói Mór (1851&#150;1945)?",
      "options": ["színész, színigazgató", "matematikus", "zeneszerző, karmester", "író, kritikus"],
      "answer": 0,
      "expl": "Ditrói Mór a Vígszínház első igazgatója és főrendezője volt."
    }, {
      "date": "11-22",
      "id": 5,
      "question": "Ki alapította a francia Becsületrendet?",
      "options": ["Jules Mazarin", "Charles de Gaulle", "Bonaparte Napóleon", "Charles Maurice de Talleyrand"],
      "answer": 2,
      "expl": "A francia Becsületrendet 1802-ben Bonaparte Napóleon alapította."
    }, {
      "date": "11-22",
      "id": 6,
      "question": "Melyik labdarúgót hívták Császárnak?",
      "options": ["Buzánszky Jenőt", "Bozsik Józsefet", "Hidegkúti Nándort", "Albert Flóriánt"],
      "answer": 3,
      "expl": "A Császár Albert Flórián beceneve."
    }, {
      "date": "11-22",
      "id": 7,
      "question": "Melyik uralkodónk alapította a Sárkány-rendet?",
      "options": ["Károly Róbert", "Luxemburgi Zsigmond", "I. Mátyás", "Mária Terézia"],
      "answer": 1,
      "expl": "A Sárkány-rendet Luxemburgi Zsigmond alapította."
    }, {
      "date": "11-22",
      "id": 8,
      "question": "Melyik Jókai-mű szereplője Tímár Mihály?",
      "options": ["Fekete gyémántok", "Az aranyember", "Rab Ráby", "Egy magyar nábob"],
      "answer": 1,
      "expl": "Tímár Mihály Az aranyember szereplője."
    }, {
      "date": "11-22",
      "id": 9,
      "question": "Kiről nevezték el Lousiana államot?",
      "options": ["Bonaparte Lajosról", "a Napkirályról", "XVI. Lajosról", "Louis Bougainville-ről"],
      "answer": 1,
      "expl": "Lousiana a Napkirályról kapta a nevét."
    }, {
      "date": "11-22",
      "id": 10,
      "question": "Az USA belép a vietnami háborúba, leváltják Hruscsovot, meghal Nehru, felavatják Egyiptomban az asszuáni gátat, Martin Luther King Nobel-békedíjat kap. Mikor?",
      "options": ["1958", "1961", "1964", "1967"],
      "answer": 2,
      "expl": "1964-ben történtek ezek az események."
    }, {
      "date": "11-23",
      "id": 1,
      "question": "1868-ban Japán fővárosa Tokió lett. Melyik város helyett?",
      "options": ["Jokohama", "Osaka", "Kyotó", "Kóbe"],
      "answer": 2,
      "expl": "Kyotó helyett Tokió lett Japán fővárosa."
    }, {
      "date": "11-23",
      "id": 2,
      "question": "Milyen színű a vízilabdakapusok sapkája?",
      "options": ["fekete", "fehér", "piros", "zöld"],
      "answer": 2,
      "expl": "A vízilabdakapusok sapkája piros."
    }, {
      "date": "11-23",
      "id": 3,
      "question": "Melyik országhoz tartozik Korzika?",
      "options": ["Spanyolországhoz", "Olaszországhoz", "Görögországhoz", "Franciaországhoz"],
      "answer": 3,
      "expl": "Korzika Franciaországhoz tartozik."
    }, {
      "date": "11-23",
      "id": 4,
      "question": "Ki követte XIV. Lajost a francia trónon?",
      "options": ["a fia", "a dédunokája", "az öccse", "az unokaöccse"],
      "answer": 1,
      "expl": "XIV. Lajost 72 évi uralkodás után dédunokája követte a trónon."
    }, {
      "date": "11-23",
      "id": 5,
      "question": "Kinek volt az írói álneve Vas Gereben?",
      "options": ["Radákovics Józsefé", "Jókai Móré", "Fáy Andrásé", "Kisfaludy Sándoré"],
      "answer": 0,
      "expl": "Vas Gereben Radákovics József álneve volt."
    }, {
      "date": "11-23",
      "id": 6,
      "question": "Richard Burtont hétszer jelölték Oscar-díjra. Hányszor nyerte&nbsp;el?",
      "options": ["egyszer sem", "egyszer", "kétszer", "háromszor"],
      "answer": 0,
      "expl": "Richard Burton egyszer sem nyerte el az Oscar-díjat."
    }, {
      "date": "11-23",
      "id": 7,
      "question": "Melyik ország külbirtoka a Szent Ilona-sziget?",
      "options": ["Nagy-Britannia", "Hollandia", "Franciország", "Spanyolország"],
      "answer": 0,
      "expl": "A Szent Ilona-sziget Nagy-Britannia külbirtoka."
    }, {
      "date": "11-23",
      "id": 8,
      "question": "Melyik hegységben található az Altamira-barlang?",
      "options": ["az Andokban", "a Pireneusokban", "az Appenninekben", "az Urálban"],
      "answer": 1,
      "expl": "Az Altamira-barlang a Pireneusokban található."
    }, {
      "date": "11-23",
      "id": 9,
      "question": "Melyik egyiptomi fáraó tette kötelezővé az egyistenhitet?",
      "options": ["II. Ramszesz", "Kheopsz", "Dzsószer", "IV. Amenhotep"],
      "answer": 3,
      "expl": "IV. Amenhotep vezette be az egyistenhitet."
    }, {
      "date": "11-23",
      "id": 10,
      "question": "Meghal III. Fjodor orosz cár, utóda 10 éves féltestvére, Péter, Thököly Imre fejedelmi címet kap a török szultántól és feleségül veszi Zrínyi Ilonát, La Salle francia felfedező a Mississippi folyót két partját Lousiana néven francia gyarmattá nyilvánítja, Halley felfedezi a róla elnevezett üstököst. Mikor?",
      "options": ["1604", "1633", "1682", "1701"],
      "answer": 2,
      "expl": "1682-ben történtek ezek az események."
    }, {
      "date": "11-24",
      "id": 1,
      "question": "Ki alapította a Bauhaust?",
      "options": ["Paul Klee", "Walter Gropius", "Oscar Schlemmer", "Moholy-Nagy László"],
      "answer": 1,
      "expl": "A Bauhaust Gropius alapította."
    }, {
      "date": "11-24",
      "id": 2,
      "question": "Mi a neve Hanoi folyójának?",
      "options": ["Mekong", "Vörös-folyó", "Gangesz", "Sárga-folyó"],
      "answer": 1,
      "expl": "Hanoi folyója a Vörös-folyó."
    }, {
      "date": "11-24",
      "id": 3,
      "question": "Melyik szereppel vált híressé Lugosi Béla?",
      "options": ["Robin Hood", "Dracula", "Frankenstein", "Zorro"],
      "answer": 1,
      "expl": "Lugosi Béla Dracula szerepében vált híressé."
    }, {
      "date": "11-24",
      "id": 4,
      "question": "Melyik sportágban szerzett olimpiai aranyérmet Gyarmati Olga?",
      "options": ["tornasportban", "úszásban", "távolugrásban", "tőrvívásban"],
      "answer": 2,
      "expl": "Gyarmati Olga távolugrásban szerzett aranyérmet (1948)."
    }, {
      "date": "11-24",
      "id": 5,
      "question": "Kit tartunk a védőoltások úttörőjének?",
      "options": ["Robert Kochot", "Louis Pasteurt", "Paul Ehrlichet", "Edward Jennert"],
      "answer": 3,
      "expl": "A védőoltások úttörője Edward Jenner angol orvos, a himlőoltás kidolgozója."
    }, {
      "date": "11-24",
      "id": 6,
      "question": "Minek a mértékegysége a maligánfok?",
      "options": ["a bor alkoholtartalmának", "a világosságnak", "a folyadékok sűrűségének", "az égitestek fényességének"],
      "answer": 0,
      "expl": "A maligánfok a bor alkoholtartalmának mértékegysége."
    }, {
      "date": "11-24",
      "id": 7,
      "question": "Melyik amerikai elnök kapott Nobel-díjat?",
      "options": ["J. F. Kennedy", "T. Roosevelt", "G. Ford", "C. Coolidge"],
      "answer": 1,
      "expl": "Theodore Roosevelt kapott 1906-ban Nobel-békedíjat."
    }, {
      "date": "11-24",
      "id": 8,
      "question": "Mi a pimpinella közismertebb neve?",
      "options": ["pipacs", "feketefenyő", "ánizs", "szürke gém"],
      "answer": 2,
      "expl": "A pimpinella az ánizs kevésbé ismert neve."
    }, {
      "date": "11-24",
      "id": 9,
      "question": "Hány évenként rendeznek labdarúgó Európa-bajnokságot?",
      "options": ["1", "2", "3", "4"],
      "answer": 3,
      "expl": "Labdarúgó Európa-bajnokságot 4 évente rendeznek."
    }, {
      "date": "11-24",
      "id": 10,
      "question": "Mit mérünk a spektrométerrel?",
      "options": ["súrlódást", "hallást", "sugárzást", "szintkülönbséget"],
      "answer": 2,
      "expl": "A spektrométer sugárzások mérésére szolgál."
    }, {
      "date": "11-25",
      "id": 1,
      "question": "Kinek a műve a Norma című opera?",
      "options": ["Verdié", "Bellinié", "Mozarté", "Puccinié"],
      "answer": 1,
      "expl": "A Norma című opera Bellini műve."
    }, {
      "date": "11-25",
      "id": 2,
      "question": "Az anekdoták szerint melyik görög filozófus lakott hordóban?",
      "options": ["Szókratész", "Platón", "Diogenész", "Theophrasztosz"],
      "answer": 2,
      "expl": "Az anekdoták szerint Diogenész lakott hordóban."
    }, {
      "date": "11-25",
      "id": 3,
      "question": "Mi volt Sztálingrád neve 1925-ig?",
      "options": ["Volgográd", "Caricin", "Novgorod", "Szuzdal"],
      "answer": 1,
      "expl": "Sztálingrád neve 1925-ig Caricin volt."
    }, {
      "date": "11-25",
      "id": 4,
      "question": "Melyik bolygó keringése tart a legtovább a Nap körül?",
      "options": ["Uránusz", "Vénusz", "Mars", "Neptunusz"],
      "answer": 3,
      "expl": "A felsorolt bolygók közül a Neptunusz keringése tart a legtovább a Nap körül (165 év)."
    }, {
      "date": "11-25",
      "id": 5,
      "question": "Ki mondta: „Még egy ilyen győzelem, és veszve vagyok!”?",
      "options": ["Nagy Sándor", "II. Pürrhosz", "Marcus Antonius", "Hunyadi János"],
      "answer": 1,
      "expl": "A szállóige Epirosz királyától, Pürrhosztól származik."
    }, {
      "date": "11-25",
      "id": 6,
      "question": "Mi Pakisztán fővárosa?",
      "options": ["Karacsi", "Iszlámábád", "Madras", "Haidarábád"],
      "answer": 1,
      "expl": "Pakisztán fővárosa Iszlámábád."
    }, {
      "date": "11-25",
      "id": 7,
      "question": "Ki volt Hórusz?",
      "options": ["a fáraót védelmező egyiptomi isten", "indiai tűzisten", "föníciai termékenység-istennő", "iráni napisten"],
      "answer": 0,
      "expl": "Hórusz a fáraót védelmező egyiptomi isten."
    }, {
      "date": "11-25",
      "id": 8,
      "question": "Melyik szervünk betegsége a golyva?",
      "options": ["szívé", "tüdőé", "pajzsmirigyé", "gyomoré"],
      "answer": 2,
      "expl": "A golyva a pajzsmirigy betegsége."
    }, {
      "date": "11-25",
      "id": 9,
      "question": "Ki vezette a trójai háborúban a görög sereget?",
      "options": ["Oresztész", "Meneláosz", "Daidalosz", "Agamemnón"],
      "answer": 3,
      "expl": "A trójai háborúban a görög sereget Agamemnón vezette."
    }, {
      "date": "11-25",
      "id": 10,
      "question": "Mi történt 1837. augusztus 22-én?",
      "options": ["Lyonban leverték a béremelést követelő selyemszövő munkások felkelését", "Szent Ilona szigetén meghalt Napóleon", "Megnyílt az első pesti magyar színház", "Megalakult a Nemzetközi Vöröskereszt"],
      "answer": 2,
      "expl": "A megadott napon nyílt meg a Pesti Magyar Színház."
    }, {
      "date": "11-26",
      "id": 1,
      "question": "Melyik sportág világbajnoka volt Capablanca?",
      "options": ["súlyemelés", "tenisz", "sakk", "atlétika"],
      "answer": 2,
      "expl": "Capablanca sakk-világbajnok volt 1921 és 1927 között."
    }, {
      "date": "11-26",
      "id": 2,
      "question": "Hol írta megrázó Napló-ját Anna Frank?",
      "options": ["Brüsszelben", "Amszterdamban", "Koppenhágában", "Antwerpenben"],
      "answer": 1,
      "expl": "Anna Frank amszterdami búvóhelyükön írta Naplóját."
    }, {
      "date": "11-26",
      "id": 3,
      "question": "Melyik evangelista szimbóluma a bika?",
      "options": ["Máté", "Márk", "Lukács", "János"],
      "answer": 2,
      "expl": "A bika Lukács evangélista szimbóluma."
    }, {
      "date": "11-26",
      "id": 4,
      "question": "Melyik az égbolt legfényesebb csillaga?",
      "options": ["az Esthajnalcsillag", "a Szíriusz", "a Sarkcsillag", "az Alfa Centauri"],
      "answer": 1,
      "expl": "Az égbolt legfényesebb csillaga a Szíriusz."
    }, {
      "date": "11-26",
      "id": 5,
      "question": "Melyik állat másik neve az ájtatos manó?",
      "options": ["a fürkészdarazsé", "a fáraóhangyáé", "a hegyesorrú denevéré", "az imádkozó sáskáé"],
      "answer": 3,
      "expl": "Az ájtatos manó az imádkozó sáska másik neve."
    }, {
      "date": "11-26",
      "id": 6,
      "question": "Melyik filmben nem játszott Gérard Philipe?",
      "options": ["Tisztes úriház", "Pármai kolostor", "Veszedelmes viszonyok", "Gróf Monte Christo"],
      "answer": 3,
      "expl": "Gérard Philipe a Monte Christo grófja című filmben nem játszott, ennek főszereplője Jean Marais volt."
    }, {
      "date": "11-26",
      "id": 7,
      "question": "Kik álltak egymással szemben a poltavai csatában?",
      "options": ["orosz&#150;japán csapatok", "orosz&#150;svéd csapatok", "francia&#150;porosz csapatok", "porosz&#150;osztrák csapatok"],
      "answer": 1,
      "expl": "A poltavai ütközetben I. Péter vezette orosz, és XII. Károly vezette svéd csapatok álltak szemben egymással."
    }, {
      "date": "11-26",
      "id": 8,
      "question": "Ki a zeneszerzője a Bástyasétány 77 című operettnek?",
      "options": ["Jacobi Viktor", "Fényes Szabolcs", "Eisemann Mihály", "Kálmán Imre"],
      "answer": 2,
      "expl": "A „Bástyasétány 77” című operett zeneszerzője Eisemann Mihály."
    }, {
      "date": "11-26",
      "id": 9,
      "question": "Ki a szelek ura a görög mitológiában?",
      "options": ["Aiolosz", "Argosz", "Meneláosz", "Midász"],
      "answer": 0,
      "expl": "A szelek ura a görög mitológiában Aiolosz."
    }, {
      "date": "11-26",
      "id": 10,
      "question": "Melyik országban uralkodott a Premysl-uralkodócsalád?",
      "options": ["Svédországban", "Lengyelországban", "Oroszországban", "Csehországban"],
      "answer": 3,
      "expl": "A Premysl-uralkodócsalád Csehországban uralkodott."
    }, {
      "date": "11-27",
      "id": 1,
      "question": "Mikor egyesült Pest, Buda és Óbuda?",
      "options": ["1849-ben", "1873-ban", "1881-ben", "1899-ben"],
      "answer": 1,
      "expl": "Pest, Buda és Óbuda 1873-ban egyesült."
    }, {
      "date": "11-27",
      "id": 2,
      "question": "Melyik sportoló nem birkózó?",
      "options": ["Varga János", "Kárpáti Károly", "Polyák Imre", "Terstyánszky Ödön"],
      "answer": 3,
      "expl": "Terstyánszky Ödön nem birkózó, hanem kétszeres olimpiai bajnok tőrvívónk."
    }, {
      "date": "11-27",
      "id": 3,
      "question": "Kinek a hőse Copperfield David?",
      "options": ["Mark Twainé", "Charles Dickensé", "Robert Stevensoné", "Jack Londoné"],
      "answer": 1,
      "expl": "Copperfield David Charles Dickens hőse."
    }, {
      "date": "11-27",
      "id": 4,
      "question": "Mi a sztenográfia?",
      "options": ["titkosírás", "gyorsírás", "vakírás", "fogalomírás"],
      "answer": 1,
      "expl": "A sztenográfia gyorsírás."
    }, {
      "date": "11-27",
      "id": 5,
      "question": "Melyik rendet alapította Loyolai Szent Ignác?",
      "options": ["ferences rendet", "jezsuita rendet", "bencés rendet", "ciszterci rendet"],
      "answer": 1,
      "expl": "Loyolai Szent Ignác a jezsuita rend alapítója."
    }, {
      "date": "11-27",
      "id": 6,
      "question": "Melyik amerikai elnök portréja nincs a Rushmore-hegység sziklájába faragva?",
      "options": ["Thomas Jefferson", "Abraham Lincoln", "John F. Kennedy", "Theodore Roosevelt"],
      "answer": 2,
      "expl": "Kennedy elnök portréja nincs a Rushmore-hegység sziklájába faragva."
    }, {
      "date": "11-27",
      "id": 7,
      "question": "Ki A bűvös szekrény című opera zeneszerzője?",
      "options": ["Erkel Ferenc", "Ruzitska József", "Petrovics Emil", "Farkas Ferenc"],
      "answer": 3,
      "expl": "A „A bűvös szekrény” című opera zeneszerzője Farkas Ferenc."
    }, {
      "date": "11-27",
      "id": 8,
      "question": "Hogyan hal meg Anna Karenina, Tolsztoj hősnője?",
      "options": ["férje lelövi ", "tüdőbajban", "vonat elé veti magát", "belehal a szülésbe"],
      "answer": 2,
      "expl": "Anna Karenina öngyilkos lesz, vonat elé veti magát."
    }, {
      "date": "11-27",
      "id": 9,
      "question": "Ki kapott Nobel-díjat a tbc területén végzett munkásságáért?",
      "options": ["Koch", "Guerin", "Ehrlich", "Pasteur"],
      "answer": 0,
      "expl": "A tuberculosis területén végzett munkásságáért Koch kapott Nobel-díjat."
    }, {
      "date": "11-27",
      "id": 10,
      "question": "Ki az istenek hírnöke a görög mitológiában?",
      "options": ["Hektór", "Atlasz", "Irisz", "Kalüpszó"],
      "answer": 2,
      "expl": "Az istenek hírnöke a görög mitológiában Irisz volt."
    }, {
      "date": "11-28",
      "id": 1,
      "question": "Hogyan hívják a mongol törvényhozást?",
      "options": ["Horda", "Ilkán", "Hurál", "Bogdogegen"],
      "answer": 2,
      "expl": "A mongol törvényhozást Hurálnak hívják."
    }, {
      "date": "11-28",
      "id": 2,
      "question": "Melyik hazánk legnagyobb vízesése?",
      "options": ["Szalajka-vízesés", "Fátyol-vízesés", "Szinva-vízesés", "Nagy-Tarpatak vízesés"],
      "answer": 2,
      "expl": "Hazánk legnagyobb vízesése a Bükkben található Szinva-vízesés."
    }, {
      "date": "11-28",
      "id": 3,
      "question": "Ki volt a Budapesti Önkéntes Mentő Egyesület alapítója?",
      "options": ["Kresz Géza", "Batthyány-Strattmann László", "Széchenyi István", "Haynal Imre"],
      "answer": 0,
      "expl": "A Budapesti Önkéntes Mentő Egyesületet alapította  és haláláig igazgatta Kresz Géza."
    }, {
      "date": "11-28",
      "id": 4,
      "question": "Hogyan hívják a bérgyilkost Verdi Rigolettójában?",
      "options": ["Belmonte", "Ozmin", "Santuzza", "Sparafucile"],
      "answer": 3,
      "expl": "Verdi Rigolettójában Sparafucile a bérgyilkos neve."
    }, {
      "date": "11-28",
      "id": 5,
      "question": "Hol halt meg Stein Aurél?",
      "options": ["Calcuttában", "Kabulban", "Lahore-ben", "Dardzsilingben"],
      "answer": 1,
      "expl": "Stein Aurél Kabulban halt meg."
    }, {
      "date": "11-28",
      "id": 6,
      "question": "Ki hirdette meg a New Deal-programot?",
      "options": ["F. D. Roosevelt", "D. D. Eisenhover", "L. B. Johnson", "G. Ford"],
      "answer": 0,
      "expl": "A New Deal-programot Roosevelt hirdette meg (1933)."
    }, {
      "date": "11-28",
      "id": 7,
      "question": "Melyik városunk ókori neve Scarbantia?",
      "options": ["Győré", "Szombathelyé", "Soproné", "Pécsé"],
      "answer": 2,
      "expl": "Scarbantia Sopron ókori neve."
    }, {
      "date": "11-28",
      "id": 8,
      "question": "Ki a zeneszerzője a Süsü című mesejátéknak?",
      "options": ["Bágya András", "Koncz Tibor", "Bergendy István", "Presser Gábor"],
      "answer": 2,
      "expl": "A Süsü című mesejáték zeneszerzője Bergendy István."
    }, {
      "date": "11-28",
      "id": 9,
      "question": "Milyen néven vált ismertté Michael Shaloub?",
      "options": ["Tony Curtis", "Michael Douglas", "Omar Sharif", "Norman Wisdom"],
      "answer": 2,
      "expl": "Michael Shaloub Omar Sharif eredeti neve."
    }, {
      "date": "11-28",
      "id": 10,
      "question": "Melyik felfedező élt a legkorábban?",
      "options": ["James Cook", "Magellán", "Bartolomeu Diaz", "Marco Polo"],
      "answer": 3,
      "expl": "A fesorolt felfedezők közül Marco Polo élt a legkorábban (1254-1324)."
    }, {
      "date": "11-29",
      "id": 1,
      "question": "Ki tervezte a pesti Vigadót?",
      "options": ["Hild József", "Feszl Frigyes", "Pollach Mihály", "Schulek Frigyes"],
      "answer": 1,
      "expl": "A pesti Vigadót Feszl Frigyes tervezte."
    }, {
      "date": "11-29",
      "id": 2,
      "question": "Ki volt az első űrsétát végrehajtó űrhajós?",
      "options": ["Alekszej Leonov", "Valerij Kubaszov", "Edwin Aldrin", "John Young"],
      "answer": 0,
      "expl": "Az első űrsétát végrehajtó űrhajós Leonov volt."
    }, {
      "date": "11-29",
      "id": 3,
      "question": "Ki írta az *Egy jóházból való úrilány emlékei* című művet?",
      "options": ["Virginia Woolf", "Marguerite Duras", "Harriet Beecher Stowe", "Simone de Beauvoir"],
      "answer": 3,
      "expl": "Az Egy jóházból való úrilány emlékei Simone de Beauvoir műve."
    }, {
      "date": "11-29",
      "id": 4,
      "question": "Melyik miniszterelnökünket nevezték „dobokai basának”?",
      "options": ["Lónyay Menyhértet", "Szapáry Gyulát", "Wenckheim Bélát", "Bánffy Dezsőt"],
      "answer": 3,
      "expl": "Bánffy Dezsőt nevezték a „dobokai basának”."
    }, {
      "date": "11-29",
      "id": 5,
      "question": "Melyik ország gyarmata volt Indonézia?",
      "options": ["Franciaország", "Hollandia", "Nagy-Britannia", "Spanyolország"],
      "answer": 1,
      "expl": "Indonézia holland gyarmat volt."
    }, {
      "date": "11-29",
      "id": 6,
      "question": "Ki Pallasz Athéné megfelelője a római mitológiában?",
      "options": ["Fama", "Diana", "Vénusz", "Minerva"],
      "answer": 3,
      "expl": "Pallasz Athéné megfelelője a római mitológiában Minerva."
    }, {
      "date": "11-29",
      "id": 7,
      "question": "Hol található a Bocskai István Múzeum?",
      "options": ["Hajdúszoboszlón", "Székesfehérvárott", "Szerencsen", "Egerben"],
      "answer": 0,
      "expl": "A Bocskai István Múzeum Hajdúszoboszlón van."
    }, {
      "date": "11-29",
      "id": 8,
      "question": "Kinek a múzsája volt Laura?",
      "options": ["Dante", "Boccaccio", "Petrarca", "De Amicis"],
      "answer": 2,
      "expl": "Laura Petrarca múzsája volt."
    }, {
      "date": "11-29",
      "id": 9,
      "question": "Melyik folyó halad át kétszer az Egyenlítőn?",
      "options": ["Nílus", "Kongó", "Mississippi", "Jangce"],
      "answer": 1,
      "expl": "A Kongó halad át kétszer az Egyenlítőn."
    }, {
      "date": "11-29",
      "id": 10,
      "question": "Nixon elnököt vizsgálóbizottság elé idézik a Watergate-ügyben, Chilében Pinochet veszi át a hatalmat, kirobban a negyedik arab&#150;izraeli háború, Párizsban aláírják a vietnami háborút lezáró békeszerződést, meghal Picasso, Ben Gurion és Paavo Nurmi. Mikor?",
      "options": ["1971", "1973", "1975", "1977"],
      "answer": 1,
      "expl": "1973-ban történtek ezek az események."
    }, {
      "date": "11-30",
      "id": 1,
      "question": "Görögország Törökországtól, Brazília Portugáliától nyeri el teljes függetlenségét, Babbage megépíti mechanikus számológépét, Champollion megfejti a hieroglif írást, meghal Shelley, E.T.A. Hoffman és Canova. Mikor?",
      "options": ["1804", "1822", "1849", "1874"],
      "answer": 1,
      "expl": "1822-ben történtek ezek az események."
    }, {
      "date": "11-30",
      "id": 2,
      "question": "Ki alkotta meg az eszperantó nyelvet?",
      "options": ["Robert Austerlitz", "Lazar L. Zamenhof", "Carl R. Lepsius", "Aurélien Sauvageot"],
      "answer": 1,
      "expl": "Lazar L. Zamenhof alkotta meg az eszperantó nyelvet."
    }, {
      "date": "11-30",
      "id": 3,
      "question": "Hogyan hívták a francia forradalom alatt Robespierre-t és híveit?",
      "options": ["girondisták", "Hegypártiak", "hébertisták", "sansculotte-ok"],
      "answer": 1,
      "expl": "Robespierre-t és híveit Hegypártiaknak nevezték."
    }, {
      "date": "11-30",
      "id": 4,
      "question": "Hol található a Gutenberg Múzeum?",
      "options": ["Berlinben", "Regensburgban", "Brémában", "Mainzban"],
      "answer": 3,
      "expl": "A Gutenberg Múzeum Mainzban található."
    }, {
      "date": "11-30",
      "id": 5,
      "question": "Mi nem kell a betonkészítéshez?",
      "options": ["cement", "homok", "mész", "kavics"],
      "answer": 2,
      "expl": "A betonkészítéshez nincs szükség mészre."
    }, {
      "date": "11-30",
      "id": 6,
      "question": "Kinek a zeneműve a Nászinduló?",
      "options": ["Beethowené", "Baché", "Mendelssohné", "Verdié"],
      "answer": 2,
      "expl": "A „Nászinduló” Mendelssohn zeneműve."
    }, {
      "date": "11-30",
      "id": 7,
      "question": "Melyik szervezet elnöke volt Romes Csandra?",
      "options": ["ENSZ", "Európa Tanács", "NATO", "Békevilágtanács"],
      "answer": 3,
      "expl": "Romes Csandra a Békevilágtanács elnöke volt (1977-1990)."
    }, {
      "date": "11-30",
      "id": 8,
      "question": "Aragónia és Kasztília egyesülésével létrejön az egységes Spanyolország, Mátyás megköti az olmützi békét Ulászló cseh királlyal, Kenyérmezőnél Báthori István és Kinizsi Pál vezetésével a magyar hadak megsemmisítik a török sereget, meghal Antonello da Messina szicíliai festő. Mikor?",
      "options": ["1426", "1453", "1479", "1499"],
      "answer": 2,
      "expl": "1479-ben történtek ezek az események."
    }, {
      "date": "11-30",
      "id": 9,
      "question": "Melyik film kapta meg legkorábban az Oscar-díjat?",
      "options": ["Casablanca", "A Manderley-ház asszonya", "My Fair Lady", "Száll a kakukk fészkére"],
      "answer": 1,
      "expl": "Hitchock filmje, A Manderley-ház asszonya kapta a felsoroltak közül a legkorábban az Oscar-díjat (1940)."
    }, {
      "date": "11-30",
      "id": 10,
      "question": "Hogyan hívták Mózes nővérét?",
      "options": ["Betsabé", "Sára", "Mirjám", "Debóra"],
      "answer": 2,
      "expl": "Mózes nővérét Mirjámnak hívták."
    }, ]
