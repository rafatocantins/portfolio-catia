'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  e.preventDefault();
  const target = document.querySelector(href);
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
  }
};

// Geometric floating shapes
const floatingShapes = [
  { type: 'circle', x: '12%', y: '25%', size: 16, opacity: 0.12, delay: 0, duration: 7 },
  { type: 'triangle', x: '82%', y: '20%', size: 22, opacity: 0.10, delay: 1.5, duration: 8 },
  { type: 'circle', x: '78%', y: '65%', size: 10, opacity: 0.08, delay: 0.8, duration: 6 },
  { type: 'diamond', x: '18%', y: '70%', size: 14, opacity: 0.10, delay: 2.2, duration: 9 },
  { type: 'circle', x: '45%', y: '82%', size: 8, opacity: 0.06, delay: 1.0, duration: 5 },
  { type: 'triangle', x: '55%', y: '15%', size: 12, opacity: 0.08, delay: 3.0, duration: 7.5 },
  { type: 'diamond', x: '92%', y: '42%', size: 18, opacity: 0.09, delay: 0.5, duration: 8.5 },
  { type: 'circle', x: '6%', y: '55%', size: 20, opacity: 0.07, delay: 1.8, duration: 10 },
];

// Typewriter words
const roles = [
  'User Experience Designer',
  'UX Researcher',
  'Design Systems Builder',
  'Product Designer',
];

export const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = roles[roleIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayText === currentWord) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      const speed = isDeleting ? 40 : 70;
      timeout = setTimeout(() => {
        setDisplayText(
          isDeleting
            ? currentWord.slice(0, displayText.length - 1)
            : currentWord.slice(0, displayText.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050303]"
    >
      {/* SVG geometric grid background with perspective */}
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern
            id="geo-grid"
            x="0"
            y="0"
            width="60"
            height="60"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 60 0 L 0 0 L 0 60"
              fill="none"
              stroke="#FFD527"
              strokeWidth="0.5"
              opacity="0.06"
            />
          </pattern>
          <pattern
            id="geo-dots"
            x="0"
            y="0"
            width="30"
            height="30"
            patternUnits="userSpaceOnUse"
          >
            <circle
              cx="2"
              cy="2"
              r="1"
              fill="#FFD527"
              opacity="0.08"
            />
          </pattern>
          <linearGradient id="grid-fade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="white" stopOpacity="0.15" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <mask id="grid-mask">
            <rect x="0" y="0" width="100%" height="100%" fill="url(#grid-fade)" />
          </mask>
        </defs>
        <rect width="100%" height="100%" fill="url(#geo-grid)" mask="url(#grid-mask)" />
        <rect width="100%" height="100%" fill="url(#geo-dots)" mask="url(#grid-mask)" />
      </svg>

      {/* Ambient glow blobs */}
      <div
        className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-[#FFD527] rounded-full opacity-[0.04] blur-[150px]"
        style={{ animation: 'pulse-glow 10s ease-in-out infinite' }}
      />
      <div
        className="absolute bottom-1/4 -right-32 w-[400px] h-[400px] bg-[#FFD527] rounded-full opacity-[0.03] blur-[120px]"
        style={{ animation: 'pulse-glow 8s ease-in-out 3s infinite' }}
      />

      {/* Floating geometric shapes */}
      {floatingShapes.map((shape, i) => (
        <motion.div
          key={i}
          className="absolute pointer-events-none"
          style={{ left: shape.x, top: shape.y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [shape.opacity * 0.5, shape.opacity, shape.opacity * 0.5],
            y: ['0px', '-20px', '0px'],
            rotate: [0, 15, -15, 0],
          }}
          transition={{
            opacity: {
              duration: shape.duration,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: shape.delay,
            },
            y: {
              duration: shape.duration,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: shape.delay,
            },
            rotate: {
              duration: shape.duration * 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: shape.delay,
            },
          }}
        >
          {shape.type === 'circle' && (
            <svg width={shape.size} height={shape.size} viewBox="0 0 24 24">
              <circle
                cx="12"
                cy="12"
                r="10"
                fill="none"
                stroke="#FFD527"
                strokeWidth="1.5"
                opacity={shape.opacity * 2}
              />
            </svg>
          )}
          {shape.type === 'triangle' && (
            <svg width={shape.size} height={shape.size} viewBox="0 0 24 24">
              <polygon
                points="12,3 22,21 2,21"
                fill="none"
                stroke="#FFD527"
                strokeWidth="1.5"
                opacity={shape.opacity * 2}
              />
            </svg>
          )}
          {shape.type === 'diamond' && (
            <svg width={shape.size} height={shape.size} viewBox="0 0 24 24">
              <polygon
                points="12,2 22,12 12,22 2,12"
                fill="none"
                stroke="#FFD527"
                strokeWidth="1.5"
                opacity={shape.opacity * 2}
              />
            </svg>
          )}
        </motion.div>
      ))}

      {/* Main content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl mx-auto px-6 text-center"
      >
        {/* Small label */}
        <motion.p
          variants={itemVariants}
          className="text-[#FFD527] text-sm font-semibold tracking-[0.3em] uppercase mb-8"
        >
          UX Designer &amp; Researcher
        </motion.p>

        {/* Name - bigger, bolder */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-6xl md:text-8xl font-extrabold text-[#FFFFFF] mb-6 tracking-tight leading-[1.05]"
        >
          Catia
          <br />
          <span className="text-[#FFD527]">Carvalho</span>
        </motion.h1>

        {/* Typewriter subtitle */}
        <motion.div
          variants={itemVariants}
          className="text-xl sm:text-2xl md:text-3xl font-normal text-[#FFD527] mb-4 h-10 flex items-center justify-center"
        >
          <span>{displayText}</span>
          <span className="inline-block w-0.5 h-6 bg-[#FFD527] ml-1 animate-pulse" />
        </motion.div>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-[#a1a1aa] text-lg max-w-xl mx-auto mb-12 leading-relaxed"
        >
          Crafting intuitive digital experiences through research-driven design,
          blending empathy with elegant interfaces.
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          {/* Primary button - solid yellow with BLACK text for max contrast */}
          <a
            href="#projects"
            onClick={(e) => handleSmoothScroll(e, '#projects')}
            className="group relative inline-flex items-center gap-2 px-10 py-4 rounded-lg
                       bg-[#FFD527] text-[#050303] font-bold text-base
                       hover:scale-105 hover:shadow-[0_0_40px_rgba(255,213,39,0.4),0_0_80px_rgba(255,213,39,0.15)]
                       active:scale-95
                       transition-all duration-300"
          >
            View My Work
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>

          {/* Secondary button - outline */}
          <a
            href="#contact"
            onClick={(e) => handleSmoothScroll(e, '#contact')}
            className="group inline-flex items-center gap-2 px-10 py-4 rounded-lg
                       border border-[#FFD527]/30 text-[#FFFFFF] font-medium text-base
                       hover:border-[#FFD527]/60 hover:bg-[#FFD527]/5 hover:shadow-[0_0_20px_rgba(255,213,39,0.15)]
                       active:scale-95
                       transition-all duration-300"
          >
            Get In Touch
          </a>
        </motion.div>
      </motion.div>

      {/* Subtle bottom fade for scroll indication */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050303] to-transparent pointer-events-none" />
    </section>
  );
};
