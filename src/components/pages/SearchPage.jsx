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

        <div className="max-w-4xl mx-auto px-4 text-center mt-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display">
            Find Your Next Course
          </h1>

          <div className="mt-7 max-w-xl mx-auto">
            <div className="bg-white rounded-full p-2 pl-5 flex items-center shadow-xl">
              <Search className="w-5 h-5 text-gray-400 mr-3" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search courses, mentors, technologies..."
                className="w-full text-sm sm:text-base text-gray-800 placeholder-gray-400 bg-transparent outline-none"
              />
              <button 
                onClick={() => {}}
                className="px-6 py-2.5 rounded-full bg-[#D6FD04] hover:bg-[#c5ea02] text-gray-950 font-bold text-sm tracking-wide transition-colors cursor-pointer"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Catalog Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full flex-grow">
        
        {/* Category Pills Row */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-3">
          {displayCategories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                activeCategory === cat 
                  ? 'bg-[#D6FD04] text-gray-950 shadow-xs' 
                  : 'bg-white hover:bg-gray-100 text-gray-600 border border-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Filter Controls Bar matching Figma Frame 7 */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 py-4 border-y border-gray-200">
          <div className="flex flex-wrap items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-200 bg-white text-xs font-semibold text-gray-700 hover:border-gray-300">
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Filter</span>
            </button>

            <div className="relative">
              <select 
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="appearance-none px-4 py-2 pr-8 rounded-xl border border-gray-200 bg-white text-xs font-semibold text-gray-700 outline-none cursor-pointer"
              >
                <option value="All">All Levels</option>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-gray-400 absolute right-2.5 top-3 pointer-events-none" />
            </div>

            <div className="relative">
              <select 
                value={activeCategory}
                onChange={(e) => setActiveCategory(e.target.value)}
                className="appearance-none px-4 py-2 pr-8 rounded-xl border border-gray-200 bg-white text-xs font-semibold text-gray-700 outline-none cursor-pointer"
              >
                {displayCategories.map(c => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-gray-400 absolute right-2.5 top-3 pointer-events-none" />
            </div>
          </div>

          <div className="text-xs text-gray-500 font-medium">
            Showing <span className="font-bold text-gray-900">{filtered.length}</span> courses
          </div>
        </div>

        {/* Course Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map(course => (
            <CourseCard
              key={course.id}
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
        <div className="mt-14 flex items-center justify-center space-x-2">
          <button 
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
            className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-xs font-bold text-gray-600 hover:bg-gray-100 disabled:opacity-30"
          >
            &lt;
          </button>
          {[1, 2, 3].map(page => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`w-9 h-9 rounded-full text-xs font-bold transition-colors ${
                currentPage === page 
                  ? 'bg-blue-600 text-white shadow-sm' 
                  : 'border border-gray-200 text-gray-700 hover:bg-gray-100'
              }`}
            >
              {page}
            </button>
          ))}
          <button 
            onClick={() => setCurrentPage(p => p + 1)}
            className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-xs font-bold text-gray-600 hover:bg-gray-100"
          >
            &gt;
          </button>
        </div>

      </main>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}
