import React, { useEffect, useRef, useState } from 'react';
import Spline from '@splinetool/react-spline';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Rocket, Sun, MoonStar } from 'lucide-react';

// Lightweight particle layer tailored for the hero
function HeroParticles() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width = (canvas.width = canvas.clientWidth);
    let height = (canvas.height = canvas.clientHeight);
    let raf;

    const PARTICLE_COUNT = Math.min(80, Math.floor((width * height) / 20000));

    const particles = new Array(PARTICLE_COUNT).fill(0).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.8 + 0.4,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      a: Math.random() * 0.6 + 0.2,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(99,102,241,${p.a})`; // indigo
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };

    const handleResize = () => {
      width = canvas.width = canvas.clientWidth;
      height = canvas.height = canvas.clientHeight;
    };

    draw();
    window.addEventListener('resize', handleResize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ filter: 'blur(0px)' }}
    />
  );
}

export default function Hero3D({ onExplore }) {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.2]);
  const y = useTransform(scrollYProgress, [0, 0.3], [0, -60]);

  // FPS-aware animation throttle for parallax shadow glow
  const [glow, setGlow] = useState(0.4);
  useEffect(() => {
    let last = performance.now();
    let raf;
    const loop = (t) => {
      const dt = t - last;
      last = t;
      // small pulsing
      setGlow((g) => 0.35 + 0.05 * Math.sin(t / 900));
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section id="home" className="relative min-h-[90vh] md:min-h-screen overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 dark:from-black dark:via-slate-900 dark:to-black">
      <div className="absolute inset-0">
        <motion.div style={{ opacity, y }} className="h-full w-full">
          <Spline scene="https://prod.spline.design/VyGeZv58yuk8j7Yy/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </motion.div>
        <HeroParticles />
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-transparent to-slate-950/70 dark:to-black/80" />
      </div>

      <div className="relative z-10 container mx-auto px-6 pt-28 md:pt-40 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 bg-white/10 text-white dark:text-white border border-white/20 backdrop-blur">
            <Rocket className="w-4 h-4 text-indigo-300" />
            <span className="text-xs tracking-wide">Digital Strategy • AI-Driven SEO • Global Remote</span>
          </div>
          <h1 className="mt-6 text-4xl md:text-6xl font-extrabold leading-tight text-white">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white to-cyan-300">
              Mohamed ElSaadawey
            </span>
          </h1>
          <p className="mt-3 text-lg md:text-xl text-slate-200">
            Digital Strategy Consultant blending growth frameworks with AI to accelerate brand reach and revenue across global markets.
          </p>

          <div className="mt-6 grid grid-cols-3 max-w-md gap-3">
            <div className="rounded-xl border border-white/15 bg-white/5 p-3 text-center">
              <div className="text-2xl md:text-3xl font-bold text-white">140K+</div>
              <div className="text-xs text-slate-300">Followers</div>
            </div>
            <div className="rounded-xl border border-white/15 bg-white/5 p-3 text-center">
              <div className="text-2xl md:text-3xl font-bold text-white">AI</div>
              <div className="text-xs text-slate-300">Driven SEO</div>
            </div>
            <div className="rounded-xl border border-white/15 bg-white/5 p-3 text-center">
              <div className="text-2xl md:text-3xl font-bold text-white">🌍</div>
              <div className="text-xs text-slate-300">Global Remote</div>
            </div>
          </div>

          <div className="mt-8 flex gap-3">
            <button
              onClick={onExplore}
              className="relative inline-flex items-center justify-center px-5 py-3 rounded-xl font-semibold text-slate-900 dark:text-white bg-white hover:bg-slate-100 dark:bg-indigo-600 dark:hover:bg-indigo-500 shadow-lg shadow-indigo-600/20 transition-all"
            >
              Explore My Story
            </button>
            <a
              href="#work"
              className="inline-flex items-center justify-center px-5 py-3 rounded-xl font-semibold text-white/90 hover:text-white border border-white/20 hover:border-white/40 transition"
            >
              View Work
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        aria-hidden
        style={{ opacity: glow }}
        className="pointer-events-none absolute -bottom-32 left-1/2 -translate-x-1/2 h-64 w-[90%] bg-indigo-500/20 blur-3xl rounded-full"
      />
    </section>
  );
}
