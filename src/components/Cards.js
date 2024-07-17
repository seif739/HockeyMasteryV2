import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

import nhl from '../images/nhl.jpeg';
import nhl2 from '../images/nhl2.jpeg';
import sharks1 from '../images/sharks1.jpg';
import shootout from '../images/shootout.jpeg';
import sharks2 from '../images/sharks2.jpg';
import sharks4 from '../images/sharks4.jpg';

function Cards() {
  return (
    <div className='cards'>
      <h1>PROGRAMS</h1>
      <div className='cards__container'>
        <h3></h3>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={nhl}
              alt='Hockey Mastery'
              text='Master offensive techniques with drills designed for precision and creativity.'
              label="Offensive Drills"
              path='/services'
            />
            <CardItem
              src={sharks2}
              alt='Hockey Mastery'
              text='Enhance your shooting skills with focused drills and expert coaching.'
              label='Shooting Drills'
              path='/services'
            />
            <CardItem
              src={sharks1}
              alt='Hockey Mastery'
              text='Dive deep into the analysis of NHL games to improve your strategy.'
              label='Analysis of NHL Games'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={sharks4}
              alt='Hockey Mastery'
              text='Specialized drills for goalies to enhance reflexes and positioning.'
              label='Goalie Drill'
              path='/services'
            />
            <CardItem
              src={nhl2}
              alt='Hockey Mastery'
              text='Increase your puck control with advanced stickhandling drills.'
              label='Stickhandling Drills'
              path='/products'
            />
            <CardItem
              src={shootout}
              alt='Hockey Mastery'
              text='Strengthen your defense with exercises focused on positioning and tactics.'
              label='Defensive Drills'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
