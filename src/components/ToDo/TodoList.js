import React, { useState } from "react";
import TodoItems from "./TodoItems";

function TodoList() {
  const [todos, setTodos] = useState(["Task 1", "Task 2", "Task 3", "Task 4"]);

  const [newTodo, setNewTodo] = useState("");

  const [isEditing, setIsEditing] = useState(false);

  const handleInputChange = (event) => {
    setNewTodo(event.target.value);
  };

  const handleAddTask = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, newTodo]);
      setNewTodo("");
    }
  };

  const handleDeleteTask = (index) => {
    const newTodos = todos.filter((_, todoIndex) => todoIndex !== index);
    setTodos(newTodos);
  };

  const handleEditTask = (index) => {};

  const handleOnclickEdit = () => {};

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <div className="p-4 bg-gray-800 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center text-white">
          Todo List
        </h1>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Add Task Here"
            value={newTodo}
            onChange={handleInputChange}
            className="w-full px-3 py-2 mb-2 rounded"
          />
          <button
            onClick={handleAddTask}
            className="w-full bg-green-500 text-white px-3 py-2 rounded"
          >
            Add Task
          </button>
        </div>
        {todos.length > 0 ? (
          <ul className="list-disc pl-5 mb-4 text-white">
            {todos.map((todo, index) => (
              <TodoItems
                key={index}
                index={index}
                todo={todo}
                isEditing={isEditing}
                handleDeleteTask={handleDeleteTask}
                handleOnlickEdit={handleEditTask}
              />
            ))}
          </ul>
        ) : (
          <p className="text-center text-white">No records found</p>
        )}
        {isEditing && (
          <input
            type="text"
            placeholder="Add Task Here"
            value={newTodo}
            onChange={handleEditTask}
            className="w-full px-3 py-2 mb-2 rounded"
          />
        )}
      </div>
    </div>
  );
}

export default TodoList;
