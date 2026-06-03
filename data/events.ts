export interface LocalEvent {
  id: string
  title: string
  date: string
  location?: string
  description?: string
  image?: string
  registrationLink?: string
  replayLink?: string
  tags?: string[]
}

export const eventsData: LocalEvent[] = [
  {
    id: "evt-1",
    title: "Conférence avec un Chercheur en IA",
    date: "2025-03-15T22:30:00Z",
    location: "En ligne (Visioconférence)",
    description: "Intervention de Houssam Zenati, Chercheur en IA. Thème : « Le Problème des Idées dans le Monde Musulman à l'Ère Numérique ». Évènement en ligne tout public.",
    tags: ["Conférence", "IA", "Numérique"],
    image: "/evenements/Conf IA 15_03 1.png"
  },
  {
    id: "evt-2",
    title: "Conférence avec un Physicien à la NASA",
    date: "2025-02-16T18:30:00Z",
    location: "En ligne (Visioconférence)",
    description: "Rencontre exceptionnelle avec Noureddine Melikechi, Professeur de Physique, Doyen du Kennedy Collège des Sciences à l'University of Massachusetts et Ambassadeur de la Planète Mars. Évènement en ligne tout public.",
    tags: ["Conférence", "Espace", "Sciences"],
    image: "/evenements/Conf NASA 16_02 1.png"
  },
  {
    id: "evt-3",
    title: "Conférence avec une Avocate en Droit des Étrangers",
    date: "2026-02-07T20:00:00Z",
    location: "En ligne (Visioconférence Discord)",
    description: "Intervention d'Atéka Vasram, Avocate en Droit des Étrangers. Venez échanger et poser vos questions lors de cet évènement en ligne tout public.",
    tags: ["Conférence", "Droit", "Orientation"],
    image: "/evenements/Conf droit 07_02_26 1.png"
  },
  {
    id: "evt-4",
    title: "Conférence avec le CEO de Laymoon",
    date: "2024-12-06T19:00:00Z",
    location: "En ligne (Canal Discord TW3)",
    description: "Rencontre avec Anass El Adly, CEO de Laymoon et entrepreneur musulman engagé en France. Annonce d'une offre spéciale : gratuité pendant 1 an ! Réservé aux membres de TW3.",
    tags: ["Conférence", "Entrepreneuriat"],
    image: "/evenements/Conf laymoon 6_11 1.png"
  }
];

const now = new Date();
// Ordre chronologique inverse pour tous les événements (du plus récent au plus ancien)
export const upcomingEvents = eventsData.filter(e => new Date(e.date) >= now).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
export const pastEvents = eventsData.filter(e => new Date(e.date) < now).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
