export const pushTask = (tasks, task) => {
  const newArr = [...tasks];
  newArr.push(task);
  return newArr;
};
