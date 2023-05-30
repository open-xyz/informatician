import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";
import uploadicon from "../../assets/icon.png";
import NavItems from "./NavItems/NavItems";

export default function Navbar() {
  const [clicked, setClicked] = useState(false);
  const location = useLocation();

  const handleOptionClick = () => {
    setClicked(false);
  };

  return (
    <nav className="fixed-top box-shadow: 0 4px 6px -1px">
      <Link to="/" className="logo">
        <img
          src="https://user-images.githubusercontent.com/33249782/240937486-d84c477d-63f4-4558-ae04-454d803a5b1f.png"
          className=" h-11 w-15 ml-8  hover:shadow "
          alt="Logo"
        />
      </Link>

      <div className="mobile-nav">
        <NavItems
          clicked={clicked}
          location={location}
          handleOptionClick={handleOptionClick}
          drawer={true}
        />
      </div>
      <div className="desktop-nav">
        <NavItems
          clicked={clicked}
          location={location}
          handleOptionClick={handleOptionClick}
        />
      </div>

      <div className="flex search-container search-web-view">
        <Link to="/" className="flex">
          <img
            src={uploadicon}
            alt="uploadicon"
            className="h-8 mr-3 text-bold  hover:font-bold hover:shadow-md self-center  "
          />
        </Link>
        <form action="" className="search-bar">
          <input type="text" placeholder="" name="q" />
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
