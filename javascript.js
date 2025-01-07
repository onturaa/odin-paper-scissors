const OPTIONS = 3;

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

console.log(getHumanChoice());