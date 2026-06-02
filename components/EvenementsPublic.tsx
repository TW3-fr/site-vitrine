'use client'

import { useEffect, useState } from 'react'
import { EventItem } from '@/types'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { CalendarDays, MapPin, ArrowUpRight, PlayCircle, Loader2 } from 'lucide-react'

export function EvenementsPublic() {
  const [upcoming, setUpcoming] = useState<EventItem[]>([])
  const [past, setPast] = useState<EventItem[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    Promise.all([
      fetch('https://app.tw3.fr/api/events').then((r) => r.json()),
      fetch('https://app.tw3.fr/api/events?past=true').then((r) => r.json()),
    ])
      .then(([u, p]) => {
        setUpcoming(u)
        setPast(p)
      })
      .catch(() => {
        setUpcoming([])
        setPast([])
      })
      .finally(() => setLoading(false))
  }, [])

  if (loading) {
    return (
      <div className="flex justify-center items-center py-32">
        <Loader2 className="w-10 h-10 animate-spin text-primary" />
      </div>
    )
  }

  const EventCard = ({ event, isPast }: { event: EventItem; isPast?: boolean }) => (
    <Card className={`group overflow-hidden border-border bg-card shadow-xs hover:border-primary/50 transition-colors flex flex-col h-full ${isPast ? 'opacity-70 grayscale hover:grayscale-0' : ''}`}>
      {event.image ? (
        <div className="relative w-full aspect-[16/10] bg-muted overflow-hidden shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={event.image} alt={event.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          {isPast && <div className="absolute inset-0 bg-background/20 backdrop-blur-[2px]"></div>}
        </div>
      ) : (
        <div className="relative w-full aspect-[16/10] bg-accent/30 flex items-center justify-center overflow-hidden shrink-0">
          <CalendarDays className="w-16 h-16 text-primary/20" />
        </div>
      )}
      <CardContent className="p-8 flex flex-col flex-grow">
        <div className="flex items-center gap-2 mb-4 text-sm font-medium text-primary">
          <CalendarDays className="w-4 h-4" />
          {new Date(event.date).toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}
        </div>
        
        <h2 className="text-2xl font-bold text-foreground mb-3 font-sans leading-snug">{event.title}</h2>
        
        {event.location && (
          <div className="flex items-start gap-2 text-muted-foreground mb-4 text-sm">
            <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
            <span>{event.location}</span>
          </div>
        )}
        
        {event.description && (
          <p className="text-muted-foreground mb-8 line-clamp-3 leading-relaxed">{event.description}</p>
        )}
        
        <div className="mt-auto flex flex-wrap gap-4 pt-4 border-t border-border/50">
          {event.registrationLink && !isPast && (
            <Button asChild className="rounded-xl group/btn">
              <a href={event.registrationLink} target="_blank" rel="noopener noreferrer">
                S'inscrire <ArrowUpRight className="ml-2 w-4 h-4 group-hover/btn:rotate-45 transition-transform" />
              </a>
            </Button>
          )}
          {event.replayLink && (
            <Button asChild variant="outline" className="rounded-xl">
              <a href={event.replayLink} target="_blank" rel="noopener noreferrer">
                <PlayCircle className="mr-2 w-4 h-4" /> Voir la rediffusion
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )

  return (
    <div className="space-y-24">
      <section>
        <div className="flex items-center gap-6 mb-10">
          <h2 className="text-3xl font-bold text-foreground font-sans">À venir</h2>
          <div className="h-px bg-border flex-grow"></div>
        </div>
        
        {upcoming.length === 0 ? (
          <div className="bg-card rounded-3xl p-12 text-center border border-border shadow-xs">
            <CalendarDays className="w-16 h-16 text-muted-foreground/30 mx-auto mb-6" />
            <p className="text-lg text-foreground font-medium mb-2">Aucun événement à venir pour le moment.</p>
            <p className="text-muted-foreground">Revenez bientôt pour découvrir notre programme !</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-8">
            {upcoming.map((e) => (
              <EventCard key={e.id} event={e} />
            ))}
          </div>
        )}
      </section>

      {past.length > 0 && (
        <section>
          <div className="flex items-center gap-6 mb-10">
            <h2 className="text-3xl font-bold text-muted-foreground font-sans">Événements passés</h2>
            <div className="h-px bg-border flex-grow"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {past.map((e) => (
              <EventCard key={e.id} event={e} isPast />
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
