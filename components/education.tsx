const education = [
  {
    degree: "Master of Data Science",
    school: "University of Malaya, Kuala Lumpur, Malaysia",
    date: "Oct 2024 – Mar 2026",
    detail: "GPA: 4.0",
  },
  {
    degree: "Postgraduate Admission Preparation",
    school: "Self-Study — India",
    date: "Jan 2023 – Aug 2024",
    detail: "Prepared for postgraduate admission in Data Science, self-studying ML and statistics ahead of entrance exams; subsequently selected for the Master's program at University of Malaya.",
  },
  {
    degree: "Bachelor of Science in Aeronautics",
    school: "Jamia Millia Islamia, India",
    date: "Aug 2019 – Dec 2022",
    detail: "GPA: 3.9",
  },
];

export function Education() {
  return (
    <section id="education" className="max-w-3xl mx-auto px-6 py-16 border-t border-border">
      <h2 className="text-2xl font-heading font-semibold text-foreground mb-8">Education</h2>
      <div className="relative pl-6 border-l-2 border-border space-y-10">
        {education.map((e) => (
          <div key={e.degree} className="relative">
            <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-accent" />
            <div className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-1">
              <h3 className="text-lg font-semibold text-foreground">{e.degree}</h3>
              <span className="text-sm text-muted-foreground">{e.date}</span>
            </div>
            <p className="text-muted-foreground">{e.school}</p>
            <p className="text-base leading-relaxed text-muted-foreground mt-1">{e.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}