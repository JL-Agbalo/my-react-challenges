import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleStartNow = () => {
    navigate("/todolist");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Welcome to my Todo list</h1>
      <button
        onClick={handleStartNow}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
      >
        Start Now
      </button>
    </div>
  );
};

export default Home;

// https://www.youtube.com/watch?v=FlcPTiEy_0w&list=PLP2PxLLwJa_sRqF3vutbeRYwBk0jfuYGD&index=19
