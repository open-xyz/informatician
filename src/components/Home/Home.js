import React from "react";
import ImgSection from "./ImgSection/ImgSection";
import BkCards from "./BkCards/BkCards";
import Carousel from "./Carousel/MyCarousel"

export default function Home() {
  return (
    <>
      <Carousel/>
      <ImgSection />
      <BkCards bkhead="Bestselling Books & Audiobooks" />
      <BkCards 
        bkhead="Current New York Times Bestsellers" />
    </>
  );
}
