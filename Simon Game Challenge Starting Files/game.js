var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var started = false;

$(".btn").click(function () {
  var userChosenColor = $(this).attr("id");
  //console.log(userChosenColor);
  playSound(userChosenColor);
  userClickedPattern.push(userChosenColor);
  //console.log("User klicked pattern: " + userClickedPattern);
  //console.log("Game pattern: " + gamePattern);
  animatePress(userChosenColor);
  checkAnswer();
  $("h1").text("Level " + level);
});

$(document).keydown(function () {
  started = true;
  if ((started = true)) {
    nextSequence();
    $("h1").text("Level " + level);
    //console.log(started);
  } else {
    console.log("press a key");
  }
});

function nextSequence() {
  level++;
  var randomNumber = Math.floor(Math.random() * 4);

  var randomChosenColor = buttonColors[randomNumber];
  //console.log(randomChosenColor);

  $("#" + randomChosenColor)
    .fadeOut(100)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);

  playSound(randomChosenColor);

  gamePattern.push(randomChosenColor);
  //console.log("Game pattern: " + gamePattern);
}

function playSound(name) {
  var audioSound = new Audio("sounds/" + name + ".mp3");
  audioSound.play();
}

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");

  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

function checkAnswer(currentLevel) {
  /* if ((gamePattern.length = userClickedPattern.length)) {
    console.log("1");
    nextSequence();
  } else if ((gamePattern[1] = userClickedPattern)) {
    console.log("2");
  }*/
  /* if (gamePattern[0] == userClickedPattern[0]) {
    console.log("True");
    nextSequence();
  } else {
    console.log("ff");
  }*/
}

//playSound("red");
