import { combineReducers } from 'redux';

import { taskReducer } from './taskReducer';
import { dragAndDropReducer } from './dragAndDropReducer';

export const reducers = combineReducers({ tasks: taskReducer, dragAndDrop: dragAndDropReducer });
