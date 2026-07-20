'use client';

import { motion } from 'framer-motion';
import {
  FaUsers,
  FaPenFancy,
  FaSearch,
  FaCheckCircle,
  FaPencilRuler,
  FaCode,
  FaUniversalAccess,
  FaLayerGroup,
  FaSyncAlt,
  FaEye,
  FaProjectDiagram,
} from 'react-icons/fa';

const skills = [
  { name: 'User-centered Design', icon: FaUsers },
  { name: 'UX Writing', icon: FaPenFancy },
  { name: 'User Research', icon: FaSearch },
  { name: 'Usability Testing', icon: FaCheckCircle },
  { name: 'Wireframing', icon: FaPencilRuler },
  { name: 'Prototyping', icon: FaCode },
  { name: 'Accessibility', icon: FaUniversalAccess },
  { name: 'Design Systems', icon: FaLayerGroup },
  { name: 'Agile', icon: FaSyncAlt },
  { name: 'Visual Design', icon: FaEye },
  { name: 'Project Management', icon: FaProjectDiagram },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-[#050303]">
      <div className="max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[#FFD527] text-sm font-medium tracking-widest uppercase mb-4 text-center"
        >
          Skills
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-4xl font-bold text-[#e4e4e7] mb-16 text-center"
        >
          What I bring to the table
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            const randomDelay = ((index * 0.37 + index * 0.13) % 4).toFixed(1);
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#111111] border border-white/5
                           hover:border-[#FFD527]/50 hover:shadow-[0_0_20px_rgba(255,213,39,0.3),0_0_40px_rgba(255,213,39,0.1)]
                           transition-all duration-300 cursor-default animate-float-pill"
                style={{ animationDelay: `${randomDelay}s` } as React.CSSProperties}
              >
                <Icon className="text-[#FFD527] text-sm animate-icon-bounce
                                 group-hover:animate-icon-bounce" />
                <span className="text-sm text-[#e4e4e7] font-medium">
                  {skill.name}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
