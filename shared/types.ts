/**
 * Types canoniques TW3 Institute (@tw3/types)
 * Source unique de vérité pour le site web et l'application mobile.
 * Ces types correspondent aux réponses de l'API (Prisma → JSON).
 *
 * Site et app utilisent la MÊME API → les données sont identiques.
 */

export type Role = 'ELEVE' | 'BENEVOLE' | 'RESPONSABLE' | 'ADMIN'

/** Créneau emploi du temps - API /api/schedule */
export interface ScheduleItem {
  id: string
  filiere?: string | null
  niveau?: string | null
  day: string
  startTime: string
  endTime: string
  subject: string
  description?: string | null
  benevoleId?: string | null
  benevole?: { id: string; name: string } | null
  scheduleStudents?: { userId: string; user: { id: string; name: string } }[]
  date?: string | null
  repeatType?: string | null
  dateEffectuee?: string | null
}

/** Devoir - API /api/assignments */
export interface AssignmentItem {
  id: string
  filiere: string
  subject: string
  title: string
  description?: string | null
  fileUrl?: string | null
  dueDate: string
  createdAt: string
}

/** Soumission - API /api/submissions */
export interface SubmissionItem {
  id: string
  assignmentId: string
  userId: string
  fileUrl: string
  isLate: boolean
  submittedAt: string
  user?: { id: string; name: string; email: string }
}

/** Événement - API /api/events */
export interface EventItem {
  id: string
  title: string
  description?: string | null
  date: string
  location?: string | null
  type?: string | null
  image?: string | null
  registrationLink?: string | null
  replayLink?: string | null
}

/** Note - API /api/notes */
export interface NoteItem {
  id: string
  userId: string
  subject: string
  grade: number
  coefficient: number
  source: 'BENEVOLE' | 'SELF'
  label?: string | null
  createdAt: string
}

/** Absence/retard - API /api/absences-retards */
export interface AbsenceRetardItem {
  id: string
  userId: string
  subject: string
  absences: number
  retards: number
  updatedAt: string
}

/** Membre réseau - API /api/reseau */
export interface MemberItem {
  id: string
  name: string
  nom?: string | null
  prenom?: string | null
  email?: string
  phone?: string | null
  role: string
  filiere?: string | null
  departements?: string | null
  departementGeo?: string | null
  niveau?: string | null
  ecole?: string | null
  lycee?: string | null
  linkedIn?: string | null
  discord?: string | null
  showEmail?: boolean
  showPhone?: boolean
}

export interface BenevoleContact {
  id: string
  name: string
  firstName?: string
  lastName?: string
  email: string
  phone?: string | null
  linkedIn?: string | null
  discord?: string | null
  filiere?: string | null
  showEmail?: boolean
  showPhone?: boolean
}

/** Profil utilisateur - API /api/users/me */
export interface ProfileItem {
  id: string
  email: string
  image?: string | null
  departementGeo?: string | null
  ecole?: string | null
  lycee?: string | null
  linkedIn?: string | null
  filiere?: string | null
  profileComplete?: boolean
}
