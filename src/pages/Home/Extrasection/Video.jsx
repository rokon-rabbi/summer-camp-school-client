import React, { useState } from 'react';
import { FaPlay, FaTimes } from 'react-icons/fa';
import './Videso.css';

const Video = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handleVideoClick = () => {
    setIsVideoPlaying(true);
  };

  const handleCloseVideo = () => {
    setIsVideoPlaying(false);
  };

  return (
    <div className="relative w-full h-96 banner">
      {/* Banner image */}
      <img
        src="https://images.unsplash.com/photo-1472745942893-4b9f730c7668?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80"
        alt="Banner"
        className="w-full h-full object-contaion"
      />
      <p className="absolute top-10 left-20 underline text-white font-bold">
        WATCH OUR AWESOME VIDEO!
      </p>

      {/* Play icon */}
      {!isVideoPlaying && (
        <button
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white rounded-full bg-black bg-opacity-50 p-3"
          onClick={handleVideoClick}
        >
          <FaPlay className="h-12 w-12" />
        </button>
      )}

      {/* Video */}
      {isVideoPlaying && (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <div className="video-wrapper">
            <div className="close-button" onClick={handleCloseVideo}>
              <FaTimes />
            </div>
            <iframe
              src="https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/SfgTbYmNJXjhkhi5b7/videoblocks-aerial-view-of-a-summer-camp-with-cabins-and-recreational-area-in-the-forest_spi4idcwp__ee2e21833e85886f9c5abe408e9e5473__P360.mp4"
              className="w-full h-full"
              frameBorder="0"
              title="Video"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default Video;
