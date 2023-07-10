import React from "react";
import ImgSection from "./ImgSection/ImgSection";
import BkCards from "./BkCards/BkCards";
import CgCards from "./CgCards/CgCards";

export default function Home(props) {
  return (
    <>
      <ImgSection txt={["Start Reading", "Be a Reader"]} />
      <CgCards />
      <BkCards theme={props.theme} bkhead="Bestselling Books & Audiobooks" />
      <BkCards
        theme={props.theme}
        bkhead="Current New York Times Bestsellers"
      />
    </>
  );
}
