'use strict';
//El stand for element, and selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1'); //this is same like the one above, and getEltById don't have to use # anymore
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores, currentScore, activePlayer, playing;
//Starting conditions:: I move this code in the function below to be make it easier to use for the restarting game
// score0El.textContent = 0;
// score1El.textContent = 0;
// diceEl.classList.add('hidden');

// const score = [0, 0];
// let currentScore = 0;
// let activePlayer = 0;
// let playing = true;

//Starting condition
const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};
init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

//Rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    //1) Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);

    //2) Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    //3) Check for rolled 1: if true,
    if (dice !== 1) {
      // Add dice to current score
      currentScore += dice; //which can be write also like currentScore = currentScore + 1
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //switch to the next player
      // document.getElementById(`current--${activePlayer}`).textContent = 0;
      // activePlayer = activePlayer === 0 ? 1 : 0;
      // currentScore = 0;
      // player0El.classList.toggle('player--active');
      // player1El.classList.toggle('player--active');
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    //1) add current score to active place's score
    scores[activePlayer] += currentScore; //in order hand it mean score[1] = score[1] + currentScore
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    //2a) check if player's score is >= 100,
    if (scores[activePlayer] >= 20) {
      //b) finish the game
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      //3) switch to the next player
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', init);

//function () { this function came from the btnNew button

//   //I create the function above with these lines of code to make it way easier to manipulate by calling here

//   // score0El.textContent = 0;
//   // score1El.textContent = 0;

//   // current0El.textContent = 0;
//   // current1El.textContent = 0;
//   // player0El.classList.remove('player--winner');
//   // player1El.classList.remove('player--winner');
//   // player0El.classList.add('player--active');
//   // player1El.classList.remove('player--active');

// });
