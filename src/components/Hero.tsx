'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const STATS = [
  { value: 5000, suffix: '+', label: 'Community Members' },
  { value: 500, suffix: '+', label: 'Success Stories' },
  { value: 100, suffix: '+', label: 'Workouts' },
  { value: 4.9, suffix: '★', label: 'Average Rating', isDecimal: true },
] as const;

function AnimatedCounter({
  target,
  suffix,
  isDecimal,
}: {
  target: number;
  suffix: string;
  isDecimal?: boolean;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1800;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(isDecimal ? parseFloat(current.toFixed(1)) : Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, isDecimal]);

  return (
    <span ref={ref}>
      {isDecimal ? count.toFixed(1) : count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function Hero() {
  const heroRef = useScrollReveal({ threshold: 0.1 });
  const statsRef = useScrollReveal({ delay: 300 });

  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center overflow-hidden pt-24 pb-12 bg-bg"
    >
      {/* Floating Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-float-delayed" />
      </div>

      {/* Responsive Banner Image */}
      <div
        ref={heroRef}
        className="reveal relative z-10 w-full max-w-[1920px] mx-auto px-0 md:px-6 mt-4"
      >
        <a href="/app" className="block relative w-full group transition-transform duration-300 hover:scale-[1.01]">
          <Image
            src="/images/hero-new.png"
            alt="FitNo-D – Fitness! Dance! Fun! Download the app"
            width={1920}
            height={960}
            priority
            className="w-full h-auto object-contain rounded-none md:rounded-3xl shadow-none md:shadow-[0_20px_50px_rgba(123,45,255,0.2)]"
          />
        </a>
      </div>

      {/* CTA Buttons */}
      <div ref={statsRef} className="reveal relative z-10 mt-10 flex flex-col items-center gap-4">
        <a
          href="/app"
          className="relative inline-flex items-center justify-center px-16 py-5 text-xl sm:text-2xl font-black font-outfit uppercase tracking-wider text-white rounded-full overflow-hidden transition-all duration-300 transform hover:scale-110 active:scale-95 hover:rotate-1 group shadow-[0_0_30px_rgba(123,45,255,0.4),0_8px_30px_rgba(255,0,128,0.3)] hover:shadow-[0_0_50px_rgba(123,45,255,0.8),0_12px_45px_rgba(255,0,128,0.6)]"
          style={{
            background: 'linear-gradient(135deg, #7B2DFF 0%, #FF007F 50%, #FF8A00 100%)',
            backgroundSize: '200% 200%',
            animation: 'gradientShift 3s ease infinite',
          }}
        >
          {/* Shimmer effect */}
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none" />
          
          {/* Pulsing ring inside */}
          <span className="absolute inset-0 rounded-full border-2 border-white/20 scale-100 group-hover:scale-[1.03] transition-transform duration-300 pointer-events-none" />
          
          <span className="relative z-10 flex items-center gap-2 drop-shadow-md">
            🔥 Become a FitNo Fam 🔥
          </span>
        </a>
      </div>

      {/* Trust Stats Strip */}
      <div className="reveal relative z-10 mt-12 flex flex-wrap items-center justify-center gap-y-6">
        {STATS.map((stat, index) => (
          <div key={stat.label} className="flex items-center">
            {index > 0 && (
              <div className="mx-6 hidden h-10 w-px sm:block" style={{ background: 'var(--color-border)' }} />
            )}
            <div className="px-4 text-center transform transition-transform duration-300 hover:scale-110">
              <p className="font-outfit text-3xl font-bold md:text-4xl" style={{ color: 'var(--color-primary)' }}>
                <AnimatedCounter
                  target={stat.value}
                  suffix={stat.suffix}
                  isDecimal={'isDecimal' in stat ? stat.isDecimal : false}
                />
              </p>
              <p className="mt-1 text-sm uppercase tracking-wide font-medium" style={{ color: 'var(--color-text-muted)' }}>
                {stat.label}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
