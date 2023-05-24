import React from "react";
import { Routes, Route } from "react-router-dom";
import BookList from "./BookList/BookList";
import About from "./About/About";
import Home from "./Home/Home";
// import BookList from "./BookList";
// import About from "./About";
// import Home from "./Home";
import Contact from "./Contactus";
import Team from "./Team";
import TermsAndService from "./Terms&Service";
import PrivacyPolicy from "./PrivacyPolicy";
import CookiePolicy from "./Cookie";
import FaqHelp from "./faq";
import Develop from "./develop";
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
        <Route path="/privacy" element={<PrivacyPolicy/>}/>
        <Route path="/cookie" element={<CookiePolicy/>}/>
        <Route path="/faq" element={<FaqHelp/>}/>
        <Route path="/develop" element={<Develop/>}/>



      </Routes>
    </div>
  );
}

export default Body;
