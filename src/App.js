import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Body from "./components/Body";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ScrollToTopButton from "./components/ScrollButton";
import ReadingChallenge from "./components/ReadingChallenge";


export default function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "light") {
      document.body.style.background = "black";
      document.body.style.color = "white";
      setTheme("dark");
    } else {
      document.body.style.background = "white";
      document.body.style.color = "black";
      setTheme("light");
    }
  }

  return (
    <Router>
      <Navbar toggleTheme={toggleTheme} theme={theme} />
      <Routes>
        <Route path="/" element={<Body />} />
       
        <Route path="/reading-challenge" element={<ReadingChallenge />} />
      </Routes>
      <Footer theme={theme} />
      <ScrollToTopButton />
    </Router>
  );
}
