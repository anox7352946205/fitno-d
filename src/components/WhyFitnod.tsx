'use client';

import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const ACCORDION_ITEMS = [
  {
    id: 'scientific',
    title: 'Scientific and Result Oriented',
    content:
      'The Fitness Pizza concept of FitNo-D is absolutely science based and is highly effective in a short span of time. Unlike other dance fitness programs, the balance between Cardiovascular Fitness and Muscle Toning is perfect.',
  },
  {
    id: 'time',
    title: 'Time Effective',
    content:
      'Just 30 mins per day, that\'s it. No overwhelming hours in the gym which is next to impossible for busy professionals and homemakers.',
  },
  {
    id: 'anywhere',
    title: 'Workout Anywhere, Anytime',
    content:
      'As you don\'t need a gym or equipment, FitNo-D can be basically done from anywhere, anytime. From your home, society clubhouse, garden or even your hotel room during vacation at anytime that suits you.',
  },
  {
    id: 'habit',
    title: 'Builds Habit',
    content:
      'As you have to invest only 30 mins per day, the chances of absence are minimum. Moreover, as FitNo-D is super fun, you will always feel like attending the session, thus developing a habit for a healthy lifestyle.',
  },
  {
    id: 'holistic',
    title: 'Holistic Wellness',
    content:
      'Not only workout through dance, FitNo-D will also provide consultation on nutrition, stress management and mental health, making it a holistic wellness program.',
  },
];

export default function WhyFitnod() {
  const [openId, setOpenId] = useState<string | null>(null);
  const [expanded, setExpanded] = useState(false);

  const headerRef = useScrollReveal();
  const contentRef = useScrollReveal({ delay: 200 });

  const visibleItems = expanded ? ACCORDION_ITEMS : ACCORDION_ITEMS.slice(0, 0);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="why-fitnod" className="section-padding bg-white">
      <div className="container-max max-w-3xl mx-auto">
        {/* Section Header */}
        <div ref={headerRef} className="reveal text-center mb-10">
          <span className="section-label">Why Choose Us</span>
          <h2 className="section-title">
            Why <span style={{ color: 'var(--color-primary)' }}>FitNo-D?</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Because the best workout is the workout that makes you{' '}
            <strong style={{ color: 'var(--color-primary)' }}>HAPPY!</strong>
          </p>
          <p className="mt-3 text-base leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
            FitNo-D helps you burn fat, build strength, boost your cardio, and smile through every
            workout — all with the power of dance.
          </p>
        </div>

        <div ref={contentRef} className="reveal">
          {/* Show More trigger */}
          {!expanded && (
            <div className="text-center mb-8">
              <p className="text-base font-outfit font-semibold mb-4" style={{ color: 'var(--color-text)' }}>
                Need more reasons?<br />
                <span style={{ color: 'var(--color-text-muted)' }}>Here you go...</span>
              </p>
              <button
                onClick={() => setExpanded(true)}
                className="btn-primary inline-flex items-center gap-2 px-8 py-3"
              >
                Show More
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          )}

          {/* Accordion */}
          {expanded && (
            <div className="space-y-3">
              {ACCORDION_ITEMS.map((item) => (
                <div
                  key={item.id}
                  className="rounded-2xl border overflow-hidden transition-all duration-300"
                  style={{
                    borderColor: openId === item.id ? 'var(--color-primary)' : 'var(--color-border)',
                    boxShadow: openId === item.id ? '0 4px 24px rgba(123,45,255,0.1)' : 'none',
                  }}
                >
                  <button
                    type="button"
                    onClick={() => toggle(item.id)}
                    className="w-full flex items-center justify-between px-6 py-5 text-left transition-colors duration-200"
                    style={{
                      background: openId === item.id ? 'var(--color-primary-light)' : 'var(--color-accent-bg)',
                    }}
                  >
                    <span className="font-outfit font-bold text-base" style={{ color: 'var(--color-text)' }}>
                      {item.title}
                    </span>
                    <svg
                      className="w-5 h-5 flex-shrink-0 transition-transform duration-300"
                      style={{
                        color: 'var(--color-primary)',
                        transform: openId === item.id ? 'rotate(180deg)' : 'rotate(0deg)',
                      }}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  <div
                    className="overflow-hidden transition-all duration-400 ease-in-out"
                    style={{
                      maxHeight: openId === item.id ? '300px' : '0px',
                      opacity: openId === item.id ? 1 : 0,
                    }}
                  >
                    <p className="px-6 py-5 text-base leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
                      {item.content}
                    </p>
                  </div>
                </div>
              ))}

              {/* Show Less */}
              <div className="text-center pt-4">
                <button
                  onClick={() => { setExpanded(false); setOpenId(null); }}
                  className="inline-flex items-center gap-2 font-outfit font-semibold text-sm transition-colors hover:opacity-80"
                  style={{ color: 'var(--color-primary)' }}
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                  </svg>
                  Show Less
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
