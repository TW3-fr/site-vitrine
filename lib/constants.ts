/**
 * Constantes TW3 Institute (site web)
 * Importe les constantes de domaine depuis shared/ et ajoute les constantes web (écoles, départements, etc.)
 */
import {
  ROLES,
  ROLE_LABELS,
  FILIERES,
  FILIERES_ARRAY,
  FILIERE_LABELS,
  NIVEAU_LABELS,
  SUBJECTS_BY_FILIERE,
  POLES_SANS_MATIERE,
  POLES_TRANVERSAUX,
  DAY_NAMES,
  DAY_NAMES_JS,
} from '@/shared/constants'

export { ROLES, ROLE_LABELS, FILIERES, FILIERES_ARRAY, FILIERE_LABELS, NIVEAU_LABELS, SUBJECTS_BY_FILIERE, POLES_SANS_MATIERE, POLES_TRANVERSAUX, DAY_NAMES, DAY_NAMES_JS }

/** Filières accessibles aux élèves (exclut les pôles transversaux Anglais/Arabe-Coran) */
export const FILIERES_ELEVES = ['DROIT_SCIENCES_PO', 'SCIENTIFIQUE', 'COMMERCE'] as const

/** Filières/Pôles (alias pour l'affichage) */
export const DEPARTEMENTS = FILIERES

export const DEPARTEMENT_LABELS = FILIERE_LABELS

/** Départements géographiques français (code INSEE) - réexport shared */
export { DEPARTEMENTS_GEO, DEPARTEMENTS_GEO_ORDERED } from '@/shared/geo'

export const FILIERE_SLUGS: Record<string, string> = {
  DROIT_SCIENCES_PO: 'droit-sciences-po',
  COMMERCE: 'commerce',
  SCIENTIFIQUE: 'scientifique',
  ANGLAIS: 'anglais',
  ARABE_CORAN: 'arabe-coran',
}

/** Niveaux pour les élèves */
export const NIVEAUX = {
  PREMIERE: '1ERE',
  TERMINALE: 'TERMINALE',
  L1_SUP: 'L1_SUP',
  L2_SPE: 'L2_SPE',
} as const

/** Écoles - réexport depuis shared (source unique site + mobile) */
import {
  ECOLES_INGENIEUR,
  ECOLES_COMMERCE,
  FACULTES_DROIT,
  IEP_SCIENCES_PO,
  ECOLES_ENS,
  ECOLES_ORDERED,
} from '@/shared/ecoles'
export { ECOLES_INGENIEUR, ECOLES_COMMERCE, FACULTES_DROIT, IEP_SCIENCES_PO, ECOLES_ENS, ECOLES_ORDERED }
export const ECOLES_SET = new Set(ECOLES_ORDERED)

// Charte graphique TW3
export const COLORS = {
  primary: '#7a3477',      // Violet principal
  primaryDark: '#391457',  // Violet foncé
  accent: '#fffdd1',       // Jaune écriture
  white: '#ffffff',
  gray: {
    50: '#f9fafb',
    100: '#f3f4f6',
    200: '#e5e7eb',
    300: '#d1d5db',
    400: '#9ca3af',
    500: '#6b7280',
    600: '#4b5563',
    700: '#374151',
    800: '#1f2937',
    900: '#111827',
  },
}
