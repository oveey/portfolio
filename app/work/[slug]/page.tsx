import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { projects, getProject } from "@/lib/data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";
import CaseGallery from "@/components/CaseGallery";
import GlowBackground from "@/components/GlowBackground";
import { Reveal } from "@/components/motion";
import { asset } from "@/lib/asset";

export function generateStaticParams() {
  return projects
    .filter((p) => p.hasCaseStudy)
    .map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Not found" };
  return {
    title: `${project.title} — ${project.category}`,
    description: project.subtitle,
    openGraph: {
      title: `${project.title} · Case study`,
      description: project.subtitle,
      images: [project.thumb],
    },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project || !project.hasCaseStudy) notFound();

  const idx = projects.findIndex((p) => p.slug === slug);
  const next =
    projects.slice(idx + 1).find((p) => p.hasCaseStudy) ??
    projects.find((p) => p.hasCaseStudy && p.slug !== slug);

  const meta = [
    { label: "Role", value: project.role },
    { label: "Timeline", value: project.timeline },
    { label: "Platform", value: project.platform },
    {
      label: "Live",
      value: project.liveUrl ? project.liveLabel ?? "Visit" : "—",
      href: project.liveUrl ?? undefined,
    },
  ].filter((m) => m.value);

  return (
    <>
      <Navbar />
      <main>
        {/* hero */}
        <section className="relative overflow-hidden pt-36 pb-16">
          <GlowBackground variant="soft" />
          <div className="container-x relative z-10">
            <Reveal>
              <Link
                href="/#work"
                className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
              >
                <span>←</span> All work
              </Link>
            </Reveal>

            <Reveal delay={0.05}>
              <div className="mt-8 flex items-center gap-3 text-sm">
                <span
                  className="rounded-full px-3 py-1 font-medium"
                  style={{
                    background: `${project.accent ?? "#a3ff5e"}1a`,
                    color: project.accent ?? "#a3ff5e",
                  }}
                >
                  {project.category}
                </span>
                <span className="text-faint">{project.year}</span>
                {project.wip && (
                  <span className="rounded-full border border-line px-3 py-1 text-accent">
                    In progress
                  </span>
                )}
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="mt-5 font-display text-[clamp(2.6rem,8vw,5.5rem)] font-semibold leading-[0.98] tracking-tight text-balance">
                {project.title}
              </h1>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-5 max-w-2xl text-lg text-muted text-pretty sm:text-xl">
                {project.subtitle}
              </p>
            </Reveal>

            {/* meta grid */}
            <Reveal delay={0.2}>
              <dl className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-4">
                {meta.map((m) => (
                  <div key={m.label} className="bg-bg-soft p-5">
                    <dt className="text-xs uppercase tracking-wider text-faint">
                      {m.label}
                    </dt>
                    <dd className="mt-1.5 font-medium">
                      {m.href ? (
                        <a
                          href={m.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="link-underline text-accent"
                        >
                          {m.value} ↗
                        </a>
                      ) : (
                        m.value
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </section>

        {/* hero image */}
        <section className="container-x">
          <Reveal>
            <div className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-line sm:aspect-[16/8]">
              <Image
                src={project.thumb}
                alt={project.title}
                fill
                priority
                sizes="(max-width:1280px) 100vw, 1280px"
                className="object-cover object-top"
              />
            </div>
          </Reveal>
        </section>

        {/* narrative */}
        <section className="container-x py-20 sm:py-28">
          <div className="grid gap-14 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <Reveal>
                <h2 className="font-display text-2xl font-semibold tracking-tight">
                  Overview
                </h2>
              </Reveal>
              {project.features && project.features.length > 0 && (
                <Reveal delay={0.1}>
                  <ul className="mt-8 space-y-3">
                    {project.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-muted">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              )}
            </div>

            <div className="space-y-10">
              <Reveal>
                <p className="text-lg leading-relaxed text-muted text-pretty sm:text-xl">
                  {project.overview}
                </p>
              </Reveal>

              {project.process && (
                <Reveal delay={0.05}>
                  <div>
                    <h3 className="mb-4 font-display text-xl font-semibold text-accent">
                      The process
                    </h3>
                    <p className="text-lg leading-relaxed text-muted text-pretty">
                      {project.process}
                    </p>
                  </div>
                </Reveal>
              )}

              {project.results && (
                <Reveal delay={0.05}>
                  <div className="rounded-2xl border border-line bg-surface p-6">
                    <h3 className="mb-2 text-sm uppercase tracking-wider text-faint">
                      Outcome
                    </h3>
                    <p className="text-lg text-fg text-pretty">{project.results}</p>
                  </div>
                </Reveal>
              )}
            </div>
          </div>
        </section>

        {/* video */}
        {project.video && (
          <section className="container-x pb-20">
            <Reveal>
              <div className="overflow-hidden rounded-3xl border border-line">
                <video
                  className="w-full"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="none"
                >
                  <source src={asset(project.video)} type="video/mp4" />
                </video>
              </div>
            </Reveal>
          </section>
        )}

        {/* gallery */}
        {project.gallery && project.gallery.length > 0 ? (
          <section className="container-x pb-24">
            <Reveal>
              <div className="mb-10 flex items-end justify-between">
                <h2 className="font-display text-2xl font-semibold tracking-tight">
                  Screens
                </h2>
                <span className="text-sm text-faint">
                  {project.gallery.length} screens · click to expand
                </span>
              </div>
            </Reveal>
            <CaseGallery shots={project.gallery} />
          </section>
        ) : (
          project.wip && (
            <section className="container-x pb-24">
              <div className="rounded-3xl border border-dashed border-line-strong bg-surface p-12 text-center">
                <p className="font-display text-xl font-semibold">
                  Full case study coming soon
                </p>
                <p className="mx-auto mt-3 max-w-md text-muted">
                  This project is still in progress — detailed screens and
                  process notes are on the way.
                </p>
              </div>
            </section>
          )
        )}

        {/* next project */}
        {next && (
          <section className="border-t border-line">
            <Link
              href={`/work/${next.slug}`}
              className="group block py-16 transition-colors hover:bg-white/[0.02]"
            >
              <div className="container-x flex items-center justify-between gap-6">
                <div>
                  <p className="text-sm text-faint">Next project</p>
                  <p className="mt-2 font-display text-3xl font-semibold tracking-tight sm:text-5xl">
                    {next.title}
                  </p>
                </div>
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full border border-line-strong text-xl transition-all group-hover:bg-accent group-hover:text-black">
                  →
                </span>
              </div>
            </Link>
          </section>
        )}
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
