"use client";

import { useState } from "react";
import { Send, CheckCircle2, Mail, Phone, Code2 } from "lucide-react";
import { SITE } from "@/lib/data";

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

type FormData = {
  name: string;
  email: string;
  business: string;
  budget: string;
  description: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

const budgetOptions = [
  { value: "", label: "Select a budget range" },
  { value: "0-10000", label: "₹0 – ₹10,000" },
  { value: "20000-30000", label: "₹20,000 – ₹30,000" },
  { value: "more", label: "More than ₹30,000" },
  { value: "not-sure", label: "Not sure yet" },
];

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim()) errors.name = "Name is required.";
  if (!data.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!data.description.trim()) errors.description = "Please describe your project.";
  return errors;
}

export function ContactSection() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    business: "",
    budget: "",
    description: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setLoading(true);

    const payload = {
      access_key: "7c7d896e-b004-464f-bb74-7cbbaef273d8",
      ...form,
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        setErrors({ description: "Something went wrong. Please try again later." });
      }
    } catch (err) {
      setErrors({ description: "Network error. Please try again later." });
    } finally {
      setLoading(false);
    }
  };

  const socialLinks = [
    { icon: LinkedInIcon, label: "LinkedIn", href: SITE.linkedin },
    { icon: GitHubIcon, label: "GitHub", href: SITE.github },
    { icon: Code2, label: "LeetCode", href: SITE.leetcode },
    { icon: Mail, label: SITE.email, href: `mailto:${SITE.email}` },
    { icon: Phone, label: SITE.phone, href: `tel:${SITE.phone}` },
  ];

  return (
    <section
      id="contact"
      className="section-padding"
      aria-labelledby="contact-heading"
    >
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: info */}
          <div>
            <p className="section-label">Contact</p>
            <h2
              id="contact-heading"
              className="text-3xl sm:text-4xl font-bold text-[var(--text)] tracking-tight mb-4"
            >
              Let&apos;s build something great together
            </h2>
            <p className="text-[var(--muted)] leading-relaxed mb-8">
              Tell me about your project and I&apos;ll get back to you within 24 hours with an
              honest assessment and a clear next step.
            </p>

            {/* Social links */}
            <div className="space-y-4 mb-8">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-3 group"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--border)] text-[var(--muted)] transition-all group-hover:border-[var(--accent)] group-hover:text-[var(--accent)] group-hover:bg-[var(--accent-subtle)]">
                    <Icon className="h-4 w-4" />
                  </div>
                  <span className="text-sm text-[var(--muted)] group-hover:text-[var(--text)] transition-colors">
                    {label}
                  </span>
                </a>
              ))}
            </div>

            {/* Trust note */}
            <div className="p-5 rounded-xl border border-[var(--border)] bg-[var(--surface)]">
              <p className="text-xs text-[var(--muted)] leading-relaxed">
                ✓ Free initial consultation &nbsp;·&nbsp; ✓ Response within 24 hours
                &nbsp;·&nbsp; ✓ No obligation
              </p>
            </div>
          </div>

          {/* Right: form */}
          <div>
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[var(--accent-subtle)] border border-[color-mix(in_srgb,var(--accent)_30%,transparent)] mb-5">
                  <CheckCircle2 className="h-8 w-8 text-[var(--accent)]" />
                </div>
                <h3 className="text-xl font-semibold text-[var(--text)] mb-2">Message sent successfully!</h3>
                <p className="text-[var(--muted)] text-sm max-w-xs">
                  Thank you for reaching out. I&apos;ll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setForm({ name: "", email: "", business: "", budget: "", description: "" });
                  }}
                  className="mt-6 btn-secondary text-sm"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                id="contact-form"
                onSubmit={handleSubmit}
                className="space-y-5"
                noValidate
              >
                {/* Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="contact-name" className="block text-sm font-medium text-[var(--text)] mb-1.5">
                      Name <span className="text-[var(--accent)]">*</span>
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      placeholder="Your name"
                      value={form.name}
                      onChange={handleChange}
                      className={`input-base ${errors.name ? "border-red-400" : ""}`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-red-500">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-sm font-medium text-[var(--text)] mb-1.5">
                      Email <span className="text-[var(--accent)]">*</span>
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={handleChange}
                      className={`input-base ${errors.email ? "border-red-400" : ""}`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-500">{errors.email}</p>
                    )}
                  </div>
                </div>

                {/* Business & Budget */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="contact-business" className="block text-sm font-medium text-[var(--text)] mb-1.5">
                      Business Name
                    </label>
                    <input
                      id="contact-business"
                      name="business"
                      type="text"
                      autoComplete="organization"
                      placeholder="Your company (optional)"
                      value={form.business}
                      onChange={handleChange}
                      className="input-base"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-budget" className="block text-sm font-medium text-[var(--text)] mb-1.5">
                      Budget Range
                    </label>
                    <select
                      id="contact-budget"
                      name="budget"
                      value={form.budget}
                      onChange={handleChange}
                      className="input-base"
                    >
                      {budgetOptions.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <label htmlFor="contact-description" className="block text-sm font-medium text-[var(--text)] mb-1.5">
                    Project Description <span className="text-[var(--accent)]">*</span>
                  </label>
                  <textarea
                    id="contact-description"
                    name="description"
                    rows={5}
                    placeholder="Tell me about your project, your goals, and any specific requirements..."
                    value={form.description}
                    onChange={handleChange}
                    className={`input-base resize-none ${errors.description ? "border-red-400" : ""}`}
                  />
                  {errors.description && (
                    <p className="mt-1 text-xs text-red-500">{errors.description}</p>
                  )}
                </div>

                {/* Submit */}
                <button
                  id="contact-submit"
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full justify-center"
                >
                  {loading ? (
                    <>
                      <svg
                        className="h-4 w-4 animate-spin"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                        />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="h-4 w-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
