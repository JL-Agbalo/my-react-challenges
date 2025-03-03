import React, { useContext } from "react";
import { UserContext } from "../../PredroTech/UserContext";
import CartContext from "../context/CartContext";
function Card({ name, price }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="border rounded-lg shadow-lg p-4 m-4 bg-white">
      <div className="text-center mb-4">
        <h1 className="text-xl font-bold">Product Box</h1>
      </div>
      <div className="text-center mb-2">
        <h3 className="text-lg font-semibold">{name}</h3>
      </div>
      <h4 className="text-center text-gray-700 mb-4">${price}</h4>
      <button
        className="bg-blue-500 text-white py-1 px-2 text-sm rounded hover:bg-blue-700"
        onClick={() => addToCart(name, price)}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default Card;
