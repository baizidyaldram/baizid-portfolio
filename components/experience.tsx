export function Experience() {
  return (
    <section id="experience" className="max-w-3xl mx-auto px-6 py-16 border-t border-border">
      <h2 className="text-2xl font-heading font-semibold text-foreground mb-8">Experience</h2>
      <div className="flex gap-4">
        <div className="flex flex-col items-center pt-2 shrink-0">
          <div className="w-3 h-3 rounded-full bg-accent" />
        </div>
        <div className="flex-1">
          <div className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-1">
            <h3 className="text-lg font-semibold text-foreground">Data Analyst Intern</h3>
            <span className="text-sm text-muted-foreground">Apr 2022 – Dec 2022</span>
          </div>
          <p className="text-base text-muted-foreground">Coders Ready India</p>
          <ul className="mt-4 space-y-2">
            {[
              "Conducted exploratory data analysis on a U.S. COVID-19 dataset with 50,000+ records and 15 features using Python, Pandas, NumPy, Matplotlib, and Seaborn.",
              "Created time-series and comparative visualizations to identify case surges, mortality patterns, and state-level hotspots.",
              "Generated actionable insights from infection and mortality trends across U.S. states, presented through dashboards and reports.",
            ].map((item) => (
              <li key={item} className="flex gap-3 text-base leading-relaxed text-muted-foreground">
                <span className="text-accent mt-1">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}