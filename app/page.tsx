import Image from "next/image";
import { SectionHeading } from "@/components/section-heading";
import {
  architecturePillars,
  experimentCategories,
  plannedCapabilities,
  workflowSteps,
} from "@/lib/site";

export default function Home() {
  return (
    <main>
      <section className="relative isolate min-h-[78svh] overflow-hidden bg-[#0d1613] text-white">
        <Image
          src="/images/voxelcivitas-hero.png"
          alt="An instrumented voxel world with a settlement, agent markers, and research data overlays."
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 -z-20 object-cover object-center"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(10,15,13,0.92)_0%,rgba(10,15,13,0.78)_34%,rgba(10,15,13,0.38)_68%,rgba(10,15,13,0.22)_100%)]" />
        <div className="mx-auto flex w-full max-w-7xl flex-col px-6 py-6 sm:px-8 lg:px-10">
          <header className="flex flex-wrap items-center justify-between gap-4">
            <a className="focus-ring text-lg font-semibold" href="#top" aria-label="VoxelCivitas home">
              VoxelCivitas
            </a>
            <nav className="flex flex-wrap items-center gap-3 text-sm text-white/80" aria-label="Primary">
              <a className="focus-ring rounded px-2 py-1 transition hover:text-white" href="#workflow">
                Workflow
              </a>
              <a className="focus-ring rounded px-2 py-1 transition hover:text-white" href="#experiments">
                Experiments
              </a>
              <a className="focus-ring rounded px-2 py-1 transition hover:text-white" href="#status">
                Status
              </a>
              <a
                className="focus-ring rounded border border-white/30 px-3 py-1.5 text-white transition hover:border-white/70"
                href="https://github.com/markjkropf/voxelcivitas"
              >
                GitHub
              </a>
            </nav>
          </header>

          <div id="top" className="max-w-3xl pb-16 pt-20 sm:pb-20 sm:pt-28 lg:pt-32">
            <p className="hero-shadow text-sm font-semibold uppercase text-[#9fe5d9]">
              Early-stage open-source research engineering project
            </p>
            <h1 className="hero-shadow mt-5 text-5xl font-semibold leading-none sm:text-6xl lg:text-7xl">
              VoxelCivitas
            </h1>
            <p className="hero-shadow mt-6 max-w-2xl text-2xl font-medium leading-tight text-white sm:text-3xl">
              A virtual civilization lab for agent-based research.
            </p>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/84 sm:text-lg">
              VoxelCivitas aims to become a web-based platform for designing,
              running, instrumenting, and analyzing controlled multi-agent
              experiments in Minecraft-compatible virtual worlds.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                className="focus-ring rounded bg-white px-5 py-3 text-sm font-semibold text-[#0d1613] transition hover:bg-[#e5f4ef]"
                href="#workflow"
              >
                Explore the research workflow
              </a>
              <a
                className="focus-ring rounded border border-white/35 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/75"
                href="https://github.com/markjkropf/voxelcivitas/blob/main/docs/roadmap.md"
              >
                Read the roadmap
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="workflow" className="border-b border-[color:var(--line)] bg-[#f5f7f1] px-6 py-18 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Research workflow"
            title="From hypothesis to reproducible run analysis"
            description="The first milestone is a deployable project foundation. The planned workflow below describes the direction of the platform, not completed simulation functionality."
          />
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {workflowSteps.map((step, index) => (
              <article
                key={step.title}
                className="rounded border border-[color:var(--line)] bg-white p-6 shadow-[0_1px_0_rgba(13,22,19,0.05)]"
              >
                <p className="text-sm font-semibold text-[color:var(--gold)]">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-4 text-xl font-semibold text-[color:var(--ink)]">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="experiments" className="bg-white px-6 py-18 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Experiment categories"
            title="Programmable societies in controlled virtual worlds"
            description="Minecraft-compatible environments provide spatial rules, persistent state, resources, terrain, and agent interaction surfaces that are useful for studying complex behavior under repeatable conditions."
          />
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {experimentCategories.map((category) => (
              <article
                key={category.title}
                className="rounded border border-[color:var(--line)] bg-[#fbfcf8] p-6"
              >
                <h3 className="text-lg font-semibold text-[color:var(--ink)]">
                  {category.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">
                  {category.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[color:var(--line)] bg-[#13251f] px-6 py-18 text-white sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase text-[#8bd9cf]">
              Planned capabilities
            </p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
              A web-native research platform, built in phases
            </h2>
            <p className="mt-5 text-base leading-8 text-white/76">
              The near-term foundation is the website, documentation, and draft
              experiment schemas. The simulation runner, Minecraft control
              layer, metrics pipeline, dashboards, and report generation are
              planned platform capabilities.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {plannedCapabilities.map((capability) => (
              <div
                key={capability}
                className="rounded border border-white/14 bg-white/6 px-4 py-4 text-sm font-medium text-white/90"
              >
                {capability}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#eef4ed] px-6 py-18 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Architecture direction"
            title="Clear boundaries for a platform that can grow"
            description="VoxelCivitas is organized around a Vercel-hosted web application and a future runner layer that can execute controlled simulations locally or in cloud environments."
          />
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {architecturePillars.map((pillar) => (
              <article
                key={pillar.label}
                className="rounded border border-[color:var(--line)] bg-white p-5"
              >
                <h3 className="text-base font-semibold text-[color:var(--accent-strong)]">
                  {pillar.label}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">
                  {pillar.detail}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-18 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase text-[color:var(--accent-strong)]">
              Prior work and inspiration
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-[color:var(--ink)] sm:text-4xl">
              Extending a research lineage
            </h2>
          </div>
          <div className="text-base leading-8 text-[color:var(--muted)]">
            <p>
              Microsoft Project Malmo demonstrated that Minecraft could serve
              as a platform for AI experimentation. VoxelCivitas is inspired by
              that direction while aiming toward a modern, web-native layer for
              experiment design, orchestration, data collection, visualization,
              reproducibility, and report generation.
            </p>
            <p className="mt-5">
              The project also draws from MineRL, MineDojo, Voyager, generative
              agent research, agent-based modeling, and multi-agent systems
              research. It is independent and is not affiliated with those
              projects.
            </p>
          </div>
        </div>
      </section>

      <section id="status" className="bg-[#0d1613] px-6 py-16 text-white sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase text-[#8bd9cf]">
                Development status
              </p>
              <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
                Foundation first, simulation engine later
              </h2>
            </div>
            <p className="text-base leading-8 text-white/76">
              VoxelCivitas is currently an early-stage open-source project by
              Mark Jacinto Kropf. This repository establishes the public
              website, documentation, and initial TypeScript schema direction.
              It does not yet implement live Minecraft server orchestration,
              agent control, metrics ingestion, or report generation.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
