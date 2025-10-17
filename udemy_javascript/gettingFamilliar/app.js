const heading = document.querySelector("h1");
const input = document.querySelector(".btn");
const attribute = document.querySelector("a");

input.addEventListener("click", function () {
  const checkInput = document.querySelector("input");
  checkInput.click();
});
heading.addEventListener("click", function () {
  /* add() = add, remove() = remove , toggle() = add or remove (logic)*/
  heading.classList.toggle("big");
});

const attry = attribute.attributes;
console.log(attry);

const getAttry = attribute.getAttribute("href");
console.log(getAttry);

const setAttry = attribute.setAttribute("href", "www.bing.com");
console.log(setAttry);
