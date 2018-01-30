var winNum = 0;
var totalGuess = 0;
var crystal1 = 0;
var crystal2 = 0;
var crystal3 = 0;
var crystal4 = 0;
var win = 0;
var ranNums = [];

var game = function(){
totalGuess = 0;
winNum = Math.floor((Math.random() * 100 + 2) + 9);
$("#winNumShow").attr("value", winNum);
$("#winNumShow").text(winNum);

var createNums = function () {
    for (var i = 0; i < 4; i++) {
        ranNums[i] = (Math.floor((Math.random() * 10 + 2) + 1));
        $("#crystal1").attr("value", ranNums[0])
        $("#crystal2").attr("value", ranNums[1])
        $("#crystal3").attr("value", ranNums[2])
        $("#crystal4").attr("value", ranNums[3])
    }
}
createNums();

var click = function () {
    if (parseInt(winNum) > parseInt(totalGuess)) {
        totalGuess = parseInt(totalGuess) + parseInt($(this).attr("value"));
        $("#totalGuessShow").text(totalGuess);
        console.log("tG", totalGuess);
    } else if (winNum === totalGuess) {
        alert("win");
        win = win + 1;
        $("#win").text(win);
        game();
    } else {
        alert("you lose");
        game();
    };
};
$("#crystal1").on("click", click);
$("#crystal2").on("click", click);
$("#crystal3").on("click", click);
$("#crystal4").on("click", click);
}
game();