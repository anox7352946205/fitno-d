'use client';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const vaultCards = [
  {
    title: "What Is FitNoD",
    gradient: "from-brand-purple to-primary",
    emoji: "🎯",
    isFree: true,
  },
  {
    title: "Meet The Creator",
    gradient: "from-secondary to-yellow-500",
    emoji: "👤",
    isFree: true,
  },
  {
    title: "Meet The Coaches",
    gradient: "from-primary to-teal-500",
    emoji: "🏋️",
    isFree: true,
  },
  {
    title: "FitNoD Adults",
    gradient: "from-pink-500 to-brand-purple",
    emoji: "💃",
    isFree: false,
  },
  {
    title: "FitNoD Juniors",
    gradient: "from-blue-500 to-brand-purple",
    emoji: "🧒",
    isFree: false,
  },
  {
    title: "FitNoD Legends",
    gradient: "from-secondary to-red-500",
    emoji: "🌟",
    isFree: false,
  },
];

export default function Vault() {
  const headerRef = useScrollReveal();
  const contentRef = useScrollReveal({ delay: 200 });

  return (
    <section id="vault" className="section-padding bg-text">
      <div className="container-max">
        {/* Section Header */}
        <div ref={headerRef} className="reveal text-center mb-12">
          <span className="inline-block bg-white/10 text-white font-outfit font-semibold text-sm uppercase tracking-wider px-5 py-2 rounded-full mb-5">
            Free Resources
          </span>
          <h2 className="section-title text-white">Free Learning Vault</h2>
          <p className="section-subtitle text-white/60 mx-auto">
            Explore free content and unlock premium resources with your
            membership.
          </p>
        </div>

        {/* Horizontal Scrollable Cards */}
        <div ref={contentRef} className="reveal flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-none -mx-6 px-6 md:mx-0 md:px-0">
          {vaultCards.map((card) => (
            <div
              key={card.title}
              className="vault-card relative w-[260px] flex-shrink-0 rounded-2xl overflow-hidden cursor-pointer snap-start group"
            >
              {/* Gradient Background */}
              <div
                className={`h-[340px] bg-gradient-to-br ${card.gradient} relative`}
              >
                {/* Badge */}
                {card.isFree ? (
                  <span className="absolute top-4 left-4 bg-primary text-white text-xs font-outfit font-bold uppercase px-3 py-1 rounded-full tracking-wide">
                    Free
                  </span>
                ) : (
                  <span className="absolute top-4 left-4 bg-secondary text-white text-xs font-outfit font-bold uppercase px-3 py-1 rounded-full tracking-wide">
                    Pro
                  </span>
                )}

                {/* Category Emoji */}
                <span className="absolute top-4 right-4 text-2xl opacity-80">
                  {card.emoji}
                </span>

                {/* Title Overlay at Bottom */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-5 pt-16">
                  <h3 className="text-white font-outfit font-semibold text-lg leading-snug">
                    {card.title}
                  </h3>
                </div>

                {/* Lock Overlay for PRO cards */}
                {!card.isFree && (
                  <div className="vault-lock-overlay">
                    <span className="text-4xl mb-3">🔒</span>
                    <span className="text-white font-outfit font-semibold text-sm">
                      Unlock with Membership
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
