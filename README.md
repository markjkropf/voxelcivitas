# VoxelCivitas

**A virtual civilization lab for agent-based research.**

VoxelCivitas is an early-stage open-source research engineering project that aims to become a web-based platform for designing, running, instrumenting, and analyzing controlled multi-agent experiments inside Minecraft-compatible virtual worlds.

The long-term vision is to help researchers define experiments, configure AI agents, launch repeatable simulations, collect structured behavioral data, visualize emergent patterns, compare experimental runs, and generate academic-style research reports.

Created by **Mark Jacinto Kropf** as an independent research engineering project.

## Current Status

This repository currently contains the project foundation:

- a deployable Next.js and TypeScript web app,
- a polished landing page,
- initial research and architecture documentation,
- draft TypeScript schemas for experiments, agents, and metrics,
- and one non-runnable example experiment definition.

It does **not** yet implement live Minecraft server orchestration, Mineflayer agent control, metrics ingestion, dashboard analytics, or report generation. Those capabilities are planned future work.

## Why Minecraft-Compatible Worlds?

Minecraft-compatible environments provide spatial structure, resources, terrain, persistence, physics-like constraints, and interaction surfaces that can be useful for studying multi-agent behavior. VoxelCivitas treats these worlds as controllable research environments rather than game servers or mods.

The project is positioned as:

> A research platform for programmable societies in virtual worlds.

## Planned Research Areas

- AI model benchmarking
- Multi-agent cooperation and competition
- Governance systems
- Economic systems and resource scarcity
- Epidemiology and contagion spread
- Social hierarchies and communication strategies
- Group survival and biological success criteria
- Emergent behavior in long-running virtual civilizations

## Planned Workflow

1. Design an experiment.
2. Configure agents.
3. Launch a world.
4. Collect metrics.
5. Compare runs.
6. Generate reports.

## Technology Direction

- TypeScript
- Next.js App Router
- React
- Tailwind CSS
- pnpm
- Vercel
- PostgreSQL later, likely through Neon, Supabase, or Vercel Postgres
- Prisma or Drizzle later
- Recharts or a similar charting library later
- Mineflayer or a related Minecraft bot/control layer later
- Local and cloud simulation runners later

## Getting Started

Install dependencies:

```bash
pnpm install
```

Run the development server:

```bash
pnpm dev
```

Open `http://localhost:3000`.

Run the production build:

```bash
pnpm build
```

Run the TypeScript checker:

```bash
pnpm typecheck
```

## Repository Structure

```text
app/                    Next.js App Router pages and global styles
components/             Shared React components
docs/                   Research, roadmap, and architecture notes
experiments/examples/   Draft experiment definitions
lib/                    Site content and shared constants
public/images/          Project visual assets
schemas/                Draft TypeScript schemas
```

## Documentation

- [Prior Work](docs/prior-work.md)
- [Roadmap](docs/roadmap.md)
- [Architecture](docs/architecture.md)
- [Research Questions](docs/research-questions.md)

## Prior Work

VoxelCivitas is inspired by Microsoft Project Malmo, which showed that Minecraft could be used as a serious platform for AI experimentation and research. The project also draws from MineRL, MineDojo, Voyager, generative agents, agent-based modeling, and multi-agent systems research.

VoxelCivitas is independent and is not affiliated with Microsoft, Project Malmo, MineRL, MineDojo, or Voyager.

## License

VoxelCivitas is open-source under the [MIT License](LICENSE).

This project is intended to support open research, reproducible experimentation, and educational exploration of agent-based simulations in virtual worlds.
