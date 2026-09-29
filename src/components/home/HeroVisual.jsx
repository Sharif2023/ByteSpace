import React from 'react';
import { Star } from 'lucide-react';
import heroImg from '../../assets/landingpage/hero.jpg';

export default function HeroVisual() {
  return (
    <div className="relative mt-2 sm:mt-4 max-w-5xl mx-auto flex justify-center items-end">
      {/* Huge Lime Circle Backdrop - centered on the bottom edge. Top half visible, bottom half hidden by section overflow */}
      <div className="absolute bottom-0 w-[600px] h-[600px] sm:w-[1000px] sm:h-[1000px] rounded-full bg-[#D6FD04] translate-y-1/2 -z-0" />

      {/* Student Image Cutout - scaled up and attached to the bottom edge */}
      <div className="relative z-10 w-[350px] sm:w-[680px] h-[350px] sm:h-[620px] flex items-end justify-center mb-0 mt-4 sm:mt-6">
        <img 
          src={heroImg} 
          alt="Student learning"
          className="w-full h-full object-contain object-bottom drop-shadow-2xl"
        />
      </div>

      {/* Floating Card 1: UI/UX Design (Left) */}
      <div className="absolute -left-2 sm:left-12 top-24 sm:top-40 z-20 bg-white rounded-[16px] p-4 sm:p-5 text-left shadow-[0_15px_30px_-5px_rgba(0,30,120,0.15)] animate-float-medium w-[180px] sm:w-[200px]">
        <p className="text-sm sm:text-base font-bold text-gray-900 font-display">UI/UX Design</p>
        <p className="text-[10px] sm:text-xs text-gray-500 mt-1 font-medium">20+ Courses | 50+ Students</p>
      </div>

      {/* Floating Card 2: Learning Progress (Right) */}
      <div className="absolute -right-2 sm:right-12 top-32 sm:top-56 z-20 bg-white rounded-[16px] p-4 sm:p-5 text-left shadow-[0_15px_30px_-5px_rgba(0,30,120,0.15)] animate-float-delayed-2 w-[160px] sm:w-[190px]">
        <p className="text-[11px] sm:text-xs text-gray-500 font-medium">Learning Progress</p>
        <div className="mt-1">
          <p className="text-3xl sm:text-4xl font-black text-gray-950 font-display leading-tight">55%</p>
          <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden mt-2">
            <div className="bg-[#D6FD04] h-full w-[55%] rounded-full" />
          </div>
        </div>
      </div>

      {/* Floating Card 3: Happy Students (Bottom Left) */}
      <div className="absolute bottom-20 left-0 sm:left-16 z-20 bg-white text-gray-950 rounded-[16px] p-4 sm:p-5 text-left shadow-[0_15px_30px_-5px_rgba(0,30,120,0.15)] animate-float-slow w-[220px] sm:w-[240px]">
        <p className="text-sm sm:text-[15px] font-bold font-display">Happy Students</p>
        <div className="flex items-center gap-1 text-xs sm:text-sm font-semibold text-gray-800 mt-0.5">
          <span>4.5</span>
          <span className="text-gray-500 font-medium text-[11px] sm:text-xs">(240)</span>
          <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400 inline" />
        </div>
        <div className="flex items-center mt-3 justify-between">
          <div className="flex items-center -space-x-2">
            <img className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white object-cover shadow-sm relative z-[4]" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80" alt="st" />
            <img className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white object-cover shadow-sm relative z-[3]" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80" alt="st" />
            <img className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white object-cover shadow-sm relative z-[2]" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&q=80" alt="st" />
            <img className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white object-cover shadow-sm relative z-[1]" src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=80&q=80" alt="st" />
          </div>
          <div className="ml-2 px-2.5 py-1 rounded-full bg-[#D6FD04] flex items-center justify-center">
            <span className="text-[10px] font-bold text-gray-900">2K+</span>
          </div>
        </div>
      </div>
    </div>
  );
}


