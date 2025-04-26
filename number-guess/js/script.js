'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct Number🍷!';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log((document.querySelector('.guess').value = 23));

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let won = false;
let score = 20; //state variable
let highscore = 0;

//just made this funcTion guy to reduce my code repetition--
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const init = function () {
  if (!won) {
    const guess = Number(document.querySelector('.guess').value);
    //console.log(guess);

    if (!guess) {
      displayMessage('⛔ No number!');

      //won
    } else if (guess === secretNumber) {
      // document.querySelector('.message').textContent =
      //   '🍷 Correct Number, You won!';
      won = true;
      displayMessage('🍷 Correct Number, You won!');
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('body').style.background = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.highscore').textContent = score;
      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }
    }
    //when guess is wrong
    else if (guess !== secretNumber) {
      if (score > 1) {
        displayMessage(guess > secretNumber ? '📈 Too High' : '📉 Too Low');
        score--; //or score = score -1;
        document.querySelector('.score').textContent = score;
      } else {
        // document.querySelector('.message').textContent = '😂 You Lost the game';
        displayMessage('😂 You Lost the game');
        document.querySelector('.score').textContent = 0;
      }
    }
  }
};

document.querySelector('.check').addEventListener('click', init);

document.addEventListener('keydown', function (e) {
  // console.log(e.key);
  if (e.key === 'Enter') {
    init();
  }
});

document.querySelector('.again').addEventListener('click', function () {
  won = false;
  score = 20;
  document.querySelector('.score').textContent = score;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNumber);
  document.querySelector('.number').textContent = secretNumber;
  //   document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.background = '#222';
  document.querySelector('.number').style.width = '15rem';
});
