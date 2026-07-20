'use client';

import { motion } from 'framer-motion';

const experiences = [
  {
    company: 'CTT Correios de Portugal',
    role: 'UX Designer',
    period: 'Apr 2024 - Present',
  },
  {
    company: 'Outsystems',
    role: 'UX Designer',
    period: 'Aug 2023 - Apr 2024',
  },
  {
    company: 'TheStarter',
    role: 'Lead Product Designer',
    period: 'Feb 2022 - Present',
  },
  {
    company: 'Asistobe',
    role: 'UX Designer',
    period: 'Feb 2022 - Aug 2023',
  },
  {
    company: 'Tangivel',
    role: 'UX Designer',
    period: 'Aug 2019 - 2021',
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 bg-[#050303]">
      <div className="max-w-3xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[#FFD527] text-sm font-medium tracking-widest uppercase mb-4 text-center"
        >
          Experience
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-4xl font-bold text-[#e4e4e7] mb-16 text-center"
        >
          Where I have worked
        </motion.h2>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-[#FFD527]/20" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={`${exp.company}-${exp.period}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative pl-12 md:pl-0 ${
                  index % 2 === 0
                    ? 'md:pr-[calc(50%+2rem)] md:text-right'
                    : 'md:pl-[calc(50%+2rem)] md:text-left'
                }`}
              >
                {/* Dot */}
                <div
                  className={`absolute top-1 left-2 md:left-1/2 md:-translate-x-1/2 w-[13px] h-[13px] rounded-full bg-[#FFD527] border-2 border-[#050303] z-10`}
                />

                {/* Card */}
                <div className="bg-[#111111] border border-white/5 rounded-xl p-5 hover:border-[#FFD527]/20 transition-colors">
                  <span className="inline-block text-xs text-[#FFD527] font-medium mb-2">
                    {exp.period}
                  </span>
                  <h3 className="text-lg font-semibold text-[#e4e4e7] mb-1">
                    {exp.company}
                  </h3>
                  <p className="text-sm text-[#71717a]">{exp.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
