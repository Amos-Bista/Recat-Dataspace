// src/actions/authActions.js
export const login = (email, password, token, navigate) => {
  return (dispatch) => {
    
    // Simulate an API call
    console.log({ token });


    if (email === "user" && password === "password") {
    
    navigate("/adminhome");
    dispatch({ type: "LOGIN_SUCCESS", payload: { token } });

    } else {
      dispatch({ type: "LOGIN_FAILURE", payload: "Invalid credentials" });
    }
  };
};

export const logout = () => {
  return {
    type: "LOGOUT",
  };
};
