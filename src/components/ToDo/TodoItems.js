import React from "react";

const TodoItems = (props) => {
  const {
    index,
    isEditing,
    handleDeleteTask,
    todo,
    handleOnclickEdit,
    handleCancelTask,
  } = props;
  return (
    <>
      <li key={index} className="mb-2 flex justify-between items-center">
        {todo}
        <div>
          {!isEditing && (
            <button
              onClick={() => handleOnclickEdit(index)}
              className="ml-4 bg-blue-500 text-white px-2 py-1 rounded"
            >
              Edit
            </button>
          )}
          {isEditing ? (
            <button
              onClick={handleCancelTask}
              className="ml-4 bg-red-500 text-white px-2 py-1 rounded"
            >
              Cancel
            </button>
          ) : (
            <button
              onClick={() => handleDeleteTask(index)}
              className="ml-4 bg-red-500 text-white px-2 py-1 rounded"
            >
              Delete
            </button>
          )}
        </div>
      </li>
    </>
  );
};

export default TodoItems;
