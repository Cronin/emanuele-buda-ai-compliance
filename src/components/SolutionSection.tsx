'use client';

import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'AI System Inventory',
    description: 'Automated discovery and cataloging of all AI systems in your organization',
    features: [
      'Complete system mapping',
      'Dependency tracking',
      'Risk classification',
      'Stakeholder identification'
    ]
  },
  {
    number: '02',
    title: 'Risk Classification',
    description: 'Intelligent assessment against EU AI Act high-risk categories',
    features: [
      '8-category framework analysis',
      'Decision-making role evaluation',
      'Fundamental rights impact assessment',
      'Automated classification reports'
    ]
  },
  {
    number: '03',
    title: 'Automated Documentation',
    description: 'Generate 80% of required documentation from existing systems',
    features: [
      'Technical documentation generation',
      'Risk management frameworks',
      'Data governance protocols',
      'Quality management systems'
    ]
  },
  {
    number: '04',
    title: 'Continuous Monitoring',
    description: '24/7 compliance monitoring with real-time alerts',
    features: [
      'Performance degradation detection',
      'Bias drift monitoring',
      'Audit trail logging',
      'Compliance dashboard'
    ]
  }
];

export default function SolutionSection() {
  return (
    <section className="section bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            The Solution
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            4-step automated compliance framework
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="border-2 border-black p-8 bg-white hover:bg-gray-50 transition-colors"
            >
              <div className="font-mono text-6xl font-black text-gray-200 mb-4">
                {step.number}
              </div>
              <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
              <p className="text-lg mb-6 text-gray-600">{step.description}</p>
              <ul className="space-y-2">
                {step.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="font-mono font-bold">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Process Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 border-2 border-black p-8 md:p-12 bg-gray-50"
        >
          <h3 className="text-3xl font-bold mb-8 text-center">
            From Audit to Compliance in 30 Days
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-5xl font-black mb-2">Week 1</div>
              <div className="font-mono text-sm">Inventory & Classification</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-black mb-2">Week 2</div>
              <div className="font-mono text-sm">Documentation Generation</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-black mb-2">Week 3</div>
              <div className="font-mono text-sm">Risk Management Setup</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-black mb-2">Week 4</div>
              <div className="font-mono text-sm">Validation & Go-Live</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
