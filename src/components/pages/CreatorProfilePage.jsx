import React, { useState } from 'react';
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';
import CourseCard from '../common/CourseCard';
import { creatorProfile, allCourses } from '../../data/mockData';
import { Filter, BarChart, Shapes, ListFilter } from 'lucide-react';

export default function CreatorProfilePage({ onNavigate, onSelectCourse }) {
  const [isFollowing, setIsFollowing] = useState(false);

  const creatorCourses = allCourses.filter(course => 
    course.creator.toLowerCase() === creatorProfile.name.toLowerCase()
  );

  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col font-sans">
      
      {/* Persian Blue Grid Header */}
      <div className="bytespace-grid-bg text-white pt-2 pb-20">
        <Navbar activePage="creator" onNavigate={onNavigate} />
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 mt-16 md:mt-24">
          
          <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8">
            <img 
              src={creatorProfile.avatar} 
              alt={creatorProfile.name}
              className="w-24 h-24 sm:w-[100px] sm:h-[100px] rounded-3xl object-cover shadow-sm"
            />
            <div>
              <div className="flex items-center gap-4 mb-2">
                <h1 className="text-3xl sm:text-[32px] font-bold text-white font-display">
                  {creatorProfile.name}
                </h1>
                <span className="bg-[#D6FD04] text-gray-900 text-xs px-3.5 py-1 rounded-full font-bold">
                  {creatorProfile.badge}
                </span>
              </div>
              <p className="text-white/80 text-[15px]">Passionate UI/UX, Web designer</p>
            </div>
          </div>

          <p className="text-white/90 text-[15px] leading-[1.8] max-w-5xl mb-12">
            Welcome to the creative world of [Creator's Name]. Here, you'll discover the passion, expertise, and inspiration that drive my creative journey. Let's explore and learn together!<br/>
            ive into my creative portfolio, showcasing a glimpse of my artistic endeavors. From digital designs to multimedia projects, each piece tells a unique story. Explore the world of creativity with me.
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <span className="bg-white text-[#003BE2] font-semibold text-[13px] px-5 py-2 rounded-full shadow-sm">
                3 Products
              </span>
              <span className="bg-white text-[#003BE2] font-semibold text-[13px] px-5 py-2 rounded-full shadow-sm">
                12 Followers
              </span>
            </div>
            
            <button 
              onClick={() => setIsFollowing(!isFollowing)}
              className="bg-[#D6FD04] text-gray-900 font-bold text-[14px] px-10 py-2.5 rounded-full hover:bg-[#c5ea02] transition-colors"
            >
              {isFollowing ? 'Following' : 'Follow'}
            </button>
          </div>
          
        </div>
      </div>

      {/* Creator Course Catalog */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 w-full flex-grow py-16">
        
        {/* Filter Controls Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-10">
          <div className="flex flex-wrap items-center gap-3">
            <button className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-200 bg-white text-[13px] font-medium text-gray-700 hover:border-gray-300 transition-colors">
              <Filter className="w-[15px] h-[15px]" />
              <span>Filter</span>
            </button>

            <button className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-200 bg-white text-[13px] font-medium text-gray-700 hover:border-gray-300 transition-colors">
              <BarChart className="w-[15px] h-[15px]" />
              <span>Level</span>
            </button>

            <button className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-200 bg-white text-[13px] font-medium text-gray-700 hover:border-gray-300 transition-colors">
              <Shapes className="w-[15px] h-[15px]" />
              <span>Category</span>
            </button>
          </div>

          <button className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-200 bg-white text-[13px] font-medium text-gray-700 hover:border-gray-300 transition-colors">
            <ListFilter className="w-[15px] h-[15px]" />
            <span>Most relevant</span>
          </button>
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
