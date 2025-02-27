import React from "react";

const TodoItems = (props) => {
  const { index, isEditing, handleDeleteTask, todo, handleOnlickEdit } = props;
  return (
    <>
      <li key={index} className="mb-2 flex justify-between items-center">
        {todo}
        <div>
          <button
            onClick={handleOnlickEdit}
            className={`ml-4 ${
              isEditing ? " bg-green-500" : "bg-blue-500"
            } text-white px-2 py-1 rounded`}
          >
            {isEditing ? "Update" : "Edit"}
          </button>
          <button
            onClick={() => handleDeleteTask(index)}
            className="ml-4 bg-red-500 text-white px-2 py-1 rounded"
          >
            Delete
          </button>
        </div>
      </li>
    </>
  );
};

export default TodoItems;
