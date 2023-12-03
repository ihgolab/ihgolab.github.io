const quiz = [
{
  qt: ['frontend', 'css', 'at-szabály'],
  q: 'Hogyan lehet egy CSS-fájlba egy másik stíluslapot beilleszteni?',
  options: ['@insert url(&quot;alap.css&quot;);', '@link url(&quot;alap.css&quot;);', '@supports url(&quot;alap.css&quot;);', '@import url(&quot;alap.css&quot;);'],
  answer: 3,
  expl: 'Az <code>@import</code> kulcsszó teszi lehetővé, hogy egy másik stíluslapból vegyünk át stílusszabályokat. A @charset szabály kivételével a stíluslap összes többi részét meg kell előznie a helyes működéshez. Több @import szabály használata is engedélyezett.'
}, 
{
  qt: ['frontend', 'css', 'at-szabály'],
  q: 'Hogyan lehet egyéni betűtípusokat deklarálni és betölteni egy weboldalon?',
  options: ['@font-style', '@font-face', '@font-load', '@font-family'],
  answer: 1,
  expl: 'A <code>@font-face</code> CSS at-szabály megadja az egyéni betűtípust, amellyel a szöveget megjelenítjük; a betűtípus betölthető akár egy távoli szerverről, akár a felhasználó saját számítógépén helyileg telepített betűtípusról.'
},
{
  qt: ['frontend', 'css', 'at-szabály'],
  q: 'Melyik CSS at-szabály (@-rule) teszi lehetővé olyan deklarációk megadását, amelyek a böngészők lehetőségeitől függnek?',
  options: ['@media', '@namespace', '@property', '@supports'],
  answer: 3,
  expl: 'A <code>@supports</code> CSS at-szabály segítségével olyan deklarációkat lehet megadni, amelyek a böngésző egy vagy több CSS-funkció támogatásától függnek. Ezt nevezzük funkció-lekérdezésnek (feature query).'
},
{
  qt: ['frontend', 'css', 'css-álosztály'],
  q: 'Milyen színű a &quot;holló&quot; és milyen színű a &quot;róka&quot; szöveg?',
  qb: ['&lt;head&gt;\n  &lt;style&gt;\n    li:first-child {\n      color: red;\n    }\n    li :first-child {\n      color: blue;\n    }\n  &lt;/style&gt;\n&lt;/head&gt;\n&lt;body&gt;\n&lt;ul&gt;\n  &lt;li&gt;A holl&oacute; &eacute;s a &lt;em&gt;r&oacute;ka&lt;/em&gt;&lt;/li&gt;\n  &lt;li&gt;Az &ouml;k&ouml;r &eacute;s a &lt;em&gt;szam&aacute;r&lt;/em&gt;&lt;/li&gt;\n  &lt;li&gt;A farkas &eacute;s a &lt;em&gt;b&aacute;r&aacute;ny&lt;/em&gt;&lt;/li&gt;\n&lt;/ul&gt;\n&lt;/body&gt;', 'markup'],
  options: ['red, blue', 'blue, red', 'black, blue', 'black, red'],
  answer: 0,
  expl: 'A <code>:first-child</code> CSS-álosztály olyan elemet jelöl, amely a testvérek listájában az első. Az álelemek, álosztályok deklarációjakor a szóköznek nagy jelentősége van, mert megváltoztatja a szelektor jelentését: leszármazotti kombinátorként kezeli az értelmező. A példa első stílusdeklarációjában nem határozzuk meg a szülőelemet, ha a <code>&lt;li&gt;</code> elem a leszármazottak csoportjának első tagja, érvényesül a formázás. A második deklarációban a szóköz leszármazotti kombinátorként viselkedik, itt a <code>&lt;li&gt;</code> elem szülő és a gyermekelem nincs meghatározva, bármilyen első leszármazottra vonatkozik a formázás.'
},
{
  qt: ['frontend', 'css', 'dobozmodell'],
  q: 'Mi a <code>&lt;div&gt;</code> HTML-elem <code>padding-right</code> értéke?',
  qb: ['&lt;head&gt;\n  &lt;style&gt;\n    div {\n      padding-right: 40px;\n      padding: 10px;\n    }\n  &lt;/style&gt;\n&lt;/head&gt;\n&lt;body&gt;\n  &lt;div&gt;Előzmények&lt;/div&gt;\n&lt;/body&gt;', 'markup'],
  options: ['10px', '40px', '50px'],
  answer: 0,
  expl: 'A <code>padding</code> rövidített CSS-tulajdonság az elem mind a négy oldalán lévő kitöltési területet állítja be. Ha egy érték van megadva, akkor mind a négy oldalra ugyanazt a kitöltést alkalmazza.    Mint minden gyorsírásos tulajdonság esetében, a deklarációban a rövidített tulajdonság előtt található értékek felülíródnak.'
},
{
  qt: ['frontend', 'css', 'dobozmodell'],
  q: 'Mi a <code>height</code> CSS-tulajdonság kezdeti értéke?',
  options: ['inherit', 'normal', 'auto', '100%'],
  answer: 2,
  expl: 'A <code>height</code> CSS-tulajdonság egy elem magasságát adja meg. Alapértelmezés szerint a tulajdonság a tartalmi terület magasságát határozza meg. Ha azonban a <code>box-sizing</code> értéke <code>border-box</code>, akkor az elem méretébe a tartalom, az eltartás (belső margó, padding) és a szegélyek is beletartoznak. A kezdeti érték <code>auto</code>.'
},
{
  qt: ['frontend', 'css', 'dobozmodell'],
  q: 'Lehet-e negatív értékeket használni a <code>padding</code> CSS-tulajdonsághoz?',
  options: ['igen', 'nem'],
  answer: 1,
  expl: 'A <code>padding</code> (eltartás, belső margó) tulajdonság a negatív értékeket figyelmen kívül hagyja, 0-ként kezeli. A margóknak és más pozícióval kapcsolatos tulajdonságoknak lehetnek negatív értékei, de az eltartásnak nem.'
},
{
  qt: ['frontend', 'css', 'dobozmodell'],
  q: 'Mennyi a bal oldali margó értéke a <code>&lt;div&gt;</code> HTML-elem esetében?',
  qb: ['&lt;style&gt;\n  div {\n    margin: 40px 30px 20px 10px;\n  }\n&lt;/style&gt;', 'markup'],
  options: ['20px', '10px', '40px', '30px'],
  answer: 1,
  expl: 'A <code>margin</code> rövidített CSS-tulajdonság egy elem négy oldalán lévő margóterületet állítja be. Négy érték megadásakor a margók a felső, a jobb, az alsó és a bal oldalra vonatkoznak ebben a sorrendben. Ha egy érték van megadva, akkor mind a négy oldalra ugyanazt a méretet alkalmazza. Két érték megadásakor az első érték a felső és alsó, a második a bal és a jobb oldalra vonatkozik. Három érték megadásakor az első a tetejére, a második a bal és a jobb oldalra, a harmadik pedig az aljára vonatkozik.'
},
{
  qt: ['frontend', 'css', 'dobozmodell'],
  q: 'Mekkora a <code>&lt;div&gt;</code> HTML-elem magassága?',
  qb: ['&lt;head&gt;\n  &lt;style&gt;\n    div {\n      box-sizing: border-box;\n      padding: 10px;\n      min-height: 200px;\n      height: 100px;\n    }\n  &lt;/style&gt;\n&lt;/head&gt;\n&lt;body&gt;\n  &lt;div&gt;Hírek&lt;/div&gt;\n&lt;/body&gt;', 'markup'],
  options: ['320px', '220px', '200px', '100px'],
  answer: 2,
  expl: 'A <code>min-height</code> CSS-tulajdonság egy elem minimális magasságát határozza meg. A <code>height</code> tulajdonság értékét felülírja, ha az kisebb a <code>min-height</code> értékénél. A <code>box-sizing</code> CSS3 tulajdonsággal tudjuk megadni, hogy az adott elem szélessége és magassága hogyan kerüljön kiszámításra. Alapértelmezett értéke a <code>content-box</code>, ami alapján egy elem méretébe csak a tartalom tartozik bele. Másik értéke a <code>border-box</code>, ennél az elem méretébe a tartalom, az eltartás (belső margó, padding) és a szegélyek is beletartoznak.'
},
{
  qt: ['frontend', 'css', 'dobozmodell'],
  q: 'Lehet-e negatív értékeket használni a <code>margin</code> tulajdonsághoz?',
  options: ['igen', 'nem'],
  answer: 0,
  expl: 'A <code>margin</code> CSS-tulajdonság negatív értékével csökkenthetjük az elemek közötti távolságot. Átfedés következik be, ha a negatív margóérték meghaladja az elemek között meglévő távolságot.'
},
{
  qt: ['frontend', 'css', 'dobozmodell'],
  q: 'Mi az <code>&lt;aside&gt;</code> HTML-elem jobb oldali margójának értéke?',
  qb: ['&lt;style&gt;\n  aside {\n    margin: 25px 15px 45px 35px;\n  }\n&lt;/style&gt;', 'markup'],
  options: ['35px', '45px', '25px', '15px'],
  answer: 3,
  expl: 'A <code>margin</code> rövidített CSS-tulajdonság egy elem négy oldalán lévő margóterületet állítja be. Négy érték megadásakor a margók a <code>top</code> (felső), <code>right</code> (jobb), <code>bottom</code> (alsó) és <code>left</code> (bal) területekre vonatkoznak ebben a sorrendben. Ha egy érték van megadva, akkor mind a négy oldalra ugyanazt a kitöltést alkalmazza. Két érték megadásakor az első kitöltés a felső és alsó, a második a bal és a jobb oldalra vonatkozik. Három érték megadásakor az első kitöltés a tetejére, a második a bal és a jobb oldalra, a harmadik pedig az aljára vonatkozik.'
},
{
  qt: ['frontend', 'css', 'dobozmodell'],
  q: 'Mekkora a <code>&lt;div&gt;</code> HTML-elem magassága?',
  qb: ['&lt;head&gt;\n  &lt;style&gt;\n    div {\n      box-sizing: content-box;\n      padding: 10px;\n      min-height: 200px;\n      height: 100px;\n    }\n  &lt;/style&gt;\n&lt;/head&gt;\n&lt;body&gt;\n  &lt;div&gt;text&lt;/div&gt;\n&lt;/body&gt;', 'markup'],
  options: ['320px', '220px', '200px', '100px'],
  answer: 1,
  expl: 'A <code>min-height</code> CSS-tulajdonság határozza meg az elem minimális magasságát. Megakadályozza, hogy a <code>height</code> tulajdonság használt értéke kisebb legyen, mint a <code>min-height</code> számára megadott érték.'
},
{
  qt: ['frontend', 'css', 'gyártói előtag'],
  q: 'A kísérleti CSS-tulajdonságokhoz adott gyártói előtagok közül melyik NEM létezik?',
  options: ['-o-', '-moz-', '-ie-', '-ms-'],
  answer: 2,
  expl: 'A böngészőgyártók előtagokat (vendor prefix) adnak a kísérleti vagy nem szabványos CSS-tulajdonságokhoz. A főbb böngészők a következő előtagokat használják: -webkit- (Chrome, Safari, Opera, WebKit alapú böngészők), -moz- (Firefox), -o- (Opera régi verziói), -ms- (Internet Explorer és Microsoft Edge).'
},
{
  qt: ['frontend', 'css', 'mértékegység'],
  q: 'Mennyi a <code>&lt;h1&gt;</code> HTML-elem betűmérete pixelben?',
  qb: ['&lt;head&gt;\n&lt;style&gt;\n  body { font-size: 16px; }\n  div  { font-size: 12px; }\n  h1  { font-size: 2em;  }  \n&lt;/style&gt;\n&lt;/head&gt;\n&lt;body&gt;\n  &lt;div&gt;\n    &lt;h1&gt;Tartalom&lt;/h1&gt;\n  &lt;/div&gt;\n&lt;/body&gt;', 'markup'],
  options: ['24px', '28px', '32px'],
  answer: 0,
  expl: 'Az <code>em</code> relatív mértékegység a szülőelem beállított vagy örökölt betűméretéhez viszonyít. A feladatban a <code>&lt;div&gt;</code> HTML-elem betűmérete 12px, ebben az esetben 2em 24px.'
},
{
  qt: ['frontend', 'css', 'mértékegység'],
  q: 'Mi az 1vw értéke, ha a nézetablak 1200px széles és 800px magas?',
  options: ['8px', '12px', '80px', '120px'],
  answer: 1,
  expl: 'A <code>vw</code> egység a nézetablak szélességén alapul. Az <strong>1vw</strong> érték a nézetablak szélességének 1%-ával egyenlő.'
},
{
  qt: ['frontend', 'css', 'rács', 'mértékegység'],
  q: 'Mennyi a középső oszlop szélessége pixelben?',
  qb: ['&lt;head&gt;\n  &lt;style&gt;\n    .grid {\n      width: 600px;\n      display: grid;\n      grid-template-columns: 120px 1fr 2fr;\n    }\n  &lt;/style&gt;\n  &lt;/head&gt;\n  &lt;body&gt;\n    &lt;div class=&quot;grid&quot;&gt;\n       &lt;div&gt;1&lt;/div&gt;\n       &lt;div&gt;2&lt;/div&gt;\n       &lt;div&gt;3&lt;/div&gt;\n    &lt;/div&gt;\n  &lt;/body&gt;', 'markup'],
  options: ['120px', '200px', '240px', '160px'],
  answer: 3,
  expl: 'Az &quot;fr&quot; (fraction: hányad, arányos rész) mértékegységek tényleges méretét úgy tudjuk kiszámítani, hogy az összes &quot;fr&quot; értéket összeadjuk, és a rács szélességét, vagy a rácsban megmaradt rugalmas helyet elosztjuk ezzel az összeggel. Ezután minden oszlop megkapja az &quot;fr&quot; értékével jelzett rész számát. A feladatban rendelkezésre álló szélesség: 600px - 120px = 480px. A rugalmas részek összege: 1 + 2 = 3. Az &quot;fr&quot; egység értéke: 480px / 3 = 160px. Az első oszlop mérete 120px, a második oszlop mérete 160px (1fr), a harmadik oszlop mérete pedig 320px (2fr).'
},
{
  qt: ['frontend', 'css', 'szelektor'],
  q: 'Milyen színű a <code>&lt;p&gt;</code> HTML-elem?',
  qb: ['&lt;head&gt;\n  &lt;style&gt;\n    section ~ p {\n      color: gold;\n    }\n    div ~ p {\n      color: indigo;\n    }\n  &lt;/style&gt;\n&lt;/head&gt;\n&lt;body&gt;\n  &lt;section&gt;\n    &lt;div&gt;1. sz&ouml;veg&lt;/div&gt;\n    &lt;p&gt;2. sz&ouml;veg&lt;/p&gt;\n  &lt;/section&gt;  \n&lt;/body&gt;', 'markup'],
  options: ['gold', 'black', 'indigo'],
  answer: 2,
  expl: 'Az általános testvér kombinátor (~) két szelektort kapcsol össze, és a második elem minden olyan példányára illeszkedik, amely az első elemet követi (bár nem feltétlenül közvetlenül), és ugyanannak a szülőelemnek a gyermeke.'
},
{
  qt: ['frontend', 'css', 'szintaktika'],
  q: 'Hogyan illesszünk be megjegyzést egy CSS-fájlba?',
  options: ['/* comment */', '// comment', '&gt;&gt;comment&lt;&lt;', '// comment //'],
  answer: 0,
  expl: 'A CSS-megjegyzés a <code>/*</code> karakterekkel kezdődik és a <code>*/</code> karakterekkel végződik.'
},
{
  qt: ['frontend', 'css', 'szintaktika'],
  q: 'Melyik elem NEM kisbetű-nagybetű érzékeny?',
  options: ['JavaScript-változónevek', 'JavaScript-utasítások', 'HTML-attribútumértékek', 'CSS-tulajdonságnevek'],
  answer: 3,
  expl: 'A CSS-tulajdonságnevek nem érzékenyek a kisbetű-nagybetű különbségre.'
},
{
  qt: ['frontend', 'css', 'szűkítés'],
  q: 'Milyen színű az <code>&lt;a&gt;</code> HTML-elem tartalma?',
  qb: ['&lt;head&gt;\n  &lt;style&gt;\n    a {\n      color: navy;\n    }\n    :link {\n      color: fuchsia;\n    }\n  &lt;/style&gt;\n&lt;/head&gt;\n&lt;body&gt;\n  &lt;a href=&quot;https://www.w3schools.com&quot;&gt;w3schools&lt;/a&gt;\n&lt;/body&gt;', 'markup'],
  options: ['fuchsia', 'navy', 'black'],
  answer: 0,
  expl: 'Az álosztály szelektorok (<code>:link</code>) szűkítési értéke 0,0,1,0. Az elemszelektorok (<code>&lt;a&gt;</code>) szűkítési értéke 0,0,0,1. Ha a szelektorok szűkítési értéke nem egyenlő, akkor a nagyobb súlyú szabály számít.'
},
{
  qt: ['frontend', 'css', 'szűkítés'],
  q: 'Milyen színű az <code>&lt;em&gt;</code> HTML-elem?',
  qb: ['&lt;head&gt;\n  &lt;style&gt;\n    em {\n      color: coral;\n    }\n    body &gt; em {\n      color: crimson;\n    }\n  &lt;/style&gt;\n&lt;/head&gt;\n&lt;body&gt;\n  &lt;p&gt;A jelszó &lt;em&gt;nem&lt;/em&gt; tartalmazhat szóközt!&lt;/p&gt;\n&lt;/body&gt;', 'markup'],
  options: ['coral', 'crimson', 'black'],
  answer: 0,
  expl: 'A <code>span</code> elemszelektor súlya 0,0,0,1. A <code>body &gt; span</code> szelektor súlya 0,0,0,2, de a gyermekkombinátor (<code>&gt;</code>) csak a közvetlen gyerekelemeket választja ki, ezért az első szabály érvényesül.'
},
{
  qt: ['frontend', 'css', 'szűkítés'],
  q: 'Milyen színű a <code>&lt;h1&gt;</code> HTML-elem?',
  qb: ['&lt;head&gt;\n  &lt;style&gt;\n    #intro {\n      color: darkblue;\n    }\n    .intro {\n      color: darkmagenta;\n    }\n  &lt;/style&gt;\n&lt;/head&gt;\n&lt;body&gt;\n  &lt;h1 id=&quot;intro&quot; class=&quot;intro&quot;&gt;Bevezet&eacute;s&lt;/h1&gt;\n&lt;/body&gt;', 'markup'],
  options: ['black', 'darkmagenta', 'darkblue'],
  answer: 2,
  expl: 'Az <code>#intro</code> id-szelektor súlya 0,1,0,0, az <code>.intro</code> osztályszelektoré 0,0,1,0. Ha a szelektorok súlya nem egyenlő, akkor a nagyobb értékű szabály számít.'
},
{
  qt: ['frontend', 'css', 'szűkítés'],
  q: 'Milyen színű a <code>&lt;div&gt;</code> HTML-elem háttere?',
  qb: ['&lt;head&gt;\n  &lt;style&gt;\n    div[class^=&quot;static&quot;] {background: moccasin;}\n    div[class*=&quot;static&quot;] {background: aqua;}\n    div[class$=&quot;static&quot;] {background: silver;}\n    div[class=&quot;static&quot;]  {background: hotpink;}\n  &lt;/style&gt;\n&lt;/head&gt;\n&lt;body&gt;\n  &lt;div class=&quot;header static top&quot;&gt;Linkek&lt;/div&gt;\n&lt;/body&gt;', 'markup'],
  options: ['moccasin', 'aqua', 'silver', 'hotpink'],
  answer: 1,
  expl: 'Az <code>[attr=&quot;érték&quot;]</code> szelektor a megadott attribútumnévvel és -értékkel <em>pontosan megegyező</em> elemeket választja ki. Az <code>[attr^=&quot;érték&quot;]</code> szelektor a megadott attribútumnévvel rendelkező és a megadott értékkel <em>kezdődő</em>, az <code>[attr$=&quot;érték&quot;]</code> esetében az azzal <em>végződő</em> elemeket jelöli. Az <code>[attr*=&quot;érték&quot;]</code> az adott attribútumnévvel rendelkező olyan elemeket jelöl ki, amelyek értékpárja tartalmazza az <em>&quot;érték&quot;</em> legalább egy előfordulását a karakterláncon belül.'
},
{
  qt: ['frontend', 'css', 'szűkítés'],
  q: 'Milyen színű a <code>&lt;p&gt;</code> HTML-elem?',
  qb: ['&lt;head&gt;\n  &lt;style&gt;\n    .intro.intro {\n      color: coral;\n    }\n    .introside {\n      color: indigo;\n    }\n  &lt;/style&gt;\n&lt;/head&gt;\n&lt;body&gt;\n  &lt;div class=&quot;intro&quot;&gt;\n    &lt;p class=&quot;introside&quot;&gt;Bevezető&lt;/p&gt;\n  &lt;/div&gt;\n&lt;/body&gt;', 'markup'],
  options: ['coral', 'black', 'indigo'],
  answer: 2,
  expl: 'Minden olyan deklaráció, amely közvetlenül az elemhez illeszkedik, akkor is elsőbbséget kap a szülőjétől örökölt tulajdonsággal szemben, akkor is, ha annak szűkítési értéke nagyobb.'
},
{
  qt: ['frontend', 'css', 'szűkítés'],
  q: 'Mennyi a szelektor szűkítési értéke?',
  qb: ['&lt;style&gt;\n  #heading1::after {\n    content: &quot;&#128142;&quot;;\n  }\n&lt;/style&gt;', 'markup'],
  options: ['0,0,0,2', '1,0,1,0', '0,0,2,0', '0,1,0,1'],
  answer: 3,
  expl: 'A <code>#heading1</code> id-szelektor szűkítési értéke <code>0,1,0,0</code>. Az <code>::after</code> álelemszelektor szűkítési értéke <code>0,0,0,1</code>, összesen <code>0,1,0,1</code>.'
},
{
  qt: ['frontend', 'css', 'szűkítés'],
  q: 'Milyen színű a <code>&lt;section&gt;</code> HTML-elem tartalmának színe?',
  qb: ['&lt;head&gt;\n  &lt;style&gt;\n    section {\n      color: peru;\n    }\n    #toc {\n      color: royalblue;\n    }\n  &lt;/style&gt;\n&lt;/head&gt;\n&lt;body&gt;\n  &lt;section id=&quot;toc&quot; style=&quot;color: silver;&quot;&gt;Tartalom&lt;/section&gt;\n&lt;/body&gt;', 'markup'],
  options: ['black', 'silver', 'peru', 'royalblue'],
  answer: 1,
  expl: 'A <code>section</code> elemszelektor szűkítési értéke <code>0,0,0,1</code>. A <code>#toc</code> id-szelektor szűkítési értéke <code>0,1,0,0</code>. A <em>szövegközi stílusok</em> szűkítési értéke <code>1,0,0,0</code>. Ha a szelektorok szűkítési értéke nem egyenlő, akkor a nagyobb értékű szabály számít.'
},
{
  qt: ['frontend', 'css', 'szűkítés'],
  q: 'Milyen színű a <code>&lt;header&gt;</code> HTML-elem?',
  qb: ['&lt;head&gt;\n  &lt;style&gt;\n    #ch1 {\n      color: brown;\n    }\n    header {\n      color: indigo !important;\n    }\n  &lt;/style&gt;\n&lt;/head&gt;\n&lt;body&gt;\n  &lt;header id=&quot;ch1&quot; style=&quot;color: darkred&quot;&gt;Bevezet&#337;&lt;/h1&gt;\n&lt;/body&gt;', 'markup'],
  options: ['indigo', 'black', 'brown', 'darkred'],
  answer: 0,
  expl: 'Ha egy stílusdeklarációban az <code>!important</code> kulcsszót használjuk, akkor a deklaráció felülír minden más szabályt. Az ilyen meghatározások megtartják a kijelölőik által meghatározott szűkítési értéket, de csak más <code>!important</code> meghatározásokkal való összevetések esetén használják azokat. Az <code>!important</code> használata nem jó gyakorlat, és kerülendő, mert megnehezíti a hibakeresést, mivel megtöri a stílusok természetes prioritását. Lehetőleg a célelem szűkítési értékének növelésével oldjuk meg a problémát.'
},
{
  qt: ['frontend', 'css', 'szűkítés'],
  q: 'Mi a szelektor szűkítési értéke?',
  qb: ['&lt;style&gt;\n  #sect1.intro a[href] {\n    color: tomato;\n  }\n&lt;/style&gt;', 'markup'],
  options: ['0,2,1,1', '1,0,1,2', '0,2,0,2', '0,1,2,1'],
  answer: 3,
  expl: 'A <code>a</code> elemszelektor szűkítési értéke <code>0,0,0,1</code>. Az <code>.intro</code> osztályszelektor és a <code>[href]</code> attribútumszelektor összes szűkítési értéke <code>0,0,2,0</code>. A <code>#sect1</code> id-szelektor szűkítési értéke <code>0,1,0,0</code>. A teljes érték <code>0,1,2,1</code>.'
},
{
  qt: ['frontend', 'css', 'szűkítés'],
  q: 'Milyen színű a <code>&lt;header&gt;</code> HTML-elem?',
  qb: ['&lt;head&gt;\n  &lt;style&gt;\n   header[class$=intro] {\n     color: maroon;\n   }\n   header[class$=Intro i] {\n     color: navy;\n   }\n  &lt;/style&gt;\n&lt;/head&gt;\n&lt;body&gt;\n  &lt;header class=&quot;intro&quot;&gt;Bevezető&lt;/header&gt;\n&lt;/body&gt;', 'markup'],
  options: ['maroon', 'navy', 'black'],
  answer: 1,
  expl: 'Az attribútumválasztó értéke kis- és nagybetű-érzékeny. Az <code>i</code> (insensitive) módosító hozzáadása a záró kapcsos zárójel előtt azt eredményezi, hogy az értéket a betűalakra való tekintet nélkül hasonlítja össze az értelmező, ez esetben az utolsó szabály számít.'
},
{
  qt: ['frontend', 'css', 'szűkítés'],
  q: 'Mi a szelektor szűkítési értéke?',
  qb: ['&lt;style&gt;\n  [class=&quot;example&quot;]::before {\n    content: &quot;«&quot;;\n    color: azure;\n  }\n&lt;/style&gt;', 'markup'],
  options: ['0,2,0,0', '0,0,1,1', '0,0,0,2', '0,1,1,0'],
  answer: 1,
  expl: 'Az <code>[class=&quot;example&quot;]</code> attribútumszelektor szűkítési értéke 0,0,1,0. A <code>::before</code> álelemszelektor szűkítési értéke 0,0,0,1, így a helyes érték 0,0,1,1.'
},
{
  qt: ['frontend', 'css', 'szűkítés'],
  q: 'Milyen színű a <code>&lt;article&gt;</code> HTML-elem?',
  qb: ['&lt;head&gt;\n  &lt;style&gt;\n    .review {\n      color: lime;\n    }\n    article {\n      color: orange;\n    }\n  &lt;/style&gt;\n&lt;/head&gt;\n&lt;body&gt;\n  &lt;article class=&quot;review&quot;&gt;sz&ouml;veg&lt;/article&gt;\n&lt;/body&gt;', 'markup'],
  options: ['orange', 'lime', 'black'],
  answer: 1,
  expl: 'Az <code>article</code> elemszelektor szűkítési értéke <code>0,0,0,1</code>. A <code>.reviw</code> osztályszelektor szűkítési értéke <code>0,0,1,0</code>. Ha a szelektorok súlya nem egyenlő, akkor a nagyobb értékű szabály számít.'
},
{
  qt: ['frontend', 'css', 'szűkítés'],
  q: 'Milyen színű a <code>&lt;p&gt;</code> HTML-elem?',
  qb: ['&lt;head&gt;\n  &lt;style&gt;\n    section > p {\n      color: lime;\n    }\n    section p {\n      color: darkviolet;\n    }\n  &lt;/style&gt;\n&lt;/head&gt;\n&lt;body&gt;\n  &lt;section&gt;\n    &lt;p&gt;sz&ouml;veg&lt;/p&gt;\n  &lt;/section&gt;\n&lt;/body&gt;', 'markup'],
  options: ['lime', 'darkviolet', 'black'],
  answer: 1,
  expl: 'A kombinátorok (<code>~</code>, <code>&gt;</code>, <code>+</code>) nem járulnak hozzá a szűkítési értékhez, a <code>section p</code> és <code>section &gt; p</code> szabályok súlya <code>0,0,0,0,2</code>. Ha a szelektorok súlya megegyezik, akkor a legutolsó szabály számít.'
},
{
  qt: ['frontend', 'css', 'szűkítés'],
  q: 'Milyen színű a <code>&lt;em&gt;</code> HTML-elem?',
  qb: ['&lt;head&gt;\n  &lt;style&gt;\n    p em {\n      color: plum;\n    }\n    p, em {\n      color: olive;\n    }\n  &lt;/style&gt;\n&lt;/head&gt;\n&lt;body&gt;\n  &lt;p&gt;&lt;em&gt;kiemelt&lt;/em&gt; sz&ouml;veg&lt;/p&gt;\n&lt;/body&gt;', 'markup'],
  options: ['olive', 'plum', 'black'],
  answer: 1,
  expl: 'Az elemszelektor szűkítési értéke 0,0,0,1, a <code>p em</code> kombinált szelektor ennek kétszerese: 0,0,0,2. A vesszővel elválasztott szelektorok között nincs kapcsolat, nem adódnak össze, mind a <code>p</code>, mind az <code>em</code> súlya 0,0,0,1 értékű.'
},
{
  qt: ['frontend', 'css', 'szűkítés'],
  q: 'Mi a <code>&lt;h1&gt;</code> HTML-elem betűméretének értéke?',
  qb: ['&lt;head&gt;\n  &lt;style&gt;\n    #sect1 {\n      font-size: 20px;\n    }\n    [id=&quot;sect1&quot;] {\n      font-size: 22px;\n    }\n    h1 {\n      font-size: 18px;\n    }\n  &lt;/style&gt;\n&lt;/head&gt;\n&lt;body&gt;\n  &lt;h1 id=&quot;sect1&quot;&gt;c&iacute;m&lt;/h1&gt;\n&lt;/body&gt;', 'markup'],
  options: ['18px', '20px', '22px'],
  answer: 1,
  expl: 'Az <code>#sect1</code> id-szelektor szűkítési értéke <code>0,1,0,0</code>, az <code>[id=&quot;sect1&quot;]</code> attribútumszelektoré <code>0,0,1,0</code> a <code>h1</code> elemszelektoré <code>0,0,0,1</code>. A kiértékelési sorrendnek (a legutolsó szabály számít) csak azonos súly esetén van jelentősége.'
},
{
  qt: ['frontend', 'css', 'szűkítés'],
  q: 'Milyen színű a <code>&lt;p&gt;</code> HTML-elem?',
  qb: ['&lt;head&gt;\n  &lt;style&gt;\n    p {\n      color: pink;\n    }\n    body + p {\n      color: violet;\n    }\n  &lt;/style&gt;\n&lt;/head&gt;\n&lt;body&gt;\n  &lt;section&gt;\n    &lt;p&gt;sz&ouml;veg&lt;/p&gt;\n  &lt;/section&gt;\n&lt;/body&gt;', 'markup'],
  options: ['violet', 'black', 'pink'],
  answer: 2,
  expl: 'A <code>p</code> elemszelektor szűkítési értéke 0,0,0,1. A <code>body + p</code> szelektor súlya 0,0,0,2. A szomszédos testvér-kombinátor (<code>+</code>) azon állapot alapján jelöl ki egy elemet, hogy az egy másik elemet közvetlenül követő (szomszédos) testvérelem. Ezért csak az első szabály működik.'
},
{
  qt: ['frontend', 'css', 'szűkítés'],
  q: 'Milyen színű a <code>&lt;p&gt;</code> HTML-elem?',
  qb: ['&lt;head&gt;\n  &lt;style&gt;\n    p {\n      color: orchid;\n    }\n    * {\n      color: olive;\n    }\n  &lt;/style&gt;\n&lt;/head&gt;\n&lt;body&gt;\n  &lt;p&gt;sz&ouml;veg&lt;/p&gt;\n&lt;/body&gt;', 'markup'],
  options: ['black', 'olive', 'orchid'],
  answer: 2,
  expl: 'Az univerzális szelektor (*) szűkítési értéke 0,0,0,0. A <code>&lt;p&gt;</code> elemszelektoré 0,0,0,1. A szűkítés értéke határozza meg, hogy a böngészők melyik CSS-szabályt alkalmazzák. Ha két szelektor ugyanarra az elemre vonatkozik, akkor a nagyobb súlyú érvényesül.'
},
{
  qt: ['frontend', 'css', 'tulajdonság'],
  q: 'Mekkora a <code>&lt;h1&gt;</code> HTML-elem szélessége?',
  qb: ['&lt;head&gt;\n  &lt;style&gt;\n    * {\n      width: 800px;\n    }\n    section {\n      width: 500px;\n    }\n    h1 {\n      width: calc(80%);\n    }\n  &lt;/style&gt;\n&lt;/head&gt;\n&lt;body&gt;\n  &lt;section&gt;\n    &lt;h1&gt;Bevezet&eacute;s&lt;/h1&gt;\n  &lt;/section&gt;\n&lt;/body&gt;', 'markup'],
  options: ['400px', '640px', 'a nézetablak (viewport) 80%-a'],
  answer: 0,
  expl: 'A <code>&lt;h1&gt;</code> blokkszintű elem, ezért a szülőelem teljes helyét elfoglalja. Az univerzális szelektor (*) szűkítési értéke 0, figyelmen kívül marad, a feladatban nem írja felül a szülőelem szélességét. A <code>calc()</code> CSS-függvény lehetővé teszi számítások elvégzését a tulajdonságértékek megadásakor. Egyetlen kifejezést fogad paraméterként, ennek eredményét pedig értékként használja.'
},
{
  qt: ['frontend', 'css', 'tulajdonság'],
  q: 'Melyik CSS-tulajdonsággal alakíthatjuk át a betű alakját nagybetűssé?',
  options: ['text-decoration: uppercase', 'transform-style: uppercase', 'font-variant: uppercase', 'text-transform: uppercase'],
  answer: 3,
  expl: 'A <code>text-transform</code> tulajdonság <code>uppercase</code> értéke változtatja az összes betűt nagybetűre. A <code>capitalize</code> értéke az összes szó <em>kezdőbetűjét</em> nagybetűre cseréli, a <code>lowercase</code> pedig csupa kisbetűssé alakítja a szöveget. A <code>text-decoration</code>, <code>transform-style</code> és <code>font-variant</code> tulajdonságok  nem rendelkeznek <code>uppercase</code> értékkel.'
},
{
  qt: ['frontend', 'css', 'tulajdonság'],
  q: 'Melyik CSS-tulajdonságot használják a szövegben lévő szavak közötti távolság megváltoztatására?',
  options: ['word-spacing', 'white-space', 'letter-spacing', 'text-align'],
  answer: 0,
  expl: ' A <code>word-spacing</code> CSS-tulajdonság határozza meg a szavak közötti szóköz méretét. A negatív hosszértékek megengedettek, ekkor a szavak egymáshoz közelebb kerülnek.'
},
{
  qt: ['frontend', 'css', 'tulajdonság'],
  q: 'Melyik CSS-tulajdonságot használják a betűk közötti távolság megváltoztatására?',
  options: ['word-spacing', 'align-items', 'letter-spacing', 'transform-style'],
  answer: 2,
  expl: 'A <code>letter-spacing</code> CSS-tulajdonsággal a szöveg karakterei közötti vízszintes távolságot állíthatjuk be. Pozitív érték esetén a karakterek távolabb kerülnek egymástól, míg negatív értéknél a karakterek közelebb kerülnek egymáshoz.'
},
{
  qt: ['frontend', 'css', 'tulajdonság'],
  q: 'Milyen színű a <code>&lt;h1&gt;</code> HTML-elem alatti vonal?',
  qb: ['&lt;head&gt;\n  &lt;style&gt;\n    article {\n      color: teal;\n    }\n    h1 {\n      text-decoration: underline;\n      outline-color: hotpink;\n      border-bottom-color: indigo;\n    }\n  &lt;/style&gt;\n&lt;/head&gt;\n&lt;body&gt;\n  &lt;article&gt;\n    &lt;h1&gt;Bevezet&eacute;s&lt;/h1&gt;\n  &lt;/article&gt;  \n&lt;/body&gt;', 'markup'],
  options: ['teal', 'hotpink', 'black', 'indigo'],
  answer: 0,
  expl: 'A <code>text-decoration</code> gyorsírásos CSS-tulajdonság állítja be a szöveg díszítővonalának megjelenését. Mint minden gyorsírásos tulajdonság esetében, a kihagyott értékek az alapértékükre lesznek beállítva. A <code>text-decoration-color</code> kezdeti értéke a CSS-változók őse, a <code>currentColor</code>. A currentColor kulcsszó az elem <code>color</code> tulajdonságának értékét jelöli. A <code>color</code> tulajdonság öröklődik, így deklaráció hiányában az ősők értékét veszi fel.'
},
{
  qt: ['frontend', 'css', 'tulajdonság'],
  q: 'A <code>font-size</code> CSS-tulajdonság mellett melyik tulajdonsággal lehet megváltoztatni egy szöveg betűméretét?',
  options: ['font', 'font-variant', 'text-transform', 'resize'],
  answer: 0,
  expl: 'A <code>font-style</code>, <code>font-variant</code>, <code>font-weight</code>, <code>font-stretch</code>, <code>font-size</code>, <code>line-height</code> és <code>font-family</code> értékei a <code>font</code> rövidített tulajdonságban is beállíthatók. A <code>font-size</code> és a <code>font-family</code> értékek megadása kötelező: <code>p { font: 20px Verdana, sans-serif; }</code>.'
},
{
  qt: ['frontend', 'css', 'tulajdonság'],
  q: 'Minek az értéke a 200%?',
  qb: ['&lt;style&gt;\n  p.summary {\n    font: 16px/200% Verdana;\n  }\n&lt;/style&gt;', 'markup'],
  options: ['sortávolság (line-height)', 'betűköz (letter-spacing)', 'behúzás (text-indent)', 'szótávolság (word-spacing)'],
  answer: 0,
  expl: 'A <code>font</code> rövidített CSS-tulajdonsággal a betűmérettől <code>(font-size)</code> törtvonallal elválasztva a sortávolság <code>(line-height)</code> adható meg.'
},
{
  qt: ['frontend', 'css', 'tulajdonság'],
  q: 'Mekkora a <code>&lt;h1&gt;</code> HTML-elem sortávolsága?',
  qb: ['&lt;head&gt;\n  &lt;style&gt;\n    h1 {\n      font-size: 40px;\n      line-height: 1;\n      font: 30px/0.6 Verdana;\n    }\n  &lt;/style&gt;\n&lt;/head&gt;\n&lt;body&gt;\n  &lt;h1&gt;Tartalom&lt;/h1&gt;\n&lt;/body&gt;', 'markup'],
  options: ['30px', '40px', '24px', '18px'],
  answer: 3,
  expl: 'A <code>font</code> rövidített CSS-tulajdonság. Mint minden gyorsírásos tulajdonság esetében, a kihagyott értékek az alapértékükre lesznek beállítva, a deklarációban a rövidített tulajdonság előtt található értékek felülíródnak. A <code>font-size</code> és a <code>font-family</code> értékek kötelezőek. A <code>font-size</code> értéket törtvonallal elválasztva a <code>line-height</code> értéke követi, aminek számított értéke a &lt;sz&aacute;m&gt; szorozva az elem betűméretével.'
},
{
  qt: ['frontend', 'css', 'tulajdonság'],
  q: 'Mi a <code>&lt;div&gt;</code> HTML-elem jobb oldali eltartás (<code>padding</code>) értéke?',
  qb: ['&lt;head&gt;\n  &lt;style&gt;\n    div {\n      padding-right: 20px;\n      padding: 10px 30px 40px;\n    }\n  &lt;/style&gt;\n&lt;/head&gt;\n&lt;body&gt;\n  &lt;div&gt;szöveg&lt;/div&gt;\n&lt;/body&gt;', 'markup'],
  options: ['20px', '10px', '30px', '40px'],
  answer: 2,
  expl: 'A <code>padding</code> CSS-tulajdonság beállítja az eltartási területet az elem mind a négy oldalán. Ez a padding-top, padding-right, padding-bottom és padding-left tulajdonságok gyorsírásos változata, amelyek ha a rövidített tulajdonság előtt találhatóak, felülíródnak. Ha egy érték van megadva, akkor mind a négy oldalra ugyanazt az eltartást alkalmazza. Két érték megadásakor az első a felső és alsó, a második a bal és a jobb oldalra vonatkozik. Három érték megadásakor az első a tetejére, a második a bal és a jobb oldalra, a harmadik pedig az aljára vonatkozik. Négy érték megadásakor az eltartás a felső, a jobb, az alsó és a bal oldalra vonatkozik ebben a sorrendben (az óramutató járásával megegyezően).'
},
{
  qt: ['frontend', 'css', 'tulajdonság'],
  q: 'Mi a <code>&lt;header&gt;</code> HTML-elem háttérszíne?',
  qb: ['&lt;head&gt;\n  &lt;style&gt;\n    header {\n      background-color: yellow;\n      background: fixed content-box orange;\n    }\n  &lt;/style&gt;\n&lt;/head&gt;\n&lt;body&gt;\n  &lt;header&gt;Bevezetés&lt;/header&gt;\n&lt;/body&gt;', 'markup'],
  options: ['yellow', 'black', 'orange'],
  answer: 2,
  expl: 'A <code>background</code> rövidített CSS-tulajdonság egyszerre állítja be az összes háttérstílus-tulajdonságot (<code>background-attachment</code>, <code>background-clip</code>, <code>background-color</code>, <code>background-image</code>, <code>background-origin</code>, <code>background-position</code>, <code>background-repeat</code> és <code>background-size</code>). A tulajdonságérték-deklarációban be nem állított tulajdonságok az alapértelmezett értéküket kapják, ezért a kiértékelési sorrendben előtte található egyedi héttértulajdonságok felülíródnak.'
},
{
  qt: ['frontend', 'css', 'tulajdonság'],
  q: 'Milyen díszítővonalallal rendelkezik a <code>&lt;h1&gt;</code> HTML-elem?',
  qb: ['&lt;style&gt;\n  h1, h2 { text-decoration: underline; }\n  h1 { text-decoration: overline; }\n&lt;/style&gt;', 'markup'],
  options: ['alá- és föléhúzással', 'aláhúzással', 'föléhúzással'],
  answer: 2,
  expl: 'Több <code>text-decoration</code> CSS-tulajdonság nem vonódik össze, a legnagyobb súlyú (itt a később előforduló) érték érvényesül. Ha alá- és föléhúzással is szeretnénk formázni, a <code>h1 { text-decoration: overline underline; }</code> stílust kell használni.'
},
{
  qt: ['frontend', 'css', 'tulajdonság'],
  q: 'Melyik CSS-tulajdonsággal lehet a rádiógombot bejelölt állapot esetén színessé tenni?',
  options: ['caret-color', 'accent-color', 'text-decoration-color', 'user-select'],
  answer: 1,
  expl: 'Az accent-color tulajdonság meghatározza a felhasználói felület vezérlőelemeinek hangsúlyos színét, mint például: &lt;input type=&quot;checkbox&quot;&gt;, &lt;input type=&quot;radio&quot;&gt;, &lt;input type=&quot;range&quot;&gt;: <code>input[type=radio] { accent-color: pink; }</code>.'
},
{
  qt: ['frontend', 'css', 'tulajdonság'],
  q: 'Melyik CSS-tulajdonsággal állítható be a betű típusa?',
  options: ['font-family', 'font-style', 'font-variant', 'font-weight'],
  answer: 0,
  expl: 'A szöveg megjelenítéséhez használatos betűtípust a <code>font-family</code> tulajdonsággal lehet beállítani. A <code>font-style</code> tulajdonsággal a betű stílusát (normál, dőlt, döntött), a <code>font-variant</code> tulajdonsággal a kiskapitális formázást, a <code>font-weight</code> beállítással a betű vastagságát lehet megadni.'
},
{
  qt: ['frontend', 'css', 'tulajdonság'],
  img: 'img/szovegirany.png',
  q: 'Melyik CSS-tulajdonsággal állíthatjuk be a szövegsorok függőleges irányát?',
  options: ['object-position', 'word-wrap', 'writing-mode', 'direction'],
  answer: 2,
  expl: 'A <code>writing-mode</code> CSS-tulajdonság határozza meg, hogy a blokkszintű vagy a soron belüli elemek vízszintesen vagy függőlegesen legyenek-e elrendezve, illetve hogy a blokkok milyen irányban haladjanak.'
},
{
  qt: ['frontend', 'css', 'tulajdonság'],
  q: 'Mekkora a <code>&lt;h1&gt;</code> HTML-elem szélessége?',
  qb: ['&lt;head&gt;\n  &lt;style&gt;\n    body {\n      width: 800px;\n    }\n    h1 {\n      width: 380px;\n      min-width: 50%;\n    }\n  &lt;/style&gt;\n&lt;/head&gt;\n&lt;body&gt;\n  &lt;h1&gt;Bevezetés&lt;/h1&gt;\n&lt;/body&gt;', 'markup'],
  options: ['400px', '380px', '190px', 'a nézetablak (viewport) 50%-a'],
  answer: 0,
  expl: 'A <code>width</code> és a <code>min-width</code> esetében a <em>százalékértéket</em> mindig a szülőelemükhöz mérten számítja ki a böngésző. A <code>min-width</code> a <code>width</code> tulajdonság értékét felülírja, ha az kisebb a <code>min-width</code> értékénél.'
},
{
  qt: ['frontend', 'css', 'tulajdonság'],
  q: 'Mi az <code>&lt;input&gt;</code> HTML-elem <code>display</code> tulajdonságának alapértelmezett értéke?',
  options: ['inline', 'block', 'inline-block', 'initial'],
  answer: 0,
  expl: 'A HTML-elemeket blokkszintű vagy soron belüli elemként kategorizáljuk. Alapértelmezés szerint a blokkszintű elem a szülőelem (konténer) teljes terét elfoglalja, ezáltal egy blokkot hoz létre. A soron belüli elemek azok, amelyek csak az elemet meghatározó címkék által határolt helyet foglalják el, ahelyett, hogy megszakítanák a tartalom áramlását. Az <code>&lt;input&gt;</code> soron belüli, azaz inline elem.'
},
{
  qt: ['frontend', 'css', 'tulajdonság'],
  q: 'Melyik tulajdonság segítségével változtathatjuk meg egy elem szövegének betűszínét?',
  options: ['text-decoration-color', 'color', 'outline-color', 'accent-color'],
  answer: 1,
  expl: 'A <code>color</code> CSS-tulajdonság az elemek szövegének és díszítőelemeinek (alá- és föléhúzás, áthúzás) színét állítja be. Az értékek közül a legismertebbek a nevesített színek, például „royalblue”, vagy hexadecimális kód, például „#ff0000”, vagy egy RGB érték, például „rgb(255, 0, 0)”. Beállítja a több tulajdonság alapértelmezett értékének számító <code>currentColor</code> CSS-változót. A <code>color</code> tulajdonság öröklődik, így deklaráció hiányában az ősők értékét veszi fel.'
},
{
  qt: ['frontend', 'css', 'tulajdonság'],
  q: 'Mi a <code>background-color</code> tulajdonság alapértelmezett értéke?',
  options: ['normal', 'transparent', 'inherit', 'none'],
  answer: 1,
  expl: 'A <code>background-color</code> CSS-tulajdonság alapértelmezett értéke <code>transparent</code>.'
},
{
  qt: ['frontend', 'css', 'tulajdonság'],
  q: 'Mekkora az <code>&lt;aside&gt;</code> HTML-elem szélessége?',
  qb: ['&lt;head&gt;\n  &lt;style&gt;\n    article {\n      display: flex;\n      width: 600px;\n    }\n    section {\n      flex-grow: 1;\n    }\n    aside {\n      flex-grow: 2;\n    }\n  &lt;/style&gt;\n&lt;/head&gt;\n&lt;body&gt;\n  &lt;article&gt;\n    &lt;section&gt;&lt;/section&gt;\n    &lt;aside&gt;&lt;/aside&gt;\n  &lt;/article&gt;\n&lt;/body&gt;', 'markup'],
  options: ['200px', '300px', '400px', '600px'],
  answer: 2,
  expl: 'A <code>flex-grow</code> CSS-tulajdonság a flex gyerekelem növekedési arányát állítja be. Megadja, hogy a flex konténerben rendelkezésre álló helyből mennyi kerüljön az elemhez rendelésre. Ha az összes elem <code>flex-grow</code> értéke 1, akkor minden gyermekelem azonos méretű lesz a konténeren belül. Amelyik gyermek <code>flex-grow: 2</code> értéket kap, az kétszer annyi helyet foglal el, mint a többi.'
},
{
  qt: ['frontend', 'css', 'tulajdonság', 'font'],
  q: 'Melyik  CSS-tulajdonsággal lehet a szöveg összes karakterét kisbetűvé alakítani?',
  options: ['text-transform: lowercase;', 'font-style: lowercase;', 'text-decoration: lowercase;', 'font-variant: lowercase;'],
  answer: 0,
  expl: 'A <code>text-transform</code> CSS-tulajdonság <code>lowercase</code> értéke az összes betűt kisbetűssé változtatja. A <code>capitalize</code> érték az összes szó kezdőbetűjét nagybetűre cseréli, az <code>uppercase</code> pedig csupa nagybetűssé alakítja a szöveget.'
},
{
  qt: ['frontend', 'css', 'álosztály'],
  q: 'Hogyan lehet az utolsó <code>&lt;li&gt;</code> HTML-elemet kiválasztani?',
  qb: ['&lt;body&gt;\n  &lt;ul&gt;\n    &lt;li&gt;G&uuml;l&uuml;szem&#369; maki&lt;/li&gt;\n    &lt;li&gt;Selyemmaki&lt;/li&gt;\n    &lt;li&gt;Gy&#369;r&#369;sfark&uacute; maki&lt;/li&gt;\n  &lt;/ul&gt;\n&lt;/body&gt;', 'markup'],
  options: ['ul:last-child', 'li:last-element', 'li:last-child', 'ul:last-element'],
  answer: 2,
  expl: 'A <code>:last-child</code> CSS-álosztály a <strong>testvérelemek csoportjának</strong> utolsó elemét jelöli. A szelektorhoz szóköz nélkül kapcsolt elem a testvérelem meghatározása, ha a szülő/ős elem kijelölése is szükséges a leszármazotti kombinátorral (szóköz) vagy gyermekkombinátorrak (>) kell deklarálni: <code>ul li:last-child</code> vagy <code>ol > li:last-child</code>.'
},
{
  qt: ['frontend', 'css', 'álosztály'],
  q: 'Melyik NEM álosztály szelektor?',
  options: [':hover', ':first-line', ':active', ':first-child'],
  answer: 1,
  expl: 'Az <strong>álosztályok</strong> a létező, hagyományos elemeket választják ki, de a HTML-dokumentumban megadottakon túlmenően például a testvérekhez viszonyított helyzetük (:first-child, :nth-child()) vagy adott állapotuk alapján (:disabled, :checked, :focus). Az <strong>álelemek</strong> viszont új elemeket hoznak létre, amelyek szintén nincsenek megadva a HTML-dokumentum jelölésében (::before, ::after). Ezek lehetnek meglévő elemek részei is (::first-letter, ::first-line), beleértve az ideiglenesen létező részeket is (::selection). A CSS3 a megkülönböztetésük érdekében egyértelműen előírja, hogy az álosztályokat egy kettőspont, míg az álelemeket két kettőspont jelöli, de a visszafelé kompatibilitás érdekében a korai álelemek egy kettősponttal is működnek.'
},
{
  qt: ['frontend', 'css', 'álosztály'],
  q: 'Hogyan tudjuk kiválasztani csak az első <code>&lt;li&gt;</code> HTML-elemet?',
  qb: ['&lt;body&gt;\n  &lt;ul&gt;\n    &lt;li&gt;Fekete mamba&lt;/li&gt;\n    &lt;li&gt;Kutyafejű boa&lt;/li&gt;\n    &lt;li&gt;Királypiton&lt;/li&gt;\n    &lt;li&gt;Pápaszemes kobra&lt;/li&gt;\n  &lt;/ul&gt;\n&lt;/body&gt;', 'markup'],
  options: ['ul:first-child', 'ul:first-element', 'li:first-child', 'li:first-element'],
  answer: 2,
  expl: 'A <code>:first-child</code> CSS-álosztály a <strong>testvérelemek csoportjának</strong> első elemét jelöli. Ha a szülő/ős elem meghatározása is szükséges a leszármazotti kombinátorral (szóköz) vagy gyermekkombinátorrak (>) kell deklarálni: <code>ul li:first-child</code> vagy <code>ol > li:first-child</code>.'
},
{
  qt: ['frontend', 'css', 'álszelektor'],
  q: 'Melyik CSS-tulajdonság NEM álelem-szelektor?',
  options: [':first-child', ':selection', ':first-letter', ':first-line'],
  answer: 0,
  expl: 'Az <strong>álosztályok</strong> a létező, hagyományos elemeket választják ki, de a HTML-dokumentumban megadottakon túlmenően például a testvérekhez viszonyított helyzetük (:first-child, :nth-child()) vagy adott állapotuk alapján (:disabled, :checked, :focus). Az <strong>álelemek</strong> viszont új elemeket hoznak létre, amelyek szintén nincsenek megadva a HTML-dokumentum jelölésében (::before, ::after). Ezek lehetnek meglévő elemek részei is (::first-letter, ::first-line), beleértve az ideiglenesen létező részeket is (::selection). A CSS3 a megkülönböztetésük érdekében egyértelműen előírja, hogy az álosztályokat egy kettőspont, míg az álelemeket két kettőspont jelöli, de a visszafelé kompatibilitás érdekében a korai álelemek egy kettősponttal is működnek.'
},
{
  qt: ['frontend', 'css', 'öröklés', 'tulajdonság'],
  q: 'Mi a <code>&lt;h1&gt;</code> HTML-elem behúzásának értéke?',
  qb: ['&lt;style&gt;\n  body { font-size: 10px; text-indent: 3em; }\n  h1  { font-size: 12px }\n&lt;/style&gt;', 'markup'],
  options: ['0, a text-indent nem öröklődő tulajdonság', '30px', '36px'],
  answer: 1,
  expl: 'A <code>text-indent</code> öröklődő tulajdonság, de a gyerekelemek nem a szülőjüknél meghatározott relatív értékeket, hanem a számított értékeket öröklik.'
},
{
  qt: ['frontend', 'css', 'űrlap'],
  img: 'img/csuszka.png',
  q: 'Milyen értéket kell megadnunk az <code>input</code> elem <code>type</code> attribútumának, ha csúszkát (slider) szeretnénk megjeleníteni?',
  options: ['slide', 'range', 'rating', 'progress'],
  answer: 1,
  expl: 'A csúszka beviteli elem <code>type</code> attribútuma a <code>range</code>. A többi lehetőség nem létező attribútum.'
},
{
  qt: ['frontend', 'html', 'attribútum'],
  q: 'Melyik HTML-attribútumot használják a szövegközi (inline) stílusok meghatározására?',
  options: ['href', 'content', 'name', 'style'],
  answer: 3,
  expl: 'A <code>style</code> HTML-attribútum teszi lehetővé a szövegközi (inline) stílusok közvetlen hozzáadását egy HTML-elemhez.'
},
{
  qt: ['frontend', 'html', 'css', 'tulajdonság'],
  q: 'Mi a <code>display</code> tulajdonság alapértelmezett értéke a <code>&lt;div&gt;</code> HTML-elem esetében?',
  options: ['inline', 'block', 'run-in', 'inline-block'],
  answer: 1,
  expl: 'Minden HTML-elemnek van egy alapértelmezett megjelenítési módja: blokkszintű (block), vagy soron belüli (inline) elemként kategorizálták őket. A blokkszintű elemek egymás után, függőlegesen helyezkednek el, a szülőelem (konténer) vagy a böngészőablak teljes területét elfoglalják. Ha szélességet adunk nekik, akkor is egymás alatt fognak elhelyezkedni - akkor is, ha lenne hely arra, hogy egymás mellett legyenek. Két blokkszintű testvérelem közötti függőleges távolságot a margó tulajdonság határozza meg. A soron belüli elemek a blokkszintű elemekkel ellentétben nem kezdődnek új sorokban, csak az elemet meghatározó címkék által határolt helyet foglalják el, ahelyett, hogy megszakítanák a tartalom áramlását. A <code>div</code> elem blokkszintű.'
},
{
  qt: ['frontend', 'html', 'elem'],
  q: 'Melyik HTML-elemet használják egy belső stíluslap definiálására?',
  options: ['&lt;stylesheet&gt;', '&lt;source&gt;', '&lt;style&gt;', '&lt;link&gt;'],
  answer: 2,
  expl: 'A stílusszabályok dokumentumon belüli definiálására a <code>&lt;style&gt;</code> elem szolgál. Tetszőleges számú stíluselem helyezhető el benne, de a fejrészen (azaz a <code>&lt;head&gt;</code> elemen) belül kell megjelennie.'
},
{
  qt: ['frontend', 'html', 'elem'],
  q: 'Mennyi a <code>&lt;h1&gt;</code> HTML-elem szélessége?',
  qb: ['&lt;head&gt;\n  &lt;style&gt;\n    div {\n      width: 640px;\n    }\n  &lt;/style&gt;\n&lt;/head&gt;\n&lt;body&gt;\n  &lt;div&gt;\n    &lt;h1&gt;Tartalom&lt;/h1&gt;\n  &lt;/div&gt;\n&lt;/body&gt;', 'markup'],
  options: ['a böngésző nézetablakának (viewport) szélessége', '640px', 'a &lt;h1&gt;-elem tartalmának szélessége'],
  answer: 1,
  expl: 'A blokkszintű elem alapértelmezés szerint a szülőelem teljes szélességét kitölti.'
},
{
  qt: ['frontend', 'html', 'elem'],
  q: 'Melyik HTML-elem segítségével biztosíthatunk űrlapunkhoz megengedett vagy ajánlott opciókat automatikus kitöltési funkcióval?',
  options: ['&lt;menu&gt;', '&lt;dfn&gt;', '&lt;source&gt;', '&lt;datalist&gt;'],
  answer: 3,
  expl: 'A <code>&lt;datalist&gt;</code> HTML-elem előre definiált opciók legördülő listáját adja egy <code>&lt;input&gt;</code> elemhez automatikus kitöltési funkció biztosításával. A <code>&lt;input&gt;</code> elemet a <code>list</code> attribútummal kell összekötni a <code>&lt;datalist&gt;</code> elemmel.'
},
{
  qt: ['frontend', 'html', 'elem'],
  q: 'Melyik HTML-elemet használjuk külső stíluslap definiálására?',
  options: ['&lt;style&gt;', '&lt;link&gt;', '&lt;base&gt;', '&lt;source&gt;'],
  answer: 1,
  expl: 'A <code>&lt;link&gt;</code> HTML-elem az aktuális dokumentum és egy külső erőforrás közötti kapcsolatot állít be. Leggyakrabban a stíluslapokra való hivatkozásra használjuk, de többek között a webhely ikonjának (&quot;favicon&quot;) létrehozására is használjuk.'
},
{
  qt: ['frontend', 'javascript', 'JSON-metódus'],
  q: 'Melyik metódussal alakítunk át egy objektumot JSON-formátumra?',
  options: ['JSON.substr()', 'JSON.stringify()', 'JSON.parse()', 'JSON.toString()'],
  answer: 1,
  expl: 'A JSON (JavaScript Object Notation) adatok tárolására, lekérdezésére vagy továbbítására létrehozott adatstruktúra. JavaScript-értékeket a JSON objektum <code>stringify()</code> metódusával alakíthatjuk át erre a formátumra (szerializáció). A <code>parse()</code> metódus JSON-formátumból JavaScript-értékekké való átalakításhoz használható (deszerializáció). A JSON objektumnak nincs <code>substr()</code> vagy <code>toString()</code> metódusa.'
},
{
  qt: ['frontend', 'javascript', 'Math-metódus'],
  q: 'Mi a <code>kimenet</code> értéke?',
  qb: ['let kimenet = Math.trunc(&quot;15.645&quot;);', 'js'],
  options: ['15', '16', 'undefined', 'NaN'],
  answer: 0,
  expl: 'A <code>Math.trunc()</code> metódus eltávolítja az összes számot a tizedesjegy után, kerekítés nélkül csak az argumentum egész számú részét adja vissza. Kiértékelés előtt implicit konverziót végez, ha a szám értékre alakítás nem sikerül, akkor <code>NaN</code> értéket ad vissza.'
},
{
  qt: ['frontend', 'javascript', 'Math-objektum'],
  q: 'Mi a <code>kimenet</code> értéke?',
  qb: ['let kimenet = Math.round(98.15)', 'js'],
  options: ['100', '99', '98'],
  answer: 2,
  expl: 'A <code>Math.round()</code> függvény a legközelebbi egész számra kerekített értéket adja vissza. Ha az argumentum tört része 0,5 vagy nagyobb, az argumentumot a következő nagyobb egész számra kerekíti, ellenkező esetben az argumentumot a kisebb abszolút értékű egész számra kerekíti.'
},
{
  qt: ['frontend', 'javascript', 'Math-objektum'],
  q: 'Mi a <code>kimenet</code> értéke?',
  qb: ['let adat = Math.E;\nlet kimenet = Math.ceil(adat);', 'js'],
  options: ['2', '3', 'undefined', 'NaN'],
  answer: 1,
  expl: 'A Math.E tulajdonság az Euler-féle számot, a természetes logaritmusok alapját jelöli, amely körülbelül 2,718. A <code>Math.ceil()</code> metódus azt az egész számot adja vissza, amelyik nagyobb vagy egyenlő az argumentumában megadott számmal.'
},
{
  qt: ['frontend', 'javascript', 'Math-objektum'],
  q: 'Mi a <code>kimenet</code> értéke?',
  qb: ['let num = &quot;-26&quot;;\nlet kimenet = Math.abs(num);', 'js'],
  options: ['-26', '26', '&quot;26&quot;', 'NaN'],
  answer: 1,
  expl: 'A <code>Math.abs()</code> metódus egy szám abszolút értékét adja vissza. A metódus típuskonverziót végez, mielőtt létrehozná a számértéket. Az üres karakterláncokat 0-ra, míg a többi karakterláncot <code>NaN</code> értékre konvertálja. Ha nem adunk át értéket a metódusnak, akkor is <code>NaN</code> lesz az eredmény.'
},
{
  qt: ['frontend', 'javascript', 'Math-objektum'],
  q: 'Mi a <code>kimenet</code> értéke?',
  qb: ['let kimenet = Math.sqrt(3 + &quot;6&quot;);', 'js'],
  options: ['3', '6', '9', 'NaN'],
  answer: 1,
  expl: 'A <code>Math.sqrt()</code> függvény egy szám négyzetgyökét adja vissza. A metódus típuskonverziót hajt végre, mielőtt elvégzi a műveletet, ha az argumentum nem alakítható számmá, <code>NaN</code>-t ad vissza.'
},
{
  qt: ['frontend', 'javascript', 'Math-objektum'],
  q: 'Mi a <code>kimenet</code> értéke?',
  qb: ['let adat = Math.PI;\nlet kimenet = Math.floor(adat);', 'js'],
  options: ['2', '3', 'undefined', 'NaN'],
  answer: 1,
  expl: 'A <code>Math.PI</code> tulajdonság a kör kerületének és átmérőjének a hányadosa (kb. 3,14159). A <code>Math.floor()</code> metódus azt az egész számot adja vissza, amelyik kisebb vagy egyenlő az argumentumában megadott számmal.'
},
{
  qt: ['frontend', 'javascript', 'adattípus'],
  q: 'Mi a <code>kimenet</code> értéke?',
  qb: ['let kimenet = String(&quot;karalábé&quot;) === &quot;karalábé&quot;;', 'js'],
  options: ['true', 'false'],
  answer: 0,
  expl: 'A <code>String()</code> konstruktorfüggvény a <code>new</code> kulcsszó nélkül primitív adattípust hoz létre, nem objektumot, így a szigorú/típusos összehasonlítás is egyezőséget mutat.'
},
{
  qt: ['frontend', 'javascript', 'arguments'],
  q: 'Mi a <code>kimenet</code> értéke?',
  qb: ['let func = function (h, sz, m) {\n  return arguments.length;\n}\nlet kimenet = func(600, 400, 280, &quot;M&quot;)', 'js'],
  options: ['undefined', '3', '4', '&quot;M&quot;'],
  answer: 2,
  expl: 'Az <code>arguments</code> objektum egy <strong>tömbszerű objektum</strong>, amely a függvénynek átadott átadott argumentumok értékeit tartalmazza, nem pedig azt, hogy egy függvény hány paramétert fogad el. A tömbszerű objektumok rendelkeznek <code>length</code> tulajdonsággal és nullától indexelt kulcsokkal, de nem rendelkeznek az Array objektum beépített metódusaival. Tömbbé alakíthatók. A modern kódban a <strong>rest</strong> paramétereket érdemes előnyben részesíteni <code>arguments</code> objektum helyett.'
},
{
  qt: ['frontend', 'javascript', 'ciklus'],
  q: 'Mi a <code>kimenet</code> értéke?',
  qb: ['let adat = 20;\ndo {\n  adat++;\n} while (i < 10);\nlet kimenet = adat;', 'js'],
  options: ['referenciahibát (ReferenceError) kapunk', '20', '10', '21'],
  answer: 3,
  expl: 'A <code>do...while</code> utasítás egy olyan ciklust hoz létre, amely addig hajt végre egy megadott utasítást, amíg a tesztfeltétel kiértékelése hamis nem lesz. A feltétel az utasítás végrehajtása után kerül kiértékelésre, aminek eredményeképpen a megadott utasítás legalább egyszer végrehajtásra kerül.'
},
{
  qt: ['frontend', 'javascript', 'destrukció'],
  q: 'Mi a <code>kimenet</code> értéke?',
  qb: ['let alak = [600, 600, 280];\nlet [ asz, ah, am ] = alak;\nlet kimenet = am;', 'js'],
  options: ['3', '1480', '600', '280', 'undefined'],
  answer: 3,
  expl: 'A destruktív hozzárendelésben az egyenlőségjel jobb oldalán lévő érték egy tömb vagy objektum („strukturált” érték), a bal oldali pedig egy vagy több változó. A hozzárendelés során egy vagy több érték kivonásra kerül a jobb oldali értékből, és a bal oldalon megnevezett változókban tárolódik.'
},
{
  qt: ['frontend', 'javascript', 'hatókör'],
  q: 'Mi a <code>kimenet</code> értéke?',
  qb: ['let num = 200;\nif (num > 100) {\n  let num = 50;\n}\nlet kimenet = num;', 'js'],
  options: ['100', '200', '50'],
  answer: 1,
  expl: 'Az ES6 verzió megjelenéséig a globális és függvényhatókörű <code>var</code> kulcsszó állt rendelkezésre a változók deklarálására. Ekkor került bevezetésre a <code>let</code> és a <code>const</code> kulcsszó. A két új utasítás bevezette a blokkhatókört, aminek köszönhetően a második <code>adat</code> változó a <code>var</code>-ral deklarált változókkal szemben csak az <code>if</code> utasításon belül látható.'
},
{
  qt: ['frontend', 'javascript', 'html', 'szintaktika'],
  q: 'Melyik HTML-attribútum írásmódja különbözik JavaScript-tulajdonságként?',
  options: ['placeholder', 'readonly', 'overflow', 'autocomplete'],
  answer: 1,
  expl: 'A <code>readonly</code> attribútumot teve írásmóddal (<code>readOnly</code>) kell írni JavaScript-tulajdonságként.'
},
{
  qt: ['frontend', 'javascript', 'html', 'szintaktika'],
  q: 'Melyik HTML-attribútum írásmódja különbözik JavaScript-tulajdonságként?',
  options: ['placeholder', 'overflow', 'autocomplete', 'tabindex'],
  answer: 3,
  expl: 'A <code>tabindex</code> attribútumot teve írásmóddal (<code>tabIndex</code>) kell írni JavaScript-tulajdonságként.'
},
{
  qt: ['frontend', 'javascript', 'logika', 'operátor'],
  q: 'Mi a <code>kimenet</code> értéke?',
  qb: ['let lista = &quot;&quot;;\nlista ||= &quot;alma&quot;;\nlista ||= &quot;gyömbér&quot;;\nlet kimenet = lista;', 'js'],
  options: ['undefined', 'gyömbér', 'alma', 'alma, gyömbér'],
  answer: 2,
  expl: 'A VAGY logikai hozzárendelési operátor (<code>||=</code>) hozzárendeli a változóhoz az első igaznak számító (truthy) értéket. Ha nem található, akkor az utolsó hamisnak számító (falsy) értéket rendeli hozzá.'
},
{
  qt: ['frontend', 'javascript', 'logika', 'típuskonverzió'],
  q: 'Logikai értékként az alábbiak közül melyik számít igaznak?',
  options: ['<code>&quot;&quot;</code>', '<code>&quot; &quot;</code>', '<code>undefined</code>', '<code>NaN</code>'],
  answer: 1,
  expl: 'A sztring adattípus logikai értéke csak abban az esetben hamis, ha a hosszértéke, azaz <code>length</code> tulajdonsága 0, egyébként igaznak számít.'
},
{
  qt: ['frontend', 'javascript', 'logika', 'típuskonverzió'],
  q: 'Logikai értékként az alábbiak közül melyik számít igaznak?',
  options: ['<code>&#96;&#96;</code>', '<code>&quot;false&quot;</code>', '<code>0</code>', '<code>NaN</code>'],
  answer: 1,
  expl: 'A sztring adattípus logikai értéke csak abban az esetben hamis, ha a hosszértéke, azaz <code>length</code> tulajdonsága 0, egyébként igaznak számít.'
},
{
  qt: ['frontend', 'javascript', 'logikai operátor'],
  q: 'Mi a <code>kimenet</code> értéke?',
  qb: ['let kimenet = !!null;', 'js'],
  options: ['true', 'false', 'NaN'],
  answer: 1,
  expl: 'A logikai NEM operátor <code>(!)</code> <code>false</code> értéket ad vissza, ha egyetlen operandusa igaz (<code>true</code>), vagy igaznak (<code>truthy</code>) számít; ellenkező esetben <code>true</code> értéket kapunk. A NEM operátort megkettőzve (!!) logikai értékre kényszerítést végezhetünk és megkaphatjuk az adat igazságtartalmát. A <code>null</code> az érték szándékos hiányát jelzi, logikai értéke <code>falsy</code>, így a <code>!!null</code> <code>false</code> értéket ad vissza.'
},
{
  qt: ['frontend', 'javascript', 'metódus'],
  q: 'Mi a <code>kimenet</code> értéke?',
  qb: ['let kimenet = &quot;I❤️🍫&quot;.length;', 'js'],
  options: ['1', '2', '3', '5'],
  answer: 3,
  expl: 'Az emojik a Unicode karaktertábla azon területén helyezkednek el, ahol már két kódegység szükséges a karakterek tárolásához, a JavaScript pedig a két kódegységet két karakterként kezeli.'
},
{
  qt: ['frontend', 'javascript', 'metódus'],
  q: 'Melyik metódushívás színezi át a <code>h1</code> HTML-elemet?',
  qb: ['&lt;h1 class=&quot;lead&quot; id=&quot;ch01_1&quot;&gt;Tartalom&lt;/h1&gt;', 'markup'],
  options: ['document.getElementsByClassName(&quot;lead&quot;).style.color = &quot;coral&quot;;', 'document.getElementById(&quot;ch01_1&quot;).style.color = &quot;coral&quot;;', 'document.getElementsByTagname(&quot;h1&quot;).style.color = &quot;coral;', 'document.querySelectorAll(&quot;h1.lead#c&quot;).style.color = &quot;coral&quot;;', 'mindegyik'],
  answer: 1,
  expl: 'A <code>getElementById()</code> metódus egy hivatkozást ad vissza az argumentumként megadott id-vel rendelkező <em>egyedi elemre</em>. A <code>getElementsByClassName()</code>, <code>getElementsByTagname()</code> és a <code>querySelectorAll()</code> metódusok csomópontlistát vagy HTML-gyűjteményt adnak vissza, amelyek elemeihez tömbjelöléssel vagy cikluskezelő utasítással férhetünk hozzá.'
},
{
  qt: ['frontend', 'javascript', 'objektum', 'szintaktika'],
  q: 'Melyik kifejezés tartalmaz hibát?',
  qb: ['let xl = { width: 600, length: 400, height: 280 };', 'js'],
  options: ['<code>xl[&quot;width&quot;] = xl[&quot;length&quot;]</code>', '<code>xl[0] = &quot;700&quot;</code>', '<code>xl.ossz = xl.width + xl.length + xl.height</code>', '<code>xl.0 = &quot;500&quot;</code>'],
  answer: 3,
  expl: 'Az objektum tulajdonságainak elérésére a pontjelölés sokkal olvashatóbb, de zárójeljelölést kell használnunk, ha a tulajdonságnév szám vagy számmal kezdődik, esetleg szóközt tartalmaz.'
},
{
  qt: ['frontend', 'javascript', 'objektummetódus'],
  q: 'Mi a <code>kimenet</code> értéke?',
  qb: ['let obj1 = { a: 10, b: 15, c: 18 };\nlet obj2 = Object.assign({c: 11, d: 12}, obj1);\nlet kimenet = [obj2.c, obj2.d];', 'js'],
  options: ['[12, 18]', '[18, 12]', '[11, 12]', '[12, 11]'],
  answer: 1,
  expl: 'Az <code>Object.assign()</code> metódus arra szolgál, hogy az összes felsorolható saját tulajdonság értékét egy vagy több forrásobjektumból egy célobjektumba másolja. A tulajdonságokat felülírják azok az objektumok, amelyek a paraméterek sorrendjében később ugyanazokkal a tulajdonságokkal rendelkeznek.'
},
{
  qt: ['frontend', 'javascript', 'operátor'],
  q: 'Mi a <code>kimenet</code> értéke?',
  qb: ['let arr = [3, 11, 4, 8];\nlet kimenet = 4 in arr;', 'js'],
  options: ['true', 'false'],
  answer: 1,
  expl: 'Az <code>in</code> operátor annak ellenőrzésére szolgál, hogy egy adott <strong>tulajdonság</strong> létezik-e egy objektumban vagy sem. Logikai értéket ad vissza, ha a megadott tulajdonság szerepel egy objektumban <code>true</code>, ellenkező esetben <code>false</code> értéket kapunk. Tömbök esetében az <code>in</code> operátor akkor ad igazat vissza, ha az operandus egy érvényes index. Mivel a első elem indexe 0, a feladatban a 4 hamis értéket ad vissza.'
},
{
  qt: ['frontend', 'javascript', 'operátor'],
  q: 'Mi a <code>kimenet</code> értéke?',
  qb: ['let kimenet = 4 % 5;', 'js'],
  options: ['NaN', '0', '4', '5'],
  answer: 2,
  expl: 'Az aritmetikai maradék <code>(%)</code> operátor a bal oldalán lévő számot elosztja a jobb oldalán lévő számmal, majd az eredmény az osztás egész számú maradékát adja vissza.'
},
{
  qt: ['frontend', 'javascript', 'operátor'],
  q: 'Mi a <code>kimenet</code> értéke?',
  qb: ['let kimenet = 4 ** 4;', 'js'],
  options: ['16', '64', '256', 'NaN'],
  answer: 2,
  expl: 'A <code>**</code> operátor az első operandusnak a második operandus hatványára való emelésének eredményét adja vissza. Egyenértékű a <code>Math.pow()</code> metódussal.'
},
{
  qt: ['frontend', 'javascript', 'operátor'],
  q: 'Mi a <code>kimenet</code> értéke?',
  qb: ['let kor = 22;\nlet kimenet = kor >= 18 ? sör : almalé;', 'js'],
  options: ['sör', 'almalé'],
  answer: 0,
  expl: 'A ternáris operátor az egyetlen olyan JavaScript-operátor, amely három operandust fogad el: egy feltételt, amelyet egy kérdőjel (?) követ, majd egy kifejezést, amelyet akkor kell végrehajtani, ha a feltétel igaz, és amelyet egy kettőspont (:) követ, végül pedig a kifejezést, amelyet akkor kell végrehajtani, ha a feltétel hamis. Ezt az operátort gyakran használják az <code>if...else</code> utasítás alternatívájaként.'
},
{
  qt: ['frontend', 'javascript', 'operátor'],
  q: 'Mi a <code>kimenet</code> értéke?',
  qb: ['let eper = [&quot;Rabunda&quot;, &quot;Nadina&quot;, &quot;Gerida&quot;, &quot;Gorella&quot;];\nlet kimenet = eper instanceof Array;', 'js'],
  options: ['false', '4', 'true', '&quot;string&quot;'],
  answer: 2,
  expl: 'Az <code>instanceof</code> operátor bal oldalon egy objektum operandusra számít, jobb oldali operandusként egy objektumosztályt vár; ha a visszaadott érték <code>true</code>, az azt jelzi, hogy az objektum az adott osztály példánya, ha pedig a visszaadott érték <code>false</code>, értelemszerűen nem az.'
},
{
  qt: ['frontend', 'javascript', 'operátor'],
  q: 'Mi a <code>kimenet1</code> és a <code>kimenet2</code> értéke?',
  qb: ['let kosar = new String(&quot;karalábé&quot;);\nlet kimenet1 = kosar instanceof String;\nlet kimenet2 = kosar instanceof Object;', 'js'],
  options: ['false, false', 'true, true', 'true, false', 'false, true'],
  answer: 1,
  expl: 'Az <code>instanceof</code> operátor bal oldalon egy objektum operandusra számít, jobb oldali operandusként egy objektumosztályt vár; ha a visszaadott érték <code>true</code>, az azt jelzi, hogy az objektum az adott osztály példánya, ha pedig a visszaadott érték <code>false</code>, értelemszerűen nem az. Szinte minden objektum egyben az Object osztály példánya is, így a <code>kimenet2</code> is <code>true</code> értéket ad.'
},
{
  qt: ['frontend', 'javascript', 'operátor'],
  q: 'Mi a <code>kimenet</code> értéke?',
  qb: ['let kimenet = 6++;', 'js'],
  options: ['6', '7', 'SyntaxError-t kapunk', 'TypeError-t kapunk'],
  answer: 2,
  expl: 'A léptető operátorok csak változóval használhatók, literállal nem.'
},
{
  qt: ['frontend', 'javascript', 'operátor'],
  q: 'Mi a következő összetett hozzárendelési operátor jelentése?',
  qb: ['szum += lista', 'js'],
  options: ['szum = szum + lista', 'szum = lista++', 'lista = szum', 'lista = szum + szum'],
  answer: 0,
  expl: 'Az összetett összeadási hozzárendelési operátor (<code>+=</code>) a jobb oldali operandus értékét hozzáadja egy változóhoz, és az eredményt a változóhoz rendeli. A két operandus típusa meghatározza az operátor viselkedését, ha az egyik operandus karakterlánc, a másik is karakterlánccá konvertálódik, és összefűzés történik az összeadás helyett.'
},
{
  qt: ['frontend', 'javascript', 'operátor'],
  q: 'Mi a <code>kimenet</code> értéke?',
  qb: ['let kimenet = (&quot;1&quot; + 2 + 4) + (1 + 2 + &quot;4&quot;)', 'js'],
  options: [41, 157, 248, 12434, 124124],
  answer: 3,
  expl: 'A plusz (+) operátor két operandusának típusa meghatározza az operátor viselkedését, ha az egyik operandus karakterlánc, a másik is karakterlánccá konvertálódik, és összefűzés történik az összeadás helyett. Amennyiben mindkét oldal szám, összeadás hajtódik végre. A feladat megoldása a <code>&quot;124&quot; + &quot;34&quot;</code> művelet eredménye.'
},
{
  qt: ['frontend', 'javascript', 'operátor'],
  q: 'Mi a <code>kimenet</code> értéke?',
  qb: ['let kimenet = (function(a) {\n  delete a;\n  return a;\n})(&quot;turbolya&quot;);', 'js'],
  options: ['undefined', '&quot;turbolya&quot;', 'null', '&quot;&quot;'],
  answer: 1,
  expl: 'A delete operátor eltávolít egy tulajdonságot egy objektumból. A változók törlése nem működik. Szigorú módban szintaktikai hibát (SyntaxError) dob, nem szigorú módban pedig nincs hatása.'
},
{
  qt: ['frontend', 'javascript', 'operátor', 'adattípus'],
  q: 'Mi a <code>kimenet</code> értéke?',
  qb: ['let kimenet = typeof false;', 'js'],
  options: ['true', 'false', '&quot;number&quot;', '&quot;boolean&quot;', '&quot;string&quot;'],
  answer: 3,
  expl: 'A <code>typeof</code> operátor a kiértékelendő operandus típusát jelző sztringgel tér vissza. A logikai adattípusok (<code>true</code> vagy <code>false</code>) esetén <code>&quot;boolean&quot;</code> értéket ad vissza.'
},
{
  qt: ['frontend', 'javascript', 'operátor', 'hozzárendelési operátor'],
  q: 'Mi jelenik meg a konzolon?',
  qb: ['let num1 = 200;\nlet num2 = 100;\nlet num3 = 50;\nnum1 = num2 = num3;\nconsole.log(num1, num2, num3);', 'js'],
  options: ['100, 100, 50', '100, 50, 50', '50, 50, 50', '100, 100, 100'],
  answer: 2,
  expl: 'A hozzárendelések jobbról balra értékelődnek ki. Először a jobb oldali num2 = num3 kifejezés kerül kiértékelésre, majd a bal oldali változóhoz rendeljük az eredményt: (num1 = (num2 = num3)). Az összes változó egyetlen értéket kap.'
},
{
  qt: ['frontend', 'javascript', 'operátor', 'logikai operátor'],
  q: 'Mi a <code>kimenet</code> értéke?',
  qb: ['let num = 3;\nlet tucat = function () {\n  return num * 12;\n}\nlet kimenet = 0 && tucat() && 120;', 'js'],
  options: ['false', '120', 'true', '0', '36'],
  answer: 3,
  expl: 'A ÉS logikai operátor (<code>&&</code>) a megadott operandusok közül visszadja az első hamisnak számító (falsy) értéket. A kiértékelés balról jobbra történik, és a kiértékelés azonnal félbeszakad, ha a kifejezés hamis volta egyértelművé válik (rövidzár). Ha nem található hamisnak számító érték, akkor az utolsó igaznak számító (truthy) értéket adja vissza.'
},
{
  qt: ['frontend', 'javascript', 'operátor', 'logikai operátor'],
  q: 'Mi az <code>a</code> és a <code>b</code> értéke a kód végrehajtása után?',
  qb: ['let a = 0, b = 0;\n(a = 5) || (b = 8);', 'js'],
  options: ['a = 0, b = 0', 'a = 5, b = 8', 'a = 0, b = 8', 'a = 5, b = 0'],
  answer: 3,
  expl: 'A VAGY logikai operátor (<code>||</code>) a megadott operandusok közül visszadja az első igaznak számító (truthy) értéket. A kiértékelés balról jobbra történik, és a kiértékelés azonnal félbeszakad, ha a kifejezés igaz volta egyértelművé válik (rövidzár). Ha nem található igaznak számító érték, akkor az utolsó hamisnak számító (falsy) értéket adja vissza.'
},
{
  qt: ['frontend', 'javascript', 'operátor', 'léptető operátor'],
  q: 'Mi a <code>kimenet</code> értéke?',
  qb: ['let num = 2;\nlet kimenet = num++ + ++num;', 'js'],
  options: [4, 5, 6, 7],
  answer: 2,
  expl: 'A növelő léptető operátor (++) eggyel növeli operandusának értékét. Visszatérési értéke az operandushoz viszonyított pozíciójától függ. A posztfix (<code>adat++</code>) művelet a nevével megegyezően az eredeti értéket adja vissza, majd az utasítás elemzése után növeli azt, míg a prefix (<code>++adat</code>) művelet növeli az értéket, majd visszaadja azt, így a feladat megoldása a <code>2 + 4</code> művelet eredménye.'
},
{
  qt: ['frontend', 'javascript', 'operátor', 'szintaktika'],
  q: 'Az alábbiak közül melyik szintaktika hibás?',
  options: ['<code>26.toString()</code>', '<code>26..toString()</code>', '<code>26 .toString()</code>', '<code>(26).toString()</code>'],
  answer: 0,
  expl: 'A JavaScript a szám után álló pontot tizedespontként értelmezi, nem tagoperátorként.'
},
{
  qt: ['frontend', 'javascript', 'operátor', 'típuskonverzió'],
  q: 'Mi a <code>kimenet</code> értéke?',
  qb: ['let kimenet = true + true', 'js'],
  options: ['NaN', 'truetrue', '0', '2'],
  answer: 3,
  expl: 'A <code>+</code> operátor implicit konverziós szabálya alapján a logikai értékeket számmá alakítja, a <code>true</code> értéket 1-re, a <code>false</code> értéket 0-ra.'
},
{
  qt: ['frontend', 'javascript', 'operátor', 'típuskonverzió'],
  q: 'Mi a <code>kimenet</code> értéke?',
  qb: ['let kimenet = &quot;509&quot; - &quot;495&quot;', 'js'],
  options: ['undefined', 'NaN', '14', 'típushibát (TypeError) kapunk'],
  answer: 2,
  expl: 'A kivonási operátor (<code>-</code>) kivonja a jobb oldali operandust a bal oldali operandusból, és azok különbségét adja vissza. Kiértékelés előtt megpróbálja mindkét operandust számmá alakítani, ha ez nem sikerül, akkor NaN értéket ad vissza.'
},
{
  qt: ['frontend', 'javascript', 'operátor', 'típuskonverzió'],
  q: 'Mi a <code>kimenet</code> értéke?',
  qb: ['let adat = 11 + &quot;33&quot;;\nlet kimenet = adat--;', 'js'],
  options: ['43', '44', '1133', '1132', 'NaN'],
  answer: 2,
  expl: 'A léptető operátorok először számértékké kényszerítik az operandus értékét, ha nem alakítható számmá, NaN-t adnak vissza. A léptető csökkentő operátor eggyel csökkenti az operandusát, és egy értéket ad vissza. Visszatérési értéke az operandushoz viszonyított pozíciójától függ. Ha posztfix, azaz az operandus utáni operátorral használjuk (<code>adat--</code>), akkor a nevével megegyezően csökkentés előtti értéket adja vissza, majd az utasítás elemzése után csökkenti azt. Míg a prefix (<code>--adat</code>) művelet csökkenti az értéket, majd visszaadja azt.'
},
{
  qt: ['frontend', 'javascript', 'regex'],
  q: 'Mi a <code>kimenet</code> értéke?',
  qb: ['let sztring = &quot;Mocha, LiveScript, JavaScript&quot;\nlet kimenet = /script$/i.test(sztring);', 'js'],
  options: ['true', 'false', '2', '11'],
  answer: 0,
  expl: 'A <code>RegExp</code> objektum <code>test()</code> metódusa egy reguláris kifejezés és egy megadott karakterlánc közötti egyezés keresését hajtja végre, visszatérési értéke egy logikai érték, mely elárulja, hogy az illesztés sikeres-e vagy sem. Az <code>i</code> módosító hatására a kis- és nagybetűket figyelmen kívül hagyja az illesztés során. A reguláris kifejezésben szereplő $ metakarakter az egyezést a karakterlánc végére korlátozza.'
},
{
  qt: ['frontend', 'javascript', 'sablonliterál'],
  q: 'Mi a <code>kimenet</code> értéke?',
  qb: ['let numarr = [26, 21, 33, 8, 11];\nlet kiir = `Nyerőszámok: ${numarr}`;\nlet kimenet = kiir;', 'js'],
  options: ['&quot;Nyerőszámok: [26,21,33,8,11]&quot;', '&quot;Nyerőszámok: 26,21,33,8,11&quot;', '&quot;Nyerőszámok: [object Array]&quot;', '&quot;Nyerőszámok: ${numarr}!&quot;'],
  answer: 1,
  expl: 'A sablonliterálok a tompa ékezet karakterekkel (`, backtick) határolt literálok, amelyek lehetővé teszik a többsoros karakterláncokat, a beágyazott kifejezésekkel történő karakterlánc-összefűzés és a címkézett sablonoknak nevezett speciális konstrukciókat.'
}, 
{
  qt: ['frontend', 'javascript', 'Set-objektum'],
  q: 'Mi a <code>kimenet</code> értéke?',
  qb: ['let arr = new Set([3, 5, 4, 1]);\narr.add(&quot;1&quot;);\nlet kimenet = arr.size;', 'js'],
  options: ['NaN', '5', '4', '3'],
  answer: 1,
  expl: 'A <code>Set</code> objektum értékek gyűjteménye. Egy érték csak egyszer fordulhat elő benne. Bármilyen adattípust tartalmazhat. Az <code>add()</code> metódus új elemet illeszt be egy megadott értékkel az objektumba, ha a gyűjteményben még nincs ugyanilyen értékű elem. A <code>size</code> tulajdonság <code>Set</code> objektumban lévő értékek számát adja vissza. A feladatban a hozzáadott sztringérték még nem létezik a gyűjteményben, ezért a <code>size</code> tulajdonság az 5 értéket adja vissza.'
},
{
  qt: ['frontend', 'javascript', 'szintaktika'],
  q: 'Mi a <code>kimenet</code> értéke?',
  qb: ['let kimenet = 1.26e4;', 'js'],
  options: ['1260', '12600', '126000', '1264'],
  answer: 1,
  expl: 'A tudományos (exponenciális) jelölés a számot egy egész és törtrészre bontva, a 10 megfelelő számú és előjelű hatványával szorzandó kifejezésként ábrázolja. Például a 4.16e7 jelentése 4,16*10<sup>7</sup>=41 600 000, míg a 4.16e-7 jelentése 4,16*10<sup>-7</sup>=0,000000416.'
}, 
{
  qt: ['frontend', 'javascript', 'szintaktika'],
  q: 'Melyik a helyes JavaScript-megjegyzés szintaxis?',
  options: ['\'\' megjegyzés', '/* megjegyzés */', '/ megjegyzés /', '>> megjegyzés <<'],
  answer: 1,
  expl: 'Az egysoros megjegyzések két törtvonallal (<code>//</code>) kezdődnek. A <code>//</code> és a sor vége közötti szöveget a JavaScript figyelmen kívül hagyja. A többsoros megjegyzések <code>/*</code> karakterekkel kezdődnek és <code>*/</code> karkterekkel végződnek, a közöttük lévő szöveget a JavaScript szintén figyelmen kívül hagyja.'
},
{
  qt: ['frontend', 'javascript', 'szintaktika'],
  q: 'Az alábbiak közül melyik a nyílfüggvény helyes szintaxisa?',
  options: ['x, y => {return z;}', 'x, y => z', '{ x, y } => z', '(x, y) => z'],
  answer: 3,
  expl: 'A nyílfüggvény az ES6-ban bevezetett szintaktikai cukorka, azaz nem vezetett be új funkcionalitást, csak letisztultabb, tömörebb szintaxissal rendelkezik, mint egy függvénykifejezés. Nem használható minden esetben a függvénykifejezés vagy a függvénydeklaráció helyett. A nyílfüggvény a &quot;nyíl&quot; szimbólummal (=>) azonosítható, a paraméterek a nyíl előtt, a függvény fő része pedig utána következik.'
},
{
  qt: ['frontend', 'javascript', 'szintaktika'],
  q: 'Érzékeny a JavaScript a kis- és nagybetűkre?',
  options: ['nem', 'igen'],
  answer: 1,
  expl: 'A JavaScript kis- és nagybetű érzékeny nyelv. Ez azt jelenti, hogy a nyelvi kulcsszavakat, változókat, függvényneveket és egyéb azonosítókat mindig következetesen kell írni. Például a <code>lista</code>, <code>Lista</code> és a <code>LISTA</code> különböző változók nevei.'
},
{
  qt: ['frontend', 'javascript', 'szintaktika'],
  q: ' Az alábbiak közül melyik érvénytelen változónév?',
  options: ['let 10LegjobbAjanlat', 'let $var', 'let _myVar', 'let _kerdesSzam50'],
  answer: 0,
  expl: 'A JavaScript-változók nevei tartalmazhatnak betűket, számjegyeket, aláhúzás- és dollárjelet; de nem kezdődhetnek számjeggyel; a nevek kis- és nagybetűkre érzékenyek (<code>kimenet</code> és <code>Kimenet</code> különböző változók); <a href=&quot;https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#reserved_words&quot; target=_blank>fenntartott szavak</a> nem használhatók névként.'
},
{
  qt: ['frontend', 'javascript', 'szintaktika'],
  q: 'Melyik JavaScript-kód fog lefutni?',
  qb: ['&lt;script src=&quot;toggle.js&quot;&gt;alert(&quot;Helló Kvízkedvelő!&quot;);&lt;/script&gt;', 'markup'],
  options: ['mindkettő', 'egyik sem', 'csak a toggle.js', 'csak a script címkék közötti kód'],
  answer: 2,
  expl: 'A <code>src</code> attribútum jelenléte esetén a <code>script</code> címkék közötti kódot a JavaScript figyelmen kívül hagyja.'
},
{
  qt: ['frontend', 'javascript', 'szintaktika'],
  q: 'Melyik változónév érvénytelen a JavaScript-nyelvben?',
  options: ['let 10legjobbAjanlat', 'let var$', 'let _myVar', 'let kerdes50'],
  answer: 0,
  expl: 'JavaScript-változónév tartalmazhat számot, de nem kezdődhet vele.'
},
{
  qt: ['frontend', 'javascript', 'szintaktika'],
  q: 'Mit csinál a programozó, amikor „rázza a fát”?',
  options: ['a lehető legkevesebbre csökkenti a függvények számát', 'kiszűri a kódismétlődést', 'eltávolítja a kódból a „halott” részeket', 'kiszűri és cseréli az elavult funkciókat'],
  answer: 2,
  expl: 'A „fa rázása” (three shaking) JavaScript kontextusban a „halott” kód eltávolítását jelenti. Fontos a tiszta struktúrájú és minimális fájlméretű kód elkészítéséhez.'
},
{
  qt: ['frontend', 'javascript', 'sztringmetódus'],
  q: 'Mi a <code>kimenet</code> értéke?',
  qb: ['let sztr = &quot;katedrális&quot;;\nlet kimenet = sztr.slice(1, -1);', 'js'],
  options: ['katedráli', 'atedrális', 'atedráli', 'k'],
  answer: 2,
  expl: 'A <code>slice()</code> metódus egy sztring általunk megadott határok közötti részét adja vissza új sztringként. Az első argumentum megadja azt a pozíciót, ahol elkezdi a kivágást, míg a második (opcionális) argumentum azt a pozíciót, amely <em>előtt</em> a kivágás befejeződik. A -1 indexérték a szöveg utolsó karakterét jelzi, kisebb negatív értékkel a sztring hosszától visszafelé számolhatjuk a karakterpozíciókat. Ha a második argumentum nincs megadva, akkor a kivágás a szöveg végéig folytatódik. Ha az első argumentum negatív és értéke nagyobb, mint a sztring hossza, 0-val helyettesíti az értelmező.'
}, 
{
  qt: ['frontend', 'javascript', 'sztringmetódus'],
  q: 'Mi a <code>kimenet</code> értéke?',
  qb: ['let sztring = &quot;5 alma, 5 körte&quot;;\nlet kimenet = sztring.replace(5, &quot;öt&quot;);', 'js'],
  options: ['öt alma, 5 körte', 'öt alma, öt körte', '5 alma, öt körte', '5 alma, 5 körte'],
  answer: 0,
  expl: 'A <code>replace()</code> metódus egy új karakterláncot ad vissza, amelyben a minta egy, néhány vagy összes találata helyettesítve van. A minta lehet egy karakterlánc vagy egy reguláris kifejezés, a csere pedig lehet egy karakterlánc vagy egy függvény, amelyet minden egyes találatra meg kell hívni. Ha a minta egy karakterlánc, csak az első előfordulása kerül kicserélésre. Globális keresés és csere végrehajtásához reguláris kifejezést kell használni a <code>g</code> módosítóval: <code>sztring.replace(/5/g, &quot;öt&quot;)</code>. Az eredeti karakterlánc változatlan marad.'
},
{
  qt: ['frontend', 'javascript', 'sztringmetódus'],
  q: 'Mi a <code>kimenet1</code> és a <code>kimenet2</code> értéke?',
  qb: ['let darab = 526 + &quot;4&quot;;\nlet kimenet1 = Number.isFinite(darab)\nlet kimenet2 = isFinite(darab);', 'js'],
  options: ['true, true', 'true, false', 'false, true', 'false, false'],
  answer: 2,
  expl: 'Ha a globális <code>isFinite()</code> függvény argumentuma véges szám, vagy véges számmá alakítható, <code>true</code> értéket ad vissza. A Number objektumhoz tartozó <code>isFinite()</code> metódus viszont nem végez típuskonverziót, a karakterláncok mindig <code>false</code> értéket adnak.'
},
{
  qt: ['frontend', 'javascript', 'sztringmetódus'],
  q: 'Mi a <code>kimenet</code> értéke?',
  qb: ['let sztr = &quot;Nappal a lapp pap a lapp paplak nappalijában pipál.&quot;;\nlet kimenet = sztr.indexOf(&quot;app&quot;, 2);', 'js'],
  options: ['true', '-1', '2', '8', '10'],
  answer: 4,
  expl: 'Az <code>indexOf()</code> metódus az argumentumában átadott karakterlánc első előfordulásának pozícióját adja vissza. Második argumentumnak egy számot megadva beállíthatjuk a keresés kezdő pozícióját. –1-et kapunk, ha nincs találat.'
},
{
  qt: ['frontend', 'javascript', 'sztringmetódus'],
  q: 'Mi a <code>kimenet</code> értéke?',
  qb: ['let sztring = &quot;medvefülkankalin&quot;;\nlet kimenet = sztring.charAt(1);', 'js'],
  options: ['edvefülkankalin', 'e', 'me', 'dvefülkankalin'],
  answer: 1,
  expl: 'Ha a <code>charAt</code> metódus argumentumaként egy indexszámot adunk meg, visszaadja az adott indexpozícióban található karaktert. Amennyiben a megadott indexérték tartományon kívül esik, egy üres karakterláncot kapunk, ha nem adunk meg argumentumot, vagy az nem szám, akkor a 0. pozíciót kapjuk vissza.'
},
{
  qt: ['frontend', 'javascript', 'sztringmetódus'],
  q: 'Mi a <code>kimenet</code> értéke?',
  qb: ['let sztr = &quot;édestestvér&quot;;\nlet kiv1 = sztr.substr(2, 3);\nlet kiv2 = sztr.substring(2, 3);\nlet kimenet = `${kiv1}${kiv2}`;', 'js'],
  options: ['&quot;est&quot;', '&quot;eses&quot;', '&quot;este&quot;', '&quot;ese&quot;'],
  answer: 2,
  expl: 'A <code>substr()</code> metódus első argumentuma megadja azt a pozíciót, ahol elkezdi a kivágást, míg a második argumentum azt a karakterszámot, ami megadja a kivágás hosszát. A <code>substring()</code> metódus első argumentuma szintén azt a pozíciót adja meg, ahol elkezdi a kivágást, míg a második argumentum azt a pozíciót, amely előtt a kivágás befejeződik. A <code>substr()</code> metódus elfogadja a negatív kezdőpozíciót a karakterlánc végétől való eltolásként, a <code>substring()</code> viszont nem. Ha nem adunk meg második argumentumot, mindkét metódus a karakterlánc végéig végzi a kivágást.'
},
{
  qt: ['frontend', 'javascript', 'sztringmetódus'],
  q: 'Mi a <code>kimenet</code> értéke?',
  qb: ['let kimenet = parseFloat(&quot;21df4dfrWE&quot;) + parseFloat(&quot;  6px&quot;)', 'js'],
  options: ['216', '27', '220', '2146', '21'],
  answer: 1,
  expl: 'A <code>parseFloat()</code> metódus elemez egy sztringargumentumot, és egy számot vagy NaN-t ad vissza. A leghosszabb olyan részláncot választja ki, amely érvényes számot eredményez. Ha érvénytelen karakterrel találkozik, akkor az addig a pontig ábrázolt számot adja vissza. A vezető szóközöket levágja és figyelmen kívül hagyja, de ha az ezt követő első karakterrel nem tud számsorozatot kezdeni, NaN-t ad vissza.'
},
{
  qt: ['frontend', 'javascript', 'sztringmetódus'],
  q: 'Mi a <code>kimenet</code> értéke?',
  qb: ['let sztring = &quot;medvefülkankalin&quot;;\nlet kimenet = sztring.charAt(&quot;e&quot;);', 'js'],
  options: ['1', 'm', '[1]', 'NaN'],
  answer: 1,
  expl: 'Ha a <code>charAt</code> metódus argumentumaként egy indexszámot vár és visszaadja az adott indexpozícióban található karaktert. Amennyiben nem adunk meg argumentumot vagy az argumentum nem szám, akkor a 0. pozíciót kapjuk vissza.'
},
{
  qt: ['frontend', 'javascript', 'sztringmetódus', 'regex'],
  q: 'Mi a <code>kimenet</code> értéke?',
  qb: ['let minta = /\\d/;\nlet sztring = &quot;ab0cde1ef2g&quot;;\nlet kimenet = sztring.split(minta, 0);', 'js'],
  options: ['&quot;ab&quot;', '[&quot;ab&quot;, &quot;cde&quot;, &quot;ef&quot;, &quot;g&quot;]', '&quot;ab cde ef g&quot;', '[]'],
  answer: 3,
  expl: 'A <code>split()</code> metódussal egy sztringet lehet feldarabolni és a darabokat egy tömbbe helyezni. Az első argumentum az a karakter/karakterlánc vagy reguláris kifejezés, amellyel a karakterláncot fel kell osztani, a második (opcionális) argumentum pedig a sztring felosztásának száma. Ha a felosztás száma 0, üres tömböt kapunk eredményül.'
},
{
  qt: ['frontend', 'javascript', 'számmetódus'],
  q: 'Mi a <code>kimenet</code> értéke?',
  qb: ['let szum = 10.92345;\nlet kimenet = szum.toPrecision(2);', 'js'],
  options: ['11', '10.92', '10.9', '10'],
  answer: 0,
  expl: 'A <code>toPrecision()</code> metódus egy számot <strong>kerekít</strong> az argumentumként megadott számú számjegyre, amelyet karakterláncként ad vissza. Ha az argumentum értéke kisebb mint az egész számjegyek száma, exponenciális (tudományos) jelölésű értéket ad vissza.'
},
{
  qt: ['frontend', 'javascript', 'számmetódus'],
  q: 'Mi a <code>kimenet</code> értéke?',
  qb: ['let num = 85.0;\nlet kimenet = Number.isInteger(num)', 'js'],
  options: ['true', 'false'],
  answer: 0,
  expl: 'A <code>Number.isInteger()</code> metódus igaz logikai értéket ad vissza, ha az argumentuma <code>Number</code> adattípusú egész szám, ellenkező esetben <code>false</code> értékkel tér vissza.'
},
{
  qt: ['frontend', 'javascript', 'számmetódus'],
  q: 'Mi a <code>kimenet</code> értéke?',
  qb: ['let num = 96.69856;\nlet kimenet = num.toPrecision(3)', 'js'],
  options: ['&quot;96.7&quot;', '&quot;96.698&quot;', '&quot;96.699&quot;', '&quot;97&quot;'],
  answer: 0,
  expl: 'A <code>toPrecision()</code> metódus egy számot <strong>kerekít</strong> az argumentumként megadott számú számjegyre, amelyet karakterláncként ad vissza. Ha az argumentum értéke kisebb mint az egész számjegyek száma, exponenciális (tudományos) jelölésű értéket ad vissza.'
},
{
  qt: ['frontend', 'javascript', 'típuskonverzió'],
  q: 'A <code>num</code> változó értéke &quot;1&quot;. Melyik művelet NEM a 2 értékkel tér vissza?',
  options: ['++num', 'num * 2', '(true + true) * num', 'num + 1'],
  answer: 3,
  expl: 'A léptető operátor (++) és a szorzás operátor (*) a karakterláncot implicit konverzióval szám értékre alakítja, de a plusz (+) operátor konvertálási szabályai szerint, ha az egyik operandus karakterlánc, a másik is karakterlánccá konvertálódik, és összefűzés történik az összeadás helyett.'
},
{
  qt: ['frontend', 'javascript', 'típuskonverzió', 'operátor'],
  q: 'Mi a <code>kimenet</code> értéke?',
  qb: ['let kimenet = 6 > 4 > 2 === false', 'js'],
  options: [true, false],
  answer: 0,
  expl: 'A nagyobb mint (>) operátor összehasonlítja operandusait és igaz logikai értéket ad vissza, ha a bal oldali operandus nagyobb, mint a jobb oldali operandus. Az operátor implicit konverzióval szám értékre kényszeríti az operandusokat. A feladatban először kiértékelésre kerül a <code>6 &gt; 4</code>, ami <code>true</code> értéket ad vissza. A <code>true</code> érték implicit konverzióval <code>1</code>-re értékelődik, és az <code>1 &gt; 2</code> művelet már hamis. Tehát az eredmény <code>false</code> lesz.'
},
{
  qt: ['frontend', 'javascript', 'tömb'],
  q: 'Mi a <code>kimenet</code> értéke?',
  qb: ['let hegyek = [&quot;Matterhorn&quot;, &quot;K2&quot;, &quot;Annapurna&quot;];\nlet kimenet = hegyek[3];', 'js'],
  options: ['undefined', 'szintaktikai hibát (SyntaxError) kapunk', 'Annapurna', 'null'],
  answer: 0,
  expl: 'A JavaScript-tömbök indexelése nullával kezdődik, a második az 1-es indexen, és így tovább – az utolsó elem pedig a tömb <code>length</code> tulajdonságának értéke –1 indexen található. Ha nem létező indexű elemre hivatkozunk, <code>undefined</code> értéket kapunk.'
},
{
  qt: ['frontend', 'javascript', 'tömb'],
  q: 'Mi a <code>kimenet</code> értéke?',
  qb: ['let makik = [&quot;medvemaki&quot;, &quot;pottó&quot;, &quot;lóri&quot;, &quot;lajhármaki&quot;];\nmakik.length = 0;\nlet kimenet = makik[0];', 'js'],
  options: ['&quot;medvemaki&quot;', 'NaN', 'undefined', 'tartományhibát (RangeError) okoz'],
  answer: 2,
  expl: 'Az <code>Array</code> objektum <code>length</code> tulajdonságának az aktuális hossznál kisebb értékre történő beállítása a tömböt csonkolja, 0 értékűre állítása törli az összes elemét. Az aktuális hossznál nagyobb értékre való beállítása ritka tömböt hoz létre. Ritka tömb vagy üres tömb elemet nem tartalmazó indexére való hivatkozás <code>undefined</code> értéket ad vissza. A hossz érvénytelen értékre (negatív szám vagy nem egész szám) történő beállítása tartományhibát (RangeError) eredményez.'
},
{
  qt: ['frontend', 'javascript', 'tömb'],
  q: 'Mi a <code>kimenet</code> értéke?',
  qb: ['let kimenet = [1,[0]][1][0];', 'js'],
  options: ['undefined', 'NaN', '0', '1'],
  answer: 2,
  expl: 'A <code>kimenet</code> változó kétdimenziós tömbhivatkozást tartalmaz: az <nobr>[1,[0]]</nobr> tömb <nobr>[1][0]</nobr> elemére utal, ami a 0 alapú indexelés következtében a második dimenzió első eleme.'
},
{
  qt: ['frontend', 'javascript', 'tömbmetódus'],
  q: 'Mi a <code>kimenet</code> értéke?',
  qb: ['let arr1 = [19, 11, 34];\nlet arr2 = arr1.sort();\nlet kimenet = arr2 === arr1;', 'js'],
  options: ['true', 'false'],
  answer: 0,
  expl: 'Az <code>arr2</code> változóhoz csak az <code>arr1</code> tömb hivatkozását rendeljük hozzá, nem hozunk létre egy új tömbpéldányt, így a szigorú/típusos egyenlőség egyezést mutat.'
},
{
  qt: ['frontend', 'javascript', 'tömbmetódus'],
  q: 'Mi a <code>kimenet</code> értéke?',
  qb: ['let arr = [1, 2, 3, 4, 5, 6];\nlet darab = arr.slice(-3);\nlet kimenet = darab.join(&quot;&quot;);', 'js'],
  options: ['3456', '456', '12', '123'],
  answer: 1,
  expl: 'A <code>slice()</code> metódus egy sztring általunk megadott határok közötti részét adja vissza új sztringként. Az első argumentum megadja azt a pozíciót, ahol elkezdi a kivágást, míg a második (opcionális) argumentum azt a pozíciót, amely előtt a kivágás befejeződik. A negatív index a tömb végétől visszafelé számol. A <code>join()</code> metódus egy tömb, vagy egy tömbszerű objektum elemeit egy karakterlánccá egyesíti, és ezt a sztringet adja vissza. Az argumentumban megadott karakter kerül az összefűzött szövegben a részek közé, ha nem állítunk be elválasztókaraktert, a rendszer a vesszőt használja.'
},
{
  qt: ['frontend', 'javascript', 'tömbmetódus'],
  q: 'Mi a <code>kimenet</code> értéke?',
  qb: ['let num = [8, 5, 4];\nlet kimenet = num.join();', 'js'],
  options: ['17', '&quot;854&quot;', '&quot;8 5 4&quot;', '&quot;8,5,4&quot;'],
  answer: 3,
  expl: 'A <code>join(elválasztókarakter)</code> metódus egy tömb összes elemét karakterláncokká alakítja, majd összekapcsolja őket, és az eredményül kapott karakterláncot adja vissza. Megadhatunk egy opcionális karaktert/karakterláncot, amely elválasztja az elemeket a kapott sztringben. Ha nem adunk meg elválasztó karakterláncot, akkor a tömb elemeit vesszővel (,) köti össze. Ha a tömbnek csak egy eleme van, akkor azt az elemet adja vissza az elválasztó használata nélkül.'
},
{
  qt: ['frontend', 'javascript', 'tömbmetódus'],
  q: 'Mi a <code>kimenet</code> értéke?',
  qb: ['let sivatag = [&quot;Szahara&quot;, &quot;Mojave&quot;, &quot;Kalahári&quot;];\nsivatag.concat(&quot;Góbi&quot;, &quot;Yuma&quot;);\nlet kimenet = sivatag;', 'js'],
  options: ['[&quot;Szahara&quot;, &quot;Mojave&quot;, &quot;Kalahári&quot;, &quot;Góbi&quot;, &quot;Yuma&quot;]', '[&quot;Góbi&quot;, &quot;Yuma&quot;]', '[&quot;Szahara&quot;, &quot;Mojave&quot;, &quot;Kalahári&quot;]'],
  answer: 2,
  expl: 'A <code>concat()</code> metódus két vagy több tömb összefűzésére szolgál, vagy egy tömböt az átadott argumentumokkal kapcsol össze. Ez a metódus nem változtatja meg a meglévő tömböket, hanem egy új tömböt (úgynevezett sekély másolatot) ad vissza.'
},
{
  qt: ['frontend', 'javascript', 'tömbmetódus'],
  q: 'Mi a <code>kimenet</code> értéke?',
  qb: ['let szum = (elozo, aktualis) => elozo + aktualis;\nlet kimenet = [10, 20, 30].reduce(szum, 10);', 'js'],
  options: ['20', '30', '60', '70'],
  answer: 3,
  expl: 'A reduce() metódus egy „redukáló” visszahívási (callback) függvényt hajt végre a tömb minden elemén, sorrendben, átadva az előző elemen végzett számítás visszatérési értékét. A tömb összes elemén történő függvényfuttatásnak eredményeként egyetlen értéket kapunk. Ha nem adunk meg kezdeti értéket, a 0. indexű tömbelem lesz a kezdőérték, és az iteráció a következő elemtől (0. index helyett 1. indexnél) kezdődik.'
},
{
  qt: ['frontend', 'javascript', 'tömbmetódus'],
  q: 'Az alábbi metódusok közül melyik használható a tömb utolsó elemének kinyerésére?',
  options: ['.pop()', '.shift()', '.push()', '.unshift()'],
  answer: 0,
  expl: 'A <code>pop()</code> metódus távolítja el az utolsó elemet egy tömbből, és az értéket visszaadja a hívónak. Megváltoztatja a tömb hosszát és a tartalmát, ha azt szeretnénk, hogy a tömb változatlan maradjon az utolsó elem eltávolításával, használjuk helyette az <code>slice(0, -1)</code> tömbmetódust.'
},
{
  qt: ['frontend', 'javascript', 'tömbmetódus'],
  q: 'Mi a <code>kimenet</code> értéke?',
  qb: ['let fajok = [&quot;törpe víziló&quot;, &quot;fekete orrszarvú&quot;, &quot;borneói orangután&quot;];\nlet kimenet = fajok.includes(&quot;ló&quot;);', 'js'],
  options: ['false', 'true', '0', '&quot;törpe víziló&quot;'],
  answer: 0,
  expl: 'Az <code>includes()</code> tömbmetódus <code>true</code> vagy <code>false</code> logikai értéket ad vissza attól függően, hogy a tömb tartalmaz-e egy adott elemet vagy sem. Az elemek pontos egyezését vizsgálja, nem pedig azok részleges egyezését. Kis- és nagybetű érzékeny. Második paramétert is hozzáadhatunk, amely megadja, hogy melyik indexről induljon a keresés. A negatív index a tömb végétől visszafelé keres.'
},
{
  qt: ['frontend', 'javascript', 'tömbmetódus'],
  q: 'Mi a <code>kimenet</code> értéke?',
  qb: ['let arr = [11, 6, 7];\narr.shift();\nlet kimenet = arr;', 'js'],
  options: ['[,11,6,7]', '[6,7]', '[undefined,11,6,7]', '[11,6,7]'],
  answer: 1,
  expl: 'A <code>shift()</code> tömbmetódus eltávolítja az első elemet egy tömbből, és visszaadja az eltávolított elemet. A metódus megváltoztatja a tömb hosszát és tartalmát. Ha a <code>length</code> tulajdonság 0, akkor a metódus <code>undefined</code> értéket ad vissza.'
},
{
  qt: ['frontend', 'javascript', 'tömbmetódus'],
  q: 'Mi a <code>kimenet</code> értéke?',
  qb: ['let arr = [1, 4, 7, 0, 9];\nlet kimenet = arr.push(3) - arr.pop();', 'js'],
  options: ['0', '3', 'NaN', '-6'],
  answer: 1,
  expl: 'A <code>push()</code> metódus egy vagy több elemet ad hozzá egy tömb végéhez, és visszaadja a tömb új hosszát, a <code>pop()</code> metódus eltávolítja az utolsó elemet egy tömbből, és visszaadja azt az elemet, így a feladat megoldása a <code>6 - 3</code> művelet eredménye.'
},
{
  qt: ['frontend', 'javascript', 'tömbmetódus'],
  q: 'Mi a <code>kimenet</code> értéke?',
  qb: ['let arr = [10, 3, 6, 4, 2];\nlet kimenet = arr.unshift(10) * arr.pop();', 'js'],
  options: ['12', '20', '6', '40'],
  answer: 0,
  expl: 'Az <code>unshift()</code> metódus egy vagy több elemet ad egy tömb elejéhez, és visszaadja a tömb új hosszát. A <code>pop()</code> metódus eltávolítja az utolsó elemet egy tömbből, és visszaadja azt az elemet, így a feladat helyes megoldása a <code>6 * 2</code> művelet eredménye.'
},
{
  qt: ['frontend', 'javascript', 'tömbmetódus'],
  q: 'Mi a <code>kimenet</code> értéke?',
  qb: ['let teszt = (adat) => adat % 2 === 0;\nlet kimenet = [11, 9, 6].every(teszt)', 'js'],
  options: ['true', 'false'],
  answer: 1,
  expl: 'Az <code>every()</code> iterációs tömbmetódus. Egy megadott visszahívási (callback) függvényt hív meg a tömb minden egyes elemére, amíg a visszahívási függvény nem ad hamis értéket. Ha ilyen elemet talál, a metódus azonnal <code>false</code> értéket ad vissza, és leállítja a tömb iterálását. Ellenkező esetben <code>true</code> értéket ad vissza. Ritka tömb esetén az üres értékek nem állítják le az iterációt. Üres tömb esetén <code>true</code> értékkel tér vissza.'
},
{
  qt: ['frontend', 'javascript', 'tömbmetódus'],
  q: 'Mi a <code>kimenet</code> értéke?',
  qb: ['let arr = [5, 4, 3, 2, 1];\narr.push(0, -1);\narr.pop(2);\nlet kimenet = arr.length;', 'js'],
  options: ['7', '6', '5', '4'],
  answer: 1,
  expl: 'A <code>push()</code> metódus <strong>egy vagy több elemet</strong> ad hozzá egy tömb végéhez, és visszaadja a tömb új hosszát. A <code>pop()</code> metódus eltávolítja az <stromg>utolsó</stromg> elemet egy tömbből, és visszaadja azt az elemet. Az argumentumo(ka)t figyelmen kívül hagyja. Ha a tömb üres, <code>undefined</code> értékkel tér visza. Mindkét metódus módosítja a tömböt.'
},
{
  qt: ['frontend', 'javascript', 'tömbmetódus'],
  q: 'Mi a <code>kimenet</code> értéke?',
  qb: ['let arr = [&quot;öt&quot;, 1, 2, 3, -1, -2, -3, 0b1111];\nlet kimenet = arr.sort();', 'js'],
  options: ['[-1, -2, -3, 1, 15, 2, 3, &quot;öt&quot;]', '[-1, -2, -3, 0b1111, 1, 2, 3, &quot;öt&quot;]', '[&quot;öt&quot;, -1, -2, -3, 0b1111, 1, 2, 3]', '[&quot;öt&quot;, -1, -2, -3, 1, 2, 3, 15]'],
  answer: 0,
  expl: 'A <code>sort()</code> metódus (argumentumában a sorrendet meghatározó függvény hiányában) az elemek karakterláncokká alakításával, majd UTF-16 kódegységértékeik sorozatának összehasonlításával, növekvő sorrendbe rendezi a tömböt.'
},
{
  qt: ['frontend', 'javascript', 'tömbmetódus'],
  q: 'Mi a különbség a <code>sort()</code> és a <code>toSorted()</code> metódus között?',
  options: ['A <code>sort()</code> metódus sztringként rendezi a számokat, a <code>toSorted()</code> nem', 'A <code>sort()</code> metódus nem rendezi a ritka (sparse) tömböt, a <code>toSorted()</code> igen', 'A <code>sort()</code> metódus felülírja a tömböt, a <code>toSorted()</code> másolatot ad vissza', 'A <code>sort()</code> metódus tömbmetódus, <code>toSorted()</code> pedig sztringmetódus'],
  answer: 2,
  expl: 'Az <code>Array</code> objektum <code>toSorted()</code> metódusa a <code>sort()</code> metódus „másoló” változata. Új, rendezett tömböt ad vissza, nem írja felül az eredetit.'
},
{
  qt: ['frontend', 'javascript', 'tömbmetódus'],
  q: 'Mi a <code>kimenet</code> értéke?',
  qb: ['let sivatag = [&quot;Szahara&quot;, &quot;Mojave&quot;, &quot;Kalahári&quot;];\nlet kimenet = sivatag.concat();', 'js'],
  options: ['[&quot;Szahara, Mojave, Kalahári&quot;]', '&quot;Szahara, Mojave, Kalahári&quot;', '[&quot;Szahara&quot;, &quot;Mojave&quot;, &quot;Kalahári&quot;]', 'szintaktikai hibát (SyntaxError) okoz'],
  answer: 2,
  expl: 'A <code>concat()</code> metódus két vagy több tömb összekapcsolására szolgál, de argumentum nélküli hívása a tömb klónját (sekély másolatát) adja vissza.'
},
{
  qt: ['frontend', 'javascript', 'tömbmetódus', 'regex'],
  q: 'Mi a <code>kimenet</code> értéke?',
  qb: ['let kn = [&quot;Emili&quot;, &quot;Zella&quot;, &quot;Ádám&quot;, &quot;Rabán&quot;];\nlet kimenet = kn.filter(item => !/e/i.test(item));', 'js'],
  options: ['[&quot;Zella&quot;]', '[&quot;Emili&quot;]', '[&quot;Ádám&quot;, &quot;Rabán&quot;]', '[&quot;Emili&quot;, Ádám&quot;, &quot;Rabán&quot;]'],
  answer: 2,
  expl: 'A <code>filter()</code> iterációs tömbmetódus. Egy megadott visszahívási (callback) függvényt hív meg egyszer egy tömb minden elemére, és egy új tömböt hoz létre az összes olyan értékből, amelyre a visszahívási függvény igaz értéket ad vissza. Azok a tömbelemek, amelyek nem felelnek meg a tesztnek, nem kerülnek be az új tömbbe. A <code>test()</code> metódus egy reguláris kifejezés és egy megadott karakterlánc közötti egyezés keresését hajtja végre, visszatérési értéke egy logikai érték, mely elárulja, hogy az illesztés sikeres-e vagy sem. Az <code>i</code> módosító hatására a kis- és nagybetűket figyelmen kívül hagyja az illesztés során'
}
]
