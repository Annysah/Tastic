import React, { useState } from "react";

const Hero = ({ activeIndex, sliderImage }) => {
  /*const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };*/

  return (
    <>
      <section>
        <div className="overlay"></div>
        {sliderImage.map((slide, index) => (
          <div
            key={index}
            className={index === activeIndex ? "slides active" : "inactive"}
          >
            <img className="slide-image" src={slide.urls} alt="" />
            <h2 className="slide-title">{slide.title}</h2>
            <h3 className="slide-text">{slide.description}</h3>
          </div>
        ))}
      </section>
    </>
  );
};

export default Hero;
