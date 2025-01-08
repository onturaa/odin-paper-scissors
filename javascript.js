const OPTIONS = 3;
let humanScore = 0;
let computerScore = 0;
const ROCK_AND_SCISSORS = "Rock beats Scissors!"
const ROCK_AND_PAPER = "Paper beats Rock!"
const PAPER_AND_SCISSORS = "Scissors beats Paper!"

function getComputerChoice() {
    let number = Math.floor(Math.random() * OPTIONS);
    if (number === 0) {
        return "rock";
    }
    else if (number === 1) {
        return "paper";
    }
    else if (number === 2) {
        return "scissors";
    }
    else {
        return "error";
    }
}

function getHumanChoice() {
    let hasValue = false;
    while (hasValue === false) {
        let choice = prompt(`Type "Rock", "Paper", or "Scissors".`);
        choice = choice.toLowerCase();
        if (choice === "rock" || choice === "paper" || choice === "scissors") {
            hasValue = true;
            return choice;
        }
        else {
            alert(`Invalid option. Please select "Rock", "Paper", or "Scissors".`);
        }
    }
}

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const scoreBoard = document.querySelector(".score-board");

const result = document.createElement("div");
const score = document.createElement("div");

score.textContent = `Player: ${humanScore}, Computer: ${computerScore}`;

scoreBoard.appendChild(score);
scoreBoard.appendChild(result);

let playerSelection = '';

function playRound(humanChoice, computerChoice) {
    
    if (humanChoice === "rock" && computerChoice === "scissors") {
        result.textContent = `You win! ${ROCK_AND_SCISSORS}`;
        humanScore ++;
        score.textContent = `Player: ${humanScore}, Computer: ${computerScore}`;
    } 
    else if (humanChoice === "rock" && computerChoice === "paper") {
        result.textContent = `You lose! ${ROCK_AND_PAPER}`;
        computerScore ++;
        score.textContent = `Player: ${humanScore}, Computer: ${computerScore}`;
    }
    else if (humanChoice === "scissors" && computerChoice === "rock") {
        result.textContent = `You lose! ${ROCK_AND_SCISSORS}`;
        computerScore ++;
        score.textContent = `Player: ${humanScore}, Computer: ${computerScore}`;
    }
    else if (humanChoice === "scissors" && computerChoice === "paper") {
        result.textContent = `You win! ${PAPER_AND_SCISSORS}`;
        humanScore ++;
        score.textContent = `Player: ${humanScore}, Computer: ${computerScore}`;
    }
    else if (humanChoice === "paper" && computerChoice === "rock") {
        result.textContent = `You win! ${ROCK_AND_PAPER}`;
        humanScore ++;
        score.textContent = `Player: ${humanScore}, Computer: ${computerScore}`;
    }
    else if (humanChoice === "paper" && computerChoice === "scissors") {
        result.textContent = `You lose! ${PAPER_AND_SCISSORS}`;
        computerScore ++;
        score.textContent = `Player: ${humanScore}, Computer: ${computerScore}`;
    }
    else if (humanChoice === computerChoice) {
        result.textContent = `It's a tie of ${humanChoice}!`
    }

    if (humanScore > 4) {
        result.textContent = `PLAYER WINS GAME!`
        humanScore = 0;
        computerScore = 0;
    }
    else if (computerScore > 4) {
        result.textContent = `COMPUTER WINS GAME!`
        humanScore = 0;
        computerScore = 0;
    }
}

rock.addEventListener("click", () => {
    playerSelection = "rock";
    playRound(playerSelection, getComputerChoice());
});

paper.addEventListener("click", () => {
    playerSelection = "paper";
    playRound(playerSelection, getComputerChoice());
});

scissors.addEventListener("click", () => {
    playerSelection = "scissors";
    playRound(playerSelection, getComputerChoice());
});
