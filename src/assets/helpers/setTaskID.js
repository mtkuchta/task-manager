export const setTaskID = (tasks) => {
  const idArr = [];
  if (tasks.length >= 1) {
    tasks.map((task) => idArr.push(task.id));
    idArr.sort((a, b) => {
      return a - b;
    });

    return idArr[idArr.length - 1] + 1;
  }

  return 0;
};
