import React from 'react';

export default function ByteSpaceLogo({ variant = 'light', className = '', onClick }) {
  // variant: 'light' (white text, lime b) or 'dark' (dark text, lime b)
  const textColor = variant === 'dark' ? 'text-gray-900' : 'text-white';

  return (
    <div 
      className={`inline-flex items-center gap-2.5 cursor-pointer select-none group ${className}`}
      onClick={onClick}
    >
      {/* Lime 'b' emblem icon matching Figma */}
      <div className="relative w-8 h-8 rounded-full bg-[#D6FD04] flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform duration-200">
        <svg 
          viewBox="0 0 24 24" 
          className="w-5 h-5 text-gray-900" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="3.2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          {/* Stylized lowercase 'b' */}
          <path d="M7 4v16" stroke="currentColor" strokeWidth="3" />
          <path d="M7 13.5a5.5 5.5 0 1 1 0 5.5v-5.5" fill="currentColor" />
        </svg>
      </div>

      <span className={`text-[21px] font-extrabold tracking-tight font-display ${textColor}`}>
        ByteSpace
      </span>
    </div>
  );
}
