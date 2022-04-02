import React from 'react';
import { Button } from './Button';

// ** STYLES ** \\
import '../App.css';
import '../css/HeroSection.css';
import { ReactComponent as HuluIMG } from "../img/hulu.svg";
import { ReactComponent as NetflixIMG } from '../img/netflix.svg';

function HeroSection() {
  return (
      <div className={'hero-container'}>
          <h1>Can't find <strong><em>where</em></strong> to watch?</h1>
          <div className={'stream-service-img-container'}>
            <NetflixIMG width="10%"/>
            <HuluIMG width="10%"/>
          </div>
      </div>
  );
/*
    <img src={netflix_img} alt={'netflix'}></img>
    <img src={hulu_img} alt={'hulu'}></img>
 */

    {/*
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
    */}
}

export default HeroSection;
