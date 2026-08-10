import { Metadata } from 'next';
import { projects } from '@/data/projects';
import { caseStudies } from '@/data/case-studies';
import { Button } from '@/components/ui/button';
import { notFound } from 'next/navigation';

type ProjectPageParams = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: ProjectPageParams }): Promise<Metadata> {
  const resolvedParams = await params;
  const project = projects.find((p) => p.slug === resolvedParams.slug);
  if (!project) return { title: 'Project' };
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

export default async function ProjectPage({ params }: { params: ProjectPageParams }) {
  const resolvedParams = await params;
  const project = projects.find((p) => p.slug === resolvedParams.slug);
  const cs = caseStudies[resolvedParams.slug];

  if (!project || !cs) return notFound();

  return (
    <main className="w-full bg-background text-foreground min-h-screen">
      <article className="max-w-2xl mx-auto px-6 py-16">
        <h1 className="text-3xl md:text-4xl font-bold font-heading">{project.title}</h1>
        <p className="text-lg text-muted-foreground mt-4 leading-relaxed">{project.summary}</p>

        <div className="flex gap-2 mt-6">
          <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
            <Button size="sm">Live Demo</Button>
          </a>
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
            <Button size="sm" variant="outline">Source</Button>
          </a>
        </div>

        <p className="text-sm text-muted-foreground mt-6">{project.technologies.join(' · ')}</p>

        <hr className="my-10 border-border" />

        <h2 className="text-2xl font-heading font-semibold mb-3">Problem</h2>
        <p className="text-base leading-relaxed text-muted-foreground">{cs.problem}</p>

        <h2 className="text-2xl font-heading font-semibold mt-10 mb-3">My Role</h2>
        <p className="text-base leading-relaxed text-muted-foreground">{cs.myRole}</p>

        <h2 className="text-2xl font-heading font-semibold mt-10 mb-3">Architecture</h2>
        <p className="text-base leading-relaxed text-muted-foreground mb-6">{cs.architecture}</p>

        {cs.weights && (
          <div className="space-y-3">
            {cs.weights.map((w) => (
              <div key={w.label}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-medium">{w.label}</span>
                  <span className="text-muted-foreground">{w.value}</span>
                </div>
                <div className="h-2 rounded-full bg-secondary overflow-hidden">
                  <div className="h-full bg-primary rounded-full" style={{ width: w.value }} />
                </div>
              </div>
            ))}
          </div>
        )}

        <h2 className="text-2xl font-heading font-semibold mt-10 mb-3">Technical Approach</h2>
        <ul className="space-y-2">
          {cs.technicalApproach.map((item) => (
            <li key={item} className="flex gap-3 text-base leading-relaxed text-muted-foreground">
              <span className="text-primary mt-1">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <h2 className="text-2xl font-heading font-semibold mt-10 mb-3">Why These Choices</h2>
        <p className="text-base leading-relaxed text-muted-foreground">{cs.whyTheseChoices}</p>

        <h2 className="text-2xl font-heading font-semibold mt-10 mb-3">Results</h2>
        {Array.isArray(cs.results) ? (
          <div className="flex flex-wrap gap-x-8 gap-y-2 text-base">
            {cs.results.map((r) => (
              <div key={r.label}>
                <span className="text-muted-foreground">{r.label}: </span>
                <span className="font-semibold">{r.value}</span>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-base leading-relaxed text-muted-foreground">{cs.results}</p>
        )}

        <h2 className="text-2xl font-heading font-semibold mt-10 mb-3">Lessons Learned</h2>
        <p className="text-base leading-relaxed text-muted-foreground">{cs.lessons}</p>

        <h2 className="text-2xl font-heading font-semibold mt-10 mb-3">Future Improvements</h2>
        <ul className="space-y-2">
          {cs.futureImprovements.map((item) => (
            <li key={item} className="flex gap-3 text-base leading-relaxed text-muted-foreground">
              <span className="text-primary mt-1">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </article>
    </main>
  );
}
