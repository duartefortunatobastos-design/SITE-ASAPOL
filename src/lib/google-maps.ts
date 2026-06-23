export function buildMapQuery(
  address?: string,
  postalCode?: string,
  fallbackLabel?: string,
  regionName?: string,
) {
  if (address || postalCode) {
    return [address, postalCode, "Portugal"].filter(Boolean).join(", ");
  }

  if (fallbackLabel && regionName) {
    return `${fallbackLabel}, ${regionName}, Portugal`;
  }

  return null;
}

export function googleMapsEmbedUrl(query: string) {
  return `https://maps.google.com/maps?q=${encodeURIComponent(query)}&z=15&output=embed`;
}

export function googleMapsDirectionsUrl(query: string) {
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(query)}`;
}

export function googleMapsSearchUrl(query: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}
