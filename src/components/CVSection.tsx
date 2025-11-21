'use client';

import { motion } from 'framer-motion';
import { useViewportTracking } from '@/lib/hooks/useConversionTracking';

interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
  color: string;
}

const experiences: Experience[] = [
  {
    company: 'Tesla',
    role: 'GRC & Technical Program Manager',
    period: 'Apr 2025 - Present',
    description: [
      '50+ EMEA Entities (compliance programs)',
      'GRC Innovation & Automation',
      'Technical Program Leadership'
    ],
    color: 'from-slate-900 to-black'
  },
  {
    company: 'Sonar',
    role: 'Senior Cyber Security Analyst',
    period: 'Dec 2022 - Jan 2025',
    description: [
      'Code Quality & Security Leadership',
      'Vulnerability Detection Systems',
      'Security Architecture'
    ],
    color: 'from-slate-800 to-slate-900'
  },
  {
    company: 'Deloitte',
    role: 'Cyber Security Strategy Consultant',
    period: 'Nov 2020 - Nov 2021',
    description: [
      'Enterprise Security Consulting',
      'Risk Management Frameworks',
      'Compliance Strategy'
    ],
    color: 'from-slate-700 to-slate-800'
  },
  {
    company: 'Vikings Inc.',
    role: 'Co-Founder',
    period: 'Sep 2017 - May 2018',
    description: [
      'Startup Leadership',
      'Product Development',
      'Go-to-Market Strategy'
    ],
    color: 'from-slate-600 to-slate-700'
  }
];

const certifications = [
  'CISM Certified',
  'ISO 27001 Certified',
  'PMP Certified',
  'M.Sc. Engineering (Computer Science)'
];

export default function CVSection() {
  const cvSectionRef = useViewportTracking('cv_view', {
    enabled: true,
    threshold: 0.3,
    trackOnce: true,
  });

  return (
    <section className="py-32 bg-black text-white relative overflow-hidden" ref={cvSectionRef as any}>
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px]" />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto font-light">
            From Tesla to Startups: Building Compliance at Scale
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="max-w-5xl mx-auto space-y-8 mb-20">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative border border-slate-800 p-8 bg-gradient-to-br from-slate-900/50 to-black/50 backdrop-blur-sm hover:border-slate-600 transition-all duration-300">
                {/* Animated gradient border on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-700/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-2">{exp.company}</h3>
                    <p className="text-slate-400 text-lg">{exp.role}</p>
                  </div>
                  <div className="font-mono text-sm text-slate-500 md:text-right">
                    {exp.period}
                  </div>
                </div>

                <div className="relative grid grid-cols-1 md:grid-cols-3 gap-4">
                  {exp.description.map((desc, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 text-slate-300"
                    >
                      <span className="text-slate-600 mt-1">→</span>
                      <span className="text-sm">{desc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <h3 className="text-3xl font-bold mb-8 text-center">
            Certifications & Education
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="border border-slate-800 p-6 text-center bg-slate-900/30 backdrop-blur-sm hover:border-slate-600 hover:bg-slate-800/40 transition-all duration-300"
              >
                <p className="font-semibold text-sm">{cert}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          <div className="text-center border border-slate-800 p-8 bg-slate-900/30 backdrop-blur-sm">
            <div className="text-5xl font-black mb-2">50+</div>
            <div className="text-slate-400 text-sm">EMEA Entities</div>
            <div className="text-slate-500 text-xs mt-1">Compliance programs scaled at Tesla</div>
          </div>
          <div className="text-center border border-slate-800 p-8 bg-slate-900/30 backdrop-blur-sm">
            <div className="text-5xl font-black mb-2">€35M</div>
            <div className="text-slate-400 text-sm">Fines Avoided</div>
            <div className="text-slate-500 text-xs mt-1">Through automation & compliance</div>
          </div>
          <div className="text-center border border-slate-800 p-8 bg-slate-900/30 backdrop-blur-sm">
            <div className="text-5xl font-black mb-2">80%</div>
            <div className="text-slate-400 text-sm">Time Savings</div>
            <div className="text-slate-500 text-xs mt-1">Documentation automated vs manual</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
