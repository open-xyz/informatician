import React from "react";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import MenuBookIcon from "@mui/icons-material/MenuBook";
import UploadIcon from '@mui/icons-material/Upload';
import MoneyOffIcon from '@mui/icons-material/MoneyOff';
import PeopleIcon from '@mui/icons-material/People';
import EmailIcon from '@mui/icons-material/Email';
import DraftsIcon from '@mui/icons-material/Drafts';
import ReadingChallengeIcon from '@mui/icons-material/EmojiEvents'; // Imported ReadingChallenge icon from Material-UI Icons
import ProgressTrackingIcon from '@mui/icons-material/Timeline'; // Imported ProgressTracking icon from Material-UI Icons

import "./Feature.css"


export default function Feature() {
  return (
    <div className="row feature d-flex justify-content-evenly text-center">
      <h1 className="text-center fw-bold fs-1">Feature</h1>
      <p className="text-center mt-4 mb-5 font-medium">Features We provide</p>
      
      <Carousel showArrows={true} showThumbs={false} className="carousel-container">
    <div className="card_outer">
    <div className="card">
          <MenuBookIcon className="icons book" />
          <p>Read Books</p>
        </div>
        <div className="card">
          <UploadIcon className="icons upload text-info" />
          <p>Upload Books</p>
        </div>
        <div className="card">
          <MoneyOffIcon className="dollar icons text-warning" />
          <p>Free of Cost</p>
        </div>
    </div>
    <div className="card_outer">
        <div className="card">
          <PeopleIcon className="icons reader" />
          <p>Readers Community</p>
        </div>
        <div className="card">
          <EmailIcon className="icons letterClose text-primary" />
          <DraftsIcon className="icons letterOpen text-primary d-none" />
          <p>Newsletter</p>
        </div>
        <div className="card">
          <ReadingChallengeIcon className="icons readingChallenge" />
          <p>Reading Challenge</p>
        </div>
        </div>
        <div className="card_outer">
        <div className="card">
          <ProgressTrackingIcon className="icons progressTracking" />
          <p>Progress Tracking</p>
        </div>
        </div>
      </Carousel>
    </div>
  );
}