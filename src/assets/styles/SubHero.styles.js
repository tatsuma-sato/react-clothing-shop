import styled from "styled-components/macro";
import heroImg from "../images/sub-hero.jpg";

const Container = styled.section`
  width: 100vw;
  height: 65vh;
  display: flex;
  flex-grow: 1;
  margin: 3rem 0;

  .text-container {
    border: 1px solid red;
    position: relative;
    display: flex;
    align-items: center;
    background-color: #d8d8d8;
    flex-grow: 1;
    .content {
      flex-grow: 1;
      > h3 {
        font-size: 1.5rem;
      }
      > p {
        font-size: 0.75rem;
        margin: 1rem 0;
      }
      > button {
        padding: 7.5px 25px;
        background-color: #000;
        border: 1px solid #000;
        color: #fff;
        text-transform: uppercase;
        font-weight: bold;
        cursor: pointer;
      }
    }
  }
`;

const SubHeroContainer = styled.div`
  background-image: url(${heroImg});
  background-position: 50% 10%;
  background-repeat: no-repeat;
  background-size: cover;
  flex-basis: 75%;
  width: 100%;
  height: 100%;
  position: relative;
  border: 1px solid #8d8d8d;
  .container {
    position: absolute;
    top: 50%;
    right: 10%;
    font-size: 2rem;
    transform: translateY(-50%);
  }
`;

export { Container, SubHeroContainer };
