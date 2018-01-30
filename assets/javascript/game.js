var winNum = 0;
var totalGuess = 0;
var crystal1 = 0;
var crystal2 = 0;
var crystal3 = 0;
var crystal4 = 0;
var win = 0;

var game = function () {
    totalGuess = 0;
    $("#totalGuessShow").text(totalGuess);
    winNum = Math.floor((Math.random() * 100 + 2) + 9);
    console.log("win", winNum);
    $("#winNumShow").text(winNum);
    crystal1 = Math.floor((Math.random() * 10 + 2) + 1);
    console.log("1", crystal1);
    crystal2 = Math.floor((Math.random() * 10 + 2) + 1);
    console.log("2", crystal2);
    crystal3 = Math.floor((Math.random() * 10 + 2) + 1);
    console.log("3", crystal3);
    crystal4 = Math.floor((Math.random() * 10 + 2) + 1);
    console.log("4", crystal4);

    var click1 = function () {
        if (parseInt(winNum) > parseInt(totalGuess)) {
            totalGuess = parseInt(totalGuess) + parseInt(crystal1);
            $("#totalGuessShow").text(totalGuess);
            console.log("tG", totalGuess);
        } else if (winNum === totalGuess) {
            alert("win");
            win = win + 1;
            $("#win").text(win);
            totalGuess = 0;
            $("#totalGuessShow").text(totalGuess);
            game();
        } else {
            alert("you lose");
            totalGuess = 0;
            $("#totalGuessShow").text(totalGuess);
            game();
        };
    };
    var click2 = function () {
        if (parseInt(winNum) > parseInt(totalGuess)) {
            totalGuess = parseInt(totalGuess) + parseInt(crystal2);
            $("#totalGuessShow").text(totalGuess);
            console.log("tG", totalGuess);
        } else if (winNum === totalGuess) {
            alert("win");
            win = win + 1;
            $("#win").text(win);
            totalGuess = 0;
            $("#totalGuessShow").text(totalGuess);
            game();
        } else {
            alert("you lose");
            totalGuess = 0;
            $("#totalGuessShow").text(totalGuess);
            game();
        };
    };
    var click3 = function () {
        if (parseInt(winNum) > parseInt(totalGuess)) {
            totalGuess = parseInt(totalGuess) + parseInt(crystal3);
            $("#totalGuessShow").text(totalGuess);
            console.log("tG", totalGuess);
        } else if (winNum === totalGuess) {
            alert("win");
            win = win + 1;
            $("#win").text(win);
            totalGuess = 0;
            $("#totalGuessShow").text(totalGuess);
            game();
        } else {
            alert("you lose");
            totalGuess = 0;
            $("#totalGuessShow").text(totalGuess);
            game();
        };
    };
    var click4 = function () {
        if (parseInt(winNum) > parseInt(totalGuess)) {
            totalGuess = parseInt(totalGuess) + parseInt(crystal4);
            $("#totalGuessShow").text(totalGuess);
            console.log("tG", totalGuess);
        } else if (winNum === totalGuess) {
            alert("win");
            win = win + 1;
            $("#win").text(win);
            totalGuess = 0;
            $("#totalGuessShow").text(totalGuess);
            game();
        } else {
            alert("you lose");
            totalGuess = 0;
            $("#totalGuessShow").text(totalGuess);
            game();
        };
    };

    // var click = function () {
    //     if (parseInt(winNum) > parseInt(totalGuess)) {
    //         totalGuess = parseInt(totalGuess) + parseInt($(this).value());
    //         $("#totalGuessShow").text(totalGuess);
    //         console.log("tG", totalGuess);
    //     } else if (winNum === totalGuess) {
    //         alert("win");
    //         win = win + 1;
    //         $("#win").text(win);
    //         game();
    //     } else {
    //         alert("you lose");
    //         game();
    //     };
    // };
    $("#crystal1").on("click", click);
    $("#crystal2").on("click", click);
    $("#crystal3").on("click", click);
    $("#crystal4").on("click", click);
};
game();