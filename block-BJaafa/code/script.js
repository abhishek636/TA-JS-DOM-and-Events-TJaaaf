function main(){
  let user = "Abhishek";

var newDate = new Date();

let hours = newDate.getHours();
let mins = newDate.getMinutes();
let secs = newDate.getSeconds();
let days = newDate.getDay();
let dates = newDate.getDate();
let months = newDate.getMonth();
let years = newDate.getFullYear();

function dateAndTime() {
  
  let dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];


  let hour = document.querySelector("#hours");

  if (hours <= 9) {
    hour.innerText = `0${hours}`;
  } else {
    hour.innerText = `${hours}`;
  }

  let mint = document.querySelector("#min");

  if (mins <= 9) {
    mint.innerText = `0${mins}`;
  } else {
    mint.innerText = `${mins}`;
  }

  let secd = document.querySelector("#sec");

  if (secs <= 9) {
    secd.innerText = `0${secs}`;
  } else {
    secd.innerText = `${secs}`;
  }

  document.querySelector("#day").innerText = dayNames[days]
  document.querySelector("#month").innerText = monthNames[months];
  document.querySelector("#date").innerText = dates;
  document.querySelector("#year").innerText = years;
}

dateAndTime();

//Greeting, Wallpaper and Quote

function features() {

  let h1 = document.querySelector("h1");

  if (hours < 12) {
    h1.innerText = `Good Morning, ${user}!`;
  } else if (hours < 16) {
    h1.innerText = `Good Afternoon, ${user}!`;
  } else if (hours < 22) {
    h1.innerText = `Good Evening, ${user}!`;
  } else {
    h1.innerText = `Good Night, ${user}!`
  }

  document.querySelector(".quoteText").innerText = quotes[dates] || "";
  document.querySelector(".window").style.backgroundImage = `url(${images[hours].image})`;
}

setInterval(features, 1000);

//Todo

let input = document.querySelector("#text");
let addTodo = document.querySelector("#addTodo");
let root = document.querySelector(".ul");
let all = document.querySelector("#all");
let completed = document.querySelector("#completed");
let pending = document.querySelector("#pending");
let clear = document.querySelector("#clear");
let body = document.querySelector("body");
// Fetching data from local storage
let allTodos = JSON.parse(localStorage.getItem("todos")) || [];

// Handeling Deleted Tasks
function handleDelete(event) {
  let id = event.target.dataset.id;
  allTodos.splice(id, 1);

  createUI();
  localStorage.setItem("todos", JSON.stringify(allTodos));
}

// Handeling Completed Tasks
function handleChange(event) {
  let id = event.target.dataset.id;
  allTodos[id].isCompleted = !allTodos[id].isCompleted;

  createUI();
  localStorage.setItem("todos", JSON.stringify(allTodos));
}

// Storning Data
function handleInput(event) {
  if ((event.keyCode === 13 || event.type === "click") && input.value !== "") {
    let todo = {
      name: input.value,
      isCompleted: false,
    };
    allTodos.push(todo);
    input.value = "";

    createUI();
  }
  localStorage.setItem("todos", JSON.stringify(allTodos));
}

// Creating UI
function createUI() {
  root.innerHTML = "";

  allTodos.forEach((todo, index) => {
    display(todo, index);
  });
}

function display(task, ind) {
  let li = document.createElement("li");
  li.classList.add("flex", "justify-between", "align-center");
  let div = document.createElement("div");
  div.classList.add("flex", "justify-between", "align-center");
  let check = document.createElement("input");
  check.type = "checkbox";
  check.classList.add("check");
  check.checked = task.isCompleted;
  check.setAttribute("data-id", ind);
  let p = document.createElement("p");
  p.classList.add("para");
  p.innerText = task.name;
  let cross = document.createElement("span");
  cross.classList.add("cross");
  cross.innerHTML = "&times;";
  cross.setAttribute("data-id", ind);

  div.append(check, p);
  li.append(div, cross);

  root.append(li);
  root.style.border = "2px solid red";
  root.style.padding = "1rem";
  root.style.borderRadius = ".5rem";
  root.style.marginTop = ".8rem";

  check.addEventListener("change", handleChange);
  cross.addEventListener("click", handleDelete);
}

input.addEventListener("keyup", handleInput);
addTodo.addEventListener("click", handleInput);

// Displaying all the tasks
function handleAll() {
  root.innerHTML = "";
  allTodos.forEach((todo, index) => {
    display(todo, index);
  });
}

all.addEventListener("click", handleAll);

// Displaying the completed tasks
function handleCompleted() {
  root.innerHTML = "";
  allTodos.forEach((todo, index) => {
    if (todo.isCompleted === true) {
      display(todo, index);
    }
  });
}

completed.addEventListener("click", handleCompleted);

// Displaying the pending tasks
function handlePending() {
  root.innerHTML = "";
  allTodos.forEach((todo, index) => {
    if (todo.isCompleted === false) {
      display(todo, index);
    }
  });
}

pending.addEventListener("click", handlePending);

// Clearing the Todo List
function handleClear() {
  root.innerHTML = "";

  allTodos.splice(0, allTodos.length);
  allTodos.forEach((todo, index) => {
    display(todo, index);
  });
  root.style.border = "none";
}

clear.addEventListener("click", handleClear);

// next
let setting = document.querySelector(".setting");

function handleSetting() {
  setting.style.color = "white";
  let custom = document.querySelector(".custom");
  custom.style.display = "flex";
}

setting.addEventListener("click", handleSetting);
}

main();