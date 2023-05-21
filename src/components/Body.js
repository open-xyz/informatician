import React from "react";
import { Routes, Route } from "react-router-dom";
import BookList from "./BookList";
import About from "./About";
import Home from "./Home";
import Contact from "./Contactus";
import Team from "./Team";
import TermsAndService from "./Terms&Service";

function Body() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<BookList />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/team" element={<Team/>}/>
        <Route path="/terms" element={<TermsAndService/>}/>
      </Routes>
    </div>
  );
}

export default Body;
