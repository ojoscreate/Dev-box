/*
GAME FUNCTION
- Player must guess a number between amin and max
- player must have a certain amount of guess
- Notify player how many more guesses remaining
- Show a congratulation message if guess right
- Show player correct answer if loose
- Let player choose to try again
*/

// GETTING GAME VALUES

let min = 1,
  max = 10,
  winingNum = getWinningNum(min, max),
  guessLeft = 3;

// GETTING THE WINNING NUMBER
function getWinningNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// SELECTING UI ELEMENTS
const gameUi = document.getElementById("game"),
  minValue = document.querySelector(".min-num"),
  maxValue = document.querySelector(".max-num"),
  guessInput = document.querySelector("#guess-input"),
  submitGuessBtn = document.querySelector("#guess-btn"),
  message = document.querySelector(".message");
// ASSIGN MAX AND MIN
minValue.textContent = min;
maxValue.textContent = max;

// LISTEN TO GUESS
submitGuessBtn.addEventListener("click", guessGame);

function guessGame() {
  let guess = parseInt(guessInput.value);

  // CHECKING IF THE GUESS MATCHES WINING NUMBER
  if (guess === winingNum) {
    gameOver(true, `${winingNum} is the Correct Guess, YOU WIN`);
    // REPLACED WITH THE GAMEOVER FUNCTION
    // setMessage(`${winingNum} is the Correct Guess, YOU WIN`, "green");
    // guessInput.style.borderColor = "green";
    // guessInput.disabled = true;
    // submitGuessBtn.value = "PLAY AGAIN";
  } else {
    guessLeft--;
    if (guessLeft === 0) {
      gameOver(
        false,
        `GAME OVER you lost , The correct guess is ${winingNum}, CLICK PLAY AGAIN`
      );
      // REPLACED WITH THE GAMEOVER FUNCTION

      // setMessage(
      //   `GAME OVER you lost , The correct guess is ${winingNum}, CLICK PLAY AGAIN`,
      //   "red"
      // );
      // guessInput.disabled = true;
      // guessInput.style.borderColor = "red";
      // submitGuessBtn.value = "PLAY AGAIN";
      // submitGuessBtn.style.borderColor = "green";
    } else {
      setMessage(
        `${guess} is wrong, ${guessLeft} chance remaining, TRY AGAIN!!`,
        "gold"
      );
      guessInput.value = NaN;
    }
  }

  // ERROR CHECKER
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter number between ${min} and ${max}`, "red");
  }
  endGameReload();
}

function gameOver(won, msg) {
  let color;
  won === true ? (color = "green") : (color = "red");

  setMessage(msg);
  guessInput.disabled = true;
  guessInput.style.borderColor = color;
  guessInput.style.borderWidth = "2px";
  submitGuessBtn.style.color = color;
  submitGuessBtn.value = "PLAY AGAIN";
  submitGuessBtn.style.borderColor = color;
  message.style.color = color;
}
// SETTING MESSAGES
function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}

// PAGE RELOAD AT END GAME
function endGameReload() {
  if (submitGuessBtn.value === "PLAY AGAIN") {
    submitGuessBtn.addEventListener("click", function () {
      location.reload();
    });
  }
}
