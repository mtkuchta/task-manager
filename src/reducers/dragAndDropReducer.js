const initialState = { container: null, draggedTask: null };

export const dragAndDropReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'START_DRAG':
      return { ...state, draggedTask: action.task };
    case 'DRAG_OVER':
      return { ...state, container: action.container };
    case 'DRAG_LEAVE':
      return { ...state, container: null };
    case 'DROP_TASK':
      return { ...state, draggedTask: null, container: null };
    default:
      return state;
  }
};
