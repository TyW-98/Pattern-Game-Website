const gamePattern = [];
const userClickedPattern = [];
const buttonColors = ["green", "blue", "red", "yellow"];
var level = 0;

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

$(".btn").on("click", function (event) {
  let userChosenColour = event.target.id;
  userClickedPattern.push(userChosenColour);
  console.log(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);
});

$(document).on("keydown", function () {
  if (level == 0) {
    $(".heading").text("Level 0");
  }
  nextSequence();
});
