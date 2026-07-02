export const agentSchemaVersion = "0.1.0-draft" as const;

export type AgentDisposition =
  | "cooperative"
  | "self_interested"
  | "competitive"
  | "curious"
  | "cautious"
  | "governance_oriented";

export type AgentMemoryStrategy = "none" | "short_term" | "episodic" | "summary" | "vector";

export type AgentCommunicationMode =
  | "none"
  | "direct_message"
  | "local_proximity"
  | "shared_channel";

export type AgentIntelligenceProfile = {
  planningDepth: "low" | "medium" | "high";
  riskTolerance: "low" | "medium" | "high";
  cooperationBias: "low" | "medium" | "high";
};

export type AgentGoal = {
  id: string;
  title: string;
  description: string;
  priority: number;
  successCriteria: string[];
};

export type AgentConfiguration = {
  id: string;
  displayName: string;
  role: string;
  disposition: AgentDisposition;
  modelProvider?: string;
  modelName?: string;
  intelligence: AgentIntelligenceProfile;
  memory: {
    strategy: AgentMemoryStrategy;
    retentionWindowMinutes?: number;
  };
  communication: {
    mode: AgentCommunicationMode;
    allowedRecipients?: string[];
  };
  goals: AgentGoal[];
  socialRules: string[];
  allowedActions: string[];
  notes?: string;
};
