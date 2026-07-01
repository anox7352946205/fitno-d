'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function WhoCanDoIt() {
  const headerRef = useScrollReveal();
  const contentRef = useScrollReveal({ delay: 200 });

  const groups = [
    { emoji: '🧒', label: 'Juniors', desc: 'Kids & teens who love to move and groove!' },
    { emoji: '🧑', label: 'Adults', desc: 'Working professionals who need fun, effective workouts.' },
    { emoji: '👴', label: 'Seniors', desc: 'Active at any age — FitNo-D is gentle, joyful, and effective.' },
    { emoji: '🕺', label: 'Beginners', desc: 'No prior dance or fitness experience needed.' },
    { emoji: '💃', label: 'Dancers', desc: 'Take your passion and make it your workout.' },
    { emoji: '🏠', label: 'Homemakers', desc: 'Workout from home, at your own pace, on your schedule.' },
  ];

  return (
    <section id="who-can-do-it" className="section-padding bg-white">
      <div className="container-max">
        {/* Section Header */}
        <div ref={headerRef} className="reveal text-center mb-12">
          <span className="section-label">For Everyone</span>
          <h2 className="section-title">
            Who Can Do <span style={{ color: 'var(--color-primary)' }}>FitNo-D?</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Whether you&apos;re a Junior, Adult or Senior, a dancer or a total beginner, male or
            female — if you love fitness & dance, you can do FitNo-D!
          </p>
        </div>

        <div ref={contentRef} className="reveal grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {groups.map((group) => (
            <div
              key={group.label}
              className="flex flex-col items-center text-center p-6 rounded-2xl border transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              style={{
                background: 'var(--color-accent-bg)',
                borderColor: 'var(--color-border)',
              }}
            >
              <span className="text-4xl mb-3">{group.emoji}</span>
              <h3 className="font-outfit font-bold text-base mb-2" style={{ color: 'var(--color-text)' }}>
                {group.label}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
                {group.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="reveal mt-10 text-center">
          <a href="#app" className="btn-primary btn-shimmer inline-block px-10 py-4 text-lg">
            Download the App
          </a>
        </div>
      </div>
    </section>
  );
}
