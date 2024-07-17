import React from 'react';
import './CoachCard.css';
import { Button } from './Button';

function CoachCard({ imageSrc, name, description }) {
  const scrollToFooter = () => {
    const footer = document.getElementById('footer-section');
    footer.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="coach-card">
      <img src={imageSrc} alt={name} className="coach-image" />
      <div className="coach-details">
        <h2 className="coach-name">{name}</h2>
        <p className="coach-description">{description}</p>
        <Button  onClick={scrollToFooter}>
          Contact
        </Button>
      </div>
    </div>
  );
}

export default CoachCard;
