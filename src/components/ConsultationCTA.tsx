import Image from "next/image";

const benefits = [
  "Weight Loss",
  "Active Lifestyle",
  "Senior Fitness",
  "Beginner Friendly",
  "Home Workouts",
  "Community Support",
];

export default function ConsultationCTA() {
  return (
    <section className="section-padding bg-primary">
      <div className="container-max">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left Content */}
          <div className="lg:w-3/5">
            <span className="inline-block bg-white/15 text-white font-outfit font-semibold text-sm uppercase tracking-wider px-5 py-2 rounded-full mb-6">
              Free Consultation
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-outfit font-bold text-white mb-5 leading-tight">
              Get A Free 1-On-1 Fitness Consultation
            </h2>

            <p className="text-white/80 text-lg leading-relaxed mb-8 max-w-xl">
              Our experts help you choose the perfect dance fitness journey based
              on your goals, fitness level, and preferences.
            </p>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-start gap-3">
                  <span className="flex items-center justify-center w-6 h-6 bg-white rounded-full text-primary text-sm font-bold shrink-0 mt-0.5">
                    ✓
                  </span>
                  <span className="text-white font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary font-outfit font-semibold text-base rounded-xl transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 whitespace-nowrap shrink-0"
              >
                Book Appointment
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-outfit font-semibold text-base rounded-xl transition-all duration-200 hover:bg-white hover:text-primary whitespace-nowrap shrink-0"
              >
                Join Now
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:w-2/5 flex justify-center">
            <div className="relative w-full max-w-sm">
              <Image
                src="/images/consultation-image.png"
                alt="FitNoD Founder & Coach"
                width={480}
                height={580}
                className="rounded-2xl shadow-2xl object-cover w-full h-auto"
                priority={false}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
