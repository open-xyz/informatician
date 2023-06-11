import React from "react";
import ImgSection from "./ImgSection/ImgSection";
import BkCards from "./BkCards/BkCards";
import CgCards from "./CgCards/CgCards";
import "./Home.css";

// #1b0233
// #020634
// #1a202c
export default function Home(props) {
  return (
    <>
      <ImgSection txt={["Start Reading", "Be a Reader"]} />
      <div className="container-xxl" style={{ background: props.theme === "dark" ? "#020634" : "white" }}>
        <CgCards theme={props.theme} />
      </div>
      <div className="container-xxl" style={{zIndex: 2, position: "relative"}}>
        <BkCards bkhead="Bestselling Books & Audiobooks" />
      </div>
        <div className="behind" style={{position: "absolute", right: "44px", zIndex: 1}}>
          <img 
            className="behind-img"
            style={{
              display: props.theme === "dark" ? "block" : "none",
              // filter: props.theme==="dark"?"contrast(0.56789999999)":"",
              filter: props.theme === "dark" ? "blur(2px)" : "",
              transform: "rotate(-11deg)"
            }} 
            src="https://user-images.githubusercontent.com/33249782/240937486-d84c477d-63f4-4558-ae04-454d803a5b1f.png" 
            alt="Logo" />
        </div>

      <div className="container-xxl" style={{background: props.theme === "dark" ? "#020634" : "white"}}>
        <BkCards
          bkhead="Current New York Times Bestsellers" />
      </div>

    </>
  );
}
