'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

const NAV_LINKS = [
  { label: 'Programs', href: '#programs' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'App', href: '#app' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
] as const;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${
          scrolled ? 'shadow-md' : ''
        }`}
      >
        <div className="container-max mx-auto flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <a href="#hero" className="flex items-center">
            <Image
              src="/images/logo-purple.png"
              alt="FitNoD - Fitness In The Name Of Dance"
              width={160}
              height={45}
              className="h-10 w-auto"
              priority
            />
          </a>

          {/* Desktop Nav Links */}
          <ul className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="nav-link text-sm">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <a href="#pricing" className="btn-primary hidden lg:inline-flex">
            Join FitNoD
          </a>

          {/* Mobile Hamburger */}
          <button
            type="button"
            aria-label="Open menu"
            className="flex flex-col items-center justify-center gap-[5px] lg:hidden"
            onClick={() => setMenuOpen(true)}
          >
            <span className="block h-[2px] w-6 rounded bg-text" />
            <span className="block h-[2px] w-6 rounded bg-text" />
            <span className="block h-[2px] w-6 rounded bg-text" />
          </button>
        </div>
      </nav>

      {/* Mobile Overlay */}
      <div
        className={`mobile-overlay ${menuOpen ? 'open' : ''}`}
        onClick={closeMenu}
      />

      {/* Mobile Drawer */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <div className="flex items-center justify-between px-6 py-4">
          <a
            href="#hero"
            className="flex items-center"
            onClick={closeMenu}
          >
            <Image
              src="/images/logo-purple.png"
              alt="FitNoD"
              width={140}
              height={40}
              className="h-9 w-auto"
            />
          </a>

          <button
            type="button"
            aria-label="Close menu"
            className="flex h-9 w-9 items-center justify-center rounded-full hover:bg-accent-bg"
            onClick={closeMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <ul className="flex flex-col gap-2 px-6 pt-4">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="nav-link block rounded-lg px-4 py-3 text-base hover:bg-accent-bg"
                onClick={closeMenu}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="px-6 pt-6">
          <a
            href="#pricing"
            className="btn-primary w-full text-center"
            onClick={closeMenu}
          >
            Join FitNoD
          </a>
        </div>
      </div>
    </>
  );
}
