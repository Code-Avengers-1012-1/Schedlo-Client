/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const ForgotPassword = () => {
    
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email)
  };


  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Forgot Password</h2>
      <form onSubmit={handleSubmit}>
        <label className="block mb-2 text-sm font-medium text-gray-700">
          Enter Your Email
        </label>
        <input
        onChange={(e) => setEmail(e.target.value)}
          type="email"
          name="email"
          placeholder="Your Email"
          className="w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
        >
          Send Reset Link
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;
