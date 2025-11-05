import React, { useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import Hero3D from './components/Hero3D';
import WorkGallery from './components/WorkGallery';
import About from './components/About';
import ContactFooter from './components/ContactFooter';
import ThemeToggle from './components/ThemeToggle';

export default function App() {
  const workRef = useRef(null);

  const scrollToWork = () => {
    const el = document.getElementById('about');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-white">
      <Hero3D onExplore={scrollToWork} />
      <AnimatePresence>
        <WorkGallery />
        <About />
        <ContactFooter />
      </AnimatePresence>
      <ThemeToggle />
    </div>
  );
}
