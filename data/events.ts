export interface LocalEvent {
  id: string
  title: string
  date: string
  location?: string
  description?: string
  image?: string
  registrationLink?: string
  replayLink?: string
  isPast: boolean
  tags?: string[]
}

export const eventsData: LocalEvent[] = [
  {
    id: "evt-1",
    title: "Webinaire : Comment intégrer une grande école d'ingénieurs ?",
    date: "2025-10-15T18:00:00Z",
    location: "En ligne (Zoom)",
    description: "Rejoignez-nous pour ce webinaire exclusif où nos mentors de Polytechnique et CentraleSupélec partageront leurs secrets de réussite aux concours CPGE.",
    isPast: false,
    tags: ["Webinaire", "Ingénieur", "Conseils"],
    registrationLink: "https://www.helloasso.com/",
    // image: "/evenements/affiche-ingenieur.png" // Décommentez et ajoutez le lien vers l'image
  },
  {
    id: "evt-2",
    title: "Forum de l'Orientation TW3 - Édition 2025",
    date: "2025-11-20T14:00:00Z",
    location: "Paris (Lieu à confirmer)",
    description: "Une journée entière dédiée à l'orientation avec des stands animés par des étudiants des meilleures filières françaises (Droit, Commerce, Ingénieur, Sciences Po).",
    isPast: false,
    tags: ["Présentiel", "Forum", "Orientation"],
    registrationLink: "https://www.helloasso.com/",
  },
  {
    id: "evt-3",
    title: "Stage Intensif de Mathématiques - Vacances d'Hiver",
    date: "2025-02-15T09:00:00Z",
    location: "Lycée partenaire, Paris",
    description: "Un stage de perfectionnement en mathématiques pour les élèves de Terminale souhaitant intégrer une CPGE scientifique. Places limitées.",
    isPast: true,
    tags: ["Stage", "Mathématiques"],
    replayLink: "https://youtube.com/",
  },
  {
    id: "evt-4",
    title: "Webinaire : Sciences Po Paris et IEP",
    date: "2024-11-10T19:00:00Z",
    location: "En ligne",
    description: "Nos mentors étudiants à Sciences Po Paris reviennent sur la procédure d'admission, le dossier et l'oral.",
    isPast: true,
    tags: ["Webinaire", "Sciences Po"],
  }
];

export const upcomingEvents = eventsData.filter(e => !e.isPast).sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
export const pastEvents = eventsData.filter(e => e.isPast).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
