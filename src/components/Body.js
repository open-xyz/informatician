import React from "react";
import { Routes, Route } from "react-router-dom";
import BookList from "./BookList/BookList";
import About from "./About/About";
import Home from "./Home/Home";
// import BookList from "./BookList";
// import About from "./About";
// import Home from "./Home";
import Contact from "./Contactus";
import Team from "./Team/Team";
import TermsAndService from "./Terms&Service";
import PrivacyPolicy from "./PrivacyPolicy";
import CookiePolicy from "./Cookie";
import FaqHelp from "./faq";
import Develop from "./develop";
import Error from "./Error";
import SingleBk from "./Home/SingleBk/SingleBk";
import AddBooks from "./AddBooks/AddBooks";
import Success from "./Success";

function Body(props) {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<BookList theme={props.theme} />} />
        <Route path="/books/id" element={<SingleBk />} />
        <Route path="/about" element={<About theme={props.theme} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/team" element={<Team theme={props.theme}/>} />
        <Route path="/terms" element={<TermsAndService theme={props.theme}/>} />
        <Route path="/privacy" element={<PrivacyPolicy theme={props.theme}/>} />
        <Route path="/cookie" element={<CookiePolicy theme={props.theme}/>} />
        <Route path="/faq" element={<FaqHelp theme={props.theme}/>} />
        <Route path="/develop" element={<Develop theme={props.theme}/>} />
        <Route path="/addBooks" element={<AddBooks/>} />
        <Route path="/success" element={<Success/>} />

        <Route path="*" element={<Error />} />


      </Routes>
    </div>
  );
}

export default Body;
