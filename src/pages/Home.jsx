import React from "react";
import { Hero } from "../components";
import { Categories, NewArrivals } from "../containers";

const Home = () => {
  return (
    <>
      <Hero />;
      <Categories />
      <NewArrivals />
    </>
  );
};

export default Home;
