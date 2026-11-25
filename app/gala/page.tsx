import type { Metadata } from 'next'
import { GalaClient } from './GalaClient'

export const metadata: Metadata = {
  title: 'Gala 2026',
  description:
    "Gala de l'Institut TW3, samedi 28 novembre 2026 au Salon Blanqui (Paris 13e). Soutenez l'ouverture d'Escale, la maison étudiante.",
  openGraph: {
    title: 'Gala TW3 · samedi 28 novembre 2026',
    description: "Soutenez l'ouverture d'Escale, la maison étudiante.",
    images: ['/gala/bg-01.jpg'],
  },
}

export default function GalaPage() {
  return <GalaClient />
}
