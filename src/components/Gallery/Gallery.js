import { useState, useRef } from "react";
import './Gallery.css';
import images from "../../photos.json";

function Gallery() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);
  const lastIndex = images.length - 1;
  const firstIndex = 0;

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
    const sliderContainer = sliderRef.current;
    sliderContainer.scrollTop += scrollAmount;
  };

  return (
    <>
      <div className="references-container">
        <a href="https://www.moviesshop.co/" target="blank">Movies</a>
        <p>/</p>
        <a href="https://www.moviesshop.co/hombre" target="blank">Hombre</a>
        <p>/</p>
        <a href="https://www.moviesshop.co/hombre/chaquetas-y-buzos" target="blank">Chaquetas y Buzos</a>
        <p>/</p>
        <p className="name-item">Chaqueta género neutro, caqui con cierre de Mandalorian</p>
      </div>
      <div className="gallery-container">
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
          <button onClick={() => handleScrollClick(-100)} className="arrow-up"></button>
          <button onClick={() => handleScrollClick(100)} className="arrow-down"></button>
        </div>
        <div className="gallery-image">
          <img src={images[currentSlide]?.url} alt={images[currentSlide]?.alt} />
          <button className={currentSlide === firstIndex ? "arrow-right-gray" : "arrow-right"} onClick={handlePrevClick}></button>
          <button className={currentSlide === lastIndex ? "arrow-left-gray" : "arrow-left"} onClick={handleNextClick}></button>
        </div>
      </div>
    </>
  );
    
}
export default Gallery;