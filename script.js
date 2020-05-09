var timerEl = document.getElementById("countdown");
var highBtnEl = document.getElementById("highscores");
var startQuiz = document.getElementById("startquiz");
var questionOne = document.querySelector("#q1");
// var answerOne = document.querySelector("#a1");
// var answerTwo = document.querySelector("#a2");
// var answerThree = document.querySelector("#a3");
// var answerFour = document.querySelector("#a4");
var tag = document.createElement("li");
var secondTag = document.createElement("li");
var thirdTag = document.createElement("li");
var fourthTag = document.createElement("li");
var tagBtn = document.createElement("button");
var tagBtn2 = document.createElement("button");
var tagBtn3 = document.createElement("button");
var tagBtn4 = document.createElement("button");

var timeLeft = 5;

var answerObj = {
  ans1: "who let the dogs out",
  ans2: "bob",
  ans3: "get",
  ans4: "tree",
};

function startCountdown() {
  var timeInterval = setInterval(function () {
    timeLeft--;
    timerEl.textContent = timeLeft;

    questionOne.textContent = "Not me...";
    // answerOne.textContent = answerObj.ans1;
    // answerTwo.textContent = answerObj.ans2;
    // answerThree.textContent = answerObj.ans3;
    // answerFour.textContent = answerObj.ans4;
    document.body.children[3].appendChild(tag);
    document.body.children[3].appendChild(secondTag);
    document.body.children[3].appendChild(thirdTag);
    document.body.children[3].appendChild(fourthTag);
    document.body.children[3].children[0].appendChild(tagBtn);
    document.body.children[3].children[1].appendChild(tagBtn2);
    document.body.children[3].children[2].appendChild(tagBtn3);
    document.body.children[3].children[3].appendChild(tagBtn4);

    console.log(event);

    tagBtn.textContent = answerObj.ans1;
    tagBtn2.textContent = answerObj.ans2;
    tagBtn3.textContent = answerObj.ans3;
    tagBtn4.textContent = answerObj.ans4;

    if (timeLeft === 0) {
      clearInterval(timeInterval);
    }
  }, 1000);
  return;
}

startQuiz.addEventListener("click", startCountdown);
