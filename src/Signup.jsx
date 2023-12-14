import React from "react";

import backgroundImage from "../public/Image2.jpg";

const SignUp = () => {
  return (
    <div
      className="flex justify-center items-center min-h-screen"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="text-white text-center">
        <h1 className="text-3xl font-bold mb-4">WELCOME BACK TO LOCalink</h1>
        <div className="container mx-auto max-w-md p-4">
          <form className="flex flex-col items-center space-y-4">
            <label className="w-full">
              Name
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </label>

            <label className="w-full">
              Date of Birth
              <input
                type="text"
                placeholder="Enter your date of birth"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </label>

            <label className="w-full">
              Email
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </label>

            <label className="w-full">
              Password
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </label>

            <div className="w-full">
              <button type="submit" className="w-full bg-blue-500 text-white py-3 rounded-lg">
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
