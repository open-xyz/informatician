'use client'

import React, { useEffect } from "react";
import "./BookFormats.css";
import ebook from '@/public/assets/Formats/ebook.webp'
import audiobook from '@/public/assets/Formats/audiobook.webp'
import paperback from '@/public/assets/Formats/paperback.webp'
import comics from '@/public/assets/Formats/comics.webp'
import magazines from '@/public/assets/Formats/magazines.webp'
import "aos/dist/aos.css";
import AOS from "aos";
import './BookFormats.css'
import Image from "next/image";

const BookFormats = (props) => {

  useEffect(() => {
    AOS.init({
      once: false,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="book-formats-container" style={{ marginTop: 100 }}>
      <h1 className="text-7xl font-bold text-center">Book Formats</h1>
      <div className="w-11/12 flex flex-wrap mx-auto justify-center items-center mt-26 py-8 mb-5 max-w-screen-2xl format-card shadow-xl shadow-black/30 dark:shadow-white/30">
        <div className="" data-aos="fade-right" data-aos-duration="500">
          <Image
            loading="lazy"
            src={ebook}
            className="team-member-image"
            alt="a book on a white surface"
          />
        </div>
        <div
          className="md:w-1/2 my-6 ml-5"
          data-aos="fade-left"
          data-aos-duration="500"
        >
          <h1 className="text-5xl mb-7 font-bold text-center">Ebooks</h1>
          <div className="team-description font-bold">
            E-books are digital versions of printed books that can be read on
            electronic devices such as e-readers, tablets, or smartphones. They
            offer a convenient way for beginners to access a wide range of
            literature without the need for physical books. E-books often come
            with adjustable font sizes, brightness settings, and search
            functionalities, making them customizable to suit individual reading
            preferences. They are easily portable, allowing beginners to carry
            an entire library with them wherever they go.<br></br>
            <u>Top 3 Books:</u>
            <br></br>
            1. Never Lie: An addictive psychological thriller by{" "}
            <i>Freida McFadden</i>
            <br></br>
            2. Maybe Someday by <i>Colleen Hoover</i>
            <br></br>
            3. The Housemaid by <i>Freida McFadden</i>
            <br></br>
            <br></br>
            <div className="items-center">
              <button>
                <a className="submit-btn text-white bg-black dark:text-black dark:bg-white">
                  {" "}
                  Explore more
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-11/12 flex flex-wrap mx-auto justify-center items-center mt-26 py-4 mb-5 max-w-screen-2xl format-card shadow-xl shadow-black/30 dark:shadow-white/30">
        <div
          className="md:w-1/2 my-6 mr-10"
          data-aos="fade-right"
          data-aos-duration="500"
        >
          <h1 className="text-5xl mb-7 font-bold text-center">Audiobooks</h1>
          <div className="team-description font-bold">
            Audiobooks provide an immersive storytelling experience for
            beginners by allowing them to listen to narrators who bring the
            characters and narratives to life through spoken word. This format
            is particularly beneficial for beginners who prefer to listen to
            stories rather than read them. Audiobooks can be enjoyed while doing
            other activities such as commuting, exercising, or relaxing. They
            offer an alternative way for beginners to engage with literature and
            explore different genres.<br></br>
            <u>Top 3 Sources:</u>
            <br></br>
            1. <i>Audible</i>
            <br></br>
            2. <i>Scribd</i>
            <br></br>
            3. <i>Blinkist</i>
            <br></br>
            <br></br>
            <div className="items-center">
              <button>
                <a className="submit-btn text-white bg-black dark:text-black dark:bg-white">
                  {" "}
                  Explore more
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="" data-aos="fade-left" data-aos-duration="500">
          <Image
            loading="lazy"
            src={audiobook}
            className="team-member-image"
            alt="a stack of books with headphones"
          />
        </div>
      </div>

      <div className="w-11/12 flex flex-wrap mx-auto justify-center items-center mt-26 py-4 mb-5 max-w-screen-2xl format-card shadow-xl shadow-black/30 dark:shadow-white/30">
        <div className="" data-aos="fade-right" data-aos-duration="500">
          <Image
            loading="lazy"
            src={paperback}
            className="team-member-image"
            alt="a stack of books on a table"
          />
        </div>
        <div
          className="md:w-1/2 my-6 ml-5"
          data-aos="fade-left"
          data-aos-duration="500"
        >
          <h1 className="text-5xl mb-7 font-bold text-center">
            Paperback Books
          </h1>
          <div className="team-description font-bold">
            Paperback books are the most common and affordable format for
            beginners. They are lightweight and portable, making them easy to
            carry and hold. Paperback books are ideal for beginners who enjoy
            the tactile experience of flipping through pages and physically
            interacting with the text. They are available in various genres and
            are widely accessible, making them a great starting point for
            beginners to explore different types of literature.<br></br>
            <u>Top 3 Books:</u>
            <br></br>
            1. Atomic Habits by <i>James Clear</i>
            <br></br>
            2. The Psychology of Money by <i>Morgan Housel</i>
            <br></br>
            3. Ikigai by <i>Francesc Miralles</i>
            <br></br>
            <br></br>
            <div className="items-center">
              <button>
                <a className="submit-btn text-white bg-black dark:text-black dark:bg-white">
                  {" "}
                  Explore more
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-11/12 flex flex-wrap mx-auto justify-center items-center mt-26 py-4 mb-5 max-w-screen-2xl format-card shadow-xl shadow-black/30 dark:shadow-white/30">
        <div
          className="md:w-1/2 my-6 mr-10"
          data-aos="fade-right"
          data-aos-duration="500"
        >
          <h1 className="text-5xl mb-7 font-bold text-center">
            Digital Magazines
          </h1>
          <div className="team-description font-bold">
            Digital magazines provide a visual and interactive reading
            experience for beginners. They cover a wide range of topics and
            interests, from lifestyle and fashion to technology and science.
            Digital magazines often include multimedia elements, such as videos,
            hyperlinks, and interactive graphics, to enhance the reading
            experience. Beginners can explore various digital magazines on their
            electronic devices, allowing them to stay up-to-date with the latest
            trends and gain knowledge in their areas of interest.<br></br>
            <u>Top 3 Magazines:</u>
            <br></br>
            1. <i>National Geographic</i>
            <br></br>
            2. <i>People</i>
            <br></br>
            3. <i>Forbes</i>
            <br></br>
            <br></br>
            <div className="items-center">
              <button>
                <a className="submit-btn text-white bg-black dark:text-black dark:bg-white">
                  {" "}
                  Explore more
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="" data-aos="fade-left" data-aos-duration="500">
          <Image
            loading="lazy"
            src={magazines}
            className="team-member-image"
            alt="a person holding a tablet"
          />
        </div>
      </div>
      <div className="w-11/12 flex flex-wrap mx-auto justify-center items-center mt-26 py-4 mb-5 max-w-screen-2xl format-card shadow-xl shadow-black/30 dark:shadow-white/30">
        <div className="" data-aos="fade-right" data-aos-duration="500">
          <Image
            loading="lazy"
            src={comics}
            className="team-member-image"
            alt="a hand holding a comic book"
          />
        </div>
        <div
          className="md:w-1/2 my-6 ml-5"
          data-aos="fade-left"
          data-aos-duration="500"
        >
          <h1 className="text-5xl mb-7 font-bold text-center">
            Comics and Graphic Novels
          </h1>
          <div className="team-description font-bold">
            Comics and graphic novels combine illustrations and text to tell
            stories in a visually engaging format. They are particularly
            appealing to beginners who are drawn to visual storytelling. Comics
            and graphic novels cover a wide range of genres, including
            superheroes, fantasy, science fiction, memoirs, and more. The
            combination of artwork and text creates a unique reading experience
            that can be enjoyable for beginners of all ages. The vibrant visuals
            and concise storytelling make comics and graphic novels an
            accessible and captivating entry point into the world of literature.
            <br></br>
            <u>Top 3 Comics:</u>
            <br></br>
            1. <i>Detective Conan</i>
            <br></br>
            2. <i>Naruto</i>
            <br></br>
            3. <i>Dragon Ball</i>
            <br></br>
            <br></br>
            <div className="items-center">
              <button>
                <a className="submit-btn text-white bg-black dark:text-black dark:bg-white">
                  {" "}
                  Explore more
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookFormats;
