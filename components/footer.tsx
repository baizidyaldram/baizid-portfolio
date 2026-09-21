import { GithubIcon, LinkedinIcon, MailIcon } from "@/components/icons";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-3xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>© {year} Baizid Yaldram</p>

        <div className="flex items-center gap-5">
          <a
            href="https://github.com/baizidyaldram"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-accent transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/baizid-yaldram-0a7147248/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-accent transition-colors"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href="mailto:baizidk55@gmail.com"
            aria-label="Email"
            className="hover:text-accent transition-colors"
          >
            <MailIcon className="w-4 h-4" />
          </a>
          <a
            href="/Baizid_Yaldram_Resume.pdf"
            download
            className="hover:text-accent transition-colors"
          >
            Resume
          </a>
        </div>
      </div>
    </footer>
  );
}
