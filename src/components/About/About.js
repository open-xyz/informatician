import React from "react";
import "./About.css";
import bookImage from "../../assets/books.webp";
import { useMediaQuery } from "react-responsive";
import ScrollToTopButton from "../ScrollButton";

const About = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <div className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="about-title">About Us</h2>
            <p className="about-description">
              At Book Listing App, we believe in the power of books to inspire,
              educate, and entertain. Books have the ability to transport us to
              different worlds, expand our horizons, and ignite our imagination.
              They hold knowledge, stories, and ideas that have the potential to
              transform lives.
            </p>
            <p className="about-description">
              Our vision is to create a platform that connects book lovers and
              provides a space for discovering, discussing, and sharing the joy
              of reading. We aim to foster a vibrant community where readers can
              explore diverse genres, engage in meaningful conversations, and
              connect with authors and fellow book enthusiasts.
            </p>
            <p className="about-description">
              As the co-founders of Book Listing App, we are passionate about
              promoting literacy, encouraging reading habits, and building a
              community around books. Our mission is to make reading more
              accessible, enjoyable, and interactive for everyone. We strive to
              curate a collection of books that cater to various interests and
              preferences, ensuring there's something for every reader.
            </p>
          </div>
          <div className="about-image">
            <img src={bookImage} alt="Books" className="book-image" />
          </div>
        </div>
      </div>
      <ScrollToTopButton />
    </div>
  );
};

export default About;
