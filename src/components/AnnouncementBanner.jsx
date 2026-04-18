import { useState } from 'react';
import { Link } from 'react-router-dom';

function AnnouncementBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-primary text-on-primary px-4 py-3 flex items-center justify-between text-sm md:text-base font-body relative overflow-hidden transition-all duration-300">
      {/* Decorative subtle gradient background */}
      <div className="absolute inset-0 opacity-20 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none mix-blend-overlay"></div>
      
      <div className="container mx-auto flex items-center justify-center gap-2 sm:gap-4 relative z-10 flex-col sm:flex-row px-6 text-center sm:text-left">
        <span className="flex items-center justify-center gap-2 font-medium shrink-0">
          <span className="material-symbols-outlined animate-pulse text-lg sm:text-xl">campaign</span>
          <span className="uppercase tracking-wider text-xs sm:text-sm font-semibold opacity-90">Upcoming Event</span>
        </span>
        
        <span className="hidden sm:block opacity-50">|</span>
        
        <span className="font-light">
          Join our intensive Physical Theatre Workshop at the main meeting point.
        </span>
        
        <Link 
          to="/masterclasses" 
          className="mt-1 sm:mt-0 ml-0 sm:ml-2 inline-flex items-center gap-1 font-semibold border-b border-on-primary/30 hover:border-on-primary hover:text-primary-fixed transition-colors pb-0.5"
        >
          Register Now
          <span className="material-symbols-outlined text-[16px] transition-transform group-hover:translate-x-1">arrow_right_alt</span>
        </Link>
      </div>
      
      <button 
        onClick={() => setIsVisible(false)}
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 p-1.5 rounded-full hover:bg-black/20 focus:bg-black/20 focus:outline-none transition-colors flex items-center justify-center group"
        aria-label="Dismiss announcement"
      >
        <span className="material-symbols-outlined text-lg opacity-80 group-hover:opacity-100">close</span>
      </button>
    </div>
  );
}

export default AnnouncementBanner;
