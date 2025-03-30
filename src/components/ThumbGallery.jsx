import { useState } from "react";

const IMAGES = ["1.png", "2.png", "3.png", "4.png", "5.png"];

const ThumbGallery = () => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const handleChange = (imageIndex) => {
    setActiveImageIndex(imageIndex);
  };

  return (
    <section>
      <div className="big">
        <img
          width={600}
          height={400}
          src={`images/thumbs/${IMAGES[activeImageIndex]}`}
        />
      </div>
      <div className="thumbs">
        {IMAGES.map((imgSrc, index) => (
          <img
            onClick={() => handleChange(index)}
            key={imgSrc}
            width={130}
            className={index === activeImageIndex ? 'active' : ''}
            src={`images/thumbs/${imgSrc}`}
          />
        ))}
      </div>
    </section>
  );
};

export default ThumbGallery;
