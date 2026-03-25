import React from 'react';

const details = [
  { icon: "history_toggle_off", title: "Transparent Timelines", text: "We guarantee 48-hour delivery for social edits, ensuring you share the magic while the excitement is still fresh." },
  { icon: "camera_enhance", title: "Discreet Presence", text: "Our creators blend into your celebration, capturing candid moments without disrupting the flow of your day." },
  { icon: "auto_awesome", title: "Bespoke Options", text: "Need something different? We offer custom add-ons including rehearsal dinners and heirloom prints." }
];

const FeatureShowcase = () => {
  return (
    <section className="feature-showcase">
      <div className="image-container">
        <img 
          alt="Premium wedding details" 
          src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1000" 
        />
        <div className="overlay"></div>
      </div>
      <div className="content-container">
        <h2 className="section-title">Your story is unique. Your coverage should be too.</h2>
        <div className="details-list">
          {details.map((item) => (
            <div key={item.title} className="detail-item">
              <span className="material-symbols-outlined detail-icon">{item.icon}</span>
              <div>
                <h4 className="detail-title">{item.title}</h4>
                <p className="detail-text">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureShowcase;