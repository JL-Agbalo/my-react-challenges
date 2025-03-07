import React from "react";
import PieChart from "../chart/PieChart";

function Summary({ totalExpense, totalIncome }) {
  return (
    <div className="p-8 border rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
      <div className="text-3xl font-bold mb-6 text-center">Summary</div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div className="mb-6">
            <span className="font-semibold text-xl">Balance:</span>{" "}
            <span className="text-3xl text-green-600">
              ${totalIncome - totalExpense}
            </span>
          </div>
          <div className="mb-6">
            <span className="font-semibold text-xl">Total Income:</span>{" "}
            <span className="text-3xl text-blue-600">${totalIncome}</span>
          </div>
          <div className="mb-6">
            <span className="font-semibold text-xl">Total Expenses:</span>{" "}
            <span className="text-3xl text-red-600">${totalExpense}</span>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div
            className="text-center text-gray-600"
            style={{ width: "100%", height: "100%", minHeight: "500px" }}
          >
            <PieChart expense={totalExpense} income={totalIncome} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Summary;
