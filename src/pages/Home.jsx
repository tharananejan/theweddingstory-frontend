import React, { useState } from 'react';
import './Home.css';
import Hero from '../components/Hero/Hero';
import Filters from '../components/Filters/Filters';
import PortfolioGrid from '../components/ReelCard/PortfolioGrid';
import CTA from '../components/CTA/CTA';

const Home = () => {
  // 1. Create the state for the active category
  const [activeFilter, setActiveFilter] = useState("All Stories");

  return (
    <main className="home-wrapper">
      <Hero />
      {/* 2. Pass the state and the setter function to Filters */}
      <Filters 
        activeFilter={activeFilter} 
        onFilterChange={setActiveFilter} 
      />
      {/* 3. Pass the active filter to the Grid */}
      <PortfolioGrid activeFilter={activeFilter} />
      <CTA />
    </main>
  );
};

export default Home;