# Linear Roadmap Backlog

Project: VoxelCivitas  
Linear project: VoxelCivitas  
Default status for every issue below: Icebox  
Allowed labels: Feature, Bug, Chore

This document decomposes the VoxelCivitas roadmap into agent-sized Linear issues from an extreme programming product management perspective. Parent issues describe coherent product increments. Sub-issues are intended to fit into one focused implementation session by a coding agent.

## Working Agreement

- One sub-issue should be independently branchable, reviewable, and demoable.
- Parent issues are planning containers and should close only after their sub-issues are complete.
- Use `Feature` when the work changes product behavior or creates a user-facing capability.
- Use `Chore` when the work improves foundations, documentation, infrastructure, research decisions, or developer experience.
- Use `Bug` only for defects in implemented behavior, documentation, deployment, accessibility, data integrity, or tests.
- Keep all unstarted work in `Icebox`.
- Avoid fake functionality. If a feature is a placeholder or prototype, the issue must say so.
- Every issue should preserve the project positioning: a research platform for programmable societies in virtual worlds, not a Minecraft game server or toy demo.

## Parent Issue 0: Establish the Public Project Foundation

Label: Chore  
Status: Icebox  
Roadmap phase: Phase 0 - Website and project foundation

As a researcher, student, or reviewer, I want the repository and website foundation to communicate the project accurately, run reliably, and establish a professional open-source baseline so I can understand the work and trust its direction.

### Sub-issue 0.1: Add repository contribution and governance docs

Label: Chore  
Status: Icebox

Write contributor-facing docs that explain how to work on VoxelCivitas without implying the project already has a simulation engine.

Acceptance criteria:

- Add `CONTRIBUTING.md` with local setup, pnpm commands, branch expectations, and PR quality expectations.
- Add a concise `CODE_OF_CONDUCT.md`.
- Add a `SECURITY.md` that explains how to report vulnerabilities for a research platform that may later handle agent credentials and server orchestration.
- Reference these docs from `README.md`.

Not included:

- No community automation or moderation tooling.
- No claims about active maintainers beyond Mark Jacinto Kropf.

### Sub-issue 0.2: Add GitHub issue and pull request templates

Label: Chore  
Status: Icebox

Create lightweight templates that keep future work scoped to small, testable increments.

Acceptance criteria:

- Add `.github/ISSUE_TEMPLATE/feature.md`.
- Add `.github/ISSUE_TEMPLATE/bug.md`.
- Add `.github/ISSUE_TEMPLATE/chore.md`.
- Add `.github/pull_request_template.md`.
- Templates include context, acceptance criteria, test plan, and "out of scope" sections.

Not included:

- No GitHub Actions changes in this issue.

### Sub-issue 0.3: Add continuous integration for pnpm checks

Label: Chore  
Status: Icebox

Run the same quality gate in CI that contributors run locally.

Acceptance criteria:

- Add a GitHub Actions workflow for `pnpm install --frozen-lockfile` and `pnpm check`.
- Workflow runs on pull requests and pushes to `main`.
- CI uses the package manager version declared in `package.json`.
- README documents the CI check.

Not included:

- No deployment automation.
- No end-to-end browser tests.

### Sub-issue 0.4: Add linting and formatting baseline

Label: Chore  
Status: Icebox

Introduce a small style quality gate without overloading the first codebase milestone.

Acceptance criteria:

- Add ESLint configuration compatible with the current Next.js version.
- Add Prettier configuration.
- Add `pnpm lint` and `pnpm format:check`.
- Update `pnpm check` to include linting and format checking if the added tools are stable.
- Resolve any violations introduced by the current project files.

Not included:

- No large style refactors beyond making the current files pass.

### Sub-issue 0.5: Add accessibility and responsive layout smoke checks

Label: Chore  
Status: Icebox

Protect the landing page from obvious regressions as the site evolves.

Acceptance criteria:

- Add a Playwright smoke test for the home page.
- Verify the page loads at mobile and desktop widths.
- Verify the main heading, navigation links, and status copy are visible.
- Verify there is no horizontal overflow at common viewport widths.
- Add the smoke test command to package scripts.

Not included:

- No full visual regression suite.
- No authenticated flows.

### Sub-issue 0.6: Add link integrity checking for docs and landing page links

Label: Bug  
Status: Icebox

Prevent broken links from shipping in a public research portfolio project.

Acceptance criteria:

- Add a script or package-based check for local Markdown links.
- Check README and `docs/` links in CI or `pnpm check`.
- Document how external links should be handled when a target may change.
- Fix any broken local links discovered by the check.

Not included:

- No crawling of arbitrary external sites unless the tool is lightweight and reliable.

### Sub-issue 0.7: Prepare Vercel deployment documentation

Label: Chore  
Status: Icebox

Document the expected deployment path for voxelcivitas.com.

Acceptance criteria:

- Add `docs/deployment.md`.
- Explain Vercel project setup, pnpm install behavior, build command, and output expectations.
- Document domain setup for `voxelcivitas.com`.
- Document required environment variables, currently none.

Not included:

- No secrets.
- No cloud simulation server deployment.

### Sub-issue 0.8: Add content accuracy guardrails

Label: Chore  
Status: Icebox

Keep the project language honest as planned functionality expands.

Acceptance criteria:

- Add `docs/content-guidelines.md`.
- Define approved terms such as "aims to", "planned", "prototype", and "not yet implemented".
- Define disallowed framing such as "game server", "Minecraft mod", or claims that live orchestration exists before implementation.
- Add a short README note pointing contributors to the content guidelines.

Not included:

- No automated natural-language linting.

## Parent Issue 1: Formalize Experiment, Agent, and Metrics Schemas

Label: Feature  
Status: Icebox  
Roadmap phase: Phase 1 - Experiment schema

As a researcher, I want durable schemas for experiments, agents, and metrics so that experiment definitions can be validated, shared, versioned, and eventually executed by local or cloud runners.

### Sub-issue 1.1: Define the core domain vocabulary

Label: Chore  
Status: Icebox

Create a shared vocabulary before schema code grows.

Acceptance criteria:

- Add `docs/domain-model.md`.
- Define experiment, condition, run, agent, world, task, metric, event, artifact, report, and runner.
- Explain which concepts are implemented today and which are planned.
- Link the domain model from `docs/architecture.md`.

Not included:

- No code changes beyond docs references.

