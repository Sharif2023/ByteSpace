import React from 'react';
import { Star, BarChart2 } from 'lucide-react';

export default function CourseCard({ course, onSelectCourse, onSelectCreator }) {
  const {
    id,
    title,
    creator,
    rating,
    lessons = 17,
    duration = "2 hours 16 mins",
    comments = 59,
    level = "Beginner",
    price = 25,
    image,
    avatarList = []
  } = course;

  return (
    <div 
      onClick={() => onSelectCourse && onSelectCourse(course)}
      className="group bg-white rounded-[24px] p-3 border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer hover:-translate-y-1"
    >
      {/* Top Image & Floating Metadata Bar */}
      <div className="relative w-full aspect-[16/10] rounded-[16px] overflow-hidden bg-gray-100">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        
        {/* Floating Metadata Pills (3 separate pills) matching Figma */}
        <div className="absolute bottom-3 left-3 flex items-center gap-2">
          <div className="bg-white/80 backdrop-blur-md rounded-full py-1.5 px-3 text-[11px] text-gray-700 font-medium shadow-sm">
            {lessons} Lessons
          </div>
          <div className="bg-white/80 backdrop-blur-md rounded-full py-1.5 px-3 text-[11px] text-gray-700 font-medium shadow-sm">
            {duration}
          </div>
          <div className="bg-white/80 backdrop-blur-md rounded-full py-1.5 px-3 text-[11px] text-gray-700 font-medium shadow-sm">
            {comments} Comments
          </div>
        </div>
      </div>

      {/* Card Content */}
      <div className="pt-4 px-1 pb-1 flex flex-col flex-grow">
        
        {/* Title and Rating */}
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-display font-bold text-gray-900 text-[20px] leading-snug line-clamp-1 group-hover:text-[#003BE2] transition-colors">
            {title}
          </h3>
          <div className="flex items-center gap-1.5 text-[17px] font-normal text-gray-500 flex-shrink-0">
            <span>{rating.toFixed(1)}</span>
            <Star className="w-5 h-5 fill-gray-300 text-gray-300 inline" />
          </div>
        </div>

        {/* Creator Name */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            if (onSelectCreator) onSelectCreator(creator);
          }}
          className="text-left text-[14px] font-medium mt-1 w-fit"
        >
          <span className="text-gray-500">by</span> <span className="text-[#003BE2] hover:underline">{creator}</span>
        </button>

        {/* Level and Avatars Row */}
        <div className="mt-4 flex items-center gap-4">
          {/* Level badge with signal icon */}
          <div className="flex items-center gap-1.5 text-[13px] text-gray-600 bg-gray-50 px-3 py-1.5 rounded-full font-medium">
            <BarChart2 className="w-4 h-4 text-gray-500" />
            <span>{level}</span>
          </div>

          {/* Overlapping Student Avatars */}
          <div className="flex items-center -space-x-2">
            {avatarList.slice(0, 4).map((avatar, idx) => (
              <img
                key={idx}
                src={avatar}
                alt="student"
                className="w-7 h-7 rounded-full border-2 border-white object-cover shadow-sm relative"
                style={{ zIndex: 10 - idx }}
              />
            ))}
            <div className="w-7 h-7 rounded-full bg-[#D6FD04] border-2 border-white flex items-center justify-center text-[10px] font-medium text-gray-900 shadow-sm relative" style={{ zIndex: 0 }}>
              26+
            </div>
          </div>
        </div>

        {/* Price Row */}
        <div className="mt-4 flex items-baseline gap-1">
          <span className="text-[#003BE2] text-[22px] font-extrabold font-display">
            ${price}
          </span>
          <span className="text-gray-500 text-[13px] font-normal">
            /lifetime
          </span>
        </div>

      </div>
    </div>
  );
}
