import React, { createContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);

  const addToCart = (name, price) => {
    setItems((prevItems) => [...prevItems, { name, price }]);
  };

  const removeItem = (name) => {
    setItems((prevItems) => prevItems.filter((item) => item.name !== name));
  };

  return (
    <CartContext.Provider value={{ items, addToCart, removeItem }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
