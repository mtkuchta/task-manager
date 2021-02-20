export const renumberTasks = (tasks) => {
  tasks.forEach((task, index) => {
    task.id = index;
  });
};
