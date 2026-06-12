export function PageHeader({ kicker, title, subtitle }: { kicker?: string; title: string; subtitle?: string }) {
  return (
    <section className="relative -mt-20 pt-36 pb-20 bg-hero-gradient text-white overflow-hidden">
      <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "32px 32px" }} />
      <div className="container-x relative text-center max-w-3xl">
        {kicker && (
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[var(--gold)]">
            <span className="h-px w-8 bg-[var(--gold)]" /> {kicker}
          </div>
        )}
        <h1 className="mt-4 font-display text-4xl md:text-6xl font-black text-balance">{title}</h1>
        {subtitle && <p className="mt-5 text-lg text-white/80 leading-relaxed">{subtitle}</p>}
      </div>
    </section>
  );
}
