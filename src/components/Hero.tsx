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
      className="relative flex flex-col items-center justify-center overflow-hidden pt-24 pb-12 bg-bg"
    >
      {/* Animated Floating Blobs for background texture */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-float-delayed" />
      </div>

      {/* Responsive Banner Image */}
      <div 
        ref={heroRef} 
        className="reveal relative z-10 w-full max-w-[1920px] mx-auto px-0 md:px-6 mt-4"
      >
        <a href="#pricing" className="block relative w-full group transition-transform duration-300 hover:scale-[1.01]">
          <Image
            src="/images/hero-new.png"
            alt="Fitness! Dance! Fun! Download FitNoD"
            width={1920}
            height={960}
            priority
            className="w-full h-auto object-contain rounded-none md:rounded-3xl shadow-none md:shadow-[0_20px_50px_rgba(123,45,255,0.2)]"
          />
        </a>
      </div>

      {/* Trust Stats Strip */}
      <div 
        ref={statsRef}
        className="reveal relative z-10 mt-12 flex flex-wrap items-center justify-center gap-y-6"
      >
        {STATS.map((stat, index) => (
          <div key={stat.label} className="flex items-center">
            {index > 0 && (
              <div className="mx-6 hidden h-10 w-px bg-text-muted/30 sm:block" />
            )}
            <div className="px-4 text-center transform transition-transform duration-300 hover:scale-110">
              <p className="font-outfit text-3xl font-bold text-primary md:text-4xl text-shadow-sm">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-text-muted uppercase tracking-wide font-medium">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
