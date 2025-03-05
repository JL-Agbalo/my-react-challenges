import React from "react";

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded shadow-lg w-11/12 md:w-1/2 lg:w-1/3">
        <div className="p-4">{children}</div>
      </div>
      <button
        onClick={onClose}
        className="absolute top-0 right-0 mt-4 mr-4 text-gray-500 hover:text-gray-700"
      >
        &times;
      </button>
    </div>
  );
}

export default Modal;
