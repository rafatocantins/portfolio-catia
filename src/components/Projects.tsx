'use client';

import { motion } from 'framer-motion';

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
    <section id="projects" className="py-24 px-6 bg-[#0a0a0b]">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[#a78bfa] text-sm font-medium tracking-widest uppercase mb-4 text-center"
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
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="group bg-[#141416] border border-white/5 rounded-xl overflow-hidden hover:border-[#a78bfa]/40 transition-all duration-300 cursor-pointer"
            >
              {/* Image placeholder */}
              <div
                className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}
              >
                <span className="text-4xl opacity-40">🖥️</span>
              </div>

              <div className="p-6">
                <span className="text-xs text-[#a78bfa] font-medium uppercase tracking-wider">
                  {project.role}
                </span>
                <h3 className="text-xl font-semibold text-[#e4e4e7] mt-1 mb-2 group-hover:text-[#a78bfa] transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-[#71717a] mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full bg-[#a78bfa]/10 text-[#a78bfa] border border-[#a78bfa]/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
