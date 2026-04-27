import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CalendarDays, Handshake } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { SessionCard } from "@/components/site/session-card";
import {
  getProjectById,
  getProjectSessions,
  projects,
} from "@/lib/eheros-data";

type ProjectDetailPageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ id: project.id }));
}

export async function generateMetadata({ params }: ProjectDetailPageProps) {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    return {
      title: "Project not found | EHeros",
    };
  }

  return {
    title: `${project.title} | EHeros`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    notFound();
  }

  const projectSessions = getProjectSessions(project.id);

  return (
    <main>
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <Reveal>
          <Button asChild variant="ghost" className="mb-8">
            <Link href="/projects">
              <ArrowLeft className="h-4 w-4" />
              Back to projects
            </Link>
          </Button>
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <Reveal>
            <div>
              <p className="text-accent mb-4 text-sm font-black tracking-[0.32em] uppercase">
                Project details
              </p>
              <h1 className="font-display text-5xl leading-tight font-black tracking-tight sm:text-6xl">
                {project.title}
              </h1>
              <p className="text-muted-foreground mt-6 text-lg leading-8">
                {project.longDescription}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <span className="border-border bg-card inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-bold">
                  <CalendarDays className="text-accent h-4 w-4" />
                  {project.duration}
                </span>
                <span className="border-border bg-card inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-bold">
                  <Handshake className="text-accent h-4 w-4" />
                  {project.sponsors.length} sponsors
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <Card className="overflow-hidden p-3">
              <div className="relative h-[24rem] overflow-hidden rounded-[1.5rem]">
                <Image
                  src={project.thumbnail}
                  alt=""
                  fill
                  priority
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover"
                />
              </div>
            </Card>
          </Reveal>
        </div>

        <Reveal delay={0.12}>
          <Card className="mt-10 p-6">
            <p className="text-accent text-sm font-black tracking-[0.24em] uppercase">
              Sponsors
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              {project.sponsors.map((sponsor) => (
                <div
                  key={sponsor.name}
                  className="border-border bg-muted flex items-center gap-3 rounded-full border px-4 py-2"
                >
                  <span className="bg-primary text-primary-foreground grid h-10 w-10 place-items-center rounded-full text-xs font-black">
                    {sponsor.mark}
                  </span>
                  <span className="text-sm font-bold">{sponsor.name}</span>
                </div>
              ))}
            </div>
          </Card>
        </Reveal>
      </section>

      <section className="bg-muted/55 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Project sessions"
              title="Sessions connected to this project."
              description="Each session carries the project forward through direct participation, mentorship, and hands-on community work."
            />
          </Reveal>
          <div className="mt-12 grid gap-6">
            {projectSessions.map((session, index) => (
              <Reveal key={session.id} delay={index * 0.06}>
                <SessionCard session={session} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
