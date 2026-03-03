import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}

export function GlassCard({ children, className = '', dark = false }: GlassCardProps) {
  const baseClasses = dark 
    ? 'bg-black/20 backdrop-blur-xl border border-white/10 rounded-2xl' 
    : 'bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl';
  
  return (
    <div className={`${baseClasses} ${className}`}>
      {children}
    </div>
  );
}
