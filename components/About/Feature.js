"use client";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {
  MdMenuBook,
  MdUpload,
  MdOutlineMoneyOff,
  MdPeople,
  MdEmail,
  MdDrafts,
  MdEmojiEvents,
  MdTimeline,
  MdMoreTime,
  MdPark,
} from "react-icons/md";
import "./Feature.css";

export default function Feature(props) {
  return (
    <div className="row feature d-flex justify-content-evenly text-center mt-20">
      <h1 className="text-center text-4xl font-bold">Features</h1>
      <p className="text-center mt-4 mb-5">Features We provide</p>

      <Carousel
        showArrows={true}
        showThumbs={false}
        className="carousel-container"
        autoPlay={true}
        interval={2000}
        infiniteLoop={true}
      >
        <div className="feature_card_outer flex flex-col sm:flex-row ">
          <div className="feature_card dark:bg-gray-900">
            <div className="feature_box">
              <div className="card-front">
                <MdMenuBook className="icons book" />
                <p className="font-bold text-xl">Read Books</p>
              </div>
              <div className="card-back">
                <p>Immerse yourself in captivating stories and thought-provoking ideas from our vast collection of books, spanning genres and cultures.</p>
              </div>
            </div>
          </div>
          <div className="feature_card dark:bg-gray-900">
            <div className="feature_box">
              <div className="card-front">
                <MdUpload className="icons upload text-sky-500" />
                <p className="font-bold text-xl">Upload Books</p>
              </div>
              <div className="card-back">
                <p>Share your literary creations with the world. Easily upload and showcase your work on our platform to connect with readers.</p>
              </div>
            </div>
          </div>
          <div className="feature_card dark:bg-gray-900">
            <div className="feature_box">
              <div className="card-front">
                <MdOutlineMoneyOff className="dollar icons text-yellow-400" />
                <p className="font-bold text-xl">Free of Cost</p>
              </div>
              <div className="card-back">
                <p>Enjoy unlimited access to our library of books without any charges. Explore, learn, and expand your horizons at no cost.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="feature_card_outer flex flex-col sm:flex-row">
          <div className="feature_card dark:bg-gray-900">
            <div className="feature_box">
              <div className="card-front">
                <MdPeople className="icons reader" />
                <p className="font-bold text-xl">Readers Community</p>
              </div>
              <div className="card-back">
                <p>Join a vibrant community of fellow book enthusiasts. Connect, discuss, and share your thoughts with like-minded readers.</p>
              </div>
            </div>
          </div>
          <div className="feature_card dark:bg-gray-900">
            <div className="feature_box">
              <div className="card-front">
                <MdEmail className="icons letterClose text-blue-500 hover:hidden" />
                <MdDrafts className="icons letterOpen text-blue-500 hidden hover:block" />
                <p className="font-bold text-xl">Newsletter</p>
              </div>
              <div className="card-back">
                <p> Stay informed and inspired with our regular newsletter. Get updates on new releases, author interviews, and literary insights</p>
              </div>
            </div>
          </div>
          <div className="feature_card dark:bg-gray-900">
            <div className="feature_box">
              <div className="card-front">
                <MdEmojiEvents className="icons readingChallenge" />
                <p className="font-bold text-xl">Reading Challenge</p>
              </div>
              <div className="card-back">
                <p> Embark on exciting reading challenges that push your reading boundaries. Set goals, discover new authors, and win rewards.</p>
              </div>
            </div>
          </div>
        </div>
        <div className=" feature_card_outer flex flex-col sm:flex-row ">
          <div className="feature_card dark:bg-gray-900">
            <div className="feature_box">
              <div className="card-front">
                <MdTimeline className="icons progressTracking" />
                <p className="font-bold text-xl">Progress Tracking</p>
              </div>
              <div className="card-back">
                <p>Keep tabs on your reading journey. Track your progress, set milestones, and celebrate your literary accomplishments.</p>
              </div>
            </div>
          </div>
          <div className="feature_card dark:bg-gray-900">
            <div className="feature_box">
              <div className="card-front">
                <MdMoreTime className="icons readingChallenge text-red-400" />
                <p className="font-bold text-xl">Read Anytime</p>
              </div>
              <div className="card-back">
                <p>Whether it's a quiet morning or a late-night escape, enjoy the freedom to read at your convenience, any time you desire.</p>
              </div>
            </div>
          </div>
          <div className="feature_card dark:bg-gray-900">
            <div className="feature_box">
              <div className="card-front">
                <MdPark className="icons readingChallenge text-green-400" />
                <p className="font-bold text-xl">Read Anywhere</p>
              </div>
              <div className="card-back">
                <p> Our platform ensures you can indulge in your favorite reads from the comfort of your home, while traveling, or wherever you go.</p>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
}
