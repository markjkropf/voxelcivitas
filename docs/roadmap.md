# Roadmap

VoxelCivitas is intentionally starting with a small, deployable foundation. The project should grow in phases so each layer remains understandable, testable, and honest about what has been implemented.

## Phase 0: Website and Project Foundation

Status: in progress

- Build the public Next.js website.
- Establish project metadata, MIT licensing, and repository structure.
- Write initial documentation for prior work, roadmap, architecture, and research questions.
- Define draft TypeScript schemas for experiments, agents, and metrics.

## Phase 1: Experiment Schema

Status: planned

- Formalize experiment definitions.
- Represent conditions, variables, world settings, agent populations, run metadata, and outcome metrics.
- Add validation and example experiment configurations.
- Keep the schema independent from any one Minecraft control library.

## Phase 2: Local Simulation Runner Prototype

Status: planned

- Design a local runner interface for researchers who want to run simulations on their own machines.
- Define job lifecycle states.
- Capture basic run logs and artifacts.
- Avoid cloud orchestration until the local path is understandable.

## Phase 3: Mineflayer Bot Integration

Status: planned

- Explore Mineflayer or a related control layer for early Minecraft-compatible agent integration.
- Connect agent commands to a running server.
- Capture basic observations and action traces.
- Keep the first integration narrow and inspectable.

## Phase 4: Metrics Logging

Status: planned

- Store structured behavioral events.
- Track agent state, world state, inventory state, proximity, communication, and outcome data.
- Create repeatable logging formats that can survive changes in the UI.

## Phase 5: Dashboard Visualizations

Status: planned

- Add charts for run timelines, resource flow, survival, communication, and comparison across runs.
- Explore Recharts or a similar React charting library.
- Keep visualizations grounded in actual collected metrics.

## Phase 6: Multi-Agent Experiments

Status: planned

- Run controlled experiments with multiple agents.
- Compare cooperation, competition, governance, scarcity, communication, and memory strategies.
- Support repeated runs under the same experiment definition.

## Phase 7: Whitepaper and Report Generation

Status: planned

- Generate academic-style reports from experiment definitions, metrics, charts, and analysis notes.
- Preserve reproducibility metadata.
- Make generated reports editable and transparent rather than authoritative by default.

## Phase 8: Cloud Server Orchestration

Status: planned

- Explore dedicated Minecraft-compatible server creation on demand.
- Track run isolation, cost, security, lifecycle management, and teardown.
- Support cloud execution without removing the local runner path.
