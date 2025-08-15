
const choice = document.getElementById("choices");
choice.addEventListener("mouseover", event => {
  if(event.target.tagName === "BUTTON") {
    event.target.classList.add("enabled");
  }
});

choice.addEventListener("mouseout", event => {
  if(event.target.tagName === "BUTTON") {
    event.target.classList.remove("enabled");
  }
});

const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");

function playgame(playerChoice) {
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  let result = "";
  if(playerChoice === computerChoice) {
    result = "It's a tie";
  } else if(playerChoice === "rock" && computerChoice === "scissors") {
    result = "You Win!"
  } else if(playerChoice === "paper" && computerChoice === "rock") {
    result = "You Win!"
  } else if(playerChoice === "scissors" && computerChoice === "paper") {
    result = "You Win!"
  } else {
    result = "You Lose!"
  }
  playerDisplay.textContent = `You chose: ${playerChoice}`;
  computerDisplay.textContent = `Computer chose: ${computerChoice}`;
  resultDisplay.textContent = `Result: ${result}`;
}