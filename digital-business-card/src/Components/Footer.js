import React from "react";
import { BsInstagram, BsGithub } from "react-icons/bs";

function Footer() {
  return (
    <div>
      <ul>
        <li>
          <a href='https://www.instagram.com/biggyj_dev/?hl=en-gb'>
            <BsInstagram />
          </a>
        </li>
        <li>
          <a href='https://github.com/BiggyJDev'>
            <BsGithub />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
