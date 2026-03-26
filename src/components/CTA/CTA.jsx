import React from 'react';
import './CTA.css';

const CTA = () => (
  <section className="cta-container">
    <span className="cta-subtitle">Ready to create?</span>
    <h2 className="cta-heading">Let’s document your legacy in a frame that <span className="italic">lasts</span>.</h2>
    <div className="cta-actions">
      <button className="btn-solid">Start the Conversation</button>
      <button className="btn-ghost">View Investment</button>
    </div>
  </section>
);

export default CTA;