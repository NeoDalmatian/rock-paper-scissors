
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

 function playRound (playerSelection, computerSelection = computerPlay()) {
  if (playerSelection.toUpperCase() == "Rock".toUpperCase() && computerSelection.toUpperCase() == "Rock".toUpperCase() || playerSelection.toUpperCase() == "Paper".toUpperCase() && computerSelection.toUpperCase() == "Paper".toUpperCase() || playerSelection.toUpperCase() == "Scissors".toUpperCase() && computerSelection.toUpperCase() == "Scissors".toUpperCase()) {
   return "It\'s a Tie!";
  } else if (playerSelection.toUpperCase() == "Rock".toUpperCase() && computerSelection.toUpperCase() == "Scissors".toUpperCase() || playerSelection.toUpperCase() == "Paper".toUpperCase() && computerSelection.toUpperCase() == "Rock".toUpperCase() || playerSelection.toUpperCase() == "Scissors".toUpperCase() && computerSelection.toUpperCase() == "Paper".toUpperCase()) {
   return "Win";
  } else if (playerSelection.toUpperCase() == "Rock".toUpperCase() && computerSelection.toUpperCase() == "Paper".toUpperCase() || playerSelection.toUpperCase() == "Paper".toUpperCase() && computerSelection.toUpperCase() == "Scissors".toUpperCase() || playerSelection.toUpperCase() == "Scissors".toUpperCase() && computerSelection.toUpperCase() == "Rock".toUpperCase()) {
   return "Loss";
  } else {
   return "Wrong Input! Write either Rock, Paper or Scissors"
  }
}

function game () {
  let pPoints = 0;
  let cPoints = 0;

  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("Write either Rock, Paper or Scissors");
    let result = playRound(playerSelection);

    if (result == "Win") {
      pPoints++
      console.log(`You Won this round! Player:${pPoints} Computer: ${cPoints}`)
    } else if (result == "Loss") {
      cPoints++
      console.log(`You Lost this round! Player:${pPoints} Computer: ${cPoints}`)
    } else {
      console.log("It\'s a Tie!")
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

