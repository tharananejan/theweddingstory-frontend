import React from 'react';

const tiers = [
  {
    name: "Standard",
    price: "18,000",
    //description: "Essential digital content creation for the modern couple.",
    features: ["6 Hours of on-set coverage of event", "2 edited cinematic Instagram/Tiktok Reels", "5 Ready to post shorts(Insta Stories)", "Unlimited raw content"],
    cta: "Choose Package",
    featured: false
  },
  {
    name: "Premium",
    price: "25,000",
    //description: "Comprehensive storytelling with a cinematic editorial touch.",
    features: ["8 Hours of on-set coverage", "3-4 edited cinematic Instagram/ Tiktok Reels", "10 Ready to post shorts (Insta stories)", "Unlimited raw content"],
    cta: "Choose Package",
    featured: true
  },
  {
    name: "The Ultimate",
    price: "7,200",
    //description: "An immersive archival experience for the legacy-minded.",
    features: ["Unlimited Weekend Coverage", "Welcome Dinner & Brunch Coverage", "Full Length Documentary Film", "Hardcover Storybook Album"],
    cta: "Choose Package",
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