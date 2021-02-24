import React from "react";

const HeroCheck = ({ image, text }) => {
  return (
    <div>
      <img src={image} alt="image1" />
      <p className="text">{text}</p>
    </div>
  );
};

export default HeroCheck;
