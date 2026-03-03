'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { GlassCard } from './glass-card';
import { Heart } from 'lucide-react';

export function CTASection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/10">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <GlassCard className="p-12 text-center bg-gradient-to-r from-cyan-500/10 to-blue-500/10">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block mb-6"
            >
              <Heart className="w-12 h-12 text-red-400 fill-red-400" />
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Be the reason someone smiles today
            </h2>
            
            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
              Your contribution, no matter the size, can change lives. Join thousands of donors making a real difference.
            </p>

            <motion.div
              className="flex flex-col sm:flex-row justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <Link href="/donate">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105 text-lg">
                  Start Donating
                </button>
              </Link>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-xl border border-white/20 text-white font-semibold rounded-2xl hover:bg-white/20 transition-all duration-300 text-lg">
                Learn More
              </button>
            </motion.div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
