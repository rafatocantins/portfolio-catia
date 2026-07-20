'use client';

import { motion } from 'framer-motion';
import { ProjectCard } from './ProjectCard';

const projects = [
  {
    title: 'CTT Digital Channel',
    role: 'UX Design',
    description: 'Commercial channel redesign',
    tags: ['UX Research', 'Wireframing', 'Prototyping'],
    gradient: 'from-blue-500/20 to-purple-500/10',
  },
  {
    title: 'TheStarter E-Learning',
    role: 'Lead Designer',
    description: 'Online learning platform',
    tags: ['UI Design', 'Design System', 'Agile'],
    gradient: 'from-emerald-500/20 to-teal-500/10',
  },
  {
    title: 'Asistobe Transport',
    role: 'UX Design',
    description: 'Passenger transport interfaces',
    tags: ['User Research', 'Usability Testing', 'Mobile'],
    gradient: 'from-orange-500/20 to-yellow-500/10',
  },
  {
    title: 'Outsystems Low-Code',
    role: 'UX Design',
    description: 'Enterprise design system',
    tags: ['Design Systems', 'Accessibility', 'Enterprise'],
    gradient: 'from-pink-500/20 to-rose-500/10',
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-[#050303]">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[#FFD527] text-sm font-medium tracking-widest uppercase mb-4 text-center"
        >
          Projects
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-4xl font-bold text-[#e4e4e7] mb-16 text-center"
        >
          Selected work
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              role={project.role}
              description={project.description}
              tags={project.tags}
              gradient={project.gradient}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
