const choice = ['rock', 'paper', 'scissors'];
let humanScore = 0;
let computerScore = 0;

const winAgainst = {
    rock: 'scissors',
    paper: 'rock',
    scissors: 'paper'
}

// const playerButtons = document.querySelectorAll('.button-item')
// We can just use a nodeList and loop through it instead! playerButtons.forEach((button) => )
const rockButton = document.querySelector('.rock-item');
const paperButton = document.querySelector('.paper-item');
const scissorsButton = document.querySelector('.scissors-item');
    
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

// uneffcient
rockButton.addEventListener('click', (event) => {
    playRound('rock', getComputerChoice());
});

paperButton.addEventListener('click', (event) => {
    playRound('paper', getComputerChoice());
});

scissorsButton.addEventListener('click', (event) => {
    playRound('scissors', getComputerChoice());
});
// uneffcient



// old function
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

// SELECT
const gameResultDiv = document.querySelector('.result-container .game-result');
const playerChoiceDiv = document.querySelector('.result-container .player-choice');
const computerChoiceDiv = document.querySelector('.result-container .computer-choice');

const playerScoreDiv = document.querySelector('.score-container .score-item .human-score');
const computerScoreDiv = document.querySelector('.score-container .score-item .computer-score');


// CREATE
const gameResultPara = document.createElement('p');
const playerChoicePara = document.createElement('p');
const computerChoicePara = document.createElement('p');

const playerScorePara = document.createElement('p');
const computerScorePara = document.createElement('p');

// ATTACH
// FUTURE: USE ONLY ONE DIV (can only use gameResultDiv)
gameResultDiv.appendChild(gameResultPara);
playerChoiceDiv.appendChild(playerChoicePara);
computerChoiceDiv.appendChild(computerChoicePara);

playerScoreDiv.appendChild(playerScorePara);
computerScoreDiv.appendChild(computerScorePara);

// new function
function playRound(humanChoice, computerChoice) {
    playerChoicePara.textContent = `Player choice ${humanChoice}`;
    computerChoicePara.textContent = `Computer choice ${computerChoice}`;
    if (humanChoice == computerChoice) {
        gameResultPara.textContent = "It's a tie";
    } else if (winAgainst[humanChoice] == computerChoice) {
        gameResultPara.textContent = "You win! :)";
        humanScore++;
    } else {
        gameResultPara.textContent = "You lose! :(";
        computerScore++;
    }
    playerScorePara.textContent = humanScore;
    computerScorePara.textContent = computerScore;
}


