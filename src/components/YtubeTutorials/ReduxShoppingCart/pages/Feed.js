import React, { useEffect, useState } from "react";
import { FaEyeDropper } from "react-icons/fa6";
import { ClipLoader } from "react-spinners";
import ProductTile from "../component/header/product-tile/ProductTile";
function Feed() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchProducts() {
    setLoading(true);
    const res = await fetch("https://fakestoreapi.com/products");
    const products = await res.json();
    if (products) {
      setProducts(products);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto p-4">
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <ClipLoader size={100} color={"#123abc"} loading={loading} />{" "}
        </div>
      ) : products.length === 0 ? (
        <div className="text-center text-gray-500">No products available</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product) => (
            <ProductTile key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Feed;
