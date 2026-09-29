import React, { useState } from 'react';
import ByteSpaceLogo from './ByteSpaceLogo';
import { ShoppingBag, Menu, X } from 'lucide-react';

export default function Navbar({ activePage = 'home', onNavigate, cartCount = 1 }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'search', label: 'Courses' },
    { id: 'creator', label: 'Creators' }
  ];

  return (
    <header className="relative w-full z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="flex items-center justify-between relative">
          
          {/* ByteSpace Logo */}
          <div className="flex-shrink-0">
            <ByteSpaceLogo 
              variant="light" 
              onClick={() => {
                if (onNavigate) onNavigate('home');
              }} 
            />
          </div>

          {/* Desktop Navigation Links - Centered */}
          <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center space-x-12">
            {navLinks.map((link) => {
              const isActive = activePage === link.id || (link.id === 'search' && activePage === 'course-details');
              return (
                <button
                  key={link.id}
                  onClick={() => onNavigate && onNavigate(link.id)}
                  className={`text-[15px] font-medium transition-colors duration-150 py-1 ${
                    isActive 
                      ? 'text-[#D6FD04]' 
                      : 'text-white/90 hover:text-white'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center space-x-6 justify-end flex-shrink-0">
            <button
              onClick={() => onNavigate && onNavigate('login')}
              className="text-[15px] font-medium text-white hover:text-[#D6FD04] transition-colors cursor-pointer"
            >
              Sign In
            </button>

            <button
              onClick={() => onNavigate && onNavigate('register')}
              className="text-[15px] font-medium text-white hover:text-[#D6FD04] transition-colors cursor-pointer"
            >
              Join Us
            </button>

            {/* Cart Icon without badge */}
            <button 
              onClick={() => onNavigate && onNavigate('course-details')}
              className="p-2 text-white hover:text-[#D6FD04] transition-colors cursor-pointer"
              title="View Cart / Course"
            >
              <ShoppingBag className="w-5 h-5 stroke-[2]" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-3">
            <button 
              onClick={() => onNavigate && onNavigate('course-details')}
              className="p-2 text-white"
            >
              <ShoppingBag className="w-5 h-5" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white hover:text-[#D6FD04]"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 pt-2 border-t border-white/10 bg-blue-900/95 backdrop-blur-md rounded-2xl px-5 space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  onNavigate && onNavigate(link.id);
                  setMobileMenuOpen(false);
                }}
                className="block w-full text-left py-2 text-base font-medium text-white hover:text-[#D6FD04]"
              >
                {link.label}
              </button>
            ))}
            <div className="pt-3 border-t border-white/15 flex flex-col space-y-2">
              <button
                onClick={() => {
                  onNavigate && onNavigate('login');
                  setMobileMenuOpen(false);
                }}
                className="w-full py-2.5 rounded-full text-center text-white font-medium bg-white/10 hover:bg-white/20"
              >
                Sign In
              </button>
              <button
                onClick={() => {
                  onNavigate && onNavigate('register');
                  setMobileMenuOpen(false);
                }}
                className="w-full py-2.5 rounded-full text-center bg-[#D6FD04] text-gray-950 font-bold hover:bg-[#c5ea02]"
              >
                Join Us
              </button>
            </div>
          </div>
        )}

      </div>
    </header>
  );
}
