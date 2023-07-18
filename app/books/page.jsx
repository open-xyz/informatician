'use client'
import React, { useState, useEffect, useRef } from "react";
import "./BookList.css";
import ScrollToTopButton from "@/components/ScrollButton/ScrollButton";
import { searchBooks } from "@/utils/searchBooks";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import SwiperCore,{ Autoplay, Pagination, Navigation } from "swiper";

export default function BookList(props) {
  const [books, setBooks] = useState([]);
  const [bookName, setBookName] = useState("");
  const cardContainerRef = useRef(null);

  

  async function handleClick(e){
    e.preventDefault();
    try{
      const result=await searchBooks(bookName)
    
    setBooks(result);
  }catch(err){
    console.log(err);
  }

  }


  function toggleCategories() {
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
              onChange={(event) => setBookName(event.target.value)}
              placeholder="Title / Author / ISBN"
              required
            />
           
            <button type="submit" id="search-button-2" onClick={handleClick}>
              <div className="search-icon">
              <img loading='lazy' width="100" height="100" src="https://img.icons8.com/ios/100/search--v1.png" alt="Icon of a magnifying glass for search functionality"/>
               </div>
            </button>
          </div>
        </form>
        <div className="categories" onClick={() => toggleCategories()}>
          Select Categories
        </div>
        <div className="hypertext-links">
         <div>
         <a href="#" className="link">
            Art
          </a>
          <a href="#" className="link">
            Biography
          </a>
          <a href="#" className="link">
            Business
          </a>
          <a href="#" className="link">
            Children's
          </a>
          <a href="#" className="link">
            Classics
          </a>
          <a href="#" className="link">
            Christian
          </a>
          </div>
          
          <div>
         <a href="#" className="link">
            Comics
          </a>
          <a href="#" className="link">
          Cookbooks
          </a>
          <a href="#" className="link">
          Ebooks
          </a>
          <a href="#" className="link">
          Fantasy
          </a>
          <a href="#" className="link">
          Fiction
          </a>
          <a href="#" className="link">
           Novel
          </a>
          </div>

          <div>
         <a href="#" className="link">
         History
          </a>
          <a href="#" className="link">
          Horror
          </a>
          <a href="#" className="link">
          Music
          </a>
          <a href="#" className="link">
          Mystery
          </a>
          <a href="#" className="link">
          Non-Fiction
          </a>
          <a href="#" className="link">
          Poetry
          </a>
          </div>

          <div>
         <a href="#" className="link">
         Psychology
          </a>
          <a href="#" className="link">
          Prejudice
          </a>
          <a href="#" className="link">
          Romance
          </a>
          <a href="#" className="link">
          Science
          </a>
          <a href="#" className="link">
          Thriller
          </a>
          <a href="#" className="link">
          Universe
          </a>
          </div>
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

              <SwiperSlide>
                <div className="book_card">
                <div className={`book_card-content ${props.theme === "dark" ? "text-black" : ""}`}>
                      <img loading='lazy' className="book_quote_img" src="https://lit216.pbworks.com/f/1363869393/stephen%20king.jpg" alt="Stephen King" />
                      <h4>- Stephen King</h4>
                      <p>"If you don't have time to read, you don't have the time to write. Simple as that."</p> 
                    </div>
                  </div>
              </SwiperSlide>
        
              <SwiperSlide>
                <div className="book_card">
                <div className={`book_card-content ${props.theme === "dark" ? "text-black" : ""}`}>
                      <img loading='lazy' className="book_quote_img" src="http://laurencecoupe.co.uk/wp-content/uploads/2018/01/kerouac-picture.jpg" alt="Jack Kerouac" />
                      <h4>- Jack Kerouac</h4>
                        <p>"One day I will find the right words, and they will be simple."</p>
                    </div>
                </div>
              </SwiperSlide>

              <SwiperSlide> 
                <div className="book_card">
                <div className={`book_card-content ${props.theme === "dark" ? "text-black" : ""}`}>
                    <img loading='lazy' className="book_quote_img" style={{width:'150px'}}  src="https://media.newyorker.com/photos/59096d586552fa0be682ff3d/master/w_1920,c_limit/Brody-Saul-Bellow-Film-Critic.jpg" alt="Saul Bellow" />
                    <h4>- Saul Bellow</h4>
                    <p>"You never have to change anything you got up in the middle of the night to write."</p>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="book_card">
                <div className={`book_card-content ${props.theme === "dark" ? "text-black" : ""}`}>
                    <img loading='lazy' className="book_quote_img" src="https://images2.minutemediacdn.com/image/upload/c_fill,w_1080,ar_16:9,f_auto,q_auto,g_auto/shape%2Fcover%2Fsport%2Fgettyimages-2665140-a1c77ccabe8660fb5123c8b6c5741316.jpg" alt="Aldous Huxley" />
                    <h4>- Aldous Huxley</h4>
                      <p>"Words can be like X-rays if you use them properly they'll go through anything. You read and you're pierced."</p>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="book_card">
                <div className={`book_card-content ${props.theme === "dark" ? "text-black" : ""}`}>
                    <img loading='lazy' className="book_quote_img" src="https://media.npr.org/assets/img/2015/03/13/ap070308060493-67009388c842c192821be288e72bbc06977b72ce-s400-c85.webp" alt="Anne Frank" />
                    <h4>- Anne Frank</h4>
                      <p>"I can shake off everything as I write; my sorrows disappear, my courage is reborn."</p>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide> 
                <div className="book_card">
                <div className={`book_card-content ${props.theme === "dark" ? "text-black" : ""}`}>
                    <img loading='lazy' className="book_quote_img" src="https://ychef.files.bbci.co.uk/1600x900/p09pxt8c.webp" alt="Sylvia Plath" />
                    <h4>- Sylvia Plath</h4>
                      <p>"Let me live, love, and say it well in good sentences."</p>       
                  </div>          
                </div>
            </SwiperSlide>

              <SwiperSlide>
                <div className="book_card">
                <div className={`book_card-content ${props.theme === "dark" ? "text-black" : ""}`}>
                    <img loading='lazy' className="book_quote_img" src="https://www.theparisreview.org/il/c625e7c0b9/large/JohnSteinbeck-thumb.jpg" alt="John Steinbeck" />
                    <h4>- John Steinbeck</h4>
                      <p>"Ideas are like rabbits. You get a couple and learn how to handle them, and pretty soon you have a dozen."</p>                
                  </div>           
                </div>
              </SwiperSlide>

                  <SwiperSlide>
                    <div className="book_card">
                    <div className={`book_card-content ${props.theme === "dark" ? "text-black" : ""}`}>
                        <img loading='lazy' className="book_quote_img" style={{width:'150px'}} src="https://upload.wikimedia.org/wikipedia/en/c/c9/Madeleine_lengle.jpg" alt="Madeleine L'Engle" />
                        <h4>- Madeleine L'Engle</h4>
                          <p>"You have to write the book that wants to be written & if the book will be too difficult for grown-ups, then you write it for children."</p>             
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