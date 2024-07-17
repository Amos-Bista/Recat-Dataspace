import { toast } from "react-toastify";

// src/actions/authActions.js
export const login = (email, password, navigate) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/auth/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      if (!response.ok) {
        // Handle non-200 status codes
        const errorData = await response.json();
        throw new Error(errorData.message || "Invalid credentials");
      }

      // Ensure response is valid JSON
      const data = await response.json();
      const { token } = data;

      // Save token to localStorage
      localStorage.setItem("token", token);

      // Dispatch success action
      dispatch({ type: "LOGIN_SUCCESS", payload: { token } });

      // Navigate to /adminHome using passed navigate function
      navigate("/adminHome");

      // Show success toast
      toast.success("Login Success");

    } catch (error) {
      // Dispatch failure action or handle error
      dispatch({ type: "LOGIN_FAILURE", payload: error.message || "An error occurred during login" });
      throw error; // rethrow the error so that the component can catch it
    }
  };
};

export const logout = () => {
  return {
    type: "LOGOUT",
  };
};
