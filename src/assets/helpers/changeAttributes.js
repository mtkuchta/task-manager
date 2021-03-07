import { changeTaskAttributes } from './changeTaskAttributes';

export const changeAttributes = (tasks, payload) => {
  const tasksList = [...tasks];
  const index = tasksList.findIndex((element) => element.id === parseInt(payload.transferedTask.id));
  tasksList.splice(index, 1);
  tasksList.push(changeTaskAttributes(payload.container, payload.transferedTask));
  return tasksList;
};
