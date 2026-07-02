import type { AgentConfiguration } from "./agent.schema";
import type { MetricDefinition } from "./metrics.schema";

export const experimentSchemaVersion = "0.1.0-draft" as const;

export type ExperimentStatus = "draft" | "ready" | "running" | "completed" | "archived";

export type WorldConfiguration = {
  id: string;
  name: string;
  serverType: "local" | "cloud" | "external";
  seed?: string;
  biomeProfile?: string;
  worldRules: string[];
  resourceRules: string[];
  timeLimitMinutes?: number;
};

export type ExperimentCondition = {
  id: string;
  name: string;
  independentVariables: Record<string, string | number | boolean>;
  runCount: number;
};

export type ExperimentDefinition = {
  id: string;
  schemaVersion: typeof experimentSchemaVersion;
  title: string;
  summary: string;
  researchQuestion: string;
  hypothesis?: string;
  status: ExperimentStatus;
  owner: string;
  createdAt: string;
  updatedAt: string;
  world: WorldConfiguration;
  agents: AgentConfiguration[];
  conditions: ExperimentCondition[];
  metrics: MetricDefinition[];
  ethicsAndSafetyNotes?: string;
};
