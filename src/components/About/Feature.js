import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import UploadIcon from "@mui/icons-material/Upload";
import MoneyOffIcon from "@mui/icons-material/MoneyOff";
import PeopleIcon from "@mui/icons-material/People";
import EmailIcon from "@mui/icons-material/Email";
import DraftsIcon from "@mui/icons-material/Drafts";
import ReadingChallengeIcon from "@mui/icons-material/EmojiEvents"; // Imported ReadingChallenge icon from Material-UI Icons
import ProgressTrackingIcon from "@mui/icons-material/Timeline"; // Imported ProgressTracking icon from Material-UI Icons

import "./Feature.css";

export default function Feature(props) {
  const Theme = props.theme === "dark" ? "#161313" : "";
  return (
    <div className="row feature d-flex justify-content-evenly text-center">
      <h1 className="text-center fw-bold fs-1">Features</h1>
      <p className="text-center mt-4 mb-5">Features We provide</p>

      <Carousel
        showArrows={true}
        showThumbs={false}
        className="carousel-container"
        autoPlay={true}
        interval={2000}
        infiniteLoop={true}
      >
        <div className="feature_card_outer">
          <div className="feature_card" style={{ background: Theme }}>
            <MenuBookIcon className="icons book" />
            <p>Read Books</p>
          </div>
          <div className="feature_card" style={{ background: Theme }}>
            <UploadIcon className="icons upload text-info" />
            <p>Upload Books</p>
          </div>
          <div className="feature_card" style={{ background: Theme }}>
            <MoneyOffIcon className="dollar icons text-warning" />
            <p>Free of Cost</p>
          </div>
        </div>
        <div className="feature_card_outer">
          <div className="feature_card" style={{ background: Theme }}>
            <PeopleIcon className="icons reader" />
            <p>Readers Community</p>
          </div>
          <div className="feature_card" style={{ background: Theme }}>
            <EmailIcon className="icons letterClose text-primary" />
            <DraftsIcon className="icons letterOpen text-primary d-none" />
            <p>Newsletter</p>
          </div>
          <div className="feature_card" style={{ background: Theme }}>
            <ReadingChallengeIcon className="icons readingChallenge" />
            <p>Reading Challenge</p>
          </div>
        </div>
        <div className="feature_card_outer">
          <div className="feature_card" style={{ background: Theme }}>
            <ProgressTrackingIcon className="icons progressTracking" />
            <p>Progress Tracking</p>
          </div>
        </div>
      </Carousel>
    </div>
  );
}
