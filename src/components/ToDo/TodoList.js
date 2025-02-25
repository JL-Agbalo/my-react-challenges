import React from "react";

function TodoList() {
  const todos = ["Todo 1", "Todo 2", "Todo 3"];

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <div className="p-4 bg-gray-800 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center text-white">
          Todo List
        </h1>
        <ul className="list-disc pl-5 mb-4 text-white">
          {todos.map((todo, index) => (
            <li key={index} className="mb-2 flex justify-between items-center">
              {todo}
              <div>
                <button className="ml-4 bg-blue-500 text-white px-2 py-1 rounded">
                  Edit
                </button>
                <button className="ml-4 bg-red-500 text-white px-2 py-1 rounded">
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;
