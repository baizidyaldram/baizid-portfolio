"use client";

import { BriefcaseIcon, GraduationCapIcon, LayersIcon } from "@/components/icons";

const items = [
  { icon: GraduationCapIcon, text: "Master of Data Science - Universiti Malaya" },
  { icon: LayersIcon, text: "Building LLM & multi-agent applications" },
  { icon: BriefcaseIcon, text: "Open to Data Analyst, Data Scientist & AI Engineer roles" },
];

export function Currently() {
  return (
    <div className="inline-flex max-w-full flex-wrap items-center justify-center gap-x-3 gap-y-2 rounded-2xl border border-border bg-secondary/60 px-4 py-3 text-sm text-muted-foreground">
      <span className="flex shrink-0 items-center gap-1.5 font-medium text-foreground">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
        </span>
        Currently
      </span>
      {items.map((item, index) => (
        <span key={item.text} className="flex items-center gap-3">
          {index > 0 && <span className="text-border">·</span>}
          <span className="flex items-center gap-1.5">
            <item.icon className="h-3.5 w-3.5 shrink-0 text-muted-foreground" />
            {item.text}
          </span>
        </span>
      ))}
    </div>
  );
}