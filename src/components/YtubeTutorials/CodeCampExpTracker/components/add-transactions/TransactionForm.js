import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

function TransactionForm({ onClose }) {
  const { formData, setFormData, values, setValues, handleFormSubmit } =
    useContext(GlobalContext);

  function handleFormChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleFormSubmit(formData);
    onClose();
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <div className="text-xl font-bold">Add New Transaction</div>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
          &times;
        </button>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2">Enter Description:</label>
          <input
            type="text"
            placeholder="Enter Transaction Description"
            className="w-full p-2 border rounded"
            onChange={handleFormChange}
            name="description"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Amount:</label>
          <input
            type="number"
            placeholder="Enter Transaction Amount"
            className="w-full p-2 border rounded"
            onChange={handleFormChange}
            name="amount"
          />
        </div>
        <div className="mb-4">
          <label className="mr-4">
            <input
              type="radio"
              name="transactionType"
              value="expense"
              className="mr-2"
              onChange={handleFormChange}
              checked={formData.transactionType === "expense"}
            />
            Expense
          </label>
          <label>
            <input
              type="radio"
              name="transactionType"
              value="income"
              className="mr-2"
              onChange={handleFormChange}
              checked={formData.transactionType === "income"}
            />
            Income
          </label>
        </div>
        <div className="flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="bg-gray-500 text-white px-4 py-2 rounded mr-2 hover:bg-gray-600"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default TransactionForm;