### Sub-issue 1.2: Add runtime validation for draft schemas

Label: Feature  
Status: Icebox

Make schema validation executable instead of TypeScript-only.

Acceptance criteria:

- Choose a lightweight validation library, preferably Zod unless there is a stronger local reason.
- Convert experiment, agent, and metric definitions into runtime schemas.
- Export inferred TypeScript types from those schemas.
- Validate the existing example experiment.
- Add tests for valid and invalid payloads.

Not included:

- No database persistence.
- No UI form generation.

### Sub-issue 1.3: Add JSON schema export for experiment definitions

Label: Feature  
Status: Icebox

Support researchers and external tools that need language-independent schema definitions.

Acceptance criteria:

- Add a script that exports JSON Schema for experiment, agent, and metrics definitions.
- Write generated schemas to `schemas/generated/`.
- Document how to regenerate schemas.
- Add a check that generated schemas are up to date.

Not included:

- No public schema registry.
- No backward compatibility guarantees beyond draft versioning.

### Sub-issue 1.4: Add schema versioning and migration policy

Label: Chore  
Status: Icebox

Establish how draft schemas evolve before external examples accumulate.

Acceptance criteria:

- Add `docs/schema-versioning.md`.
- Define semantic expectations for draft schema versions.
- Define when migrations are required.
- Add a schema version constant in one shared module.
- Update existing schema files to import the shared version.

Not included:

- No automated migration engine.

### Sub-issue 1.5: Add experiment fixture examples for priority research categories

Label: Feature  
Status: Icebox

Give future validation and dashboard work realistic examples.

Acceptance criteria:

- Add one fixture each for AI benchmarking, governance, epidemiology, social dynamics, resource competition, and emergent cooperation.
- Each fixture includes a research question, conditions, agents, world settings, and metrics.
- Fixtures validate with the runtime schema.
- Each fixture explicitly states that it is not runnable until runner integration exists.

Not included:

- No UI display work.
- No live agent execution.

### Sub-issue 1.6: Add schema documentation pages

Label: Chore  
Status: Icebox

Make the draft schema understandable without reading TypeScript first.

Acceptance criteria:

- Add `docs/schemas.md`.
- Document experiment, agent, metric, and event structures.
- Include one minimal example and one richer example.
- Explain required versus optional fields.

Not included:

- No generated API documentation pipeline.

### Sub-issue 1.7: Add experiment import and validation utility

Label: Feature  
Status: Icebox

Create a reusable utility for loading and validating experiment definitions from files.

Acceptance criteria:

- Add a library function that accepts unknown JSON and returns a typed validation result.
- Include useful validation errors for missing required fields.
- Add tests with valid and invalid fixtures.
- Keep the function independent from Next.js.

Not included:

- No web upload UI.
- No CLI runner integration.

### Sub-issue 1.8: Add initial public schema stability checklist

Label: Chore  
Status: Icebox

Create an explicit review checklist before treating schema fields as durable.

Acceptance criteria:

- Add a checklist to `docs/schema-versioning.md` or a dedicated file.
- Include naming consistency, reproducibility metadata, runner compatibility, privacy, and metrics interpretability.
- Reference the checklist from schema PR guidance.

Not included:

- No schema freeze.

## Parent Issue 2: Build a Local Simulation Runner Prototype

Label: Feature  
Status: Icebox  
Roadmap phase: Phase 2 - Local simulation runner prototype

As a researcher, I want a local-first runner prototype so experiments can eventually execute on my own machine before cloud orchestration is introduced.

### Sub-issue 2.1: Define the runner lifecycle state machine

Label: Chore  
Status: Icebox

Document the states and transitions for local simulation jobs.

Acceptance criteria:

- Add `docs/runner-lifecycle.md`.
- Define queued, preparing, running, paused, completed, failed, canceled, and archived states.
- Define legal transitions and failure handling.
- Explain how state maps to experiment run artifacts.

Not included:

- No executable runner code.

### Sub-issue 2.2: Define local run artifact structure

Label: Chore  
Status: Icebox

Specify where local runs write manifests, logs, metrics, and reports.

Acceptance criteria:

- Add `docs/run-artifacts.md`.
- Define a local directory structure for run artifacts.
- Include `manifest.json`, `events.jsonl`, `summary.json`, and `notes.md`.
- Include reproducibility metadata requirements.

Not included:

- No artifact writer implementation.

### Sub-issue 2.3: Implement a no-op local runner CLI

Label: Feature  
Status: Icebox

Create the smallest executable runner boundary without Minecraft integration.

Acceptance criteria:

- Add a CLI command that accepts an experiment fixture path.
- Validate the experiment using the schema utility.
- Create a run directory with a manifest and status file.
- Exit successfully without launching Minecraft.
- Document the no-op behavior honestly.

Not included:

- No bot control.
- No real simulation loop.

### Sub-issue 2.4: Add runner manifest writer

Label: Feature  
Status: Icebox

Persist enough metadata for a local run to be inspected later.

Acceptance criteria:

- Implement a manifest writer used by the no-op runner.
- Include experiment id, schema version, run id, timestamps, git commit if available, runner version, and status.
- Add tests for manifest shape and required fields.

Not included:

- No database persistence.

### Sub-issue 2.5: Add structured runner logging

Label: Feature  
Status: Icebox

Give local runner execution a simple machine-readable log format.

Acceptance criteria:

- Add a JSONL logger for runner lifecycle events.
- Log validation, preparation, start, completion, failure, and cancellation events.
- Add tests for log line shape.
- Ensure logs are safe for future ingestion.

Not included:

- No metrics dashboard ingestion.

### Sub-issue 2.6: Add runner cancellation and failure behavior

Label: Feature  
Status: Icebox

Make local runner failure states explicit before long-running jobs exist.

Acceptance criteria:

- Add failure handling to the no-op runner.
- Add a way to mark a run canceled before execution begins.
- Persist final status in the run manifest.
- Add tests for failed validation and canceled runs.

Not included:

- No process manager.
- No job queue.

### Sub-issue 2.7: Add local runner documentation and examples

Label: Chore  
Status: Icebox

Make the prototype understandable for contributors.

Acceptance criteria:

- Add local runner setup instructions.
- Include one example command using a fixture.
- Explain current limitations.
- Link runner docs from the README and roadmap.

Not included:

- No cloud runner documentation.

### Sub-issue 2.8: Add runner package boundary

Label: Chore  
Status: Icebox

