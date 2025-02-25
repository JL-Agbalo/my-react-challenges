import React, { useState } from "react"; // Import React and useState hook

import {
  FruitsContextProvider,
  useFruitsContext,
} from "../../contexts/FruitsContextProvider"; // Import context provider and hook

export function Fruits() {
  return (
    <FruitsContextProvider>
      {" "}
      {/* Wrap components with context provider */}
      <FruitList /> {/* Render FruitList component */}
      <NewFruitList /> {/* Render NewFruitList component */}
    </FruitsContextProvider>
  );
}

function FruitList() {
  const { fruits, addFruit } = useFruitsContext(); // Use context to get fruits and addFruit function
  const [selectedFruit, setSelectedFruit] = useState("apple"); // State for selected fruit
  const fruitOptions = ["apple", "banana", "orange", "grape"]; // Available fruit options

  return (
    <div>
      <select
        value={selectedFruit} // Bind selected fruit to state
        onChange={(e) => setSelectedFruit(e.target.value)} // Update state on change
      >
        {fruitOptions.map((fruit) => (
          <option key={fruit} value={fruit}>
            {" "}
            {/* Render options */}
            {fruit}
          </option>
        ))}
      </select>
      <button
        onClick={() => addFruit(selectedFruit)} // Add selected fruit on click
      >
        Add Fruit
      </button>
      <div>
        Current fruits on the List: {fruits.join(", ")} {/* Display fruits */}
      </div>
    </div>
  );
}

function NewFruitList() {
  const { fruits } = useFruitsContext(); // Use context to get fruits
  return (
    <div>
      <div>
        New FruitListComponents Fruit on the List: {fruits.join(", ")}{" "}
        {/* Display fruits */}
      </div>
    </div>
  );
}
