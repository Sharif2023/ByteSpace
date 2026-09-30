import React, { useState } from 'react';
import ByteSpaceLogo from '../common/ByteSpaceLogo';
import { LimeTorus, LimePyramid, WhiteScribble } from '../common/Decorations';
import { Star } from 'lucide-react';

export default function LoginPage({ onNavigate }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Logged in successfully! Redirecting to Home...');
    onNavigate('home');
  };

  return (
    <div className="min-h-screen bytespace-grid-bg text-white flex flex-col justify-between p-6 sm:p-10 font-sans relative overflow-hidden">
      


      {/* Header Logo */}
      <div className="z-20">
        <ByteSpaceLogo variant="light" onClick={() => onNavigate('home')} />
      </div>

      {/* Main Content: Split Columns matching Frame 8 */}
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center my-auto z-10 py-8">
        
        {/* Left Column */}
        <div className="lg:col-span-6 space-y-12">
          <div className="space-y-5">
            <h1 className="text-2xl sm:text-3xl lg:text-[24px] font-normal leading-tight">
              Sign in with ease
            </h1>
            <p className="text-white/90 text-[16px] leading-relaxed max-w-[520px]">
              Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge.
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

        {/* Right Column: Sign In Form Card matching Frame 8 */}
        <div className="lg:col-span-6 flex justify-center lg:justify-end">
          <div className="w-full max-w-md bg-white text-gray-900 rounded-3xl p-8 sm:p-10 shadow-2xl border border-gray-100">
            
            <p className="text-xs font-normal text-[#003BE2] uppercase tracking-wider">Sign In</p>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-gray-950 mt-1 mb-6">
              Welcome Back
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1.5">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="designer@example.com"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#003BE2] focus:ring-2 focus:ring-[#003BE2]/20 text-sm outline-none transition-all text-gray-900"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1.5">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#003BE2] focus:ring-2 focus:ring-[#003BE2]/20 text-sm outline-none transition-all text-gray-900"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-[#D6FD04] hover:bg-[#c5ea02] text-gray-950 font-bold text-sm tracking-wide transition-all shadow-md cursor-pointer hover:scale-[1.01]"
                >
                  Sign In
                </button>
              </div>
            </form>

            {/* Divider */}
            <div className="relative my-6 text-center">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200" />
              </div>
              <span className="relative bg-white px-3 text-xs text-gray-400 font-medium">- or -</span>
            </div>

            {/* Social Buttons */}
            <div className="flex items-center justify-center gap-4">
              <button 
                onClick={() => alert('Social login with Facebook')}
                className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors shadow-xs"
                title="Facebook"
              >
                <svg className="w-5 h-5 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </button>

              <button 
                onClick={() => alert('Social login with Google')}
                className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors shadow-xs"
                title="Google"
              >
                <svg className="w-5 h-5 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.66v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.15z"/>
                  <path d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"/>
                  <path d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.97 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/>
                  <path d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
                </svg>
              </button>
            </div>

            {/* Bottom link */}
            <p className="mt-8 text-center text-xs text-gray-500">
              New user?{' '}
              <button 
                onClick={() => onNavigate('register')}
                className="text-[#003BE2] font-bold hover:underline cursor-pointer"
              >
                Create an account
              </button>
            </p>

          </div>
        </div>

      </div>
    </div>
  );
}
