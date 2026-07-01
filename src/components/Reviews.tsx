'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';

const reviews = [
  {
    quote: 'At 60, I feel more energetic than I did at 40. FitNo-D changed my life!',
    name: 'Suresh K.',
    designation: 'Retired Teacher',
  },
  {
    quote: "The community here is incredible. It's not just fitness, it's family — FitNo-Fam!",
    name: 'Nisha M.',
    designation: 'Homemaker',
  },
  {
    quote: 'I lost 18 kg and gained so much confidence. Dance fitness is the real deal.',
    name: 'Vikram S.',
    designation: 'IT Professional',
  },
  {
    quote: 'My kids and I do FitNo-D together. Best family activity ever!',
    name: 'Pooja T.',
    designation: 'Mother of 2',
  },
  {
    quote: 'No boring gym routines. Just pure fun and incredible results!',
    name: 'Aditya G.',
    designation: 'College Student',
  },
  {
    quote: 'I never thought I could enjoy working out. FitNo-D made me look forward to every session.',
    name: 'Rekha B.',
    designation: 'School Teacher',
  },
  {
    quote: "Just 30 minutes a day and I've never felt better. The pizza concept is genius!",
    name: 'Manoj V.',
    designation: 'Working Professional',
  },
  {
    quote: 'FitNo-Fam is more than a fitness group — it\'s a lifestyle.',
    name: 'Priya S.',
    designation: 'Entrepreneur',
  },
];

// Triple for seamless loop
const tripled = [...reviews, ...reviews, ...reviews];

export default function WordsThatStayWithUs() {
  const headerRef = useScrollReveal();

  return (
    <section id="words" className="section-padding" style={{ background: 'var(--color-accent-bg)' }}>
      <div className="container-max">
        <div ref={headerRef} className="reveal text-center mb-12">
          <span className="section-label">Community Love</span>
          <h2 className="section-title">
            Words That <span style={{ color: 'var(--color-primary)' }}>Stay With Us!</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Real stories from real people who discovered the joy of moving with FitNo-D.
          </p>
        </div>
      </div>

      {/* Infinite Auto-Scroll Carousel */}
      <div className="overflow-hidden">
        <div
          className="reviews-track flex gap-6"
          style={{
            animation: 'reviewScroll 40s linear infinite',
          }}
        >
          {tripled.map((review, index) => (
            <div
              key={index}
              className="w-[340px] flex-shrink-0 rounded-2xl p-8 flex flex-col transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg"
              style={{
                background: 'var(--color-bg)',
                border: '1px solid var(--color-border)',
                boxShadow: '0 4px 16px rgba(123,45,255,0.06)',
              }}
            >
              <div className="flex gap-0.5 mb-4" style={{ color: '#f59e0b' }}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="text-lg">★</span>
                ))}
              </div>
              <p className="font-inter leading-relaxed mb-6 italic flex-1" style={{ color: 'var(--color-text)' }}>
                &ldquo;{review.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3 mt-auto">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-outfit font-bold text-lg flex-shrink-0"
                  style={{ background: 'var(--color-primary-light)', color: 'var(--color-primary)' }}
                >
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-outfit font-semibold text-sm" style={{ color: 'var(--color-text)' }}>
                    {review.name}
                  </h4>
                  <p className="font-inter text-xs" style={{ color: 'var(--color-text-muted)' }}>
                    {review.designation}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes reviewScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-340px * ${reviews.length} - 24px * ${reviews.length})); }
        }
        .reviews-track:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
