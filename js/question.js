let quiz = [
{ 
"qt": ["frontend", "css"],
"q": "Melyik CSS-tulajdonsággal állítható be a szöveg színe?",
"options": ["font-color", "color", "text-color", "style-color"], 
"answer": [1], 
"expl": ""
},
{
"qt": ["frontend", "javascript"],
"q": "Melyik JavaScript-kód fog lefutni?",
"qb": "&lt;script src=&quot;toggle.js&quot;&gt;alert(&quot;Helló Kvízkedvelő!&quot;);&lt;/script&gt;",  
"options": ["mindkettő", "egyik sem", "csak a toggle.js", "csak a script címkék közötti kód"], 
"answer": [2], 
"expl": "A src attribútum jelenléte esetén a script címkék közötti kódot a JavaScript figyelmen kívül hagyja."
},
{
"qt": ["frontend", "javascript"],
"q": "Mi az alábbi kód eredménye?",
"qb": "'I❤️🍫'.length;", 
"options": ["1", "2", "3", "5"], 
"answer": [3], 
"expl": "Az emojik a Unicode karaktertábla azon területén helyezkednek el, ahol már két kódegység szükséges a karakterek tárolásához, a JavaScript pedig a két kódegységet két karakterként kezeli."
},
{
"qt": ["frontend", "css"],
"q": "Melyik CSS-tulajdonsággal állítható be a betű típusa?",
"options": ["font-family", "font-style", "font-variant", "font-weight"],
"answer": [0],
"expl": ""
},
{
"qt": ["frontend", "javascript"],
"q": "Melyik változónév érvénytelen a JavaScript nyelvben?",
"options": ["let 10legjobbAjanlat", "let var$", "let _myVar", "let kerdesSzam50"],
"answer": [0],
"expl": "JavaScript-változónév nem kezdődhet számmal.<p/>"
},
{
"qt": ["frontend", "css"],
"q": "Melyik CSS-tulajdonságnak nincs hatása a sorközi (inline) elemre?",
"options": ["font-size", "font", "margin-top", "color"],
"answer": [2],
"expl": ""
},
{
"qt": ["frontend", "javascript"],
"q": "Mi lesz az eredménye a következő JavaScript-kódnak?",
"qb": "\n[1, 2, 3] == [1, 2, 3]\n",
"options": ["undefined", "null", "true", "false"],
"answer": [3],
"expl": ""
},
{
"qt": ["frontend", "javascript"],
"q": "Mi lesz az eredménye a következő JavaScript-kódnak?",
"qb": "\nvar number = 100;\nvar str = number.toString() + 200;\nconsole.log(str);\n",
"options": ["300", "100200", "\"300\"", "NaN"],
"answer": [1],
"expl": ""
},
{
"qt": ["frontend", "javascript"],
"q": "Mi lesz az eredménye a következő JavaScript-kódnak?",
"qb": "\n3**3\n",
"options": ["NaN", "27", "9", "type error"],
"answer": [1],
"expl": "A <code>**</code> a hatványképzés operátora."
},
{
"qt": ["frontend", "javascript"],
"q": "Mi lesz a következő  JavaScript-függvény eredménye?",
"qb": "\nfunction adder(a, b) {\n  b = b || 10;\n  return a + b;\n}\n\nadder(6)\n",
"options": ["NaN", "16", "6", "undefined"],
"answer": [1],
"expl": ""
},
{
"qt": ["frontend", "javascript"],
"q": "Milyen a hatóköre a <code>myName</code> változónak?",
"qb": "\n\nvar myName = \"Gömbi\";\nfunction myFunction() {\n  console.log(myName);\n}\n",
"options": ["lokális hatókörű", "függvényhatókörű", "globális hatókörű", "blokkhatókörű"],
"answer": [2],
"expl": ""
},
{
"qt": ["frontend", "javascript"],
"q": "Mi a <code>myArr</code> értéke?",
"qb": "\nlet yourArr = ['Mária', ['Sándor', 'József', 'Benedek'], 'Károly'];\nlet myArr = yourArr[1][0];   \n",
"options": ["Mária", "undefined", "null", "Sándor"],
"answer": [3],
"expl": ""
},
{
"qt": ["frontend", "javascript"],
"q": "Mi lesz az eredménye a következő JavaScript-kódnak?",
"qb": "\ntypeof true\n",
"options": ["true", "object", "boolean", "NaN"],
"answer": [2],
"expl": ""
},
{
"qt": ["frontend", "javascript"],
"q": "Mi lesz az eredménye a következő JavaScript-kódnak?",
"qb": "\n\"szék\" > \"ágy\"\n",
"options": ["true", "NaN", "undefined", "false"],
"answer": [3],
"expl": ""
},
{
"qt": ["frontend", "javascript"],
"q": "Hány alert üzenet fog megjelenni?",
"qb": "\nfor (let i = 0; i < 3; i++) {\n  alert(i);\n}\n",
"options": ["1", "0", "3", "2"],
"answer": [2],
"expl": ""
},
{
"qt": ["frontend", "javascript"],
"q": "Melyik NEM vezérlési szerkezet a JavaScriptben?",
"options": ["szekvencia", "szelekció", "iteráció", "deklaráció"],
"answer": [3],
"expl": "" 
},
{
"qt": ["frontend", "css"],
"q": "Melyik CSS-tulajdonsággal alakíthatod át a betű alakját nagybetűssé?",
"options": ["text-decoration: uppercase", "text-transform: capitalize", "font-variant: capitalize", "text-transform: uppercase"],
"answer": [3],
"expl": ""
},
{
"qt": ["frontend", "javascript"],
"q": "Mi lesz az eredménye a következő JavaScript-kifejezésnek?",
"qb": "\"\" + 5 + 0",
"options": ["undefined", "null", "\"50\"", "5"],
"answer": [2],
"expl": ""
},
{
"qt": ["frontend", "javascript"],
"q": "Melyik az egyetlen érvényes JavaScript-változónév az alábbiak közül?",
"options": ["let char", "let default", "let return", "let false"],
"answer": [0],
"expl": ""
},
{
"qt": ["frontend", "javascript"],
"q": "Mi lesz az eredménye a következő JavaScript-kódnak?",
"qb": "\nparseFloat('21dfdfrWE') + parseFloat('6klkop')\n",
"options": ["216", "27", "NaN", "TypeError"],
"answer": [1],
"expl": "" 
},
{
"qt": ["frontend", "javascript"],
"q": "Mi a debugging?",
"options": ["léptetés/eltolás", "érvényesítés", "hibakeresés", "kiszervezés"],
"answer": [2],
"expl": ""
},
{
"qt": ["frontend", "javascript"],
"q": "Melyik adattípust NEM soroljuk az egyszerű (primitív) típusok közé?",
"options": ["a logikai (boolean) adattípust", "az objektum adattípust", "a szám adattípust", "a sztring adattípust"],
"answer": [1],
"expl": "Az objektum összetett adattípus."
},
{
"qt": ["frontend", "css"],
"q": "Melyik színkód NEM a fehér színt adja eredményül?",
"options": ["rgb(255,255,255)", "#FFFFFF", "#FFF", "rgb(0%,0%,0%)"],
"answer": [3],
"expl": "Ha az összes (vörös-zöld-kék) összetevő értéke nulla, az eredmény fekete; ha mindegyik maximális értékű, az eredmény fehér."
},
{
"qt": ["frontend", "javascript"],
"q": "Mi lesz az eredménye a következő Javascript-sztringmetódusnak?",
"qb": "\nlet irKozmondas=\"Hol szeretet van, ott könnyű megfelezni a krumplit.\";\nirKozmondas.indexOf(\"szeretet\");",
"options": ["3", "5", "4", "8"],
"answer": [2],
"expl": "Az indexOf(\"sztring\") metódus keresi az argumentumként megadott sztringet. Visszatérési értéke a megtalált pozíció, ha nem találta meg, akkor -1."
},
{
"qt": ["frontend", "css"],
"q": "Melyik CSS-kijelölő jelöli ki a leszármazottakat?",
"options": ["div ol", "div > ol", "div + ol", "div ~ ol"],
"answer": [0],
"expl": "Szóközzel választjuk el az elemeket, ha az egy másik elem leszármazottja: <code>table tr td div p {color: red;}</code>"
},
{
"qt": ["frontend", "javascript"],
"q": "Mi lesz az értéke az <code>ujSzam</code> változónak?",
"qb": "\nlet eredetiSzam = 96.63856;\nlet ujSzam = eredetiSzam.toPrecision(3)\n",
"options": ["\"96.6\"", "\"96.638\"", "\"96.639\"", "\"97\""],
"answer": [0],
"expl": "A <code>toPrecision()</code> metódus egy számot kerekít az argumentumként megadott számú számjegyre, amelyet karakterláncként ad vissza. Ha az argumentum értéke kisebb mint az egész számjegyek száma, exponenciális (tudományos) jelölésű értéket ad vissza."
},
{
"qt": ["frontend", "javascript"],
"q": "Melyik elem NEM kisbetű-nagybetű érzékeny?",
"options": ["JavaScript-változók", "JavaScript-utasítások", "HTML-attribútumértékek", "CSS-tulajdonságnevek"],
"answer": [3],
"expl": "A CSS-tulajdonságnevek nem érzékenyek a kisbetű-nagybetű különbségre: <code>pre { ColoR: PLum; }</code>"
},
{
"qt": ["frontend", "javascript"],
"q": "Melyik NEM összehasonlító operátor a JavaScriptben?",
"options": ["!=", "<=", "==", "=>"],
"answer": [3],
"expl": "A nagyobb vagy egyenlő operátor helyes írásmódja: <code>>=</code>"
},
{
"qt": ["frontend", "javascript"],
"q": "Mi a probléma az alábbi JavaScript-kóddal?",
"qb": "\nlet a = 20; \nlet szamVizsgalat = (a % 2 = 0) ? \"PÁROS\" : \"PÁRATLAN\"; ",
"options": ["hibás operátorhasználat", "idézőjelhiány", "zárójelfelesleg", "zárójelhiány"],
"answer": [0],
"expl": "Egy egyenlőségjel az értékadás operátora, az egyenlőséget kettő vagy három jellel vizsgáljuk: az <code>a % 2 = 0</code> helyesen <code>a % 2 == 0</code>."
},
{
"qt": ["frontend", "javascript"],
"q": "Mi lesz a következő JavaScript-függvény eredménye?",
"qb": "for (let szam = 1; szam <= 10; szam++) {\n  document.write (szam + \" \");\n  if (szam % 5 == 0)\nbreak;\n}\n",
"options": ["1 2 3 4", "1 2 3 4 5", "1 2 3 4 5 6 7 8 9", "1 2 3 4 5 6 7 8 9 10"],
"answer": [1],
"expl": "A <code>break</code> utasítás hatására az értelmező az adott vezérlési szerkezetből kilép, vagy a kapcsos zárójel utáni első utasítással folytatja a program végrehajtását."
},
{
"qt": ["frontend", "javascript"],
"q": "Mi lesz a következő JavaScript-függvény eredménye?",
"qb": "\nfor (let szam = 1; szam < 7; szam++) {\nif (szam == 5)\ncontinue;\ndocument.write (szam + \" \");\n}\n",
"options": ["1 2 3 4 5 6 7", "1 2 3 4 6 7", "1 2 3 4 5 6", "1 2 3 4 6"],
"answer": [3],
"expl": "A <code>break</code> utasításhoz hasonlóan a <code>continue</code> is leállítja a ciklus futását ha a feltétel igaz, de utána tovább folytatódik a hátralévő ismétlésekkel."
},
{
"qt": ["frontend", "javascript"],
"q": "Mi lesz a következő JavaScript-kód eredménye?",
"qb": "\nlet szoveg = \"Lesz ez még így se!\";\nlet szovegResz = szoveg.slice(-1);\ndocument.write(szovegResz);\n",
"options": ["undefined", "se!", "!", "null"],
"answer": [2],
"expl": "A <code>slice()</code> metódus az adott indextől visszaadja egy sztring értékeit. Ha az argumentum értéke < 0, akkor a sztring hosszától visszafelé számolja karakterpozíciókat."
},
{
"qt": ["frontend", "javascript"],
"q": "Mi lesz az eredménye a következő JavaScript-kódnak?",
"qb": "\nlet a = 9;\nlet b = ++a-3; \nconsole.log(b);\n",
"options": ["4", "5", "6", "7"],
"answer": [3],
"expl": "Prefix operátort (++a) használva az operandus 1-gyel megnövelt értékét kapjuk vissza, így a 10-3 művelet eredeménye a helyes válasz."
},
{
"qt": ["frontend", "javascript"],
"q": "Melyik JSON-metódus készít JSON-adatállományból JavaScript-objektumot?",
"options": ["JSON.stringify()", "JSON.use() ", "JSON.parse()", "JSON.modify()"],
"answer": [2],
"expl": "A <code>JSON.parse()</code> dolgozza fel és alakítja át a JSON-adatokat JavaScript-objektumokká."
},
{
"qt": ["frontend", "css"],
"q": "A szegély (border) és a tartalom között melyik CSS-tulajdonsággal növelhetjük a távolságot?",
"options": ["margin", "width", "padding", "word-spacing"],
"answer": [2],
"expl": "Erre a feladatra a <code>padding</code> (belső margó, eltartás) CSS-tulajdonságot használjuk."
},
{
"qt": ["frontend", "git"],
"q": "Mi jellemző a Git <code>untracked</code> állapotú fájljára?",
"options": ["a Git követi a fájlt, és mi módosítottuk", "a Git követi a fájlt, de mi nem módosítottuk azt", "a Git követi a fájlt, ha módosítottuk, a módosítás be fog kerülni az adatbázisba", "a Git nem követi a fájlt"],
"answer": [3],
"expl": "Ha a fájl státusza <code>untracked</code>, a Git nem követi a fájlt."
},
{
"qt": ["frontend", "html"],
"q": "A következő <code>input</code> mezőbe melyik karaktert írhatod be az alábbiak közül?",
"qb": "&lt;input id=&quot;number&quot; type=&quot;number&quot;&gt;",
"options": ["%", "*", "e", "#"],
"answer": [2],
"expl": "Ha az <code>input</code> mező <code>type</code> attribútuma <code>number</code> értékű, a számok, a plusz- és a mínuszjel mellett az e betű használata engedélyezett a tudományos (exponenciális) alak beírásához: 1.2e+3."
},
{
"qt": ["frontend", "html"],
"q": "Mi a HTML-táblázat fejléccellájának címkéje?",
"options": ["&lt;header&gt;", "&lt;thead&gt;", "&lt;th&gt;", "&lt;hr&gt;"],
"answer": [2],
"expl": "A táblázat fejléccelláját <code>th</code> címkével formázzuk."
},
{
"qt": ["frontend", "javascript"],
"q": "Mi lesz a következő JavaScript-kód eredménye?",
"qb": "\nlet nevsor = ['Jóska', 'Pista'];\nnevsor.push('Anna');\n",
"options": ["Jóska, Pista, Anna", "Jóska, Pista", "3", "Anna"],
"answer": [2],
"expl": "A push() metódus új elem(ek)et szúr be a tömb utolsó eleme után, a visszatérési érték pedig a tömb új hossza."
},
{
"qt": ["frontend", "javascript"],
"q": "Mi lesz a következő JavaScript-kód eredménye?",
"qb": "\n6 + 1 + 2 + \"1\"\n",
"options": ["91", "6121", "10", "NaN"],
"answer": [0],
"expl": "Az összeadást a JavaScript balról jobbra végzi: 6 + 1 + 2 = 9, majd a szám és a sztring találkozásakor összefűzést végez a plusz operátor."
},
{
"qt": ["frontend", "javascript"],
"q": "Melyik JavaScript-számmetódussal tudod beállítani a tizedesjegyek számát?",
"options": ["toPrecision()", "toFixed()", "parseFloat()", "parseInt()"],
"answer": [1],
"expl": "A <code>toFixed()</code> metódus kerekít megadott számú tizedesjegyre."
},
{
"qt": ["frontend", "javascript"],
"q": "Mi lesz a lista tömb tartalma a kód futtatása után?",
"qb": "\nlet lista = [undefined, [], 0, ''].filter(elem => elem);\n",
"options": ["undefined, \[\], 0, \'\'", "undefined, \[\]", "\[\]", "\'\'"],
"answer": [2],
"expl": "A <code>filter()</code> metódus használatakor a <code>true</code> értékkel visszatérő elemek szűrését tudjuk az <code>x => x<code>, vagy az <code>x => x(Boolean)<code> feltétellel elvégezni."
}
]
