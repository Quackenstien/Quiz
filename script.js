// Create all necessary global variables for HTML elements
var cardTitleEl = document.querySelector(".card-title");
var cardTextEl = document.querySelector(".card-text");
var buttonArrayEl = document.querySelector(".btn-group-vertical");
var buttonEl1 = document.querySelector("#button1");
var buttonEl2 = document.querySelector("#button2");
var buttonEl3 = document.querySelector("#button3");
var buttonEl4 = document.querySelector("#button4");
var startBtn = document.querySelector("#start");
var timerEL = document.querySelector("#timer");

// Incremental counter index variables
var secondsLeft = 60;
var questionIndex = 0;
var timer;
var score;
var user;

// Array variable to contain the question objects
var questionArray = [
  {
    question: "How many vehicle do I own?",
    answers: ["a. Four", "b. One", "c. Ten", "d. Three"],
    correct: "d. Three",
  },
  {
    question: "What was the make of my first car?",
    answers: ["a. Toyota", "b. Honda", "c. Lexus", "d. Ford"],
    correct: "b. Honda",
  },
  {
    question: "How old was I when I bought my first car?",
    answers: ["a. 15", "b. 16", "c. 17", "d. 18"],
    correct: "a. 15",
  },
  {
    question: "What make(s) of vehicle do I currently own?",
    answers: ["a. Toyota", "b. Lexus", "c. Both a and b", "d. Ford"],
    correct: "c. Both a and b",
  },
  {
    question: "What is the next vehicle I am going to purchase?",
    answers: [
      "a. Toyota 4Runner",
      "b. Lexus Lc500",
      "c. Nissan GT-R",
      "d. Unsure",
    ],
    correct: "b. Lexus Lc500",
  },
];

// Timer function set to 1 second interval
function startTimer() {
  timer = setInterval(function () {
    secondsLeft--;
    timerEL.textContent = "Seconds Left: " + secondsLeft;
    if (secondsLeft === 0) {
      endGame();
    }
  }, 1000);
}
