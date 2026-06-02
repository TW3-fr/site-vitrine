/**
 * Utilitaires de parsing partagés (@tw3/utils) — site web + mobile
 */

/** Parse une chaîne comma-separated en tableau (départements, filières) */
export function parseDepartements(val: string | null | undefined): string[] {
  if (!val) return []
  return val.split(',').map((s) => s.trim()).filter(Boolean)
}

/** Parse codes départements géographiques (comma-separated) */
export function parseDepartementGeo(val: string | null | undefined): string[] {
  if (!val) return []
  return val.split(',').map((s) => s.trim()).filter(Boolean)
}

/** Parse départements depuis un membre (departements ou filiere en fallback) */
export function parseDepartementsFromMember(m: { departements?: string | null; filiere?: string | null }): string[] {
  if (m.departements) return parseDepartements(m.departements)
  if (m.filiere) return [m.filiere]
  return []
}

/** Parse écoles (comma-separated) */
export function parseEcoles(val: string | null | undefined): string[] {
  if (!val) return []
  return val.split(',').map((s) => s.trim()).filter(Boolean)
}

/** Normalise une chaîne pour recherche insensible aux accents */
export function normalizeForSearch(s: string): string {
  return s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
}