Separate runner code from the web app so it can evolve independently.

Acceptance criteria:

- Decide whether to use `packages/runner` or a top-level `runner/` directory.
- Move runner code into the chosen boundary.
- Keep shared schemas importable without circular dependencies.
- Document the boundary in `docs/architecture.md`.

Not included:

- No monorepo package publishing.

## Parent Issue 3: Integrate an Early Minecraft-Compatible Agent Control Layer

Label: Feature  
Status: Icebox  
Roadmap phase: Phase 3 - Mineflayer bot integration

As a researcher, I want the local runner to connect to a Minecraft-compatible world through an inspectable control layer so agents can eventually act in a real environment.

### Sub-issue 3.1: Evaluate Mineflayer integration constraints

Label: Chore  
Status: Icebox

Choose a conservative early control path based on current library and server compatibility.

Acceptance criteria:

- Add `docs/minecraft-integration-spike.md`.
- Document Mineflayer version, Node.js compatibility, supported Minecraft versions, and known constraints.
- Recommend the first supported local server setup.
- Identify security and stability risks.

Not included:

- No production code changes unless required for documentation examples.

### Sub-issue 3.2: Add Minecraft connection configuration schema

Label: Feature  
Status: Icebox

Represent server connection settings without hardcoding local assumptions.

Acceptance criteria:

- Add a connection configuration type and runtime schema.
- Include host, port, username, auth mode, server version, and timeout.
- Support local development defaults through documented config files or environment variables.
- Add validation tests.

Not included:

- No credential storage service.

### Sub-issue 3.3: Implement a minimal bot connection module

Label: Feature  
Status: Icebox

Connect to a local server and exit cleanly.

Acceptance criteria:

- Add a module that creates one bot connection using configured settings.
- Handle connect, spawn, error, and end events.
- Provide a smoke command for local manual testing.
- Log connection lifecycle events through the runner logger.

Not included:

- No autonomous action loop.
- No multi-agent support.

### Sub-issue 3.4: Add observation mapping for basic world state

Label: Feature  
Status: Icebox

Translate low-level bot state into a stable observation shape.

Acceptance criteria:

- Map agent position, health, food, inventory summary, nearby entities, and time of day when available.
- Define a typed observation object.
- Add tests around mapping functions where Mineflayer objects can be mocked.
- Document fields that may be unavailable depending on server version.

Not included:

- No visual perception or block scanning beyond basic state.

### Sub-issue 3.5: Add primitive action adapter

Label: Feature  
Status: Icebox

Create a narrow set of safe, inspectable bot actions.

Acceptance criteria:

- Support move, look, chat, wait, collect nearby block or item if feasible, and stop.
- Validate actions against an allowed action list.
- Log every attempted action and result.
- Add unit tests for action validation.

Not included:

- No pathfinding beyond basic library-supported behavior.
- No combat automation.

### Sub-issue 3.6: Add deterministic scripted baseline agent

Label: Feature  
Status: Icebox

Provide a non-LLM baseline agent for early runner tests.

Acceptance criteria:

- Implement a simple scripted agent policy that can consume observations and choose actions.
- Keep behavior deterministic when given the same seed and observation sequence.
- Add tests for policy decisions.
- Document that this is a baseline, not the final AI agent system.

Not included:

- No OpenAI or external model integration.

### Sub-issue 3.7: Connect the local runner to one controlled bot

Label: Feature  
Status: Icebox

Run a minimal end-to-end local session with one bot and one scripted policy.

Acceptance criteria:

- Extend the runner CLI to optionally connect one bot to a local server.
- Run for a bounded time or tick count.
- Write run manifest, lifecycle logs, action logs, and basic observations.
- Fail cleanly when no server is reachable.

Not included:

- No multi-agent experiments.
- No cloud server launch.

### Sub-issue 3.8: Add integration safety documentation

Label: Chore  
Status: Icebox

Set expectations for safe use of automated agents in local worlds.

Acceptance criteria:

- Add docs explaining local-only testing, server isolation, credentials, and allowed actions.
- Warn against connecting agents to public servers.
- Explain how to stop a running session.
- Link safety docs from runner and architecture docs.

Not included:

- No automated policy enforcement beyond existing allowed actions.

## Parent Issue 4: Capture Structured Metrics and Reproducible Logs

Label: Feature  
Status: Icebox  
Roadmap phase: Phase 4 - Metrics logging

As a researcher, I want structured, reproducible metrics from each run so agent behavior can be analyzed, compared, and used in future reports.

### Sub-issue 4.1: Define the event taxonomy v0

Label: Chore  
Status: Icebox

Create a durable first taxonomy before dashboards depend on event names.

Acceptance criteria:

- Add `docs/events-taxonomy.md`.
- Define lifecycle, observation, action, resource, communication, health, movement, proximity, governance, and outcome events.
- Include required fields and examples for each event category.
- Explain which events are currently emitted by implemented code.

Not included:

- No event ingestion code.

### Sub-issue 4.2: Implement event validation

Label: Feature  
Status: Icebox

Validate structured events before they are written or analyzed.

Acceptance criteria:

- Add runtime schemas for event categories.
- Validate runner lifecycle events and bot action events.
- Add tests for valid and invalid event payloads.
- Return clear validation failures.

Not included:

- No database layer.

### Sub-issue 4.3: Implement JSONL event writer

Label: Feature  
Status: Icebox

Write run events in a simple append-only local format.

Acceptance criteria:

- Add an event writer for `events.jsonl`.
- Validate events before writing.
- Include timestamps and run id on each event.
- Add tests for append behavior and invalid events.

Not included:

- No streaming dashboard.

### Sub-issue 4.4: Add observation and action event emission

Label: Feature  
Status: Icebox

Record what the agent observed and attempted during local bot runs.

Acceptance criteria:

- Emit observation events from the basic observation mapper.
- Emit action attempted and action completed events from the action adapter.
- Include status and error details when actions fail.
- Add tests using mocked observations and actions.

Not included:

- No natural-language trace summarization.

### Sub-issue 4.5: Add run summary generation

Label: Feature  
Status: Icebox

Produce a compact summary artifact after each local run.

Acceptance criteria:

- Generate `summary.json` from local event logs.
- Include event counts, run duration, final status, agent count, and simple outcome fields.
- Add tests with sample event logs.
- Document summary limitations.

Not included:

- No charts.
- No statistical comparisons across runs.

