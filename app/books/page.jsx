'use client'
import React, { useState, useRef } from "react";
import "./BookList.css";
import ScrollToTopButton from "@/components/ScrollButton/ScrollButton";
import Books from "@/utils/Books"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Navigation } from "swiper";

import Image from "next/image";
import { Quotes, categories } from "@/utils/bookData";
import { MdOutlineContentCopy } from "react-icons/md";
import BookCards from "@/components/BkCards/CardContent/CardContent";

export default function BookList(props) {
  const [searchQuery, setSerachQuery] = useState("");
  const [filteredBooks, setFilteredBooks] = useState([]);
  const cardContainerRef = useRef(null);
  const cardWidthRef = useRef(0);
  const [hasSearched,setHasSearched] = useState(false);
  


  async function handleClick(e){
    e.preventDefault();
    try{
      const regex = new RegExp(searchQuery, "i");
      setFilteredBooks( Books.filter((element) =>regex.test(element.title) || regex.test(element.author) || regex.test(element.isbn) ));
      setHasSearched(true);
  }catch(err){
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


  const toggleCategories = () => {
    const bookListContainer = document.querySelector(".book-list-container");
    bookListContainer.classList.toggle("show-links");
  }

  
  return (
    <>

      <div className="book-list-container">
        <h1 className="book-list-heading">Find your next learning adventure</h1>
        <p className="smalltext">From Art to Universe , we have a lots of textbooks to offer you.</p>

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
              <Image loading='lazy' width="100" height="100" src="https://img.icons8.com/ios/100/search--v1.png" alt="Icon of a magnifying glass for search functionality"/>
               </div>
            </button>
          </div>
          </form>

        <div className="categories" onClick={() => toggleCategories()}>
          Select Categories
        </div>
        <div className="hypertext-links">
          {
            categories.map((list,index) => {
            return  <div key={index}>
            {
              list.map((category) =>{
                    return <a href="#" key={category} className="link">
                              {category}
                            </a>
                })
              }
          </div>
            })
          }

        </div>

        <div className="book-holder">
            {filteredBooks.length > 0 && filteredBooks.map((item)=>{
              return (
                <>
                  <div className="book_card-container ">
                    <BookCards imgName={item.img} title={item.title} type={item.type} author={item.author} description={item.description}></BookCards>
                  </div>
                </>
              )
            })}
            {filteredBooks.length === 0 && hasSearched && <div>No results found</div>}
            </div>


       

      <h3 id="sub-head">Quotes</h3>

        <div className="carousel">

          <Swiper 
            slidesPerView={3}
            spaceBetween={25}
            loop={true}
            autoplay={true}
            pagination={{clickable: true,}}
            modules={[Pagination, Navigation, Autoplay]}
            className="mySwiper slide">

            <div className="book_card-container" ref={cardContainerRef}>

            {
              Quotes.map((quote,i)=>{
              return  <SwiperSlide key={i}>
                <div className="book_card">
                <div className={`book_card-content ${props.theme === "dark" ? "text-black" : ""}`}>
                      <Image loading='lazy' className="book_quote_img" src={quote.image} alt={quote.title} width={100} height={100}/>
                      <h4>- {quote.title}</h4>
                      <p className="text-black dark:text-gray-200" onClick={() => handleCopyToClipboard(quote.quote)}>"{quote.quote}" <br/>
                      <MdOutlineContentCopy className="ml-3 justify-start"/>
                      </p>

                    </div>
                  </div>
              </SwiperSlide>
              })

            }

          </div>
        </Swiper>
            
      </div>
    </div>

      {/* </div> */}
      <ScrollToTopButton />
    </>
  );
}