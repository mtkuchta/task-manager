import types from '../assets/types/taskTypes';

export const fetchTasks = (tasks) => {
  return { type: types.FETCH_TASKS, tasks };
};

export const addTask = (task) => {
  return { type: types.ADD_TASK, task };
};

export const deleteTask = (task) => {
  return { type: types.DELETE_TASK, task };
};

export const changeTaskStatus = (task) => {
  return { type: types.CHANGE_TASK_STATUS, task };
};

export const dropTask = (payload) => {
  return { type: types.CHANGE_TASK_ATTRIBUTES, payload };
};
