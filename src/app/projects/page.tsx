import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/site/project-card";
import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { projects } from "@/lib/eheros-data";

export default function ProjectsPage() {
  return (
    <main>
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <Reveal>
          <Button asChild variant="ghost" className="mb-8">
            <Link href="/">
              <ArrowLeft className="h-4 w-4" />
              Back home
            </Link>
          </Button>
          <SectionHeading
            eyebrow="All projects"
            title="Every EHeros initiative in one place."
            description="Browse active projects across learning, service, health, creative storytelling, and career readiness. Each project connects to multiple community sessions."
          />
        </Reveal>
        <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={index * 0.06}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
