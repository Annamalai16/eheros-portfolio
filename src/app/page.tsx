import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CalendarDays, Mail, MapPin, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ProjectCard } from "@/components/site/project-card";
import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import {
  galleryImages,
  getProjectForSession,
  projects,
  teamMembers,
  upcomingSessions,
} from "@/lib/eheros-data";

const dateFormatter = new Intl.DateTimeFormat("en", {
  month: "short",
  day: "numeric",
});

const latestProjects = projects.slice(0, 3);

export default function HomePage() {
  return (
    <main>
      <section
        className="grain relative isolate min-h-[calc(100vh-4.75rem)] overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(5,16,13,0.86), rgba(5,16,13,0.46)), url('https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1800&q=85')",
        }}
      >
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_78%_18%,rgba(245,210,123,0.28),transparent_22rem)]" />
        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-4.75rem)] max-w-7xl items-center px-4 py-24 sm:px-6 lg:px-8">
          <Reveal className="max-w-4xl text-white">
            <p className="mb-5 inline-flex rounded-full border border-white/25 bg-white/12 px-4 py-2 text-sm font-bold tracking-[0.24em] uppercase backdrop-blur">
              Volunteer-powered community impact
            </p>
            <h1 className="font-display text-5xl leading-[0.95] font-black tracking-tight sm:text-7xl lg:text-8xl">
              EHeros turns local care into lasting community projects.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/82 sm:text-xl">
              We organize practical sessions across education, wellness,
              sustainability, storytelling, and career readiness so neighbors
              can learn, serve, and grow together.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href="#projects">
                  Explore Projects <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/35 bg-white/10 text-white hover:bg-white/20"
              >
                <Link href="#contact">Join a Session</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section
        id="about"
        className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8"
      >
        <Reveal>
          <SectionHeading
            eyebrow="About us"
            title="Built for neighbors who show up."
            description="EHeros is a community organization that designs approachable programs with clear outcomes, trusted partners, and space for every volunteer to contribute."
          />
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <Reveal delay={0.08}>
            <Card className="h-full p-8">
              <p className="text-accent text-sm font-black tracking-[0.28em] uppercase">
                Mission
              </p>
              <h3 className="font-display mt-5 text-3xl font-black">
                Equip people with the skills, confidence, and relationships to
                improve the places they call home.
              </h3>
              <p className="text-muted-foreground mt-5 leading-8">
                We create project-based sessions that connect learning with
                action, pairing community needs with practical workshops,
                mentorship, and service.
              </p>
            </Card>
          </Reveal>
          <Reveal delay={0.16}>
            <Card className="h-full p-8">
              <p className="text-accent text-sm font-black tracking-[0.28em] uppercase">
                Vision
              </p>
              <h3 className="font-display mt-5 text-3xl font-black">
                A city where every young person can find a project, a mentor,
                and a meaningful way to lead.
              </h3>
              <p className="text-muted-foreground mt-5 leading-8">
                We imagine neighborhoods where creativity, civic care, and
                everyday leadership are visible, celebrated, and easy to join.
              </p>
            </Card>
          </Reveal>
        </div>
      </section>

      <section id="sessions" className="bg-muted/55 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Upcoming sessions"
              title="Next chances to learn and serve."
              description="Each session belongs to a larger project, keeping the work focused while making it easy for new volunteers to join."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {upcomingSessions.map((session, index) => {
              const project = getProjectForSession(session);
              const date = dateFormatter.format(new Date(session.date));
              const [month = "", day = ""] = date.split(" ");

              return (
                <Reveal key={session.id} delay={index * 0.08}>
                  <Card className="relative overflow-hidden p-6">
                    <div className="bg-secondary/70 absolute top-0 right-0 h-32 w-32 rounded-bl-[4rem]" />
                    <div className="relative flex flex-col gap-6 sm:flex-row">
                      <div className="bg-primary text-primary-foreground shadow-primary/20 grid h-32 w-32 shrink-0 place-items-center rounded-[2rem] shadow-xl">
                        <div className="text-center">
                          <span className="block text-sm font-black tracking-[0.3em] uppercase">
                            {month}
                          </span>
                          <span className="font-display text-5xl font-black">
                            {day}
                          </span>
                        </div>
                      </div>
                      <div>
                        <p className="text-accent text-sm font-bold tracking-[0.2em] uppercase">
                          {project?.title ?? "EHeros Project"}
                        </p>
                        <h3 className="font-display mt-3 text-3xl font-black tracking-tight">
                          {session.title}
                        </h3>
                        <p className="text-muted-foreground mt-3 leading-7">
                          {session.description}
                        </p>
                        <p className="mt-5 inline-flex items-center gap-2 text-sm font-bold">
                          <MapPin className="text-accent h-4 w-4" />
                          {session.location}
                        </p>
                      </div>
                    </div>
                  </Card>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section
        id="projects"
        className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8"
      >
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <Reveal>
            <SectionHeading
              eyebrow="Latest projects"
              title="Focused initiatives with real momentum."
              description="Explore the newest EHeros projects and the sponsors helping each effort reach more people."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <Button asChild variant="secondary">
              <Link href="/projects">
                See More <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </Reveal>
        </div>
        <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {latestProjects.map((project, index) => (
            <Reveal key={project.id} delay={index * 0.08}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </section>

      <section id="gallery" className="bg-muted/55 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Gallery"
              title="A living record of community energy."
              description="Moments from workshops, service days, mentor sessions, and neighborhood celebrations."
            />
          </Reveal>
          <div className="mt-12 grid auto-rows-[14rem] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {galleryImages.map((image, index) => (
              <Reveal
                key={image.src}
                delay={index * 0.04}
                className={index === 0 || index === 4 ? "lg:row-span-2" : ""}
              >
                <div className="border-border bg-card relative h-full overflow-hidden rounded-[2rem] border shadow-xl">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition duration-700 hover:scale-105"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section
        id="team"
        className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8"
      >
        <Reveal>
          <SectionHeading
            eyebrow="Our team"
            title="The people shaping each project."
            description="EHeros is led by organizers, mentors, and partners who believe community work should be warm, rigorous, and easy to enter."
          />
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <Reveal key={member.name} delay={index * 0.07}>
              <Card className="group overflow-hidden p-4 text-center">
                <div className="relative mx-auto h-56 overflow-hidden rounded-[1.5rem]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition duration-500 group-hover:scale-105 group-hover:saturate-125"
                  />
                </div>
                <h3 className="font-display mt-5 text-2xl font-black">
                  {member.name}
                </h3>
                <p className="text-muted-foreground mt-1 text-sm font-semibold tracking-[0.2em] uppercase">
                  {member.role}
                </p>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="contact" className="bg-foreground text-background py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <Reveal>
            <p className="text-secondary mb-4 text-sm font-black tracking-[0.32em] uppercase">
              Contact us
            </p>
            <h2 className="font-display text-4xl font-black tracking-tight sm:text-5xl">
              Ready to bring a project or session to life?
            </h2>
            <p className="text-background/72 mt-5 text-lg leading-8">
              Tell us about your interests, partnership ideas, or volunteer
              availability. The EHeros team will follow up with a clear next
              step.
            </p>
            <div className="text-background/80 mt-8 space-y-4 text-sm font-semibold">
              <p className="flex items-center gap-3">
                <Mail className="text-secondary h-5 w-5" />
                hello@eheroes.org
              </p>
              <p className="flex items-center gap-3">
                <Phone className="text-secondary h-5 w-5" />
                (555) 014-2026
              </p>
              <p className="flex items-center gap-3">
                <CalendarDays className="text-secondary h-5 w-5" />
                Sessions run every month across partner sites
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <Card className="bg-background text-foreground p-6 sm:p-8">
              <form className="grid gap-5">
                <div className="grid gap-2">
                  <label htmlFor="name" className="text-sm font-bold">
                    Name
                  </label>
                  <Input id="name" name="name" placeholder="Your name" />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="email" className="text-sm font-bold">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                  />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="message" className="text-sm font-bold">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us how you would like to get involved."
                  />
                </div>
                <Button type="submit" size="lg">
                  Send Message
                </Button>
              </form>
            </Card>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
