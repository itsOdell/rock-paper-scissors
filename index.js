var rockChoice = $("#rock");
var paperChoice = $("#paper");
var scissorsChoice = $("#scissors");
var rockImg = $("#rock-img");
var paperImg = $("#paper-img");
var scissorsImg = $("#scissors-img");
/*https://kissanime.nz/Anime/haikyu-to-the-top-part-2.69257/Episode-018?id=166*/

var userCounter = 0;
var compCounter = 0;
var userScore = $(".user-score");
var compScore = $(".comp-score");
var resultText = $(".result-text");


function choices() {
    var compChoices = ["rock", "paper", "scissors"];
    var randomNum = Math.floor(Math.random() * compChoices.length);
    var randomCompChoice = compChoices[randomNum];
    return randomCompChoice;
}


function rockPicked() {
    choices();
    switch (choices()) {
        case "rock":
            console.log("DRAW");
            resultText.html("It's a Draw!");
            break;
        case "paper":
            console.log("YOU LOST");
            compCounter++;
            compScore.html(compCounter);
            resultText.html("Rock Loses to Paper, You Lost!");
            break;
        case "scissors":
            console.log("YOU WON");
            userCounter++;
            userScore.html(userCounter);
            resultText.html("Rock Beats Scissors, You Won!");
            break;
    }
}


function paperPicked() {
    choices();
    switch (choices()) {
        case "rock":
            console.log("YOU WON");
            userCounter++;
            userScore.html(userCounter);
            resultText.html("Paper Beats Rock, You Won!");
            break;
        case "paper":
            console.log("DRAW");
            resultText.html("It's a Draw!");
            break;
        case "scissors":
            console.log("YOU LOST");
            compCounter++;
            compScore.html(compCounter);
            resultText.html("Paper Loses to Scissors, You Lost!");
            break;
    }
}


function scissorsPicked() {
    choices();
    switch (choices()) {
        case "rock":
            console.log("YOU LOST");
            compCounter++;
            compScore.html(compCounter);
            resultText.html("Scissors Loses to Rock, You Lost!");
            break;
        case "paper":
            console.log("YOU WON");
            userCounter++;
            userScore.html(userCounter);
            resultText.html("Scissors Beats Paper, You Won!");
            break;
        case "scissors":
            console.log("DRAW");
            resultText.html("It's a Draw!");
            break;
    }
}


function main() {
    rockChoice.on("click", rockPicked);
    paperChoice.on("click", paperPicked);
    scissorsChoice.on("click", scissorsPicked);
}
main();