### Sub-issue 4.6: Add metrics aggregation utilities

Label: Feature  
Status: Icebox

Create reusable functions for first dashboard metrics.

Acceptance criteria:

- Implement aggregations for survival time, action counts, resource events, communication counts, and timeline buckets.
- Add tests with sample JSONL event files.
- Keep utilities independent from React and Next.js.
- Document aggregation assumptions.

Not included:

- No database queries.

### Sub-issue 4.7: Add reproducibility metadata capture

Label: Feature  
Status: Icebox

Preserve the context needed to understand and repeat a run.

Acceptance criteria:

- Capture schema version, runner version, git commit, Node.js version, package manager version, server version when available, seed, and experiment fixture hash.
- Include reproducibility data in manifest and summary artifacts.
- Add tests for required metadata.
- Document known reproducibility gaps.

Not included:

- No deterministic replay engine.

### Sub-issue 4.8: Add sample metrics artifacts for UI development

Label: Chore  
Status: Icebox

Create non-live sample artifacts that dashboards can use before real simulations mature.

Acceptance criteria:

- Add sample run artifacts under an examples or fixtures directory.
- Samples are clearly labeled synthetic or scripted.
- Samples validate against event and summary schemas.
- Add docs explaining they are for development only.

Not included:

- No fake production claims.

## Parent Issue 5: Build Dashboard Visualizations for Runs and Comparisons

Label: Feature  
Status: Icebox  
Roadmap phase: Phase 5 - Dashboard visualizations

As a researcher, I want dashboards that visualize run metrics and comparisons so I can inspect behavior patterns without manually parsing logs.

### Sub-issue 5.1: Define dashboard information architecture

Label: Chore  
Status: Icebox

Plan the dashboard screens before adding chart dependencies.

Acceptance criteria:

- Add `docs/dashboard-ia.md`.
- Define run overview, run timeline, agent details, metrics table, and comparison views.
- Identify which views use real artifacts versus planned data.
- Include accessibility and responsive layout notes.

Not included:

- No dashboard implementation.

### Sub-issue 5.2: Add dashboard route shell

Label: Feature  
Status: Icebox

Create a real application surface for run review without pretending live data exists.

Acceptance criteria:

- Add a `/dashboard` route or equivalent App Router route.
- Show an empty state when no run artifact is selected.
- Link to sample artifact docs.
- Keep navigation consistent with the landing page.

Not included:

- No authentication.
- No database-backed run list.

### Sub-issue 5.3: Add sample run artifact loader

Label: Feature  
Status: Icebox

Load local sample artifacts for dashboard development.

Acceptance criteria:

- Add a server-side utility to load known sample run summaries and event files.
- Validate loaded artifacts.
- Render a list of available sample runs in the dashboard.
- Add tests for loader behavior.

Not included:

- No arbitrary user file upload.

### Sub-issue 5.4: Add run overview visualization

Label: Feature  
Status: Icebox

Give researchers a quick readout of a single run.

Acceptance criteria:

- Display run status, duration, agent count, event counts, and reproducibility metadata.
- Show clear labels for synthetic or sample data.
- Handle missing optional fields gracefully.
- Add responsive layout checks.

Not included:

- No cross-run comparison charts.

### Sub-issue 5.5: Add event timeline chart

Label: Feature  
Status: Icebox

Visualize when major events happen during a run.

Acceptance criteria:

- Add a charting dependency only if needed, such as Recharts.
- Show event counts over time using sample artifacts.
- Include accessible labels and fallback table data.
- Add tests for data transformation.

Not included:

- No live streaming updates.

### Sub-issue 5.6: Add resource and survival metric views

Label: Feature  
Status: Icebox

Expose the first research-relevant metric charts.

Acceptance criteria:

- Show survival time metrics when present.
- Show resource event counts by type when present.
- Provide empty states for missing metrics.
- Use real sample artifacts rather than hardcoded UI-only values.

Not included:

- No statistical significance calculations.

### Sub-issue 5.7: Add run comparison view using sample runs

Label: Feature  
Status: Icebox

Compare two or more run summaries side by side.

Acceptance criteria:

- Let the dashboard compare selected sample runs.
- Show key metric deltas in a table.
- Include a basic comparison chart for compatible metrics.
- Explain when metrics are not comparable.

Not included:

- No experiment condition matrix UI.

### Sub-issue 5.8: Add dashboard accessibility and visual QA tests

Label: Bug  
Status: Icebox

Catch dashboard regressions before they damage the research platform presentation.

Acceptance criteria:

- Add smoke tests for dashboard routes at mobile and desktop widths.
- Verify charts or fallback tables render without overflow.
- Verify empty states are visible and accurate.
- Fix any accessibility or layout defects found by the tests.

Not included:

- No pixel-perfect visual regression system.

## Parent Issue 6: Support Controlled Multi-Agent Experiments

Label: Feature  
Status: Icebox  
Roadmap phase: Phase 6 - Multi-agent experiments

As a researcher, I want to run controlled multi-agent experiments with repeated conditions so I can study cooperation, competition, governance, contagion, and emergent behavior.

### Sub-issue 6.1: Add agent population configuration utilities

Label: Feature  
Status: Icebox

Generate repeated agent configurations without hand-writing every agent.

Acceptance criteria:

- Add utilities for expanding population templates into concrete agent configs.
- Support role counts, naming, goals, communication mode, and seed-aware deterministic output.
- Validate generated agents.
- Add tests for repeated generation.

Not included:

- No live multi-agent runner changes.

### Sub-issue 6.2: Add condition matrix expansion

Label: Feature  
Status: Icebox

Turn experiment conditions and run counts into concrete planned runs.

Acceptance criteria:

- Add a utility that expands experiment conditions into planned run manifests.
- Preserve condition metadata and run index.
- Validate generated planned runs.
- Add tests for multi-condition and repeated-run cases.

Not included:

- No scheduler or queue.

### Sub-issue 6.3: Extend the local runner for multiple scripted agents

Label: Feature  
Status: Icebox

Run more than one deterministic baseline agent in a bounded local session.

Acceptance criteria:

- Support multiple configured scripted agents.
- Keep each agent's observations, actions, and events separated by agent id.
- Fail cleanly when one agent cannot connect.
- Add tests where possible and document manual test steps where real server behavior is required.

Not included:

- No LLM agent integration.
- No cloud server orchestration.

### Sub-issue 6.4: Add proximity and communication event support

