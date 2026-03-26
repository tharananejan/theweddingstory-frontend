import React, { useState } from 'react';
import './PortfolioGrid.css';
import ReelCard from './ReelCard';
import VideoModal from './VideoModal';
import { REELS_DATA } from '../../data';

const PortfolioGrid = ({ activeFilter }) => {
  const [activeVideo, setActiveVideo] = useState(null);

  // 1. Filter the data before mapping
  const filteredReels = REELS_DATA.filter(reel => {
    if (activeFilter === "All Stories") return true;
    return reel.category === activeFilter;
  });

  return (
    <section className="portfolio-section">
      <div className="portfolio-grid">
        {/* 2. Map through the filtered list instead of the whole data */}
        {filteredReels.map((reel) => (
          <ReelCard 
            key={reel.id} 
            {...reel} 
            onOpen={() => setActiveVideo(reel.videoUrl)} 
          />
        ))}
      </div>
      
      {/* Handle empty states if a category has no videos yet */}
      {filteredReels.length === 0 && (
        <p className="no-results">No stories found in this category.</p>
      )}

      <VideoModal 
        videoUrl={activeVideo} 
        isOpen={!!activeVideo} 
        onClose={() => setActiveVideo(null)} 
      />
    </section>
  );
};

export default PortfolioGrid;