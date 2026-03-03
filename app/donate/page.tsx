'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

const DONATION_AMOUNTS = [500, 1000, 5000, 10000];

export default function DonatePage() {
  const [selectedAmount, setSelectedAmount] = useState(1000);
  const [customAmount, setCustomAmount] = useState('');
  const [isMonthly, setIsMonthly] = useState(false);

  const finalAmount = customAmount ? parseInt(customAmount) : selectedAmount;

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* HERO */}
      <section className="pt-32 pb-12 text-center px-6">
        <h1 className="text-5xl font-bold text-white">Make Your Impact</h1>
        <p className="text-white/70 mt-3">
          Choose a one-time or monthly donation
        </p>
      </section>

      {/* DONATION SECTION */}
      <section className="pb-24 px-6">
        <div className="max-w-2xl mx-auto">

          {/* 🔥 Glow behind card (fix flicker) */}
          <div className="absolute left-1/2 -translate-x-1/2 w-[600px] h-[px] bg-cyan-500/10 blur-[120px] -z-10" />

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* REAL GLASS CARD (stable) */}
            <div className="bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-3xl p-10 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">

              {/* TOGGLE */}
              <div className="flex bg-white/10 rounded-xl p-1 mb-8">
                <button
                  onClick={() => setIsMonthly(false)}
                  className={`flex-1 py-3 rounded-lg font-semibold transition ${
                    !isMonthly
                      ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-black'
                      : 'text-white/70'
                  }`}
                >
                  One-time
                </button>

                <button
                  onClick={() => setIsMonthly(true)}
                  className={`flex-1 py-3 rounded-lg font-semibold transition ${
                    isMonthly
                      ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-black'
                      : 'text-white/70'
                  }`}
                >
                  Monthly ❤️
                </button>
              </div>

              {/* AMOUNT */}
              <label className="text-white font-semibold mb-4 block">
                Select Amount (₹)
              </label>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                {DONATION_AMOUNTS.map((amount) => (
                  <button
                    key={amount}
                    onClick={() => {
                      setSelectedAmount(amount);
                      setCustomAmount('');
                    }}
                    className={`py-3 rounded-xl font-semibold transition ${
                      selectedAmount === amount && !customAmount
                        ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-black'
                        : 'bg-white/10 border border-white/10 hover:bg-white/20'
                    }`}
                  >
                    ₹{amount}
                  </button>
                ))}
              </div>

              {/* CUSTOM */}
              <input
                type="number"
                placeholder="Enter custom amount"
                value={customAmount}
                onChange={(e) => setCustomAmount(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white mb-8 focus:outline-none focus:border-cyan-400"
              />

              {/* TOTAL */}
              <div className="text-center my-8">
                <p className="text-white/60">You are donating</p>

                <h2 className="text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
                  ₹{finalAmount}
                </h2>

                <p className="text-white/60 mt-2">
                  {isMonthly ? 'per month 💙' : 'one-time donation'}
                </p>
              </div>

              {/* CTA */}
              <button className="w-full py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-bold rounded-xl text-lg hover:scale-[1.02] transition">
                {isMonthly ? 'Start Monthly Donation' : 'Donate Now'}
              </button>

              <p className="text-center text-white/40 text-xs mt-4">
                Secure payments powered by Razorpay (next step)
              </p>

            </div>
          </motion.div>

        </div>
      </section>

      <Footer />
    </main>
  );
}