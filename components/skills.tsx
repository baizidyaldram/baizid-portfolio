import { CodeIcon, CloudIcon, LayersIcon, GlobeIcon } from "@/components/icons";

type SkillGroup = {
  label: string;
  icon: typeof CodeIcon;
  color: string;
  primary: string[];
  secondary: string[];
};

const skillGroups: SkillGroup[] = [
  {
    label: "AI & Machine Learning",
    icon: LayersIcon,
    color: "var(--chart-1)",
    primary: ["Python", "Scikit-learn", "XGBoost", "SBERT"],
    secondary: ["OpenRouter"],
  },
  {
    label: "Data",
    icon: CodeIcon,
    color: "var(--chart-3)",
    primary: ["Pandas", "NumPy", "SQL"],
    secondary: ["BigQuery", "Power BI", "R", "Plotly"],
  },
  {
    label: "Cloud & Deployment",
    icon: CloudIcon,
    color: "var(--chart-4)",
    primary: ["GCP", "Vercel", "Supabase"],
    secondary: ["AWS", "Hadoop", "HBase"],
  },
  {
    label: "Engineering",
    icon: GlobeIcon,
    color: "var(--chart-5)",
    primary: ["React", "Next.js", "TypeScript"],
    secondary: ["JavaScript", "Tailwind CSS", "Vite", "Zustand", "Framer Motion", "Git", "Streamlit"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="max-w-3xl mx-auto px-6 py-16 border-t border-border">
      <h2 className="text-2xl font-heading font-semibold text-foreground mb-8">Skills</h2>
      <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
        {skillGroups.map((group) => (
          <div
            key={group.label}
            className="rounded-2xl border border-border p-5"
            style={{ background: `color-mix(in srgb, ${group.color} 5%, transparent)` }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center shrink-0"
                style={{
                  backgroundColor: `color-mix(in srgb, ${group.color} 25%, transparent)`,
                  color: group.color,
                }}
              >
                <group.icon className="w-4 h-4" />
              </div>
              <h3 className="text-base font-medium text-foreground">{group.label}</h3>
            </div>
            <div className="flex flex-wrap gap-2 mb-3">
              {group.primary.map((skill) => (
                <span
                  key={skill}
                  className="text-sm font-medium px-3 py-1.5 rounded-full border"
                  style={{
                    borderColor: `color-mix(in srgb, ${group.color} 40%, transparent)`,
                    backgroundColor: `color-mix(in srgb, ${group.color} 12%, transparent)`,
                    color: "var(--foreground)",
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-1.5">
              {group.secondary.map((skill) => (
                <span
                  key={skill}
                  className="text-xs px-2.5 py-1 rounded-full border border-border text-muted-foreground"
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