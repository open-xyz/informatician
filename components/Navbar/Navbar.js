"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { searchBooks } from "@/utils/searchBooks";
import NavItems from "./NavItems/NavItems.js";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import { ThemeToggle } from "@/components/theme/theme-toggle.jsx";
import Logo from "../Logo.js";

function handleSubmit(event) {
  event.preventDefault(); // Prevent the default form submission
  event.target.elements.q.value = "";
}

export default function Navbar(props) {
  const [searchValue, setSearchValue] = useState("");
  const [clicked, setClicked] = useState(false);
  const [books, setBooks] = useState([]);
  const pathName = usePathname() || "/";

  const handleOptionClick = () => {
    setClicked(false);
  };

  const search = async (e) => {
    const query = e.target.value.trim(); // Remove leading/trailing whitespace from the query
    setSearchValue(query); // Update the searchValue state with the current query

    if (query === "") {
      setBooks([]); // Clear the books state to hide search results
      return; // Return early if there's no query
    }

    try {
      console.log("called");
      const result = await searchBooks(query);
      console.log(result);
      console.log(result[0].selfLink);
      result.length > 0 ? setBooks(result.slice(0, 5)) : setBooks([]); // Update books state based on the search result
    } catch (err) {
      throw err;
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full shadow bg-primary z-50">
      <Link href="/" className="logo">
        <Logo />
      </Link>
      <div className="flex search-container search-web-view align-items-center">
        <div>
          <form className="search-bar m-0" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="search"
              name="q"
              value={searchValue} // Bind the input value to the state
              onChange={search}
              className="text-black"
            />
            <button type="submit">
              <i className="fa-solid fa-search"></i>
            </button>
          </form>
  {books.length > 0 && searchValue !== "" && (
            <div className="w-98 bg-gray-100 absolute mx-auto p-2 rounded-md shadow-lg transform scale-95 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:scale-100">
              {books.map((book, index) => (
                <Link
                  href={`/googlebooks/${book.id}`}
                  key={index}
                  className="hover:no-underline"
                  onClick={() => {
                    setBooks([]);
                    setSearchValue(""); // Clear the input box
                  }}
                >
                  <div className="flex items-center p-2 border-b-2 my-1 transition duration-200 hover:bg-gray-300 cursor-pointer">
                    <img
                      src={
                        book?.volumeInfo.imageLinks?.thumbnail ||
                        "placeholder.png"
                      }
                      alt="Book Cover"
                      className="w-12 h-16 object-cover mr-2 rounded-sm"
                    />
                    <div className="flex-1">
                      <h1 className="text-lg font-semibold text-blue-600 hover:text-blue-800 line-clamp-1">
                        {book?.volumeInfo.title}
                      </h1>
                      <p className="text-sm text-gray-500 line-clamp-2">
                        {book?.volumeInfo.authors?.join(", ")}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
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
