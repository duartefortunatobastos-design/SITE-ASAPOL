import { PortugalAccent } from "@/components/site/PortugalAccent";
import { RevealOnScroll } from "@/components/site/RevealOnScroll";
import { cn } from "@/lib/utils";

export function SectionHeading({
  kicker,
  title,
  subtitle,
  align = "center",
}: {
  kicker?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}) {
  const centered = align === "center";

  return (
    <div className={centered ? "text-center max-w-2xl mx-auto" : "max-w-2xl"}>
      {kicker && (
        <RevealOnScroll animation="animate-fade-in">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-brand">
            <PortugalAccent /> {kicker}
          </div>
        </RevealOnScroll>
      )}
      <RevealOnScroll delay={80}>
        <h2 className="mt-3 font-display text-3xl md:text-4xl font-black text-navy text-balance">
          {title}
        </h2>
      </RevealOnScroll>
      <RevealOnScroll
        delay={160}
        animation="animate-scale-x-in"
        className={cn("mt-3 w-14", centered ? "mx-auto" : "inline-block")}
      >
        <div className="h-1 w-full rounded-full bg-[var(--pt-red)]" aria-hidden />
      </RevealOnScroll>
      {subtitle && (
        <RevealOnScroll delay={240}>
          <p className="mt-3 text-muted-foreground leading-relaxed">{subtitle}</p>
        </RevealOnScroll>
      )}
    </div>
  );
}
