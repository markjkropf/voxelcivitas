export const workflowSteps = [
  {
    title: "Design an experiment",
    description:
      "Define the world constraints, experimental conditions, variables, and expected observation windows.",
  },
  {
    title: "Configure agents",
    description:
      "Assign goals, memory strategies, model settings, roles, intelligence levels, and social rules.",
  },
  {
    title: "Launch a world",
    description:
      "Run controlled Minecraft-compatible environments through local or cloud execution paths as the platform matures.",
  },
  {
    title: "Collect metrics",
    description:
      "Capture structured events, resource movement, proximity, communication, survival, and group outcomes.",
  },
  {
    title: "Compare runs",
    description:
      "Study repeated trials across models, rule sets, environmental pressures, and agent populations.",
  },
  {
    title: "Generate reports",
    description:
      "Convert experiment definitions, metrics, charts, and findings into reproducible research artifacts.",
  },
] as const;

export const experimentCategories = [
  {
    title: "AI model benchmarking",
    description:
      "Compare how different agent controllers perform on identical long-horizon survival and planning tasks.",
  },
  {
    title: "Governance simulations",
    description:
      "Explore rule systems, leadership structures, shared resources, sanctions, and collective decision-making.",
  },
  {
    title: "Epidemiology and contagion",
    description:
      "Model proximity-based spread, quarantine policies, information flow, and population-level interventions.",
  },
  {
    title: "Social dynamics",
    description:
      "Observe communication patterns, trust formation, role specialization, conflict, and emergent hierarchy.",
  },
  {
    title: "Resource competition",
    description:
      "Measure behavior under scarcity, tradeoffs between cooperation and hoarding, and allocation fairness.",
  },
  {
    title: "Emergent cooperation",
    description:
      "Study whether agents discover durable strategies for mutual aid, shared planning, and group survival.",
  },
] as const;

export const plannedCapabilities = [
  "Agent configuration",
  "Simulation orchestration",
  "Dedicated server launching",
  "Local runner support",
  "Metrics collection",
  "Dashboards and charts",
  "Reproducible experiment logs",
  "Academic-style report generation",
] as const;

export const architecturePillars = [
  {
    label: "Web app",
    detail: "Next.js interface for experiment design, run review, and documentation.",
  },
  {
    label: "Runner",
    detail: "Planned local and cloud execution layer for controlled simulation jobs.",
  },
  {
    label: "Agents",
    detail: "Model-backed controllers with goals, roles, memory, and social constraints.",
  },
  {
    label: "Metrics",
    detail: "Structured logs for behavior, environment state, communication, and outcomes.",
  },
] as const;
