import type { ExperimentDefinition } from "../../schemas/experiment.schema";

export const cooperationVsScarcityExample: ExperimentDefinition = {
  id: "example-cooperation-vs-scarcity",
  schemaVersion: "0.1.0-draft",
  title: "Cooperation Under Resource Scarcity",
  summary:
    "A draft experiment definition for comparing cooperative and self-interested agents in a resource-limited world.",
  researchQuestion:
    "Do cooperative agents survive longer than self-interested agents when renewable resources are scarce?",
  hypothesis:
    "Agents with cooperative goals and local communication will maintain higher group survival than agents with individual-only goals.",
  status: "draft",
  owner: "Mark Jacinto Kropf",
  createdAt: "2026-07-01T00:00:00.000Z",
  updatedAt: "2026-07-01T00:00:00.000Z",
  world: {
    id: "scarcity-valley",
    name: "Scarcity Valley",
    serverType: "local",
    seed: "voxelcivitas-scarcity-valley",
    biomeProfile: "temperate valley with limited renewable resources",
    worldRules: ["day-night cycle enabled", "agent damage enabled"],
    resourceRules: ["food is scarce", "wood is renewable", "stone is abundant"],
    timeLimitMinutes: 120,
  },
  agents: [
    {
      id: "cooperator-01",
      displayName: "Cooperator 01",
      role: "forager",
      disposition: "cooperative",
      intelligence: {
        planningDepth: "medium",
        riskTolerance: "medium",
        cooperationBias: "high",
      },
      memory: {
        strategy: "summary",
        retentionWindowMinutes: 60,
      },
      communication: {
        mode: "local_proximity",
      },
      goals: [
        {
          id: "shared-survival",
          title: "Preserve group survival",
          description: "Collect and share food when group survival is threatened.",
          priority: 1,
          successCriteria: ["group survival remains above threshold"],
        },
      ],
      socialRules: ["share surplus food", "warn nearby agents about danger"],
      allowedActions: ["move", "collect", "craft", "communicate", "transfer_item"],
    },
  ],
  conditions: [
    {
      id: "cooperative-local-communication",
      name: "Cooperative agents with local communication",
      independentVariables: {
        cooperationBias: "high",
        communicationMode: "local_proximity",
      },
      runCount: 10,
    },
  ],
  metrics: [
    {
      id: "agent-survival-time",
      name: "Agent survival time",
      category: "survival",
      description: "Minutes survived per agent before death or experiment end.",
      aggregation: "average",
      unit: "minutes",
    },
    {
      id: "food-transfers",
      name: "Food transfers",
      category: "resource",
      description: "Number of food transfer events between agents.",
      aggregation: "count",
    },
  ],
  ethicsAndSafetyNotes:
    "This is a non-runnable draft example for schema design. No live agent execution is implemented in the repository yet.",
};
