import React from 'react';
import cylinderLime from '../../assets/landingpage/party/cylinder_lime.jpg';
import cylinderWhite from '../../assets/landingpage/party/cylinder_white.jpg';
import ringLime from '../../assets/landingpage/party/ring_lime.jpg';
import ringWhite from '../../assets/landingpage/party/ring_white.jpg';
import twisterLime from '../../assets/landingpage/party/twister-lime.jpg';
import twisterWhite from '../../assets/landingpage/party/twister-white.jpg';

// Flat Lime Ring (Torus replacement)
export function LimeTorus({ className = 'w-20 h-20', style }) {
  return (
    <img 
      src={ringLime} 
      alt="Lime Ring" 
      className={`${className} object-contain`} 
      style={style} 
    />
  );
}

// Flat White Ring
export function WhiteTorus({ className = 'w-20 h-20', style }) {
  return (
    <img 
      src={ringWhite} 
      alt="White Ring" 
      className={`${className} object-contain`} 
      style={style} 
    />
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
export function LimeCylinder({ className = 'w-20 h-28', style }) {
  return (
    <img 
      src={cylinderLime} 
      alt="Lime Cylinder" 
      className={`${className} object-contain`} 
      style={style} 
    />
  );
}

// Flat White Pill
export function WhiteCylinder({ className = 'w-20 h-28', style }) {
  return (
    <img 
      src={cylinderWhite} 
      alt="White Cylinder" 
      className={`${className} object-contain`} 
      style={style} 
    />
  );
}

// Flat Lime Squiggle
export function LimeScribble({ className = 'w-28 h-36', style }) {
  return (
    <img 
      src={twisterLime} 
      alt="Lime Twister" 
      className={`${className} object-contain`} 
      style={style} 
    />
  );
}

// Flat White Squiggle
export function WhiteScribble({ className = 'w-24 h-28', style }) {
  return (
    <img 
      src={twisterWhite} 
      alt="White Twister" 
      className={`${className} object-contain`} 
      style={style} 
    />
  );
}

export function WhiteCurvyScribble({ className = 'w-24 h-28', style }) {
  return <WhiteScribble className={className} style={style} />;
}

