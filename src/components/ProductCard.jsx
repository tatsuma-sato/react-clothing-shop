import React from "react";

const ProductCard = ({ img, name, price }) => {
  return (
    <div className="card">
      <img src={img} alt={name} style={{ width: "100%" }} />
      <h3>{name}</h3>
      <p>${price}</p>
    </div>
  );
};

export default ProductCard;
