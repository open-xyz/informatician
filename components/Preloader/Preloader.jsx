"use client";
import React from "react";

const Preloader = () => {
  const loaderStyles = {
    width: "600px",
    height: "400px",
    background: "#d11111",
    border: "#f5f5f5 solid",
    boxSizing: "border-box",
    position: "relative",
    borderRadius: "8px",
    perspective: "1000px",
  };

  const loaderBeforeStyles = {
    content: "",
    position: "absolute",
    left: "10px",
    right: "10px",
    top: "10px",
    bottom: "10px",
    borderRadius: "8px",
    background: "#f5f5f5 no-repeat",
    backgroundSize: "60px 10px",
    backgroundImage:
      "linear-gradient(#ddd 100px, transparent 0), linear-gradient(#ddd 100px, transparent 0), linear-gradient(#ddd 100px, transparent 0), linear-gradient(#ddd 100px, transparent 0), linear-gradient(#ddd 100px, transparent 0), linear-gradient(#ddd 100px, transparent 0)",
    backgroundPosition:
      "15px 30px , 15px 60px , 15px 90px, 105px 30px , 105px 60px , 105px 90px",
    boxShadow: "0 0 10px rgba(0,0,0,0.25)",
  };

  const loaderAfterStyles = {
    content: "",
    position: "absolute",
    width: "calc(50% - 10px)",
    right: "10px",
    top: "10px",
    bottom: "10px",
    borderRadius: "8px",
    background: "#fff no-repeat",
    backgroundSize: "60px 10px",
    backgroundImage:
      "linear-gradient(#ddd 100px, transparent 0), linear-gradient(#ddd 100px, transparent 0), linear-gradient(#ddd 100px, transparent 0)",
    backgroundPosition: "50% 30px ,50% 60px , 50%  90px",
    transform: "rotateY(0deg)",
    transformOrigin: "left center",
    animation: "paging 1s linear infinite",
  };

  const keyframes = `@keyframes paging {
    to {
      transform: rotateY(-180deg);
    }
  }`;
  return (
    <div
      className="flex justify-center items-center h-screen"
      style={{ background: "#0C4A6E" }}
    >
      <div style={loaderStyles}>
        <style>{keyframes}</style>
        <span style={loaderBeforeStyles}></span>
        <span style={loaderAfterStyles}></span>
      </div>
    </div>
  );
};

export default Preloader;
