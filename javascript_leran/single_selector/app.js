const Taskes = document.getElementById ("task-title");
Taskes.style.background = "#333000";
Taskes.style.color = " #f6f6f6";
Taskes.style.padding = "10px";
Taskes.style.fontSize = "28px";

// console.log( document.getElementById("task-title").classList, Taskes.id);

// CHANGING CONTENT
Taskes.textContent = "10px";
Taskes.innerText = "20px";
Taskes.innerHTML = "<span> MY TASKS</span>";


document.querySelector("li").style.color = "skyblue";
document.querySelector("li:last-child").style.color = "rgb(146, 216, 54)";
document.querySelector("li:nth-child(4)").style.color = "hotpink"; 
document.querySelector("ul li:nth-child(2)").style.color = "red";

