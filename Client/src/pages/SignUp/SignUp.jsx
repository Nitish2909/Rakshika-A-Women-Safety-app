import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from '../../services/axios.js';

const SignUp = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission logic here

   try {
     const response = await axiosInstance.post("http://localhost:4000/api/auth/register", { name, email,phone, password })
    console.log(response.data)
    navigate("/login");

     alert("Registration Successful!");

    setName("");
    setEmail("");
    setPhone("");
    setPassword("");

    navigate("/login");
    
   } catch (error) {
       console.error(error);
    alert(
      error.response?.data?.message ||
      "Something went wrong"
    );
  }
   }
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 px-4">
      {/* Card */}
      <div className="w-full max-w-md bg-gray-900 text-white rounded-2xl shadow-2xl p-8">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mb-6 tracking-wide">
          Create Account 🚀
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Name */}
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          />

          {/* Phone */}
          <input
            type="tel"
            placeholder="Enter PhoneNumber"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          />

          {/* Password */}
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          />

          {/* Confirm Password */}
          <input
            type="password"
            placeholder="Confirm Password"
            className="px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          />

          {/* Button */}
          <button
            // onSubmit={handleSubmit}
            type="submit"
            className="mt-2 py-3 rounded-lg bg-pink-500 hover:bg-pink-600 transition duration-300 font-medium shadow-md hover:scale-[1.02]"
          >
            Sign Up
          </button>
        </form>

        {/* Social Signup */}
        {/* <div className="flex flex-col gap-3">

          <button className="flex items-center justify-center gap-3 py-2 rounded-lg bg-white text-black font-medium hover:bg-gray-200 transition shadow">
            Continue with Google
          </button>
          <button className="flex items-center justify-center gap-3 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition shadow text-white">
            Continue with Facebook
          </button>
        </div> */}

        {/* Login Redirect */}
        <p className="text-center text-lg text-gray-400 mt-6">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-pink-400 hover:underline font-medium cursor-pointer"
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
