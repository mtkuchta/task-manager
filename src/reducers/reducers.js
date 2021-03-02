import { combineReducers } from 'redux';

import { taskReducer } from './taskReducer';
import { dragAndDropReducer } from './dragAndDropReducer';
import { userReducer } from './userReducer';

export const reducers = combineReducers({ tasks: taskReducer, dragAndDrop: dragAndDropReducer, user: userReducer });
