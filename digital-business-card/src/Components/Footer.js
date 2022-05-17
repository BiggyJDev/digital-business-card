import React from "react";
import { BsInstagram, BsGithub } from "react-icons/bs";

function Footer() {
  return (
    <div className='footer'>
      <a href='https://www.instagram.com/biggyj_dev/?hl=en-gb'>
        <BsInstagram />
      </a>
      <a href='https://github.com/BiggyJDev'>
        <BsGithub />
      </a>
    </div>
  );
}

export default Footer;
