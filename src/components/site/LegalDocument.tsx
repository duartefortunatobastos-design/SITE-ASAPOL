import type { ReactNode } from "react";
import { RevealOnScroll } from "@/components/site/RevealOnScroll";
import { cn } from "@/lib/utils";

export function LegalSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="flex items-center gap-3 font-display text-xl font-bold text-navy">
        <span
          className="inline-flex h-[3px] w-8 shrink-0 overflow-hidden rounded-full"
          aria-hidden
        >
          <span className="flex-1 bg-pt-green" />
          <span className="flex-1 bg-[var(--asapol-red-light)]" />
          <span className="flex-1 bg-pt-red" />
        </span>
        {title}
      </h2>
      <div className="mt-3 space-y-3">{children}</div>
    </section>
  );
}

export function LegalMetaBox({ children }: { children: ReactNode }) {
  return (
    <dl className="grid gap-3 rounded-xl border border-[color-mix(in_oklab,var(--brand)_18%,transparent)] bg-[color-mix(in_oklab,var(--brand)_6%,white)] p-5 text-sm not-prose">
      {children}
    </dl>
  );
}

export function LegalMetaItem({ label, value }: { label: string; value: ReactNode }) {
  return (
    <div className="flex flex-wrap gap-x-2">
      <dt className="font-semibold text-navy">{label}</dt>
      <dd className="text-muted-foreground">{value}</dd>
    </div>
  );
}

export function LegalLink({
  href,
  children,
  external,
}: {
  href: string;
  children: ReactNode;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      className="font-medium text-brand underline underline-offset-2 transition hover:text-[var(--brand-dark)]"
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}

export function LegalDocument({
  title,
  updatedAt,
  children,
}: {
  title: string;
  updatedAt?: string;
  children: ReactNode;
}) {
  return (
    <section className="section">
      <div className="container-x max-w-4xl">
        <RevealOnScroll>
          <article className="overflow-hidden rounded-2xl border border-border bg-card shadow-elegant">
            <div className="h-1.5 bg-pt-gradient" />
            <div className="p-8 md:p-12">
              <div className="inline-flex items-center gap-2 rounded-full bg-[color-mix(in_oklab,var(--brand)_8%,white)] px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand ring-1 ring-[color-mix(in_oklab,var(--brand)_15%,transparent)]">
                Legal
              </div>
              <h1 className="mt-4 font-display text-3xl font-black text-navy md:text-4xl">
                {title}
              </h1>
              {updatedAt && (
                <p className="mt-3 text-sm text-muted-foreground">
                  Última atualização: {updatedAt}
                </p>
              )}
              <div className="prose-legal mt-8 space-y-8 text-muted-foreground leading-relaxed">
                {children}
              </div>
            </div>
          </article>
        </RevealOnScroll>
      </div>
    </section>
  );
}

export function LegalNote({ children }: { children: ReactNode }) {
  return (
    <p
      className={cn(
        "rounded-xl border border-[color-mix(in_oklab,var(--brand)_12%,transparent)]",
        "bg-[color-mix(in_oklab,var(--brand)_4%,white)] p-5 text-sm italic",
      )}
    >
      {children}
    </p>
  );
}
