const {reset, computerScore, playerScore, gamePlaying, computerPlay, playRound, resetButton} = require('./rockpaperscissors2.js');

describe('test functionality of rock paper scissors game play', () => {
    test('ensure reset button sets player score to 0', () => {
        //Arrange
        const pScore = playerScore;
        //Act
        const rButton = reset();
        //Assert
        expect(pScore).toBe(0);
    })
    test('ensure reset button sets computer score to 0', () => {
        //Arrange
        const cScore = computerScore;
        //Act
        const rButton = reset();
        //Assert
        expect(cScore).toBe(0);
    })
    test('ensure reset button sets state variable to true', () => {
        //Arrange
        const gameState = gamePlaying;
        //Act
        const rButton = reset();
        //Assert
        expect(gameState).toBe(true);
    })
})