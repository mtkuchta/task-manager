import types from '../assets/types/signUpFormTypes';

const initialState = {
  email: '',
  password: '',
  confirmedPassword: '',
};

export const signUpReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CHANGE_SIGNUP_INPUT:
      return { ...state, [action.payload.name]: action.payload.value };
    case types.CLEAR_SIGNUP_INPUT:
      return { email: '', password: '', confirmedPassword: '' };
    case types.CLEAR_PASSWORDS:
      return { ...state, password: '', confirmedPassword: '' };
    default: {
      return state;
    }
  }
};
