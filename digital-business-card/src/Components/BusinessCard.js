import React from "react";
import AboutMe from "./AboutMe";
import Footer from "./Footer";

function BusinessCard() {
  return (
    <div>
      <div className='my-picture'>
        <img src='./me - Copy.JPG' alt='' />
      </div>
      <AboutMe />
      <Footer />
    </div>
  );
}

export default BusinessCard;
