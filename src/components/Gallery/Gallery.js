import { useState } from "react";
import './Gallery.css';
import images from "../../photos.json";
console.log(images);

function Gallery() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleThumbnailClick = (id) => {
    setCurrentSlide(id - 1);
  };

  return (
    <div className="gallery-container">
      <div className="gallery-image">
        <img src={images[currentSlide]?.url} alt={images[currentSlide]?.alt} />
      </div>
      <div className="gallery-slider">
        {images.map((image) => (
          <div
            key={image.id}
            className={`slider-thumbnail ${
              image.id === currentSlide + 1 ? "active" : ""
            }`}
            onClick={() => handleThumbnailClick(image.id)}
          >
            <img src={image.url} alt={image.alt} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;