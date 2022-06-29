/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

//declare Class 
class Game {
    constructor(){
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = null;
   }

   //let the games begin! overlay in HTML 
   startGame(){
       const overlay = document.getElementById('overlay');
       overlay.style.display = 'none';
       this.activePhrase = this.getRandomPhrase();
       this.activePhrase.addPhraseToDisplay();
   }

 
   getRandomPhrase(){
       const randNum = Math.floor(Math.random() * this.phrases.length);
       return this.phrases[randNum];
   }

  //listens for mouseclick
   handleInteraction(e){
       if(game.missed < 5) {
           //mouse
           if(e.type === 'click'){
               if(e.target.tagName === 'BUTTON') {
                   const button = e.target;
                   game.activePhrase.checkLetter(button.textContent);
                   e.target.disabled = true;
                   e.target.classList.add('disabled');
                   game.checkForWin();
               }
           } else {
               //keyboard 
               const key = e.key.toLowerCase();
               if(/^[a-z]{1}$/.test(key)){
                   const qwerty = document.querySelectorAll('#qwerty .key');
                   for(let i = 0; i < qwerty.length; i++){
                       const button = qwerty[i];
                       if(button.textContent === key && !(button.classList.contains('disabled'))){
                           game.activePhrase.checkLetter(key);
                           button.disabled = true;
                           button.classList.add('disabled');
                           game.checkForWin();
                           break;
                       }
                   }
               }
           }
       }
   }
