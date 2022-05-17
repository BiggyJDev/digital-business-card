import React from "react";

function MainContent() {
  return (
    <div className='main-content'>
      <h2>Fun facts about React</h2>
      <ul>
        <li>Was first released in 2013</li>
        <li>Was orginally created by Jordan Walke</li>
        <li>Has over 100k stars on GitHub</li>
        <li>Is maintained by Meta (Facebook)</li>
        <li>
          It powers thousands of enterprise apps, including mobile apps using
          its native version
        </li>
        <li>React uses Pascal casing for naming its components</li>
      </ul>

      <h2> Reasons I LOVE React</h2>
      <ol>
        <li>
          <h3>Its super easy to learn</h3>{" "}
          <p>
            There is so much documentation, tutorials and training resources out
            there.
          </p>
        </li>
        <li>
          <h3>Strong Community</h3>{" "}
          <p>
            With React being backed by Meta Engineering Teams and thousands of
            Devs there is so much help out there if you get stuck
          </p>
        </li>
        <li>
          <h3>Flexability</h3>
          <p>
            React is not just for web applications, we can also build: Desktop
            Apps, Mobile Apps and even VR Apps! How cool is that!
          </p>
        </li>
      </ol>
    </div>
  );
}

export default MainContent;
