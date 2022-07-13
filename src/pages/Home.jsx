import React from "react";
import { Hero } from "../components";
import { Categories, Info, NewArrivals, SubHero } from "../containers";
import FeaturedProducts from "../containers/FeaturedProducts.container";

const Home = () => {
  return (
    <>
      <Hero />;
      <Categories />
      <NewArrivals />
      <SubHero />
      <FeaturedProducts />
      <Info />
    </>
  );
};

export default Home;
