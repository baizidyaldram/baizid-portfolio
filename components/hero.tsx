"use client";

import { Button } from "@/components/ui/button";
import { GithubIcon, LinkedinIcon, MailIcon } from "@/components/icons";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";

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

export function Hero() {
  return (
    <motion.section
      variants={container}
      initial="hidden"
      animate="show"
      className="relative flex flex-col items-center text-center gap-6 py-24 px-4 bg-background text-foreground overflow-hidden"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 800px 400px at 50% 0%, rgba(239,131,84,0.06) 0%, transparent 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute left-1/2 -translate-x-1/2 -top-20 w-[420px] h-[420px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(239,131,84,0.25) 0%, rgba(239,131,84,0.08) 45%, transparent 70%)",
        }}
      />

      <motion.div variants={item} className="relative w-36 h-36 rounded-full overflow-hidden border-2 border-border shadow-sm">
        <Image
          src="/profile.jpg"
          alt="Baizid Yaldram"
          width={144}
          height={144}
          className="w-full h-full object-cover object-top"
          priority
        />
      </motion.div>

      <motion.h1 variants={item} className="text-4xl md:text-5xl font-bold font-heading">
        Baizid Yaldram
      </motion.h1>

      <motion.p variants={item} className="text-lg text-primary font-medium">
        Data Science Graduate | ML & AI Engineer | LLM & Multi-Agent Systems
      </motion.p>

      <motion.p variants={item} className="max-w-2xl text-muted-foreground text-lg leading-relaxed">
        I'm a recent Master of Data Science graduate from the University of Malaya (4.0 GPA),
        building LLM-powered applications, multi-agent AI systems, and hybrid ML pipelines that
        go beyond notebooks into real, deployed products. My work spans recommendation engines,
        automated data-analysis agents, and full-stack AI features — and I'm currently looking
        for Data Analyst, Data Scientist, or AI Engineer roles in Malaysia.
      </motion.p>

      <motion.div variants={item}>
        <a href="/resume.pdf" download>
          <Button variant="outline">Download Resume</Button>
        </a>
      </motion.div>

      <motion.div variants={item} className="flex gap-5 mt-2 text-muted-foreground">
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