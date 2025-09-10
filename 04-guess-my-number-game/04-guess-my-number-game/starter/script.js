'use strict';

//DOM ELEMENT SELECTION

const messageEl = document.querySelector('.message');
console.log(messageEl);
console.log(messageEl.textContent);
// messageEl.textContent = 'Hello from Javascript';

const scoreEl = document.querySelector('.score');
console.log(scoreEl);
console.log(scoreEl.textContent);
// scoreEl.textContent = 50;

const numberEl = document.querySelector('.number');
// numberEl.textContent = 15;

const highScoreOfEl = document.querySelector('.highscore');
// highScoreOfEl.textContent = 30;

const guessEl = document.querySelector('.guess');
// guessEl.value = 12;

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log('Secret Number: ', secretNumber);

let score = 20;
let highscore = 0;

//change the value of score UI dynamically
document.querySelector('.score').textContent = score;
document.querySelector('.highscore').textContent = highscore;

console.log('Game state initialized!');

//Basic Game Logic

document.querySelector('.check').addEventListener('click', function () {
  //once checked button is click, do this
  console.log('Check button has been clicked');
  const guess = Number(document.querySelector('.guess').value);
  console.log('Players guessed:', guess);

  if (!guess) {
    document.querySelector('.message').textContent = 'No number!';
    return; // stop here
  }

  if (guess < 1 || guess > 20) {
    document.querySelector('.message').textContent =
      'Number must be between 1 and 20!';
    return; // stop here
  }
  if (guess === secretNumber) {
    console.log('Your guess is correct!');
    document.querySelector('.message').textContent = 'Correct Number!';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    document.querySelector('.message').textContent = ' You won!';
    document.querySelector('.guess').disabled = true;
    document.querySelector('.check').disabled = true;
    document.body.style.backgroundColor = 'green';
    document.querySelector('.message').textContent = '🎉 Game Over!';
    document.querySelector('.guess').value = '';
  } else if (guess > secretNumber) {
    console.log('Your guess number is too High!');
    document.querySelector('.message').textContent = 'Too high!!';
    score--;
    document.querySelector('.score').textContent = score;
    if (score < 1) {
      document.querySelector('.message').textContent = 'You have Lost!';
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('.guess').disabled = true;
      document.querySelector('.check').disabled = true;
      document.body.style.backgroundColor = 'maroon';
      document.querySelector('.guess').value = '';
      document.querySelector('.message').textContent = '💀 Game Over!';
      document.querySelector('.guess').value = '';
    }
  } else if (guess < secretNumber) {
    console.log('Your guess number is too low!');
    document.querySelector('.message').textContent = 'Too Low';
    score--;
    document.querySelector('.score').textContent = score;
    if (score < 1) {
      document.querySelector('.message').textContent = 'You have Lost!';
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('.guess').disabled = true;
      document.querySelector('.check').disabled = true;
      document.body.style.backgroundColor = 'maroon';
      document.querySelector('.guess').value = '';
      document.querySelector('.message').textContent = '💀 Game Over!';
      document.querySelector('.guess').value = '';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log('New secret number is', secretNumber);
  //Restart the message display
  document.querySelector('.message').textContent = 'Start guessing';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('.guess').disabled = false;
  document.querySelector('.check').disabled = false;
  console.log('code has been restarted');
  document.body.style.backgroundColor = '';
});
