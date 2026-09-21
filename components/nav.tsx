"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";

const links = [
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#skills", label: "Skills" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = links
      .map((link) => document.getElementById(link.href.slice(1)))
      .filter((element): element is HTMLElement => Boolean(element));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors ${
        scrolled ? "border-b border-border bg-background/80 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4">
        <a href="#" className="text-sm font-semibold tracking-tight text-foreground font-heading">
          Baizid Yaldram
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative rounded-full px-3 py-1.5 text-sm font-medium transition-colors"
              style={{ color: active === link.href ? "var(--accent)" : "var(--muted-foreground)" }}
              onMouseEnter={(event) => (event.currentTarget.style.color = "var(--foreground)")}
              onMouseLeave={(event) =>
                (event.currentTarget.style.color =
                  active === link.href ? "var(--accent)" : "var(--muted-foreground)")
              }
            >
              {link.label}
            </a>
          ))}
          <a href="/Baizid_Yaldram_Resume.pdf" download className="ml-2">
            <Button size="sm" variant="outline">
              Resume
            </Button>
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((current) => !current)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="relative flex h-8 w-8 items-center justify-center text-foreground md:hidden"
        >
          <span className="relative flex h-4 w-5 flex-col justify-between">
            <motion.span
              className="block h-0.5 w-full rounded-full bg-current"
              animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="block h-0.5 w-full rounded-full bg-current"
              animate={open ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.15 }}
            />
            <motion.span
              className="block h-0.5 w-full rounded-full bg-current"
              animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
            />
          </span>
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
            animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, height: "auto" }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden border-b border-border bg-background md:hidden"
          >
            <div className="flex flex-col px-4 py-3">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-border/60 py-3 text-base font-medium last:border-b-0"
                  style={{ color: active === link.href ? "var(--accent)" : "var(--foreground)" }}
                >
                  {link.label}
                </a>
              ))}
              <a href="/Baizid_Yaldram_Resume.pdf" download className="mt-4">
                <Button size="sm" variant="outline" className="w-full">
                  Download Resume
                </Button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
