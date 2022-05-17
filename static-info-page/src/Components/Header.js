import React from "react";

function Header() {
  return (
    <>
      <header>
        <nav className='nav'>
          <img className='nav-image' src='/logo192.png' alt='React Logo' />
          <ul className='nav-items'>
            <li>About</li> <li>Pricing</li> <li>Contact</li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
