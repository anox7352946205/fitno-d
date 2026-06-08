interface Testimonial {
  name: string;
  story: string;
  gradient: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Priya S.',
    story: 'Lost 12kg in 4 months',
    gradient: 'from-brand-purple/80 via-brand-purple/40 to-brand-purple/90',
  },
  {
    name: 'Rahul M.',
    story: 'From couch to dance floor',
    gradient: 'from-primary/80 via-primary/40 to-primary/90',
  },
  {
    name: 'Sunita D.',
    story: 'Active at 55 years young',
    gradient: 'from-secondary/80 via-secondary/40 to-secondary/90',
  },
];

export default function VideoTestimonials() {
  return (
    <section id="testimonials" className="bg-accent-bg section-padding">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="section-label">Testimonials</span>
          <h2 className="section-title">Listen What Our Members Say</h2>
          <p className="section-subtitle mx-auto">
            Real stories from real members who transformed their lives with
            FitNoD.
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="group relative rounded-2xl overflow-hidden aspect-[9/16] cursor-pointer transition-transform duration-300 hover:scale-105"
            >
              {/* Gradient Background (placeholder for video) */}
              <div
                className={`absolute inset-0 bg-gradient-to-b ${testimonial.gradient}`}
              />

              {/* Subtle pattern overlay for visual interest */}
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.8)_1px,transparent_1px)] bg-[length:24px_24px]" />

              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/25 backdrop-blur-sm flex items-center justify-center transition-transform duration-300 group-hover:scale-110 border border-white/30">
                  <svg
                    className="w-7 h-7 md:w-8 md:h-8 text-white ml-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>

              {/* Bottom Info */}
              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 bg-gradient-to-t from-black/60 via-black/20 to-transparent">
                <p className="text-white font-outfit font-bold text-lg md:text-xl">
                  {testimonial.name}
                </p>
                <p className="text-white/80 text-sm mt-1">
                  {testimonial.story}
                </p>
                <span className="inline-flex items-center gap-1.5 mt-3 text-white/90 text-xs font-medium uppercase tracking-wider">
                  <svg
                    className="w-3.5 h-3.5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  Watch Story
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
