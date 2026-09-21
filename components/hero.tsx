"use client";

import { Button } from "@/components/ui/button";
import { GithubIcon, LinkedinIcon, MailIcon } from "@/components/icons";
import { Currently } from "@/components/currently";
import Image from "next/image";
import { motion, type Variants, useReducedMotion } from "framer-motion";

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

const badges = ["Python", "LLMs", "Machine Learning", "Multi-Agent AI", "Google Cloud"];

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.section
      variants={container}
      initial={shouldReduceMotion ? "show" : "hidden"}
      animate="show"
      className="relative flex flex-col items-center text-center gap-6 py-24 px-4 bg-background text-foreground overflow-hidden"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 900px 500px at 50% -10%, rgba(0,100,102,0.18) 0%, rgba(39,38,64,0.12) 40%, rgba(77,25,77,0.10) 65%, transparent 80%)",
        }}
      />
      <div
        className="pointer-events-none absolute left-1/2 -translate-x-1/2 -top-20 w-[460px] h-[460px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(0,100,102,0.4) 0%, rgba(39,38,64,0.25) 35%, rgba(77,25,77,0.15) 60%, transparent 75%)",
        }}
      />

      <motion.div variants={item} className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-border shadow-sm">
        <Image
          src="/profile.jpg"
          alt="Baizid Yaldram"
          width={128}
          height={128}
          className="w-full h-full object-cover object-top"
          priority
        />
      </motion.div>

      <motion.div variants={item} className="space-y-3">
        <p className="text-2xl md:text-4xl font-bold font-heading tracking-tight text-foreground relative inline-block after:absolute after:left-1/2 after:-bottom-1 after:h-1 after:w-12 after:-translate-x-1/2 after:rounded-full after:bg-accent">
          Baizid Yaldram
        </p>
        <h1 className="text-3xl md:text-5xl font-bold font-heading tracking-tight max-w-3xl mx-auto leading-tight">
          I build AI systems that turn data into useful products.
        </h1>
        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
          Data Science Graduate &middot; ML &amp; AI Engineer specializing in LLM applications,
          recommendation systems, multi-agent workflows, and data-driven products.
        </p>
      </motion.div>

      <motion.div variants={item} className="max-w-full">
        <Currently />
      </motion.div>

      <motion.div variants={item} className="flex flex-wrap justify-center gap-2.5 max-w-2xl">
        {badges.map((badge) => (
          <span
            key={badge}
            className="text-sm font-medium px-4 py-1.5 rounded-full border border-accent/40 bg-secondary text-foreground hover:border-accent hover:text-accent transition-colors"
          >
            {badge}
          </span>
        ))}
      </motion.div>

      <motion.div variants={item} className="flex flex-wrap justify-center gap-3 mt-2">
        <a href="#projects">
          <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
            View Projects
          </Button>
        </a>
        <a href="/Baizid_Yaldram_Resume.pdf" download>
          <Button variant="outline">Download Resume</Button>
        </a>
      </motion.div>

      <motion.div variants={item} className="flex gap-5 mt-1 text-muted-foreground">
        <a href="https://github.com/baizidyaldram" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-accent transition-colors">
          <GithubIcon className="w-5 h-5" />
        </a>
        <a href="https://www.linkedin.com/in/baizid-yaldram-0a7147248/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-accent transition-colors">
          <LinkedinIcon className="w-5 h-5" />
        </a>
        <a href="mailto:baizidk55@gmail.com" aria-label="Email" className="hover:text-accent transition-colors">
          <MailIcon className="w-5 h-5" />
        </a>
      </motion.div>
    </motion.section>
  );
}