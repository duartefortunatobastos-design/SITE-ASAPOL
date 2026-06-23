import asapolLogo from "@/assets/asapol-logo.png";
import asapolEmblem from "@/assets/asapol-emblem.png";
import asapolLogoHero from "@/assets/asapol-logo-hero.jpg";
import { cn } from "@/lib/utils";

const alt = "ASAPOL — Associação Sindical Autónoma de Polícia";

export function AsapolLogo({
  className,
  variant = "full",
}: {
  className?: string;
  variant?: "full" | "emblem" | "hero";
}) {
  const src =
    variant === "hero" ? asapolLogoHero : variant === "emblem" ? asapolEmblem : asapolLogo;

  return (
    <img
      src={src}
      alt={alt}
      className={cn(
        "shrink-0",
        variant === "full" && "object-contain",
        (variant === "emblem" || variant === "hero") && "rounded-full object-cover",
        className,
      )}
    />
  );
}
