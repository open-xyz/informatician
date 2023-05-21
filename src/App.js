import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/common/navbar/Navbar";
import Footer from "./components/common/footer/Footer";
import BookList from "./pages/books/BookList";
import About from "./pages/about/About";

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
    </div>
  );
}
