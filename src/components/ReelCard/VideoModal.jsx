import React from 'react';
import './VideoModal.css';

const VideoModal = ({ videoUrl, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="video-modal-backdrop" onClick={onClose}>
      <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="video-close" onClick={onClose}>&times;</button>
        <video controls autoPlay className="main-reel-player">
          <source src={videoUrl} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default VideoModal;