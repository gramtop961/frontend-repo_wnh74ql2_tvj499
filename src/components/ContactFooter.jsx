import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Copy, Linkedin, Twitter } from 'lucide-react';

function copy(text) {
  if (navigator && navigator.clipboard) navigator.clipboard.writeText(text);
}

export default function ContactFooter() {
  const email = 'hello@elsaadawey.com';
  const phone = '+201234567890';

  return (
    <footer id="contact" className="relative bg-slate-950 pt-16 pb-10 border-t border-white/10">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-x-0 -top-20 h-40 bg-gradient-to-b from-cyan-500/20 to-transparent blur-2xl" />
      </div>
      <div className="relative container mx-auto px-6">
        <h2 className="text-2xl font-bold text-white">Let’s connect</h2>
        <p className="mt-2 text-slate-300 max-w-2xl">Open to consulting, collaborations, and growth partnerships.</p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="rounded-xl border border-white/10 bg-white/5 p-4">
            <div className="flex items-center gap-3 text-white">
              <Mail className="w-5 h-5 text-indigo-300" /> Email
            </div>
            <div className="mt-2 flex items-center gap-2 text-slate-200">
              <span>{email}</span>
              <button aria-label="Copy email" onClick={() => copy(email)} className="p-1 rounded hover:bg-white/10">
                <Copy className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-4">
            <div className="flex items-center gap-3 text-white">
              <Phone className="w-5 h-5 text-indigo-300" /> Phone
            </div>
            <div className="mt-2 flex items-center gap-2 text-slate-200">
              <span>{phone}</span>
              <button aria-label="Copy phone" onClick={() => copy(phone)} className="p-1 rounded hover:bg-white/10">
                <Copy className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-4">
            <div className="flex items-center gap-3 text-white">
              <MapPin className="w-5 h-5 text-indigo-300" /> Location
            </div>
            <p className="mt-2 text-slate-200">Global Remote</p>
          </div>
        </div>

        <div className="mt-6 flex items-center gap-3">
          <a className="inline-flex items-center gap-2 text-slate-300 hover:text-white" href="https://www.linkedin.com" target="_blank" rel="noreferrer">
            <Linkedin className="w-5 h-5" /> LinkedIn
          </a>
          <a className="inline-flex items-center gap-2 text-slate-300 hover:text-white" href="https://twitter.com" target="_blank" rel="noreferrer">
            <Twitter className="w-5 h-5" /> Twitter
          </a>
        </div>

        <div className="mt-10 flex items-center justify-between border-t border-white/10 pt-6 text-slate-400 text-sm">
          <span>© {new Date().getFullYear()} Mohamed ElSaadawey — Digital Strategy Consultant</span>
          <span>Built with love and systems thinking</span>
        </div>
      </div>
    </footer>
  );
}
