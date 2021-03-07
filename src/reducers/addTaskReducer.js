import types from '../assets/types/addTaskTypes';

const initialState = {
  task: '',
  isImportant: false,
  isUrgent: false,
};

export const addTaskReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CHANGE_TASK_INPUT:
      return { ...state, [action.payload.name]: action.payload.value };
    case types.CLEAR_TASK_INPUT:
      return { task: '', isImportant: false, isUrgent: false };
    default: {
      return state;
    }
  }
};
