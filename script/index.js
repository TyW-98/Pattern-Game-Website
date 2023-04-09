var gamePattern = [];
var userClickedPattern = [];
const buttonColors = ["green", "blue", "red", "yellow"];
var level = 1;
var clickCount = 0;
var startgame = false;

function playSound(color) {
  const audio = new Audio("sounds/" + color + ".mp3");
  audio.play();
}

function animatePress(currentColor) {
  $("." + currentColor).addClass("pressed");
  setTimeout(function () {
    $("." + currentColor).removeClass("pressed");
  }, 150);
}

function nextSequence() {
  userClickedPattern = [];
  $(".heading").text("LEVEL " + level++);
  const randomNumber = Math.floor(Math.random() * 4);
  const randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);

  $("." + randomChosenColor)
    .fadeOut(100)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);

  playSound(randomChosenColor);
}

function checkAnswer(index) {
  if (gamePattern[index] === userClickedPattern[index]) {
    console.log("Correct answer");

    if (gamePattern.length === userClickedPattern.length) {
      setTimeout(nextSequence, 1000);
    }
  } else {
    console.log("Invalid answer");
    const wrongAudio = new Audio("sounds/wrong.mp3");
    wrongAudio.play();
    $("body").addClass("wrong");
    setTimeout(function () {
      $("body").removeClass("wrong");
    }, 200);
    $(".heading").text("Game Over, Press Any Key to restart...");
    level = 0;
    gamePattern = [];
    startgame = false;
  }
}

$(".btn").on("click", function (event) {
  if (startgame) {
    let userChosenColour = event.target.id;
    userClickedPattern.push(userChosenColour);
    console.log(userChosenColour);

    playSound(userChosenColour);
    animatePress(userChosenColour);

    checkAnswer(userClickedPattern.length - 1);
  }
});

$(document).on("keydown", function () {
  if (level == 1 || !startgame) {
    startgame = true;
    $(".heading").text("Level " + level);
    nextSequence();
  }
});
