export type CaseStudy = {
  problem: string;
  myRole: string;
  architecture: string;
  weights?: { label: string; value: string }[];
  technicalApproach: string[];
  whyTheseChoices: string;
  results: { label: string; value: string }[] | string;
  lessons: string;
  futureImprovements: string[];
};

export const caseStudies: Record<string, CaseStudy> = {
  "movie-recommender": {
    problem: "Most recommendation demos either do pure collaborative filtering (which fails on new or niche titles) or pure semantic search (which ignores what similar users actually liked). I wanted to build something that fuses both signals and a re-ranking layer and natural-language explanations, into a system that behaves like a real product feature, not a notebook demo.",
    myRole: "I designed and built the entire pipeline solo: the hybrid scoring logic, the SVD and SBERT similarity layers, the XGBoost re-ranker, the LLM explanation layer, the Streamlit frontend, and the deployment to Streamlit Community Cloud.",
    architecture: "Two entry points feed the same pipeline. A free-text query goes through SBERT semantic encoding. Picking a movie title instead goes through combined content + latent matching via SVD. Both paths converge through Reciprocal Rank Fusion, then get re-ranked by a trained XGBoost model, producing a final hybrid weighted score. The top-N results are then passed to OpenRouter's GPT-OSS-120B to generate a plain-language explanation of why each movie was recommended, and posters are pulled live from the TMDB API. The app is deployed to Streamlit Community Cloud.",
    weights: [
      { label: "SBERT content similarity", value: "50%" },
      { label: "XGBoost re-ranking", value: "25%" },
      { label: "Latent similarity (SVD)", value: "15%" },
      { label: "Reciprocal Rank Fusion", value: "10%" },
    ],
    technicalApproach: [
      "Embeddings: Sentence-BERT (all-MiniLM-L6-v2) for semantic content similarity",
      "Latent features: TruncatedSVD (scikit-learn) over the ~4,375-movie dataset",
      "Re-ranking: XGBoost trained to reorder the fused candidate list",
      "Explanations: OpenRouter GPT-OSS-120B, prompted per-recommendation",
      "Serving: Streamlit frontend, deployed on Streamlit Community Cloud",
      "Artifact tracking: model files tracked with Git LFS rather than raw blobs",
    ],
    whyTheseChoices: "A single similarity method has a clear failure mode: pure content similarity recommends near-duplicates and ignores broader taste signals, while pure latent matching struggles on titles with sparse interaction data. Fusing four signals with empirically-tuned weights balances relevance against diversity. XGBoost re-ranking on top lets the system learn non-linear corrections a static weighted sum can't capture alone.",
    results: [
      { label: "Accuracy", value: "85%+" },
      { label: "Precision", value: "0.83" },
      { label: "Recall", value: "0.81" },
      { label: "F1 Score", value: "0.82" },
      { label: "AUC-ROC", value: "0.90" },
    ],
    lessons: "Hybrid approaches genuinely do improve relevance over any single method, but tuning the fusion weights took more empirical iteration than expected, since SBERT and SVD scores live on different scales and needed calibration before they could be fairly combined. LLM explanations noticeably increase trust, but introduce a real dependency: API cost and latency need active guardrails.",
    futureImprovements: [
      "Move the LLM explanation call to an async/cached pattern to reduce perceived latency",
      "A/B test the fixed fusion weights against a learned weighting model",
      "Expand the dataset beyond ~4,375 titles and refresh ratings/popularity periodically",
      "Add implicit feedback (clicks, watch time) to move beyond content-only cold-start scoring",
    ],
  },

  "csv-insight-agents": {
    problem: "Exploratory data analysis on a new CSV follows a predictable, repetitive sequence that is check data quality, clean it, profile it statistically, visualize it, try some models, write up findings. Doing this manually for every new dataset is slow, and a lot of analysts skip steps under time pressure. I wanted to encode that workflow into an automated, auditable pipeline.",
    myRole: "I designed the full six-agent architecture and built every agent: Data Quality, Data Cleaning, Statistical Analysis, Visualization, Modeling & Evaluation, and the AI Report Agent. I also built the shared Streamlit app, session-state system, and the visual design that ties every step together.",
    architecture: "A pipeline of six specialized agents shares state through a central Streamlit session manager. Each agent has a single responsibility: quality checks, cleaning, profiling, visualization, modeling, and reporting. The early stages run offline for cost and usability, while the final report can call OpenRouter once the user is ready for a narrative summary.",
    technicalApproach: [
      "Data Quality Agent: completeness scoring, duplicate detection, missing-value analysis, IQR-based outlier checks",
      "Data Cleaning Agent: missing-value handling, outlier capping, name standardization, high-cardinality flags",
      "Statistical Analysis Agent: descriptive statistics, correlations, skewness, full data profiling",
      "Visualization Agent: automatic chart-type selection with Plotly for histograms, scatter plots, heatmaps, and more",
      "Modeling & Evaluation Agent: GridSearchCV hyperparameter tuning, cross-validation, feature importance, confusion matrices",
      "AI Report Agent: exportable narrative summaries in CSV, Excel, JSON, or Markdown",
    ],
    whyTheseChoices: "Keeping agent boundaries clean made debugging and extension dramatically easier than a monolithic analysis script would have. It also made the experience more trustworthy, because each stage produces visible, inspectable outputs before the user moves on. Making the LLM dependency optional until the final report stage means the tool is still fully useful without an API key.",
    results: "The pipeline runs a full raw-CSV-to-written-report cycle end to end, including a one-click sample dataset so a reviewer can see the whole pipeline work without sourcing their own file. Exports are available in four formats at the end of the pipeline.",
    lessons: "The cleanest design decision was keeping each agent focused on one job and it paid off repeatedly during debugging and when extending the pipeline later. I also learned that automatic visualization choices need more edge-case handling than expected, especially for binary flag columns, high-cardinality categoricals, and near-constant columns.",
    futureImprovements: [
      "Add support for larger-than-memory CSVs via chunked processing",
      "Let users manually override an agent's automatic decisions rather than only accepting the default",
      "Add a model persistence/download option so users can reuse the trained model outside the app",
      "Expand beyond tabular CSVs to Excel workbooks with multiple sheets",
    ],
  },

  "gca-voting-platform": {
    problem: "Built as a 3-day AI Automation Engineer prototype challenge: design and ship a conversion-optimized voting experience for a 'Graduates' Choice of Employers' award, where a graduate should go from landing page to a submitted vote in under 60 seconds, with a genuinely useful AI feature as a differentiator, and real vote persistence instead of a mock-only demo.",
    myRole: "I built the full stack solo within the 3-day window: the landing page, the four-step vote flow, the AI career-match feature, the Supabase schema and serverless API layer, and the password-protected admin dashboard.",
    architecture: "A React + Vite frontend talks to Vercel serverless functions under /api, which are the only part of the app allowed to touch Supabase. The vote flow is four steps: confirm eligibility → share a quick profile → get AI-suggested employer sectors → confirm up to 5 employers and submit. Every submission persists to Postgres with a soft duplicate check by email, and the admin dashboard shows live totals and leaderboard data.",
    technicalApproach: [
      "Frontend: React + Vite, Tailwind CSS, Framer Motion, and Lucide icons for a polished prototype experience",
      "State: Zustand for the multi-step flow without the overhead of a larger state-management setup",
      "Backend: Vercel serverless functions as the only server-side boundary touching Supabase",
      "Database: Supabase Postgres with Row Level Security and a service-role-only API layer",
      "AI: OpenRouter powers the career-match step with ranked employer sectors and short reasons",
      "Admin: a shared secret key gates the dashboard for a lightweight prototype workflow",
    ],
    whyTheseChoices: "Scoping the AI feature narrowly made it more trustworthy and much easier to ship in a short timeline. A broader chatbot would have added cost and unpredictability without proportional value to a 60-second flow. Choosing Supabase over a document store fit the genuinely relational shape of the vote data, and locking it down with Row Level Security from day one avoided a security review scramble later.",
    results: "A complete, deployed voting flow with real database persistence, not a local-only or mocked demo. The admin dashboard gives a stakeholder-relevant view of totals and a leaderboard, and the landing page's live vote count pulls from the real database on load rather than a hardcoded number.",
    lessons: "The biggest lesson was that scope matters, the strongest version of this product was a tightly bounded experience with one small, useful AI layer, not a broad conversational app. I also learned that locking down the database and API layer early prevents security issues from becoming a late-stage scramble.",
    futureImprovements: [
      "Replace the shared admin key with proper auth (magic link or SSO via Supabase Auth)",
      "Add rate limiting on the vote-submission and career-match endpoints",
      "Require email verification before a vote counts as fully confirmed",
      "Build a public, real-time results page instead of keeping results admin-only",
    ],
  },
};
