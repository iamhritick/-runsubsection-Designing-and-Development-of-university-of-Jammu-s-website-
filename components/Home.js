import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import * as THREE from "three";
import * as PANOLENS from "panolens";
import "./Home.css";

const Home = () => {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get("/api/images");
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
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const container = useRef(null);
  useEffect(() => {
    // Create panorama image and viewer
    const panoramaImage = new PANOLENS.ImagePanorama("images/ima360-photo.jpg");
    const viewer = new PANOLENS.Viewer({
      container: container.current,
      controlBar: false,
      autoRotate: true, 
      
      autoRotateSpeed: 0.3,
      autoRotateInterval: 1,
    });

    viewer.add(panoramaImage);

    return () => {
      // Clean up on unmount
      viewer.dispose();
    };
  }, []);
  return (
    <>
      <div class="imageslider">
        <div class="row01">
          <div class="column01">
            <div className="slider">
              {images.length > 0 && (
                <img
                  src={images[currentIndex].url}
                  alt={images[currentIndex].caption}
                  className="slider-image"
                />
              )}
            </div>
            <div className="button-container">
              <button className="prev-button" onClick={handlePrev}>
                Previous
              </button>
              <button className="next-button" onClick={handleNext}>
                Next
              </button>
            </div>
          </div>
        </div>

        <div class="row01">
          <div class="column02">
            <div className="main-container">
              <div className="image-container" ref={container}></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
