import displayDiscriptionInput from "../modules/displayDescriptionInput.js";
import displayTasks from "../modules/displayTasks.js";
import clickHamburgButton from "../modules/handleTasks.js";
import "./style.css";

document.addEventListener("DOMContentLoaded", () => {
  console.log("loaded page...");

  let tasks = JSON.parse(localStorage.getItem("tasks"));
  if (!tasks) tasks = [];

  displayDiscriptionInput(tasks);
  displayTasks(tasks);
  clickHamburgButton();
});
