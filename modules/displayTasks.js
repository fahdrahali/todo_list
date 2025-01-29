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
    const label = document.createElement("label");
    label.for = checkBox.id;
    label.textContent = task.description;

    // add a menu dots icon
    const menuDot = new Image();
    menuDot.src = dotsIcon;
    menuDot.id = "menu-dots";
    menuDot.alt = "menu dots";
    li.append(checkBox);
    li.append(label);
    li.append(menuDot);
    const list = document.getElementById("task-list");
    list.insertBefore(li, document.getElementById("btn"));
  });
};

export default displayTasks;
