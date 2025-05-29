import React, { useState, useRef, useEffect } from 'react';

const Hero = () => {
  const videoList = [
    '/assets/clip2.mp4',
    '/assets/clip3.mp4',
    '/assets/clip4.mp4',
    '/assets/clip5.mp4',
    '/assets/clip6.mp4',
    '/assets/clip7.mp4',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRef = useRef(null);

  const handleVideoEnd = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % videoList.length);
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch((e) => {
        console.error('Autoplay error:', e);
      });
    }
  }, [currentIndex]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        ref={videoRef}
        autoPlay
        muted
        onEnded={handleVideoEnd}
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src={videoList[currentIndex]} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 z-10" />

      {/* Content Layer */}
      <div className="relative z-20 flex flex-col items-center justify-center h-[90vh] pt-[9vh] text-white text-center px-4">
        <img src="/assets/cumun_logo.png" alt="Logo" className="w-28 h-28 sm:w-36 sm:h-36 mb-5" />
        <h1 className="text-3xl sm:text-5xl md:text-8xl font-bold">
          <span className="text-red-600">CHANDIGARH</span> UNIVERSITY
        </h1>
        <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold mt-2">MODEL UNITED NATIONS</h2>
        <h3 className="text-xl sm:text-2xl md:text-4xl font-semibold mt-1">Edition 4.0</h3>
        <p className="mt-8 text-lg sm:text-xl md:text-2xl font-medium">
          10th - 12th SEPTEMBER 2025
        </p>
      </div>

      {/* Ticker Bar */}
      <div className="absolute bottom-0 z-30 w-full bg-white border-y border-gray-300 py-2 flex flex-col items-center justify-center">
        <div className="overflow-hidden w-full">
          <div className="inline-block whitespace-nowrap animate-[scroll_25s_linear_infinite] text-black text-sm sm:text-base md:text-lg px-4">
            🚀 Welcome to Technicia'25! &nbsp;|&nbsp;
            🌟 Register now for the Hackathon &nbsp;|&nbsp;
            🎤 Keynote by global leaders &nbsp;|&nbsp;
            🎵 Live music night with top artists &nbsp;|&nbsp;
            🧠 Innovation meets impact at CU!
          </div>
        </div>
        <div className="text-xs sm:text-sm md:text-base font-semibold mt-1 text-gray-800">
          PRESENTED BY ISTE STUDENT CHAPTER
        </div>

        {/* Scroll Keyframes */}
        <style>
          {`
            @keyframes scroll {
              0% { transform: translateX(100%); }
              100% { transform: translateX(-100%); }
            }
          `}
        </style>
      </div>
    </div>
  );
};

export default Hero;
