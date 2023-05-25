import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import NavItems from "./NavItems/NavItems";

export default function Navbar() {
  const [clicked, setClicked] = useState(false);
  const location = useLocation();

  const handleOptionClick = () => {
    setClicked(false);
  };

  return (
    <nav className="fixed-top">
      <Link to="/" className="logo">
        informatician
      </Link>
      <div className="mobile-nav">
        <NavItems clicked={clicked} location={location} handleOptionClick={handleOptionClick} drawer={true} />
      </div>
      <div className="desktop-nav">
        <NavItems clicked={clicked} location={location} handleOptionClick={handleOptionClick} />
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
