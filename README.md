<div align="center">

# 🧑‍💻 Baizid Yaldram — Portfolio

**Personal portfolio showcasing LLM applications, hybrid ML pipelines, and multi-agent AI systems**

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

🚀 [**Live Site**](https://baizid-portfolio.vercel.app) &nbsp;·&nbsp; 💻 [**GitHub Repo**](https://github.com/baizidyaldram)

</div>

---

## About

The site showcases three flagship projects:

- **LLM-Powered Hybrid Movie Recommendation System** — SBERT semantic search, SVD, and XGBoost re-ranking fused via Reciprocal Rank Fusion, with LLM-generated explanations
- **CSV Insight Agents** — a 6-agent pipeline for automated data quality checks, cleaning, statistical analysis, visualization, modeling, and AI-generated reporting
- **GCA Voting Platform** — a full-stack landing and voting web app with an AI career-match feature, admin dashboard, and Supabase backend

Alongside the projects, the site covers experience, education, skills, and certifications, and links out to a resume and contact channels.

## Features

- **Hero** — animated intro with a "Currently" status strip (education, focus area, open-to-work status) and quick links to projects and resume
- **Tech marquee** — auto-scrolling strip of core tools and frameworks
- **Selected Work** — large project cards, each with:
  - A screenshot
  - An interactive, animated architecture-flow diagram specific to that project's pipeline
  - Real metrics pulled from the project's case study (accuracy, agent count, etc.)
  - Live Demo, GitHub, and Case Study links
- **Case study pages** (`/projects/[slug]`) — full write-up per project: problem, role, architecture, technical approach, results, lessons learned, and future improvements
- **Experience** — internship timeline with bullet-point highlights
- **Education** — degree timeline
- **Skills** — four categories (AI & ML, Data, Cloud & Deployment, Engineering), each split into primary and secondary tools so core skills stand out
- **Certifications** — visual badge cards linking to each credential
- **Contact** — direct links (email, LinkedIn, GitHub) plus a working contact form
- **Footer** — copyright and quick links
- Scroll-reveal animations throughout, with `prefers-reduced-motion` support

## Tech Stack

| Layer | Tools |
|---|---|
| Framework | Next.js (App Router), React, TypeScript |
| Styling | Tailwind CSS v4, custom design tokens (`globals.css`) |
| Components | shadcn/ui-style primitives (`base-ui`, `class-variance-authority`) |
| Animation | Framer Motion |
| Fonts | Space Grotesk (display), Inter (body) — via `next/font/google` |
| Forms | Formspree |
| Icons | Custom inline SVGs + `react-icons/si` (brand marks) |
| Deployment | Vercel |

## Project Structure

```
.
├── app/
│   ├── layout.tsx              # Root layout, fonts, metadata
│   ├── page.tsx                # Homepage — composes all sections
│   ├── globals.css             # Design tokens & theme
│   └── projects/[slug]/
│       └── page.tsx            # Case study detail page
├── components/
│   ├── hero.tsx
│   ├── currently.tsx           # "Currently" status strip in hero
│   ├── tech-marquee.tsx
│   ├── projects-section.tsx    # Selected Work section
│   ├── architecture-flow.tsx   # Animated per-project pipeline diagram
│   ├── experience.tsx
│   ├── education.tsx
│   ├── skills.tsx
│   ├── certifications.tsx
│   ├── contact.tsx
│   ├── footer.tsx
│   ├── scroll-reveal.tsx
│   ├── icons.tsx                # Shared icon set
│   └── ui/                      # Base UI primitives (button, card, badge)
├── data/
│   ├── projects.ts              # Project metadata (title, links, tech, category)
│   └── case-studies.ts          # Full case study content per project slug
└── public/
    ├── projects/                # Project screenshots
    └── Baizid_Yaldram_Resume.pdf
```

## Getting Started

```bash
# install dependencies
npm install

# run the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it locally.

### Environment / assets

- Project screenshots live in `public/projects/`, referenced via `imageSrc` in `components/projects-section.tsx`
- Resume PDF lives at `public/Baizid_Yaldram_Resume.pdf`, linked from the hero and footer
- The contact form posts to a Formspree endpoint configured in `components/contact.tsx`

### Adding a new project

1. Add an entry to `data/projects.ts` (title, slug, summary, technologies, links, category)
2. Add a matching case study to `data/case-studies.ts` under the same slug
3. Add a `projectVisuals` entry in `components/projects-section.tsx` — accent color, metrics, and architecture-flow steps
4. Drop a screenshot into `public/projects/` and set `imageSrc`

## Build & Deploy

```bash
npm run build
npm run start
```

Deployed on [Vercel](https://vercel.com/) with automatic deploys from the main branch.

## Contact

- **Email:** [baizidk55@gmail.com](mailto:baizidk55@gmail.com)
- **LinkedIn:** [linkedin.com/in/baizid-yaldram-0a7147248](https://www.linkedin.com/in/baizid-yaldram-0a7147248/)
- **GitHub:** [github.com/baizidyaldram](https://github.com/baizidyaldram)

© 2026 Baizid Yaldram
