import React from 'react';
import { motion } from 'framer-motion';
import { Award, Languages, BookOpenCheck, Quote } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative py-20 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <svg className="w-full h-full" aria-hidden>
          {Array.from({ length: 40 }).map((_, i) => (
            <circle key={i} cx={(i * 80) % 1200} cy={(i * 50) % 700} r={(i % 5) + 1} fill="#22d3ee" />
          ))}
        </svg>
      </div>

      <div className="relative container mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-white">About Mohamed</h2>
        <p className="mt-3 max-w-3xl text-slate-300">
          Digital Strategy Consultant specializing in growth systems, AI-driven SEO, and brand acceleration. I help
          organizations translate business goals into data-backed roadmaps that deliver measurable impact.
        </p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-5"
          >
            <div className="flex items-center gap-3 text-white">
              <BookOpenCheck className="w-5 h-5 text-indigo-300" />
              <h3 className="font-semibold">Expertise</h3>
            </div>
            <ul className="mt-3 list-disc list-inside text-slate-300 text-sm space-y-1">
              <li>AI-driven SEO & Programmatic Content</li>
              <li>Go-to-Market & Positioning</li>
              <li>Brand Strategy & Narrative Design</li>
              <li>Growth Analytics & Experimentation</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-5"
          >
            <div className="flex items-center gap-3 text-white">
              <Languages className="w-5 h-5 text-indigo-300" />
              <h3 className="font-semibold">Languages</h3>
            </div>
            <p className="mt-3 text-slate-300 text-sm">English, Arabic</p>
            <div className="mt-4 flex flex-wrap gap-2 text-xs">
              <span className="px-2 py-1 rounded-full bg-indigo-600/20 border border-indigo-500/30 text-indigo-200">Certified GA4</span>
              <span className="px-2 py-1 rounded-full bg-indigo-600/20 border border-indigo-500/30 text-indigo-200">HubSpot</span>
              <span className="px-2 py-1 rounded-full bg-indigo-600/20 border border-indigo-500/30 text-indigo-200">Ahrefs</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-5"
          >
            <div className="flex items-center gap-3 text-white">
              <Award className="w-5 h-5 text-indigo-300" />
              <h3 className="font-semibold">Recognition</h3>
            </div>
            <ul className="mt-3 list-disc list-inside text-slate-300 text-sm space-y-1">
              <li>Scaled creators to 140K+ audience</li>
              <li>Brands featured in top tech publications</li>
              <li>Campaigns with 2x watch-time growth</li>
            </ul>
          </motion.div>
        </div>

        <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="flex items-start gap-3">
            <Quote className="w-6 h-6 text-indigo-300" />
            <p className="text-slate-200">
              I combine creative strategy with systems thinking. The goal is compounding growth — making content, brand,
              and product work together so every initiative amplifies the next.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
