import styled from "styled-components/macro";

const Container = styled.section`
  /* & .categories-btn-container {
    display: flex;
    justify-content: center;
  } */
  max-width: 90%;
  margin: auto;

  & .list {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 1rem;
    > img {
      width: 100%;
      height: 100%;
    }
    .card {
      width: 100%;
      height: 100%;
    }
  }
`;

const Title = styled.h1`
  text-transform: capitalize;
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const Border = styled.span`
  width: 100px;
  height: 5px;
  background-color: pink;
  display: block;
  margin: 0 auto;
  margin-bottom: 1rem;
`;

const ButtonContainer = styled.div`
  margin: 2rem 0;
`;

const Btn = styled.button`
  width: auto;
  min-width: 100px;
  background-color: ${(props) => (props.isActive ? "var(--red)" : "#fff")};
  color: ${(props) => (props.isActive ? "#fff" : "#000")};
  /* border: 1px solid ${(props) => (props.isActive ? "#808080" : "#000")}; */
  border: 1px solid #d3d3d3;
  border-radius: 3px;
  padding: 10px 15px;
  text-transform: uppercase;
  cursor: pointer;
`;

export { Container, ButtonContainer, Btn, Title, Border };
