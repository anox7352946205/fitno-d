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
  accentColor: string;
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
    videoThumbnail: '/images/warmup-program.png',
    accentColor: '#84cc16',
  },
  {
    id: 'worldjam',
    tab: 'World Jam',
    title: 'World Jam',
    subtitle: 'Groove. Sweat. Conquer.',
    description:
      'An electrifying hip-hop inspired dance workout full of neon energy and global beats. Perfect for building strength while having the time of your life.',
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
    videoThumbnail: '/images/walljam-program.png',
    accentColor: '#7B2DFF',
  },
  {
    id: 'powerslam',
    tab: 'Power Slam',
    title: 'Power Slam',
    subtitle: 'Push. Burn. Transform.',
    description:
      'High-intensity dance cardio designed to torch calories and boost endurance. Fast-paced, explosive moves that push your limits and fire up every muscle.',
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
    videoThumbnail: '/images/powerslam-program.png',
    accentColor: '#ef4444',
  },
  {
    id: 'desitadka',
    tab: 'Desi Tadka',
    title: 'Desi Tadka',
    subtitle: 'Dance. Celebrate. Burn.',
    description:
      'Bollywood meets fitness! Groove to your favorite desi beats while getting a killer workout. Fun, cultural, vibrant, and incredibly effective.',
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
    videoThumbnail: '/images/desitadka-program.png',
    accentColor: '#f59e0b',
  },
];

// Map index → quadrant class
const QUADRANT = ['q-tr', 'q-br', 'q-bl', 'q-tl'] as const;
const ACTIVE_CLASS = ['active-tr', 'active-br', 'active-bl', 'active-tl'] as const;

