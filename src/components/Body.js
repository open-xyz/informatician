import React from "react";
import { Routes, Route } from "react-router-dom";
import BookList from "./BookList/BookList";
import About from "./About/About";
import Home from "./Home/Home";

function Body() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<BookList />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default Body;
