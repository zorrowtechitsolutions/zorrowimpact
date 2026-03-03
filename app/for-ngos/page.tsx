'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { GlassCard } from '@/components/glass-card';
import { BarChart3, TrendingUp, MessageSquare, Eye, Users, Shield } from 'lucide-react';

const FEATURES = [
  {
    icon: TrendingUp,
    title: 'Fundraising Tools',
    description: 'Powerful tools to help you reach more donors and raise funds efficiently.',
  },
  {
    icon: BarChart3,
    title: 'Donor Analytics',
    description: 'Understand your donor base and optimize your fundraising strategy.',
  },
  {
    icon: MessageSquare,
    title: 'AI Writing Assistant',
    description: 'Create compelling campaign content with AI-powered suggestions.',
  },
  {
    icon: Eye,
    title: 'Transparency Dashboard',
    description: 'Track and display your impact with real-time transparency reports.',
  },
  {
    icon: Users,
    title: 'Donor Management',
    description: 'Build relationships with donors through personalized engagement.',
  },
  {
    icon: Shield,
    title: 'Trust & Security',
    description: 'Verified NGO profiles and secure payment processing for donors.',
  },
];

export default function ForNGOsPage() {
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
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 border-b border-white/10" style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/60 -z-10" style={{ top: 0, left: 0, right: 0, bottom: 0 }} />
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            className="inline-block mb-6"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <span className="px-4 py-2 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full text-cyan-400 text-sm font-semibold">
              For Organizations
            </span>
          </motion.div>
          <motion.h1
            className="text-5xl md:text-6xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            Scale Your Impact with Zorrow
          </motion.h1>
          <motion.p
            className="text-xl text-white/70 max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Access our platform to connect with donors, manage campaigns, and grow your organization's impact.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105 text-lg">
              Apply as NGO
            </button>
          </motion.div>
        </div>
      </section>

      {/* Why Join */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section with Image and Text */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-96 rounded-2xl overflow-hidden"
            >
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop"
                alt="Nonprofit team meeting and planning"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </motion.div>
            
            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Why Join Zorrow Impact?
              </h2>
              <p className="text-white/60 text-lg mb-8">
                We provide the tools and reach to help your organization achieve its mission. Connect with donors who are passionate about your cause and scale your impact exponentially.
              </p>
              <ul className="space-y-3">
                {[
                  'Access to thousands of verified donors',
                  'Advanced fundraising and analytics tools',
                  'Complete transparency management system',
                  'Dedicated NGO support team',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-white/80">
                    <div className="w-2 h-2 rounded-full bg-cyan-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Powerful Features
            </h3>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Everything you need to succeed
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {FEATURES.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <motion.div key={idx} variants={itemVariants}>
                  <GlassCard className="p-8 group hover:bg-white/20 transition-all duration-300">
                    <div className="mb-4 p-3 bg-gradient-to-r from-purple-400/20 to-pink-500/20 rounded-lg w-fit group-hover:from-purple-400/30 group-hover:to-pink-500/30 transition-all">
                      <Icon className="w-6 h-6 text-purple-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-white/60">{feature.description}</p>
                  </GlassCard>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <GlassCard className="p-12 text-center bg-gradient-to-r from-purple-500/10 to-pink-500/10">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Grow Your Impact?
              </h2>
              <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
                Join 120+ NGOs on Zorrow Impact and reach thousands of donors who want to support your cause.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105 text-lg">
                  Apply Now
                </button>
                <button className="px-8 py-4 bg-white/10 backdrop-blur-xl border border-white/20 text-white font-semibold rounded-2xl hover:bg-white/20 transition-all duration-300 text-lg">
                  Learn More
                </button>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
