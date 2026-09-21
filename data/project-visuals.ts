import type { FlowColumn } from "@/components/architecture-flow";

export type Metric = { value: string; label: string };

export type ProjectVisual = {
  accent: string;
  imageSrc?: string;
  metrics: Metric[];
  flow: FlowColumn[];
};

export const projectVisuals: Record<string, ProjectVisual> = {
  "movie-recommender": {
    accent: "#17C3C3",
    imageSrc: "/movie%20ss.png",
    metrics: [
      { value: "85%+", label: "Accuracy" },
      { value: "0.82", label: "F1 Score" },
      { value: "0.90", label: "AUC-ROC" },
    ],
    flow: [
      [{ label: "Query", description: "User searches by title or free text" }],
      [
        { label: "SBERT", description: "Semantic similarity from Sentence-BERT embeddings" },
        { label: "SVD", description: "Latent similarity from matrix factorization" },
      ],
      [{ label: "RRF Fusion", description: "Reciprocal Rank Fusion merges both signals" }],
      [{ label: "XGBoost Re-rank", description: "Learned re-ranking corrects the fused order" }],
      [{ label: "LLM Explanation", description: "GPT-OSS-120B explains each pick in plain language" }],
    ],
  },
  "csv-insight-agents": {
    accent: "#F2965A",
    imageSrc: "/csv%20ss.png",
    metrics: [
      { value: "6", label: "AI Agents" },
      { value: "4", label: "Export Formats" },
      { value: "1-Click", label: "Sample Dataset" },
    ],
    flow: [
      [{ label: "Data Quality", description: "Completeness scoring, duplicates, outlier checks" }],
      [{ label: "Data Cleaning", description: "Missing-value handling, capping, standardization" }],
      [{ label: "Statistical Analysis", description: "Descriptive stats, correlations, skewness" }],
      [{ label: "Visualization", description: "Automatic chart-type selection with Plotly" }],
      [{ label: "Modeling", description: "GridSearchCV tuning, cross-validation, feature importance" }],
      [{ label: "AI Report", description: "Narrative summary exported to 4 formats" }],
    ],
  },
  "gca-voting-platform": {
    accent: "#A78BFA",
    imageSrc: "/GCA%20ss.png",
    metrics: [
      { value: "4-Step", label: "Vote Flow" },
      { value: "<60s", label: "Target Time" },
      { value: "RLS", label: "Secured Database" },
    ],
    flow: [
      [{ label: "React + Vite", description: "Four-step vote flow with Framer Motion" }],
      [{ label: "Vercel API", description: "Serverless functions are the only layer touching the database" }],
      [
        { label: "Supabase", description: "Postgres with Row Level Security" },
        { label: "OpenRouter", description: "AI-suggested employer sectors for career match" },
      ],
    ],
  },
};
