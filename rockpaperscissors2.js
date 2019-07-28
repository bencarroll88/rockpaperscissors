let buttons = document.querySelectorAll('button');
const choiceArray = ["rock", "paper", "scissors"];
let computerSelection = computerPlay();
// let messageDisplay = document.querySelector("#message");
let computerScore = 0;
let playerScore = 0;
let gamePlaying = true;
const playerScoreDisplay = document.querySelector("#pscore");
const computerScoreDisplay = document.querySelector("#cscore");
const roundResults = document.querySelector("#resultsMessage");
const winnerMessage = document.querySelector("#winnerMessage");
const resetButton = document.querySelector("#resetButton");

module.exports = {reset, computerScore, playerScore, gamePlaying, computerPlay, playRound, resetButton};


function computerPlay() {
    return choiceArray[Math.floor(Math.random() * choiceArray.length)]
}

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        playRound(e.target.id, computerPlay())
    });
});


resetButton.addEventListener("click", function(){
    reset();
});

function playRound(playerChoice, computerSelection) {
    if (playerChoice === computerSelection){
        roundResults.textContent = "It's a tie!";
    } else if (playerChoice === "rock" && computerSelection === "paper"){
        computerScore++;
        roundResults.textContent = `${computerSelection} beats ${playerChoice} - you lose!`;
    } else if (playerChoice === "rock" && computerSelection === "scissors"){
        playerScore++;
        roundResults.textContent = `${playerChoice} beats ${computerSelection} - you win!`;
    } else if (playerChoice === "paper" && computerSelection === "scissors"){
        computerScore++;
        roundResults.textContent = `${computerSelection} beats ${playerChoice} - you lose!`;
    } else if (playerChoice === "paper" && computerSelection === "rock") {
        playerScore++;
        roundResults.textContent = `${playerChoice} beats ${computerSelection} - you win!`;
    } else if (playerChoice === "scissors" && computerSelection === "paper") {
        playerScore++;
        roundResults.textContent = `${playerChoice} beats ${computerSelection} - you win!`;
    } else if (playerChoice === "scissors" && computerSelection === "rock"){
        computerScore++;
        roundResults.textContent = `${computerSelection} beats ${playerChoice} - you lose!`;
    }
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
    game();

};

function game(playerScore, computerScore){
    if (playerScore == 5){
        winnerMessage.textContent = `You win! You beat the computer ${playerScore} to ${computerScore}`
        gamePlaying = true;
    } else if (computerScore == 5) {
        winnerMessage.textContent = `You lost! The computer beat you ${computerScore} to ${playerScore}`;
        gamePlaying = false;
    }
};

function reset(){
    playerScore = 0;
    computerScore = 0;
    gamePlaying = true;
    roundResults.textContent = "";
    winnerMessage.textContent = "";
};


/*

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function(){
        playerChoice = buttons[i].id
    });  



function playerSelection() {
    buttons.forEach((button) => {
        let playerSelection = button.id;
    });

    return playerSelection
};

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection){
        return "It's a tie!";
    } else if (playerSelection === "rock" && computerSelection === "paper"){
        return `${computerSelection} beats ${playerSelection} - you lose!`;
    } else if (playerSelection === "rock" && computerSelection === "scissors"){
       return `${playerSelection} beats ${computerSelection} - you win!`;
    } else if (playerSelection === "paper" && computerSelection === "scissors"){
        return `${computerSelection} beats ${playerSelection} - you lose!`;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
       return `${playerSelection} beats ${computerSelection} - you win!`;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
       return `${playerSelection} beats ${computerSelection} - you win!`;
    } else if (playerSelection === "scissors" && computerSelection === "rock"){
        return `${computerSelection} beats ${playerSelection} - you lose!`;
    }
}; */