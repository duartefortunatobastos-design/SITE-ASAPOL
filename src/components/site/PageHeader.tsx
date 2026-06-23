import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import { BannerStagger, BannerSurface } from "@/components/site/BannerSurface";

type BreadcrumbItem = { to?: string; label: string };

const PARENT_ROUTES: Record<string, string> = {
  "Quem Somos": "/quem-somos",
  Associados: "/associados",
  Protocolos: "/associados/protocolos",
};

function buildBreadcrumb(
  kicker: string | undefined,
  title: string,
  breadcrumb?: BreadcrumbItem[],
  breadcrumbLabel?: string,
): BreadcrumbItem[] {
  if (breadcrumb) return breadcrumb;

  if (breadcrumbLabel) return [{ label: breadcrumbLabel }];

  if (
    kicker &&
    title !== kicker &&
    title.length <= 40 &&
    PARENT_ROUTES[kicker]
  ) {
    return [
      { to: PARENT_ROUTES[kicker], label: kicker },
      { label: title },
    ];
  }

  return [{ label: kicker ?? title }];
}

export function PageHeader({
  kicker,
  title,
  subtitle,
  breadcrumb,
  breadcrumbLabel,
}: {
  kicker?: string;
  title: string;
  subtitle?: string;
  breadcrumb?: BreadcrumbItem[];
  breadcrumbLabel?: string;
}) {
  const crumbs = buildBreadcrumb(kicker, title, breadcrumb, breadcrumbLabel);

  return (
    <BannerSurface as="section" className="-mt-20 pt-36 pb-20">
      <div className="container-x relative">
        <BannerStagger variant="fade-in" delay={60}>
          <nav
            aria-label="Breadcrumb"
            className="mb-6 flex flex-wrap items-center gap-1 text-xs text-white/70"
          >
            <Link to="/" className="transition hover:text-white">
              Início
            </Link>
            {crumbs.map((crumb) => (
              <span key={crumb.label} className="inline-flex items-center gap-1">
                <ChevronRight size={12} className="text-white/40" aria-hidden />
                {crumb.to ? (
                  <Link to={crumb.to} className="transition hover:text-white">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-white">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        </BannerStagger>

        <div className="mx-auto max-w-3xl text-center">
          <BannerStagger delay={140}>
            <h1 className="font-display text-4xl font-black text-balance md:text-6xl">{title}</h1>
          </BannerStagger>
          {subtitle && (
            <BannerStagger delay={240}>
              <p className="mt-5 text-lg leading-relaxed text-white/80">{subtitle}</p>
            </BannerStagger>
          )}
        </div>
      </div>
    </BannerSurface>
  );
}
