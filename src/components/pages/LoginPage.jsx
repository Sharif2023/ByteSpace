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
      
      {/* 3D Shapes */}
      <div className="absolute top-10 left-10 pointer-events-none opacity-90 hidden sm:block">
        <LimeTorus className="w-24 h-24" />
      </div>
      <div className="absolute bottom-12 left-1/3 pointer-events-none opacity-90 hidden md:block">
        <LimePyramid className="w-28 h-28" />
      </div>

      {/* Header Logo */}
      <div className="z-20">
        <ByteSpaceLogo variant="light" onClick={() => onNavigate('home')} />
      </div>

      {/* Main Content: Split Columns matching Frame 8 */}
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center my-auto z-10 py-8">
        
        {/* Left Column: Heading + Copy + Stacked Floating Cards */}
        <div className="lg:col-span-6 space-y-6">
          <div className="space-y-3">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display leading-tight">
              Sign in with ease
            </h1>
            <p className="text-blue-100 text-sm sm:text-base leading-relaxed max-w-md">
              Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge.
            </p>
          </div>

          {/* Stacked Showcase Cards matching Figma Frame 8 */}
          <div className="relative pt-6 max-w-sm">
            
            {/* Background Card */}
            <div className="absolute -top-2 left-6 right-6 bg-white/40 backdrop-blur-sm rounded-2xl h-28 -rotate-3 z-0" />

            {/* Front Card: The Power of Big Data */}
            <div className="relative z-10 bg-white rounded-3xl p-4 text-gray-900 shadow-2xl border border-white/60">
              <div className="relative rounded-2xl overflow-hidden h-32 bg-slate-900">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80" 
                  alt="Big Data" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-2 left-2 right-2 bg-white/90 backdrop-blur-md rounded-lg py-1 px-2.5 flex items-center justify-between text-[10px] text-gray-600 font-semibold">
                  <span>17 Lessons</span>
                  <span>•</span>
                  <span>2 hours 16 mins</span>
                  <span>•</span>
                  <span>59 Comments</span>
                </div>
              </div>

              <div className="pt-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-gray-900 text-sm font-display">the Power of Big Data</h3>
                  <div className="flex items-center gap-1 text-xs font-bold text-gray-800">
                    <span>4.5</span>
                    <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                  </div>
                </div>
                <p className="text-xs text-[#003BE2] font-semibold mt-0.5">by purepearl studio</p>

                <div className="mt-2.5 flex items-center justify-between pt-1">
                  <span className="text-xs text-gray-600 bg-gray-100 px-2 py-0.5 rounded-full font-medium">Beginner</span>
                  <div className="flex items-center -space-x-1.5">
                    <img className="w-5 h-5 rounded-full border border-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80" alt="st" />
                    <img className="w-5 h-5 rounded-full border border-white object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80" alt="st" />
                    <span className="w-5 h-5 rounded-full bg-[#D6FD04] border border-white text-[9px] font-bold text-gray-950 flex items-center justify-center">26+</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Happy Students Pill Card */}
            <div className="absolute -bottom-6 -right-6 z-20 bg-[#D6FD04] text-gray-950 rounded-2xl p-3 shadow-xl border border-white/80">
              <p className="text-[11px] font-bold">Happy Students</p>
              <div className="flex items-center gap-1 text-xs font-semibold">
                <span>4.8</span>
                <Star className="w-3 h-3 fill-gray-900 text-gray-900 inline" />
              </div>
            </div>

            {/* White Scribble */}
            <div className="absolute -top-10 -right-4 z-20 pointer-events-none">
              <WhiteScribble className="w-16 h-20" />
            </div>

          </div>

        </div>

        {/* Right Column: Sign In Form Card matching Frame 8 */}
        <div className="lg:col-span-6 flex justify-center lg:justify-end">
          <div className="w-full max-w-md bg-white text-gray-900 rounded-3xl p-8 sm:p-10 shadow-2xl border border-gray-100">
            
            <p className="text-xs font-bold text-[#003BE2] uppercase tracking-wider">Sign In</p>
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
                <svg className="w-5 h-5 text-[#1877F2]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </button>

              <button 
                onClick={() => alert('Social login with Google')}
                className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors shadow-xs"
                title="Google"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.66v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.15z"/>
                  <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"/>
                  <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.97 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/>
                  <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
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

      <div className="text-center text-xs text-blue-200/70 py-2 z-10">
        © 2026 ByteSpace. All rights reserved.
      </div>

    </div>
  );
}
