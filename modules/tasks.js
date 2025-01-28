import Task from "./task";

const addTask = (tasks, description) => {
  let index = tasks.length + 1;
  const task = new Task(index, description, false);
  tasks.push(task);
  return tasks;
};

const removeTask = (index) => {
  tasks = tasks.filter((task) => {
    index !== task.index;
  });
  return task;
};

export { addTask, removeTask };
