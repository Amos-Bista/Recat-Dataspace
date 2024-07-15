// src/reducers/authReducer.js
const initialState = {
    isAuthenticated: false,
    user: null,
    error: null
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN_SUCCESS':
        return {
          ...state,
          isAuthenticated: true,
          user: action.payload
        };
      case 'LOGIN_FAILURE':
        return {
          ...state,
          error: action.payload
        };
      case 'LOGOUT':
        return initialState;
      default:
        return state;
    }
  };
  
  export default authReducer;
  