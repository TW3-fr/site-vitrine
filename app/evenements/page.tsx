'use client'

import { PublicNavbar } from '@/components/PublicNavbar'
import { EvenementsPublic } from '@/components/EvenementsPublic'
import { Footer } from '@/components/Footer'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'

export default function EvenementsPage() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <PublicNavbar currentPage="evenements" />

      <header className="pt-20 pb-8 md:pb-12 border-b border-border bg-card/30 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background -z-10"></div>
        <div className="container mx-auto px-4 md:px-6 max-w-4xl relative z-10 text-center">
          <h1 className="flex flex-col mb-4 md:mb-6 items-center">
             <TextGenerateEffect words="Nos" duration={0.2} />
             <TextGenerateEffect words="événements" delay={0.4} className="font-serif italic font-normal text-primary" />
          </h1>
          <p className="mt-3 md:mt-4 text-base md:text-xl text-muted-foreground leading-relaxed">Découvrez nos stages intensifs, forums de l'orientation, conférences et remises de bourses d'excellence.</p>
        </div>
      </header>

      <main className="container mx-auto py-8 md:py-12 px-4 md:px-6 max-w-5xl">
        <EvenementsPublic />
      </main>
      
      <Footer />
    </div>
  )
}
