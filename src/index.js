import "./style.css";

const tasks = [
  { description: "wash the dishes", completed: true, index: 2 },
  {
    description: "complete To Do list project",
    completed: false,
    index: 4,
  },
  { description: "read a book", completed: true, index: 3 },
  { description: "go to the gym", completed: false, index: 1 },
];

const sortTasksByIndex = (tasks) => {
  return tasks.sort((x, y) => x.index - y.index);
};
const displayTasks = () => {
  const sortedTasked = sortTasksByIndex(tasks);
  sortedTasked.map((task) => {
    const li = document.createElement("li");
    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.id = "checkbox";
    checkBox.name = "checkbox";
    checkBox.value = task.completed;
    const label = document.createElement("label");
    label.for = checkBox.id;
    label.textContent = task.description;
    li.append(checkBox);
    li.append(label);
    const list = document.getElementById("task-list");
    list.insertBefore(li, document.getElementById("btn"));
  });
};

document.addEventListener("DOMContentLoaded", () => {
  displayTasks();
});
