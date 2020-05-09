var timerEl = document.getElementById("countdown");
var highBtnEl = document.getElementById("highscores");
var startQuiz = document.getElementById("startquiz");
var questionOne = document.querySelector("#q1");
var answerOne = document.querySelector("#a1");
var answerTwo = document.querySelector("#a2");
var answerThree = document.querySelector("#a3");
var answerFour = document.querySelector("#a4");

var timeLeft = 5;
// document.getElementById("a1");

questions = [{ title: "who let the dogs out", answer: "" }];

function startCountdown() {
  var timeInterval = setInterval(function () {
    timeLeft--;
    timerEl.textContent = timeLeft;

    questionOne.textContent = "Question#2";
    answerOne.textContent = "phoebe";
    answerTwo.textContent = "cow";
    answerThree.textContent = "cow";
    answerFour.textContent = "cow";

    if (timeLeft === 0) {
      clearInterval(timeInterval);
    }
  }, 1000);
  return;
}

// function displayQuestions() {
//   questionOne.textContent = " Who is...?";
//   answerOne.textContent = "Bob";
// }

startQuiz.addEventListener("click", startCountdown);
// startQuiz.addEventListener("click", displayQuestions);
