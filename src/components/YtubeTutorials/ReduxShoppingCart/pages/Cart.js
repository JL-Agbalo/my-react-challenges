import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import CartTile from "../component/cart-tile/CartTile";

function Cart() {
  const [totalCart, setTotalCart] = useState(0);
  const [loading, setLoading] = useState(true);
  const cart = useSelector((state) => state.cart);
  console.log(cart);

  useEffect(() => {
    setLoading(false);
    setTotalCart(cart.reduce((acc, item) => acc + item.price, 0));
  }, [cart]);
  console.log("totalCart", totalCart);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <ClipLoader size={100} color={"#123abc"} loading={loading} />{" "}
        </div>
      ) : cart.length === 0 ? (
        <div className="flex flex-col items-center">
          <p className="text-gray-700 mb-4">Your cart is empty.</p>
          <Link
            to="/"
            className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition-colors duration-300 flex items-center"
          >
            Go to Shop
          </Link>
        </div>
      ) : (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {cart.map((item) => (
              <CartTile key={item.id} item={item} />
            ))}
          </div>
          <div className="mt-8 p-4 bg-gray-100 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-2">Cart Summary</h2>
            <div className="flex justify-between items-center">
              <span className="text-lg">Total Items:</span>
              <span className="text-lg font-semibold">{cart.length}</span>
            </div>
            <div className="flex justify-between items-center mt-2">
              <span className="text-lg">Total Price:</span>
              <span className="text-lg font-semibold">
                ${totalCart.toFixed(2)}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
