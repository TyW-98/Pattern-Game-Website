const gamePattern = [];
const userClickedPattern = [];
const buttonColors = ["green", "blue", "red", "yellow"];

function playSound(color) {
  const audio = new Audio("sounds/" + color + ".mp3");
  audio.play();
}

function nextSequence() {
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
});

nextSequence();
