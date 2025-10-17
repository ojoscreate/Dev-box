const num = 6;
let rand;
let winningNum;

// CREATING RANDOM NUMBERS (THE RANDOMIZER)
function randomiser(num) {
  return Math.floor(Math.random() * num + 1);
}

// SELECTING THE NEED ELEMENTS

const image1 = document.querySelector("#imageWrapper1");
const image2 = document.querySelector("#imageWrapper2");
const play = document.querySelector("#playBtn");
const msg = document.querySelector("#message");

// MAKING PLAYER1 SELECT DICE
image1.addEventListener("click", changeImage1);
function changeImage1() {
  rand = randomiser(num);
  image1.setAttribute("src", `./images/dice${rand}.png`);
  return rand;
}

// MAKING PLAYER 2 / COMPUTER SELECT DICE AND GAME STARTS
play.addEventListener("click", playGame);
function playGame() {
  winningNum = randomiser(num);
  let rand2 = randomiser(num);
  image2.setAttribute("src", `./images/dice${rand2}.png`);

  if (rand === winningNum && rand2 === winningNum) {
    gameOver(true, "BOTH PLAYERS WIN, A TIE");
  } else if (rand === winningNum) {
    gameOver(true, "PLAYER 1 WIN");
  } else if (rand2 === winningNum) {
    gameOver(false, "PLAYER 1 LOSE, PLAYER 2 WON");
  } else {
    gameOver(false, "BOTH PLAYER LOSE");
  }
}

// GAMEOVER FUNCTION
function gameOver(won, msg) {
  let color;
  won === true ? (color = "green") : (color = "red");
  setMessage(msg, color);
}

// MESSAGE FUNCTION
function setMessage(msg, color) {
  message.textContent = msg;
  message.style.color = color;
  message.className = "message";
}
