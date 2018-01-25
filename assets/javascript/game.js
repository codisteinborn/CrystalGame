//Variables to store values in
var winNum;
var totalGuess;
var crystal1;
var crystal2;
var crystal3;
var crystal4;

var game = function (){
    winNum = Math.floor((Math.random() * 100 +2) + 9);
    // console.log("win", winNum);
    $("#winNumShow").text(winNum);
    crystal1 = Math.floor((Math.random() * 10+2) + 1);
    // console.log("1", crystal1);
    crystal2 = Math.floor((Math.random() * 10+2) + 1);
    // console.log("2", crystal2);
    crystal3 = Math.floor((Math.random() * 10+2) + 1);
    // console.log("3", crystal3);
    crystal4 = Math.floor((Math.random() * 10+2) + 1);
    // console.log("4", crystal4);
    
    // var click1 = function () {
    //     $()
    // }
    // $("#totalGuessShow").on(click, click1)

}
game();