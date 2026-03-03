'use client';

import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { GlassCard } from './glass-card';

export function TransparencySection() {
  const features = [
    'Track every rupee in real-time',
    'Receive regular project updates',
    'View photo proof of impact',
    'Access detailed impact timeline',
    'See verified NGO profiles',
    'Monitor project milestones',
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Total Transparency
            </h2>
            <p className="text-white/70 text-lg mb-8">
              We believe in complete transparency. Every donation, every project, every impact is tracked and verified. You deserve to know exactly where your money goes and the difference it makes.
            </p>

            <div className="space-y-4">
              {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                >
                  <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <span className="text-white/80">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Impact Image with Dashboard Overlay */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative h-96 rounded-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&h=400&fit=crop"
                alt="Humanitarian volunteers helping"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            </div>
            
            <GlassCard className="p-6 absolute bottom-6 left-6 right-6 max-w-sm">
              <div className="space-y-3">
                <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                  <p className="text-white/60 text-xs mb-1">Total Raised</p>
                  <div className="flex items-end gap-2">
                    <div className="flex-1">
                      <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-cyan-400 to-blue-500"
                          initial={{ width: 0 }}
                          whileInView={{ width: '85%' }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3, duration: 1.5 }}
                        />
                      </div>
                    </div>
                    <p className="text-white text-xs font-semibold">₹12.5M</p>
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
