import React from 'react';
import { Search } from 'lucide-react';

export default function HeroSearch({ searchQuery, setSearchQuery, onNavigate }) {
  return (
    <div className="mt-8 max-w-[600px] mx-auto relative z-10">
      <div className="relative bg-white rounded-full p-1.5 pl-5 sm:pl-6 flex items-center shadow-2xl focus-within:ring-4 focus-within:ring-[#D6FD04]/40 transition-all">
        <Search className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') onNavigate('search');
          }}
          placeholder="Course, topic, creator"
          className="w-full text-sm sm:text-base text-gray-800 placeholder-gray-400 bg-transparent outline-none"
        />
        <button
          onClick={() => onNavigate('search')}
          className="px-6 sm:px-8 py-3 sm:py-3.5 rounded-full bg-[#D6FD04] hover:bg-[#c5ea02] text-gray-950 font-bold text-sm tracking-wide transition-all duration-200 cursor-pointer shadow-none flex-shrink-0"
        >
          Search
        </button>
      </div>
    </div>
  );
}
