export type Project = {
  title: string;
  slug: string;
  summary: string;
  technologies: string[];
  demoUrl: string;
  githubUrl: string;
  featured: boolean;
  category: "AI/ML" | "GenAI" | "Full-Stack";
};

export const projects: Project[] = [
  {
    title: "LLM-Powered Hybrid Movie Recommendation System",
    slug: "movie-recommender",
    summary: "SBERT semantic search, XGBoost re-ranking, and SVD fused via Reciprocal Rank Fusion, with LLM-generated explanations.",
    technologies: ["Python", "SBERT", "XGBoost", "SVD", "Streamlit", "OpenRouter"],
    demoUrl: "https://movieapplication-wp4qjnosv4gmix7oypfcya.streamlit.app/",
    githubUrl: "https://github.com/baizidyaldram/MovieApplication",
    featured: true,
    category: "AI/ML",
  },
  {
    title: "CSV Insight Agents",
    slug: "csv-insight-agents",
    summary: "A 6-agent pipeline for automated data quality, cleaning, statistical analysis, and AI-generated reporting.",
    technologies: ["Python", "Streamlit", "OpenRouter", "Pandas"],
    demoUrl: "https://csv-insight-agents.streamlit.app/",
    githubUrl: "https://github.com/baizidyaldram/csv-insights-agent",
    featured: true,
    category: "GenAI",
  },
  {
    title: "GCA Voting Platform",
    slug: "gca-voting-platform",
    summary: "Full-stack landing and voting web app with an AI career-match feature, admin dashboard, and Supabase backend.",
    technologies: ["React", "Supabase", "Vercel"],
    demoUrl: "https://gca-landing.vercel.app/",
    githubUrl: "https://github.com/baizidyaldram/gca--prototype",
    featured: true,
    category: "Full-Stack",
  },
];