Label: Feature  
Status: Icebox

Capture early social interaction signals.

Acceptance criteria:

- Emit proximity events when agents are within configured distance thresholds.
- Emit communication events for chat or local message actions.
- Validate and aggregate those events.
- Add tests for event generation logic.

Not included:

- No semantic analysis of message content.

### Sub-issue 6.5: Add governance and social rule evaluation hooks

Label: Feature  
Status: Icebox

Prepare for experiments that depend on rules and violations.

Acceptance criteria:

- Define a simple rule evaluation interface.
- Implement at least one deterministic rule check, such as "do not transfer restricted resources".
- Emit rule evaluation or violation events.
- Document limitations and examples.

Not included:

- No full policy engine.
- No enforcement beyond logging unless narrowly necessary.

### Sub-issue 6.6: Add experiment templates for multi-agent scenarios

Label: Feature  
Status: Icebox

Provide structured starting points for common research questions.

Acceptance criteria:

- Add templates for cooperation under scarcity, governance allocation, contagion spread, communication constraints, and model benchmarking.
- Each template validates and includes metrics.
- Templates are documented as starting points, not finished studies.

Not included:

- No UI template picker.

### Sub-issue 6.7: Add repeated-run execution planning

Label: Feature  
Status: Icebox

Represent repeated runs as first-class planned work.

Acceptance criteria:

- Generate planned run identifiers for each condition and repetition.
- Persist planned run metadata before execution.
- Allow the runner to execute one planned run by id.
- Add tests for run planning.

Not included:

- No parallel execution.
- No queue dashboard.

### Sub-issue 6.8: Add multi-agent experiment documentation

Label: Chore  
Status: Icebox

Explain what can and cannot be inferred from early multi-agent runs.

Acceptance criteria:

- Add docs for experiment templates, repeated runs, and interpretation limits.
- Explain deterministic baselines versus model-backed agents.
- Describe how metrics support comparisons.
- Link from roadmap and architecture docs.

Not included:

- No academic literature review expansion beyond references already planned.

## Parent Issue 7: Generate Academic-Style Reports from Runs

Label: Feature  
Status: Icebox  
Roadmap phase: Phase 7 - Whitepaper and report generation

As a researcher, I want report artifacts generated from experiment definitions, metrics, charts, and notes so I can turn runs into reproducible research narratives.

### Sub-issue 7.1: Define the report data model

Label: Chore  
Status: Icebox

Specify what belongs in a report before building a generator.

Acceptance criteria:

- Add `docs/report-model.md`.
- Define abstract, research question, method, experiment setup, results, limitations, reproducibility metadata, and appendix sections.
- Explain which sections are generated, user-authored, or derived from metrics.
- Include an example outline.

Not included:

- No report generation code.

### Sub-issue 7.2: Add report artifact schema

Label: Feature  
Status: Icebox

Represent reports as versioned, inspectable data.

Acceptance criteria:

- Add runtime schema and TypeScript types for report artifacts.
- Include links to experiment id, run ids, metrics, charts, notes, and generated narrative sections.
- Add tests for valid and invalid report artifacts.

Not included:

- No LLM narrative generation.

### Sub-issue 7.3: Generate a Markdown report from sample artifacts

Label: Feature  
Status: Icebox

Create the first honest report output without AI generation.

Acceptance criteria:

- Add a script or utility that creates a Markdown report from experiment and run artifacts.
- Include method, metrics tables, reproducibility metadata, and limitations.
- Clearly mark sample or synthetic data.
- Add snapshot or content tests.

Not included:

- No PDF export.
- No LLM-written prose.

### Sub-issue 7.4: Add report preview route

Label: Feature  
Status: Icebox

Let researchers inspect generated report output in the web app.

Acceptance criteria:

- Add a report preview page for a sample generated report.
- Render Markdown or structured report sections safely.
- Include links back to source experiment and run artifacts.
- Provide empty and missing-artifact states.

Not included:

- No editing UI.

### Sub-issue 7.5: Add report provenance and citation blocks

Label: Feature  
Status: Icebox

Make generated reports transparent about their source material.

Acceptance criteria:

- Include experiment schema version, artifact hashes, run ids, date generated, and repository commit when available.
- Add a citations or prior-work section that references project docs.
- Add tests for required provenance fields.
- Document how provenance should be interpreted.

Not included:

- No bibliography manager integration.

### Sub-issue 7.6: Add chart export for report embedding

Label: Feature  
Status: Icebox

Allow dashboard charts to be reused in reports.

Acceptance criteria:

- Define a chart artifact model or export format.
- Export at least one dashboard chart or table representation for report inclusion.
- Include accessible text equivalents for charts.
- Add tests for export data.

Not included:

- No high-resolution print layout work.

### Sub-issue 7.7: Add guarded AI-assisted report draft spike

Label: Chore  
Status: Icebox

Explore how AI may help draft narrative sections without hiding uncertainty or inventing findings.

Acceptance criteria:

- Add a short ADR or spike doc covering model use, prompt inputs, limitations, and hallucination controls.
- Define required source citations and "do not infer beyond metrics" rules.
- Recommend whether to implement AI-assisted drafts in a later issue.

Not included:

- No production AI generation.
- No API key setup.

### Sub-issue 7.8: Add editable report notes plan

Label: Chore  
Status: Icebox

Plan how human notes and generated sections should coexist.

Acceptance criteria:

- Document report editing requirements.
- Define which report sections are human-authored, generated, or derived.
- Identify persistence needs for future database work.
- Add follow-up issues if implementation should proceed.

Not included:

- No rich text editor implementation.

## Parent Issue 8: Design and Prototype Cloud Server Orchestration

Label: Feature  
Status: Icebox  
Roadmap phase: Phase 8 - Cloud server orchestration

As a researcher, I want cloud-launched Minecraft-compatible servers eventually, so larger experiments can run in isolated environments without requiring local hardware.

### Sub-issue 8.1: Write cloud orchestration architecture decision record

Label: Chore  
Status: Icebox

Decide the orchestration direction before writing provider-specific code.

Acceptance criteria:

- Add an ADR under `docs/adr/`.
- Compare local runner only, generic container hosting, cloud VMs, and game server providers.
- Evaluate cost, startup time, isolation, observability, secrets, teardown, and student-friendly maintainability.
- Recommend a first prototype path.

Not included:

- No cloud provider implementation.

