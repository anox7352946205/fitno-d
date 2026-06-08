const features = [
  "All Workout Programs",
  "All Dance Styles",
  "Future Content & Updates",
  "Community Access",
  "Live Masterclasses",
  "Progress Tracking",
];

const trustBadges = [
  { icon: "🔒", label: "Secure Payment" },
  { icon: "↩️", label: "30-Day Refund" },
  { icon: "⚡", label: "Instant Access" },
];

export default function Subscription() {
  return (
    <section id="pricing" className="section-padding bg-white">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="section-label">Membership</span>
          <h2 className="section-title">One Membership. Unlimited Access.</h2>
          <p className="section-subtitle mx-auto">
            Everything you need for your dance fitness journey, at one simple
            price.
          </p>
        </div>

        {/* Pricing Card */}
        <div className="max-w-lg mx-auto">
          <div className="bg-white rounded-3xl border-2 border-primary shadow-xl p-10 md:p-12">
            {/* Plan Header */}
            <div className="flex items-center justify-between mb-6">
              <span className="font-outfit font-bold text-sm uppercase tracking-wider text-text-muted">
                Annual Plan
              </span>
              <span className="bg-secondary text-white font-outfit font-semibold text-xs uppercase tracking-wide px-4 py-1.5 rounded-full">
                Most Popular
              </span>
            </div>

            {/* Price */}
            <div className="mb-2">
              <span className="text-5xl md:text-6xl font-outfit font-extrabold text-text">
                ₹999
              </span>
              <span className="text-lg text-text-muted ml-1">/year</span>
            </div>
            <p className="text-text-muted text-sm mb-8">
              That&apos;s just ₹83/month
            </p>

            {/* Divider */}
            <div className="w-full h-px bg-border mb-8" />

            {/* Features Checklist */}
            <ul className="space-y-4 mb-10">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <span className="flex items-center justify-center w-6 h-6 bg-primary-light rounded-full text-primary text-sm font-bold shrink-0 mt-0.5">
                    ✓
                  </span>
                  <span className="text-text font-medium">{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <a
              href="#"
              className="btn-primary w-full text-lg py-4 text-center"
            >
              Unlock Full Access
            </a>

            {/* Guarantee */}
            <p className="flex items-center justify-center gap-2 text-sm text-text-muted mt-5">
              <span className="text-base">🛡️</span>
              30-day money back guarantee
            </p>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap items-center justify-center gap-8 mt-10">
          {trustBadges.map((badge) => (
            <div
              key={badge.label}
              className="flex items-center gap-2 text-text-muted text-sm font-medium"
            >
              <span className="text-lg">{badge.icon}</span>
              <span>{badge.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
