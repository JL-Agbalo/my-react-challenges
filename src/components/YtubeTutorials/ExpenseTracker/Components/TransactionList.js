import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalSate";
import Transaction from "./Transaction";
function TransactionList() {
  const { transactions } = useContext(GlobalContext);

  return (
    <div className="mt-6">
      <h3 className="text-xl font-semibold mb-4">History</h3>
      <ul className="list-none p-0">
        {transactions.map(({ id, text, amount }) => (
          <Transaction key={id} id={id} text={text} amount={amount} />
        ))}
      </ul>
    </div>
  );
}

export default TransactionList;
