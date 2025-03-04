import React from "react";
import Feed from "./pages/Feed";
import Cart from "./pages/Cart";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./component/header/Header";

function index() {
  return (
    <div>
      <Router>
        <Header />
        <div className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default index;
