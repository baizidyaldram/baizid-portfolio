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
      <div className="space-y-8">
        {education.map((e, i) => (
          <div key={e.degree} className="flex gap-4">
            <div className="flex flex-col items-center pt-2 shrink-0">
              <div className="w-3 h-3 rounded-full bg-accent" />
              {i < education.length - 1 && <div className="w-px flex-1 bg-border mt-1" />}
            </div>
            <div className="flex-1 pb-2">
              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-1">
                <h3 className="text-lg font-semibold text-foreground">{e.degree}</h3>
                <span className="text-sm text-muted-foreground">{e.date}</span>
              </div>
              <p className="text-base text-muted-foreground">{e.school}</p>
              <p className="text-base leading-relaxed text-muted-foreground mt-1">{e.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}