# Architecture

VoxelCivitas is planned as a web-native research platform with a clear separation between the web application, experiment definitions, simulation execution, agent control, metrics collection, and reporting.

The current repository contains the website foundation, documentation, and draft schema direction. The simulation runner and Minecraft integration are planned and are not yet implemented.

## Planned System Overview

```text
Researcher
  |
  v
Vercel Web App
  |
  +--> Experiment Configuration UI
  |
  +--> Database
  |
  +--> Dashboard and Reporting System
  |
  v
Simulation Runner
  |
  +--> Minecraft-Compatible Server
  |
  +--> Agent Controller
  |
  +--> Metrics Collector
```

## Vercel Web App

The web app is planned as a Next.js App Router application deployed on Vercel. Its early responsibilities are:

- presenting the project clearly,
- documenting the research direction,
- defining experiment and agent schemas,
- and eventually providing experiment configuration and run analysis interfaces.

## Experiment Configuration UI

The future configuration UI should let researchers define:

- hypotheses,
- world settings,
- agent populations,
- task goals,
- social rules,
- model settings,
- run counts,
- metrics of interest,
- and comparison conditions.

The UI should produce structured experiment definitions rather than one-off manual setup steps.

## Database

VoxelCivitas will likely use PostgreSQL through Neon, Supabase, or Vercel Postgres. Prisma or Drizzle may be introduced when persistence becomes necessary.

Planned persisted data includes:

- experiments,
- agent definitions,
- simulation runs,
- behavioral events,
- run artifacts,
- metrics summaries,
- dashboard views,
- and report drafts.

## Simulation Runner

The simulation runner is the execution boundary between the web platform and a Minecraft-compatible world. The first runner should probably be local-first so researchers can inspect behavior before cloud orchestration is introduced.

Planned responsibilities include:

- receiving experiment definitions,
- preparing run directories,
- launching or connecting to a world,
- coordinating agent controllers,
- collecting metrics,
- writing logs and artifacts,
- and reporting run state back to the web app.

## Minecraft-Compatible Server

The server layer will provide the environment where agents act. Long term, VoxelCivitas may support cloud-launched dedicated servers and local servers started by researchers.

Early work should keep this layer small and explicit.

## Agent Controller

The agent controller will translate experiment goals and agent definitions into actions in the world. Mineflayer or a related control layer is a likely early integration path.

Agent definitions may include:

- goals,
- model provider and model name,
- intelligence profile,
- memory strategy,
- communication permissions,
- allowed actions,
- social rules,
- and evaluation criteria.

## Metrics Collector

The metrics collector should capture structured data that can be compared across repeated runs.

Candidate event categories include:

- agent movement,
- resource collection,
- inventory changes,
- proximity events,
- communication events,
- health and survival state,
- construction or world modifications,
- rule violations,
- task completion,
- and run-level outcomes.

## Dashboard and Reporting System

The dashboard and reporting layer should turn collected data into reproducible analysis artifacts. It should distinguish raw metrics, derived statistics, human notes, and generated narrative summaries.

Future reports should be editable, inspectable, and tied back to experiment definitions and run logs.
