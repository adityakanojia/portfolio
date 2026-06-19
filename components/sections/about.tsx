import Image from "next/image";
import { Check } from "lucide-react";

const skills = [
  "Next.js & React",
  "Java & Spring Boot",
  "Microservices",
  "Data-Intense Apps",
  "TypeScript",
  "PostgreSQL & Redis",
  "System Architecture",
  "SEO & Performance",
];

const stats = [
  { value: "3+", label: "Years building for real businesses" },
  { value: "20+", label: "Projects shipped" },
  { value: "95+", label: "Average Lighthouse score" },
  { value: "∞", label: "Commitment to your success" },
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="section-padding bg-[var(--surface)]"
      aria-labelledby="about-heading"
    >
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          {/* Content */}
          <div>
            <p className="section-label">About</p>
            <h2
              id="about-heading"
              className="text-3xl sm:text-4xl font-bold text-[var(--text)] tracking-tight mb-6"
            >
              I build scalable software and data-intense applications
            </h2>

            <div className="space-y-4 text-[var(--muted)] leading-relaxed mb-8">
              <p>
                I&apos;m Aditya Kanozia — a Software Development Engineer (SDE). I specialize in designing and building scalable systems, data-intense applications, and robust APIs that power complex business logic.
              </p>
              <p>
                My core tech stack revolves around Next.js, Java, Spring Boot, and Microservices architecture. Whether it&apos;s a high-performance frontend or a distributed backend processing massive datasets, I focus on writing clean, efficient, and maintainable code.
              </p>
              <p>
                I don&apos;t just build features — I think about system architecture, data flow, and long-term maintainability. I take on a small number of ambitious projects at a time to ensure every client gets my full engineering expertise and best work.
              </p>
            </div>

            {/* Skills checklist */}
            <div className="grid grid-cols-2 gap-2 mb-8">
              {skills.map((skill) => (
                <div key={skill} className="flex items-center gap-2 text-sm text-[var(--text)]">
                  <Check className="h-4 w-4 text-[var(--accent)] shrink-0" />
                  {skill}
                </div>
              ))}
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="p-4 rounded-xl border border-[var(--border)] bg-[var(--bg)]"
                >
                  <div className="text-2xl font-bold text-[var(--accent)] mb-0.5">{stat.value}</div>
                  <div className="text-xs text-[var(--muted)]">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
