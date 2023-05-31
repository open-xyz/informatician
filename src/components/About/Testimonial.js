import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "./Testimonial.css";

export default function Testimonial() {
  return (
    <div className="testimonial">
      <div className="top d-flex">
        <div className="left">
          <h1 className="fw-bold fs-1 text-white">Our Testimonial</h1>
          <p className="text-white mt-2 mb-5">
            What Our Client Say About The Books. Reviews And Comments
          </p>
        </div>
        <div className="right d-flex justify-content-center align-items-center mb-4">
          <button className="prev">
            <ArrowBackIcon className="arrow-back" /> Prev
          </button>
          <button className="next">
            Next <ArrowForwardIcon className="arrow-fwd" />
          </button>
        </div>
      </div>
      <div className="row bottom d-flex justify-content-evenly pb-3">
        <div className="col-lg-3 col-md-5 card">
          <div className="des">
            <img
              className="rounded-circle w-20"
              src="https://avatars.githubusercontent.com/u/100675296?v=4"
              alt=""
            />
            <h3>Sumit</h3>
            <p>Contributor</p>
          </div>
          <div className="test">
            From major literary works and detailed historical and scientific
            studies to popular fiction and self-help books, it’s incredible how much there is to find on
            Informatician. Fantastic!
          </div>
        </div>
        <div className="col-lg-3 col-md-5 card">
          <div className="des">
            <img
              className="rounded-circle w-20"
              src="https://avatars.githubusercontent.com/u/96341431?v=4"
              alt=""
            />
            <dif className="name">
              <h3>Deepak</h3>
              <p>Project Admin</p>
            </dif>
          </div>
          <div className="test">
          The selection of ebooks and audiobooks is plentiful. I have found and saved so many books to read and listen to that would have otherwise cost me a fortune anywhere else. There’s no contest at all!
          </div>
        </div>
        <div className="col-lg-3 col-md-5 card">
          <div className="des">
            <img
              className="rounded-circle w-20"
              src="https://avatars.githubusercontent.com/u/33249782?v=4"
              alt=""
            />
            <h3>Rohan</h3>
            <p>Mentor</p>
          </div>
          <div className="test">
          This app is great! Its like the Netflix of books! As a college student, this app has helped me a lot in reading science and mathematics. I have had zero issues and found most of the books I needed. Thanks! I truly love this app!
          </div>
        </div>
      </div>
    </div>
  );
}
