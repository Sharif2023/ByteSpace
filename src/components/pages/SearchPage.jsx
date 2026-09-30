import React, { useState } from 'react';
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';
import CourseCard from '../common/CourseCard';
import { allCourses, categories } from '../../data/mockData';
import { Search, SlidersHorizontal, ChevronDown } from 'lucide-react';

export default function SearchPage({ onNavigate, onSelectCourse }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedLevel, setSelectedLevel] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const displayCategories = ['All', ...categories.slice(0, 10)];

  const filtered = allCourses.filter(course => {
    const matchesCat = activeCategory === 'All' || course.category === activeCategory;
    const matchesLevel = selectedLevel === 'All' || course.level === selectedLevel;
    const matchesSearch = !searchTerm || 
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.creator.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCat && matchesLevel && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#FBFBFC] text-gray-900 flex flex-col font-sans">
      
      {/* Blue Grid Hero Header matching Frame 7 */}
      <div className="bytespace-grid-bg text-white pb-16 pt-2">
        <Navbar activePage="search" onNavigate={onNavigate} />

        <div className="max-w-4xl mx-auto px-4 text-center mt-12 sm:mt-20">
          <h1 className="text-3xl sm:text-4xl md:text-[44px] font-extrabold font-display tracking-tight">
            Find Your Next Course
          </h1>

          <div className="mt-10 max-w-2xl mx-auto flex flex-col sm:flex-row items-center gap-4 justify-center">
            <div className="bg-white rounded-full py-3.5 px-6 flex items-center shadow-lg w-full sm:w-[480px]">
              <Search className="w-5 h-5 text-gray-400 mr-3" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search"
                className="w-full text-base text-gray-800 placeholder-gray-400 bg-transparent outline-none font-medium"
              />
            </div>
            <button className="bg-[#D6FD04] hover:bg-[#c5ea02] text-gray-950 px-8 py-3.5 rounded-full flex items-center gap-2 shadow-lg transition-colors cursor-pointer w-full sm:w-auto justify-center">
              <span className="font-bold text-sm">Courses</span>
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Catalog Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full flex-grow">
        
        {/* Filter Controls Row */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex flex-wrap items-center gap-4">
            <button className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-200 bg-white text-sm font-bold text-gray-700 hover:border-gray-300 transition-colors shadow-sm cursor-pointer">
              <SlidersHorizontal className="w-4 h-4 text-gray-800" />
              <span>Filter</span>
            </button>

            <button className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-200 bg-white text-sm font-bold text-gray-700 hover:border-gray-300 transition-colors shadow-sm cursor-pointer">
              <svg className="w-4 h-4 text-gray-800" fill="currentColor" viewBox="0 0 24 24"><path d="M4 18h4v2H4zm6-6h4v8h-4zm6-6h4v14h-4z"/></svg>
              <span>Level</span>
            </button>

            <button className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-200 bg-white text-sm font-bold text-gray-700 hover:border-gray-300 transition-colors shadow-sm cursor-pointer">
              <svg className="w-4 h-4 text-gray-800" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l-5.5 9h11zM6 14a5 5 0 100 10 5 5 0 000-10zm11 1.5H12v6h5v-6z"/></svg>
              <span>Category</span>
            </button>
          </div>

          <div>
            <button className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-200 bg-white text-sm font-bold text-gray-700 hover:border-gray-300 transition-colors shadow-sm cursor-pointer">
              <svg className="w-4 h-4 text-gray-800" fill="currentColor" viewBox="0 0 24 24"><path d="M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z"/></svg>
              <span>Most relevant</span>
            </button>
          </div>
        </div>

        {/* Category Pills Row */}
        <div className="flex items-center gap-3 overflow-x-auto no-scrollbar pb-3 mb-4">
          <button
            onClick={() => setActiveCategory('All')}
            className={`px-6 py-2.5 rounded-full text-xs font-bold whitespace-nowrap transition-colors cursor-pointer ${
              activeCategory === 'All' 
                ? 'bg-[#D6FD04] text-gray-950' 
                : 'bg-[#F3F4F6] text-gray-600 hover:bg-gray-200'
            }`}
          >
            Featured
          </button>
          {['Music', 'Drawing & Painting', 'Marketing', 'Animation', 'Social Media', 'UI/UX Design', 'Creative Marketing', 'Cooking'].map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full text-xs font-bold whitespace-nowrap transition-colors cursor-pointer ${
                activeCategory === cat 
                  ? 'bg-[#D6FD04] text-gray-950' 
                  : 'bg-[#F3F4F6] text-gray-600 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Course Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...filtered.slice(0, 6), ...filtered.slice(0, 6), ...filtered.slice(0, 6)].map((course, idx) => (
            <CourseCard
              key={`${course.id}-${idx}`}
              course={course}
              onSelectCourse={() => {
                if (onSelectCourse) onSelectCourse(course);
                onNavigate('course-details');
              }}
              onSelectCreator={() => onNavigate('creator')}
            />
          ))}
        </div>

        {/* Pagination matching Figma */}
        <div className="mt-14 mb-4 flex items-center justify-center space-x-8">
          <button 
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
            className="w-[52px] h-[40px] sm:w-[60px] sm:h-[48px] rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors disabled:opacity-50 cursor-pointer"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </button>
          
          <div className="flex items-center space-x-6">
            {[1, 2, 3, 4, 5].map(page => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`text-base sm:text-lg font-bold font-sans transition-colors cursor-pointer ${
                  currentPage === page 
                    ? 'text-gray-300' 
                    : 'text-gray-900 hover:text-gray-500'
                }`}
              >
                {page}
              </button>
            ))}
          </div>

          <button 
            onClick={() => setCurrentPage(p => Math.min(5, p + 1))}
            className="w-[52px] h-[40px] sm:w-[60px] sm:h-[48px] rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors cursor-pointer"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </button>
        </div>

      </main>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}
