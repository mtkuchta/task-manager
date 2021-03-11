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

export const setIsDataLoaded = () => {
  return { type: types.HIDE_LOADER };
};

export const clearUserData = () => {
  return { type: types.CLEAR_USER_DATA };
};
