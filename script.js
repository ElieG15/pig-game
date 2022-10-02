'use strict';
//El stand for element, and selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1'); //this is same like the one above, and getEltById don't have to use # anymore
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

// const player0El = document.getElementById('player--0');
// const player1El = document.getElementById('player--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

let currentScore = 0;
let isCurrentPlayer1 = true;

//Rolling dice functionality
btnRoll.addEventListener('click', function () {
  //1) Generating a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);

  //2) Display dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  //3) Check for rolled 1: if true,
  if (dice !== 1) {
    console.log('not one');
    // Add dice to current score
    currentScore += dice; //which can be write also like currentScore = currentScore + 1
    // current0El.textContent = currentScore; //change later
    if (isCurrentPlayer1) {
      current0El.textContent = currentScore;
    } else {
      current1El.textContent = currentScore;
    }
  } else {
    //switch to the next player
    console.log('one');

    if (isCurrentPlayer1) {
      current0El.textContent = 0;
    } else {
      current1El.textContent = 0;
    }
    isCurrentPlayer1 = !isCurrentPlayer1;
    currentScore = 0;
  }
});
