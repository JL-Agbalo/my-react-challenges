import React, { useState } from "react";

import {
  FruitsContextProvider,
  useFruitsContext,
} from "../../contexts/FruitsContextProvider";

export function Fruits() {
  return (
    <FruitsContextProvider>
      <FruitList />
    </FruitsContextProvider>
  );
}

function FruitList() {
  const { fruits, addFruit } = useFruitsContext();
  const [selectedFruit, setSelectedFruit] = useState("apple");
  const fruitOptions = ["apple", "banana", "orange", "grape"];

  return (
    <div className="p-4">
      <select
        className="border border-gray-300 rounded p-2 mb-4"
        value={selectedFruit}
        onChange={(e) => setSelectedFruit(e.target.value)}
      >
        {fruitOptions.map((fruit) => (
          <option key={fruit} value={fruit}>
            {fruit}
          </option>
        ))}
      </select>
      <button
        className="bg-blue-500 text-white p-2 rounded"
        onClick={() => addFruit(selectedFruit)}
      >
        Add Fruit
      </button>
      <div className="mt-2 text-gray-700">
        Current fruits on the List:{fruits.join(", ")}
      </div>
    </div>
  );
}
