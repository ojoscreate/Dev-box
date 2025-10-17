const btn = document.querySelector(".btn");
btn.addEventListener("click", logIn);

function logIn() {
  const user = document.querySelector("#username").value;
  const pass = document.querySelector("#password").value;
  const msg = document.querySelector("#msg");
  if (user === "" || pass === "") {
    msg.style.color = "red";
    msg.innerText = "Insert Username and Password";
  } else if (user === "admin" && pass === "1234") {
    msg.style.color = "lightgreen";
    msg.innerText = "✅Login Successful";
  } else {
    msg.style.color = "red";
    msg.innerText = "❌ Invalid Username or Password";
  }
}
