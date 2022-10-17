// Start Declare variables

const btnRules = document.querySelector(".btn-rules");
const rulesPage = document.querySelector(".rules");
const overlay1 = document.querySelector(".overlay");
const btnCloseRules = document.querySelector(".closeRules");
const btnNewGame = document.querySelector(".newgame");
const player0 = document.querySelector(".player-0");
const player1 = document.querySelector(".player-1");
const score0 = document.getElementById("score-0");
const score1 = document.getElementById("score-1");
const btnRoll = document.querySelector(".rolldice");
const current0 = document.getElementById("current-0");
const current1 = document.getElementById("current-1");
const btnHold = document.querySelector(".hold");
const diceImg = document.querySelector(".dice");

// End declare variables

// Starting conditions

score0.textContent = 0;
score1.textContent = 0;

let totalScore = [0, 0];
let currentScore = 0;
let activePlayer = 0;

let nextUserTurn = function () {
  currentScore = 0;
  document.getElementById(`current-${activePlayer}`).textContent = currentScore;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0.classList.toggle("player-active");
  player1.classList.toggle("player-active");
  play2();
};
// End conditions

// Start Rules page

let closeRules = function () {
  rulesPage.classList.add("hidden");
  overlay1.classList.add("hidden");
};

btnRules.addEventListener("click", function () {
  rulesPage.classList.remove("hidden");
  overlay1.classList.remove("hidden");
});

btnCloseRules.addEventListener("click", closeRules);

overlay1.addEventListener("click", closeRules);

// End Rules page

// Start New Game

btnNewGame.addEventListener("click", function () {
  document.querySelector(`.player-${activePlayer}`).classList.remove("winner");

  if (!player0.classList.contains("player-active")) {
    player0.classList.toggle("player-active");
    player1.classList.toggle("player-active");
  }

  score0.textContent = 0;
  score1.textContent = 0;

  diceImg.classList.add("hidden");

  totalScore = [0, 0];
  currentScore = 0;
  activePlayer = 0;
});

// End New Game

// Start Game
// Rolling Dice

btnRoll.addEventListener("click", function () {
  const randomNumber = Math.trunc(Math.random() * 6 + 1);

  diceImg.classList.remove("hidden");

  diceImg.src = `dice-${randomNumber}.png`;

  if (randomNumber !== 1) {
    currentScore = currentScore + randomNumber;
    document.getElementById(`current-${activePlayer}`).textContent =
      currentScore;
    play1();
  } else {
    nextUserTurn();
  }
});

// End Rolling Dice
// Start Hold score

btnHold.addEventListener("click", function () {
  totalScore[activePlayer] = totalScore[activePlayer] + currentScore;
  document.getElementById(`score-${activePlayer}`).textContent =
    totalScore[activePlayer];

  if (totalScore[activePlayer] >= 100) {
    document.querySelector(`.player-${activePlayer}`).classList.add("winner");
    play3();
    currentScore = 0;
    document.getElementById(`current-${activePlayer}`).textContent =
      currentScore;
  } else {
    nextUserTurn();
  }
});

// End Hold score
// End Game
