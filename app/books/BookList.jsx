"use client";
import { useState, useEffect } from "react";
import { Books } from "@/utils/Constants";
import axios from "axios";
import Image from "next/image";
import { categories } from "@/utils/Constants";
import BkCards from "@/components/BkCards/BkCards";
import Card from "@/components/Quotes/Card";
import "./Spinner.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";

SwiperCore.use([Autoplay, Pagination, Navigation]);

export default function BookList(props) {
  const [searchQuery, setSerachQuery] = useState("");
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [showCategories, setShowCategories] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [quotes, setQuotes] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        const response = await axios.get(
          "https://api.quotable.io/quotes/random?limit=10"
        );
        console.log(response.data);
        setQuotes(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchQuotes();
  }, []);

  async function handleClick(e) {
    e.preventDefault();
    try {
      const regex = new RegExp(searchQuery, "i");
      setFilteredBooks(
        Books.filter(
          (element) =>
            regex.test(element.title) ||
            regex.test(element.author) ||
            regex.test(element.isbn)
        )
      );
      setHasSearched(true);
    } catch (err) {
      console.log(err);
    }
  }

  const handleCopyToClipboard = (quoteText) => {
    const textArea = document.createElement("textarea");
    textArea.value = quoteText;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
    alert("Quote copied to clipboard!");
  };

  function toggleCategories() {
    setShowCategories((prevShowCategories) => !prevShowCategories);
  }

  return (
    <>
      <form
        className="max-w-xl w-full border-2 rounded-full"
        aria-label="Book Search Form"
      >
        <div className="relative">
          <input
            id="default-search"
            className="w-full px-5 py-2 rounded-full bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(event) => setSerachQuery(event.target.value)}
            placeholder="Title / Author / ISBN"
            required
          />
          <button
            type="submit"
            id="search-button-2"
            onClick={handleClick}
            className="absolute bg-gray-200  top-1/2  w-12 h-8 p-1  right-2 rounded-xl transform -translate-y-1/2"
          >
            <Image
              loading="lazy"
              className="w-full h-full"
              width="10"
              height="10"
              src="/search-svgrepo-com.svg"
              alt="Icon of a magnifying glass for search functionality"
            />
          </button>
        </div>
      </form>

      <div
        className={`cursor-pointer text-blue-600 my-2 font-medium transition-all duration-300 ${
          showCategories ? "max-h-96" : "max-h-0"
        }`}
        onClick={toggleCategories}
      >
        {showCategories ? "Hide Categories" : "Select Categories"}
      </div>

      {showCategories && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((category, index) => (
            <div key={index}>
              {category.map((link, linkIndex) => (
                <a
                  href="#"
                  className="block p-1.5 no-underline mx-14 font-medium text-emerald-700"
                  key={linkIndex}
                >
                  {link}
                </a>
              ))}
            </div>
          ))}
        </div>
      )}

      <div className="sm:max-w-xl md:max-w-3xl lg:max-w-5xl mx-auto">
        {filteredBooks.length === 0 ? (
          hasSearched ? (
            <div>No results found</div>
          ) : null
        ) : (
          <BkCards books={filteredBooks} />
        )}
      </div>

      <h3
        id="sub-head"
        className="text-2xl sm:text-3xl font-bold mt-12 mb-6 sm:mb-10 text-sky-700"
      >
        Quotes
      </h3>

      {loading ? (
        <span className="loader"></span>
      ) : (
        <Swiper
          slidesPerView={1}
          spaceBetween={25}
          loop={true}
          autoplay={{ delay: 5000 }}
          pagination={{ clickable: true }}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
          }}
          navigation={true}
          className="space-y-12 w-full"
        >
          {quotes?.map((quote, index) => (
            <SwiperSlide
              key={index}
              className="shadow-lg rounded-lg hover:shadow-md duration-150 w-[5rem]"
            >
              <Card
                key={quote.id}
                author={quote.author}
                quote={quote.content}
                category={quote.tags[0]}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </>
  );
}
