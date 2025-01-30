import displayDiscriptionInput from "../modules/displayDescriptionInput";
import displayTasks from "../modules/displayTasks";
import clickHamburgButton from "../modules/handleTasks";
import "./style.css";

document.addEventListener("DOMContentLoaded", () => {
  let tasks = JSON.parse(localStorage.getItem("tasks"));
  if (!tasks) tasks = [];

  displayDiscriptionInput();
  displayTasks(tasks);
  clickHamburgButton();
});
