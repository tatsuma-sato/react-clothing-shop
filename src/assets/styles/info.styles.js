import styled from "styled-components/macro";

const Container = styled.section`
  width: 100vw;
  background-color: pink;
  padding: 3rem 0;
  .links {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-around;

    & .container {
      flex-basis: 40%;
      margin: 0 2rem;
      position: relative;

      & .overlay {
        position: absolute;
        content: "";
        inset: 0;
        background-color: #000;
        opacity: 0.3;
      }

      > img {
        width: 100%;
        height: 100%;
      }

      & .link-container {
        display: flex;
        flex-direction: column;
        align-items: center;

        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        & .icon {
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          padding: 10px;
          color: #fff;
          font-size: 2rem;
          background-color: lightblue;
        }
        & .text {
          color: #fff;
          font-weight: 500;
          text-transform: capitalize;
        }
      }
    }
  }
`;

export { Container };
