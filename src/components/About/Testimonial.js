import React, { useState } from "react";
import "./Testimonial.css";

export default function Testimonial() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <div className={`mt-20 mb-28 titles ${isDarkMode ? "dark-mode" : ""}`}>
      <h1 className="text-center fw-bold fs-1">Our Testimonials</h1>
      <p className="text-center mt-2 mb-5">
        What Our Clients Say About The Books: Reviews and Comments
      </p>
      <div className="testimonial-container">
        <div className="testimonial">
          <img
            className="image h-44 w-40 object-cover rounded-full"
            src="https://avatars.githubusercontent.com/u/33249782?v=4"
            alt="Rohan Sharma"
          />
          <p className="testimonial-text">
            <i className="bx bxs-quote-alt-left quote-icon text-2xl text-blue-600"></i>
            This app is great! It's like the Netflix of books! As a college
            student, this app has helped me a lot in reading science and
            mathematics. I have had zero issues and found most of the books I
            needed. Thanks! I truly love this app!
            <i className="bx bxs-quote-alt-right quote-icon text-2xl text-blue-600"></i>
          </p>
          <div className="details">
            <span className="name text-lg font-semibold">Rohan</span>
            <span className="job text-base font-normal">Project Admin</span>
          </div>
        </div>
        <div className="testimonial">
          <img
            className="image h-44 w-40 object-cover rounded-full"
            src="https://avatars.githubusercontent.com/u/96341431?v=4"
            alt="Deepaksingh Kushwah"
          />
          <p className="testimonial-text">
            <i className="bx bxs-quote-alt-left quote-icon text-3xl text-blue-600"></i>
            The selection of ebooks and audiobooks is plentiful. I have found
            and saved so many books to read and listen to that would have
            otherwise cost me a fortune anywhere else. There’s no contest at
            all!
            <i className="bx bxs-quote-alt-right quote-icon text-2xl text-blue-600"></i>
          </p>
          <div className="details">
            <span className="name text-lg font-semibold">Deepak</span>
            <span className="job text-base font-normal">Project Admin</span>
          </div>
        </div>
        <div className="testimonial">
          <img
            className="image h-44 w-40 object-cover rounded-full"
            src="https://avatars.githubusercontent.com/u/100675296?v=4"
            alt="Sumit Kumar Rai"
          />
          <p className="testimonial-text">
            <i className="bx bxs-quote-alt-left quote-icon text-3xl text-blue-600"></i>
            From major literary works and detailed historical and scientific
            studies to popular fiction and self-help books, it's incredible how
            much there is to find on Informatician. Fantastic!
            <i className="bx bxs-quote-alt-right quote-icon text-3xl text-blue-600"></i>
          </p>
          <div className="details">
            <span className="name text-lg font-semibold">Sumit</span>
            <span className="job text-base font-normal">Contributor</span>
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
                alt="Rohan Sharma"
              />
              <p className="py-0  px-[100px] text-center text-lg font-medium" style={{color: "var(--textLight-secconday)"}}>
              <i className="bx bxs-quote-alt-left quote-icon text-2xl text-blue-600"></i>
                   This app is great! Its like the Netflix of books! As a college
                student, this app has helped me a lot in reading science and
                mathematics. I have had zero issues and found most of the books
                I needed. Thanks! I truly love this app!
                <i className="bx bxs-quote-alt-right quote-icon text-2xl text-blue-600"></i>
              </p>
            
              <div className="details flex flex-col items-center">
                <span className="name text-lg font-semibold">
                  Rohan
                </span>
                <span className="job text-base font-normal">
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
                alt="Deepaksingh Kushwah"
              />
              <p className="py-0  px-[100px] text-center text-lg font-medium ">
              <i className="bx bxs-quote-alt-left quote-icon text-3xl text-blue-600"></i>
                The selection of ebooks and audiobooks is plentiful. I have
                found and saved so many books to read and listen to that would
                have otherwise cost me a fortune anywhere else. There’s no
                contest at all!
                <i className="bx bxs-quote-alt-right quote-icon text-2xl text-blue-600"></i>
              </p>
              
              <div className="details flex flex-col items-center">
                <span className="name text-lg font-semibold">
                  Deepak
                </span>
                <span className="job text-base font-normal">
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
                alt="Sumit Kumar Rai"
              />
              <p className="py-0  px-[100px] text-center text-lg font-medium">
              <i className="bx bxs-quote-alt-left quote-icon text-3xl text-blue-600"></i>
                From major literary works and detailed historical and scientific
                studies to popular fiction and self-help books, it’s incredible
                how much there is to find on Informatician. Fantastic!
                <i className="bx bxs-quote-alt-right quote-icon text-3xl text-blue-600"></i>
              </p>
             
              <div className="details flex flex-col items-center">
                <span className="name text-lg font-semibold">
                  Sumit
                </span>
                <span className="job text-base font-normal">
                  Contributor
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
