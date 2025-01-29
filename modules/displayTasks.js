import dotsIcon from "../assets/images/menuDots.png";

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
    inputTask.type = 'text';
    inputTask.id = 'input-task-item';
    inputTask.name = 'input-task-item';
    inputTask.value = task.description;
    inputTask.setAttribute('disabled', true)

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
  });
};

export default displayTasks;
