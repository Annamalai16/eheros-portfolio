import { CalendarDays } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Card } from "@/components/ui/card";
import type { Project } from "@/lib/eheros-data";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.id}`} className="group block h-full">
      <Card className="bg-card/90 h-full overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_28px_80px_rgba(17,74,61,0.16)]">
        <div className="relative h-60 overflow-hidden">
          <Image
            src={project.thumbnail}
            alt=""
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
          <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 text-xs font-bold text-slate-900 backdrop-blur">
            <CalendarDays className="h-3.5 w-3.5" />
            {project.duration}
          </div>
        </div>
        <div className="space-y-5 p-6">
          <div>
            <h3 className="font-display text-2xl font-black tracking-tight">
              {project.title}
            </h3>
            <p className="text-muted-foreground mt-3 text-sm leading-6">
              {project.description}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {project.sponsors.map((sponsor) => (
              <span
                key={sponsor.name}
                title={sponsor.name}
                className="border-border bg-muted text-muted-foreground grid h-9 w-9 place-items-center rounded-full border text-[0.65rem] font-black"
              >
                {sponsor.mark}
              </span>
            ))}
            <span className="text-muted-foreground text-xs font-semibold">
              Sponsored partners
            </span>
          </div>
        </div>
      </Card>
    </Link>
  );
}
