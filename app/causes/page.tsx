'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { GlassCard } from '@/components/glass-card';
import { Users, Heart, Utensils, AlertTriangle, Sparkles, Leaf } from 'lucide-react';

const CAUSE_CATEGORIES = [
  {
    icon: Users,
    title: 'Children Education',
    description: 'Empowering the next generation through quality education and scholarships.',
    color: 'from-blue-400 to-cyan-400',
    image: '/childedu.png',
  },
  {
    icon: Heart,
    title: 'Medical Help',
    description: 'Providing access to healthcare and medical treatment for those in need.',
    color: 'from-red-400 to-pink-400',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500&h=300&fit=crop',
  },
  {
    icon: Utensils,
    title: 'Food & Hunger',
    description: 'Fighting malnutrition and food insecurity in underserved communities.',
    color: 'from-orange-400 to-amber-400',
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=500&h=300&fit=crop',
  },
  {
    icon: AlertTriangle,
    title: 'Disaster Relief',
    description: 'Rapid response and recovery support for natural disasters and emergencies.',
    color: 'from-yellow-400 to-orange-400',
    image: '/disaster.webp',
  },
  {
    icon: Sparkles,
    title: 'Women Empowerment',
    description: 'Supporting women through skill development, safety, and economic independence.',
    color: 'from-purple-400 to-pink-400',
    image: '/women.png',
  },
  {
    icon: Leaf,
    title: 'Environment',
    description: 'Protecting our planet through conservation, reforestation, and sustainability.',
    color: 'from-green-400 to-emerald-400',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&h=300&fit=crop',
  },
];

export default function CausesPage() {
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
    <main className="bg-background text-foreground min-h-screen">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            className="text-5xl md:text-6xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Explore Causes That Matter
          </motion.h1>
          <motion.p
            className="text-xl text-white/70 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Choose from a wide range of verified causes and start making an impact today.
          </motion.p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {CAUSE_CATEGORIES.map((cause, idx) => {
              const Icon = cause.icon;
              return (
                <motion.div key={idx} variants={itemVariants}>
                  <GlassCard className="overflow-hidden group hover:bg-white/20 transition-all duration-300 h-full flex flex-col">
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={cause.image} 
                        alt={cause.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40" />
                    </div>
                    
                    {/* Content */}
                    <div className="p-6 flex flex-col flex-1">
                      <div className={`mb-4 p-3 bg-gradient-to-r ${cause.color} rounded-lg w-fit group-hover:scale-110 transition-transform`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {cause.title}
                      </h3>
                      <p className="text-white/70 mb-6 flex-1 text-sm">
                        {cause.description}
                      </p>
                      <Link href={`/causes/${cause.title.toLowerCase().replace(/\s+/g, '-')}`}>
                        <button className="w-full px-6 py-3 bg-white/10 backdrop-blur-xl border border-white/20 text-white font-semibold rounded-2xl hover:bg-white/20 transition-all duration-300">
                          View Projects
                        </button>
                      </Link>
                    </div>
                  </GlassCard>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