### Sub-issue 8.2: Define cloud runner interface

Label: Feature  
Status: Icebox

Extend the runner abstraction without binding to one provider.

Acceptance criteria:

- Define a cloud runner interface for provision, start, inspect, stop, collect artifacts, and teardown.
- Align states with the local runner lifecycle.
- Add tests for interface-level state transitions using a fake provider.

Not included:

- No real provider API calls.

### Sub-issue 8.3: Add server lifecycle fake provider

Label: Feature  
Status: Icebox

Prototype orchestration behavior safely without spending money.

Acceptance criteria:

- Implement a fake cloud provider adapter that simulates server lifecycle transitions.
- Persist lifecycle logs and artifacts.
- Support failure and teardown cases.
- Add tests for successful and failed lifecycle flows.

Not included:

- No external network calls.

### Sub-issue 8.4: Add secrets and credential handling plan

Label: Chore  
Status: Icebox

Prevent unsafe handling of tokens before cloud work begins.

Acceptance criteria:

- Add docs for required secret types, storage locations, and local development patterns.
- Explain what must never be committed.
- Add `.env.example` with placeholder names only.
- Verify `.gitignore` protects local environment files.

Not included:

- No production secret manager integration.

### Sub-issue 8.5: Add cost and teardown safeguards plan

Label: Chore  
Status: Icebox

Make cost control a first-class design constraint.

Acceptance criteria:

- Document max runtime, idle timeout, teardown requirements, and cost visibility.
- Define failure behavior when teardown fails.
- Define audit logging requirements.
- Add acceptance criteria for future provider implementations.

Not included:

- No provider billing integration.

### Sub-issue 8.6: Prototype one real provider adapter behind a feature flag

Label: Feature  
Status: Icebox

Create the first real cloud orchestration integration only after the fake provider and safeguards exist.

Acceptance criteria:

- Implement one provider adapter selected by the ADR.
- Gate it behind explicit environment variables and a feature flag.
- Support provision, inspect, stop, and teardown for a minimal server.
- Add documentation and manual test steps.

Not included:

- No automatic public access.
- No production-scale scheduling.

### Sub-issue 8.7: Add cloud artifact collection

Label: Feature  
Status: Icebox

Retrieve logs and metrics from a cloud run into the same artifact model as local runs.

Acceptance criteria:

- Collect manifest, lifecycle logs, event logs, and summaries from the cloud runner path.
- Normalize artifact locations for dashboard ingestion.
- Add tests with fake provider artifacts.
- Document gaps for the real provider.

Not included:

- No long-term object storage unless required by the selected provider.

### Sub-issue 8.8: Add cloud orchestration dashboard status view

Label: Feature  
Status: Icebox

Expose cloud run status without giving users unsafe controls.

Acceptance criteria:

- Add a dashboard view for cloud run lifecycle status from fake provider data.
- Show queued, provisioning, running, stopping, stopped, failed, and teardown states.
- Include clear warnings for prototype status.
- Add empty and error states.

Not included:

- No live billing view.
- No multi-user permissions.

## Parent Issue 9: Introduce Persistence for Experiments, Runs, and Reports

Label: Feature  
Status: Icebox  
Roadmap phase: Cross-cutting persistence foundation

As a researcher, I want experiments, runs, metrics summaries, and report drafts to persist beyond local files so VoxelCivitas can become a real web platform.

### Sub-issue 9.1: Write database architecture decision record

Label: Chore  
Status: Icebox

Choose the database and ORM direction before adding persistence.

Acceptance criteria:

- Add an ADR comparing Neon, Supabase, Vercel Postgres, Prisma, and Drizzle.
- Evaluate local development, migrations, type safety, Vercel deployment, cost, and contributor complexity.
- Recommend the first persistence stack.

Not included:

- No database package installation.

### Sub-issue 9.2: Add database connection skeleton

Label: Feature  
Status: Icebox

Create a minimal connection layer after the ADR selects a stack.

Acceptance criteria:

- Add database package dependencies selected by the ADR.
- Add connection configuration using environment variables.
- Add `.env.example` entries.
- Add a health-check utility that can run locally.

Not included:

- No production database provisioning.

### Sub-issue 9.3: Add initial migration for experiments and runs

Label: Feature  
Status: Icebox

Persist the core research objects.

Acceptance criteria:

- Add tables or collections for experiments, experiment conditions, planned runs, and run summaries.
- Store schema version and reproducibility metadata.
- Add migration commands and docs.
- Add tests or migration validation where feasible.

Not included:

- No metrics event storage beyond summaries.

### Sub-issue 9.4: Add persistence repository layer

Label: Feature  
Status: Icebox

Keep database access behind testable functions.

Acceptance criteria:

- Add repository functions for create, read, update, and list experiments.
- Add repository functions for planned runs and run summaries.
- Add tests using local database or mocked adapter based on the selected stack.
- Keep React components away from raw queries.

Not included:

- No authentication or multi-user ownership.

### Sub-issue 9.5: Add experiment list and detail pages

Label: Feature  
Status: Icebox

Expose persisted experiments in the web app.

Acceptance criteria:

- Add an experiments list route.
- Add an experiment detail route.
- Show schema version, research question, conditions, agents, and metrics.
- Include empty and loading states.

Not included:

- No full experiment editor.

### Sub-issue 9.6: Add experiment creation from fixture

Label: Feature  
Status: Icebox

Create a safe first write path without building a large form.

Acceptance criteria:

- Add a server action or route handler to import a known validated fixture into persistence.
- Prevent duplicate imports by experiment id or hash.
- Show success and validation errors in the UI.
- Add tests for import behavior.

Not included:

- No arbitrary upload.
- No advanced editor.

### Sub-issue 9.7: Add run summary persistence

Label: Feature  
Status: Icebox

Store summaries produced by the runner so dashboards can load them from the platform.

Acceptance criteria:

- Add persistence for run summaries.
- Add an import path from local artifact summary JSON.
- Show persisted run summaries on experiment detail pages.
- Add tests for duplicate handling and validation failures.

Not included:

- No raw event storage in the database.

### Sub-issue 9.8: Add report draft persistence

Label: Feature  
Status: Icebox

Store generated and human-edited report drafts for later review.

Acceptance criteria:

- Add a report drafts table or equivalent model.
- Persist report schema version, source experiment id, source run ids, title, sections, and provenance.
- Add repository functions and basic tests.
- Link report drafts from experiment detail pages.

