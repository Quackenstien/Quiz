var timerEl = document.getElementById("countdown");
var high = document.getElementById("high");

function startCountdown() {
  var timeLeft = 5;

  var timeInterval = setInterval(function () {
    timerEl.textContent = timeLeft;
    timeLeft--;

    if (timeLeft === 0) {
      timerEl.textContent = "";
      speedRead();
      clearInterval(timeInterval);
    }
  }, 1000);
  return;
}

high.addEventListener("click", startCountdown);
