'use client';
import { useEffect, useState } from 'react';

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  // Only show the floating CTA after scrolling down a bit
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-500 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0 pointer-events-none'
      }`}
    >
      <a
        href="#pricing"
        className="flex items-center gap-3 bg-secondary text-white px-6 py-4 rounded-full shadow-[0_8px_30px_rgba(255,138,0,0.4)] hover:bg-secondary-light hover:text-secondary hover:scale-110 hover:-translate-y-2 transition-all duration-300 group"
      >
        <span className="font-outfit font-bold tracking-wide">
          Book Consultation
        </span>
        <span className="bg-white/20 p-1.5 rounded-full group-hover:bg-secondary/20 transition-colors">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </span>
      </a>
    </div>
  );
}
