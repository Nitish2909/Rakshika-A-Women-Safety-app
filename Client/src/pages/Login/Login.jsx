import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../services/axios.js";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axiosInstance.post(
        "http://localhost:3000/api/auth/login",
        { email, password },
      );
      // navigate("/dashboard");
      console.log(response.data)
    } catch (error) {
      console.error("Login Error", error);
    }
    setEmail("");
    setPassword("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-500 via-pink-300 to-pink-900 px-4">
      {/* Card */}
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mb-6 tracking-wide">
          Welcome Back 👋
        </h2>
        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Email */}
          <label className="font-medium">Email:</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Enter your email"
            className="px-4 py-3 rounded-lg  border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          />

          {/* Password */}
          <label className="font-medium">Password:</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Enter your password"
            className="px-4 py-3 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          />

          {/* Forgot Password */}
          {/* <div className="text-right text-sm text-gray-400 hover:text-indigo-400 cursor-pointer">
            Forgot Password?
          </div> */}

          {/* Button */}
          <button
            onClick={handleSubmit}
            type="submit"
            className="mt-2 py-3 rounded-lg bg-pink-500 hover:bg-pink-600 transition duration-300 font-medium shadow-md hover:scale-[1.02]"
          >
            Login
          </button>
        </form>
        {/* Signup */}
        <p className="text-center text-lg text-gray-400 mt-6">
          Don’t have an account?{" "}
          <span
            onClick={() => navigate("/signup")}
            className="text-pink-400 hover:underline font-medium cursor-pointer"
          >
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
