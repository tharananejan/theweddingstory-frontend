import React from 'react';
import './Hero.css';

const Hero = () => (
  <section className="hero-box">
    <div className="hero-content">
      <div className="hero-text-side">
        {/* <span className="label-sm">Selected Works</span> */}
        <h1 className="hero-main-title">Capturing the <span className="italic">Soul</span> of Celebration.</h1>
      </div>
      <div className="hero-desc-side">
        <p>Cinematic short-form storytelling designed for the modern couple who values authenticity and editorial grace.</p>
      </div>
    </div>
  </section>
);

export default Hero;