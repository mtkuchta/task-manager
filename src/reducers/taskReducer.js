import { renumberTasks } from '../assets/helpers/renumberTasks';
import { changeTaskAttributes } from '../assets/helpers/changeTaskAttributes';

const initialState = {
  tasks: [
    { description: 'Zrobić portfolio', id: 0, isImportant: true, isUrgent: true, isDone: false },
    { description: 'Napisać CV', id: 1, isImportant: true, isUrgent: true, isDone: false },
    { description: 'skoczyć na bangi', id: 2, isImportant: false, isUrgent: false, isDone: false },
    { description: 'Odpisać na maile LinkedIn', id: 3, isImportant: false, isUrgent: true, isDone: false },
    { description: 'Kupić ciuchy', id: 4, isImportant: true, isUrgent: false, isDone: false },
  ],
};

const pushTask = (tasks, task) => {
  const newArr = [...tasks];
  newArr.push(task);
  return newArr;
};

const deleteTask = (tasks, taskID) => {
  const tasksList = [...tasks];
  const taskToDeleteIndex = tasksList.findIndex((task) => task.id === taskID);
  tasksList.splice(taskToDeleteIndex, 1);
  renumberTasks(tasksList);
  return tasksList;
};

const changeTaskStatus = (tasks, taskID) => {
  const tasksList = [...tasks];
  tasksList.forEach((task) => {
    if (task.id === taskID) {
      task.isDone = !task.isDone;
    }
  });
  return tasksList;
};

const changeAttributes = (tasks, payload) => {
  const tasksList = [...tasks];
  tasksList.splice(parseInt(payload.transferedTask.id), 1);
  tasksList.push(changeTaskAttributes(payload.container, payload.transferedTask));
  renumberTasks(tasksList);
  return tasksList;
};

export const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return { ...state, tasks: pushTask(state.tasks, action.task) };
    case 'DELETE_TASK':
      return { ...state, tasks: deleteTask(state.tasks, action.task) };
    case 'CHANGE_TASK_STATUS':
      return { ...state, tasks: changeTaskStatus(state.tasks, action.task) };
    case 'CHANGE_TASK_ATTRIBUTES':
      return { ...state, tasks: changeAttributes(state.tasks, action.payload) };
    default: {
      return state;
    }
  }
};
