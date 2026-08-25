"use client";

import {
  SiPython,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiPandas,
  SiScikitlearn,
  SiBoost,
  SiGit,
  SiGooglecloud,
  SiSupabase,
  SiVercel,
  SiStreamlit,
} from "react-icons/si";

const techs = [
  { name: "Python", icon: SiPython },
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Pandas", icon: SiPandas },
  { name: "Scikit-learn", icon: SiScikitlearn },
  { name: "XGBoost", icon: SiBoost },
  { name: "Git", icon: SiGit },
  { name: "Google Cloud", icon: SiGooglecloud },
  { name: "Supabase", icon: SiSupabase },
  { name: "Vercel", icon: SiVercel },
  { name: "Streamlit", icon: SiStreamlit },
];

export function TechMarquee() {
  const doubled = [...techs, ...techs];

  return (
    <div className="relative w-full overflow-hidden border-y border-border bg-secondary/30 py-6">
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-background to-transparent" />

      <div className="flex w-max animate-marquee gap-12">
        {doubled.map((tech, i) => (
          <div
            key={`${tech.name}-${i}`}
            className="flex shrink-0 items-center gap-2 text-muted-foreground"
          >
            <tech.icon className="h-6 w-6" />
            <span className="text-sm font-medium">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
