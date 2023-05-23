import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoOutlineSearch, IoCloseSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineSearch } from "react-icons/ai";
import "./Navbar.css";

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);

  const toggleNavbar = () => {
    setNavbar(!navbar);
  };

  return (
    <nav className="navbar" style={{ backgroundColor: "#1e293b" }}>
      <div className="navbar-container">
        <div className="navbar-brand">
          <Link to="/">
            <h2 className="navbar-title">Book Listing App</h2>
          </Link>
        </div>
        <div className={`navbar-menu ${navbar ? "active" : ""}`}>
          <ul className="navbar-items">
            <li className="navbar-item">
              <Link to="/home">Home</Link>
            </li>
            <li className="navbar-item">
              <Link to="/books">Books</Link>
            </li>
            <li className="navbar-item">
              <Link to="/about">About</Link>
            </li>
            <li className="navbar-item">
              <Link to="/contact">Contact US</Link>
            </li>
            <li className="navbar-item">
              <Link to="/faq">FAQ</Link>
            </li>
          </ul>
          <div className="navbar-search">
            <form>
              <div className="navbar-search-container">
                <input
                  type="search"
                  id="default-search"
                  className="navbar-search-input"
                  placeholder="Search"
                  required
                />
                <button type="submit" className="navbar-search-button">
                  <AiOutlineSearch className="navbar-search-icon" />
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="navbar-toggle" onClick={toggleNavbar}>
          {navbar ? (
            <IoCloseSharp className="navbar-icon" />
          ) : (
            <GiHamburgerMenu className="navbar-icon" />
          )}
        </div>
      </div>
    </nav>
  );
}
