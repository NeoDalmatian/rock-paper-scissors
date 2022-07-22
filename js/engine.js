const computerChoice = ["ROCK", "PAPER", "SCISSORS"];

function computerPlay () {
  return computerChoice[Math.floor(Math.random() * computerChoice.length)];
}

function playRound (playerSelection, computerSelection = computerPlay()) {
  if (playerSelection == "ROCK" && computerSelection == "SCISSORS" ||
      playerSelection == "PAPER" && computerSelection == "ROCK" ||
      playerSelection == "SCISSORS" && computerSelection == "PAPER") {
   result = "Win";
   return player.innerText = ++playerScore;
  } else if (playerSelection == "ROCK" && computerSelection == "PAPER" ||
      playerSelection == "PAPER" && computerSelection == "SCISSORS" ||
      playerSelection == "SCISSORS" && computerSelection == "ROCK") {
   result = "Loss";
   return computer.innerText = ++computerScore;
  } else if (playerSelection == "ROCK" && computerSelection == "ROCK" ||
      playerSelection == "PAPER" && computerSelection == "PAPER" ||
      playerSelection == "SCISSORS" && computerSelection == "SCISSORS") {
    result = "Tie";
  } else {
    return "Wrong input";
  }
}

const buttons = document.querySelectorAll("button");
const player = document.querySelector("#playerNumber");
const computer = document.querySelector("#computerNumber");
const display = document.querySelector(".display");

const displayWin = document.createElement("h1");
const displayLoss = document.createElement("h1");
const displayWonRound = document.createElement("h2");
const displayLossRound = document.createElement("h2");
const displayTieRound = document.createElement("h2");

displayWin.innerText = "YOU WIN!";
displayLoss.innerText = "YOU LOSE!";
displayWonRound.innerText = "You Won this round!";
displayLossRound.innerText = "You Lost this round!";
displayTieRound.innerText = "Tie!";

displayWin.setAttribute("style", "color: green;")
displayLoss.setAttribute("style", "color: red;")

let playerScore = 0;
let computerScore = 0;
let result = "Default";

player.innerText = playerScore;
computer.innerText = computerScore;

buttons.forEach((button) => {
  button.addEventListener("click", playButton)
})

function displayResult() {
  if (playerScore === 5) {
    display.removeChild(display.firstChild);
    display.appendChild(displayWin);
    buttons.forEach((button) => button.removeEventListener("click", playButton));
  } else if (computerScore === 5) {
    display.removeChild(display.firstChild);
    display.appendChild(displayLoss);
    buttons.forEach((button) => button.removeEventListener("click", playButton));
  } else {
    return
  } 
}

function displayRoundResult() {
  if (result === "Win") {
    display.removeChild(display.firstChild);
    display.appendChild(displayWonRound);
  } else if (result === "Loss") {
    display.removeChild(display.firstChild);
    display.appendChild(displayLossRound);
  } else if (result === "Tie") {
    display.removeChild(display.firstChild);
    display.appendChild(displayTieRound);
  }
}

function playButton(e) {
  if (e.path[0].id === "rock") {
    playRound("ROCK");
  } else if (e.path[0].id === "paper") {
    playRound("PAPER");
  } else if (e.path[0].id === "scissors") {
    playRound("SCISSORS");
  }

  displayRoundResult();
  displayResult();
}