import React from "react";

function TransactionList() {
  return (
    <div className="mt-6">
      <h3 className="text-xl font-semibold mb-4">History</h3>
      <ul className="list-none p-0">
        <li className="flex justify-between items-center bg-white shadow-md rounded-lg p-4 mb-2">
          <span>Cash</span>
          <span className="text-red-500">-$400</span>
          <button className="bg-red-500 text-white px-2 py-1 rounded">X</button>
        </li>
      </ul>
    </div>
  );
}

export default TransactionList;
