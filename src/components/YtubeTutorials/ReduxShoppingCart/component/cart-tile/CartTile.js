import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../store/slices/cart-slice";

function CartTile({ item }) {
  const dispatch = useDispatch();

  function handleRemoveFromCart() {
    dispatch(removeFromCart(item.id));
  }

  return (
    <div className="border rounded-lg shadow-md p-4 flex flex-col justify-between h-full">
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-48 object-contain mb-4 rounded"
      />
      <div className="flex-grow">
        <h2 className="text-lg font-semibold mb-2">{item.title}</h2>
        <p className="text-gray-700 mb-4 line-clamp-3">{item.description}</p>
      </div>
      <div className="flex justify-between items-center mt-4">
        <span className="text-xl font-bold">${item.price.toFixed(2)}</span>
        <button
          onClick={handleRemoveFromCart}
          className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition-colors duration-300 flex items-center"
        >
          Remove from Cart
        </button>
      </div>
    </div>
  );
}

export default CartTile;