export default function Programs() {
  const [activeTab, setActiveTab] = useState<number | null>(null);
  const [hoveredSlice, setHoveredSlice] = useState<number | null>(null);
  const activeProgram = activeTab !== null ? programs[activeTab] : null;

  const headerRef = useScrollReveal();
  const pizzaRef = useScrollReveal({ delay: 200 });
  const stripRef = useScrollReveal({ delay: 400 });

  const handleSliceClick = (idx: number) => {
    setActiveTab(prev => (prev === idx ? null : idx));
  };

  return (
    <section id="programs" className="section-padding" style={{ background: 'var(--color-accent-bg)' }}>
      <style>{`
        @keyframes sliceSlideUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slice { animation: sliceSlideUp 0.45s cubic-bezier(0.34,1.56,0.64,1) forwards; }

        /* Clip paths — images inside each quadrant */
        .clip-tr { clip-path: polygon(50% 50%, 50% 0%, 100% 0%, 100% 50%); }
        .clip-br { clip-path: polygon(50% 50%, 100% 50%, 100% 100%, 50% 100%); }
        .clip-bl { clip-path: polygon(50% 50%, 50% 100%, 0% 100%, 0% 50%); }
        .clip-tl { clip-path: polygon(50% 50%, 0% 50%, 0% 0%, 50% 0%); }

        /* Mobile: pizza is smaller */
        @media (max-width: 767px) {
          .pizza-wrap { width: 280px !important; height: 280px !important; }
          .pizza-center { width: 72px !important; height: 72px !important; font-size: 8px !important; }
          .pizza-center img { width: 50px !important; height: 50px !important; }
        }
      `}</style>

      <div className="container-max">
        {/* Section Header */}
        <div ref={headerRef} className="reveal text-center mb-12 md:mb-16">
          <span className="section-label">Our Programs</span>
          <h2 className="section-title">
            Solution In <span style={{ color: 'var(--color-primary)' }}>4 Easy Steps</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Choose your slice! Each program is designed to take you through a progressive fitness journey using dance as the medium.
          </p>
        </div>

        {/* Main layout */}
        <div ref={pizzaRef} className="reveal flex flex-col xl:flex-row items-center justify-center gap-12 xl:gap-16 max-w-7xl mx-auto">

          {/* ─── LEFT: Interactive Pizza ─── */}
          <div className="flex flex-col items-center gap-4 flex-shrink-0">
            {/* Pizza circle */}
            <div
              className="pizza-container pizza-wrap relative"
              style={{ width: 460, height: 460 }}
            >
              {/* ── Four quadrant slices ── */}
              {programs.map((prog, idx) => {
                const qClass = QUADRANT[idx];
                const activeClass = activeTab === idx ? ACTIVE_CLASS[idx] : '';
                const clipClass = ['clip-tr', 'clip-br', 'clip-bl', 'clip-tl'][idx];
                return (
                  <div
                    key={prog.id}
                    className={`pizza-slice-q ${qClass} ${activeClass} ${clipClass}`}
                    onClick={() => handleSliceClick(idx)}
                    onMouseEnter={() => setHoveredSlice(idx)}
                    onMouseLeave={() => setHoveredSlice(null)}
                    title={`Select ${prog.title}`}
                  >
                    <Image
                      src="/images/pizza-wheel-new.png"
                      alt={prog.title}
                      fill
                      className="object-cover"
                      sizes="460px"
                      priority
                    />
                    {/* Hover / active tint overlay */}
                    <div
                      className="absolute inset-0 transition-opacity duration-300"
                      style={{
                        background: `radial-gradient(circle at center, ${prog.accentColor}33 0%, transparent 70%)`,
                        opacity: hoveredSlice === idx || activeTab === idx ? 1 : 0,
                      }}
                    />
                  </div>
                );
              })}

              {/* ── Divider lines ── */}
              <div className="absolute inset-0 pointer-events-none z-20">
                <svg viewBox="0 0 460 460" className="w-full h-full">
                  <line x1="230" y1="0" x2="230" y2="460" stroke="white" strokeWidth="3" opacity="0.8" />
                  <line x1="0" y1="230" x2="460" y2="230" stroke="white" strokeWidth="3" opacity="0.8" />
                </svg>
              </div>

              {/* ── White backdrop to fully mask baked-in text from pizza image ── */}
              <div
                className="absolute z-29 rounded-full bg-white pointer-events-none"
                style={{
                  width: 160,
                  height: 160,
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                }}
              />

              {/* ── Center logo bubble ── */}
              <div
                className="pizza-center absolute z-30 rounded-full bg-white shadow-xl flex flex-col items-center justify-center pointer-events-none border-4"
                style={{
                  width: 140,
                  height: 140,
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  borderColor: 'var(--color-primary)',
                  boxShadow: '0 4px 24px rgba(123,45,255,0.25)',
                }}
              >
                <Image
                  src="/images/logo-purple.png"
                  alt="FitNoD"
                  width={90}
                  height={30}
                  className="object-contain"
                />
              </div>

              {/* ── Outer glow ring ── */}
              <div
                className="absolute inset-0 rounded-full pointer-events-none transition-opacity duration-500"
                style={{
                  boxShadow: activeTab !== null
                    ? `0 0 0 6px rgba(123,45,255,0.15), 0 0 40px rgba(123,45,255,0.2)`
                    : '0 0 0 4px rgba(123,45,255,0.08)',
                }}
              />
            </div>

            {/* Click hint */}
            <p className="text-sm font-outfit italic mt-2" style={{ color: 'var(--color-primary)' }}>
              ↑ Click on a slice to explore ↑
            </p>
          </div>

          {/* ─── RIGHT: Program Details ─── */}
          <div className="w-full xl:w-[680px] flex items-center justify-center min-h-[460px]">
            {activeProgram === null ? (
              <div className="w-full text-center p-10 border-2 border-dashed rounded-3xl animate-slice"
                style={{ borderColor: 'var(--color-border)', background: 'var(--color-accent-bg)' }}
              >
                <span className="text-6xl mb-5 block">🍕</span>
                <h3 className="font-outfit font-bold text-2xl mb-3" style={{ color: 'var(--color-text)' }}>
                  Grab a Slice!
                </h3>
                <p className="text-base max-w-sm mx-auto leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
                  Click on any slice of the Fitness Pizza to explore the program details and find your perfect fit!
                </p>
              </div>
            ) : (
              <div
                key={activeProgram.id}
                className="w-full rounded-[2rem] p-6 sm:p-8 animate-slice border"
                style={{
                  background: 'var(--color-accent-bg)',
                  borderColor: 'var(--color-border)',
                  boxShadow: '0 12px 40px rgba(123,45,255,0.1)',
                }}
              >
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full font-outfit font-bold text-[11px] tracking-widest uppercase mb-5"
                  style={{ background: 'var(--color-primary-light)', color: 'var(--color-primary)' }}
                >
                  Selected Program
                </div>

                {/* Top: Title + Video */}
                <div className="flex flex-col md:flex-row gap-5 mb-6">
                  <div className="flex-1">
                    <h3 className="font-outfit font-extrabold text-3xl sm:text-4xl mb-1" style={{ color: 'var(--color-text)' }}>
                      {activeProgram.title}
                    </h3>
                    <p className="font-outfit font-semibold text-base mb-3" style={{ color: activeProgram.accentColor }}>
                      {activeProgram.subtitle}
                    </p>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
                      {activeProgram.description}
                    </p>
                  </div>

                  {/* Video thumbnail */}
                  <div className="w-full md:w-[210px] h-[130px] rounded-2xl overflow-hidden relative flex-shrink-0 group cursor-pointer border"
                    style={{ borderColor: 'var(--color-border)' }}
                  >
                    <Image
                      src={activeProgram.videoThumbnail}
                      alt={`${activeProgram.title} preview`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/25 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                        <svg className="w-4 h-4 ml-0.5" fill="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--color-primary)' }}>
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                    <div className="absolute bottom-2 left-3 text-white text-[10px] font-medium drop-shadow-md">
                      Preview Video <span className="opacity-70 ml-1">01:12</span>
                    </div>
                  </div>
                </div>

                {/* Middle: Benefits + Ideal For */}
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  {/* Key Benefits */}
                  <div className="flex-1 rounded-2xl p-5 border"
                    style={{ background: `${activeProgram.accentColor}12`, borderColor: `${activeProgram.accentColor}30` }}
                  >
                    <h4 className="font-outfit font-bold text-sm mb-4" style={{ color: 'var(--color-text)' }}>Key Benefits</h4>
                    <ul className="space-y-2.5">
                      {activeProgram.benefits.map((b) => (
                        <li key={b} className="flex items-start gap-2.5 text-xs font-medium" style={{ color: 'var(--color-text)' }}>
                          <svg className="w-4 h-4 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor" style={{ color: activeProgram.accentColor }}>
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Ideal For */}
                  <div className="sm:w-[200px] flex-shrink-0 rounded-2xl p-5 border"
                    style={{ background: 'rgba(123,45,255,0.06)', borderColor: 'rgba(123,45,255,0.2)' }}
                  >
                    <h4 className="font-outfit font-bold text-sm mb-4" style={{ color: 'var(--color-text)' }}>Ideal For</h4>
                    <ul className="space-y-2.5">
                      {activeProgram.targets.map((t) => (
                        <li key={t} className="flex items-start gap-2 text-xs font-medium" style={{ color: 'var(--color-text)' }}>
                          <svg className="w-4 h-4 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: 'var(--color-primary)' }}>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Stats Row */}
                <div className="flex flex-wrap sm:flex-nowrap items-center justify-between border-t pt-5 mb-6 gap-y-4 gap-x-2"
                  style={{ borderColor: 'var(--color-border)' }}
                >
                  {[
                    { icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z', label: 'Duration', value: activeProgram.stats.duration },
                    { icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z', label: 'Intensity', value: activeProgram.stats.intensity },
                    { icon: 'M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z', label: 'Calories', value: activeProgram.stats.calories },
                    { icon: 'M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4', label: 'Focus', value: activeProgram.stats.focus },
                  ].map((stat, i) => (
                    <div key={stat.label} className="flex items-center gap-2.5">
                      {i > 0 && <div className="hidden sm:block w-px h-7 mr-1" style={{ background: 'var(--color-border)' }} />}
                      <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: 'var(--color-primary)' }}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={stat.icon} />
                      </svg>
                      <div>
                        <p className="text-[10px] font-outfit uppercase tracking-wide" style={{ color: 'var(--color-text-muted)' }}>{stat.label}</p>
                        <p className="font-semibold text-xs" style={{ color: 'var(--color-text)' }}>{stat.value}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <button className="btn-primary flex-1 text-sm py-3">
                    View Full Program Details →
                  </button>
                  <button className="btn-secondary flex-1 text-sm py-3">
                    Try Free {activeProgram.title}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ─── Bottom Feature Strip ─── */}
        <div
          ref={stripRef}
          className="reveal mt-16 lg:mt-20 max-w-6xl mx-auto rounded-[2.5rem] p-6 sm:p-8 border flex flex-col sm:flex-row flex-wrap lg:flex-nowrap items-center justify-center lg:justify-between gap-8"
          style={{
            background: 'var(--color-accent-bg)',
            borderColor: 'var(--color-border)',
            boxShadow: '0 8px 32px rgba(123,45,255,0.08)',
          }}
        >
          {[
            { icon: 'M13 10V3L4 14h7v7l9-11h-7z', label: 'Results Driven', desc: 'Programs designed for real and lasting results.' },
            { icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z', label: 'For Every Body', desc: 'Workouts for all ages, levels & body types.' },
            { icon: 'M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3', label: 'Dance Based', desc: 'Fun, powerful & effective dance fitness.' },
            { icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.956 11.956 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z', label: 'Safe & Effective', desc: 'Scientifically structured & trainer approved.' },
          ].map((f) => (
            <div key={f.label} className="flex items-center gap-4 max-w-[230px]">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: 'var(--color-primary-light)' }}
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: 'var(--color-primary)' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={f.icon} />
                </svg>
              </div>
              <div>
                <h5 className="font-outfit font-bold text-sm mb-0.5" style={{ color: 'var(--color-text)' }}>{f.label}</h5>
                <p className="text-xs leading-snug" style={{ color: 'var(--color-text-muted)' }}>{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
