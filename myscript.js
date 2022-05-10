const choices = ["Rock", "Paper", "Scissors"];
let playerPoint = 0;
let computerPoint = 0;

function computerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function playerChoice() {
  input = prompt("Choose: Rock, Paper, Scissors");
  input = input[0].toUpperCase() + input.slice(1).toLowerCase();
  return input;
}

function playRound() {
  const playerSelect = playerChoice();
  const computerSelect = computerChoice();
  console.log(`You Chose: ${playerSelect} \n Computer Chose: ${computerSelect}`);
  const winner = checkWinner(playerSelect, computerSelect);
  console.log(winner);
}

function checkWinner(player, computer) {
  if (player === computer) {
    return "It's a Tie!\n------------------";
  } else if ((player === "Rock" && computer === "Scissors") || (player === "Paper" && computer === "Rock") || (player === "Scissors" && computer === "Paper")) {
    playerPoint++;
    return "Player Wins Round!\n------------------";
  } else {
    computerPoint++;
    return "Computer Wins Round!\n------------------";
  }
}

function game() {
  for (i = 1; i <= 5; i++) {
    playRound(i);
  }
  console.log(`Your score: ${playerPoint} \n Computer score: ${computerPoint}`);
  if (playerPoint < computerPoint) {
    console.log(`Computer wins!`);
  } else if (playerPoint > computerPoint) {
    console.log(`Player wins`);
  } else {
    console.log(`You tied!`);
  }
}
