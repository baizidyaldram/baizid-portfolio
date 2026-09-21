"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArchitectureFlow, type FlowColumn } from "@/components/architecture-flow";
import type { Project } from "@/data/projects";

type Metric = { value: string; label: string };

type ProjectVisual = {
  accent: string;
  imageSrc?: string;
  metrics: Metric[];
  flow: FlowColumn[];
};

const projectVisuals: Record<string, ProjectVisual> = {
  "movie-recommender": {
    accent: "#17C3C3",
    imageSrc: "/movie%20ss.png",
    metrics: [
      { value: "85%+", label: "Accuracy" },
      { value: "0.82", label: "F1 Score" },
      { value: "0.90", label: "AUC-ROC" },
    ],
    flow: [
      [{ label: "Query", description: "User searches by title or free text" }],
      [
        { label: "SBERT", description: "Semantic similarity from Sentence-BERT embeddings" },
        { label: "SVD", description: "Latent similarity from matrix factorization" },
      ],
      [{ label: "RRF Fusion", description: "Reciprocal Rank Fusion merges both signals" }],
      [{ label: "XGBoost Re-rank", description: "Learned re-ranking corrects the fused order" }],
      [{ label: "LLM Explanation", description: "GPT-OSS-120B explains each pick in plain language" }],
    ],
  },
  "csv-insight-agents": {
    accent: "#F2965A",
    imageSrc: "/csv%20ss.png",
    metrics: [
      { value: "6", label: "AI Agents" },
      { value: "4", label: "Export Formats" },
      { value: "1-Click", label: "Sample Dataset" },
    ],
    flow: [
      [{ label: "Data Quality", description: "Completeness scoring, duplicates, outlier checks" }],
      [{ label: "Data Cleaning", description: "Missing-value handling, capping, standardization" }],
      [{ label: "Statistical Analysis", description: "Descriptive stats, correlations, skewness" }],
      [{ label: "Visualization", description: "Automatic chart-type selection with Plotly" }],
      [{ label: "Modeling", description: "GridSearchCV tuning, cross-validation, feature importance" }],
      [{ label: "AI Report", description: "Narrative summary exported to 4 formats" }],
    ],
  },
  "gca-voting-platform": {
    accent: "#A78BFA",
    imageSrc: "/GCA%20ss.png",
    metrics: [
      { value: "4-Step", label: "Vote Flow" },
      { value: "<60s", label: "Target Time" },
      { value: "RLS", label: "Secured Database" },
    ],
    flow: [
      [{ label: "React + Vite", description: "Four-step vote flow with Framer Motion" }],
      [{ label: "Vercel API", description: "Serverless functions are the only layer touching the database" }],
      [
        { label: "Supabase", description: "Postgres with Row Level Security" },
        { label: "OpenRouter", description: "AI-suggested employer sectors for career match" },
      ],
    ],
  },
};

export function ProjectsSection({ projects }: { projects: Project[] }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="projects" className="max-w-5xl mx-auto px-4 py-16">
      <h2 className="text-2xl font-heading font-semibold mb-8">Selected Work</h2>
      <div className="flex flex-col gap-8">
        {projects.map((project, index) => {
          const visual = projectVisuals[project.slug];
          if (!visual) return null;
          const reversed = index % 2 === 1;

          return (
            <motion.article
              key={project.slug}
              initial={shouldReduceMotion ? undefined : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border border-border bg-card overflow-hidden"
            >
              <div className="grid md:grid-cols-2">
                <div
                  className={`relative min-h-[220px] md:min-h-[320px] overflow-hidden ${
                    reversed ? "md:order-2" : ""
                  }`}
                  style={{
                    background: `radial-gradient(circle at 30% 20%, ${visual.accent}33 0%, transparent 60%), var(--secondary)`,
                  }}
                >
                  {visual.imageSrc ? (
                    <Image
                      src={visual.imageSrc}
                      alt={`${project.title} screenshot`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                  ) : (
                    <div
                      className="absolute inset-4 rounded-xl border border-dashed flex items-end p-4"
                      style={{ borderColor: `${visual.accent}55` }}
                    >
                      <span className="text-xs text-muted-foreground">Screenshot coming soon</span>
                    </div>
                  )}
                  <span
                    className="absolute top-4 left-4 text-xs font-medium px-2.5 py-1 rounded-full"
                    style={{
                      color: visual.accent,
                      backgroundColor: `${visual.accent}1f`,
                      border: `1px solid ${visual.accent}55`,
                    }}
                  >
                    {project.category}
                  </span>
                </div>

                <div className="p-6 md:p-8 flex flex-col justify-center gap-4">
                  <h3 className="text-2xl font-heading font-semibold text-foreground">
                    {project.title}
                  </h3>
                  <p className="text-base leading-relaxed text-muted-foreground">{project.summary}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <Badge key={technology} variant="secondary" className="text-xs">
                        {technology}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              <div className="border-t border-border px-6 md:px-8 py-6">
                <ArchitectureFlow columns={visual.flow} accent={visual.accent} />
              </div>

              <div className="flex flex-wrap items-center justify-between gap-6 border-t border-border px-6 md:px-8 py-5 bg-background/40">
                <div className="flex gap-6">
                  {visual.metrics.map((metric) => (
                    <div key={metric.label} className="flex flex-col">
                      <span className="text-lg font-heading font-semibold" style={{ color: visual.accent }}>
                        {metric.value}
                      </span>
                      <span className="text-xs text-muted-foreground">{metric.label}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                    <Button size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90">
                      Live Demo
                    </Button>
                  </a>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Button size="sm" variant="outline">
                      GitHub
                    </Button>
                  </a>
                  <Link href={`/projects/${project.slug}`}>
                    <Button size="sm" variant="ghost">
                      Case Study
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
