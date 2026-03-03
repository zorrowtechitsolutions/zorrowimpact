'use client';

import { motion } from 'framer-motion';
import { GlassCard } from './glass-card';
import { AnimatedCounter } from './animated-counter';

export function ImpactStatsSection() {
  const stats = [
    { value: 12500000, prefix: '₹', suffix: '+', label: 'Total Raised' },
    { value: 45000, suffix: '+', label: 'Lives Impacted' },
    { value: 120, suffix: '+', label: 'NGOs Joined' },
    { value: 300, suffix: '+', label: 'Projects Funded' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {stats.map((stat, idx) => (
            <motion.div key={idx} variants={itemVariants}>
              <GlassCard className="p-6 text-center hover:bg-white/20 transition-all duration-300">
                <div className="text-4xl md:text-5xl font-bold mb-2" style={{ backgroundImage: 'linear-gradient(135deg, #00d4ff 0%, #0066ff 50%, #7c3aed 100%)', backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  <AnimatedCounter
                    value={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                  />
                </div>
                <p className="text-white/70 text-sm">{stat.label}</p>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
