'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function VideoTestimonials() {
  const headerRef = useScrollReveal();
  const contentRef = useScrollReveal({ delay: 200 });

  return (
    <section id="testimonials" className="section-padding" style={{ background: 'var(--color-accent-bg)' }}>
      <div className="container-max">
        {/* Section Header */}
        <div ref={headerRef} className="reveal text-center mb-12">
          <span className="section-label">Testimonials</span>
          <h2 className="section-title">
            Don&apos;t Believe It.{' '}
            <span style={{ color: 'var(--color-primary)' }}>Listen To Them.</span>
          </h2>
          <p className="section-subtitle mx-auto" style={{ color: 'var(--color-text-muted)' }}>
            FitNo-Fam Speaks
          </p>
        </div>

        {/* YouTube Video Placeholder */}
        <div ref={contentRef} className="reveal max-w-3xl mx-auto">
          <div
            className="relative w-full rounded-3xl overflow-hidden border-2 flex items-center justify-center flex-col gap-5"
            style={{
              aspectRatio: '16/9',
              background: 'var(--color-bg)',
              borderColor: 'var(--color-border)',
              boxShadow: '0 12px 40px rgba(123,45,255,0.1)',
            }}
          >
            <div
              className="w-20 h-20 rounded-full flex items-center justify-center shadow-lg"
              style={{ background: 'var(--color-primary)' }}
            >
              <svg className="w-9 h-9 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <div className="text-center px-8">
              <p className="font-outfit font-bold text-lg mb-2" style={{ color: 'var(--color-text)' }}>
                FitNo-Fam Testimonial Video
              </p>
              <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>
                📽️ Full testimonial video coming soon — watch real members share their journey
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
