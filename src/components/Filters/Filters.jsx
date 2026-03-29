import React from 'react';
import './Filters.css';

const Filters = ({ activeFilter, onFilterChange }) => {
  const categories = ["All Stories", "Traditional", "Modern", "Destinations", "Candid Reels"];
  
  return (
    <div className="filters-container">
      {/* <div className="filters-scroll">
        {categories.map((cat) => (
          <button 
            key={cat} 
            className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
            onClick={() => onFilterChange(cat)} // Update the state in Home.jsx
          >
            {cat}
          </button>
        ))}
      </div> */}
    </div>
  );
};

export default Filters;