import React from "react";
import { Link } from "react-router-dom";
import CartContext from "../context/CartContext";
import { useContext } from "react";
function Navbar() {
  const { items } = useContext(CartContext);
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">
          Wear
        </Link>
        <Link to="/checkout" className="text-white flex items-center">
          Checkout
          <div className="ml-2 bg-red-500 text-white rounded-full h-6 w-6 flex items-center justify-center">
            <span>{items.length}</span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
