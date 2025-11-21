'use client';

import { motion } from 'framer-motion';
import { LampContainer } from './ui/lamp';

export default function Hero() {
  return (
    <LampContainer className="bg-black">
      <motion.div
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="flex flex-col items-center gap-6 px-6"
      >
        {/* Main Headline */}
        <h1 className="mt-8 bg-gradient-to-br from-white to-slate-400 py-4 bg-clip-text text-center text-4xl md:text-6xl lg:text-7xl font-black tracking-tight text-transparent">
          AI Act Compliance
          <br />
          in 30 Days
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl lg:text-2xl font-light text-slate-300 max-w-3xl text-center">
          Turn Your High-Risk AI Systems from Liability to Documented Assets
        </p>

        {/* Tagline Pills */}
        <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4 font-mono text-xs md:text-sm">
          <span className="border border-slate-600 text-slate-300 px-4 py-2 rounded-full backdrop-blur-sm bg-black/30">
            August 2026 Deadline
          </span>
          <span className="border border-slate-600 text-slate-300 px-4 py-2 rounded-full backdrop-blur-sm bg-black/30">
            €35M Fines
          </span>
          <span className="border border-slate-600 text-slate-300 px-4 py-2 rounded-full backdrop-blur-sm bg-black/30">
            9 Months Left
          </span>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <a
            href="#assessment"
            className="px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-slate-200 transition-all duration-300 hover:scale-105 text-center"
          >
            Get Free AI Risk Assessment
          </a>
          <a
            href="#consultation"
            className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transition-all duration-300 text-center"
          >
            Schedule 15-Min Consultation
          </a>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="mt-16"
        >
          <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </motion.div>
    </LampContainer>
  );
}
