import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { FaLinkedin } from "react-icons/fa";
function AboutMe() {
  return (
    <>
      <div className='details'>
        <h1>Jordan Wilson</h1>
        <h2> Frontend Developer</h2>
        <h3>
          <a href='https://biggyj.netlify.app/'> BiggyJ.Netlify.app </a>
        </h3>
      </div>
      <div className='contact-links'>
        <button>
          <a href='mailto: biggyj_dev@outlook.com'>
            <HiOutlineMail /> Email
          </a>
        </button>
        <button>
          <a href='https://www.linkedin.com/in/jordan-wilson-310030151/'>
            <FaLinkedin /> LinkedIn
          </a>
        </button>
      </div>
      <h1>About</h1>
      <p>
        I am a junior front end developer who LOVES working with React. I am
        originally from a construction background but decided to make the change
        during the Covid-19 Pandemic. I am currently studying a BSc in Cyber
        Security in my spare time at the Open University. I am obsessed with
        learning and constantly wanting to progress.
      </p>

      <h1>Interests</h1>
      <p>
        In my spare time other than studying I like to unwind by :
        <ul>
          <li>Spending time with my girlfriend</li>
          <li>Gaming (LoL and WoW)</li>
          <li>Going to the gym</li>
          <li>and playing rugby</li>
        </ul>
      </p>
    </>
  );
}

export default AboutMe;
