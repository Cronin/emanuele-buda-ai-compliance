'use client';

import { motion } from 'framer-motion';

export default function UrgencyBadge() {
  return (
    <section className="relative py-24 bg-black text-white overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px]" />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="inline-flex items-center gap-2 border border-slate-700 px-4 py-2 rounded-full font-mono text-xs tracking-wider bg-slate-900/50 backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
            DEADLINE ALERT
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-black tracking-tight">
            <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
              August 2, 2026
            </span>
          </h2>

          <p className="text-lg md:text-xl text-slate-300 font-light leading-relaxed">
            All high-risk AI systems must be EU AI Act compliant.
          </p>

          <div className="pt-4">
            <p className="text-2xl md:text-3xl font-bold text-white">
              Non-compliance = <span className="text-red-400">€15M-€35M</span> fine
            </p>
            <p className="text-lg text-slate-400 mt-2">
              or up to 7% of global revenue
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
