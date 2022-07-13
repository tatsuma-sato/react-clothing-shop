import React from "react";
import img from "../assets/images/mens_jacket_1.jpg";

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
