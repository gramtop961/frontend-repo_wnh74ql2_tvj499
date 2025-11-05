import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Tag, X, Filter, Play } from 'lucide-react';

const PROJECTS = [
  {
    id: 'p1',
    title: 'AI-First Content Engine',
    category: 'Digital Strategy',
    year: 2024,
    description: 'Built a programmatic SEO and content pipeline that scaled to 1M monthly impressions.',
    tags: ['AI', 'SEO', 'Automation'],
    metrics: ['+320% Organic', 'CTR 5.8%', 'Bounce -18%'],
    images: [
      'https://images.unsplash.com/photo-1518773553398-650c184e0bb3?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1600&auto=format&fit=crop',
    ],
  },
  {
    id: 'p2',
    title: 'Brand Revamp for SaaS',
    category: 'Brand Management',
    year: 2023,
    description: 'Repositioned brand narrative and visual system, lifting demo requests by 42%.',
    tags: ['Brand', 'Positioning', 'CX'],
    metrics: ['+42% Demos', '+27 NPS', 'CAC -15%'],
    images: [
      'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1521737604893-ff0f0cc8b38c?q=80&w=1600&auto=format&fit=crop',
    ],
  },
  {
    id: 'p3',
    title: 'Creator Growth System',
    category: 'Content Creation',
    year: 2024,
    description: 'Built short-form pipeline, templates, and analytics for daily growth at scale.',
    tags: ['Reels', 'TikTok', 'Analytics'],
    metrics: ['+140K Followers', '2.1x Watchtime', 'CPV -36%'],
    images: [
      'https://images.unsplash.com/photo-1541664827708-2173d1cfd6f7?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1495567720989-cebdbdd97913?q=80&w=1600&auto=format&fit=crop',
    ],
  },
];

const CATEGORIES = ['All', 'Digital Strategy', 'Content Creation', 'Brand Management'];

function ProjectCard({ project }) {
  const [hoverIndex, setHoverIndex] = useState(0);

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="group relative rounded-2xl border border-white/10 bg-white/5 dark:bg-white/5 backdrop-blur overflow-hidden"
    >
      <div
        className="relative h-48 md:h-56 overflow-hidden"
        onMouseEnter={() => setHoverIndex((i) => (i + 1) % project.images.length)}
        onMouseLeave={() => setHoverIndex(0)}
      >
        <AnimatePresence initial={false}>
          <motion.img
            key={project.images[hoverIndex]}
            src={project.images[hoverIndex]}
            alt={`${project.title} preview ${hoverIndex + 1}`}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
      </div>

      <div className="p-4">
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-lg font-semibold text-white">{project.title}</h3>
          <span className="text-xs text-slate-300">{project.year}</span>
        </div>
        <div className="mt-1 flex items-center gap-2 text-xs text-indigo-300">
          <Tag className="w-3 h-3" /> {project.category}
        </div>
        <p className="mt-2 text-sm text-slate-300">{project.description}</p>

        <div className="mt-3 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <span key={t} className="text-[11px] px-2 py-1 rounded-full bg-indigo-500/15 text-indigo-300 border border-indigo-400/20">
              {t}
            </span>
          ))}
        </div>

        <div className="mt-3 grid grid-cols-3 gap-2">
          {project.metrics.map((m) => (
            <div key={m} className="text-[11px] text-center rounded-md bg-white/5 border border-white/10 px-2 py-1 text-slate-200">
              {m}
            </div>
          ))}
        </div>

        <a
          href={`#/project/${project.id}`}
          className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-medium px-4 py-2 transition"
        >
          View Case Study
        </a>
      </div>
    </motion.article>
  );
}

export default function WorkGallery() {
  const [category, setCategory] = useState('All');
  const [tags, setTags] = useState([]);

  const allTags = useMemo(() => {
    const s = new Set();
    PROJECTS.forEach((p) => p.tags.forEach((t) => s.add(t)));
    return Array.from(s);
  }, []);

  const filtered = useMemo(() => {
    return PROJECTS.filter((p) => {
      const catOk = category === 'All' || p.category === category;
      const tagsOk = tags.length === 0 || tags.every((t) => p.tags.includes(t));
      return catOk && tagsOk;
    });
  }, [category, tags]);

  const toggleTag = (t) => {
    setTags((prev) => (prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t]));
  };

  const clearFilters = () => {
    setCategory('All');
    setTags([]);
  };

  return (
    <section id="work" className="relative py-20 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="absolute inset-0 pointer-events-none opacity-30 [mask-image:radial-gradient(60%_60%_at_50%_0%,black,transparent)]">
        {/* Simple section-specific particles (data-flow inspired lines) */}
        <svg className="w-full h-full" preserveAspectRatio="none">
          <defs>
            <linearGradient id="grad" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0%" stopColor="#6366f1" />
              <stop offset="100%" stopColor="#22d3ee" />
            </linearGradient>
          </defs>
          {Array.from({ length: 16 }).map((_, i) => (
            <path key={i} d={`M0 ${i * 40} C 25 ${i * 35}, 75 ${i * 45}, 100  ${i * 40}`}
              stroke="url(#grad)" strokeWidth="0.6" fill="none" opacity={0.5} vectorEffect="non-scaling-stroke" />
          ))}
        </svg>
      </div>

      <div className="relative container mx-auto px-6">
        <div className="flex items-center justify-between gap-3">
          <h2 className="text-2xl md:text-3xl font-bold text-white">Selected Work</h2>
          <div className="text-sm text-slate-300">{filtered.length} shown</div>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2 overflow-x-auto">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`px-3 py-1.5 rounded-full border transition text-sm ${category === c ? 'bg-indigo-600 border-indigo-500 text-white' : 'border-white/15 text-slate-200 hover:border-white/30'}`}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="h-5 w-px bg-white/10" />
          <div className="flex flex-wrap items-center gap-2">
            {allTags.map((t) => (
              <button
                key={t}
                onClick={() => toggleTag(t)}
                className={`px-2.5 py-1 rounded-full text-xs border transition ${tags.includes(t) ? 'bg-cyan-600/60 border-cyan-400/40 text-white' : 'border-white/15 text-slate-200 hover:border-white/30'}`}
              >
                #{t}
              </button>
            ))}
          </div>
          {(category !== 'All' || tags.length > 0) && (
            <button onClick={clearFilters} className="ml-auto inline-flex items-center gap-2 text-sm text-slate-300 hover:text-white">
              <X className="w-4 h-4" /> Clear Filters
            </button>
          )}
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filtered.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </AnimatePresence>
        </div>

        <div className="mt-14">
          <h3 className="text-xl font-semibold text-white flex items-center gap-2">
            <Play className="w-5 h-5 text-cyan-300" /> Content Reels
          </h3>
          <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'https://www.youtube.com/embed/dQw4w9WgXcQ',
              'https://www.youtube.com/embed/oHg5SJYRHA0',
              'https://www.youtube.com/embed/3GwjfUFyY6M',
              'https://www.youtube.com/embed/9bZkp7q19f0',
            ].map((src, i) => (
              <div key={i} className="aspect-[9/16] rounded-xl overflow-hidden border border-white/10 bg-white/5">
                <iframe
                  title={`reel-${i}`}
                  src={src}
                  loading="lazy"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
