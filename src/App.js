import React,{useState} from "react";
import Body from "./components/Body";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { BrowserRouter } from "react-router-dom";
import ScrollToTopButton from "./components/ScrollButton";
import { Refine } from "@pankod/refine-core";

export default function App() {

  const [theme, setTheme] = useState("light");

  const toggleTheme = ()=>{
    if(theme === "light")
    {
      document.body.style.background = "black";
      document.body.style.color = "white";
      setTheme("dark");
    }
    else
    {
      document.body.style.background = "white";
      document.body.style.color = "black";
      setTheme("light");
    }
  }

  return (
    <>
    {/* <Refine> */}
      <BrowserRouter>
        <Navbar toggleTheme={toggleTheme} theme={theme} />
        <div className="app-body">
          <Body theme={theme} />
        </div>
      <Footer theme={theme} />
      </BrowserRouter>
      <ScrollToTopButton />
      {/* </Refine> */}
    </>
  );
}

