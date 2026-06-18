"use client";

import { ArrowRight } from "lucide-react";

export function FinalCTASection() {
  return (
    <section
      id="final-cta"
      className="section-padding bg-[var(--surface)]"
      aria-labelledby="final-cta-heading"
    >
      <div className="container-custom">
        <div className="relative rounded-3xl overflow-hidden border border-[var(--border)] bg-[var(--card-bg)] p-12 sm:p-16 lg:p-20 text-center">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 rounded-full bg-[var(--accent)] opacity-[0.06] blur-[80px]" />

          <div className="relative z-10 max-w-2xl mx-auto">
            {/* Label */}
            <p className="section-label mx-auto mb-6">Ready to Start?</p>

            {/* Headline */}
            <h2
              id="final-cta-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--text)] tracking-tight mb-5 leading-tight"
            >
              Your website is often your{" "}
              <span className="text-gradient">first impression.</span>
            </h2>

            {/* Subheadline */}
            <p className="text-[var(--muted)] text-lg mb-10 max-w-lg mx-auto">
              Let&apos;s make sure it&apos;s one worth remembering.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                id="final-cta-primary"
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.querySelector("#contact");
                  if (el) {
                    const top = el.getBoundingClientRect().top + window.scrollY - 80;
                    window.scrollTo({ top, behavior: "smooth" });
                  }
                }}
                className="btn-primary text-base"
              >
                Get a Free Website Audit
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                id="final-cta-secondary"
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.querySelector("#contact");
                  if (el) {
                    const top = el.getBoundingClientRect().top + window.scrollY - 80;
                    window.scrollTo({ top, behavior: "smooth" });
                  }
                }}
                className="btn-secondary text-base"
              >
                Start a Project
              </a>
            </div>

            {/* Trust note */}
            <p className="mt-8 text-xs text-[var(--muted)]">
              Free consultation · No commitment · Response within 24 hours
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
