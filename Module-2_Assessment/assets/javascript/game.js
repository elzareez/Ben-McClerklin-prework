//gloabal variables
let words = ['sora','donald','goofy','kairi','roxas','axel','mickey','ventus','aqua','riku'];
let currentWord = "";
let letterSplit = [];
let correctLetter = [];
let guess = [];
let wins =0;
let guessRem = 10;

//Game Start Function
let gameStart = function(){
    currentWord = words[Math.floor(Math.random()*words.length)];
    letterSplit = currentWord.split("");
    for (let i =0; i<letterSplit.length; i++){
        correctLetter.push("_");
    }
    document.getElementById("cWord").innerText =  correctLetter.join(" ");
}
/* Generate random word
    split word in seperate array
    store word length for later reference
    genereate blanks for each letter
    change the HTML to show blanks

    console log stuff just in case its needed */

//Reset the game
let reset = function(){
    guessRem = 10;
    guess = [];
    correctLetter = [];
    gameStart();
}

//Check letters and compare/update function
let checkFunc = function(guessLetter){
    let letterTF = false;
    for (let i =0; i<currentWord.length; i++){
        if(currentWord[i] === guessLetter){
            letterTF = true;
        }
    }
    if(letterTF){
        for (let i =0; i<currentWord.length; i++){
           if(currentWord[i]===guessLetter){
            correctLetter[i] = guessLetter;
           }
        }
    }
    else{
        guess.push(guessLetter);
        guessRem--;
    }
}



//Won/Lose function
let winLose = function(){
    if(correctLetter.join() === currentWord){
        wins++;
        document.getElementById("wins").innerText = " " + wins;
    }
    else if(guessRem === 0){
        reset();
        document.getElementById("lose").innerText = "You lost refresh to try again";

    }
    document.getElementById("cWord").innerText = correctLetter.join(" ")
    document.getElementById("numGuess").innerText = " " + guessRem;
}
//Run winLose to see if it works DELETE AFTER


//Run game
gameStart()

document.onkeyup = function(event){
    let guessLetter = event.key.toLowerCase();
    checkFunc(guessLetter);
    winLose();
    document.getElementById("lettersGuessed").innerText = guess.join(" ");
}
