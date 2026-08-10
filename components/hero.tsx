import { Button } from "@/components/ui/button";
import { GithubIcon, LinkedinIcon, MailIcon } from "@/components/icons";
import Image from "next/image";

export function Hero() {
  return (
    <section className="flex flex-col items-center text-center gap-6 py-24 px-4 bg-background text-foreground">
      <div className="w-36 h-36 rounded-full overflow-hidden border-2 border-border shadow-sm">
        <Image
          src="/profile.jpg"
          alt="Baizid Yaldram"
          width={144}
          height={144}
          className="w-full h-full object-cover object-top"
          priority
        />
      </div>

      <h1 className="text-4xl md:text-5xl font-bold font-heading">Baizid Yaldram</h1>
      <p className="text-lg text-primary font-medium">
        Data Science Graduate | ML & AI Engineer | LLM & Multi-Agent Systems
      </p>
      <p className="max-w-2xl text-muted-foreground text-lg leading-relaxed">
        I'm a recent Master of Data Science graduate from the University of Malaya (4.0 GPA),
        building LLM-powered applications, multi-agent AI systems, and hybrid ML pipelines that
        go beyond notebooks into real, deployed products. My work spans recommendation engines,
        automated data-analysis agents, and full-stack AI features — and I'm currently looking
        for Data Analyst, Data Scientist, or AI Engineer roles in Malaysia.
      </p>

      <a href="/resume.pdf" download>
        <Button variant="outline">Download Resume</Button>
      </a>

      <div className="flex gap-5 mt-2 text-muted-foreground">
        <a
          href="https://github.com/baizidyaldram"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="hover:text-accent transition-colors"
        >
          <GithubIcon className="w-5 h-5" />
        </a>
        <a
          href="https://www.linkedin.com/in/baizid-yaldram-0a7147248/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-accent transition-colors"
        >
          <LinkedinIcon className="w-5 h-5" />
        </a>
        <a
          href="mailto:baizidk55@gmail.com"
          aria-label="Email"
          className="hover:text-accent transition-colors"
        >
          <MailIcon className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
}