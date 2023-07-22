import React, { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import "./Contributor.css"
import { padding } from "@mui/system";

const Contributors = (props) => {
  const [contributors, setContributors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://api.github.com/repos/rohansx/informatician/contributors")
      .then((response) => {
        setContributors(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  // Define carousel settings
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div
      className={`contact-container ${props.theme === "dark" ? "dark-mode" : ""}`}
      style={{
        backgroundColor: props.theme === "dark" ? "#000000" : "" ,// Apply black background in dark mode
        padding:"40px"
      }}
    >
      <h1 className="text-center text-very-dark-desaturated-blue text-2xl leading-8 font-bold text-shadow-md mb-3 mt-3">
        Our Valuable Contributors
      </h1>

      {/* Wrap the grid with Slider component */}
      <Slider {...settings}>
        {loading ? (
          <p>Loading...</p>
        ) : contributors.length === 0 ? (
          <p>No contributors found.</p>
        ) : (
          contributors.map((contributor) => (
            <div
              key={contributor.id}
              className="contributor-card" // Add a class name for styling purposes
            >
              <a
                rel="noopener noreferrer"
                href={`https://github.com/${contributor.login}`}
                aria-label="GitHub"
                className="block"
                target="_blank"
                style={{ color: "#3372c1" }}
              >
                <img
                  src={contributor.avatar_url}
                  alt="avatar"
                  className="w-32 h-32 mx-auto rounded-full bg-gray-500 aspect-square"
                />
              </a>
              <hr
                style={{
                  borderColor: "dark-desaturated-blue",
                  margin: "8px auto",
                  width: "50%",
                  borderWidth:"2px",
                  borderStyle: "solid",
                  borderRadius: "3px"
                }}
              />
              <div className="my-2 space-y-1">
                <h2
                  className={`text-xl font-semibold sm:text-2xl text-gray-600 ${props.theme === "dark" ? "text-white" : ""
                    }`}
                >
                  {contributor.login}
                </h2>
                <p
                  className={`px-5 text-xs sm:text-base text-gray-500 ${props.theme === "dark" ? "text-white" : ""
                    }`}
                >
                  {`Contributions: ${contributor.contributions}`}
                </p>
              </div>
              <div className="flex justify-center pt-2 space-x-4 align-center">
                {/* Add any additional content or buttons here */}
              </div>
            </div>
          ))
        )}
      </Slider>
    </div>
  );
};

export default Contributors;
