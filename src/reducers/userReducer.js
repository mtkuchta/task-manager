const initialState = { currentUser: null, error: null };

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOG_IN':
      return { ...state, currentUser: action.user };
    case 'LOG_ERROR':
      return { ...state, error: action.message };
    case 'CLEAR_ERROR':
      return { ...state, error: null };
    default:
      return state;
  }
};
