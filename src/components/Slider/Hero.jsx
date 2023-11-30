import React from "react";
import './Slider.css'

const Hero = ({ activeIndex, sliderImage }) => {
  return (
    <>
      <section>
        <div className="overlay"></div>
        {sliderImage.map((slide, index) => (
          <div
            key={index}
            className={index === activeIndex ? "slides active" : "inactive"}
          >
            <img className="slide-image" src={slide.imageUrl} alt="" />
            <h2 className="slide-title">{slide.title}</h2>
            <h3 className="slide-text">{slide.description}</h3>
          </div>
        ))}
      </section>
    </>
  );
};

export default Hero;
