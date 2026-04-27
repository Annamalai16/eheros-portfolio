import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-3xl", className)}>
      <p className="text-accent mb-3 text-sm font-black tracking-[0.32em] uppercase">
        {eyebrow}
      </p>
      <h2 className="font-display text-foreground text-4xl font-black tracking-tight sm:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="text-muted-foreground mt-5 text-lg leading-8">
          {description}
        </p>
      ) : null}
    </div>
  );
}
