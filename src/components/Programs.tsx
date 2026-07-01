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
      'Start your fitness journey with low-impact dance movements that gently wake up your body, improve flexibility, and prepare you for an energizing session to own the dance floor.',
    benefits: [
      '❤️ Activates your cardiovascular system',
      '🔥 Boosts blood flow & mobility',
      '💪 Prepares muscles for action',
      '⚡ Reduces injury risk',
    ],
    videoThumbnail: '/images/warmup-program.png',
    accentColor: '#84cc16',
  },
  {
    id: 'worldjam',
    tab: 'World Jam',
    title: 'World Jam',
    subtitle: 'Groove. Sweat. Conquer.',
    description:
      'Travel the world—one dance move at a time! Groove to global beats, full of neon energy, while burning calories, improving stamina, and giving your cardio a serious upgrade.',
    benefits: [
      '❤️ Improves cardio endurance',
      '🔥 Burns maximum calories',
      '🕺 Enhances coordination & agility',
      '🌬️ Increases stamina',
    ],
    videoThumbnail: '/images/walljam-program.png',
    accentColor: '#7B2DFF',
  },
  {
    id: 'powerslam',
    tab: 'Power Slam',
    title: 'Power Slam',
    subtitle: 'Push. Burn. Transform.',
    description:
      'Time to feel the power! Fun, music-driven strength moves sculpt your muscles, tone your body, and build core power—without feeling like a gym workout.',
    benefits: [
      '💥 Builds lean muscle strength',
      '🏋️ Tones the entire body',
      '⚡ Strengthens core & posture',
      '🔥 Boosts metabolism',
    ],
    videoThumbnail: '/images/powerslam-program.png',
    accentColor: '#ef4444',
  },
  {
    id: 'desibeats',
    tab: 'Desi Beats',
    title: 'Desi Beats',
    subtitle: 'Dance. Celebrate. Burn.',
    description:
      'End with a full-on celebration! Dance to Bollywood, Tollywood, and Bhangra hits as your energy peaks, calories melt away, and those feel-good endorphins take over. Fun, cultural, vibrant, and incredibly effective.',
    benefits: [
      '❤️ Peaks your calorie burn',
      '😄 Releases feel-good endorphins',
      '💃 Improves flexibility & rhythm',
      '🌟 Leaves you energized, not exhausted',
    ],
    videoThumbnail: '/images/desitadka-program.png',
    accentColor: '#f59e0b',
  },
];


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

  // Which slice is "highlighted" (hovered or active)
  const highlightedSlice = hoveredSlice ?? activeTab;

  return (
    <section id="programs" className="section-padding" style={{ background: 'var(--color-accent-bg)' }}>
      <style>{`
        @keyframes sliceSlideUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slice { animation: sliceSlideUp 0.45s cubic-bezier(0.34,1.56,0.64,1) forwards; }

        /* Pizza container - responsive */
        .pizza-outer {
          width: 460px;
          height: 460px;
          position: relative;
          flex-shrink: 0;
        }

        /* SVG slice hover zone */
        .pizza-svg-zone {
          cursor: pointer;
          transition: opacity 0.3s ease, filter 0.3s ease;
        }
        .pizza-svg-zone:hover {
          filter: drop-shadow(0 0 8px rgba(123,45,255,0.5));
        }

        /* Dim overlay for non-active slices */
        .pizza-dim-overlay {
          pointer-events: none;
          transition: opacity 0.35s ease;
        }

        /* Pulse glow on active ring */
        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 0 0 6px rgba(123,45,255,0.15), 0 0 30px rgba(123,45,255,0.1); }
          50% { box-shadow: 0 0 0 8px rgba(123,45,255,0.25), 0 0 50px rgba(123,45,255,0.2); }
        }
        .pizza-ring-active {
          animation: pulseGlow 2s ease-in-out infinite;
        }

        /* Center logo */
        .pizza-center-logo {
          position: absolute;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          z-index: 30;
          border-radius: 50%;
          background: white;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 4px solid var(--color-primary);
          box-shadow: 0 0 0 4px var(--color-primary-light), 0 8px 32px rgba(123,45,255,0.3);
          pointer-events: none;
          width: 110px;
          height: 110px;
        }

        /* Responsive mobile */
        @media (max-width: 639px) {
          .pizza-outer { width: 320px !important; height: 320px !important; }
          .pizza-center-logo { width: 80px !important; height: 80px !important; }
          .pizza-center-logo img { width: 52px !important; }
        }
        @media (min-width: 640px) and (max-width: 767px) {
          .pizza-outer { width: 380px !important; height: 380px !important; }
          .pizza-center-logo { width: 95px !important; height: 95px !important; }
        }

        [data-theme="dark"] .pizza-center-logo {
          background: #1a1630;
        }
      `}</style>

      <div className="container-max">
        {/* Section Header */}
        <div ref={headerRef} className="reveal text-center mb-12 md:mb-16">
          <span className="section-label">The Fitness Pizza™</span>
          <h2 className="section-title">
            This is not the pizza you <span style={{ color: 'var(--color-primary)' }}>eat...</span>
          </h2>
          <p className="font-outfit font-bold text-xl md:text-2xl mb-4" style={{ color: 'var(--color-text)' }}>
            This is the pizza that you <span style={{ color: 'var(--color-primary)' }}>do.</span>
          </p>
          <p className="section-subtitle mx-auto">
            FitNo-D is powered by The Fitness Pizza™ — 4 exciting slices that fire up your cardio, build strength, and keep the fun going from start to finish.
            <br /><strong>One workout. Four flavours. Unlimited energy!</strong>
          </p>
        </div>

        {/* Main layout */}
        <div ref={pizzaRef} className="reveal flex flex-col xl:flex-row items-center justify-center gap-12 xl:gap-16 max-w-7xl mx-auto">

          {/* ─── LEFT: Interactive Pizza ─── */}
          <div className="flex flex-col items-center gap-4 flex-shrink-0">
            <div className="pizza-outer">

              {/* ── The pizza image (single image, scales with container) ── */}
              <div className="absolute inset-0 rounded-full overflow-hidden shadow-2xl"
                style={{ border: '6px solid var(--color-primary)', boxShadow: '0 0 0 3px var(--color-primary-light), 0 12px 40px rgba(123,45,255,0.2)' }}
              >
                <Image
                  src="/images/pizza-wheel-final.png"
                  alt="FitNoD Fitness Pizza — 4 Programs"
                  fill
                  className="object-cover"
                  sizes="(max-width: 639px) 320px, (max-width: 767px) 380px, 460px"
                  priority
                />

                {/* ── Dim overlays for non-highlighted slices ── */}
                {highlightedSlice !== null && (
                  <>
                    {/* Top-right: Warm Up (idx 0) */}
                    {highlightedSlice !== 0 && (
                      <div className="pizza-dim-overlay absolute" style={{ top: 0, left: '50%', width: '50%', height: '50%', background: 'rgba(0,0,0,0.45)', opacity: 1 }} />
                    )}
                    {/* Bottom-right: World Jam (idx 1) */}
                    {highlightedSlice !== 1 && (
                      <div className="pizza-dim-overlay absolute" style={{ top: '50%', left: '50%', width: '50%', height: '50%', background: 'rgba(0,0,0,0.45)', opacity: 1 }} />
                    )}
                    {/* Bottom-left: Power Slam (idx 2) */}
                    {highlightedSlice !== 2 && (
                      <div className="pizza-dim-overlay absolute" style={{ top: '50%', left: 0, width: '50%', height: '50%', background: 'rgba(0,0,0,0.45)', opacity: 1 }} />
                    )}
                    {/* Top-left: Desi Tadka (idx 3) */}
                    {highlightedSlice !== 3 && (
                      <div className="pizza-dim-overlay absolute" style={{ top: 0, left: 0, width: '50%', height: '50%', background: 'rgba(0,0,0,0.45)', opacity: 1 }} />
                    )}
                  </>
                )}
              </div>

              {/* ── Invisible interactive SVG overlay (click/hover zones) ── */}
              <svg
                viewBox="0 0 100 100"
                className="absolute inset-0 w-full h-full z-10"
                style={{ borderRadius: '50%' }}
              >
                {/* Divider lines */}
                <line x1="50" y1="0" x2="50" y2="100" stroke="white" strokeWidth="0.6" opacity="0.7" />
                <line x1="0" y1="50" x2="100" y2="50" stroke="white" strokeWidth="0.6" opacity="0.7" />

                {/* Top-right: Warm Up (idx 0) */}
                <path
                  d="M 50 50 L 50 0 A 50 50 0 0 1 100 50 Z"
                  className="pizza-svg-zone"
                  fill={highlightedSlice === 0 ? 'rgba(132,204,22,0.15)' : 'transparent'}
                  onClick={() => handleSliceClick(0)}
                  onMouseEnter={() => setHoveredSlice(0)}
                  onMouseLeave={() => setHoveredSlice(null)}
                />
                {/* Bottom-right: World Jam (idx 1) */}
                <path
                  d="M 50 50 L 100 50 A 50 50 0 0 1 50 100 Z"
                  className="pizza-svg-zone"
                  fill={highlightedSlice === 1 ? 'rgba(123,45,255,0.15)' : 'transparent'}
                  onClick={() => handleSliceClick(1)}
                  onMouseEnter={() => setHoveredSlice(1)}
                  onMouseLeave={() => setHoveredSlice(null)}
                />
                {/* Bottom-left: Power Slam (idx 2) */}
                <path
                  d="M 50 50 L 50 100 A 50 50 0 0 1 0 50 Z"
                  className="pizza-svg-zone"
                  fill={highlightedSlice === 2 ? 'rgba(239,68,68,0.15)' : 'transparent'}
                  onClick={() => handleSliceClick(2)}
                  onMouseEnter={() => setHoveredSlice(2)}
                  onMouseLeave={() => setHoveredSlice(null)}
                />
                {/* Top-left: Desi Tadka (idx 3) */}
                <path
                  d="M 50 50 L 0 50 A 50 50 0 0 1 50 0 Z"
                  className="pizza-svg-zone"
                  fill={highlightedSlice === 3 ? 'rgba(245,158,11,0.15)' : 'transparent'}
                  onClick={() => handleSliceClick(3)}
                  onMouseEnter={() => setHoveredSlice(3)}
                  onMouseLeave={() => setHoveredSlice(null)}
                />
              </svg>

              {/* ── Center logo ── */}
              <div className="pizza-center-logo">
                <Image
                  src="/images/logo-purple.png"
                  alt="FitNoD"
                  width={72}
                  height={24}
                  className="object-contain"
                />
              </div>

              {/* ── Outer glow ring (pulses when active) ── */}
              <div
                className={`absolute inset-[-6px] rounded-full pointer-events-none transition-all duration-500 ${activeTab !== null ? 'pizza-ring-active' : ''}`}
                style={{
                  boxShadow: activeTab !== null
                    ? '0 0 0 6px rgba(123,45,255,0.15), 0 0 30px rgba(123,45,255,0.1)'
                    : '0 0 0 0 transparent',
                }}
              />
            </div>

            {/* Click hint */}
            <p className="text-sm font-outfit italic mt-1" style={{ color: 'var(--color-primary)', opacity: 0.8 }}>
              Click on a slice to explore
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
                  Selected Slice
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

                {/* Key Benefits only */}
                <div className="mb-6">
                  <div className="rounded-2xl p-5 border"
                    style={{ background: `${activeProgram.accentColor}12`, borderColor: `${activeProgram.accentColor}30` }}
                  >
                    <h4 className="font-outfit font-bold text-sm mb-4" style={{ color: 'var(--color-text)' }}>Key Benefits</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {activeProgram.benefits.map((b) => (
                        <li key={b} className="flex items-start gap-2.5 text-sm font-medium" style={{ color: 'var(--color-text)' }}>
                          <span className="flex-shrink-0 mt-0.5 text-base">{b.split(' ')[0]}</span>
                          <span>{b.split(' ').slice(1).join(' ')}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Download CTA */}
                <div className="pt-2">
                  <a
                    href="/app"
                    className="btn-primary btn-shimmer w-full text-center text-base py-4"
                  >
                    Download the App
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bottom tagline */}
        <div
          ref={stripRef}
          className="reveal mt-16 text-center"
        >
          <p className="font-outfit font-extrabold text-2xl md:text-3xl" style={{ color: 'var(--color-text)' }}>
            One Pizza. Four Slices. Complete Fitness. 🍕
          </p>
          <p className="mt-3 text-base md:text-lg" style={{ color: 'var(--color-text-muted)' }}>
            Download the FitNo-D app and start your journey today.
          </p>
          <a href="/app" className="btn-primary btn-shimmer mt-6 inline-block px-10 py-4 text-lg">
            Download the App
          </a>
        </div>
      </div>
    </section>
  );
}
