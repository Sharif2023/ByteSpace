import React from 'react';
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';

export default function NotFoundPage({ onNavigate }) {
  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col font-sans">
      
      {/* Persian Blue Grid Section */}
      <div className="bytespace-grid-bg text-white pt-2 flex-grow flex flex-col justify-between">
        
        <Navbar activePage="notfound" onNavigate={onNavigate} />

        {/* Center Content */}
        <div className="max-w-4xl mx-auto px-4 text-center pb-24 z-10 flex-grow flex flex-col items-center justify-center relative">
          
          {/* Giant Lime 404 Gradient */}
          <div className="select-none mb-0 w-full flex justify-center">
            <span 
              className="text-[180px] sm:text-[250px] md:text-[380px] font-bold font-clash tracking-tight leading-[0.8] bg-gradient-to-b from-[#D6FD04] to-transparent bg-clip-text text-transparent"
            >
              404
            </span>
          </div>

          <h1 className="text-2xl sm:text-2xl md:text-[56px] leading-[1.1] font-semibold font-display text-white -mt-4 sm:-mt-8 md:-mt-14 z-10 relative">
            The page you are looking<br />for doesn't exist
          </h1>

          <p className="mt-6 text-white/80 text-[15px] sm:text-base max-w-md mx-auto z-10 relative">
            Try to use a correct url or go back to homepage to start again
          </p>

          <div className="mt-8 z-10 relative">
            <button
              onClick={() => onNavigate('home')}
              className="px-8 py-3 rounded-full bg-[#D6FD04] hover:bg-[#c5ea02] text-gray-900 text-[14px] transition-colors cursor-pointer"
            >
              Back to Home
            </button>
          </div>

        </div>
      </div>

      {/* Footer */}
      <Footer onNavigate={onNavigate} />

    </div>
  );
}
