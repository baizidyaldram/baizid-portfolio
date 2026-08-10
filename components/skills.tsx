const skillGroups = [
  { label: "Programming", items: ["Python", "R", "SQL", "TypeScript", "JavaScript"] },
  { label: "Cloud & Data", items: ["GCP", "BigQuery", "Hadoop", "HBase", "AWS", "Supabase"] },
  { label: "ML & Data Tools", items: ["Streamlit", "Plotly", "Pandas", "NumPy", "Scikit-learn", "XGBoost", "SBERT", "Power BI", "OpenRouter"] },
  { label: "Web Development", items: ["Next.js", "React", "Vite", "Tailwind CSS", "Zustand", "Framer Motion", "Vercel"] },
  { label: "Tools", items: ["Git", "GitHub Actions", "Docker"] },
];

export function Skills() {
  return (
    <section id="skills" className="max-w-3xl mx-auto px-6 py-16 border-t border-border">
      <h2 className="text-2xl font-heading font-semibold text-foreground mb-8">Skills</h2>
      <div className="space-y-6">
        {skillGroups.map((group) => (
          <div key={group.label}>
            <h3 className="text-sm font-medium text-muted-foreground mb-2">{group.label}</h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <span key={skill} className="text-sm px-3 py-1 rounded-full bg-secondary text-secondary-foreground">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}