import React, { useState, useRef, useEffect } from 'react';
import './hero.css'; // Assuming you have a CSS file for styling

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
    <div className='video-wrapper relative w-screen h-screen overflow-hidden'>
        <div className='w-screen h-[90vh] mt-[9vh] bg-transparent absolute z-10'>
            <div className=' top-0 left-0 w-full h-full flex flex-col items-center justify-center'>
                <img src="/assets/cumun_logo.png" alt="Logo" className='w-40 h-40 mb-5' />
                <div className='text-white text-8xl font-bold text-center'>
                <span className='text-red-600'>CHANDIGARH</span> UNIVERSITY
                </div>
                <div className='text-white text-6xl font-bold text-center'>
                MODEL UNITED NATIONS
                </div>
                <div className='text-white text-3xl font-bold text-center'>
                Edition 4.0
                </div>
                <div className='mt-[10vh] text-2xl font-bold text-center text-white'>10th - 12th SEPTEMBER 2025</div>
            </div>
        </div>
        <div className='w-screen h-[90vh] mt-[9vh] absolute bg-black opacity-65'></div> 
      <video ref={videoRef}
        autoPlay
        muted
        onEnded={handleVideoEnd}
        className='w-screen h-screen object-cover'
      >
        <source src={videoList[currentIndex]} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="bottom-container w-full h-[10vh] overflow-hidden bg-white border-y border-gray-300 py-2 absolute bottom-0 z-20 flex flex-col items-center justify-center">
      <div className="inline-block whitespace-nowrap animate-[scroll_25s_linear_infinite] text-black text-2xl bg-white">
        🚀 Welcome to Technicia'25! &nbsp;|&nbsp;
        🌟 Register now for the Hackathon &nbsp;|&nbsp;
        🎤 Keynote by global leaders &nbsp;|&nbsp;
        🎵 Live music night with top artists &nbsp;|&nbsp;
        🧠 Innovation meets impact at CU!
      </div>
      <div>PRESENTED BY ISTE STUDENT CHAPTER</div>

      {/* Custom keyframes via inline <style> tag */}
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
