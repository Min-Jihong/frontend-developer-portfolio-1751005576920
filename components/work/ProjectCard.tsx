'use client';

import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import Image from 'next/image';
import { useRef, useState } from 'react';
import { Project } from '@/lib/types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const [isHovered, setIsHovered] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  // Parallax: Image scale and opacity change based on scroll position
  const imageParallaxScale = useTransform(scrollYProgress, [0, 1], [1.1, 0.9]);
  const imageParallaxOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1, 0.5]);

  // Card entry animation (Fade-in & Slide-up)
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
        delay: index * 0.1, // Staggered animation for sequential appearance
      },
    },
  };

  // Image hover effect (enlarge)
  const imageHoverVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  // Caption text hover effect (fade-in & slide-up)
  const captionVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className="relative w-full overflow-hidden rounded-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
        {/* Parallax container */}
        <motion.div
          style={{ scale: imageParallaxScale, opacity: imageParallaxOpacity }}
          className="absolute inset-0"
        >
          {/* Image container with hover effect */}
          <motion.div
            variants={imageHoverVariants}
            initial="initial"
            animate={isHovered ? 'hover' : 'initial'}
            className="w-full h-full"
          >
            <Image
              src={project.image}
              alt={project.name}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
              priority={index < 2}
            />
          </motion.div>
        </motion.div>

        {/* Caption text overlay */}
        <motion.div
          className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 text-white text-center"
          variants={captionVariants}
          initial="hidden"
          animate={isHovered ? 'visible' : 'hidden'}
        >
          <p className="text-lg font-medium">{project.description || project.name}</p>
        </motion.div>
      </div>

      <div className="mt-4 flex justify-between items-end">
        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">{project.name}</h3>
          <p className="text-lg text-gray-600 dark:text-gray-400">{project.role}</p>
        </div>
        <p className="text-xl font-semibold text-gray-800 dark:text-gray-200">{project.year}</p>
      </div>
    </motion.div>
  );
};