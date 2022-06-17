import React from "react";
import "./header.css";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";

export const NavBar = (name) => {
  return (
    <div className="navbar">
      {name.name === "My projects" ? (
        <div className="main-navbar">
          <h1>{name.name}</h1>
          <Link to="/add-project" role="button">
            <AiOutlinePlus />
            Add project
          </Link>
        </div>
      ) : (
        <div className="other-navbar">
          <Link to="/">
            <BiArrowBack />
            Back
          </Link>
          <h1>{name.name}</h1>
        </div>
      )}
    </div>
  );
};

const Header = ({ pathName }) => {
  return (
    <div className="header-container">
      <div className="header">
        <Link to="/">
          <img src={logo} alt="Esto es" className="header-logo" />
        </Link>
      </div>
      <NavBar name={pathName} />
    </div>
  );
};

export default Header;
