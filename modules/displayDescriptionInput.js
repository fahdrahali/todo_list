import Icon from "../assets/images/enter.png";
import displayTasks from "./displayTasks";
import { addTask } from "./tasks";

const displayDiscriptionInput = () => {
  const descriptionInput = document.createElement("input");
  descriptionInput.type = "text";
  descriptionInput.id = "description";
  descriptionInput.name = "description";
  descriptionInput.placeholder = "Add to your list...";

  const enterButton = document.createElement("button");

//   const enterIcon = new Image();
//   enterIcon.src = Icon;
//   enterButton.append(enterIcon);
//   enterButton.id = "btn-enter";
  document.getElementById("input-task").append(descriptionInput);
//   document.getElementById("input-task").append(enterButton);

  document
    .getElementById("description")
    .addEventListener("keypress", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        let tasks = JSON.parse(localStorage.getItem("tasks"));
        if (!tasks) tasks = [];
        const input = document.getElementById("description").value;
        tasks = addTask(tasks, input);
        localStorage.setItem("tasks", JSON.stringify(tasks));
        if (document.querySelector("#task")) {
          document.querySelectorAll("#task").forEach((task) => task.remove());
        }
        displayTasks(tasks);
        document.getElementById("description").value = "";
      }
    });
};

export default displayDiscriptionInput;
