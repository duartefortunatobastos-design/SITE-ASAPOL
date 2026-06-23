import { createFileRoute, notFound } from "@tanstack/react-router";
import {
  ProtocolDetailView,
  protocolPageMeta,
  resolveProtocolPageContent,
} from "@/components/site/ProtocolDetailView";
import { getProtocolDetailByName } from "@/lib/protocolos-details";
import { findProtocolMetaBySlug } from "@/lib/protocolos-shared";

export const Route = createFileRoute("/associados/protocolos/$slug")({
  loader: ({ params }) => {
    const protocol = findProtocolMetaBySlug(params.slug);
    if (!protocol) throw notFound();

    const detail = getProtocolDetailByName(protocol.name);
    const { title, subtitle, label, description } = resolveProtocolPageContent(
      protocol.name,
      protocol.regionName,
      detail,
    );

    return { protocol, detail, title, subtitle, label, description };
  },
  head: ({ loaderData }) =>
    protocolPageMeta(
      loaderData?.protocol.name ?? "",
      loaderData?.title ?? "Protocolo",
      loaderData?.description ?? "Protocolo ASAPOL para associados.",
    ),
  component: ProtocolDetailRoute,
});

function ProtocolDetailRoute() {
  const { protocol, detail, title, subtitle, label, description } = Route.useLoaderData();

  return (
    <ProtocolDetailView
      title={title}
      subtitle={subtitle}
      logo={protocol.logo}
      logoAlt={label}
      description={description}
      regionName={protocol.regionName}
      detail={detail}
      pdf={protocol.pdf}
    />
  );
}
