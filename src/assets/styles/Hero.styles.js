import styled from "styled-components/macro";

const Section = styled.section`
  height: calc(100vh - 100px);
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  .hero-image {
    width: 100%;
    height: 100%;
    > img {
      width: 100%;
      height: 100%;
    }
  }
`;

const TextContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const MainText = styled.h1`
  font-weight: bold;
  font-size: 3rem;
  color: var(--red);
  text-transform: capitalize;
`;

const SubText = styled.p`
  color: white;
  font-size: 1rem;
`;

const Btn = styled.button`
  border-radius: 5px;
  background-color: var(--red);
  padding: 1rem 2rem;
  color: white;
  border: 1px solid transparent;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s;
  font-weight: bold;
  text-transform: uppercase;
  margin-top: 1rem;
  &:hover {
    background-color: white;
    color: var(--red);
    border: 1px solid var(--red);
  }
`;

export { Section, Container, TextContainer, MainText, SubText, Btn };
