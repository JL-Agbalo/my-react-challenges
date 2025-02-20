import React, { useState } from "react";
// title: "Counter with useState",
// description:
//   "Create a counter that increments and decrements using the useState hook.",

function Challange2() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    setCount((prev) => prev - 1);
  };

  const reset = () => {
    setCount(0);
  };
  return (
    <div>
      <h2 className="font-bold mb-4">Counter with useState</h2>
      <h2 className="mb-4">{count}</h2>
      <div className="space-x-4">
        <button
          onClick={increment}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          Increment
        </button>
        <button
          onClick={decrement}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
        >
          Decrement
        </button>
        <button
          onClick={reset}
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-700"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Challange2;
