import React from "react";
import ImgSection from "./ImgSection/ImgSection";
// import CgCards from "./CgCards/CgCards";
// import CgCards from "./CgCards/CgCards";
// import BkCards from "./BkCards/BkCards";
// import CgCards from "./CgCards/CgCards";


export default function Hero() {
  return (
    <>
      <ImgSection
        txt={["Start Reading","Be a Reader"]} />
      {/* <CgCards />
      <BkCards 
        bkhead="Bestselling Books & Audiobooks" />
      <BkCards 
        bkhead="Current New York Times Bestsellers" /> */}
    </>
  );
}
