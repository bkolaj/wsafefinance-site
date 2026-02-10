import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <div className={cn("max-w-3xl", className)}>
      {eyebrow ? (
        <div className="text-xs font-medium tracking-[0.18em] text-ink/60 dark:text-paper/55">
          {eyebrow}
        </div>
      ) : null}
      <h2 className="mt-3 font-serif text-2xl leading-tight text-ink dark:text-paper sm:text-3xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-base leading-relaxed text-slateText/75 dark:text-paper/70">{description}</p>
      ) : null}
    </div>
  );
}
