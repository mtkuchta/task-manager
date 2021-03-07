import types from '../assets/types/userTypes';

export const logIn = (user) => {
  return { type: types.LOG_IN, user };
};

export const setLogError = (message) => {
  return { type: types.LOG_ERROR, message };
};
export const clearLogError = () => {
  return { type: types.CLEAR_ERROR };
};
