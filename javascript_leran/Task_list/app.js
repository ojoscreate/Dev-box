// define UI vars
// document.body.style.background = "red";
const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-task");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");

// Adding overall event listerner function

loadEvents();

// To load all events

function loadEvents() {
  // DOM content loader
  document.addEventListener("DOMContentLoaded", getTasks);
  // Add Tasks
  form.addEventListener("submit", addTask);

  // Remove Task
  taskList.addEventListener("click", removeTask);

  // Clear Tasks
  clearBtn.addEventListener("click", clearTask);
  // Filter Tasks
  filter.addEventListener("keyup", filterTask);
}
// Get tasks from local storage
function getTasks() {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  tasks.forEach(function (tasks) {
    // Creating the list items
    const listItems = document.createElement("li");
    // Adding Classes to the li
    listItems.className = "collection-item";
    // adding and appending a text node to the list Items
    listItems.appendChild(document.createTextNode(tasks));
    // creating the link element
    const link = document.createElement("a");
    // Adding classes
    link.className = "delete-item secondary-content";

    // Adding inner HTML to the link
    link.innerHTML = `<i class="fa fa-remove"></i>`;
    // Appending the link to the list items
    listItems.appendChild(link);

    // Checking if its working
    //   console.log(listItems);
    taskList.appendChild(listItems);
  });
}

// Adding Tasks

function addTask(e) {
  if (taskInput.value === "") {
    alert("Add a Tasks");
  } else {
    // Creating the list items
    const listItems = document.createElement("li");
    // Adding Classes to the li
    listItems.className = "collection-item";
    // adding and appending a text node to the list Items
    listItems.appendChild(document.createTextNode(taskInput.value));
    // creating the link element
    const link = document.createElement("a");
    // Adding classes
    link.className = "delete-item secondary-content";

    // Adding inner HTML to the link
    link.innerHTML = `<i class="fa fa-remove"></i>`;
    // Appending the link to the list items
    listItems.appendChild(link);

    // Checking if its working
    //   console.log(listItems);
    taskList.appendChild(listItems);

    // saving / persist to local storage
    taskstoLocalStorage(taskInput.value);
    // Clear Task
    taskInput.value = "";
  }

  e.preventDefault();
}

function taskstoLocalStorage(task) {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Remove Task Function
function removeTask(e) {
  if (e.target.parentElement.classList.contains("delete-item")) {
    if (confirm("Delete Tasks?")) {
      e.target.parentElement.parentElement.remove();

      // Remove from Local storage
      removeTasksLocalStorage(e.target.parentElement.parentElement);
    }
  }
}

// Remove from Local storage
function removeTasksLocalStorage(taskList) {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  tasks.forEach(function (task, index) {
    if (taskList.textContent === task) {
      tasks.splice(index, 1);
    }
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Clear Tasks function
function clearTask(e) {
  if (confirm("Clear all Tasks?")) {
    // Easy but Slower way
    // taskList.innerHTML = "";

    // faster way
    while (taskList.firstChild) {
      taskList.removeChild(taskList.firstChild);
    }
    clearAllTaskLocalStorage();
  }
}

function clearAllTaskLocalStorage() {
  localStorage.clear();
}

// Filter tasks function
function filterTask(e) {
  const text = e.target.value.toLowerCase();
  //   console.log(text);
  document.querySelectorAll(".collection-item").forEach(function (task) {
    const item = task.firstChild.textContent;
    if (item.toLowerCase().indexOf(text) != -1) {
      task.style.display = "block";
    } else {
      task.style.display = "none";
    }
  });
}
