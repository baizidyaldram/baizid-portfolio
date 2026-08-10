import Link from 'next/link';
import TechBadge from './tech-badge';

export default function ProjectHero({ title, summary, technologies, demoUrl, githubUrl }: { title: string; summary: string; technologies: string[]; demoUrl?: string; githubUrl?: string }) {
  return (
    <div className="rounded-lg p-6 bg-card border border-border">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
        <div>
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">{title}</h1>
          <p className="mt-3 text-lg leading-7 text-foreground max-w-2xl">{summary}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {technologies.slice(0, 8).map((t) => (
              <TechBadge key={t}>{t}</TechBadge>
            ))}
          </div>
        </div>
        <div className="flex items-start gap-2">
          {demoUrl && (
            <a href={demoUrl} target="_blank" rel="noreferrer" className="btn">Live Demo</a>
          )}
          {githubUrl && (
            <a href={githubUrl} target="_blank" rel="noreferrer" className="btn btn-ghost">Source</a>
          )}
        </div>
      </div>
    </div>
  );
}
