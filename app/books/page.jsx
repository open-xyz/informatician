'use client'
import { useState, useRef } from "react";
import Books from "@/utils/Books"

import Image from "next/image";
import { Quotes, categories } from "@/utils/Constants";
import { MdOutlineContentCopy } from "react-icons/md";
import BkCards from "@/components/BkCards/BkCards";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";

SwiperCore.use([Autoplay, Pagination, Navigation]);

export default function BookList(props) {
  const [searchQuery, setSerachQuery] = useState("");
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [showCategories, setShowCategories] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  async function handleClick(e) {
    e.preventDefault();
    try {
      const regex = new RegExp(searchQuery, "i");
      setFilteredBooks(Books.filter((element) => regex.test(element.title) || regex.test(element.author) || regex.test(element.isbn)));
      setHasSearched(true);
    } catch (err) {
      console.log(err);
    }
  }

  const handleCopyToClipboard = (quoteText) => {
    const textArea = document.createElement('textarea');
    textArea.value = quoteText;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    alert('Quote copied to clipboard!');

  };

  function toggleCategories() {
    setShowCategories((prevShowCategories) => !prevShowCategories);
  }

  return (
    <div className="p-6 sm:p-12 grid place-items-center gap-4 mt-16 max-w-7xl mx-auto">
      <div className="text-center space-y-6 sm:mb-16" >
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-sky-700">Find your next learning adventure</h1>
        <p className="text-base sm:text-xl text-gray-600 mb-8">From Art to Universe , we have a lots of textbooks to offer you.</p>
      </div>

      <form className="max-w-xl w-full border-2 rounded-full">
        <div className="relative">
          <input
            id="default-search"
            className="w-full px-5 py-2 rounded-full bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(event) => setSerachQuery(event.target.value)}
            placeholder="Title / Author / ISBN"
            required
          />
          <button type="submit" id="search-button-2" onClick={handleClick} className="absolute p-2 top-1/2 right-0 bg-zinc-200 border rounded-full transform -translate-y-1/2">
            <Image loading='lazy' className="w-full h-full" width="24" height="24" src="https://img.icons8.com/ios/100/search--v1.png" alt="Icon of a magnifying glass for search functionality" />
          </button>
        </div>
      </form>

      <div className={`cursor-pointer text-blue-600 my-2 font-medium transition-all duration-300 ${showCategories ? "max-h-96" : "max-h-0"}`} onClick={toggleCategories}>
        {showCategories ? "Hide Categories" : "Select Categories"}
      </div>

      {showCategories && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((category, index) => (
            <div key={index}>
              {category.map((link, linkIndex) => (
                <a href="#" className="block p-1.5 no-underline mx-14 font-medium text-emerald-700" key={linkIndex}>
                  {link}
                </a>
              ))}
            </div>
          ))}
        </div>
      )}

      <div className="sm:max-w-xl md:max-w-3xl lg:max-w-5xl mx-auto">
        {filteredBooks.length === 0  ? (
          hasSearched ? <div>No results found</div> : null
        ) : (
            <BkCards
              books={filteredBooks}
            />
        )}
      </div>




      <h3 id="sub-head" className="text-2xl sm:text-3xl font-bold mt-12 mb-6 sm:mb-10 text-sky-700">Quotes</h3>


      <Swiper
        slidesPerView={1}
        spaceBetween={25}
        loop={true}
        autoplay={{ delay: 5000 }}
        pagination={{ clickable: true }}
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        navigation={true}
        className="space-y-12 w-full"
      >
        {Quotes.map((quote, index) => (
          <SwiperSlide key={index} className="bg-blue-100/70 dark:bg-blue-100 shadow-lg rounded-lg p-6 hover:shadow-md duration-150 dark:text-black">
            <div className="flex flex-col items-center h-72 sm:h-64">
              <Image
                loading="lazy"
                width={100}
                height={100}
                className="rounded-full w-24 h-24 object-cover"
                src={quote.image}
                alt={quote.title}
              />
              <h4 className="mt-4 text-xl font-medium text-green-700">- {quote.title}</h4>
              <p className="my-2" onClick={() => handleCopyToClipboard(quote.quote)}>"{quote.quote}"
                <MdOutlineContentCopy className="ml-3" />
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </div>
  );
}