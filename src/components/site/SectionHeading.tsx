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
  return (
    <div className={align === "center" ? "text-center max-w-2xl mx-auto" : "max-w-2xl"}>
      {kicker && (
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[var(--secondary)]">
          <span className="h-px w-8 bg-[var(--gold)]" /> {kicker}
        </div>
      )}
      <h2 className="mt-3 font-display text-3xl md:text-4xl font-black text-navy text-balance">{title}</h2>
      {subtitle && <p className="mt-3 text-muted-foreground leading-relaxed">{subtitle}</p>}
    </div>
  );
}
