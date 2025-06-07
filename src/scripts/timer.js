const timerDisplay = document.getElementById('timer-display');
const startButton = document.getElementById('start-button');

let countdown;
let timeLeft = 15;

function updateTimerDisplay() {
  timerDisplay.textContent = "Действует: " + timeLeft + " сек.";
}

function startTimer() {
  clearInterval(countdown);

  timeLeft = 15;

  updateTimerDisplay();

  countdown = setInterval(() => {
    timeLeft--;
    updateTimerDisplay();
    if (timeLeft <= 0) {
      clearInterval(countdown);
      timerDisplay.textContent = "Время вышло!";
    }
  }, 1000);
}

startButton.addEventListener('click', () => {
  startTimer();
});

timerDisplay.textContent = 'Нажмите "закрыть" для запуска';