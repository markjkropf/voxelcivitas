export const metricsSchemaVersion = "0.1.0-draft" as const;

export type MetricCategory =
  | "survival"
  | "resource"
  | "movement"
  | "communication"
  | "governance"
  | "health"
  | "construction"
  | "social";

export type MetricAggregation = "count" | "sum" | "average" | "median" | "min" | "max" | "timeline";

export type MetricDefinition = {
  id: string;
  name: string;
  category: MetricCategory;
  description: string;
  aggregation: MetricAggregation;
  unit?: string;
};

export type SimulationEventBase = {
  id: string;
  runId: string;
  timestamp: string;
  tick?: number;
  agentId?: string;
  eventType: string;
};

export type ResourceEvent = SimulationEventBase & {
  eventType: "resource_collected" | "resource_consumed" | "resource_transferred";
  resourceType: string;
  quantity: number;
  targetAgentId?: string;
};

export type CommunicationEvent = SimulationEventBase & {
  eventType: "message_sent";
  channel: "direct" | "local" | "shared";
  recipientAgentIds?: string[];
  messageSummary: string;
};

export type SurvivalEvent = SimulationEventBase & {
  eventType: "agent_spawned" | "agent_damaged" | "agent_died" | "agent_recovered";
  health?: number;
  cause?: string;
};

export type SimulationEvent = ResourceEvent | CommunicationEvent | SurvivalEvent | SimulationEventBase;
