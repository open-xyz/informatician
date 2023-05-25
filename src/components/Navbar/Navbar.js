import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [clicked, setClicked] = useState(false);
  const location = useLocation();

  const handleOptionClick = () => {
    setClicked(false);
  };

  return (
    <nav>
      <Link to="/" className="logo">
        informatician
      </Link>
      <div>
        <ul
          id="nav-items"
          className={clicked ? "nav-active" : ""}
          style={{ marginBottom: 0 }}
        >
          <li>
            <Link
              to="/"
              className={location.pathname === "/" ? "active" : ""}
              onClick={handleOptionClick}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/books"
              className={location.pathname === "/books" ? "active" : ""}
              onClick={handleOptionClick}
            >
              Books
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={location.pathname === "/about" ? "active" : ""}
              onClick={handleOptionClick}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={location.pathname === "/contact" ? "active" : ""}
              onClick={handleOptionClick}
            >
              Contact Us
            </Link>
          </li>
          <li>
            <Link
              to="/faq"
              className={location.pathname === "/faq" ? "active" : ""}
              onClick={handleOptionClick}
            >
              FAQ
            </Link>
          </li>
          <div className="search-container search-mobile-view">
            <form action="" className="search-bar">
              <input type="text" placeholder="search..." name="q" />
              <button type="submit">
                <i className="fa-solid fa-search"></i>
              </button>
            </form>
          </div>
        </ul>
      </div>
      <div className="search-container search-web-view">
        <form action="" className="search-bar">
          <input type="text" placeholder="search..." name="q" />
          <button type="submit">
            <i className="fa-solid fa-search"></i>
          </button>
        </form>
      </div>

      <div id="mobile">
        <i
          id="bar"
          className={clicked ? "fa-solid fa-times" : "fa-solid fa-bars"}
          onClick={() => setClicked(!clicked)}
        ></i>
      </div>
    </nav>
  );
}
