'use client'
import { useEffect } from "react";
import Feature from "@/components/About/Feature";
import Testimonial from "@/components/About/Testimonial";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { Tilt } from "react-tilt";

const About = (props) => {

  useEffect(() => {
    AOS.init({
      once: false,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-lightBlue py-20 text-light">
      <div className="w-11/12 flex flex-wrap mx-auto justify-center items-center mt-28 mb-5 max-w-screen-2xl">
        <div className="md:w-1/2 w-11/12" data-aos="fade-left" data-aos-duration="500">
          <Tilt>
            <Image
              loading="lazy"
              src={"/assets/mainPages/aboutUs.webp"}
              width={600}
              height={600}
              className="w-11/12 hover:w-11/12"
              alt="about us"
            />
          </Tilt>
        </div>
        <div className="md:w-1/2 p-3 w-11/12 text-center" data-aos="fade-right" data-aos-duration="500">
          <h1 className="text-5xl mb-6 font-bold">About Us</h1>
          <p className="leading-6 text-justify">
            Welcome to the world of Book Listing App - where literary passion comes to life! As an Informatician, we take pride in connecting book lovers, fostering a vibrant community of diverse genres. Our mission is crystal clear: to make reading accessible, enjoyable, and interactive for all, promoting literacy and building a strong book-centric community.
            <br />
            <br />
            Delve into the wonders of literature, discover new books, and immerse yourself in captivating discussions. We believe that the joy of reading is best shared, so come be a part of our ever-growing family. With our carefully curated collection, we cater to various interests, ensuring there's something for every reader, including you!
            <br />
            <br />

            So, don't miss out the magic of reading; Join Informatician today and let's embark on an exciting journey of exploration, connection, and celebration together!
          </p>
        </div>
      </div>
      <Feature />
      <div className="Testimonial">
        <Testimonial />
      </div>
    </div>
  );
};

export default About;
