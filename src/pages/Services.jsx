import React from 'react';
import '../components/ServicesBody.css';

import PackageHeader   from '../components/PackageHeader';
import PricingGrid     from '../components/PricingGrid';
import FeatureShowcase from '../components/FeatureShowcase';

export default function Services() {
  return (
    <main className="services-page">
      <PackageHeader />
      <PricingGrid />
      <FeatureShowcase />
    </main>
  );
}