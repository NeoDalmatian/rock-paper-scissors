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
  } else {
    return "Tie";
  }
}

function game () {
  let pPoints = 0;
  let cPoints = 0;

  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("Write either Rock, Paper or Scissors").toUpperCase();
    let result = playRound(playerSelection);

    if (result == "Win") {
      pPoints++
      console.log(`You Won this round! Player:${pPoints} Computer: ${cPoints}`)
    } else if (result == "Loss") {
      cPoints++
      console.log(`You Lost this round! Player:${pPoints} Computer: ${cPoints}`)
    } else if (result == "Tie"){
      console.log("It\'s a Tie!")
    } else {
      console.log("Wrong Input! Write either Rock, Paper or Scissors")
    }
  }

  if (pPoints > cPoints) {
    console.log("You Win this game!")
  } else if (pPoints < cPoints) {
    console.log("You Lost this game!")
  } else {
    console.log("It\s a Tie!")
  }
}