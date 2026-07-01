'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';

interface CreatorSectionProps {
  id: string;
  label: string;
  heading: string;
  name: string;
  role: string;
  videoLabel: string;
  bgColor?: string;
}

function CreatorSection({ id, label, heading, name, role, videoLabel, bgColor }: CreatorSectionProps) {
  const headerRef = useScrollReveal();
  const contentRef = useScrollReveal({ delay: 200 });

  return (
    <section id={id} className="section-padding" style={{ background: bgColor || 'var(--color-accent-bg)' }}>
      <div className="container-max">
        <div ref={headerRef} className="reveal text-center mb-12">
          <span className="section-label">{label}</span>
          <h2 className="section-title">
            {heading}
          </h2>
        </div>

        <div ref={contentRef} className="reveal flex flex-col lg:flex-row items-center gap-12 max-w-5xl mx-auto">
          {/* Info */}
          <div className="flex-1 text-center lg:text-left">
            <h3 className="font-outfit font-extrabold text-2xl md:text-3xl mb-3" style={{ color: 'var(--color-text)' }}>
              {name}
            </h3>
            <p className="font-outfit font-semibold text-base mb-4" style={{ color: 'var(--color-primary)' }}>
              {role}
            </p>

            {/* Placeholder photo */}
            <div
              className="w-32 h-32 rounded-full mx-auto lg:mx-0 flex items-center justify-center text-4xl mb-6 border-4"
              style={{
                background: 'var(--color-primary-light)',
                borderColor: 'var(--color-primary)',
              }}
            >
              👤
            </div>
            <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>
              📸 Professional photo coming soon
            </p>
          </div>

          {/* YouTube Video Placeholder */}
          <div className="w-full lg:w-[480px] flex-shrink-0">
            <div
              className="relative w-full rounded-2xl overflow-hidden border-2 flex items-center justify-center flex-col gap-4"
              style={{
                aspectRatio: '16/9',
                background: 'var(--color-bg)',
                borderColor: 'var(--color-border)',
                boxShadow: '0 8px 32px rgba(123,45,255,0.1)',
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
              <p className="font-outfit font-semibold text-sm px-6 text-center" style={{ color: 'var(--color-text-muted)' }}>
                📽️ {videoLabel}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function KnowTheCreator() {
  return (
    <CreatorSection
      id="know-the-creator"
      label="The Creator"
      heading="Know the Creator!"
      name="Avik Bhattacharyya"
      role="Creator of FitNo-D"
      videoLabel="Avik's intro video coming soon"
      bgColor="var(--color-bg)"
    />
  );
}

export function MasterCoach() {
  return (
    <CreatorSection
      id="master-coach"
      label="Master FitNo-D Coach"
      heading="Know the Master FitNo-D Coach (MFC)"
      name="Sneha Deshmukh"
      role="Master FitNo-D Coach (MFC)"
      videoLabel="Sneha's intro video coming soon"
      bgColor="var(--color-accent-bg)"
    />
  );
}
