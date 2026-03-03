'use client';

import { motion } from 'framer-motion';
import { Lightbulb, MessageSquare, Zap } from 'lucide-react';
import { GlassCard } from './glass-card';

export function AIFeatureSection() {
  const features = [
    {
      icon: Lightbulb,
      title: 'Smart Recommendations',
      description:
        'AI analyzes your preferences to recommend causes you care about.',
    },
    {
      icon: MessageSquare,
      title: 'Instant Support',
      description:
        'Get answers to any questions about causes and impact in seconds.',
    },
    {
      icon: Zap,
      title: 'Impact Insights',
      description:
        'Understand the real-world impact of your donations with AI analysis.',
    },
  ];

  return (
    <section
      className="relative py-24 px-4 sm:px-6 lg:px-8 border-t border-white/10 overflow-hidden"
      style={{
        backgroundImage: 'url("/aipage.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* 🔥 DARK GRADIENT OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e27]/90 via-[#0a0e27]/80 to-[#0a0e27]/95" />

      {/* subtle glow blobs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-cyan-500/20 blur-[140px] rounded-full" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-purple-500/20 blur-[140px] rounded-full" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* HEADER */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full text-cyan-400 text-sm font-semibold backdrop-blur-xl border border-white/10">
              Powered by AI
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Meet Zorrow AI
          </h2>

          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Your personal guide to making the greatest impact with your donations.
          </p>
        </motion.div>

        {/* FEATURE CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.7 }}
              >
                <GlassCard className="p-7 bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="mb-4 p-3 bg-gradient-to-r from-purple-400/20 to-pink-500/20 rounded-xl w-fit">
                    <Icon className="w-6 h-6 text-purple-400" />
                  </div>

                  <h3 className="text-lg font-semibold text-white mb-2">
                    {feature.title}
                  </h3>

                  <p className="text-white/60 text-sm">
                    {feature.description}
                  </p>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>

        {/* TESTIMONIAL CARD */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          <GlassCard className="p-10 text-center bg-white/5 backdrop-blur-xl border border-white/10">
            <p className="text-white/80 mb-4 text-lg">
              “Zorrow AI helped me find causes that truly align with my values.
              The impact tracking is incredible!”
            </p>
            <p className="text-cyan-400 font-semibold">— Sarah, Donor</p>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}