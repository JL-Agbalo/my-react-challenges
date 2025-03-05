import React from "react";
import GlobalState from "./context/GlobalContext";
import Main from "./components/main/Main";

function ExpenseTracker() {
  return (
    <GlobalState>
      <Main />
    </GlobalState>
  );
}

export default ExpenseTracker;
