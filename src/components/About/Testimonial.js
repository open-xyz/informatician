import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Testimonial.css';

AOS.init();

const testimonials = [
  {
    id: 1,
    name: 'Rohan',
    job: 'Project Admin',
    image: 'https://avatars.githubusercontent.com/u/33249782?v=4',
    quote:
      "This app is great! It's like the Netflix of books! As a college student, this app has helped me a lot in reading science and mathematics. I have had zero issues and found most of the books I needed. Thanks! I truly love this app!",
  },
  {
    id: 2,
    name: 'Deepak',
    job: 'Project Admin',
    image: 'https://avatars.githubusercontent.com/u/96341431?v=4',
    quote:
      'The selection of ebooks and audiobooks is plentiful. I have found and saved so many books to read and listen to that would have otherwise cost me a fortune anywhere else. There’s no contest at all!',
  },
  {
    id: 3,
    name: 'Sumit',
    job: 'Contributor',
    image: 'https://avatars.githubusercontent.com/u/100675296?v=4',
    quote:
      "From major literary works and detailed historical and scientific studies to popular fiction and self-help books, it's incredible how much there is to find on Informatician. Fantastic!",
  },
  //add more testimonials here
];

export default function Testimonial() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };

  return (
    <div className="mt-20 mb-28 titles">
      <h1 className="heading text-center fw-bold fs-1">Our Testimonials</h1>
      <p className="text-center mt-2 mb-5">
        What Our Clients Say About The Books. Reviews And Comments
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
        className="mySwiper custom testimonial-slider"
        onSlideChange={handleSlideChange}
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div
              className="testimonial max-w-5xl relative w-full py-0 px-0"
              data-aos="fade-up"
              data-aos-duration="500"
            >
              <div className="slide flex items-center justify-center flex-col gap-y-6 py-6 testimonial-slide">
                <img
                  className="image h-44 w-40 object-cover rounded-full"
                  src={testimonial.image}
                  alt={testimonial.name}
                />
                <p className="py-0 px-[100px] text-center text-lg font-medium text-slate-800">
                  <i className="bx bxs-quote-alt-left quote-icon text-2xl text-blue-600"></i>
                  {testimonial.quote}
                  <i className="bx bxs-quote-alt-right quote-icon text-2xl text-blue-600"></i>
                </p>
                <div className="details flex flex-col items-center">
                  <span className="name text-lg font-semibold text-slate-800">
                    {testimonial.name}
                  </span>
                  <span className="job text-base font-normal text-slate-800">
                    {testimonial.job}
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
