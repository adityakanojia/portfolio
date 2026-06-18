"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { NAV_LINKS } from "@/lib/data";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Close menu on outside click / resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[var(--bg)]/90 backdrop-blur-md border-b border-[var(--border)] shadow-[var(--shadow-sm)]"
            : "bg-transparent"
        }`}
      >
        <nav
          className="container-custom flex items-center justify-between h-16 lg:h-[70px]"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="flex items-center gap-2.5 group"
            aria-label="Aditya Kanojia - Home"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--accent)] text-[var(--accent-fg)] font-bold text-sm tracking-tight transition-all duration-200 group-hover:scale-105">
              AK
            </div>
            <span className="font-semibold text-[var(--text)] text-sm tracking-tight hidden sm:block">
              Aditya Kanojia
            </span>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={(e) => handleNavClick(e, href)}
                  className="px-3 py-2 text-sm font-medium text-[var(--muted)] rounded-lg transition-all duration-200 hover:text-[var(--text)] hover:bg-[var(--surface)] cursor-pointer"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right side */}
          <div className="flex items-center gap-2.5">
            <ThemeToggle />
            <a
              id="nav-cta"
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="hidden sm:inline-flex btn-primary py-2 px-4 text-sm"
            >
              Get Free Audit
            </a>

            {/* Mobile hamburger */}
            <button
              id="mobile-menu-toggle"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex lg:hidden h-9 w-9 items-center justify-center rounded-lg border border-[var(--border)] text-[var(--muted)] transition-colors hover:text-[var(--text)]"
            >
              {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!mobileOpen}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />

        {/* Drawer */}
        <div
          className={`absolute top-0 right-0 h-full w-72 bg-[var(--bg)] border-l border-[var(--border)] shadow-[var(--shadow-xl)] transition-transform duration-300 ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center justify-between p-5 border-b border-[var(--border)]">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--accent)] text-[var(--accent-fg)] font-bold text-xs">
                  AK
                </div>
                <span className="font-semibold text-sm">Aditya Kanojia</span>
              </div>
              <button
                aria-label="Close menu"
                onClick={() => setMobileOpen(false)}
                className="h-8 w-8 flex items-center justify-center rounded-lg text-[var(--muted)] hover:text-[var(--text)]"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Links */}
            <nav className="flex-1 p-5">
              <ul className="space-y-1">
                {NAV_LINKS.map(({ label, href }) => (
                  <li key={href}>
                    <a
                      href={href}
                      onClick={(e) => handleNavClick(e, href)}
                      className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-[var(--muted)] rounded-lg transition-all hover:text-[var(--text)] hover:bg-[var(--surface)] cursor-pointer"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* CTA */}
            <div className="p-5 border-t border-[var(--border)]">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="btn-primary w-full justify-center"
              >
                Get Free Website Audit
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
