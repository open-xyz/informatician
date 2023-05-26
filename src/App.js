import React from "react";
import Body from "./components/Body";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { BrowserRouter } from "react-router-dom";
import ScrollToTopButton from "./components/ScrollButton";
// import FooteR from "./components/Footer/Footer";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="app-body">
          <Body />
        </div>
      <Footer />
      </BrowserRouter>
      <ScrollToTopButton />
    </>
  );
}

