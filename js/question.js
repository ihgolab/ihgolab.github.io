const quiz = [
    {
    q: 'Melyik batch paranccsal tudunk másolni egy fájlt/könyvtárat?',
    options: ['xcopy', 'move', 'ren', 'cd'],
    answer: 0
    },
    {
    q: 'Melyik irányban kerül titkosításra a forgalom a böngésző és a meglátogatott webhelyek között, ha https protokollt használunk?',
    options: ['letöltéskor', 'nem történik titkosítás', 'feltöltéskor', 'mindkét irányban'],
    answer: 3
    },
    {
    q: 'Mi NEM mondható el a peer-to-peer hálózatokról?',
    options: ['könnyen konfigurálható', 'alacsony költségű', 'egyszerű feladatok elvégzésére tökéletes', 'nagyon biztonságos'],
    answer: 3
    },
    {
    q: 'Hogyan nevezzük a hálózati kommunikáció során alkalmazott szabályok és megállapodások összességét?',
    options: ['üzenetsémák', 'protokoll', 'topológia', 'broadcast'],
    answer: 1
    },
    {
    q: 'Mi a registry a Windows operációs rendszerben?',
    options: ['személyes mappa', 'a merevlemez egy elkülönített része', 'rendszerleíró adatbázis', 'környezeti változó'],
    answer: 2
    },
    {
    q: 'Az alábbi hálózatok közül melyik a legnagyobb kiterjedésű?',
    options: ['WAN', 'SOHO', 'MAN', 'LAN'],
    answer: 0
    },
    {
    q: 'Melyik batch paranccsal tudjuk hozzáfűzni az aktuális könyvtár tartalmát egy létező fájlhoz?',
    options: ['dir => list.txt', 'dir > list.txt', 'dir == list.txt', 'dir >> list.txt'],
    answer: 3
    },
    {
    q: 'Mi NEM jellemző a virtuális memóriára?',
    options: ['akkor van rá szükség, ha elfogyott a RAM', 'mérete automatikusan kerül beállításra', 'a merevlemez egy elkülönített részén vagy SSD-n helyezkedik el', 'a gyakran használni kívánt adatok átmeneti tárolója'],
    answer: 3
    },
    {
    q: 'Hogyan illeszted be a vágólap szöveges tartalmát a Windows-parancssorba?',
    options: ['az <kbd>alt</kbd>+<kbd>enter</kbd> billentyűvel', 'a "fel" kurzormozgató billentyűvel', 'a jobb egérgombbal', 'a <kbd>tab</kbd> billentyűvel'],
    answer: 2
    },
    {
    q: 'Hogyan nevezzük az internethelyek azonosítására szolgáló egyedi neveket?',
    options: ['alhálózati maszk', 'domainnév', 'hosztnév', 'ISP'],
    answer: 1
    },
    {
    q: 'Mi az intranet?',
    options: ['mindenkinek elérhető nyilvános hálózat', 'a vállalatok belső kommunikációjára létrehozott zárt hálózat', 'különálló alhálózatokból felépülő hálózat', 'elosztó hálózat'],
    answer: 1
    },
    {
    q: 'Melyik a vezetékes helyi hálózatban leggyakrabban használt protokollkészlet?',
    options: ['SMTP', 'Ethernet', 'TCP', 'FTP'],
    answer: 1
    },
    {
    q: 'Melyik parancs jeleníti meg a kimenő és bejövő kapcsolatokat, az irányítótáblákat, és más egyéb hálózati statisztikákat?',
    options: ['ipconfig/all', 'tracert', 'ping', 'netstat'],
    answer: 3
    },
    {
    q: 'Melyik parancs segítségével indíthatunk manuálisan DNS-kérést egy adott webszerverre vonatkozóan?',
    options: ['ipconfig/all', 'tracert', 'nslookup', 'netstat'],
    answer: 2
    },
    {
    q: 'Melyik paranccsal tudjuk a távoli számítógép elérhetőségét ellenőrizni?',
    options: ['ipconfig/all', 'tracert', 'ping', 'netstat'],
    answer: 2
    },
    {
    q: 'Milyen tevékenységet végez az autentikáció?',
    options: ['hitelesítést', 'vírusellenőrzést', 'adatmentést', 'tömörítést'],
    answer: 0
    },
    {
    q: 'Melyik eszköz feladata a különböző protokollokat használó hálózatok összekapcsolása?',
    options: ['gateway', 'bridge', 'repeater', 'hub'],
    answer: 0
    },
    {
    q: 'Mit csinál a hálózati névfeloldás?',
    options: ['Ma már nincs használatban ez a szolgáltatás.', 'Privát hálózat gépeinek azonosítását végzi.', 'A hálózaton használt számítógépnevekhez tartozó IP címeket adja meg.', 'Távoli számítógépre való bejelentkezést hitelesít.'],
    answer: 2
    }, 
    {
    q: 'Hogyan tudod előhívni az előzményeket a Windows parancssorában?',
    options: ['<kbd>alt</kbd>+<kbd>enter</kbd> billentyűvel', 'a "le" kurzormozgató billentyűvel', 'a jobb egérgombbal', 'az <kbd>F7</kbd> billentyűvel'],
    answer: 3,
    }, 
    {
    q: 'Mi NEM igaz az UDP (User Datagram Protocol) szállítási rétegre a TCP-vel (Transmission Control Protocol) összehasonlítva?',
    options: ['összeköttetés-mentes', 'mindent újraküld, amit a vevő nem tudott venni', 'kisebb helyigénnyel tárolja az adatokat', 'nagyobb teljesítmény'],
    answer: 1
    }, 
    {
    q: 'Melyik utasítással hozhatunk létre könyvtárat a parancssorban?',
    options: ['chdir', 'mkdir', 'rmdir', 'dir'],
    answer: 1
    },
    {
    q: 'Mi a kötegelt (batch) állomány?',
    options: ['egyszerű szövegszerkesztővel szerkeszthető állomány, parancsok futtatását a tartalom sorról sorra való olvasásával teszi lehetővé', 'magas szintű programnyelven íródott, gépi kódra fordított Windows operációs rendszeren futtatható állomány', 'egyszerű felépítésű, maximum 64 KB méretű bináris fájl', 'folyamatok eredményét, programok működési naplóit tároló állomány'],
    answer: 0
    },
    {
    q: 'Milyen műveletet végez el a Git <code>clone</code> parancsa?',
    options: ['letölt egy távoli tárolót (repository)', 'letölti a változásokat a szerverről', 'hozzáadjuk fájlunkat a <code>staging area</code>-hoz', 'törli a változtatásokat'],
    answer: 0
    },
    {
    q: 'Mit jelent a Git SCM kifejezésben az SCM rövidítés?',
    options: ['Service Code Manager', 'Source, Control, Media', 'Secure Code Management', 'Source Code Management'],
    answer: 3
    },
    {
    q: 'Milyen állapota lesz egy új fájlnak a Gitben közvetlenül létrehozás után?',
    options: ['tracked', 'untracked', 'staged', 'modified'],
    answer: 1
    },
    {
    q: 'Mi a helyes sorrendje a Git parancsoknak a távoli tárolóval (repository) való szinkronizálás során?',
    options: ['pull, push, commit', 'push, pull, commit', 'commit, push, pull', 'commit, pull, push'],
    answer: 3
    },
    {
    q: 'Amikor kiadjuk a Git <code>commit</code> parancsot, akkor milyen állapotból milyenbe kerülnek át a fájlok?',
    options: ['modified &#10140; staged', 'staged &#10140; modified', 'staged &#10140; unmodified', 'staged &#10140; untracked'],
    answer: 2
    },
    {
    q: 'Mi lesz a fájlok állapota a Git <code>add</code> parancs után?',
    options: ['modified', 'unmodified', 'staged', 'untracked'],
    answer: 2
    },
    {
    tip: ['frontend', 'javascript'],
    q: 'Milyen műveletet végez el a Git <code>fetch</code> parancsa?',
    options: ['lehetőség van a szerveren történt módosításokat áttekinteni, de nem „nyúl hozzá” az aktuális munkánkhoz', 'letölti a változásokat a szerverről, és integrálja a saját munkánkba', 'letölt egy távoli repositoryt', 'a paranccsal hozzáadjuk fájlunkat a <code>staging area</code>-hoz'],
    answer: 0,
    expl: ''
    },
    {
    tip: ['frontend', 'javascript'],
    q: 'Mi jellemző a Git <code>unmodified</code> állapotú fájljára?',
    options: ['a Git követi a fájlt, és mi módosítottuk', 'a Git követi a fájlt, de mi nem módosítottuk azt', 'a Git követi a fájlt, ha módosítottuk, a módosítás be fog kerülni az adatbázisba', 'a Git nem követi a fájlt'],
    answer: 1,
    expl: '' 
    },
    {
    q: 'Melyik lista tartalmaz csak blokkszintű HTML-elemeket?',
    options: ['a, h2, script', 'p, div, h1', 'p, div, strong', 'div, h6, sub'],
    answer: 1
    },
    {
    q: 'Hogyan adunk meg helyesen egy másik oldalra mutató HTML-hivatkozást?',
    options: ['&lt;a target="https://www.w3.org/"&gt;w3.org&lt;/a&gt;', '&lt;link href="https://www.w3.org/"&gt;w3.org&lt;/a&gt;', '&lt;a src="https://www.w3.org/"&gt;w3.org&lt;/a&gt;', '&lt;a href="https://www.w3.org/"&gt;w3.org&lt;/a&gt;'],
    answer: 3
    },
    {
    q: 'Melyik HTML-attribútum von össze vízszintesen két táblázatcellát?',
    options: ['concat="2"', 'span="2"', 'rowspan="2"', 'colspan="2"'],
    answer: 3
    },
    {
    q: 'Melyik a helyes megadási módja egy kép beszúrásának HTML-dokumentumunkba?',
    options: ['&lt;img source="/img/panda.jpg"&gt;', '&lt;img src="/img/panda.jpg"&gt;&lt;/img&gt;', '&lt;img alt="happy panda" href="/img/panda.jpg"&gt;', '&lt;img alt="happy panda" src="/img/panda.jpg"&gt;'],
    answer: 3
    },
    {
    q: 'Melyik NEM része az URL-nek?',
    options: ['elérési út', 'MAC-cím', 'tartománynév', 'protokoll'],
    answer: 1
    },
    {
    q: 'Melyek egy HTML-dokumentum kötelező részei?',
    options: ['html, head, body', 'html, nav, body', 'html, head, header, body, footer', 'html, head, footer'],
    answer: 0
    },
    {
    q: 'Milyen címsorelemek használhatóak a HTML-nyelvben?',
    options: ['title1–title9', 'h1–h6', 'h1–h10', 'header1–header5'],
    answer: 1
    },
    {
    q: 'Mely HTML-elemeket használjuk egy rendezetlen lista előállításához?',
    options: ['ul, li', 'ol, li', 'dl, dt', 'cite, span'],
    answer: 0
    },
    {
    q: 'Mire használjuk a <code>&lt;strong&gt;</code> elemet?',
    options: ['Szövegrészek elrejtésére', 'Szövegrészek blokkszintűvé tételéhez', 'Szövegrészek kiemelésére', 'Szövegrészek nagyobb méretű megjelenítéséhez'],
    answer: 2
    },
    {
    q: 'Minek a rövidítése a HTML betűszó?',
    options: ['Hyperlinks and Text Markup Language', 'HyperText Meta Language', 'HyperText Multi Layout', 'HyperText Markup Language'],
    answer: 3
    },
    {
    q: 'Ha böngészőnkben a betűméret alapbeállítása 16px, mekkora lesz a betűmérete annak az elemnek, amelynek beállítása <code>font-size: 1.5rem</code>?',
    options: ['24px', '16px', '12px', '20px'],
    answer: 0
    },
    {
    tip: ['frontend', 'css'],
    q: 'Melyik CSS-tulajdonsággal állítható be a betű típusa?',
    options: ['font-family', 'font-style', 'font-variant', 'font-weight'],
    answer: 0,
    expl: ''
    },
    {
    q: 'Melyik CSS-szelektor választja ki azon <code>div</code> elemeket, amelyek osztályattribútuma <code>main</code>-nel kezdődik?',
    options: ['div\[class$=main\]', 'div.main\[main\]', 'div\[class^="main"\]', 'div.main'],
    answer: 2
    },
    {
    q: 'Az <code>&lt;input id="total"&gt;</code> elemet melyik szelektor segítségével tudjuk kiválasztani?',
    options: ['input#total', '#input', '#input.total', 'total'],
    answer: 0
    },
    {
    q: 'Melyik CSS-szelektor választja ki azon <code>p</code> elemeket, amelyek "data"-ra végződő osztályattribútummal rendelkeznek?',
    options: ['p[class="data"]', 'p[class$="data"]', 'p[class^="data"]', 'p.data'],
    answer: 1
    },
    {
    q: 'Melyik CSS-tulajdonság használatával tudunk saját betűtípust megadni?',
    options: ['@font-family', '@font-type', '@letter-face', '@font-face'],
    answer: 3
    },
    {
    q: 'Belülről kifelé haladva melyek a CSS-dobozmodell részei?',
    options: ['content, padding, border, margin', 'content, padding, border, space', 'content, padding, margin, border', 'padding, border, margin, content'],
    answer: 0
    },
    {
    q: 'Melyik kód adja meg a tiszta piros színt?',
    options: ['#00FF00', 'rgba(255, 0, 0, 1)', 'rgb(0, 255, 0)', '#0000FF'],
    answer: 1
    },
    {
    tip: ['frontend', 'html'],
    q: 'A rádiógombokat melyik attribútummal kell csoportosítani a megfelelő működéshez?',
    options: ['value', 'name', 'type', 'id'],
    answer: 1,
    expl: ''
    },
    {
    q: 'Melyik NEM egy Bootstrap 4 által előre definiált gombosztály?',
    options: ['btn-danger', 'btn-warning', 'btn-action', 'btn-primary'],
    answer: 2
    },
    {
    q: 'Melyik Bootstrap 4 osztályt használjuk az <code>input</code> és a <code>select</code> elemek formázásához?',
    options: ['form-control', 'form-check', 'form-input', 'form-group'],
    answer: 0
    },
    {
    q: 'Melyik Javascript-függvénykönyvtárat használja a Bootstrap 4?',
    options: ['Angular', 'jQuery', 'React', 'Lodash'],
    answer: 1
    },
    {
    q: 'Melyik NEM HTML-inputtípus?',
    options: ['date', 'datalist', 'text', 'checkbox'],
    answer: 1
    },
    {
    q: 'A <code>label</code> elem melyik attribútumában adjuk meg, hogy melyik inputelemhez tartozik?',
    options: ['target', 'id', 'with', 'for'],
    answer: 3
    },
    {
    q: 'Melyik Bootstrap 4 osztállyal hozhatsz létre gombcsoportot?',
    options: ['btn-siblings', 'btn-add', 'btn-group', 'btn-append'],
    answer: 2
    },
    {
    q: 'Hogyan adjuk meg növekvő sorrendben a Bootstrap 4 <code>col</code> osztályait?',
    options: ['<code>col-*, col-sm-*, col-md-*, col-lg-*, col-xl-*</code>', '<code>col-xl-*, col-lg-*, col-md-*, col—sm-*, col-*</code>', '<code>col-*, col-md-*, col-sm-*, col-lg-*, col-xl-*</code>', '<code>col-lg-*, col-sm-*, col-md-*, col-xl-*</code>'],
    answer: 0
    },
    {
    q: 'Melyik Bootstrap 4 osztály használható a HTML-táblázatok alapértelmezett formázásához?',
    options: ['span', 'grid', 'table', 'td'],
    answer: 2
    },
    {
    q: 'Melyik Bootstrap-osztály teszi csíkossá (világosabb/sötétebb sor váltakozása) a táblázat sorait?',
    options: ['table-striped', 'table-lg', 'table-urgent', 'table-responsive'],
    answer: 0
    },
    {
    q: 'Mi lesz a következő művelet eredménye?',
    qb: '6 % 2 ? "HTML" : "CSS"',
    options: ['üres sztring', 'HTML', 'CSS', 'HTML:CSS'],
    answer: 2
    },
    {
    q: 'Melyik NEM sztringmetódus?',
    options: ['trim()', 'toLowerCase()', 'parseFloat()', 'concat()'],
    answer: 2
    },
    {
    q: 'Mi lesz az <code>age</code> változó értéke?',
    qb: 'let age = 2 + 6 / 3;',
    options: ['2.6666666667', '2', '3', '4'],
    answer: 3
    },
    {
    q: 'Melyik NEM primitív adattípus a JavaScript-nyelvben?',
    options: ['boolean', 'string', 'array', 'number'],
    answer: 2
    },
    {
    q: 'Mi lesz a következő művelet eredménye?',
    qb: '"Mátra utca".toUpperCase();',
    options: ['MÁTRA UTCA', 'mÁTRA UTCA', 'Mátra Utca', 'mátra utca'],
    answer: 0
    },
    {
    q: 'Melyik módszer nem használható sztringek összefűzésére?',
    options: ['"Gombóc " + "Artúr"', '"Gombóc " . "Artúr"', '"Gombóc ".concat("Artúr")', '`${"Gombóc"} ${"Artúr"}`'],
    answer: 1
    },
    {
    q: 'Mi lesz a következő művelet eredménye?',
    qb: '"22" + 2',
    options: ['22+2', '22', '24', '"222"'],
    answer: 3
    },
    {
    q: 'Mi lesz a <code>name</code> változó értéke?',
    qb: 'let elem = `elem${9%2}`;', 
    options: ['elem4', 'elem', 'elem1', 'elem$1'],
    answer: 2
    },
    {
    q: 'Melyik kódrészlet eredményez hibát?',
    options: ['let name : "Béla"; name : "Ödön";', 'var name : "Béla"; name : "Ödön";', 'name : "Béla"; name : "Ödön";', 'const name : "Béla"; name : "Ödön";'],
    answer: 3
    },
    {
    q: 'Melyik kulcsszóval nem lehet változót létrehozni a JavaScript-nyelvben?',
    options: ['const', 'var', 'def', 'let'],
    answer: 2
    },
    {
    tip: ['frontend', 'javascript'],
    q: 'Hogyan nevezzük az objektumok függvényeit?',
    options: ['tulajdonság', 'metódus', 'kifejezés', 'tagváltozó'],
    answer: 1,
    expl: ''
    },
    {
    tip: ['frontend', 'javascript'],
    q: 'Melyik NEM logikai operátor a JavaScriptben?',
    options: ['||', '&&', '$$', '!'],
    answer: 2,
    expl: ''
    },
    {
    q: 'Melyik a megfelelő változónév a tiszta kód (clean code) szabályai szerint a JavaScriptben?',
    options: ['_noname', 'firstName', 'x', 'sum_total'],
    answer: 1
    },
    {
    tip: ['frontend', 'javascript'],
    q: 'Melyik tömbmetódus készít a tömbből sztringet, az elemeket vesszővel elválasztva egymástól?',
    options: ['replace()', 'splice()', 'join()', 'unshift()'],
    answer: 2,
    expl: ''
    },
    {
    q: 'Mi lesz a függvény visszatérési értéke?',
    qb: 'function compute(x, y, z) { \nreturn x * y + z; }\ncompute(0, 10, 1);',
    options: ['0', '10', '11', '1'],
    answer: 3
    },
    
    {
    q: 'A lokális hatókörben létrehozott változót tudjuk-e használni a globális hatókörben?',
    options: ['csak ha blokkhatókörű', 'igen', 'csak ha függvényhatókörű', 'nem'],
    answer: 3
    },
    
    {
    q: 'Mikor érdemes egy függvényt több külön függvényre bontani?',
    options: ['ha hosszabb mint 5 sor', 'ha hosszabb mint 10 sor és több dolgot is csinál', 'ha túl hosszú a neve', 'ha ciklus van benne'],
    answer: 1
    },
    {
    q: 'Mi lesz a következő kód eredménye?',
    qb: '3 % 5 > 1 ? 4 : 7',
    options: ['4', '5', '7', '3'],
    answer: 0
    },
    {
    q: 'Milyen számmal kezdődik a tömbök indexelése?',
    options: ['-0', '0', '-1', '1'],
    answer: 1
    },
    {
    q: 'Hogyan kerül egy objektum egy függvénynek paraméterként átadásra?',
    options: ['Csak olvasható jogosultsággal kerül átadásra', 'Az objektum értéke kerül átadásra', 'Nem lehet objektumot paraméterként átadni', 'Az objektum referenciája kerül átadásra'],
    answer: 3
    },
    {
    q: 'Mire szolgál a tömbök <code>unshift()</code> metódusa?',
    options: ['Hozzáad egy elemet a tömb végéhez.', 'Törli a tömb első elemét.', 'Törli a tömb utolsó elemét.', 'Hozzáad egy elemet a tömb elejéhez.'],
    answer: 3
    },
    {
    q: 'Az alábbiak közül melyik <code>for</code> ciklus hibás?',
    options: ['<code>for (let i = 0; i < count(x); i++) {...}</code>', '<code>for (let i = 0; i < a.length; i++) {...}</code>', '<code>for (let i = 0; i < a.length;) {...}</code>', '<code>for (let i = 0; i++) {...}</code>'],
    answer: 3
    },
    {
    q: 'Mi lesz a következő kód eredménye?',
    qb: 'let a = [6, 1, 5];\nconsole.log(a[1]);',
    options: ['undefined', '6', '5', '1'],
    answer: 3
    },
    {
    q: 'Mire szolgál a tömbök <code>push()</code> metódusa?',
    options: ['Hozzáad egy elemet a tömb elejéhez.', 'Törli a tömb első elemét.', 'Hozzáad egy elemet a tömb végéhez.', 'Törli a tömb utolsó elemét.'],
    answer: 2
    },
    {
    q: 'Melyik NEM egy alapvető algoritmus?',
    options: ['hatványozás', 'eldöntés', 'számlálás', 'összegzés'],
    answer: 0
    },
    {
    q: 'Hogy hívjuk azt a változót, amelyben az összegzés során az értékeket gyűjtjük?',
    options: ['paraméter', 'const', 'kulcs', 'akkumulátor'],
    answer: 3
    },
    {
    q: 'Melyik kifejezés adja vissza a Gombóc sztringet a következő objektum esetében?',
    qb: 'const user = { nickName: "Gombóc" };',
    options: ['user', 'nickName', 'user["nickName"]', 'user.Name'],
    answer: 2
    },
    {
    q: 'Mi lesz a következő metódushívás visszatérési értéke?',
    qb: '[6, 2, 7].filter( item => item % 2 )',
    options: ['[&#8201;]', '[6, 2, 7]', '[7]', '[6, 2]'],
    answer: 2
    },
    {
    tip:  ['frontend', 'javascript'],
    q: 'Melyik helytelen elnevezése az objektumok key–value párosának?',
    options: ['tulajdonság–érték', 'név–érték', 'kulcs–érték', 'metódus–érték'],
    answer: 3,
    expl: ''
    },
    {
    q: 'A <code>for...in</code> ciklus az objektum elemeinek melyik részét járja be?',
    options: ['a kulcsokat', 'az értékeket', 'az üres értékeket', 'a bejegyzéseket'],
    answer: 0
    },
    {
    q: 'Mi lesz a következő metódushívás visszatérési értéke?',
    qb: '[1, 3, 6].filter( item => item % 2 )',
    options: ['[6]', '[1, 3, 6]', '[1, 3, 0]', '[1, 3]'],
    answer: 3
    },
    {
    q: 'Mi lesz a következő metódushívás visszatérési értéke?',
    qb: '[1, 3, 6].map( item => item + 1 )',
    options: ['[0, 1, 2]', '[2, 4, 7]', '[1, 3, 6]', '[1, 1, 1]'],
    answer: 1
    },
    {
    q: 'Mi lesz a következő metódushívás visszatérési értéke?',
    qb: '[0, true, "banán"].filter( item => item )',
    options: ['[0, true, "banán"]', '[true, "banán"]', '[]', '[1, true, "banán"]'],
    answer: 1
    },
    {
    q: 'Melyik metódus segítségével tudunk hozzáadni egy új DOM-elemet egy meglévőhöz?',
    options: ['insertChild()', 'appendChild()', 'addChildren()', 'appendElement()'],
    answer: 1
    },
    {
    q: 'Mi a neve annak az eseménynek, ami arról értesít, hogy megváltozott egy űrlapvezérlő értéke?',
    options: ['update', 'switch', 'check', 'change'],
    answer: 3
    },
    {
    q: 'Melyik metódus segítségével tudunk hozzáadni egy új eseménykezelőt egy DOM-elemhez?',
    options: ['addEvent()', 'appendEventListener()', 'event()', 'addEventListener()'],
    answer: 3
    },
    {
    q: 'Melyik metódus segítségével tudunk beállítani egy DOM-elem adott attribútumának az értékét?',
    options: ['setAttribute()', 'getAttr()', 'attribute()', 'getAttribute()'],
    answer: 0
    },
    {
    q: 'Melyik metódus segítségével tudunk létrehozni új DOM-elemet?',
    options: ['querySelectorAll()', 'querySelector()', 'removeElement()', 'createElement()'],
    answer: 3
    },
    {
    q: 'Melyik NEM egéresemény a következők közül?',
    options: ['mouseout', 'click', 'mouseover', 'hover'],
    answer: 3
    },
    {
    q: 'Melyik metódussal tudom lekérni egy DOM-elem adott attribútumának az értékét?',
    options: ['setAttribute()', 'getAttr()', 'attribute()', 'getAttribute()'],
    answer: 3
    },
    {
    q: 'Melyik űrlap esemény váltódik ki, amikor elküldjük az űrlapot?',
    options: ['submit', 'send', 'get', 'post'],
    answer: 0
    },
    {
    q: 'Melyik metódus segítségével érjük el egy DOM-elem szülőelemét?',
    options: ['element.parentItem()', 'element.parent()', 'element.parentElement()', 'element.parentNode()'],
    answer: 2
    },
    {
    q: 'Melyik a helyes módszer, ha egy DOM-elemet úgy akarok bővíteni, hogy megörökölje az összes elem?',
    options: ['<code>Element.hi.prototype = function() {...}</code>', '<code>Element.hi = function() {...}</code>', '<code>Element.prototype.hi = function() {...}</code>', '<code>Element = function() {...}</code>'],
    answer: 2
    },
    {
    q: 'Melyik callback függvény a következő kódban?',
    qb: 'button.addEventListener("click", deleteText);',
    options: ['button', 'click', 'addEventListener', 'deleteText'],
    answer: 3
    },
    
    {
    q: 'Mi a Promise megkövetelt metódusa?',
    options: ['then()', 'resolve()', 'next()', 'end()'],
    answer: 0
    },
    
    {
    q: 'Melyik JSON-metódus készít szabványos JSON-sztringből JavaScript-objektumot?',
    options: ['JSON.parse()', 'JSON.use()', 'JSON.modify()', 'JSON.Stringify()'],
    answer: 0
    },
    {
    q: 'Melyik JSON-metódus készít szabványos JavaScript-objektumból JSON-sztringet?',
    options: ['JSON.modify()', 'JSON.parse()', 'JSON.use()', 'JSON.stringify()'],
    answer: 3
    },
    {
    q: 'Melyik állapot jelzi, hogy a Promise lefutott, függetlenül a sikerességétől?',
    options: ['pending', 'fulfilled', 'settled', 'rejected'],
    answer: 2
    },
    {
    q: 'Melyik HTTP metódust használjuk adatok lekérésére a szerverről?',
    options: ['DELETE', 'POST', 'GET', 'PUT'],
    answer: 2
    },
    {
    q: 'Milyen típusú értékkel tér vissza a JavaScript <code>fetch()</code> függvénye?',
    options: ['Promise', 'null', 'string', 'boolean'],
    answer: 0
    },
    {
    tip: ['frontend', 'javascript'],
    q: 'Szerveradatok lekérdezésére (read) melyik HTTP-metódus szükséges?',
    options: ['GET', 'PUT', 'DELETE', 'POST'],
    answer: 0,
    expl: ''
    },
    {
    tip: ['frontend', 'html'],
    q: 'Melyik attribútum kötelező az <code>&lt;img&gt;</code> elem használatakor?',
    options: ['href', 'style', 'width', 'alt'],
    answer: 3,
    expl: ''
    },
    {
    tip: ['frontend', 'javascript'],
    q: 'Melyik ciklus ellenőrzi a feltétel teljesülését a ciklus végén?',
    options: ['for', 'while', 'do...while', 'for...in'],
    answer: 2,
    expl: ''
    },
    {
    tip: ['frontend', 'javascript'],
    q: 'Melyik metódus jelenít meg egy ablakot, amely alkalmas egy kérdés megerősítésére?',
    options: ['<code>setTimeout()</code>', '<code>confirm()</code>', '<code>alert()</code>', '<code>prompt()</code>'],
    answer: 1,
    expl: '' 
    },
    {
    tip: ['frontend', 'javascript'],
    q: 'Mit jelent a Promise objektum <code>pending</code> állapota?',
    options: ['teljesített művelet', 'a művelet sikertelen volt', 'a művelet még fut', 'az aszinkron hívás megtörtént, függetlenül a sikerességtől'],
    answer: 2,
    expl: ''
    },
    {
    tip: ['frontend', 'javascript'],
    q: 'Mi a probléma az alábbi JavaScript-kóddal?',
    qb: 'for (let szamlalo = 1; szamlalo &lt;= 50; szamlalo++) {\ndocument.write(\'Nem szunyókálok \'JavaScript-videók\' nézése közben!\' + \'&lt;br&gt;\');\n}',
    options: ['hibás feltétel', 'hibás idézőjel-használat', 'html kód beszúrása', 'hibás operátor'],
    answer: 1,
    expl: ''
    },
    {
    tip: ['frontend', 'javascript'],
    q: 'Melyik a helyes feltételmegadás, ha a <code>kifejezes</code> értéke nem lehet <code>null</code>?',
    options: ['if (kifejezes!null)', 'if (kifejezes!==null)', 'if (!kifejezes)', 'if (!null)'],
    answer: 1,
    expl: ''
    },
    {
    tip: ['frontend', 'javascript'],
    q: 'Mi lesz a következő JavaScript-kód eredménye?',
    qb: '6 + 1 + 2 + "1"',
    options: ['91', '6121', '10', 'NaN'],
    answer: 0,
    expl: 'Az összeadást a JavaScript balról jobbra végzi: 6 + 1 + 2 = 9, majd a szám és a sztring találkozásakor összefűzést végez a plusz operátor.'
    },
    {
    tip: ['frontend', 'javascript'],
    q: 'Melyik DOM-metódus választja ki az összes .jpg kiterjesztésű képet?',
    options: ['querySelectorAll("img[src$=jpg]")', 'querySelectorAll("img[href$=jpg]")', 'querySelectorAll("img[link$=jpg]")', 'querySelectorAll("img[url$=jpg]")'],
    answer: 0,
    expl: ''
    },
    {
    tip: ['frontend', 'javascript'],
    q: 'Mennyi lesz az <code>osszeg</code>, a <code>szam1</code> és a <code>szam2</code> értéke?',
    qb: 'let szam1 = 5;\nlet szam2 = 10;\nlet osszeg = szam1++ + szam2;',
    options: ['16, 6, 10', '15, 6, 10', '15, 5, 10', '16, 5, 10'],
    answer: 1,
    expl: ''
    },
    {
    tip: ['frontend', 'javascript'],
    q: 'Mi lesz a következő JavaScript-kód eredménye?',
    qb: 'let fruits = 3 + (1 + " alma");',
    options: ['NaN', '"31 alma"', '"4 alma"', '"3 + 1 alma"'], 
    answer: 1,
    expl: ''
    },
    {
    tip: ['frontend', 'javascript'],
    q: 'Melyik HTML-elem NEM tartozik az űrlapot kezelők közé?',
    options: ['&lt;option&gt;', '&lt;optgroup&gt;', '&lt;sub&gt; ', '&lt;label&gt;'],
    answer: 2,
    expl: ''
    },
    {
    tip: ['frontend', 'javascript'],
    q: 'Mi lesz a következő JavaScript-kód eredménye?',
    qb: 'Boolean("false")',
    options: ['false', '1', '0', 'true'], 
    answer: 3,
    expl: ''
    },
    {
    tip: ['frontend', 'html'],
    q: 'Mi a HTML-táblázat fejléccellájának címkéje?',
    options: ['&lt;header&gt;', '&lt;thead&gt;', '&lt;th&gt;', '&lt;hr&gt;'],
    answer: 2,
    expl: 'A táblázat fejléccelláját a <code>th</code> címkével formázzuk.'
    },
    {
    tip: ['frontend', 'javascript'],
    q: 'Melyik CSS-álosztály (pszeudoszelektor) hat az elemre, amikor az egérmutató az elem fölött áll?',
    options: [':visited', ':focus', ':hover', ':checked'],
    answer: 2,
    expl: ''
    },
    {
    tip: ['frontend', 'javascript'],
    q: 'Mi lesz az eredménye a következő Javascript-sztringmetódusnak?',
    qb: 'let irKozmondas="Hol szeretet van, ott könnyű megfelezni a krumplit.";\nirKozmondas.indexOf(\'szeretet\');',
    options: ['3', '5', '4', '8'],
    answer: 2,
    expl: 'Az indexOf(\'sztring\') metódus keresi az argumentumként megadott sztringet. Visszatérési értéke a megtalált pozíció, ha nem találta meg, akkor -1.'
    },
    {
    tip: ['frontend', 'javascript'],
    q: 'Melyik adattípust NEM soroljuk az egyszerű (primitív) típusok közé?',
    options: ['a logikai (boolean) adattípust', 'az objektum adattípust', 'a szám adattípust', 'a sztring adattípust'],
    answer: 1,
    expl: 'Az objektum összetett adattípus.'
    },
    {
    tip: ['frontend', 'javascript'],
    q: 'Mi lesz az eredménye a következő JavaScript-kódnak?',
    qb: 'parseFloat("21dfdfrWE") + parseFloat("6klkop")',
    options: ['216', '27', 'NaN', 'TypeError'],
    answer: 1,
    expl: '' 
    },
    {
    tip: ['frontend', 'javascript'],
    q: 'Melyik DOM-metódussal kapjuk vissza a dokumentumunk összes &lt;h3&gt; címkéjét tartalmazó tömböt?',
    options: ['getElementsByName("h3")', 'getElementById("h3")', 'getElementsByTagName("h3")', 'getElementsByClassName("h3")'],
    answer: 2,
    expl: ''
    },
    {
    tip: ['frontend', 'javascript'],
    q: 'Melyik adattípus NEM objektum a JavaScript értelmezésében?',
    options: ['\[null\]', '\[2, 9, nyuszi\]', '{ const gyumolcs = "alma" }', '{ "kezdő érték": 11 }'],
    answer: 2,
    expl: ''
    },
    {
    tip: ['frontend', 'javascript'],
    q: 'Melyik CSS-kijelölő választja ki azokat a <code>&lt;p&gt;</code> elemeket, amelyek osztályattribútuma <code>moreinformation</code>?',
    options: ['p[class="info"]', 'p[class$="info"]', 'p[class^="info"]', 'p[class*="info"]'],
    answer: 3,
    expl: ''
    },
    {
    tip: ['frontend', 'javascript'],
    q: 'Mi lesz a következő JavaScript-kód eredménye?',
    qb: 'let gyumolcs = ["barack", "alma", "szilva", "citrom", "meggy"];\ngyumolcs.slice(-4, -1);',
    options: ['["alma", "szilva", "citrom"]', '["szilva", "citrom", "meggy"]', '["meggy", "citrom", "szilva"]', '["citrom", "szilva", "alma"]'],
    answer: 0,
    expl: ''
    },
    {
    tip: ['frontend', 'javascript'],
    q: 'Az alábbi DOM-tulajdonság melyik elemet adja vissza?',
    qb: 'document.body.parentElement;',
    options: ['&lt;!doctype html&gt;', '&lt;head&gt;', '&lt;html&gt;', '<code>document</code> objektum'],
    answer: 2,
    expl: ''
    },
    {
    tip: ['frontend', 'javascript'],
    q: 'Melyik JavaScript-sztringmetódus távolítja el a felesleges szóközöket?',
    options: ['trim()', 'indexOf()', 'slice()', 'concat()'],
    answer: 0,
    expl: ''
    },
    {
    tip: ['frontend', 'javascript'],
    q: 'Hogyan nevezzük az objektumok változóit?',
    options: ['tulajdonság', 'metódus', 'kifejezés', 'tagfüggvény'],
    answer: 0,
    expl: ''
    },
    {
    tip: ['frontend', 'javascript'],
    q: 'Melyik a Promise objektum kötelező metódusa?',
    options: ['reject()', 'resolve()', 'catch()', 'then()'],
    answer: 3,
    expl: ''
    },
    {
    tip: ['frontend', 'css'],
    q: 'A szegély (border) és a tartalom között melyik CSS-tulajdonsággal növelhetjük a távolságot?',
    options: ['margin', 'width', 'padding', 'word-spacing'],
    answer: 2,
    expl: 'Erre a feladatra a <code>padding</code> (belső margó, eltartás) CSS-tulajdonságot használjuk.'
    },
    {
    tip: ['frontend', 'javascript'],
    q: 'GET metódusra adott HTTP válaszok közül melyik jelent sikeres választ?',
    options: ['200', '302', '304', '404'],
    answer: 0,
    expl: ''
    },
    {
    tip: ['frontend', 'javascript'],
    q: 'Mit jelent a Promise objektum <code>rejected</code> állapota?',
    options: ['teljesített művelet', 'a művelet sikertelen volt', 'a művelet még fut', 'az aszinkron hívás megtörtént, függetlenül a sikerességtől'],
    answer: 1,
    expl: ''
    },
    {
    tip: ['frontend', 'javascript'],
    q: 'Létező objektumot melyik kulcsszó segítségével bővíthetjük metódusokkal vagy tulajdonságokkal?',
    options: ['constructor', 'element', 'prototype', 'new Object'],
    answer: 2,
    expl: ''
    },
    {
    tip: ['frontend', 'javascript'],
    q: 'Melyik változónév érvénytelen a JavaScript nyelvben?',
    options: ['<code>let 10legjobbAjanlat</code>', '<code>let var$</code>', '<code>let _myVar</code>', '<code>let kerdesSzam50</code>'],
    answer: 0,
    expl: 'JavaScript-változónév nem kezdődhet számmal.<p/>'
    },
    {
    tip: ['frontend', 'css'],
    q: 'Melyik CSS-tulajdonságnak nincs hatása a sorközi (inline) elemre?',
    options: ['font-size', 'font', 'margin-top', 'color'],
    answer: 2,
    expl: ''
    },
    {
    tip: ['frontend', 'javascript'],
    q: 'Mi lesz az eredménye a következő JavaScript-kódnak?',
    qb: 'var number = 100;\nvar str = number.toString() + 200;\nconsole.log(str);',
    options: ['300', '100200', '"300"', 'NaN'],
    answer: 1,
    expl: ''
    },
    {
    tip: ['frontend', 'javascript'],
    q: 'Mi lesz az eredménye a következő JavaScript-kódnak?',
    qb: 'var number = 100;\nvar str = number.toString() + 200;\nconsole.log(str);',
    options: ['300', '100200', '"300"', 'NaN'],
    answer: 1,
    expl: ''
    },
    { 
    tip: ['frontend', 'css'],
    q: 'Melyik CSS-tulajdonsággal állítható be a szöveg színe?',
    options: ['font-color', 'color', 'text-color', 'style-color'], 
    answer: 1, 
    expl: ''
    },
    {
    tip: ['frontend', 'javascript'],
    q: 'Mi lesz az eredménye a következő JavaScript-kódnak?',
    qb: '3**3',
    options: ['NaN', '27', '9', 'TypeError'],
    answer: 1,
    expl: 'A <code>**</code> a hatványképzés operátora.'
    },
    {
    tip: ['frontend', 'javascript'],
    q: 'Mi lesz az eredménye a következő JavaScript-kódnak?',
    qb: 'typeof true',
    options: ['true', 'object', 'boolean', 'NaN'],
    answer: 2,
    expl: ''
    },
    {
    tip: ['frontend', 'javascript'],
    q: 'Hány alert üzenet fog megjelenni?',
    qb: 'for (let i = 0; i &lt; 3; i++) {\n  alert(i);\n}',
    options: ['1', '0', '3', '2'],
    answer: 2,
    expl: ''
    },
    {
    tip: ['frontend', 'javascript'],
    q: 'Melyik NEM vezérlési szerkezet a JavaScriptben?',
    options: ['szekvencia', 'szelekció', 'iteráció', 'deklaráció'],
    answer: 3,
    expl: 'Deklaráció segítségével azonosítókat vezetünk be/hozunk létre, amelyekkel konstansokra, változókra, függvényekre hivatkozhatunk.' 
    },
    {
    tip: ['frontend', 'css'],
    q: 'Melyik CSS-álosztály (pszeudoszelektor) hat akkor egy &lt;input&gt; elemre, amikor az egérmutatóval aktiváljuk?',
    options: [':active', ':focus', ':visited', ':hover'],
    answer: 1,
    expl: ''
    },
    {
    tip: ['frontend', 'javascript'],
    q: 'Mi a probléma az alábbi JavaScript-kóddal?',
    qb: 'let a = 20;\nlet szamVizsgalat = (a % 2 = 0) ? \'PÁROS\' : \'PÁRATLAN\';',
    options: ['hibás operátorhasználat', 'idézőjelhiány', 'zárójelfelesleg', 'zárójelhiány'],
    answer: 0,
    expl: 'Egy egyenlőségjel az értékadás operátora, az egyenlőséget kettő vagy három jellel vizsgáljuk: az <code>a % 2 = 0</code> helyesen <code>a % 2 == 0</code>.'
    },
    {
    tip: ['frontend', 'javascript'],
    q: 'Milyen műveletet végez el a Git <code>pull</code> parancsa?',
    options: ['lehetőség van a szerveren történt módosításokat áttekinteni, de nem „nyúl hozzá” az aktuális munkánkhoz', 'letölti a változásokat a szerverről, és integrálja a saját munkánkba', 'letölt egy távoli repositoryt', 'a paranccsal hozzáadjuk fájlunkat a <code>staging area</code>-hoz'],
    answer: 1,
    expl: ''
    },
    {
    tip: ['frontend', 'javascript'],
    q: 'Mire szolgál a tömbök <code>unshift()</code> metódusa?',
    options: ['Hozzáad egy elemet a tömb elejéhez.', 'Hozzáad egy elemet a tömb végéhez.', 'Törli a tömb első elemét.', 'Törli a tömb utolsó elemét.'],
    answer: 0,
    expl: ''
    },
    {
    tip: ['frontend', 'html'],
    q: 'Melyik HTML-elem NEM tartozik az űrlapot kezelők közé?',
    options: ['<code>&lt;legend&gt;</code>', '<code>&lt;fieldset&gt;</code>', '<code>&lt;param&gt;</code>', '<code>&lt;input&gt;</code>'],
    answer: 2,
    expl: '' 
    },
    {
    tip: ['frontend', 'javascript'],
    q: 'Mit jelent a Promise objektum <code>settled</code> állapota?',
    options: ['teljesített művelet', 'a művelet sikertelen volt', 'a művelet még fut', 'az aszinkron hívás megtörtént, függetlenül a sikerességtől'],
    answer: 3,
    expl: ''
    },
    {
    tip: ['frontend', 'css'],
    q: 'Melyik CSS-kijelölő jelöli ki a leszármazottakat?',
    options: ['div ol', 'div > ol', 'div + ol', 'div ~ ol'],
    answer: 0,
    expl: 'Szóközzel választjuk el az elemeket, ha az egy másik elem leszármazottja: <code>table tr td div p {color: red;}</code>'
    },
    {
    tip: ['frontend', 'javascript'],
    q: 'Mi a debugging?',
    options: ['léptetés/eltolás', 'érvényesítés', 'hibakeresés', 'kiszervezés'],
    answer: 2,
    expl: ''
    },
    {
    tip: ['frontend', 'css'],
    q: 'Melyik CSS-tulajdonsággal alakíthatod át a betű alakját nagybetűssé?',
    options: ['text-decoration: uppercase', 'text-transform: capitalize', 'font-variant: capitalize', 'text-transform: uppercase'],
    answer: 3,
    expl: ''
    },
    {
    tip: ['frontend', 'javascript'],
    q: 'Mi a <code>myArr</code> értéke?',
    qb: 'let yourArr = \["Mária", \["Sándor", "József", "Benedek"\], "Károly"\];\nlet myArr = yourArr\[1\]\[0\];',
    options: ['Mária', 'undefined', 'null', 'Sándor'],
    answer: 3,
    expl: ''
    },
    {
    tip: ['frontend', 'javascript'],
    q: 'Milyen a hatóköre a <code>myName</code> változónak?',
    qb: 'var myName = "Gömbi";\nfunction myFunction() {\n  console.log(myName);\n}',
    options: ['lokális hatókörű', 'függvényhatókörű', 'globális hatókörű', 'blokkhatókörű'],
    answer: 2,
    expl: ''
    },
    {
    tip: ['frontend', 'javascript'],
    q: 'Mit csinál pop() tömbmetódus?',
    options: ['Hozzáad egy elemet a tömb elejéhez.', 'Hozzáad egy elemet a tömb végéhez.', 'Törli a tömb első elemét.', 'Törli a tömb utolsó elemét.'],
    answer: 3,
    expl: ''
    },
    {
    tip: ['frontend', 'javascript'],
    q: 'Mi lesz az eredménye a következő JavaScript-kódnak?',
    qb: 'const szerencseSzam = 26;\n{ const szerencseSzam = 21; }\nconsole.log(szerencseSzam)',
    options: ['"szerencseSzam" has already been declared', 'true', '21', '26'],
    answer: 3,
    expl: ''
    },
    {
    tip: ['frontend', 'css'],
    q: 'Mi a <code>position</code> CSS-tulajdonság alapértelmezett értéke?',
    options: ['relative', 'sticky', 'fixed', 'static'],
    answer: 3,
    expl: ''
    },
    {
    tip: ['frontend', 'javascript'],
    q: 'Mi NEM igaz a <code>for...in</code> ciklusra?',
    options: ['tömbbel és objektummal is működik', 'nem kell ciklusváltozót inicializálni', 'a <code>for</code> ciklusnál egyszerűbb a szintaxisa', 'az objektum vagy tömb értékeit járja be'],
    answer: 3,
    expl: ''
    },
    {
    tip: ['frontend', 'javascript'],
    q: 'Melyik a Promise objektum hibakezelő metódusa?',
    options: ['reject()', 'resolve()', 'catch()', 'then()'],
    answer: 2,
    expl: ''
    },
    {
    tip: ['frontend', 'javascript'],
    q: 'Melyik NEM a <code>window</code> objektum eseményattribútuma?',
    options: ['onload ', 'onchange', 'onresize', 'onscroll'],
    answer: 1,
    expl: ''
    },
    {
    tip: ['frontend', 'javascript'],
    q: 'Melyik NEM ciklusszervező utasítás a JavaScriptben?',
    options: ['for...of', 'while', 'if...else', 'for'],
    answer: 2,
    expl: ''
    },
    { 
    tip: ['frontend', 'git'],
    q: 'Milyen műveletet végez el a Git <code>push</code> parancsa?',
    options: ['lehetőség van a szerveren történt módosításokat áttekinteni, de nem „nyúl hozzá” az aktuális munkánkhoz', 'letölti a változásokat a szerverről, és integrálja a saját munkánkba', 'feltölti fájljainkat a szerverre, amikre kiadtuk a commit parancsot', 'a paranccsal hozzáadjuk fájlunkat a <code>staging area</code>-hoz'],
    answer: 2,
    expl: ''
    },
    {
    tip: ['frontend', 'git'],
    q: 'Mi jellemző a Git <code>staged</code> állapotú fájljára?',
    options: ['a Git követi a fájlt, és mi módosítottuk', 'a Git követi a fájlt, de mi nem módosítottuk azt', 'a Git követi a fájlt, ha módosítottuk, a módosítás be fog kerülni az adatbázisba', 'a Git nem követi a fájlt'],
    answer: 2,
    expl: '' 
    },
    {
    tip: ['frontend', 'javascript'],
    q: 'Melyik sztringmetódussal tudsz összefűzni karakterláncokat?',
    qb: 'let sztring1 = "Ha ki akarod zárni a bajt, "\nlet sztring2 = "csukd be a szádat."',
    options: ['sztring1.concat(sztring2);', 'sztring1.match(sztring2);', 'sztring1.substring(sztring2);', 'sztring1.replace(sztring2);'],
    answer: 0,
    expl: ''
    },
    {
    tip: ['frontend', 'javascript'],
    q: 'A <code>slice</code> tömbmetódus nem módosítja az eredeti tömböt.',
    options: ['igaz', 'hamis'],
    answer: 0,
    expl: ''
    },
    {
    tip: ['frontend', 'javascript'],
    q: 'Mit jelent a CRUD mozaikszó U betűje?',
    options: ['update', 'upgrade', 'updrive', 'upright'],
    answer: 0,
    expl: ''
    },
    {
    tip: ['frontend', 'javascript'],
    q: 'A weboldal egymással gyermek-szülő kapcsolatban álló elemeinek rendszere a DOM. Minek a rövidítése?',
    options: ['Data Object Module', 'Document Object Model', 'Domain Object Management', 'Data On Media'],
    answer: 1,
    expl: ''
    },
    {
    tip: ['frontend', 'css'],
    q: 'Mi a helyes hivatkozás a külső CSS-fájlra?',
    options: ['&lt;link href="alap.css" rel="stylesheet"&gt;', '&lt;style href="alap.css" rel="stylesheet"&gt;', '&lt;meta href="alap.css" rel="stylesheet"&gt;', '&lt;source href="alap.css" rel="stylesheet"&gt;'],
    answer: 0,
    expl: ''
    },
    {
    tip: ['frontend', 'css'],
    q: 'Mennyi az alsó margó értéke az alábbi CSS-kódban?',
    qb: 'margin: 25px 50px 75px 100px;',
    options: ['25px', '50px', '75px', '100px'],
    answer: 2,
    expl: ''
    },
    {
    tip: ['frontend', 'javascript'],
    q: 'Melyik tömbmetódussal tudunk egyszerre hozzáadni és eltávolítani elemeket a tömbből?',
    options: ['slice()', 'splice()', 'shift()', 'concat()'],
    answer: 1,
    expl: ''
    },
    {
    tip: ['frontend', 'javascript'],
    q: 'A <code>border</code> CSS-tulajdonság rövidített írásmódjával melyik tulajdonságot NEM tudjuk megadni?',
    options: ['szegélyvastagság', 'szegélystílus', 'szegélyszín', 'sarokkerekítés mértékét'],
    answer: 3,
    expl: ''
    },
    {
    tip: ['frontend', 'javascript'],
    q: 'Mi lesz a következő kifejezés eredménye?',
    qb: '&quot;8&quot; * &quot;8&quot;',
    options: ['"64"', "64", "NaN", "88"],
    answer: 1,
    expl: "",
    },
    {
    tip: ['frontend', 'html'],
    q: 'Mi lesz a <code>result</code> értéke?',
    qb: 'let num = 0;\nlet result = [++x, x];',
    options: ['[0, 0]', '[1, 1]', '[0, 1]', '[1, 0]'],
    answer: 1,
    expl: "",
    },
    {
    tip: ['frontend', 'javascript'],
    q: 'A sztring adattípusban mivel váltjuk át (escaping) a speciális jelentésű karaktereket?',
    options: ['\\', '&amp;', '|', '#'],
    answer: 0,
    },
    {
    tip: ['frontend', 'javascript'],
    q: 'Az objektum adattípus kulcsait idézőjelbe kell tenni, a JSON formátumban ez nem kötelező.',
    options: ['igaz', 'hamis'],
    answer: 1,
    },
    {
    tip: ['frontend', 'css'],
    q: 'Milyen színű lesz a <code>h1</code> elem?',
    qb: '&lt;style&gt;\n#title { color: red; }\n.title { color: green; }\n&lt;/style&gt;\n&lt;h1 id=&quot;title&quot; class=&quot;title&quot;&gt;Fontos&lt;/h1&gt;',
    options: ['red', 'green'],
    answer: 0,
    expl: ''
    },
    {
    tip: ['frontend', 'javascript'],
    q: 'Mi lesz az <code>eredmeny</code> értéke?',
    qb: 'let tomb = [4, 6, 9];\nlet eredmeny = tomb[3];',
    options: ['null', 'undefined', 'SyntaxError', '""'],
    answer: 1,
    expl: ''
    },
    {
    tip: ['frontend', 'javascript'],
    q: 'Mi a következő összetett hozzárendelési operátor jelentése?',
    qb: 'sum += list',
    options: ['sum = sum + list', 'sum = list++', 'list = sum', 'list = sum + sum'],
    answer: 0,
    expl: ''
    },
    {
    tip: ['frontend', 'javascript'],
    q: 'Mi lesz a kód visszatérési értéke?',
    qb: 'let tomb = [2, 3, 9];\ntomb.indexOf(2);',
    options: ['0', '1', '2', '3'],
    answer: 0,
    expl: ''
    },
    {
    tip: ['frontend', 'javascript'],
    q: 'Mi lesz a kód visszatérési értéke?',
    qb: 'let tomb = [6, 7, 4, 1, 1, 9];\ntomb.slice(2, tomb.length);',
    options: ['[4, 1, 1,]', '[1, 1, 9]', '[4, 1, 1, 9]', '[7, 4, 1, 1]'],
    answer: 2,
    expl: ''
    },
    {
    tip: ['frontend', 'javascript'],
    q: 'Mi lesz a kód visszatérési értéke?',
    qb: 'let ertek = 214;\nif (ertek > 200) {\n  let ertek = 300;\n}\nertek;',
    options: ['214', '300', '200'],
    answer: 0,
    expl: ''
    },
    {
    tip: ['frontend', 'javascript'],
    q: 'Mi lesz a kód visszatérési értéke?',
    qb: 'let ertek = 104;\nif (ertek > 100) {\n  ertek = 150;\n}\nertek;',
    options: ['100', '104', '150'],
    answer: 2,
    expl: ''
    },     
    {
    tip: ['frontend', 'javascript'],
    q: 'Melyik CSS-tulajdonsággal állítható be, hogy a szövegünk dőlt betűtípussal jelenjen meg?',
    options: ['font-family', 'font-style', 'font-variant', 'szam'],
    answer: 1,
    expl: ''
    },
    {
    tip: ['frontend'],
    q: 'Melyik elem NEM kisbetű-nagybetű érzékeny?',
    options: ['JavaScript-változók', 'HTML-attribútumértékek', 'JavaScript-utasítások', 'CSS-tulajdonságnevek'],
    answer: 3,
    expl: ''
    },
    {
    tip: ['frontend'],
    q: 'Mi lesz a következő JavaScript-függvény eredménye?',
    qb: 'for (let szam = 1; szam &lt;= 10; szam++) {\n  document.write (szam + " ");\n  if (szam % 5 == 0)\  break;\n}',
    options: ['1 2 3 4', '1 2 3 4 5', '1 2 3 4 5 6 7 8 9', '1 2 3 4 5 6 7 8 9 10'],
    answer: 1,
    expl: ''
    },
    {
    tip: ['frontend'],
    q: 'Mi lesz a következő JavaScript-függvény eredménye?',
    qb: 'for (let szam = 1; szam &lt; 7; szam++) {\n  if (szam == 5)\n  continue;\n  document.write (szam + " ");\n}',
    options: ['1 2 3 4 5 6 7', '1 2 3 4 5 6', '1 2 3 4 6 7', '1 2 3 4 6'],
    answer: 3,
    expl: ''
    },
    {
    tip: ['frontend', 'javascript', 'DOM'],
    q: 'Melyik DOM-metódus hiányzik a stílusblokk létrehozásához?',
    qb: 'let stilusBlokk = document.createElement("style");\nstilusBlokk.innerHTML = "body { color: red }";\ndocument.querySelector("head").<mark>___________</mark>(stilusBlokk);',
    options: ['setAttribute', 'appendChild', 'createElement', 'lastElementChild'],
    answer: 1,
    expl: ''
    },
    {
    tip: ['frontend', 'javascript', 'DOM'],
    q: 'Melyik DOM-metódus hiányzik a link létrehozásához?',
    qb: 'let validatorLink = document.createElement("a");\nvalidatorLink.<mark>___________</mark>("href","https://validator.w3.org/#validate_by_input");',
    options: ['setAttribute', 'appendChild', 'createElement', 'lastElementChild'],
    answer: 0,
    expl: ''
    },
    {
    tip: ['backend'],
    q: 'Szerveradatok létrehozásához (create) melyik HTTP-metódus szükséges?',
    qb: 'let stilusBlokk = document.createElement("style");\nstilusBlokk.innerHTML = "body { color: red }";\ndocument.querySelector("head").<mark>___________</mark>(stilusBlokk);',
    options: ['GET', 'HEAD', 'DELETE', 'POST'],
    answer: 3,
    expl: ''
    },
    {
    tip: ['backend'],
    q: 'Hogyan állapíthatjuk meg az <code>adatLista</code> változóról, hogy adattípusa tömb?',
    options: ['typeof adatLista', 'Array.isArray(adatLista)', 'forEach(adatLista)', 'indexOf(adatLista)'],
    answer: 1,
    expl: ''
    },
    {
    tip: ['frontend', 'javascript'],
    q: 'Mi lesz az eredménye a következő JavaScript-kódnak?',
    qb: 'let szam = 1;\nswitch(szam) {\ncase 1:\n  szam = 2;\ndefault:\n  szam = 0;\n}',
    options: ['0', '1', '2', 'szam'],
    answer: 0,
    expl: ''
    }
    ]
    