'use client'

import { PublicNavbar } from '@/components/PublicNavbar'
import { EvenementsPublic } from '@/components/EvenementsPublic'
import { Footer } from '@/components/Footer'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'
import { FadeUp } from '@/components/ui/fade-up'

export default function EvenementsPage() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <PublicNavbar currentPage="evenements" theme="dark" />

      {/* Hero — Full-width photo with overlay */}
      <section className="relative z-10 pt-24 md:pt-28 pb-16 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/photos/IMG_4815.jpg" 
            alt="Audience lors d'un événement TW3" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-[#391457]/80 to-background"></div>
        </div>
        <div className="container mx-auto px-4 md:px-6 max-w-4xl relative z-10 text-center">
          <span className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-white/90 text-xs font-bold uppercase tracking-wider rounded-full border border-white/20 backdrop-blur-md mb-4 md:mb-6 w-fit">
            Rencontres & Inspirations
          </span>
          <h1 className="flex flex-col mb-4 md:mb-6 items-center">
             <TextGenerateEffect words="Nos" duration={0.2} className="text-white" />
             <TextGenerateEffect words="événements" delay={0.4} className="font-serif italic font-bold text-tw3-accent" />
          </h1>
          <p className="mt-3 md:mt-4 text-base md:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto">Découvrez nos événements inspirants et webinaires conçus pour vous guider vers l'excellence.</p>
        </div>
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10"></div>
      </section>

      <main className="container mx-auto py-8 md:py-16 px-4 md:px-6 max-w-5xl">
        <FadeUp delay={0.1}>
          <EvenementsPublic />
        </FadeUp>
      </main>
      
      <Footer />
    </div>
  )
}
