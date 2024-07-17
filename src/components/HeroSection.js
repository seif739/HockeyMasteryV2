import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import Video from '../videos/video5.mp4' ;

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src={Video} autoPlay loop muted />
      <h1>Reach Your Full <span className="potential-text">Potential</span></h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
            
           <i className='fas fa-cart-plus' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;