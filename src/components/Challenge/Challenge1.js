import React, { useState } from "react";

function Challenge1() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      {isVisible && <h1>Text is now visible</h1>}
      <button
        onClick={toggleVisibility}
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition-colors duration-300"
        aria-expanded={isVisible}
      >
        {isVisible ? "Hide" : "Show"}
      </button>
    </div>
  );
}

export default Challenge1;
