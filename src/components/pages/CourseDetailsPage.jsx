import React, { useState } from 'react';
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';
import { courseCurriculum, reviewsData, creatorProfile } from '../../data/mockData';
import { 
  Play, 
  CheckCircle2, 
  Clock, 
  FileText, 
  Award, 
  Smartphone, 
  Star, 
  Lock, 
  Unlock,
  ChevronRight,
  Share2,
  Bookmark
} from 'lucide-react';

export default function CourseDetailsPage({ initialTab = 'description', onNavigate }) {
  const [activeTab, setActiveTab] = useState(initialTab);
  const [isPlaying, setIsPlaying] = useState(false);
  const [enrolled, setEnrolled] = useState(false);
  const [activeLessonId, setActiveLessonId] = useState(1);

  return (
    <div className="min-h-screen bg-[#FBFBFC] text-gray-900 flex flex-col font-sans">
      
      {/* Course Top Header (Persian Blue Grid matching Frames 4, 5, 6) */}
      <div className="bytespace-grid-bg text-white pt-2 pb-16">
        <Navbar activePage="course-details" onNavigate={onNavigate} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
          
          {/* Header Info */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6">
            <div>
              <div className="flex items-center gap-2 text-xs text-blue-200 mb-2">
                <span>Courses</span>
                <span>/</span>
                <span>Crafts & Design</span>
                <span>/</span>
                <span className="text-[#D6FD04] font-semibold">Build Digital Asset</span>
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-display leading-tight">
                Build Digital Asset: A Comprehensive Guide
              </h1>
              <p className="mt-2 text-blue-100 text-sm sm:text-base font-normal">
                Master the Power of Digital Creation with Expert Guidance
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button 
                onClick={() => alert('Link copied to clipboard!')}
                className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                title="Share"
              >
                <Share2 className="w-4 h-4" />
              </button>
              <button 
                className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                title="Bookmark"
              >
                <Bookmark className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Main Hero Grid: Video Preview (Left) + Purchase Card (Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mt-4">
            
            {/* Left 8 Columns: Video Player / Preview Frame */}
            <div className="lg:col-span-8 bg-slate-900 rounded-3xl overflow-hidden shadow-2xl relative aspect-[16/9] flex items-center justify-center border border-white/10">
              
              {!isPlaying ? (
                <>
                  <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80" 
                    alt="Course Preview" 
                    className="w-full h-full object-cover opacity-85"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Play Button */}
                  <button 
                    onClick={() => setIsPlaying(true)}
                    className="absolute w-20 h-20 rounded-full bg-[#D6FD04] text-gray-950 flex items-center justify-center shadow-2xl hover:scale-110 transition-transform cursor-pointer"
                  >
                    <Play className="w-8 h-8 fill-gray-950 translate-x-0.5" />
                  </button>

                  <div className="absolute bottom-6 left-6 text-white text-sm font-semibold flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Click to Preview Course Intro (Free Lesson)</span>
                  </div>
                </>
              ) : (
                <div className="w-full h-full bg-black flex flex-col items-center justify-center text-white p-6">
                  <div className="text-center space-y-3">
                    <p className="text-[#D6FD04] font-semibold text-sm">Now Playing Free Preview</p>
                    <h3 className="text-xl font-bold font-display">Lesson 01: Introduction to Digital Assets</h3>
                    <p className="text-xs text-gray-400">Length: 12 minutes 40 seconds</p>
                    <div className="pt-4 flex justify-center gap-4">
                      <button 
                        onClick={() => setIsPlaying(false)}
                        className="px-5 py-2 rounded-full bg-white/20 text-xs font-semibold hover:bg-white/30"
                      >
                        Close Preview
                      </button>
                      <button 
                        onClick={() => setEnrolled(true)}
                        className="px-6 py-2 rounded-full bg-[#D6FD04] text-gray-950 text-xs font-bold hover:bg-[#c5ea02]"
                      >
                        Enroll to Unlock All
                      </button>
                    </div>
                  </div>
                </div>
              )}

            </div>

            {/* Right 4 Columns: Sticky Purchase & Curriculum Summary Card matching Figma */}
            <div className="lg:col-span-4 bg-white rounded-3xl p-6 text-gray-900 shadow-2xl border border-gray-100 space-y-6">
              
              <div>
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-gray-900 font-display">18 Lessons (24 hours)</h3>
                  <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full">Self-Paced</span>
                </div>

                {/* Lesson fast overview */}
                <div className="mt-3 space-y-2 text-xs text-gray-600">
                  <div className="flex items-center justify-between p-2 rounded-lg bg-gray-50">
                    <span className="truncate pr-2 font-medium">01 Introduction to Digital Assets</span>
                    <span className="text-gray-400 flex-shrink-0">12m</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-lg bg-gray-50">
                    <span className="truncate pr-2 font-medium">02 Design Principles for Assets</span>
                    <span className="text-gray-400 flex-shrink-0">34m</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-lg bg-gray-50">
                    <span className="truncate pr-2 font-medium">03 Advanced Creation Techniques</span>
                    <span className="text-gray-400 flex-shrink-0">45m</span>
                  </div>
                </div>
              </div>

              {/* Price Row */}
              <div className="pt-2 border-t border-gray-100 flex items-baseline justify-between">
                <div>
                  <span className="text-3xl font-extrabold text-[#003BE2] font-display">$25</span>
                  <span className="text-xs text-gray-400 ml-1">/lifetime</span>
                </div>
                <div className="text-xs text-emerald-600 font-semibold bg-emerald-50 px-2.5 py-1 rounded-full">
                  Save 60%
                </div>
              </div>

              {/* Action Button matching Figma Lime Pill */}
              <button
                onClick={() => setEnrolled(!enrolled)}
                className={`w-full py-3.5 rounded-full font-bold text-sm tracking-wide transition-all shadow-md cursor-pointer ${
                  enrolled 
                    ? 'bg-emerald-500 text-white' 
                    : 'bg-[#D6FD04] hover:bg-[#c5ea02] text-gray-950 hover:scale-[1.02]'
                }`}
              >
                {enrolled ? 'Enrolled! Access Course' : 'Enroll Now'}
              </button>

              {/* This Course Includes matching Figma */}
              <div className="space-y-3 pt-2 text-xs text-gray-600">
                <p className="font-bold text-gray-900 text-xs uppercase tracking-wider">This course includes:</p>
                <div className="flex items-center gap-2.5">
                  <Play className="w-4 h-4 text-blue-600" />
                  <span>24 hours on-demand video</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <FileText className="w-4 h-4 text-blue-600" />
                  <span>12 downloadable resources & Figma files</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Award className="w-4 h-4 text-blue-600" />
                  <span>Certificate of completion</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-blue-600" />
                  <span>Full lifetime access</span>
                </div>
              </div>

              {/* Creator Snapshot Card matching Figma */}
              <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img 
                    src={creatorProfile.avatar} 
                    alt={creatorProfile.name} 
                    className="w-10 h-10 rounded-full object-cover border border-gray-200"
                  />
                  <div>
                    <h4 className="text-xs font-bold text-gray-900">{creatorProfile.name}</h4>
                    <p className="text-[11px] text-gray-500">14.5k Students • 4.8 Rating</p>
                  </div>
                </div>

                <button 
                  onClick={() => onNavigate('creator')}
                  className="text-xs text-blue-600 font-bold hover:underline"
                >
                  See Profile
                </button>
              </div>

            </div>

          </div>

        </div>
      </div>

      {/* Course Tabs (Description / Lessons / Reviews) */}
      <div className="sticky top-0 bg-white border-b border-gray-200 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center space-x-8">
          {[
            { id: 'description', label: 'Description' },
            { id: 'lessons', label: 'Course Lessons' },
            { id: 'reviews', label: 'Reviews' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-4 text-sm font-bold border-b-2 transition-all cursor-pointer ${
                activeTab === tab.id
                  ? 'border-[#003BE2] text-[#003BE2]'
                  : 'border-transparent text-gray-500 hover:text-gray-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Tab Body Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full flex-grow">
        
        {/* TAB 1: DESCRIPTION (Course Details Frame 6) */}
        {activeTab === 'description' && (
          <div className="max-w-4xl space-y-10">
            <div>
              <h2 className="text-2xl font-bold font-display text-gray-950 mb-4">About this Course</h2>
              <p className="text-gray-600 leading-relaxed text-base">
                Welcome to <span className="font-semibold text-gray-900">Build Digital Asset: A Comprehensive Guide</span>. This masterclass is designed for creators, designers, and entrepreneurs who want to transform their technical skills into profitable, high-impact digital products. From icon sets and UI components to full-fledged 3D systems and design templates, you will learn the exact workflows used by top studio agencies.
              </p>
              <p className="text-gray-600 leading-relaxed text-base mt-4">
                We dive into customer research, asset architecture, production pipelines, licensing legality, and storefront distribution across global marketplaces including ByteSpace.
              </p>
            </div>

            {/* Key Topics List */}
            <div>
              <h3 className="text-lg font-bold font-display text-gray-950 mb-4">What You'll Learn</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {[
                  "Figma to production component structuring",
                  "Creating scalable 3D digital elements with clean geometry",
                  "Designing responsive icon libraries & glyph systems",
                  "Asset packaging, documentation, and licensing models",
                  "Optimizing products for conversion & marketplace SEO",
                  "Automating version releases and student feedback"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-white p-3.5 rounded-2xl border border-gray-100 shadow-xs">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-medium text-gray-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Instructor Bio */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-sm flex flex-col sm:flex-row items-center gap-6">
              <img 
                src={creatorProfile.avatar} 
                alt={creatorProfile.name} 
                className="w-20 h-20 rounded-full object-cover border-2 border-gray-200"
              />
              <div className="space-y-2 text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-2">
                  <h4 className="font-bold text-gray-900 text-lg font-display">{creatorProfile.name}</h4>
                  <span className="bg-[#D6FD04] text-gray-950 text-xs px-2.5 py-0.5 rounded-full font-bold">Creator</span>
                </div>
                <p className="text-xs text-gray-500 font-medium">Design Director & Digital Asset Architect • 14,500+ Students Worldwide</p>
                <p className="text-xs text-gray-600 leading-relaxed max-w-xl">
                  {creatorProfile.bio}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: COURSE LESSONS (Curriculum Frame 5) */}
        {activeTab === 'lessons' && (
          <div className="max-w-4xl space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-3xl border border-gray-100 shadow-xs">
              <div>
                <h2 className="text-xl font-bold font-display text-gray-950">Curriculum & Modules</h2>
                <p className="text-xs text-gray-500 mt-1">10 total modules • 24 hours of comprehensive lessons</p>
              </div>

              {/* Progress Tracker */}
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <p className="text-xs text-gray-400 font-medium">Completed</p>
                  <p className="text-lg font-black text-gray-950 font-display">2 / 10 Lessons (20%)</p>
                </div>
                <div className="w-24 bg-gray-100 h-2.5 rounded-full overflow-hidden">
                  <div className="bg-[#D6FD04] h-full w-[20%] rounded-full" />
                </div>
              </div>
            </div>

            {/* Curriculum Sections Accordion matching Frame 5 */}
            <div className="space-y-6">
              {courseCurriculum.map((section, sIdx) => (
                <div key={sIdx} className="bg-white rounded-3xl border border-gray-100 shadow-xs overflow-hidden">
                  <div className="bg-gray-50/80 px-6 py-4 border-b border-gray-100 flex items-center justify-between">
                    <h3 className="text-sm font-bold text-gray-900 font-display">{section.section}</h3>
                    <span className="text-xs text-gray-500 font-medium">{section.lessons.length} Lessons</span>
                  </div>

                  <div className="divide-y divide-gray-100">
                    {section.lessons.map(lesson => {
                      const isActive = activeLessonId === lesson.id;
                      return (
                        <div
                          key={lesson.id}
                          onClick={() => {
                            setActiveLessonId(lesson.id);
                            if (lesson.isFree || enrolled) setIsPlaying(true);
                          }}
                          className={`p-4 px-6 flex items-center justify-between hover:bg-blue-50/40 transition-colors cursor-pointer ${
                            isActive ? 'bg-blue-50/30' : ''
                          }`}
                        >
                          <div className="flex items-center gap-3.5">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs ${
                              lesson.completed 
                                ? 'bg-emerald-100 text-emerald-700' 
                                : lesson.isFree || enrolled
                                  ? 'bg-[#003BE2]/10 text-[#003BE2]'
                                  : 'bg-gray-100 text-gray-400'
                            }`}>
                              {lesson.completed ? (
                                <CheckCircle2 className="w-4 h-4" />
                              ) : lesson.isFree || enrolled ? (
                                <Play className="w-3.5 h-3.5 fill-current" />
                              ) : (
                                <Lock className="w-3.5 h-3.5" />
                              )}
                            </div>

                            <div>
                              <p className={`text-sm font-semibold ${isActive ? 'text-blue-700 font-bold' : 'text-gray-900'}`}>
                                {lesson.title}
                              </p>
                              <p className="text-[11px] text-gray-400">{lesson.duration}</p>
                            </div>
                          </div>

                          <div className="flex items-center gap-3">
                            {lesson.isFree && !enrolled && (
                              <span className="text-[10px] uppercase font-bold bg-[#D6FD04] text-gray-950 px-2 py-0.5 rounded-full">
                                Free Preview
                              </span>
                            )}
                            <ChevronRight className="w-4 h-4 text-gray-400" />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: REVIEWS (Course Reviews Frame 4) */}
        {activeTab === 'reviews' && (
          <div className="max-w-4xl space-y-10">
            
            {/* Reviews Summary Box matching Frame 4 */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-xs grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              {/* Overall Score */}
              <div className="md:col-span-4 text-center border-b md:border-b-0 md:border-r border-gray-100 pb-6 md:pb-0 md:pr-6">
                <span className="text-5xl font-black text-gray-950 font-display">4.7</span>
                <div className="flex items-center justify-center gap-1 my-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-xs text-gray-500 font-medium">Based on 189 student reviews</p>
              </div>

              {/* Star Breakdown Bars matching Frame 4 */}
              <div className="md:col-span-8 space-y-2 text-xs">
                {[
                  { star: 5, pct: 82, count: 155 },
                  { star: 4, pct: 12, count: 23 },
                  { star: 3, pct: 4, count: 8 },
                  { star: 2, pct: 1, count: 2 },
                  { star: 1, pct: 1, count: 1 }
                ].map((row) => (
                  <div key={row.star} className="flex items-center gap-3">
                    <span className="w-8 text-gray-600 font-semibold">{row.star} ★</span>
                    <div className="flex-grow bg-gray-100 h-2 rounded-full overflow-hidden">
                      <div 
                        className="bg-[#D6FD04] h-full rounded-full" 
                        style={{ width: `${row.pct}%` }} 
                      />
                    </div>
                    <span className="w-8 text-right text-gray-400 font-medium">{row.pct}%</span>
                  </div>
                ))}
              </div>

            </div>

            {/* Individual Reviews List matching Frame 4 */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold font-display text-gray-950">Student Feedback</h3>
              
              {reviewsData.map(rev => (
                <div key={rev.id} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-xs space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img 
                        src={rev.avatar} 
                        alt={rev.name} 
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div>
                        <h4 className="text-sm font-bold text-gray-900">{rev.name}</h4>
                        <span className="text-[11px] text-gray-400">{rev.date}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-0.5">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>

                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    "{rev.content}"
                  </p>
                </div>
              ))}
            </div>

          </div>
        )}

      </main>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}
