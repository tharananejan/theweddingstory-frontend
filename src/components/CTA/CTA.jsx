import React from 'react';
import './CTA.css';

const CTA = () => (
  <section className="cta-container">
    <span className="cta-subtitle">Ready to create?</span>
    <h2 className="cta-heading">Let’s document your legacy in a frame that <span className="italic">lasts</span>.</h2>
    <div className="cta-actions">
      <button className="btn-solid"><a href="https://wa.me/94703009464?text=Hello%20I%20want%20more%20info" target="_blank">
  Start the Conversation
</a></button>
      {/* <button className="btn-ghost">View Investment</button> */}
    </div>
  </section>
);

export default CTA;