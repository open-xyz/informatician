import React, { useState } from "react";
import { Link, Navigate, useLocation } from "react-router-dom";
import "./Navbar.css";
import uploadicon from "../../assets/add.png";
import NavItems from "./NavItems/NavItems.js";
import { searchBooks } from "../../utils/searchBooks";
function handleSubmit(event) {
  event.preventDefault(); // Prevent the default form submission
  event.target.elements.q.value = "";
}
export default function Navbar(props) {
  const [clicked, setClicked] = useState(false);
  const [books, setBooks] = useState([]);
  const location = useLocation();

  const handleOptionClick = () => {
    setClicked(false);
  };
  const search = async (e) => {
    try {
      const result = await searchBooks(e.target.value);
      result.length > 0 && setBooks(result.slice(0, 5));
    } catch (err) {
      throw err;
    }
  };

  return (
    <nav className="rounded-t-none fixed-top box-shadow: 0 4px 6px -1px" style={{background: props.theme==="dark"?"#001229":"#eff6ff"}}>
      <Link to="/" className="logo">
        <img
          src="https://user-images.githubusercontent.com/33249782/240937486-d84c477d-63f4-4558-ae04-454d803a5b1f.png"
          className=" h-11 w-15 ml-8"
          alt="Logo" style={{filter: props.theme==="dark"?"invert(1)":""}}
        />
      </Link>

      <div className="mobile-nav">
        <NavItems
          clicked={clicked}
          location={location}
          handleOptionClick={handleOptionClick}
          drawer={true}
          theme={props.theme}
        />
      </div>
      <div className="desktop-nav">
        <NavItems
          clicked={clicked}
          location={location}
          handleOptionClick={handleOptionClick}
          theme={props.theme}
        />
      </div>
      <div className="flex search-container search-web-view align-items-center">
        <Link to="/addBooks" className="flex">
          <img
            src={uploadicon}
            alt="uploadicon"
            className="h-8 mr-3 text-bold self-center"
            style={{filter: props.theme==="dark"?"invert(1)":""}}
          />
        </Link>
        <div>
        <form className="search-bar m-0" onSubmit={handleSubmit}>
          <input type="text" placeholder="search" name="q" onChange={search}/>
          <button type="submit">
            <i className="fa-solid fa-search"></i>
            </button>
            </form>
          <div className="w-52 bg-gray-100 absolute mx-auto px-2">
            {books.length > 0 &&
              books.map((book, index) => (
                <div
                  className="flex justify-center items-center p-3 border-b-4 my-2 transition duration-200 hover:bg-gray-300"
                  key={index}
                >
                  <h1>{book?.volumeInfo.title}</h1>
                </div>
              ))}
          </div>
        </div>
          <div class="form-check form-switch" onClick={props.toggleTheme} >
            <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
          </div>
        <label class="form-check-label" >Dark Mode</label>
      </div>
      <div id="mobile">
        <div class="form-check form-switch mx-2" onClick={props.toggleTheme} >
          <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
          <label class="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
        </div>

        {/* <i
          id="bar"
          className={`${clicked ? "fa-solid fa-times" : "fa-sharp fa-solid fa-bars-staggered"} ${props.theme === "dark" ? "text-white" : "text-dark"}`}
          onClick={() => setClicked(!clicked)}
        ></i> */}

        {/* Custom Navbar */}

        <div id="bar" onClick={() => setClicked(!clicked)}>
          <div id={`${clicked ? "cross-up" : "bar-up"}`}></div>
          <div id={`${clicked ? "cross-mid" : "bar-mid"}`} style={{ "opacity": clicked ? "0" : "100%" }}></div>
          <div id={`${clicked ? "cross-down" : "bar-down"}`}></div>
        </div>
      </div>
      
    </nav>
  );
}
