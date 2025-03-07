import React from "react";

function ExpenseView({ data, type }) {
  return (
    <div className="p-6 border rounded-lg shadow-lg bg-white">
      <div className="text-2xl font-bold mb-4 capitalize">{type} List</div>
      <ul className="divide-y divide-gray-200">
        {data.map((item) => (
          <li key={item.id} className="py-4 flex justify-between items-center">
            <div>
              <div className="text-lg font-semibold">{item.description}</div>
              <div className="text-gray-500">
                {item.transactionType.charAt(0).toUpperCase() +
                  item.transactionType.slice(1)}
              </div>
            </div>
            <div
              className={`font-bold ${
                type === "expense" ? "text-red-600" : "text-green-600"
              }`}
            >
              ${item.amount}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExpenseView;
