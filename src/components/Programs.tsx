'use client';
import { useState } from 'react';
import Image from 'next/image';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface ProgramData {
  id: string;
  tab: string;
  title: string;
  description: string;
  benefits: string[];
  target: string;
}

const programs: ProgramData[] = [
  {
    id: 'warmup',
    tab: 'Warm Up',
    title: 'Warm Up',
    description:
      'Start your fitness journey with low-impact dance movements that gently wake up your body, improve flexibility, and prepare you for an energizing session.',
    benefits: [
      'Improves flexibility & mobility',
      'Low-impact and joint-friendly',
      'Perfect for beginners',
      'Boosts blood circulation',
    ],
    target: 'Beginners, Seniors, Anyone starting their fitness journey',
  },
  {
    id: 'worldjam',
    tab: 'World Jam',
    title: 'World Jam',
    description:
      'An innovative dance workout that takes you on a global journey! Perfect for building strength while having fun with world music.',
    benefits: [
      'Full body toning',
      'Builds core strength',
      'High-energy global beats',
      'Great calorie burn',
    ],
    target: 'Adults, Working Professionals, Intermediate level',
  },
  {
    id: 'powerslam',
    tab: 'Power Slam',
    title: 'Power Slam',
    description:
      'High-intensity dance cardio designed to torch calories and boost endurance. Fast-paced, powerful moves that push your limits.',
    benefits: [
      'Maximum calorie burn',
      'Boosts cardiovascular health',
      'Builds stamina & endurance',
      'Full body workout',
    ],
    target: 'Fitness enthusiasts, Weight loss seekers, Advanced level',
  },
  {
    id: 'desitadka',
    tab: 'Desi Tadka',
    title: 'Desi Tadka',
    description:
      'Bollywood meets fitness! Groove to your favorite desi beats while getting a killer workout. Fun, cultural, and incredibly effective.',
    benefits: [
      'Fun Bollywood-style moves',
      'Great for stress relief',
      'Cultural & engaging',
      'Suitable for all levels',
    ],
    target: 'Everyone! No experience needed',
  },
];

