import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "./BkCards.css";
import CardContent from "./CardContent/CardContent";
import ebk1 from "../../../assets/ebooks/ebk1.webp";
import ebk2 from "../../../assets/ebooks/ebk2.webp";
import ebk3 from "../../../assets/ebooks/ebk3.webp";
import ebk4 from "../../../assets/ebooks/ebk4.webp";
import ebk5 from "../../../assets/ebooks/ebk5.webp";
import ebk6 from "../../../assets/ebooks/ebk6.webp";
import abk1 from "../../../assets/audiobks/abk1.webp";
import abk2 from "../../../assets/audiobks/abk2.webp";
import abk3 from "../../../assets/audiobks/abk3.webp";
import abk4 from "../../../assets/audiobks/abk4.webp";
import SingleBk from "../SingleBk/SingleBk";
import { useSwiper } from "swiper/react";

const GhostPrevButton = ({ refprop }) => {
  const swiper = useSwiper();

  return (
    <div
      ref={refprop}
      className="hidden"
      onClick={() => swiper.slidePrev()}
    ></div>
  );
};
const GhostNextButton = ({ refprop }) => {
  const swiper = useSwiper();

  return (
    <div
      ref={refprop}
      className="hidden"
      onClick={() => swiper.slideNext()}
    ></div>
  );
};

export default function BkCards(props) {
  const prevButton = useRef(null);
  const nextButton = useRef(null);

  const singleBookView = () => {
    return <SingleBk />;
  };

  return (
    <>
      <div className="container-xl">
        <div className="row justify-content-center">
          <div className="books">
            <h2 className="bk-head">{props.bkhead}</h2>
            <div className="flex items-center gap-2 md:gap-10 ">
              <div
                onClick={() => prevButton.current.click()}
                className=" cursor-pointer"
              >
                <svg
                  height="50"
                  width="80"
                  viewBox="0 0 512 512"
                  xmlSpace="preserve"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ rotate: "180deg" }}
                >
                  <path d="M160 115.4L180.7 96 352 256 180.7 416 160 396.7 310.5 256z" />
                </svg>
              </div>
              <Swiper
                slidesPerView={1}
                spaceBetween={10}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                  },
                  1096: {
                    slidesPerView: 5,
                    spaceBetween: 50,
                  },
                }}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
              >
                <GhostPrevButton refprop={prevButton} />
                <SwiperSlide > 
                  <CardContent  className="columnn"
                    imgName={ebk1}
                    type="Ebook"
                    title="The Perfect Marriage: A Completely Gripping Psychological Suspense"
                    author="Jeneva Rose"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, odio!"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <CardContent
                    imgName={abk1}
                    type="Audiobook"
                    title="The Last Mrs. Parrish: A Novel"
                    author="Liv Constantine"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, odio!"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <CardContent
                    imgName={abk2}
                    type="Audiobook"
                    title="The Guest List: A Novel"
                    author="Lucy Foley"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, odio!"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <CardContent
                    imgName={abk3}
                    type="Audiobook"
                    title="The Subtle Art of Not Giving a F*ck: A Counterintuitive Approach to Living a Good Life"
                    author="Mark Manson"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, odio!"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <CardContent
                    imgName={abk4}
                    type="Audiobook"
                    title="Building a StoryBrand: Clarify Your Message So Customers Will Listen"
                    author="Findaway"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, odio!"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <CardContent
                    imgName={ebk2}
                    type="Ebook"
                    title="An Ugly Truth: Inside Facebook's Battle for Domination"
                    author="Sheera Frenkel"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, odio!"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <CardContent
                    imgName={ebk3}
                    type="Ebook"
                    title="Never Split the Difference: Negotiating As If Your Life Depended On It"
                    author="Chris Voss"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, odio!"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <CardContent
                    imgName={ebk4}
                    type="Ebook"
                    title="Everything Is F*cked: A Book About Hope"
                    author="Mark Manson"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, odio!"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <CardContent
                    imgName={ebk5}
                    type="Ebook"
                    title="The Intelligent Investor, Rev. Ed: The Definitive Book on Value Investing"
                    author="Benjamin Graham"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, odio!"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <CardContent
                    imgName={ebk6}
                    type="Ebook"
                    title="Vanderbilt: The Rise and Fall of an American Dynasty"
                    author="Anderson Cooper"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, odio!"
                  />
                </SwiperSlide>
                <GhostNextButton refprop={nextButton} />
              </Swiper>
              <div
                onClick={() => nextButton.current.click()}
                className="cursor-pointer"
              >
                <svg
                  height="50"
                  width="50"
                  viewBox="0 0 512 512"
                  xmlSpace="preserve"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M160 115.4L180.7 96 352 256 180.7 416 160 396.7 310.5 256z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
