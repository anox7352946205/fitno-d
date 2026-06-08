'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface ProgramData {
  id: string;
  tab: string;
  title: string;
  subtitle: string;
  description: string;
  benefits: string[];
  targets: string[];
  stats: {
    duration: string;
    intensity: string;
    calories: string;
    focus: string;
  };
  videoThumbnail: string;
}

const programs: ProgramData[] = [
  {
    id: 'warmup',
    tab: 'Warm Up',
    title: 'Warm Up',
    subtitle: 'Awaken. Activate. Align.',
    description:
      'Start your fitness journey with low-impact dance movements that gently wake up your body, improve flexibility, and prepare you for an energizing session.',
    benefits: [
      'Improves flexibility & mobility',
      'Low-impact and joint-friendly',
      'Perfect for beginners',
      'Boosts blood circulation',
    ],
    targets: ['Beginners', 'Seniors', 'Anyone starting their fitness journey'],
    stats: {
      duration: '10 - 15 mins',
      intensity: 'Low',
      calories: '50 - 80 kcal',
      focus: 'Mobility & Flexibility',
    },
    videoThumbnail: '/images/hero-bg.png', // Placeholder
  },
  {
    id: 'worldjam',
    tab: 'World Jam',
    title: 'World Jam',
    subtitle: 'Groove. Sweat. Conquer.',
    description:
      'An innovative dance workout that takes you on a global journey! Perfect for building strength while having fun with high-energy world music.',
    benefits: [
      'Full body toning',
      'Builds core strength',
      'High-energy global beats',
      'Great calorie burn',
    ],
    targets: ['Adults', 'Working Professionals', 'Intermediate level'],
    stats: {
      duration: '30 - 45 mins',
      intensity: 'Medium',
      calories: '200 - 350 kcal',
      focus: 'Cardio & Core Strength',
    },
    videoThumbnail: '/images/transformations/t5.jpg', // Placeholder
  },
  {
    id: 'powerslam',
    tab: 'Power Slam',
    title: 'Power Slam',
    subtitle: 'Push. Burn. Transform.',
    description:
      'High-intensity dance cardio designed to torch calories and boost endurance. Fast-paced, powerful moves that push your limits.',
    benefits: [
      'Maximum calorie burn',
      'Boosts cardiovascular health',
      'Builds stamina & endurance',
      'Full body workout',
    ],
    targets: ['Fitness enthusiasts', 'Weight loss seekers', 'Advanced level'],
    stats: {
      duration: '45 - 60 mins',
      intensity: 'High',
      calories: '400 - 600 kcal',
      focus: 'Endurance & Fat Loss',
    },
    videoThumbnail: '/images/transformations/t4.jpg', // Placeholder
  },
  {
    id: 'desitadka',
    tab: 'Desi Tadka',
    title: 'Desi Tadka',
    subtitle: 'Dance. Celebrate. Burn.',
    description:
      'Bollywood meets fitness! Groove to your favorite desi beats while getting a killer workout. Fun, cultural, and incredibly effective.',
    benefits: [
      'Fun Bollywood-style moves',
      'Great for stress relief',
      'Cultural & engaging',
      'Suitable for all levels',
    ],
    targets: ['Everyone', 'No experience needed', 'Bollywood lovers'],
    stats: {
      duration: '40 - 50 mins',
      intensity: 'Medium',
      calories: '250 - 400 kcal',
      focus: 'Rhythm & Joy',
    },
    videoThumbnail: '/images/transformations/t1.jpg', // Placeholder
  },
];

