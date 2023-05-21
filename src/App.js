import React from "react";
import Body from "./components/Body";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter } from "react-router-dom";
import ScrollToTopButton from "./components/ScrollButton";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <div className="app-body">
          <Body />
        </div>
      </BrowserRouter>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
