import React from "react";
import hero from "../assets/images/hero-image.jpg";
import {
  Container,
  Section,
  MainText,
  SubText,
  TextContainer,
  Btn,
} from "../assets/styles/Hero.styles";

const Hero = () => {
  return (
    <Section className="hero">
      <Container>
        <div className="hero-image">
          <img src={hero} alt="" />
        </div>
        <TextContainer>
          <MainText className="hero-main">Lorem ipsum dolor sit amet.</MainText>
          <SubText className="hero-sub">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
            doloribus consectetur explicabo culpa.
          </SubText>
          <Btn>shop now</Btn>
        </TextContainer>
      </Container>
    </Section>
  );
};

export default Hero;
