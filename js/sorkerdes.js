const sorkerdes = [
{
  topic: "SPORT",
  id: 1,
  type: "sort",
  title: "A legtöbb aranyérmet nyerttel kezdve állítsd sorrendbe az alábbi magyar olimpiai bajnokokat!",
  items: [
    { label: "A", text: "Egerszegi Krisztina" },
    { label: "B", text: "Kárpáti Rudolf" },
    { label: "C", text: "Darnyi Tamás" },
    { label: "D", text: "Gerevich Aladár" }
  ],
  correctOrder: ["D", "B", "A", "C"],
  learnMore: { summary: "Olimpiai aranyérmek száma szerint: Gerevich Aladár (7) ⇒ Kárpáti Rudolf (6) ⇒ Egerszegi Krisztina (5) ⇒ Darnyi Tamás (4)." }
},
{
  topic: "ÁLTALÁNOS",
id: 2,
type: "sort",
  title: "Állítsd 'rangjuk' szerinti növekvő sorrendbe a felsorolt egyetemi oktatókat!",
  items: [
    { label: "A", text: "docens" },
    { label: "B", text: "rektor" },
    { label: "C", text: "tanársegéd" },
    { label: "D", text: "adjunktus" }
  ],
  correctOrder: ["C", "D", "A", "B"],
  learnMore: { summary: "Egyetemi rangsor szerint: tanársegéd ⇒ adjunktus ⇒ docens ⇒ rektor." }
},
{
  topic: "VALLÁS",
id: 3,
type: "sort",
  title: "Állítsd a bibliai fogalmakat a hozzájuk tartozó számok növekvő sorrendjébe!",
  items: [
    { label: "A", text: "Egyiptomot sújtó csapások" },
    { label: "B", text: "szűk esztendők" },
    { label: "C", text: "Júdás ezüstpénzei" },
    { label: "D", text: "az apostolok száma" }
  ],
  correctOrder: ["B", "A", "D", "C"],
  learnMore: { summary: "Számok szerint: szűk esztendők (7) ⇒ egyiptomi csapások (10) ⇒ apostolok száma (12) ⇒ Júdás ezüstpénzei (30)." }
},
{
  topic: "FILM",
id: 4,
type: "sort",
  title: "Állítsd a cannes-i fesztivál fődíjas filmjeit díjazásuk időrendjébe!",
  items: [
    { label: "A", text: "Ponyvaregény" },
    { label: "B", text: "Szállnak a darvak" },
    { label: "C", text: "Apokalipszis most" },
    { label: "D", text: "Nagyítás" }
  ],
  correctOrder: ["B", "D", "C", "A"],
  learnMore: { summary: "Díjazás szerint: Szállnak a darvak (1958) ⇒ Nagyítás (1967) ⇒ Apokalipszis most (1979) ⇒ Ponyvaregény (1994)." }
},
{
  topic: "FÖLDRAJZ",
id: 5,
type: "sort",
  title: "Állítsd a Duna folyásírányának megfelelő sorrendbe a felsorolt fővárosokat!",
  items: [
    { label: "A", text: "Budapest" },
    { label: "B", text: "Bécs" },
    { label: "C", text: "Pozsony" },
    { label: "D", text: "Belgrád" }
  ],
  correctOrder: ["B", "C", "A", "D"],
  learnMore: { summary: "Folyásirány szerint: Bécs ⇒ Pozsony ⇒ Budapest ⇒ Belgrád." }
},
{
  topic: "FÖLDRAJZ",
id: 6,
type: "sort",
  title: "Állítsd a Duna folyásírányának megfelelő sorrendbe a magyar szigeteket!",
  items: [
    { label: "A", text: "Csepel-sziget" },
    { label: "B", text: "Margit-sziget" },
    { label: "C", text: "Szentendrei-sziget" },
    { label: "D", text: "Mohácsi-sziget" }
  ],
  correctOrder: ["C", "B", "A", "D"],
  learnMore: { summary: "Duna folyásiránya szerint: Szentendrei-sziget ⇒ Margit-sziget ⇒ Csepel-sziget ⇒ Mohácsi-sziget." }
},
{
  topic: "FÖLDRAJZ",
id: 7,
type: "sort",
  title: "Állítsd a Duna menti országokat a folyó folyásirányának megfelelő sorrendbe!",
  items: [
    { label: "A", text: "Szlovákia" },
    { label: "B", text: "Ausztria" },
    { label: "C", text: "Románia" },
    { label: "D", text: "Magyarország" }
  ],
  correctOrder: ["B", "A", "D", "C"],
  learnMore: { summary: "A Duna folyásiránya szerint: Ausztria ⇒ Szlovákia ⇒ Magyarország ⇒ Románia." }
},
{
  topic: "TECHNIKA",
id: 8,
type: "sort",
  title: "Állítsd a fegyvereket feltalálásuk sorrendjébe!",
  items: [
    { label: "A", text: "kopja" },
    { label: "B", text: "colt" },
    { label: "C", text: "szakóca" },
    { label: "D", text: "csillagbuzogány" }
  ],
  correctOrder: ["C", "D", "A", "B"],
  learnMore: { summary: "Fegyverek feltalálása szerint: szakóca (őskor) ⇒ csillagbuzogány (középkor) ⇒ kopja (lovagi kor) ⇒ colt (1836)." }
},
{
  topic: "FILM",
id: 9,
type: "sort",
  title: "Állítsd a filmrendezőket születésük időrendjébe!",
  items: [
    { label: "A", text: "Szabó István" },
    { label: "B", text: "Luc Besson" },
    { label: "C", text: "Ingmar Bergman" },
    { label: "D", text: "Jancsó Miklós" }
  ],
  correctOrder: ["C", "D", "A", "B"],
  learnMore: { summary: "Születés szerint: Ingmar Bergman (1918) ⇒ Jancsó Miklós (1921) ⇒ Szabó István (1938) ⇒ Luc Besson (1959)." }
},
{
  topic: "FILM",
id: 10,
type: "sort",
  title: "Állítsd a filmsztárokat születésük időrendjébe!",
  items: [
    { label: "A", text: "John Wayne" },
    { label: "B", text: "Charles Bronson" },
    { label: "C", text: "Tom Cruise" },
    { label: "D", text: "Tom Hanks" }
  ],
  correctOrder: ["A", "B", "D", "C"],
  learnMore: { summary: "Születés szerint: John Wayne (1907) ⇒ Charles Bronson (1921) ⇒ Tom Hanks (1956) ⇒ Tom Cruise (1962)." }
},
{
  topic: "IRODALOM",
id: 11,
type: "sort",
  title: "Állítsd a fogalmakat a Párizsban járt az Ősz című versben való megjelenésük sorrendjébe!",
  items: [
    { label: "A", text: "Ősz" },
    { label: "B", text: "Párizs" },
    { label: "C", text: "Szent Mihály útja" },
    { label: "D", text: "Szajna" }
  ],
  correctOrder: ["B", "A", "C", "D"],
  learnMore: { summary: "Versbeli sorrend: Párizs ⇒ Ősz ⇒ Szent Mihály útja ⇒ Szajna." }
},
{
  topic: "SPORT",
id: 12,
type: "sort",
  title: "Állítsd a Forma 1-es versenyzőket 2001-es összetett helyezésük sorrendjébe! Kezd az elsővel!",
  items: [
    { label: "A", text: "Michael Schumacher" },
    { label: "B", text: "Ralf Schumacher" },
    { label: "C", text: "David Coulthard" },
    { label: "D", text: "Mika Hakkinen" }
  ],
  correctOrder: ["A", "C", "B", "D"],
  learnMore: { summary: "2001-es helyezés szerint: Michael Schumacher (1.) ⇒ David Coulthard (2.) ⇒ Ralf Schumacher (4.) ⇒ Mika Hakkinen (5.)." }
},
{
  topic: "FILM",
id: 13,
type: "sort",
  title: "Állítsd a főszereplőként Oscar-díjat nyert színészeket első díjazásuk időrendjébe!",
  items: [
    { label: "A", text: "Laurence Olivier" },
    { label: "B", text: "Gregory Peck" },
    { label: "C", text: "Nicolas Cage" },
    { label: "D", text: "Dustin Hoffman" }
  ],
  correctOrder: ["A", "B", "D", "C"],
  learnMore: { summary: "Oscar-díjak időrendje: Laurence Olivier (1949) ⇒ Gregory Peck (1963) ⇒ Dustin Hoffman (1980) ⇒ Nicolas Cage (1996)." }
},
{
  topic: "FILM",
id: 14,
type: "sort",
  title: "Állítsd a főszereplőként Oscar-díjat nyert színésznőket első díjazásuk időrendjébe!",
  items: [
    { label: "A", text: "Cher" },
    { label: "B", text: "Barbra Streisand" },
    { label: "C", text: "Vivien Leigh" },
    { label: "D", text: "Grace Kelly" }
  ],
  correctOrder: ["C", "D", "B", "A"],
  learnMore: { summary: "Oscar-díj időrendje: Vivien Leigh (1939) ⇒ Grace Kelly (1954) ⇒ Barbra Streisand (1968) ⇒ Cher (1987)." }
},
{
  topic: "NYELV",
id: 15,
type: "sort",
  title: "Állítsd a görög ábécé sorrendjébe az alábbi betűket!",
  items: [
    { label: "A", text: "lambda" },
    { label: "B", text: "gamma" },
    { label: "C", text: "alfa" },
    { label: "D", text: "üpszilon" }
  ],
  correctOrder: ["C", "B", "A", "D"],
  learnMore: { summary: "Görög ábécé sorrendben: alfa ⇒ gamma ⇒ lambda ⇒ üpszilon." }
},
{
  topic: "MŰVÉSZET",
id: 16,
type: "sort",
  title: "Állítsd a híres magyar zenés műveket bemutatásuk időrendjébe!",
  items: [
    { label: "A", text: "A padlás" },
    { label: "B", text: "Csárdáskirálynő" },
    { label: "C", text: "Bánk bán" },
    { label: "D", text: "Háry János" }
  ],
  correctOrder: ["C", "B", "D", "A"],
  learnMore: { summary: "Bemutatás szerint: Bánk bán (1861) ⇒ Csárdáskirálynő (1915) ⇒ Háry János (1926) ⇒ A padlás (1988)." }
},
{
  topic: "ÁLTALÁNOS",
id: 17,
type: "sort",
  title: "Állítsd a híres nőket születésük időrendjébe!",
  items: [
    { label: "A", text: "Mária Lujza" },
    { label: "B", text: "Jeanne d' Arc" },
    { label: "C", text: "Mata Hari" },
    { label: "D", text: "Brigitte Bardot" }
  ],
  correctOrder: ["B", "A", "C", "D"],
  learnMore: { summary: "Születés szerint: Jeanne d'Arc (1412) ⇒ Mária Lujza (1791) ⇒ Mata Hari (1876) ⇒ Brigitte Bardot (1934)." }
},
{
  topic: "ÁLTALÁNOS",
id: 18,
type: "sort",
  title: "Állítsd a híres nőket születésük időrendjébe!",
  items: [
    { label: "A", text: "Lucrezia Borgia" },
    { label: "B", text: "Marie Curie" },
    { label: "C", text: "Madame de Pompadour" },
    { label: "D", text: "Szappho" }
  ],
  correctOrder: ["D", "A", "C", "B"],
  learnMore: { summary: "Születés szerint: Szappho (~Kr. e. 620) ⇒ Lucrezia Borgia (1480) ⇒ Madame de Pompadour (1721) ⇒ Marie Curie (1867)." }
},
{
  topic: "SZÍNHÁZ",
id: 19,
type: "sort",
  title: "Állítsd a Kossuth-díjas színészeket díjazásuk időrendjébe!",
  items: [
    { label: "A", text: "Bessenyei Ferenc" },
    { label: "B", text: "Cserhalmi György" },
    { label: "C", text: "Garas Dezső" },
    { label: "D", text: "Kállai Ferenc" }
  ],
  correctOrder: ["A", "D", "C", "B"],
  learnMore: { summary: "Díjazás szerint: Bessenyei Ferenc (1953) ⇒ Kállai Ferenc (1956) ⇒ Garas Dezső (1970) ⇒ Cserhalmi György (1990)." }
},
{
  topic: "BIOLÓGIA",
id: 20,
type: "sort",
  title: "Állítsd a madarakat szárnyaik fesztávolságának növekvő sorrendjébe!",
  items: [
    { label: "A", text: "szirti sas" },
    { label: "B", text: "ökörszem" },
    { label: "C", text: "vörösbegy" },
    { label: "D", text: "macskabagoly" }
  ],
  correctOrder: ["B", "C", "D", "A"],
  learnMore: { summary: "Szárnyfesztávolság szerint: ökörszem (~15 cm) ⇒ vörösbegy (~20 cm) ⇒ macskabagoly (~95 cm) ⇒ szirti sas (~220 cm)." }
},
{
  topic: "FILM",
id: 21,
type: "sort",
  title: "Állítsd a magyar filmeket bemutatásuk időrendjébe!",
  items: [
    { label: "A", text: "Bakaruhában" },
    { label: "B", text: "Budapesti tavasz" },
    { label: "C", text: "Álmodozások kora" },
    { label: "D", text: "A nagy generáció" }
  ],
  correctOrder: ["B", "A", "C", "D"],
  learnMore: { summary: "Bemutatás szerint: Budapesti tavasz (1955) ⇒ Bakaruhában (1957) ⇒ Álmodozások kora (1964) ⇒ A nagy generáció (1986)." }
},
{
  topic: "FILM",
id: 22,
type: "sort",
  title: "Állítsd a magyar filmvígjátékokat bemutatásuk időrendjébe!",
  items: [
    { label: "A", text: "Hattyúdal" },
    { label: "B", text: "Állami Áruház" },
    { label: "C", text: "Ripacsok" },
    { label: "D", text: "Egészséges erotika" }
  ],
  correctOrder: ["B", "A", "C", "D"],
  learnMore: { summary: "Bemutatás szerint: Állami Áruház (1953) ⇒ Hattyúdal (1963) ⇒ Ripacsok (1981) ⇒ Egészséges erotika (1985)." }
},
{
  topic: "FÖLDRAJZ",
id: 23,
type: "sort",
  title: "Állítsd a magyar megyeszékhelyeket észak-déli sorrendbe!",
  items: [
    { label: "A", text: "Kecskemét" },
    { label: "B", text: "Pécs" },
    { label: "C", text: "Veszprém" },
    { label: "D", text: "Győr" }
  ],
  correctOrder: ["D", "C", "A", "B"],
  learnMore: { summary: "Észak-déli sorrendben: Győr ⇒ Veszprém ⇒ Kecskemét ⇒ Pécs." }
},
{
  topic: "SZÍNHÁZ",
id: 24,
type: "sort",
  title: "Állítsd a magyar színésznőket pályakezdésük időrendjébe!",
  items: [
    { label: "A", text: "Eszenyi Enikő" },
    { label: "B", text: "Hernádi Judit" },
    { label: "C", text: "Gobbi Hilda" },
    { label: "D", text: "Blaha Lujza" }
  ],
  correctOrder: ["D", "C", "B", "A"],
  learnMore: { summary: "Pályakezdés szerint: Blaha Lujza (1870-es évek) ⇒ Gobbi Hilda (1930-as évek) ⇒ Hernádi Judit (1970-es évek) ⇒ Eszenyi Enikő (1980-as évek)." }
},
{
  topic: "FILM",
id: 25,
type: "sort",
  title: "Állítsd a mozihősöket első filmvászonra lépésük időrendjébe!",
  items: [
    { label: "A", text: "Piedone" },
    { label: "B", text: "James Bond" },
    { label: "C", text: "Luke Skywalker" },
    { label: "D", text: "Indiana Jones" }
  ],
  correctOrder: ["B", "A", "C", "D"],
  learnMore: { summary: "Első megjelenés szerint: James Bond (1962) ⇒ Piedone (1973) ⇒ Luke Skywalker (1977) ⇒ Indiana Jones (1981)." }
},
{
  topic: "ZENE",
id: 26,
type: "sort",
  title: "Állítsd a nagylemezeket első megjelenésük időrendjébe!",
  items: [
    { label: "A", text: "Loksi" },
    { label: "B", text: "Illések és pofonok" },
    { label: "C", text: "Macska az úton" },
    { label: "D", text: "Indul a mandula" }
  ],
  correctOrder: ["B", "A", "C", "D"],
  learnMore: { summary: "Megjelenés szerint: Illések és pofonok (1969) ⇒ Loksi (1975) ⇒ Macska az úton (1983) ⇒ Indul a mandula (1994)." }
},
{
  topic: "TUDOMÁNY",
id: 27,
type: "sort",
  title: "Állítsd a naptól való távolság sorrendjébe az alábbi bolygókat! Kezd a legközelebbivel!",
  items: [
    { label: "A", text: "Föld" },
    { label: "B", text: "Vénusz" },
    { label: "C", text: "Merkúr" },
    { label: "D", text: "Mars" }
  ],
  correctOrder: ["C", "B", "A", "D"],
  learnMore: { summary: "Naptól való távolság szerint: Merkúr ⇒ Vénusz ⇒ Föld ⇒ Mars." }
},
{
  topic: "ÁLTALÁNOS",
id: 28,
type: "sort",
  title: "Állítsd a nemzetközi szervezeteket megalakulásuk időrendjébe!",
  items: [
    { label: "A", text: "ENSZ" },
    { label: "B", text: "NATO" },
    { label: "C", text: "NOB" },
    { label: "D", text: "EU" }
  ],
  correctOrder: ["C", "A", "B", "D"],
  learnMore: { summary: "Megalakulás szerint: NOB (1894) ⇒ ENSZ (1945) ⇒ NATO (1949) ⇒ EU (1993)." }
},
{
  topic: "VALLÁS",
id: 29,
type: "sort",
  title: "Állítsd a párosokat a Bibliában való megjelenésük sorrendjébe!",
  items: [
    { label: "A", text: "Ádám és Éva" },
    { label: "B", text: "József és Putifárné" },
    { label: "C", text: "Ábrahám és Sára" },
    { label: "D", text: "Sámson és Delila" }
  ],
  correctOrder: ["A", "C", "B", "D"],
  learnMore: { summary: "Bibliai sorrend: Ádám és Éva ⇒ Ábrahám és Sára ⇒ József és Putifárné ⇒ Sámson és Delila." }
},
{
  topic: "TÖRTÉNELEM",
id: 30,
type: "sort",
  title: "Állítsd a rendszerváltás utáni miniszterségük időrendjébe hazánk pénzügyminisztereit!",
  items: [
    { label: "A", text: "Bokros Lajos" },
    { label: "B", text: "Békesi László" },
    { label: "C", text: "Kupa Mihály" },
    { label: "D", text: "Járai Zsigmond" }
  ],
  correctOrder: ["C", "B", "A", "D"],
  learnMore: { summary: "Miniszterség szerint: Kupa Mihály (1990–1993) ⇒ Békesi László (1994–1995) ⇒ Bokros Lajos (1995–1996) ⇒ Járai Zsigmond (1998–2000)." }
},
{
  topic: "TUDOMÁNY",
id: 31,
type: "sort",
  title: "Állítsd a szélességi köröket a Déli-sarkkörtől való távolságuk növekvő sorrendjébe!",
  items: [
    { label: "A", text: "Baktérítő" },
    { label: "B", text: "Ráktérítő" },
    { label: "C", text: "Egyenlítő" },
    { label: "D", text: "Északi-sarkkör" }
  ],
  correctOrder: ["A", "C", "B", "D"],
  learnMore: { summary: "Távolság szerint: Baktérítő (~23.5° D) ⇒ Egyenlítő (0°) ⇒ Ráktérítő (~23.5° É) ⇒ Északi-sarkkör (~66.5° É)." }
},
{
  topic: "SZÍNHÁZ",
id: 32,
type: "sort",
  title: "Állítsd a színésznőket pályakezdésük időrendjébe!",
  items: [
    { label: "A", text: "Tolnay Klári" },
    { label: "B", text: "Fedák Sári" },
    { label: "C", text: "Básti Juli" },
    { label: "D", text: "Psota Irén" }
  ],
  correctOrder: ["B", "A", "D", "C"],
  learnMore: { summary: "Pályakezdés szerint: Fedák Sári (1890-es évek) ⇒ Tolnay Klári (1934) ⇒ Psota Irén (1948) ⇒ Básti Juli (1980-as évek)." }
},
{
  topic: "TUDOMÁNY",
id: 33,
type: "sort",
  title: "Állítsd a termékeket energiatartalmuk emelkedő sorrendjébe!",
  items: [
    { label: "A", text: "citrom" },
    { label: "B", text: "csokoládé" },
    { label: "C", text: "szalonna" },
    { label: "D", text: "bab" }
  ],
  correctOrder: ["A", "D", "B", "C"],
  learnMore: { summary: "Energiatartalom szerint: citrom (~30 kcal/100g) ⇒ bab (~330 kcal/100g) ⇒ csokoládé (~550 kcal/100g) ⇒ szalonna (~700 kcal/100g)." }
},
{
  topic: "FÖLDRAJZ",
id: 34,
type: "sort",
  title: "Állítsd a Tisza mellékfolyóit a folyó folyásirányának megfelelő sorrendbe!",
  items: [
    { label: "A", text: "Túr" },
    { label: "B", text: "Sajó" },
    { label: "C", text: "Bodrog" },
    { label: "D", text: "Maros" }
  ],
  correctOrder: ["A", "C", "B", "D"],
  learnMore: { summary: "Folyásirány szerint: Túr ⇒ Bodrog ⇒ Sajó ⇒ Maros." }
},
{
  topic: "BIOLÓGIA",
id: 35,
type: "sort",
  title: "Állítsd a törzsfejlődés sorrendjébe a következő állatokat! Kezd a legfejlettlenebbel!",
  items: [
    { label: "A", text: "éti csiga" },
    { label: "B", text: "katicabogár" },
    { label: "C", text: "amőba" },
    { label: "D", text: "medúza" }
  ],
  correctOrder: ["C", "D", "A", "B"],
  learnMore: { summary: "Törzsfejlődés szerint: amőba ⇒ medúza ⇒ éti csiga ⇒ katicabogár." }
},
{
  topic: "FÖLDRAJZ",
id: 36,
type: "sort",
  title: "Állítsd a városokat a Budapesttől számított időeltolódás sorrendjébe! Kezd a legkevesebbel!",
  items: [
    { label: "A", text: "Las Vegas" },
    { label: "B", text: "London" },
    { label: "C", text: "Rio de Janeiro" },
    { label: "D", text: "New York" }
  ],
  correctOrder: ["B", "C", "D", "A"],
  learnMore: { summary: "Időeltolódás szerint: London (0 óra) ⇒ Rio de Janeiro (-4 óra) ⇒ New York (-6 óra) ⇒ Las Vegas (-9 óra)." }
},
{
  topic: "TÖRTÉNELEM",
id: 37,
type: "sort",
  title: "Állítsd a városokat alapításuk időrendjébe!",
  items: [
    { label: "A", text: "Szentpétervár" },
    { label: "B", text: "Brasília" },
    { label: "C", text: "Madrid" },
    { label: "D", text: "Róma" }
  ],
  correctOrder: ["D", "C", "A", "B"],
  learnMore: { summary: "Alapítás szerint: Róma (Kr. e. 753) ⇒ Madrid (9. század) ⇒ Szentpétervár (1703) ⇒ Brasília (1960)." }
},
{
  topic: "FÖLDRAJZ",
id: 38,
type: "sort",
  title: "Állítsd a városokat Budapesttől való távolságuk növekvő sorrendjébe!",
  items: [
    { label: "A", text: "Prága" },
    { label: "B", text: "Berlin" },
    { label: "C", text: "Tokió" },
    { label: "D", text: "London" }
  ],
  correctOrder: ["A", "B", "D", "C"],
  learnMore: { summary: "Távolság szerint: Prága (~530 km) ⇒ Berlin (~880 km) ⇒ London (~1 500 km) ⇒ Tokió (~9 200 km)." }
},
{
  topic: "TÖRTÉNELEM",
id: 39,
type: "sort",
  title: "Állítsd a városokat jelenlegi nevük első írásos említésének időrendjébe!",
  items: [
    { label: "A", text: "Tihany" },
    { label: "B", text: "Dunaújváros" },
    { label: "C", text: "Makó" },
    { label: "D", text: "Budapest" }
  ],
  correctOrder: ["A", "C", "D", "B"],
  learnMore: { summary: "Első írásos említés szerint: Tihany (1055) ⇒ Makó (1237) ⇒ Budapest (1244 – mint Pest és Buda) ⇒ Dunaújváros (1951)." }
},
{
  topic: "OPERA",
id: 40,
type: "sort",
  title: "Állítsd a zeneszerzőket születésük időrendjébe!",
  items: [
    { label: "A", text: "Paul McCartney" },
    { label: "B", text: "George Gershwin" },
    { label: "C", text: "Leonard Bernstein" },
    { label: "D", text: "Giuseppe Verdi" }
  ],
  correctOrder: ["D", "B", "C", "A"],
  learnMore: { summary: "Születés szerint: Giuseppe Verdi (1813) ⇒ George Gershwin (1898) ⇒ Leonard Bernstein (1918) ⇒ Paul McCartney (1942)." }
},
{
  topic: "ÉPÍTÉSZET",
id: 41,
type: "sort",
  title: "Állítsd alapításuk időrendjébe az alábbi magyar templomokat!",
  items: [
    { label: "A", text: "az esztergomi bazilika" },
    { label: "B", text: "a pannonhalmi apátság" },
    { label: "C", text: "a jáki templom" },
    { label: "D", text: "az egri minorita templom" }
  ],
  correctOrder: ["B", "C", "D", "A"],
  learnMore: { summary: "Alapítás szerint: pannonhalmi apátság (996) ⇒ jáki templom (13. század) ⇒ egri minorita templom (18. század) ⇒ esztergomi bazilika (19. század)." }
},
{
  topic: "ZENE",
id: 42,
type: "sort",
  title: "Állítsd állandó tagjaik száma szerinti növekvő sorrendbe az alábbi együtteseket!",
  items: [
    { label: "A", text: "Republic" },
    { label: "B", text: "Tankcsapda" },
    { label: "C", text: "TNT" },
    { label: "D", text: "Bergendy Szalonzenekar" }
  ],
  correctOrder: ["C", "B", "A", "D"],
  learnMore: { summary: "Taglétszám szerint: TNT (2 fő) ⇒ Tankcsapda (3 fő) ⇒ Republic (4 fő) ⇒ Bergendy Szalonzenekar (több mint 10 fő)." }
},
{
  topic: "IRODALOM",
id: 43,
type: "sort",
  title: "Állítsd Arany János Toldijának szereplőit a műben való megjelenésük sorrendjébe!",
  items: [
    { label: "A", text: "Laczfi Endre" },
    { label: "B", text: "Bence" },
    { label: "C", text: "Toldi György" },
    { label: "D", text: "cseh vitéz" }
  ],
  correctOrder: ["A", "C", "B", "D"],
  learnMore: { summary: "Megjelenés szerint: Laczfi Endre ⇒ Toldi György ⇒ Bence ⇒ cseh vitéz." }
},
{
  topic: "SPORT",
id: 44,
type: "sort",
  title: "Állítsd aranyérmük megszerzésének időrendjébe a felsorolt olimpiai bajnok vízilabdázóinkat!",
  items: [
    { label: "A", text: "Benedek Tibor" },
    { label: "B", text: "Halassy Olivér" },
    { label: "C", text: "Faragó Tamás" },
    { label: "D", text: "Gyarmati Dezső" }
  ],
  correctOrder: ["B", "D", "C", "A"],
  learnMore: { summary: "Aranyérmek időrendje: Halassy Olivér (1932) ⇒ Gyarmati Dezső (1952) ⇒ Faragó Tamás (1976) ⇒ Benedek Tibor (2000)." }
},
{
  topic: "SPORT",
id: 45,
type: "sort",
  title: "Állítsd aranyérmük megszerzésének időrendjébe olimpiai bajnok kajak-kenusainkat!",
  items: [
    { label: "A", text: "Storcz Botond" },
    { label: "B", text: "Hesz Mihály" },
    { label: "C", text: "Parti János" },
    { label: "D", text: "Gyulay Zsolt" }
  ],
  correctOrder: ["C", "B", "D", "A"],
  learnMore: { summary: "Aranyérmek időrendje: Parti János (1952) ⇒ Hesz Mihály (1968) ⇒ Gyulay Zsolt (1988) ⇒ Storcz Botond (2000)." }
},
{
  topic: "FILM",
id: 46,
type: "sort",
  title: "Állítsd az Al Pacino szereplésével forgatott filmeket készítésük időrendjébe!",
  items: [
    { label: "A", text: "Dick Tracy" },
    { label: "B", text: "Keresztapa" },
    { label: "C", text: "Serpico" },
    { label: "D", text: "Egy asszony illata" }
  ],
  correctOrder: ["B", "C", "A", "D"],
  learnMore: { summary: "Készítés szerint: Keresztapa (1972) ⇒ Serpico (1973) ⇒ Dick Tracy (1990) ⇒ Egy asszony illata (1992)." }
},
{
  topic: "FILM",
id: 47,
type: "sort",
  title: "Állítsd az alábbi filmsztárokat születésük időrendjébe!",
  items: [
    { label: "A", text: "James Stewart" },
    { label: "B", text: "Spencer Tracy" },
    { label: "C", text: "Al Pacino" },
    { label: "D", text: "Nicolas Cage" }
  ],
  correctOrder: ["B", "A", "C", "D"],
  learnMore: { summary: "Születés szerint: Spencer Tracy (1900) ⇒ James Stewart (1908) ⇒ Al Pacino (1940) ⇒ Nicolas Cage (1964)." }
},
{
  topic: "SPORT",
id: 48,
type: "sort",
  title: "Állítsd az alábbi magyar birkózókat olimpiai aranyérmük megszerzésének időrendjébe!",
  items: [
    { label: "A", text: "Hegedűs Csaba" },
    { label: "B", text: "Kárpáti Károly" },
    { label: "C", text: "Kozma István" },
    { label: "D", text: "Farkas Péter" }
  ],
  correctOrder: ["B", "C", "A", "D"],
  learnMore: { summary: "Aranyérmek időrendje: Kárpáti Károly (1936) ⇒ Kozma István (1964, 1968) ⇒ Hegedűs Csaba (1972) ⇒ Farkas Péter (1992)." }
},
{
  topic: "IRODALOM",
id: 49,
type: "sort",
  title: "Állítsd az alábbi szavakat a Himnuszban való elhangzásuk sorrendjébe!",
  items: [
    { label: "A", text: "balsors" },
    { label: "B", text: "jövendőt" },
    { label: "C", text: "bőséggel" },
    { label: "D", text: "ellenséggel" }
  ],
  correctOrder: ["C", "D", "A", "B"],
  learnMore: { summary: "A Himnuszban való elhangzás sorrendje: bőséggel ⇒ ellenséggel ⇒ balsors ⇒ jövendőt." }
},
{
  topic: "IRODALOM",
id: 50,
type: "sort",
  title: "Állítsd az alábbi szerzőket irodalmi Nobel-díjuk elnyerésének időrendjébe!",
  items: [
    { label: "A", text: "Kipling" },
    { label: "B", text: "Grass" },
    { label: "C", text: "Thomas Mann" },
    { label: "D", text: "Márquez" }
  ],
  correctOrder: ["A", "C", "D", "B"],
  learnMore: { summary: "Nobel-díj szerint: Kipling (1907) ⇒ Thomas Mann (1929) ⇒ Márquez (1982) ⇒ Grass (1999)." }
},
{
  topic: "OPERA",
id: 51,
type: "sort",
  title: "Állítsd az alábbi zenés műveket bemutatásuk időrendjébe!",
  items: [
    { label: "A", text: "Macskák" },
    { label: "B", text: "A víg özvegy" },
    { label: "C", text: "Aida" },
    { label: "D", text: "Don Giovanni" }
  ],
  correctOrder: ["D", "C", "B", "A"],
  learnMore: { summary: "Bemutatás szerint: Don Giovanni (1787) ⇒ Aida (1871) ⇒ A víg özvegy (1905) ⇒ Macskák (1981)." }
},
{
  topic: "BIOLÓGIA",
id: 52,
type: "sort",
  title: "Állítsd az állatokat jellegzetes élőhelyeik észak-déli sorrendjébe!",
  items: [
    { label: "A", text: "rénszarvas" },
    { label: "B", text: "óriáspanda" },
    { label: "C", text: "császárpingvin" },
    { label: "D", text: "bozótkenguru" }
  ],
  correctOrder: ["A", "B", "D", "C"],
  learnMore: { summary: "Élőhelyek észak–dél szerint: rénszarvas (sarkvidék) ⇒ óriáspanda (Kína, hegyvidék) ⇒ bozótkenguru (Ausztrália) ⇒ császárpingvin (Antarktisz)." }
},
{
  topic: "ZENE",
id: 53,
type: "sort",
  title: "Állítsd az együtteseket első nagylemezük megjelenésének időrendjébe!",
  items: [
    { label: "A", text: "Pa-Dö-Dö" },
    { label: "B", text: "KFT" },
    { label: "C", text: "Bergendy" },
    { label: "D", text: "Bestiák" }
  ],
  correctOrder: ["C", "B", "A", "D"],
  learnMore: { summary: "Nagylemezek megjelenése szerint: Bergendy (1971) ⇒ KFT (1981) ⇒ Pa-Dö-Dö (1988) ⇒ Bestiák (1997)." }
},
{
  topic: "ZENE",
id: 54,
type: "sort",
  title: "Állítsd az együtteseket első önálló nagylemezük megjelenésének időrendjébe!",
  items: [
    { label: "A", text: "Fonográf" },
    { label: "B", text: "Illés" },
    { label: "C", text: "Republic" },
    { label: "D", text: "Bikini" }
  ],
  correctOrder: ["B", "A", "D", "C"],
  learnMore: { summary: "Nagylemezek megjelenése szerint: Illés (1967) ⇒ Fonográf (1974) ⇒ Bikini (1983) ⇒ Republic (1990)." }
},
{
  topic: "TUDOMÁNY",
id: 55,
type: "sort",
  title: "Állítsd az elemeket vegyjelük ábécérendjébe!",
  items: [
    { label: "A", text: "nitrogén" },
    { label: "B", text: "bór" },
    { label: "C", text: "foszfor" },
    { label: "D", text: "kálium" }
  ],
  correctOrder: ["B", "D", "A", "C"],
  learnMore: { summary: "Vegyjelek ábécérendben: bór (B) ⇒ kálium (K) ⇒ nitrogén (N) ⇒ foszfor (P)." }
},
{
  topic: "ZENE",
id: 56,
type: "sort",
  title: "Állítsd az énekesnőket első önálló nagylemezük megjelenésének időrendjébe!",
  items: [
    { label: "A", text: "Szandi" },
    { label: "B", text: "Zoltán Erika" },
    { label: "C", text: "Cserháti Zsuzsa" },
    { label: "D", text: "Kovács Kati" }
  ],
  correctOrder: ["D", "C", "B", "A"],
  learnMore: { summary: "Nagylemezek megjelenése szerint: Kovács Kati (1969) ⇒ Cserháti Zsuzsa (1976) ⇒ Zoltán Erika (1986) ⇒ Szandi (1989)." }
},
{
  topic: "ÉPÍTÉSZET",
id: 57,
type: "sort",
  title: "Állítsd az építészet nagyjait születésük időrendjébe!",
  items: [
    { label: "A", text: "Gustave Eiffel" },
    { label: "B", text: "Le Corbusier" },
    { label: "C", text: "Imhotep" },
    { label: "D", text: "Michelangelo" }
  ],
  correctOrder: ["C", "D", "A", "B"],
  learnMore: { summary: "Születés szerint: Imhotep (~Kr. e. 27. század) ⇒ Michelangelo (1475) ⇒ Gustave Eiffel (1832) ⇒ Le Corbusier (1887)." }
},
{
  topic: "IRODALOM",
id: 58,
type: "sort",
  title: "Állítsd az Éva megformálta nőket időrendbe aszerint, ahogy Az ember tragédiájában megjelennek!",
  items: [
    { label: "A", text: "Izóra" },
    { label: "B", text: "Borbála" },
    { label: "C", text: "egy eszkimó neje" },
    { label: "D", text: "egy rabszolga neje" }
  ],
  correctOrder: ["D", "A", "B", "C"],
  learnMore: { summary: "Megjelenés szerint: egy rabszolga neje ⇒ Izóra ⇒ Borbála ⇒ egy eszkimó neje." }
},
{
  topic: "IRODALOM",
id: 59,
type: "sort",
  title: "Állítsd az irodalmi hősöket 'születésük' időrendjébe!",
  items: [
    { label: "A", text: "Nemecsek Ernő" },
    { label: "B", text: "Baradlay Richárd" },
    { label: "C", text: "Nyilas Misi" },
    { label: "D", text: "Vitay Georgina" }
  ],
  correctOrder: ["B", "A", "C", "D"],
  learnMore: { summary: "Irodalmi 'születés' szerint: Baradlay Richárd (1853 – Jókai: A kőszívű ember fiai) ⇒ Nemecsek Ernő (1907 – Molnár: A Pál utcai fiúk) ⇒ Nyilas Misi (1916 – Móricz: Légy jó mindhalálig) ⇒ Vitay Georgina (1947 – Szabó Magda: Abigél)." }
},
{
  topic: "TÖRTÉNELEM",
id: 60,
type: "sort",
  title: "Állítsd az ismert 20. századi politikusnőket születésük időrendjébe!",
  items: [
    { label: "A", text: "Margaret Thatcher" },
    { label: "B", text: "Indira Gandhi" },
    { label: "C", text: "Rosa Luxemburg" },
    { label: "D", text: "Benazir Bhutto" }
  ],
  correctOrder: ["C", "B", "A", "D"],
  learnMore: { summary: "Születés szerint: Rosa Luxemburg (1871) ⇒ Indira Gandhi (1917) ⇒ Margaret Thatcher (1925) ⇒ Benazir Bhutto (1953)." }
},
{
  topic: "FÖLDRAJZ",
id: 61,
type: "sort",
  title: "Állítsd az Orient Expressz egykori állomásait kelet-nyugati sorrendbe!",
  items: [
    { label: "A", text: "Bécs" },
    { label: "B", text: "München" },
    { label: "C", text: "Bukarest" },
    { label: "D", text: "Budapest" }
  ],
  correctOrder: ["C", "D", "A", "B"],
  learnMore: { summary: "Kelet–nyugat sorrendben: Bukarest ⇒ Budapest ⇒ Bécs ⇒ München." }
},
{
  topic: "FÖLDRAJZ",
id: 62,
type: "sort",
  title: "Állítsd az országokat az Egyenlítőtől való távolságuk sorrendjébe! Kezd a legközelebbivel!",
  items: [
    { label: "A", text: "Kenya" },
    { label: "B", text: "Törökország" },
    { label: "C", text: "Jemen" },
    { label: "D", text: "Grúzia" }
  ],
  correctOrder: ["A", "C", "B", "D"],
  learnMore: { summary: "Egyenlítőhöz viszonyítva: Kenya ⇒ Jemen ⇒ Törökország ⇒ Grúzia." }
},
{
  topic: "SPORT",
id: 63,
type: "sort",
  title: "Állítsd az országokat első labdarúgó világbajnoki aranyérmük megszerzésének időrendjébe!",
  items: [
    { label: "A", text: "Olaszország" },
    { label: "B", text: "Franciaország" },
    { label: "C", text: "Brazília" },
    { label: "D", text: "Argentína" }
  ],
  correctOrder: ["A", "C", "D", "B"],
  learnMore: { summary: "Világbajnoki aranyérmek szerint: Olaszország (1934) ⇒ Brazília (1958) ⇒ Argentína (1978) ⇒ Franciaország (1998)." }
},
{
  topic: "FILM",
id: 64,
type: "sort",
  title: "Állítsd az Oscar-díjas filmeket díjazásuk időrendjébe!",
  items: [
    { label: "A", text: "Rocky" },
    { label: "B", text: "A nagy balhé" },
    { label: "C", text: "Farkasokkal táncoló" },
    { label: "D", text: "Az angol beteg" }
  ],
  correctOrder: ["B", "A", "C", "D"],
  learnMore: { summary: "Oscar-díj szerint: A nagy balhé (1973) ⇒ Rocky (1976) ⇒ Farkasokkal táncoló (1990) ⇒ Az angol beteg (1996)." }
},
{
  topic: "TUDOMÁNY",
id: 65,
type: "sort",
  title: "Állítsd az űreszközöket első fellövésük időrendjébe!",
  items: [
    { label: "A", text: "Vosztok-1 űrhajó" },
    { label: "B", text: "Szputnyik-1 műhold" },
    { label: "C", text: "Apollo-11 űrhajó" },
    { label: "D", text: "Columbia űrrepülőgép" }
  ],
  correctOrder: ["B", "A", "C", "D"],
  learnMore: { summary: "Fellövés szerint: Szputnyik-1 (1957) ⇒ Vosztok-1 (1961) ⇒ Apollo-11 (1969) ⇒ Columbia (1981)." }
},
{
  topic: "FILM",
id: 66,
type: "sort",
  title: "Állítsd bemutatásuk időrendjébe a következő Oscar-díjas filmeket! Kezd a legkorábbival!",
  items: [
    { label: "A", text: "Ben Hur" },
    { label: "B", text: "Biciklitolvajok" },
    { label: "C", text: "Titanic" },
    { label: "D", text: "Esőember" }
  ],
  correctOrder: ["B", "A", "D", "C"],
  learnMore: { summary: "Bemutatás szerint: Biciklitolvajok (1948) ⇒ Ben Hur (1959) ⇒ Esőember (1988) ⇒ Titanic (1997)." }
},
{
  topic: "FILM",
id: 67,
type: "sort",
  title: "Állítsd bemutatásuk időrendjébe a Robert Redford főszereplésével készült filmeket!",
  items: [
    { label: "A", text: "A nagy balhé" },
    { label: "B", text: "Tisztességtelen ajánlat" },
    { label: "C", text: "Távol Afrikától" },
    { label: "D", text: "A suttogó" }
  ],
  correctOrder: ["A", "C", "B", "D"],
  learnMore: { summary: "Bemutatás szerint: A nagy balhé (1973) ⇒ Távol Afrikától (1985) ⇒ Tisztességtelen ajánlat (1993) ⇒ A suttogó (1998)." }
},
{
  topic: "OPERA",
id: 68,
type: "sort",
  title: "Állítsd bemutatásuk időrendjébe az alábbi operákat! Kezd a legkorábbival!",
  items: [
    { label: "A", text: "A kékszakállú herceg vára" },
    { label: "B", text: "Don Giovanni" },
    { label: "C", text: "Orfeo" },
    { label: "D", text: "Traviata" }
  ],
  correctOrder: ["C", "B", "D", "A"],
  learnMore: { summary: "Bemutatás szerint: Orfeo (1607) ⇒ Don Giovanni (1787) ⇒ Traviata (1853) ⇒ A kékszakállú herceg vára (1918)." }
},
{
  topic: "FILM",
id: 69,
type: "sort",
  title: "Állítsd bemutatásuk időrendjébe Steven Spielberg filmjeit!",
  items: [
    { label: "A", text: "E.T." },
    { label: "B", text: "Hook" },
    { label: "C", text: "Jurrasic Park" },
    { label: "D", text: "Cápa" }
  ],
  correctOrder: ["D", "A", "B", "C"],
  learnMore: { summary: "Bemutatás szerint: Cápa (1975) ⇒ E.T. (1982) ⇒ Hook (1991) ⇒ Jurassic Park (1993)." }
},
{
  topic: "FILM",
id: 70,
type: "sort",
  title: "Állítsd bemutatásuk sorrendjébe az alábbi magyar filmeket! Kezd a legkorábbival!",
  items: [
    { label: "A", text: "Körhinta" },
    { label: "B", text: "Halálos tavasz" },
    { label: "C", text: "A tizedes meg a többiek" },
    { label: "D", text: "Redl ezredes" }
  ],
  correctOrder: ["B", "A", "C", "D"],
  learnMore: { summary: "Bemutatás szerint: Halálos tavasz (1939) ⇒ Körhinta (1956) ⇒ A tizedes meg a többiek (1965) ⇒ Redl ezredes (1985)." }
},
{
  topic: "FILM",
id: 71,
type: "sort",
  title: "Állítsd cselekményük történelmi időrendjébe az alábbi magyar filmeket!",
  items: [
    { label: "A", text: "Rákóczi hadnagya" },
    { label: "B", text: "A törökfejes kopja" },
    { label: "C", text: "Déryné" },
    { label: "D", text: "Redl ezredes" }
  ],
  correctOrder: ["B", "A", "C", "D"],
  learnMore: { summary: "Cselekmény szerint: A törökfejes kopja (16. század) ⇒ Rákóczi hadnagya (18. század) ⇒ Déryné (19. század) ⇒ Redl ezredes (20. század eleje)." }
},
{
  topic: "FÖLDRAJZ",
id: 72,
type: "sort",
  title: "Állítsd csökkenő sorrendbe a földrészeket legmagasabb pontjuk alapján!",
  items: [
    { label: "A", text: "Európa" },
    { label: "B", text: "Ázsia" },
    { label: "C", text: "Afrika" },
    { label: "D", text: "Dél-Amerika" }
  ],
  correctOrder: ["B", "D", "C", "A"],
  learnMore: { summary: "Legmagasabb pont szerint: Ázsia (Mount Everest, 8 848 m) ⇒ Dél-Amerika (Aconcagua, 6 961 m) ⇒ Afrika (Kilimandzsáró, 5 895 m) ⇒ Európa (Mont Blanc, 4 810 m)." }
},
{
  topic: "FÖLDRAJZ",
id: 73,
type: "sort",
  title: "Állítsd csökkenő sorrendbe a tavakat területük nagysága szerint!",
  items: [
    { label: "A", text: "Kaszpi-tenger" },
    { label: "B", text: "Bajkál-tó" },
    { label: "C", text: "Balaton" },
    { label: "D", text: "Huron-tó" }
  ],
  correctOrder: ["A", "D", "B", "C"],
  learnMore: { summary: "Terület szerint: Kaszpi-tenger (~371 000 km²) ⇒ Huron-tó (~59 600 km²) ⇒ Bajkál-tó (~31 500 km²) ⇒ Balaton (~600 km²)." }
},
{
  topic: "SPORT",
id: 74,
type: "sort",
  title: "Állítsd csökkenő sorrendbe az alábbi országokat Sydneyben nyert aranyérmeik száma szerint!",
  items: [
    { label: "A", text: "Ausztrália" },
    { label: "B", text: "Kína" },
    { label: "C", text: "Románia" },
    { label: "D", text: "Magyarország" }
  ],
  correctOrder: ["B", "A", "C", "D"],
  learnMore: { summary: "Sydney 2000 aranyérmek szerint: Kína (28) ⇒ Ausztrália (16) ⇒ Románia (11) ⇒ Magyarország (8)." }
},
{
  topic: "TUDOMÁNY",
id: 75,
type: "sort",
  title: "Állítsd csökkenő sorrendbe az égitesteket átmérőjük hossza szerint!",
  items: [
    { label: "A", text: "Hold" },
    { label: "B", text: "Nap" },
    { label: "C", text: "Föld" },
    { label: "D", text: "Mars" }
  ],
  correctOrder: ["B", "C", "D", "A"],
  learnMore: { summary: "Átmérő szerint: Nap (~1 392 000 km) ⇒ Föld (~12 742 km) ⇒ Mars (~6 779 km) ⇒ Hold (~3 474 km)." }
},
{
  topic: "FILM",
id: 76,
type: "sort",
  title: "Állítsd díjazásuk időrendjébe a cannes-i filmfesztivál Arany Pálmás filmjeit!",
  items: [
    { label: "A", text: "Taxisofőr" },
    { label: "B", text: "M.A.S.H." },
    { label: "C", text: "Egy férfi és egy nő" },
    { label: "D", text: "Az édes élet" }
  ],
  correctOrder: ["D", "C", "B", "A"],
  learnMore: { summary: "Díjazás szerint: Az édes élet (1960) ⇒ Egy férfi és egy nő (1966) ⇒ M.A.S.H. (1970) ⇒ Taxisofőr (1976)." }
},
{
  topic: "IRODALOM",
id: 77,
type: "sort",
  title: "Állítsd életkoruk szerint sorba A kőszívű ember fiai című regény szereplőit! Kezd a legfiatalabbal!",
  items: [
    { label: "A", text: "Baradlay Kazimir" },
    { label: "B", text: "Baradlay Richárd" },
    { label: "C", text: "Baradlay Ödön" },
    { label: "D", text: "Baradlay Jenő" }
  ],
  correctOrder: ["D", "B", "C", "A"],
  learnMore: { summary: "Életkor szerint: Baradlay Jenő ⇒ Baradlay Richárd ⇒ Baradlay Ödön ⇒ Baradlay Kazimir." }
},
{
  topic: "TUDOMÁNY",
id: 78,
type: "sort",
  title: "Állítsd első űrrepülésük időrendjébe az alábbi űrhajósokat!",
  items: [
    { label: "A", text: "Farkas Bertalan" },
    { label: "B", text: "Neil Armstrong" },
    { label: "C", text: "Jurij Gagarin" },
    { label: "D", text: "John Glenn" }
  ],
  correctOrder: ["C", "D", "B", "A"],
  learnMore: { summary: "Űrrepülés szerint: Jurij Gagarin (1961) ⇒ John Glenn (1962) ⇒ Neil Armstrong (1969) ⇒ Farkas Bertalan (1980)." }
},
{
  topic: "MAGYARORSZÁG",
id: 79,
type: "sort",
  title: "Állítsd emelkedő sorrendbe a magyar városokat az ott haladó országos főútvonal száma szerint!",
  items: [
    { label: "A", text: "Vác" },
    { label: "B", text: "Pécs" },
    { label: "C", text: "Veszprém" },
    { label: "D", text: "Debrecen" }
  ],
  correctOrder: ["A", "D", "B", "C"],
  learnMore: { summary: "Főútvonalak száma szerint: Vác (2-es főút) ⇒ Debrecen (4-es főút) ⇒ Pécs (6-os főút) ⇒ Veszprém (8-as főút)." }
},
{
  topic: "OPERA",
id: 80,
type: "sort",
  title: "Állítsd emelkedő sorrendbe egy oktávon belül a C-dúr skála hangjait!",
  items: [
    { label: "A", text: "e" },
    { label: "B", text: "a" },
    { label: "C", text: "d" },
    { label: "D", text: "h" }
  ],
  correctOrder: ["C", "A", "B", "D"],
  learnMore: { summary: "C-dúr skála hangjai egy oktávon belül: d ⇒ e ⇒ a ⇒ h." }
},
{
  topic: "SPORT",
id: 81,
type: "sort",
  title: "Állítsd érmeik megszerzésének időrendjébe a sydneyi olimpia magyar aranyérmeseit!",
  items: [
    { label: "A", text: "Csollány Szilveszter" },
    { label: "B", text: "Nagy Tímea" },
    { label: "C", text: "Kolonics György" },
    { label: "D", text: "Kovács Ágnes" }
  ],
  correctOrder: ["B", "D", "A", "C"],
  learnMore: { summary: "Sydneyi olimpia aranyérmei: Nagy Tímea (vívás) ⇒ Kovács Ágnes (úszás) ⇒ Csollány Szilveszter (torna) ⇒ Kolonics György (kenu)." }
},
{
  topic: "JÁTÉK",
id: 82,
type: "sort",
  title: "Állítsd értékük emelkedő sorrendjébe a magyar kártya lapjait! Kezd a legkisebbel!",
  items: [
    { label: "A", text: "felső" },
    { label: "B", text: "ász" },
    { label: "C", text: "alsó" },
    { label: "D", text: "király" }
  ],
  correctOrder: ["C", "A", "D", "B"],
  learnMore: { summary: "Érték szerint: alsó ⇒ felső ⇒ király ⇒ ász." }
},
{
  topic: "BIOLÓGIA",
id: 83,
type: "sort",
  title: "Állítsd fejlettségi sorrendbe az alábbi állatokat! Kezd a legfejletlenebbel!",
  items: [
    { label: "A", text: "szalamandra" },
    { label: "B", text: "osztriga" },
    { label: "C", text: "kolibri" },
    { label: "D", text: "fóka" }
  ],
  correctOrder: ["B", "A", "C", "D"],
  learnMore: { summary: "Fejlettség szerint: osztriga (puhatestű) ⇒ szalamandra (kétéltű) ⇒ kolibri (madár) ⇒ fóka (emlős)." }
},
{
  topic: "BIOLÓGIA",
id: 84,
type: "sort",
  title: "Állítsd fejlettségi sorrende az alábbi gerinces állatokat! Kezd a legfejlettlenebbel!",
  items: [
    { label: "A", text: "halak" },
    { label: "B", text: "madarak" },
    { label: "C", text: "hüllők" },
    { label: "D", text: "kétéltűek" }
  ],
  correctOrder: ["A", "D", "C", "B"],
  learnMore: { summary: "Fejlettségi sorrendben: halak ⇒ kétéltűek ⇒ hüllők ⇒ madarak." }
},
{
  topic: "TECHNIKA",
id: 85,
type: "sort",
  title: "Állítsd feltalálásuk sorrendjébe az alábbi találmányokat! Kezd a legrégebbivel!",
  items: [
    { label: "A", text: "telefon" },
    { label: "B", text: "televízió" },
    { label: "C", text: "gőzmozdony" },
    { label: "D", text: "távírókészülék" }
  ],
  correctOrder: ["C", "D", "A", "B"],
  learnMore: { summary: "Feltalálásuk szerint: gőzmozdony (1804) ⇒ távírókészülék (1837) ⇒ telefon (1876) ⇒ televízió (1927)." }
},
{
  topic: "TÖRTÉNELEM",
id: 86,
type: "sort",
  title: "Állítsd férjük beiktatásának időrendjébe a híres First Ladyket!",
  items: [
    { label: "A", text: "Nancy Reagan" },
    { label: "B", text: "Barbara Bush" },
    { label: "C", text: "Jacqueline Kennedy" },
    { label: "D", text: "Hillary Clinton" }
  ],
  correctOrder: ["C", "A", "B", "D"],
  learnMore: { summary: "Beiktatás szerint: Jacqueline Kennedy (1961) ⇒ Nancy Reagan (1981) ⇒ Barbara Bush (1989) ⇒ Hillary Clinton (1993)." }
},
{
  topic: "FILM",
id: 87,
type: "sort",
  title: "Állítsd forgatásuk időrendjébe a Marlon Brando szereplésével készült filmeket!",
  items: [
    { label: "A", text: "A vágy villamosa" },
    { label: "B", text: "Oroszlánkölykök" },
    { label: "C", text: "Apokalipszis most" },
    { label: "D", text: "A keresztapa" }
  ],
  correctOrder: ["A", "B", "D", "C"],
  learnMore: { summary: "Forgatás szerint: A vágy villamosa (1951) ⇒ Oroszlánkölykök (1958) ⇒ A keresztapa (1972) ⇒ Apokalipszis most (1979)." }
},
{
  topic: "FILM",
id: 88,
type: "sort",
  title: "Állítsd forgatásuk időrendjébe az Arnold Schwarzenegger főszereplésével készült filmeket!",
  items: [
    { label: "A", text: "Terminátor" },
    { label: "B", text: "Ikrek" },
    { label: "C", text: "Conan, a barbár" },
    { label: "D", text: "Az utolsó akcióhős" }
  ],
  correctOrder: ["C", "A", "B", "D"],
  learnMore: { summary: "Forgatás szerint: Conan, a barbár (1982) ⇒ Terminátor (1984) ⇒ Ikrek (1988) ⇒ Az utolsó akcióhős (1993)." }
},
{
  topic: "TÖRTÉNELEM",
id: 89,
type: "sort",
  title: "Állítsd hivatalba lépésük időrendjébe a következő magyar miniszterelnököket! Kezd a legkorábbival!",
  items: [
    { label: "A", text: "Tisza Kálmán" },
    { label: "B", text: "Bethlen István" },
    { label: "C", text: "Nagy Imre" },
    { label: "D", text: "Batthyány Lajos" }
  ],
  correctOrder: ["D", "A", "B", "C"],
  learnMore: { summary: "Hivatalba lépés szerint: Batthyány Lajos (1848) ⇒ Tisza Kálmán (1875) ⇒ Bethlen István (1921) ⇒ Nagy Imre (1953)." }
},
{
  topic: "TÖRTÉNELEM",
id: 90,
type: "sort",
  title: "Állítsd hivatalba lépésük időrendjébe a közoktatással foglalkozó minisztereket!",
  items: [
    { label: "A", text: "Eötvös József" },
    { label: "B", text: "Fodor Gábor" },
    { label: "C", text: "Pokorni Zoltán" },
    { label: "D", text: "Mádl Ferenc" }
  ],
  correctOrder: ["A", "D", "B", "C"],
  learnMore: { summary: "Hivatalba lépés szerint: Eötvös József (1848) ⇒ Mádl Ferenc (1993) ⇒ Fodor Gábor (1994) ⇒ Pokorni Zoltán (1998)." }
},
{
  topic: "VALLÁS",
id: 91,
type: "sort",
  title: "Állítsd időrendbe a Biblia eseményeit!",
  items: [
    { label: "A", text: "a bűnbeesés" },
    { label: "B", text: "Ádám teremtése" },
    { label: "C", text: "Jerikó elfoglalása" },
    { label: "D", text: "Salamon ítélete" }
  ],
  correctOrder: ["B", "A", "C", "D"],
  learnMore: { summary: "Bibliai események időrendje: Ádám teremtése ⇒ bűnbeesés ⇒ Jerikó elfoglalása ⇒ Salamon ítélete." }
},
{
  topic: "VALLÁS",
id: 92,
type: "sort",
  title: "Állítsd időrendbe a Bibliában szereplő királyokat!",
  items: [
    { label: "A", text: "Dávid" },
    { label: "B", text: "Saul" },
    { label: "C", text: "Salamon" },
    { label: "D", text: "Heródes" }
  ],
  correctOrder: ["B", "A", "C", "D"],
  learnMore: { summary: "Bibliai királyok időrendje: Saul ⇒ Dávid ⇒ Salamon ⇒ Heródes." }
},
{
  topic: "ÁLTALÁNOS",
id: 93,
type: "sort",
  title: "Állítsd időrendbe a fagyosszentek napjait! Kezd az év elejéhez legközelebbivel!",
  items: [
    { label: "A", text: "Orbán" },
    { label: "B", text: "Binifác" },
    { label: "C", text: "Pongrác" },
    { label: "D", text: "Szervác" }
  ],
  correctOrder: ["C", "D", "B", "A"],
  learnMore: { summary: "Fagyosszentek napjai: Pongrác (május 12.) ⇒ Szervác (május 13.) ⇒ Bonifác (május 14.) ⇒ Orbán (május 25.)." }
},
{
  topic: "TÖRTÉNELEM",
id: 94,
type: "sort",
  title: "Állítsd időrendbe a felsorolt magyar csatákat!",
  items: [
    { label: "A", text: "kenyérmezei csata" },
    { label: "B", text: "muhi csata" },
    { label: "C", text: "segesvári csata" },
    { label: "D", text: "mohácsi csata" }
  ],
  correctOrder: ["B", "A", "D", "C"],
  learnMore: { summary: "Csaták időrendje: muhi csata (1241) ⇒ kenyérmezei csata (1479) ⇒ mohácsi csata (1526) ⇒ segesvári csata (1849)." }
},
{
  topic: "OPERA",
id: 95,
type: "sort",
  title: "Állítsd időrendbe a felsorolt operákat! Kezd a legrégebbivel!",
  items: [
    { label: "A", text: "Traviata" },
    { label: "B", text: "Orfeo" },
    { label: "C", text: "A kékszakállú herceg vára" },
    { label: "D", text: "A varázsfuvola" }
  ],
  correctOrder: ["B", "D", "A", "C"],
  learnMore: { summary: "Operák bemutatása szerint: Orfeo (1607) ⇒ A varázsfuvola (1791) ⇒ Traviata (1853) ⇒ A kékszakállú herceg vára (1918)." }
},
{
  topic: "TÖRTÉNELEM",
id: 96,
type: "sort",
  title: "Állítsd időrendbe a híres törvényalkotókat!",
  items: [
    { label: "A", text: "Hammurapi" },
    { label: "B", text: "Szent István" },
    { label: "C", text: "Drakhón" },
    { label: "D", text: "Werbőczy" }
  ],
  correctOrder: ["A", "C", "B", "D"],
  learnMore: { summary: "Törvényalkotók időrendje: Hammurapi (~Kr. e. 1750) ⇒ Drakhón (~Kr. e. 621) ⇒ Szent István (~1000) ⇒ Werbőczy (1514)." }
},
{
  topic: "TÖRTÉNELEM",
id: 97,
type: "sort",
  title: "Állítsd időrendbe a II. világháború eseményeit!",
  items: [
    { label: "A", text: "az atombomba bevetése" },
    { label: "B", text: "Párizs megszállása" },
    { label: "C", text: "Lengyelország lerohanása" },
    { label: "D", text: "a normandiai partraszállás" }
  ],
  correctOrder: ["C", "B", "D", "A"],
  learnMore: { summary: "II. világháborús események: Lengyelország lerohanása (1939) ⇒ Párizs megszállása (1940) ⇒ normandiai partraszállás (1944) ⇒ atombomba bevetése (1945)." }
},
{
  topic: "TÖRTÉNELEM",
id: 98,
type: "sort",
  title: "Állítsd időrendbe a következő földrajzi felfedezőket!",
  items: [
    { label: "A", text: "David Livingstone" },
    { label: "B", text: "Roald Amundsen" },
    { label: "C", text: "James Cook" },
    { label: "D", text: "Ferdinand Magellán" }
  ],
  correctOrder: ["D", "C", "A", "B"],
  learnMore: { summary: "Felfedezők időrendje: Ferdinand Magellán (1480–1521) ⇒ James Cook (1728–1779) ⇒ David Livingstone (1813–1873) ⇒ Roald Amundsen (1872–1928)." }
},
{
  topic: "SPORT",
id: 99,
type: "sort",
  title: "Állítsd időrendbe a labdarúgó világbajnokságok helyszíneit!",
  items: [
    { label: "A", text: "Spanyolország" },
    { label: "B", text: "NSZK" },
    { label: "C", text: "USA" },
    { label: "D", text: "Svájc" }
  ],
  correctOrder: ["D", "B", "A", "C"],
  learnMore: { summary: "Világbajnokságok helyszínei: Svájc (1954) ⇒ NSZK (1974) ⇒ Spanyolország (1982) ⇒ USA (1994)." }
},
{
  topic: "FILM",
id: 100,
type: "sort",
  title: "Állítsd időrendbe a magyar filmeket aszerint, hogy melyik korban játszódnak!",
  items: [
    { label: "A", text: "Semmelwies" },
    { label: "B", text: "Rab Ráby" },
    { label: "C", text: "Julianus" },
    { label: "D", text: "Csinibaba" }
  ],
  correctOrder: ["C", "B", "A", "D"],
  learnMore: { summary: "Korok szerint: Julianus (13. század) ⇒ Rab Ráby (18. század) ⇒ Semmelweis (19. század) ⇒ Csinibaba (1960-as évek)." }
},
{
  topic: "FILM",
id: 101,
type: "sort",
  title: "Állítsd időrendbe a magyar filmeket aszerint, melyik korban játszódnak!",
  items: [
    { label: "A", text: "Ezek a fiatalok" },
    { label: "B", text: "Akli Miklós" },
    { label: "C", text: "Csínom Palkó" },
    { label: "D", text: "Talpalatnyi föld" }
  ],
  correctOrder: ["C", "B", "D", "A"],
  learnMore: { summary: "Történelmi kor szerint: Csínom Palkó (18. század) ⇒ Akli Miklós (19. század) ⇒ Talpalatnyi föld (20. század eleje) ⇒ Ezek a fiatalok (1960-as évek)." }
},
{
  topic: "SPORT",
id: 102,
type: "sort",
  title: "Állítsd időrendbe a magyar labdarúgás legendás gólkirályait!",
  items: [
    { label: "A", text: "Zsengellér Gyula" },
    { label: "B", text: "Dunai II Antal" },
    { label: "C", text: "Schlosser Imre" },
    { label: "D", text: "Kocsis Sándor" }
  ],
  correctOrder: ["C", "A", "D", "B"],
  learnMore: { summary: "Születés szerint: Schlosser Imre (1889) ⇒ Zsengellér Gyula (1915) ⇒ Kocsis Sándor (1929) ⇒ Dunai II Antal (1943)." }
},
{
  topic: "KÉPZŐMŰVÉSZET",
id: 103,
type: "sort",
  title: "Állítsd időrendbe az alábbi festőket! Kezd a legrégebbivel!",
  items: [
    { label: "A", text: "Van Gogh" },
    { label: "B", text: "Picasso" },
    { label: "C", text: "Goya" },
    { label: "D", text: "Giotto" }
  ],
  correctOrder: ["D", "C", "A", "B"],
  learnMore: { summary: "Festők időrendben: Giotto (1267–1337) ⇒ Goya (1746–1828) ⇒ Van Gogh (1853–1890) ⇒ Picasso (1881–1973)." }
},
{
  topic: "VALLÁS",
id: 104,
type: "sort",
  title: "Állítsd időrendbe az Újszövetség alábbi eseményeit!",
  items: [
    { label: "A", text: "Angyali üdvözlet" },
    { label: "B", text: "Utolsó vacsora" },
    { label: "C", text: "Hegyi beszéd" },
    { label: "D", text: "Jézus keresztre feszítése" }
  ],
  correctOrder: ["A", "C", "B", "D"],
  learnMore: { summary: "Újszövetségi események időrendje: Angyali üdvözlet ⇒ Hegyi beszéd ⇒ Utolsó vacsora ⇒ Jézus keresztre feszítése." }
},
{
  topic: "IRODALOM",
id: 105,
type: "sort",
  title: "Állítsd időrendbe Phileas Fogg, a Verne-hős nyolcvan napos utazásának állomásait!",
  items: [
    { label: "A", text: "San Francisco" },
    { label: "B", text: "Szuez" },
    { label: "C", text: "Bombay" },
    { label: "D", text: "New York" }
  ],
  correctOrder: ["B", "C", "A", "D"],
  learnMore: { summary: "Utazási sorrend: Szuez ⇒ Bombay ⇒ San Francisco ⇒ New York." }
},
{
  topic: "FILM",
id: 106,
type: "sort",
  title: "Állítsd időrendbe Szabó István filmjeit! Kezd a legkorábbival!",
  items: [
    { label: "A", text: "Mephisto" },
    { label: "B", text: "Álmodozások kora" },
    { label: "C", text: "Szerelmesfilm" },
    { label: "D", text: "A napfény íze" }
  ],
  correctOrder: ["B", "C", "A", "D"],
  learnMore: { summary: "Szabó István filmjei: Álmodozások kora (1964) ⇒ Szerelmesfilm (1970) ⇒ Mephisto (1981) ⇒ A napfény íze (1999)." }
},
{
  topic: "ZENE",
id: 107,
type: "sort",
  title: "Állítsd időrendbe Szörényi Levente műveit!",
  items: [
    { label: "A", text: "István, a király" },
    { label: "B", text: "Kőműves Kelemen" },
    { label: "C", text: "Attila, Isten kardja" },
    { label: "D", text: "A kiátkozott" }
  ],
  correctOrder: ["B", "A", "C", "D"],
  learnMore: { summary: "Művek időrendje: Kőműves Kelemen (1973) ⇒ István, a király (1983) ⇒ Attila, Isten kardja (1993) ⇒ A kiátkozott (2006)." }
},
{
  topic: "TÖRTÉNELEM",
id: 108,
type: "sort",
  title: "Állítsd időrendi sorrendbe a felsorolt háborúkat! Kezd a legkorábbival!",
  items: [
    { label: "A", text: "a százéves háború" },
    { label: "B", text: "a peloponnészoszi háború" },
    { label: "C", text: "a harmincéves háború" },
    { label: "D", text: "az első világháború" }
  ],
  correctOrder: ["B", "A", "C", "D"],
  learnMore: { summary: "Háborúk időrendje: peloponnészoszi háború (Kr. e. 431–404) ⇒ százéves háború (1337–1453) ⇒ harmincéves háború (1618–1648) ⇒ első világháború (1914–1918)." }
},
{
  topic: "SPORT",
id: 109,
type: "sort",
  title: "Állítsd időrendi sorrendbe a felsorolt női olimpiai bajnok vívóinkat! Kezd a legkorábbival!",
  items: [
    { label: "A", text: "Tordasi Ildikó" },
    { label: "B", text: "Elek Ilona" },
    { label: "C", text: "Nagy Tímea" },
    { label: "D", text: "Rejtő Ildikó" }
  ],
  correctOrder: ["B", "D", "A", "C"],
  learnMore: { summary: "Olimpiai aranyérmek időrendje: Elek Ilona (1936) ⇒ Rejtő Ildikó (1964) ⇒ Tordasi Ildikó (1976) ⇒ Nagy Tímea (2000, 2004)." }
},
{
  topic: "SZÍNHÁZ",
id: 110,
type: "sort",
  title: "Állítsd időrendi sorrendbe a felsorolt zenés színpadi műveket! Kezd a legkorábbival!",
  items: [
    { label: "A", text: "Macskák" },
    { label: "B", text: "Csárdáskirálynő" },
    { label: "C", text: "Hair" },
    { label: "D", text: "Koldusopera" }
  ],
  correctOrder: ["B", "D", "C", "A"],
  learnMore: { summary: "Bemutatás szerint: Csárdáskirálynő (1915) ⇒ Koldusopera (1928) ⇒ Hair (1967) ⇒ Macskák (1981)." }
},
{
  topic: "TÖRTÉNELEM",
id: 111,
type: "sort",
  title: "Állítsd időrendi sorrendbe a következő Árpád-házi királyokat!",
  items: [
    { label: "A", text: "III. András" },
    { label: "B", text: "IV. Béla" },
    { label: "C", text: "Szent István" },
    { label: "D", text: "Könyves Kálmán" }
  ],
  correctOrder: ["C", "D", "B", "A"],
  learnMore: { summary: "Uralkodás szerint: Szent István (1000–1038) ⇒ Könyves Kálmán (1095–1116) ⇒ IV. Béla (1235–1270) ⇒ III. András (1290–1301)." }
},
{
  topic: "FILM",
id: 112,
type: "sort",
  title: "Állítsd időrendi sorrendbe a következő magyar filmvígjátékokat! Kezd a legkorábbival!",
  items: [
    { label: "A", text: "A tizedes meg a többiek" },
    { label: "B", text: "Állami áruház" },
    { label: "C", text: "Halálos tavasz" },
    { label: "D", text: "Csinibaba" }
  ],
  correctOrder: ["C", "B", "A", "D"],
  learnMore: { summary: "Bemutatás szerint: Halálos tavasz (1939) ⇒ Állami áruház (1952) ⇒ A tizedes meg a többiek (1965) ⇒ Csinibaba (1997)." }
},
{
  topic: "TÖRTÉNELEM",
id: 113,
type: "sort",
  title: "Állítsd időrendi sorrendbe a következő magyar hadvezéreket! Kezd a legkorábbival!",
  items: [
    { label: "A", text: "Zrínyi Miklós" },
    { label: "B", text: "Vak Bottyán" },
    { label: "C", text: "Bem József" },
    { label: "D", text: "Hunyadi János" }
  ],
  correctOrder: ["D", "A", "B", "C"],
  learnMore: { summary: "Születés szerint: Hunyadi János (1407) ⇒ Zrínyi Miklós (1620) ⇒ Vak Bottyán (1643) ⇒ Bem József (1794)." }
},
{
  topic: "SPORT",
id: 114,
type: "sort",
  title: "Állítsd időrendi sorrendbe a következő magyar olimpiai bajnok tornászokat!",
  items: [
    { label: "A", text: "Magyar Zoltán" },
    { label: "B", text: "Borkai Zsolt" },
    { label: "C", text: "Csollány Szilveszter" },
    { label: "D", text: "Pelle István" }
  ],
  correctOrder: ["D", "A", "B", "C"],
  learnMore: { summary: "Olimpiai bajnokká válás szerint: Pelle István (1932) ⇒ Magyar Zoltán (1976, 1980) ⇒ Borkai Zsolt (1988) ⇒ Csollány Szilveszter (2000)." }
},
{
  topic: "SPORT",
id: 115,
type: "sort",
  title: "Állítsd időrendi sorrendbe a következő olimpiai bajnok magyar úszókat! Kezd a legkorábbival!",
  items: [
    { label: "A", text: "Hajós Alfréd" },
    { label: "B", text: "Darnyi Tamás" },
    { label: "C", text: "Csík Ferenc" },
    { label: "D", text: "Halmay Zoltán" }
  ],
  correctOrder: ["A", "D", "C", "B"],
  learnMore: { summary: "Olimpiai bajnokká válás szerint: Hajós Alfréd (1896) ⇒ Halmay Zoltán (1904) ⇒ Csík Ferenc (1936) ⇒ Darnyi Tamás (1988, 1992)." }
},
{
  topic: "SPORT",
id: 116,
type: "sort",
  title: "Állítsd időrendi sorrendbe a következő olimpiai játékokat!",
  items: [
    { label: "A", text: "müncheni olimpia" },
    { label: "B", text: "tokiói olimpia" },
    { label: "C", text: "római olimpia" },
    { label: "D", text: "mexikói olimpia" }
  ],
  correctOrder: ["C", "B", "D", "A"],
  learnMore: { summary: "Olimpiák időrendben: római (1960) ⇒ tokiói (1964) ⇒ mexikói (1968) ⇒ müncheni (1972)." }
},
{
  topic: "KÉPZŐMŰVÉSZET",
id: 117,
type: "sort",
  title: "Állítsd időrendi sorrendbe a következő szobrászokat! Kezd a legrégebbivel!",
  items: [
    { label: "A", text: "Henry Moore" },
    { label: "B", text: "Michelangelo" },
    { label: "C", text: "Rodin" },
    { label: "D", text: "Müron" }
  ],
  correctOrder: ["D", "B", "C", "A"],
  learnMore: { summary: "Születés szerint: Müron (~Kr. e. 5. század) ⇒ Michelangelo (1475) ⇒ Rodin (1840) ⇒ Henry Moore (1898)." }
},
{
  topic: "TÖRTÉNELEM",
id: 118,
type: "sort",
  title: "Állítsd időrendi sorrendbe a következő történeti korszakokat! Kezd a legrégebbivel!",
  items: [
    { label: "A", text: "bronzkorszak" },
    { label: "B", text: "kőkorszak" },
    { label: "C", text: "vaskorszak" },
    { label: "D", text: "rézkorszak" }
  ],
  correctOrder: ["B", "D", "A", "C"],
  learnMore: { summary: "Korszakok időrendje: kőkorszak ⇒ rézkorszak ⇒ bronzkorszak ⇒ vaskorszak." }
},
{
  topic: "OPERA",
id: 119,
type: "sort",
  title: "Állítsd időrendi sorrendbe a következő zeneszerzőket! Kezd a legrégebbivel!",
  items: [
    { label: "A", text: "Berlioz" },
    { label: "B", text: "Mozart" },
    { label: "C", text: "Purcell" },
    { label: "D", text: "Prokofjev" }
  ],
  correctOrder: ["C", "B", "A", "D"],
  learnMore: { summary: "Keletkezési sorrend: Purcell (1659) ⇒ Mozart (1756) ⇒ Berlioz (1803) ⇒ Prokofjev (1891)." }
},
{
  topic: "TÖRTÉNELEM",
id: 120,
type: "sort",
  title: "Állítsd időrendi sorrendbe az alábbi  magyar köztársasági elnököket! Kezd a legkorábbival!",
  items: [
    { label: "A", text: "Mádl Ferenc" },
    { label: "B", text: "Tildy Zoltán" },
    { label: "C", text: "Göncz Árpád" },
    { label: "D", text: "Károlyi Mihály" }
  ],
  correctOrder: ["D", "B", "C", "A"],
  learnMore: { summary: "Elnökök időrendje: Károlyi Mihály (1919) ⇒ Tildy Zoltán (1946–1948) ⇒ Göncz Árpád (1990–2000) ⇒ Mádl Ferenc (2000–2005)." }
},
{
  topic: "TÖRTÉNELEM",
id: 121,
type: "sort",
  title: "Állítsd időrendi sorrendbe az alábbi csatákat!",
  items: [
    { label: "A", text: "muhi csata" },
    { label: "B", text: "mohácsi csata" },
    { label: "C", text: "rozgonyi csata" },
    { label: "D", text: "pákozdi csata" }
  ],
  correctOrder: ["A", "C", "B", "D"],
  learnMore: { summary: "Csaták időrendben: muhi csata (1241) ⇒ rozgonyi csata (1312) ⇒ mohácsi csata (1526) ⇒ pákozdi csata (1848)." }
},
{
  topic: "TECHNIKA",
id: 122,
type: "sort",
  title: "Állítsd időrendi sorrendbe az alábbi feltalálókat! Kezd a legkorábbival!",
  items: [
    { label: "A", text: "Jedlik Ányos" },
    { label: "B", text: "Arkhimédész" },
    { label: "C", text: "Neumann János" },
    { label: "D", text: "Johannes Gutenberg" }
  ],
  correctOrder: ["B", "D", "A", "C"],
  learnMore: { summary: "Születés szerint: Arkhimédész (~Kr. e. 287) ⇒ Johannes Gutenberg (~1400) ⇒ Jedlik Ányos (1800) ⇒ Neumann János (1903)." }
},
{
  topic: "TÖRTÉNELEM",
id: 123,
type: "sort",
  title: "Állítsd időrendi sorrendbe az alábbi francia köztársasági elnököket!",
  items: [
    { label: "A", text: "George Pompidou" },
    { label: "B", text: "Jacques Chirac" },
    { label: "C", text: "Francois Mitterand" },
    { label: "D", text: "Charles de Gaulle" }
  ],
  correctOrder: ["D", "A", "C", "B"],
  learnMore: { summary: "Elnökök időrendje: Charles de Gaulle (1959–1969) ⇒ George Pompidou (1969–1974) ⇒ Francois Mitterrand (1981–1995) ⇒ Jacques Chirac (1995–2007)." }
},
{
  topic: "TÖRTÉNELEM",
id: 124,
type: "sort",
  title: "Állítsd időrendi sorrendbe az alábbi Habsburg-házi uralkodókat!",
  items: [
    { label: "A", text: "II. József" },
    { label: "B", text: "IV. Károly" },
    { label: "C", text: "I. Ferdinánd" },
    { label: "D", text: "Mária Terézia" }
  ],
  correctOrder: ["C", "D", "A", "B"],
  learnMore: { summary: "Uralkodás szerint: I. Ferdinánd (1526–1564) ⇒ Mária Terézia (1740–1780) ⇒ II. József (1780–1790) ⇒ IV. Károly (1916–1918)." }
},
{
  topic: "TÖRTÉNELEM",
id: 125,
type: "sort",
  title: "Állítsd időrendi sorrendbe az alábbi hadvezéreket! Kezd a legkorábbival!",
  items: [
    { label: "A", text: "Kutuzov" },
    { label: "B", text: "Montgomery" },
    { label: "C", text: "Nagy Sándor" },
    { label: "D", text: "Wallenstein" }
  ],
  correctOrder: ["C", "D", "A", "B"],
  learnMore: { summary: "Időrend szerint: Nagy Sándor (Kr. e. 356–323) ⇒ Wallenstein (1583–1634) ⇒ Kutuzov (1745–1813) ⇒ Montgomery (1887–1976)." }
},
{
  topic: "TÖRTÉNELEM",
id: 126,
type: "sort",
  title: "Állítsd időrendi sorrendbe az alábbi hadvezéreket! Kezd a legrégebbivel!",
  items: [
    { label: "A", text: "Kutuzov" },
    { label: "B", text: "Miltiadész" },
    { label: "C", text: "Wallenstein" },
    { label: "D", text: "Montgomery" }
  ],
  correctOrder: ["B", "C", "A", "D"],
  learnMore: { summary: "Hadvezérek időrendje: Miltiadész (Kr. e. 5. század) ⇒ Wallenstein (17. század) ⇒ Kutuzov (18–19. század) ⇒ Montgomery (20. század)." }
},
{
  topic: "SPORT",
id: 127,
type: "sort",
  title: "Állítsd időrendi sorrendbe az alábbi magyar futball-kapusokat! Kezd a legkorábbival!",
  items: [
    { label: "A", text: "Géczi István" },
    { label: "B", text: "Király Gábor" },
    { label: "C", text: "Grosics Gyula" },
    { label: "D", text: "Zsák Károly" }
  ],
  correctOrder: ["D", "C", "A", "B"],
  learnMore: { summary: "Kapusok időrendje: Zsák Károly (1920-as évek) ⇒ Grosics Gyula (1950-es évek) ⇒ Géczi István (1960–70-es évek) ⇒ Király Gábor (1990–2010-es évek)." }
},
{
  topic: "IRODALOM",
id: 128,
type: "sort",
  title: "Állítsd időrendi sorrendbe az alábbi magyar költők versesköteteit! Kezd a legkorábbival!",
  items: [
    { label: "A", text: "Tajtékos ég" },
    { label: "B", text: "Vér és arany" },
    { label: "C", text: "Nagyon fáj" },
    { label: "D", text: "Őszikék" }
  ],
  correctOrder: ["D", "B", "C", "A"],
  learnMore: { summary: "Verseskötetek megjelenése szerint: Őszikék (1879, Arany János) ⇒ Vér és arany (1907, Ady Endre) ⇒ Nagyon fáj (1936, József Attila) ⇒ Tajtékos ég (1952, Pilinszky János)." }
},
{
  topic: "ZENE",
id: 129,
type: "sort",
  title: "Állítsd időrendi sorrendbe az alábbi magyar könnyűzenei slágereket! Kezd a legkorábbival!",
  items: [
    { label: "A", text: "Trombitás Frédi" },
    { label: "B", text: "Hamvadó cigarettavég" },
    { label: "C", text: "A Sexepilem" },
    { label: "D", text: "Kölyköd voltam" }
  ],
  correctOrder: ["B", "A", "D", "C"],
  learnMore: { summary: "Slágerek időrendje: Hamvadó cigarettavég (1940-es évek) ⇒ Trombitás Frédi (1963) ⇒ Kölyköd voltam (1985) ⇒ A Sexepilem (2000)." }
},
{
  topic: "MŰVÉSZET",
id: 130,
type: "sort",
  title: "Állítsd időrendi sorrendbe az alábbi művészeti irányzatokat! Kezd a legkorábbival!",
  items: [
    { label: "A", text: "szürrealizmus" },
    { label: "B", text: "posztmodern" },
    { label: "C", text: "impresszionizmus" },
    { label: "D", text: "rokokó" }
  ],
  correctOrder: ["D", "C", "A", "B"],
  learnMore: { summary: "Művészeti irányzatok időrendben: rokokó (18. század) ⇒ impresszionizmus (19. század vége) ⇒ szürrealizmus (1920-as évek) ⇒ posztmodern (1960-as évektől)." }
},
{
  topic: "TÖRTÉNELEM",
id: 131,
type: "sort",
  title: "Állítsd időrendi sorrendbe az alábbi német kancellárokat! Kezd a legkorábbival!",
  items: [
    { label: "A", text: "Willy Brandt" },
    { label: "B", text: "Helmuth Kohl" },
    { label: "C", text: "Otto von Bismarck" },
    { label: "D", text: "Konrad Adenauer" }
  ],
  correctOrder: ["C", "D", "A", "B"],
  learnMore: { summary: "Időrendi sorrendben: Otto von Bismarck (1871–1890) ⇒ Konrad Adenauer (1949–1963) ⇒ Willy Brandt (1969–1974) ⇒ Helmut Kohl (1982–1998)." }
},
{
  topic: "SPORT",
id: 132,
type: "sort",
  title: "Állítsd időrendi sorrendbe az alábbi nyári olimpiai játékokat! Kezd a legkorábbival!",
  items: [
    { label: "A", text: "Barcelona" },
    { label: "B", text: "Amszterdam" },
    { label: "C", text: "Helsinki" },
    { label: "D", text: "Tokió" }
  ],
  correctOrder: ["B", "C", "D", "A"],
  learnMore: { summary: "Olimpiák időrendben: Amszterdam (1928) ⇒ Helsinki (1952) ⇒ Tokió (1964) ⇒ Barcelona (1992)." }
},
{
  topic: "TÖRTÉNELEM",
id: 133,
type: "sort",
  title: "Állítsd időrendi sorrendbe az alábbi ókori uralkodókat! Kezd a legrégebbivel!",
  items: [
    { label: "A", text: "II. Ramszesz" },
    { label: "B", text: "Nagy Sándor" },
    { label: "C", text: "Tiberius" },
    { label: "D", text: "Xerxész" }
  ],
  correctOrder: ["A", "D", "B", "C"],
  learnMore: { summary: "Uralkodók időrendje: II. Ramszesz (~Kr. e. 13. század) ⇒ Xerxész (~Kr. e. 5. század) ⇒ Nagy Sándor (~Kr. e. 4. század) ⇒ Tiberius (Kr. u. 1. század)." }
},
{
  topic: "FILM",
id: 134,
type: "sort",
  title: "Állítsd időrendi sorrendbe az alábbi Oscar-díjas filmeket! Kezd a legkorábbival!",
  items: [
    { label: "A", text: "Tűzszekerek" },
    { label: "B", text: "Schindler listája" },
    { label: "C", text: "Ben Hur" },
    { label: "D", text: "My Fair Lady" }
  ],
  correctOrder: ["C", "D", "A", "B"],
  learnMore: { summary: "Bemutatás szerint: Ben Hur (1959) ⇒ My Fair Lady (1964) ⇒ Tűzszekerek (1981) ⇒ Schindler listája (1993)." }
},
{
  topic: "ÁLTALÁNOS",
id: 135,
type: "sort",
  title: "Állítsd időrendi sorrendbe az alábbi régi magyar hónapneveket! Kezd a legkorábbival!",
  items: [
    { label: "A", text: "Szent Iván hava" },
    { label: "B", text: "Mindszent hava" },
    { label: "C", text: "Pünkösd hava" },
    { label: "D", text: "Szent György hava" }
  ],
  correctOrder: ["D", "C", "A", "B"],
  learnMore: { summary: "Hónapok időrendben: Szent György hava (április) ⇒ Pünkösd hava (május) ⇒ Szent Iván hava (június) ⇒ Mindszent hava (október)." }
},
{
  topic: "TÖRTÉNELEM",
id: 136,
type: "sort",
  title: "Állítsd időrendi sorrendbe az alábbi római császárokat! Kezd a legkorábbival!",
  items: [
    { label: "A", text: "Nero" },
    { label: "B", text: "Constantinus" },
    { label: "C", text: "Augustus" },
    { label: "D", text: "Hadrianus" }
  ],
  correctOrder: ["C", "A", "D", "B"],
  learnMore: { summary: "Uralkodás szerint: Augustus (Kr. e. 27 – Kr. u. 14) ⇒ Nero (54–68) ⇒ Hadrianus (117–138) ⇒ Constantinus (306–337)." }
},
{
  topic: "TÖRTÉNELEM",
id: 137,
type: "sort",
  title: "Állítsd időrendi sorrendbe az Amerikai Egyesült Államok felsorolt elnökeit!",
  items: [
    { label: "A", text: "Ronald Reagan" },
    { label: "B", text: "George W. Bush" },
    { label: "C", text: "Dwight D. Eisenhower" },
    { label: "D", text: "Franklin D. Roosevelt" }
  ],
  correctOrder: ["D", "C", "A", "B"],
  learnMore: { summary: "Elnökök időrendje: Franklin D. Roosevelt (1933–1945) ⇒ Dwight D. Eisenhower (1953–1961) ⇒ Ronald Reagan (1981–1989) ⇒ George W. Bush (2001–2009)." }
},
{
  topic: "ÁLTALÁNOS",
id: 138,
type: "sort",
  title: "Állítsd időrendi sorrendbe az év jeles napjait! Kezd a legkorábbival!",
  items: [
    { label: "A", text: "Anyák napja" },
    { label: "B", text: "Valentin nap" },
    { label: "C", text: "Mikulás" },
    { label: "D", text: "Nőnap" }
  ],
  correctOrder: ["B", "D", "A", "C"],
  learnMore: { summary: "Naptári sorrendben: Valentin nap (február 14.) ⇒ Nőnap (március 8.) ⇒ Anyák napja (május első vasárnapja) ⇒ Mikulás (december 6.)." }
},
{
  topic: "IRODALOM",
id: 139,
type: "sort",
  title: "Állítsd irodalmi megjelenítésük időrendi sorrendjébe az alábbi múzsákat!",
  items: [
    { label: "A", text: "Szendrey Júlia" },
    { label: "B", text: "Gyarmati Fanni" },
    { label: "C", text: "Vajda Julianna (Lilla)" },
    { label: "D", text: "Boncza Berta (Csinszka)" }
  ],
  correctOrder: ["C", "A", "D", "B"],
  learnMore: { summary: "Irodalmi megjelenítés szerint: Vajda Julianna (Lilla, 1800-as évek eleje) ⇒ Szendrey Júlia (1840-es évek) ⇒ Boncza Berta (Csinszka, 1910-es évek) ⇒ Gyarmati Fanni (1930-as évektől)." }
},
{
  topic: "TÖRTÉNELEM",
id: 140,
type: "sort",
  title: "Állítsd irőrendbe a francia forradalom eseményeit!",
  items: [
    { label: "A", text: "XVI. Lajos szökése" },
    { label: "B", text: "a Bastille elfoglalása" },
    { label: "C", text: "Robespierre kivégzése" },
    { label: "D", text: "Danton kivégzése" }
  ],
  correctOrder: ["B", "A", "D", "C"],
  learnMore: { summary: "Események időrendje: Bastille elfoglalása (1789) ⇒ XVI. Lajos szökése (1791) ⇒ Danton kivégzése (1794. április) ⇒ Robespierre kivégzése (1794. július)." }
},
{
  topic: "IRODALOM",
id: 141,
type: "sort",
  title: "Állítsd keletkezési sorrendbe a következő regényeket! Kezd a legrégebbivel!",
  items: [
    { label: "A", text: "Robinson Crusoe" },
    { label: "B", text: "A fekete gyémántok" },
    { label: "C", text: "Az öreg halász és a tenger" },
    { label: "D", text: "Svejk" }
  ],
  correctOrder: ["A", "B", "D", "C"],
  learnMore: { summary: "Keletkezési sorrend: Robinson Crusoe (1719) ⇒ A fekete gyémántok (1870) ⇒ Svejk (1921–23) ⇒ Az öreg halász és a tenger (1952)." }
},
{
  topic: "IRODALOM",
id: 142,
type: "sort",
  title: "Állítsd keletkezési sorrendbe az alábbi magyar színpadi műveket! Kezd a legrégebbivel!",
  items: [
    { label: "A", text: "Bánk bán" },
    { label: "B", text: "Macskajáték" },
    { label: "C", text: "Az ember tragédiája" },
    { label: "D", text: "A néma levente" }
  ],
  correctOrder: ["A", "C", "D", "B"],
  learnMore: { summary: "Keletkezési év szerint: Bánk bán (1815) ⇒ Az ember tragédiája (1860) ⇒ A néma levente (1936) ⇒ Macskajáték (1971)." }
},
{
  topic: "IRODALOM",
id: 143,
type: "sort",
  title: "Állítsd keletkezési sorrendbe az alábbi regényeket! Kezd a legkorábbival!",
  items: [
    { label: "A", text: "A kőszívű ember fiai" },
    { label: "B", text: "Légy jó mindhalálig" },
    { label: "C", text: "Egri csillagok" },
    { label: "D", text: "A Pál utcai fiúk" }
  ],
  correctOrder: ["A", "C", "D", "B"],
  learnMore: { summary: "Keletkezés szerint: A kőszívű ember fiai (1869) ⇒ Egri csillagok (1899) ⇒ A Pál utcai fiúk (1907) ⇒ Légy jó mindhalálig (1920)." }
},
{
  topic: "VALLÁS",
id: 144,
type: "sort",
  title: "Állítsd keletkezési sorrendbe az alábbi vallásokat! Kezd a legrégebbivel!",
  items: [
    { label: "A", text: "buddhizmus" },
    { label: "B", text: "iszlám" },
    { label: "C", text: "katolicizmus" },
    { label: "D", text: "protestantizmus" }
  ],
  correctOrder: ["A", "C", "B", "D"],
  learnMore: { summary: "Keletkezés szerint: buddhizmus (Kr. e. 6. sz.) ⇒ katolicizmus (Kr. u. 1. sz.) ⇒ iszlám (Kr. u. 7. sz.) ⇒ protestantizmus (Kr. u. 16. sz.)." }
},
{
  topic: "FILM",
id: 145,
type: "sort",
  title: "Állítsd készítésük időrendjébe Sylvester Stallone filmjeit!",
  items: [
    { label: "A", text: "Rocky" },
    { label: "B", text: "Rambo" },
    { label: "C", text: "A specialista" },
    { label: "D", text: "Tango és Cash" }
  ],
  correctOrder: ["A", "B", "D", "C"],
  learnMore: { summary: "Készítés szerint: Rocky (1976) ⇒ Rambo (1982) ⇒ Tango és Cash (1989) ⇒ A specialista (1994)." }
},
{
  topic: "IRODALOM",
id: 146,
type: "sort",
  title: "Állítsd kitalálásuk időrendjébe a híres irodalmi címszereplőnőket!",
  items: [
    { label: "A", text: "Jane Eyre" },
    { label: "B", text: "Nana" },
    { label: "C", text: "Elektra" },
    { label: "D", text: "Warrenné" }
  ],
  correctOrder: ["C", "A", "B", "D"],
  learnMore: { summary: "Kitalálás szerint: Elektra (Kr. e. 5. század) ⇒ Jane Eyre (1847) ⇒ Nana (1880) ⇒ Warrenné (1913)." }
},
{
  topic: "TÖRTÉNELEM",
id: 147,
type: "sort",
  title: "Állítsd külügyminiszterségük időrendjébe a magyar politikusokat!",
  items: [
    { label: "A", text: "Horn Gyula" },
    { label: "B", text: "Kovács László" },
    { label: "C", text: "Jeszenszky Géza" },
    { label: "D", text: "Martonyi János" }
  ],
  correctOrder: ["A", "C", "B", "D"],
  learnMore: { summary: "Külügyminiszterség szerint: Horn Gyula (1989–1990) ⇒ Jeszenszky Géza (1990–1994) ⇒ Kovács László (1994–1998) ⇒ Martonyi János (1998–2002, 2010–2014)." }
},
{
  topic: "FÖLDRAJZ",
id: 148,
type: "sort",
  title: "Állítsd magasság szerint sorrendbe a felsorolt magyarországi hegycsúcsokat! Kezd a legkisebbel!",
  items: [
    { label: "A", text: "Galyatető" },
    { label: "B", text: "Somló" },
    { label: "C", text: "Csóványos" },
    { label: "D", text: "Gellért-hegy" }
  ],
  correctOrder: ["D", "B", "C", "A"],
  learnMore: { summary: "Magasság szerint: Gellért-hegy (235 m) ⇒ Somló (432 m) ⇒ Csóványos (938 m) ⇒ Galyatető (965 m)." }
},
{
  topic: "FÖLDRAJZ",
id: 149,
type: "sort",
  title: "Állítsd magasság szerinti sorrendbe a felsorolt magyar hegycsúcsokat! Kezd a legmagasabbal!",
  items: [
    { label: "A", text: "Kékes" },
    { label: "B", text: "Gellért-hegy" },
    { label: "C", text: "János-hegy" },
    { label: "D", text: "Dobogó-kő" }
  ],
  correctOrder: ["A", "D", "C", "B"],
  learnMore: { summary: "Magasság szerint: Kékes (1014 m) ⇒ Dobogó-kő (700 m) ⇒ János-hegy (527 m) ⇒ Gellért-hegy (235 m)." }
},
{
  topic: "FÖLDRAJZ",
id: 150,
type: "sort",
  title: "Állítsd magasság szerinti sorrendbe a következő hegycsúcsokat! Kezd a legmagasabbal!",
  items: [
    { label: "A", text: "Fuji" },
    { label: "B", text: "Mont Blanc" },
    { label: "C", text: "Mount Everest" },
    { label: "D", text: "Kibo" }
  ],
  correctOrder: ["C", "D", "B", "A"],
  learnMore: { summary: "Magasság szerint: Mount Everest (8848 m) ⇒ Kibo (5895 m) ⇒ Mont Blanc (4807 m) ⇒ Fuji (3776 m)." }
},
{
  topic: "SZÍNHÁZ",
id: 151,
type: "sort",
  title: "Állítsd magyarországi bemutatásuk időrendjébe az alábbi musicaleket!",
  items: [
    { label: "A", text: "Elisabeth" },
    { label: "B", text: "West Side Story" },
    { label: "C", text: "Macskák" },
    { label: "D", text: "Hegedűs a háztetőn" }
  ],
  correctOrder: ["B", "D", "C", "A"],
  learnMore: { summary: "Bemutatás szerint: West Side Story (1965) ⇒ Hegedűs a háztetőn (1973) ⇒ Macskák (1983) ⇒ Elisabeth (1996)." }
},
{
  topic: "BIOLÓGIA",
id: 152,
type: "sort",
  title: "Állítsd maximális testhosszuk emelkedő sorrendjébe az alábbi kígyókat!",
  items: [
    { label: "A", text: "nagy anakonda" },
    { label: "B", text: "közönséges boa" },
    { label: "C", text: "homoki vipera" },
    { label: "D", text: "pápaszemes kobra" }
  ],
  correctOrder: ["C", "D", "B", "A"],
  learnMore: { summary: "Testhossz szerint: homoki vipera (~60 cm) ⇒ pápaszemes kobra (~180 cm) ⇒ közönséges boa (~300 cm) ⇒ nagy anakonda (~900 cm)." }
},
{
  topic: "ZENE",
id: 153,
type: "sort",
  title: "Állítsd megalakulásuk időrendjébe a következő rockegyütteseket!",
  items: [
    { label: "A", text: "U2" },
    { label: "B", text: "Pet Shop Boys" },
    { label: "C", text: "The Beatles" },
    { label: "D", text: "Led Zeppelin" }
  ],
  correctOrder: ["C", "D", "A", "B"],
  learnMore: { summary: "Megalakulás szerint: The Beatles (1960) ⇒ Led Zeppelin (1968) ⇒ U2 (1976) ⇒ Pet Shop Boys (1981)." }
},
{
  topic: "ZENE",
id: 154,
type: "sort",
  title: "Állítsd megalakulásuk szerinti időrendbe a magyar könnyűzenei együtteseket! Kezd a legkorábbival!",
  items: [
    { label: "A", text: "Omega" },
    { label: "B", text: "Ámokfutók" },
    { label: "C", text: "Edda Művek" },
    { label: "D", text: "Pa-Dö-Dö" }
  ],
  correctOrder: ["A", "C", "D", "B"],
  learnMore: { summary: "Megalakulás szerint: Omega (1962) ⇒ Edda Művek (1973) ⇒ Pa-Dö-Dö (1988) ⇒ Ámokfutók (1994)." }
},
{
  topic: "MAGYARORSZÁG",
id: 155,
type: "sort",
  title: "Állítsd megalapításuk időrendjébe a híres magyar intézményeket! Kezd a legkorábbival!",
  items: [
    { label: "A", text: "Operaház" },
    { label: "B", text: "az első pécsi egyetem" },
    { label: "C", text: "Tudományos Akadémia" },
    { label: "D", text: "debreceni református kollégium" }
  ],
  correctOrder: ["B", "D", "C", "A"],
  learnMore: { summary: "Alapítás szerint: első pécsi egyetem (1367) ⇒ debreceni református kollégium (1538) ⇒ Tudományos Akadémia (1825) ⇒ Operaház (1884)." }
},
{
  topic: "IRODALOM",
id: 156,
type: "sort",
  title: "Állítsd megfelelő sorba az ismert József Attila-vers versszakkezdő sorait!",
  items: [
    { label: "A", text: "Harminckétéves lettem én" },
    { label: "B", text: "Lehettem volna oktató" },
    { label: "C", text: "Harminckét évem elszelelt" },
    { label: "D", text: "Én egész népemet fogom" }
  ],
  correctOrder: ["A", "C", "B", "D"],
  learnMore: { summary: "Verssorok sorrendje: Harminckétéves lettem én ⇒ Harminckét évem elszelelt ⇒ Lehettem volna oktató ⇒ Én egész népemet fogom." }
},
{
  topic: "IRODALOM",
id: 157,
type: "sort",
  title: "Állítsd megfelelő sorrendbe a Kőmíves Kelemenné című népballada sorait!",
  items: [
    { label: "A", text: "amit raktak estig" },
    { label: "B", text: "amit raktak délig" },
    { label: "C", text: "leomlott röggelre" },
    { label: "D", text: "leomlott estére" }
  ],
  correctOrder: ["B", "D", "A", "C"],
  learnMore: { summary: "Verssorok sorrendje: amit raktak délig ⇒ leomlott estére ⇒ amit raktak estig ⇒ leomlott röggelre." }
},
{
  topic: "IRODALOM",
id: 158,
type: "sort",
  title: "Állítsd megfelelő sorrendbe a Petőfi-műből idézett versrészleteket!",
  items: [
    { label: "A", text: "Előre" },
    { label: "B", text: "Trombita harsog" },
    { label: "C", text: "Kész a csatára a sereg" },
    { label: "D", text: "Dob pereg" }
  ],
  correctOrder: ["B", "D", "C", "A"],
  learnMore: { summary: "Verssorok sorrendje: Trombita harsog ⇒ Dob pereg ⇒ Kész a csatára a sereg ⇒ Előre." }
},
{
  topic: "IRODALOM",
id: 159,
type: "sort",
  title: "Állítsd megfelelő sorrendbe az ismert népdal sorait!",
  items: [
    { label: "A", text: "miért nem virágoztál" },
    { label: "B", text: "szerelem, szerelem" },
    { label: "C", text: "minden falevelen" },
    { label: "D", text: "átkozott gyötrelem" }
  ],
  correctOrder: ["B", "D", "A", "C"],
  learnMore: { summary: "Verssorok sorrendje: szerelem, szerelem ⇒ átkozott gyötrelem ⇒ miért nem virágoztál ⇒ minden falevelen." }
},
{
  topic: "IRODALOM",
id: 160,
type: "sort",
  title: "Állítsd megfelelő sorrendbe az ismert Petőfi-vers sorait!",
  items: [
    { label: "A", text: "Reszket a lelkem, mert" },
    { label: "B", text: "Madárka szállott rá." },
    { label: "C", text: "Eszembe jutottál." },
    { label: "D", text: "Reszket a bokor, mert" }
  ],
  correctOrder: ["D", "B", "A", "C"],
  learnMore: { summary: "Verssorok sorrendje: Reszket a bokor, mert ⇒ Madárka szállott rá ⇒ Reszket a lelkem, mert ⇒ Eszembe jutottál." }
},
{
  topic: "ORSZÁGOK",
id: 161,
type: "sort",
  title: "Állítsd nagyság szerinti sorrendbe a fővárosokat a lakosság száma alapján! Kezd a legnagyobbal!",
  items: [
    { label: "A", text: "Moszkva" },
    { label: "B", text: "Tokió" },
    { label: "C", text: "Mexikóváros" },
    { label: "D", text: "Athén" }
  ],
  correctOrder: ["C", "B", "A", "D"],
  learnMore: { summary: "Lakosság szerint: Mexikóváros (~21 millió) ⇒ Tokió (~14 millió) ⇒ Moszkva (~12 millió) ⇒ Athén (~3 millió)." }
},
{
  topic: "OPERA",
id: 162,
type: "sort",
  title: "Állítsd nagyság szerinti sorrendbe az alábbi vonós hangszereket! Kezd a legnagyobbal!",
  items: [
    { label: "A", text: "brácsa" },
    { label: "B", text: "nagybőgő" },
    { label: "C", text: "hegedű" },
    { label: "D", text: "gordonka" }
  ],
  correctOrder: ["B", "D", "A", "C"],
  learnMore: { summary: "Méret szerint: nagybőgő (~180 cm) ⇒ gordonka (~120 cm) ⇒ brácsa (~40 cm) ⇒ hegedű (~35 cm)." }
},
{
  topic: "TUDOMÁNY",
id: 163,
type: "sort",
  title: "Állítsd nagyság szerinti sorrende az alábbi hosszmértékegységeket! Kezd a legnagyobbal!",
  items: [
    { label: "A", text: "rőf" },
    { label: "B", text: "hüvelyk" },
    { label: "C", text: "mérföld" },
    { label: "D", text: "láb" }
  ],
  correctOrder: ["C", "A", "D", "B"],
  learnMore: { summary: "Hosszmértékegységek szerint: mérföld (~1609 m) ⇒ rőf (~0.6 m) ⇒ láb (~30 cm) ⇒ hüvelyk (~2.5 cm)." }
},
{
  topic: "VALLÁS",
id: 164,
type: "sort",
  title: "Állítsd naptár szerinti időrendi sorrendbe az alábbi keresztény ünnepeket! Kezd a legkorábbival!",
  items: [
    { label: "A", text: "advent" },
    { label: "B", text: "pünkösd" },
    { label: "C", text: "vízkereszt" },
    { label: "D", text: "húsvét" }
  ],
  correctOrder: ["C", "D", "B", "A"],
  learnMore: { summary: "Naptári sorrendben: vízkereszt (jan. 6.) ⇒ húsvét (március–április) ⇒ pünkösd (május–június) ⇒ advent (november vége–december)." }
},
{
  topic: "VALLÁS",
id: 165,
type: "sort",
  title: "Állítsd naptári időrendbe a jeles napokat!",
  items: [
    { label: "A", text: "virágvasárnap" },
    { label: "B", text: "nagypéntek" },
    { label: "C", text: "pünkösd" },
    { label: "D", text: "húsvét" }
  ],
  correctOrder: ["A", "B", "D", "C"],
  learnMore: { summary: "Naptári sorrendben: virágvasárnap ⇒ nagypéntek ⇒ húsvét ⇒ pünkösd." }
},
{
  topic: "FÖLDRAJZ",
id: 166,
type: "sort",
  title: "Állítsd népesség szerinti sorrendbe a felsorolt földrészeket! Kezd a legnépesebbel!",
  items: [
    { label: "A", text: "Afrika" },
    { label: "B", text: "Ausztrália és Óceánia" },
    { label: "C", text: "Észak-Amerika" },
    { label: "D", text: "Ázsia" }
  ],
  correctOrder: ["D", "A", "C", "B"],
  learnMore: { summary: "Népesség szerint: Ázsia (~4,7 milliárd) ⇒ Afrika (~1,4 milliárd) ⇒ Észak-Amerika (~600 millió) ⇒ Ausztrália és Óceánia (~45 millió)." }
},
{
  topic: "ÁLTALÁNOS",
id: 167,
type: "sort",
  title: "Állítsd névérték szerint növekvő sorrendbe a papírpénzeinken látható magyar államférfiakat!",
  items: [
    { label: "A", text: "Mátyás király" },
    { label: "B", text: "II. Rákóczi Ferenc" },
    { label: "C", text: "Szent István" },
    { label: "D", text: "Széchenyi István" }
  ],
  correctOrder: ["B", "A", "D", "C"],
  learnMore: { summary: "Papírpénzek névértéke szerint: II. Rákóczi Ferenc (500 Ft) ⇒ Mátyás király (1000 Ft) ⇒ Széchenyi István (5000 Ft) ⇒ Szent István (10 000 Ft)." }
},
{
  topic: "TUDOMÁNY",
id: 168,
type: "sort",
  title: "Állítsd Nobel-díjasaik számának növekvő sorrendjébe az alábbi országokat!",
  items: [
    { label: "A", text: "Svédország" },
    { label: "B", text: "Kína" },
    { label: "C", text: "Amerikai Egyesült Államok" },
    { label: "D", text: "Nagy-Britannia" }
  ],
  correctOrder: ["B", "A", "D", "C"],
  learnMore: { summary: "Nobel-díjasok száma szerint: Kína (~10) ⇒ Svédország (~30) ⇒ Nagy-Britannia (~130) ⇒ USA (~400+)." }
},
{
  topic: "TUDOMÁNY",
id: 169,
type: "sort",
  title: "Állítsd növekvő sorrendbe a bolygókat a Földtől való legnagyobb távolságuk szerint!",
  items: [
    { label: "A", text: "Vénusz" },
    { label: "B", text: "Neptunusz" },
    { label: "C", text: "Uránusz" },
    { label: "D", text: "Jupiter" }
  ],
  correctOrder: ["A", "D", "C", "B"],
  learnMore: { summary: "Távolság szerint: Vénusz (~261 millió km) ⇒ Jupiter (~968 millió km) ⇒ Uránusz (~2,9 milliárd km) ⇒ Neptunusz (~4,3 milliárd km)." }
},
{
  topic: "TUDOMÁNY",
id: 170,
type: "sort",
  title: "Állítsd növekvő sorrendbe a fémeket olvadáspontjuk szerint!",
  items: [
    { label: "A", text: "arany" },
    { label: "B", text: "higany" },
    { label: "C", text: "ólom" },
    { label: "D", text: "ezüst" }
  ],
  correctOrder: ["B", "C", "D", "A"],
  learnMore: { summary: "Olvadáspont szerint: higany (-39 °C) ⇒ ólom (327 °C) ⇒ ezüst (961 °C) ⇒ arany (1064 °C)." }
},
{
  topic: "FÖLDRAJZ",
id: 171,
type: "sort",
  title: "Állítsd növekvő sorrendbe a hegységeket legmagasabb csúcsaik megassága szerint!",
  items: [
    { label: "A", text: "Himalája" },
    { label: "B", text: "Alpok" },
    { label: "C", text: "Andok" },
    { label: "D", text: "Kilimandzsáró" }
  ],
  correctOrder: ["B", "D", "C", "A"],
  learnMore: { summary: "Csúcsok magassága szerint: Alpok (Mont Blanc, 4 810 m) ⇒ Kilimandzsáró (5 895 m) ⇒ Andok (Aconcagua, 6 961 m) ⇒ Himalája (Mount Everest, 8 848 m)." }
},
{
  topic: "ÁLTALÁNOS",
id: 172,
type: "sort",
  title: "Állítsd növekvő sorrendbe a következő római számokat!",
  items: [
    { label: "A", text: "D" },
    { label: "B", text: "V" },
    { label: "C", text: "X" },
    { label: "D", text: "L" }
  ],
  correctOrder: ["B", "C", "D", "A"],
  learnMore: { summary: "Római számok növekvő sorrendben: V (5) ⇒ X (10) ⇒ L (50) ⇒ D (500)." }
},
{
  topic: "FILM",
id: 173,
type: "sort",
  title: "Állítsd növekvő sorrendbe a mozifilmeket aszerint, hogy hány rész készült belőlük!",
  items: [
    { label: "A", text: "A keresztapa" },
    { label: "B", text: "Mission: Impossible" },
    { label: "C", text: "Rocky" },
    { label: "D", text: "Halálos fegyver" }
  ],
  correctOrder: ["B", "A", "D", "C"],
  learnMore: { summary: "Részek száma szerint: Mission: Impossible (3 rész a 2000-es évekig) ⇒ A keresztapa (3 rész) ⇒ Halálos fegyver (4 rész) ⇒ Rocky (8 rész)." }
},
{
  topic: "TÖRTÉNELEM",
id: 174,
type: "sort",
  title: "Állítsd növekvő sorrendbe a neveket aszerint, hány Árpád-házi királyunk viselte!",
  items: [
    { label: "A", text: "Péter" },
    { label: "B", text: "István" },
    { label: "C", text: "Béla" },
    { label: "D", text: "András" }
  ],
  correctOrder: ["A", "D", "C", "B"],
  learnMore: { summary: "Névviselés szerint: Péter (1 király) ⇒ András (2 király) ⇒ Béla (4 király) ⇒ István (4 király + szent kultusz)." }
},
{
  topic: "BIOLÓGIA",
id: 175,
type: "sort",
  title: "Állítsd növekvő sorrendbe a növényeket átlagos magasságuk szerint!",
  items: [
    { label: "A", text: "mamutfenyő" },
    { label: "B", text: "bükk" },
    { label: "C", text: "aranyeső" },
    { label: "D", text: "gyöngyvirág" }
  ],
  correctOrder: ["D", "C", "B", "A"],
  learnMore: { summary: "Átlagos magasság szerint: gyöngyvirág (~20 cm) ⇒ aranyeső (~2 m) ⇒ bükk (~30 m) ⇒ mamutfenyő (~90 m)." }
},
{
  topic: "TUDOMÁNY",
id: 176,
type: "sort",
  title: "Állítsd növekvő sorrendbe a sokszögeket szögeik száma szerint!",
  items: [
    { label: "A", text: "hexagon" },
    { label: "B", text: "pentagon" },
    { label: "C", text: "trapéz" },
    { label: "D", text: "oktogon" }
  ],
  correctOrder: ["C", "B", "A", "D"],
  learnMore: { summary: "Szögek száma szerint: trapéz (4) ⇒ pentagon (5) ⇒ hexagon (6) ⇒ oktogon (8)." }
},
{
  topic: "FÖLDRAJZ",
id: 177,
type: "sort",
  title: "Állítsd növekvő sorrendbe a szigeteket területük nagysága szerint!",
  items: [
    { label: "A", text: "Bali" },
    { label: "B", text: "Madagaszkár" },
    { label: "C", text: "Tajvan" },
    { label: "D", text: "Grönland" }
  ],
  correctOrder: ["A", "C", "B", "D"],
  learnMore: { summary: "Terület szerint: Bali (~5 780 km²) ⇒ Tajvan (~36 000 km²) ⇒ Madagaszkár (~587 000 km²) ⇒ Grönland (~2 166 000 km²)." }
},
{
  topic: "FÖLDRAJZ",
id: 178,
type: "sort",
  title: "Állítsd növekvő sorrendbe a tengereket területük nagysága szerint!",
  items: [
    { label: "A", text: "Márvány-tenger" },
    { label: "B", text: "Vörös-tenger" },
    { label: "C", text: "Jeges-tenger" },
    { label: "D", text: "Földközi-tenger" }
  ],
  correctOrder: ["A", "B", "D", "C"],
  learnMore: { summary: "Terület szerint: Márvány-tenger (~11 000 km²) ⇒ Vörös-tenger (~438 000 km²) ⇒ Földközi-tenger (~2 500 000 km²) ⇒ Jeges-tenger (~14 000 000 km²)." }
},
{
  topic: "Film",
id: 179,
type: "sort",
  title: "Állítsd növekvő sorrendbe az alábbi mesefigurákhoz tartozó számokat!",
  items: [
    { label: "A", text: "Hófehérke" },
    { label: "B", text: "Kismalac" },
    { label: "C", text: "a brémai muzsikusok" },
    { label: "D", text: "Ali baba" }
  ],
  correctOrder: ["B", "C", "A", "D"],
  learnMore: { summary: "A mesefigurákhoz tartozó számok: Kismalac (1) ⇒ brémai muzsikusok (4) ⇒ Hófehérke (7 törpe) ⇒ Ali baba (40 rabló)." }
},
{
  topic: "FÖLDRAJZ",
id: 180,
type: "sort",
  title: "Állítsd növekvő sorrendbe az alábbi országokat területük nagysága szerint!",
  items: [
    { label: "A", text: "Brazília" },
    { label: "B", text: "Franciaország" },
    { label: "C", text: "Vietnam" },
    { label: "D", text: "Monaco" }
  ],
  correctOrder: ["D", "C", "B", "A"],
  learnMore: { summary: "Terület szerint: Monaco (~2 km²) ⇒ Vietnam (~331 000 km²) ⇒ Franciaország (~551 000 km²) ⇒ Brazília (~8 515 000 km²)." }
},
{
  topic: "IRODALOM",
id: 181,
type: "sort",
  title: "Állítsd növekvő sorrendbe az írókat aszerint, hány fennmaradt színdarabjukat tartjuk számon!",
  items: [
    { label: "A", text: "Petőfi Sándor" },
    { label: "B", text: "William Shakespeare" },
    { label: "C", text: "Szophoklész" },
    { label: "D", text: "Lope de Vega" }
  ],
  correctOrder: ["A", "C", "B", "D"],
  learnMore: { summary: "Színdarabok száma szerint: Petőfi Sándor (1) ⇒ Szophoklész (~7) ⇒ Shakespeare (37) ⇒ Lope de Vega (~400)." }
},
{
  topic: "ORSZÁGOK",
id: 182,
type: "sort",
  title: "Állítsd növekvő sorrendbe az országokat az egy főre jutó bruttó hazai termék nagysága szerint!",
  items: [
    { label: "A", text: "Ausztrália" },
    { label: "B", text: "Egyiptom" },
    { label: "C", text: "Németország" },
    { label: "D", text: "Ghána" }
  ],
  correctOrder: ["D", "B", "A", "C"],
  learnMore: { summary: "Egy főre jutó GDP szerint: Ghána (~2 500 USD) ⇒ Egyiptom (~4 000 USD) ⇒ Ausztrália (~60 000 USD) ⇒ Németország (~55 000 USD)." }
},
{
  topic: "FÖLDRAJZ",
id: 183,
type: "sort",
  title: "Állítsd növekvő sorrendbe az országokat területük nagysága szerint!",
  items: [
    { label: "A", text: "Izland" },
    { label: "B", text: "Japán" },
    { label: "C", text: "Egyiptom" },
    { label: "D", text: "Luxemburg" }
  ],
  correctOrder: ["D", "A", "B", "C"],
  learnMore: { summary: "Terület szerint: Luxemburg (~2 586 km²) ⇒ Izland (~103 000 km²) ⇒ Japán (~378 000 km²) ⇒ Egyiptom (~1 001 000 km²)." }
},
{
  topic: "FÖLDRAJZ",
id: 184,
type: "sort",
  title: "Állítsd növekvő sorrendbe az országokat területük nagysága szerint!",
  items: [
    { label: "A", text: "Liechtenstein" },
    { label: "B", text: "Belgium" },
    { label: "C", text: "Chile" },
    { label: "D", text: "Dánia" }
  ],
  correctOrder: ["A", "B", "D", "C"],
  learnMore: { summary: "Terület szerint: Liechtenstein (~160 km²) ⇒ Belgium (~30 500 km²) ⇒ Dánia (~43 000 km²) ⇒ Chile (~756 000 km²)." }
},
{
  topic: "FÖLDRAJZ",
id: 185,
type: "sort",
  title: "Állítsd nyugat-keleti sorrendbe a Balaton északi partján fekvő településeket!",
  items: [
    { label: "A", text: "Balatonfüred" },
    { label: "B", text: "Balatonalmádi" },
    { label: "C", text: "Révfülöp" },
    { label: "D", text: "Szigliget" }
  ],
  correctOrder: ["D", "C", "A", "B"],
  learnMore: { summary: "Nyugat–kelet sorrendben: Szigliget ⇒ Révfülöp ⇒ Balatonfüred ⇒ Balatonalmádi." }
},
{
  topic: " FÖLDRAJZ",
id: 186,
type: "sort",
  title: "Állítsd nyugat-keleti sorrendbe a transzszibériai vasút állomásait!",
  items: [
    { label: "A", text: "Vlagyivosztok" },
    { label: "B", text: "Irkutszk" },
    { label: "C", text: "Omszk" },
    { label: "D", text: "Moszkva" }
  ],
  correctOrder: ["D", "C", "B", "A"],
  learnMore: { summary: "Nyugat–kelet sorrendben: Moszkva ⇒ Omszk ⇒ Irkutszk ⇒ Vlagyivosztok." }
},
{
  topic: "SPORT",
id: 187,
type: "sort",
  title: "Állítsd olimpiai aranyérmük elnyerésének időrendjébe a felsorolt ökölvívóinkat! Kezd a legkorábbival!",
  items: [
    { label: "A", text: "Énekes István" },
    { label: "B", text: "Kovács István" },
    { label: "C", text: "Papp László" },
    { label: "D", text: "Gedó György" }
  ],
  correctOrder: ["A", "C", "D", "B"],
  learnMore: { summary: "Olimpiai aranyérmek szerint: Énekes István (1932) ⇒ Papp László (1948, 1952, 1956) ⇒ Gedó György (1972) ⇒ Kovács István (1996)." }
},
{
  topic: "SPORT",
id: 188,
type: "sort",
  title: "Állítsd olimpiai aranyérmük elnyerésének időrendjébe az alábbi kalapácsvetőket!",
  items: [
    { label: "A", text: "Zsivótzky Gyula" },
    { label: "B", text: "Kiss Balázs" },
    { label: "C", text: "Németh Imre" },
    { label: "D", text: "Csermák József" }
  ],
  correctOrder: ["C", "D", "A", "B"],
  learnMore: { summary: "Aranyérmek időrendje: Németh Imre (1948) ⇒ Csermák József (1952) ⇒ Zsivótzky Gyula (1968) ⇒ Kiss Balázs (1996)." }
},
{
  topic: "SZÍNHÁZ",
id: 189,
type: "sort",
  title: "Állítsd pályakezdésük időrendjébe a magyar színésznőket!",
  items: [
    { label: "A", text: "Csűrös Karola" },
    { label: "B", text: "Komlós Juci" },
    { label: "C", text: "Ivancsics Ilona" },
    { label: "D", text: "Malek Andrea" }
  ],
  correctOrder: ["B", "A", "C", "D"],
  learnMore: { summary: "Pályakezdés szerint: Komlós Juci (1930-as évek) ⇒ Csűrös Karola (1960-as évek) ⇒ Ivancsics Ilona (1980-as évek) ⇒ Malek Andrea (1990-es évek)." }
},
{
  topic: "FÖLDRAJZ",
id: 190,
type: "sort",
  title: "Állítsd sorba a 6-os út melletti településeket a főváros felé haladva!",
  items: [
    { label: "A", text: "Pécs" },
    { label: "B", text: "Szekszárd" },
    { label: "C", text: "Dunaújváros" },
    { label: "D", text: "Paks" }
  ],
  correctOrder: ["A", "B", "D", "C"],
  learnMore: { summary: "Települések sorrendje: Pécs ⇒ Szekszárd ⇒ Paks ⇒ Dunaújváros." }
},
{
  topic: "FÖLDRAJZ",
id: 191,
type: "sort",
  title: "Állítsd sorba a Budapest-Debrecen vasútvonal állomásait a fővárosból indulva!",
  items: [
    { label: "A", text: "Cegléd" },
    { label: "B", text: "Szolnok" },
    { label: "C", text: "Hajdúszoboszló" },
    { label: "D", text: "Karcag" }
  ],
  correctOrder: ["A", "B", "D", "C"],
  learnMore: { summary: "Vasútvonal sorrendben: Cegléd ⇒ Szolnok ⇒ Karcag ⇒ Hajdúszoboszló." }
},
{
  topic: "FILM",
id: 192,
type: "sort",
  title: "Állítsd sorba a filmsztárokat aszerint, hogy hány évig éltek! Kezd a legrövidebb életűvel!",
  items: [
    { label: "A", text: "Richard Burton" },
    { label: "B", text: "Henry Fonda" },
    { label: "C", text: "James Dean" },
    { label: "D", text: "Marilyn Monroe" }
  ],
  correctOrder: ["C", "D", "A", "B"],
  learnMore: { summary: "Életkor szerint: James Dean (24 év) ⇒ Marilyn Monroe (36 év) ⇒ Richard Burton (58 év) ⇒ Henry Fonda (77 év)." }
},
{
  topic: "FÖLDRAJZ",
id: 193,
type: "sort",
  title: "Állítsd sorba a folyókat maximális vízhozamuk szerint! Kezd a legkevesebbel!",
  items: [
    { label: "A", text: "Mississippi" },
    { label: "B", text: "Duna" },
    { label: "C", text: "Amazonas" },
    { label: "D", text: "Pó" }
  ],
  correctOrder: ["D", "B", "A", "C"],
  learnMore: { summary: "Maximális vízhozam szerint: Pó (~2 000 m³/s) ⇒ Duna (~6 500 m³/s) ⇒ Mississippi (~17 000 m³/s) ⇒ Amazonas (~209 000 m³/s)." }
},
{
  topic: "VALLÁS",
id: 194,
type: "sort",
  title: "Állítsd sorba a Jézus feltámadásával kapcsolatos eseményeket János evangéliuma szerint!",
  items: [
    { label: "A", text: "az üres sír felfedezése" },
    { label: "B", text: "az utolsó vacsora" },
    { label: "C", text: "Barrabás elengedése" },
    { label: "D", text: "Lázár feltámasztása" }
  ],
  correctOrder: ["D", "B", "C", "A"],
  learnMore: { summary: "János evangéliuma szerint: Lázár feltámasztása ⇒ utolsó vacsora ⇒ Barrabás elengedése ⇒ az üres sír felfedezése." }
},
{
  topic: "KÉPZŐMŰVÉSZET",
id: 195,
type: "sort",
  title: "Állítsd sorba a képeket aszerint, hány alak van a témájuk középpontjában! Kezd a legkevesebbel!",
  items: [
    { label: "A", text: "Mona Lisa" },
    { label: "B", text: "Majális" },
    { label: "C", text: "Hajóvontatók a Volgán" },
    { label: "D", text: "Az Arnolfini házaspár" }
  ],
  correctOrder: ["A", "D", "B", "C"],
  learnMore: { summary: "Alakok száma szerint: Mona Lisa (1) ⇒ Az Arnolfini házaspár (2) ⇒ Majális (több mint 10) ⇒ Hajóvontatók a Volgán (13)." }
},
{
  topic: "KÉPZŐMŰVÉSZET",
id: 196,
type: "sort",
  title: "Állítsd sorba a képzőművészeti alkotásokat nagyságuk szerint! Kezd a legkisebbel!",
  items: [
    { label: "A", text: "Mona Lisa" },
    { label: "B", text: "Feszty-körkép" },
    { label: "C", text: "Éjjeli őrjárat" },
    { label: "D", text: "Rőzsehordó nő" }
  ],
  correctOrder: ["A", "D", "C", "B"],
  learnMore: { summary: "Méret szerint: Mona Lisa (~77×53 cm) ⇒ Rőzsehordó nő (~140×100 cm) ⇒ Éjjeli őrjárat (~363×437 cm) ⇒ Feszty-körkép (~15×120 m)." }
},
{
  topic: "IRODALOM",
id: 197,
type: "sort",
  title: "Állítsd sorba a külföldi költőket aszerint, hány évig éltek! Kezd a legrövidebb életűvel!",
  items: [
    { label: "A", text: "Goethe" },
    { label: "B", text: "Schiller" },
    { label: "C", text: "Shelley" },
    { label: "D", text: "Horatius" }
  ],
  correctOrder: ["C", "B", "D", "A"],
  learnMore: { summary: "Életkor szerint: Shelley (30 év) ⇒ Schiller (45 év) ⇒ Horatius (57 év) ⇒ Goethe (83 év)." }
},
{
  topic: "SPORT",
id: 198,
type: "sort",
  title: "Állítsd sorba a legutóbbi olimpia magyar helyezettjeit! Kezd az aranyérmessel!",
  items: [
    { label: "A", text: "Nagy Tímea" },
    { label: "B", text: "Igaly Diána" },
    { label: "C", text: "Szabolcsi Szilvia" },
    { label: "D", text: "Márkus Erzsébet" }
  ],
  correctOrder: ["A", "D", "B", "C"],
  learnMore: { summary: "Helyezések szerint: Nagy Tímea (arany) ⇒ Márkus Erzsébet (ezüst) ⇒ Igaly Diána (bronz) ⇒ Szabolcsi Szilvia (4. hely)." }
},
{
  topic: "TÖRTÉNELEM",
id: 199,
type: "sort",
  title: "Állítsd sorba a magyar szabadságharc eseményeit! Kezd a legkorábbival!",
  items: [
    { label: "A", text: "pákozdi csata" },
    { label: "B", text: "Batthyány beiktatása" },
    { label: "C", text: "debreceni trónfosztás" },
    { label: "D", text: "segesvári csata" }
  ],
  correctOrder: ["B", "A", "C", "D"],
  learnMore: { summary: "Események időrendje: Batthyány beiktatása (1848. március) ⇒ pákozdi csata (1848. szeptember) ⇒ debreceni trónfosztás (1849. április) ⇒ segesvári csata (1849. július)." }
},
{
  topic: "IRODALOM",
id: 200,
type: "sort",
  title: "Állítsd sorba a műveket aszerint, hogy mely korban játszódnak! Kezd a legkorábbival!",
  items: [
    { label: "A", text: "Búcsú a fegyverektől" },
    { label: "B", text: "Nero, a véres költő" },
    { label: "C", text: "Oedipus Kolónoszban" },
    { label: "D", text: "A Tenkes kapitánya" }
  ],
  correctOrder: ["C", "B", "D", "A"],
  learnMore: { summary: "Korok szerint: Oedipus Kolónoszban (ókori Hellász) ⇒ Nero, a véres költő (Római Birodalom) ⇒ A Tenkes kapitánya (18. század) ⇒ Búcsú a fegyverektől (I. világháború)." }
},
{
  topic: "BIOLÓGIA",
id: 201,
type: "sort",
  title: "Állítsd sorba a rovarok kifejlődésének szakaszait! Kezd a legkorábbi állapottal!",
  items: [
    { label: "A", text: "báb" },
    { label: "B", text: "pete" },
    { label: "C", text: "lárva" },
    { label: "D", text: "imágó" }
  ],
  correctOrder: ["B", "C", "A", "D"],
  learnMore: { summary: "A rovar fejlődési szakaszai teljes átalakulás esetén: pete ⇒ lárva ⇒ báb ⇒ imágó (kifejlett rovar)." }
},
{
  topic: "IRODALOM",
id: 202,
type: "sort",
  title: "Állítsd sorba a verseket versszakaik száma szerint! Kezd a legkevesebbel!",
  items: [
    { label: "A", text: "Kölcsey: Himnusz" },
    { label: "B", text: "Ady: Párizsban járt az ősz" },
    { label: "C", text: "Petőfi: Nemzeti dal" },
    { label: "D", text: "Arany: A walesi bárdok" }
  ],
  correctOrder: ["B", "C", "A", "D"],
  learnMore: { summary: "Versszakok száma szerint: Ady: Párizsban járt az ősz (1) ⇒ Petőfi: Nemzeti dal (8) ⇒ Kölcsey: Himnusz (8 + 1 záró sor) ⇒ Arany: A walesi bárdok (27)." }
},
{
  topic: "OPERA",
id: 203,
type: "sort",
  title: "Állítsd sorba a zeneszerzőket aszerint, hány évig éltek! Kezd a legrövidebb életűvel!",
  items: [
    { label: "A", text: "Mozart" },
    { label: "B", text: "Chopin" },
    { label: "C", text: "Liszt Ferenc" },
    { label: "D", text: "Bartók Béla" }
  ],
  correctOrder: ["A", "B", "D", "C"],
  learnMore: { summary: "Életkor szerint: Mozart (35 év) ⇒ Chopin (39 év) ⇒ Bartók Béla (64 év) ⇒ Liszt Ferenc (74 év)." }
},
{
  topic: "ORSZÁGOK",
id: 204,
type: "sort",
  title: "Állítsd sorba az alábbi fővárosokat lakosságuk száma szerint! Kezd a legkevesebbel!",
  items: [
    { label: "A", text: "Párizs" },
    { label: "B", text: "Vaduz" },
    { label: "C", text: "Bécs" },
    { label: "D", text: "London" }
  ],
  correctOrder: ["B", "C", "A", "D"],
  learnMore: { summary: "Lakosság szerint: Vaduz (~5 000 fő) ⇒ Bécs (~1.9 millió) ⇒ Párizs (~2.1 millió) ⇒ London (~9 millió)." }
},
{
  topic: "NYELV",
id: 205,
type: "sort",
  title: "Állítsd sorba az alábbi nyelveket elterjedtségük mértéke szerint! Kezd a legtöbbek által beszélt nyelvvel!",
  items: [
    { label: "A", text: "kínai" },
    { label: "B", text: "perzsa" },
    { label: "C", text: "török" },
    { label: "D", text: "arab" }
  ],
  correctOrder: ["A", "D", "C", "B"],
  learnMore: { summary: "Elterjedtség szerint: kínai (1,3 milliárd) ⇒ arab (310 millió) ⇒ török (180 millió) ⇒ perzsa (110 millió)." }
},
{
  topic: "BIOLÓGIA",
id: 206,
type: "sort",
  title: "Állítsd sorba az állatokat aszerint, mennyi ideig vemhesek! Kezd a legrövidebbel!",
  items: [
    { label: "A", text: "kutya" },
    { label: "B", text: "csimpánz" },
    { label: "C", text: "elefánt" },
    { label: "D", text: "házi egér" }
  ],
  correctOrder: ["D", "A", "B", "C"],
  learnMore: { summary: "Vemhességi idő szerint: házi egér (~20 nap) ⇒ kutya (~63 nap) ⇒ csimpánz (~230 nap) ⇒ elefánt (~660 nap)." }
},
{
  topic: "TUDOMÁNY",
id: 207,
type: "sort",
  title: "Állítsd sorba az ásványokat szemcsekeménységük szerint! Kezd a legpuhábbal!",
  items: [
    { label: "A", text: "kvarc" },
    { label: "B", text: "kalcit" },
    { label: "C", text: "gipsz" },
    { label: "D", text: "grafit" }
  ],
  correctOrder: ["D", "C", "B", "A"],
  learnMore: { summary: "Szemcsekeménység szerint: grafit (1) ⇒ gipsz (2) ⇒ kalcit (3) ⇒ kvarc (7)." }
},
{
  topic: "IRODALOM",
id: 208,
type: "sort",
  title: "Állítsd sorba Az ember tragédiája alábbi színeit az előadás időrendjében!",
  items: [
    { label: "A", text: "a falanszter" },
    { label: "B", text: "a párizsi szín" },
    { label: "C", text: "az egyiptomi szín" },
    { label: "D", text: "a konstantinápolyi szín" }
  ],
  correctOrder: ["C", "D", "B", "A"],
  learnMore: { summary: "Előadás sorrendje: egyiptomi szín ⇒ konstantinápolyi szín ⇒ párizsi szín ⇒ falanszter." }
},
{
  topic: "FÖLDRAJZ",
id: 209,
type: "sort",
  title: "Állítsd sorba az európai kikötővárosokat keletről nyugat felé haladva!",
  items: [
    { label: "A", text: "Gdansk" },
    { label: "B", text: "Rotterdam" },
    { label: "C", text: "Koppenhága" },
    { label: "D", text: "Le Havre" }
  ],
  correctOrder: ["A", "C", "B", "D"],
  learnMore: { summary: "Kelet–nyugat sorrendben: Gdansk ⇒ Koppenhága ⇒ Rotterdam ⇒ Le Havre." }
},
{
  topic: "NYELV",
id: 210,
type: "sort",
  title: "Állítsd sorba az ógörög ábécé betűit az elejétől kezdve!",
  items: [
    { label: "A", text: "omega" },
    { label: "B", text: "alfa" },
    { label: "C", text: "pszi" },
    { label: "D", text: "gamma" }
  ],
  correctOrder: ["B", "D", "C", "A"],
  learnMore: { summary: "Görög ábécé sorrendben: alfa ⇒ gamma ⇒ pszi ⇒ omega (1., 3., 23., 24. betű)." }
},
{
  topic: "ORSZÁGOK",
id: 211,
type: "sort",
  title: "Állítsd sorba az országokat a férfiak születéskor várható élettartama szerint! Kezd a legkevesebbel!",
  items: [
    { label: "A", text: "Franciaország" },
    { label: "B", text: "Brazília" },
    { label: "C", text: "Kenya" },
    { label: "D", text: "Banglades" }
  ],
  correctOrder: ["D", "C", "B", "A"],
  learnMore: { summary: "Várható élettartam szerint: Banglades (~70 év) ⇒ Kenya (~67 év) ⇒ Brazília (~72 év) ⇒ Franciaország (~79 év)." }
},
{
  topic: "ORSZÁGOK",
id: 212,
type: "sort",
  title: "Állítsd sorba az országokat erdős területeik nagysága szerint! Kezd a legkevesebbel!",
  items: [
    { label: "A", text: "Oroszország" },
    { label: "B", text: "Ausztrália" },
    { label: "C", text: "USA" },
    { label: "D", text: "Magyarország" }
  ],
  correctOrder: ["D", "B", "C", "A"],
  learnMore: { summary: "Erdős terület szerint: Magyarország (~2 millió ha) ⇒ Ausztrália (~125 millió ha) ⇒ USA (~310 millió ha) ⇒ Oroszország (~815 millió ha)." }
},
{
  topic: "ORSZÁGOK",
id: 213,
type: "sort",
  title: "Állítsd sorba az országokat működő atomerőműveik száma szerint! Kezd a legkevesebbel!",
  items: [
    { label: "A", text: "Franciaország" },
    { label: "B", text: "USA" },
    { label: "C", text: "Ukrajna" },
    { label: "D", text: "Koreai Köztársaság" }
  ],
  correctOrder: ["D", "C", "A", "B"],
  learnMore: { summary: "Atomerőművek száma szerint: Koreai Köztársaság (~24) ⇒ Ukrajna (~15) ⇒ Franciaország (~56) ⇒ USA (~93)." }
},
{
  topic: "ORSZÁGOK",
id: 214,
type: "sort",
  title: "Állítsd sorba az országokat népsűrűségük szerint! Kezd a legkevesebbel!",
  items: [
    { label: "A", text: "Ciprus" },
    { label: "B", text: "Peru" },
    { label: "C", text: "Ausztrália" },
    { label: "D", text: "Kína" }
  ],
  correctOrder: ["C", "B", "A", "D"],
  learnMore: { summary: "Népsűrűség szerint: Ausztrália (~3 fő/km²) ⇒ Peru (~26 fő/km²) ⇒ Ciprus (~1300 fő/km²) ⇒ Kína (~150 fő/km²)." }
},
{
  topic: "TÖRTÉNELEM",
id: 215,
type: "sort",
  title: "Állítsd sorba Nagy-Britannia miniszterelnökeit beiktatásuk időrendje szerint!",
  items: [
    { label: "A", text: "John Major" },
    { label: "B", text: "Winston Churchill" },
    { label: "C", text: "Tony Blair" },
    { label: "D", text: "Margaret Thatcher" }
  ],
  correctOrder: ["B", "D", "A", "C"],
  learnMore: { summary: "Beiktatás szerint: Winston Churchill (1940) ⇒ Margaret Thatcher (1979) ⇒ John Major (1990) ⇒ Tony Blair (1997)." }
},
{
  topic: "FÖLDRAJZ",
id: 216,
type: "sort",
  title: "Állítsd sorba területük szerint az alábbi országokat! Kezd a legnagyobbal!",
  items: [
    { label: "A", text: "Vatikán" },
    { label: "B", text: "San Marino" },
    { label: "C", text: "Szlovénia" },
    { label: "D", text: "Málta" }
  ],
  correctOrder: ["C", "D", "B", "A"],
  learnMore: { summary: "Terület szerint: Szlovénia (~20 000 km²) ⇒ Málta (~316 km²) ⇒ San Marino (~61 km²) ⇒ Vatikán (~0.49 km²)." }
},
{
  topic: "FÖLDRAJZ",
id: 217,
type: "sort",
  title: "Állítsd sorrendbe a Balaton-parti településeket, Budapesttől való növekvő távolságuk szerint!",
  items: [
    { label: "A", text: "Siófok" },
    { label: "B", text: "Balatonszemes" },
    { label: "C", text: "Szántód" },
    { label: "D", text: "Fonyód" }
  ],
  correctOrder: ["A", "C", "B", "D"],
  learnMore: { summary: "Budapesttől való távolság szerint: Siófok (~105 km) ⇒ Szántód (~120 km) ⇒ Balatonszemes (~130 km) ⇒ Fonyód (~140 km)." }
},
{
  topic: "TUDOMÁNY",
id: 218,
type: "sort",
  title: "Állítsd sorrendbe a bolygókat a Naptól való közepes távolságuk szerint! Kezd a legközelebbivel!",
  items: [
    { label: "A", text: "Plútó" },
    { label: "B", text: "Föld" },
    { label: "C", text: "Mars" },
    { label: "D", text: "Merkúr" }
  ],
  correctOrder: ["D", "B", "C", "A"],
  learnMore: { summary: "Naptól való távolság szerint: Merkúr ⇒ Föld ⇒ Mars ⇒ Plútó." }
},
{
  topic: "BIOLÓGIA",
id: 219,
type: "sort",
  title: "Állítsd sorrendbe a felsorolt fákat magasságuk alapján! Kezd a legmagasabbal!",
  items: [
    { label: "A", text: "platánfa" },
    { label: "B", text: "jegenyefenyő" },
    { label: "C", text: "mamutfenyő" },
    { label: "D", text: "diófa" }
  ],
  correctOrder: ["C", "B", "A", "D"],
  learnMore: { summary: "Magasság szerint: mamutfenyő (90–100 m) ⇒ jegenyefenyő (30–60 m) ⇒ platánfa (20–35 m) ⇒ diófa (10–20 m)." }
},
{
  topic: "FÖLDRAJZ",
id: 220,
type: "sort",
  title: "Állítsd sorrendbe a felsorolt folyókat magyarországi hosszuk szerint! Kezd a leghosszabbal!",
  items: [
    { label: "A", text: "Rába" },
    { label: "B", text: "Duna" },
    { label: "C", text: "Hernád" },
    { label: "D", text: "Tisza" }
  ],
  correctOrder: ["D", "B", "A", "C"],
  learnMore: { summary: "Magyarországi hossz szerint: Tisza (~596 km) ⇒ Duna (~417 km) ⇒ Rába (~211 km) ⇒ Hernád (~118 km)." }
},
{
  topic: "ORSZÁGOK",
id: 221,
type: "sort",
  title: "Állítsd sorrendbe a felsorolt országokat népsűrűségük alapján! Kezd a legsűrűbben lakottal!",
  items: [
    { label: "A", text: "Hollandia" },
    { label: "B", text: "Nyugat-Szahara" },
    { label: "C", text: "Banglades" },
    { label: "D", text: "Magyarország" }
  ],
  correctOrder: ["C", "A", "D", "B"],
  learnMore: { summary: "Népsűrűség szerint: Banglades (~1100 fő/km²) ⇒ Hollandia (~520 fő/km²) ⇒ Magyarország (~105 fő/km²) ⇒ Nyugat-Szahara (~2 fő/km²)." }
},
{
  topic: "FÖLDRAJZ",
id: 222,
type: "sort",
  title: "Állítsd sorrendbe a felsorolt országokat területük nagysága alapján! Kezd a legnagyobbal!",
  items: [
    { label: "A", text: "Andorra" },
    { label: "B", text: "Írország" },
    { label: "C", text: "Japán" },
    { label: "D", text: "Kanada" }
  ],
  correctOrder: ["D", "C", "B", "A"],
  learnMore: { summary: "Terület szerint: Kanada (~9 984 000 km²) ⇒ Japán (~378 000 km²) ⇒ Írország (~70 000 km²) ⇒ Andorra (~468 km²)." }
},
{
  topic: "FILM",
id: 223,
type: "sort",
  title: "Állítsd sorrendbe a filmcímeket a hozzájuk tartozó számok alapján!",
  items: [
    { label: "A", text: "kicsi indián" },
    { label: "B", text: "mesterlövész" },
    { label: "C", text: "testőr" },
    { label: "D", text: "kiskutya" }
  ],
  correctOrder: ["C", "B", "A", "D"],
  learnMore: { summary: "Számok szerint: testőr (1) ⇒ mesterlövész (2) ⇒ kicsi indián (3) ⇒ kiskutya (4)." }
},
{
  topic: "IRODALOM",
id: 224,
type: "sort",
  title: "Állítsd sorrendbe a fogalmakat aszerint, ahogy a Szeptember végén című versben előfurdulnak!",
  items: [
    { label: "A", text: "téli világ" },
    { label: "B", text: "zöldellő nyárfa" },
    { label: "C", text: "kerti virágok" },
    { label: "D", text: "bérci tető" }
  ],
  correctOrder: ["C", "B", "A", "D"],
  learnMore: { summary: "A versbeli előfordulás sorrendje: kerti virágok ⇒ zöldellő nyárfa ⇒ téli világ ⇒ bérci tető." }
},
{
  topic: "FÖLDRAJZ",
id: 225,
type: "sort",
  title: "Állítsd sorrendbe a fővárosokat Budapesttől mért távolságuk szerint! Kezd a legközelebbivel!",
  items: [
    { label: "A", text: "Lisszabon" },
    { label: "B", text: "Tokió" },
    { label: "C", text: "Újdelhi" },
    { label: "D", text: "Bécs" }
  ],
  correctOrder: ["D", "A", "C", "B"],
  learnMore: { summary: "Távolság Budapesttől: Bécs (~250 km) ⇒ Lisszabon (~2500 km) ⇒ Újdelhi (~5700 km) ⇒ Tokió (~9300 km)." }
},
{
  topic: "TÖRTÉNELEM",
id: 226,
type: "sort",
  title: "Állítsd sorrendbe a híres történelmi forradalmakat!",
  items: [
    { label: "A", text: "őszirózsás forradalom" },
    { label: "B", text: "nagy francia forradalom" },
    { label: "C", text: "angol polgári forradalom" },
    { label: "D", text: "márciusi ifjak forradalma" }
  ],
  correctOrder: ["C", "B", "D", "A"],
  learnMore: { summary: "Forradalmak időrendje: angol polgári forradalom (1642–1651) ⇒ nagy francia forradalom (1789) ⇒ márciusi ifjak forradalma (1848) ⇒ őszirózsás forradalom (1918)." }
},
{
  topic: "TECHNIKA",
id: 227,
type: "sort",
  title: "Állítsd sorrendbe a következő szállítóeszközöket kerekeik száma alapján!",
  items: [
    { label: "A", text: "szekér" },
    { label: "B", text: "talicska" },
    { label: "C", text: "riksa" },
    { label: "D", text: "kamion" }
  ],
  correctOrder: ["B", "C", "A", "D"],
  learnMore: { summary: "Kerekek száma szerint: talicska (1) ⇒ riksza (2–3) ⇒ szekér (4) ⇒ kamion (6–18, típustól függően)." }
},
{
  topic: "TÖRTÉNELEM",
id: 228,
type: "sort",
  title: "Állítsd sorrendbe a miniszterelnököket aszerint, hány évesen léptek hivatalba! Kezd a legfiatalabbal!",
  items: [
    { label: "A", text: "Batthyány Lajos" },
    { label: "B", text: "Hegedűs András" },
    { label: "C", text: "Antall József" },
    { label: "D", text: "Horn Gyula" }
  ],
  correctOrder: ["B", "A", "C", "D"],
  learnMore: { summary: "Hivatalba lépéskor: Hegedűs András (33 éves) ⇒ Batthyány Lajos (41) ⇒ Antall József (60) ⇒ Horn Gyula (61)." }
},
{
  topic: "BIOLÓGIA",
id: 229,
type: "sort",
  title: "Állítsd sorrendbe a növényi sejt részeit belülről kifelé haladva!",
  items: [
    { label: "A", text: "maghártya" },
    { label: "B", text: "sejtplazma" },
    { label: "C", text: "sejtmag" },
    { label: "D", text: "sejtfal" }
  ],
  correctOrder: ["C", "A", "B", "D"],
  learnMore: { summary: "Sejtszerkezet belülről kifelé: sejtmag ⇒ maghártya ⇒ sejtplazma ⇒ sejtfal." }
},
{
  topic: "SPORT",
id: 230,
type: "sort",
  title: "Állítsd sorrendbe a sportágakat eddigi olimpiai aranyérmeink száma szerint! Kezd a legeredményesebbel!",
  items: [
    { label: "A", text: "cselgáncs" },
    { label: "B", text: "öttusa" },
    { label: "C", text: "vívás" },
    { label: "D", text: "kajak-kenu" }
  ],
  correctOrder: ["C", "D", "B", "A"],
  learnMore: { summary: "Aranyérmek száma szerint: vívás ⇒ kajak-kenu ⇒ öttusa ⇒ cselgáncs." }
},
{
  topic: "TUDOMÁNY",
id: 231,
type: "sort",
  title: "Állítsd sorrendbe a tudósokat Nobel-díjuk kézhezvételének időpontja alapján! Kezd a legkorábbival!",
  items: [
    { label: "A", text: "Albert Einstein" },
    { label: "B", text: "Szent-Györgyi Albert" },
    { label: "C", text: "Gábor Dénes" },
    { label: "D", text: "Conrad Röntgen" }
  ],
  correctOrder: ["D", "A", "B", "C"],
  learnMore: { summary: "Nobel-díj átvétele szerint: Conrad Röntgen (1901) ⇒ Albert Einstein (1921) ⇒ Szent-Györgyi Albert (1937) ⇒ Gábor Dénes (1971)." }
},
{
  topic: "FÖLDRAJZ",
id: 232,
type: "sort",
  title: "Állítsd sorrendbe a városokat az Egyenlítőtől való távolságuk szerint!",
  items: [
    { label: "A", text: "Helsinki" },
    { label: "B", text: "Singapore" },
    { label: "C", text: "Mexikóváros" },
    { label: "D", text: "Prága" }
  ],
  correctOrder: ["B", "C", "D", "A"],
  learnMore: { summary: "Egyenlítőtől való távolság szerint: Singapore (~1°N) ⇒ Mexikóváros (~19°N) ⇒ Prága (~50°N) ⇒ Helsinki (~60°N)." }
},
{
  topic: "FÖLDRAJZ",
id: 233,
type: "sort",
  title: "Állítsd sorrendbe a városokat Budapesttől mért távolságuk szerint! Kezd a legközelebbivel!",
  items: [
    { label: "A", text: "Nyíregyháza" },
    { label: "B", text: "Székesfehérvár" },
    { label: "C", text: "Vác" },
    { label: "D", text: "Szekszárd" }
  ],
  correctOrder: ["C", "B", "D", "A"],
  learnMore: { summary: "Budapesthez mért távolság szerint: Vác ⇒ Székesfehérvár ⇒ Szekszárd ⇒ Nyíregyháza." }
},
{
  topic: "BIOLÓGIA",
id: 234,
type: "sort",
  title: "Állítsd sorrendbe az alábbi állatokat fejlettségük szerint! Kezd a legfejlettlenebbel!",
  items: [
    { label: "A", text: "béka" },
    { label: "B", text: "krokodil" },
    { label: "C", text: "ponty" },
    { label: "D", text: "veréb" }
  ],
  correctOrder: ["C", "A", "B", "D"],
  learnMore: { summary: "Fejlettség szerint: ponty (hal) ⇒ béka (kétéltű) ⇒ krokodil (hüllő) ⇒ veréb (madár)." }
},
{
  topic: "BIOLÓGIA",
id: 235,
type: "sort",
  title: "Állítsd sorrendbe az alábbi állatokat lábuk száma szerint! Kezd a legkevesebbel!",
  items: [
    { label: "A", text: "madárpók" },
    { label: "B", text: "katicabogár" },
    { label: "C", text: "ökörszem" },
    { label: "D", text: "dromedár" }
  ],
  correctOrder: ["C", "D", "B", "A"],
  learnMore: { summary: "Lábak száma szerint: ökörszem (2) ⇒ dromedár (4) ⇒ katicabogár (6) ⇒ madárpók (8)." }
},
{
  topic: "ZENE",
id: 236,
type: "sort",
  title: "Állítsd sorrendbe az alábbi együtteseket tagjaik száma alapján! Kezd a legkevesebbel!",
  items: [
    { label: "A", text: "Irígy Hónaljmirigy" },
    { label: "B", text: "Ganxsta Zolee és a Kartel" },
    { label: "C", text: "Bon Bon" },
    { label: "D", text: "V.I.P." }
  ],
  correctOrder: ["C", "D", "B", "A"],
  learnMore: { summary: "Taglétszám szerint: Bon Bon (2 fő) ⇒ V.I.P. (4 fő) ⇒ Ganxsta Zolee és a Kartel (6 fő körül) ⇒ Irígy Hónaljmirigy (8 fő)." }
},
{
  topic: "FÖLDRAJZ",
id: 237,
type: "sort",
  title: "Állítsd sorrendbe az alábbi fővárosokat Budapesttől mért távolságuk alapján! Kezd a legközelebbivel!",
  items: [
    { label: "A", text: "Prága" },
    { label: "B", text: "Tokió" },
    { label: "C", text: "London" },
    { label: "D", text: "Róma" }
  ],
  correctOrder: ["A", "D", "C", "B"],
  learnMore: { summary: "Távolság Budapesttől: Prága (~530 km) ⇒ Róma (~830 km) ⇒ London (~1450 km) ⇒ Tokió (~9300 km)." }
},
{
  topic: "FÖLDRAJZ",
id: 238,
type: "sort",
  title: "Állítsd sorrendbe az alábbi fővárosokat nyugatról keleti irányba! Kezd a 0. hosszúsági foknál!",
  items: [
    { label: "A", text: "Bagdad" },
    { label: "B", text: "London" },
    { label: "C", text: "Tokió" },
    { label: "D", text: "Budapest" }
  ],
  correctOrder: ["B", "D", "A", "C"],
  learnMore: { summary: "Nyugat–kelet irányban: London ⇒ Budapest ⇒ Bagdad ⇒ Tokió." }
},
{
  topic: "OPERA",
id: 239,
type: "sort",
  title: "Állítsd sorrendbe az alábbi hangszereket húrjaik száma alapján! Kezd a legnagyobb húrúval!",
  items: [
    { label: "A", text: "klasszikus gitár" },
    { label: "B", text: "citera" },
    { label: "C", text: "hárfa" },
    { label: "D", text: "brácsa" }
  ],
  correctOrder: ["C", "B", "A", "D"],
  learnMore: { summary: "A helyes sorrend: hárfa ⇒ citera ⇒ klasszikus gitár ⇒ brácsa." }
},
{
  topic: "FÖLDRAJZ",
id: 240,
type: "sort",
  title: "Állítsd sorrendbe az alábbi magyar városokat nyugatról keleti irányba!",
  items: [
    { label: "A", text: "Debrecen" },
    { label: "B", text: "Szolnok" },
    { label: "C", text: "Székesfehérvár" },
    { label: "D", text: "Kőszeg" }
  ],
  correctOrder: ["D", "C", "B", "A"],
  learnMore: { summary: "Nyugat–kelet irányban: Kőszeg ⇒ Székesfehérvár ⇒ Szolnok ⇒ Debrecen." }
},
{
  topic: "BIOLÓGIA",
id: 241,
type: "sort",
  title: "Állítsd sorrendbe az alábbi növényeket fejlettségük szerint! Kezd a legfejlettlenebbel!",
  items: [
    { label: "A", text: "nyitvatermők" },
    { label: "B", text: "harasztok" },
    { label: "C", text: "gombák" },
    { label: "D", text: "moszatok" }
  ],
  correctOrder: ["D", "C", "B", "A"],
  learnMore: { summary: "Fejlettség szerint: moszatok ⇒ gombák ⇒ harasztok ⇒ nyitvatermők." }
},
{
  topic: "ORSZÁGOK",
id: 242,
type: "sort",
  title: "Állítsd sorrendbe az alábbi országokat lakosságuk száma szerint!",
  items: [
    { label: "A", text: "Izrael" },
    { label: "B", text: "Mexikó" },
    { label: "C", text: "Belgium" },
    { label: "D", text: "India" }
  ],
  correctOrder: ["A", "C", "B", "D"],
  learnMore: { summary: "Lakosság szerint: Izrael (~10 millió) ⇒ Belgium (~11,7 millió) ⇒ Mexikó (~129 millió) ⇒ India (~1,426 milliárd)." }
},
{
  topic: "FÖLDRAJZ",
id: 243,
type: "sort",
  title: "Állítsd sorrendbe az alábbi országokat területük nagysága alapján! Kezd a legnagyobbal!",
  items: [
    { label: "A", text: "Oroszország" },
    { label: "B", text: "Finnország" },
    { label: "C", text: "Mongólia" },
    { label: "D", text: "Andorra" }
  ],
  correctOrder: ["A", "C", "B", "D"],
  learnMore: { summary: "Terület szerint: Oroszország (~17 millió km²) ⇒ Mongólia (~1.56 millió km²) ⇒ Finnország (~338 000 km²) ⇒ Andorra (~468 km²)." }
},
{
  topic: "SPORT",
id: 244,
type: "sort",
  title: "Állítsd sorrendbe az alábbi sportágak labdáit méretük szerint! Kezd a legkisebbel!",
  items: [
    { label: "A", text: "tenisz" },
    { label: "B", text: "labdarúgás" },
    { label: "C", text: "kézilabda" },
    { label: "D", text: "asztalitenisz" }
  ],
  correctOrder: ["D", "A", "C", "B"],
  learnMore: { summary: "Labdaméret szerint: asztalitenisz (~4 cm) ⇒ tenisz (~6.7 cm) ⇒ kézilabda (~18 cm) ⇒ labdarúgás (~22 cm)." }
},
{
  topic: "FÖLDRAJZ",
id: 245,
type: "sort",
  title: "Állítsd sorrendbe az alábbi városokat északról déli irányba! Kezd a legészakibbal!",
  items: [
    { label: "A", text: "Prága" },
    { label: "B", text: "Róma" },
    { label: "C", text: "Szentpétervár" },
    { label: "D", text: "Kairó" }
  ],
  correctOrder: ["C", "A", "B", "D"],
  learnMore: { summary: "Észak–déli sorrendben: Szentpétervár ⇒ Prága ⇒ Róma ⇒ Kairó." }
},
{
  topic: "OPERA",
id: 246,
type: "sort",
  title: "Állítsd sorrendbe az alábbi zenei együtteseket a hangszerek száma szerint! Kezd a legkevesebbel!",
  items: [
    { label: "A", text: "kvartett" },
    { label: "B", text: "oktett" },
    { label: "C", text: "trió" },
    { label: "D", text: "szextett" }
  ],
  correctOrder: ["C", "A", "D", "B"],
  learnMore: { summary: "Hangszerek száma szerint: trió (3) ⇒ kvartett (4) ⇒ szextett (6) ⇒ oktett (8)." }
},
{
  topic: "JÁTÉK",
id: 247,
type: "sort",
  title: "Állítsd sorrendbe az alapállásban álló sakkfigurákat a tábla szélétől a közepe felé haladva!",
  items: [
    { label: "A", text: "bástya" },
    { label: "B", text: "vezér" },
    { label: "C", text: "huszár" },
    { label: "D", text: "futó" }
  ],
  correctOrder: ["A", "C", "D", "B"],
  learnMore: { summary: "Alapállásban kívülről befelé: bástya ⇒ huszár ⇒ futó ⇒ vezér." }
},
{
  topic: "BIOLÓGIA",
id: 248,
type: "sort",
  title: "Állítsd sorrendbe az emberi fogazat tagjait! Kezd középről!",
  items: [
    { label: "A", text: "zápfog" },
    { label: "B", text: "metszőfog" },
    { label: "C", text: "bölcsességfog" },
    { label: "D", text: "szemfog" }
  ],
  correctOrder: ["B", "D", "A", "C"],
  learnMore: { summary: "A fogazat középről kifelé: metszőfog ⇒ szemfog ⇒ zápfog ⇒ bölcsességfog." }
},
{
  topic: "FÖLDRAJZ",
id: 249,
type: "sort",
  title: "Állítsd sorrendbe az USA szövetségi államait az Atlanti-óceántól a Csendes-óceánig!",
  items: [
    { label: "A", text: "Kansas" },
    { label: "B", text: "Arizona" },
    { label: "C", text: "Kalifornia" },
    { label: "D", text: "Florida" }
  ],
  correctOrder: ["D", "A", "B", "C"],
  learnMore: { summary: "Kelet–nyugat irányban: Florida (keleti part) ⇒ Kansas (közép) ⇒ Arizona (nyugat) ⇒ Kalifornia (nyugati part)." }
},
{
  topic: "BIOLÓGIA",
id: 250,
type: "sort",
  title: "Állítsd sorrendbe bentről kifelé haladva a madártojás részeit!",
  items: [
    { label: "A", text: "sárgája" },
    { label: "B", text: "mészhéj" },
    { label: "C", text: "fehérje" },
    { label: "D", text: "héjhártya" }
  ],
  correctOrder: ["A", "C", "D", "B"],
  learnMore: { summary: "Madártojás részei belülről kifelé: sárgája ⇒ fehérje ⇒ héjhártya ⇒ mészhéj." }
},
{
  topic: "FÖLDRAJZ",
id: 251,
type: "sort",
  title: "Állítsd sorrendbe északról dél felé haladva a felsorolt olasz városokat!",
  items: [
    { label: "A", text: "Milánó" },
    { label: "B", text: "Nápoly" },
    { label: "C", text: "Firenze" },
    { label: "D", text: "Róma" }
  ],
  correctOrder: ["A", "C", "D", "B"],
  learnMore: { summary: "Észak–dél sorrendben: Milánó ⇒ Firenze ⇒ Róma ⇒ Nápoly." }
},
{
  topic: "BIOLÓGIA",
id: 252,
type: "sort",
  title: "Állítsd sorrendbe fejtetőtől talpig az emberi csontokat!",
  items: [
    { label: "A", text: "sarokcsont" },
    { label: "B", text: "térdkalács" },
    { label: "C", text: "csípőcsont" },
    { label: "D", text: "kulcscsont" }
  ],
  correctOrder: ["D", "C", "B", "A"],
  learnMore: { summary: "Fejtetőtől talpig: kulcscsont ⇒ csípőcsont ⇒ térdkalács ⇒ sarokcsont." }
},
{
  topic: "ÁLTALÁNOS",
id: 253,
type: "sort",
  title: "Állítsd sorrendbe talptól fejtetőig a ruhadarabokat viselésük helye szerint!",
  items: [
    { label: "A", text: "bricsesz" },
    { label: "B", text: "párta" },
    { label: "C", text: "mente" },
    { label: "D", text: "klumpa" }
  ],
  correctOrder: ["D", "A", "C", "B"],
  learnMore: { summary: "Viselés szerint: klumpa (láb) ⇒ bricsesz (láb–csípő) ⇒ mente (felsőtest) ⇒ párta (fej)." }
},
{
  topic: "FÖLDRAJZ",
id: 254,
type: "sort",
  title: "Állítsd sorrendbe területük alapján az alábbi európai országokat! Kezd a legnagyobbal!",
  items: [
    { label: "A", text: "Lengyelország" },
    { label: "B", text: "Luxemburg" },
    { label: "C", text: "Vatikán" },
    { label: "D", text: "Franciaország" }
  ],
  correctOrder: ["D", "A", "B", "C"],
  learnMore: { summary: "Terület szerint: Franciaország (551 695 km²) ⇒ Lengyelország (312 696 km²) ⇒ Luxemburg (2 586 km²) ⇒ Vatikán (0,49 km²)." }
},
{
  topic: "FÖLDRAJZ",
id: 255,
type: "sort",
  title: "Állítsd sorrendbe területük szerint az alábbi sivatagokat! Kezd a legnagyobbal!",
  items: [
    { label: "A", text: "Szahara" },
    { label: "B", text: "Kara-kum" },
    { label: "C", text: "Góbi" },
    { label: "D", text: "Atacama" }
  ],
  correctOrder: ["A", "C", "B", "D"],
  learnMore: { summary: "Terület szerint: Szahara (~9 200 000 km²) ⇒ Góbi (~1 300 000 km²) ⇒ Kara-kum (~350 000 km²) ⇒ Atacama (~105 000 km²)." }
},
{
  topic: "ÁLTALÁNOS",
id: 256,
type: "sort",
  title: "Állítsd sorrendbe viselésük helye szerint talptól fejtetőig a ruhadarabokat!",
  items: [
    { label: "A", text: "krinolin" },
    { label: "B", text: "turbán" },
    { label: "C", text: "mokaszin" },
    { label: "D", text: "dolmány" }
  ],
  correctOrder: ["C", "A", "D", "B"],
  learnMore: { summary: "Viselés szerint: mokaszin (láb) ⇒ krinolin (csípő–derék) ⇒ dolmány (felsőtest) ⇒ turbán (fej)." }
},
{
  topic: "IRODALOM",
id: 257,
type: "sort",
  title: "Állítsd születésük időrendjébe a felsorolt francia irodalmárokat! Kezd a legkorábbival!",
  items: [
    { label: "A", text: "La Fontaine" },
    { label: "B", text: "Victor Hugo" },
    { label: "C", text: "Apollinaire" },
    { label: "D", text: "Villon" }
  ],
  correctOrder: ["D", "A", "B", "C"],
  learnMore: { summary: "Születés szerint: Villon (~1431) ⇒ La Fontaine (1621) ⇒ Victor Hugo (1802) ⇒ Apollinaire (1880)." }
},
{
  topic: "OPERA",
id: 258,
type: "sort",
  title: "Állítsd születésük időrendjébe a felsorolt híres magyar operaénekeseket!",
  items: [
    { label: "A", text: "Simándy József" },
    { label: "B", text: "Polgár László" },
    { label: "C", text: "Székely Mihály" },
    { label: "D", text: "Melis György" }
  ],
  correctOrder: ["C", "A", "D", "B"],
  learnMore: { summary: "Születés szerint: Székely Mihály (1901) ⇒ Simándy József (1916) ⇒ Melis György (1923) ⇒ Polgár László (1947)." }
},
{
  topic: "TÖRTÉNELEM",
id: 259,
type: "sort",
  title: "Állítsd születésük időrendjébe a híres hadvezéreket!",
  items: [
    { label: "A", text: "Miltiadész" },
    { label: "B", text: "Periklész" },
    { label: "C", text: "Julius Caesar" },
    { label: "D", text: "Hannibál" }
  ],
  correctOrder: ["A", "B", "D", "C"],
  learnMore: { summary: "Születés szerint: Miltiadész (~Kr. e. 550) ⇒ Periklész (~Kr. e. 495) ⇒ Hannibál (~Kr. e. 247) ⇒ Julius Caesar (~Kr. e. 100)." }
},
{
  topic: "TUDOMÁNY",
id: 260,
type: "sort",
  title: "Állítsd születésük időrendjébe a híres orvosokat!",
  items: [
    { label: "A", text: "Christian Barnard" },
    { label: "B", text: "Hippokratész" },
    { label: "C", text: "Semmelweis Ignác" },
    { label: "D", text: "Paracelsus" }
  ],
  correctOrder: ["B", "D", "C", "A"],
  learnMore: { summary: "Születés szerint: Hippokratész (~Kr. e. 460) ⇒ Paracelsus (1493) ⇒ Semmelweis Ignác (1818) ⇒ Christian Barnard (1922)." }
},
{
  topic: "SZÍNHÁZ",
id: 261,
type: "sort",
  title: "Állítsd születésük időrendjébe a magyar színészeket!",
  items: [
    { label: "A", text: "Zenthe Ferenc" },
    { label: "B", text: "Csortos Gyula" },
    { label: "C", text: "Huszti Péter" },
    { label: "D", text: "Kulka János" }
  ],
  correctOrder: ["B", "A", "C", "D"],
  learnMore: { summary: "Születés szerint: Csortos Gyula (1883) ⇒ Zenthe Ferenc (1920) ⇒ Huszti Péter (1942) ⇒ Kulka János (1958)." }
},
{
  topic: "SZÍNHÁZ",
id: 262,
type: "sort",
  title: "Állítsd születésük időrendjébe a magyar színészeket!",
  items: [
    { label: "A", text: "Rátonyi Róbert" },
    { label: "B", text: "Feleki Kamill" },
    { label: "C", text: "Bodrogi Gyula" },
    { label: "D", text: "Rudolf Péter" }
  ],
  correctOrder: ["B", "A", "C", "D"],
  learnMore: { summary: "Születés szerint: Feleki Kamill (1909) ⇒ Rátonyi Róbert (1923) ⇒ Bodrogi Gyula (1934) ⇒ Rudolf Péter (1959)." }
},
{
  topic: "OPERA",
id: 263,
type: "sort",
  title: "Állítsd születésük időrendjébe a magyar zeneszerzőket!",
  items: [
    { label: "A", text: "Presser Gábor" },
    { label: "B", text: "Erkel Ferenc" },
    { label: "C", text: "Petrovics Emil" },
    { label: "D", text: "Kálmán Imre" }
  ],
  correctOrder: ["B", "D", "C", "A"],
  learnMore: { summary: "Születés szerint: Erkel Ferenc (1810) ⇒ Kálmán Imre (1882) ⇒ Petrovics Emil (1930) ⇒ Presser Gábor (1948)." }
},
{
  topic: "IRODALOM",
id: 264,
type: "sort",
  title: "Állítsd születésük időrendjébe a neves írónőket!",
  items: [
    { label: "A", text: "Jane Austen" },
    { label: "B", text: "Simone de Beauvoir" },
    { label: "C", text: "George Sand" },
    { label: "D", text: "J.K. Rowling" }
  ],
  correctOrder: ["A", "C", "B", "D"],
  learnMore: { summary: "Születés szerint: Jane Austen (1775) ⇒ George Sand (1804) ⇒ Simone de Beauvoir (1908) ⇒ J.K. Rowling (1965)." }
},
{
  topic: "SPORT",
id: 265,
type: "sort",
  title: "Állítsd születésük időrendjébe a neves magyar sakkozókat!",
  items: [
    { label: "A", text: "Portisch Lajos" },
    { label: "B", text: "Polgár Judit" },
    { label: "C", text: "Lékó Péter" },
    { label: "D", text: "Polgár Zsófia" }
  ],
  correctOrder: ["A", "D", "B", "C"],
  learnMore: { summary: "Születés szerint: Portisch Lajos (1937) ⇒ Polgár Zsófia (1974) ⇒ Polgár Judit (1976) ⇒ Lékó Péter (1979)." }
},
{
  topic: "TECHNIKA",
id: 266,
type: "sort",
  title: "Állítsd születésük időrendjébe a repülés történetének nagy alakjait!",
  items: [
    { label: "A", text: "Blériot" },
    { label: "B", text: "Montgolfier testvérek" },
    { label: "C", text: "Zeppelin" },
    { label: "D", text: "Lindbergh" }
  ],
  correctOrder: ["B", "C", "A", "D"],
  learnMore: { summary: "Születés szerint: Montgolfier testvérek (1740-es évek) ⇒ Zeppelin (1838) ⇒ Blériot (1872) ⇒ Lindbergh (1902)." }
},
{
  topic: "SZÍNHÁZ",
id: 267,
type: "sort",
  title: "Állítsd születésük időrendjébe az alábbi magyar színészeket! Kezd a legkorábbival!",
  items: [
    { label: "A", text: "Lendvay Márton" },
    { label: "B", text: "Latinovits Zoltán" },
    { label: "C", text: "Kabos Gyula" },
    { label: "D", text: "Básti Lajos" }
  ],
  correctOrder: ["A", "C", "D", "B"],
  learnMore: { summary: "Születés szerint: Lendvay Márton (1807) ⇒ Kabos Gyula (1887) ⇒ Básti Lajos (1911) ⇒ Latinovits Zoltán (1931)." }
},
{
  topic: "OPERA",
id: 268,
type: "sort",
  title: "Állítsd születésük időrendjébe az alábbi német zeneszerzőket!",
  items: [
    { label: "A", text: "Schumann" },
    { label: "B", text: "Beethoven" },
    { label: "C", text: "Telemann" },
    { label: "D", text: "Richard Strauss" }
  ],
  correctOrder: ["C", "B", "A", "D"],
  learnMore: { summary: "Születés szerint: Telemann (1681) ⇒ Beethoven (1770) ⇒ Schumann (1810) ⇒ Richard Strauss (1864)." }
},
{
  topic: "ZENE",
id: 269,
type: "sort",
  title: "Állítsd születésük sorrendjébe a következő külföldi énekesnőket!",
  items: [
    { label: "A", text: "Tina Turner" },
    { label: "B", text: "Ella Fitzgerald" },
    { label: "C", text: "Diana Ross" },
    { label: "D", text: "Madonna" }
  ],
  correctOrder: ["B", "A", "C", "D"],
  learnMore: { summary: "Születés szerint: Ella Fitzgerald (1917) ⇒ Tina Turner (1939) ⇒ Diana Ross (1944) ⇒ Madonna (1958)." }
},
{
  topic: "TÖRTÉNELEM",
id: 270,
type: "sort",
  title: "Állítsd születésük sorrendjébe a török elleni harc jelentős hadvezéreit!",
  items: [
    { label: "A", text: "Hunyadi János" },
    { label: "B", text: "Zrínyi Miklós" },
    { label: "C", text: "Tomori Pál" },
    { label: "D", text: "Savoyai Jenő" }
  ],
  correctOrder: ["A", "C", "B", "D"],
  learnMore: { summary: "Születés szerint: Hunyadi János (1407) ⇒ Tomori Pál (~1475) ⇒ Zrínyi Miklós (1620) ⇒ Savoyai Jenő (1663)." }
},
{
  topic: "ZENE",
id: 271,
type: "sort",
  title: "Állítsd születésük sorrendjébe az alább felsorolt rockzenészeket! Kezd a legkorábbival!",
  items: [
    { label: "A", text: "Bill Haley" },
    { label: "B", text: "Jimi Hendrix" },
    { label: "C", text: "Michael Jackson" },
    { label: "D", text: "Elvis Presley" }
  ],
  correctOrder: ["A", "D", "B", "C"],
  learnMore: { summary: "Születés szerint: Bill Haley (1925) ⇒ Elvis Presley (1935) ⇒ Jimi Hendrix (1942) ⇒ Michael Jackson (1958)." }
},
{
  topic: "OPERA",
id: 272,
type: "sort",
  title: "Állítsd születésük sorrendjébe az alábbi olasz zeneszerzőket!",
  items: [
    { label: "A", text: "Rossini" },
    { label: "B", text: "Monteverdi" },
    { label: "C", text: "Vivaldi" },
    { label: "D", text: "Verdi" }
  ],
  correctOrder: ["B", "C", "A", "D"],
  learnMore: { summary: "Születés szerint: Monteverdi (1567) ⇒ Vivaldi (1678) ⇒ Rossini (1792) ⇒ Verdi (1813)." }
},
{
  topic: "ORSZÁGOK",
id: 273,
type: "sort",
  title: "Állítsd területük nagysága szerinti növekvő sorrendbe az alábbi dél-amerikai országokat!",
  items: [
    { label: "A", text: "Suriname" },
    { label: "B", text: "Argentína" },
    { label: "C", text: "Kolumbia" },
    { label: "D", text: "Brazília" }
  ],
  correctOrder: ["A", "C", "B", "D"],
  learnMore: { summary: "Terület szerint: Suriname (~163 820 km²) ⇒ Kolumbia (~1 141 748 km²) ⇒ Argentína (~2 780 400 km²) ⇒ Brazília (~8 515 767 km²)." }
},
{
  topic: "FÖLDRAJZ",
id: 274,
type: "sort",
  title: "Állítsd területük nagysága szerinti sorrendbe az alábbi európai miniállamokat! Kezd a legkisebbel!",
  items: [
    { label: "A", text: "Vatikán" },
    { label: "B", text: "Liechtenstein" },
    { label: "C", text: "Monaco" },
    { label: "D", text: "San Marino" }
  ],
  correctOrder: ["A", "C", "D", "B"],
  learnMore: { summary: "Terület szerint: Vatikán (~0.49 km²) ⇒ Monaco (~2.02 km²) ⇒ San Marino (~61 km²) ⇒ Liechtenstein (~160 km²)." }
},
{
  topic: "FÖLDRAJZ",
id: 275,
type: "sort",
  title: "Állítsd területük szerinti növekvő sorrendbe az alábbi szigeteket!",
  items: [
    { label: "A", text: "Jáva" },
    { label: "B", text: "Ciprus" },
    { label: "C", text: "Sri Lanka" },
    { label: "D", text: "Málta" }
  ],
  correctOrder: ["D", "B", "C", "A"],
  learnMore: { summary: "Terület szerint: Málta (~316 km²) ⇒ Ciprus (~9 251 km²) ⇒ Sri Lanka (~65 610 km²) ⇒ Jáva (~128 297 km²)." }
},
{
  topic: "BIOLÓGIA",
id: 276,
type: "sort",
  title: "Állítsd testméretük emelkedő sorrendjébe az alábbi majmokat!",
  items: [
    { label: "A", text: "galléros pávián" },
    { label: "B", text: "ezüst selyemmajom" },
    { label: "C", text: "gorilla" },
    { label: "D", text: "mocsári cerkóf" }
  ],
  correctOrder: ["B", "D", "A", "C"],
  learnMore: { summary: "Testméret szerint: ezüst selyemmajom (~30 cm) ⇒ mocsári cerkóf (~50 cm) ⇒ galléros pávián (~70 cm) ⇒ gorilla (~170 cm)." }
},
{
  topic: "OPERA",
id: 277,
type: "sort",
  title: "Állítsd történési sorrendbe a Bartók Béla életével kapcsolatos eseményeket!",
  items: [
    { label: "A", text: "első népdalgyűjtő körút" },
    { label: "B", text: "tanórák Erkel Lászlótól" },
    { label: "C", text: "emigráció" },
    { label: "D", text: "„A kékszakállú …” megírása" }
  ],
  correctOrder: ["B", "A", "D", "C"],
  learnMore: { summary: "Események sorrendje: tanórák Erkel Lászlótól (1890-es évek) ⇒ első népdalgyűjtő körút (1905) ⇒ „A kékszakállú…” megírása (1911) ⇒ emigráció (1940)." }
},
{
  topic: "IRODALOM",
id: 278,
type: "sort",
  title: "Állítsd történésük időrendjébe a Robinson Crusoe című regény eseményeit!",
  items: [
    { label: "A", text: "hajótörés" },
    { label: "B", text: "csónakfaragás" },
    { label: "C", text: "a tisztek kiszabadítása" },
    { label: "D", text: "találkozás Péntekkel" }
  ],
  correctOrder: ["A", "B", "D", "C"],
  learnMore: { summary: "Robinson Crusoe eseményei: hajótörés ⇒ csónakfaragás ⇒ találkozás Péntekkel ⇒ a tisztek kiszabadítása." }
},
{
  topic: "TÖRTÉNELEM",
id: 279,
type: "sort",
  title: "Állítsd uralkodásuk időrendjébe a felsorolt brit uralkodókat!",
  items: [
    { label: "A", text: "I. (Oroszlánszívű) Richard" },
    { label: "B", text: "II. Erzsébet" },
    { label: "C", text: "Viktória" },
    { label: "D", text: "VIII. Henrik" }
  ],
  correctOrder: ["A", "D", "C", "B"],
  learnMore: { summary: "Uralkodás szerint: I. (Oroszlánszívű) Richard (1189–1199) ⇒ VIII. Henrik (1509–1547) ⇒ Viktória (1837–1901) ⇒ II. Erzsébet (1952–2022)." }
},
{
  topic: "TÖRTÉNELEM",
id: 280,
type: "sort",
  title: "Állítsd uralkodásuk időrendjébe az alábbi híres uralkodónőket!",
  items: [
    { label: "A", text: "Viktória" },
    { label: "B", text: "Mária Terézia" },
    { label: "C", text: "I. Erzsébet" },
    { label: "D", text: "Kleopátra" }
  ],
  correctOrder: ["D", "C", "B", "A"],
  learnMore: { summary: "Uralkodónők időrendben: Kleopátra (Kr. e. 193–176) ⇒ I. Erzsébet (1558–1603) ⇒ Mária Terézia (1740–1780) ⇒ Viktória (1837–1901)." }
},
{
  topic: "TÖRTÉNELEM",
id: 281,
type: "sort",
  title: "Állítsd uralkodásuk sorrendjébe az alábbi Árpád-házi királyokat!",
  items: [
    { label: "A", text: "I. István" },
    { label: "B", text: "IV. (Kun) László" },
    { label: "C", text: "I. László" },
    { label: "D", text: "III. Béla" }
  ],
  correctOrder: ["A", "C", "D", "B"],
  learnMore: { summary: "Uralkodás szerint: I. István (1000–1038) ⇒ I. László (1077–1095) ⇒ III. Béla (1172–1196) ⇒ IV. (Kun) László (1272–1290)." }
},
{
  topic: "BIOLÓGIA",
id: 282,
type: "sort",
  title: "Állítsd virágzásuk kezdetének időrendi sorrendjébe az alábbi virágokat! Kezd a legkorábbival!",
  items: [
    { label: "A", text: "hóvirág" },
    { label: "B", text: "krizantém" },
    { label: "C", text: "orgona" },
    { label: "D", text: "jácint" }
  ],
  correctOrder: ["A", "D", "C", "B"],
  learnMore: { summary: "Virágzás kezdete szerint: hóvirág (február) ⇒ jácint (március) ⇒ orgona (április–május) ⇒ krizantém (október–november)." }
},
{
  topic: "TUDOMÁNY",
id: 283,
type: "sort",
  title: "Állítsd a bolygókat növekvő sorrendbe ismert holdjaik alapján!",
  items: [
    { label: "A", text: "Föld" },
    { label: "B", text: "Mars" },
    { label: "C", text: "Jupiter" },
    { label: "D", text: "Uránusz" }
  ],
  correctOrder: ["A", "B", "D", "C"],
  learnMore: { summary: "Holdak száma szerint: Föld (1) ⇒ Mars (2) ⇒ Uránusz (27) ⇒ Jupiter (95+)." }
},
{
  topic: "ÁLTALÁNOS",
id: 284,
type: "sort",
  title: "Állítsd sorrendbe az alábbi katonai rendfokozatokat! Kezd a legalacsonyabbal!",
  items: [
    { label: "A", text: "hadnagy" },
    { label: "B", text: "ezredes" },
    { label: "C", text: "százados" },
    { label: "D", text: "őrmester" }
  ],
  correctOrder: ["D", "A", "C", "B"],
  learnMore: { summary: "Rendfokozatok növekvő sorrendben: őrmester ⇒ hadnagy ⇒ százados ⇒ ezredes." }
},
{
  topic: "NYELV",
id: 285,
type: "sort",
  title: "Tedd időrendi sorrendbe az alábbi írásfajtákat! Kezd a legkorábbival!",
  items: [
    { label: "A", text: "cirill írás" },
    { label: "B", text: "görög írás" },
    { label: "C", text: "hieroglif írás" },
    { label: "D", text: "arab írás" }
  ],
  correctOrder: ["C", "B", "D", "A"],
  learnMore: { summary: "Keletkezés szerint: hieroglif írás (~Kr. e. 3000) ⇒ görög írás (~Kr. e. 800) ⇒ arab írás (~Kr. u. 400) ⇒ cirill írás (~Kr. u. 900)." }
},
{
  topic: "MAGYARORSZÁG",
id: 286,
type: "sort",
  title: "Tedd népesség szerinti sorrendbe az alábbi magyar megyeszékhelyeket! Kezd a legnépesebbel!",
  items: [
    { label: "A", text: "Győr" },
    { label: "B", text: "Debrecen" },
    { label: "C", text: "Szekszárd" },
    { label: "D", text: "Szolnok" }
  ],
  correctOrder: ["B", "A", "D", "C"],
  learnMore: { summary: "Népesség szerint: Debrecen (~200 000 fő) ⇒ Győr (~130 000 fő) ⇒ Szolnok (~70 000 fő) ⇒ Szekszárd (~30 000 fő)." }
},
{
  topic: "FILM",
id: 287,
type: "sort",
  title: "Állítsd időrendi sorrendbe a következő magyar filmeket! Kezd a legkorábbival!",
  items: [
    { label: "A", text: "Halálos tavasz" },
    { label: "B", text: "Körhinta" },
    { label: "C", text: "Mephisto" },
    { label: "D", text: "Valahol Európában" }
  ],
  correctOrder: ["A", "D", "B", "C"],
  learnMore: { summary: "Bemutatás szerint: Halálos tavasz (1939) ⇒ Valahol Európában (1947) ⇒ Körhinta (1956) ⇒ Mephisto (1981)." }
},
{
  topic: "SPORT",
id: 288,
type: "sort",
  title: "Állítsd időrendi sorrendbe az alábbi aranylabdás futballistákat! Kezd a legkorábbival!",
  items: [
    { label: "A", text: "Alfredo di Stefano" },
    { label: "B", text: "Michel Platini" },
    { label: "C", text: "Albert Flórián" },
    { label: "D", text: "Zinedine Zidane" }
  ],
  correctOrder: ["A", "C", "B", "D"],
  learnMore: { summary: "Aranylabdások sorrendje: Alfredo di Stefano (1957) ⇒ Albert Flórián (1967) ⇒ Michel Platini (1983–85) ⇒ Zinedine Zidane (1998)." }
},
{
  topic: "SPORT",
id: 289,
type: "sort",
  title: "Milyen sorrendben követik egymást az egyes úszásnemek a vegyesúszásban?",
  items: [
    { label: "A", text: "hátúszás" },
    { label: "B", text: "mellúszás" },
    { label: "C", text: "pillangóúszás" },
    { label: "D", text: "gyorsúszás" }
  ],
  correctOrder: ["C", "A", "B", "D"],
  learnMore: { summary: "Vegyesúszás sorrendje: pillangóúszás ⇒ hátúszás ⇒ mellúszás ⇒ gyorsúszás." }
},
{
  topic: "TÖRTÉNELEM",
id: 290,
type: "sort",
  title: "Milyen sorrendben követték egymást a felsorolt amerikai elnökök?",
  items: [
    { label: "A", text: "Jimmy Carter" },
    { label: "B", text: "Richard Nixon" },
    { label: "C", text: "Gerald Ford" },
    { label: "D", text: "Ronald Reagan" }
  ],
  correctOrder: ["B", "C", "A", "D"],
  learnMore: { summary: "Elnöki sorrend: Richard Nixon (1969–1974) ⇒ Gerald Ford (1974–1977) ⇒ Jimmy Carter (1977–1981) ⇒ Ronald Reagan (1981–1989)." }
},
{
  topic: "TÖRTÉNELEM",
id: 291,
type: "sort",
  title: "Milyen sorrendben voltak hatalmon az alábbi szovjet pártfőtitkárok?",
  items: [
    { label: "A", text: "Nyikita Hruscsov" },
    { label: "B", text: "Leonyid Brezsnyev" },
    { label: "C", text: "Mihail Gorbacsov" },
    { label: "D", text: "Jurij Andropov" }
  ],
  correctOrder: ["A", "B", "D", "C"],
  learnMore: { summary: "Pártfőtitkárok sorrendje: Nyikita Hruscsov (1953–1964) ⇒ Leonyid Brezsnyev (1964–1982) ⇒ Jurij Andropov (1982–1984) ⇒ Mihail Gorbacsov (1985–1991)." }
},
{
  topic: "IRODALOM",
id: 292,
type: "sort",
  title: "Tedd 'megszületésük' időrendjébe az alábbi irodalmi alakokat!",
  items: [
    { label: "A", text: "Raszkolnyikov" },
    { label: "B", text: "Svejk" },
    { label: "C", text: "Anyegin" },
    { label: "D", text: "Gulliver" }
  ],
  correctOrder: ["D", "C", "A", "B"],
  learnMore: { summary: "Megjelenés szerint: Gulliver (1726) ⇒ Anyegin (1833) ⇒ Raszkolnyikov (1866) ⇒ Svejk (1921)." }
},
{
  topic: "SPORT",
id: 293,
type: "sort",
  title: "Tedd a 2000-es olimpia futóit aranyérmes számuk távjának sorrendjébe! Kezd a rövidtávval!",
  items: [
    { label: "A", text: "Haile Gebrselassie" },
    { label: "B", text: "Konsztantinosz Kenterisz" },
    { label: "C", text: "Michael Johnson" },
    { label: "D", text: "Maurice Greene" }
  ],
  correctOrder: ["D", "B", "C", "A"],
  learnMore: { summary: "Táv szerint: Maurice Greene (100 m) ⇒ Konsztantinosz Kenterisz (200 m) ⇒ Michael Johnson (400 m) ⇒ Haile Gebrselassie (10 000 m)." }
},
{
  topic: "OPERA",
id: 294,
type: "sort",
  title: "Tedd a bennük szereplő hangszerek számának növekvő sorrendjébe az alábbi zenei együtteseket!",
  items: [
    { label: "A", text: "kvartett" },
    { label: "B", text: "oktett" },
    { label: "C", text: "vonóstrió" },
    { label: "D", text: "fúvósötös" }
  ],
  correctOrder: ["C", "A", "D", "B"],
  learnMore: { summary: "Hangszerek száma szerint: vonóstrió (3) ⇒ kvartett (4) ⇒ fúvósötös (5) ⇒ oktett (8)." }
},
{
  topic: "VALLÁS",
id: 295,
type: "sort",
  title: "Tedd a Biblia könyveit történeti sorrendbe!",
  items: [
    { label: "A", text: "Kivonulás könyve" },
    { label: "B", text: "Teremtés könyve" },
    { label: "C", text: "Jób könyve" },
    { label: "D", text: "Jónás könyve" }
  ],
  correctOrder: ["B", "A", "C", "D"],
  learnMore: { summary: "Történeti sorrendben: Teremtés könyve ⇒ Kivonulás könyve ⇒ Jób könyve ⇒ Jónás könyve." }
},
{
  topic: "SPORT",
id: 296,
type: "sort",
  title: "Tedd a csapatokat pályán lévő tagjaik számának emelkedő sorrendjébe! Kezd a legkevesebbel!",
  items: [
    { label: "A", text: "kézilabda" },
    { label: "B", text: "labdarúgás" },
    { label: "C", text: "rögbi" },
    { label: "D", text: "röplabda" }
  ],
  correctOrder: ["D", "A", "B", "C"],
  learnMore: { summary: "Pályán lévő játékosok száma szerint: röplabda (6) ⇒ kézilabda (7) ⇒ labdarúgás (11) ⇒ rögbi (15)." }
},
{
  topic: "IRODALOM",
id: 297,
type: "sort",
  title: "Tedd a drámaírókat születésük szerint időrendbe!",
  items: [
    { label: "A", text: "Moliére" },
    { label: "B", text: "Shakespeare" },
    { label: "C", text: "Csehov" },
    { label: "D", text: "Szophoklész" }
  ],
  correctOrder: ["D", "B", "A", "C"],
  learnMore: { summary: "Drámaírók születése szerint: Szophoklész (Kr. e. 497) ⇒ Shakespeare (1564) ⇒ Moliére (1622) ⇒ Csehov (1860)." }
},
{
  topic: "FÖLDRAJZ",
id: 298,
type: "sort",
  title: "Tedd a Duna folyásiránya szerint megfelelő sorrendbe a városokat!",
  items: [
    { label: "A", text: "Győr" },
    { label: "B", text: "Mohács" },
    { label: "C", text: "Szentendre" },
    { label: "D", text: "Visegrád" }
  ],
  correctOrder: ["A", "D", "C", "B"],
  learnMore: { summary: "A Duna folyásiránya szerint: Győr ⇒ Visegrád ⇒ Szentendre ⇒ Mohács." }
},
{
  topic: "MAGYARORSZÁG",
id: 299,
type: "sort",
  title: "Tedd a Duna folyásiránya szerinti sorrendbe a budapesti hidakat!",
  items: [
    { label: "A", text: "Széchenyi-Lánchíd" },
    { label: "B", text: "Petőfi híd" },
    { label: "C", text: "Margit híd" },
    { label: "D", text: "Árpád híd" }
  ],
  correctOrder: ["D", "C", "A", "B"],
  learnMore: { summary: "Duna folyásiránya szerint: Árpád híd ⇒ Margit híd ⇒ Széchenyi-Lánchíd ⇒ Petőfi híd." }
},
{
  topic: "TECHNIKA",
id: 300,
type: "sort",
  title: "Tedd a feltalálókat születésük szerint időrendbe!",
  items: [
    { label: "A", text: "Rudolf Diesel" },
    { label: "B", text: "Eötvös Loránd" },
    { label: "C", text: "Gutenberg" },
    { label: "D", text: "Gábor Dénes" }
  ],
  correctOrder: ["C", "B", "A", "D"],
  learnMore: { summary: "Születés szerint: Gutenberg (~1400) ⇒ Eötvös Loránd (1848) ⇒ Rudolf Diesel (1858) ⇒ Gábor Dénes (1900)." }
},
{
  topic: "FILM",
id: 301,
type: "sort",
  title: "Tedd a filmrendezőket születésük időrendjébe!",
  items: [
    { label: "A", text: "George Lucas" },
    { label: "B", text: "Alfred Hitchcock" },
    { label: "C", text: "Federico Fellini" },
    { label: "D", text: "Charlie Chaplin" }
  ],
  correctOrder: ["D", "B", "C", "A"],
  learnMore: { summary: "Születés szerint: Charlie Chaplin (1889) ⇒ Alfred Hitchcock (1899) ⇒ Federico Fellini (1920) ⇒ George Lucas (1944)." }
},
{
  topic: "FILM",
id: 302,
type: "sort",
  title: "Tedd a filmvígjátékokat bemutatásuk időrendjébe! Kezd a legrégebbivel!",
  items: [
    { label: "A", text: "Furcsa pár" },
    { label: "B", text: "Micsoda nő!" },
    { label: "C", text: "Van, aki forrón szereti" },
    { label: "D", text: "Aranyláz" }
  ],
  correctOrder: ["D", "C", "A", "B"],
  learnMore: { summary: "Bemutatás szerint: Aranyláz (1925) ⇒ Van, aki forrón szereti (1959) ⇒ Furcsa pár (1968) ⇒ Micsoda nő! (1990)." }
},
{
  topic: "ÁLTALÁNOS",
id: 303,
type: "sort",
  title: "Tedd a forinthoz viszonyított árfolyamuk szerinti növekvő sorrendbe a valutákat!",
  items: [
    { label: "A", text: "francia frank" },
    { label: "B", text: "angol font" },
    { label: "C", text: "német márka" },
    { label: "D", text: "amerikai dollár" }
  ],
  correctOrder: ["A", "C", "D", "B"],
  learnMore: { summary: "Árfolyam szerint: francia frank ⇒ német márka ⇒ amerikai dollár ⇒ angol font." }
},
{
  topic: "FÖLDRAJZ",
id: 304,
type: "sort",
  title: "Tedd a Földközi-tenger szigeteit sorba nyugatról kelet felé haladva!",
  items: [
    { label: "A", text: "Korzika" },
    { label: "B", text: "Kréta" },
    { label: "C", text: "Mallorca" },
    { label: "D", text: "Málta" }
  ],
  correctOrder: ["C", "A", "D", "B"],
  learnMore: { summary: "Nyugat-kelet irányban: Mallorca ⇒ Korzika ⇒ Málta ⇒ Kréta." }
},
{
  topic: "TÖRTÉNELEM",
id: 305,
type: "sort",
  title: "Tedd a híres felfedezőket születésük időrendjébe!",
  items: [
    { label: "A", text: "Kolumbusz" },
    { label: "B", text: "Amundsen" },
    { label: "C", text: "James Cook" },
    { label: "D", text: "Vörös Erik" }
  ],
  correctOrder: ["D", "A", "C", "B"],
  learnMore: { summary: "Születés szerint: Vörös Erik (~950) ⇒ Kolumbusz (1451) ⇒ James Cook (1728) ⇒ Amundsen (1872)." }
},
{
  topic: "IRODALOM",
id: 306,
type: "sort",
  title: "Tedd a híres irodalmi állatokat kitalálásuk időrendjébe!",
  items: [
    { label: "A", text: "Vuk" },
    { label: "B", text: "Balu" },
    { label: "C", text: "Lassie" },
    { label: "D", text: "Rocinante" }
  ],
  correctOrder: ["D", "B", "C", "A"],
  learnMore: { summary: "Kitalálás szerint: Rocinante (1605, Don Quijote) ⇒ Balu (1894, Dzsungel könyve) ⇒ Lassie (1938) ⇒ Vuk (1965)." }
},
{
  topic: "TÖRTÉNELEM",
id: 307,
type: "sort",
  title: "Tedd a híres magyar asszonyokat születésük időrendjébe!",
  items: [
    { label: "A", text: "Bajor Gizi" },
    { label: "B", text: "Zrínyi Ilona" },
    { label: "C", text: "Szendrey Júlia" },
    { label: "D", text: "Mária királynő" }
  ],
  correctOrder: ["D", "B", "C", "A"],
  learnMore: { summary: "Születés szerint: Mária királynő (~1371) ⇒ Zrínyi Ilona (1643) ⇒ Szendrey Júlia (1828) ⇒ Bajor Gizi (1893)." }
},
{
  topic: "TÖRTÉNELEM",
id: 308,
type: "sort",
  title: "Tedd a híres magyar utazókat születésük időrendjébe!",
  items: [
    { label: "A", text: "Kittenberger Kálmán" },
    { label: "B", text: "Kőrösi Csoma Sándor" },
    { label: "C", text: "Vámbéry Ármin" },
    { label: "D", text: "Julianus barát" }
  ],
  correctOrder: ["D", "B", "C", "A"],
  learnMore: { summary: "Születés szerint: Julianus barát (~1200) ⇒ Kőrösi Csoma Sándor (1784) ⇒ Vámbéry Ármin (1832) ⇒ Kittenberger Kálmán (1881)." }
},
{
  topic: "JÁTÉK",
id: 309,
type: "sort",
  title: "Tedd a játékosok számának emelkedő sorrendjébe az alábbi kártyajátékokat!",
  items: [
    { label: "A", text: "piké" },
    { label: "B", text: "bridzs" },
    { label: "C", text: "császárpasziánsz" },
    { label: "D", text: "rablóulti" }
  ],
  correctOrder: ["C", "A", "D", "B"],
  learnMore: { summary: "Játékosok száma szerint: császárpasziánsz (1 fő) ⇒ piké (2 fő) ⇒ rablóulti (3 fő) ⇒ bridzs (4 fő)." }
},
{
  topic: "ÁLTALÁNOS",
id: 310,
type: "sort",
  title: "Tedd a jeles alkalmakat a naptári évnek megfelelő időrendbe!",
  items: [
    { label: "A", text: "mindenszentek" },
    { label: "B", text: "gyertyaszentelő" },
    { label: "C", text: "aranyvasárnap" },
    { label: "D", text: "vízkereszt" }
  ],
  correctOrder: ["D", "B", "A", "C"],
  learnMore: { summary: "Naptári sorrendben: vízkereszt (jan. 6.) ⇒ gyertyaszentelő (febr. 2.) ⇒ mindenszentek (nov. 1.) ⇒ aranyvasárnap (december vége)." }
},
{
  topic: "FILM",
id: 311,
type: "sort",
  title: "Tedd a komikusokat születésük időrendjébe!",
  items: [
    { label: "A", text: "Louis de Funes" },
    { label: "B", text: "Buster Keaton" },
    { label: "C", text: "Jim Carrey" },
    { label: "D", text: "Robin Williams" }
  ],
  correctOrder: ["B", "A", "D", "C"],
  learnMore: { summary: "Születés szerint: Buster Keaton (1895) ⇒ Louis de Funes (1914) ⇒ Robin Williams (1951) ⇒ Jim Carrey (1962)." }
},
{
  topic: "TECHNIKA",
id: 312,
type: "sort",
  title: "Tedd a közlekedési eszközöket használatuk kezdetének időrendjébe!",
  items: [
    { label: "A", text: "űrrepülőgép" },
    { label: "B", text: "földalatti vasút" },
    { label: "C", text: "léghajó" },
    { label: "D", text: "harci szekér" }
  ],
  correctOrder: ["D", "C", "B", "A"],
  learnMore: { summary: "Használatuk kezdete szerint: harci szekér ⇒ léghajó ⇒ földalatti vasút ⇒ űrrepülőgép." }
},
{
  topic: "FILM",
id: 313,
type: "sort",
  title: "Tedd a magyar filmeket a címekből hiányzó számok növekvő sorrendjébe!",
  items: [
    { label: "A", text: "2x2 néha …" },
    { label: "B", text: "A … testőr Afrikában" },
    { label: "C", text: "… tonna dollár" },
    { label: "D", text: "Mese a … találatról" }
  ],
  correctOrder: ["B", "A", "C", "D"],
  learnMore: { summary: "Hiányzó számok szerint: A 3 testőr Afrikában ⇒ 2x2 néha 5 ⇒ 7 tonna dollár ⇒ Mese a 12 találatról." }
},
{
  topic: "FILM",
id: 314,
type: "sort",
  title: "Tedd a magyar filmeket bemutatásuk időrendjébe! Kezd a legrégebbivel!",
  items: [
    { label: "A", text: "Egri csillagok" },
    { label: "B", text: "Európa expressz" },
    { label: "C", text: "Valahol Európában" },
    { label: "D", text: "Mephisto" }
  ],
  correctOrder: ["C", "A", "D", "B"],
  learnMore: { summary: "Bemutatás szerint: Valahol Európában (1947) ⇒ Egri csillagok (1968) ⇒ Mephisto (1981) ⇒ Európa expressz (1999)." }
},
{
  topic: "FILM",
id: 315,
type: "sort",
  title: "Tedd a magyar filmeket cselekményük történelmi időrendjébe!",
  items: [
    { label: "A", text: "Fényes szelek" },
    { label: "B", text: "Feltámadott a tenger" },
    { label: "C", text: "Egri csillagok" },
    { label: "D", text: "Honfoglalás" }
  ],
  correctOrder: ["D", "C", "B", "A"],
  learnMore: { summary: "Cselekmény szerint: Honfoglalás (9. század) ⇒ Egri csillagok (16. század) ⇒ Feltámadott a tenger (1848) ⇒ Fényes szelek (1940-es évek)." }
},
{
  topic: "FILM",
id: 316,
type: "sort",
  title: "Tedd a magyar filmvígjátékokat első bemutatásuk időrendjébe!",
  items: [
    { label: "A", text: "Csinibaba" },
    { label: "B", text: "Liliomfi" },
    { label: "C", text: "Meseautó" },
    { label: "D", text: "6:3" }
  ],
  correctOrder: ["C", "B", "A", "D"],
  learnMore: { summary: "Bemutatás szerint: Meseautó (1934) ⇒ Liliomfi (1955) ⇒ Csinibaba (1997) ⇒ 6:3 (1999)." }
},
{
  topic: "FILM",
id: 317,
type: "sort",
  title: "Tedd a magyar filmvígjátékokat készítésük időrendjébe! Kezd a legrégebbivel!",
  items: [
    { label: "A", text: "Mágnás Miska" },
    { label: "B", text: "Meseautó" },
    { label: "C", text: "A tanú" },
    { label: "D", text: "Zimmer Feri" }
  ],
  correctOrder: ["B", "A", "C", "D"],
  learnMore: { summary: "Készítés szerint: Meseautó (1934) ⇒ Mágnás Miska (1949) ⇒ A tanú (1969) ⇒ Zimmer Feri (1998)." }
},
{
  topic: "FÖLDRAJZ",
id: 318,
type: "sort",
  title: "Tedd a magyar megyéket területük nagyságának növekvő sorrendjébe!",
  items: [
    { label: "A", text: "Pest" },
    { label: "B", text: "Fejér" },
    { label: "C", text: "Komárom-Esztergom" },
    { label: "D", text: "Bács-Kiskun" }
  ],
  correctOrder: ["C", "B", "A", "D"],
  learnMore: { summary: "Terület szerint: Komárom-Esztergom (~2 265 km²) ⇒ Fejér (~4 358 km²) ⇒ Pest (~6 393 km²) ⇒ Bács-Kiskun (~8 445 km²)." }
},
{
  topic: "SZÍNHÁZ",
id: 319,
type: "sort",
  title: "Tedd a magyar színészeket születésük időrendjébe!",
  items: [
    { label: "A", text: "Jávor Pál" },
    { label: "B", text: "Kern András" },
    { label: "C", text: "Bessenyei Ferenc" },
    { label: "D", text: "Szerednyei Béla" }
  ],
  correctOrder: ["A", "C", "B", "D"],
  learnMore: { summary: "Születés szerint: Jávor Pál (1902) ⇒ Bessenyei Ferenc (1919) ⇒ Kern András (1948) ⇒ Szerednyei Béla (1957)." }
},
{
  topic: "FILM",
id: 320,
type: "sort",
  title: "Tedd a magyar színésznőket pályakezdésük időrendjébe!",
  items: [
    { label: "A", text: "Laborfalvi Róza" },
    { label: "B", text: "Jászai Mari" },
    { label: "C", text: "Gryllus Dorka" },
    { label: "D", text: "Honthy Hanna" }
  ],
  correctOrder: ["A", "B", "D", "C"],
  learnMore: { summary: "Színésznők pályakezdése szerint: Laborfalvi Róza (1840-es évek) ⇒ Jászai Mari (1867) ⇒ Honthy Hanna (1917) ⇒ Gryllus Dorka (1990-es évek)." }
},
{
  topic: "TÖRTÉNELEM",
id: 321,
type: "sort",
  title: "Tedd a magyar történelemből ismert szenteket elhalálozásuk időrendjébe!",
  items: [
    { label: "A", text: "Szent László" },
    { label: "B", text: "Szent István" },
    { label: "C", text: "Szent Gellért" },
    { label: "D", text: "Szent Margit" }
  ],
  correctOrder: ["B", "C", "A", "D"],
  learnMore: { summary: "Elhalálozás szerint: Szent István (1038) ⇒ Szent Gellért (1046) ⇒ Szent László (1095) ⇒ Szent Margit (1270)." }
},
{
  topic: "TUDOMÁNY",
id: 322,
type: "sort",
  title: "Tedd a magyar tudósokat Nobel-díjuk elnyerésének időrendjébe!",
  items: [
    { label: "A", text: "Oláh György" },
    { label: "B", text: "Szent-Györgyi Albert" },
    { label: "C", text: "Bárány Róbert" },
    { label: "D", text: "Gábor Dénes" }
  ],
  correctOrder: ["C", "B", "D", "A"],
  learnMore: { summary: "Nobel-díj időrend szerint: Bárány Róbert (1914) ⇒ Szent-Györgyi Albert (1937) ⇒ Gábor Dénes (1971) ⇒ Oláh György (1994)." }
},
{
  topic: "ZENE",
id: 323,
type: "sort",
  title: "Tedd a nagylemezeket megjelenésük időrendjébe!",
  items: [
    { label: "A", text: "Hotel Menthol" },
    { label: "B", text: "Ezek a fiatalok" },
    { label: "C", text: "Rock and roller" },
    { label: "D", text: "Rapeta" }
  ],
  correctOrder: ["B", "C", "A", "D"],
  learnMore: { summary: "Megjelenés szerint: Ezek a fiatalok (1963) ⇒ Rock and roller (1979) ⇒ Hotel Menthol (1983) ⇒ Rapeta (1995)." }
},
{
  topic: "SPORT",
id: 324,
type: "sort",
  title: "Tedd a nemzeteket összes nyári olimpiai aranyérmük számának növekvő sorrendjébe!",
  items: [
    { label: "A", text: "Egyesült Államok" },
    { label: "B", text: "Japán" },
    { label: "C", text: "Magyarország" },
    { label: "D", text: "Svájc" }
  ],
  correctOrder: ["D", "B", "C", "A"],
  learnMore: { summary: "Aranyérmek száma szerint: Svájc (~50) ⇒ Japán (~180) ⇒ Magyarország (~180+) ⇒ Egyesült Államok (~1200+)." }
},
{
  topic: "BIOLÓGIA",
id: 325,
type: "sort",
  title: "Tedd a növényeket a Földön való megjelenésük időrendjébe!",
  items: [
    { label: "A", text: "fenyők" },
    { label: "B", text: "mohák" },
    { label: "C", text: "zárvatermők" },
    { label: "D", text: "moszatok" }
  ],
  correctOrder: ["D", "B", "A", "C"],
  learnMore: { summary: "Megjelenés szerint: moszatok ⇒ mohák ⇒ fenyők ⇒ zárvatermők." }
},
{
  topic: "BIOLÓGIA",
id: 326,
type: "sort",
  title: "Tedd a növényeket átlagos magasságuk szerint növekvő sorrendbe!",
  items: [
    { label: "A", text: "kikeleti hóvirág" },
    { label: "B", text: "húsos som" },
    { label: "C", text: "törpemandula" },
    { label: "D", text: "fehér akác" }
  ],
  correctOrder: ["A", "C", "B", "D"],
  learnMore: { summary: "Átlagos magasság szerint: kikeleti hóvirág (~15 cm) ⇒ törpemandula (~50 cm) ⇒ húsos som (~2–3 m) ⇒ fehér akác (~20–25 m)." }
},
{
  topic: "NYELV",
id: 327,
type: "sort",
  title: "Tedd a számmegjelölő kifejezéseket értékük emelkedő sorrendjébe!",
  items: [
    { label: "A", text: "okta-" },
    { label: "B", text: "hexa-" },
    { label: "C", text: "tri-" },
    { label: "D", text: "hepta-" }
  ],
  correctOrder: ["C", "B", "D", "A"],
  learnMore: { summary: "Számérték szerint: tri- (3) ⇒ hexa- (6) ⇒ hepta- (7) ⇒ okta- (8)." }
},
{
  topic: "TÖRTÉNELEM",
id: 328,
type: "sort",
  title: "Tedd a személyeket az ellenük elkövetett tragikus merényletek időrendjébe!",
  items: [
    { label: "A", text: "J. F. Kennedy" },
    { label: "B", text: "Aldo Moro" },
    { label: "C", text: "Olof Palme" },
    { label: "D", text: "John Lennon" }
  ],
  correctOrder: ["A", "B", "D", "C"],
  learnMore: { summary: "Merényletek időrendje: J. F. Kennedy (1963) ⇒ Aldo Moro (1978) ⇒ John Lennon (1980) ⇒ Olof Palme (1986)." }
},
{
  topic: "VALLÁS",
id: 329,
type: "sort",
  title: "Tedd a szereplőket a Bibliában való megjelenésük időrendjébe! Kezd a legkorábbival!",
  items: [
    { label: "A", text: "Noé" },
    { label: "B", text: "Jákob" },
    { label: "C", text: "Ádám" },
    { label: "D", text: "Salamon" }
  ],
  correctOrder: ["C", "A", "B", "D"],
  learnMore: { summary: "Bibliai megjelenés szerint: Ádám ⇒ Noé ⇒ Jákob ⇒ Salamon." }
},
{
  topic: "TECHNIKA",
id: 330,
type: "sort",
  title: "Tedd a találmányokat feltalálásuk időrendje szerinti növekvő sorrendbe!",
  items: [
    { label: "A", text: "villámhárító" },
    { label: "B", text: "radar" },
    { label: "C", text: "fonográf" },
    { label: "D", text: "könyvnyomtatás" }
  ],
  correctOrder: ["D", "A", "C", "B"],
  learnMore: { summary: "Feltalálás szerint: könyvnyomtatás (1450) ⇒ villámhárító (1752) ⇒ fonográf (1877) ⇒ radar (1935)." }
},
{
  topic: "TECHNIKA",
id: 331,
type: "sort",
  title: "Tedd a találmányokat feltalálásuk időrendjébe!",
  items: [
    { label: "A", text: "dinamit" },
    { label: "B", text: "mikroprocesszor" },
    { label: "C", text: "plexiüveg" },
    { label: "D", text: "vízvezetékrendszer" }
  ],
  correctOrder: ["D", "A", "C", "B"],
  learnMore: { summary: "Találmányok időrendben: vízvezetékrendszer (ókori Róma, Kr. e. 312) ⇒ dinamit (1867) ⇒ plexiüveg (1928) ⇒ mikroprocesszor (1971)." }
},
{
  topic: "TECHNIKA",
id: 332,
type: "sort",
  title: "Tedd a találmányokat feltalálásuk időrendjébe! Kezd a legrégebbivel!",
  items: [
    { label: "A", text: "Otto-motor" },
    { label: "B", text: "dízelmotor" },
    { label: "C", text: "küllős kerék" },
    { label: "D", text: "sugárhajtómű" }
  ],
  correctOrder: ["C", "A", "B", "D"],
  learnMore: { summary: "Feltalálás szerint: küllős kerék (~Kr. e. 2000) ⇒ Otto-motor (1876) ⇒ dízelmotor (1897) ⇒ sugárhajtómű (1939)." }
},
{
  topic: "FÖLDRAJZ",
id: 333,
type: "sort",
  title: "Tedd a Tisza-parti városokat a folyásirányuknak megfelelő sorrendbe!",
  items: [
    { label: "A", text: "Szolnok" },
    { label: "B", text: "Szeged" },
    { label: "C", text: "Tiszafüred" },
    { label: "D", text: "Tokaj" }
  ],
  correctOrder: ["D", "C", "A", "B"],
  learnMore: { summary: "Folyásirány szerint: Tokaj ⇒ Tiszafüred ⇒ Szolnok ⇒ Szeged." }
},
{
  topic: "OPERA",
id: 334,
type: "sort",
  title: "Tedd a zeneműveket az azokat megszólaltató hangszerek száma szerinti növekvő sorrendbe!",
  items: [
    { label: "A", text: "Beethoven: Tavaszi szonáta" },
    { label: "B", text: "Chopin: Perc-keringő" },
    { label: "C", text: "Mendelssohn: Olasz szimfónia" },
    { label: "D", text: "Schubert: Pisztráng-ötös" }
  ],
  correctOrder: ["B", "A", "D", "C"],
  learnMore: { summary: "Hangszerek száma szerint: Perc-keringő (zongora) ⇒ Tavaszi szonáta (zongora + hegedű) ⇒ Pisztráng-ötös (öt hangszer) ⇒ Olasz szimfónia (teljes zenekar)." }
},
{
  topic: "FILM",
id: 335,
type: "sort",
  title: "Tedd a zenés filmeket bemutatásuk időrendjébe!",
  items: [
    { label: "A", text: "Szombat esti láz" },
    { label: "B", text: "Egy nehéz nap éjszakája" },
    { label: "C", text: "Óz, a csodák csodája" },
    { label: "D", text: "Flashdance" }
  ],
  correctOrder: ["C", "B", "A", "D"],
  learnMore: { summary: "Bemutatás szerint: Óz, a csodák csodája (1939) ⇒ Egy nehéz nap éjszakája (1964) ⇒ Szombat esti láz (1977) ⇒ Flashdance (1983)." }
},
{
  topic: "FILM",
id: 336,
type: "sort",
  title: "Tedd a zenés filmeket forgatásuk időpontja szerinti sorrendbe! Kezd a legkorábbival!",
  items: [
    { label: "A", text: "West Side Story" },
    { label: "B", text: "Kabaré" },
    { label: "C", text: "Ének az esőben" },
    { label: "D", text: "Hair" }
  ],
  correctOrder: ["C", "A", "B", "D"],
  learnMore: { summary: "Forgatási év szerint: Ének az esőben (1952) ⇒ West Side Story (1961) ⇒ Kabaré (1972) ⇒ Hair (1979)." }
},
{
  topic: "FÖLDRAJZ",
id: 337,
type: "sort",
  title: "Tedd alapterületük szerint sorba a tavakat! Kezd a legkisebbel!",
  items: [
    { label: "A", text: "Fertő-tó" },
    { label: "B", text: "Balaton" },
    { label: "C", text: "Szelidi-tó" },
    { label: "D", text: "Velencei-tó" }
  ],
  correctOrder: ["C", "D", "A", "B"],
  learnMore: { summary: "Alapterület szerint: Szelidi-tó (~0.5 km²) ⇒ Velencei-tó (~26 km²) ⇒ Fertő-tó (~315 km²) ⇒ Balaton (~594 km²)." }
},
{
  topic: "VALLÁS",
id: 338,
type: "sort",
  title: "Tedd általánosan elfogadott létszámuk emelkedő sorrendjébe a mitikus lényeket!",
  items: [
    { label: "A", text: "gráciák" },
    { label: "B", text: "múzsák" },
    { label: "C", text: "danaidák" },
    { label: "D", text: "Oidipusz lányai" }
  ],
  correctOrder: ["D", "A", "B", "C"],
  learnMore: { summary: "Létszám szerint: Oidipusz lányai (2) ⇒ gráciák (3) ⇒ múzsák (9) ⇒ danaidák (50)." }
},
{
  topic: "BIOLÓGIA",
id: 339,
type: "sort",
  title: "Tedd átlagos példányuk hosszának növekvő sorrendjébe a madarakat!",
  items: [
    { label: "A", text: "rétisas" },
    { label: "B", text: "ökörszem" },
    { label: "C", text: "feketerigó" },
    { label: "D", text: "vetési varjú" }
  ],
  correctOrder: ["B", "C", "D", "A"],
  learnMore: { summary: "Testhossz szerint: ökörszem (~9 cm) ⇒ feketerigó (~25 cm) ⇒ vetési varjú (~45 cm) ⇒ rétisas (~80 cm)." }
},
{
  topic: "TUDOMÁNY",
id: 340,
type: "sort",
  title: "Tedd átmérőjük emelkedő sorrendjébe naprendszerünk égitesteit!",
  items: [
    { label: "A", text: "Nap" },
    { label: "B", text: "Plútó" },
    { label: "C", text: "Jupiter" },
    { label: "D", text: "Szaturnusz" }
  ],
  correctOrder: ["B", "D", "C", "A"],
  learnMore: { summary: "Átmérő szerint: Plútó (~2 376 km) ⇒ Szaturnusz (~120 536 km) ⇒ Jupiter (~139 820 km) ⇒ Nap (~1 392 700 km)." }
},
{
  topic: "ÉPÍTÉSZET",
id: 341,
type: "sort",
  title: "Tedd az alábbi építményeket építésük időrendje szerinti növekvő sorrendbe!",
  items: [
    { label: "A", text: "Kheopsz piramis" },
    { label: "B", text: "Hagia Sophia" },
    { label: "C", text: "a londoni Szent Pál-katedrális" },
    { label: "D", text: "Colosseum" }
  ],
  correctOrder: ["A", "D", "B", "C"],
  learnMore: { summary: "Építés szerint: Kheopsz piramis (Kr. e. 26. század) ⇒ Colosseum (Kr. u. 80) ⇒ Hagia Sophia (537) ⇒ Szent Pál-katedrális (1675–1710)." }
},
{
  topic: "ÉPÍTÉSZET",
id: 342,
type: "sort",
  title: "Tedd az alábbi épületeket felépítésük szerinti sorrendbe! Kezd a legrégebbivel!",
  items: [
    { label: "A", text: "Pantheon" },
    { label: "B", text: "Empire State Building" },
    { label: "C", text: "Notre-Dame" },
    { label: "D", text: "Eiffel-torony" }
  ],
  correctOrder: ["A", "C", "D", "B"],
  learnMore: { summary: "Építési év szerint: Pantheon (Kr. u. 126) ⇒ Notre-Dame (1163–1345) ⇒ Eiffel-torony (1889) ⇒ Empire State Building (1931)." }
},
{
  topic: "IRODALOM",
id: 343,
type: "sort",
  title: "Tedd az alábbi híres 'irodalmi fogalmakat' kitalálásuk időrendjébe!",
  items: [
    { label: "A", text: "az öreg halász nagy fogása" },
    { label: "B", text: "Tatjana levele" },
    { label: "C", text: "Don Quijote szélmalomharca" },
    { label: "D", text: "Odüsszeusz íjversenye" }
  ],
  correctOrder: ["D", "C", "B", "A"],
  learnMore: { summary: "Irodalmi fogalmak keletkezése szerint: Odüsszeusz íjversenye (Kr. e. 8. század) ⇒ Don Quijote szélmalomharca (1605) ⇒ Tatjana levele (1825) ⇒ Az öreg halász nagy fogása (1952)." }
},
{
  topic: "IRODALOM",
id: 344,
type: "sort",
  title: "Tedd az alábbi híres történetírókat születésük időrendjébe!",
  items: [
    { label: "A", text: "Hérodotosz" },
    { label: "B", text: "Tacitus" },
    { label: "C", text: "Bonfini" },
    { label: "D", text: "Anonymus" }
  ],
  correctOrder: ["A", "B", "D", "C"],
  learnMore: { summary: "Születés szerint: Hérodotosz (Kr. e. 484) ⇒ Tacitus (Kr. u. 56) ⇒ Anonymus (~12. század) ⇒ Bonfini (1427)." }
},
{
  topic: "FILM",
id: 345,
type: "sort",
  title: "Tedd az alábbi magyar vígjátékokat első bemutatásuk időrendjébe!",
  items: [
    { label: "A", text: "A miniszter félrelép" },
    { label: "B", text: "Fel a fejjel!" },
    { label: "C", text: "Hippolyt, a lakáj" },
    { label: "D", text: "Sose halunk meg!" }
  ],
  correctOrder: ["C", "B", "D", "A"],
  learnMore: { summary: "Bemutatás szerint: Hippolyt, a lakáj (1931) ⇒ Fel a fejjel! (1954) ⇒ Sose halunk meg! (1993) ⇒ A miniszter félrelép (1997)." }
},
{
  topic: "BIOLÓGIA",
id: 346,
type: "sort",
  title: "Tedd az alábbi növényeket időrendbe virágzási idejük kezdete szerint!",
  items: [
    { label: "A", text: "gyöngyvirág" },
    { label: "B", text: "jácint" },
    { label: "C", text: "petúnia" },
    { label: "D", text: "kerti őszirózsa" }
  ],
  correctOrder: ["B", "A", "C", "D"],
  learnMore: { summary: "Virágzási idő szerint: jácint (március–április) ⇒ gyöngyvirág (április–május) ⇒ petúnia (május–június) ⇒ kerti őszirózsa (augusztus–október)." }
},
{
  topic: "Biológia",
id: 347,
type: "sort",
  title: "Tedd az alábbi növényeket virágzási idejük kezdete szerint időrendbe!",
  items: [
    { label: "A", text: "ibolya" },
    { label: "B", text: "rózsa" },
    { label: "C", text: "orgona" },
    { label: "D", text: "őszi rózsa" }
  ],
  correctOrder: ["A", "C", "B", "D"],
  learnMore: { summary: "A virágzási idő szerint: ibolya (kora tavasz) ⇒ orgona (április–május) ⇒ rózsa (június) ⇒ őszi rózsa (szeptember–október)." }
},
{
  topic: "BIOLÓGIA",
id: 348,
type: "sort",
  title: "Tedd az alábbi növényeket virágzási idejük kezdete szerint időrendi sorrendbe!",
  items: [
    { label: "A", text: "csokros tulipán" },
    { label: "B", text: "kecses liliom" },
    { label: "C", text: "tarka kikerics" },
    { label: "D", text: "pompás hóvirág" }
  ],
  correctOrder: ["D", "A", "B", "C"],
  learnMore: { summary: "Virágzási idő szerint: pompás hóvirág (február–március) ⇒ csokros tulipán (március–április) ⇒ kecses liliom (május–június) ⇒ tarka kikerics (augusztus–szeptember)." }
},
{
  topic: "TÖRTÉNELEM",
id: 349,
type: "sort",
  title: "Tedd az alábbi személyeket születési idejük szerinti növekvő sorrendbe!",
  items: [
    { label: "A", text: "Leonardo da Vinci" },
    { label: "B", text: "Alfred Nobel" },
    { label: "C", text: "Arkhimédész" },
    { label: "D", text: "James Watt" }
  ],
  correctOrder: ["C", "A", "D", "B"],
  learnMore: { summary: "Születési idő szerint: Arkhimédész (Kr. e. 287) ⇒ Leonardo da Vinci (1452) ⇒ James Watt (1736) ⇒ Alfred Nobel (1833)." }
},
{
  topic: "FILM",
id: 350,
type: "sort",
  title: "Tedd az alábbi színészeket születésük időrendjébe!",
  items: [
    { label: "A", text: "Latabár Kálmán" },
    { label: "B", text: "Koltai Róbert" },
    { label: "C", text: "Charlie Chaplin" },
    { label: "D", text: "Hugh Grant" }
  ],
  correctOrder: ["C", "A", "B", "D"],
  learnMore: { summary: "Születési év szerint: Charlie Chaplin (1889) ⇒ Latabár Kálmán (1902) ⇒ Koltai Róbert (1943) ⇒ Hugh Grant (1960)." }
},
{
  topic: "IRODALOM",
id: 351,
type: "sort",
  title: "Tedd az alábbi színműveket születésük sorrendjébe! Kezd a legrégebbivel!",
  items: [
    { label: "A", text: "Az ügynök halála" },
    { label: "B", text: "Tartuffe" },
    { label: "C", text: "Macbeth" },
    { label: "D", text: "Antigone" }
  ],
  correctOrder: ["D", "C", "B", "A"],
  learnMore: { summary: "Keletkezési év szerint: Antigone (i. e. 442) ⇒ Macbeth (1606) ⇒ Tartuffe (1664) ⇒ Az ügynök halála (1949)." }
},
{
  topic: "ÁLTALÁNOS",
id: 352,
type: "sort",
  title: "Tedd az alábbi táncokat európai elterjedtségük időrendjébe!",
  items: [
    { label: "A", text: "bécsikeringő" },
    { label: "B", text: "charleston" },
    { label: "C", text: "break" },
    { label: "D", text: "twist" }
  ],
  correctOrder: ["A", "B", "D", "C"],
  learnMore: { summary: "Európai elterjedés szerint: bécsikeringő (19. század) ⇒ charleston (1920-as évek) ⇒ twist (1960-as évek) ⇒ break (1980-as évek)." }
},
{
  topic: "SPORT",
id: 353,
type: "sort",
  title: "Tedd az alábbi városokat az ott megrendezett olimpiák időrendjébe!",
  items: [
    { label: "A", text: "Berlin" },
    { label: "B", text: "München" },
    { label: "C", text: "Helsinki" },
    { label: "D", text: "Atlanta" }
  ],
  correctOrder: ["A", "C", "B", "D"],
  learnMore: { summary: "Olimpiák időrendje: Berlin (1936) ⇒ Helsinki (1952) ⇒ München (1972) ⇒ Atlanta (1996)." }
},
{
  topic: "SPORT",
id: 354,
type: "sort",
  title: "Tedd az atlétikai dobóeszközöket az általuk teljesíthető távolság növekvő sorrendjébe!",
  items: [
    { label: "A", text: "kalapács" },
    { label: "B", text: "diszkosz" },
    { label: "C", text: "súlygolyó" },
    { label: "D", text: "gerely" }
  ],
  correctOrder: ["C", "B", "A", "D"],
  learnMore: { summary: "Dobótávolság szerint: súlygolyó (~22 m) ⇒ diszkosz (~70 m) ⇒ kalapács (~80 m) ⇒ gerely (~98 m)." }
},
{
  topic: "ÉPÍTÉSZET",
id: 355,
type: "sort",
  title: "Tedd az építészeti korszakokat időrendi sorrendbe!",
  items: [
    { label: "A", text: "gótika" },
    { label: "B", text: "klasszicizmus" },
    { label: "C", text: "román" },
    { label: "D", text: "barokk" }
  ],
  correctOrder: ["C", "A", "D", "B"],
  learnMore: { summary: "Építészeti korszakok időrendben: román (10–12. sz.) ⇒ gótika (12–15. sz.) ⇒ barokk (17–18. sz.) ⇒ klasszicizmus (18. sz. vége – 19. sz.)." }
},
{
  topic: "ÉPÍTÉSZET",
id: 356,
type: "sort",
  title: "Tedd az építményeket építésük időrendjébe! Kezd a legrégebbivel!",
  items: [
    { label: "A", text: "Stonehenge" },
    { label: "B", text: "a sydneyi Opera" },
    { label: "C", text: "Tádzs Mahal" },
    { label: "D", text: "Golden Gate híd" }
  ],
  correctOrder: ["A", "C", "D", "B"],
  learnMore: { summary: "Építés szerint: Stonehenge (~Kr. e. 2500) ⇒ Tádzs Mahal (1632–1653) ⇒ Golden Gate híd (1933–1937) ⇒ Sydneyi Opera (1957–1973)." }
},
{
  topic: "ÉPÍTÉSZET",
id: 357,
type: "sort",
  title: "Tedd az épületeket építésük kezdete szerint növekvő sorrendbe!",
  items: [
    { label: "A", text: "visegrádi királyi palota" },
    { label: "B", text: "jáki templom" },
    { label: "C", text: "fertődi Esterhazy-kastély" },
    { label: "D", text: "szegedi dóm" }
  ],
  correctOrder: ["B", "A", "C", "D"],
  learnMore: { summary: "Építési sorrend: jáki templom (13. század) ⇒ visegrádi palota (14. század) ⇒ fertődi kastély (1760-as évek) ⇒ szegedi dóm (1913–1930)." }
},
{
  topic: "KONYHA",
id: 358,
type: "sort",
  title: "Tedd az ételtípusokat hazai tálalási sorrendjükbe! Kezd az elsőként felkínálandóval!",
  items: [
    { label: "A", text: "leves" },
    { label: "B", text: "vegyes ízelítő" },
    { label: "C", text: "húsétel" },
    { label: "D", text: "desszert" }
  ],
  correctOrder: ["B", "A", "C", "D"],
  learnMore: { summary: "Hazai ételsorrend: vegyes ízelítő ⇒ leves ⇒ húsétel ⇒ desszert." }
},
{
  topic: "NYELV",
id: 359,
type: "sort",
  title: "Tedd az európai nyelveket beszélőik számának emelkedő sorrendjébe!",
  items: [
    { label: "A", text: "macedón" },
    { label: "B", text: "bolgár" },
    { label: "C", text: "francia" },
    { label: "D", text: "lengyel" }
  ],
  correctOrder: ["A", "B", "D", "C"],
  learnMore: { summary: "Beszélők száma szerint: macedón (~2 millió) ⇒ bolgár (~7 millió) ⇒ lengyel (~40 millió) ⇒ francia (~80 millió)." }
},
{
  topic: "IRODALOM",
id: 360,
type: "sort",
  title: "Tedd az irodalmi műveket a címből hiányzó értékek emelkedő sorrendjébe!",
  items: [
    { label: "A", text: "A … Lotti (Kastner)" },
    { label: "B", text: "… kicsi néger (Christie)" },
    { label: "C", text: "A … nővér (Csehov)" },
    { label: "D", text: "… év magány (Márquez)" }
  ],
  correctOrder: ["A", "C", "B", "D"],
  learnMore: { summary: "Hiányzó értékek szerint: A két Lotti ⇒ A három nővér ⇒ Tíz kicsi néger ⇒ Száz év magány." }
},
{
  topic: "SPORT",
id: 361,
type: "sort",
  title: "Tedd az országokat az általuk megnyert labdarúgó világbajnokságok száma szerinti növekvő sorrendjébe!",
  items: [
    { label: "A", text: "Argentína" },
    { label: "B", text: "Olaszország" },
    { label: "C", text: "Franciaország" },
    { label: "D", text: "Brazília" }
  ],
  correctOrder: ["C", "A", "B", "D"],
  learnMore: { summary: "Világbajnoki címek szerint: Franciaország (2) ⇒ Argentína (3) ⇒ Olaszország (4) ⇒ Brazília (5)." }
},
{
  topic: "TÖRTÉNELEM",
id: 362,
type: "sort",
  title: "Tedd az országokat az I. világháborúba való belépésük sorrendjébe!",
  items: [
    { label: "A", text: "Amerikai Egyesült Államok" },
    { label: "B", text: "Osztrák-Magyar Monarchia" },
    { label: "C", text: "Olaszország" },
    { label: "D", text: "Törökország" }
  ],
  correctOrder: ["B", "D", "C", "A"],
  learnMore: { summary: "Belépés szerint: Osztrák–Magyar Monarchia (1914) ⇒ Törökország (1914) ⇒ Olaszország (1915) ⇒ USA (1917)." }
},
{
  topic: "FILM",
id: 363,
type: "sort",
  title: "Tedd az Oscar-díjas filmeket díjazásuk időrendjébe!",
  items: [
    { label: "A", text: "My Fair Lady" },
    { label: "B", text: "A bárányok hallgatnak" },
    { label: "C", text: "Amerikai szépség" },
    { label: "D", text: "Kramer kontra Kramer" }
  ],
  correctOrder: ["A", "D", "B", "C"],
  learnMore: { summary: "Oscar-díj szerint: My Fair Lady (1964) ⇒ Kramer kontra Kramer (1979) ⇒ A bárányok hallgatnak (1991) ⇒ Amerikai szépség (2000)." }
},
{
  topic: "FILM",
id: 364,
type: "sort",
  title: "Tedd az Oscar-díjas filmeket díjazásuk időrendjébe! Kezd a legrégebbivel!",
  items: [
    { label: "A", text: "Esőember" },
    { label: "B", text: "Ben Hur" },
    { label: "C", text: "Forrest Gump" },
    { label: "D", text: "Casablanca" }
  ],
  correctOrder: ["D", "B", "A", "C"],
  learnMore: { summary: "Oscar-díj év szerint: Casablanca (1944) ⇒ Ben Hur (1960) ⇒ Esőember (1989) ⇒ Forrest Gump (1995)." }
},
{
  topic: "FILM",
id: 365,
type: "sort",
  title: "Tedd az Oscar-díjjal jutalmazott filmeket sorrendbe a legrégebbitől a legújabbig!",
  items: [
    { label: "A", text: "Titanic" },
    { label: "B", text: "Schindler listája" },
    { label: "C", text: "Elfújta a szél" },
    { label: "D", text: "A keresztapa" }
  ],
  correctOrder: ["C", "D", "B", "A"],
  learnMore: { summary: "Oscar-díjas filmek bemutatása szerint: Elfújta a szél (1939) ⇒ A keresztapa (1972) ⇒ Schindler listája (1993) ⇒ Titanic (1997)." }
},
{
  topic: "TUDOMÁNY",
id: 366,
type: "sort",
  title: "Tedd az űrhajósokat első fellövésük időrendjébe!",
  items: [
    { label: "A", text: "Jurij Gagarin" },
    { label: "B", text: "Farkas Bertalan" },
    { label: "C", text: "John Glenn" },
    { label: "D", text: "Valentyina Tyereskova" }
  ],
  correctOrder: ["A", "C", "D", "B"],
  learnMore: { summary: "Űrhajósok fellövése szerint: Jurij Gagarin (1961) ⇒ John Glenn (1962) ⇒ Valentyina Tyereskova (1963) ⇒ Farkas Bertalan (1980)." }
},
{
  topic: "ÁLTALÁNOS",
id: 367,
type: "sort",
  title: "Tedd beiktatásuk időrendjébe a Magyar Tudományos Akadémia elnökeit!",
  items: [
    { label: "A", text: "Eötvös Loránd" },
    { label: "B", text: "Glatz Ferenc" },
    { label: "C", text: "Kosáry Domokos" },
    { label: "D", text: "Kodály Zoltán" }
  ],
  correctOrder: ["A", "D", "C", "B"],
  learnMore: { summary: "Beiktatás szerint: Eötvös Loránd (1889) ⇒ Kodály Zoltán (1946) ⇒ Kosáry Domokos (1990) ⇒ Glatz Ferenc (1996)." }
},
{
  topic: "TÖRTÉNELEM",
id: 368,
type: "sort",
  title: "Tedd beiktatásuk időrendjébe az alábbi magyar miniszterelnököket!",
  items: [
    { label: "A", text: "Nagy Imre" },
    { label: "B", text: "Andrássy Gyula" },
    { label: "C", text: "Tildy Zoltán" },
    { label: "D", text: "Károlyi Mihály" }
  ],
  correctOrder: ["B", "D", "C", "A"],
  learnMore: { summary: "Beiktatás szerint: Andrássy Gyula (1867) ⇒ Károlyi Mihály (1918) ⇒ Tildy Zoltán (1946) ⇒ Nagy Imre (1953)." }
},
{
  topic: "TÖRTÉNELEM",
id: 369,
type: "sort",
  title: "Tedd beiktatásuk időrendjébe az amerikai elnököket!",
  items: [
    { label: "A", text: "T. Jefferson" },
    { label: "B", text: "F. D. Rossevelt" },
    { label: "C", text: "G. Bush" },
    { label: "D", text: "J. F. Kennedy" }
  ],
  correctOrder: ["A", "B", "D", "C"],
  learnMore: { summary: "Beiktatás szerint: T. Jefferson (1801) ⇒ F. D. Roosevelt (1933) ⇒ J. F. Kennedy (1961) ⇒ G. Bush (1989)." }
},
{
  topic: "TÖRTÉNELEM",
id: 370,
type: "sort",
  title: "Tedd beiktatásuk időrendjébe az USA elnökeit!",
  items: [
    { label: "A", text: "Harry Truman" },
    { label: "B", text: "Thomas Jefferson" },
    { label: "C", text: "Lyndon B. Johnson" },
    { label: "D", text: "Ulysses S. Grant" }
  ],
  correctOrder: ["B", "D", "A", "C"],
  learnMore: { summary: "Beiktatás szerint: Thomas Jefferson (1801) ⇒ Ulysses S. Grant (1869) ⇒ Harry Truman (1945) ⇒ Lyndon B. Johnson (1963)." }
},
{
  topic: "ZENE",
id: 371,
type: "sort",
  title: "Tedd bemutatásuk időrendjébe a felsorolt Andrew Lloyd Webber-musicaleket!",
  items: [
    { label: "A", text: "Az Operaház fantomja" },
    { label: "B", text: "Macskák" },
    { label: "C", text: "Evita" },
    { label: "D", text: "Jézus Krisztus szupersztár" }
  ],
  correctOrder: ["D", "C", "B", "A"],
  learnMore: { summary: "Bemutatás szerint: Jézus Krisztus szupersztár (1970) ⇒ Evita (1976) ⇒ Macskák (1981) ⇒ Az Operaház fantomja (1986)." }
},
{
  topic: "SZÍNHÁZ",
id: 372,
type: "sort",
  title: "Tedd bemutatásuk időrendjébe a felsorolt zenés színpadi műveket!",
  items: [
    { label: "A", text: "My Fair Lady" },
    { label: "B", text: "A víg özvegy" },
    { label: "C", text: "Macskák" },
    { label: "D", text: "A denevér" }
  ],
  correctOrder: ["D", "B", "A", "C"],
  learnMore: { summary: "Bemutatás szerint: A denevér (1874) ⇒ A víg özvegy (1905) ⇒ My Fair Lady (1956) ⇒ Macskák (1981)." }
},
{
  topic: "MŰVÉSZET",
id: 373,
type: "sort",
  title: "Tedd bemutatásuk időrendjébe az alábbi baletteket!",
  items: [
    { label: "A", text: "Stravinsky: Tűzmadár" },
    { label: "B", text: "Delibes: Coppélia" },
    { label: "C", text: "Presser: A próba" },
    { label: "D", text: "Csajkovszkij: Diótörő" }
  ],
  correctOrder: ["B", "D", "A", "C"],
  learnMore: { summary: "Bemutatás szerint: Coppélia (1870) ⇒ Diótörő (1892) ⇒ Tűzmadár (1910) ⇒ A próba (1975)." }
},
{
  topic: "OPERA",
id: 374,
type: "sort",
  title: "Tedd cselekményük történésének időrendjébe a következő operákat! Kezd a legkorábbival!",
  items: [
    { label: "A", text: "Erkel: Bánk bán" },
    { label: "B", text: "Puccini: Tosca" },
    { label: "C", text: "Wagner: Lohengrin" },
    { label: "D", text: "Verdi: Nabucco" }
  ],
  correctOrder: ["D", "C", "A", "B"],
  learnMore: { summary: "Cselekmény időrendje: Nabucco (Kr. e. 6. század) ⇒ Lohengrin (középkor) ⇒ Bánk bán (13. század) ⇒ Tosca (19. század vége)." }
},
{
  topic: "KONYHA",
id: 375,
type: "sort",
  title: "Tedd csípősségük szerint növekvő sorrendbe a fűszerpaprika őrleményfajtákat!",
  items: [
    { label: "A", text: "csemege" },
    { label: "B", text: "rózsa" },
    { label: "C", text: "édesnemes" },
    { label: "D", text: "félédes" }
  ],
  correctOrder: ["A", "C", "D", "B"],
  learnMore: { summary: "Csípősség szerint: csemege ⇒ édesnemes ⇒ félédes ⇒ rózsa." }
},
{
  topic: "SPORT",
id: 376,
type: "sort",
  title: "Tedd egyéni olimpiai aranyérmük megszerzésének időrendjébe az alábbi kardvívóinkat!",
  items: [
    { label: "A", text: "Szabó Bence" },
    { label: "B", text: "Gerevich Aladár" },
    { label: "C", text: "Kárpáti Rudolf" },
    { label: "D", text: "Dr. Fuchs Jenő" }
  ],
  correctOrder: ["D", "B", "C", "A"],
  learnMore: { summary: "Aranyérmek időrendje: Dr. Fuchs Jenő (1908) ⇒ Gerevich Aladár (1932) ⇒ Kárpáti Rudolf (1956) ⇒ Szabó Bence (1992)." }
},
{
  topic: "IRODALOM",
id: 377,
type: "sort",
  title: "Tedd előfordulásuk időrendjébe a Nemzeti dal idézeteit!",
  items: [
    { label: "A", text: "Sehonnai bitang..." },
    { label: "B", text: "Talpra magyar..." },
    { label: "C", text: "Unokáink leborulnak..." },
    { label: "D", text: "Rabok voltunk..." }
  ],
  correctOrder: ["B", "D", "A", "C"],
  learnMore: { summary: "Nemzeti dal idézeteinek sorrendje: Talpra magyar ⇒ Rabok voltunk ⇒ Sehonnai bitang ⇒ Unokáink leborulnak." }
},
{
  topic: "SPORT",
id: 378,
type: "sort",
  title: "Tedd első világbajnoki aranyérmük elnyerésének időrendjébe a Forma-1 pilótáit!",
  items: [
    { label: "A", text: "Niki Lauda" },
    { label: "B", text: "Alain Prost" },
    { label: "C", text: "Jackie Stewart" },
    { label: "D", text: "Mika Hakkinen" }
  ],
  correctOrder: ["C", "A", "B", "D"],
  learnMore: { summary: "Világbajnoki címek első éve: Jackie Stewart (1969) ⇒ Niki Lauda (1975) ⇒ Alain Prost (1985) ⇒ Mika Häkkinen (1998)." }
},
{
  topic: "TUDOMÁNY",
id: 379,
type: "sort",
  title: "Tedd emelkedő sorrendbe a gázokat aszerint, hogy hány százalékban alkotóelemei a levegőnek!",
  items: [
    { label: "A", text: "argon" },
    { label: "B", text: "oxigén" },
    { label: "C", text: "nitrogén" },
    { label: "D", text: "kripton" }
  ],
  correctOrder: ["D", "A", "B", "C"],
  learnMore: { summary: "Levegőösszetétel szerint: kripton (~0.0001%) ⇒ argon (~0.93%) ⇒ oxigén (~21%) ⇒ nitrogén (~78%)." }
},
{
  topic: "JÁTÉK",
id: 380,
type: "sort",
  title: "Tedd erősségük szerint sorba az ulti bemondásait! Kezd a leggyengébbel!",
  items: [
    { label: "A", text: "ulti" },
    { label: "B", text: "piros ulti" },
    { label: "C", text: "piros terített durchmars" },
    { label: "D", text: "piros 40-100 ulti" }
  ],
  correctOrder: ["A", "B", "D", "C"],
  learnMore: { summary: "Erősség szerint: ulti ⇒ piros ulti ⇒ piros 40-100 ulti ⇒ piros terített durchmars." }
},
{
  topic: "ÁLTALÁNOS",
id: 381,
type: "sort",
  title: "Tedd értékük növekvő sorrendjébe az alábbi római számokat!",
  items: [
    { label: "A", text: "CM" },
    { label: "B", text: "CD" },
    { label: "C", text: "XC" },
    { label: "D", text: "C" }
  ],
  correctOrder: ["C", "D", "B", "A"],
  learnMore: { summary: "Római számok értéke szerint: XC (90) ⇒ C (100) ⇒ CD (400) ⇒ CM (900)." }
},
{
  topic: "TUDOMÁNY",
id: 382,
type: "sort",
  title: "Tedd értékük szerinti sorba az alábbi törteket! Kezd a legkisebbel!",
  items: [
    { label: "A", text: "egyhatod" },
    { label: "B", text: "háromnegyed" },
    { label: "C", text: "héttized" },
    { label: "D", text: "kétharmad" }
  ],
  correctOrder: ["A", "D", "C", "B"],
  learnMore: { summary: "Érték szerint: egyhatod (0.166) ⇒ kétharmad (0.666) ⇒ héttized (0.7) ⇒ háromnegyed (0.75)." }
},
{
  topic: "FÖLDRAJZ",
id: 383,
type: "sort",
  title: "Tedd észak-déli sorrendbe a történelmi városokat! Kezd a legdélibbel!",
  items: [
    { label: "A", text: "Eger" },
    { label: "B", text: "Mohács" },
    { label: "C", text: "Kassa" },
    { label: "D", text: "Nándorfehérvár" }
  ],
  correctOrder: ["D", "B", "A", "C"],
  learnMore: { summary: "Észak-déli sorrendben: Nándorfehérvár ⇒ Mohács ⇒ Eger ⇒ Kassa." }
},
{
  topic: "FÖLDRAJZ",
id: 384,
type: "sort",
  title: "Tedd észak-déli sorrendbe az afrikai városokat!",
  items: [
    { label: "A", text: "Kairó" },
    { label: "B", text: "Nairobi" },
    { label: "C", text: "Addisz-Abeba" },
    { label: "D", text: "Pretoria" }
  ],
  correctOrder: ["A", "C", "B", "D"],
  learnMore: { summary: "Észak–déli sorrendben: Kairó ⇒ Addisz-Abeba ⇒ Nairobi ⇒ Pretoria." }
},
{
  topic: "BIOLÓGIA",
id: 385,
type: "sort",
  title: "Tedd fejtől lefelé haladva sorba az alábbi testrészeket!",
  items: [
    { label: "A", text: "hipotalamusz" },
    { label: "B", text: "vádli" },
    { label: "C", text: "kulcscsont" },
    { label: "D", text: "achilles-ín" }
  ],
  correctOrder: ["A", "C", "B", "D"],
  learnMore: { summary: "Fejtől lefelé: hipotalamusz ⇒ kulcscsont ⇒ vádli ⇒ achilles-ín." }
},
{
  topic: "TUDOMÁNY",
id: 386,
type: "sort",
  title: "Tedd felfedezésük időrendjébe az alábbi kémiai elemeket!",
  items: [
    { label: "A", text: "rádium" },
    { label: "B", text: "arany" },
    { label: "C", text: "hidrogén" },
    { label: "D", text: "nátrium" }
  ],
  correctOrder: ["B", "C", "D", "A"],
  learnMore: { summary: "Felfedezés szerint: arany (ősidők óta ismert) ⇒ hidrogén (1766) ⇒ nátrium (1807) ⇒ rádium (1898)." }
},
{
  topic: "SPORT",
id: 387,
type: "sort",
  title: "Tedd Forma–1-es világbajnoki győzelmeinek száma szerinti növekvő sorrendbe az autóversenyzőket!",
  items: [
    { label: "A", text: "Jacques Villeneuve" },
    { label: "B", text: "Michael Schumacher" },
    { label: "C", text: "Ayrton Senna" },
    { label: "D", text: "Mika Hakkinen" }
  ],
  correctOrder: ["A", "D", "C", "B"],
  learnMore: { summary: "Világbajnoki címek szerint: Jacques Villeneuve (1) ⇒ Mika Hakkinen (2) ⇒ Ayrton Senna (3) ⇒ Michael Schumacher (7)." }
},
{
  topic: "FILM",
id: 388,
type: "sort",
  title: "Tedd gyártásuk időrendjébe a híres sci-fi filmeket!",
  items: [
    { label: "A", text: "Csillagok háborúja" },
    { label: "B", text: "2001. Űrodüsszeia" },
    { label: "C", text: "Mátrix" },
    { label: "D", text: "Metropolis" }
  ],
  correctOrder: ["D", "B", "A", "C"],
  learnMore: { summary: "Gyártás szerint: Metropolis (1927) ⇒ 2001: Űrodüsszeia (1968) ⇒ Csillagok háborúja (1977) ⇒ Mátrix (1999)." }
},
{
  topic: "SPORT",
id: 389,
type: "sort",
  title: "Tedd időrendbe a 2000-es év nagy sporteseményeit!",
  items: [
    { label: "A", text: "olimpiai játékok" },
    { label: "B", text: "női kézilabda Európa-bajnokság" },
    { label: "C", text: "Bajnokok Ligája döntő-foci" },
    { label: "D", text: "Forma 1,Magyar Nagydíj" }
  ],
  correctOrder: ["C", "D", "A", "B"],
  learnMore: { summary: "Időrend szerint: Bajnokok Ligája döntő (május) ⇒ Forma 1 Magyar Nagydíj (augusztus) ⇒ olimpiai játékok (szeptember) ⇒ női kézilabda EB (december)." }
},
{
  topic: "TÖRTÉNELEM",
id: 390,
type: "sort",
  title: "Tedd időrendbe a felsorolt angol hadvezéreket!",
  items: [
    { label: "A", text: "Sir Francis Drake" },
    { label: "B", text: "Nelson admirális" },
    { label: "C", text: "Montgomery tábornagy" },
    { label: "D", text: "Oliver Cromwell" }
  ],
  correctOrder: ["A", "D", "B", "C"],
  learnMore: { summary: "Születés szerint: Sir Francis Drake (1540) ⇒ Oliver Cromwell (1599) ⇒ Nelson admirális (1758) ⇒ Montgomery tábornagy (1887)." }
},
{
  topic: "TÖRTÉNELEM",
id: 391,
type: "sort",
  title: "Tedd időrendbe a híres ütközeteket!",
  items: [
    { label: "A", text: "trafalgari csata" },
    { label: "B", text: "szalamiszi csata" },
    { label: "C", text: "lepantói csata" },
    { label: "D", text: "sztálingrádi csata" }
  ],
  correctOrder: ["B", "C", "A", "D"],
  learnMore: { summary: "Ütközetek időrendje: szalamiszi csata (Kr. e. 480) ⇒ lepantói csata (1571) ⇒ trafalgari csata (1805) ⇒ sztálingrádi csata (1942–43)." }
},
{
  topic: "TÖRTÉNELEM",
id: 392,
type: "sort",
  title: "Tedd időrendbe a Kossuth Lajos életével kapcsolatos eseményeket!",
  items: [
    { label: "A", text: "válasz a Húsvéti cikkre" },
    { label: "B", text: "a Pesti Hírlap megjelenése" },
    { label: "C", text: "kormányzósága" },
    { label: "D", text: "amerikai kőrútja" }
  ],
  correctOrder: ["B", "C", "D", "A"],
  learnMore: { summary: "Kossuth életének eseményei: Pesti Hírlap megjelenése (1841) ⇒ kormányzóság (1849) ⇒ amerikai körút (1851–52) ⇒ válasz a Húsvéti cikkre (1867)." }
},
{
  topic: "TÖRTÉNELEM",
id: 393,
type: "sort",
  title: "Tedd időrendbe a magyar történelmi hősöket!",
  items: [
    { label: "A", text: "Koppány" },
    { label: "B", text: "Kinizsi Pál" },
    { label: "C", text: "Esze Tamás" },
    { label: "D", text: "Dobó István" }
  ],
  correctOrder: ["A", "B", "D", "C"],
  learnMore: { summary: "Időrend szerint: Koppány (10. század vége) ⇒ Kinizsi Pál (15. század) ⇒ Dobó István (16. század) ⇒ Esze Tamás (17–18. század fordulója)." }
},
{
  topic: "TECHNIKA",
id: 394,
type: "sort",
  title: "Tedd időrendbe a négyütemű belső égésű motor működési ütemét!",
  items: [
    { label: "A", text: "sűrítés" },
    { label: "B", text: "szívás" },
    { label: "C", text: "munkaütem" },
    { label: "D", text: "kipufogás" }
  ],
  correctOrder: ["B", "A", "C", "D"],
  learnMore: { summary: "Négyütemű motor működési ütemei: szívás ⇒ sűrítés ⇒ munkaütem ⇒ kipufogás." }
},
{
  topic: "ÁLTALÁNOS",
id: 395,
type: "sort",
  title: "Tedd időrendbe a Nobel-békedíjasokat! Kezd azzal, aki a legkorábban kapta!",
  items: [
    { label: "A", text: "Lech Walesa" },
    { label: "B", text: "Martin Luther King" },
    { label: "C", text: "Mihail Gorbacsov" },
    { label: "D", text: "Albert Schweitzer" }
  ],
  correctOrder: ["D", "B", "A", "C"],
  learnMore: { summary: "Díjazás szerint: Albert Schweitzer (1952) ⇒ Martin Luther King (1964) ⇒ Lech Walesa (1983) ⇒ Mihail Gorbacsov (1990)." }
},
{
  topic: "IRODALOM",
id: 396,
type: "sort",
  title: "Tedd időrendbe a Petőfi Sándor életével kapcsolatos eseményeket!",
  items: [
    { label: "A", text: "nászút Koltón" },
    { label: "B", text: "a segesvári csata" },
    { label: "C", text: "a pesti forradalom" },
    { label: "D", text: "pápai diákidők" }
  ],
  correctOrder: ["D", "A", "C", "B"],
  learnMore: { summary: "Petőfi életének eseményei: pápai diákidők (1835–1838) ⇒ nászút Koltón (1847) ⇒ pesti forradalom (1848) ⇒ segesvári csata (1849)." }
},
{
  topic: "TÖRTÉNELEM",
id: 397,
type: "sort",
  title: "Tedd időrendbe a Római Birodalom nevezetes korszakait! Kezd a legkorábbival!",
  items: [
    { label: "A", text: "Augustus császársága" },
    { label: "B", text: "etruszk királyok kora" },
    { label: "C", text: "köztársaság kora" },
    { label: "D", text: "katonacsászárok uralma" }
  ],
  correctOrder: ["B", "C", "A", "D"],
  learnMore: { summary: "Korszakok időrendje: etruszk királyok kora (~Kr. e. 753–509) ⇒ köztársaság kora (Kr. e. 509–27) ⇒ Augustus császársága (Kr. e. 27–Kr. u. 14) ⇒ katonacsászárok uralma (Kr. u. 235–284)." }
},
{
  topic: "TÖRTÉNELEM",
id: 398,
type: "sort",
  title: "Tedd időrendbe a Széchenyi István életével kapcsolatos eseményeket!",
  items: [
    { label: "A", text: "a Hitel megjelenése" },
    { label: "B", text: "az MTA alapítása" },
    { label: "C", text: "a Lánchíd megnyitása" },
    { label: "D", text: "döblingi röpiratok" }
  ],
  correctOrder: ["B", "A", "C", "D"],
  learnMore: { summary: "Események időrendje: MTA alapítása (1825) ⇒ Hitel megjelenése (1830) ⇒ Lánchíd megnyitása (1849) ⇒ döblingi röpiratok (1859–60)." }
},
{
  topic: "TÖRTÉNELEM",
id: 399,
type: "sort",
  title: "Tedd időrendbe a török ellen vívott háborúk alábbi eseményeit!",
  items: [
    { label: "A", text: "a mohácsi csata" },
    { label: "B", text: "a vasvári béke" },
    { label: "C", text: "a nándorfehérvári győzelem" },
    { label: "D", text: "Buda török kézre kerül" }
  ],
  correctOrder: ["C", "A", "D", "B"],
  learnMore: { summary: "Török háborúk eseményei: nándorfehérvári győzelem (1456) ⇒ mohácsi csata (1526) ⇒ Buda török kézre kerül (1541) ⇒ vasvári béke (1664)." }
},
{
  topic: "TÖRTÉNELEM",
id: 400,
type: "sort",
  title: "Tedd időrendbe a XIII. századi magyar történelem eseményeit!",
  items: [
    { label: "A", text: "Gertrúd halála" },
    { label: "B", text: "tatárjárás" },
    { label: "C", text: "IV. Béla koronázása" },
    { label: "D", text: "III. András koronázása" }
  ],
  correctOrder: ["A", "C", "B", "D"],
  learnMore: { summary: "Történelmi sorrend: Gertrúd halála (1213) ⇒ IV. Béla koronázása (1235) ⇒ tatárjárás (1241–42) ⇒ III. András koronázása (1290)." }
},
{
  topic: "TÖRTÉNELEM",
id: 401,
type: "sort",
  title: "Tedd időrendbe a XIX. századi magyar történelem jeles eseményeit!",
  items: [
    { label: "A", text: "kiegyezés" },
    { label: "B", text: "szabadságharc" },
    { label: "C", text: "Széchenyi halála" },
    { label: "D", text: "Napóleon Győrben" }
  ],
  correctOrder: ["D", "B", "C", "A"],
  learnMore: { summary: "XIX. századi események: Napóleon Győrben (1809) ⇒ szabadságharc (1848–49) ⇒ Széchenyi halála (1860) ⇒ kiegyezés (1867)." }
},
{
  topic: "IRODALOM",
id: 402,
type: "sort",
  title: "Tedd időrendbe Ady Endre életének jelentős eseményeit!",
  items: [
    { label: "A", text: "a Nyugat első száma" },
    { label: "B", text: "első kötete" },
    { label: "C", text: "zilahi iskolaévek" },
    { label: "D", text: "házasság Csinszkával" }
  ],
  correctOrder: ["C", "B", "A", "D"],
  learnMore: { summary: "Ady életének eseményei: zilahi iskolaévek (1880-as évek) ⇒ első kötete (1899) ⇒ a Nyugat első száma (1908) ⇒ házasság Csinszkával (1915)." }
},
{
  topic: "ÁLTALÁNOS",
id: 403,
type: "sort",
  title: "Tedd időrendbe az 1980-as évek eseményeit!",
  items: [
    { label: "A", text: "Farkas Bertalan az űrben" },
    { label: "B", text: "Los Angeles-i olimpia" },
    { label: "C", text: "a KISZ megszűnése" },
    { label: "D", text: "mexikói foci-vb" }
  ],
  correctOrder: ["A", "B", "D", "C"],
  learnMore: { summary: "Időrend szerint: Farkas Bertalan az űrben (1980) ⇒ Los Angeles-i olimpia (1984) ⇒ mexikói foci-vb (1986) ⇒ a KISZ megszűnése (1989)." }
},
{
  topic: "SPORT",
id: 404,
type: "sort",
  title: "Tedd időrendbe az egy szervajátékon belüli lehetséges teniszállásokat!",
  items: [
    { label: "A", text: "30:15" },
    { label: "B", text: "0:15" },
    { label: "C", text: "30:40" },
    { label: "D", text: "15:15" }
  ],
  correctOrder: ["B", "D", "A", "C"],
  learnMore: { summary: "Teniszállások időrendje: 0:15 ⇒ 15:15 ⇒ 30:15 ⇒ 30:40." }
},
{
  topic: "TÖRTÉNELEM",
id: 405,
type: "sort",
  title: "Tedd időrendbe az Egyesült Államok alábbi elnökeit!",
  items: [
    { label: "A", text: "Abraham Lincoln" },
    { label: "B", text: "Bill Clinton" },
    { label: "C", text: "Woodrow Wilson" },
    { label: "D", text: "John F. Kennedy" }
  ],
  correctOrder: ["A", "C", "D", "B"],
  learnMore: { summary: "Elnökök időrendje: Abraham Lincoln (1861–1865) ⇒ Woodrow Wilson (1913–1921) ⇒ John F. Kennedy (1961–1963) ⇒ Bill Clinton (1993–2001)." }
},
{
  topic: "BIOLÓGIA",
id: 406,
type: "sort",
  title: "Tedd időrendbe az orvostudomány nevezetes felfedezéseit, eseményeit!",
  items: [
    { label: "A", text: "első szívátültetés" },
    { label: "B", text: "penicillin" },
    { label: "C", text: "röntgen-sugarak" },
    { label: "D", text: "első művese" }
  ],
  correctOrder: ["C", "B", "D", "A"],
  learnMore: { summary: "Felfedezések időrendje: röntgen-sugarak (1895) ⇒ penicillin (1928) ⇒ első művese (1945) ⇒ első szívátültetés (1967)." }
},
{
  topic: "VALLÁS",
id: 407,
type: "sort",
  title: "Tedd időrendbe Máté evangéliumának eseményeit!",
  items: [
    { label: "A", text: "Pilátus ítélete" },
    { label: "B", text: "a hegyi beszéd" },
    { label: "C", text: "az utolsó vacsora" },
    { label: "D", text: "Jézus születése" }
  ],
  correctOrder: ["D", "B", "C", "A"],
  learnMore: { summary: "Máté evangéliuma eseményei: Jézus születése ⇒ a hegyi beszéd ⇒ az utolsó vacsora ⇒ Pilátus ítélete." }
},
{
  topic: "SPORT",
id: 408,
type: "sort",
  title: "Tedd időrendi sorrendbe a felsorolt labdarúgó szövetségi kapitányokat! Kezd a legkorábbival!",
  items: [
    { label: "A", text: "Illovszky Rudolf" },
    { label: "B", text: "Sebes Gusztáv" },
    { label: "C", text: "Hajós Alfréd" },
    { label: "D", text: "Bicskei Bertalan" }
  ],
  correctOrder: ["C", "B", "A", "D"],
  learnMore: { summary: "Kapitányok időrendje: Hajós Alfréd (1923) ⇒ Sebes Gusztáv (1949–1956) ⇒ Illovszky Rudolf (1966, 1971–1974) ⇒ Bicskei Bertalan (1987, 1998–2001)." }
},
{
  topic: "VALLÁS",
id: 409,
type: "sort",
  title: "Tedd időrendi sorrendbe a felsorolt pápákat! Kezd a legkorábbival!",
  items: [
    { label: "A", text: "XIII. Gergely" },
    { label: "B", text: "Szent Péter" },
    { label: "C", text: "XXIII. János" },
    { label: "D", text: "II. Szilveszter" }
  ],
  correctOrder: ["B", "D", "A", "C"],
  learnMore: { summary: "Pápák időrendje: Szent Péter (~1. század) ⇒ II. Szilveszter (999–1003) ⇒ XIII. Gergely (1572–1585) ⇒ XXIII. János (1958–1963)." }
},
{
  topic: "TÖRTÉNELEM",
id: 410,
type: "sort",
  title: "Tedd időrendi sorrendbe a következő magyar hadvezéreket! Kezd a legkorábbival!",
  items: [
    { label: "A", text: "Esze Tamás" },
    { label: "B", text: "Damjanich János" },
    { label: "C", text: "Hunyadi János" },
    { label: "D", text: "Zrínyi Miklós" }
  ],
  correctOrder: ["C", "D", "A", "B"],
  learnMore: { summary: "Hadvezérek időrendje: Hunyadi János (1407–1456) ⇒ Zrínyi Miklós (1620–1664) ⇒ Esze Tamás (1666–1708) ⇒ Damjanich János (1804–1849)." }
},
{
  topic: "VALLÁS",
id: 411,
type: "sort",
  title: "Tedd időrendi sorrendbe az alábbi esztergomi érsekeket!",
  items: [
    { label: "A", text: "Mindszenty József" },
    { label: "B", text: "Bakócz Tamás" },
    { label: "C", text: "Paskai László" },
    { label: "D", text: "Pázmány Péter" }
  ],
  correctOrder: ["B", "D", "A", "C"],
  learnMore: { summary: "Időrend szerint: Bakócz Tamás (1497–1521) ⇒ Pázmány Péter (1616–1637) ⇒ Mindszenty József (1945–1973) ⇒ Paskai László (1987–2002)." }
},
{
  topic: "IRODALOM",
id: 412,
type: "sort",
  title: "Tedd keletkezésük időrendjébe a drámai hősöket!",
  items: [
    { label: "A", text: "Ibsen: Nora" },
    { label: "B", text: "Moliere: Tartuffe" },
    { label: "C", text: "Szophoklész: Antigoné" },
    { label: "D", text: "Shakespeare: Hamlet" }
  ],
  correctOrder: ["C", "D", "B", "A"],
  learnMore: { summary: "Keletkezés szerint: Szophoklész: Antigoné (Kr. e. 5. század) ⇒ Shakespeare: Hamlet (~1600) ⇒ Molière: Tartuffe (1664) ⇒ Ibsen: Nora (1879)." }
},
{
  topic: "IRODALOM",
id: 413,
type: "sort",
  title: "Tedd keletkezésük időrendjébe a híres eposzokat!",
  items: [
    { label: "A", text: "Mahábhárata" },
    { label: "B", text: "Szigeti veszedelem" },
    { label: "C", text: "Aeneis" },
    { label: "D", text: "Zalán futása" }
  ],
  correctOrder: ["A", "C", "B", "D"],
  learnMore: { summary: "Keletkezés szerint: Mahábhárata (~Kr. e. 4. század) ⇒ Aeneis (~Kr. e. 1. század) ⇒ Szigeti veszedelem (1651) ⇒ Zalán futása (1825)." }
},
{
  topic: "KÉPZŐMŰVÉSZET",
id: 414,
type: "sort",
  title: "Tedd keletkezésük időrendjébe a híres szobrokat!",
  items: [
    { label: "A", text: "willendorfi Vénusz" },
    { label: "B", text: "Henry Moore Fekvő alakja" },
    { label: "C", text: "Michelangelo Dávidja" },
    { label: "D", text: "milói Vénusz" }
  ],
  correctOrder: ["A", "D", "C", "B"],
  learnMore: { summary: "Keletkezés szerint: willendorfi Vénusz (~Kr. e. 25 000) ⇒ milói Vénusz (~Kr. e. 130) ⇒ Michelangelo Dávidja (1504) ⇒ Henry Moore Fekvő alakja (1951)." }
},
{
  topic: "ZENE",
id: 415,
type: "sort",
  title: "Tedd keletkezésük sorrendjébe az alábbi dalokat! Kezd a legkorábbival!",
  items: [
    { label: "A", text: "Kossuth-nóta" },
    { label: "B", text: "Szomorú vasárnap" },
    { label: "C", text: "Marseillaise" },
    { label: "D", text: "Bye-bye Szása!" }
  ],
  correctOrder: ["C", "A", "B", "D"],
  learnMore: { summary: "Dalok keletkezése szerint: Marseillaise (1792) ⇒ Kossuth-nóta (1848 körül) ⇒ Szomorú vasárnap (1933) ⇒ Bye-bye Szása! (1990-es évek)." }
},
{
  topic: "IRODALOM",
id: 416,
type: "sort",
  title: "Tedd keletkezésük szerinti időrendbe az alábbi ismert verseket!",
  items: [
    { label: "A", text: "Húsvét előtt" },
    { label: "B", text: "Nemzeti dal" },
    { label: "C", text: "A walesi bárdok" },
    { label: "D", text: "Himnusz" }
  ],
  correctOrder: ["D", "B", "C", "A"],
  learnMore: { summary: "Keletkezés szerint: Himnusz (1823) ⇒ Nemzeti dal (1848) ⇒ A walesi bárdok (1857) ⇒ Húsvét előtt (1916)." }
},
{
  topic: "TÖRTÉNELEM",
id: 417,
type: "sort",
  title: "Tedd kialakulásuk időrendjébe az alábbi híres államokat!",
  items: [
    { label: "A", text: "Kelet-Római Birodalom" },
    { label: "B", text: "Egyiptomi Birodalom" },
    { label: "C", text: "Osztrák-Magyar Monarchia" },
    { label: "D", text: "Német-Római Császárság" }
  ],
  correctOrder: ["B", "A", "D", "C"],
  learnMore: { summary: "Kialakulás szerint: Egyiptomi Birodalom (~Kr. e. 3000) ⇒ Kelet-Római Birodalom (395) ⇒ Német-Római Császárság (962) ⇒ Osztrák–Magyar Monarchia (1867)." }
},
{
  topic: "TÖRTÉNELEM",
id: 418,
type: "sort",
  title: "Tedd kibocsátásuk időrendjébe a híres történelmi iratokat!",
  items: [
    { label: "A", text: "Code Napóleon" },
    { label: "B", text: "Magna Charta" },
    { label: "C", text: "magyar Aranybulla" },
    { label: "D", text: "olmützi alkotmány" }
  ],
  correctOrder: ["B", "C", "A", "D"],
  learnMore: { summary: "Kibocsátás szerint: Magna Charta (1215) ⇒ magyar Aranybulla (1222) ⇒ Code Napóleon (1804) ⇒ olmützi alkotmány (1849)." }
},
{
  topic: "ÁLTALÁNOS",
id: 419,
type: "sort",
  title: "Tedd kitalálásuk időrendjébe az alábbi ismert nyomozókat!",
  items: [
    { label: "A", text: "Hercule Poirot" },
    { label: "B", text: "Sherlock Holmes" },
    { label: "C", text: "Derrick" },
    { label: "D", text: "Linda" }
  ],
  correctOrder: ["B", "A", "C", "D"],
  learnMore: { summary: "Kitalálás szerint: Sherlock Holmes (1887) ⇒ Hercule Poirot (1920) ⇒ Derrick (1974) ⇒ Linda (1984)." }
},
{
  topic: "ORSZÁGOK",
id: 420,
type: "sort",
  title: "Tedd közös államhatáraink hossza szerinti csökkenő sorrendbe Magyarország szomszédait!",
  items: [
    { label: "A", text: "Szlovénia" },
    { label: "B", text: "Horvátország" },
    { label: "C", text: "Románia" },
    { label: "D", text: "Szlovákia" }
  ],
  correctOrder: ["D", "C", "B", "A"],
  learnMore: { summary: "Határhossz szerint: Szlovákia (~654 km) ⇒ Románia (~448 km) ⇒ Horvátország (~344 km) ⇒ Szlovénia (~102 km)." }
},
{
  topic: "IRODALOM",
id: 421,
type: "sort",
  title: "Tedd legelső kötetük megjelenésének időrendjébe az alábbi költőket!",
  items: [
    { label: "A", text: "Babits Mihály" },
    { label: "B", text: "József Attila" },
    { label: "C", text: "Weöres Sándor" },
    { label: "D", text: "Reviczky Gyula" }
  ],
  correctOrder: ["D", "A", "B", "C"],
  learnMore: { summary: "Első kötetek megjelenése szerint: Reviczky Gyula (1870) ⇒ Babits Mihály (1908) ⇒ József Attila (1922) ⇒ Weöres Sándor (1932)." }
},
{
  topic: "OPERA",
id: 422,
type: "sort",
  title: "Tedd magasság szerinti növekvő sorrendbe az alábbi szolmizációs hangokat!",
  items: [
    { label: "A", text: "fa" },
    { label: "B", text: "re" },
    { label: "C", text: "ti" },
    { label: "D", text: "la" }
  ],
  correctOrder: ["B", "A", "D", "C"],
  learnMore: { summary: "Szolmizációs sorrend: re ⇒ fa ⇒ la ⇒ ti." }
},
{
  topic: "ZENE",
id: 423,
type: "sort",
  title: "Tedd megalakulásuk időrendjébe a felsorolt rockegyütteseket!",
  items: [
    { label: "A", text: "Pink Floyd" },
    { label: "B", text: "Pet Shop Boys" },
    { label: "C", text: "AC/DC" },
    { label: "D", text: "Beach Boys" }
  ],
  correctOrder: ["D", "A", "C", "B"],
  learnMore: { summary: "Megalakulás szerint: Beach Boys (1961) ⇒ Pink Floyd (1965) ⇒ AC/DC (1973) ⇒ Pet Shop Boys (1981)." }
},
{
  topic: "TÖRTÉNELEM",
id: 424,
type: "sort",
  title: "Tedd megalakulásuk időrendjébe a politikai-katonai szövetségeket!",
  items: [
    { label: "A", text: "Szent Szövetség" },
    { label: "B", text: "antant" },
    { label: "C", text: "SEATO" },
    { label: "D", text: "NATO" }
  ],
  correctOrder: ["A", "B", "D", "C"],
  learnMore: { summary: "Megalakulás szerint: Szent Szövetség (1815) ⇒ antant (1907) ⇒ NATO (1949) ⇒ SEATO (1954)." }
},
{
  topic: "ÁLTALÁNOS",
id: 425,
type: "sort",
  title: "Tedd megépítésük időrendjébe a híres hajókat!",
  items: [
    { label: "A", text: "Titanic" },
    { label: "B", text: "Kon-Tiki" },
    { label: "C", text: "Santa Maria" },
    { label: "D", text: "Mayflower" }
  ],
  correctOrder: ["C", "D", "A", "B"],
  learnMore: { summary: "Megépítés szerint: Santa Maria (1492) ⇒ Mayflower (1620) ⇒ Titanic (1912) ⇒ Kon-Tiki (1947)." }
},
{
  topic: "IRODALOM",
id: 426,
type: "sort",
  title: "Tedd megírásuk időrendjébe a híres irodalmi összecsapásokat!",
  items: [
    { label: "A", text: "Anyegin és Lenszkij" },
    { label: "B", text: "Antigoné és Kreón" },
    { label: "C", text: "Rómeó és Tybalt" },
    { label: "D", text: "Boka és Áts Feri" }
  ],
  correctOrder: ["B", "C", "A", "D"],
  learnMore: { summary: "Megírás szerint: Antigoné és Kreón (Kr. e. 5. század) ⇒ Rómeó és Tybalt (1595) ⇒ Anyegin és Lenszkij (1825) ⇒ Boka és Áts Feri (1907)." }
},
{
  topic: "IRODALOM",
id: 427,
type: "sort",
  title: "Tedd megírásuk időrendjébe az alábbi ismert magyar verseket!",
  items: [
    { label: "A", text: "Nemzeti dal" },
    { label: "B", text: "Héjanász az avaron" },
    { label: "C", text: "A Reményhez" },
    { label: "D", text: "Hajnali részegség" }
  ],
  correctOrder: ["C", "A", "B", "D"],
  learnMore: { summary: "Megírás szerint: A Reményhez (1808) ⇒ Nemzeti dal (1848) ⇒ Héjanász az avaron (1922) ⇒ Hajnali részegség (1933)." }
},
{
  topic: "ÁLTALÁNOS",
id: 428,
type: "sort",
  title: "Tedd nagyság szerinti sorrendbe a felsorolt római számokat! Kezd a legkisebbel!",
  items: [
    { label: "A", text: "XC" },
    { label: "B", text: "MM" },
    { label: "C", text: "DI" },
    { label: "D", text: "IV" }
  ],
  correctOrder: ["D", "A", "C", "B"],
  learnMore: { summary: "Római számok szerint: IV (4) ⇒ XC (90) ⇒ DI (501) ⇒ MM (2000)." }
},
{
  topic: "TUDOMÁNY",
id: 429,
type: "sort",
  title: "Tedd növekvő sorrendbe a régi magyar hosszmértékeket!",
  items: [
    { label: "A", text: "magyar mérföld" },
    { label: "B", text: "bécsi öl" },
    { label: "C", text: "bécsi láb" },
    { label: "D", text: "bécsi hüvelyk" }
  ],
  correctOrder: ["D", "C", "B", "A"],
  learnMore: { summary: "Hosszmértékek növekvő sorrendben: bécsi hüvelyk (~2.6 cm) ⇒ bécsi láb (~31.6 cm) ⇒ bécsi öl (~1.9 m) ⇒ magyar mérföld (~8.3 km)." }
},
{
  topic: "TUDOMÁNY",
id: 430,
type: "sort",
  title: "Tedd növekvő sorrendbe a súlymértékeket!",
  items: [
    { label: "A", text: "font" },
    { label: "B", text: "tonna" },
    { label: "C", text: "mázsa" },
    { label: "D", text: "gramm" }
  ],
  correctOrder: ["D", "A", "C", "B"],
  learnMore: { summary: "Súlymértékek növekvő sorrendben: gramm ⇒ font ⇒ mázsa ⇒ tonna." }
},
{
  topic: "TUDOMÁNY",
id: 431,
type: "sort",
  title: "Tedd növekvő sorrendbe az alábbi űrmértékeket!",
  items: [
    { label: "A", text: "hektó" },
    { label: "B", text: "akó" },
    { label: "C", text: "icce" },
    { label: "D", text: "liter" }
  ],
  correctOrder: ["C", "D", "B", "A"],
  learnMore: { summary: "Űrmértékek növekvő sorrendben: icce (~1 liter) ⇒ liter ⇒ akó (~54 liter) ⇒ hektó (100 liter)." }
},
{
  topic: "TUDOMÁNY",
id: 432,
type: "sort",
  title: "Tedd olvadáspontjuk szerint növekvő sorrendbe a felsorolt kémiai elemeket!",
  items: [
    { label: "A", text: "ólom" },
    { label: "B", text: "nátrium" },
    { label: "C", text: "vas" },
    { label: "D", text: "alumínium" }
  ],
  correctOrder: ["B", "A", "D", "C"],
  learnMore: { summary: "Olvadáspont szerint: nátrium (~98 °C) ⇒ ólom (~327 °C) ⇒ alumínium (~660 °C) ⇒ vas (~1 538 °C)." }
},
{
  topic: "VALLÁS",
id: 433,
type: "sort",
  title: "Tedd rangjuk szerinti emelkedő sorrendbe az alábbi római katolikus egyházi méltóságokat!",
  items: [
    { label: "A", text: "érsek" },
    { label: "B", text: "plébános" },
    { label: "C", text: "pápa" },
    { label: "D", text: "püspök" }
  ],
  correctOrder: ["B", "D", "A", "C"],
  learnMore: { summary: "Rang szerint: plébános ⇒ püspök ⇒ érsek ⇒ pápa." }
},
{
  topic: "KÉPZŐMŰVÉSZET",
id: 434,
type: "sort",
  title: "Tedd sorba a festőket aszerint, hány évig éltek! Kezd a legrövidebb életűvel!",
  items: [
    { label: "A", text: "Pablo Picasso" },
    { label: "B", text: "Toulose-Lautrec" },
    { label: "C", text: "Rubens" },
    { label: "D", text: "Paul Gauguin" }
  ],
  correctOrder: ["B", "D", "C", "A"],
  learnMore: { summary: "Életkor szerint: Toulouse-Lautrec (37 év) ⇒ Paul Gauguin (54 év) ⇒ Rubens (63 év) ⇒ Pablo Picasso (91 év)." }
},
{
  topic: "ÁLTALÁNOS",
id: 435,
type: "sort",
  title: "Tedd sorba a ház szintjeit! Kezd a legalsóval!",
  items: [
    { label: "A", text: "tetőtér" },
    { label: "B", text: "alagsor" },
    { label: "C", text: "emelet" },
    { label: "D", text: "magasföldszint" }
  ],
  correctOrder: ["B", "D", "C", "A"],
  learnMore: { summary: "Szintek szerint: alagsor ⇒ magasföldszint ⇒ emelet ⇒ tetőtér." }
},
{
  topic: "ÁLTALÁNOS",
id: 436,
type: "sort",
  title: "Tedd sorba a jelenleg vert magyar pénzérméket átmérőjük szerint! Kezd a legnagyobbal!",
  items: [
    { label: "A", text: "ötforintos" },
    { label: "B", text: "százforintos" },
    { label: "C", text: "húszforintos" },
    { label: "D", text: "kétforintos" }
  ],
  correctOrder: ["C", "B", "A", "D"],
  learnMore: { summary: "Átmérő szerint: húszforintos (28.3 mm) ⇒ százforintos (23.8 mm) ⇒ ötforintos (21.2 mm) ⇒ kétforintos (18.3 mm)." }
},
{
  topic: "FÖLDRAJZ",
id: 437,
type: "sort",
  title: "Tedd sorba a magyar hegységeket legmagasabb csúcsuk szerint! Kezd a legalacsonyabbal!",
  items: [
    { label: "A", text: "Mátra" },
    { label: "B", text: "Bükk" },
    { label: "C", text: "Gerecse" },
    { label: "D", text: "Bakony" }
  ],
  correctOrder: ["C", "D", "B", "A"],
  learnMore: { summary: "Csúcsok magassága szerint: Gerecse (Nagysáp-hegy, 634 m) ⇒ Bakony (Kőris-hegy, 709 m) ⇒ Bükk (Istállós-kő, 959 m) ⇒ Mátra (Kékes, 1014 m)." }
},
{
  topic: "MAGYARORSZÁG",
id: 438,
type: "sort",
  title: "Tedd sorba a városokat aszerint, hányas autópálya közelében fekszenek! Kezd az M1-es mellettivel!",
  items: [
    { label: "A", text: "Hatvan" },
    { label: "B", text: "Győr" },
    { label: "C", text: "Kecskemét" },
    { label: "D", text: "Székesfehérvár" }
  ],
  correctOrder: ["B", "A", "C", "D"],
  learnMore: { summary: "Autópályák szerint: Győr (M1) ⇒ Hatvan (M3) ⇒ Kecskemét (M5) ⇒ Székesfehérvár (M7)." }
},
{
  topic: "TUDOMÁNY",
id: 439,
type: "sort",
  title: "Tedd sorba az alábbi mértani szögeket fokban kifejezett nagyságuk szerint! Kezd a legkisebbel!",
  items: [
    { label: "A", text: "derékszög" },
    { label: "B", text: "tompaszög" },
    { label: "C", text: "teljesszög" },
    { label: "D", text: "hegyesszög" }
  ],
  correctOrder: ["D", "A", "B", "C"],
  learnMore: { summary: "Szögek nagysága szerint: hegyesszög (<90°) ⇒ derékszög (90°) ⇒ tompaszög (90°–180°) ⇒ teljesszög (360°)." }
},
{
  topic: "TÖRTÉNELEM",
id: 440,
type: "sort",
  title: "Tedd sorba az amerikai elnököket aszerint, hány évig töltötték be hivatalukat! Kezd a legkevesebbel!",
  items: [
    { label: "A", text: "J. F. Kennedy" },
    { label: "B", text: "F. D. Rossevelt" },
    { label: "C", text: "Bill Clinton" },
    { label: "D", text: "Jimmy Carter" }
  ],
  correctOrder: ["A", "D", "C", "B"],
  learnMore: { summary: "Hivatali idő szerint: J. F. Kennedy (~3 év) ⇒ Jimmy Carter (4 év) ⇒ Bill Clinton (8 év) ⇒ F. D. Roosevelt (12 év)." }
},
{
  topic: "FÖLDRAJZ",
id: 441,
type: "sort",
  title: "Tedd sorrendbe a felsorolt ázsiai országokat területük nagysága szerint! Kezd a legnagyobbal!",
  items: [
    { label: "A", text: "Japán" },
    { label: "B", text: "Pakisztán" },
    { label: "C", text: "Izrael" },
    { label: "D", text: "Kína" }
  ],
  correctOrder: ["D", "B", "A", "C"],
  learnMore: { summary: "Terület szerint: Kína (~9 600 000 km²) ⇒ Pakisztán (~881 000 km²) ⇒ Japán (~378 000 km²) ⇒ Izrael (~22 000 km²)." }
},
{
  topic: "VALLÁS",
id: 442,
type: "sort",
  title: "Tedd sorrendbe a felsorolt bibliai szereplőket a hozzájuk kapcsolódó számok alapján?",
  items: [
    { label: "A", text: "apostolok" },
    { label: "B", text: "napkeleti bölcsek" },
    { label: "C", text: "latrok" },
    { label: "D", text: "evangelisták" }
  ],
  correctOrder: ["C", "B", "D", "A"],
  learnMore: { summary: "Kapcsolódó számok szerint: latrok (2) ⇒ napkeleti bölcsek (3) ⇒ evangelisták (4) ⇒ apostolok (12)." }
},
{
  topic: "BIOLÓGIA",
id: 443,
type: "sort",
  title: "Tedd sorrendbe a felsorolt emberi csontokat! Kezd felülről!",
  items: [
    { label: "A", text: "lapocka" },
    { label: "B", text: "járomcsont" },
    { label: "C", text: "sípcsont" },
    { label: "D", text: "medencecsont" }
  ],
  correctOrder: ["B", "A", "D", "C"],
  learnMore: { summary: "Felülről lefelé: járomcsont ⇒ lapocka ⇒ medencecsont ⇒ sípcsont." }
},
{
  topic: "FÖLDRAJZ",
id: 444,
type: "sort",
  title: "Tedd sorrendbe a felsorolt magyar városokat keletről nyugatra haladva!",
  items: [
    { label: "A", text: "Eger" },
    { label: "B", text: "Sopron" },
    { label: "C", text: "Nyíregyháza" },
    { label: "D", text: "Esztergom" }
  ],
  correctOrder: ["C", "A", "D", "B"],
  learnMore: { summary: "Keletről nyugatra: Nyíregyháza ⇒ Eger ⇒ Esztergom ⇒ Sopron." }
},
{
  topic: "OPERA",
id: 445,
type: "sort",
  title: "Tedd sorrendbe a felsorolt zeneszerzőket aszerint, hogy hány szimfóniát írtak! Kezd a legkevesebbel!",
  items: [
    { label: "A", text: "Brahms" },
    { label: "B", text: "Bizet" },
    { label: "C", text: "Haydn" },
    { label: "D", text: "Beethoven" }
  ],
  correctOrder: ["B", "A", "D", "C"],
  learnMore: { summary: "Szimfóniák száma szerint: Bizet (1) ⇒ Brahms (4) ⇒ Beethoven (9) ⇒ Haydn (104)." }
},
{
  topic: "SPORT",
id: 446,
type: "sort",
  title: "Tedd sorrendbe a futballistákat válogatottságuk száma szerint! Kezd a legkevesebbel!",
  items: [
    { label: "A", text: "Bozsik József" },
    { label: "B", text: "Sebők Vilmos" },
    { label: "C", text: "Bene Ferenc" },
    { label: "D", text: "Törőcsik András" }
  ],
  correctOrder: ["B", "D", "C", "A"],
  learnMore: { summary: "Válogatottság szerint: Sebők Vilmos (9) ⇒ Törőcsik András (45) ⇒ Bene Ferenc (76) ⇒ Bozsik József (101)." }
},
{
  topic: "BIOLÓGIA",
id: 447,
type: "sort",
  title: "Tedd sorrendbe a halakat átlagos nagyságuk szerint! Kezd a legkisebbel!",
  items: [
    { label: "A", text: "mélytengeri angolna" },
    { label: "B", text: "európai szardella" },
    { label: "C", text: "törpeharcsa" },
    { label: "D", text: "kardhal" }
  ],
  correctOrder: ["B", "C", "A", "D"],
  learnMore: { summary: "Átlagos nagyság szerint: európai szardella (~15 cm) ⇒ törpeharcsa (~30 cm) ⇒ mélytengeri angolna (~1 m) ⇒ kardhal (~3–4 m)." }
},
{
  topic: "ÁLTALÁNOS",
id: 448,
type: "sort",
  title: "Tedd sorrendbe a közlekedési lámpa fényeit! Kezd a tilos jelzéssel!",
  items: [
    { label: "A", text: "piros-sárga" },
    { label: "B", text: "piros" },
    { label: "C", text: "zöld" },
    { label: "D", text: "sárga" }
  ],
  correctOrder: ["B", "A", "C", "D"],
  learnMore: { summary: "Közlekedési lámpa sorrendje: piros ⇒ piros-sárga ⇒ zöld ⇒ sárga." }
},
{
  topic: "MAGYARORSZÁG",
id: 449,
type: "sort",
  title: "Tedd sorrendbe a magyar borvidékeket keletről nyugat felé haladva!",
  items: [
    { label: "A", text: "Tokaj" },
    { label: "B", text: "Badacsony" },
    { label: "C", text: "Villány" },
    { label: "D", text: "Eger" }
  ],
  correctOrder: ["A", "D", "C", "B"],
  learnMore: { summary: "Keletről nyugatra: Tokaj ⇒ Eger ⇒ Villány ⇒ Badacsony." }
},
{
  topic: "TUDOMÁNY",
id: 450,
type: "sort",
  title: "Tedd sorrendbe a Nobel-békedíjasokat a díj odaítélésének éve alapján! Kezd a legkorábbival!",
  items: [
    { label: "A", text: "Henri Dunant" },
    { label: "B", text: "Willy Brandt" },
    { label: "C", text: "Albert Schweitzer" },
    { label: "D", text: "Lech Walesa" }
  ],
  correctOrder: ["A", "C", "B", "D"],
  learnMore: { summary: "Nobel-békedíj szerint: Henri Dunant (1901) ⇒ Albert Schweitzer (1952) ⇒ Willy Brandt (1971) ⇒ Lech Walesa (1983)." }
},
{
  topic: "NYELV",
id: 451,
type: "sort",
  title: "Tedd sorrendbe a nyelveket aszerint, hogy hányan beszélik anyanyelvként! Kezd a legelterjedtebbel!",
  items: [
    { label: "A", text: "mandarin kínai" },
    { label: "B", text: "olasz" },
    { label: "C", text: "arab" },
    { label: "D", text: "spanyol" }
  ],
  correctOrder: ["A", "D", "C", "B"],
  learnMore: { summary: "Anyanyelvi beszélők szerint: mandarin kínai (~920 millió) ⇒ spanyol (~475 millió) ⇒ arab (~310 millió) ⇒ olasz (~65 millió)." }
},
{
  topic: "TUDOMÁNY",
id: 452,
type: "sort",
  title: "Tedd sorrendbe a periódusos rendszer elemeit! Kezd a legkisebb rendszámúval!",
  items: [
    { label: "A", text: "oxigén" },
    { label: "B", text: "hidrogén" },
    { label: "C", text: "réz" },
    { label: "D", text: "urán" }
  ],
  correctOrder: ["B", "A", "C", "D"],
  learnMore: { summary: "Rendszám szerint: hidrogén (1) ⇒ oxigén (8) ⇒ réz (29) ⇒ urán (92)." }
},
{
  topic: "FÖLDRAJZ",
id: 453,
type: "sort",
  title: "Tedd sorrendbe az alábbi félszigeteket területük nagysága szerint! Kezd a legnagyobbal!",
  items: [
    { label: "A", text: "Florida" },
    { label: "B", text: "Arab-félsziget" },
    { label: "C", text: "Krím-félsziget" },
    { label: "D", text: "Skandináv-félsziget" }
  ],
  correctOrder: ["B", "D", "A", "C"],
  learnMore: { summary: "Terület szerint: Arab-félsziget (~3 200 000 km²) ⇒ Skandináv-félsziget (~800 000 km²) ⇒ Florida (~170 000 km²) ⇒ Krím-félsziget (~27 000 km²)." }
},
{
  topic: "TUDOMÁNY",
id: 454,
type: "sort",
  title: "Tedd sorrendbe az alábbi fémeket olvadáspontjuk alapján! Kezd a legalacsonyabbal!",
  items: [
    { label: "A", text: "alumínium" },
    { label: "B", text: "ón" },
    { label: "C", text: "ezüst" },
    { label: "D", text: "vas" }
  ],
  correctOrder: ["B", "A", "C", "D"],
  learnMore: { summary: "Olvadáspont szerint: ón (~232 °C) ⇒ alumínium (~660 °C) ⇒ ezüst (~962 °C) ⇒ vas (~1 538 °C)." }
},
{
  topic: "OPERA",
id: 455,
type: "sort",
  title: "Tedd sorrendbe az alábbi operákat felvonásaik száma szerint! Kezd a legkevesebbel!",
  items: [
    { label: "A", text: "Moscagni: Parasztbecsület" },
    { label: "B", text: "Mozart: A varázsfuvola" },
    { label: "C", text: "Gounod: Faust" },
    { label: "D", text: "Puccini: Tosca" }
  ],
  correctOrder: ["A", "B", "D", "C"],
  learnMore: { summary: "Felvonások száma szerint: Parasztbecsület (1) ⇒ A varázsfuvola (2) ⇒ Tosca (3) ⇒ Faust (5)." }
},
{
  topic: "FÖLDRAJZ",
id: 456,
type: "sort",
  title: "Tedd sorrendbe az alábbi szigeteket az Egyenlítőtől való távolságuk szerint! Kezd a legközelebbivel!",
  items: [
    { label: "A", text: "Izland" },
    { label: "B", text: "Ciprus" },
    { label: "C", text: "Szardínia" },
    { label: "D", text: "Sri Lanka" }
  ],
  correctOrder: ["D", "B", "C", "A"],
  learnMore: { summary: "Egyenlítőhöz viszonyítva: Sri Lanka (~7° északi szélesség) ⇒ Ciprus (~35°) ⇒ Szardínia (~40°) ⇒ Izland (~65°)." }
},
{
  topic: "VALLÁS",
id: 457,
type: "sort",
  title: "Tedd sorrendbe az országokat a római katolikus vallást gyakorlók aránya szerint! Kezd a legtöbbel!",
  items: [
    { label: "A", text: "Lengyelország" },
    { label: "B", text: "Vatikán" },
    { label: "C", text: "Japán" },
    { label: "D", text: "Hollandia" }
  ],
  correctOrder: ["B", "A", "D", "C"],
  learnMore: { summary: "Katolikus arány szerint: Vatikán (~100%) ⇒ Lengyelország (~87%) ⇒ Hollandia (~20%) ⇒ Japán (~0.3%)." }
},
{
  topic: "TECHNIKA",
id: 458,
type: "sort",
  title: "Tedd sorrendbe balról jobbra a bal-kormányos gépkocsi alkatrészeit!",
  items: [
    { label: "A", text: "gázpedál" },
    { label: "B", text: "fékpedál" },
    { label: "C", text: "tengelykapcsoló" },
    { label: "D", text: "sebességváltó-kar" }
  ],
  correctOrder: ["C", "B", "A", "D"],
  learnMore: { summary: "Bal-kormányos autóban balról jobbra: tengelykapcsoló ⇒ fékpedál ⇒ gázpedál ⇒ sebességváltó-kar." }
},
{
  topic: "ÁLTALÁNOS",
id: 459,
type: "sort",
  title: "Tedd sorrendbe fejtetőtől talpig a ruhadarabokat viselésük helye szerint!",
  items: [
    { label: "A", text: "kucsma" },
    { label: "B", text: "rokolya" },
    { label: "C", text: "saru" },
    { label: "D", text: "dolmány" }
  ],
  correctOrder: ["A", "D", "B", "C"],
  learnMore: { summary: "Viselés helye szerint: kucsma (fej) ⇒ dolmány (felsőtest) ⇒ rokolya (derék és láb) ⇒ saru (lábfej)." }
},
{
  topic: "OPERA",
id: 460,
type: "sort",
  title: "Tedd születésük időrendjébe a felsorolt francia zeneszerzőket!",
  items: [
    { label: "A", text: "Bizet" },
    { label: "B", text: "Berlioz" },
    { label: "C", text: "Rameau" },
    { label: "D", text: "Ravel" }
  ],
  correctOrder: ["C", "B", "A", "D"],
  learnMore: { summary: "Születés szerint: Rameau (1683) ⇒ Berlioz (1803) ⇒ Bizet (1838) ⇒ Ravel (1875)." }
},
{
  topic: "ZENE",
id: 461,
type: "sort",
  title: "Tedd születésük időrendjébe a felsorolt híres gitárosokat!",
  items: [
    { label: "A", text: "Jimi Hendrix" },
    { label: "B", text: "Bill Haley" },
    { label: "C", text: "Pat Metheny" },
    { label: "D", text: "Eric Clapton" }
  ],
  correctOrder: ["B", "A", "D", "C"],
  learnMore: { summary: "Születés szerint: Bill Haley (1925) ⇒ Jimi Hendrix (1942) ⇒ Eric Clapton (1945) ⇒ Pat Metheny (1954)." }
},
{
  topic: "TECHNIKA",
id: 462,
type: "sort",
  title: "Tedd születésük időrendjébe a felsorolt magyar feltalálókat!",
  items: [
    { label: "A", text: "Kempelen Farkas" },
    { label: "B", text: "Kandó Kálmán" },
    { label: "C", text: "Gábor Dénes" },
    { label: "D", text: "Jedlik Ányos" }
  ],
  correctOrder: ["A", "D", "B", "C"],
  learnMore: { summary: "Születés szerint: Kempelen Farkas (1734) ⇒ Jedlik Ányos (1800) ⇒ Kandó Kálmán (1869) ⇒ Gábor Dénes (1900)." }
},
{
  topic: "IRODALOM",
id: 463,
type: "sort",
  title: "Tedd születésük időrendjébe a felsorolt magyar költőket! Kezd a legkorábbival!",
  items: [
    { label: "A", text: "Radnóti Miklós" },
    { label: "B", text: "Arany János" },
    { label: "C", text: "Balassi Bálint" },
    { label: "D", text: "Csokonai Vitéz Mihály" }
  ],
  correctOrder: ["C", "D", "B", "A"],
  learnMore: { summary: "Születés szerint: Balassi Bálint (1554) ⇒ Csokonai Vitéz Mihály (1773) ⇒ Arany János (1817) ⇒ Radnóti Miklós (1909)." }
},
{
  topic: "SPORT",
id: 464,
type: "sort",
  title: "Tedd születésük időrendjébe a felsorolt magyar válogatott hátvédeket!",
  items: [
    { label: "A", text: "Garaba Imre" },
    { label: "B", text: "Buzánszky Jenő" },
    { label: "C", text: "Kehrling Béla" },
    { label: "D", text: "Mészöly Kálmán" }
  ],
  correctOrder: ["C", "B", "D", "A"],
  learnMore: { summary: "Születés szerint: Kehrling Béla (1891) ⇒ Buzánszky Jenő (1925) ⇒ Mészöly Kálmán (1941) ⇒ Garaba Imre (1958)." }
},
{
  topic: "TÖRTÉNELEM",
id: 465,
type: "sort",
  title: "Tedd születésük időrendjébe a híres hadvezéreket!",
  items: [
    { label: "A", text: "Bem József" },
    { label: "B", text: "Tomori Pál" },
    { label: "C", text: "Vak Bottyán" },
    { label: "D", text: "Kinizsi Pál" }
  ],
  correctOrder: ["D", "B", "C", "A"],
  learnMore: { summary: "Születés szerint: Kinizsi Pál (~1432) ⇒ Tomori Pál (~1475) ⇒ Vak Bottyán (~1643) ⇒ Bem József (1794)." }
},
{
  topic: "IRODALOM",
id: 466,
type: "sort",
  title: "Tedd születésük időrendjébe a híres írónőket!",
  items: [
    { label: "A", text: "Szabó Magda" },
    { label: "B", text: "Kaffka Margit" },
    { label: "C", text: "George Sand" },
    { label: "D", text: "Jane Austen" }
  ],
  correctOrder: ["D", "C", "B", "A"],
  learnMore: { summary: "Születés szerint: Jane Austen (1775) ⇒ George Sand (1804) ⇒ Kaffka Margit (1880) ⇒ Szabó Magda (1917)." }
},
{
  topic: "KÉPZŐMŰVÉSZET",
id: 467,
type: "sort",
  title: "Tedd születésük időrendjébe a híres szobrászokat!",
  items: [
    { label: "A", text: "Izsó Miklós" },
    { label: "B", text: "Kisfaludi Strobl Zsigmond" },
    { label: "C", text: "Kolozsvári Márton" },
    { label: "D", text: "Melocco Miklós" }
  ],
  correctOrder: ["C", "A", "B", "D"],
  learnMore: { summary: "Születés szerint: Kolozsvári Márton (~14. század) ⇒ Izsó Miklós (1831) ⇒ Kisfaludi Strobl Zsigmond (1884) ⇒ Melocco Miklós (1935)." }
},
{
  topic: "TÖRTÉNELEM",
id: 468,
type: "sort",
  title: "Tedd születésük időrendjébe a híres történelmi asszonyokat!",
  items: [
    { label: "A", text: "Salome" },
    { label: "B", text: "Mata Hari" },
    { label: "C", text: "Jeanne d' Arc" },
    { label: "D", text: "Indira Gandhi" }
  ],
  correctOrder: ["A", "C", "B", "D"],
  learnMore: { summary: "Születés szerint: Salome (~Kr. e. 1. század) ⇒ Jeanne d'Arc (1412) ⇒ Mata Hari (1876) ⇒ Indira Gandhi (1917)." }
},
{
  topic: "SPORT",
id: 469,
type: "sort",
  title: "Tedd születésük időrendjébe a következő magyar labdarúgó csatárokat!",
  items: [
    { label: "A", text: "Albert Flórián" },
    { label: "B", text: "Kiprich József" },
    { label: "C", text: "Zsengellér Gyula" },
    { label: "D", text: "Puskás Ferenc" }
  ],
  correctOrder: ["C", "D", "A", "B"],
  learnMore: { summary: "Születés szerint: Zsengellér Gyula (1915) ⇒ Puskás Ferenc (1927) ⇒ Albert Flórián (1941) ⇒ Kiprich József (1963)." }
},
{
  topic: "OPERA",
id: 470,
type: "sort",
  title: "Tedd születésük időrendjébe a következő osztrák zeneszerzőket!",
  items: [
    { label: "A", text: "ifj. Johann Strauss" },
    { label: "B", text: "Arnold Schönberg" },
    { label: "C", text: "Joseph Haydn" },
    { label: "D", text: "Franz Schubert" }
  ],
  correctOrder: ["C", "D", "A", "B"],
  learnMore: { summary: "Születés szerint: Joseph Haydn (1732) ⇒ Franz Schubert (1797) ⇒ ifj. Johann Strauss (1825) ⇒ Arnold Schönberg (1874)." }
},
{
  topic: "IRODALOM",
id: 471,
type: "sort",
  title: "Tedd születésük időrendjébe a nagy meseírókat! Kezd a legkorábbival!",
  items: [
    { label: "A", text: "Aesopus" },
    { label: "B", text: "Andersen" },
    { label: "C", text: "Milne" },
    { label: "D", text: "La Fontaine" }
  ],
  correctOrder: ["A", "D", "B", "C"],
  learnMore: { summary: "Születés szerint: Aesopus (~Kr. e. 620) ⇒ La Fontaine (1621) ⇒ Andersen (1805) ⇒ Milne (1882)." }
},
{
  topic: "TÖRTÉNELEM",
id: 472,
type: "sort",
  title: "Tedd születésük időrendjébe a neves francia személyiségeket!",
  items: [
    { label: "A", text: "Richelieu bíboros" },
    { label: "B", text: "De Gaulle" },
    { label: "C", text: "Danton" },
    { label: "D", text: "IX. (Szent) Lajos" }
  ],
  correctOrder: ["D", "A", "C", "B"],
  learnMore: { summary: "Születés szerint: IX. (Szent) Lajos (1214) ⇒ Richelieu bíboros (1585) ⇒ Danton (1759) ⇒ De Gaulle (1890)." }
},
{
  topic: "TÖRTÉNELEM",
id: 473,
type: "sort",
  title: "Tedd születésük időrendjébe a világtörténelem alábbi császárait!",
  items: [
    { label: "A", text: "Nagy Konstantin" },
    { label: "B", text: "Rőtszakállú Frigyes" },
    { label: "C", text: "Napóleon" },
    { label: "D", text: "Ferenc József" }
  ],
  correctOrder: ["A", "B", "C", "D"],
  learnMore: { summary: "Születés szerint: Nagy Konstantin (272) ⇒ Rőtszakállú Frigyes (1122) ⇒ Napóleon (1769) ⇒ Ferenc József (1830)." }
},
{
  topic: "TÖRTÉNELEM",
id: 474,
type: "sort",
  title: "Tedd születésük időrendjébe az alábbi híres forradalmárokat!",
  items: [
    { label: "A", text: "V. I. Lenin" },
    { label: "B", text: "Robespierre" },
    { label: "C", text: "Che Guevara" },
    { label: "D", text: "Oliver Cromwell" }
  ],
  correctOrder: ["D", "B", "A", "C"],
  learnMore: { summary: "Születés szerint: Oliver Cromwell (1599) ⇒ Robespierre (1758) ⇒ V. I. Lenin (1870) ⇒ Che Guevara (1928)." }
},
{
  topic: "VALLÁS",
id: 475,
type: "sort",
  title: "Tedd születésük időrendjébe az alábbi ismert vallásalapítókat!",
  items: [
    { label: "A", text: "Mohamed" },
    { label: "B", text: "Kálvin" },
    { label: "C", text: "Krisztus" },
    { label: "D", text: "Buddha" }
  ],
  correctOrder: ["D", "C", "A", "B"],
  learnMore: { summary: "Születés szerint: Buddha (~Kr. e. 563) ⇒ Krisztus (~Kr. e. 4) ⇒ Mohamed (570) ⇒ Kálvin (1509)." }
},
{
  topic: "TÖRTÉNELEM",
id: 476,
type: "sort",
  title: "Tedd születésük időrendjébe az alábbi középkori hírességeket!",
  items: [
    { label: "A", text: "Nagy Károly" },
    { label: "B", text: "Szent István" },
    { label: "C", text: "Kolumbusz Kristóf" },
    { label: "D", text: "Marco Polo" }
  ],
  correctOrder: ["A", "B", "D", "C"],
  learnMore: { summary: "Születési év szerint: Nagy Károly (742) ⇒ Szent István (969) ⇒ Marco Polo (1254) ⇒ Kolumbusz Kristóf (1451)." }
},
{
  topic: "ZENE",
id: 477,
type: "sort",
  title: "Tedd születésük időrendjébe az alábbi magyar énekesnőket!",
  items: [
    { label: "A", text: "Szűcs Judith" },
    { label: "B", text: "Szulák Andrea" },
    { label: "C", text: "Orsi" },
    { label: "D", text: "Kovács Kati" }
  ],
  correctOrder: ["D", "A", "B", "C"],
  learnMore: { summary: "Születés szerint: Kovács Kati (1944) ⇒ Szűcs Judith (1953) ⇒ Szulák Andrea (1964) ⇒ Orsi (1981)." }
},
{
  topic: "KÉPZŐMŰVÉSZET",
id: 478,
type: "sort",
  title: "Tedd születésük időrendjébe az alábbi magyar festőket!",
  items: [
    { label: "A", text: "Csontváry Kosztka Tivadar" },
    { label: "B", text: "Munkácsy Mihály" },
    { label: "C", text: "Csók István" },
    { label: "D", text: "M. S. mester" }
  ],
  correctOrder: ["D", "B", "A", "C"],
  learnMore: { summary: "Születés szerint: M. S. mester (~15. század) ⇒ Munkácsy Mihály (1844) ⇒ Csontváry Kosztka Tivadar (1853) ⇒ Csók István (1865)." }
},
{
  topic: "IRODALOM",
id: 479,
type: "sort",
  title: "Tedd születésük időrendjébe az alábbi magyar írókat!",
  items: [
    { label: "A", text: "Mikszáth Kálmán" },
    { label: "B", text: "Németh László" },
    { label: "C", text: "Jókai Mór" },
    { label: "D", text: "Móricz Zsigmond" }
  ],
  correctOrder: ["C", "A", "D", "B"],
  learnMore: { summary: "Születési év szerint: Jókai Mór (1825) ⇒ Mikszáth Kálmán (1847) ⇒ Móricz Zsigmond (1879) ⇒ Németh László (1901)." }
},
{
  topic: "TÖRTÉNELEM",
id: 480,
type: "sort",
  title: "Tedd születésük időrendjébe az alábbi reneszánsz személyiségeket!",
  items: [
    { label: "A", text: "Mátyás király" },
    { label: "B", text: "Bethlen Gábor" },
    { label: "C", text: "Shakespeare" },
    { label: "D", text: "Gutenberg" }
  ],
  correctOrder: ["D", "A", "C", "B"],
  learnMore: { summary: "Születés szerint: Gutenberg (~1400) ⇒ Mátyás király (1443) ⇒ Shakespeare (1564) ⇒ Bethlen Gábor (1580)." }
},
{
  topic: "VALLÁS",
id: 481,
type: "sort",
  title: "Tedd születésük időrendjébe az alábbi szenteket!",
  items: [
    { label: "A", text: "Péter apostol" },
    { label: "B", text: "Szent Imre herceg" },
    { label: "C", text: "Árpád-házi Szent Margit" },
    { label: "D", text: "Assisi Szent Ferenc" }
  ],
  correctOrder: ["A", "B", "D", "C"],
  learnMore: { summary: "Születés szerint: Péter apostol (~Kr. e. 1. század) ⇒ Szent Imre herceg (1007) ⇒ Assisi Szent Ferenc (1181) ⇒ Árpád-házi Szent Margit (1242)." }
},
{
  topic: "VALLÁS",
id: 482,
type: "sort",
  title: "Tedd születésük időrendjébe az ismert egyházi személyeket!",
  items: [
    { label: "A", text: "Szent Gellért" },
    { label: "B", text: "Mindszenty József" },
    { label: "C", text: "Pázmány Péter" },
    { label: "D", text: "Bakócz Tamás" }
  ],
  correctOrder: ["A", "D", "C", "B"],
  learnMore: { summary: "Születés szerint: Szent Gellért (~980) ⇒ Bakócz Tamás (~1442) ⇒ Pázmány Péter (1570) ⇒ Mindszenty József (1892)." }
},
{
  topic: "TÖRTÉNELEM",
id: 483,
type: "sort",
  title: "Tedd születésük időrendjébe az ismert magyar királynékat!",
  items: [
    { label: "A", text: "Erzsébet (Sissi)" },
    { label: "B", text: "Meráni Gertrúd" },
    { label: "C", text: "Aragóniai Beatrix" },
    { label: "D", text: "Gizella" }
  ],
  correctOrder: ["D", "B", "C", "A"],
  learnMore: { summary: "Születés szerint: Gizella (~980) ⇒ Meráni Gertrúd (~1185) ⇒ Aragóniai Beatrix (~1457) ⇒ Erzsébet (Sissi) (1837)." }
},
{
  topic: "TÖRTÉNELEM",
id: 484,
type: "sort",
  title: "Tedd születésük időrendjébe az ókori hírességeket!",
  items: [
    { label: "A", text: "Julius Caesar" },
    { label: "B", text: "Nero" },
    { label: "C", text: "Nagy Sándor" },
    { label: "D", text: "Tutankhamon" }
  ],
  correctOrder: ["D", "C", "A", "B"],
  learnMore: { summary: "Születés szerint: Tutankhamon (~Kr. e. 1341) ⇒ Nagy Sándor (Kr. e. 356) ⇒ Julius Caesar (Kr. e. 100) ⇒ Nero (Kr. u. 37)." }
},
{
  topic: "IRODALOM",
id: 485,
type: "sort",
  title: "Tedd születésük időrendjébe az orosz irodalom kimagasló alakjait!",
  items: [
    { label: "A", text: "Gogol" },
    { label: "B", text: "Majakovszkij" },
    { label: "C", text: "Csehov" },
    { label: "D", text: "Szolzsenyicin" }
  ],
  correctOrder: ["A", "C", "B", "D"],
  learnMore: { summary: "Születés szerint: Gogol (1809) ⇒ Csehov (1860) ⇒ Majakovszkij (1893) ⇒ Szolzsenyicin (1918)." }
},
{
  topic: "OPERA",
id: 486,
type: "sort",
  title: "Tedd születésük sorrendjébe a felsorolt magyar zeneszerzőket! Kezd a legkorábbival!",
  items: [
    { label: "A", text: "Bakfark Bálint" },
    { label: "B", text: "Kodály Zoltán" },
    { label: "C", text: "Petrovics Emil" },
    { label: "D", text: "Rózsavölgyi Márk" }
  ],
  correctOrder: ["A", "D", "B", "C"],
  learnMore: { summary: "Születés szerint: Bakfark Bálint (1507) ⇒ Rózsavölgyi Márk (1787) ⇒ Kodály Zoltán (1882) ⇒ Petrovics Emil (1930)." }
},
{
  topic: "TUDOMÁNY",
id: 487,
type: "sort",
  title: "Tedd születésük sorrendjébe a felsorolt matematikusokat!",
  items: [
    { label: "A", text: "Karl Friedrich Gauss" },
    { label: "B", text: "Neumann János" },
    { label: "C", text: "Bolyai János" },
    { label: "D", text: "Euklidész" }
  ],
  correctOrder: ["D", "A", "C", "B"],
  learnMore: { summary: "Születés szerint: Euklidész (~Kr. e. 300) ⇒ Gauss (1777) ⇒ Bolyai János (1802) ⇒ Neumann János (1903)." }
},
{
  topic: "TÖRTÉNELEM",
id: 488,
type: "sort",
  title: "Tedd születésük sorrendjébe a következő magyar utazókat!",
  items: [
    { label: "A", text: "Vámbéry Ármin" },
    { label: "B", text: "Germanus Gyula" },
    { label: "C", text: "Kőrösi Csoma Sándor" },
    { label: "D", text: "Julianus barát" }
  ],
  correctOrder: ["D", "C", "A", "B"],
  learnMore: { summary: "Születés szerint: Julianus barát (~13. század) ⇒ Kőrösi Csoma Sándor (1784) ⇒ Vámbéry Ármin (1832) ⇒ Germanus Gyula (1884)." }
},
{
  topic: "TUDOMÁNY",
id: 489,
type: "sort",
  title: "Tedd születésük sorrendjébe a következő neves csillagászokat!",
  items: [
    { label: "A", text: "Halley" },
    { label: "B", text: "Ptolemaiosz" },
    { label: "C", text: "Kepler" },
    { label: "D", text: "Kopernikusz" }
  ],
  correctOrder: ["B", "D", "C", "A"],
  learnMore: { summary: "Születés szerint: Ptolemaiosz (~Kr. u. 100) ⇒ Kopernikusz (1473) ⇒ Kepler (1571) ⇒ Halley (1656)." }
},
{
  topic: "TUDOMÁNY",
id: 490,
type: "sort",
  title: "Tedd születésük sorrendjébe az alábbi híres tudósokat!",
  items: [
    { label: "A", text: "Mengyelejev" },
    { label: "B", text: "Marie Curie" },
    { label: "C", text: "Lavoisier" },
    { label: "D", text: "Faraday" }
  ],
  correctOrder: ["C", "D", "A", "B"],
  learnMore: { summary: "Születés szerint: Lavoisier (1743) ⇒ Faraday (1791) ⇒ Mengyelejev (1834) ⇒ Marie Curie (1867)." }
},
{
  topic: "IRODALOM",
id: 491,
type: "sort",
  title: "Tedd tényleges elhalálozásuk sorrendjébe a Rómeó és Júlia szereplőit!",
  items: [
    { label: "A", text: "Rómeó" },
    { label: "B", text: "Júlia" },
    { label: "C", text: "Mercutio" },
    { label: "D", text: "Tybalt" }
  ],
  correctOrder: ["C", "D", "A", "B"],
  learnMore: { summary: "Halálozás sorrendje: Mercutio ⇒ Tybalt ⇒ Rómeó ⇒ Júlia." }
},
{
  topic: "FÖLDRAJZ",
id: 492,
type: "sort",
  title: "Tedd területük nagysága szerinti növekvő sorrendbe Magyarország alábbi szomszédjait!",
  items: [
    { label: "A", text: "Szlovénia" },
    { label: "B", text: "Ausztria" },
    { label: "C", text: "Ukrajna" },
    { label: "D", text: "Románia" }
  ],
  correctOrder: ["A", "B", "D", "C"],
  learnMore: { summary: "Terület szerint: Szlovénia (~20 000 km²) ⇒ Ausztria (~83 000 km²) ⇒ Románia (~238 000 km²) ⇒ Ukrajna (~603 000 km²)." }
},
{
  topic: "FÖLDRAJZ",
id: 493,
type: "sort",
  title: "Tedd területük nagysága szerinti növekvő sorrendbe Nagy-Britannia részeit és külbirtokait!",
  items: [
    { label: "A", text: "Wales" },
    { label: "B", text: "Skócia" },
    { label: "C", text: "Szent Ilona szigete" },
    { label: "D", text: "Man-sziget" }
  ],
  correctOrder: ["C", "D", "A", "B"],
  learnMore: { summary: "Terület szerint: Szent Ilona szigete (~122 km²) ⇒ Man-sziget (~572 km²) ⇒ Wales (~20 779 km²) ⇒ Skócia (~77 933 km²)." }
},
{
  topic: "FÖLDRAJZ",
id: 494,
type: "sort",
  title: "Tedd területük szerint sorba a volt szovjet tagköztársaságokat! Kezd a legkisebbel!",
  items: [
    { label: "A", text: "Oroszország" },
    { label: "B", text: "Lettország" },
    { label: "C", text: "Kazahsztán" },
    { label: "D", text: "Azerbajdzsán" }
  ],
  correctOrder: ["B", "D", "C", "A"],
  learnMore: { summary: "Terület szerint: Lettország (~64 000 km²) ⇒ Azerbajdzsán (~86 000 km²) ⇒ Kazahsztán (~2 724 000 km²) ⇒ Oroszország (~17 098 000 km²)." }
},
{
  topic: "FILM",
id: 495,
type: "sort",
  title: "Tedd történetük időrendjébe az alábbi szerelmes tárgyú műveket!",
  items: [
    { label: "A", text: "Elfújta a szél" },
    { label: "B", text: "Love story" },
    { label: "C", text: "Rómeó és Júlia" },
    { label: "D", text: "A szerelmes Shakespeare" }
  ],
  correctOrder: ["C", "D", "A", "B"],
  learnMore: { summary: "Történet időrendje: Rómeó és Júlia (16. század) ⇒ A szerelmes Shakespeare (1590-es évek) ⇒ Elfújta a szél (1860-as évek) ⇒ Love Story (20. század)." }
},
{
  topic: "TÖRTÉNELEM",
id: 496,
type: "sort",
  title: "Tedd uralkodásuk időrendjébe az alábbi híres rómaiakat! Kezd a legkorábbival!",
  items: [
    { label: "A", text: "Julius Caesar" },
    { label: "B", text: "Néro" },
    { label: "C", text: "Augustus" },
    { label: "D", text: "Constantinus" }
  ],
  correctOrder: ["A", "C", "B", "D"],
  learnMore: { summary: "Uralkodás szerint: Julius Caesar (Kr. e. 49–44) ⇒ Augustus (Kr. e. 27 – Kr. u. 14) ⇒ Néro (54–68) ⇒ Constantinus (306–337)." }
},
{
  topic: "TÖRTÉNELEM",
id: 497,
type: "sort",
  title: "Tedd uralkodásuk időrendjébe az alábbi magyar királyokat!",
  items: [
    { label: "A", text: "Károly Róbert" },
    { label: "B", text: "Mátyás" },
    { label: "C", text: "IV. Béla" },
    { label: "D", text: "I. László" }
  ],
  correctOrder: ["D", "C", "A", "B"],
  learnMore: { summary: "Uralkodás szerint: I. László (1077–1095) ⇒ IV. Béla (1235–1270) ⇒ Károly Róbert (1308–1342) ⇒ Mátyás (1458–1490)." }
},
{
  topic: "TÖRTÉNELEM",
id: 498,
type: "sort",
  title: "Tedd uralkodásuk időtartama szerinti növekvő sorrendbe az alábbi magyar királyokat!",
  items: [
    { label: "A", text: "Luxemburgi Zsigmond" },
    { label: "B", text: "Mátyás" },
    { label: "C", text: "II. József" },
    { label: "D", text: "IV. Károly" }
  ],
  correctOrder: ["D", "C", "B", "A"],
  learnMore: { summary: "Uralkodási idő szerint: IV. Károly (1916–1918, 2 év) ⇒ II. József (1780–1790, 10 év) ⇒ Mátyás (1458–1490, 32 év) ⇒ Luxemburgi Zsigmond (1387–1437, 50 év)." }
},
{
  topic: "TÖRTÉNELEM",
id: 499,
type: "sort",
  title: "Tedd uralkodásuk sorrendjébe az alábbi angol uralkodókat! Kezd a legkorábbival!",
  items: [
    { label: "A", text: "VIII. Henrik" },
    { label: "B", text: "II. Erzsébet" },
    { label: "C", text: "I. (Oroszlánszívű) Richárd" },
    { label: "D", text: "Viktória" }
  ],
  correctOrder: ["C", "A", "D", "B"],
  learnMore: { summary: "Uralkodás szerint: I. Richárd (1189–1199) ⇒ VIII. Henrik (1509–1547) ⇒ Viktória (1837–1901) ⇒ II. Erzsébet (1952–2022)." }
},
];
