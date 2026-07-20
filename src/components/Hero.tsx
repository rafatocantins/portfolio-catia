'use client';

import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' as const },
  },
};

const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  e.preventDefault();
  const target = document.querySelector(href);
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
  }
};

export const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-[#050303]" />
      <div className="absolute inset-0 bg-gradient-to-br from-[#FFD527]/10 via-transparent to-[#FFD527]/5 animate-pulse" />
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#FFD527]/20 rounded-full blur-[128px] animate-pulse"
        style={{ animationDuration: '8s' }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#FFD527]/15 rounded-full blur-[96px] animate-pulse"
        style={{ animationDuration: '6s', animationDelay: '2s' }}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-3xl mx-auto px-6 text-center"
      >
        <motion.p
          variants={itemVariants}
          className="text-[#FFD527] text-sm font-medium tracking-widest uppercase mb-6"
        >
          Portfolio
        </motion.p>

        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-6xl md:text-7xl font-bold text-[#e4e4e7] mb-6 tracking-tight leading-tight"
        >
          Catia Carvalho
        </motion.h1>

        <motion.h2
          variants={itemVariants}
          className="text-xl sm:text-2xl md:text-3xl font-medium text-[#FFD527] mb-4"
        >
          User Experience Designer
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-[#71717a] text-lg max-w-xl mx-auto mb-10 leading-relaxed"
        >
          Crafting intuitive digital experiences through research-driven design
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#projects"
            onClick={(e) => handleSmoothScroll(e, '#projects')}
            className="px-8 py-3 rounded-full bg-[#FFD527] text-white font-medium hover:bg-[#FFC107] transition-colors text-sm"
          >
            View My Work
          </a>
          <a
            href="#contact"
            onClick={(e) => handleSmoothScroll(e, '#contact')}
            className="px-8 py-3 rounded-full border border-[#FFD527]/30 text-[#FFD527] font-medium hover:bg-[#FFD527]/10 transition-colors text-sm"
          >
            Get In Touch
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};
