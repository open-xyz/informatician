import React, { useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import './ScrollButton.css'; 

const ScrollToTopButton = () => {
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const handleScroll = () => {
    let scrollTopButton = document.querySelector('.scrollToTopButton');
        if (window.scrollY === 0) {
            scrollTopButton.style.animation = 'hide 0.5s forwards ease-in-out';
        }
        else {
            scrollTopButton.style.animation = 'show 0.5s forwards ease-in-out';
        }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div>
        <button className="scrollToTopButton" onClick={scrollToTop}>
          <FaArrowUp className="scrollToTopIcon" />
        </button>
    </div>
  );
};

export default ScrollToTopButton;