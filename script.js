var timerEl = document.getElementById("countdown");
var highBtnEl = document.getElementById("highscores");
var startQuiz = document.getElementById("startquiz");
var questionOne = document.querySelector("#q1");
var answerOne = document.querySelector("#a1");
var answerTwo = document.querySelector("#a2");
var answerThree = document.querySelector("#a3");
var answerFour = document.querySelector("#a4");

var timeLeft = 5;

var allAnswers = { answer1: "who let the dogs out", answer2: "bob" };

function startCountdown() {
  var timeInterval = setInterval(function () {
    timeLeft--;
    timerEl.textContent = timeLeft;

    questionOne.textContent = "Not me...";
    answerOne.textContent = allAnswers.answer1;
    answerTwo.textContent = allAnswers.answer2;
    answerThree.textContent = "cow";
    answerFour.textContent = "cow";

    if (timeLeft === 0) {
      clearInterval(timeInterval);
    }
  }, 1000);
  return;
}

startQuiz.addEventListener("click", startCountdown);
