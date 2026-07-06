/**
 * Constantes de domaine TW3 Institute (@tw3/domain)
 * Source unique pour le site web et l'application mobile.
 * Utilisées pour : emploi du temps, devoirs, filières, rôles, etc.
 */

export const ROLES = {
  ELEVE: 'ELEVE',
  BENEVOLE: 'BENEVOLE',
  RESPONSABLE: 'RESPONSABLE',
  ADMIN: 'ADMIN',
} as const

export const ROLE_LABELS: Record<string, string> = {
  ELEVE: 'Élève',
  BENEVOLE: 'Bénévole',
  RESPONSABLE: 'Responsable',
  ADMIN: 'Admin',
}

export const FILIERES = {
  DROIT_SCIENCES_PO: 'DROIT_SCIENCES_PO',
  COMMERCE: 'COMMERCE',
  SCIENTIFIQUE: 'SCIENTIFIQUE',
  ANGLAIS: 'ANGLAIS',
  ARABE_CORAN: 'ARABE_CORAN',
} as const

/** Tableau des filières (pour itération) */
export const FILIERES_ARRAY = Object.values(FILIERES) as (keyof typeof FILIERES)[]

export const FILIERE_LABELS: Record<string, string> = {
  DROIT_SCIENCES_PO: 'Droit & Sciences politiques',
  'droit-sciences-po': 'Droit & Sciences politiques',
  COMMERCE: 'Commerce',
  commerce: 'Commerce',
  SCIENTIFIQUE: 'Scientifique',
  scientifique: 'Scientifique',
  ANGLAIS: 'Anglais',
  anglais: 'Anglais',
  ARABE_CORAN: 'Arabe/Coran',
  'arabe-coran': 'Arabe/Coran',
}

export const NIVEAU_LABELS: Record<string, string> = {
  '1ERE': '1ère',
  TERMINALE: 'Terminale',
  L1_SUP: 'L1 / Sup',
  L2_SPE: 'L2 / Spé',
}

/** Matières par filière (emploi du temps, devoirs) */
export const SUBJECTS_BY_FILIERE: Record<string, string[]> = {
  SCIENTIFIQUE: ['Maths', 'Physique', 'Autre'],
  COMMERCE: ['Maths', 'Géopolitique', 'Autre'],
  DROIT_SCIENCES_PO: ['Droit Public', 'Droit Privé', 'Sciences politiques', 'Autre'],
  ANGLAIS: ['Anglais'],
  ARABE_CORAN: ['Arabe-Coran'],
}

/** Pôles où la matière est fixe */
export const POLES_SANS_MATIERE = ['ANGLAIS', 'ARABE_CORAN'] as const

/** Pôles transversaux (Anglais, Arabe-Coran) - permissions spéciales */
export const POLES_TRANVERSAUX: readonly string[] = ['ANGLAIS', 'ARABE_CORAN']

/** Filières accessibles aux élèves (exclut pôles transversaux) */
export const FILIERES_ELEVES = ['DROIT_SCIENCES_PO', 'SCIENTIFIQUE', 'COMMERCE'] as const

/** Niveaux pour les élèves */
export const NIVEAUX = {
  PREMIERE: '1ERE',
  TERMINALE: 'TERMINALE',
  L1_SUP: 'L1_SUP',
  L2_SPE: 'L2_SPE',
} as const

export const DAY_NAMES = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'] as const
/** Ordre JS: Dimanche=0, Lundi=1, ... (pour Date.getDay()) */
export const DAY_NAMES_JS = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'] as const
