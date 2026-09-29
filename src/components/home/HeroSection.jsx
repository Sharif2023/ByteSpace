import React from 'react';
import Navbar from '../common/Navbar';
import HeroTitle from './HeroTitle';
import HeroSearch from './HeroSearch';
import HeroVisual from './HeroVisual';
import HeroDecorations from './HeroDecorations';

export default function HeroSection({ onNavigate, searchQuery, setSearchQuery }) {
  return (
    <section className="relative bytespace-grid-bg text-white pt-2 pt-6 overflow-hidden">
      {/* Navbar */}
      <Navbar activePage="home" onNavigate={onNavigate} />

      {/* 3D Decorative Floating Elements */}
      <HeroDecorations />

      {/* Hero Content Container */}
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center mt-12 sm:mt-16 z-10">
        <HeroTitle />
        <HeroSearch 
          searchQuery={searchQuery} 
          setSearchQuery={setSearchQuery} 
          onNavigate={onNavigate} 
        />
        <HeroVisual />
      </div>
    </section>
  );
}
