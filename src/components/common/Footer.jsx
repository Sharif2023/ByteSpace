import React, { useState } from 'react';
import ByteSpaceLogo from './ByteSpaceLogo';

export default function Footer({ onNavigate }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 3000);
      setEmail('');
    }
  };

  return (
    <footer className="w-full bg-white border-t border-gray-100 pt-16 pb-12 font-sans text-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid: Newsletter + 3 Nav Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-14 border-b border-gray-200">
          
          {/* Newsletter Section (Left 5 Cols) */}
          <div className="lg:col-span-5 space-y-7">
            <div className="mb-2">
              <ByteSpaceLogo variant="dark" onClick={() => onNavigate && onNavigate('home')} />
            </div>

            <p className="text-[13px] text-gray-500 max-w-sm leading-relaxed font-medium">
              Stay Up to date with our latest features and releases by joining our newsletter.
            </p>

            {/* Newsletter Input & Button matching Figma */}
            <form onSubmit={handleSubmit} className="w-full">
              <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full sm:w-[280px] h-[46px] rounded-full border border-gray-300 px-5 text-[14px] bg-transparent outline-none text-gray-800 placeholder-gray-500 focus:border-gray-400 transition-colors"
                />
                <button
                  type="submit"
                  className="h-[46px] px-8 rounded-full bg-[#D6FD04] hover:bg-[#c5ea02] text-gray-900 font-semibold text-[15px] transition-all cursor-pointer w-full sm:w-auto"
                >
                  {subscribed ? 'Joined!' : 'Search'}
                </button>
              </div>
            </form>

            <p className="text-[11px] text-gray-500 leading-[1.6] max-w-sm pr-10">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </div>

          {/* Links Columns (Right 7 Cols) */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 text-[13px] text-gray-500 mt-2">
            
            {/* Column 1 */}
            <div className="space-y-4">
              <button onClick={() => onNavigate && onNavigate('search')} className="block hover:text-gray-800 transition-colors">Featured Courses</button>
              <button onClick={() => onNavigate && onNavigate('search')} className="block hover:text-gray-800 transition-colors">Featured Categories</button>
              <button onClick={() => onNavigate && onNavigate('search')} className="block hover:text-gray-800 transition-colors">Business</button>
              <button onClick={() => onNavigate && onNavigate('search')} className="block hover:text-gray-800 transition-colors">IT</button>
              <button onClick={() => onNavigate && onNavigate('search')} className="block hover:text-gray-800 transition-colors">Design</button>
            </div>

            {/* Column 2 */}
            <div className="space-y-4">
              <button onClick={() => onNavigate && onNavigate('search')} className="block hover:text-gray-800 transition-colors">Development</button>
              <button onClick={() => onNavigate && onNavigate('search')} className="block hover:text-gray-800 transition-colors">Marketing</button>
              <button onClick={() => onNavigate && onNavigate('search')} className="block hover:text-gray-800 transition-colors">Photography</button>
              <button onClick={() => onNavigate && onNavigate('search')} className="block hover:text-gray-800 transition-colors">Finance</button>
              <button onClick={() => onNavigate && onNavigate('search')} className="block hover:text-gray-800 transition-colors">Sport</button>
            </div>

            {/* Column 3 */}
            <div className="space-y-4">
              <button onClick={() => onNavigate && onNavigate('creator')} className="block hover:text-gray-800 transition-colors">Become a Creator</button>
              <button onClick={() => onNavigate && onNavigate('search')} className="block hover:text-gray-800 transition-colors">Affiliate Program</button>
              <button onClick={() => onNavigate && onNavigate('notfound')} className="block hover:text-gray-800 transition-colors">Contact</button>
              <button onClick={() => onNavigate && onNavigate('notfound')} className="block hover:text-gray-800 transition-colors">Help</button>
              <button onClick={() => onNavigate && onNavigate('notfound')} className="block hover:text-gray-800 transition-colors">About</button>
            </div>

          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] font-medium text-gray-500 gap-4">
          <p>@ 2023 ByteSpace. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <a href="#privacy" className="hover:text-gray-800 transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-gray-800 transition-colors">Terms of Service</a>
            <a href="#cookies" className="hover:text-gray-800 transition-colors">Cookies Settings</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
