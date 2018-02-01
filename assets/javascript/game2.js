var winNum = 0;
var totalGuess = 0;
var win = 0;
var loss = 0;
var ranNums = [];

var setup = function () {
    totalGuess = 0;
    $("#totalGuessShow").text(totalGuess);
    winNum = Math.floor((Math.random() * 100 + 2) + 9);
    $("#winNumShow").attr("value", winNum);
    $("#winNumShow").text(winNum);
    $("#loss").text(loss);
    $("#win").text(win);

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
};
setup();
var click = function () {
    totalGuess = parseInt(totalGuess) + parseInt($(this).attr("value"));
    $("#totalGuessShow").text(totalGuess);
    if (parseInt(winNum) > parseInt(totalGuess)) {
    } else if (winNum === totalGuess) {
        win++;
        $("#win").text(win);
        setTimeout(function () { setup(); }, 2000);
    } else {
        loss++
        $("#loss").text(loss);
        setTimeout(function () { setup(); }, 2000);
    };
};
$("#crystal1").on("click", click);
$("#crystal2").on("click", click);
$("#crystal3").on("click", click);
$("#crystal4").on("click", click);