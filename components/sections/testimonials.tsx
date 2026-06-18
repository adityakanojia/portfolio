import { Star } from "lucide-react";
import { TESTIMONIALS } from "@/lib/data";

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="section-padding bg-[var(--surface)]"
      aria-labelledby="testimonials-heading"
    >
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-label mx-auto">Testimonials</p>
          <h2
            id="testimonials-heading"
            className="text-3xl sm:text-4xl font-bold text-[var(--text)] tracking-tight mb-4"
          >
            What clients are saying
          </h2>
          <p className="text-[var(--muted)] max-w-xl mx-auto">
            Don&apos;t take my word for it. Here&apos;s what business owners say about working with me.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((testimonial) => (
            <figure
              key={testimonial.id}
              className="card-base p-7 flex flex-col"
            >
              {/* Stars */}
              <div className="flex items-center gap-1 mb-5">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-[var(--accent)] text-[var(--accent)]"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-sm text-[var(--muted)] leading-relaxed flex-1 mb-6">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <figcaption className="flex items-center gap-3 pt-5 border-t border-[var(--border)]">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--accent)] text-[var(--accent-fg)] font-bold text-sm shrink-0">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="text-sm font-semibold text-[var(--text)]">
                    {testimonial.name}
                  </div>
                  <div className="text-xs text-[var(--muted)]">
                    {testimonial.title}, {testimonial.company}
                  </div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
