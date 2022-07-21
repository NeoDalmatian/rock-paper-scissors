
//Function for picking randomly between "ROCK", "PAPER", "SCISSORS" and outputting result.
function computerPlay () {
  randomNumber = Math.floor(Math.random() * 3) + 1;
  if (randomNumber == 1) {
    return "ROCK";
  } else if (randomNumber == 2) {
    return "PAPER";
  } else {
    return "SCISSORS";
  }
}

//Function for comparing output of "computerPlay()"" and player input "playerSelection",
//and depending on rules of game it outputs either "Win", "loss", "Tie" or "Wrong input" 
function playRound (playerSelection, computerSelection = computerPlay()) {
  if (playerSelection == "ROCK" && computerSelection == "SCISSORS" ||
      playerSelection == "PAPER" && computerSelection == "ROCK" ||
      playerSelection == "SCISSORS" && computerSelection == "PAPER") {
   //return "Win";
   console.log("Win")
  } else if (playerSelection == "ROCK" && computerSelection == "PAPER" ||
      playerSelection == "PAPER" && computerSelection == "SCISSORS" ||
      playerSelection == "SCISSORS" && computerSelection == "ROCK") {
   //return "Loss";
   console.log("Loss")
  } else if (playerSelection == "ROCK" && computerSelection == "ROCK" ||
      playerSelection == "PAPER" && computerSelection == "PAPER" ||
      playerSelection == "SCISSORS" && computerSelection == "SCISSORS") {
    //return "Tie";
    console.log("Tie")
  } else {
    return "Wrong input";
  }
}

const buttons = document.querySelectorAll("button");
const player = document.querySelector("#player");
const computer = document.querySelectorAll("#computer");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    //console.log(e.path[0].id);
    if (e.path[0].id === "rock") {
      playRound("ROCK");
    } else if (e.path[0].id === "paper") {
      playRound("PAPER");
    } else if (e.path[0].id === "scissors") {
      playRound("SCISSORS");
    }
  })
})