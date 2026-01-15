// DOMS ELEMENTS  ---------------------------------------------------------
const dom_quiz = document.querySelector("#quiz");
const dom_question = document.querySelector("#question");
const dom_choiceA = document.querySelector("#A");
const dom_choiceB = document.querySelector("#B");
const dom_choiceC = document.querySelector("#C");
const dom_choiceD = document.querySelector("#D");
const dom_score = document.querySelector("#score");
const dom_start = document.querySelector("#start");
const dom_score_p = document.querySelector("#score_p");

dom_start.addEventListener("click", onStart);

// DATA  ---------------------------------------------------------
let questions = [
  {
    title: "What does HTML stand for?",
    choiceA: "Hi Thierry More Laught",
    choiceB: "How To move Left",
    choiceC: "Ho Theary Missed the Laundry !",
    choiceD: "Hypertext Markup Language",
    correct: "D",
  },
  {
    title: "What does CSS stand for?",
    choiceA: "Cisco and Super Start",
    choiceB: "Ci So Sa",
    choiceC: "Cascading Style Sheets ",
    choiceD: "I don't know !",
    correct: "C",
  },
  {
    title: "What does JS stand for?",
    choiceA: "Junior stars",
    choiceB: "Justing Star",
    choiceC: "Javascript",
    choiceD: "RonanScript",
    correct: "C",
  },
];
let runningQuestionIndex = 0;
let score = 0;

// FUNCTIONS ---------------------------------------------------------

// Hide a given element
function hide(element) {
  // TODO
  element.style.display = "none";
}

function show(element) {
  // TODO
  element.style.display = "block";
}

function onStart() {
  runningQuestionIndex = 0;
  score = 0;
  // Render the current question
  // Display the quiz view,
  hide(dom_start);
  hide(dom_score);
  show(dom_quiz);
  renderQuestion();
}

function renderQuestion() {
  // Render the current question on the quiz view
  let q = questions[runningQuestionIndex];
  dom_question.innerHTML = "<p>" + q.title + "</p>";
  dom_choiceA.innerHTML = q.choiceA;
  dom_choiceB.innerHTML = q.choiceB;
  dom_choiceC.innerHTML = q.choiceC;
  dom_choiceD.innerHTML = q.choiceD;
}

function onPlayerSubmit(answer) {
  // Update the score, display the next question or the score view
  let question = questions[runningQuestionIndex];
  if (answer === question.correct) {
    score++;
  }
  
  if (runningQuestionIndex < questions.length - 1) {
    runningQuestionIndex++;
    renderQuestion();
  } else {
    showScore();
  }
}

function showScore() {
  hide(dom_quiz);
  show(dom_score);
  
  // calculate the amount of question percent answered by the user
  const scorePerCent = Math.round((100 * score) / questions.length);
  
  // choose the comment based on the scorePerCent
  let comment = "";

  if (scorePerCent <= 20) {
    comment = "HUMM !";
  } else if (scorePerCent <= 40) {
    comment = "YOU CAN IMPROVE !";
  } else if (scorePerCent <= 60) {
    comment = "NOT BAD BUT... !";
  } else if (scorePerCent <= 80) {
    comment = "GOOD !";
  } else {
    comment = "CRAZY AMAZING !";
  }

  dom_score_p.textContent = `${comment} You scored ${score} out of ${questions.length} (${scorePerCent}%)`;
}


// FUNCTIONS ---------------------------------------------------------
show(dom_start);
hide(dom_quiz);
hide(dom_score);
