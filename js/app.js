// -------------------- ELEMEK --------------------
const homeBox = document.querySelector(".home-box");
const quizBox = document.querySelector(".quiz-box");
const resultBox = document.querySelector(".result-box");
const questionNumber = document.querySelector(".question-number");
const questionText = document.querySelector(".question-text");
const optionContainer = document.querySelector(".option-container");
const answersIndicatorContainer =
  document.querySelector(".answers-indicator");
const explanationContainer =
  document.querySelector(".explanation");
// -------------------- ÁLLAPOT --------------------
/*let dailyQuestions = [];*/
let activeQuiz = [];
let questionCounter = 0;
let correctAnswers = 0;
let attempt = 0;
let currentQuestion = null;
let answered = false;
let QUESTIONS_PER_GAME = 10;
// -------------------- NAPI KÉRDÉSEK --------------------
const quiz = [
  ...question,
  ...sorkerdes
];
const now = new Date();
const today = `${now.getMonth() + 1}-${now.getDate()}`;
function loadDailyQuestions() {
  activeQuiz = quiz.filter(
      q => q.date === today);
  if (activeQuiz.length === 0) {
    questionText.innerHTML =
      "Ma még nincs kvízkérdés.";
    return false;
  }
  return true;
}
// -------------------- START --------------------


function startDailyQuiz() {
  if (!loadDailyQuestions()) {
    return;
  }
  homeBox.classList.add("hide");
  quizBox.classList.remove("hide");
  questionCounter = 0;
  correctAnswers = 0;
  attempt = 0;
  createIndicators();
  loadQuestion();
}
// -------------------- JELZŐK --------------------
function createIndicators() {
  answersIndicatorContainer.innerHTML = "";
  activeQuiz.forEach(() => {
    const div = document.createElement("div");
    answersIndicatorContainer.appendChild(div);
  });
}
function updateIndicator(type) {
  answersIndicatorContainer
  .children[questionCounter]
  .classList.add(type);
}
// -------------------- KÉRDÉS BETÖLTÉS --------------------
function loadQuestion() {
  answered = false;
  currentQuestion = activeQuiz[questionCounter];
  const infoText =
    currentQuestion.type === "sort"
      ? " ↕️ Húzd sorrendbe!"
      : " 🌟 Holnap új kihívások érkeznek!";
  questionNumber.innerHTML =
    `${questionCounter + 1} / ${activeQuiz.length}${infoText}`;
  optionContainer.innerHTML = "";
  if (currentQuestion.type === "sort") {
    loadSortQuestion(currentQuestion);
  } else {
    loadClassicQuestion(currentQuestion);
  }
}
// -------------------- FELELETVÁLASZTÓS --------------------
function loadClassicQuestion(q) {
  questionText.innerHTML = q.question;

  const shuffledOptions =
    q.options.map((option, index) => ({
      text: option,
      originalIndex: index
    }));

  for (let i = shuffledOptions.length - 1; i > 0; i--) {
    const j = Math.floor(
      Math.random() * (i + 1)
    );

    [shuffledOptions[i], shuffledOptions[j]] =
    [shuffledOptions[j], shuffledOptions[i]];
  }

  shuffledOptions.forEach((item) => {
    const div = document.createElement("div");
    div.className = "option";
    div.innerHTML = item.text;
    div.addEventListener("click", () => {
      if (answered)
        return;
      answered = true;
      attempt++;
      if (item.originalIndex === q.answer) {
        div.classList.add("correct");
        correctAnswers++;
        q.wasCorrect = true;
        updateIndicator("correct");
      } else {
        div.classList.add("wrong");
        q.wasCorrect = false;
        updateIndicator("wrong");
      }
    });
    optionContainer.appendChild(div);
  });
}
// -------------------- SORRENDEZŐS --------------------
function loadSortQuestion(q) {
  questionText.innerHTML = q.title;
  optionContainer.innerHTML = `
    <ul id="sortable" class="sortable-list">
    ${q.items.map(item => `
      <li data-label="${item.label}">
          ${item.text}
      </li>
    `).join("")}
    </ul>
`;
  Sortable.create(
    document.getElementById("sortable"), {
    animation: 150
  });
  document
  .getElementById("checkSort")
  .addEventListener("click", () => {
    if (answered)
      return;
    answered = true;
    attempt++;
    const userOrder =
      [...document.querySelectorAll("#sortable li")]
    .map(li => li.dataset.label);
    const correct =
      JSON.stringify(userOrder) ===
      JSON.stringify(q.correctOrder);
    if (correct) {
      correctAnswers++;
      q.wasCorrect = true;
      updateIndicator("correct");
    } else {
      q.wasCorrect = false;
      updateIndicator("wrong");
    }
  });
}
// -------------------- KÖVETKEZŐ --------------------
function nextQuestion() {
  // Sorkérdés automatikus értékelése
  if (
      currentQuestion.type === "sort" &&
      !answered
  ) {
      answered = true;
      attempt++;
      const userOrder =
          [...document.querySelectorAll("#sortable li")]
          .map(li => li.dataset.label);
      const correct =
          JSON.stringify(userOrder) ===
          JSON.stringify(currentQuestion.correctOrder);
      if (correct) {
          correctAnswers++;
          currentQuestion.wasCorrect = true;
          updateIndicator("correct");
      } else {
          currentQuestion.wasCorrect = false;
          updateIndicator("wrong");
      }
  }
  if(!answered){
      alert("Előbb válaszolj!");
      return;
  }
  questionCounter++;
  if(questionCounter >= activeQuiz.length){
      quizOver();
      return;
  }
  loadQuestion();
}

