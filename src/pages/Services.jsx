import React from 'react';
import '\src\components\ServicesBody.css';

import PackageHeader from '\src\components\PackageHeader';
import PricingGrid from '\src\components\PricingGrid.jsx';
import FeatureShowcase from '\src\components\FeatureShowcase.jsx';


const Services = () => {
  return (
    <main className="services-container">
      {/* 01. Typography & Introduction Section */}
      <section className="section-wrapper">
        <PackageHeader />
      </section>

      {/* 02. Interactive Pricing Tiers */}
      <section className="section-wrapper">
        <PricingGrid />
      </section>

      {/* 03. Detail & Trust Showcase */}
      <section className="section-wrapper">
        <FeatureShowcase />
      </section>
    </main>
  );
};

export default Services;