import React from "react";
import { Routes, Route } from "react-router-dom";
import BookList from "./BookList";
import About from "./About";
import Home from "./Home";
import FAQ from "./faq";

function Body() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<BookList />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
    </div>
  );
}

export default Body;
