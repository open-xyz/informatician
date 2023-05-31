import React, { useState } from "react";
import { Link, Navigate, useLocation } from "react-router-dom";
import "./Navbar.css";
import uploadicon from "../../assets/icon.png";
import NavItems from "./NavItems/NavItems";
import { searchBooks } from "../../utils/searchBooks";

export default function Navbar() {
  const [clicked, setClicked] = useState(false);
  const [books,setBooks] = useState([]);
  const location = useLocation();

  const handleOptionClick = () => {
    setClicked(false);
  };
  const search = async (e) => {
    try{
      const result = await searchBooks(e.target.value);
      result.length>0 && setBooks(result.slice(0,5));
    }catch(err){
      throw err;
    }
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
        <Link to="/addBooks" className="flex">

          <img
            src={uploadicon}
            alt="uploadicon"
            className="h-8 mr-3 text-bold  hover:font-bold hover:shadow-md self-center  "
          />
        </Link>
        <div>
          <form className="search-bar">
            <input type="text" placeholder="" name="q" onChange={search} />
            <button type="submit">
              <i className="fa-solid fa-search"></i>
            </button>
          </form>

          <div className="w-52 bg-gray-100 absolute mx-auto px-2">
            {books.length>0 && books.map((book,index)=>(
              <div className="flex justify-center items-center p-3 border-b-4 my-2 transition duration-200 hover:bg-gray-300" key={index}>
                <h1>{book?.volumeInfo.title}</h1>
              </div>
            ))}
          </div>
        </div>
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
