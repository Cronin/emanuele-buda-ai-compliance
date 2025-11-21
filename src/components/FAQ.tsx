'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const faqs = [
  {
    question: "Does the AI Act apply to my company if we're not based in the EU?",
    answer: "Yes, if your AI systems are used by people in the EU, affect people in the EU, or you provide AI systems to EU-based companies. The AI Act has extraterritorial reach, similar to GDPR. If you sell to EU customers, you're in scope."
  },
  {
    question: "What if we use third-party AI services (OpenAI, AWS, etc.)?",
    answer: "You're still responsible. The AI Act distinguishes between Providers (companies that develop AI) and Deployers (companies that use AI). Deployers have compliance obligations even when using third-party AI. You must ensure the third-party system is compliant, document your use case and oversight measures, monitor for bias and performance issues, and maintain human oversight."
  },
  {
    question: "Can't we just wait for clearer guidance from regulators?",
    answer: "No. The deadline is fixed (August 2, 2026), regulators are overwhelmed and won't provide hand-holding, first movers get grace (early compliance demonstrates good faith), and late movers face scrutiny. Companies that wait are companies that pay fines."
  },
  {
    question: "How long does compliance actually take?",
    answer: "It depends on your approach: Manual in-house takes 3-6 months per system (15-30 months for 5 systems), manual with consultants takes 2-4 months per system (10-20 months for 5), and automated takes 3-4 weeks per system (4-5 months total). Automation is the only way to meet the deadline if you have multiple systems."
  },
  {
    question: "What happens if we're not compliant by August 2, 2026?",
    answer: "Enforcement happens in phases: Phase 1 (Aug-Dec 2026) brings warnings and compliance notices. Phase 2 (Jan-Jun 2027) brings fines of €15M or 3% of revenue, temporary system shutdowns, and public enforcement notices. Phase 3 (Jul 2027+) brings maximum fines of €35M or 7% of revenue, permanent system bans, and criminal liability for severe cases."
  },
  {
    question: "Can we do this in-house, or do we need external help?",
    answer: "In-house is possible IF you have legal expertise (understanding EU AI Act), technical expertise (ML engineers for documentation), process expertise (compliance professionals), and time (400+ hours per system). Most companies need external help because this combination of expertise is rare, the opportunity cost is too high, and mistakes are expensive. The smart approach: use automation + lightweight consulting to get 90% there, then validate and maintain internally."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="section bg-gray-50">
      <div className="container-custom max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left border-2 border-black p-6 bg-white hover:bg-gray-50 transition-colors"
              >
                <div className="flex justify-between items-start gap-4">
                  <h3 className="text-lg font-bold pr-8">{faq.question}</h3>
                  <span className="text-2xl font-mono flex-shrink-0">
                    {openIndex === index ? '−' : '+'}
                  </span>
                </div>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 text-gray-700 leading-relaxed"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
