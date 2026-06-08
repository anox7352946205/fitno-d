'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const transformations = [
  {
    name: 'Meera K.',
    age: 34,
    results: [
      'Lost 15 kg in 6 months',
      'Reversed pre-diabetes',
      'Now teaches Zumba locally',
    ],
    image: '/images/transformations/t1.jpg',
  },
  {
    name: 'Arjun P.',
    age: 42,
    results: [
      'Lost 20 kg in 8 months',
      'Blood pressure normalized',
      'Runs 5K weekly now',
    ],
    image: '/images/transformations/t2.jpg',
  },
  {
    name: 'Kavita S.',
    age: 58,
    results: [
      'Lost 8 kg at 58',
      'Improved joint mobility',
      'More active than ever',
    ],
    image: '/images/transformations/t3.jpg',
  },
  {
    name: 'Rohan D.',
    age: 28,
    results: [
      'Lost 12 kg in 3 months',
      'Gained muscle definition',
      'No more gym anxiety',
    ],
    image: '/images/transformations/t4.jpg',
  },
  {
    name: 'Sneha R.',
    age: 31,
    results: [
      'Lost 12 kg in 4 months',
      'Improved stamina & posture',
      'Dancing is her daily therapy',
    ],
    image: '/images/transformations/t5.jpg',
  },
];

export default function Transformations() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const headerRef = useScrollReveal();
  const contentRef = useScrollReveal({ delay: 200 });

  const scroll = (direction: 'left' | 'right') => {
    if (!sliderRef.current) return;
    const scrollAmount = 420;
    sliderRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <section id="transformations" className="bg-white section-padding">
      <div className="container-max">
        {/* Section Header */}
        <div ref={headerRef} className="reveal text-center mb-12">
          <span className="section-label">Success Stories</span>
          <h2 className="section-title">Real Transformations</h2>
          <p className="section-subtitle mx-auto">
            Our members don&apos;t just lose weight — they gain confidence, energy,
            and a new lifestyle.
          </p>
        </div>

        {/* Slider Container */}
        <div ref={contentRef} className="reveal relative group">
          {/* Navigation Buttons */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-text w-12 h-12 rounded-full shadow-lg flex items-center justify-center -ml-4 md:-ml-6 hidden md:flex transition-transform hover:scale-110"
            aria-label="Previous transformation"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-text w-12 h-12 rounded-full shadow-lg flex items-center justify-center -mr-4 md:-mr-6 hidden md:flex transition-transform hover:scale-110"
            aria-label="Next transformation"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Slider */}
          <div
            ref={sliderRef}
            className="transform-slider px-6 md:px-8"
          >
            {transformations.map((t, index) => (
              <div
                key={index}
                className="transform-card h-full flex flex-col w-[300px] md:w-[360px] flex-shrink-0 bg-white rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                {/* Transformation Image */}
                <div className="relative h-64 md:h-72 bg-accent-bg flex-shrink-0">
                  <Image
                    src={t.image}
                    alt={`${t.name}'s transformation`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 300px, 360px"
                  />
                  <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-sm text-white text-xs font-outfit font-semibold px-3 py-1.5 rounded-full">
                    Before → After
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <h3 className="font-outfit font-semibold text-lg text-text">
                    {t.name}{' '}
                    <span className="text-text-muted font-inter font-normal text-sm">
                      Age {t.age}
                    </span>
                  </h3>

                  <ul className="mt-4 space-y-2">
                    {t.results.map((result, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-text">
                        <span className="text-primary font-bold mt-0.5">✓</span>
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>


        </div>
      </div>
    </section>
  );
}