export default function Programs() {
  const [activeTab, setActiveTab] = useState<number | null>(null);
  const activeProgram = activeTab !== null ? programs[activeTab] : null;

  const headerRef = useScrollReveal();
  const pizzaRef = useScrollReveal({ delay: 200 });

  return (
    <section id="programs" className="bg-white section-padding">
      <style>{`
        @keyframes sliceSlideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slice {
          animation: sliceSlideUp 0.4s ease-out forwards;
        }
      `}</style>
      <div className="container-max">
        {/* Section Header */}
        <div ref={headerRef} className="reveal text-center mb-12 md:mb-16">
          <span className="section-label">Our Programs</span>
          <h2 className="section-title">Solution In 4 Easy Steps</h2>
          <p className="section-subtitle mx-auto">
            Choose your slice! Each program is designed to take you through a progressive fitness journey using dance as the medium.
          </p>
        </div>

        {/* Content Layout */}
        <div ref={pizzaRef} className="reveal flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left: Fitness Pizza */}
          <div className="w-full lg:w-1/2 flex justify-center">
            {/* Pizza Container */}
            <div className="relative w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] rounded-full overflow-hidden shadow-2xl border-[8px] border-white ring-4 ring-primary/20 bg-accent-bg">
              <Image
                src="/images/fitness-pizza.png"
                alt="Fitness Pizza"
                fill
                className="object-cover scale-105"
                sizes="(max-width: 640px) 320px, 420px"
              />
              
              {/* SVG Interactive Overlay */}
              <svg
                viewBox="0 0 100 100"
                className="absolute inset-0 w-full h-full z-10"
                preserveAspectRatio="none"
              >
                {/* Divider Lines */}
                <line x1="50" y1="0" x2="50" y2="100" stroke="white" strokeWidth="0.5" opacity="0.4" />
                <line x1="0" y1="50" x2="100" y2="50" stroke="white" strokeWidth="0.5" opacity="0.4" />

                {/* Top Left: Desi Tadka (index 3) */}
                <path
                  d="M 50 50 L 0 50 A 50 50 0 0 1 50 0 Z"
                  className={`cursor-pointer transition-all duration-300 ${activeTab === 3 ? 'fill-primary/50' : 'fill-black/30 hover:fill-primary/20'}`}
                  onClick={() => setActiveTab(3)}
                />
                
                {/* Top Right: Warm Up (index 0) */}
                <path
                  d="M 50 50 L 50 0 A 50 50 0 0 1 100 50 Z"
                  className={`cursor-pointer transition-all duration-300 ${activeTab === 0 ? 'fill-primary/50' : 'fill-black/30 hover:fill-primary/20'}`}
                  onClick={() => setActiveTab(0)}
                />
                
                {/* Bottom Right: World Jam (index 1) */}
                <path
                  d="M 50 50 L 100 50 A 50 50 0 0 1 50 100 Z"
                  className={`cursor-pointer transition-all duration-300 ${activeTab === 1 ? 'fill-primary/50' : 'fill-black/30 hover:fill-primary/20'}`}
                  onClick={() => setActiveTab(1)}
                />
                
                {/* Bottom Left: Power Slam (index 2) */}
                <path
                  d="M 50 50 L 50 100 A 50 50 0 0 1 0 50 Z"
                  className={`cursor-pointer transition-all duration-300 ${activeTab === 2 ? 'fill-primary/50' : 'fill-black/30 hover:fill-primary/20'}`}
                  onClick={() => setActiveTab(2)}
                />
              </svg>
            </div>
          </div>

          {/* Right: Program Details */}
          <div className="w-full lg:w-1/2 flex items-center min-h-[480px]">
            {activeProgram === null ? (
              /* Default State (Hidden Details) */
              <div className="w-full text-center p-12 border-2 border-dashed border-border rounded-3xl bg-accent-bg/40 animate-slice">
                <span className="text-6xl mb-6 block opacity-90 hover:scale-110 transition-transform duration-300">🍕</span>
                <h3 className="font-outfit font-bold text-3xl text-text mb-4">
                  Grab a Slice
                </h3>
                <p className="text-text-muted text-lg max-w-sm mx-auto leading-relaxed">
                  Click on any slice of the fitness pizza on the left to explore the program details and find your perfect fit!
                </p>
              </div>
            ) : (
              /* Active Program Details */
              <div key={activeProgram.id} className="w-full bg-white rounded-3xl p-8 sm:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-border animate-slice">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-light text-primary font-outfit font-bold text-sm tracking-wide uppercase mb-6">
                  <span>Selected Program</span>
                </div>
                
                <h3 className="font-outfit font-bold text-3xl sm:text-4xl text-text mb-4">
                  {activeProgram.title}
                </h3>
                
                <p className="text-text-muted leading-relaxed text-lg mb-8">
                  {activeProgram.description}
                </p>

                {/* Benefits Checklist */}
                <div className="bg-accent-bg/60 rounded-2xl p-6 mb-8">
                  <h4 className="font-outfit font-semibold text-text mb-4">Key Benefits:</h4>
                  <ul className="space-y-3">
                    {activeProgram.benefits.map((benefit) => (
                      <li
                        key={benefit}
                        className="flex items-start gap-3 text-text"
                      >
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-white flex items-center justify-center mt-0.5 shadow-sm text-primary font-bold text-sm">
                          ✓
                        </span>
                        <span className="text-base font-medium">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Target Audience */}
                <div className="mb-8">
                  <span className="text-xs font-outfit font-semibold uppercase tracking-wider text-text-muted block mb-2">
                    Ideal For:
                  </span>
                  <p className="inline-block bg-secondary-light text-secondary px-4 py-2 rounded-full text-sm font-medium">
                    {activeProgram.target}
                  </p>
                </div>

                {/* CTA */}
                <button className="btn-primary w-full sm:w-auto text-lg py-3.5 px-8 shadow-lg shadow-primary/20">
                  View Program details →
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
