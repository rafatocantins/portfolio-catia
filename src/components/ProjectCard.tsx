'use client';

import { useRef, type MouseEvent } from 'react';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  role: string;
  description: string;
  tags: string[];
  gradient: string;
  index: number;
}

export const ProjectCard = ({
  title,
  role,
  description,
  tags,
  gradient,
  index,
}: ProjectCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotX = ((y - centerY) / centerY) * -5;
    const rotY = ((x - centerX) / centerX) * 5;

    cardRef.current.style.setProperty('--rotX', `${rotX}deg`);
    cardRef.current.style.setProperty('--rotY', `${rotY}deg`);
    cardRef.current.style.setProperty('--spotX', `${(x / rect.width) * 100}%`);
    cardRef.current.style.setProperty('--spotY', `${(y / rect.height) * 100}%`);
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.setProperty('--rotX', '0deg');
    cardRef.current.style.setProperty('--rotY', '0deg');
    cardRef.current.style.setProperty('--spotX', '50%');
    cardRef.current.style.setProperty('--spotY', '50%');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group cursor-pointer"
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative rounded-2xl overflow-hidden
                   bg-[#0a0a0a] border border-[#FFD527]/20
                   group-hover:border-[#FFD527]/50 group-hover:shadow-[0_0_25px_rgba(255,213,39,0.15),0_8px_32px_rgba(0,0,0,0.4)]
                   group-hover:-translate-y-1
                   transition-all duration-400"
        style={{
          '--rotX': '0deg',
          '--rotY': '0deg',
          '--spotX': '50%',
          '--spotY': '50%',
          transform:
            'perspective(1200px) rotateX(var(--rotX)) rotateY(var(--rotY))',
          transition: 'transform 0.2s ease-out, border-color 0.3s, box-shadow 0.3s, translate 0.3s',
        } as React.CSSProperties}
      >
        {/* Geometric pattern in top right corner */}
        <div className="absolute top-0 right-0 w-24 h-24 overflow-hidden pointer-events-none opacity-20 group-hover:opacity-35 transition-opacity duration-300">
          <svg width="96" height="96" viewBox="0 0 96 96">
            <circle cx="76" cy="20" r="12" fill="none" stroke="#FFD527" strokeWidth="1" opacity="0.5" />
            <circle cx="90" cy="50" r="6" fill="none" stroke="#FFD527" strokeWidth="0.8" opacity="0.4" />
            <circle cx="60" cy="10" r="4" fill="#FFD527" opacity="0.15" />
            <line x1="70" y1="30" x2="96" y2="56" stroke="#FFD527" strokeWidth="0.5" opacity="0.3" />
            <line x1="50" y1="20" x2="66" y2="4" stroke="#FFD527" strokeWidth="0.5" opacity="0.25" />
          </svg>
        </div>

        {/* Spotlight overlay */}
        <div
          className="pointer-events-none absolute inset-0 z-10 opacity-0
                     group-hover:opacity-100 transition-opacity duration-400"
          style={{
            background:
              'radial-gradient(circle 300px at var(--spotX) var(--spotY), rgba(255,213,39,0.10), transparent 60%)',
          }}
        />

        {/* Image placeholder with slow zoom */}
        <div
          className={`h-52 bg-gradient-to-br ${gradient} flex items-center justify-center overflow-hidden relative`}
        >
          <div className="absolute inset-0 bg-[#050303]/40" />
          <span className="text-5xl opacity-50 transition-transform duration-[2500ms] ease-out group-hover:scale-110 relative z-10">
            🖥️
          </span>
        </div>

        {/* Content */}
        <div className="p-7 relative z-10">
          {/* Role badge - yellow bg with black text */}
          <span className="inline-block text-xs font-bold uppercase tracking-wider
                           px-3 py-1 rounded-md
                           bg-[#FFD527] text-[#050303]
                           mb-3">
            {role}
          </span>

          <h3 className="text-xl font-bold text-[#FFFFFF] mb-2 group-hover:text-[#FFD527] transition-colors duration-300">
            {title}
          </h3>

          <p className="text-sm text-[#a1a1aa] mb-5 leading-relaxed">{description}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1.5 rounded-full
                           bg-[#FFD527]/10 text-[#FFD527]
                           border border-[#FFD527]/25
                           group-hover:bg-[#FFD527]/15
                           transition-colors duration-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
