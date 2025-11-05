import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initial = stored ? stored === 'dark' : prefersDark;
    setDark(initial);
  }, []);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      // Adjust meta theme-color for mobile
      let meta = document.querySelector('meta[name="theme-color"]');
      if (meta) meta.setAttribute('content', '#0b1220');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      let meta = document.querySelector('meta[name="theme-color"]');
      if (meta) meta.setAttribute('content', '#ffffff');
    }
  }, [dark]);

  return (
    <button
      aria-label="Toggle theme"
      onClick={() => setDark((d) => !d)}
      className="fixed right-4 bottom-4 z-50 inline-flex items-center justify-center w-11 h-11 rounded-full border border-white/15 bg-white/10 backdrop-blur text-white hover:bg-white/20 transition"
    >
      {dark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5 text-slate-900" />}
    </button>
  );
}
