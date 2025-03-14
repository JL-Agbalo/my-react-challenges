import React, { useContext, useEffect, useState } from "react";
import Summary from "../summary/Summary";
import ExpenseView from "../expense-view/ExpenseView";
import Modal from "../common/Modal";
import TransactionForm from "../add-transactions/TransactionForm";
import { GlobalContext } from "../../context/GlobalContext";

function Main() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {
    totalExpense,
    setTotalExpense,
    totalIncome,
    setTotalIncome,
    allTransactions,
  } = useContext(GlobalContext);

  useEffect(() => {
    let income = 0;
    let expense = 0;
    allTransactions.forEach((transaction) => {
      transaction.transactionType === "expense"
        ? (expense = expense + parseFloat(transaction.amount))
        : (income = income + parseFloat(transaction.amount));
    });
    setTotalExpense(expense);
    setTotalIncome(income);
  }, [allTransactions, setTotalExpense, setTotalIncome]);

  return (
    <div className="container mx-auto p-4">
      <div className="text-3xl font-bold mb-6 text-center">Expense Tracker</div>
      <div className="flex justify-center mb-6">
        <button
          className="bg-black text-white px-6 py-2 rounded shadow hover:bg-gray-800"
          onClick={() => setIsModalOpen(true)}
        >
          Add New Transaction
        </button>
      </div>
      <Summary totalExpense={totalExpense} totalIncome={totalIncome} />
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <ExpenseView
          data={allTransactions.filter(
            (item) => item.transactionType === "expense"
          )}
          type="expense"
        />
        <ExpenseView
          data={allTransactions.filter(
            (item) => item.transactionType === "income"
          )}
          type="income"
        />
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <TransactionForm onClose={() => setIsModalOpen(false)} />
      </Modal>
    </div>
  );
}

export default Main;
