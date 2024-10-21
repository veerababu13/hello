// LoadingDots.js
import React from 'react';

const LoadingDots = () => {
  return (
    <div className=" min-h-screen flex justify-center items-center space-x-2">
      <div className="w-4 h-4 bg-blue-500 rounded-full animate-dot-flashing"></div>
      <div className="w-4 h-4 bg-blue-500 rounded-full animate-dot-flashing delay-200"></div>
      <div className="w-4 h-4 bg-blue-500 rounded-full animate-dot-flashing delay-400"></div>
    </div>
  );
};

export default LoadingDots;
