/**
 * Utilitaires web TW3 Institute
 * Réexporte le module partagé (shared/utils) et ajoute les helpers spécifiques au web.
 */
export * from '@/shared/utils'

import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/** Récupère un fichier depuis FormData (compatibilité Next.js/Node) */
export function getFileFromFormData(
  formData: Awaited<ReturnType<Request['formData']>>,
  name: string
): File | null {
  const value = (formData as unknown as { get(name: string): File | string | null }).get(name)
  return value instanceof File ? value : null
}
