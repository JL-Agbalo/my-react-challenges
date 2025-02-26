import React, { useRef, useState } from "react";

function GPTCountRef() {
  const refCount = useRef(0); // This will update but NOT re-render
  const [stateCount, setStateCount] = useState(0); // This will update AND re-render

  console.log("Component rendered!"); // To check re-renders

  const incrementRef = () => {
    refCount.current += 1; // Increments but doesn't re-render
    console.log("Ref Count:", refCount.current);
  };

  const incrementState = () => {
    setStateCount(stateCount + 1); // Increments AND re-renders
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-6 max-w-sm">
        <h2 className="text-xl font-bold mb-4">GPT Count Ref</h2>
        <p className="mb-2">
          Ref Count: {refCount.current} (Does NOT update UI)
        </p>
        <p className="mb-4">State Count: {stateCount} (Updates UI)</p>
        <button
          onClick={incrementRef}
          className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
        >
          Increment Ref
        </button>
        <button
          onClick={incrementState}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Increment State
        </button>
      </div>
    </div>
  );
}

export default GPTCountRef;

// Notes on useRef:
// 1. Accessing DOM elements: useRef can be used to directly access and manipulate DOM elements.
// 2. Storing mutable values: useRef can store values that do not cause re-renders when updated.
// 3. Keeping a reference to a previous state: useRef can keep track of previous state values across renders.
// 4. Avoiding re-renders: useRef is useful when you need to persist a value without causing a component to re-render.
