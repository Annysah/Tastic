import React, { useEffect, useState } from "react";
import Hero from "./Hero";
import Arrow from "./Arrow";
import sliderImages from "../../data/sliderImages/sliderImages";

import './Slider.css'

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(
        activeIndex === sliderImages.length - 1 ? 0 : activeIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [activeIndex]);
  return (
    <>
      <div className="slider-container">
        <Hero activeIndex={activeIndex} sliderImage={sliderImages} />
        <Arrow
          prevSlide={() =>
            setActiveIndex(
              activeIndex < 1 ? sliderImages.length - 1 : activeIndex - 1
            )
          }
          nextSlide={() =>
            setActiveIndex(
              activeIndex === sliderImages.length - 1 ? 0 : activeIndex + 1
            )
          }
        />
      </div>
    </>
  );
};

export default Slider;
