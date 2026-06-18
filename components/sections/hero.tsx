"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { TRUST_INDICATORS } from "@/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.21, 1.11, 0.81, 0.99] as const },
  }),
};

export function HeroSection() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
      aria-label="Hero section"
    >
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />

      {/* Accent orb */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-[var(--accent)] opacity-[0.04] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-blue-500 opacity-[0.03] blur-[100px] pointer-events-none" />

      <div className="container-custom section-padding relative z-10">
        <div className="max-w-4xl">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="section-label mb-6"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)] animate-pulse-dot" />
            Available for new projects
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6, ease: [0.21, 1.11, 0.81, 0.99] }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[var(--text)] leading-[1.05] mb-6"
          >
            Engineering Scalable{" "}
            <span className="text-gradient">Systems & Data-Intense</span>{" "}
            Applications
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-lg sm:text-xl text-[var(--muted)] leading-relaxed max-w-2xl mb-8"
          >
            I design and build robust architectures, scalable backend systems, and high-performance frontends that solve complex engineering problems and drive business growth.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-3 mb-12"
          >
            <button
              id="hero-primary-cta"
              onClick={() => handleScroll("#contact")}
              className="btn-primary text-base"
            >
              Discuss a Project
              <ArrowRight className="h-4 w-4" />
            </button>
            <button
              id="hero-secondary-cta"
              onClick={() => handleScroll("#work")}
              className="btn-secondary text-base"
            >
              View My Work
            </button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45, duration: 0.5 }}
            className="flex flex-wrap gap-x-6 gap-y-3"
          >
            {TRUST_INDICATORS.map((item, i) => (
              <motion.div
                key={item}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="flex items-center gap-2 text-sm font-medium text-[var(--muted)]"
              >
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[var(--accent-subtle)] border border-[color-mix(in_srgb,var(--accent)_25%,transparent)]">
                  <Check className="h-3 w-3 text-[var(--accent)]" />
                </div>
                {item}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Floating stats cards */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-4 pr-8">
          {[
            { label: "Projects Delivered", value: "20+", icon: "🚀" },
            { label: "Lighthouse Score", value: "95+", icon: "⚡" },
            { label: "Client Satisfaction", value: "100%", icon: "✓" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + i * 0.15, duration: 0.5 }}
              style={{ animation: `float ${3 + i * 0.5}s ease-in-out infinite` }}
              className="card-base p-4 w-[160px] hover:transform-none"
            >
              <div className="text-2xl mb-1">{stat.icon}</div>
              <div className="text-xl font-bold text-[var(--text)]">{stat.value}</div>
              <div className="text-xs text-[var(--muted)]">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-[var(--muted)] uppercase tracking-widest">Scroll</span>
        <div className="h-8 w-px bg-gradient-to-b from-[var(--border)] to-transparent" />
      </motion.div>
    </section>
  );
}
