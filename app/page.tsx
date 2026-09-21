import { Hero } from "@/components/hero";
import { ProjectsSection } from "@/components/projects-section";
import { Experience } from "@/components/experience";
import { Education } from "@/components/education";
import { Skills } from "@/components/skills";
import { Certifications } from "@/components/certifications";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { ScrollReveal } from "@/components/scroll-reveal";
import { TechMarquee } from "@/components/tech-marquee";
import { projects } from "@/data/projects";

export default function Home() {
  const featured = projects.filter((p) => p.featured);

  return (
    <main className="w-full bg-background text-foreground min-h-screen">
      <Hero />
      <TechMarquee />

      <ProjectsSection projects={featured} />

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

      <Footer />
    </main>
  );
}