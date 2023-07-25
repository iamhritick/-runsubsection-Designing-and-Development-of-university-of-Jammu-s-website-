import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ImageSlider.css';

const ImageSlider = () => {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get('/api/images');
        setImages(response.data || []);
      } catch (error) {
        console.error(error);
      }
    };

    fetchImages();
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="image-slider-container">
      <div className="button-container">
        <button className="prev-button" onClick={handlePrev}>
          Previous
        </button>
      </div>
      <div className="slider">
        {images.length > 0 && (
          <img src={images[currentIndex].url} alt={images[currentIndex].caption} className="slider-image" />
        )}
      </div>
      <div className="button-container">
        <button className="next-button" onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
