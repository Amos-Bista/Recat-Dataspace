import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../store/action/authActions";
import { useNavigate } from "react-router-dom";
import AdminHome from "./frontend/AdminHome";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

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
        throw new Error("Login failed");
      }

      const data = await response.json();
      const { token } = data; // Assuming your API returns a token in the response

      // Save token to localStorage
      localStorage.setItem("token", token);

      // Dispatch the login action
      dispatch(login(email, password) );

      // Reset form and loading state
      setEmail("");
      setPassword("");
      setLoading(false);

      // Navigate to /adminHome
      return <useNavigate to={<AdminHome />} />;
    } catch (error) {
      console.error("Error logging in:", error.message);
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 bg-[#0e3f5b]/90">
      <div className="flex-col items-center justify-center p-8 mx-auto bg-white rounded-lg shadow-lg max-md">
        <h2 className="mb-6 text-2xl font-bold text-center">Admin Login</h2>
        <form className="w-96">
          <div className="flex justify-center mb-4">
            <input
              id="email"
              type="text"
              placeholder="Username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm w-72 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="flex justify-center mb-4">
            <input
              id="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="block px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm w-72 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="flex justify-center">
            {/* Display error message */}
            {error && <p className="mb-4 text-red-500">{error}</p>}
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className={`w-72 px-4 py-2 text-white bg-[#0D5077] rounded-md ${
                loading
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-[#0e3f5b] focus:outline-none focus:ring-2 focus:ring-[#0D5077] focus:ring-offset-2"
              }`}
              disabled={loading}
              onClick={handleSubmit}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
