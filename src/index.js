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
  return  tasks.sort((x, y) => x.index - y.index);
};
const displayTasks = () => {
  const sortedTasked = sortTasksByIndex(tasks);
  sortedTasked.map((task) => {
    const li = document.createElement("li");
    li.textContent = task.description;
    const list = document.getElementById("task-list");
    list.append(li);
  });
};

document.addEventListener("DOMContentLoaded", () => {
  displayTasks();
});
