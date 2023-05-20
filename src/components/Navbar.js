import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">Informatician</div>
        <div className={`navbar-items ${isMenuOpen ? "open" : ""}`}>
          <div className="navbar-search">
            <input
              type="text"
              placeholder="Search"
              className="navbar-search-input"
            />
            <button className="navbar-search-button">Search</button>
          </div>
          <div className="navbar-toggle" onClick={toggleMenu}>
            <div
              className={`navbar-toggle-line ${isMenuOpen ? "open" : ""}`}
            ></div>
            <div
              className={`navbar-toggle-line ${isMenuOpen ? "open" : ""}`}
            ></div>
            <div
              className={`navbar-toggle-line ${isMenuOpen ? "open" : ""}`}
            ></div>
          </div>
          <div className={`navbar-menu ${isMenuOpen ? "open" : ""}`}>
            <Link to="/" onClick={toggleMenu}>
              Home
            </Link>
            <Link to="/books" onClick={toggleMenu}>
              Books
            </Link>
            <Link to="/about" onClick={toggleMenu}>
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
