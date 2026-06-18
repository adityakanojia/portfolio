"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { FAQ_ITEMS } from "@/lib/data";

export function FAQSection() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section
      id="faq"
      className="section-padding"
      aria-labelledby="faq-heading"
    >
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: header */}
          <div className="lg:sticky lg:top-24">
            <p className="section-label">FAQ</p>
            <h2
              id="faq-heading"
              className="text-3xl sm:text-4xl font-bold text-[var(--text)] tracking-tight mb-4"
            >
              Common questions, answered
            </h2>
            <p className="text-[var(--muted)] leading-relaxed mb-8">
              Still have questions? I&apos;m happy to answer anything specific to your project.
            </p>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                const el = document.querySelector("#contact");
                if (el) {
                  const top = el.getBoundingClientRect().top + window.scrollY - 80;
                  window.scrollTo({ top, behavior: "smooth" });
                }
              }}
              className="btn-secondary inline-flex cursor-pointer"
            >
              Ask me directly
            </a>
          </div>

          {/* Right: accordion */}
          <div>
            <dl>
              {FAQ_ITEMS.map((item) => (
                <div key={item.id} className="accordion-item">
                  <dt>
                    <button
                      id={`faq-${item.id}-trigger`}
                      aria-expanded={openId === item.id}
                      aria-controls={`faq-${item.id}-content`}
                      className="accordion-trigger"
                      onClick={() => setOpenId(openId === item.id ? null : item.id)}
                    >
                      <span className="pr-4">{item.question}</span>
                      <div className="shrink-0 flex h-7 w-7 items-center justify-center rounded-full border border-[var(--border)] text-[var(--muted)] transition-all duration-200">
                        {openId === item.id ? (
                          <Minus className="h-3.5 w-3.5" />
                        ) : (
                          <Plus className="h-3.5 w-3.5" />
                        )}
                      </div>
                    </button>
                  </dt>
                  <dd
                    id={`faq-${item.id}-content`}
                    role="region"
                    aria-labelledby={`faq-${item.id}-trigger`}
                    className="overflow-hidden transition-all duration-300"
                    style={{
                      maxHeight: openId === item.id ? "500px" : "0",
                    }}
                  >
                    <p className="pb-5 text-sm text-[var(--muted)] leading-relaxed">
                      {item.answer}
                    </p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
