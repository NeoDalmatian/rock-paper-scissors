
let rock = 1;
let paper = 2;
let scissors = 3;

function computerPlay () {
  randomNumber = Math.floor(Math.random() * 3) + 1;
  if (randomNumber == 1) {
    return "Rock";
  } else if (randomNumber == 2) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

 function playRound (playerSelection, computerSelection) {
   if (playerSelection == "Rock" && computerSelection == "Rock" || playerSelection == "Paper" && computerSelection == "Paper" || playerSelection == "Scissors" && computerSelection == "Scissors") {
    return "It\'s a Tie!";
   } else if (playerSelection == "Rock" && computerSelection == "Scissors" || playerSelection == "Paper" && computerSelection == "Rock" || playerSelection == "Scissors" && computerSelection == "Paper") {
    return `You Win! ${playerSelection} beats ${computerSelection}`;
   } else {
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
   }
 }

const playerSelection = "Scissors";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));