import React from "react";
import "./About.css";
import bookImage from "../../assets/books.webp";
import { useMediaQuery } from "react-responsive";
import ScrollToTopButton from "../ScrollButton";
import library from "../../assets/library.jpg";
import Community from "../../assets/Commmunity.jpg";
import cofounder from "../../assets/CO-Founder.jpg";



const About = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <div className="about">
      <div className="head"><h1 className="titlee">About Us</h1></div>
      <div className="box1">
        
        <br />
        <img className="img1" src={library} alt="" />
        <h2 className="text1">At Book Listing App we believe in the power to inspire,educate,and entertain Book have the ability to tranfort us to different worlds,expand,and ignite our imagination.They hold knowledge,stories,and ideas that have the potential to transform lives</h2>
      </div>
      <div className="box2">
      <img className="community" src={Community} alt="" />
      <span><h2 className="text2">Our vision to create a plateform that connects book lovers and provide a space for discovering,discussing,and sharing the joy of reding.We aim to foster a vibrant community where readers can explore diverse geners,engage in meaningful conversation and connect with authour and fellow book enthusiasts</h2></span>
      </div>
      <div className="box3">
      <img className="img3" src={cofounder} alt="" />
     <h2 class="text3">As the co-founder of book listing App,we are passionate about promoting literacy,encouraging reading habits,and building community around books.Our mission is to make reading more accessible,enjoyable,and interactive for everyone.We strive to curate a collection of books that contain to various interests and performance,ensuring there's something for every teacher</h2>
      </div>
      
      <ScrollToTopButton />
    </div>
  );
};

export default About;


