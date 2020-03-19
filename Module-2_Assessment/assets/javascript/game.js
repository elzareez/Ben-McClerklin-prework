//gloabal variables
let words = ['sora','donald','goofy','kairi','roxas','axel','mickey','ventus','aqua','riku'];
let currentWord = "";
let letterSplit = [];
let correctLetter = [];
let guess = [];
let wins =0;
let guessRem = 10;
let mySound;

//Sound Variables
var sora= document.getElementById("Sora");
var donald = document.getElementById("Donald");
var goofy= document.getElementById("Goofy");
var kairi= document.getElementById("Kairi");
var roxas= document.getElementById("Roxas");
var axel= document.getElementById("Axel");
var mickey= document.getElementById("Mickey");
var ventus= document.getElementById("Ventus");
var aqua= document.getElementById("Aqua");
var riku= document.getElementById("Riku");

//Game Start Function
let gameStart = function(){
    currentWord = words[Math.floor(Math.random()*words.length)];
    letterSplit = currentWord.split("");
    for (let i =0; i<letterSplit.length; i++){
        correctLetter.push("_");
    }
    document.getElementById("cWord").innerText =  correctLetter.join(" ");
}

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
    if(correctLetter.join() === letterSplit.join()){
        wins++;
        document.getElementById("wins").innerText = "Wins: " + wins;
        reset();
    }
    else if(guessRem === 0){
        reset();
        document.getElementById("lose").innerText = "You lost try again";

    }
    document.getElementById("cWord").innerText = correctLetter.join(" ")
    document.getElementById("numGuess").innerText = " " + guessRem;
}

//Run game
gameStart()

//Picture function
function picture() {
    if(currentWord == words[0]){
        document.getElementById("hint").src = "../Module-2_Assessment/assets/images/Sora.png";
        sora.play();
        donald.pause();
        goofy.pause();
        kairi.pause();
        roxas.pause();
        axel.pause();
        mickey.pause();
        ventus.pause();
        aqua.pause();
        riku.pause();
    }
    else if(currentWord == words[1]){
        document.getElementById("hint").src = "../Module-2_Assessment/assets/images/Donald.png";
        sora.pause();
        donald.play();
        goofy.pause();
        kairi.pause();
        roxas.pause();
        axel.pause();
        mickey.pause();
        ventus.pause();
        aqua.pause();
        riku.pause();
    }
    else if(currentWord == words[2]){
        document.getElementById("hint").src = "../Module-2_Assessment/assets/images/Goofy.png";
        sora.pause();
        donald.pause();
        goofy.play();
        kairi.pause();
        roxas.pause();
        axel.pause();
        mickey.pause();
        ventus.pause();
        aqua.pause();
        riku.pause();
    }
    else if(currentWord == words[3]){
        document.getElementById("hint").src = "../Module-2_Assessment/assets/images/Kairi.png";
        sora.pause();
        donald.pause();
        goofy.pause();
        kairi.play();
        roxas.pause();
        axel.pause();
        mickey.pause();
        ventus.pause();
        aqua.pause();
        riku.pause();
    }
    else if(currentWord == words[4]){
        document.getElementById("hint").src = "../Module-2_Assessment/assets/images/Roxas.png";
        sora.pause();
        donald.pause();
        goofy.pause();
        kairi.pause();
        roxas.play();
        axel.pause();
        mickey.pause();
        ventus.pause();
        aqua.pause();
        riku.pause();
    }
    else if(currentWord == words[5]){
        document.getElementById("hint").src = "../Module-2_Assessment/assets/images/Axel.png";
        sora.pause();
        donald.pause();
        goofy.pause();
        kairi.pause();
        roxas.pause();
        axel.play();
        mickey.pause();
        ventus.pause();
        aqua.pause();
        riku.pause();
    }
    else if(currentWord == words[6]){
        document.getElementById("hint").src = "../Module-2_Assessment/assets/images/Mickey.png";
        sora.pause();
        donald.pause();
        goofy.pause();
        kairi.pause();
        roxas.pause();
        axel.pause();
        mickey.play();
        ventus.pause();
        aqua.pause();
        riku.pause();
    }
    else if(currentWord == words[7]){
        document.getElementById("hint").src = "../Module-2_Assessment/assets/images/Ventus.png";
        sora.pause();
        donald.pause();
        goofy.pause();
        kairi.pause();
        roxas.pause();
        axel.pause();
        mickey.pause();
        ventus.play();
        aqua.pause();
        riku.pause();
    }
    else if(currentWord == words[8]){
        document.getElementById("hint").src = "../Module-2_Assessment/assets/images/Aqua.png";
        sora.pause();
        donald.pause();
        goofy.pause();
        kairi.pause();
        roxas.pause();
        axel.pause();
        mickey.pause();
        ventus.pause();
        aqua.play();
        riku.pause();
    }
    else if(currentWord == words[9]){
        document.getElementById("hint").src = "../Module-2_Assessment/assets/images/Riku.png";
        sora.pause();
        donald.pause();
        goofy.pause();
        kairi.pause();
        roxas.pause();
        axel.pause();
        mickey.pause();
        ventus.pause();
        aqua.pause();
        riku.play();
    }
  }
  
document.onkeypress = function(event){
    let guessLetter = event.key.toLowerCase();
    checkFunc(guessLetter);
    winLose();
    picture();
    document.getElementById("lettersGuessed").innerText = guess.join(" ");
    
}

