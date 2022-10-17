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

// End declare variables

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

  diceImgEl.classList.add("hidden");

  totalScore = [0, 0];
  currentScore = 0;
  activePlayer = 0;
});

// End New Game
