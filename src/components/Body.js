import React, { Suspense } from "react";
import Loader from "./Loader/loader";
import { Routes, Route } from "react-router-dom";
import AdChoices from "../pages/AdChoices/AdChoices";
import PublishersPage from "../pages/Publishers/Publishers";
import BookmarkPage from "../pages/Bookmarks/BookmarkPage";
import BenefitsOfReading from "../pages/Benefits/Benefits";
import BookList from "./BookList/BookList";
import About from "../pages/About/About";
import Home from "./Home/Home";
import Contact from "../pages/Contact/Contactus";
import Team from "./Team/Team";
import TermsAndService from "../pages/Terms/Terms&Service";
import PrivacyPolicy from "../pages/Privacy/PrivacyPolicy";
import CookiePolicy from "../pages/Cookies/Cookie";
import FaqHelp from "./FAQ/faq";
import Develop from "../pages/Develop/develop";
import Error from "./Error/Error";
import BookComponent from "./Home/BookComponent/BookComponent";
import AddBooks from "./AddBooks/AddBooks";
import Success from "./Success";
import Join from "../pages/JoinOurTeam/Join";
import Travel from "./Categories/travel";
import Biography from "./Categories/biography";
import Career from "./Categories/career";
import Contemporary from "./Categories/contemporary";
import Cooking from "./Categories/cooking";
import Garden from "./Categories/garden";
import Mystery from "./Categories/mystery";
import Politics from "./Categories/politics";
import Science from "./Categories/science";
import Selfhelp from "./Categories/selfhelp";
import CopyrightPage from "../pages/Copyright/Copyright";
import AccessibilityPage from "../pages/Accessibility/Accessibility";
import BookFormats from "../pages/BookFormats/BookFormats";
import GenreDetails from "../pages/GenreDetails/GenreDetails";
import BookAwards from "../pages/Awards/BookAwards";

function Body(props) {
  return (
    <div>
      <Suspense fallback={<Loader  />}>
        <Routes>
          <Route path="/" element={<Home theme={props.theme} />} />
          <Route path="/books" element={<BookList theme={props.theme} />} />
          <Route
            path="/books/:bookId"
            element={<BookComponent theme={props.theme} />}
          />
          <Route path="/about" element={<About theme={props.theme} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/team" element={<Team theme={props.theme} />} />
          <Route path="/terms" element={<TermsAndService />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/copyright" element={<CopyrightPage />} />
          <Route path="/cookie" element={<CookiePolicy />} />
          <Route path="/accessibility" element={<AccessibilityPage />} />
          <Route path="/faq" element={<FaqHelp />} />
          <Route path="/join" element={<Join />} />
          <Route path="/develop" element={<Develop />} />
          <Route path="/addBooks" element={<AddBooks theme={props.theme} />} />
          <Route
            path="/publishers"
            element={<PublishersPage theme={props.theme} />}
          />
          <Route
            path="/adchoices"
            element={<AdChoices theme={props.theme} />}
          />
          <Route
            path="/bookmarks"
            element={<BookmarkPage theme={props.theme} />}
          />
          <Route
            path="/benefits"
            element={<BenefitsOfReading theme={props.theme} />}
          />
          <Route
            path="/formats"
            element={<BookFormats theme={props.theme} />}
          />
          <Route path="/genre" element={<GenreDetails theme={props.theme} />} />
          <Route path="/awards" element={<BookAwards theme={props.theme} />} />

          <Route path="/pcategories/travel" element={<Travel />} />
          <Route
            path="/pcategories/biography"
            element={<Biography theme={props.theme} />}
          />
          <Route path="/pcategories/contemporary" element={<Contemporary />} />
          <Route path="/pcategories/cooking" element={<Cooking />} />
          <Route path="/pcategories/garden" element={<Garden />} />
          <Route path="/pcategories/mystery" element={<Mystery />} />
          <Route path="/pcategories/politics" element={<Politics />} />
          <Route path="/pcategories/science" element={<Science />} />
          <Route path="/pcategories/selfhelp" element={<Selfhelp />} />
          <Route path="/pcategories/career" element={<Career />} />

          <Route path="*" element={<Error />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default Body;
