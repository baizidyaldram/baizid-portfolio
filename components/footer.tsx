export default function Footer() {
  return (
    <footer className="mt-12 border-t border-border bg-background text-muted-foreground">
      <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <p className="text-sm">Baizid Yaldram</p>
        <p className="text-sm">
          <a href="https://www.linkedin.com/in/baizid-yaldram-0a7147248/" target="_blank" rel="noreferrer" className="hover:text-foreground">
            LinkedIn
          </a>
          <span className="mx-2">·</span>
          <a href="https://github.com/baizidyaldram" target="_blank" rel="noreferrer" className="hover:text-foreground">
            GitHub
          </a>
        </p>
      </div>
    </footer>
  );
}
