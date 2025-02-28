import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalSate";

function IncomeExpenses() {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  return (
    <div className="flex justify-between mt-6">
      <div className="bg-green-100 p-4 rounded-lg shadow-md w-1/2 mr-2">
        <h4 className="text-lg font-semibold">Income</h4>
        <p id="money-plus" className="text-green-500">
          +${income}
        </p>
      </div>
      <div className="bg-red-100 p-4 rounded-lg shadow-md w-1/2 ml-2">
        <h4 className="text-lg font-semibold">Expense</h4>
        <p id="money-minus" className="text-red-500">
          -${expense}
        </p>
      </div>
    </div>
  );
}

export default IncomeExpenses;
