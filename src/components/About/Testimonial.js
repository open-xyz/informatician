import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Testimonial.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import "aos/dist/aos.css";
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

export default function Testimonial() {
  const prevButton = useRef(null);
  const nextButton = useRef(null);

  return (
    <div className="mt-20 mb-28 titles">
      <h1 className="heading text-center fw-bold fs-1" >Our Testimonials</h1>
      <p className="text-center mt-2 mb-5">
        What Our Client Say About The Books. Reviews And Comments
      </p>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper custom"
      >
        <SwiperSlide>
          <div className="testimonial max-w-5xl relative w-full py-0 px-0" data-aos="fade-up" data-aos-duration="500">
            <div className="slide flex items-center  justify-center flex-col gap-y-6  py-6 ">
              <img 
                className="image  h-44 w-40 object-cover rounded-full "
                src="https://avatars.githubusercontent.com/u/33249782?v=4"
                alt=""
              />
              <p className="py-0  px-[100px] text-center text-lg font-medium text-slate-800 ">
              <i className="bx bxs-quote-alt-left quote-icon text-2xl text-blue-600"></i>
                   This app is great! Its like the Netflix of books! As a college
                student, this app has helped me a lot in reading science and
                mathematics. I have had zero issues and found most of the books
                I needed. Thanks! I truly love this app!
                <i className="bx bxs-quote-alt-right quote-icon text-2xl text-blue-600"></i>
              </p>
            
              <div className="details flex flex-col items-center">
                <span className="name text-lg font-semibold text-slate-800">
                  Rohan
                </span>
                <span className="job text-base font-normal text-slate-800">
                  Project Admin
                </span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimonial max-w-5xl relative w-full py-0 px-0 ">
            <div className="slide flex items-center justify-center flex-col gap-y-6  py-6 ">
              <img
                className="image h-44 w-40 object-cover rounded-full"
                src="https://avatars.githubusercontent.com/u/96341431?v=4"
                alt=""
              />
              <p className="py-0  px-[100px] text-center text-lg font-medium text-slate-800 ">
              <i className="bx bxs-quote-alt-left quote-icon text-3xl text-blue-600"></i>
                The selection of ebooks and audiobooks is plentiful. I have
                found and saved so many books to read and listen to that would
                have otherwise cost me a fortune anywhere else. There’s no
                contest at all!
                <i className="bx bxs-quote-alt-right quote-icon text-2xl text-blue-600"></i>
              </p>
              
              <div className="details flex flex-col items-center">
                <span className="name text-lg font-semibold text-slate-800">
                  Deepak
                </span>
                <span className="job text-base font-normal text-slate-800">
                  Project Admin
                </span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimonial max-w-5xl relative w-full py-0 px-0 ">
            <div className="slide flex items-center justify-center flex-col gap-y-6  py-6 ">
              <img
                className="image h-44 w-40 object-cover rounded-full"
                src="https://avatars.githubusercontent.com/u/100675296?v=4"
                alt=""
              />
              <p className="py-0  px-[100px] text-center text-lg font-medium text-slate-800 ">
              <i className="bx bxs-quote-alt-left quote-icon text-3xl text-blue-600"></i>
                From major literary works and detailed historical and scientific
                studies to popular fiction and self-help books, it’s incredible
                how much there is to find on Informatician. Fantastic!
                <i className="bx bxs-quote-alt-right quote-icon text-3xl text-blue-600"></i>
              </p>
             
              <div className="details flex flex-col items-center">
                <span className="name text-lg font-semibold text-slate-800">
                  Sumit
                </span>
                <span className="job text-base font-normal text-slate-800">
                  Contributor
                </span>

               </div>
            </div>
              </div>
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
  );
}
