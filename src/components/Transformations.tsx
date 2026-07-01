'use client';

import { useRef } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const placeholders = [
  { name: 'Meera K.', weightDiff: '-15 kg', result: 'Reversed pre-diabetes & gained confidence' },
  { name: 'Arjun P.', weightDiff: '-20 kg', result: 'Blood pressure normalized in 8 months' },
  { name: 'Kavita S.', weightDiff: '-8 kg', result: 'More active at 58 than ever before' },
  { name: 'Rohan D.', weightDiff: '-12 kg', result: 'Gained muscle definition, no gym anxiety' },
  { name: 'Sneha R.', weightDiff: '-12 kg', result: 'Dancing became her daily therapy' },
];

export default function Transformations() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const headerRef = useScrollReveal();
  const contentRef = useScrollReveal({ delay: 200 });

  const scroll = (direction: 'left' | 'right') => {
    if (!sliderRef.current) return;
    sliderRef.current.scrollBy({
      left: direction === 'left' ? -380 : 380,
      behavior: 'smooth',
    });
  };

  return (
    <section id="transformations" className="section-padding bg-white">
      <div className="container-max">
        {/* Section Header */}
        <div ref={headerRef} className="reveal text-center mb-12">
          <span className="section-label">Success Stories</span>
          <h2 className="section-title">
            FitNo-D <span style={{ color: 'var(--color-primary)' }}>Transformed Them!</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Real results from real people. Placeholder photos — client images coming soon.
          </p>
        </div>

        {/* Slider Container */}
        <div ref={contentRef} className="reveal relative group">
          {/* Nav buttons */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-primary-light text-text w-12 h-12 rounded-full shadow-lg hidden md:flex items-center justify-center -ml-6 transition-transform hover:scale-110"
            aria-label="Previous"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-primary-light text-text w-12 h-12 rounded-full shadow-lg hidden md:flex items-center justify-center -mr-6 transition-transform hover:scale-110"
            aria-label="Next"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Carousel */}
          <div
            ref={sliderRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {placeholders.map((t, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-[300px] md:w-[340px] snap-start rounded-3xl overflow-hidden border transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                style={{
                  borderColor: 'var(--color-border)',
                  background: 'var(--color-accent-bg)',
                }}
              >
                {/* Before/After Placeholder */}
                <div
                  className="relative flex items-center justify-center"
                  style={{
                    height: '240px',
                    background: 'linear-gradient(135deg, var(--color-primary-light), rgba(123,45,255,0.08))',
                  }}
                >
                  <div className="flex gap-3 items-center">
                    {/* Before */}
                    <div
                      className="w-20 h-28 rounded-xl flex items-center justify-center text-center"
                      style={{ background: 'rgba(123,45,255,0.1)', border: '2px dashed var(--color-border)' }}
                    >
                      <div>
                        <div className="text-2xl mb-1">📸</div>
                        <p className="text-[10px] font-outfit font-semibold" style={{ color: 'var(--color-primary)' }}>BEFORE</p>
                      </div>
                    </div>
                    <div className="text-2xl" style={{ color: 'var(--color-primary)' }}>→</div>
                    {/* After */}
                    <div
                      className="w-20 h-28 rounded-xl flex items-center justify-center text-center"
                      style={{ background: 'rgba(123,45,255,0.1)', border: '2px dashed var(--color-border)' }}
                    >
                      <div>
                        <div className="text-2xl mb-1">📸</div>
                        <p className="text-[10px] font-outfit font-semibold" style={{ color: 'var(--color-primary)' }}>AFTER</p>
                      </div>
                    </div>
                  </div>

                  <div
                    className="absolute bottom-3 right-3 text-xs font-outfit font-bold px-3 py-1 rounded-full"
                    style={{ background: 'var(--color-primary)', color: 'white' }}
                  >
                    {t.weightDiff}
                  </div>
                </div>

                {/* Info */}
                <div className="p-5">
                  <h3 className="font-outfit font-bold text-lg mb-1" style={{ color: 'var(--color-text)' }}>
                    {t.name}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
                    {t.result}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
