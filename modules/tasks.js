import Task from "./task";

let tasks = [
  { description: "wash the dishes", completed: true, index: 2 },
  {
    description: "complete To Do list project",
    completed: false,
    index: 4,
  },
  { description: "read a book", completed: true, index: 3 },
  { description: "go to the gym", completed: false, index: 1 },
];

const addTask = (index, description) => {
  const task = new Task(index, description, false);
  tasks = tasks.push(task);
  return task;
};

const removeTask = (index) => {
  tasks = tasks.filter((task) => {
    index !== task.index;
  });
  return task;
};

export { addTask, removeTask };
