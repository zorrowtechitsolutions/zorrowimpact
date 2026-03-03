'use client';

import { motion } from 'framer-motion';

interface GlowShapeProps {
  color?: 'cyan' | 'blue' | 'purple';
  size?: 'sm' | 'md' | 'lg';
  delay?: number;
  className?: string;
}

export function GlowShape({ 
  color = 'cyan', 
  size = 'md', 
  delay = 0,
  className = '' 
}: GlowShapeProps) {
  const colorMap = {
    cyan: 'from-cyan-500/30 to-cyan-600/20',
    blue: 'from-blue-500/30 to-blue-600/20',
    purple: 'from-purple-500/30 to-purple-600/20',
  };

  const sizeMap = {
    sm: 'w-48 h-48',
    md: 'w-80 h-80',
    lg: 'w-96 h-96',
  };

  const variants = {
    animate: {
      y: [0, -30, 0],
      x: [0, 20, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <motion.div
      className={`absolute rounded-full blur-3xl bg-gradient-to-br ${colorMap[color]} ${sizeMap[size]} ${className}`}
      variants={variants}
      animate="animate"
      initial={{ y: 0, x: 0 }}
      transition={{ delay }}
    />
  );
}
