import { Link } from "react-router-dom";
import styled from "styled-components/macro";
const Container = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 90%;
  margin: 0 auto;
  height: 150px;
`;

const FooterLeft = styled.div`
  > ul,
  li {
    padding: 0;
    margin: 0;
    list-style: none;
  }
`;

const FooterLeftItems = styled.ul`
  display: flex;
  gap: 2rem;
  justify-content: space-between;
  > a {
    color: #000;
  }
`;

const FooterRight = styled.div``;

const FooterRightItems = styled.ul`
  display: flex;
  gap: 1rem;
  justify-content: space-between;
`;

const FooterLinks = styled(Link)`
  color: #000;
  transition: all 0.25s;
  &:hover {
    color: var(--red-100);
  }
`;

export {
  Container,
  FooterLeft,
  FooterLeftItems,
  FooterRight,
  FooterRightItems,
  FooterLinks,
};
