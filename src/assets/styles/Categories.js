import styled from "styled-components/macro";
import { Link } from "react-router-dom";

const Container = styled.section`
  display: flex;
  justify-content: space-between;
  max-width: 90%;
  margin: auto;
  margin-top: 2rem;
  margin-bottom: 3rem;
`;

const Category = styled.div`
  position: relative;
  flex-basis: 30%;

  > img {
    width: 100%;
    height: 100%;
  }
`;

const Btn = styled(Link)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 10px 20px;
  color: black;
  border: none;
  background-color: #fff;
  transition: all 0.5s;
  font-size: 1rem;
  text-transform: uppercase;
  font-weight: bold;
  text-decoration: none;
  &:hover {
    background-color: #000;
    color: #fff;
  }
  @media (min-width: 1024px) {
    font-size: 1.5rem;
    padding: 20px 35px;
  }
`;

export { Container, Category, Btn };
