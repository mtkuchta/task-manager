export const fetchTasks = (tasks) => {
  return { type: 'FETCH_TASKS', tasks };
};

export const addTask = (task) => {
  return { type: 'ADD_TASK', task };
};

export const deleteTask = (task) => {
  return { type: 'DELETE_TASK', task };
};

export const changeTaskStatus = (task) => {
  return { type: 'CHANGE_TASK_STATUS', task };
};

export const startDrag = (task) => {
  return { type: 'START_DRAG', task };
};

export const dragOver = (container) => {
  return { type: 'DRAG_OVER', container };
};

export const dragLeave = () => {
  return { type: 'DRAG_LEAVE' };
};

export const dropTask = (payload) => {
  return { type: 'CHANGE_TASK_ATTRIBUTES', payload };
};

export const clearState = () => {
  return { type: 'DROP_TASK' };
};

export const logIn = (user) => {
  return { type: 'LOG_IN', user };
};

export const setLogError = (message) => {
  return { type: 'LOG_ERROR', message };
};
export const clearLogError = () => {
  return { type: 'CLEAR_ERROR' };
};
