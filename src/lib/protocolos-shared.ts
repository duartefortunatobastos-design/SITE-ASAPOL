import protocolosData from "@/lib/protocolos-data.json";
import { publicUrl } from "@/lib/site";

export type ProtocolMeta = { name: string; pdf: string; logo: string };
export type Region = { id: string; name: string; protocols: ProtocolMeta[] };

export const regions = protocolosData as Region[];

export const displayNames: Record<string, string> = {
  Meo: "MEO",
  Gaes: "GAES",
  Vilagale: "Vila Galé",
  AudicaoAtiva: "AudiçãoActiva",
  Bioforma: "Bioforma",
  Companhia: "Companhia",
  Lojadassopas: "Loja das Sopas",
  Selfish: "SelFish",
  Pestana: "Pestana",
  Grupotico: "Grupótico",
  Midas: "Midas",
  Turiscar: "Turiscar",
  Floresflores: "Flores & Flores",
  Canaverde: "Canaverde Seguros",
  Repsol: "Repsol",
  BlandyTravel: "Blandy Travel",
  Travelutions: "Travelutions",
  Basilico: "Basílico",
  DS: "Decisões & Soluções",
  ACP: "ACP — Automóvel Club de Portugal",
};

export const nacionalCategories: Record<string, string> = {
  "Alberto Oculista": "Saúde · Ótica",
  ACP: "Automóvel · Club Portugal",
  Meo: "Telecomunicações",
  Gaes: "Saúde · Audição",
  Vilagale: "Hotéis",
  Galp: "Energia",
  AudicaoAtiva: "Saúde · Audição",
  Bioforma: "Saúde · Nutrição",
  Companhia: "Restauração",
  Lojadassopas: "Restauração",
  Selfish: "Restauração",
  Pestana: "Hotéis",
  Grupotico: "Saúde · Ótica",
  Midas: "Automóvel · Oficinas",
  Turiscar: "Rent-a-car",
  Floresflores: "Seguros",
  Canaverde: "Seguros",
  Repsol: "Energia",
  BlandyTravel: "Agências de viagens",
  Travelutions: "Agências de viagens",
  Basilico: "Restauração",
  DS: "Imobiliário",
};

export function protocolLabel(name: string) {
  return displayNames[name] ?? name;
}

export function protocolAssetUrl(path: string) {
  if (/^https?:\/\//i.test(path)) return path;
  return publicUrl(path);
}

export function protocolSlug(name: string) {
  return name
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/\.pdf$/i, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function findProtocolMeta(name: string) {
  for (const region of regions) {
    const protocol = region.protocols.find((entry) => entry.name === name);
    if (protocol) {
      return { ...protocol, regionId: region.id, regionName: region.name };
    }
  }
  return null;
}

export function findProtocolMetaBySlug(slug: string) {
  for (const region of regions) {
    for (const protocol of region.protocols) {
      if (protocolSlug(protocol.name) === slug) {
        return { ...protocol, regionId: region.id, regionName: region.name };
      }
    }
  }
  return null;
}
