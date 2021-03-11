import types from '../assets/types/userTypes';

const initialState = { currentUser: null, error: null, isDataLoaded: false };

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOG_IN:
      return { ...state, currentUser: action.user };
    case types.LOG_ERROR:
      return { ...state, error: action.message };
    case types.CLEAR_ERROR:
      return { ...state, error: null };
    case types.HIDE_LOADER:
      return { ...state, isDataLoaded: true };
    case types.CLEAR_USER_DATA:
      return { ...state, isDataLoaded: false };
    default:
      return state;
  }
};