// -------------------- EREDMÉNY --------------------
function quizOver() {
  quizBox.classList.add("hide");
  resultBox.classList.remove("hide");
  showResults();
}
function showResults() {
  resultBox.querySelector(".total-question")
  .innerHTML = activeQuiz.length;
  resultBox.querySelector(".total-attempt")
  .innerHTML = attempt;
  resultBox.querySelector(".total-correct")
  .innerHTML = correctAnswers;
  resultBox.querySelector(".total-wrong")
  .innerHTML = attempt - correctAnswers;
  const percentage =
    (correctAnswers / activeQuiz.length) * 100;
  resultBox.querySelector(".percentage")
  .innerHTML = percentage.toFixed(2) + "%";
  resultBox.querySelector(".total-score")
  .innerHTML =
`${correctAnswers} / ${activeQuiz.length}`;
  let html = "";
  activeQuiz.forEach(item => {
    html += `
      <p>
        <strong>
          ${item.question || item.title}
        </strong>
        ${item.wasCorrect ? "✅" : "❌"}
      </p>
    `;
    if (item.type === "sort") {
      html += `
      <p>
      <strong>Helyes sorrend:</strong>
      ${item.correctOrder.join(" ⇒ ")}
      </p>
      `;
      html += `
      <p>
      ${item.learnMore?.summary || ""}
      </p>
      `;
    } else {
      html += `
      <p>
      <strong>Magyarázat:</strong>
      ${item.expl}
      </p>
      `;
    }
    html += "<hr>";
  });
  explanationContainer.innerHTML = html;
}

function startGame() {
  homeBox.classList.add("hide");
  quizBox.classList.remove("hide");
  questionCounter = 0;
  correctAnswers = 0;
  attempt = 0;
  createIndicators();
  loadQuestion();
}

function startGame() {
  questionCounter = 0;
  correctAnswers = 0;
  attempt = 0;
  homeBox.classList.add("hide");
  resultBox.classList.add("hide");
  quizBox.classList.remove("hide");
  createIndicators();
  loadQuestion();
}

function startSortQuiz() {
  gameMode = "sort";
  const shuffled = [...sorkerdes];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(
        Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] =
      [shuffled[j], shuffled[i]];
  }
  activeQuiz = shuffled.slice(0, QUESTIONS_PER_GAME);
  startGame();
}

// -------------------- KEZDŐOLDAL --------------------
function goToHome() {
  resultBox.classList.add("hide");
  homeBox.classList.remove("hide");
}
// -------------------- ESEMÉNYEK --------------------
window.addEventListener("DOMContentLoaded", () => {

  document
  .getElementById("startDailyQuiz")
  .addEventListener("click", startDailyQuiz);
  document
  .getElementById("startSort")
  .addEventListener("click", startSortQuiz);
  document
  .getElementById("next")
  .addEventListener("click", nextQuestion);
  document
  .getElementById("gotohome")
  .addEventListener("click", goToHome);
  document
  .getElementById("gotohome2")
  .addEventListener("click", goToHome);
  document
/*  .getElementById("tryagain")
  .addEventListener("click", restartGame);
  document
  .getElementById("tryagain2")
.addEventListener("click", restartGame); */
});
