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
    const rotX = ((y - centerY) / centerY) * -7;
    const rotY = ((x - centerX) / centerX) * 7;

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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group cursor-pointer"
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative rounded-xl overflow-hidden bg-[#111111] border border-white/5
                   group-hover:glow-border-animated
                   transition-[box-shadow] duration-300"
        style={{
          '--rotX': '0deg',
          '--rotY': '0deg',
          '--spotX': '50%',
          '--spotY': '50%',
          transform:
            'perspective(1000px) rotateX(var(--rotX)) rotateY(var(--rotY))',
          transition: 'transform 0.15s ease-out',
        } as React.CSSProperties}
      >
        {/* Spotlight overlay */}
        <div
          className="pointer-events-none absolute inset-0 z-10 opacity-0
                     group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background:
              'radial-gradient(circle 300px at var(--spotX) var(--spotY), rgba(255,213,39,0.13), transparent 60%)',
          }}
        />

        {/* Image placeholder with slow zoom */}
        <div
          className={`h-48 bg-gradient-to-br ${gradient} flex items-center justify-center overflow-hidden`}
        >
          <span className="text-4xl opacity-40 transition-transform duration-[2500ms] ease-out group-hover:scale-110">
            🖥️
          </span>
        </div>

        {/* Content */}
        <div className="p-6 relative z-10">
          <span className="text-xs text-[#FFD527] font-medium uppercase tracking-wider">
            {role}
          </span>
          <h3 className="text-xl font-semibold text-[#e4e4e7] mt-1 mb-2 group-hover:text-[#FFD527] transition-colors duration-300">
            {title}
          </h3>
          <p className="text-sm text-[#71717a] mb-4">{description}</p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1 rounded-full bg-[#FFD527]/10 text-[#FFD527] border border-[#FFD527]/20
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
