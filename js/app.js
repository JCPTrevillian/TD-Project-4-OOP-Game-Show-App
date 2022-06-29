/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

//game setup 
const game = new Game();
const startButton = document.querySelector('#btn__reset');
const keyboard = document.getElementById('qwerty');

// event listener initiates game initialization 
startButton.addEventListener('click', e => {
    game.startGame();
    keyboard.addEventListener('click', game.handleInteraction);
    window.addEventListener('keypress', game.handleInteraction);
});
