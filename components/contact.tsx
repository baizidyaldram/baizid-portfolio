export function Contact() {
  return (
    <section className="border-t border-border bg-background">
      <div className="max-w-5xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-heading font-semibold text-foreground">Get in touch</h2>
          <p className="text-muted-foreground mt-3">
            Open to Data Analyst, Data Scientist, and AI Engineer roles.
          </p>
          <div className="mt-6 space-y-2 text-base">
            <p>
              <span className="text-muted-foreground">Email: </span>
              <a href="mailto:baizidk55@gmail.com" className="text-accent hover:underline">
                baizidk55@gmail.com
              </a>
            </p>
            <p>
              <span className="text-muted-foreground">Connect: </span>
              <a href="https://www.linkedin.com/in/baizid-yaldram-0a7147248/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                LinkedIn
              </a>
              <span className="text-muted-foreground"> · </span>
              <a href="https://github.com/baizidyaldram" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                GitHub
              </a>
            </p>
          </div>
        </div>

        <form
          action="https://formspree.io/f/mnpapnpw"
          method="POST"
          className="flex flex-col gap-4"
        >
          <div>
            <label htmlFor="name" className="text-sm font-medium text-foreground">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="mt-1 w-full rounded-lg border border-border bg-card px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="text-sm font-medium text-foreground">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="mt-1 w-full rounded-lg border border-border bg-card px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="text-sm font-medium text-foreground">Message</label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              className="mt-1 w-full rounded-lg border border-border bg-card px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
              placeholder="Short message"
            />
          </div>
          <button
            type="submit"
            className="self-start rounded-lg bg-primary text-primary-foreground px-6 py-2.5 font-medium hover:opacity-90 transition-opacity"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
}
