let inp = document.querySelector("#fibonacciNumber");
let resultInp = document.querySelector("#fibonacciResults");
document
  .querySelector("#fibonacci_btn")
  .addEventListener("click", function (e) {
    fibonacciGen(parseInt(inp.value));
    e.preventDefault();
  });

function fibonacciGen(inp) {
  const element = [];
  for (let inpu = 0; inpu < inp; inpu++) {
    if (element.length === 0) {
      element.push(0);
    } else if (element.length === 1) {
      element.push(1);
    } else {
      const newNum = element[element.length - 1] + element[element.length - 2];
      element.push(newNum);
    }
  }
  resultInp.value = element.join(" ");
  console.log(resultInp.value);
}
