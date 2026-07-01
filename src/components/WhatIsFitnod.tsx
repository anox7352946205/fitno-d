'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function WhatIsFitnod() {
  const headerRef = useScrollReveal();
  const contentRef = useScrollReveal({ delay: 200 });

  return (
    <section id="what-is-fitnod" className="section-padding bg-white">
      <div className="container-max">
        {/* Section Header */}
        <div ref={headerRef} className="reveal text-center mb-12">
          <span className="section-label">About FitNo-D</span>
          <h2 className="section-title">
            What is <span style={{ color: 'var(--color-primary)' }}>FitNo-D?</span>
          </h2>
        </div>

        <div ref={contentRef} className="reveal max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Text */}
            <div className="flex-1">
              <p className="text-lg md:text-xl leading-relaxed mb-6" style={{ color: 'var(--color-text)' }}>
                <strong>FitNo-D</strong> stands for{' '}
                <span style={{ color: 'var(--color-primary)' }} className="font-bold">
                  Fitness In The Name Of DANCE
                </span>{' '}
                — It is India&apos;s most unique Dance for Fitness Program where every beat burns calories,
                every step builds confidence, and every session feels like a celebration!
              </p>
              <a href="#app" className="btn-primary btn-shimmer inline-block px-8 py-4 text-base">
                Download the App
              </a>
            </div>

            {/* YouTube Video Placeholder */}
            <div className="w-full lg:w-[480px] flex-shrink-0">
              <div
                className="relative w-full rounded-2xl overflow-hidden border-2 flex items-center justify-center flex-col gap-4"
                style={{
                  aspectRatio: '16/9',
                  background: 'var(--color-accent-bg)',
                  borderColor: 'var(--color-border)',
                }}
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center"
                  style={{ background: 'var(--color-primary)' }}
                >
                  <svg className="w-7 h-7 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p
                  className="font-outfit font-semibold text-sm px-6 text-center"
                  style={{ color: 'var(--color-text-muted)' }}
                >
                  📽️ What is FitNo-D? — Video Coming Soon
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
