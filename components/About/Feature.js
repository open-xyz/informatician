import React from "react";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { MdMenuBook, MdUpload, MdOutlineMoneyOff, MdPeople, MdEmail, MdDrafts, MdEmojiEvents, MdTimeline } from "react-icons/md";
import "./Feature.css"

export default function Feature(props) {
  return (
    <div className="row feature d-flex justify-content-evenly text-center mt-20">
      <h1 className="text-center text-4xl font-bold">Features</h1>
      <p className="text-center mt-4 mb-5">Features We provide</p>

      <Carousel showArrows={true} showThumbs={false} className="carousel-container" autoPlay={true} interval={2000} infiniteLoop={true}>
        <div className="feature_card_outer">
          <div className="feature_card" style={{ background: props.theme === "dark" ? '#161313' : '' }}>
            <MdMenuBook className="icons book" />
            <p style={{ fontWeight: 'bold', fontSize: 20 }}>Read Books</p>
          </div>
          <div className="feature_card" style={{ background: props.theme === "dark" ? '#161313' : '' }}>
            <MdUpload className="icons upload text-sky-500" />
            <p style={{ fontWeight: 'bold', fontSize: 20 }}>Upload Books</p>
          </div>
          <div className="feature_card" style={{ background: props.theme === "dark" ? '#161313' : '' }}>
            <MdOutlineMoneyOff className="dollar icons text-yellow-400" />
            <p style={{ fontWeight: 'bold', fontSize: 20 }}>Free of Cost</p>
          </div>
        </div>
        <div className="feature_card_outer">
          <div className="feature_card" style={{ background: props.theme === "dark" ? '#161313' : '' }}>
            <MdPeople className="icons reader" />
            <p style={{ fontWeight: 'bold', fontSize: 20 }}>Readers Community</p>
          </div>
          <div className="feature_card" style={{ background: props.theme === "dark" ? '#161313' : '' }}>
            <MdEmail className="icons letterClose text-blue-500 hover:hidden" />
            <MdDrafts className="icons letterOpen text-blue-500 hidden hover:block" />
            <p style={{ fontWeight: 'bold', fontSize: 20 }}>Newsletter</p>
          </div>
          <div className="feature_card" style={{ background: props.theme === "dark" ? '#161313' : '' }}>
            <MdEmojiEvents className="icons readingChallenge" />
            <p style={{ fontWeight: 'bold', fontSize: 20 }}>Reading Challenge</p>
          </div>
        </div>
        <div className="feature_card_outer">
          <div className="feature_card" style={{ background: props.theme === "dark" ? '#161313' : '' }}>
            <MdTimeline className="icons progressTracking" />
            <p style={{ fontWeight: 'bold', fontSize: 20 }}>Progress Tracking</p>
          </div>
        </div>
      </Carousel>
    </div>
  );
}