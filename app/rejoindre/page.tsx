'use client'

import Link from 'next/link'
import { PublicNavbar } from '@/components/PublicNavbar'
import { Footer } from '@/components/Footer'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'
import { Button } from '@/components/ui/button'
import { CheckCircle2, ArrowUpRight, Users2, GraduationCap } from 'lucide-react'

export default function RejoindrePage() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <PublicNavbar currentPage="rejoindre" />
      
      <header className="pt-20 pb-8 md:pb-12 border-b border-border bg-card/30 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background -z-10"></div>
        <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl relative z-10">
          <span className="inline-flex items-center gap-2 px-3 py-1 bg-accent/50 text-foreground text-xs font-bold uppercase tracking-wider rounded-full border border-border/50 mb-4 md:mb-6">
            Bénévolat & Engagement
          </span>
          <h1 className="flex flex-col mb-4 md:mb-6 items-center">
             <TextGenerateEffect words="Rejoindre" duration={0.2} />
             <TextGenerateEffect words="TW3" delay={0.4} className="font-serif italic font-normal text-primary" />
          </h1>
          <p className="mt-3 md:mt-4 text-base md:text-xl text-muted-foreground leading-relaxed">Rejoignez l'aventure TW3, que ce soit pour transmettre votre savoir ou pour viser l'excellence académique.</p>
        </div>
      </header>

      <section className="py-8 md:py-12 px-4 md:px-12 bg-background">
        <div className="container mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-stretch">
          
          {/* Section Bénévole */}
          <div className="bg-card rounded-2xl md:rounded-3xl p-6 md:p-8 border border-border shadow-xs flex flex-col hover:border-primary/50 transition-colors">
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4 md:mb-6 flex items-center gap-3 font-sans">
              <div className="p-2 bg-primary/10 rounded-lg text-primary"><Users2 className="w-6 h-6" /></div>
              Devenir Bénévole
            </h3>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              Rejoignez une équipe dynamique et engagée pour avoir un impact direct sur la trajectoire d'élèves motivés. Il n'y a pas de poste spécifique recherché pour le moment, mais nous sommes toujours à l'écoute de profils passionnés pour enrichir nos pôles (filières, communication, événementiel...).
            </p>
            
            <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-foreground leading-relaxed">Transmettez votre savoir et votre expérience en encadrant les élèves</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-foreground leading-relaxed">Intégrez un réseau intergénérationnel d'excellence</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-foreground leading-relaxed">Participez à une aventure associative humaine et ambitieuse</span>
              </li>
            </ul>

            <Button asChild size="lg" className="w-full rounded-xl py-6 text-base group mt-auto">
              <a href="https://tw3projet.fillout.com/benevoles" target="_blank" rel="noopener noreferrer">
                Candidater comme bénévole
                <ArrowUpRight className="ml-2 w-5 h-5 group-hover:rotate-45 transition-transform" />
              </a>
            </Button>
          </div>

          {/* Section Élève */}
          <div className="bg-card rounded-3xl p-8 border border-border shadow-xs flex flex-col hover:border-primary/50 transition-colors">
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3 font-sans">
              <div className="p-2 bg-primary/10 rounded-lg text-primary"><GraduationCap className="w-6 h-6" /></div>
              Devenir Élève
            </h3>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              Vous êtes motivé, rigoureux et visez les meilleures écoles ? Rejoignez nos cursus pour bénéficier d'un accompagnement intensif (mathématiques, physique, méthodologie...) vers les concours et formations d'excellence.
            </p>
            
            <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-foreground leading-relaxed">Formation approfondie inspirée des meilleures prépas</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-foreground leading-relaxed">Préparation concrète aux concours avec tests blancs et khôlles</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-foreground leading-relaxed">Processus d'admission rigoureux (dossier, épreuve écrite, entretien)</span>
              </li>
            </ul>

            <Button asChild size="lg" className="w-full rounded-xl py-6 text-base group mt-auto">
              <a href="https://tw3projet.fillout.com/eleves" target="_blank" rel="noopener noreferrer">
                Candidater comme élève
                <ArrowUpRight className="ml-2 w-5 h-5 group-hover:rotate-45 transition-transform" />
              </a>
            </Button>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  )
}
