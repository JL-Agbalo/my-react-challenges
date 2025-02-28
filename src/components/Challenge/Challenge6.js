import React from "react";
// title: "Dynamic List with useState",
// description:
//   "Create a dynamic list where users can add and remove items using the useState hook. Ensure the list updates in real-time.",
function Challenge6() {
  const [items, setItems] = React.useState(["Item 1", "Item 2", "Item 3"]);

  const addItem = () => {
    setItems([...items, `Item ${items.length + 1}`]);
  };

  const removeItems = () => {
    setItems(items.slice(0, items.length - 1));
  };

  return (
    <div className="p-4">
      <ul className="list-disc pl-8">
        {items.map((item, index) => (
          <li key={index} className="mb-2">
            {item}
          </li>
        ))}
      </ul>
      <button
        onClick={addItem}
        className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
      >
        Add Item
      </button>
      <button
        onClick={removeItems}
        className="bg-red-500 text-white px-4 py-2 rounded"
      >
        Remove Item
      </button>
    </div>
  );
}

export default Challenge6;
