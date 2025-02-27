import React, { useReducer } from "react";
import { initialState, shoppingCartReducer } from "./shoppingCartReducer";

function ShoppingCart() {
  const [state, dispatch] = useReducer(shoppingCartReducer, initialState);

  const addItem = (item, price) => {
    dispatch({ type: "ADD_ITEM", payload: { item, price } });
  };

  const removeItem = (index) => {
    dispatch({ type: "REMOVE_ITEM", payload: index });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="p-6 bg-white rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">Shopping Cart</h1>
        <div className="mb-4">
          <button
            onClick={() => addItem("Item 1", 110)}
            className="w-full bg-blue-500 text-white px-3 py-2 rounded mb-2"
          >
            Add Item 1 (price: 110)
          </button>
          <button
            onClick={() => addItem("Item 2", 120)}
            className="w-full bg-blue-500 text-white px-3 py-2 rounded"
          >
            Add Item 2 (price: 120)
          </button>
        </div>
        <div>
          <ul className="list-disc pl-5 mb-4">
            {state.cart.map((item, index) => (
              <li
                key={index}
                className="flex justify-between items-center mb-2"
              >
                {item.item} - ${item.price}
                <button
                  onClick={() => removeItem(index)}
                  className="ml-4 bg-red-500 text-white px-2 py-1 rounded"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="text-center">
            <h3 className="text-lg font-semibold">
              Total Quantity: {state.totalQuantity}
            </h3>
            <h3 className="text-lg font-semibold">
              Total Price: ${state.totalPrice}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
