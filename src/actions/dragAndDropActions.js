import types from '../assets/types/dragAndDropTypes';

export const startDrag = (task) => {
  return { type: types.START_DRAG, task };
};

export const dragOver = (container) => {
  return { type: types.DRAG_OVER, container };
};

export const dragLeave = () => {
  return { type: types.DRAG_LEAVE };
};

export const clearState = () => {
  return { type: types.DROP_TASK };
};
