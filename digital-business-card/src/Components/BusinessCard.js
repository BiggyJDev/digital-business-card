import React from "react";
import AboutMe from "./AboutMe";
import Footer from "./Footer";

function BusinessCard() {
  return (
    <div className='business-card'>
      <img
        className='my-picture'
        src='./me - Copy.JPG'
        alt='Head and Shoulder shot of Jordan Wilson'
      />
      <AboutMe />
      <Footer />
    </div>
  );
}

export default BusinessCard;
