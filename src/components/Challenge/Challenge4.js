import React, { useState } from "react";
// title: "Toggle Background Color with useState",
//     description:
//       "Create a component that toggles the background color between two colors using the useState hook.",

function Challenge4() {
  const [color, setColor] = useState("bg-blue-500");

  return (
    <div className={`p-4 ${color}`}>
      <h2>Color: {color}</h2>
    </div>
  );
}

// TODO CONTINUE and add more challnages

export default Challenge4;
