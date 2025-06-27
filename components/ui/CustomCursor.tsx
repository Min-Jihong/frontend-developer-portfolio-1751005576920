'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHoveringInteractive, setIsHoveringInteractive] = useState(false);

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactiveTags = ['A', 'BUTTON', 'INPUT', 'TEXTAREA', 'SELECT'];
      if (interactiveTags.includes(target.tagName) || target.closest('[data-cursor-interactive]')) {
        setIsHoveringInteractive(true);
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactiveTags = ['A', 'BUTTON', 'INPUT', 'TEXTAREA', 'SELECT'];
      if (interactiveTags.includes(target.tagName) || target.closest('[data-cursor-interactive]')) {
        setIsHoveringInteractive(false);
      }
    };

    window.addEventListener('mousemove', mouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    document.body.style.cursor = 'none';

    return () => {
      window.removeEventListener('mousemove', mouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      document.body.style.cursor = 'default';
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      scale: 1,
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
      mixBlendMode: 'difference',
    },
    interactive: {
      x: mousePosition.x - 24,
      y: mousePosition.y - 24,
      scale: 1.5,
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      mixBlendMode: 'difference',
    },
  };

  return (
    <motion.div
      className="fixed z-[9999] pointer-events-none rounded-full w-8 h-8"
      variants={variants}
      animate={isHoveringInteractive ? 'interactive' : 'default'}
      transition={{ type: 'tween', ease: 'backOut', duration: 0.2 }}
    />
  );
};