import React from "react";
import woman from "../assets/images/woman.jpg";
import man from "../assets/images/man.jpg";
import accessories from "../assets/images/accessories.jpg";
import { Container, Category, Btn } from "../assets/styles/Categories";

const Categories = () => {
  return (
    <Container className="container categories">
      <Category className="category women">
        <img src={woman} alt="" />
        <Btn to="#">Women's</Btn>
      </Category>
      <Category className="category accessories">
        <img src={accessories} alt="" />
        <Btn to="#">Accessories's</Btn>
      </Category>
      <Category className="category men">
        <img src={man} alt="" />
        <Btn to="#">Men's</Btn>
      </Category>
    </Container>
  );
};

export default Categories;
