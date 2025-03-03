import React from "react";
import Card from "./Card";

function Product() {
  const products = [
    { id: 1, name: "Shoes", price: 100 },
    { id: 2, name: "Shirt", price: 50 },
    { id: 3, name: "Pants", price: 70 },
  ];

  return (
    <div>
      {products.map((product) => (
        <Card key={product.id} name={product.name} price={product.price} />
      ))}
    </div>
  );
}

export default Product;
