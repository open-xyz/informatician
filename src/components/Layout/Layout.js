import React from "react";
import Footer from "./Header/Footer";
import Navbar from "./Navbar/Navbar";


const Layout = (props) => {
  return (
    <>
    <Navbar/>
    <main>{props.children}</main>
    <Footer/>
    </>
  )
}

export default Layout