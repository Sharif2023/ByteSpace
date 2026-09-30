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
          <div className="flex flex-col md:flex-row justify-between items-end gap-4 pb-6 relative z-10">
            <div className="space-y-3">
              <h1 className="text-xl sm:text-xl lg:text-3xl font-semibold font-display leading-tight">
                Build Digital Asset: A Comprehensive Guide
              </h1>
              <p className="text-lg font-medium text-white">
                Unlock the Power of Digital Creation with Expert Guidance
              </p>
              <p className="text-base text-white font-medium">
                by <span className="text-[#D6FD04]">purepearl studio</span>
              </p>
              
              <div className="flex flex-wrap items-center gap-3 pt-3">
                <div className="bg-white text-gray-900 px-4 py-1.5 rounded-full text-xs font-bold flex items-center gap-2 shadow-sm">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M4 18h4v2H4zm6-6h4v8h-4zm6-6h4v14h-4z"/></svg>
                  Intermediate
                </div>
                <div className="bg-white text-gray-900 px-4 py-1.5 rounded-full text-xs font-bold flex items-center gap-2 shadow-sm">
                  <Star className="w-3.5 h-3.5 fill-[#003BE2] text-[#003BE2]" />
                  <span>4.8 <span className="text-gray-500 font-medium">(172 reviews)</span></span>
                </div>
                <div className="bg-white text-gray-900 px-4 py-1.5 rounded-full text-xs font-bold flex items-center gap-2 shadow-sm">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                  199 Students
                </div>
              </div>
            </div>

            <button 
              onClick={() => alert('Share clicked!')}
              className="bg-[#D6FD04] hover:bg-[#c5ea02] text-gray-950 px-6 py-2 rounded-full text-sm font-bold flex items-center gap-2 shadow-sm transition-colors cursor-pointer absolute right-0 top-0 mt-4 md:mt-0"
            >
              <Share2 className="w-4 h-4" />
              Share
            </button>
          </div>
        </div>
      </div>

      {/* Main Layout Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full -mt-2">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT 8 COLUMNS: Video + Tabs + Tab Content */}
          <div className="lg:col-span-8 flex flex-col">
            
            {/* Video Player / Preview Frame */}
            <div className="relative">
              {/* Magic Blue Background extending to edges just for the video height */}
              <div className="absolute inset-y-0 right-[-50vw] left-[-50vw] bytespace-grid-bg -z-10" />
              
              <div className="bg-slate-900 rounded-3xl overflow-hidden shadow-2xl relative aspect-[16/9] flex items-center justify-center border border-white/10">
                {!isPlaying ? (
                  <>
                    <img 
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80" 
                      alt="Course Preview" 
                      className="w-full h-full object-cover opacity-85"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    
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
            </div>

            {/* Course Tabs (Pills style) */}
            <div className="bg-[#FBFBFC] pt-8 pb-4 relative z-10 flex items-center gap-3">
              {[
                { id: 'description', label: 'About' },
                { id: 'lessons', label: 'Lessons' },
                { id: 'reviews', label: 'Reviews' }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-5 py-2.5 rounded-full text-xs font-bold transition-colors cursor-pointer ${
                    activeTab === tab.id
                      ? 'bg-[#D6FD04] text-gray-950'
                      : 'bg-gray-100/80 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Main Tab Body Content */}
            <div className="py-6">
        
        {/* TAB 1: DESCRIPTION */}
        {activeTab === 'description' && (
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-bold font-display text-gray-950 mb-4">Description</h2>
              <p className="text-gray-600 leading-relaxed text-base text-justify">
                Embark on an enlightening exploration into the world of digital creation with our comprehensive course, "Build Digital Assets: A Comprehensive Guide." This transformative learning experience invites you to delve deep into the intricacies of crafting impactful digital content. From laying the groundwork with foundational concepts to mastering advanced techniques, this guide is meticulously curated to empower you with the skills essential for navigating the dynamic landscape of digital asset creation.
              </p>
              <p className="text-gray-600 leading-relaxed text-base text-justify mt-5">
                In the initial modules, you'll establish a solid foundation by immersing yourself in the foundational concepts that form the backbone of digital asset creation. Understand the fundamental elements that constitute compelling digital content and gain proficiency in leveraging these elements to communicate effectively in the digital realm.
              </p>
              <p className="text-gray-600 leading-relaxed text-base text-justify mt-5">
                As you progress through the course, you'll ascend to higher levels of expertise, delving into the nuances of design principles that drive impactful creations. Uncover the secrets behind effective visual communication, exploring color theory, typography, and layout strategies that elevate your digital assets to new heights. Engage in hands-on exercises that reinforce your understanding, allowing you to apply these principles in practical scenarios.
              </p>
            </div>

            {/* Sneak Peak section */}
            <div>
              <h3 className="text-lg font-bold font-display text-gray-950 mb-4">Sneak Peak</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <img src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=300&q=80" alt="Sneak peak 1" className="rounded-2xl w-full h-24 object-cover" />
                <img src="https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=300&q=80" alt="Sneak peak 2" className="rounded-2xl w-full h-24 object-cover" />
                <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=300&q=80" alt="Sneak peak 3" className="rounded-2xl w-full h-24 object-cover" />
                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=300&q=80" alt="Sneak peak 4" className="rounded-2xl w-full h-24 object-cover" />
              </div>
            </div>

            {/* Key Points List */}
            <div>
              <h3 className="text-lg font-bold font-display text-gray-950 mb-4">Key Points</h3>
              <div className="space-y-4">
                {[
                  "Foundational Concepts",
                  "Design Principles Mastery",
                  "Advanced Techniques in Digital Creation",
                  "Project Showcase and Critique",
                  "Optimizing for Various Platforms",
                  "Digital Asset Management Best Practices",
                  "Monetization Strategies",
                  "Capstone Project: Building Your Portfolio"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <svg width="24" height="24" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                      <circle cx="14" cy="14" r="14" fill="#003BE2" />
                      <path d="M8 14L12.5 18.5L20 9.5" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-[13px] font-medium text-gray-500">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: COURSE LESSONS */}
        {activeTab === 'lessons' && (
          <div className="space-y-10">
            <div>
              <h2 className="text-[22px] font-bold font-display text-gray-950 mb-4">Explore the Modules</h2>
              <p className="text-gray-600 text-base leading-relaxed text-justify">
                Immerse yourself in the course content as we break down each module into comprehensive lessons, providing practical insights and hands-on experiences.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold font-display text-gray-950 mb-6">Lesson List</h3>
              <div className="space-y-6">
                {[
                  {
                    title: "Module 1: Introduction to Digital Assets",
                    desc: "Lay the groundwork with lessons like 'Understanding Digital Elements' and 'Navigating Design Software Tools.' Dive into the essentials of digital asset creation."
                  },
                  {
                    title: "Module 2: Design Principles for Impact",
                    desc: "Master the principles that drive impactful designs with lessons such as 'Color Theory in Digital Design' and 'Typography Essentials.' Elevate your visual communication skills."
                  },
                  {
                    title: "Module 4: User-Centric Design Strategies",
                    desc: "Understand 'Design Thinking in Digital Creation' and delve into 'User Experience (UX) Essentials.' Craft digital assets with a focus on user-centric design."
                  },
                  {
                    title: "Module 5: Interactive Media and Engagement",
                    desc: "Engage your audience with lessons like 'Creating Interactive Presentations' and 'Integrating Multimedia Elements.' Master the art of creating immersive digital experiences."
                  },
                  {
                    title: "Module 6: Project Showcase and Critique",
                    desc: "Perfect your presentation skills with 'Effective Presentation Techniques' and embrace collaboration with 'Peer Critique and Collaboration.' Showcase your work with confidence."
                  },
                  {
                    title: "Module 7: Optimizing Digital Assets for Various Platforms",
                    desc: "Adapt your digital creations for 'Mobile Platforms' and optimize for 'Social Media.' Ensure widespread accessibility and engagement across diverse digital landscapes."
                  }
                ].map((mod, idx) => (
                  <div key={idx} className="flex gap-5">
                    <div className="w-[60px] h-[60px] rounded-[20px] bg-[#D6FD04] flex items-center justify-center flex-shrink-0">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-900 w-6 h-6">
                        <path d="M23 7l-7 5 7 5V7z" />
                        <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-[16px] font-semibold text-gray-900 mb-1.5">{mod.title}</h4>
                      <p className="text-sm text-gray-500 leading-relaxed pr-0 md:pr-4">{mod.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-[20px] font-bold font-display text-gray-950 mb-4">Lesson Content</h3>
              <p className="text-gray-600 text-base leading-relaxed text-justify">
                Engage with each lesson through captivating video content, detailed textual explanations, and interactive elements. Download resources, complete assignments, and test your understanding with quizzes.
              </p>
            </div>

            <div>
              <h3 className="text-[20px] font-bold font-display text-gray-950 mb-4">Lesson Progress Tracking</h3>
              <p className="text-gray-600 text-base leading-relaxed text-justify mb-8">
                Witness your growth as you complete lessons, with an intuitive progress tracking feature guiding you through your learning journey.
              </p>
              
              {/* Progress Card */}
              <div className="border border-gray-200 rounded-xl p-6 sm:p-7 shadow-sm w-full">
                <p className="text-[13px] text-gray-900 font-medium mb-1">Learning Progress</p>
                <p className="text-[32px] font-bold font-display text-gray-950 mb-3 leading-none">55%</p>
                <div className="w-full bg-gray-100 h-[6px] rounded-full overflow-hidden mt-6">
                  <div className="bg-[#D6FD04] h-full rounded-full w-[55%]"></div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: REVIEWS */}
        {activeTab === 'reviews' && (
          <div className="space-y-8">
            
            {/* Header Section */}
            <div>
              <h2 className="text-[22px] font-bold font-display text-gray-950 mb-4">What Learners Are Saying</h2>
              <p className="text-gray-600 text-base leading-relaxed text-justify">
                Discover what our learners have to say about their experience with 'Build Digital Assets: A Comprehensive Guide.' Read reviews and ratings from individuals who have embarked on the transformative journey of mastering digital asset creation.
              </p>
            </div>

            {/* Reviews Summary Box */}
            <div className="border border-gray-200 rounded-[24px] p-6 sm:p-8 flex flex-col md:flex-row gap-8 items-center max-w-3xl">
              
              {/* Left Score Box */}
              <div className="w-[140px] h-[140px] bg-[#D6FD04] rounded-2xl flex flex-col items-center justify-center flex-shrink-0">
                <span className="text-[15px] font-medium text-gray-900 mb-1">Ratings</span>
                <span className="text-[42px] font-bold font-display text-gray-950 leading-none">4.7</span>
              </div>

              {/* Right Bars */}
              <div className="flex-grow space-y-3 w-full">
                {[
                  { star: 5, pct: 85, count: 720 },
                  { star: 4, pct: 25, count: 120 },
                  { star: 3, pct: 5, count: 21 },
                  { star: 2, pct: 3, count: 12 },
                  { star: 1, pct: 3, count: 16 }
                ].map((row) => (
                  <div key={row.star} className="flex items-center gap-4">
                    <div className="flex-grow bg-gray-200 h-[6px] rounded-full overflow-hidden">
                      <div 
                        className="bg-[#D6FD04] h-full rounded-full" 
                        style={{ width: `${row.pct}%` }} 
                      />
                    </div>
                    <div className="flex items-center gap-1 w-24">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-[14px] h-[14px] ${i < row.star ? 'fill-gray-700 text-gray-700' : 'fill-gray-300 text-gray-300'}`} 
                        />
                      ))}
                    </div>
                    <span className="w-8 text-right text-[13px] text-gray-500 font-medium">{row.count}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Individual Reviews Section */}
            <div className="space-y-6 pt-4">
              <h3 className="text-[18px] font-bold font-display text-gray-950">Individual Reviews:</h3>
              
              {/* Filters */}
              <div className="flex flex-wrap items-center gap-3">
                <button className="px-5 py-2 rounded-full bg-[#D6FD04] text-[13px] font-bold text-gray-900">
                  All rating
                </button>
                {[5, 4, 3, 2, 1].map(num => (
                  <button key={num} className="px-5 py-2 rounded-full bg-gray-100 hover:bg-gray-200 text-[13px] font-medium text-gray-600 flex items-center gap-1.5 transition-colors">
                    <Star className="w-3.5 h-3.5 fill-gray-500 text-gray-500" />
                    {num}
                  </button>
                ))}
              </div>

              {/* Review Cards */}
              <div className="space-y-5">
                {[
                  {
                    id: 1,
                    name: "PurePearl Studio",
                    title: "UI/UX Designer",
                    avatar: creatorProfile.avatar,
                    date: "a year ago",
                    rating: 5,
                    content: "The course provided me with a comprehensive understanding of digital asset creation. The lessons were in-depth, practical, and immediately applicable to my work. Highly recommended!"
                  },
                  {
                    id: 2,
                    name: "Albert Flores",
                    title: "UI/UX Designer",
                    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                    date: "a year ago",
                    rating: 5,
                    content: "This course transformed my approach to digital design. The combination of theory, hands-on exercises, and real-world applications made it a truly enriching experience. Excited to implement what I've learned!"
                  },
                  {
                    id: 3,
                    name: "Cody Fisher",
                    title: "UI/UX Designer",
                    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                    date: "a year ago",
                    rating: 5,
                    content: "The project showcase and critique module created a collaborative environment where I could showcase my work, receive valuable feedback, and refine my skills. It added a unique and valuable dimension to the learning process."
                  },
                  {
                    id: 4,
                    name: "Brooklyn Simmons",
                    title: "UI/UX Designer",
                    avatar: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                    date: "a year ago",
                    rating: 5,
                    content: "The lessons on optimizing digital assets for various platforms were particularly insightful. The course adapts to the evolving digital landscape, and the engaging content kept me motivated throughout."
                  }
                ].map(rev => (
                  <div key={rev.id} className="border border-gray-200 rounded-[20px] p-8 shadow-sm">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <img 
                          src={rev.avatar} 
                          alt={rev.name} 
                          className="w-11 h-11 rounded-full object-cover"
                        />
                        <div>
                          <h4 className="text-[15px] font-semibold text-gray-900">{rev.name}</h4>
                          <p className="text-[13px] text-gray-500">{rev.title}</p>
                        </div>
                      </div>
                      <span className="text-[13px] text-gray-400 font-medium pt-1">{rev.date}</span>
                    </div>

                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-[18px] h-[18px] fill-gray-700 text-gray-700" />
                      ))}
                    </div>

                    <p className="text-gray-600 text-[14.5px] leading-relaxed">
                      {rev.content}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
      
    {/* RIGHT 4 COLUMNS: Sticky Purchase Card */}
    <div className="lg:col-span-4 sticky top-8 self-start z-20">
      <div className="bg-white rounded-3xl p-7 text-gray-900 shadow-2xl space-y-6 border border-gray-100">
          <div>
            <h3 className="text-lg font-bold text-gray-900 font-display">112 Lessons <span className="text-gray-500 font-medium">(24 hours)</span></h3>
            
            <div className="mt-4 space-y-3 text-[13px] text-gray-800 font-medium">
              <div className="flex items-start justify-between">
                <span className="flex gap-2">
                  <span className="text-gray-400">01</span>
                  <span className="leading-tight">Introduction to Digital<br/>Assets</span>
                </span>
                <span className="text-blue-500 font-medium whitespace-nowrap">12 mins</span>
              </div>
              <div className="flex items-start justify-between">
                <span className="flex gap-2">
                  <span className="text-gray-400">02</span>
                  <span className="leading-tight">Design Principles for<br/>Impacts</span>
                </span>
                <span className="text-blue-500 font-medium whitespace-nowrap">21 mins</span>
              </div>
              <div className="flex items-start justify-between">
                <span className="flex gap-2">
                  <span className="text-gray-400">03</span>
                  <span className="leading-tight">Advanced Techniques in<br/>Digital Creation</span>
                </span>
                <span className="text-blue-500 font-medium whitespace-nowrap">16 mins</span>
              </div>
            </div>
            <p className="text-xs text-gray-400 mt-3 font-medium">99 more videos</p>
          </div>

          <div className="pt-2">
            <p className="text-xs text-gray-500 font-medium mb-3">Ready to Dive In? Enroll Now and Start<br/>Building Your Digital Future!</p>
            <div className="flex items-baseline mb-4">
              <span className="text-[32px] font-black text-[#003BE2] font-display leading-none">$25</span>
              <span className="text-xs text-gray-400 ml-1 font-medium">/lifetime</span>
            </div>
            
            <button
              onClick={() => setEnrolled(!enrolled)}
              className={`w-full py-3.5 rounded-full font-bold text-sm tracking-wide transition-all cursor-pointer ${
                enrolled 
                  ? 'bg-emerald-500 text-white' 
                  : 'bg-[#D6FD04] hover:bg-[#c5ea02] text-gray-950 hover:scale-[1.02]'
              }`}
            >
              {enrolled ? 'Enrolled! Access Course' : 'Enroll Now'}
            </button>
          </div>

          <div className="pt-2">
            <p className="font-bold text-gray-900 text-[15px] mb-4">This course include</p>
            <div className="space-y-3.5 text-xs text-gray-600 font-medium">
              <div className="flex items-center gap-3">
                <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" /></svg>
                <span>Learning Resources</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                <span>Quality Lesson Videos</span>
              </div>
              <div className="flex items-center gap-3">
                <Award className="w-4 h-4 text-blue-600" />
                <span>Certificate of Completion</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" /></svg>
                <span>Private Consultation</span>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-gray-100">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src={creatorProfile.avatar} 
                alt={creatorProfile.name} 
                className="w-[42px] h-[42px] rounded-full object-cover"
              />
              <div>
                <h4 className="text-[13px] font-bold text-gray-900">PurePearl Studio</h4>
                <p className="text-[11px] text-gray-500 font-medium">Professional Creator</p>
              </div>
            </div>

            <p className="text-xs text-gray-500 font-medium mb-4">Ready to Dive In? Enroll Now and Start<br/>Building Your Digital Future!</p>
            
            <button 
              onClick={() => onNavigate('creator')}
              className="px-6 py-2 rounded-full border border-gray-200 text-xs font-bold text-gray-700 hover:bg-gray-50 transition-colors cursor-pointer"
            >
              See Full Profile
            </button>
          </div>
          </div>
        </div>
      </div>
      
      </div>
      <Footer onNavigate={onNavigate} />
    </div>
  );
}
