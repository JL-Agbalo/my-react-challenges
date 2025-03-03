import React, { useContext } from "react";
import CartContext from "../context/CartContext";

function Checkout() {
  const { items } = useContext(CartContext);
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Checkout Page</h1>
      {items.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <ul className="space-y-4">
          {items.map((item, index) => (
            <li
              key={index}
              className="flex justify-between items-center p-4 border rounded-lg shadow-sm"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded"
                />
                <div>
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-gray-500">
                    ${item.price ? item.price.toFixed(2) : "N/A"}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Checkout;
