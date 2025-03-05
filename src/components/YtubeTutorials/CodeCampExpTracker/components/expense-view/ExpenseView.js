import React from "react";

function ExpenseView() {
  return (
    <div className="p-6 border rounded shadow hover:shadow-lg transition-shadow duration-300">
      <div className="text-lg font-semibold mb-2">Expense View</div>
      <div className="text-gray-600">Details about the expense...</div>
      <div className="text-2xl font-bold mt-4">Total: $123.45</div>
    </div>
  );
}

export default ExpenseView;
