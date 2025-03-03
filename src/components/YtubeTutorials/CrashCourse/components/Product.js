import React from "react";
import Card from "./Card";

function Product() {
  const products = [
    { id: 1, name: "Shoes", price: 100 },
    { id: 2, name: "Shirt", price: 50 },
    { id: 3, name: "Pants", price: 70 },
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <Card key={product.id} name={product.name} price={product.price} />
        ))}
      </div>
    </div>
  );
}

export default Product;
