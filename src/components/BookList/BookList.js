import React, { useState, useEffect, useRef } from "react";
import Books from "../Home/Books";
import "./BookList.css";
import ScrollToTopButton from "../../components/ScrollButton/ScrollButton";
import BookCards from "./BookCard";
// import Card from "../Card";
import { searchBooks } from "../../utils/searchBooks";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Quotes, categories } from "./BookData";

export default function BookList(props) {
  const [books, setBooks] = useState([]);
  const [searchQuery, setSerachQuery] = useState("");
  const [filteredBooks, setFilteredBooks] = useState([]);
  const cardContainerRef = useRef(null);
  const cardWidthRef = useRef(0);
  const [hasSearched, setHasSearched] = useState(false);

  // useEffect(() => {
  //   if (bookName !== "") {
  //     searchBooks(bookName)
  //       .then((result) => {
  //         if (Array.isArray(result)) {
  //           setBooks(result);
  //         } else {
  //           setBooks([]); // Set books to an empty array if the result is not an array
  //         }
  //       })
  //       .catch((err) => {
  //         throw err;
  //       });
  //   }
  // }, [bookName]);

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
  const theme = props.theme;

  /*   useEffect(() => {
    const cardContainer = cardContainerRef.current;
    cardWidthRef.current = cardContainer.offsetWidth / 4; // Divide by the number of cards to scroll at once

    // Automatically scroll the card container every 5 seconds
    const intervalId = setInterval(() => {
      const currentScroll = cardContainer.scrollLeft;
      const maxScroll = cardContainer.scrollWidth - cardContainer.offsetWidth;

      if (currentScroll >= maxScroll) {
        // Reached the end, scroll back to the beginning with smooth transition
        cardContainer.scrollTo({
          left: 0,
          behavior: "smooth",
        });
      } else {
        // Scroll to the next card with smooth transition
        cardContainer.scrollTo({
          left: currentScroll + cardWidthRef.current,
          behavior: "smooth",
        });
      }
    }, 5000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []); */

  function toggleCategories() {
    const bookListContainer = document.querySelector(".book-list-container");
    bookListContainer.classList.toggle("show-links");
  }

  // const booksComponent = books.map((book) => (
  //   <Card name={book.name} author={book.author}></Card>
  // ));

  const handleCopyToClipboard = (quoteText) => {
    const textArea = document.createElement("textarea");
    textArea.value = quoteText;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
    alert("Quote copied to clipboard!");
  };

  return (
    <>
      <div className="book-list-container">
        <h1 className="book-list-heading">Find your next learning adventure</h1>
        <p className="smalltext">
          From Art to Universe , we have a lots of textbooks to offer you.
        </p>

        <form>
          <div className="searchbar">
            <input
              id="default-search"
              className="search-input"
              onChange={(event) => setSerachQuery(event.target.value)}
              placeholder="Title / Author / ISBN"
              required
            />
            <button type="submit" id="search-button-2" onClick={handleClick}>
              <div className="search-icon">
                <img
                  loading="lazy"
                  width="100"
                  height="100"
                  src="https://img.icons8.com/ios/100/search--v1.png"
                  alt="Icon of a magnifying glass for search functionality"
                />
              </div>
            </button>
          </div>
        </form>
        <div className="categories" onClick={() => toggleCategories()}>
          Select Categories
        </div>
        <div className="hypertext-links">
          {categories.map((list, index) => {
            return (
              <div key={index}>
                {list.map((category) => {
                  return (
                    <a href="#" key={category} className="link">
                      {category}
                    </a>
                  );
                })}
              </div>
            );
          })}
        </div>

        <div className="book-holder">
          {filteredBooks.length > 0 &&
            filteredBooks.map((item) => {
              return (
                <>
                  <div className="book_card-container ">
                    <BookCards
                      imgName={item.img}
                      title={item.title}
                      type={item.type}
                      author={item.author}
                      description={item.description}
                    ></BookCards>
                  </div>
                </>
              );
            })}
          {filteredBooks.length === 0 && hasSearched && (
            <div>No results found</div>
          )}
        </div>

        {/* <span className="book-list-title text-center">Book List</span> */}

        {/* {
          books.length === 0 ?
            <div className={`flex items-center justify-center h-[53vh] bg-${props.theme} px-20`}>
              <h1 className="flex text-center items-center gap-4 text-4xl md:text-7xl">
                Search Books
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64px" height="64px"><path d="M 24 2.8886719 C 12.365714 2.8886719 2.8886719 12.365723 2.8886719 24 C 2.8886719 35.634277 12.365714 45.111328 24 45.111328 C 29.036552 45.111328 33.664698 43.331333 37.298828 40.373047 L 52.130859 58.953125 C 52.130859 58.953125 55.379484 59.435984 57.396484 57.333984 C 59.427484 55.215984 58.951172 52.134766 58.951172 52.134766 L 40.373047 37.298828 C 43.331332 33.664697 45.111328 29.036548 45.111328 24 C 45.111328 12.365723 35.634286 2.8886719 24 2.8886719 z M 24 7.1113281 C 33.352549 7.1113281 40.888672 14.647457 40.888672 24 C 40.888672 33.352543 33.352549 40.888672 24 40.888672 C 14.647451 40.888672 7.1113281 33.352543 7.1113281 24 C 7.1113281 14.647457 14.647451 7.1113281 24 7.1113281 z" /></svg>
              </h1>
            </div> :
            <div className="cards">

              {
                books.map((book, key) => {
                  return (

                    <Card key={key} title={book.volumeInfo.title} description={book.volumeInfo.description} publisher={book.volumeInfo.publisher} pages={book.volumeInfo.pageCount} imgLink={book.volumeInfo.imageLinks} />
                  );
                })

              }
            </div>
        } */}

        <h3 id="sub-head">Quotes</h3>

        <div className="carousel">
          <Swiper
            slidesPerView={3}
            spaceBetween={25}
            loop={true}
            autoplay={false}
            pagination={{ clickable: true }}
            modules={[Pagination, Navigation, Autoplay]}
            className="mySwiper slide"
          >
            <div className="book_card-container" ref={cardContainerRef}>
              <SwiperSlide
                style={{
                  backgroundColor: theme === "dark" ? "#161313" : "#eff6ff",
                  color: theme === "dark" ? "#1857A0" : "black",
                }}
              >
                <div className="book_card">
                  <div
                    className={`book_card-content ${
                      props.theme === "dark" ? "text-black" : ""
                    }`}
                  >
                    <div className=" items-center flex flex-col">
                      <img
                        loading="lazy"
                        className="book_quote_img ring-offset-2 ring-2"
                        src={Quotes.slideOne.image}
                        alt={Quotes.slideOne.title}
                      />
                      <h4 style={{}}>- {Quotes.slideOne.title}</h4>
                    </div>
                    <div>
                      <p
                        style={{
                          color: theme === "dark" ? "#3c5f81" : "black",
                        }}
                      >
                        {Quotes.slideOne.quote}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide
                style={{
                  backgroundColor: theme === "dark" ? "#161313" : "#eff6ff",
                  color: theme === "dark" ? "#1857A0" : "black",
                }}
              >
                <div className="book_card">
                  <div
                    className={`book_card-content ${
                      props.theme === "dark" ? "text-black" : ""
                    }`}
                  >
                    <div className=" items-center flex flex-col">
                      <img
                        loading="lazy"
                        className="book_quote_img"
                        src={Quotes.slideTwo.image}
                        alt={Quotes.slideTwo.title}
                      />
                      <h4>- {Quotes.slideTwo.title}</h4>
                    </div>
                    <div>
                      <p
                        style={{
                          color: theme === "dark" ? "#3c5f81" : "black",
                        }}
                      >
                        {Quotes.slideTwo.quote}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide
                style={{
                  backgroundColor: theme === "dark" ? "#161313" : "#eff6ff",
                  color: theme === "dark" ? "#1857A0" : "black",
                }}
              >
                <div className="book_card">
                  <div
                    className={`book_card-content ${
                      props.theme === "dark" ? "text-black" : ""
                    }`}
                  >
                    <div className=" items-center flex flex-col">
                      <img
                        loading="lazy"
                        className="book_quote_img"
                        style={{ width: "150px" }}
                        src={Quotes.slideThree.image}
                        alt={Quotes.slideThree.title}
                      />
                      <h4>- {Quotes.slideThree.title}</h4>
                    </div>
                    <p
                      style={{ color: theme === "dark" ? "#3c5f81" : "black" }}
                    >
                      {Quotes.slideThree.quote}
                    </p>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide
                style={{
                  backgroundColor: theme === "dark" ? "#161313" : "#eff6ff",
                  color: theme === "dark" ? "#1857A0" : "black",
                }}
              >
                <div className="book_card">
                  <div
                    className={`book_card-content ${
                      props.theme === "dark" ? "text-black" : ""
                    }`}
                  >
                    <div className=" items-center flex flex-col">
                      <img
                        loading="lazy"
                        className="book_quote_img"
                        src={Quotes.slideFour.image}
                        alt={Quotes.slideFour.title}
                      />
                      <h4>- {Quotes.slideFour.title}</h4>
                    </div>
                    <div>
                      <p
                        style={{
                          color: theme === "dark" ? "#3c5f81" : "black",
                        }}
                      >
                        {Quotes.slideFour.quote}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide
                style={{
                  backgroundColor: theme === "dark" ? "#161313" : "#eff6ff",
                  color: theme === "dark" ? "#1857A0" : "black",
                }}
              >
                <div className="book_card">
                  <div
                    className={`book_card-content ${
                      props.theme === "dark" ? "text-black" : ""
                    }`}
                  >
                    <div className=" items-center flex flex-col">
                      <img
                        loading="lazy"
                        className="book_quote_img"
                        src={Quotes.slideFive.image}
                        alt={Quotes.slideFive.title}
                      />
                      <h4>- {Quotes.slideFive.title}</h4>
                    </div>
                    <div>
                      <p
                        style={{
                          color: theme === "dark" ? "#3c5f81" : "black",
                        }}
                      >
                        {Quotes.slideFive.quote}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide
                style={{
                  backgroundColor: theme === "dark" ? "#161313" : "#eff6ff",
                  color: theme === "dark" ? "#1857A0" : "black",
                }}
              >
                <div className="book_card">
                  <div
                    className={`book_card-content ${
                      props.theme === "dark" ? "text-black" : ""
                    }`}
                  >
                    <div className=" items-center flex flex-col">
                      <img
                        loading="lazy"
                        className="book_quote_img"
                        src={Quotes.slideSix.image}
                        alt={Quotes.slideSix.title}
                      />
                      <h4>- {Quotes.slideSix.title}</h4>
                    </div>
                    <div>
                      <p
                        style={{
                          color: theme === "dark" ? "#3c5f81" : "black",
                        }}
                      >
                        {Quotes.slideSix.quote}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide
                style={{
                  backgroundColor: theme === "dark" ? "#161313" : "#eff6ff",
                  color: theme === "dark" ? "#1857A0" : "black",
                }}
              >
                <div className="book_card">
                  <div
                    className={`book_card-content ${
                      props.theme === "dark" ? "text-black" : ""
                    }`}
                  >
                    <div className=" items-center flex flex-col">
                      <img
                        loading="lazy"
                        className="book_quote_img"
                        src={Quotes.slideSeven.image}
                        alt={Quotes.slideSeven.title}
                      />
                      <h4>- {Quotes.slideSeven.title}</h4>
                    </div>
                    <div>
                      <p
                        style={{
                          color: theme === "dark" ? "#3c5f81" : "black",
                        }}
                      >
                        {Quotes.slideSeven.quote}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide
                style={{
                  backgroundColor: theme === "dark" ? "#161313" : "#eff6ff",
                  color: theme === "dark" ? "#1857A0" : "black",
                }}
              >
                <div className="book_card">
                  <div
                    className={`book_card-content ${
                      props.theme === "dark" ? "text-black" : ""
                    }`}
                  >
                    <div className=" items-center flex flex-col">
                      <img
                        loading="lazy"
                        className="book_quote_img"
                        style={{ width: "150px" }}
                        src={Quotes.slideEight.image}
                        alt={Quotes.slideEight.title}
                      />
                      <h4>- {Quotes.slideEight.title}</h4>
                    </div>
                    <div>
                      <p
                        style={{
                          color: theme === "dark" ? "#3c5f81" : "black",
                        }}
                      >
                        {Quotes.slideEight.quote}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </div>
          </Swiper>
        </div>
      </div>

      {/* </div> */}
      <ScrollToTopButton />
    </>
  );
}
