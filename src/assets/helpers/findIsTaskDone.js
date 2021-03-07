export const findIsTaskDone = (tasks, id) => {
  const index = tasks.findIndex((el) => el.id === id);
  return tasks[index].isDone;
};
