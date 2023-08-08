'use client'
import React from "react";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { MdMenuBook, MdUpload, MdOutlineMoneyOff, MdPeople, MdEmail, MdDrafts, MdEmojiEvents, MdTimeline, MdMoreTime, MdPark } from "react-icons/md";
import "./Feature.css"

export default function Feature(props) {
  return (
    <div className="row feature d-flex justify-content-evenly text-center mt-20">
      <h1 className="text-center text-4xl font-bold">Features</h1>
      <p className="text-center mt-4 mb-5">Features We provide</p>

      <Carousel showArrows={true} showThumbs={false} className="carousel-container" autoPlay={true} interval={2000} infiniteLoop={true} >
        <div className="feature_card_outer flex flex-col sm:flex-row ">
          <div className="feature_card dark:bg-gray-900">
            <MdMenuBook className="icons book" />
            <p className="font-bold text-xl">Read Books</p>
          </div>
          <div className="feature_card dark:bg-gray-900">
            <MdUpload className="icons upload text-sky-500" />
            <p className="font-bold text-xl">Upload Books</p>
          </div>
          <div className="feature_card dark:bg-gray-900">
            <MdOutlineMoneyOff className="dollar icons text-yellow-400" />
            <p className="font-bold text-xl">Free of Cost</p>
          </div>
        </div>
        <div className="feature_card_outer flex flex-col sm:flex-row">
          <div className="feature_card dark:bg-gray-900">
            <MdPeople className="icons reader" />
            <p className="font-bold text-xl">Readers Community</p>
          </div>
          <div className="feature_card dark:bg-gray-900">
            <MdEmail className="icons letterClose text-blue-500 hover:hidden" />
            <MdDrafts className="icons letterOpen text-blue-500 hidden hover:block" />
            <p className="font-bold text-xl">Newsletter</p>
          </div>
          <div className="feature_card dark:bg-gray-900">
            <MdEmojiEvents className="icons readingChallenge" />
            <p className="font-bold text-xl">Reading Challenge</p>
          </div>
        </div>
        <div className=" feature_card_outer flex flex-col sm:flex-row ">
          <div className="feature_card dark:bg-gray-900">
            <MdTimeline className="icons progressTracking" />
            <p className="font-bold text-xl">Progress Tracking</p>
          </div>
          <div className="feature_card dark:bg-gray-900">
            <MdMoreTime className="icons readingChallenge text-red-400" />
            <p className="font-bold text-xl">Read Anytime</p>
          </div>
          <div className="feature_card dark:bg-gray-900">
            <MdPark className="icons readingChallenge text-green-400" />
            <p className="font-bold text-xl">Read Anywhere</p>
          </div>
        </div>
      </Carousel>
    </div>
  );
}