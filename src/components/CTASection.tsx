'use client';

import { motion } from 'framer-motion';
import { trackCTAClickAssessment, trackCTAClickConsultation, trackEmailClick } from '@/lib/analytics';

export default function CTASection() {
  const handleAssessmentClick = () => {
    trackCTAClickAssessment({ location: 'cta_section' });
    trackEmailClick();
  };

  const handleConsultationClick = () => {
    trackCTAClickConsultation({ location: 'cta_section' });
    trackEmailClick();
  };
  return (
    <section id="consultation" className="section bg-black text-white">
      <div className="container-custom text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-black mb-8">
            Ready to Start?
          </h2>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto font-light">
            Don't wait until 2026. Get compliant now and turn regulation into competitive advantage.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Option 1: Free Assessment */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="border-2 border-white p-8 bg-white text-black"
              id="assessment"
            >
              <h3 className="text-2xl font-bold mb-4">
                Free AI Risk Assessment
              </h3>
              <p className="mb-6">
                30-minute consultation with AI system inventory review, preliminary risk classification, and compliance roadmap.
              </p>
              <ul className="text-left space-y-2 mb-8 text-sm">
                <li className="flex items-start gap-2">
                  <span className="font-mono">✓</span>
                  <span>AI system inventory review</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-mono">✓</span>
                  <span>Preliminary risk classification</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-mono">✓</span>
                  <span>Compliance roadmap (high-level)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-mono">✓</span>
                  <span>Pricing estimate</span>
                </li>
              </ul>
              <a
                href="mailto:emanuele@aiactcompliance.eu?subject=Free AI Risk Assessment"
                onClick={handleAssessmentClick}
                className="block py-4 px-6 bg-black text-white border-2 border-black hover:bg-gray-800 transition-all font-bold text-center"
              >
                Schedule Free Assessment →
              </a>
            </motion.div>

            {/* Option 2: Quick Consultation */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="border-2 border-white p-8"
            >
              <h3 className="text-2xl font-bold mb-4">
                15-Min Consultation
              </h3>
              <p className="mb-6">
                Quick compliance Q&A, high-level feasibility check, resource recommendations, and next steps guidance.
              </p>
              <ul className="text-left space-y-2 mb-8 text-sm">
                <li className="flex items-start gap-2">
                  <span className="font-mono">✓</span>
                  <span>Quick compliance Q&A</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-mono">✓</span>
                  <span>High-level feasibility check</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-mono">✓</span>
                  <span>Resource recommendations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-mono">✓</span>
                  <span>Next steps guidance</span>
                </li>
              </ul>
              <a
                href="mailto:emanuele@aiactcompliance.eu?subject=15-Min Consultation Request"
                onClick={handleConsultationClick}
                className="block py-4 px-6 bg-white text-black border-2 border-white hover:bg-gray-100 transition-all font-bold text-center"
              >
                Book 15-Min Call →
              </a>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-20 flex flex-wrap justify-center gap-12"
          >
            <div>
              <div className="text-5xl font-black mb-2">9 months</div>
              <div className="font-mono text-sm">until deadline</div>
            </div>
            <div>
              <div className="text-5xl font-black mb-2">€35M</div>
              <div className="font-mono text-sm">maximum fine</div>
            </div>
            <div>
              <div className="text-5xl font-black mb-2">80%</div>
              <div className="font-mono text-sm">time savings</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
