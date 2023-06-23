import React from "react";
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
      <div className="card col-lg-2 cl-md-3 col-sm-4">
        <MenuBookIcon className="icons book" />
        Read Books
      </div>
      <div className="card col-lg-2 cl-md-3 col-sm-4">
        <UploadIcon className="icons upload text-info" />
        Upload Books
      </div>
      <div className="card col-lg-2 cl-md-3 col-sm-4">
        <MoneyOffIcon className="dollar icons text-warning"/>
        Free of Cost
      </div>
      <div className="card col-lg-2 cl-md-3 col-sm-4">
        <PeopleIcon className="icons reader" />
        Readers Community
      </div>
      <div className="letter card col-lg-2 cl-md-3 col-sm-4">
        <EmailIcon className="icons letterClose text-primary" />
        <DraftsIcon className="icons letterOpen text-primary d-none"/>
        Newsletter
      </div>
      <div className="letter card col-lg-2 cl-md-3 col-sm-4">
        <ReadingChallengeIcon className="icons readingChallenge" /> {/* Replaced with ReadingChallengeIcon */}
        Reading Challenge
      </div>
      <div className="progress-tracking card col-lg-2 cl-md-3 col-sm-4">
        <ProgressTrackingIcon className="icons progressTracking" /> {/* Replaced with ProgressTrackingIcon */}
        Progress Tracking
      </div>
    </div>
  );
};
