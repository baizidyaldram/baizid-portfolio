import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { projects } from "@/data/projects";
import { caseStudies } from "@/data/case-studies";
import { projectVisuals } from "@/data/project-visuals";
import { ArchitectureFlow } from "@/components/architecture-flow";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { notFound } from "next/navigation";

type ProjectPageParams = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: ProjectPageParams }): Promise<Metadata> {
  const resolvedParams = await params;
  const project = projects.find((p) => p.slug === resolvedParams.slug);
  if (!project) return { title: "Project" };
  return {
    title: `${project.title} — Baizid Yaldram`,
    description: project.summary,
    openGraph: {
      title: project.title,
      description: project.summary,
      url: `https://your-portfolio-url.example/projects/${project.slug}`,
    },
  };
}

function SectionHeading({ children, accent }: { children: ReactNode; accent: string }) {
  return (
    <h2 className="mt-14 mb-4 flex items-center gap-2.5 text-2xl font-heading font-semibold">
      <span className="h-6 w-1.5 rounded-full" style={{ backgroundColor: accent }} />
      {children}
    </h2>
  );
}

export default async function ProjectPage({ params }: { params: ProjectPageParams }) {
  const resolvedParams = await params;
  const project = projects.find((p) => p.slug === resolvedParams.slug);
  const cs = caseStudies[resolvedParams.slug];
  const visual = projectVisuals[resolvedParams.slug];

  if (!project || !cs) return notFound();

  const accent = visual?.accent ?? "var(--accent)";

  return (
    <main className="min-h-screen w-full bg-background text-foreground">
      <div className="relative overflow-hidden border-b border-border">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: `radial-gradient(ellipse 700px 400px at 50% -10%, ${accent}26 0%, transparent 70%)`,
          }}
        />
        <div className="relative mx-auto max-w-2xl px-6 pb-10 pt-12">
          <Link
            href="/#projects"
            className="mb-6 inline-flex items-center gap-2 text-base font-semibold text-foreground transition-colors hover:text-accent"
          >
            ← Back to projects
          </Link>

          <h1 className="text-3xl font-bold leading-tight font-heading md:text-4xl">{project.title}</h1>

          <span
            className="mt-3 inline-block rounded-full px-2.5 py-1 text-xs font-medium"
            style={{ color: accent, backgroundColor: `${accent}1f`, border: `1px solid ${accent}55` }}
          >
            {project.category}
          </span>

          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{project.summary}</p>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <Badge key={technology} variant="secondary" className="text-xs">
                {technology}
              </Badge>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
              <Button size="sm" style={{ backgroundColor: accent, color: "var(--accent-foreground)" }}>
                Live Demo
              </Button>
            </a>
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <Button size="sm" variant="outline">Source</Button>
            </a>
          </div>
        </div>
      </div>

      <article className="mx-auto max-w-2xl px-6 pb-20">
        {visual && (
          <div className="mt-10 rounded-2xl border border-border p-5 md:p-6">
            <ArchitectureFlow columns={visual.flow} accent={accent} />
          </div>
        )}

        <SectionHeading accent={accent}>Problem</SectionHeading>
        <p className="text-base leading-relaxed text-muted-foreground">{cs.problem}</p>

        <SectionHeading accent={accent}>My Role</SectionHeading>
        <p className="text-base leading-relaxed text-muted-foreground">{cs.myRole}</p>

        <SectionHeading accent={accent}>Architecture</SectionHeading>
        <p className="mb-6 text-base leading-relaxed text-muted-foreground">{cs.architecture}</p>

        {cs.weights && (
          <div className="space-y-4 rounded-2xl border border-border p-5">
            {cs.weights.map((weight) => (
              <div key={weight.label}>
                <div className="mb-1.5 flex justify-between text-sm">
                  <span className="font-medium">{weight.label}</span>
                  <span className="text-muted-foreground">{weight.value}</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-secondary">
                  <div className="h-full rounded-full" style={{ width: weight.value, backgroundColor: accent }} />
                </div>
              </div>
            ))}
          </div>
        )}

        <SectionHeading accent={accent}>Technical Approach</SectionHeading>
        <ul className="space-y-2.5">
          {cs.technicalApproach.map((item) => (
            <li key={item} className="flex gap-3 text-base leading-relaxed text-muted-foreground">
              <span className="mt-1 shrink-0" style={{ color: accent }}>•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <SectionHeading accent={accent}>Why These Choices</SectionHeading>
        <p className="text-base leading-relaxed text-muted-foreground">{cs.whyTheseChoices}</p>

        <SectionHeading accent={accent}>Results</SectionHeading>
        {Array.isArray(cs.results) ? (
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {cs.results.map((result) => (
              <div
                key={result.label}
                className="rounded-xl border border-border p-4 text-center"
                style={{ backgroundColor: `${accent}0d` }}
              >
                <div className="text-xl font-semibold font-heading" style={{ color: accent }}>
                  {result.value}
                </div>
                <div className="mt-1 text-xs text-muted-foreground">{result.label}</div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-base leading-relaxed text-muted-foreground">{cs.results}</p>
        )}

        <SectionHeading accent={accent}>Lessons Learned</SectionHeading>
        <p className="border-l-2 pl-4 text-base italic leading-relaxed text-muted-foreground" style={{ borderColor: accent }}>
          {cs.lessons}
        </p>

        <SectionHeading accent={accent}>Future Improvements</SectionHeading>
        <ul className="space-y-2.5">
          {cs.futureImprovements.map((item) => (
            <li key={item} className="flex gap-3 text-base leading-relaxed text-muted-foreground">
              <span className="mt-1 shrink-0" style={{ color: accent }}>•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="mt-16 border-t border-border pt-6">
          <Link href="/#projects" className="text-sm text-muted-foreground transition-colors hover:text-accent">
            ← All projects
          </Link>
        </div>
      </article>
    </main>
  );
}
