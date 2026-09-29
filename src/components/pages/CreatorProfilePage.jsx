import React, { useState } from 'react';
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';
import CourseCard from '../common/CourseCard';
import { creatorProfile, allCourses } from '../../data/mockData';
import { SlidersHorizontal, ChevronDown, Check, UserPlus } from 'lucide-react';

export default function CreatorProfilePage({ onNavigate, onSelectCourse }) {
  const [isFollowing, setIsFollowing] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState('All');

  const creatorCourses = allCourses.filter(course => 
    course.creator.toLowerCase() === creatorProfile.name.toLowerCase()
  );

  return (
    <div className="min-h-screen bg-[#FBFBFC] text-gray-900 flex flex-col font-sans">
      
      {/* Persian Blue Grid Header matching Frame 2 */}
      <div className="bytespace-grid-bg text-white pt-2 pb-24">
        <Navbar activePage="creator" onNavigate={onNavigate} />
      </div>

      {/* Creator Profile Card (Overlapping hero header matching Figma) */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 -mt-16 w-full z-10">
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-gray-100 flex flex-col md:flex-row items-center md:items-start gap-6 sm:gap-8 text-center md:text-left">
          
          {/* Avatar */}
          <div className="relative">
            <img 
              src={creatorProfile.avatar} 
              alt={creatorProfile.name}
              className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover border-4 border-white shadow-md"
            />
            <span className="absolute bottom-1 right-1 w-5 h-5 bg-emerald-500 rounded-full border-2 border-white" />
          </div>

          {/* Details */}
          <div className="flex-grow space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center justify-center sm:justify-start gap-2.5">
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-950 font-display">
                    {creatorProfile.name}
                  </h1>
                  <span className="bg-[#D6FD04] text-gray-950 text-xs px-2.5 py-0.5 rounded-full font-bold">
                    {creatorProfile.badge}
                  </span>
                </div>
                <p className="text-xs text-gray-500 mt-1 font-medium">Joined January 2024 • Verified Studio</p>
              </div>

              {/* Follow Button */}
              <button
                onClick={() => setIsFollowing(!isFollowing)}
                className={`px-7 py-2.5 rounded-full font-bold text-xs tracking-wider transition-all duration-200 cursor-pointer shadow-sm flex items-center justify-center gap-1.5 self-center sm:self-auto ${
                  isFollowing
                    ? 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                    : 'bg-[#D6FD04] hover:bg-[#c5ea02] text-gray-950'
                }`}
              >
                {isFollowing ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>Following</span>
                  </>
                ) : (
                  <>
                    <UserPlus className="w-3.5 h-3.5" />
                    <span>Follow</span>
                  </>
                )}
              </button>
            </div>

            {/* Bio matching Figma copy */}
            <p className="text-gray-600 text-sm leading-relaxed max-w-2xl">
              {creatorProfile.bio}
            </p>

            {/* Badges row matching Figma: 3 Products, 15 Followers */}
            <div className="pt-2 flex flex-wrap items-center justify-center sm:justify-start gap-3 text-xs">
              <span className="bg-gray-100 text-gray-700 font-semibold px-3 py-1.5 rounded-full border border-gray-200">
                {creatorCourses.length} Products
              </span>
              <span className="bg-gray-100 text-gray-700 font-semibold px-3 py-1.5 rounded-full border border-gray-200">
                15 Followers
              </span>
              <span className="bg-blue-50 text-blue-700 font-semibold px-3 py-1.5 rounded-full">
                14.5k Total Students
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* Creator Course Catalog */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full flex-grow">
        
        {/* Filter Controls Bar matching Frame 2 */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-gray-200 mb-8">
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

            <button className="px-4 py-2 rounded-xl border border-gray-200 bg-white text-xs font-semibold text-gray-700 hover:border-gray-300">
              Category
            </button>
          </div>

          <div className="text-xs text-gray-500 font-medium">
            Sort by: <span className="font-bold text-gray-900">Most relevant</span>
          </div>
        </div>

        {/* 6 Creator Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {creatorCourses.map(course => (
            <CourseCard
              key={course.id}
              course={course}
              onSelectCourse={() => {
                if (onSelectCourse) onSelectCourse(course);
                onNavigate('course-details');
              }}
              onSelectCreator={() => {}}
            />
          ))}
        </div>

      </main>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}
