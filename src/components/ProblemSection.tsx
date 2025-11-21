'use client';

import { motion } from 'framer-motion';

export default function ProblemSection() {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:100px_100px]" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
            The Problem
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto font-light">
            Manual AI Act compliance is slow, expensive, and error-prone
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Column 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group relative border border-slate-200 p-8 bg-white hover:border-slate-400 transition-all duration-300 hover:shadow-xl"
          >
            <div className="absolute top-0 left-0 w-1 h-0 bg-black transition-all duration-300 group-hover:h-full" />
            <h3 className="text-2xl font-bold mb-4">The Challenge</h3>
            <p className="text-base text-slate-600 mb-6 leading-relaxed">
              EU AI Act requires comprehensive documentation for every high-risk AI system.
            </p>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <span className="text-slate-400 mt-1">→</span>
                <span>7 core documentation packages</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-slate-400 mt-1">→</span>
                <span>Continuous monitoring required</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-slate-400 mt-1">→</span>
                <span>Complex technical + legal requirements</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-slate-400 mt-1">→</span>
                <span>Must be audit-ready 24/7</span>
              </li>
            </ul>
          </motion.div>

          {/* Column 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="group relative border border-slate-200 p-8 bg-white hover:border-slate-400 transition-all duration-300 hover:shadow-xl"
          >
            <div className="absolute top-0 left-0 w-1 h-0 bg-black transition-all duration-300 group-hover:h-full" />
            <h3 className="text-2xl font-bold mb-4">The Risk</h3>
            <div className="mb-6">
              <div className="font-mono text-xs mb-3 text-slate-500">HIGH-RISK AI SYSTEMS:</div>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>Biometric identification</li>
                <li>Employment & HR algorithms</li>
                <li>Credit scoring & lending</li>
                <li>Critical infrastructure control</li>
                <li>Education & assessment tools</li>
                <li>Law enforcement AI</li>
              </ul>
            </div>
            <div className="border border-slate-900 p-5 bg-black text-white">
              <div className="text-3xl font-black mb-1">€15M-€35M</div>
              <div className="font-mono text-xs text-slate-400">OR 7% of global revenue</div>
            </div>
          </motion.div>

          {/* Column 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="group relative border border-slate-200 p-8 bg-white hover:border-slate-400 transition-all duration-300 hover:shadow-xl"
          >
            <div className="absolute top-0 left-0 w-1 h-0 bg-black transition-all duration-300 group-hover:h-full" />
            <h3 className="text-2xl font-bold mb-4">The Time Cost</h3>
            <div className="space-y-6">
              <div>
                <div className="font-mono text-xs mb-2 text-slate-500">MANUAL APPROACH:</div>
                <div className="text-4xl font-black mb-1">430 hours</div>
                <div className="text-sm text-slate-500">per AI system</div>
                <div className="mt-2 font-mono text-sm font-bold">= €43,000</div>
              </div>
              <div className="border-t border-slate-200 pt-6">
                <div className="font-mono text-xs mb-2 text-slate-500">AUTOMATED APPROACH:</div>
                <div className="text-4xl font-black mb-1">43 hours</div>
                <div className="text-sm text-slate-500">per AI system</div>
                <div className="mt-2 font-mono text-sm font-bold">= €4,300</div>
              </div>
              <div className="bg-black text-white p-3 text-center font-bold text-sm tracking-wider">
                90% TIME SAVINGS
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
