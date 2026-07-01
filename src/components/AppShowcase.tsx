import Image from 'next/image';

const features = [
  {
    icon: '📱',
    title: 'Workout Library',
    description: 'Access 1000+ dance workouts',
  },
  {
    icon: '🎯',
    title: 'Progress Tracking',
    description: 'Track your fitness journey',
  },
  {
    icon: '👥',
    title: 'Community Feed',
    description: 'Connect with fellow members',
  },
  {
    icon: '🎓',
    title: 'Masterclasses',
    description: 'Learn from expert coaches',
  },
];

export default function AppShowcase() {
  return (
    <section id="app" className="bg-white section-padding">
      <div className="container-max">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Side: Content */}
          <div className="lg:w-1/2">
            <span className="section-label">Mobile App</span>
            <h2 className="section-title mt-4">Experience The FitNo-D App</h2>
            <p className="text-lg leading-relaxed mb-10" style={{ color: 'var(--color-text-muted)' }}>
              Your complete dance fitness studio in your pocket. Stream workouts,
              track progress, and connect with the FitNo-Fam community — anytime, anywhere.
            </p>

            {/* Feature Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              {features.map((feature) => (
                <div key={feature.title} className="flex items-start gap-3">
                  <span className="text-2xl flex-shrink-0 mt-0.5">
                    {feature.icon}
                  </span>
                  <div>
                    <h4 className="font-outfit font-semibold text-text">
                      {feature.title}
                    </h4>
                    <p className="text-text-muted text-sm mt-0.5">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* App Download Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#"
                className="inline-flex items-center gap-3 bg-[#111111] hover:bg-[#222222] text-white rounded-xl px-6 py-3 transition-colors duration-200"
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div className="text-left">
                  <span className="block text-[10px] text-white/70 leading-tight">
                    Download on the
                  </span>
                  <span className="block text-sm font-semibold font-outfit leading-tight">
                    App Store
                  </span>
                </div>
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-3 bg-[#111111] hover:bg-[#222222] text-white rounded-xl px-6 py-3 transition-colors duration-200"
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-1.4l2.834 1.64a1 1 0 0 1 0 1.74l-2.834 1.64-2.532-2.533 2.532-2.487zM5.864 3.458L16.8 9.79l-2.302 2.302-8.634-8.634z" />
                </svg>
                <div className="text-left">
                  <span className="block text-[10px] text-white/70 leading-tight">
                    Get it on
                  </span>
                  <span className="block text-sm font-semibold font-outfit leading-tight">
                    Google Play
                  </span>
                </div>
              </a>
            </div>
          </div>

          {/* Right Side: App Mockup */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md">
              <Image
                src="/images/app-mockup.png"
                alt="FitNoD Mobile App"
                width={480}
                height={640}
                className="rounded-2xl w-full h-auto"
                priority={false}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
