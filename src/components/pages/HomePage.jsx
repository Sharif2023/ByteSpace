import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';
import CourseCard from '../common/CourseCard';
import { 
  LimeTorus, 
  LimePyramid, 
  WhitePyramid, 
  LimeCylinder, 
  WhiteCylinder, 
  LimeScribble, 
  WhiteScribble 
} from '../common/Decorations';
import { categories, allCourses, communityTestimonials } from '../../data/mockData';
import { 
  Search, Star, CheckCircle, ArrowRight, TrendingUp, Users, BookOpen,
  PenTool, Code, Laptop, Building2, Megaphone, Camera
} from 'lucide-react';
import HeroSection from '../home/HeroSection';

// Assets
import heroImg from '../../assets/landingpage/hero.jpg';
import girlImg from '../../assets/landingpage/yourpathtopro/girl.png';

const shapeVariants = {
  hidden: { opacity: 0, scale: 0.5, y: 50, rotate: -15 },
  visible: (custom) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    rotate: 0,
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 70,
      delay: custom * 0.15,
      duration: 0.8
    }
  })
};

export default function HomePage({ onNavigate, onSelectCourse }) {
  const [selectedCategory, setSelectedCategory] = useState('Featured');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter courses based on selected category or search
  const filteredCourses = allCourses.filter((course) => {
    const matchesCategory = selectedCategory === 'Featured' || course.category === selectedCategory;
    const matchesQuery = !searchQuery || 
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      course.creator.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  }).slice(0, 6);

  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col font-sans overflow-hidden">
      
      {/* ============================================================== */}
      {/* 1. HERO SECTION */}
      {/* ============================================================== */}
      <HeroSection onNavigate={onNavigate} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      {/* ============================================================== */}
      {/* 1.5. LOGO BAR SECTION */}
      {/* ============================================================== */}
      <section className="bg-[#F8F9FA] py-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-center sm:justify-between items-center gap-8">
          {[
            // Logo 1: Filled circle with waves
            <svg key="1" className="w-8 h-8 text-gray-400" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-5 8.5c1.23 0 2.27.77 2.7 1.86.37-.21.8-.36 1.3-.36s.93.15 1.3.36c.43-1.09 1.47-1.86 2.7-1.86 1.66 0 3 1.34 3 3 0 1.43-1 2.64-2.35 2.93-.34.78-1.12 1.32-2.05 1.32-.93 0-1.71-.54-2.05-1.32A3.007 3.007 0 0110 16.5c-1.66 0-3-1.34-3-3 0-1.66 1.34-3 3-3z"/></svg>,
            // Logo 2: Sunburst filled
            <svg key="2" className="w-8 h-8 text-gray-400" viewBox="0 0 24 24" fill="currentColor"><path d="M12 6a6 6 0 100 12 6 6 0 000-12zM2 11h3v2H2v-2zm17 0h3v2h-3v-2zM11 2h2v3h-2V2zm0 17h2v3h-2v-3zM5.51 7.02l2.12-2.12 1.41 1.41-2.12 2.12-1.41-1.41zm11.56 11.36l2.12-2.12 1.41 1.41-2.12 2.12-1.41-1.41zm-9.44 0l-2.12-2.12 1.41-1.41 2.12 2.12-1.41 1.41zm11.36-9.95l-2.12-2.12-1.41 1.41 2.12 2.12 1.41-1.41z"/></svg>,
            // Logo 3: Circle with lightning bolt
            <svg key="3" className="w-8 h-8 text-gray-400" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-.5 16v-5.5H8L13.5 6v5.5H16L11.5 18z"/></svg>,
            // Logo 4: Abstract clover filled
            <svg key="4" className="w-8 h-8 text-gray-400" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a4.5 4.5 0 00-4.5 4.5c0 1.05.37 2.01.97 2.76L5.76 6.53A4.5 4.5 0 108.53 9.3l2.71 2.71-2.71 2.71A4.5 4.5 0 1012 22a4.5 4.5 0 004.5-4.5c0-1.05-.37-2.01-.97-2.76l2.71-2.71a4.5 4.5 0 10-2.76-2.77L12.77 12l2.71-2.71A4.5 4.5 0 0012 2z"/></svg>,
            // Logo 5: Concentric circles
            <svg key="5" className="w-8 h-8 text-gray-400" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>
          ].map((icon, idx) => (
            <div key={idx} className="flex items-center gap-2.5">
              {icon}
              <span className="text-[22px] font-black font-display text-gray-400 tracking-tight">Logoipsum</span>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================== */}
      {/* 2. CATEGORIES & COURSES SECTION matching Figma */}
      {/* ============================================================== */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-14">
          <h2 className="text-4xl sm:text-5xl font-black text-gray-950 font-display leading-[1.1]">
            Discover Your Passion,<br />Build Your Skills
          </h2>
          <p className="mt-6 text-gray-500 text-[15px] sm:text-base leading-relaxed max-w-3xl mx-auto font-medium">
            At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.
          </p>
        </div>

        {/* Category Filter Pills (3 rows in Figma) */}
        <div className="flex flex-col items-center space-y-3 mb-14">
          
          {/* Row 1 */}
          <div className="flex flex-wrap justify-center gap-2.5 max-w-6xl">
            {categories.slice(0, 8).map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-5 py-2 rounded-full text-[13px] font-semibold transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'bg-[#D6FD04] text-gray-950 shadow-sm scale-105'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Row 2 */}
          <div className="flex flex-wrap justify-center gap-2.5 max-w-6xl">
            {categories.slice(8, 14).map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-5 py-2 rounded-full text-[13px] font-semibold transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'bg-[#D6FD04] text-gray-950 shadow-sm scale-105'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Row 3 */}
          <div className="flex flex-wrap justify-center gap-2.5 max-w-6xl">
            {categories.slice(14).map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-5 py-2 rounded-full text-[13px] font-semibold transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'bg-[#D6FD04] text-gray-950 shadow-sm scale-105'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
            <button
              onClick={() => onNavigate('search')}
              className="px-5 py-2 rounded-full text-[13px] font-semibold text-[#003BE2] bg-blue-50 hover:bg-blue-100 transition-colors"
            >
              + More
            </button>
          </div>

        </div>

        {/* 6 Featured Course Cards Grid matching Figma */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
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

        {/* ============================================================== */}
        {/* EXPLORE LEARNING PATHS SECTION */}
        {/* ============================================================== */}
        <div className="mt-32 mb-10">
          <div className="max-w-4xl mx-auto text-center mb-14">
            <h2 className="text-3xl sm:text-[32px] md:text-4xl font-extrabold text-gray-950 font-display tracking-tight">
              Explore Diverse Learning Paths at Bytespace
            </h2>
            <p className="mt-5 text-gray-500 text-[15px] sm:text-[15.5px] leading-relaxed max-w-[800px] mx-auto">
              At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { name: 'Design', icon: PenTool },
              { name: 'Development', icon: Code },
              { name: 'IT & Software', icon: Laptop },
              { name: 'Business', icon: Building2 },
              { name: 'Marketing', icon: Megaphone },
              { name: 'Photography', icon: Camera },
            ].map((cat, idx) => (
              <div 
                key={idx}
                className="flex flex-col items-center justify-center p-6 bg-white border border-gray-200 rounded-[28px] shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer aspect-square group hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-[#D6FD04] rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <cat.icon className="w-[26px] h-[26px] text-gray-950" strokeWidth={2.5} />
                </div>
                <span className="font-semibold text-gray-800 text-[15px]">{cat.name}</span>
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* ============================================================== */}
      {/* 3. & 4. COMBINED FEATURE SECTIONS WITH SHARED GRADIENT */}
      {/* ============================================================== */}
      <section className="py-24 bg-[#FAFCFF] relative overflow-hidden">
        {/* Soft lime glow top left (Behind Boy Section text) */}
        <div className="absolute -top-20 -left-20 w-[600px] h-[600px] bg-[#E8F8CE] opacity-70 blur-[120px] pointer-events-none rounded-full"></div>
        {/* Soft lime glow bottom left (Behind Girl image) */}
        <div className="absolute bottom-10 -left-40 w-[600px] h-[600px] bg-[#E8F8CE] opacity-60 blur-[130px] pointer-events-none rounded-full"></div>
        {/* Soft blue glow right middle (Behind Girl text) */}
        <div className="absolute top-1/2 -right-20 w-[500px] h-[500px] bg-[#DDE9FA] opacity-50 blur-[100px] pointer-events-none rounded-full"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Copy & Stats */}
            <div className="lg:col-span-6 space-y-7 pr-0 lg:pr-8">
              <h2 className="text-[38px] sm:text-[44px] lg:text-[48px] font-semibold text-[#111827] font-display leading-[1.15] tracking-tight">
                Your Path to Professional Growth Starts Here!
              </h2>

              <p className="text-gray-500 text-[16px] sm:text-[17px] leading-[1.7]">
                Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.
              </p>

              {/* 3 Stats from Figma */}
              <div className="pt-2 flex gap-10 sm:gap-16">
                <div>
                  <p className="text-3xl sm:text-[38px] font-extrabold text-[#003BE2] font-display tracking-tight">12K</p>
                  <p className="text-[13px] font-medium text-gray-500 mt-1">Students</p>
                </div>
                <div>
                  <p className="text-3xl sm:text-[38px] font-extrabold text-[#003BE2] font-display tracking-tight">70+</p>
                  <p className="text-[13px] font-medium text-gray-500 mt-1">Courses</p>
                </div>
                <div>
                  <p className="text-3xl sm:text-[38px] font-extrabold text-[#003BE2] font-display tracking-tight">16</p>
                  <p className="text-[13px] font-medium text-gray-500 mt-1">Creators</p>
                </div>
              </div>
            </div>

            {/* Right Column: Visual with floating cards & student */}
            <div className="lg:col-span-6 relative flex justify-center lg:justify-end items-end mt-12 lg:mt-0">
              
              {/* Background 1st Course Card */}
              <div className="absolute left-0 sm:left-4 lg:-left-12 top-10 w-[300px] sm:w-[340px] z-0 opacity-100 pointer-events-none hidden sm:block">
                <CourseCard course={allCourses[0]} />
              </div>

              {/* Main Student Visual (Cutout) */}
              <div className="relative z-10 w-[380px] lg:w-[580px] flex justify-end items-end">
                <img 
                  src={heroImg} 
                  alt="Student with laptop"
                  className="w-full h-auto object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.15)]"
                />
              </div>

              {/* Twister Decoration (Lime) */}
              <motion.div 
                custom={0}
                variants={shapeVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="absolute right-4 lg:right-6 top-10 lg:top-16 z-0 w-40 lg:w-64 pointer-events-none drop-shadow-2xl"
              >
                <LimeScribble className="w-full h-full" />
              </motion.div>

              {/* Floating Progress Card (Right) */}
              <div className="absolute right-0 lg:-right-4 bottom-24 lg:bottom-32 z-30 bg-white rounded-[24px] p-5 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.2)] min-w-[210px]">
                <p className="text-[12px] text-gray-500 font-medium">Learning Progress</p>
                <p className="text-[38px] font-black text-gray-950 font-display mt-0 leading-none">55%</p>
                <div className="w-full bg-gray-100 h-2.5 rounded-full overflow-hidden mt-3">
                  <div className="bg-[#D6FD04] h-full w-[55%] rounded-full" />
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* Section 2: Create & Manage Courses Easily */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-10 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Visual with female creator and revenue analytics cards */}
            <div className="lg:col-span-6 relative flex justify-center lg:justify-start items-end order-2 lg:order-1 pt-10 lg:pt-0">
              
              {/* Creator Photo (Cutout) - Higher z-index to overlap blue cards */}
              <div className="relative z-30 w-[320px] lg:w-[580px] flex justify-start items-end">
                <img 
                  src={girlImg} 
                  alt="ByteSpace Creator"
                  className="w-full h-auto object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.25)]"
                />
              </div>

              {/* Twister Decoration */}
              <motion.div 
                custom={1}
                variants={shapeVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="absolute right-0 lg:-right-10 top-20 lg:top-40 z-10 w-40 lg:w-64 pointer-events-none drop-shadow-2xl"
              >
                <LimeScribble className="w-full h-full transform -rotate-[15deg]" />
              </motion.div>

              {/* Blue Floating Revenue Card 1 */}
              <div className="absolute left-4 lg:left-0 top-10 lg:top-16 z-10 bg-[#003BE2] text-white rounded-[20px] p-4 lg:p-6 shadow-2xl min-w-[210px] lg:min-w-[250px]">
                <div className="flex items-center justify-between">
                  <span className="text-[13px] text-blue-100">Total Revenue</span>
                  <span className="text-[11px] text-blue-100 bg-white/20 px-3 py-1 rounded-full">July 1-26</span>
                </div>
                <p className="text-3xl lg:text-4xl font-black font-display mt-3">$120.29</p>
                <div className="w-full bg-white/20 h-2.5 rounded-full mt-4 overflow-hidden">
                  <div className="bg-[#D6FD04] h-full w-[80%] rounded-full shadow-[0_0_10px_rgba(214,253,4,0.5)]" />
                </div>
              </div>

              {/* Blue Floating Revenue Card 2 */}
              <div className="absolute left-8 lg:left-12 top-48 lg:top-64 z-10 bg-[#003BE2] text-white rounded-[20px] p-4 lg:p-5 shadow-2xl min-w-[210px] lg:min-w-[230px]">
                <div className="flex items-center justify-between">
                  <span className="text-[13px] text-blue-100">Year to Date</span>
                  <span className="text-[11px] text-blue-100">2023</span>
                </div>
                <p className="text-3xl lg:text-[34px] font-black font-display mt-2">$1,200.38</p>
                <span className="inline-flex items-center justify-center mt-3 text-[12px] font-bold bg-[#D6FD04] text-gray-950 px-3 py-1 rounded-full">
                  +12%
                </span>
              </div>

              {/* Happy Students Card */}
              <div className="absolute right-0 lg:right-0 bottom-16 lg:bottom-24 z-40 bg-white rounded-[20px] p-5 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.15)] border border-gray-50 min-w-[230px]">
                <p className="text-[15px] font-extrabold text-gray-900 font-display">Happy Students</p>
                <div className="flex items-center gap-1.5 mt-1 text-[13px] text-gray-800 font-semibold">
                  <span>4.5</span>
                  <span className="text-gray-400 font-medium text-[12px]">(240)</span>
                  <Star className="w-4 h-4 fill-[#D6FD04] text-[#D6FD04]" />
                </div>
                <div className="flex items-center -space-x-2.5 mt-3.5">
                  {[1,2,3,4].map(i => (
                     <img key={i} src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Student" className="w-9 h-9 rounded-full border-2 border-white relative shadow-sm object-cover" style={{zIndex: 10-i}} />
                  ))}
                  <div className="w-9 h-9 rounded-full bg-[#D6FD04] border-2 border-white flex items-center justify-center text-[11px] font-black z-0 relative text-black shadow-sm">
                    2K+
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Copy & Checklist */}
            <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-gray-950 font-display leading-[1.2]">
                Create & Manage Courses Easily.
              </h2>

              <p className="text-gray-600 text-base leading-relaxed">
                ByteSpace supports individuals or entities in the creation, publication, and administration of educational courses.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#003BE2] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-gray-900 text-base">Flexibility and Autonomy</h4>
                    <p className="text-sm text-gray-600">Deliver on-demand lessons, live sessions, or self-paced masterclasses with full ownership.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#003BE2] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-gray-900 text-base">Instant Monetization</h4>
                    <p className="text-sm text-gray-600">Keep up to 90% of your course revenue with immediate global payment settlements.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#003BE2] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-gray-900 text-base">Global Community Reach</h4>
                    <p className="text-sm text-gray-600">Tap into our network of enthusiastic learners eager for high-value creator content.</p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate('creator')}
                  className="px-7 py-3 rounded-full bg-[#D6FD04] hover:bg-[#c5ea02] text-gray-950 font-bold text-sm transition-all shadow-md inline-flex items-center gap-2 cursor-pointer"
                >
                  <span>Become a ByteSpace Creator</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 5. CREATOR CALL TO ACTION BANNER matching Figma */}
      {/* ============================================================== */}
      <section className="relative creator-cta-bg text-white py-24 sm:py-28 overflow-hidden border-t border-blue-600/30">
        
        {/* 3D Shapes */}
        {/* Top Left: Lime Twister (Outer) */}
        <motion.div custom={0} variants={shapeVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="absolute -top-12 -left-12 sm:-left-6 pointer-events-none drop-shadow-2xl z-0 w-20 sm:w-40 transform -rotate-[20deg] hidden sm:block">
          <LimeScribble className="w-full h-full" />
        </motion.div>
        {/* Top Left: White Spring (Inner) */}
        <motion.div custom={1} variants={shapeVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="absolute top-16 left-20 sm:left-32 pointer-events-none drop-shadow-2xl z-0 w-16 sm:w-20 transform rotate-12 hidden md:block">
          <WhiteScribble className="w-full h-full" />
        </motion.div>
        {/* Bottom Left: White Cone */}
        <motion.div custom={2} variants={shapeVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="absolute -bottom-16 -left-16 sm:-left-12 pointer-events-none drop-shadow-2xl z-20 w-20 sm:w-40 transform rotate-12 hidden sm:block">
          <WhitePyramid className="w-full h-full" />
        </motion.div>
        {/* Bottom Center-Left: Lime Ring */}
        <motion.div custom={3} variants={shapeVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="absolute -bottom-32 left-[15%] sm:left-[20%] pointer-events-none drop-shadow-2xl z-0 w-28 sm:w-48 hidden lg:block">
          <LimeTorus className="w-full h-full" />
        </motion.div>
        {/* Top Right: White Cylinder */}
        <motion.div custom={4} variants={shapeVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="absolute -top-8 -right-12 sm:-right-8 pointer-events-none drop-shadow-2xl z-0 w-20 sm:w-40 transform rotate-[15deg] hidden sm:block">
          <WhiteCylinder className="w-full h-full" />
        </motion.div>
        {/* Top Right Inner: Lime Pyramid */}
        <motion.div custom={5} variants={shapeVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="absolute top-12 right-24 sm:right-48 pointer-events-none drop-shadow-2xl z-0 w-16 sm:w-24 transform -rotate-[30deg] hidden xl:block">
          <LimePyramid className="w-full h-full" />
        </motion.div>
        {/* Bottom Right: Lime Twister */}
        <motion.div custom={6} variants={shapeVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="absolute -bottom-20 -right-10 sm:-right-4 pointer-events-none drop-shadow-2xl z-0 w-24 sm:w-40 transform rotate-12 hidden sm:block">
          <LimeScribble className="w-full h-full" />
        </motion.div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center z-10">
          <h2 className="text-3xl sm:text-4xl md:text-[44px] font-bold font-display tracking-tight text-white leading-[1.2]">
            Unlock Your Potential as a <br className="hidden md:block" /> Creator with ByteSpace
          </h2>

          <p className="mt-8 text-white/80 text-[14px] sm:text-[15px] max-w-4xl mx-auto leading-[1.8] font-medium">
            Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a <br className="hidden lg:block"/> part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your <br className="hidden lg:block"/> expertise by publishing your finest course on the ByteSpace Course Library.
          </p>

          <div className="mt-10">
            <button
              onClick={() => onNavigate('register')}
              className="px-8 py-3.5 rounded-[100px] bg-[#D6FD04] hover:bg-[#c5ea02] text-gray-900 font-semibold text-[15px] tracking-wide transition-all shadow-xl hover:scale-105 cursor-pointer"
            >
              Join as Creator
            </button>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 6. COMMUNITY TESTIMONIALS SECTION matching Figma */}
      {/* ============================================================== */}
      <section className="py-24 sm:py-32 bg-[#FBFCFF] relative overflow-hidden">
        
        {/* Soft Background Glows */}
        <div className="absolute top-0 -left-20 w-[600px] h-[600px] bg-[#E8F1FF] opacity-70 blur-[130px] pointer-events-none rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-[#E6F8C8] opacity-80 blur-[140px] pointer-events-none rounded-full"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header Row: Title & Paragraph */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center mb-16 lg:mb-20">
            <div className="lg:col-span-6">
              <h2 className="text-[38px] sm:text-[44px] lg:text-[48px] font-bold text-[#111827] font-display leading-[1.15] tracking-tight">
                Discover What Our <br className="hidden lg:block"/> Community Is Saying
              </h2>
            </div>
            <div className="lg:col-span-6">
              <p className="text-gray-500 text-[15px] sm:text-[16px] leading-[1.8]">
                At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.
              </p>
            </div>
          </div>

          {/* 3 Testimonials Cards matching Figma */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {communityTestimonials.map((item, idx) => (
              <div 
                key={idx}
                className="bg-white/80 backdrop-blur-sm rounded-[32px] p-8 sm:p-10 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] border border-white flex flex-col items-start transition-transform hover:-translate-y-2 duration-300"
              >
                <img 
                  src={item.avatar} 
                  alt={item.name} 
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover"
                />
                
                <h4 className="font-bold text-gray-900 text-lg sm:text-[20px] font-display mt-6 tracking-tight">
                  {item.name}
                </h4>
                <p className="text-[14px] font-medium text-[#003BE2] mt-1">
                  {item.role}
                </p>

                <p className="text-gray-500 text-[15px] leading-[1.8] mt-6">
                  "{item.quote}"
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* 7. FOOTER matching Figma */}
      {/* ============================================================== */}
      <Footer onNavigate={onNavigate} />

    </div>
  );
}
