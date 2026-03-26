import React from 'react';

const tiers = [
  {
    name: "The Highlight",
    price: "2,800",
    description: "Essential digital content creation for the modern couple.",
    features: ["6 Hours of Coverage", "Raw Footage iPhone Content", "3 Edited Social Reels", "48-Hour Delivery"],
    cta: "Choose Package",
    featured: false
  },
  {
    name: "The Keepsake",
    price: "4,500",
    description: "Comprehensive storytelling with a cinematic editorial touch.",
    features: ["8 Hours of Coverage", "Secondary Content Creator", "5 Edited Social Reels", "Drone/Aerial Footage", "Next-Day Reveal Clips"],
    cta: "Secure Your Date",
    featured: true
  },
  {
    name: "The Ultimate",
    price: "7,200",
    description: "An immersive archival experience for the legacy-minded.",
    features: ["Unlimited Weekend Coverage", "Welcome Dinner & Brunch Coverage", "Full Length Documentary Film", "Hardcover Storybook Album"],
    cta: "Request Bespoke Quote",
    featured: false
  }
];

const PricingGrid = () => {
  return (
    <div className="pricing-grid">
      {tiers.map((tier) => (
        <div key={tier.name} className={`pricing-card ${tier.featured ? 'featured' : ''}`}>
          {tier.featured && <div className="floating-badge">Most Desired</div>}

          <div className="card-header">
            <h3 className="tier-name">{tier.name}</h3>
            <div className="price-container">
              <span className="starting-at">Starting at</span>
              <span className="amount">${tier.price}</span>
            </div>
          </div>

          <div className="card-body">
            <p className="tier-description">{tier.description}</p>
            <ul className="feature-list">
              {tier.features.map((feature, i) => (
                <li key={i} className="feature-item">
                  <span className={`material-symbols-outlined icon ${tier.featured ? 'filled' : ''}`}>
                    {tier.featured ? 'stars' : 'check_circle'}
                  </span>
                  <span className="feature-text">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="card-footer">
            <button className={`cta-button ${tier.featured ? 'primary' : 'outline'}`}>
              {tier.cta}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PricingGrid;