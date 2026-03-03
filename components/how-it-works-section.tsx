'use client';

import { motion } from 'framer-motion';
import { Search, Shield, TrendingUp } from 'lucide-react';

export function HowItWorksSection() {
  const steps = [
    {
      icon: Search,
      title: 'Discover Causes',
      description: 'Browse verified NGOs and causes that align with your values.',
    },
    {
      icon: Shield,
      title: 'Donate Securely',
      description: 'Support causes with confidence using our secure payment gateway.',
    },
    {
      icon: TrendingUp,
      title: 'Track Impact',
      description: 'Monitor your contributions and see the real-world impact you make.',
    },
  ];

  return (
    <section
      className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{
        backgroundImage: 'url("/howit.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#020617]/85" />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Heading */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            How It Works
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Three simple steps to make a difference in the world.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2, duration: 0.8 }}
              >
                {/* Fake glass card */}
                <div className="
                  text-center p-10 rounded-3xl
                  border border-white/20
                  bg-gradient-to-b from-white/20 via-white/10 to-white/5
                  shadow-[0_8px_32px_rgba(0,0,0,0.35)]
                  backdrop-saturate-150
                ">
                  <div className="mb-6 flex justify-center">
                    <div className="p-4 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full">
                      <Icon className="w-8 h-8 text-cyan-400" />
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-3">
                    {step.title}
                  </h3>

                  <p className="text-white/70">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}