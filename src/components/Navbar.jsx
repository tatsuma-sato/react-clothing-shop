import React from "react";
import { Link } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { FaUserAlt, FaShoppingCart } from "react-icons/fa";
import {
  Nav,
  NavLeft,
  NavMenu,
  NavMenuItems,
  NavRight,
} from "../assets/styles/Navbar.styles";

const Navbar = () => {
  return (
    <Nav className="navbar">
      <NavLeft className="nav-left">
        <div className="logo">
          Van<span>Shop</span>
        </div>
      </NavLeft>
      <NavRight className="nav-right">
        <NavMenu className="nav-menu">
          <NavMenuItems className="nav-items">
            <li className="nav-item">
              <Link to="/">home</Link>
            </li>
            <li className="nav-item">
              <Link to="/">shop</Link>
            </li>
            <li className="nav-item">
              <Link to="/">about</Link>
            </li>
            <li className="nav-item">
              <Link to="/">contact</Link>
            </li>
          </NavMenuItems>
        </NavMenu>
        <div className="nav-icons">
          <div className="search icon-container">
            <BiSearch className="icon search-icon" />
          </div>
          <div className="user icon-container">
            <FaUserAlt className="icon user-icon" />
          </div>
          <div className="cart icon-container">
            <FaShoppingCart className="icon cart-icon" />
            <span className="cart-items">0</span>
          </div>
        </div>
      </NavRight>
    </Nav>
  );
};

export default Navbar;