Not included:

- No collaborative editing.

## Parent Issue 10: Prepare for Model-Backed Agent Controllers

Label: Feature  
Status: Icebox  
Roadmap phase: Cross-cutting AI agent foundation

As a researcher, I want model-backed agents to be configurable and auditable so AI model comparisons can be run safely and reproducibly.

### Sub-issue 10.1: Define agent controller interface

Label: Feature  
Status: Icebox

Separate agent decision-making from Minecraft control details.

Acceptance criteria:

- Define an interface that accepts observations, agent config, memory context, and available actions.
- Return a validated planned action and rationale metadata.
- Add deterministic test controller implementation.
- Document the interface in architecture docs.

Not included:

- No external model provider calls.

### Sub-issue 10.2: Add action safety validator

Label: Feature  
Status: Icebox

Ensure controllers cannot request actions outside experiment constraints.

Acceptance criteria:

- Validate planned actions against allowed actions, world rules, and agent-specific constraints.
- Return structured rejection reasons.
- Emit safety validation events.
- Add tests for allowed and rejected actions.

Not included:

- No content moderation service.

### Sub-issue 10.3: Define memory strategy interfaces

Label: Feature  
Status: Icebox

Prepare for experiments that compare memory approaches.

Acceptance criteria:

- Define no-memory, short-term, summary, episodic, and vector memory interfaces.
- Implement no-memory and short-term in-memory strategies.
- Add tests for retention behavior.
- Document which strategies are implemented versus planned.

Not included:

- No vector database.

### Sub-issue 10.4: Add model provider configuration schema

Label: Feature  
Status: Icebox

Represent model-backed agents without tying the schema to one provider.

Acceptance criteria:

- Add runtime schema for provider name, model name, temperature, token limits, and provider-specific options.
- Validate that model-backed agents include required provider configuration.
- Keep secrets out of experiment definitions.
- Add tests.

Not included:

- No API calls.

### Sub-issue 10.5: Add model prompt and policy documentation

Label: Chore  
Status: Icebox

Document how model prompts should preserve reproducibility and avoid overclaiming.

Acceptance criteria:

- Add `docs/agent-prompting.md`.
- Define required prompt inputs, observation formatting, memory inclusion, allowed action list, and rationale logging.
- Include guardrails for not inventing world state.
- Explain how prompts become part of reproducibility metadata.

Not included:

- No prompt implementation.

### Sub-issue 10.6: Implement a mock model provider

Label: Feature  
Status: Icebox

Exercise the model-backed controller path without external dependencies.

Acceptance criteria:

- Add a mock provider that returns deterministic actions from fixture prompts.
- Integrate it with the controller interface.
- Log prompt input hash and provider response metadata.
- Add tests.

Not included:

- No external model provider.

### Sub-issue 10.7: Add first real model provider spike

Label: Chore  
Status: Icebox

Evaluate the first real LLM integration path with explicit risk controls.

Acceptance criteria:

- Add a spike doc comparing provider options, cost, latency, reliability, and reproducibility.
- Define API key handling requirements.
- Define test strategy that does not require live calls in CI.
- Recommend whether to proceed to implementation.

Not included:

- No production integration.

### Sub-issue 10.8: Implement feature-flagged real model controller

Label: Feature  
Status: Icebox

Add a guarded first model-backed controller after the spike approves the path.

Acceptance criteria:

- Implement one provider behind explicit environment configuration and feature flag.
- Validate and log model responses before action execution.
- Provide manual local test steps.
- Ensure CI does not require provider credentials.

Not included:

- No multi-provider UI.
- No automatic model benchmarking.

## Parent Issue 11: Improve Research Credibility and Prior Work Coverage

Label: Chore  
Status: Icebox  
Roadmap phase: Cross-cutting research foundation

As a student researcher or reviewer, I want the project documentation to acknowledge prior work and define careful research questions so the project reads as serious research engineering.

### Sub-issue 11.1: Expand prior work references

Label: Chore  
Status: Icebox

Make the prior work page more useful without becoming a full literature review.

Acceptance criteria:

- Add concise summaries for Project Malmo, MineRL, MineDojo, Voyager, generative agents, agent-based modeling, and multi-agent systems.
- Include official or stable references where appropriate.
- Clearly state VoxelCivitas is independent and unaffiliated.
- Avoid overstating the relationship to any prior work.

Not included:

- No exhaustive academic bibliography.

### Sub-issue 11.2: Add research methodology notes

Label: Chore  
Status: Icebox

Explain how VoxelCivitas should approach controlled experiments.

Acceptance criteria:

- Add `docs/methodology.md`.
- Cover hypotheses, controls, independent variables, dependent metrics, repeated runs, seeds, limitations, and qualitative observations.
- Link methodology docs from README and research questions.

Not included:

- No statistical analysis implementation.

### Sub-issue 11.3: Add ethics and safety considerations

Label: Chore  
Status: Icebox

Document responsible boundaries for agent simulation research.

Acceptance criteria:

- Add `docs/ethics-and-safety.md`.
- Cover anthropomorphism, overinterpretation, misuse, server safety, cost control, and generated report limitations.
- Include guidance for labeling simulated behavior carefully.

Not included:

- No legal review.

### Sub-issue 11.4: Add evaluation metrics guide

Label: Chore  
Status: Icebox

Help future contributors choose meaningful metrics.

Acceptance criteria:

- Add `docs/evaluation-metrics.md`.
- Define candidate metrics for survival, cooperation, governance, contagion, resource flow, communication, and planning.
- Distinguish raw events from derived metrics.
- Explain interpretability limits.

Not included:

- No implementation changes.

### Sub-issue 11.5: Add example experiment writeups

Label: Chore  
Status: Icebox

Show how a researcher might frame a VoxelCivitas experiment.

Acceptance criteria:

- Add at least two short example writeups under `docs/examples/`.
- One writeup covers cooperation under scarcity.
- One writeup covers contagion or governance.
- Each includes hypothesis, setup, metrics, limitations, and expected artifacts.

Not included:

- No generated results.

### Sub-issue 11.6: Add terminology consistency pass

Label: Bug  
Status: Icebox

Fix inconsistent or misleading project language before the project gets broader attention.

Acceptance criteria:

- Audit README, docs, and landing page copy.
- Replace language that implies implemented simulation capabilities where only plans exist.
- Keep attribution to Mark Jacinto Kropf clear.
- Add a short changelog note for any meaningful language changes.

