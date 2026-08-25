import { CodeIcon, CloudIcon, LayersIcon, GlobeIcon, WrenchIcon } from "@/components/icons";

const skillGroups = [
  { label: "Programming", icon: CodeIcon, items: ["Python", "R", "SQL", "TypeScript", "JavaScript"] },
  { label: "Cloud & Data", icon: CloudIcon, items: ["GCP", "BigQuery", "Hadoop", "HBase", "AWS", "Supabase"] },
  { label: "ML & Data Tools", icon: LayersIcon, items: ["Streamlit", "Plotly", "Pandas", "NumPy", "Scikit-learn", "XGBoost", "SBERT", "Power BI", "OpenRouter"] },
  { label: "Web Development", icon: GlobeIcon, items: ["Next.js", "React", "Vite", "Tailwind CSS", "Zustand", "Framer Motion", "Vercel"] },
  { label: "Tools", icon: WrenchIcon, items: ["Git"] },
];

export function Skills() {
  return (
    <section id="skills" className="max-w-3xl mx-auto px-6 py-16 border-t border-border">
      <h2 className="text-2xl font-heading font-semibold text-foreground mb-8">Skills</h2>
      <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
        {skillGroups.map((group) => (
          <div key={group.label}>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center">
                <group.icon className="w-3.5 h-3.5 text-accent" />
              </div>
              <h3 className="text-base font-medium text-foreground">{group.label}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <span
                  key={skill}
                  className="text-sm px-3 py-1.5 rounded-full bg-accent/8 border border-accent/20 text-foreground hover:border-accent/50 transition-colors"
                >
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