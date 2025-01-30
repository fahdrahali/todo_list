import dotsIcon from "../assets/images/menuDots.png";
import binIcon from "../assets/images/trash.png";
import { removeTask } from "./tasks";

const sortTasksByIndex = (tasks) => {
  return tasks.sort((x, y) => x.index - y.index);
};
const displayTasks = (tasks) => {
  const sortedTasked = sortTasksByIndex(tasks);
  sortedTasked.map((task) => {
    const li = document.createElement("li");
    li.id = "task";
    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.id = "checkbox";
    checkBox.name = "checkbox";
    checkBox.value = task.completed;

    // create input task
    const inputTask = document.createElement("input");
    inputTask.type = "text";
    inputTask.classList.add("input-task-item");
    inputTask.name = "input-task-item";
    inputTask.value = task.description;
    inputTask.setAttribute("disabled", true);

    // add a menu dots icon
    const menuDot = new Image();
    menuDot.src = dotsIcon;
    menuDot.id = "menu-dots";
    menuDot.alt = "menu dots";
    li.append(checkBox);
    li.append(inputTask);
    li.append(menuDot);

    const list = document.getElementById("task-list");
    list.insertBefore(li, document.getElementById("btn"));

    menuDot.addEventListener("click", () => {
      li.setAttribute("style", "background-color: yellow");
      console.log(li);

      // create a trash image
      menuDot.remove();
      const img = new Image();
      img.src = binIcon;
      img.id = "trash";
      img.alt = "trash";
      li.append(img);

      img.addEventListener("click", () => {
        const index = task.index;
        const newTasks = removeTask(index, sortedTasked);
        localStorage.setItem("tasks", JSON.stringify(newTasks));
        if (document.querySelectorAll("#task")) {
          document.querySelectorAll("#task").forEach((task) => task.remove());
        }
        displayTasks(newTasks);
      });

      inputTask.removeAttribute("disabled");
      inputTask.setAttribute("style", "background-color: yellow");
      inputTask.focus();
      inputTask.addEventListener("keypress", (event) => {
        const oldDescription = inputTask.value;

        if (event.key === "Enter") {
          if (task.description !== oldDescription) {
            task.description = inputTask.value;
            localStorage.setItem("tasks", JSON.stringify(tasks));
          }
          inputTask.removeAttribute("style");
          li.removeAttribute("style", "background-color: yellow");
          inputTask.setAttribute("disabled", true);
          img.remove();
          li.append(menuDot);
        }
      });
    });
  });
};

export default displayTasks;
