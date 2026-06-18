import {
  Globe,
  Layers,
  Code2,
  Server,
  Search,
  Shield,
  ArrowRight,
} from "lucide-react";
import { SERVICES } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  Globe,
  Layers,
  Code2,
  Server,
  Search,
  Shield,
};

export function ServicesSection() {
  return (
    <section
      id="services"
      className="section-padding"
      aria-labelledby="services-heading"
    >
      <div className="container-custom">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="section-label">Services</p>
          <h2
            id="services-heading"
            className="text-3xl sm:text-4xl font-bold text-[var(--text)] tracking-tight mb-4"
          >
            Everything you need to grow online
          </h2>
          <p className="text-[var(--muted)] leading-relaxed">
            From initial concept to post-launch support — I handle the full lifecycle of your
            digital presence so you can focus on running your business.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => {
            const Icon = iconMap[service.icon];
            return (
              <article
                key={service.id}
                className="group card-base p-7 flex flex-col"
              >
                {/* Number */}
                <div className="flex items-start justify-between mb-5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--accent-subtle)] border border-[color-mix(in_srgb,var(--accent)_20%,transparent)] transition-all duration-200 group-hover:bg-[var(--accent)] group-hover:border-[var(--accent)]">
                    <Icon className="h-5 w-5 text-[var(--accent)] transition-colors duration-200 group-hover:text-[var(--accent-fg)]" />
                  </div>
                  <span className="text-xs font-semibold text-[var(--border)] tabular-nums">
                    0{i + 1}
                  </span>
                </div>

                <h3 className="text-base font-semibold text-[var(--text)] mb-2.5">
                  {service.title}
                </h3>
                <p className="text-sm text-[var(--muted)] leading-relaxed flex-1">
                  {service.description}
                </p>

                <div className="mt-5 flex items-center gap-1.5 text-xs font-semibold text-[var(--accent)] opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  Learn more
                  <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
