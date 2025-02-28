import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalSate";

function Transaction({ id, text, amount }) {
  const { deleteTransaction } = useContext(GlobalContext);
  const sign = amount < 0 ? "-" : "+";
  return (
    <li
      key={id}
      className="flex justify-between items-center bg-white shadow-md rounded-lg p-4 mb-2"
    >
      <span>{text}</span>
      <span className={amount > 0 ? "text-green-500" : "text-red-500"}>
        {sign}${Math.abs(amount)}
      </span>
      <button
        className="bg-red-500 text-white px-2 py-1 rounded"
        onClick={() => deleteTransaction(id)}
      >
        Delete
      </button>
    </li>
  );
}

export default Transaction;
