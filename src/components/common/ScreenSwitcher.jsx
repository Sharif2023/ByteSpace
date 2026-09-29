import React, { useState } from 'react';
import { Layers, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';

export default function ScreenSwitcher({ activePage, onNavigate }) {
  const [isOpen, setIsOpen] = useState(false);

  const screens = [
    { id: 'home', name: 'Home Landing', frame: 'Frame 1' },
    { id: 'search', name: 'Search Catalog', frame: 'Frame 7' },
    { id: 'course-details', name: 'Course Details', frame: 'Frame 6' },
    { id: 'course-lessons', name: 'Course Lessons', frame: 'Frame 5' },
    { id: 'course-reviews', name: 'Course Reviews', frame: 'Frame 4' },
    { id: 'creator', name: 'Creator Profile', frame: 'Frame 2' },
    { id: 'login', name: 'Sign In', frame: 'Frame 8' },
    { id: 'register', name: 'Register', frame: 'Frame 9' },
    { id: 'notfound', name: '404 Page', frame: 'Frame 3' },
  ];

  return (
    <aside 
      aria-label="Figma Screen Navigation"
      className="fixed bottom-5 right-5 z-50 font-sans"
    >
      <div className="bg-gray-950/90 backdrop-blur-md text-white border border-white/20 rounded-2xl shadow-2xl p-2 transition-all">
        
        {/* Header Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2.5 px-3 py-1.5 text-xs font-semibold hover:text-[#D6FD04] transition-colors cursor-pointer"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#D6FD04] animate-pulse" />
          <Layers className="w-4 h-4 text-[#D6FD04]" />
          <span>Figma Screens (9 Total)</span>
          <span className="text-[10px] text-gray-400 bg-white/10 px-2 py-0.5 rounded-full">
            {screens.find(s => s.id === activePage)?.name || 'Custom'}
          </span>
          {isOpen ? <ChevronDown className="w-3.5 h-3.5 ml-1 text-gray-400" /> : <ChevronUp className="w-3.5 h-3.5 ml-1 text-gray-400" />}
        </button>

        {/* Dropdown Menu */}
        {isOpen && (
          <div className="mt-2 pt-2 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-1.5 max-h-[70vh] overflow-y-auto p-1 min-w-[280px]">
            {screens.map((screen) => {
              const isActive = activePage === screen.id;
              return (
                <button
                  key={screen.id}
                  onClick={() => {
                    onNavigate(screen.id);
                    setIsOpen(false);
                  }}
                  className={`text-left px-3 py-2 rounded-xl text-xs flex items-center justify-between transition-colors cursor-pointer ${
                    isActive 
                      ? 'bg-[#D6FD04] text-gray-950 font-bold' 
                      : 'text-gray-300 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <span className="truncate">{screen.name}</span>
                  <span className={`text-[10px] ml-2 ${isActive ? 'text-gray-800' : 'text-gray-500'}`}>
                    {screen.frame}
                  </span>
                </button>
              );
            })}
          </div>
        )}

      </div>
    </aside>
  );
}
