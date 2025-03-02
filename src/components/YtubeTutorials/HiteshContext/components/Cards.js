import React from "react";
import Login from "./Login";
import Profile from "./Profile";

function Cards() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">React video for context API</h1>
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md mb-6">
        <Login />
      </div>
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <Profile />
      </div>
    </div>
  );
}

export default Cards;
