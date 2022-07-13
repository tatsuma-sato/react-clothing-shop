import React from "react";
import man from "../assets/images/info-man.jpg";
import woman from "../assets/images/info-woman.jpg";
import { FaInstagram } from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { Container } from "../assets/styles/info.styles";

const images = [
  { image: man, icon: <FaInstagram />, text: "go to our instagram" },
  {
    image: woman,
    icon: <HiOutlineLocationMarker />,
    text: "check our location",
  },
];

const Info = () => {
  return (
    <Container>
      Info
      {/* <h1 className="section-title">Find your own unique fashion style.</h1> */}
      <h1 className="section-title">
        Lorem ipsum dolor
        <br />
        sit amet consectetur adipisicing.
      </h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad placeat
        saepe aperiam vel vitae fuga aliquid at adipisci. Sint, reprehenderit!
      </p>
      <div className="links">
        {images.map(({ image, icon, text }, i) => {
          return (
            <div className="container" key={i}>
              <div className="overlay"></div>
              <img src={image} alt="" />
              <div className="link-container">
                <div className="icon">{icon}</div>
                <p className="text">{text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default Info;
