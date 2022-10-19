// *************Start Declare variables**************

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
const spinner1 = document.getElementById("spin1");
const spinner2 = document.getElementById("spin2");

// ************End declare variables**************

// ************Starting conditions**************

score0.textContent = 0;
score1.textContent = 0;

diceImg.classList.add("hidden");

let totalScore = [0, 0];
let currentScore = 0;
let activePlayer = 0;

// ****Start choose pseudo****

let p1 = document.getElementById("name-0");
let p2 = document.getElementById("name-1");

function pseudo1() {
  if (p1.innerHTML.length <= 0) {
    p1.innerHTML = "PLAYER 1";
  } else if (p1.innerHTML.length > 8) {
    alert("Please to enter a name with 8 caracters maximum.");
    p1.innerHTML = prompt("Choose a name for PLAYER 1:");
    return pseudo1();
  }
}
function pseudo2() {
  if (p2.innerHTML.length <= 0) {
    p2.innerHTML = "PLAYER 2";
  } else if (p2.innerHTML.length > 8) {
    alert("Please to enter a name with 8 caracters maximum.");
    p2.innerHTML = prompt("Choose a name for PLAYER 2:");
    return pseudo2();
  }
}

p1.innerHTML = prompt("Choose a name for PLAYER 1:");
pseudo1();
p2.innerHTML = prompt("Choose a name for PLAYER 2:");
pseudo2();
// ****End choose pseudo****

// ****Start change player and spins****

let nextUserTurn = function () {
  document.getElementById(`current-${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0.classList.toggle("player-active");
  player1.classList.toggle("player-active");
  play2();
  spinChange();
};

function spinChange() {
  if (activePlayer == 0) {
    spinner1.style.visibility = "visible";
    spinner2.style.visibility = "hidden";
  } else {
    spinner1.style.visibility = "hidden";
    spinner2.style.visibility = "visible";
  }
}

// ****End change player and spins****

// ***********End conditions***************

// **********Start Rules page*************

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

// *************End Rules page**************

// ************Start New Game**************

btnNewGame.addEventListener("click", function () {
  play4();

  document.querySelector(`.player-${activePlayer}`).classList.remove("winner");

  if (!player0.classList.contains("player-active")) {
    player0.classList.toggle("player-active");
    player1.classList.toggle("player-active");
  }

  score0.textContent = 0;
  score1.textContent = 0;
  current0.textContent = 0;
  current1.textContent = 0;

  diceImg.classList.add("hidden");

  totalScore = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  p1.innerHTML = prompt("Choose a name for PLAYER 1:");
  pseudo1();
  p2.innerHTML = prompt("Choose a name for PLAYER 2:");
  pseudo2();
  spinChange();
});

// ************End New Game************

// ************Start Game************
// ****Rolling Dice****

btnRoll.addEventListener("click", function () {
  const randomNumber = Math.trunc(Math.random() * 6 + 1);

  diceImg.classList.remove("hidden");

  diceImg.src = "./img/dice-" + randomNumber + ".png";
  spinChange();

  if (randomNumber !== 1) {
    currentScore = currentScore + randomNumber;
    document.getElementById(`current-${activePlayer}`).textContent =
      currentScore;
    play1();
  } else {
    nextUserTurn();
  }
});

// ****End Rolling Dice****
// ****Start Hold score****

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

// ****End Hold score****
// ****************End Game************

// ***********Start sound effect********************

function play1() {
  let audio1 = document.getElementById("audio1");
  audio1.playbackRate = 8;
  audio1.play();
}

function play2() {
  let audio2 = document.getElementById("audio2");
  audio2.play();
}

function play3() {
  let audio3 = document.getElementById("audio3");
  audio3.play();
}

function play4() {
  let audio4 = document.getElementById("audio4");
  audio4.playbackRate = 1;
  audio4.play();
}

//*************End sound effect*****************
