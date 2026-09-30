import React from 'react';
import logo from '../../assets/logo.jpg';

export default function ByteSpaceLogo({
  variant = 'light',
  className = '',
  onClick,
}) {
  const textColor = variant === 'dark' ? 'text-gray-900' : 'text-white';

  return (
    <div
      className={`inline-flex items-center gap-2.5 cursor-pointer select-none group ${className}`}
      onClick={onClick}
    >
      {/* Logo image */}
      <img
        src={logo}
        alt="ByteSpace logo"
        className="w-8 h-8 object-contain group-hover:scale-105 transition-transform duration-200"
      />

      {/* ByteSpace text */}
      <span
        className={`text-[21px] font-extrabold tracking-tight font-clash ${textColor}`}
      >
        ByteSpace
      </span>
    </div>
  );
}