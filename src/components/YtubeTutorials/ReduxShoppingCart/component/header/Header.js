import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaHome } from "react-icons/fa";

function Header() {
  return (
    <div className="sticky top-0 bg-white shadow-md z-50">
      <div className="container mx-auto">
        <nav className="flex justify-between items-center p-4">
          <Link to="/" className="text-gray-800 text-2xl font-bold">
            React Redux Shopping Cart
          </Link>

          <div className="flex space-x-4">
            <Link
              to="/"
              className="text-gray-800 hover:text-gray-600 flex items-center"
            >
              <FaHome className="mr-2" />
              Home
            </Link>
            <Link
              to="/cart"
              className="text-gray-800 hover:text-gray-600 flex items-center"
            >
              <FaShoppingCart className="mr-2" />
              Cart
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;
