import React, { useState } from "react";
// title: "Progress Bar with useState",
// description:
//   "Create a progress bar that updates its progress using the useState hook. Add buttons to increase and decrease the progress.",
function Challenge5() {
  const [progress, setProgress] = useState(0);
  const increaseProgress = () => {
    setProgress((prevProgress) => Math.min(prevProgress + 10, 100));
  };

  const decreaseProgress = () => {
    setProgress((prevProgress) => Math.max(prevProgress - 10, 0));
  };
  return (
    <div>
      <div className="flex flex-col items-center p-4">
        <h1 className="text-2xl font-bold mb-4">Progress Bar</h1>
        <div className="w-full bg-gray-200 rounded-full h-6 mb-4">
          <div
            className="bg-blue-500 h-6 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div className="flex space-x-4">
          <button
            className="bg-red-500 text-white px-4 py-2 rounded"
            onClick={decreaseProgress}
          >
            Decrease
          </button>
          <button
            className="bg-green-500 text-white px-4 py-2 rounded"
            onClick={increaseProgress}
          >
            Increase
          </button>
        </div>
      </div>
    </div>
  );
}

export default Challenge5;
