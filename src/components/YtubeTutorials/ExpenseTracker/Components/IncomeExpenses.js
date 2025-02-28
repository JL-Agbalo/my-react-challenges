import React from "react";

function IncomeExpenses() {
  return (
    <div className="flex justify-between mt-6">
      <div className="bg-green-100 p-4 rounded-lg shadow-md w-1/2 mr-2">
        <h4 className="text-lg font-semibold">Income</h4>
        <p id="money-plus" className="text-green-500">
          +$0.00
        </p>
      </div>
      <div className="bg-red-100 p-4 rounded-lg shadow-md w-1/2 ml-2">
        <h4 className="text-lg font-semibold">Expense</h4>
        <p id="money-minus" className="text-red-500">
          -$0.00
        </p>
      </div>
    </div>
  );
}

export default IncomeExpenses;
