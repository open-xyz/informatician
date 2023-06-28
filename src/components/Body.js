import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import AdChoices from "./AdChoices/AdChoices";
import PublishersPage from "./Publishers/Publishers";
import BookmarkPage from "./Bookmarks/BookmarkPage";
const BookList = lazy(() => import("./BookList/BookList"));
const About = lazy(() => import("./About/About"));
const Home = lazy(() => import("./Home/Home"));
const Contact = lazy(() => import("./Contactus"));
const Team = lazy(() => import("./Team/Team"));
const TermsAndService = lazy(() => import("./Terms&Service"));
const PrivacyPolicy = lazy(() => import("./PrivacyPolicy"));
const CookiePolicy = lazy(() => import("./Cookie"));
const FaqHelp = lazy(() => import("./faq"));
const Develop = lazy(() => import("./develop"));
const Error = lazy(() => import("./Error"));
const SingleBk = lazy(() => import("./Home/SingleBk/SingleBk"));
const SingleBk1 = lazy(() => import("./Home/SingleBk/SingleBk1"));
const SingleBk2 = lazy(() => import("./Home/SingleBk/SingleBk2"));
const SingleBk3 = lazy(() => import("./Home/SingleBk/SingleBk3"));
const SingleBk4 = lazy(() => import("./Home/SingleBk/SingleBk4"));
const SingleBk5 = lazy(() => import("./Home/SingleBk/SingleBk5"));
const SingleBk6 = lazy(() => import("./Home/SingleBk/SingleBk6"));
const SingleBk7 = lazy(() => import("./Home/SingleBk/SingleBk7"));
const SingleBk8 = lazy(() => import("./Home/SingleBk/SingleBk8"));
const SingleBk9 = lazy(() => import("./Home/SingleBk/SingleBk9"));
const SingleBk10 = lazy(() => import("./Home/SingleBk/SingleBk10"));
const SingleBk11 = lazy(() => import("./Home/SingleBk/SingleBk11"));
const SingleBk12 = lazy(() => import("./Home/SingleBk/SingleBk12"));
const SingleBk13 = lazy(() => import("./Home/SingleBk/SingleBk13"));
const SingleBk14 = lazy(() => import("./Home/SingleBk/SingleBk14"));
const AddBooks = lazy(() => import("./AddBooks/AddBooks"));
const Success = lazy(() => import("./Success"));
const Join = lazy(() => import("./JoinOurTeam/Join"));
const Travel = lazy(() => import("./Categories/travel"));
const Biography = lazy(() => import("./Categories/biography"));
const Career = lazy(() => import("./Categories/career"));
const Contemporary = lazy(() => import("./Categories/contemporary"));
const Cooking = lazy(() => import("./Categories/cooking"));
const Garden = lazy(() => import("./Categories/garden"));
const Mystery = lazy(() => import("./Categories/mystery"));
const Politics = lazy(() => import("./Categories/politics"));
const Science = lazy(() => import("./Categories/science"));
const Selfhelp = lazy(() => import("./Categories/selfhelp"));
const CopyrightPage = lazy(() => import("./Copyright/Copyright"));
const AccessibilityPage = lazy(() => import("./Accessibility/Accessibility"));


function Body(props) {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<BookList theme={props.theme} />} />
          <Route
            path="/books/book"
            element={<SingleBk theme={props.theme} />}
          />
          <Route
            path="/books/book1"
            element={<SingleBk1 theme={props.theme} />}
          />
          <Route
            path="/books/book2"
            element={<SingleBk2 theme={props.theme} />}
          />
          <Route
            path="/books/book3"
            element={<SingleBk3 theme={props.theme} />}
          />
          <Route
            path="/books/book4"
            element={<SingleBk4 theme={props.theme} />}
          />
          <Route
            path="/books/book5"
            element={<SingleBk5 theme={props.theme} />}
          />
          <Route
            path="/books/book6"
            element={<SingleBk6 theme={props.theme} />}
          />
          <Route
            path="/books/book7"
            element={<SingleBk7 theme={props.theme} />}
          />
          <Route
            path="/books/book8"
            element={<SingleBk8 theme={props.theme} />}
          />
          <Route
            path="/books/book9"
            element={<SingleBk9 theme={props.theme} />}
          />
          <Route
            path="/books/book10"
            element={<SingleBk10 theme={props.theme} />}
          />
          <Route
            path="/books/book11"
            element={<SingleBk11 theme={props.theme} />}
          />
          <Route
            path="/books/book12"
            element={<SingleBk12 theme={props.theme} />}
          />
          <Route
            path="/books/book13"
            element={<SingleBk13 theme={props.theme} />}
          />
          <Route
            path="/books/book14"
            element={<SingleBk14 theme={props.theme} />}
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
          <Route path="/addBooks" element={<AddBooks />} />
          <Route path="/publishers" element={<PublishersPage theme={props.theme} />} />
          <Route path="/adchoices" element={<AdChoices theme={props.theme} />} />
          <Route path="/bookmarks" element={<BookmarkPage theme={props.theme} />} />

          <Route path="/pcategories/travel" element={<Travel />} />
          <Route path="/pcategories/biography" element={<Biography theme={props.theme} />} />
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
