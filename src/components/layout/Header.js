import React from "react";
import "./header.css";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
export const NavBar = (name) => {

  return (
    <div className="navbar">
      {name.name === "My projects" ? (
        <div className="">
          <h1>{name.name}</h1>
          <Link to="/add-project" role="button">
            + Add project
          </Link>
        </div>
      ) : (
        <div className="">
          <h1>{name.name}</h1>
          <Link to="/">Back</Link>
        </div>
      )}
    </div>
  );
};

const Header = ({ pathName }) => {
  return (
    <div className="header-container">
      <div className="header">
        <img src={logo} alt="Esto es" className="header-logo" />
      </div>
      <NavBar name={pathName} />
    </div>
  );
};

export default Header;
