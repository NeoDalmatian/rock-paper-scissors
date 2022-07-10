
let rock = "Rock";
let paper = "Paper";
let scissors = "Scissors";

function computerPlay ( randomNumber = Math.floor(Math.random() * 3) + 1 ) {
  if (randomNumber == 1) {
    return rock
  } else if (randomNumber == 2) {
    return paper
  } else {
    return scissors
  }
}

function game (player, computer) {
  if (player == computerPlay) {
    return "It\’s a tie"
  } else if (player > computerPlay) {
    return "You Lose! Paper beats Rock"
  } else {
    return "You Win! Paper beats Rock"
  }
}

const player = 3;
const computer = computerPlay();