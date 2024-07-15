// src/actions/authActions.js
export const login = (username, password) => {
    return (dispatch) => {
      // Simulate an API call


      
      if (username === 'user' && password === 'password') {
        dispatch({ type: 'LOGIN_SUCCESS', payload: { username } });
      } else {
        dispatch({ type: 'LOGIN_FAILURE', payload: 'Invalid credentials' });
      }
    };
  };
  
  export const logout = () => {
    return {
      type: 'LOGOUT'
    };
  };
  