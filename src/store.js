import { createStore } from 'redux';
import { reducers } from './reducers/reducers';

const actionSanitizer = (action) =>
  action.type === ('DRAG_LEAVE' || 'DRAG_OVER') && action.data ? { ...action, data: '<<LONG_BLOB>>' } : action;

export const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__({
      actionSanitizer,
      stateSanitizer: (state) => (state.data ? { ...state, data: '<<LONG_BLOB>>' } : state),
    })
);
