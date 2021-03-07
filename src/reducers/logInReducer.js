import types from '../assets/types/logInFormTypes';

const initialState = {
  email: '',
  password: '',
};

export const logInReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CHANGE_INPUT:
      return { ...state, [action.payload.name]: action.payload.value };
    case types.CLEAR_INPUT:
      return { email: '', password: '' };
    default: {
      return state;
    }
  }
};
