let gamePattern = []
const buttonColors = ["green", "blue", "red", "yellow"];

function nextSequence() {
    const randomNumber = Math.floor( Math.random() * 4);
    const randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);

    $("."+randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    const audio = new Audio("sounds/"+randomChosenColor+".mp3");
    audio.play();
} 


nextSequence();