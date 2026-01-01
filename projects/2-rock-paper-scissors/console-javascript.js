const choice = ['rock', 'paper', 'scissors'];
let humanScore = 0;
let computerScore = 0;

const winAgainst = {
    rock: 'scissors',
    paper: 'rock',
    scissors: 'paper'
}

    
function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3);
    return choice[randomNum];
}

function getHumanChoice() {
    let humanChoice = prompt("Select [rock, paper, scissors]: ");

    if (humanChoice == null) {
        console.log("Enter a valid input!");
    }
    return humanChoice.trim().toLowerCase();
}

function playRound(humanChoice, computerChoice) {
    let outcome = "";
    if (humanChoice == computerChoice) {
        outcome = `Tie!: Both Human and Computer selected ${humanChoice}`;
    }
    else if (winAgainst[humanChoice] == computerChoice) {
        outcome = `Win!: Human's ${humanChoice} beats Computer's ${computerChoice}`;
        humanScore++;
    }
    else {
        outcome = `Lose!: Human's ${humanChoice} loses againt Computer's ${computerChoice}`;
        computerScore++;
    }
    console.log(outcome);
    console.log(`Human Score: ${humanScore} | Computer Score: ${computerScore}`);
}

