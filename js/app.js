// webshala: https://www.youtube.com/watch?v=J8QbjXdVl9c nyomán 

const questionNumber = document.querySelector(".question-number");
const questionText = document.querySelector(".question-text");
const questionBlock = document.querySelector(".question-block");
const qblData = document.querySelector(".qbl-data");
const optionContainer = document.querySelector(".option-container");
const answersIndicatorContainer = document.querySelector(".answers-indicator");
const explanationContainer = document.querySelector(".explanation");
const homeBox = document.querySelector(".home-box");
const quizBox = document.querySelector(".quiz-box");
const resultBox = document.querySelector(".result-box");
const questionLimit = 12;

let questionCounter = 0;
let currentQuestion;
let availableQuestions = [];
let availableOptions = [];
let correctAnswers = 0;
let attempt = 0;

// a kérdéseket az 'availableQuestions' tömbbe helyezzük
function setAvailableQuestions() {
  const totalQuestion = quiz.length;
  for (let i = 0; i < totalQuestion; i++) {
    availableQuestions.push(quiz[i]);
  }
}

// kérdésszám, kérdések és válaszok beállítása
function getNewQuestion() {
  // kérdésszám beállítása
  questionNumber.innerHTML = (questionCounter + 1) + " / " + questionLimit + ". kérdés";
  // kérdés szövegének beállítása
  // véletlenszerű kérdéslekérdezés
  const questionIndex = availableQuestions[Math.floor(Math.random() * availableQuestions.length)];
  currentQuestion = questionIndex;
  questionText.innerHTML = currentQuestion.q;
  // a 'questionIndex' pozíciójának kinyerése az 'availableQuestion' tömbből
  const index1 = availableQuestions.indexOf(questionIndex);
  // eltávolítja a 'questionIndex' értéket az 'availableQuestion' tömbből, hogy a kérdés ne ismétlődjön meg
  availableQuestions.splice(index1,1);
  if (currentQuestion.hasOwnProperty("img")) { 
    const img = document.createElement("img"); 
    img.src = currentQuestion.img; 
    questionText.appendChild(img); 
  }
  if (currentQuestion.hasOwnProperty("qb")) {
    questionBlock.classList.remove("hide"); 
    qblData.innerHTML = currentQuestion.qb;
    Prism.highlightAll();
  } else {
    qblData.innerHTML = "";
    questionBlock.classList.add("hide"); 
  } 
  
  // válaszok beállítása
  // a válaszok számának lekérdezése
  const optionLen = currentQuestion.options.length;
  // a válaszokat az 'availableOptions' tömbbe tesszük
  for (let i = 0; i < optionLen; i++) {
    availableOptions.push(i);
  }
  optionContainer.innerHTML = '';
  let animationDelay = 0.15;
  // válaszok létrehozása html-ben
  for (let i = 0; i < optionLen; i++) {
    // véletlenszerű válaszsorrend
    const optonIndex = availableOptions[Math.floor(Math.random() * availableOptions.length)];
    // az 'optonIndex' pozíciójának kinyerése az 'availableOptions' tömbből
    const index2 = availableOptions.indexOf(optonIndex);
    // távolítsuk el az 'optonIndex'-et az 'availableOptions' tömbből, hogy a válasz ne ismétlődjön meg
    availableOptions.splice(index2,1);
    const option = document.createElement("div");
    option.innerHTML = currentQuestion.options[optonIndex];
    option.id = optonIndex;
    option.style.animationDelay = animationDelay + "s";
    animationDelay = animationDelay + 0.15;
    option.className = "option";
    optionContainer.appendChild(option);
    option.setAttribute("onclick","getResult(this)");
  }
   questionCounter++;
}


// az aktuális próbálkozás eredményének lekérdezése
function getResult(element) {
  const id = parseInt(element.id);
  // a válasz kinyerése a kattintott opció azonosítójának összehasonlításával
  if (id == currentQuestion.answer) {
    // zöld színűre állítja a helyes választ
    element.classList.add("correct");
    // hozzáadjuk a 'correct' jelzőt a helyes jelöléshez
    updateAnswerIndicator("correct");
    correctAnswers++;
  } else {
    // állítsuk be a piros háttérszínt a helytelen válaszhoz
    element.classList.add("wrong");
    // adjunk 'wrong' jelzőt a hibás jelöléshez
    updateAnswerIndicator("wrong");
    // ha a válasz helytelen, akkor a helyes válasz megjelenítése a zöld szín hozzáadásával
    const optionLen = optionContainer.children.length;
    for (let i = 0; i < optionLen; i++) {
      if (parseInt(optionContainer.children[i].id) === currentQuestion.answer) {
        optionContainer.children[i].classList.add("correct");
      }
    }
  }
  attempt++; 
  unclickableOptions();
}
// tedd a többi választ kattinthatatlanná, ha a felhasználó kiválasztott már egy választ (korlátozzuk a felhasználót abban, hogy megváltoztassa a válaszát)
function unclickableOptions() {
  const optionLen = optionContainer.children.length;
  for (let i = 0; i < optionLen; i++) {
    optionContainer.children[i].classList.add("already-answered");
  }
}

function answersIndicator() {
  answersIndicatorContainer.innerHTML = "";
  const totalQuestion = questionLimit;
  for (let i = 0; i < totalQuestion; i++) {
    const indicator = document.createElement("div");
    answersIndicatorContainer.appendChild(indicator);
  }
}

function updateAnswerIndicator(markType) {
  answersIndicatorContainer.children[questionCounter-1].classList.add(markType);
}

function next() {
  if (questionCounter === questionLimit) {
    quizOver();
  } else {
    getNewQuestion();
  }
}

function quizOver() {
  // a quizBox elrejtése
  quizBox.classList.add("hide");
  // mutassa az eredményBoxot
  resultBox.classList.remove("hide");
  quizResult();
}
  
  // a kvízeredmény megjelenítése
  function quizResult() {
    resultBox.querySelector(".total-question").innerHTML = questionLimit;
    resultBox.querySelector(".total-attempt").innerHTML = attempt;
    resultBox.querySelector(".total-correct").innerHTML = correctAnswers;
    resultBox.querySelector(".total-wrong").innerHTML = attempt - correctAnswers;
    const percentage = (correctAnswers / questionLimit) * 100;
    resultBox.querySelector(".percentage").innerHTML = percentage.toFixed(2) + "%";
    resultBox.querySelector(".total-score").innerHTML = correctAnswers + " / " + questionLimit;
  }


function resetQuiz() {
  questionCounter = 0;
  correctAnswers = 0;
  attempt = 0;
  availableQuestions.length = 0;
}

function tryAgainQuiz() {
  // rejtsük el a resultBoxot
  resultBox.classList.add("hide");
  // mutassuk meg a quizBoxot
  quizBox.classList.remove("hide");
  resetQuiz();
  startQuiz();
}

 function goToHome() {
  // rejtsük el a resultBoxot
  resultBox.classList.add("hide");
  // a homeBox megjelenítése
  homeBox.classList.remove("hide");
  resetQuiz();
}


// #### KEZDŐPONT #####


function startQuiz() {
  // homeBox elrejtése
  homeBox.classList.add("hide");
  // mutasd a quizBoxot
  quizBox.classList.remove("hide");
  // először az összes kérdést beállítjuk az availableQuestions tömbbe
  setAvailableQuestions();
  // másodszor meghívjuk a getNewQuestion() függvényt
  getNewQuestion();
  // a válaszok mutatójának létrehozásához
  answersIndicator();
}

window.onload = function() {
  homeBox.querySelector(".total-question").innerHTML = questionLimit + " / " + quiz.length;
};
