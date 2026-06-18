import {
  Zap,
  Code2,
  Search,
  Smartphone,
  BarChart3,
  HeartHandshake,
} from "lucide-react";
import { WHY_ME } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  Zap,
  Code2,
  Search,
  Smartphone,
  BarChart3,
  HeartHandshake,
};

export function WhyMeSection() {
  return (
    <section
      id="why-me"
      className="section-padding bg-[var(--surface)]"
      aria-labelledby="why-me-heading"
    >
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-label mx-auto">Why Work With Me</p>
          <h2
            id="why-me-heading"
            className="text-3xl sm:text-4xl font-bold text-[var(--text)] tracking-tight mb-4"
          >
            What makes the difference
          </h2>
          <p className="text-[var(--muted)] max-w-xl mx-auto">
            I don&apos;t just build websites. I build reliable, high-performance digital assets that
            continue to generate value for your business long after launch.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_ME.map((item) => {
            const Icon = iconMap[item.icon];
            return (
              <div
                key={item.id}
                className="card-base group p-7"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--accent-subtle)] border border-[color-mix(in_srgb,var(--accent)_20%,transparent)] mb-5 transition-all duration-200 group-hover:bg-[var(--accent)] group-hover:border-[var(--accent)]">
                  <Icon className="h-5 w-5 text-[var(--accent)] transition-colors duration-200 group-hover:text-[var(--accent-fg)]" />
                </div>
                <h3 className="text-base font-semibold text-[var(--text)] mb-2">{item.title}</h3>
                <p className="text-sm text-[var(--muted)] leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
