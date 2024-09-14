// src/Hero.jsx
import React, { useState, useEffect } from 'react';
import './Hero.css';



const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Array of image class names
  const imageClasses = ['image1', 'image2', 'image3'];

  // Automatically change image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imageClasses.length);
    }, 3000); // 3 seconds interval

    return () => clearInterval(interval);
  }, [imageClasses.length]);

  // Function to change image when a dot is clicked
  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="hero-container">
      <div className="hero" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {imageClasses.map((imageClass, index) => (
          <div
            key={index}
            className={`hero-slide ${imageClass}`}
          />
        ))}
      </div>
      <div className="overlay">
        <h1 className="line-1 anim-typewriter">TEAM REVANTA</h1>
      </div>
      <div className="dots">
        {imageClasses.map((_, index) => (
          <span
            className={`dot ${currentIndex === index ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
            key={index}
          />
        ))}
      </div>
      <button className="btns">Explore more</button>
    </div>
  );
};

export default Hero;
