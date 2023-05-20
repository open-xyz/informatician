import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">Book Listing App</div>
        <div className="navbar-items">
          <div className="navbar-search">
            <input
              type="text"
              placeholder="Search"
              className="navbar-search-input"
            />
            <button className="navbar-search-button">Search</button>
          </div>
          <Link to="/">Home</Link>
          <Link to="/books">Books</Link>
          <Link to="/about">About</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
