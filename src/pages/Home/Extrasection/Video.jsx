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
        className="w-full h-full object-cover"
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
              src="https://vod-progressive.akamaized.net/exp=1686409925~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F834%2F22%2F554173680%2F2621429332.mp4~hmac=6621b00b232e84879b9b9a0c3aa993fc6f9d08271ae158b2e8aa0b56629c3fba/vimeo-prod-skyfire-std-us/01/834/22/554173680/2621429332.mp4"
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
