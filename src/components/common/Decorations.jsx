import React from 'react';

// Flat Lime Ring (Torus replacement)
export function LimeTorus({ className = 'w-20 h-20', rotate = 25 }) {
  return (
    <svg 
      className={`${className} transition-transform duration-700 hover:rotate-12`} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <ellipse cx="50" cy="50" rx="38" ry="24" stroke="#D6FD04" strokeWidth="24" />
    </svg>
  );
}

// Flat White Ring
export function WhiteTorus({ className = 'w-20 h-20', rotate = 0 }) {
  return (
    <svg 
      className={`${className} transition-transform duration-700`} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <ellipse cx="50" cy="50" rx="38" ry="24" stroke="#FFFFFF" strokeWidth="24" />
    </svg>
  );
}

// Flat Lime Triangle (Pyramid replacement)
export function LimePyramid({ className = 'w-24 h-24' }) {
  return (
    <svg 
      className={`${className} transition-transform duration-700 hover:scale-105`} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <polygon 
        points="50,15 15,85 85,85" 
        fill="#D6FD04" 
        stroke="#D6FD04" 
        strokeWidth="12" 
        strokeLinejoin="round" 
      />
    </svg>
  );
}

// Flat White Triangle
export function WhitePyramid({ className = 'w-24 h-24' }) {
  return (
    <svg 
      className={`${className} transition-transform duration-700 hover:-translate-y-1`} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <polygon 
        points="50,15 15,85 85,85" 
        fill="#FFFFFF" 
        stroke="#FFFFFF" 
        strokeWidth="12" 
        strokeLinejoin="round" 
      />
    </svg>
  );
}

// Flat Lime Pill (Cylinder replacement)
export function LimeCylinder({ className = 'w-20 h-28' }) {
  return (
    <svg 
      className={`${className} transition-transform duration-700 hover:rotate-6`} 
      viewBox="0 0 80 110" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="15" y="15" width="50" height="80" rx="25" fill="#D6FD04" />
    </svg>
  );
}

// Flat White Pill
export function WhiteCylinder({ className = 'w-20 h-28' }) {
  return (
    <svg 
      className={`${className} transition-transform duration-700`} 
      viewBox="0 0 80 110" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="15" y="15" width="50" height="80" rx="25" fill="#FFFFFF" />
    </svg>
  );
}

// Flat Lime Squiggle
export function LimeScribble({ className = 'w-28 h-36', style }) {
  return (
    <svg 
      className={className} 
      style={style}
      viewBox="-10 -10 130 160" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d="M20 20 C60 10, 95 30, 85 50 C75 70, 25 65, 30 85 C35 105, 90 95, 80 115 C70 135, 35 130, 45 135" 
        stroke="#D6FD04" 
        strokeWidth="28" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </svg>
  );
}

// Flat White Squiggle
export function WhiteScribble({ className = 'w-24 h-28', style }) {
  return (
    <svg 
      className={className} 
      style={style}
      viewBox="-10 -10 130 160" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d="M20 20 C60 10, 95 30, 85 50 C75 70, 25 65, 30 85 C35 105, 90 95, 80 115 C70 135, 35 130, 45 135" 
        stroke="#FFFFFF" 
        strokeWidth="28" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </svg>
  );
}

export function WhiteCurvyScribble({ className = 'w-24 h-28', style }) {
  return <WhiteScribble className={className} style={style} />;
}

