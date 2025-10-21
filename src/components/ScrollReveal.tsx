'use client';

import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  duration?: number;
  distance?: number;
  className?: string;
}

export default function ScrollReveal({ 
  children, 
  direction = 'up', 
  delay = 0,
  duration = 0.6,
  distance = 30,
  className = ''
}: ScrollRevealProps) {
  const { ref, isVisible } = useScrollReveal();

  const directionVariants = {
    up: { y: distance, x: 0 },
    down: { y: -distance, x: 0 },
    left: { x: distance, y: 0 },
    right: { x: -distance, y: 0 },
  };

  const initial = directionVariants[direction];

  return (
    <motion.div
      ref={ref}
      initial={{ 
        opacity: 0, 
        ...initial 
      }}
      animate={isVisible ? { 
        opacity: 1, 
        x: 0, 
        y: 0 
      } : { 
        opacity: 0, 
        ...initial 
      }}
      transition={{ 
        duration, 
        delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
