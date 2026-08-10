import { Hero } from "@/components/hero";
import { ProjectCard } from "@/components/project-card";
import { Experience } from "@/components/experience";
import { Education } from "@/components/education";
import { Skills } from "@/components/skills";
import { Certifications } from "@/components/certifications";
import { Contact } from "@/components/contact";
import { projects } from "@/data/projects";

export default function Home() {
  const featured = projects.filter((p) => p.featured);

  return (
    <main className="w-full bg-background text-foreground min-h-screen">
      <Hero />
      <section id="projects" className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-heading font-semibold mb-6">Featured Projects</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {featured.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </section>
      <Experience />
      <Education />
      <Skills />
      <Certifications />
      <Contact />
    </main>
  );
}