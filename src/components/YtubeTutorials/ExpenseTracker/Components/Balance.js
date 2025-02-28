import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalSate";

function Balance() {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  return (
    <div className="text-center mt-6">
      <h4 className="text-lg font-semibold">Your Balance</h4>
      <h1 id="balance" className="text-2xl font-bold">
        ${total}
      </h1>
    </div>
  );
}

export default Balance;
