"use client";

import { motion } from "framer-motion";
import { AlertTriangle, FlaskConical, Target, Palette, Code2, TrendingUp } from "lucide-react";

const caseStudySteps = [
  {
    id: "problem",
    icon: AlertTriangle,
    label: "The Problem",
    title: "A law firm losing clients to its own website",
    content:
      "Law firm websites are notoriously bad. They're cluttered, slow, and built by agencies that prioritize aesthetics over conversion. Potential clients would arrive on the site and leave within seconds — not because the firm wasn't excellent, but because the website didn't communicate that excellence.",
    stat: { value: "73%", label: "of users judge credibility by website design" },
    accentColor: "text-red-500",
  },
  {
    id: "research",
    icon: FlaskConical,
    label: "Research",
    title: "Understanding what legal clients actually need",
    content:
      "I analyzed competitor law firm sites, studied conversion data, and interviewed potential clients. The findings were clear: visitors needed to quickly understand the firm's expertise, see social proof, and find it easy to take action. Trust signals and clarity beat aesthetics every time.",
    stat: { value: "3s", label: "average time to make a trust judgment" },
    accentColor: "text-blue-500",
  },
  {
    id: "strategy",
    icon: Target,
    label: "Strategy",
    title: "Clarity, authority, and a clear path to action",
    content:
      "We restructured the information architecture to answer three questions immediately: Who are you? What do you do? Why should I trust you? Every page was designed around a single conversion goal — getting qualified prospects to book a consultation.",
    stat: { value: "5x", label: "improvement in conversion funnel clarity" },
    accentColor: "text-amber-500",
  },
  {
    id: "design",
    icon: Palette,
    label: "Design Decisions",
    title: "Premium, not flashy",
    content:
      "The design language was deliberately restrained. Dark typography on white, generous whitespace, a muted color palette with a single amber accent. No stock photos, no clip art. The goal was to feel like a top-tier firm — confident enough in its work that it doesn't need to shout.",
    stat: { value: "100%", label: "custom UI components" },
    accentColor: "text-purple-500",
  },
  {
    id: "development",
    icon: Code2,
    label: "Development",
    title: "Next.js 15, TypeScript, performance-first",
    content:
      "Built with the App Router, Server Components wherever possible, and Client Components only where interactivity was required. Framer Motion for scroll-triggered animations. Optimized images, fonts, and code splitting throughout. The result was a Lighthouse score of 98 across all categories.",
    stat: { value: "98", label: "Lighthouse performance score" },
    accentColor: "text-emerald-500",
  },
  {
    id: "outcome",
    icon: TrendingUp,
    label: "Outcome",
    title: "A website that works as hard as the lawyers",
    content:
      "Within the first month of launch, the firm reported a measurable increase in qualified consultation requests. The bounce rate dropped significantly. Clients began mentioning the website as the reason they chose to reach out. The site now ranks on the first page for key local search terms.",
    stat: { value: "40%", label: "increase in consultation inquiries" },
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
            Building a Law Firm&apos;s Digital Foundation
          </h2>
          <p className="text-[var(--muted)] max-w-2xl mx-auto">
            How I took a respected but digitally invisible law firm and built a website that became
            their most effective business development tool.
          </p>

          {/* Project meta */}
          <div className="mt-8 grid grid-cols-2 md:flex md:flex-row md:items-center justify-center gap-4 md:gap-8 px-6 md:px-8 py-5 rounded-2xl border border-[var(--border)] bg-[var(--surface)] w-full max-w-3xl mx-auto">
            {[
              { label: "Client", value: "Law Firm" },
              { label: "Duration", value: "3 Weeks" },
              { label: "Stack", value: "Next.js + TS" },
              { label: "Score", value: "98 Lighthouse" },
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
            href="https://project-ss-sable.vercel.app/"
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