export default function Programs() {
  const [activeTab, setActiveTab] = useState<number | null>(null);
  const activeProgram = activeTab !== null ? programs[activeTab] : null;

  const headerRef = useScrollReveal();
  const pizzaRef = useScrollReveal({ delay: 200 });

  return (
    <section id="programs" className="bg-white section-padding">
      <style>{`
        @keyframes sliceSlideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slice {
          animation: sliceSlideUp 0.4s ease-out forwards;
        }
      `}</style>
      <div className="container-max">
        {/* Section Header */}
        <div ref={headerRef} className="reveal text-center mb-12 md:mb-16">
          <span className="section-label">Our Programs</span>
          <h2 className="section-title">Solution In <span className="text-primary">4 Easy Steps</span></h2>
          <p className="section-subtitle mx-auto">
            Choose your slice! Each program is designed to take you through a progressive fitness journey using dance as the medium.
          </p>
        </div>

        {/* Content Layout */}
        <div ref={pizzaRef} className="reveal flex flex-col xl:flex-row items-center justify-center gap-12 xl:gap-16 max-w-7xl mx-auto">
          {/* Left: Fitness Pizza */}
          <div className="w-full xl:w-[480px] flex justify-center flex-shrink-0 relative">
            
            {/* Click Hint Arrow (Optional decorative) */}
            <div className="absolute -bottom-8 left-10 lg:-left-4 text-primary font-outfit italic transform -rotate-12 flex flex-col items-center opacity-80 pointer-events-none hidden sm:flex">
              <svg className="w-12 h-12 mb-1 opacity-70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m0 0l-6-6m6 6l6-6" className="origin-center transform rotate-45 translate-x-2 -translate-y-2" />
              </svg>
              Click on a slice to explore
            </div>

            {/* Pizza Container */}
            <div className="relative w-[340px] h-[340px] sm:w-[460px] sm:h-[460px] rounded-full overflow-hidden shadow-2xl border-[6px] border-white ring-2 ring-primary/20 bg-accent-bg">
              <Image
                src="/images/fitness-pizza.png"
                alt="Fitness Pizza"
                fill
                className="object-cover scale-105"
                sizes="(max-width: 640px) 340px, 460px"
              />
              
              {/* SVG Interactive Overlay */}
              <svg
                viewBox="0 0 100 100"
                className="absolute inset-0 w-full h-full z-10 drop-shadow-md"
                preserveAspectRatio="none"
              >
                {/* Divider Lines */}
                <line x1="50" y1="0" x2="50" y2="100" stroke="white" strokeWidth="1" opacity="0.6" />
                <line x1="0" y1="50" x2="100" y2="50" stroke="white" strokeWidth="1" opacity="0.6" />

                {/* Top Left: Desi Tadka (index 3) */}
                <path
                  d="M 50 50 L 0 50 A 50 50 0 0 1 50 0 Z"
                  className={`cursor-pointer transition-all duration-300 ${activeTab === 3 ? 'fill-white/20' : 'fill-black/30 hover:fill-primary/20'}`}
                  onClick={() => setActiveTab(3)}
                />
                
                {/* Top Right: Warm Up (index 0) */}
                <path
                  d="M 50 50 L 50 0 A 50 50 0 0 1 100 50 Z"
                  className={`cursor-pointer transition-all duration-300 ${activeTab === 0 ? 'fill-white/20' : 'fill-black/30 hover:fill-primary/20'}`}
                  onClick={() => setActiveTab(0)}
                />
                
                {/* Bottom Right: World Jam (index 1) */}
                <path
                  d="M 50 50 L 100 50 A 50 50 0 0 1 50 100 Z"
                  className={`cursor-pointer transition-all duration-300 ${activeTab === 1 ? 'fill-white/20' : 'fill-black/30 hover:fill-primary/20'}`}
                  onClick={() => setActiveTab(1)}
                />
                
                {/* Bottom Left: Power Slam (index 2) */}
                <path
                  d="M 50 50 L 50 100 A 50 50 0 0 1 0 50 Z"
                  className={`cursor-pointer transition-all duration-300 ${activeTab === 2 ? 'fill-white/20' : 'fill-black/30 hover:fill-primary/20'}`}
                  onClick={() => setActiveTab(2)}
                />
              </svg>
            </div>
          </div>

          {/* Right: Program Details */}
          <div className="w-full xl:w-[700px] flex items-center justify-center min-h-[500px]">
            {activeProgram === null ? (
              /* Default State (Hidden Details) */
              <div className="w-full text-center p-12 border-2 border-dashed border-border rounded-3xl bg-accent-bg/40 animate-slice">
                <span className="text-6xl mb-6 block opacity-90 hover:scale-110 transition-transform duration-300">🍕</span>
                <h3 className="font-outfit font-bold text-3xl text-text mb-4">
                  Grab a Slice
                </h3>
                <p className="text-text-muted text-lg max-w-sm mx-auto leading-relaxed">
                  Click on any slice of the fitness pizza on the left to explore the program details and find your perfect fit!
                </p>
              </div>
            ) : (
              /* Active Program Details - Completely Redesigned */
              <div key={activeProgram.id} className="w-full bg-white rounded-[2rem] p-6 sm:p-8 shadow-[0_12px_40px_rgb(0,0,0,0.08)] border border-border/60 animate-slice">
                
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-light text-primary font-outfit font-bold text-[10px] tracking-wider uppercase mb-5">
                  <span>Selected Program</span>
                </div>
                
                {/* Top Section: Text + Video Preview */}
                <div className="flex flex-col md:flex-row gap-6 mb-6">
                  {/* Title & Description */}
                  <div className="flex-1">
                    <h3 className="font-outfit font-extrabold text-3xl sm:text-4xl text-text mb-1">
                      {activeProgram.title}
                    </h3>
                    <p className="font-outfit font-bold text-primary text-base sm:text-lg mb-3">
                      {activeProgram.subtitle}
                    </p>
                    <p className="text-text-muted leading-relaxed text-sm">
                      {activeProgram.description}
                    </p>
                  </div>

                  {/* Video Thumbnail */}
                  <div className="w-full md:w-[220px] h-[140px] rounded-2xl overflow-hidden relative flex-shrink-0 group cursor-pointer shadow-sm border border-border">
                    <Image 
                      src={activeProgram.videoThumbnail} 
                      alt="Preview" 
                      fill 
                      className="object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                        <svg className="w-4 h-4 text-primary ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                      </div>
                    </div>
                    <div className="absolute bottom-2 left-3 text-white text-[10px] font-medium drop-shadow-md tracking-wide">
                      Preview Video <span className="opacity-70 ml-1">01:12</span>
                    </div>
                  </div>
                </div>

                {/* Middle Section: Benefits & Ideal For */}
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  {/* Key Benefits */}
                  <div className="flex-1 bg-[#F5F8F2] rounded-2xl p-5 border border-primary/10">
                    <h4 className="font-outfit font-bold text-text mb-4 text-sm">Key Benefits</h4>
                    <ul className="space-y-3">
                      {activeProgram.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-start gap-2.5 text-xs text-text font-medium">
                          <svg className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Ideal For */}
                  <div className="sm:w-[220px] bg-[#FFF9F0] rounded-2xl p-5 border border-secondary/10 flex-shrink-0">
                    <h4 className="font-outfit font-bold text-text mb-4 text-sm">Ideal For</h4>
                    <ul className="space-y-3">
                      {activeProgram.targets.map((target, idx) => (
                        <li key={target} className="flex items-start gap-2.5 text-xs text-text font-medium">
                          {idx === 2 ? (
                            <svg className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                          ) : (
                            <svg className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                          )}
                          {target}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Stats Row */}
                <div className="flex flex-wrap sm:flex-nowrap items-center justify-between border-t border-border pt-5 mb-6 gap-y-4 gap-x-2">
                  <div className="flex items-center gap-2.5">
                    <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <div>
                      <p className="text-[10px] text-text-muted font-outfit uppercase tracking-wide">Duration</p>
                      <p className="font-semibold text-xs text-text">{activeProgram.stats.duration}</p>
                    </div>
                  </div>
                  <div className="hidden sm:block w-px h-8 bg-border"></div>
                  <div className="flex items-center gap-2.5">
                    <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                    <div>
                      <p className="text-[10px] text-text-muted font-outfit uppercase tracking-wide">Intensity</p>
                      <p className="font-semibold text-xs text-text">{activeProgram.stats.intensity}</p>
                    </div>
                  </div>
                  <div className="hidden sm:block w-px h-8 bg-border"></div>
                  <div className="flex items-center gap-2.5">
                    <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" /></svg>
                    <div>
                      <p className="text-[10px] text-text-muted font-outfit uppercase tracking-wide">Calories Burn</p>
                      <p className="font-semibold text-xs text-text">{activeProgram.stats.calories}</p>
                    </div>
                  </div>
                  <div className="hidden sm:block w-px h-8 bg-border"></div>
                  <div className="flex items-center gap-2.5">
                    <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" /></svg>
                    <div>
                      <p className="text-[10px] text-text-muted font-outfit uppercase tracking-wide">Focus</p>
                      <p className="font-semibold text-xs text-text">{activeProgram.stats.focus}</p>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <button className="btn-primary flex-1 text-xs sm:text-sm py-3 px-6 shadow-md shadow-primary/20">
                    View Full Program Details →
                  </button>
                  <button className="btn-secondary flex-1 text-xs sm:text-sm py-3 px-6 border-border hover:border-primary">
                    Try Free {activeProgram.title}
                  </button>
                </div>

              </div>
            )}
          </div>
        </div>

        {/* Bottom Feature Strip */}
        <div className="reveal mt-16 lg:mt-24 max-w-6xl mx-auto bg-white rounded-3xl lg:rounded-[2.5rem] shadow-xl border border-border/80 p-6 sm:p-8 flex flex-col sm:flex-row flex-wrap lg:flex-nowrap items-center justify-center lg:justify-between gap-8 z-20 relative">
          
          <div className="flex items-center gap-4 max-w-[240px]">
            <div className="w-12 h-12 rounded-full bg-[#F5F8F2] flex items-center justify-center text-primary flex-shrink-0">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            </div>
            <div>
              <h5 className="font-outfit font-bold text-sm text-text mb-0.5">Results Driven</h5>
              <p className="text-xs text-text-muted leading-snug">Programs designed for real and lasting results.</p>
            </div>
          </div>

          <div className="flex items-center gap-4 max-w-[240px]">
            <div className="w-12 h-12 rounded-full bg-[#F5F8F2] flex items-center justify-center text-primary flex-shrink-0">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
            </div>
            <div>
              <h5 className="font-outfit font-bold text-sm text-text mb-0.5">For Every Body</h5>
              <p className="text-xs text-text-muted leading-snug">Workouts for all ages, levels & body types.</p>
            </div>
          </div>

          <div className="flex items-center gap-4 max-w-[240px]">
            <div className="w-12 h-12 rounded-full bg-[#F5F8F2] flex items-center justify-center text-primary flex-shrink-0">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" /></svg>
            </div>
            <div>
              <h5 className="font-outfit font-bold text-sm text-text mb-0.5">Dance Based</h5>
              <p className="text-xs text-text-muted leading-snug">Fun, powerful & effective dance fitness workouts.</p>
            </div>
          </div>

          <div className="flex items-center gap-4 max-w-[240px]">
            <div className="w-12 h-12 rounded-full bg-[#F5F8F2] flex items-center justify-center text-primary flex-shrink-0">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.956 11.956 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
            </div>
            <div>
              <h5 className="font-outfit font-bold text-sm text-text mb-0.5">Safe & Effective</h5>
              <p className="text-xs text-text-muted leading-snug">Scientifically structured and trainer approved.</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
