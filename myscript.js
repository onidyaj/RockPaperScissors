function computerPlay() {
  let num = Math.random();
  let str1;
  if (num >= 0.66) {
    str1 = "Rock";
  } else if (num <= 0.33) {
    str1 = "Paper";
  } else {
    str1 = "Scissors";
  }
  return str1;
}

function playRound(playerSelect, computerSelect) {
  // let str2 = prompt("Choose rock paper or scissors");
  //if (str2.toLowerCase() === "rock") {
  // str2 = "Rock";
  //} else if (str2.toLowerCase() === "paper") {
  // str2 = "Paper";
  //} else if (str2.toLowerCase() === "scissors") {
  // str2 = "Scissors";
  //}

  if (playerSelect === computerSelect) {
    return "Tie";
  } else if (playerSelect === "Rock") {
    if (computerSelect === "Paper") {
      return "Lose";
    } else if (computerSelect === "Scissors") {
      return "Win";
    }
  } else if (playerSelect === "Paper") {
    if (computerSelect === "Rock") {
      return "Win";
    } else if (computerSelect === "Scissors") {
      return "Lose";
    }
  } else if (playerSelect === "Scissors") {
    if (computerSelect === "Rock") {
      return "Lose";
    } else if (computerSelect === "Paper") {
      return "Win";
    }
  }
}

function game() {
  for (let i = 0; i <= 5; i++) {
    l;
  }
}
const playerSelect = "Rock";
const computerSelect = computerPlay();
console.log(playRound(playerSelect, computerSelect));
