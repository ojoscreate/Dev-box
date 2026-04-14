const snare = document.querySelector(".w");
const crash = document.querySelector(".a");
const kick = document.querySelector(".s");
const tom1 = document.querySelector(".d");
const tom2 = document.querySelector(".j");
const tom3 = document.querySelector(".k");
const tom4 = document.querySelector(".l");

// ADDING THE BACKGROUND IMAGES TO THE BUTTONS
document.addEventListener("DOMContentLoaded", () => {
  snare.style.backgroundImage = 'url("./images/snare.png")';
  crash.style.backgroundImage = 'url("./images/crash.png")';
  kick.style.backgroundImage = 'url("./images/kick.png")';
  tom1.style.backgroundImage = 'url("./images/tom1.png")';
  tom2.style.backgroundImage = 'url("./images/tom2.png")';
  tom3.style.backgroundImage = 'url("./images/tom3.png")';
  tom4.style.backgroundImage = 'url("./images/tom4.png")';
});

// ADDING THE SOUND TO THE BUTTONS

let snareSound = new Audio("./sounds/snare.mp3");
let crashSound = new Audio("./sounds/crash.mp3");
let kickSound = new Audio("./sounds/kick-bass.mp3");
let tom1Sound = new Audio("./sounds/tom-1.mp3");
let tom2Sound = new Audio("./sounds/tom-2.mp3");
let tom3Sound = new Audio("./sounds/tom-3.mp3");
let tom4Sound = new Audio("./sounds/tom-4.mp3");

// PLAYING THE SOUNDS
snare.addEventListener("click", () => {
  snareSound.play();
});

crash.addEventListener("click", () => {
  crashSound.play();
});

kick.addEventListener("click", () => {
  kickSound.play();
});

tom1.addEventListener("click", () => {
  tom1Sound.play();
});

tom2.addEventListener("click", () => {
  tom2Sound.play();
});

tom3.addEventListener("click", () => {
  tom3Sound.play();
});

tom4.addEventListener("click", () => {
  tom4Sound.play();
});

// ADDING THE ANIMATION TO THE BUTTONS

const pressing = document.querySelectorAll(".drum");
pressing.forEach(function (item) {
  item.addEventListener("click", () => {
    item.classList.add("pressed");
    // pressed(item);
    setTimeout(() => depressed(item), 250);
  });
});

// function pressed(elements) {
//   //   pressing.style.background = "red";
// }
// REMOVING THE ANIMATION FROM THE BUTTONS
function depressed(item) {
  item.classList.remove("pressed");
  console.log(pressing.className);

  //   document.querySelector(".pressed").remove();
}
