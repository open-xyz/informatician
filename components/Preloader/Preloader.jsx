'use client';
import React, { useState, useEffect } from 'react';
import '../Preloader/Preloader.css';

const Preloader = ({ onLoadingComplete }) => {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
      onLoadingComplete();
    }, 2000);
  }, []);

  return loader ? (
    <div className="preloader">
      <div className="loader"></div>
    </div>
  ) : null;
};

export default Preloader;
