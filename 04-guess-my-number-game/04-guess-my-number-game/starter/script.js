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

  if (guess === secretNumber) {
    console.log('Your guess is correct!');
    document.querySelector('.message').textContent = 'Correct Number!';
    document.querySelector('.number').textContent = secretNumber;
  } else if (guess > secretNumber) {
    console.log('Your guess number is too High!');
    document.querySelector('.message').textContent = 'Too high!!';
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = 'Too Low';
  }
});
