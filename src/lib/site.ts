export const SEDE_ADDRESS =
  "Estação Olivais do Metropolitano de Lisboa, Loja 3, Avenida Cidade de Luanda, 1800-071 Lisboa";

/** Coordenadas oficiais do link Google Maps da ASAPOL (Estação Olivais / Loja 3). */
export const SEDE_COORDS = { lat: 38.7612815, lng: -9.1120293 } as const;

export const SEDE_MAPS_URL =
  "https://www.google.com/maps/place/Metro+Olivais/@38.7612815,-9.1120293,18z/data=!4m6!3m5!1s0xd19322df150b76b:0x4b6a7b266824fb29!8m2!3d38.7612815!4d-9.1120293";

export function googleMapsSearchUrl(address: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
}

export function googleMapsEmbedUrl(coords: { lat: number; lng: number }, zoom = 18) {
  const { lat, lng } = coords;
  return `https://www.google.com/maps?q=${lat},${lng}&ll=${lat},${lng}&hl=pt&z=${zoom}&output=embed`;
}
