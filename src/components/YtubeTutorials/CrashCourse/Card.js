import React from "react";

function Card({ name, price }) {
  return (
    <div>
      <div>
        <h1>Product Box</h1>
      </div>
      <div>
        <h3>{name}</h3>
      </div>
      <h4>${price}</h4>
    </div>
  );
}

export default Card;
