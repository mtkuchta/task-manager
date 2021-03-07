export const changeTaskStatus = (tasks, taskID) => {
  const tasksList = [...tasks];
  tasksList.forEach((task) => {
    if (task.id === taskID) {
      task.isDone = !task.isDone;
    }
  });
  return tasksList;
};
