'use client'

import { upcomingEvents, pastEvents, LocalEvent } from '@/data/events'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { CalendarDays, MapPin, ArrowUpRight, PlayCircle } from 'lucide-react'
import { motion } from 'motion/react'

export function EvenementsPublic() {
  
  const EventCard = ({ event, isPast, index }: { event: LocalEvent; isPast?: boolean; index: number }) => {
    // Disposition alternée sur grand écran : index pair = image à gauche, impair = image à droite
    const isImageRight = index % 2 !== 0;

    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <Card className={`group overflow-hidden border-border bg-card/60 backdrop-blur-md shadow-sm hover:shadow-xl hover:border-primary/40 transition-all duration-500 flex flex-col md:flex-row ${isPast ? 'opacity-80 grayscale hover:grayscale-0' : ''}`}>
          
          {/* Conteneur de l'Affiche (Poster) */}
          <div className={`relative w-full md:w-2/5 shrink-0 bg-muted/50 overflow-hidden min-h-[250px] md:min-h-[350px] flex items-center justify-center ${isImageRight ? 'md:order-2' : ''}`}>
            {event.image ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={event.image} alt={event.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/10 flex items-center justify-center">
                <CalendarDays className="w-20 h-20 text-primary/10 group-hover:scale-110 transition-transform duration-700" />
              </div>
            )}
            
            {/* Badges de statut au dessus de l'image */}
            <div className="absolute top-4 left-4 flex flex-wrap gap-2">
              {isPast && (
                <span className="px-3 py-1 bg-background/80 backdrop-blur-md text-foreground text-xs font-semibold rounded-full border border-border/50">
                  Terminé
                </span>
              )}
              {event.tags?.map(tag => (
                <span key={tag} className="px-3 py-1 bg-primary/90 backdrop-blur-md text-primary-foreground text-xs font-semibold rounded-full shadow-sm">
                  {tag}
                </span>
              ))}
            </div>
            
            {isPast && <div className="absolute inset-0 bg-background/20 backdrop-blur-[1px] group-hover:opacity-0 transition-opacity duration-500"></div>}
          </div>

          {/* Conteneur du Contenu (Texte) */}
          <CardContent className={`p-8 md:p-10 flex flex-col flex-grow justify-center ${isImageRight ? 'md:order-1' : ''}`}>
            <div className="flex items-center gap-2 mb-4 text-sm font-semibold tracking-wide text-primary uppercase">
              <CalendarDays className="w-4 h-4" />
              {new Date(event.date).toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 font-sans leading-tight group-hover:text-primary transition-colors duration-300">
              {event.title}
            </h2>
            
            {event.location && (
              <div className="flex items-start gap-2 text-muted-foreground mb-5 text-sm font-medium">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                <span>{event.location}</span>
              </div>
            )}
            
            {event.description && (
              <p className="text-muted-foreground mb-8 text-base md:text-lg leading-relaxed">{event.description}</p>
            )}
            
            <div className="mt-auto flex flex-wrap gap-4 pt-6 border-t border-border/50">
              {event.registrationLink && !isPast && (
                <Button asChild size="lg" className="rounded-full shadow-sm group/btn px-8">
                  <a href={event.registrationLink} target="_blank" rel="noopener noreferrer">
                    S'inscrire <ArrowUpRight className="ml-2 w-5 h-5 group-hover/btn:rotate-45 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-all" />
                  </a>
                </Button>
              )}
              {event.replayLink && (
                <Button asChild variant="outline" size="lg" className="rounded-full group/btn">
                  <a href={event.replayLink} target="_blank" rel="noopener noreferrer">
                    <PlayCircle className="mr-2 w-5 h-5 group-hover/btn:scale-110 transition-transform" /> Voir la rediffusion
                  </a>
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    )
  }

  return (
    <div className="space-y-24 max-w-5xl mx-auto">
      <section>
        <div className="flex flex-col md:flex-row md:items-end gap-4 md:gap-8 mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-foreground leading-none">À venir</h2>
          <div className="h-px bg-border flex-grow mb-2"></div>
        </div>
        
        {upcomingEvents.length === 0 ? (
          <div className="bg-card/50 backdrop-blur-sm rounded-3xl p-16 text-center border border-border shadow-xs">
            <div className="w-20 h-20 bg-accent/30 rounded-full flex items-center justify-center mx-auto mb-6">
              <CalendarDays className="w-10 h-10 text-primary" />
            </div>
            <p className="text-xl text-foreground font-bold mb-3 font-sans">Aucun événement prévu</p>
            <p className="text-muted-foreground text-lg">Revenez très bientôt pour découvrir notre nouveau programme !</p>
          </div>
        ) : (
          <div className="flex flex-col gap-8 md:gap-12">
            {upcomingEvents.map((e, idx) => (
              <EventCard key={e.id} event={e} index={idx} />
            ))}
          </div>
        )}
      </section>

      {pastEvents.length > 0 && (
        <section>
          <div className="flex flex-col md:flex-row md:items-end gap-4 md:gap-8 mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-muted-foreground leading-none">Événements passés</h2>
            <div className="h-px bg-border flex-grow mb-2"></div>
          </div>
          
          <div className="flex flex-col gap-8 md:gap-12">
            {pastEvents.map((e, idx) => (
              <EventCard key={e.id} event={e} isPast index={idx} />
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
