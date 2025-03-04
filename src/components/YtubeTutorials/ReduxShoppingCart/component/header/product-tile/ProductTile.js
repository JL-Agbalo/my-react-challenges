import React from "react";
import { FaShoppingCart } from "react-icons/fa";

function ProductTile({ product }) {
  return (
    <div className="border rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between h-full">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-64 object-cover mb-4 rounded"
      />
      <div className="flex-grow">
        <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
        <p className="text-gray-700 mb-4 line-clamp-3">{product.description}</p>
      </div>
      <div className="flex justify-between items-center mt-4">
        <span className="text-xl font-bold">${product.price}</span>
        <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition-colors duration-300 flex items-center">
          <FaShoppingCart className="mr-2" /> Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductTile;
