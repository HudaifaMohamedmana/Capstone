import React, { useEffect, useState } from "react";

const ImageSlider = () => {
  const images = [
    "https://www.nescafe.com/mena/sites/default/files/2023-08/Coffee%20Types%20Banner%20Desktop.jpg",
    "https://assets.architecturaldigest.in/photos/60083ed208ae763b9ae8542d/16:9/w_2560%2Cc_limit/fermented-coffee-beverage-brew-1366x768.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREfdU8xPRI_owALnArBZt6PwDmbYTzJFRAlQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGgalFJy_lSvA1Hyrfz92bffdqVPXO5qPyYA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfcKKMjsr483wkrNCMaezCk_B_-3zRd9KINg&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXGFJCx8_1EOl-8pzL5YTbxBA4CrbKRFtj7A&s",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const slideInterval = 2000;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, slideInterval);

    return () => clearInterval(intervalId);
  }, [images.length]);

  const firstImageIndex = currentIndex % images.length;
  const secondImageIndex = (currentIndex + 1) % images.length;

  return (
    <div className="advisement">
      <div className="image-container">
        <img
          src={images[firstImageIndex]}
          alt={`Slide ${firstImageIndex}`}
          className="ADImages displaySlide"
        />
        <img
          src={images[secondImageIndex]}
          alt={`Slide ${secondImageIndex}`}
          className="ADImages displaySlide"
        />
      </div>
    </div>
  );
};

export default ImageSlider;
