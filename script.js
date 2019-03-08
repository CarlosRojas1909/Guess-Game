const inputBox = document.querySelector(".panel__input");
const hint = document.querySelector(".hint");
const counterDisplay = document.querySelector(".counter");
const guessLogDisplay = document.querySelector("#guessLog");
const easyBtn = document.querySelector("#easyBtn");
const hardBtn = document.querySelector("#hardBtn");
const newBtnNone = document.getElementById("newBtnNone");
const container = document.getElementById("container");
const answer = document.getElementById("answer");
let computerGuess;
let userGuessLog = [];
let attempts = 0;
let maxGuess = 10;


function gameEnded() {

    newBtnNone.style.display = "inline";
    easyBtn.style.display = "none";
    hardBtn.style.display = "none";

    //unable input box when game is over
    inputBox.disabled = true;
}


function easyMode() {

    maxGuess = 10;
    easyBtn.classList.toggle("activeButton");
    hardBtn.classList.remove("activeButton")
}

function hardMode() {
    maxGuess = 5;
    hardBtn.classList.toggle("activeButton");
    easyBtn.classList.remove("activeButton");

}


function newGame() {
    window.location.reload();
}

// Trigged every time the page is loaded
function init() {

    computerGuess = Math.floor(Math.random() * 100 + 1);
    console.log(computerGuess)
    newBtnNone.style.display = "none";

}

function compareGuess() {

    let userGuess = inputBox.value;

    if(!isNaN(userGuess)) {

    

        userGuessLog.push(userGuess);

        guessLogDisplay.innerHTML = userGuessLog;

        attempts++;
        counterDisplay.innerHTML = attempts;
        
        
        if(userGuessLog.length < maxGuess) {

            if(userGuess > computerGuess) {

                hint.innerHTML = "Your guess is too High";
                inputBox.value = "";
        
            } else if(userGuess < computerGuess) {
        
                hint.innerHTML = "Your guess is too Low";
                inputBox.value = "";
        
            } else {
        
                hint.innerHTML = "You got it right!!!. You did it in: " + attempts + " attempts"
                inputBox.value = "";
                //making the background color of container when winning
                container.style.backgroundColor = "#186665";
                gameEnded();
            }

        } else {

            if(userGuess > computerGuess) {
                hint.innerHTML = "You lose!. The number was: " + computerGuess;
                inputBox.value = "";
                container.style.backgroundColor = "#FFAA00";
                gameEnded();

            } else if(userGuess < computerGuess) {
                hint.innerHTML = "You lose!. The number was: " + computerGuess;
                inputBox.value = "";
                container.style.backgroundColor = "#FFAA00";
                gameEnded();

            } else {
                hint.innerHTML = "You got it right!!!. You did it in: " + attempts + " attempts";
                container.style.backgroundColor = "#186665";
                inputBox.value = "";
                gameEnded();

            }
        }

    } else {
        hint.innerHTML = "This is NOT a number. Try again"
 }
    
}

function answerFunc() {
    answer.innerHTML = computerGuess;
}