import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: 'blue' | 'amber' | 'emerald' | 'none';
  onClick?: () => void;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = '',
  glowColor = 'blue',
  onClick,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rX = ((y - centerY) / centerY) * -10;
    const rY = ((x - centerX) / centerX) * 10;

    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  const glowClasses = {
    blue: 'hover:shadow-[0_0_30px_rgba(37,99,235,0.3)] hover:border-blue-500/50',
    amber: 'hover:shadow-[0_0_30px_rgba(245,158,11,0.3)] hover:border-amber-500/50',
    emerald: 'hover:shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:border-emerald-500/50',
    none: '',
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        transformStyle: 'preserve-3d',
      }}
      animate={{
        rotateX,
        rotateY,
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={clsx(
        'relative rounded-2xl glass-card p-6 transition-all duration-300 cursor-pointer overflow-hidden group',
        glowClasses[glowColor],
        className
      )}
    >
      {/* Dynamic Light Reflection Highlight */}
      <div className="absolute -inset-full bg-gradient-to-r from-transparent via-white/5 to-transparent group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none" />
      {children}
    </motion.div>
  );
};
