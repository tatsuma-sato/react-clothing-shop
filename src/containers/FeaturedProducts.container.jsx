import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img from "../assets/images/mens_jacket_1.jpg";
import ProductCard from "../components/ProductCard";
import styled from "styled-components/macro";

const FeaturedProducts = () => {
  return (
    <div>
      <div
        className="container"
        style={{
          height: "50vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          marginBottom: "2rem",
        }}
      >
        <h1>Featued Products</h1>
        <h1>End</h1>
      </div>
      {/* <div className="products-list">
        {Array.from({ length: 10 }, (v, k) => {
          return <ProductCard img={img} name="jacket" price={100} />;
        })}
      </div> */}
    </div>
  );
};

export default FeaturedProducts;
