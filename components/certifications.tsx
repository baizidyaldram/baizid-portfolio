import { ExternalLinkIcon } from "@/components/icons";

const certifications = [
  {
    name: "Introduction to AI and Machine Learning on Google Cloud",
    issuer: "Google Cloud Skill Boost",
    date: "May 2025",
    url: "https://www.skills.google/public_profiles/b2a54744-408e-43ec-a637-dbf86491c44d/badges/16038712",
  },
  {
    name: "Google Cloud Data Analytics",
    issuer: "Google Cloud Skill Boost",
    date: "Feb 2025",
    url: "https://www.credly.com/badges/bac9f750-490e-4055-af5d-655635d2b423/public_url",
  },
  {
    name: "Data Science with Python Course",
    issuer: "Coders Ready",
    date: "Dec 2022",
    url: "https://www.linkedin.com/in/baizid-yaldram-0a7147248/",
  },
];

export function Certifications() {
  return (
    <section id="certifications" className="max-w-3xl mx-auto px-6 py-16 border-t border-border">
      <h2 className="text-2xl font-heading font-semibold text-foreground mb-8">Certifications</h2>
      <div className="bg-accent/5 rounded-2xl p-6 space-y-4">
        {certifications.map((c) => (
          <div key={c.name} className="flex items-start justify-between gap-3">
            <div>
              <p className="text-lg font-medium text-foreground">{c.name}</p>
              <p className="text-sm text-muted-foreground">{c.issuer}</p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <span className="text-sm text-muted-foreground">{c.date}</span>
              {c.url && (
                <a
                  href={c.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View credential: ${c.name}`}
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  <ExternalLinkIcon className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}