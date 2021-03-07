import types from '../assets/types/addTaskTypes';

export const changeTaskInput = (payload) => {
  return { type: types.CHANGE_TASK_INPUT, payload };
};

export const clearTaskInput = () => {
  return { type: types.CLEAR_TASK_INPUT };
};
