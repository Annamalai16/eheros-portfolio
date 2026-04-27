import { Calendar, MapPin, Users } from "lucide-react";
import Image from "next/image";

import { Card } from "@/components/ui/card";
import type { Session } from "@/lib/eheros-data";

type SessionCardProps = {
  session: Session;
};

const dateFormatter = new Intl.DateTimeFormat("en", {
  month: "short",
  day: "numeric",
  year: "numeric",
});

export function SessionCard({ session }: SessionCardProps) {
  return (
    <Card className="bg-card/90 grid overflow-hidden md:grid-cols-[15rem_1fr]">
      <div className="relative h-56 md:h-full">
        <Image
          src={session.thumbnail}
          alt=""
          fill
          sizes="(min-width: 768px) 15rem, 100vw"
          className="object-cover"
        />
      </div>
      <div className="space-y-5 p-6">
        <div className="text-muted-foreground flex flex-wrap gap-3 text-xs font-bold tracking-[0.16em] uppercase">
          <span className="inline-flex items-center gap-2">
            <Calendar className="text-accent h-4 w-4" />
            {dateFormatter.format(new Date(session.date))}
          </span>
          <span className="inline-flex items-center gap-2">
            <MapPin className="text-accent h-4 w-4" />
            {session.location}
          </span>
          <span className="inline-flex items-center gap-2">
            <Users className="text-accent h-4 w-4" />
            {session.participants} participants
          </span>
        </div>
        <div>
          <h3 className="font-display text-2xl font-black tracking-tight">
            {session.title}
          </h3>
          <p className="text-muted-foreground mt-3 leading-7">
            {session.description}
          </p>
        </div>
      </div>
    </Card>
  );
}
