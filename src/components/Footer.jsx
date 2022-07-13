import React from "react";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  Container,
  FooterLeft,
  FooterLeftItems,
  FooterLinks,
  FooterRight,
  FooterRightItems,
} from "../assets/styles/Footer.styles";

const icons = [<FaTwitter />, <FaFacebookF />, <FaInstagram />, <FaWhatsapp />];

const Footer = () => {
  return (
    <Container className="footer">
      <FooterLeft className="footer-left">
        <FooterLeftItems className="footer-left-items">
          <Link to={"#"} className="footer-item">
            Blog
          </Link>
          <Link to={"#"} className="footer-item">
            FAQs
          </Link>
          <Link to={"#"} className="footer-item">
            Contact us
          </Link>
        </FooterLeftItems>
      </FooterLeft>
      <FooterRight className="footer-right">
        <FooterRightItems className="footer-right-items">
          {icons.map((icon, i) => {
            return (
              <FooterLinks className="footer-link" to="#" key={i}>
                {icon}
              </FooterLinks>
            );
          })}
        </FooterRightItems>
      </FooterRight>
    </Container>
  );
};

export default Footer;
