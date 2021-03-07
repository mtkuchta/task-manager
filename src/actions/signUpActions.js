import types from '../assets/types/signUpFormTypes';

export const changeSignUpInput = (payload) => {
  return { type: types.CHANGE_SIGNUP_INPUT, payload };
};

export const clearSignUpInput = () => {
  return { type: types.CLEAR_SIGNUP_INPUT };
};

export const clearSignUpPasswords = () => {
  return { type: types.CLEAR_PASSWORDS };
};
