"use client";
import CardContent from "./CardContent/CardContent";
import  { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import cardComponentData from "./cardComponentData";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

export default function CgCards() {

  return (
    <div className="max-w-6xl mx-auto mt-20">
      <h1 className="text-3xl mb-12 text-center">Popular Categories</h1>
      <div className="flex max-h-full">
        <Swiper
          className="h-40"
          loop={true}
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={0}
          slidesPerView={1}
          slidesPerGroup={1}
          autoplay={{
            delay: 2500,
          }}
          // navigation
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          breakpoints={{
            512: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1500: {
              slidesPerView: 4,
            },
          }}
        >
        {cardComponentData.map((data, index)=>{
          return  <SwiperSlide key={index}>
            <CardContent image={data.img} title={data.title} />
          </SwiperSlide>
        })}
        </Swiper>
      </div>
    </div>
  );
}
