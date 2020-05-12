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

// Checking to see whether the user response is true
function displayGrade(event) {
  console.log(questionIndex);
  var correctAnswer = questionArray[questionIndex].correct;
  console.log(correctAnswer);
  if (event.target.textContent === correctAnswer) {
    console.log("correct");
    navigate();
  } else {
    // Adjust timer by -10 seconds
    secondsLeft -= 10;
    navigate();
  }
}

// Game Play function
function game() {
  console.log(questionIndex, "current index");
  // Hide the start button
  document.querySelector("#start").style.display = "none";

  // Add style to variables
  buttonEl1.classList.remove("d-none");
  buttonEl2.classList.remove("d-none");
  buttonEl3.classList.remove("d-none");
  buttonEl4.classList.remove("d-none");
  buttonEl1.classList.add("d-block");
  buttonEl2.classList.add("d-block");
  buttonEl3.classList.add("d-block");
  buttonEl4.classList.add("d-block");

  // Clear variable content
  cardTitleEl.innerHTML = "";
  cardTextEl.innerHTML = "";

  console.log(questionIndex);
  // Add content to variables
  var temp = questionIndex;
  cardTitleEl.innerHTML = "Question #" + (temp + 1);
  cardTextEl.textContent = questionArray[questionIndex].question;
  buttonEl1.textContent = questionArray[questionIndex].answers[0];
  buttonEl2.textContent = questionArray[questionIndex].answers[1];
  buttonEl3.textContent = questionArray[questionIndex].answers[2];
  buttonEl4.textContent = questionArray[questionIndex].answers[3];

  // Append variable content to DOM elements
  buttonArrayEl.appendChild(buttonEl1);
  buttonArrayEl.appendChild(buttonEl2);
  buttonArrayEl.appendChild(buttonEl3);
  buttonArrayEl.appendChild(buttonEl4);

  // Listen for answer button click
  buttonEl1.addEventListener("click", displayGrade);
  buttonEl2.addEventListener("click", displayGrade);
  buttonEl3.addEventListener("click", displayGrade);
  buttonEl4.addEventListener("click", displayGrade);
}

//Created a function to call back to check for correct answer and move forwards in the array
function navigate() {
  // Advance to next question by increasing the questionIndex value
  questionIndex++;
  // Verify condition of next question and
  if (questionIndex !== questionArray.length) {
    game();
  } else {
    endGame();
  }
}

// Function to run when the game has ended either by time or by the user going through the answers
function endGame() {
  // Resets the timer interval
  clearInterval(timer);
  // Prompt for user initials
  user = prompt("Please enter your initials here:");
  // Sets the seconds left as the final score
  score = secondsLeft;
  // Stores values of user and score to localStorage
  localStorage.setItem("score", secondsLeft);
  localStorage.setItem("user", user);
}

// Start button listeners
startBtn.addEventListener("click", function () {
  game();
  startTimer();
});
