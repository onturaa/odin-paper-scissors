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

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log(`You win! ${ROCK_AND_SCISSORS}`);
        humanScore ++;
    } 
    else if (humanChoice === "rock" && computerChoice === "paper") {
        console.log(`You lose! ${ROCK_AND_PAPER}`);
        computerScore ++;
    }
    else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log(`You lose! ${ROCK_AND_SCISSORS}`);
        computerScore ++;
    }
    else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log(`You win! ${PAPER_AND_SCISSORS}`);
        humanScore ++;
    }
    else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log(`You win! ${ROCK_AND_PAPER}`);
        humanScore ++;
    }
    else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log(`You lose! ${PAPER_AND_SCISSORS}`);
        computerScore ++;
    }
    else if (humanChoice === computerChoice) {
        console.log(`It's a tie!`);
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
