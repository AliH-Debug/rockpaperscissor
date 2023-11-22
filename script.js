console.log("JavaScript file is loaded.");

// Game variables
let playerScore = 0;
let computerScore = 0;

// DOM elements
const rockBtn = document.getElementById("rockbtn");
const paperBtn = document.getElementById("paperbtn");
const scissorBtn = document.getElementById("scissorbtn");

const playerScoreElement = document.getElementById("playerscore");
const computerScoreElement = document.getElementById("computerscore");

const playerSign = document.getElementById("playersign");
const computerSign = document.getElementById("computersign");

const scoreMessageElement = document.querySelector(".scoremessage");

// Event listeners 
rockBtn.addEventListener("click", () => playRound("rock"));
paperBtn.addEventListener("click", () => playRound("paper"));
scissorBtn.addEventListener("click", () => playRound("scissor"));

// Function to determine the winner of a round
function determineWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "draw";
  } else if (
    (playerChoice === 'rock' && computerChoice === 'scissor') ||
    (playerChoice === 'scissor' && computerChoice === 'paper') ||
    (playerChoice === 'paper' && computerChoice === 'rock')
  ) {
    return "player";
  } else {
    return "computer";
  }
}

// Function to generate computer response
function getComputerChoice() {
  const choices = ["rock", "paper", "scissor"];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

  // Function to play a round
 function playRound(playerChoice) {
  const computerChoice = getComputerChoice();
  const winner = determineWinner(playerChoice, computerChoice);

  // Update signs and scores
  playerSign.textContent = getEmoji(playerChoice);
  computerSign.textContent = getEmoji(computerChoice);
  playerScoreElement.textContent = `Player: ${playerScore}`;
  computerScoreElement.textContent = `Computer: ${computerScore}`;

  // Update score message
  if (winner === "player") {
    scoreMessageElement.textContent = "Congrats! You won this round 👍🏻";
    playerScore++;
  } else if (winner === "computer") {
    scoreMessageElement.textContent = "Try again. You lose! 💀";
    computerScore++;
  } else {
    scoreMessageElement.textContent = "It's a draw 🎮";
  }

  // Check if the game is over
  if (playerScore === 5 || computerScore === 5) {
    endGame();
  }
}

// Function to get emoji based on the player's or computer's choice
function getEmoji(choice) {
  if (choice === "rock") return "🗿";
  if (choice === "paper") return "📰";
  if (choice === "scissor") return "✂️";
}

// Function to end the game and display the winner
function endGame() {
  if (playerScore > computerScore) {
    alert("Congrats! You won the game. 😉");
  } else if (playerScore < computerScore) {
    alert("HAHA! Try again. 🤣");
  } else {
    alert("Game Drawn! Play again to determine the winner. 😑");
  }

  // Game reset for a new game
  playerScore = 0;
  computerScore = 0;
  playerSign.textContent = "❓";
  computerSign.textContent = "❓";
  playerScoreElement.textContent = "Player: 0";
  computerScoreElement.textContent = "Computer: 0";
  scoreMessageElement.textContent = "First to score 5 wins the game";
}