Not included:

- No major rewrite of project positioning.

## Parent Issue 12: Prepare Release and Portfolio Presentation Milestones

Label: Chore  
Status: Icebox  
Roadmap phase: Cross-cutting release discipline

As the project owner, I want clear release milestones so VoxelCivitas can grow into a credible open-source and college portfolio project.

### Sub-issue 12.1: Define milestone release criteria

Label: Chore  
Status: Icebox

Make each project milestone objectively shippable.

Acceptance criteria:

- Add `docs/release-criteria.md`.
- Define criteria for foundation, schema prototype, local runner prototype, first bot integration, first metrics dashboard, first multi-agent experiment, and first report artifact.
- Include required tests, docs, and demo expectations.

Not included:

- No automated release process.

### Sub-issue 12.2: Add changelog

Label: Chore  
Status: Icebox

Track meaningful project changes as the roadmap progresses.

Acceptance criteria:

- Add `CHANGELOG.md`.
- Use a simple Keep a Changelog-style structure.
- Include the initial foundation entry.
- Link from README.

Not included:

- No automated release notes.

### Sub-issue 12.3: Add project screenshots and media plan

Label: Chore  
Status: Icebox

Prepare for portfolio presentation without fabricating features.

Acceptance criteria:

- Add `docs/media-plan.md`.
- Define screenshots that can be shown today and screenshots that require future implemented features.
- Explain how to label mockups, sample data, and prototypes.
- Avoid promotional claims beyond implemented work.

Not included:

- No new generated images unless a specific asset is requested later.

### Sub-issue 12.4: Add public demo checklist

Label: Chore  
Status: Icebox

Prepare a repeatable checklist for showing the project to reviewers.

Acceptance criteria:

- Add a checklist for local setup, Vercel URL, README review, docs tour, and implemented feature demo.
- Include failure recovery steps.
- Include "what is planned but not implemented" talking points.

Not included:

- No demo video.

### Sub-issue 12.5: Add release tagging workflow plan

Label: Chore  
Status: Icebox

Define how stable snapshots should be tagged.

Acceptance criteria:

- Add docs for version tags and milestone tags.
- Define what must pass before tagging.
- Define how release notes should be written.
- Keep the process manual unless automation becomes useful.

Not included:

- No GitHub release automation.

### Sub-issue 12.6: Add portfolio narrative page

Label: Feature  
Status: Icebox

Create a public page that explains the research-engineering story accurately.

Acceptance criteria:

- Add a route or docs page for project background, goals, technical architecture, and roadmap.
- Emphasize Mark Jacinto Kropf's ownership and independent research-engineering role.
- Link to GitHub, docs, roadmap, and current development status.
- Avoid claiming future simulation features are complete.

Not included:

- No personal biography site.

## Parent Issue 13: Defect Intake for Implemented Behavior

Label: Bug  
Status: Icebox  
Roadmap phase: Ongoing quality

As a maintainer, I want a small bug backlog pattern so defects in implemented behavior can be captured without confusing them with planned features.

### Sub-issue 13.1: Fix broken local or public links when detected

Label: Bug  
Status: Icebox

Use this issue type whenever a link check or reviewer finds broken navigation.

Acceptance criteria:

- Reproduce the broken link.
- Fix the link or remove the unreachable reference.
- Add or update a test/check if the defect can recur.
- Document the affected page or docs file in the PR.

Not included:

- No unrelated copy rewrites.

### Sub-issue 13.2: Fix landing page accessibility defects when detected

Label: Bug  
Status: Icebox

Use this issue type for concrete accessibility failures in implemented pages.

Acceptance criteria:

- Reproduce the accessibility issue with viewport, browser, and assistive context when relevant.
- Fix the smallest surface that resolves the defect.
- Add a smoke test or checklist item when feasible.
- Preserve the academic visual tone.

Not included:

- No broad redesign unless required by the defect.

### Sub-issue 13.3: Fix schema validation defects when detected

Label: Bug  
Status: Icebox

Use this issue type when implemented schema validation accepts invalid data or rejects valid data.

Acceptance criteria:

- Add a failing test that captures the defect.
- Fix validation and affected types.
- Update docs if the intended schema behavior changes.
- Verify existing fixtures still validate or are intentionally updated.

Not included:

- No unrelated schema expansion.

### Sub-issue 13.4: Fix runner artifact corruption or missing metadata when detected

Label: Bug  
Status: Icebox

Use this issue type when implemented runner artifacts are incomplete, invalid, or inconsistent.

Acceptance criteria:

- Reproduce the artifact defect with a minimal fixture.
- Fix writer, validator, or summary generation.
- Add regression tests.
- Document any artifact migration or cleanup requirement.

Not included:

- No new runner capabilities.

### Sub-issue 13.5: Fix dashboard rendering defects when detected

Label: Bug  
Status: Icebox

Use this issue type for concrete dashboard UI or data rendering failures.

Acceptance criteria:

- Reproduce the dashboard defect with a fixture or route.
- Fix rendering, transformation, or empty-state behavior.
- Add a regression test where feasible.
- Preserve accurate labeling of sample versus real data.

Not included:

- No new chart type unless needed to fix the defect.

## Suggested Linear Ordering

1. Parent 0: Establish the Public Project Foundation.
2. Parent 1: Formalize Experiment, Agent, and Metrics Schemas.
3. Parent 2: Build a Local Simulation Runner Prototype.
4. Parent 4: Capture Structured Metrics and Reproducible Logs.
5. Parent 5: Build Dashboard Visualizations for Runs and Comparisons.
6. Parent 3: Integrate an Early Minecraft-Compatible Agent Control Layer.
7. Parent 6: Support Controlled Multi-Agent Experiments.
8. Parent 7: Generate Academic-Style Reports from Runs.
9. Parent 9: Introduce Persistence for Experiments, Runs, and Reports.
10. Parent 10: Prepare for Model-Backed Agent Controllers.
11. Parent 8: Design and Prototype Cloud Server Orchestration.
12. Parent 11: Improve Research Credibility and Prior Work Coverage.
13. Parent 12: Prepare Release and Portfolio Presentation Milestones.
14. Parent 13: Defect Intake for Implemented Behavior.

The ordering intentionally delays expensive cloud orchestration and real model-provider work until schemas, local runner behavior, artifacts, dashboards, and safety boundaries are established.
