import { Scale, Rocket, Sparkles, MapPin } from "lucide-react";
import { CLIENT_TYPES } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  Scale,
  Rocket,
  Sparkles,
  MapPin,
};

export function ClientTypesSection() {
  return (
    <section
      id="clients"
      className="section-padding bg-[var(--surface)]"
      aria-labelledby="clients-heading"
    >
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-label mx-auto">Who I Help</p>
          <h2
            id="clients-heading"
            className="text-3xl sm:text-4xl font-bold text-[var(--text)] tracking-tight mb-4"
          >
            Built for businesses that mean business
          </h2>
          <p className="text-[var(--muted)] max-w-xl mx-auto">
            From law firms to startups, I build digital experiences tailored to your industry,
            audience, and growth goals.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CLIENT_TYPES.map((client) => {
            const Icon = iconMap[client.icon];
            return (
              <div
                key={client.id}
                className="card-base group p-6 cursor-default"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--accent-subtle)] border border-[color-mix(in_srgb,var(--accent)_20%,transparent)] mb-5 transition-all duration-200 group-hover:bg-[var(--accent)] group-hover:border-[var(--accent)]">
                  <Icon className="h-5 w-5 text-[var(--accent)] transition-colors duration-200 group-hover:text-[var(--accent-fg)]" />
                </div>
                <h3 className="text-base font-semibold text-[var(--text)] mb-2">{client.title}</h3>
                <p className="text-sm text-[var(--muted)] leading-relaxed">{client.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
