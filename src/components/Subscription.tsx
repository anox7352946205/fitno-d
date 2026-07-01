const features = [
  'All Workout Programs',
  'All Dance Styles',
  'Future Content & Updates',
  'Community Access',
  'Live Masterclasses',
  'Progress Tracking',
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
            Everything you need for your dance fitness journey, at one simple price.
          </p>
        </div>

        {/* Pricing Card */}
        <div className="max-w-lg mx-auto">
          <div
            className="rounded-3xl border-2 p-10 md:p-12"
            style={{
              background: 'var(--color-bg)',
              borderColor: 'var(--color-primary)',
              boxShadow: '0 20px 60px rgba(123,45,255,0.15)',
            }}
          >
            {/* Plan Header */}
            <div className="flex items-center justify-between mb-6">
              <span className="font-outfit font-bold text-sm uppercase tracking-wider" style={{ color: 'var(--color-text-muted)' }}>
                Annual Plan
              </span>
            </div>

            {/* Price */}
            <div className="mb-2">
              <span className="text-5xl md:text-6xl font-outfit font-extrabold" style={{ color: 'var(--color-text)' }}>
                ₹999
              </span>
              <span className="text-lg ml-1" style={{ color: 'var(--color-text-muted)' }}>/year</span>
            </div>
            <p className="text-sm mb-8" style={{ color: 'var(--color-text-muted)' }}>
              That&apos;s just ₹83/month
            </p>

            {/* Divider */}
            <div className="w-full h-px mb-8" style={{ background: 'var(--color-border)' }} />

            {/* Features Checklist */}
            <ul className="space-y-4 mb-10">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <span
                    className="flex items-center justify-center w-6 h-6 rounded-full text-sm font-bold shrink-0 mt-0.5"
                    style={{ background: 'var(--color-primary-light)', color: 'var(--color-primary)' }}
                  >
                    ✓
                  </span>
                  <span className="font-medium" style={{ color: 'var(--color-text)' }}>{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <a
              href="/app"
              className="btn-primary btn-shimmer w-full text-lg py-4 text-center block"
            >
              Download the App
            </a>

            <p className="text-center text-sm mt-4" style={{ color: 'var(--color-text-muted)' }}>
              🔒 Secure payment • Instant access
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
