import React from "react";
import "../assets/css/Navbar.css";

function Navbar() {
  return (
    <>
      <div className="navbar-container">
        <div className="navbar-logo">Welcome!</div>
        <div className="navbar-links">
          <ul className="navbar-items">
            <li className="items">
              <a href="/">Home</a>
            </li>
            <li className="items">
              <a href="/">About</a>
            </li>
            <li className="items">
              <a href="/">Services</a>
            </li>
            <li className="items">
              <a href="/">Work</a>
            </li>
            <li className="items">
              <a href="/">Blog</a>
            </li>
            <li className="items">
              <a href="/">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
