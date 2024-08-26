import React, { useState, useEffect } from 'react'
import './slider.css'

// Array of dummy images
const images = [
  "/assets/poster.svg",
  "/assets/poster.svg",
  "/assets/poster.svg",
  "/assets/poster.svg",
];

function Slider() {
  //states for managing current and next images
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [nextImageIndex, setNextImageIndex] = useState(1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      setNextImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    //on  every 3 secnds  the images refreshes
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <div className="poster">
        <div className="slider-container">
          <img
            src={images[currentImageIndex]}
            alt={`Poster ${currentImageIndex + 1}`}
            className="poster-image current"
          />
          <img
            src={images[nextImageIndex]}
            alt={`Poster ${nextImageIndex + 1}`}
            className="poster-image next"
          />
        </div>
        <div className="poster-txt">
          <p>Receive guaranteed <button>GIFT VOUCHER</button><br/>on a monthly hire or lease
          </p>
        </div>
      </div>
    </div>
  )
}

export default Slider