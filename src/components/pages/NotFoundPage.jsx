import React from 'react';
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';
import { LimeTorus, LimePyramid, WhitePyramid } from '../common/Decorations';
import { ArrowLeft } from 'lucide-react';

export default function NotFoundPage({ onNavigate }) {
  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col font-sans">
      
      {/* Persian Blue Grid Section matching Frame 3 */}
      <div className="bytespace-grid-bg text-white pt-2 pb-24 sm:pb-32 relative overflow-hidden flex-grow flex flex-col justify-between">
        
        <Navbar activePage="notfound" onNavigate={onNavigate} />

        {/* 3D Shapes */}
        <div className="absolute top-28 left-12 pointer-events-none opacity-80 hidden sm:block">
          <LimeTorus className="w-20 h-20" />
        </div>
        <div className="absolute bottom-20 right-16 pointer-events-none opacity-80 hidden sm:block">
          <LimePyramid className="w-24 h-24" />
        </div>
        <div className="absolute top-40 right-28 pointer-events-none opacity-70 hidden md:block">
          <WhitePyramid className="w-16 h-16" />
        </div>

        {/* 404 Center Content */}
        <div className="max-w-2xl mx-auto px-4 text-center my-auto py-12 z-10">
          
          {/* Giant Lime 404 matching Figma */}
          <div className="relative inline-block select-none">
            <span className="text-[120px] sm:text-[180px] md:text-[220px] font-black font-display tracking-tight text-[#D6FD04] leading-none drop-shadow-2xl">
              404
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-display text-white mt-4">
            The page you are looking for doesn't exist
          </h1>

          <p className="mt-4 text-blue-100/90 text-sm sm:text-base max-w-md mx-auto">
            Try to use a correct url or go back to homepage to start again
          </p>

          <div className="mt-8">
            <button
              onClick={() => onNavigate('home')}
              className="px-8 py-3.5 rounded-full bg-[#D6FD04] hover:bg-[#c5ea02] text-gray-950 font-bold text-sm tracking-wide transition-all shadow-xl hover:scale-105 inline-flex items-center gap-2 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </button>
          </div>

        </div>

        <div />

      </div>

      {/* Footer matching Frame 3 */}
      <Footer onNavigate={onNavigate} />

    </div>
  );
}
