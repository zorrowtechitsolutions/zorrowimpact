'use client';

import { motion } from 'framer-motion';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { GlassCard } from '@/components/glass-card';
import { Heart, Target, Users, Lightbulb } from 'lucide-react';

const VALUES = [
  {
    icon: Heart,
    title: 'Compassion',
    description: 'We deeply care about creating positive change in the world.',
  },
  {
    icon: Target,
    title: 'Impact',
    description: 'Every decision we make is focused on maximizing your impact.',
  },
  {
    icon: Users,
    title: 'Community',
    description: 'We believe in the power of collective action to transform lives.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'We leverage technology to solve real-world problems.',
  },
];

export default function AboutPage() {
  return (
    <main className="bg-background text-foreground min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            className="text-5xl md:text-6xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            About Zorrow Impact
          </motion.h1>
          <motion.p
            className="text-xl text-white/70 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Bridging the gap between donors and causes through technology and transparency.
          </motion.p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-white/70 text-lg leading-relaxed">
                At Zorrow Impact, we believe technology can transform the world of charitable giving. 
                Our mission is to make donating easy, transparent, and impactful for everyone. We connect 
                compassionate donors with verified NGOs working on causes they care about, ensuring every 
                donation creates measurable change in the real world.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-96 rounded-2xl overflow-hidden"
            >
              <img 
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&h=400&fit=crop"
                alt="Charity volunteers serving meals"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl font-bold text-white mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Values
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((value, idx) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.6 }}
                >
                  <GlassCard className="p-6 text-center group hover:bg-white/20 transition-all duration-300">
                    <div className="mb-4 p-3 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-lg w-fit mx-auto group-hover:from-cyan-400/30 group-hover:to-blue-500/30 transition-all">
                      <Icon className="w-6 h-6 text-cyan-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {value.title}
                    </h3>
                    <p className="text-white/60 text-sm">{value.description}</p>
                  </GlassCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-96 rounded-2xl overflow-hidden order-2 lg:order-1"
            >
              <img 
                src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&h=400&fit=crop"
                alt="Community helping and empowering"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </motion.div>

            <motion.div
              className="order-1 lg:order-2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">Our Story</h2>
              <p className="text-white/70 text-lg leading-relaxed mb-4">
                Founded in 2024, Zorrow Impact emerged from a simple vision: to make charitable giving 
                transparent, accessible, and impactful. What started as a small team of tech enthusiasts 
                and social impact advocates has grown into a platform connecting thousands of donors with 
                NGOs working on the causes they care about most.
              </p>
              <p className="text-white/70 text-lg leading-relaxed">
                Today, we're proud to facilitate millions in donations and help thousands of lives improve 
                through our technology and community. But this is just the beginning. We're committed to 
                continuing our growth and impact for years to come.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
