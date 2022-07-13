import React from "react";
import heroImg from "../assets/images/sub-hero.jpg";
import { Container, SubHeroContainer } from "../assets/styles/SubHero.styles";

const SubHero = () => {
  return (
    <Container>
      <SubHeroContainer className="sub-hero" img={heroImg}>
        <div className="container">
          <h3 className="text">
            Summer
            <br />
            Collection
          </h3>
        </div>
      </SubHeroContainer>
      <div className="text-container">
        <div className="content">
          <h3>Be ready for the summer</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, a?
          </p>
          <button>shop now</button>
        </div>
      </div>
    </Container>
  );
};

export default SubHero;
