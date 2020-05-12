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
