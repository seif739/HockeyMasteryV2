import React from 'react';
import './AboutUs.css';
import CoachCard from './CoachCard';
import Coach1 from '../images/Coach1.jpeg';
import coach4 from '../images/coach4.jpeg';
import Coach5 from '../images/Coach5.jpeg';


function AboutUs() {
  return (
    <div className="about-us">
      <h1 className="section-title">About Us</h1>
      <div className="coach-cards">
        <CoachCard
          imageSrc={Coach1} alt='Hockey Mastery'
          name="David McConnor"
          description="Coach David brings over 15 years of experience in professional hockey coaching. His focus on technique and strategy has led many players to excel in their careers."
        />
        <CoachCard
          imageSrc={coach4} alt='Hockey Mastery'
          name="Lamar Kendrick"
          description="With a background in elite-level women's hockey, Coach Lamar emphasizes skill development and mental toughness. Her coaching style combines precision with passion."
        />
        <CoachCard
          imageSrc={Coach5} alt='Hockey Mastery'
          name="Michael Reeves"
          description="Coach Michael's career spans from NHL player to coaching. His expertise in offensive tactics and player development has groomed several prospects for the big leagues."
        />
      </div>
    </div>
  );
}

export default AboutUs;
