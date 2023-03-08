import { useState, useRef } from "react";
import './Gallery.css';
import images from "../../photos.json";

function Gallery() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);
  const lastIndex = images.length - 1;
  const firstIndex = 0;
  const sliderContainer = sliderRef.current;

  const handleThumbnailClick = (id) => {
    setCurrentSlide(id - 1);
  };

  const handleNextClick = () => {
    const nextIndex = currentSlide === lastIndex ? currentSlide : currentSlide + 1;
    setCurrentSlide(nextIndex);
  };

  const handlePrevClick = () => {
    const prevIndex = currentSlide === firstIndex ? currentSlide : currentSlide - 1;
    setCurrentSlide(prevIndex);
  };
  
  const handleScrollClick = (scrollAmount) => {
    sliderContainer.scrollTop += scrollAmount;
    console.log(sliderContainer.scrollTop)
  };

  return (
    <div className="gallery-container">
      <button onClick={() => handleScrollClick(-100)} className="arrow-up"></button>
      <div className="gallery-slider" ref={sliderRef}>
        {images.map((image) => (
          <div
          key={image.id}
          className="slider-thumbnail"
          onClick={() => handleThumbnailClick(image.id)}
          >
            <img src={image.url} alt={image.alt} />
          </div>
        ))}
      </div>
      <button onClick={() => handleScrollClick(100)} className="arrow-down" ></button>
      <div className="gallery-image">
        <img src={images[currentSlide]?.url} alt={images[currentSlide]?.alt} />
        <button className={currentSlide === firstIndex ? "arrow-right-gray" : "arrow-right"} onClick={handlePrevClick}></button>
        <button className={currentSlide === lastIndex ? "arrow-left-gray" : "arrow-left"} onClick={handleNextClick}></button>
      </div>
    </div>
  );
}

export default Gallery;