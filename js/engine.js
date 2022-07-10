
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
   if (computerSelection == "Scissors") {
     return `You Win! ${playerSelection} beats ${computerSelection}`
   } else if (computerSelection == "Paper") {
     return `You Lose! ${computerSelection} beats ${playerSelection}`
   } else {
     return "Tie"
   }
 }

const playerSelection = "Rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));