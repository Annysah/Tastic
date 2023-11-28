import React from "react";
import {
    MdOutlineArrowBackIosNew,
    MdOutlineArrowForwardIos,
  } from "react-icons/md";

const Arrow = ({ prevSlide, nextSlide }) => {
  return (
    <>
      <div className="arrows">
        <MdOutlineArrowBackIosNew className="prev" onClick={prevSlide} />
        <MdOutlineArrowForwardIos className="next" onClick={nextSlide} />
      </div>
    </>
  );
};

export default Arrow;
