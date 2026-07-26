"use client";

import { motion } from "framer-motion";
import { AlertTriangle, FlaskConical, Target, Palette, Code2, TrendingUp } from "lucide-react";

const caseStudySteps = [
  {
    id: "problem",
    icon: AlertTriangle,
    label: "The Problem",
    title: "Scaling a fast-growing tech startup platform",
    content:
      "A tech startup needed a production-ready platform capable of rapid iteration without sacrificing performance. They were struggling with monolithic bottlenecks, and the separation of their headsup-frontend and headsup-backend required a robust, scalable architecture to handle thousands of concurrent users.",
    stat: { value: "10x", label: "expected user growth in year one" },
    accentColor: "text-red-500",
  },
  {
    id: "research",
    icon: FlaskConical,
    label: "Research",
    title: "Understanding modern scalable architectures",
    content:
      "I analyzed their existing data flow and user interaction models. The findings pointed towards a decoupled architecture where a lightning-fast frontend could seamlessly communicate with a highly concurrent backend API, ensuring smooth performance even under heavy load.",
    stat: { value: "<50ms", label: "target API response time" },
    accentColor: "text-blue-500",
  },
  {
    id: "strategy",
    icon: Target,
    label: "Strategy",
    title: "Decoupled Next.js and FastAPI architecture",
    content:
      "We restructured the system into clear micro-services. The headsup-frontend would leverage Next.js for SSR and SEO, while the headsup-backend would use FastAPI (Python) for asynchronous, high-performance data processing, backed by PostgreSQL and Redis for caching.",
    stat: { value: "100%", label: "type safety across the stack" },
    accentColor: "text-amber-500",
  },
  {
    id: "design",
    icon: Palette,
    label: "Design Decisions",
    title: "Clean, responsive, and intuitive",
    content:
      "The UI was designed to be highly responsive and intuitive. We focused on a clean, modern aesthetic with a dark mode option, utilizing Tailwind CSS for rapid styling and Framer Motion for subtle, engaging micro-animations that don't compromise performance.",
    stat: { value: "60fps", label: "smooth animations and transitions" },
    accentColor: "text-purple-500",
  },
  {
    id: "development",
    icon: Code2,
    label: "Development",
    title: "Full-stack integration and deployment",
    content:
      "Development involved setting up strict CI/CD pipelines for both the Next.js frontend and FastAPI backend. We implemented robust authentication, real-time data synchronization using WebSockets, and optimized database queries to ensure the platform could scale effortlessly.",
    stat: { value: "0", label: "downtime during deployments" },
    accentColor: "text-emerald-500",
  },
  {
    id: "outcome",
    icon: TrendingUp,
    label: "Outcome",
    title: "A robust platform ready for thousands of users",
    content:
      "The platform launched successfully and seamlessly handled the initial surge of users. The startup was able to iterate rapidly on new features without technical debt holding them back. The architecture proved resilient, fast, and exactly what investors were looking for.",
    stat: { value: "1000s", label: "of concurrent users handled smoothly" },
    accentColor: "text-teal-500",
  },
];

export function CaseStudySection() {
  return (
    <section
      id="case-study"
      className="section-padding"
      aria-labelledby="case-study-heading"
    >
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="section-label mx-auto">Case Study</p>
          <h2
            id="case-study-heading"
            className="text-3xl sm:text-4xl font-bold text-[var(--text)] tracking-tight mb-4"
          >
            Building HeadsUp: A Scalable Tech Startup Platform
          </h2>
          <p className="text-[var(--muted)] max-w-2xl mx-auto">
            How I architected and developed a full-stack platform capable of rapid iteration and handling thousands of concurrent users.
          </p>

          {/* Project meta */}
          <div className="mt-8 grid grid-cols-2 md:flex md:flex-row md:items-center justify-center gap-4 md:gap-8 px-6 md:px-8 py-5 rounded-2xl border border-[var(--border)] bg-[var(--surface)] w-full max-w-3xl mx-auto">
            {[
              { label: "Client", value: "HeadsUp" },
              { label: "Duration", value: "3 Weeks" },
              { label: "Stack", value: "Next.js + FastAPI" },
              { label: "Role", value: "Full Stack Engineer" },
            ].map((meta) => (
              <div key={meta.label} className="text-center">
                <div className="text-base font-bold text-[var(--text)]">{meta.value}</div>
                <div className="text-xs text-[var(--muted)] mt-0.5">{meta.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Steps */}
        <div className="space-y-16">
          {caseStudySteps.map((step, i) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${
                i % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}
            >
              {/* Content */}
              <div className={i % 2 === 1 ? "lg:col-start-2" : ""}>
                <div className="flex items-center gap-3 mb-4">
                  <div className={`${step.accentColor}`}>
                    <step.icon className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)]">
                    {step.label}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[var(--text)] mb-4 leading-tight">
                  {step.title}
                </h3>
                <p className="text-[var(--muted)] leading-relaxed">{step.content}</p>
              </div>

              {/* Stat card */}
              <div className={`${i % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                <div className="card-base p-10 text-center hover:transform-none">
                  <div className={`text-6xl font-black mb-3 ${step.accentColor}`}>
                    {step.stat.value}
                  </div>
                  <div className="text-sm text-[var(--muted)]">{step.stat.label}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <a
            href="https://headsuptech.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex"
          >
            View the Live Site
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
