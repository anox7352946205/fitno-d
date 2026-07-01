'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function LeadPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    // Show popup after 3 seconds if not submitted or dismissed recently
    const hasSubmitted = localStorage.getItem('fitnod-lead-submitted');
    const hasDismissed = localStorage.getItem('fitnod-lead-dismissed');
    const dismissTime = localStorage.getItem('fitnod-lead-dismiss-time');

    let shouldShow = !hasSubmitted;

    // If dismissed, check if 24 hours have passed to show it again
    if (hasDismissed && dismissTime) {
      const timePassed = Date.now() - parseInt(dismissTime, 10);
      const oneDay = 24 * 60 * 60 * 1000;
      if (timePassed < oneDay) {
        shouldShow = false;
      }
    }

    if (shouldShow) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleDismiss = () => {
    setIsOpen(false);
    localStorage.setItem('fitnod-lead-dismissed', 'true');
    localStorage.setItem('fitnod-lead-dismiss-time', Date.now().toString());
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!name.trim()) {
      setErrorMsg('Please enter your name.');
      return;
    }
    if (!phone.trim() || phone.length < 10) {
      setErrorMsg('Please enter a valid 10-digit mobile number.');
      return;
    }
    if (!email.trim() || !email.includes('@')) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, phone }),
      });

      const result = await response.json();

      if (response.ok && result.status === 'success') {
        setIsSuccess(true);
        localStorage.setItem('fitnod-lead-submitted', 'true');
        // Close modal after success animation
        setTimeout(() => {
          setIsOpen(false);
        }, 3000);
      } else {
        throw new Error(result.message || 'Something went wrong.');
      }
    } catch (err: any) {
      console.error(err);
      setErrorMsg(err.message || 'Failed to submit form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Dark overlay backdrop */}
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-md transition-opacity duration-300"
        onClick={handleDismiss}
      />

      {/* Pop up Card */}
      <div 
        className="relative w-full max-w-md overflow-hidden rounded-3xl border border-purple-500/20 bg-[#160a28]/95 p-8 text-center text-white shadow-[0_30px_70px_rgba(0,0,0,0.8),0_0_50px_rgba(123,45,255,0.2)] animate-float-in z-10"
      >
        {/* Glowing aura */}
        <div className="absolute -top-12 -left-12 w-32 h-32 rounded-full bg-primary/20 blur-2xl pointer-events-none" />
        <div className="absolute -bottom-12 -right-12 w-32 h-32 rounded-full bg-secondary/10 blur-2xl pointer-events-none" />

        {/* Close Button */}
        <button 
          type="button" 
          onClick={handleDismiss}
          className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-white/50 hover:bg-white/10 hover:text-white transition-all text-xl font-light"
          aria-label="Close popup"
        >
          &times;
        </button>

        {!isSuccess ? (
          <>
            {/* Logo */}
            <div className="flex justify-center mb-5">
              <Image 
                src="/images/logo-white.png" 
                alt="FitNo-D" 
                width={170} 
                height={48} 
                className="h-10 sm:h-11 w-auto"
              />
            </div>

            {/* Typography */}
            <h3 className="font-outfit font-extrabold text-2xl mb-2 text-white">
              Start Your Dance Fitness Journey! 💃
            </h3>
            <p className="text-white/70 text-sm mb-6 leading-relaxed">
              Join the <span className="font-bold animate-pulse" style={{ color: 'var(--color-primary-light)' }}>FitNo-Fam</span>! Submit your details below to get exciting offers, live updates, and direct download links.
            </p>

            {/* Error Message */}
            {errorMsg && (
              <div className="mb-4 text-xs font-semibold bg-red-500/10 border border-red-500/20 text-red-400 py-2.5 px-4 rounded-xl">
                ⚠️ {errorMsg}
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <div>
                <label htmlFor="lead-name" className="block text-xs font-semibold text-white/50 mb-1 uppercase tracking-wider">
                  Full Name
                </label>
                <input
                  id="lead-name"
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all"
                />
              </div>

              <div>
                <label htmlFor="lead-phone" className="block text-xs font-semibold text-white/50 mb-1 uppercase tracking-wider">
                  Mobile Number
                </label>
                <input
                  id="lead-phone"
                  type="tel"
                  placeholder="10-digit phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all"
                />
              </div>

              <div>
                <label htmlFor="lead-email" className="block text-xs font-semibold text-white/50 mb-1 uppercase tracking-wider">
                  Email Address
                </label>
                <input
                  id="lead-email"
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary btn-shimmer w-full py-3.5 text-base font-bold rounded-xl mt-6 transition-all duration-300 active:scale-[0.98]"
              >
                {isSubmitting ? 'Submitting...' : 'Join Now'}
              </button>
            </form>

            <button 
              type="button"
              onClick={handleDismiss}
              className="text-xs text-white/40 hover:text-white/60 transition-colors mt-4 block mx-auto hover:underline"
            >
              Skip for now
            </button>
          </>
        ) : (
          <div className="py-12 flex flex-col items-center justify-center">
            {/* Success Check Animation Grid */}
            <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 bg-green-500/10 border-2 border-green-500/30 text-green-400 text-3xl animate-bounce">
              ✓
            </div>
            <h3 className="font-outfit font-extrabold text-2xl mb-2 text-white">
              Welcome to the FitNo-Fam! 🎉
            </h3>
            <p className="text-white/70 text-sm leading-relaxed max-w-xs">
              Thank you for sharing your details. Our team will reach out shortly!
            </p>
          </div>
        )}
      </div>

      <style jsx global>{`
        @keyframes floatIn {
          from { opacity: 0; transform: scale(0.9) translateY(20px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        .animate-float-in {
          animation: floatIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
      `}</style>
    </div>
  );
}
