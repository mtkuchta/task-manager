export const deleteTask = (tasks, taskID) => {
  const tasksList = [...tasks];
  const taskToDeleteIndex = tasksList.findIndex((task) => task.id === taskID);
  tasksList.splice(taskToDeleteIndex, 1);
  return tasksList;
};
