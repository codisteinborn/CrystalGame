//Variables to store values in
var winNum = 0;
var totalGuess = 0;
var crystal1 = 0;
var crystal2 = 0;
var crystal3 = 0;
var crystal4 = 0;
var win = 0;

var game = function () {
    winNum = Math.floor((Math.random() * 100 + 2) + 9);
    console.log("win", winNum);
    $("#winNumShow").text(winNum);
    crystal1 = Math.floor((Math.random() * 10 + 2) + 1);
    // console.log("1", crystal1);
    crystal2 = Math.floor((Math.random() * 10 + 2) + 1);
    // console.log("2", crystal2);
    crystal3 = Math.floor((Math.random() * 10 + 2) + 1);
    // console.log("3", crystal3);
    crystal4 = Math.floor((Math.random() * 10 + 2) + 1);
    // console.log("4", crystal4);

    if (parseInt(winNum) > parseInt(totalGuess)) {
        var click1 = function () {
            totalGuess = parseInt(totalGuess) + parseInt(crystal1);
            $("#totalGuessShow").text(totalGuess);
            console.log("1", totalGuess);
        }
        $("#crystal1").on("click", click1)
        var click2 = function () {
            totalGuess = parseInt(totalGuess) + parseInt(crystal2);
            $("#totalGuessShow").text(totalGuess);
            console.log("2", totalGuess);
        }
        $("#crystal2").on("click", click2);
        var click3 = function () {
            totalGuess = parseInt(totalGuess) + parseInt(crystal3);
            $("#totalGuessShow").text(totalGuess);
            console.log("3", totalGuess);
        }
        $("#crystal3").on("click", click3)
        var click4 = function () {
            totalGuess = parseInt(totalGuess) + parseInt(crystal4);
            $("#totalGuessShow").text(totalGuess);
            console.log("4", totalGuess);
        }
        $("#crystal4").on("click", click4);
    }
    else if (winNum === totalGuess) {
        alert("win");
        win = win + 1;
        ("#win").text(win);
    }
    else {
        alert("you lose");
    }
}
game();