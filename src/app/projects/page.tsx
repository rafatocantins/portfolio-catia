"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { projects, allCategories } from "@/lib/projects";

export default function ProjectsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        activeCategory === "All" || project.category === activeCategory;
      const matchesSearch =
        searchQuery.trim() === "" ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        );
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, activeCategory]);

  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="pt-32 pb-16 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-[#FFD527] text-sm font-medium tracking-widest uppercase mb-4"
            >
              Portfolio
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-[#e4e4e7] mb-4"
            >
              Projects &amp; Case Studies
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[#71717a] text-lg max-w-2xl mx-auto"
            >
              A selection of projects where I designed thoughtful digital
              experiences through research, prototyping, and collaboration.
            </motion.p>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="pb-8 px-6">
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Search input */}
              <div className="relative flex-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#71717a]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-[#111111] border border-white/5 rounded-xl text-[#e4e4e7] placeholder:text-[#71717a] focus:outline-none focus:border-[#FFD527]/40 transition-colors text-sm"
                />
              </div>

              {/* Category filter */}
              <div className="flex flex-wrap gap-2 items-center">
                {["All", ...allCategories].map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 ${
                      activeCategory === category
                        ? "bg-[#FFD527] text-white"
                        : "bg-[#111111] border border-white/5 text-[#71717a] hover:text-[#e4e4e7] hover:border-white/10"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Results count */}
            <p className="text-xs text-[#71717a] mt-3">
              {filtered.length}{" "}
              {filtered.length === 1 ? "project" : "projects"} found
            </p>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="pb-24 px-6">
          <div className="max-w-6xl mx-auto">
            <AnimatePresence mode="wait">
              {filtered.length === 0 ? (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-20"
                >
                  <p className="text-4xl mb-4">🔍</p>
                  <p className="text-[#71717a] text-lg">
                    No projects found matching your criteria.
                  </p>
                  <button
                    onClick={() => {
                      setSearchQuery("");
                      setActiveCategory("All");
                    }}
                    className="mt-4 text-sm text-[#FFD527] hover:text-[#FFE066] transition-colors"
                  >
                    Clear filters
                  </button>
                </motion.div>
              ) : (
                <motion.div
                  key="grid"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="grid md:grid-cols-2 gap-6"
                >
                  {filtered.map((project, index) => (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.08 }}
                      whileHover={{ scale: 1.02 }}
                      className="group bg-[#111111] border border-white/5 rounded-xl overflow-hidden hover:border-[#FFD527]/40 transition-all duration-300 cursor-pointer"
                    >
                      {/* Image placeholder */}
                      <div
                        className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}
                      >
                        <span className="text-5xl opacity-40 select-none">
                          {project.emoji}
                        </span>
                      </div>

                      <div className="p-6">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs text-[#FFD527] font-medium uppercase tracking-wider">
                            {project.role}
                          </span>
                          <span className="text-xs text-[#71717a]">
                            {project.year}
                          </span>
                        </div>

                        <h3 className="text-xl font-semibold text-[#e4e4e7] mt-1 mb-2 group-hover:text-[#FFD527] transition-colors">
                          {project.title}
                        </h3>

                        <p className="text-sm text-[#71717a] mb-4 leading-relaxed">
                          {project.excerpt}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {project.tags.slice(0, 4).map((tag) => (
                            <span
                              key={tag}
                              className="text-xs px-3 py-1 rounded-full bg-[#FFD527]/10 text-[#FFD527] border border-[#FFD527]/20"
                            >
                              {tag}
                            </span>
                          ))}
                          {project.tags.length > 4 && (
                            <span className="text-xs px-3 py-1 rounded-full bg-white/5 text-[#71717a] border border-white/5">
                              +{project.tags.length - 4}
                            </span>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>
      </main>
    </>
  );
}
