import React from "react";
import PieChart from "../chart/PieChart";

function Summary() {
  return (
    <div className="p-6 border rounded shadow hover:shadow-lg transition-shadow duration-300">
      <div className="text-2xl font-bold mb-4">Summary</div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <div className="mb-4">
            <span className="font-semibold">Balance:</span>{" "}
            <span className="text-2xl">$1000</span>
          </div>
          <div className="mb-4">
            <span className="font-semibold">Total Income:</span>{" "}
            <span className="text-2xl">$100</span>
          </div>
          <div className="mb-4">
            <span className="font-semibold">Total Expenses:</span>{" "}
            <span className="text-2xl">$50</span>
          </div>
        </div>
        <div
          className="flex items-center justify-center"
          style={{ height: "400px" }}
        >
          <div
            className="text-center text-gray-600"
            style={{ width: "100%", height: "100%", minHeight: "500px" }}
          >
            <PieChart expense={500} income={800} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Summary;
