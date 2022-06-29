/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase){
        this.phrase = phrase.toLowerCase();
    }

    //phrase loaded onto player game board 
    addPhraseToDisplay(){
        const phrase = this.phrase;
        const list = document.querySelector('#phrase ul');
        for(let i = 0; i < phrase.length; i++){
            if(phrase[i] !== ' '){
                const li = document.createElement('li');
                li.className = `hide letter ${phrase[i]}`;
                li.textContent = phrase[i];
                let char = phrase[i];
                list.appendChild(li);
            } else {
                const space = document.createElement('li');
                space.className = 'space';
                space.textContent = phrase[i];
                list.appendChild(space);
            }
        }
    }

    //filters incorrect letters and removes a heart/life - matches correct letters 
     @param {string} char 
    
    checkLetter(char){
        if(this.phrase.includes(char)){
            this.showMatchedLetter(char);
        } else {
            game.removeLife();
        }
    }

    //displays/hides letters iin game board
     @param {string} char 
     
    showMatchedLetter(char){
        const list = document.querySelector('#phrase ul').children;
        for(let i = 0; i < list.length; i++){
            if(list[i].classList.contains(char)){
                list[i].classList.remove('hide');
                list[i].classList.add('show');
            }
        }
    }
}
