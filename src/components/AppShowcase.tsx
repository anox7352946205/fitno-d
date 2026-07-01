'use client';

import Image from 'next/image';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const PhoneFrame = ({ src, alt, className = '' }: { src: string; alt: string; className?: string }) => (
  <div
    className={`relative w-[150px] sm:w-[185px] md:w-[200px] rounded-[2.5rem] border-[6px] border-neutral-950 bg-neutral-900 overflow-hidden aspect-[9/19.5] transition-all duration-500 hover:scale-[1.03] ${className}`}
    style={{
      boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.8), 0 0 30px rgba(123, 45, 255, 0.2)',
    }}
  >
    {/* Speaker/Camera Island */}
    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-3 bg-neutral-950 rounded-full z-30 flex items-center justify-center">
      <div className="w-1.5 h-1.5 bg-neutral-900 rounded-full absolute right-3" />
    </div>
    {/* Screen Content */}
    <div className="absolute inset-0 z-10">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 180px, 220px"
        priority
      />
    </div>
  </div>
);

export default function AppShowcase() {
  const headerRef = useScrollReveal();
  const mockupsRef = useScrollReveal({ delay: 200 });

  return (
    <section
      id="app"
      className="relative overflow-hidden py-24 sm:py-32"
      style={{
        background: 'radial-gradient(circle at center, #23083e 0%, #0a0314 100%)',
      }}
    >
      {/* Background glow effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[120px] opacity-20"
          style={{ background: 'var(--color-primary)' }}
        />
      </div>

      <div className="container-max relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 xl:gap-24">
          
          {/* Left Column: Heading and Downloads */}
          <div ref={headerRef} className="reveal lg:w-[45%] text-center lg:text-left">
            <span 
              className="inline-block font-outfit font-bold text-xs uppercase tracking-wider px-4 py-1.5 rounded-full mb-6"
              style={{ background: 'rgba(123, 45, 255, 0.15)', color: 'var(--color-primary-light)' }}
            >
              Get the App
            </span>
            <h2 className="font-outfit font-extrabold text-4xl sm:text-5xl md:text-6xl text-white leading-tight mb-4">
              Begin your journey
            </h2>
            <p className="font-outfit text-xl sm:text-2xl font-light text-white/80 mb-10 max-w-md mx-auto lg:mx-0">
              Towards Making People Fit &amp; Healthy
            </p>

            {/* Badges Layout */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <a
                href="#"
                className="inline-flex items-center gap-3 bg-black hover:bg-neutral-900 text-white rounded-xl px-5 py-3 border border-white/10 transition-all duration-200 hover:scale-105"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-1.4l2.834 1.64a1 1 0 0 1 0 1.74l-2.834 1.64-2.532-2.533 2.532-2.487zM5.864 3.458L16.8 9.79l-2.302 2.302-8.634-8.634z" />
                </svg>
                <div className="text-left">
                  <span className="block text-[9px] text-white/50 leading-tight uppercase font-medium tracking-wider">
                    GET IT ON
                  </span>
                  <span className="block text-sm font-semibold font-outfit leading-tight">
                    Google Play
                  </span>
                </div>
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-3 bg-black hover:bg-neutral-900 text-white rounded-xl px-5 py-3 border border-white/10 transition-all duration-200 hover:scale-105"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div className="text-left">
                  <span className="block text-[9px] text-white/50 leading-tight uppercase font-medium tracking-wider">
                    Download on the
                  </span>
                  <span className="block text-sm font-semibold font-outfit leading-tight">
                    App Store
                  </span>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: Layered Mockup Stack */}
          <div ref={mockupsRef} className="reveal lg:w-[50%] flex justify-center items-center h-[380px] sm:h-[450px] relative w-full mt-8 lg:mt-0">
            <div className="relative w-full max-w-[340px] sm:max-w-[420px] md:max-w-[450px] h-full flex justify-center items-center">
              
              {/* Left Phone: Explore Wellness Tools */}
              <PhoneFrame
                src="/images/app-tools.png"
                alt="FitNo-D App Tools Screen"
                className="absolute left-0 z-10 origin-bottom-left -rotate-[8deg] -translate-x-[5%] translate-y-[8%] opacity-85 hover:opacity-100 hover:z-30 duration-300"
              />

              {/* Middle Phone: App Splash Logo */}
              <PhoneFrame
                src="/images/app-splash.png"
                alt="FitNo-D App Splash Screen"
                className="absolute z-20 scale-[1.05] shadow-[0_30px_70px_rgba(0,0,0,0.9)]"
              />

              {/* Right Phone: Calorie Dashboard */}
              <PhoneFrame
                src="/images/app-dashboard.png"
                alt="FitNo-D App Dashboard Screen"
                className="absolute right-0 z-10 origin-bottom-right rotate-[8deg] translate-x-[5%] translate-y-[8%] opacity-85 hover:opacity-100 hover:z-30 duration-300"
              />
              
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
