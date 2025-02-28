import React, { useState, useContext } from "react";
import { GlobalContext } from "../Context/GlobalSate";

function AddTransaction() {
  const { addTransaction } = useContext(GlobalContext);
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const onChangeText = (e) => setText(e.target.value);
  const onChangeAmount = (e) => setAmount(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount,
    };

    addTransaction(newTransaction);
    setText("");
    setAmount(0);
  };
  return (
    <div className="mt-6">
      <h3 className="text-xl font-semibold mb-4">Add new Transaction</h3>
      <form action="" onSubmit={onSubmit}>
        <div className="form-control mb-4">
          <label
            htmlFor="text"
            className="block text-sm font-medium text-gray-700"
          >
            Text
          </label>
          <input
            type="text"
            id="text"
            onChange={onChangeText}
            value={text}
            placeholder="Enter Text..."
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="form-control mb-4">
          <label
            htmlFor="amount"
            className="block text-sm font-medium text-gray-700"
          >
            Amount <br /> (Negative - expense, positive - income)
          </label>
          <input
            type="number"
            id="amount"
            onChange={onChangeAmount}
            value={amount}
            placeholder="Enter Amount..."
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <button className="w-full bg-blue-500 text-white px-3 py-2 rounded">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransaction;
