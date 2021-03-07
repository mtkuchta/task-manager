import types from '../assets/types/dragAndDropTypes';

const initialState = { container: null, draggedTask: null };

export const dragAndDropReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.START_DRAG:
      return { ...state, draggedTask: action.task };
    case types.DRAG_OVER:
      return { ...state, container: action.container };
    case types.DRAG_LEAVE:
      return { ...state, container: null };
    case types.DROP_TASK:
      return { ...state, draggedTask: null, container: null };
    default:
      return state;
  }
};
