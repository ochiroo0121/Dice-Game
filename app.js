const player = document.querySelectorAll(".player-score");
const current = document.querySelectorAll(".player-current-score");

const playerName = document.querySelectorAll(".player-name");

const diceRotate = document.querySelector(".btn-roll");
const diceHold = document.querySelector(".btn-hold");
const btnNew = document.querySelector(".btn-new");

const diceImg = document.querySelector(".dice");
const input = document.querySelector(".input");
const dar = document.querySelector(".dar");

const toggle = document.querySelector(".toggle");

var activePlayer = 0;

var playerScore = 0;

var roundScore = [0, 0];

var roadToWin;

var gameOver;

total = 100;

// Togloom ehleh heseg
function newGame() {
  gameOver = false;
  activePlayer = 0;

  playerScore = 0;

  roundScore = [0, 0];

  player[0].textContent = "0";
  player[1].textContent = "0";

  current[0].textContent = "0";
  current[1].textContent = "0";

  diceImg.style.display = "none";
  playerName[0].textContent = "Тоглогч 1";
  playerName[1].textContent = "Тоглогч 2";
  input.value = 100;
  total = 100;
  document.querySelector(".totalNumb").textContent = total;
}
newGame();

dar.addEventListener("click", function () {
  if (gameOver !== true) {
    total = input.value;
    document.querySelector(".totalNumb").textContent = total;

    playerScore = 0;
    player[0].textContent = "0";
    player[1].textContent = "0";

    current[0].textContent = "0";
    current[1].textContent = "0";

    diceImg.style.display = "none";
  } else {
    alert(
      "Тоглогч " +
        (activePlayer + 1) +
        " хожсон байна. Тоглоомийг шинээр эхлүүлнэ үү!!!"
    );
  }
});

function whoActive() {
  for (let i = 0; i < playerName.length; i++) {
    playerName[i].parentElement.classList.remove("active");
  }

  if (activePlayer === 0) {
    activePlayer = 1;
    playerName[activePlayer].parentElement.classList.add("active");
  } else {
    activePlayer = 0;
    playerName[activePlayer].parentElement.classList.add("active");
  }
}

diceHold.addEventListener("click", function () {
  player[activePlayer].textContent = roundScore[activePlayer];
  roundScore[activePlayer] = playerScore + roundScore[activePlayer];

  if (roundScore[activePlayer] < total) {
    current[activePlayer].textContent = roundScore[activePlayer];
    whoActive();
  } else {
    for (let i = 0; i < playerName.length; i++) {
      playerName[i].parentElement.classList.remove("active");
    }
    playerName[activePlayer].parentElement.classList.add("winner");
    playerName[activePlayer].textContent = "WINNER";
    current[activePlayer].textContent = roundScore[activePlayer];
    gameOver = true;
  }
  player[activePlayer].textContent = "0";
  playerScore = 0;
});

diceRotate.addEventListener("click", function () {
  if (gameOver !== true) {
    rollDice = Math.floor(Math.random() * 6) + 1;

    if (rollDice !== 1) {
      diceImg.style.display = "block";
      diceImg.src = "dice-" + rollDice + ".png";

      playerScore = rollDice + playerScore;

      player[activePlayer].textContent = playerScore;
    } else {
      diceImg.src = "dice-" + rollDice + ".png";
      playerScore = 0;
      player[activePlayer].textContent = "0";
      whoActive();
    }
  } else {
    alert(
      "Тоглогч " +
        (activePlayer + 1) +
        " хожсон байна. Тоглоомийг шинээр эхлүүлнэ үү!!!"
    );
  }
});

btnNew.addEventListener("click", function () {
  newGame();
  for (let i = 0; i < playerName.length; i++) {
    playerName[i].parentElement.classList.remove("active");
    playerName[i].parentElement.classList.remove("winner");
  }
  playerName[activePlayer].parentElement.classList.add("active");
  playerName[activePlayer].textContent = "Тоглогч " + (activePlayer + 1);
});

toggle.addEventListener("click", function () {
  document.querySelector(".description").classList.toggle("change");
});
