import React from 'react';
import { Button } from './Button';

// ** STYLES ** \\
import '../css/HeroSection.css';
//import '../css/App.css'; // <- Is this for fallback? Do we need it?

function HeroSection() {
  return (
      <div className='hero-container'>
          <h1>Can't find <strong><em>where</em></strong> to watch?</h1>
      </div>
  );
      /*
    <div className='hero-container'>
      <h1>Can't Find Where to Watch?</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          GO <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
    */
}

export default HeroSection;
