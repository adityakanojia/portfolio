"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS } from "@/lib/data";

export function ProjectsSection() {
  return (
    <section
      id="work"
      className="section-padding bg-[var(--surface)]"
      aria-labelledby="work-heading"
    >
      <div className="container-custom">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <p className="section-label">Featured Work</p>
            <h2
              id="work-heading"
              className="text-3xl sm:text-4xl font-bold text-[var(--text)] tracking-tight"
            >
              Projects that deliver results
            </h2>
          </div>
          <p className="text-[var(--muted)] max-w-sm text-sm leading-relaxed">
            Each project is a case study in solving real business problems through design,
            technology, and strategy.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS.map((project, i) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group card-base overflow-hidden flex flex-col"
            >
              {/* Accent bar / preview area */}
              <div
                className={`relative h-60 bg-gradient-to-br ${project.accentColor} border-b border-[var(--border)] overflow-hidden flex flex-col justify-end items-center px-4 pt-12 group`}
              >
                {/* Decorative grid */}
                <div className="absolute inset-0 bg-grid opacity-30" />

                {/* Category badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="badge text-xs shadow-sm bg-[var(--surface)] text-[var(--text)] border-[var(--border)]">{project.category}</span>
                </div>

                {/* Featured badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-[var(--accent)] text-[var(--accent-fg)] shadow-md">
                      ★ Featured
                    </span>
                  </div>
                )}

                {/* Sleek Mockup Frame */}
                <div className="w-full max-w-sm aspect-[16/10] bg-[var(--bg)] rounded-t-xl border border-[var(--border)] border-b-0 shadow-2xl relative overflow-hidden translate-y-6 group-hover:translate-y-2 transition-transform duration-500 ease-out z-10">
                  {/* Browser Header */}
                  <div className="h-6 border-b border-[var(--border)] bg-[var(--surface)] flex items-center px-3 gap-1.5 w-full">
                    <div className="w-2 h-2 rounded-full bg-red-400/80" />
                    <div className="w-2 h-2 rounded-full bg-amber-400/80" />
                    <div className="w-2 h-2 rounded-full bg-green-400/80" />
                  </div>
                  {/* Placeholder content skeleton */}
                  <div className="p-4 flex flex-col gap-3 opacity-60">
                    <div className="h-4 w-3/4 bg-[var(--border)] rounded" />
                    <div className="h-3 w-1/2 bg-[var(--border)] rounded opacity-50" />
                    <div className="h-24 w-full bg-[var(--border)] rounded mt-2 opacity-30" />
                  </div>
                </div>

                {/* Hover overlay with external link */}
                <div className="absolute inset-0 bg-[var(--bg)]/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center z-20">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary gap-2 shadow-xl scale-95 group-hover:scale-100 transition-transform duration-300 delay-100"
                    aria-label={`View ${project.title} live`}
                  >
                    View Live
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-semibold text-[var(--text)] mb-2">{project.title}</h3>
                <p className="text-sm text-[var(--muted)] leading-relaxed mb-4 flex-1">
                  {project.overview}
                </p>

                {/* Tech pills */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-[var(--surface)] border border-[var(--border)] text-[var(--muted)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Bottom row */}
                <div className="flex items-center justify-between pt-4 border-t border-[var(--border)]">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-semibold text-[var(--accent)] hover:text-[var(--accent-hover)] transition-colors"
                  >
                    Visit Project
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                  {project.featured && (
                    <a
                      href="#case-study"
                      onClick={(e) => {
                        e.preventDefault();
                        const el = document.querySelector("#case-study");
                        if (el) {
                          const top = el.getBoundingClientRect().top + window.scrollY - 80;
                          window.scrollTo({ top, behavior: "smooth" });
                        }
                      }}
                      className="text-xs font-medium text-[var(--muted)] hover:text-[var(--text)] transition-colors flex items-center gap-1"
                    >
                      Read Case Study →
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
