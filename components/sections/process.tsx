"use client";

import { motion } from "framer-motion";
import {
  Compass,
  Map,
  Palette,
  Code2,
  CheckCircle2,
  Rocket,
  HeartHandshake,
} from "lucide-react";
import { PROCESS_STEPS } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  Compass,
  Map,
  Palette,
  Code2,
  CheckCircle2,
  Rocket,
  HeartHandshake,
};

export function ProcessSection() {
  return (
    <section
      id="process"
      className="section-padding"
      aria-labelledby="process-heading"
    >
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="section-label mx-auto">The Process</p>
          <h2
            id="process-heading"
            className="text-3xl sm:text-4xl font-bold text-[var(--text)] tracking-tight mb-4"
          >
            From idea to launch — a clear path
          </h2>
          <p className="text-[var(--muted)] max-w-xl mx-auto">
            No surprises, no scope creep. Just a structured, transparent process that delivers
            exceptional results on time.
          </p>
        </div>

        {/* Desktop: horizontal timeline */}
        <div className="hidden lg:block relative">
          {/* Connecting line */}
          <div className="absolute top-[52px] left-[calc(100%/14)] right-[calc(100%/14)] h-px bg-[var(--border)]" />

          <div className="grid grid-cols-7 gap-4">
            {PROCESS_STEPS.map((step, i) => {
              const Icon = iconMap[step.icon];
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  className="flex flex-col items-center text-center group"
                >
                  {/* Node */}
                  <div className="relative mb-6">
                    <div className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-[var(--bg)] border-2 border-[var(--border)] text-[var(--muted)] transition-all duration-300 group-hover:border-[var(--accent)] group-hover:text-[var(--accent)] group-hover:bg-[var(--accent-subtle)] z-10 relative">
                      <Icon className="h-5 w-5" />
                    </div>
                    {/* Step number badge */}
                    <div className="absolute -top-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-[var(--accent)] text-[var(--accent-fg)] text-[10px] font-bold">
                      {step.step}
                    </div>
                  </div>

                  <h3 className="text-sm font-semibold text-[var(--text)] mb-2">{step.title}</h3>
                  <p className="text-xs text-[var(--muted)] leading-relaxed">{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile: vertical timeline */}
        <div className="lg:hidden relative pl-10">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-[var(--border)]" />

          <div className="space-y-10">
            {PROCESS_STEPS.map((step, i) => {
              const Icon = iconMap[step.icon];
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  className="relative"
                >
                  {/* Node */}
                  <div className="absolute -left-10 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-[var(--bg)] border-2 border-[var(--border)] text-[var(--accent)] z-10">
                    <Icon className="h-3.5 w-3.5" />
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-xs font-bold text-[var(--accent)] uppercase tracking-wider">
                        Step {step.step}
                      </span>
                    </div>
                    <h3 className="text-base font-semibold text-[var(--text)] mb-1.5">
                      {step.title}
                    </h3>
                    <p className="text-sm text-[var(--muted)] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
