'use client';

import Image from 'next/image';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const STATS = [
  { value: '5,000+', label: 'Community Members' },
  { value: '500+', label: 'Success Stories' },
  { value: '1,000+', label: 'Workouts' },
  { value: '4.9★', label: 'Average Rating' },
] as const;

export default function Hero() {
  const heroRef = useScrollReveal({ threshold: 0.1 });
  const statsRef = useScrollReveal({ delay: 300 });

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <Image
        src="/images/hero-bg.png"
        alt="FitNoD dance fitness background"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />
      
      {/* Animated Floating Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-32 h-32 bg-primary/30 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl animate-float-delayed" />
      </div>

      {/* Content */}
      <div 
        ref={heroRef}
        className="reveal relative z-10 flex flex-col items-center px-6 pt-28 pb-16 text-center"
      >
        {/* Badge */}
        <span className="mb-6 inline-block rounded-full bg-primary/20 px-5 py-2 font-outfit text-sm font-semibold text-white border border-primary/30 shadow-[0_0_15px_rgba(94,159,50,0.3)]">
          India&apos;s #1 Dance Fitness Program
        </span>

        {/* Headline */}
        <h1 className="mb-6 max-w-4xl font-outfit text-4xl sm:text-5xl font-extrabold leading-tight text-white md:text-6xl lg:text-7xl">
          Dance Your Way To Fitness
        </h1>

        {/* Sub-headline */}
        <p className="mb-10 max-w-2xl text-lg leading-relaxed text-white/80 md:text-xl">
          Fun, engaging dance-based workouts designed for every body and every
          age.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="#pricing"
            className="btn-primary btn-shimmer px-10 py-4 text-lg whitespace-nowrap shrink-0 hover:scale-105"
          >
            Join FitNoD
          </a>
          <a
            href="#pricing"
            className="inline-flex items-center justify-center rounded-xl border-2 border-white px-10 py-4 font-outfit text-lg font-semibold text-white transition-all duration-300 hover:bg-white hover:text-text hover:scale-105 whitespace-nowrap shrink-0"
          >
            Book Free Consultation
          </a>
        </div>

        {/* Trust Stats Strip */}
        <div 
          ref={statsRef}
          className="reveal mt-16 flex flex-wrap items-center justify-center gap-y-6"
        >
          {STATS.map((stat, index) => (
            <div key={stat.label} className="flex items-center">
              {index > 0 && (
                <div className="mx-6 hidden h-10 w-px bg-white/30 sm:block" />
              )}
              <div className="px-4 text-center transform transition-transform duration-300 hover:scale-110">
                <p className="font-outfit text-3xl font-bold text-white md:text-4xl text-shadow-sm">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-white/70 uppercase tracking-wide font-medium">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
