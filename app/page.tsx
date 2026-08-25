import { Hero } from "@/components/hero";
import { ProjectCard } from "@/components/project-card";
import { Experience } from "@/components/experience";
import { Education } from "@/components/education";
import { Skills } from "@/components/skills";
import { Certifications } from "@/components/certifications";
import { Contact } from "@/components/contact";
import { ScrollReveal } from "@/components/scroll-reveal";
import { TechMarquee } from "@/components/tech-marquee";
import { projects } from "@/data/projects";

export default function Home() {
  const featured = projects.filter((p) => p.featured);

  return (
    <main className="w-full bg-background text-foreground min-h-screen">
      <Hero />
      <TechMarquee />

      <ScrollReveal>
        <section id="projects" className="max-w-5xl mx-auto px-4 py-16">
          <h2 className="text-2xl font-heading font-semibold mb-8">Featured Projects</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2 md:row-span-2">
              <ProjectCard project={featured[0]} large />
            </div>
            {featured.slice(1).map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </section>
      </ScrollReveal>

      <div className="bg-accent/5">
        <ScrollReveal>
          <Experience />
        </ScrollReveal>
      </div>

      <ScrollReveal>
        <Education />
      </ScrollReveal>

      <div className="bg-accent/5">
        <ScrollReveal>
          <Skills />
        </ScrollReveal>
      </div>

      <ScrollReveal>
        <Certifications />
      </ScrollReveal>

      <div className="bg-accent/5">
        <ScrollReveal>
          <Contact />
        </ScrollReveal>
      </div>
    </main>
  );
}