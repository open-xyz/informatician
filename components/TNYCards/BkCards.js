"use client";
import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
import Link from "next/link";
import CardContent from "./CardContent/CardContent";
import { useSwiper } from "swiper/react";
import axios from "axios";
import "./Spinner.css";
SwiperCore.use([Autoplay, Pagination, Navigation]);

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
  const swiperRef = useRef(null);
  const [Categories, setCategories] = useState(null);
  const [Bestsellers, setBestsellers] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loadingCategories, setLoadingCategories] = useState(true);

  const [selectedCategory, setSelectedCategory] = useState(
    "combined-print-and-e-book-fiction"
  ); // Initial state 'combined-print-and-e-book-fiction'

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "https://api.nytimes.com/svc/books/v3/lists/names?api-key=2VcBB4ZBHYy2nKIJfm26PRKfawHXfp5Q"
        );
        console.log(response.data.results);
        setCategories(response.data.results);
        setLoadingCategories(false);
      } catch (error) {
        console.log(error);
        setLoadingCategories(false);
      }
    };

    const fetchBestsellersData = async () => {
      try {
        console.log(selectedCategory);
        const response = await axios.get(
          `https://api.nytimes.com/svc/books/v3/lists/${selectedCategory}?api-key=2VcBB4ZBHYy2nKIJfm26PRKfawHXfp5Q`
        );
        console.log(response.data);
        setBestsellers(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchCategories();
    fetchBestsellersData();
  }, [selectedCategory]);
  useEffect(() => {
    const swiperInstance = swiperRef.current.swiper;

    const interval = setInterval(() => {
      swiperInstance.slideNext();
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);
  const handleNextSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const handlePrevSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };
  return (
    <div className="container py-12 max-w-xs sm:max-w-none mx-auto">
      <div className="row justify-content-center">
        <div className="books">
          {props.bkhead && (
            <h2 className="font-serif text-3xl font-bold mb-4 mx-5 text-center">
              {props.bkhead}
            </h2>
          )}

          {loadingCategories ? (
            <span className="loader flex mx-auto"></span>
          ) : (
            <div className="text-center">
              <label htmlFor="categorySelect" className="block font-bold">
                Select Category:
              </label>
              <select
                id="categorySelect"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="mt-2 p-2 border rounded"
              >
                {Categories?.map((cat) => (
                  <option key={cat.id} value={cat.list_name_encoded}>
                    {cat.display_name}
                  </option>
                ))}
              </select>
            </div>
          )}

          <div className="flex items-center gap-2 md:gap-10">
            <div onClick={handlePrevSlide} className="cursor-pointer">
              <svg
                height="50"
                width="50"
                viewBox="0 0 512 512"
                xmlSpace="preserve"
                xmlns="http://www.w3.org/2000/svg"
                style={{ rotate: "180deg" }}
              >
                <path
                  d="M160 115.4L180.7 96 352 256 180.7 416 160 396.7 310.5 256z"
                  fill="grey"
                />
              </svg>
            </div>

            <Swiper
              ref={swiperRef}
              slidesPerView={1}
              spaceBetween={20}
              autoplay={{
                delay: 3000, // Same as interval for auto-sliding
                disableOnInteraction: false, // Prevent autoplay from stopping on user interaction
              }}
              loop={true}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                },
                1096: {
                  slidesPerView: 5,
                },
              }}
              modules={[Autoplay, Pagination, Navigation]}
              className="dark:bg-[#161313] h-[30rem]"
            >
              {loading ? (
                <span className="loader"></span>
              ) : (
                <>
                  <GhostPrevButton refprop={prevButton} />
                  {Bestsellers?.results?.books?.map((book) => (
                    <SwiperSlide key={book.id} className="min-w-min mx-auto">
                      <Link href={`/books/${book.id}`}>
                        <CardContent
                          className="columnn"
                          imgName={book.book_image}
                          type={book.type}
                          title={book.title}
                          author={book.author}
                          description={book.description}
                          rank={book.rank}
                        />
                      </Link>
                    </SwiperSlide>
                  ))}
                  <GhostNextButton refprop={nextButton} />
                </>
              )}
            </Swiper>

            <div onClick={handleNextSlide} className="cursor-pointer">
              <svg
                height="50"
                width="50"
                viewBox="0 0 512 512"
                xmlSpace="preserve"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M160 115.4L180.7 96 352 256 180.7 416 160 396.7 310.5 256z"
                  fill="grey"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
