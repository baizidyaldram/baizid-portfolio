const certifications = [
  { name: "Introduction to AI and Machine Learning on Google Cloud", issuer: "Google Cloud Skill Boost", date: "May 2025" },
  { name: "Google Cloud Data Analytics", issuer: "Google Cloud Skill Boost", date: "Feb 2025" },
  { name: "Data Science with Python Course", issuer: "Coders Ready", date: "Dec 2022" },
];

export function Certifications() {
  return (
    <section id="certifications" className="max-w-3xl mx-auto px-6 py-16 border-t border-border">
      <h2 className="text-2xl font-heading font-semibold text-foreground mb-8">Certifications</h2>
      <div className="space-y-4">
        {certifications.map((c) => (
          <div key={c.name} className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-1">
            <div>
              <p className="text-lg font-medium text-foreground">{c.name}</p>
              <p className="text-sm text-muted-foreground">{c.issuer}</p>
            </div>
            <span className="text-sm text-muted-foreground shrink-0">{c.date}</span>
          </div>
        ))}
      </div>
    </section>
  );
}