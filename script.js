var timerEl = document.getElementById("countdown");
var highBtnEl = document.getElementById("highscores");
var startQuiz = document.getElementById("startquiz");
var question = document.querySelector("#q1");
var tag = document.createElement("li");
var secondTag = document.createElement("li");
var thirdTag = document.createElement("li");
var fourthTag = document.createElement("li");
var tagBtn = document.createElement("button");
var tagBtn2 = document.createElement("button");
var tagBtn3 = document.createElement("button");
var tagBtn4 = document.createElement("button");
var listEl = document.querySelector("#listEl");

var timeLeft = 70;

var answerObj = {
  ans1: "who let the dogs out",
  ans2: "bob",
  ans3: "get",
  ans4: "tree",
  ans5: "hill",
  ans6: "cat",
  ans7: "dog",
  ans8: "chewy",
};

function questOne() {
  var timer = setInterval(function () {
    timeLeft--;
    timerEl.textContent = timeLeft;

    if (timeLeft === 0) {
      clearInterval(timer);
    }
  }, 1000);
  question.textContent = "Not me...";

  document.body.children[3].appendChild(tag);
  document.body.children[3].appendChild(secondTag);
  document.body.children[3].appendChild(thirdTag);
  document.body.children[3].appendChild(fourthTag);
  document.body.children[3].children[0].appendChild(tagBtn);
  document.body.children[3].children[1].appendChild(tagBtn2);
  document.body.children[3].children[2].appendChild(tagBtn3);
  document.body.children[3].children[3].appendChild(tagBtn4);

  tagBtn.textContent = answerObj.ans1;
  tagBtn2.textContent = answerObj.ans2;
  tagBtn3.textContent = answerObj.ans3;
  tagBtn4.textContent = answerObj.ans4;

  listEl.addEventListener("click", function (event) {
    event.preventDefault();
    if ((event.target = tagBtn.value)) {
      questTwo();
    } else {
      timeLeft-- * 10;
      questTwo();
    }
  });
}

function questTwo() {
  question.textContent = "Yes me...";

  document.body.children[3].appendChild(tag);
  document.body.children[3].appendChild(secondTag);
  document.body.children[3].appendChild(thirdTag);
  document.body.children[3].appendChild(fourthTag);
  document.body.children[3].children[0].appendChild(tagBtn);
  document.body.children[3].children[1].appendChild(tagBtn2);
  document.body.children[3].children[2].appendChild(tagBtn3);
  document.body.children[3].children[3].appendChild(tagBtn4);

  tagBtn.textContent = answerObj.ans5;
  tagBtn2.textContent = answerObj.ans6;
  tagBtn3.textContent = answerObj.ans7;
  tagBtn4.textContent = answerObj.ans8;

  listEl.addEventListener("click", function (event) {
    event.preventDefault();
    if ((event.target = tagBtn4)) {
      console.log("hi");
      // questThree();
    } else {
      timeLeft-- * 10;
      // questThree();
    }
  });
}

startQuiz.addEventListener("click", questOne);
