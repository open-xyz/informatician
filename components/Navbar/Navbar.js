"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { searchBooks } from "@/utils/searchBooks";
import NavItems from "./NavItems/NavItems.js";
import Image from "next/image";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import { ThemeToggle } from "@/components/theme/theme-toggle.jsx";
import Logo from "../Logo.js";

function handleSubmit(event) {
  event.preventDefault(); // Prevent the default form submission
  event.target.elements.q.value = "";
}
export default function Navbar(props) {
  const [clicked, setClicked] = useState(false);
  const [books, setBooks] = useState([]);
  const pathName = usePathname() || "/";

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
    <nav
      className="fixed top-0 left-0 w-full shadow bg-primary"
      // style={{ background: props.theme === "dark" ? "#001229" : "#eff6ff" }}
    >
      <Link href="/" className="logo">
        <Logo />
      </Link>
      <div className="search-container search-web-view align-items-center">
        <div>
          <form className="search-bar m-0" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="search"
              name="q"
              onChange={search}
              className="text-black"
            />
            <button type="submit">
              <FaSearch className="text-gray-500" />
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
      </div>
      <div className="mobile-nav">
        <NavItems
          clicked={clicked}
          pathname={pathName}
          handleOptionClick={handleOptionClick}
          drawer={true}
        />
      </div>
      <div className="desktop-outer">
        <div className="desktop-nav">
          <NavItems
            clicked={clicked}
            pathname={pathName}
            handleOptionClick={handleOptionClick}
          />
          <ThemeToggle />
        </div>
      </div>
      <div id="mobile">
       <ThemeToggle />

        <div id="bar" onClick={() => setClicked(!clicked)}>
          <div id={`${clicked ? "cross-up" : "bar-up"}`}></div>
          <div
            id={`${clicked ? "cross-mid" : "bar-mid"}`}
            style={{ opacity: clicked ? "0" : "100%" }}
          ></div>
          <div id={`${clicked ? "cross-down" : "bar-down"}`}></div>
        </div>
      </div>
    </nav>
  );
}
