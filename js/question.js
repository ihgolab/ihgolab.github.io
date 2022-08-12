let quiz = [
{ 
"qt": ["frontend", "css"],
"q": "<p>Melyik CSS-tulajdonsággal állítható be a szöveg színe?</p>",
"qb": "", 
"options": ["font-color", "color", "text-color", "style-color"], 
"answer": [1], 
"expl": ""
},
{
"qt": ["frontend", "javascript"],
"q": "<p>Melyik JavaScript-kód fog lefutni?</p>",
"qb": "<pre><code>&lt;script src=&quot;toggle.js&quot;&gt;alert(&quot;Hell&oacute; Kv&iacute;zkedvel&#337;!&quot;);&lt;/script&gt;</code></pre>",  
"options": ["mindkettő", "egyik sem", "csak a toggle.js", "csak a script címkék közötti kód"], 
"answer": [2], 
"expl": "<p>A src attribútum jelenléte esetén a script címkék közötti kódot a JavaScript figyelmen kívül hagyja.</p>"
},
{
"qt": ["frontend", "javascript"],
"q": "<p>Mi az alábbi kód eredménye?</p>",
"qb": "<pre><code>'I❤️🍫'.length;</code></pre>", 
"options": ["1", "2", "3", "5"], 
"answer": [3], 
"expl": "<p>Az emojik a Unicode karaktertábla azon területén helyezkednek el, ahol már két kódegység szükséges a karakterek tárolásához, a JavaScript pedig a két kódegységet két karakterként kezeli.</p>"
},
{
"qt": ["frontend", "css"],
"q": "<p>Melyik CSS-tulajdonsággal állítható be a betű típusa?</p>",
"qb": "",
"options": ["font-family", "font-style", "font-variant", "font-weight"],
"answer": [0],
"expl": ""
},
{
"qt": ["frontend", "javascript"],
"q": "<p>Melyik változónév érvénytelen a JavaScript nyelvben?</p>",
"qb": "",
"options": ["let 10legjobbAjanlat", "let var$", "let _myVar", "let kerdesSzam50"],
"answer": [0],
"expl": "<p>JavaScript-változónév nem kezdődhet számmal.<p/>"
},
{
"qt": ["frontend", "css"],
"q": "<p>Melyik CSS-tulajdonságnak nincs hatása a sorközi (inline) elemre?</p>",
"qb": "",
"options": ["font-size", "font", "margin-top", "color"],
"answer": [2],
"expl": ""
},
{
"qt": ["frontend", "javascript"],
"q": "<p>Mi lesz az eredménye a következő JavaScript-kódnak?</p>",
"qb": "<pre><code>\n[1, 2, 3] == [1, 2, 3]\n</code></pre>",
"options": ["undefined", "null", "true", "false"],
"answer": [3],
"expl": ""
},
{
"qt": ["frontend", "javascript"],
"q": "<p>Mi lesz az eredménye a következő JavaScript-kódnak?</p>",
"qb": "<pre><code>\nvar number = 100;\nvar str = number.toString() + 200;\nconsole.log(str);\n</code></pre>",
"options": ["300", "100200", "\"300\"", "NaN"],
"answer": [1],
"expl": ""
},
{
"qt": ["frontend", "javascript"],
"q": "<p>Mi lesz az eredménye a következő JavaScript-kódnak?</p>",
"qb": "<pre><code>\n3**3\n</code></pre>",
"options": ["NaN", "27", "9", "type error"],
"answer": [1],
"expl": "<p>A <code>**</code> a hatványképzés operátora.</p>"
},
{
"qt": ["frontend", "javascript"],
"q": "<p>Mi lesz a következő  JavaScript-függvény eredménye?</p>",
"qb": "<pre><code>\nfunction adder(a, b) {\n  b = b || 10;\n  return a + b;\n}\n\nadder(6)\n</code></pre>",
"options": ["NaN", "16", "6", "undefined"],
"answer": [1],
"expl": ""
},
{
"qt": ["frontend", "javascript"],
"q": "<p>Milyen a hatóköre a <code>myName</code> változónak?</p>",
"qb": "\n<pre><code>\nvar myName = \"Gömbi\";\nfunction myFunction() {\n  console.log(myName);\n}\n</code></pre>",
"options": ["lokális hatókörű", "függvényhatókörű", "globális hatókörű", "blokkhatókörű"],
"answer": [2],
"expl": ""
},
{
"qt": ["frontend", "javascript"],
"q": "<p>Mi a <code>myArr</code> értéke?</p>",
"qb": "<pre><code>\nlet yourArr = ['Mária', ['Sándor', 'József', 'Benedek'], 'Károly'];\nlet myArr = yourArr[1][0];   \n</code></pre>",
"options": ["Mária", "undefined", "null", "Sándor"],
"answer": [3],
"expl": ""
},
{
"qt": ["frontend", "javascript"],
"q": "<p>Mi lesz az eredménye a következő JavaScript-kódnak?</p>",
"qb": "<pre><code>\ntypeof true\n</code></pre>",
"options": ["true", "object", "boolean", "NaN"],
"answer": [2],
"expl": ""
},
{
"qt": ["frontend", "javascript"],
"q": "<p>Mi lesz az eredménye a következő JavaScript-kódnak?</p>",
"qb": "<pre><code>\n\"szék\" &gt; \"ágy\"\n</code></pre>",
"options": ["true", "NaN", "undefined", "false"],
"answer": [3],
"expl": ""
},
{
"qt": ["frontend", "javascript"],
"q": "<p>Hány alert üzenet fog megjelenni?</p>",
"qb": "<pre><code>\nfor (let i = 0; i &lt; 3; i++) {\n  alert(i);\n}\n</code></pre>",
"options": ["1", "0", "3", "2"],
"answer": [2],
"expl": ""
},
{
"qt": ["frontend", "javascript"],
"q": "<p>Melyik NEM vezérlési szerkezet a JavaScriptben?</p>",
"qb": "",
"options": ["szekvencia", "szelekció", "iteráció", "deklaráció"],
"answer": [3],
"expl": "" 
},
{
"qt": ["frontend", "css"],
"q": "<p>Melyik CSS-tulajdonsággal alakíthatod át a betű alakját nagybetűssé?</p>",
"qb": "",
"options": ["text-decoration: uppercase", "text-transform: capitalize", "font-variant: capitalize", "text-transform: uppercase"],
"answer": [3],
"expl": ""
},
{
"qt": ["frontend", "javascript"],
"q": "<p>Mi lesz az eredménye a következő JavaScript-kifejezésnek?</p>",
"qb": "<pre><code>\n\"\" + 5 + 0\n</code></pre>",
"options": ["undefined", "null", "\"50\"", "5"],
"answer": [2],
"expl": ""
},
{
"qt": ["frontend", "javascript"],
"q": "<p>Melyik az egyetlen érvényes JavaScript-változónév az alábbiak közül?</p>",
"qb": "",
"options": ["let char", "let default", "let return", "let false"],
"answer": [0],
"expl": ""
},
{
"qt": ["frontend", "javascript"],
"q": "<p>Mi lesz az eredménye a következő JavaScript-kódnak?</p>",
"qb": "<pre><code>\nparseFloat('21dfdfrWE') + parseFloat('6klkop')\n</code></pre>",
"options": ["216", "27", "NaN", "TypeError"],
"answer": [1],
"expl": "" 
},
{
"qt": ["frontend", "javascript"],
"q": "<p>Mi a debugging?</p>",
"qb": "",
"options": ["léptetés/eltolás", "érvényesítés", "hibakeresés", "kiszervezés"],
"answer": [2],
"expl": ""
},
{
"qt": ["frontend", "javascript"],
"q": "<p>Melyik adattípust NEM soroljuk az egyszerű (primitív) típusok közé?</p>",
"qb": "",
"options": ["a logikai (boolean) adattípust", "az objektum adattípust", "a szám adattípust", "a sztring adattípust"],
"answer": [1],
"expl": "<p>Az objektum összetett adattípus.</p>"
},
{
"qt": ["frontend", "css"],
"q": "<p>Melyik színkód NEM a fehér színt adja eredményül?</p>",
"qb": "",
"options": ["rgb(255,255,255)", "#FFFFFF", "#FFF", "rgb(0%,0%,0%)"],
"answer": [3],
"expl": "<p>Ha az összes (vörös-zöld-kék) összetevő értéke nulla, az eredmény fekete; ha mindegyik maximális értékű, az eredmény fehér.</p>"
},
{
"qt": ["frontend", "javascript"],
"q": "<p>Mi lesz az eredménye a következő Javascript-sztringmetódusnak?</p>",
"qb": "<pre><code>\nlet irKozmondas=\"Hol szeretet van, ott könnyű megfelezni a krumplit.\";\nirKozmondas.indexOf(\"szeretet\");</code></pre>",
"options": ["3", "5", "4", "8"],
"answer": [2],
"expl": "<p>Az indexOf(\"sztring\") metódus keresi az argumentumként megadott sztringet. Visszatérési értéke a megtalált pozíció, ha nem találta meg, akkor -1.</p>"
},
{
"qt": ["frontend", "css"],
"q": "<p>Melyik CSS-kijelölő jelöli ki a leszármazottakat?</p>",
"qb": "",
"options": ["div ol", "div > ol", "div + ol", "div ~ ol"],
"answer": [0],
"expl": "<p>Szóközzel választjuk el az elemeket, ha az egy másik elem leszármazottja: <code>table tr td div p {color: red;}</code></p>"
},
{
"qt": ["frontend", "javascript"],
"q": "<p>Mi lesz az értéke az <code>ujSzam</code> változónak?</p>",
"qb": "<pre><code>\nlet eredetiSzam = 96.63856;\nlet ujSzam = eredetiSzam.toPrecision(3)\n</code></pre>",
"options": ["\"96.6\"", "\"96.638\"", "\"96.639\"", "\"97\""],
"answer": [0],
"expl": "<p>A <code>toPrecision()</code> metódus egy számot kerekít az argumentumként megadott számú számjegyre, amelyet karakterláncként ad vissza. Ha az argumentum értéke kisebb mint az egész számjegyek száma, exponenciális (tudományos) jelölésű értéket ad vissza.</p>"
},
{
"qt": ["frontend", "javascript"],
"q": "<p>Melyik elem NEM kisbetű-nagybetű érzékeny?</p>",
"qb": "",
"options": ["JavaScript-változók", "JavaScript-utasítások", "HTML-attribútumértékek", "CSS-tulajdonságnevek"],
"answer": [3],
"expl": "<p>A CSS-tulajdonságnevek nem érzékenyek a kisbetű-nagybetű különbségre: <code>pre { ColoR: PLum; }</code></p>"
},
{
"qt": ["frontend", "javascript"],
"q": "<p>Melyik NEM összehasonlító operátor a JavaScriptben?</p>",
"qb": "",
"options": ["!=", "&lt;=", "==", "=&gt;"],
"answer": [3],
"expl": "<p>A nagyobb vagy egyenlő operátor helyes írásmódja: <code>&gt;=</code></p>"
},
{
"qt": ["frontend", "javascript"],
"q": "<p>Mi a probléma az alábbi JavaScript-kóddal?</p>",
"qb": "<pre><code>\nlet a = 20; \nlet szamVizsgalat = (a % 2 = 0) ? \"PÁROS\" : \"PÁRATLAN\"; </code></pre>",
"options": ["hibás operátorhasználat", "idézőjelhiány", "zárójelfelesleg", "zárójelhiány"],
"answer": [0],
"expl": "<p>Egy egyenlőségjel az értékadás operátora, az egyenlőséget kettő vagy három jellel vizsgáljuk: az <code>a % 2 = 0</code> helyesen <code>a % 2 == 0</code>.</p>"
},
{
"qt": ["frontend", "javascript"],
"q": "<p>Mi lesz a következő JavaScript-függvény eredménye?</p>",
"qb": "<pre><code>for (let szam = 1; szam &lt;= 10; szam++) {\n  document.write (szam + \" \");\n  if (szam % 5 == 0)\nbreak;\n}\n</code></pre>",
"options": ["1 2 3 4", "1 2 3 4 5", "1 2 3 4 5 6 7 8 9", "1 2 3 4 5 6 7 8 9 10"],
"answer": [1],
"expl": "<p>A <code>break</code> utasítás hatására az értelmező az adott vezérlési szerkezetből kilép, vagy a kapcsos zárójel utáni első utasítással folytatja a program végrehajtását.</p>"
},
{
"qt": ["frontend", "javascript"],
"q": "<p>Mi lesz a következő JavaScript-függvény eredménye?</p>",
"qb": "<pre><code>\nfor (let szam = 1; szam &lt; 7; szam++) {\nif (szam == 5)\ncontinue;\ndocument.write (szam + \" \");\n}\n</code></pre>",
"options": ["1 2 3 4 5 6 7", "1 2 3 4 6 7", "1 2 3 4 5 6", "1 2 3 4 6"],
"answer": [3],
"expl": "<p>A <code>break</code> utasításhoz hasonlóan a <code>continue</code> is leállítja a ciklus futását ha a feltétel igaz, de utána tovább folytatódik a hátralévő ismétlésekkel.</p>"
},
{
"qt": ["frontend", "javascript"],
"q": "<p>Mi lesz a következő JavaScript-kód eredménye?</p>",
"qb": "<pre><code>\nlet szoveg = \"Lesz ez még így se!\";\nlet szovegResz = szoveg.slice(-1);\ndocument.write(szovegResz);\n</code></pre>",
"options": ["undefined", "se!", "!", "null"],
"answer": [2],
"expl": "<p>A <code>slice()</code> metódus az adott indextől visszaadja egy sztring értékeit. Ha az argumentum értéke &lt; 0, akkor a sztring hosszától visszafelé számolja karakterpozíciókat.</p>"
},
{
"qt": ["frontend", "javascript"],
"q": "<p>Mi lesz az eredménye a következő JavaScript-kódnak?</p>",
"qb": "<pre><code>\nlet a = 9;\nlet b = ++a-3; \nconsole.log(b);\n</code></pre>",
"options": ["4", "5", "6", "7"],
"answer": [3],
"expl": "<p>Prefix operátort (++a) használva az operandus 1-gyel megnövelt értékét kapjuk vissza, így a 10-3 művelet eredeménye a helyes válasz.</p>"
},
{
"qt": ["frontend", "javascript"],
"q": "<p>Melyik JSON-metódus készít JSON-adatállományból JavaScript-objektumot?</p>",
"qb": "",
"options": ["JSON.stringify()", "JSON.use() ", "JSON.parse()", "JSON.modify()"],
"answer": [2],
"expl": "<p>A <code>JSON.parse()</code> dolgozza fel és alakítja át a JSON-adatokat JavaScript-objektumokká.</p>"
},
{
"qt": ["frontend", "css"],
"q": "<p>A szegély (border) és a tartalom között melyik CSS-tulajdonsággal növelhetjük a távolságot?</p>",
"qb": "",
"options": ["margin", "width", "padding", "word-spacing"],
"answer": [2],
"expl": "<p>Erre a feladatra a <code>padding</code> (belső margó, eltartás) CSS-tulajdonságot használjuk.</p>"
},
{
"qt": ["frontend", "git"],
"q": "<p>Mi jellemző a Git <code>untracked</code> állapotú fájljára?</p>",
"qb": "",
"options": ["a Git követi a fájlt, és mi módosítottuk", "a Git követi a fájlt, de mi nem módosítottuk azt", "a Git követi a fájlt, ha módosítottuk, a módosítás be fog kerülni az adatbázisba", "a Git nem követi a fájlt"],
"answer": [3],
"expl": "<p>Ha a fájl státusza <code>untracked</code>, a Git nem követi a fájlt.</p>"
},
{
"qt": ["frontend", "html"],
"q": "<p>A következő <code>input</code> mezőbe melyik karaktert írhatod be az alábbiak közül?</p>",
"qb": "<pre><code>&lt;input id=&quot;number&quot; type=&quot;number&quot;&gt;</code></pre>",
"options": ["%", "*", "e", "#"],
"answer": [2],
"expl": "<p>Ha az <code>input</code> mező <code>type</code> attribútuma <code>number</code> értékű, a számok, a plusz- és a mínuszjel mellett az e betű használata engedélyezett a tudományos (exponenciális) alak beírásához: 1.2e+3.</p>"
},
{
"qt": ["frontend", "html"],
"q": "<p>Mi a HTML-táblázat fejléccellájának címkéje?</p>",
"qb": "",
"options": ["&lt;header&gt;", "&lt;thead&gt;", "&lt;th&gt;", "&lt;hr&gt;"],
"answer": [2],
"expl": "<p>A táblázat fejléccelláját <code>th</code> címkével formázzuk.</p> "
},
{
"qt": ["frontend", "javascript"],
"q": "<p>Mi lesz a következő JavaScript-kód eredménye?</p>",
"qb": "<pre><code>\nlet nevsor = ['Jóska', 'Pista'];\nnevsor.push('Anna');\n</code></pre>",
"options": ["Jóska, Pista, Anna", "Jóska, Pista", "3", "Anna"],
"answer": [2],
"expl": "<p>A push() metódus új elem(ek)et szúr be a tömb utolsó eleme után, a visszatérési érték pedig a tömb új hossza.</p>"
},
{
"qt": ["frontend", "javascript"],
"q": "<p>Mi lesz a következő JavaScript-kód eredménye?</p>",
"qb": "<pre><code>\n6 + 1 + 2 + \"1\"\n</code></pre>",
"options": ["91", "6121", "10", "NaN"],
"answer": [0],
"expl": "<p>Az összeadást a JavaScript balról jobbra végzi: 6 + 1 + 2 = 9, majd a szám és a sztring találkozásakor összefűzést végez a plusz operátor.</p>"
},
{
"qt": ["frontend", "javascript"],
"q": "<p>Melyik JavaScript-számmetódussal tudod beállítani a tizedesjegyek számát?</p>",
"qb": "",
"options": ["toPrecision()", "toFixed()", "parseFloat()", "parseInt()"],
"answer": [1],
"expl": "<p>A <code>toFixed()</code> metódus kerekít megadott számú tizedesjegyre.</p>"
},
{
"qt": ["frontend", "javascript"],
"q": "<p>Mi lesz a lista tömb tartalma a kód futtatása után?</p>",
"qb": "<pre><code>\nlet lista = [undefined, [], 0, ''].filter(elem => elem);\n</code></pre>",
"options": ["undefined, \[\], 0, \'\'", "undefined, \[\]", "\[\]", "\'\'"],
"answer": [2],
"expl": "<p>A <code>filter()</code> metódus használatakor a <code>true</code> értékkel visszatérő elemek szűrését tudjuk az <code>x => x<code>, vagy az <code>x => x(Boolean)<code> feltétellel elvégezni.</p>"
}
]
