import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/action/authActions";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Use useNavigate directly inside the component

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(""); // Clear previous errors

    try {
      // Dispatch the login action and pass navigate function
      await dispatch(login(email, password, navigate));

      // Reset form and loading state
      setEmail("");
      setPassword("");
      setLoading(false);
    } catch (error) {
      setError(error.message);
      console.error("Error logging in:", error.message);
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#0e3f5b]">
      <div className="flex-col items-center justify-center p-8 mx-auto bg-white rounded-lg shadow-lg max-md">
        <h2 className="mb-6 text-2xl font-bold text-center">Admin Login</h2>
        <form className="w-96" onSubmit={handleSubmit}>
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
