import React, { useState, useEffect } from 'react';
import './Header.css';


const Header = () => {
  const [index, setIndex] = useState(0);
  const texts = ['Offer Your', 'Request for'];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000); // Change text every 3 seconds

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, [texts.length]);

  return (
    <div className='header'>
      <div className='header-contents'>
        <div className='hero'>  
          <div className='animated-text'>{texts[index]}</div><div className='static-text'>Service</div>
        </div>

        <div className='hero-content'>
        <p>Connect with professionals and find the best services for your needs.</p>
        <button className='cta-button'>Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
