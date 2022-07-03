/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

//game setup 
let game;
let startButton = document.querySelector('#btn__reset');
let keyboard = document.getElementById('qwerty');

// event listener initiates game initialization 
startButton.addEventListener('click', e => {
    game = new Game ();
    game.startGame();
    keyboard.addEventListener('click', game.handleInteraction);
    window.addEventListener('keypress', game.handleInteraction);
});
