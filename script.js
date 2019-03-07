const btnNewgame = document.querySelector(".panel__button")
const userInput = document.querySelector(".panel__input");
const hint = document.querySelector(".hint");
const counter = document.querySelector(".counter");
const guessLog = document.querySelector("#guessLog");

let computerGuess;
let guesses = [];
let count = 0;

function buttonGame() {
    window.location.reload();
}



function init() {

    computerGuess = Math.floor(Math.random() * 100 + 1);
    console.log(computerGuess)
}

function compareGuess() {
    const userGuess = userInput.value;
    count++
    counter.innerHTML = count;

    guesses.push(userGuess);
    guessLog.innerHTML = guesses;

    if(userGuess > computerGuess) {

        hint.innerHTML = "Your guess is too High";
        userInput.value = "";

    } else if(userGuess < computerGuess) {

        hint.innerHTML = "Your guess is too Low";
        userInput.value = "";

    } else {

        hint.innerHTML = "You got it right!!!"
    }
}