'use client';

import { motion } from 'framer-motion';

const pricingTiers = [
  {
    name: 'AI Act Assessment + Automation',
    price: '€50,000',
    period: 'one-time',
    description: 'Complete compliance setup for up to 5 high-risk AI systems',
    features: [
      'Complete AI system inventory',
      'Risk classification for all systems',
      'Automated documentation platform setup',
      '5 high-risk systems documented',
      'Continuous monitoring configured',
      '90-day compliance support',
      'ROI: €165,000 savings vs manual'
    ],
    cta: 'Get Started',
    highlighted: false
  },
  {
    name: 'Continuous Monitoring',
    price: '€5,000',
    period: 'per month',
    description: 'Ongoing compliance maintenance and monitoring',
    features: [
      '24/7 compliance monitoring',
      'Quarterly compliance audits',
      'Documentation updates for changes',
      'Regulatory update alerts',
      'Incident response support',
      'Unlimited compliance consulting',
      'Risk reduction value: 250x'
    ],
    cta: 'Subscribe',
    highlighted: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'pricing',
    description: 'For organizations with 10+ high-risk AI systems',
    features: [
      'Everything in Options 1 & 2',
      'Dedicated compliance manager',
      'Custom automation workflows',
      'Priority regulatory support',
      'Executive compliance briefings',
      'Litigation support (if needed)',
      'Multi-region compliance'
    ],
    cta: 'Contact Sales',
    highlighted: false
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="section bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            Pricing
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            Investment in compliance today = avoiding €35M fines tomorrow
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`border-2 p-8 transition-all ${
                tier.highlighted
                  ? 'border-black bg-black text-white scale-105'
                  : 'border-black bg-white hover:bg-gray-50'
              }`}
            >
              <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
              <div className="mb-4">
                <span className="text-5xl font-black">{tier.price}</span>
                <span className="text-lg ml-2 font-mono">{tier.period}</span>
              </div>
              <p className={`mb-6 ${tier.highlighted ? 'text-gray-300' : 'text-gray-600'}`}>
                {tier.description}
              </p>
              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="font-mono font-bold">✓</span>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#consultation"
                className={`block text-center py-4 px-6 font-bold border-2 transition-all ${
                  tier.highlighted
                    ? 'bg-white text-black border-white hover:bg-gray-100'
                    : 'bg-black text-white border-black hover:bg-gray-800'
                }`}
              >
                {tier.cta}
              </a>
            </motion.div>
          ))}
        </div>

        {/* ROI Calculator */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 border-2 border-black p-8 md:p-12 bg-gray-50"
        >
          <h3 className="text-3xl font-bold mb-8 text-center">
            ROI Calculator: Manual vs Automated
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border-2 border-black p-6 bg-white">
              <div className="font-mono text-sm mb-2">MANUAL COMPLIANCE</div>
              <div className="text-4xl font-black mb-4">€215,000</div>
              <ul className="space-y-2 text-sm">
                <li>• 430 hours per system</li>
                <li>• 2,150 total hours (5 systems)</li>
                <li>• €100/hour engineering cost</li>
                <li>• High error risk</li>
                <li>• 6+ months timeline</li>
              </ul>
            </div>
            <div className="border-2 border-black p-6 bg-black text-white">
              <div className="font-mono text-sm mb-2">AUTOMATED COMPLIANCE</div>
              <div className="text-4xl font-black mb-4">€50,000</div>
              <ul className="space-y-2 text-sm">
                <li>• 43 hours per system</li>
                <li>• 215 total hours (5 systems)</li>
                <li>• 90% time savings</li>
                <li>• Continuous updates</li>
                <li>• 30-day timeline</li>
              </ul>
            </div>
          </div>
          <div className="text-center mt-8">
            <div className="text-5xl font-black mb-2">€165,000 SAVED</div>
            <div className="font-mono">+ 1,935 hours back to your team</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
