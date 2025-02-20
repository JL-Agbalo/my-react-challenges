import React, { useState } from "react";
// title: "Form Input with useState",
// description:
//   "Create a form with an input field that updates its value using the useState hook.",

function Challenge3() {
  const [input, setInput] = useState("Fish Kun");
  const inputChange = (e) => {
    setInput(e.target.value);
  };
  return (
    <div>
      <h2 className="font-bold mb-4">Form Input with useState</h2>
      <input
        type="text"
        value={input}
        onChange={inputChange}
        className="p-2 mb-4 w-full border border-gray-300 rounded"
      />
      <p className="mb-4">Input value: {input}</p>
    </div>
  );
}

export default Challenge3;
