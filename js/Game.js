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
 //removes color from 1 heart for each incorrect letter  
  removeLife(){
    const lifes = document.querySelectorAll('#scoreboard .tries img[src*="liveHeart"]');
    if(lifes.length){
        lifes[lifes.length - 1].src = 'images/lostHeart.png';
    }
    this.missed++;
}

//checks letters for win/lose 
checkForWin(){
    const list = document.querySelector('#phrase ul').children;
    for(let i = 0; i < list.length; i++) {
        if(list[i].classList.contains('hide')){
            if(this.missed > 4) {
                this.gameOver(false);
            }
            return;
        }
    }
    // game won?
    this.gameOver(true);
}

//overlay - game over 
gameOver(state){
    this.missed = 0;
    const overlay = document.getElementById('overlay');
    overlay.style.display = '';
    const gameOverMessage = document.getElementById('game-over-message');
    window.removeEventListener('keypress', game.handleInteraction);

    //overlay win/lose
    if(state){
        gameOverMessage.textContent = 'You win!';
        overlay.className = 'win';
    } else {
        gameOverMessage.textContent = 'You lose!';
        overlay.className = 'lose';
    }

    // reset keyboard 
    const qwerty = document.querySelectorAll('#qwerty button');
    document.querySelector('#phrase ul').innerHTML = '';
    for(let i = 0; i < qwerty.length; i++) {
        if(qwerty[i].classList.contains('disabled')){
            qwerty[i].disabled = false;
            qwerty[i].classList.remove('disabled');
        }
    }

    // reset heart 
    const lifes = document.querySelectorAll('#scoreboard .tries img[src*="lostHeart"]');
    for(let i = 0; i < lifes.length; i++){
        lifes[i].src = 'images/liveHeart.png';
    }
}
//create phrases - pull phrases from the list of 5 options 
 createPhrases() {
    const phrases = [
        new Phrase('A foot in the door'),
        new Phrase('Drop dead gorgeous'),
        new Phrase('End of story'),
        new Phrase('Easy as pie'),
        new Phrase('All in all')
    ];
    return phrases;
};
}
