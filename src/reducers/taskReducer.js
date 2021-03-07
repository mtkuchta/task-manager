import { pushTask } from '../assets/helpers/pushTask';
import { deleteTask } from '../assets/helpers/deleteTask';
import { changeTaskStatus } from '../assets/helpers/changeTaskStatus';
import { changeAttributes } from '../assets/helpers/changeAttributes';
import types from '../assets/types/taskTypes';

const initialState = {
  tasks: [],
};

export const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_TASKS:
      return { ...state, tasks: action.tasks };
    case types.ADD_TASK:
      return { ...state, tasks: pushTask(state.tasks, action.task) };
    case types.DELETE_TASK:
      return { ...state, tasks: deleteTask(state.tasks, action.task) };
    case types.CHANGE_TASK_STATUS:
      return { ...state, tasks: changeTaskStatus(state.tasks, action.task) };
    case types.CHANGE_TASK_ATTRIBUTES:
      return { ...state, tasks: changeAttributes(state.tasks, action.payload) };
    default: {
      return state;
    }
  }
};
