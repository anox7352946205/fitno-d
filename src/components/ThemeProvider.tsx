'use client';
import { useEffect } from 'react';

export default function ThemeProvider() {
  useEffect(() => {
    // Apply saved theme on mount
    const saved = localStorage.getItem('fitnod-theme') || 'light';
    document.documentElement.setAttribute('data-theme', saved);
  }, []);

  return null;
}
