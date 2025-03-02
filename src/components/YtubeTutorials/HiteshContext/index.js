import React from "react";
import UserContextProvider from "./context/UserContextProvider";
import Cards from "./components/Cards";

function index() {
  return (
    <UserContextProvider>
      <Cards />
    </UserContextProvider>
  );
}

export default index;
