'use client';

import { motion } from 'framer-motion';
import { FaLinkedinIn, FaBehance, FaEnvelope } from 'react-icons/fa';

export const Contact = () => {
  return (
    <>
      <section id="contact" className="py-24 px-6 bg-[#050303]">
        <div className="max-w-2xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[#FFD527] text-sm font-medium tracking-widest uppercase mb-4"
          >
            Contact
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-[#e4e4e7] mb-6"
          >
            Let&apos;s Work Together
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#71717a] text-lg mb-12 max-w-md mx-auto"
          >
            Have a project in mind or just want to chat? Feel free to reach out.
          </motion.p>

          {/* Contact links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <a
              href="mailto:catiacarvalho.info@gmail.com"
              className="flex items-center gap-3 px-6 py-3 rounded-full bg-[#111111] border border-white/5 text-[#e4e4e7] hover:border-[#FFD527]/30 hover:text-[#FFD527] transition-all"
            >
              <FaEnvelope className="text-[#FFD527]" />
              <span className="text-sm">catiacarvalho.info@gmail.com</span>
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center justify-center gap-6"
          >
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-[#111111] border border-white/5 flex items-center justify-center text-[#71717a] hover:text-[#FFD527] hover:border-[#FFD527]/30 transition-all"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn className="text-lg" />
            </a>
            <a
              href="https://behance.net"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-[#111111] border border-white/5 flex items-center justify-center text-[#71717a] hover:text-[#FFD527] hover:border-[#FFD527]/30 transition-all"
              aria-label="Behance"
            >
              <FaBehance className="text-lg" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/5 bg-[#050303]">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[#71717a]">
            &copy; {new Date().getFullYear()} Catia Carvalho. All rights
            reserved.
          </p>
          <p className="text-xs text-[#71717a]/60">
            Designed &amp; built with care
          </p>
        </div>
      </footer>
    </>
  );
};
