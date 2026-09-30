import React, { useState } from 'react';
import ByteSpaceLogo from '../common/ByteSpaceLogo';
import { LimeTorus, LimePyramid, WhiteScribble } from '../common/Decorations';
import { Star } from 'lucide-react';

export default function RegisterPage({ onNavigate }) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Account created! Welcome to ByteSpace!');
    onNavigate('home');
  };

  return (
    <div className="min-h-screen bytespace-grid-bg text-white flex flex-col p-6 sm:p-10 font-sans relative overflow-hidden">
      
      {/* Header Logo */}
      <div className="z-20">
        <ByteSpaceLogo variant="light" onClick={() => onNavigate('home')} />
      </div>

      {/* Main Content Split Columns */}
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center my-auto z-10 py-8 flex-grow">
        
        {/* Left Column */}
        <div className="lg:col-span-6 space-y-12">
          <div className="space-y-5">
            <h1 className="text-2xl sm:text-3xl lg:text-[24px] font-normal leading-tight">
              Sign up and come in
            </h1>
            <p className="text-white/90 text-[16px] leading-relaxed max-w-[520px]">
              The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost!
            </p>
          </div>

          {/* Stacked Showcase Cards matching Figma */}
          <div className="relative pt-6 max-w-[420px] mx-auto lg:mx-0 lg:ml-10 h-[360px] transform scale-100 sm:scale-110 lg:scale-[1.15] origin-top-left mt-6">
            
            {/* 3D Decor: Torus */}
            <div className="absolute -top-6 -left-2 z-30 pointer-events-none transform -rotate-[20deg]">
              <LimeTorus className="w-[110px] h-[110px]" />
            </div>

            {/* Back Card: Build Digital Asset */}
            <div className="absolute top-16 -left-8 w-[300px] bg-white rounded-3xl p-4 text-gray-900 shadow-xl border border-gray-100 z-10">
              <div className="relative rounded-2xl overflow-hidden h-32 bg-gray-200">
                <img 
                  src="https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&w=600&q=80" 
                  alt="Build Digital Asset" 
                  className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute bottom-2 left-2 right-2 flex gap-1 text-[10px]">
                  <span className="bg-white/80 backdrop-blur-md rounded-full px-3 py-1.5 font-semibold">17 Lessons</span>
                </div>
              </div>

              <div className="pt-3 opacity-60">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-gray-900 text-sm font-display">Build Digital Asset</h3>
                </div>
                <p className="text-xs text-[#003BE2] font-semibold mt-0.5">by purepearl studio</p>
                <div className="mt-3">
                  <span className="text-xs text-gray-700 bg-gray-100 px-3 py-1 rounded-full font-medium flex items-center gap-1 w-max">
                     Beginner
                  </span>
                </div>
                <div className="mt-3 text-[#003BE2] font-bold text-sm">$25<span className="text-xs text-gray-500 font-normal">/lifetime</span></div>
              </div>
            </div>

            {/* Front Card: the Power of Big Data */}
            <div className="absolute top-0 left-12 w-[320px] bg-white rounded-3xl p-4 text-gray-900 shadow-2xl border border-gray-100 z-20">
              <div className="relative rounded-2xl overflow-hidden h-36 bg-slate-900">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80" 
                  alt="Big Data" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-2 left-2 right-2 flex justify-between gap-1 text-[10px]">
                  <span className="bg-white/80 backdrop-blur-md rounded-full px-3 py-1.5 font-semibold text-gray-700">17 Lessons</span>
                  <span className="bg-white/80 backdrop-blur-md rounded-full px-3 py-1.5 font-semibold text-gray-700">2 hours 16 mins</span>
                  <span className="bg-white/80 backdrop-blur-md rounded-full px-3 py-1.5 font-semibold text-gray-700">59 Comments</span>
                </div>
              </div>

              <div className="pt-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-gray-900 text-lg font-display">the Power of Big Data</h3>
                  <div className="flex items-center gap-1 text-sm font-bold text-gray-800">
                    <span>4.5</span>
                    <Star className="w-4 h-4 fill-[#D6FD04] text-[#D6FD04]" />
                  </div>
                </div>
                <p className="text-sm text-[#003BE2] font-semibold mt-0.5">by purepearl studio</p>
                <div className="mt-4 flex items-center gap-4">
                  <span className="text-sm text-gray-700 bg-gray-100 px-3 py-1.5 rounded-full font-medium flex items-center gap-1">
                     Beginner
                  </span>
                  <div className="flex items-center -space-x-2">
                    <img className="w-6 h-6 rounded-full border border-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80" alt="st" />
                    <img className="w-6 h-6 rounded-full border border-white object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80" alt="st" />
                    <img className="w-6 h-6 rounded-full border border-white object-cover" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=80&q=80" alt="st" />
                    <img className="w-6 h-6 rounded-full border border-white object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&q=80" alt="st" />
                    <span className="w-6 h-6 rounded-full bg-gray-900 border border-white text-[9px] font-bold text-white flex items-center justify-center z-10">26+</span>
                  </div>
                </div>
                <div className="mt-4 text-[#003BE2] font-bold text-[22px]">$25<span className="text-sm text-gray-500 font-normal">/lifetime</span></div>
              </div>
            </div>

            {/* 3D Decor: White Scribble */}
            <div className="absolute top-[280px] left-[320px] z-30 pointer-events-none transform -rotate-12">
              <WhiteScribble className="w-[120px] h-[120px]" />
            </div>

            {/* Happy Students Widget */}
            <div className="absolute top-[290px] left-[170px] z-40 bg-[#D6FD04] rounded-[16px] px-5 py-4 shadow-xl border border-transparent w-[240px]">
              <p className="text-[14px] font-semibold text-gray-900 mb-0.5">Happy Students</p>
              <div className="flex items-center gap-1 text-[11px] font-bold text-gray-900 mb-3">
                <span>4.5 <span className="font-medium">(240)</span></span>
                <Star className="w-3.5 h-3.5 fill-[#003BE2] text-[#003BE2]" />
              </div>
              <div className="flex items-center -space-x-2">
                {[
                  "https://images.unsplash.com/photo-1599566150163-29194dcaad36",
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
                  "https://images.unsplash.com/photo-1527980965255-d3b416303d12",
                  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
                  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
                  "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
                  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d"
                ].map((src, i) => (
                  <img key={i} className="w-7 h-7 rounded-full border-[1.5px] border-[#D6FD04] object-cover" src={`${src}?auto=format&fit=facearea&facepad=2&w=64&h=64&q=80`} alt="st" />
                ))}
                <span className="w-7 h-7 rounded-full bg-gray-900 border-[1.5px] border-[#D6FD04] text-[9px] font-bold text-white flex items-center justify-center z-10">2K+</span>
              </div>
            </div>

            {/* 3D Decor: Lime Pyramid */}
            <div className="absolute top-[260px] -left-8 z-30 pointer-events-none transform -rotate-12">
              <LimePyramid className="w-[100px] h-[100px]" />
            </div>

          </div>
        </div>

        {/* Right Column: Register Form Card */}
        <div className="lg:col-span-6 flex justify-center lg:justify-end">
          <div className="w-full max-w-[460px] bg-white text-gray-900 rounded-[32px] p-8 sm:p-12 shadow-2xl border border-gray-100">
            
            <p className="text-[14px] text-[#003BE2] mb-1 font-normal">Create an Account</p>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-gray-900 leading-[1.1] mb-8">
              Welcome to<br/>ByteSpace
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-[11px] font-semibold text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Jamie Davis"
                  required
                  className="w-full px-5 py-3.5 rounded-2xl border border-gray-200 focus:border-[#003BE2] focus:ring-2 focus:ring-[#003BE2]/20 text-[13px] outline-none transition-all text-gray-900 placeholder:text-gray-400 placeholder:font-medium"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="designer@example.com"
                  required
                  className="w-full px-5 py-3.5 rounded-2xl border border-gray-200 focus:border-[#003BE2] focus:ring-2 focus:ring-[#003BE2]/20 text-[13px] outline-none transition-all text-gray-900 placeholder:text-gray-400 placeholder:font-medium"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-gray-700 mb-2">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="********"
                  required
                  className="w-full px-5 py-3.5 rounded-2xl border border-gray-200 focus:border-[#003BE2] focus:ring-2 focus:ring-[#003BE2]/20 text-[13px] outline-none transition-all text-gray-900 placeholder:text-gray-400 placeholder:font-medium tracking-widest"
                />
              </div>

              <div className="pt-6 flex justify-end">
                <button
                  type="submit"
                  className="px-8 py-3 rounded-full bg-[#D6FD04] hover:bg-[#c5ea02] text-gray-900 font-bold text-[14px] transition-colors cursor-pointer"
                >
                  Continue
                </button>
              </div>
            </form>



            <p className="mt-8 text-center text-[13px] text-gray-500">
              Already have an account?{' '}
              <button 
                onClick={() => onNavigate('login')}
                className="text-[#003BE2] font-medium hover:underline cursor-pointer"
              >
                Login
              </button>
            </p>

          </div>
        </div>

      </div>
    </div>
  );
}
