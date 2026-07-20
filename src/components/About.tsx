'use client';

import { motion } from 'framer-motion';

const stats = [
  { value: '5+', label: 'Years Experience' },
  { value: '10+', label: 'Projects' },
  { value: '3', label: 'Certifications' },
];

export const About = () => {
  return (
    <section id="about" className="py-28 px-6 bg-[#050303]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[#FFD527] text-sm font-semibold tracking-[0.3em] uppercase mb-4 text-center"
        >
          About
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-3xl md:text-4xl font-bold text-[#FFFFFF] mb-16 text-center"
        >
          Get to know me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Photo placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex justify-center"
          >
            <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-2xl bg-gradient-to-br from-[#FFD527]/30 to-[#FFD527]/5 border border-[#FFD527]/15 flex items-center justify-center">
              <span className="text-6xl">👩‍💻</span>
            </div>
          </motion.div>

          {/* Text + Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="text-[#a1a1aa] text-lg leading-relaxed mb-8">
              Understanding how to create something that people can enjoy is my
              passion. Always ready to improve and continue to learn, work with
              great products and teams, and face new challenges.
            </p>

            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="text-center p-4 rounded-xl bg-[#0a0a0a] border border-[#FFD527]/15"
                >
                  <div className="text-2xl font-bold text-[#FFD527] mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-[#a1a1aa]">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
