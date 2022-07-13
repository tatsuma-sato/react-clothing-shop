import styled from "styled-components/macro";

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  padding: 0 5%;
  height: 100px;
  z-index: 100;

  .nav-icons {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
  }

  .icon-container {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-radius: 50%;
    transition: all 0.3s;
    :hover {
      background-color: lightgray;
    }
  }

  .cart {
    position: relative;
    background-color: lightgray;
    border-radius: 50%;
    cursor: pointer;

    .cart-icon {
    }
    .cart-items {
      position: absolute;
      top: -10px;
      right: -5px;
      background-color: red;
      border-radius: 50%;
      width: 20px;
      height: 20px;
      font-size: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
    }
  }
`;

const NavLeft = styled.div`
  text-transform: uppercase;
  font-size: 1.5rem;
  font-weight: bold;
  flex-basis: 30%;

  span {
    color: var(--red);
  }
`;

const NavRight = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;
  flex-basis: 70%;
`;

const NavMenu = styled.div`
  ul,
  li {
    list-style: none;
    margin: 0;
    padding: 0;
    outline: none;
  }
  a {
    color: black;
    text-decoration: none;
  }
  width: 50%;
  margin-right: 2rem;
`;

const NavMenuItems = styled.ul`
  display: flex;
  justify-content: space-between;
  > li {
    width: 4rem;
  }
`;

export { Nav, NavLeft, NavRight, NavMenu, NavMenuItems };
