import { CodeIcon, ExternalLinkIcon } from "@/components/icons";
import { SiGooglecloud } from "react-icons/si";

type Certification = {
  name: string;
  issuer: string;
  date: string;
  url: string;
  icon: typeof SiGooglecloud;
  color: string;
};

const certifications: Certification[] = [
  {
    name: "Introduction to AI and Machine Learning on Google Cloud",
    issuer: "Google Cloud Skill Boost",
    date: "May 2025",
    url: "https://www.skills.google/public_profiles/b2a54744-408e-43ec-a637-dbf86491c44d/badges/16038712",
    icon: SiGooglecloud,
    color: "var(--chart-1)",
  },
  {
    name: "Google Cloud Data Analytics",
    issuer: "Google Cloud Skill Boost",
    date: "Feb 2025",
    url: "https://www.credly.com/badges/bac9f750-490e-4055-af5d-655635d2b423/public_url",
    icon: SiGooglecloud,
    color: "var(--chart-1)",
  },
  {
    name: "Data Science with Python Course",
    issuer: "Coders Ready",
    date: "Dec 2022",
    url: "https://www.linkedin.com/in/baizid-yaldram-0a7147248/",
    icon: CodeIcon,
    color: "var(--chart-3)",
  },
];

export function Certifications() {
  return (
    <section id="certifications" className="max-w-3xl mx-auto px-6 py-16 border-t border-border">
      <h2 className="text-2xl font-heading font-semibold text-foreground mb-8">Certifications</h2>
      <div className="grid sm:grid-cols-2 gap-4">
        {certifications.map((c) => (
          <a
            key={c.name}
            href={c.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View credential: ${c.name}`}
            className="group relative flex flex-col gap-3 rounded-2xl border border-border p-5 transition-colors hover:border-accent/60"
            style={{ background: `color-mix(in srgb, ${c.color} 5%, transparent)` }}
          >
            <div className="flex items-start justify-between">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                style={{
                  backgroundColor: `color-mix(in srgb, ${c.color} 20%, transparent)`,
                  color: c.color,
                }}
              >
                <c.icon className="w-5 h-5" />
              </div>
              <ExternalLinkIcon className="w-4 h-4 text-muted-foreground transition-colors group-hover:text-accent" />
            </div>
            <div>
              <p className="text-base font-medium text-foreground leading-snug">{c.name}</p>
              <p className="text-sm text-muted-foreground mt-1">{c.issuer}</p>
            </div>
            <span className="text-xs text-muted-foreground mt-auto">{c.date}</span>
          </a>
        ))}
      </div>
    </section>
  );
}