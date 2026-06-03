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
    title: "Conférence : L'Intelligence Artificielle",
    date: "2024-03-15T18:00:00Z",
    location: "En ligne",
    description: "Une conférence exceptionnelle pour comprendre les enjeux de l'Intelligence Artificielle et son impact sur les filières d'excellence et le monde de demain.",
    isPast: true,
    tags: ["Conférence", "IA", "Tech"],
    image: "/evenements/Conf IA 15_03 1.png"
  },
  {
    id: "evt-2",
    title: "Conférence NASA : Ingénierie et Espace",
    date: "2024-02-16T19:00:00Z",
    location: "En ligne",
    description: "Plongez dans le domaine de l'ingénierie spatiale avec une conférence inspirante sur les missions de la NASA et les parcours pour y accéder.",
    isPast: true,
    tags: ["Webinaire", "Espace", "Ingénieur"],
    image: "/evenements/Conf NASA 16_02 1.png"
  },
  {
    id: "evt-3",
    title: "Conférence : Droit et Sciences Politiques",
    date: "2026-02-07T18:00:00Z",
    location: "En ligne",
    description: "Découvrez les parcours en Droit et à Sciences Po. Nos intervenants vous donneront tous les conseils pour réussir vos admissions et vos études.",
    isPast: false,
    tags: ["Conférence", "Droit", "Sciences Po"],
    image: "/evenements/Conf droit 07_02_26 1.png"
  },
  {
    id: "evt-4",
    title: "Conférence Spéciale avec Laymoon",
    date: "2024-11-06T19:00:00Z",
    location: "En ligne",
    description: "Un échange riche et exclusif pour comprendre les clés de la réussite académique et professionnelle.",
    isPast: true,
    tags: ["Conférence", "Inspiration"],
    image: "/evenements/Conf laymoon 6_11 1.png"
  }
];

export const upcomingEvents = eventsData.filter(e => !e.isPast).sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
export const pastEvents = eventsData.filter(e => e.isPast).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
