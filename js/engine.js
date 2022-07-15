
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

function playRound (playerSelection, computerSelection = computerPlay()) {
  if (playerSelection == "ROCK" && computerSelection == "SCISSORS" ||
   playerSelection == "PAPER" && computerSelection == "ROCK" ||
    playerSelection == "SCISSORS" && computerSelection == "PAPER") {
   return "Win";
  } else if (playerSelection == "ROCK" && computerSelection == "PAPER" ||
   playerSelection == "PAPER" && computerSelection == "SCISSORS" ||
    playerSelection == "SCISSORS" && computerSelection == "ROCK") {
   return "Loss";
  } else if (playerSelection == "ROCK" && computerSelection == "ROCK" ||
  playerSelection == "PAPER" && computerSelection == "PAPER" ||
   playerSelection == "SCISSORS" && computerSelection == "SCISSORS") {
    return "Tie";
  } else {
    return "Wrong input"
  }
}

function game () {
  let playerPoints = 0;
  let computerPoints = 0;

  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("Write either Rock, Paper or Scissors").toUpperCase();
    let result = playRound(playerSelection);

    if (result == "Win") {
      playerPoints++
      console.log(`You Won this round! Player:${playerPoints} Computer: ${computerPoints}`)
    } else if (result == "Loss") {
      computerPoints++
      console.log(`You Lost this round! Player:${playerPoints} Computer: ${computerPoints}`)
    } else if (result == "Tie"){
      console.log("It\'s a Tie!")
    } else {
      console.log("Wrong Input! Write either Rock, Paper or Scissors")
    }
  }

  if (playerPoints > computerPoints) {
    console.log("You Win this game!")
  } else if (playerPoints < computerPoints) {
    console.log("You Lost this game!")
  } else {
    console.log("It\s a Tie!")
  }
}