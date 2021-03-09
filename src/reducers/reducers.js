import { combineReducers } from 'redux';

import { taskReducer } from './taskReducer';
import { dragAndDropReducer } from './dragAndDropReducer';
import { userReducer } from './userReducer';
import { logInReducer } from './logInReducer';
import { signUpReducer } from './signUpReducer';
import { addTaskReducer } from './addTaskReducer';

export const reducers = combineReducers({
  tasks: taskReducer,
  dragAndDrop: dragAndDropReducer,
  user: userReducer,
  logInForm: logInReducer,
  signUpForm: signUpReducer,
  addTask: addTaskReducer,
});
