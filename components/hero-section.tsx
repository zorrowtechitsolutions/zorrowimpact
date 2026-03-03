'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { GlowShape } from './glow-shape';

const amounts = [500, 1000, 2500, 5000];

export function HeroSection() {
  const [isMonthly, setIsMonthly] = useState(true);
  const [selected, setSelected] = useState(1000);

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
      style={{
        backgroundImage: 'url("/heroimg.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/60" />

      {/* Glow shapes */}
      <GlowShape color="cyan" size="lg" className="top-20 left-10 -z-10" />
      <GlowShape color="purple" size="md" className="bottom-32 right-20 -z-10" delay={0.5} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

        {/* 💳 DONATION CARD — DESKTOP ONLY */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative w-full max-w-md hidden lg:block"
        >
          {/* Glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-2xl opacity-30 rounded-3xl" />

          {/* Glass Card (NO backdrop-blur → no flicker) */}
          <div className="
            rounded-3xl p-8 border border-white/20
            bg-gradient-to-b from-white/20 via-white/10 to-white/5
            shadow-[0_8px_32px_rgba(0,0,0,0.35)]
          ">
            {/* Toggle */}
            <div className="flex bg-white/10 rounded-xl p-1 mb-6">
              <button
                onClick={() => setIsMonthly(true)}
                className={`flex-1 py-2 rounded-lg text-sm font-semibold ${
                  isMonthly ? 'bg-yellow-400 text-black' : 'text-white/70'
                }`}
              >
                Monthly 💧
              </button>

              <button
                onClick={() => setIsMonthly(false)}
                className={`flex-1 py-2 rounded-lg text-sm font-semibold ${
                  !isMonthly ? 'bg-yellow-400 text-black' : 'text-white/70'
                }`}
              >
                Give Once
              </button>
            </div>

            {/* Amount buttons */}
            <div className="grid grid-cols-2 gap-3 mb-5">
              {amounts.map((amt) => (
                <button
                  key={amt}
                  onClick={() => setSelected(amt)}
                  className={`py-3 rounded-xl font-semibold ${
                    selected === amt
                      ? 'bg-yellow-400 text-black'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  ₹{amt}
                </button>
              ))}
            </div>

            <p className="text-white/70 text-sm mb-4">
              ₹{selected} helps provide clean water & education 💙
            </p>

            <Link href="/donate">
              <button className="w-full py-4 bg-yellow-400 text-black font-bold rounded-xl text-lg hover:scale-105 transition">
                {isMonthly ? 'Donate Monthly' : 'Donate Now'}
              </button>
            </Link>

            <p className="text-center text-white/40 text-xs mt-3">
              Secure payments powered by Razorpay
            </p>
          </div>
        </motion.div>

        {/* 🧠 HERO TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center lg:text-left"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
            Technology Empowering
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Humanity
            </span>
          </h1>

          <p className="text-xl text-white/70 mb-8 max-w-lg mx-auto lg:mx-0">
            Discover trusted charities. Track your impact. Change the world.
          </p>

          {/* Desktop button */}
          <div className="hidden sm:block">
            <Link href="/causes">
              <button className="px-8 py-4 bg-white/10 border border-white/20 text-white font-semibold rounded-2xl hover:bg-white/20 transition">
                Explore Causes
              </button>
            </Link>
          </div>

          {/* 📱 MOBILE BUTTONS */}
          <div className="sm:hidden flex flex-col gap-3 mt-6">
            <Link href="/causes">
              <button className="w-full py-4 bg-white/10 border border-white/20 text-white font-semibold rounded-2xl">
                Explore Causes
              </button>
            </Link>

            <Link href="/donate">
              <button className="w-full py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-bold rounded-2xl shadow-lg shadow-cyan-500/40">
                Donate Now 💙
              </button>
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
}