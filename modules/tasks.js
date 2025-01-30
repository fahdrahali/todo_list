import Task from "./task";

const addTask = (tasks, description) => {
  let index = tasks.length + 1;
  const task = new Task(index, description, false);
  tasks.push(task);
  return tasks;
};

const updateTask = (tasks, task) => {
  return tasks.splice(task.index, 1, task);
};

const removeTask = (index, tasks) => {
  let newTasks = tasks.filter((task) => {
    return index !== task.index;
  });
  return newTasks;
};

export { addTask, updateTask, removeTask };
