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
    <section id="skills" className="py-28 px-6 bg-[#050303]">
      <div className="max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[#FFD527] text-sm font-semibold tracking-[0.3em] uppercase mb-4 text-center"
        >
          Skills
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-4xl font-bold text-[#FFFFFF] mb-16 text-center"
        >
          What I bring to the table
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.06, ease: 'easeOut' }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="flex items-center gap-2.5 px-5 py-3 rounded-full
                           bg-[#FFD527]/10 border border-[#FFD527]/30
                           hover:bg-[#FFD527]/20 hover:border-[#FFD527]/50
                           hover:shadow-[0_0_15px_rgba(255,213,39,0.2)]
                           transition-all duration-300 cursor-default"
              >
                <Icon className="text-[#FFD527] text-base" />
                <span className="text-sm text-[#FFFFFF] font-medium">
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
