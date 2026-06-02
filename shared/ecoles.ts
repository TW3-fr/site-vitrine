/**
 * Liste des écoles TW3 Institute — @tw3/domain
 * Source unique pour le site web et l'application mobile.
 */

/** Écoles d'ingénieur */
export const ECOLES_INGENIEUR: string[] = [
  'École Polytechnique', 'CentraleSupélec', 'Centrale Lyon', 'Centrale Nantes', 'Centrale Lille', 'Centrale Marseille',
  'Mines Paris - PSL', 'Mines Saint-Étienne', 'Mines Nancy', 'Mines Albi', 'Mines Alès', 'Mines Douai', 'Mines Nantes',
  'ENSTA Paris', 'Télécom Paris', 'Télécom SudParis', 'IMT Atlantique', 'IMT Nord Europe', 'IMT Mines Alès',
  'Ponts ParisTech', 'ENTPE', 'ENSAE Paris', 'ENSAI', 'Supélec', 'ESPCI Paris', 'Chimie ParisTech', 'AgroParisTech',
  'ENSA Paris-Val de Seine', 'Polytechnique Montréal', 'EPFL', 'EPF',
  'INSA Lyon', 'INSA Toulouse', 'INSA Rennes', 'INSA Rouen', 'INSA Strasbourg', 'INSA Hauts-de-France',
  'Grenoble INP', 'Bordeaux INP', 'Toulouse INP', 'Lyon INP', 'Clermont INP', 'Nantes Université - Polytech',
  'Arts et Métiers (ENSAM)', 'ESTACA', 'ISAE-SUPAERO', 'ENAC', 'IPSA',
  'ENSEA', 'ENSEIRB-MATMECA', 'ENSEEIHT', 'ESIEE Paris', 'ESIEE Amiens', 'ECE Paris', 'EIGSI La Rochelle',
  'CPE Lyon', 'CESI', 'HEI', 'ISA Lille', 'ISEN', 'ECAM Lyon', 'ECAM Strasbourg-Europe',
  'EFREI Paris', 'EBI', 'EPITA', 'ESILV', 'ESIGETEL', 'ESME Sudria',
  'Centrale Casablanca', 'Centrale Pékin', 'Polytech Paris-Saclay', 'Polytech Lille', 'Polytech Lyon',
  'Polytech Marseille', 'Polytech Montpellier', 'Polytech Nice Sophia', 'Polytech Orléans', 'Polytech Sorbonne',
  'Polytech Tours', 'Polytech Grenoble', 'Polytech Nantes', 'Polytech Annecy-Chambéry',
  'ENGEES Strasbourg', 'ENSTIB Épinal', 'ENSGSI Nancy', 'ENSIC Nancy', 'ENSEM Nancy',
  'ENSG Géomatique', 'ENSIL-ENSCI Limoges', 'ENSC Bordeaux', 'ENSCBP Bordeaux', 'ENSCMu Mulhouse',
  'ENSCR Rennes', 'ENSIAME Valenciennes', 'ENSI Poitiers', 'ENSIP Poitiers', 'ENSISA Mulhouse',
  'UTT Troyes', 'UTC Compiègne', 'UTBM Belfort-Montbéliard',
]

/** Écoles de commerce */
export const ECOLES_COMMERCE: string[] = [
  'HEC Paris', 'ESSEC', 'ESCP Business School', 'EDHEC', 'EM Lyon', 'SKEMA', 'NEOMA', 'KEDGE', 'AUDENCIA',
  'Grenoble EM', 'TBS Education', 'IESEG', 'ISC Paris', 'ESC Clermont', 'Montpellier BS', 'Rennes SB',
  'EM Strasbourg', 'La Rochelle BS', 'Burgundy School of Business', 'Excelia', 'INSEEC', 'PSB',
  'EBS Paris', 'ICN Business School', 'BSB Dijon', 'South Champagne BS', 'Normandie BS',
]

/** Facultés de Droit */
export const FACULTES_DROIT: string[] = [
  'Université Paris-Panthéon-Assas', 'Université Paris 1 Panthéon-Sorbonne', 'Université Paris 2 Panthéon-Assas',
  'Université Paris-Saclay', 'Université Paris Cité', 'Université Sorbonne Nouvelle', 'Université Sorbonne',
  'Université de Bordeaux', 'Université de Lyon', 'Université Toulouse 1 Capitole', "Université d'Aix-Marseille",
  'Université de Lille', 'Université de Strasbourg', 'Université de Nantes', 'Université de Rennes 1',
  'Université de Montpellier', 'Université de Nice Sophia-Antipolis', 'Université de Grenoble Alpes',
  'Université de Caen Normandie', 'Université de Poitiers', 'Université de Reims Champagne-Ardenne',
  'Université de Rouen Normandie', 'Université de Limoges', 'Université de Dijon', 'Université de Tours',
  "Université d'Orléans", 'Université de Bretagne Occidentale', "Université d'Angers",
  'Université de La Rochelle', "Université d'Évry-Val-d'Essonne", 'Université de Versailles Saint-Quentin',
]

/** IEP et Sciences Po */
export const IEP_SCIENCES_PO: string[] = [
  'Sciences Po Paris', 'IEP Paris', 'IEP Aix-en-Provence', 'IEP Bordeaux', 'IEP Grenoble', 'IEP Lille',
  'IEP Lyon', 'IEP Rennes', 'IEP Strasbourg', 'IEP Toulouse', 'IEP Saint-Germain-en-Laye',
]

/** Écoles Normales Supérieures */
export const ECOLES_ENS: string[] = [
  'ENS Paris (Ulm)', 'ENS Lyon', 'ENS Paris-Saclay', 'ENS Rennes',
]

/** Toutes les écoles (ordre: ingénieur, commerce, droit, IEP, ENS) */
export const ECOLES_ORDERED: string[] = [
  ...ECOLES_INGENIEUR,
  ...ECOLES_COMMERCE,
  ...FACULTES_DROIT,
  ...IEP_SCIENCES_PO,
  ...ECOLES_ENS,
]
