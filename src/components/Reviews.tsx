'use client';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const reviews = [
  {
    quote: 'At 60, I feel more energetic than I did at 40. Thank you FitNoD!',
    name: 'Suresh K.',
    designation: 'Retired Teacher',
  },
  {
    quote: "The community here is incredible. It's not just fitness, it's family.",
    name: 'Nisha M.',
    designation: 'Homemaker',
  },
  {
    quote: 'I lost 18 kg and gained so much confidence. Dance fitness is the real deal.',
    name: 'Vikram S.',
    designation: 'IT Professional',
  },
  {
    quote: 'My kids and I do FitNoD together. Best family activity ever!',
    name: 'Pooja T.',
    designation: 'Mother of 2',
  },
  {
    quote: 'No boring gym routines. Just pure fun and results!',
    name: 'Aditya G.',
    designation: 'College Student',
  },
];

// Duplicate for seamless infinite loop
const duplicatedReviews = [...reviews, ...reviews];

export default function Reviews() {
  const headerRef = useScrollReveal();
  const contentRef = useScrollReveal({ delay: 200 });

  return (
    <section className="bg-accent-bg section-padding">
      <div className="container-max">
        {/* Section Header */}
        <div ref={headerRef} className="reveal text-center mb-12">
          <span className="section-label">Reviews</span>
          <h2 className="section-title">Words That Stay With Us</h2>
          <p className="section-subtitle mx-auto">
            Real stories from real people who discovered the joy of moving with
            FitNoD.
          </p>
        </div>
      </div>

      {/* Auto-sliding Carousel */}
      <div ref={contentRef} className="reveal overflow-hidden">
        <div className="reviews-track flex gap-6">
          {duplicatedReviews.map((review, index) => (
            <div
              key={index}
              className="w-[350px] flex-shrink-0 bg-white rounded-2xl p-8 shadow-sm h-full flex flex-col"
            >
              <div className="flex text-[#FF8A00] mb-4 text-xl">
                ★★★★★
              </div>
              <p className="font-inter text-text leading-relaxed mb-6 italic">
                "{review.quote}"
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center font-outfit font-bold text-primary text-xl">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-outfit font-semibold text-text">
                    {review.name}
                  </h4>
                  <p className="font-inter text-text-muted text-sm">
                    {review.designation}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
