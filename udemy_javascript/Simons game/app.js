let level = 1;
let buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];
// Declare the array outside the click event handler to persist across clicks
let userClickedPattern = [];

$(".button").click((event) => {
  // This is to get the class name of the clicked button
  let eventName = event.target.className.split(" ")[1];

  // console.log(eventName);

  let userChosenColor = eventName;
  userClickedPattern.push(userChosenColor); // Add the clicked color to the array
  playSound(userChosenColor);
  // console.log(userClickedPattern); // Log the updated array
  animatePressed(eventName);
  checkAnswer(eventName);
});

$(document).keydown((event) => {
  switch (event.key) {
    case "a":
      // $(".game-info h1").text("Level " + level);

      nextSequence();
      break;

    default:
      wronged();
      break;
  }
});
// function for wrong answer
function wronged() {
  $("body").addClass("red");
  setTimeout(() => {
    $("body").removeClass("red");
  }, 50);
  wrongSound();
}

// Function to generate next sequence

function nextSequence() {
  let randomNumber = Math.floor(Math.random() * 4);

  let randomColorChosen = buttonColors[randomNumber];
  gamePattern.push(randomColorChosen);
  playSound(randomColorChosen);
  $("." + randomColorChosen)
    .fadeIn()
    .fadeOut()
    .fadeIn();
  userClickedPattern = [];
  let delaycont = 1;
  delaycont++;
  console.log(`delay done ${delaycont} `);
  $(".game-info h1").text("Level " + level);
  level++;

  // playSound(buttonColors[randomNumber]);
  // return randomNumber;
}

// Function to play wrong sound
function wrongSound() {
  let wrongSound = new Audio("./sounds/wrong.mp3");
  wrongSound.play();
}

// Function to play sound
function playSound(name) {
  let randomColorAudio = new Audio("./sounds/" + name + ".mp3");
  randomColorAudio.play();
}

// Function to animate button press
function animatePressed(currentColor) {
  $("." + currentColor).addClass("pressed");
  setTimeout(() => {
    $("." + currentColor).removeClass("pressed");
  }, 100);
  // console.log(currentColor);
}

// Function to check the answer
function checkAnswer(currentLevel) {
  let lastIndex = userClickedPattern.length - 1;
  if (
    userClickedPattern.every((value, index) => value === gamePattern[index]) &&
    userClickedPattern[lastIndex] === gamePattern[lastIndex]
  ) {
    console.log("success");
    setTimeout(nextSequence, 1000);
  } else {
    console.log("Wrong");
    wronged();
    resetGame();
    $(".game-info h1").text("Game Over, Press A to Restart");
  }
}
function resetGame() {
  // Reset the game
  level = 1;
  gamePattern = [];
  userClickedPattern = [];
}
