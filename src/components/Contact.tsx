'use client';

import { motion } from 'framer-motion';
import { FaLinkedinIn, FaBehance, FaEnvelope } from 'react-icons/fa';

export const Contact = () => {
  return (
    <>
      <section id="contact" className="relative py-32 px-6 bg-[#050303] overflow-hidden">
        {/* Subtle geometric background pattern */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern
              id="contact-geo"
              x="0"
              y="0"
              width="80"
              height="80"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 80 0 L 0 0 L 0 80"
                fill="none"
                stroke="#FFD527"
                strokeWidth="0.4"
                opacity="0.04"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#contact-geo)" />
        </svg>

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[#FFD527] text-sm font-semibold tracking-[0.3em] uppercase mb-6"
          >
            Contact
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#FFFFFF] mb-8"
          >
            Let&apos;s Work Together
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#a1a1aa] text-lg mb-16 max-w-xl mx-auto leading-relaxed"
          >
            Have a project in mind or just want to chat? Feel free to reach out.
          </motion.p>

          {/* Email link - prominent */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-14"
          >
            <a
              href="mailto:catiacarvalho.info@gmail.com"
              className="group inline-flex items-center gap-4 px-10 py-5 rounded-xl
                         bg-[#0a0a0a] border border-[#FFD527]/15
                         text-[#FFFFFF] text-lg font-medium
                         hover:border-[#FFD527]/40 hover:bg-[#FFD527]/5
                         hover:shadow-[0_0_30px_rgba(255,213,39,0.15)]
                         hover:-translate-y-1
                         transition-all duration-300"
            >
              <FaEnvelope className="text-[#FFD527] text-2xl group-hover:scale-110 transition-transform duration-300" />
              <span>catiacarvalho.info@gmail.com</span>
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center justify-center gap-8"
          >
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-16 h-16 rounded-full bg-[#0a0a0a] border border-[#FFD527]/15
                         flex items-center justify-center
                         text-[#a1a1aa]
                         hover:text-[#FFD527] hover:border-[#FFD527]/50 hover:bg-[#FFD527]/5
                         hover:shadow-[0_0_25px_rgba(255,213,39,0.2)]
                         hover:-translate-y-1
                         transition-all duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn className="text-2xl group-hover:scale-110 transition-transform duration-300" />
            </a>
            <a
              href="https://behance.net"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-16 h-16 rounded-full bg-[#0a0a0a] border border-[#FFD527]/15
                         flex items-center justify-center
                         text-[#a1a1aa]
                         hover:text-[#FFD527] hover:border-[#FFD527]/50 hover:bg-[#FFD527]/5
                         hover:shadow-[0_0_25px_rgba(255,213,39,0.2)]
                         hover:-translate-y-1
                         transition-all duration-300"
              aria-label="Behance"
            >
              <FaBehance className="text-2xl group-hover:scale-110 transition-transform duration-300" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 border-t border-[#FFD527]/10 bg-[#050303]">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-5">
          <p className="text-sm text-[#a1a1aa]">
            &copy; {new Date().getFullYear()} Catia Carvalho. All rights reserved.
          </p>
          <p className="text-xs text-[#a1a1aa]/60">
            Designed &amp; built with care
          </p>
        </div>
      </footer>
    </>
  );
};
