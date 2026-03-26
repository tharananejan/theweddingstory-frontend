// src/components/Portfolio/ReelCard.jsx
import React from 'react';
import './ReelCard.css';

const ReelCard = ({ title, location, type, image, sizeClass, onOpen }) => (
  <div className={`reel-card ${sizeClass}`} onClick={onOpen}>
    {/* Image with brand-standard hover zoom */}
    <img src={image} alt={title} className="reel-img" />
    
    {/* Center Play Overlay - Only visible on hover */}
    <div className="reel-overlay">
      <div className="play-button">
        <span className="material-symbols-outlined icon-vibe">play_arrow</span>
      </div>
    </div>
    
    {/* Bottom Details - Stacked vertically */}
    <div className="reel-details">
      <span className="reel-tag">{location || type}</span>
      <h3 className="reel-name">{title}</h3>
    </div>
  </div>
);

export default ReelCard;