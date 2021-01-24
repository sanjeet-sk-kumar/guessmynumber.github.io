'use strict';
const messageEl = document.querySelector('.message');
const currentScoreEl = document.querySelector('.score');
const highScoreEl = document.querySelector('.highscore');
const checkBtnEl = document.querySelector('.check');
const againBtn = document.querySelector('.again');
const secretNumberEl = document.querySelector('.number');
const guessNumberEl = document.querySelector('.guess');

let secretNumber,
  score = 20,
  isWonTheGame = false,
  highScore = 0;

//To Display the status of the game
let displayMessage = function (message) {
  messageEl.textContent = message;
};

//To Set the Initial State of the Game
const init = function () {
  score = 20;
  isWonTheGame = false;
  document.querySelector('body').style.backgroundColor = '#222';
  guessNumberEl.value = '';
  secretNumberEl.textContent = '?';
  secretNumberEl.style.width = '15rem';
  displayMessage('Start guessing...');
  currentScoreEl.textContent = score;
  secretNumber = Math.floor(Math.random() * 20 + 1);
  console.log(secretNumber);
};
init();

//Check button event handler
checkBtnEl.addEventListener('click', function () {
  let guess = Number(guessNumberEl.value);
  if (!isWonTheGame) {
    // No Input
    if (!guess) {
      displayMessage('⛔ No Number!');
      // Correct Number
    } else if (guess === secretNumber) {
      if (score > highScore) {
        highScore = score;
        highScoreEl.textContent = highScore;
      }
      displayMessage('🏆 Correct Number');
      document.querySelector('body').style.backgroundColor = '#60b347';
      secretNumberEl.textContent = secretNumber;
      secretNumberEl.style.width = '30rem';
      isWonTheGame = true;
      //Incorrect Number
    } else if (guess !== secretNumber) {
      if (score > 1) {
        score = score - 1;
        displayMessage(guess > secretNumber ? '📈 Too High!!' : '📉 Too Low');
        currentScoreEl.textContent = score;
        // Loose the Game
      } else {
        displayMessage('😟 You Loose!!');
        currentScoreEl.textContent = 0;
      }
    }
  }
});

// Again Button event Handler method
againBtn.addEventListener('click', init);
