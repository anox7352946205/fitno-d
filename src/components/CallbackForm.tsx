'use client';

import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function CallbackForm() {
  const [form, setForm] = useState({ name: '', phone: '', email: '' });
  const [submitted, setSubmitted] = useState(false);

  const headerRef = useScrollReveal();
  const contentRef = useScrollReveal({ delay: 200 });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder — no backend yet
    setSubmitted(true);
  };

  return (
    <section id="callback" className="section-padding" style={{ background: 'var(--color-accent-bg)' }}>
      <div className="container-max max-w-lg mx-auto">
        <div ref={headerRef} className="reveal text-center mb-10">
          <span className="section-label">Get In Touch</span>
          <h2 className="section-title">
            Need a <span style={{ color: 'var(--color-primary)' }}>Callback?</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Drop your details and we&apos;ll reach out to you as soon as possible.
          </p>
        </div>

        <div
          ref={contentRef}
          className="reveal rounded-3xl p-8 md:p-10 border"
          style={{
            background: 'var(--color-bg)',
            borderColor: 'var(--color-border)',
            boxShadow: '0 12px 40px rgba(123,45,255,0.1)',
          }}
        >
          {submitted ? (
            <div className="text-center py-8">
              <div className="text-5xl mb-4">🎉</div>
              <h3 className="font-outfit font-bold text-xl mb-2" style={{ color: 'var(--color-text)' }}>
                Thank you!
              </h3>
              <p style={{ color: 'var(--color-text-muted)' }}>
                We&apos;ll get back to you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              {[
                { name: 'name', label: 'Your Name', type: 'text', placeholder: 'e.g. Rahul Sharma', required: true },
                { name: 'phone', label: 'Phone Number', type: 'tel', placeholder: 'e.g. 9876543210', required: true },
                { name: 'email', label: 'Email Address', type: 'email', placeholder: 'e.g. rahul@email.com', required: false },
              ].map((field) => (
                <div key={field.name}>
                  <label
                    htmlFor={`callback-${field.name}`}
                    className="block font-outfit font-semibold text-sm mb-2"
                    style={{ color: 'var(--color-text)' }}
                  >
                    {field.label} {field.required && <span style={{ color: 'var(--color-primary)' }}>*</span>}
                  </label>
                  <input
                    id={`callback-${field.name}`}
                    name={field.name}
                    type={field.type}
                    placeholder={field.placeholder}
                    required={field.required}
                    value={form[field.name as keyof typeof form]}
                    onChange={handleChange}
                    className="w-full rounded-xl px-4 py-3 text-base outline-none transition-all duration-200 border"
                    style={{
                      background: 'var(--color-accent-bg)',
                      borderColor: 'var(--color-border)',
                      color: 'var(--color-text)',
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = 'var(--color-primary)';
                      e.currentTarget.style.boxShadow = '0 0 0 3px rgba(123,45,255,0.15)';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = 'var(--color-border)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  />
                </div>
              ))}

              <button type="submit" className="btn-primary btn-shimmer w-full text-base py-4 mt-2">
                Request Callback
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
