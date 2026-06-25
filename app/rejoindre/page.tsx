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

      <header className="pt-20 pb-6 md:pb-8 border-b border-border bg-card/30 relative overflow-hidden">
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

      <section className="py-8 md:py-16 px-4 md:px-12 bg-background">
        <div className="container mx-auto max-w-5xl flex flex-col gap-8 md:gap-12">

          {/* Section Bénévole */}
          <div className="bg-card rounded-3xl p-6 md:p-10 border border-border shadow-sm flex flex-col hover:border-primary/50 transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>
            
            <div className="flex flex-col md:flex-row md:items-start justify-between mb-6 md:mb-8 gap-6">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 flex items-center gap-4 font-sans">
                  <div className="p-3 bg-primary/10 rounded-xl text-primary shadow-inner"><Users2 className="w-7 h-7" /></div>
                  Devenir Bénévole
                </h3>
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl">
                  Rejoignez une équipe dynamique et engagée pour avoir un impact direct sur la trajectoire d'élèves motivés.
                </p>
              </div>
              <Button asChild size="lg" className="rounded-xl px-8 py-6 text-base group whitespace-nowrap shrink-0 w-full md:w-auto">
                <a href="https://tw3projet.fillout.com/benevoles" target="_blank" rel="noopener noreferrer">
                  Je m'engage
                  <ArrowUpRight className="ml-2 w-5 h-5 md:group-hover:rotate-45 transition-transform" />
                </a>
              </Button>
            </div>

            <div className="mt-2">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">Vos avantages en tant que mentor</h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                <li className="flex items-start gap-3 bg-background/50 p-3 md:p-4 rounded-xl border border-border/50">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base text-foreground leading-relaxed"><strong>Réseau d’étudiants</strong> (opportunités pro et académiques)</span>
                </li>
                <li className="flex items-start gap-3 bg-background/50 p-3 md:p-4 rounded-xl border border-border/50">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base text-foreground leading-relaxed"><strong>Réseau professionnel</strong> très premium</span>
                </li>
                <li className="flex items-start gap-3 bg-background/50 p-3 md:p-4 rounded-xl border border-border/50">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base text-foreground leading-relaxed"><strong>Cours d'arabe</strong> gratuits</span>
                </li>
                <li className="flex items-start gap-3 bg-background/50 p-3 md:p-4 rounded-xl border border-border/50">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base text-foreground leading-relaxed"><strong>Possibilité de stage</strong> chez nous</span>
                </li>
                <li className="flex items-start gap-3 bg-background/50 p-3 md:p-4 rounded-xl border border-border/50">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base text-foreground leading-relaxed"><strong>Laymoon</strong> avec compte à 0€</span>
                </li>
                <li className="flex items-start gap-3 bg-background/50 p-3 md:p-4 rounded-xl border border-border/50">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base text-foreground leading-relaxed"><strong>Code promo</strong> exclusif Bayyinah</span>
                </li>
                <li className="flex items-start gap-3 bg-background/50 p-3 md:p-4 rounded-xl border border-border/50">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base text-foreground leading-relaxed"><strong>Prêts étudiants</strong> à 0%</span>
                </li>
                <li className="flex items-start gap-3 bg-background/50 p-3 md:p-4 rounded-xl border border-border/50">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base text-foreground leading-relaxed"><strong>Priorité</strong> à des événements exclusifs</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Section Élève */}
          <div className="bg-card rounded-3xl p-6 md:p-10 border border-border shadow-sm flex flex-col hover:border-primary/50 transition-all duration-300 relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10 -translate-x-1/2 translate-y-1/2"></div>
            
            <div className="flex flex-col md:flex-row md:items-start justify-between mb-6 md:mb-8 gap-6">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 flex items-center gap-4 font-sans">
                  <div className="p-3 bg-primary/10 rounded-xl text-primary shadow-inner"><GraduationCap className="w-7 h-7" /></div>
                  Devenir Élève
                </h3>
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl">
                  Vous êtes motivé, rigoureux et visez les meilleures écoles ? Rejoignez nos cursus pour bénéficier d'un accompagnement intensif (mathématiques, physique, méthodologie...) vers les concours et formations d'excellence.
                </p>
              </div>
              <Button asChild size="lg" variant="outline" className="rounded-xl px-8 py-6 text-base group w-full md:w-auto border-primary/20 hover:bg-primary/5 shrink-0">
                <a href="https://tw3projet.fillout.com/eleves" target="_blank" rel="noopener noreferrer">
                  Candidater
                  <ArrowUpRight className="ml-2 w-5 h-5 md:group-hover:rotate-45 transition-transform" />
                </a>
              </Button>
            </div>

            <div className="mt-2">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">Ce que nous vous offrons</h4>
              <ul className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
                <li className="flex items-start gap-3 bg-background/50 p-3 md:p-4 rounded-xl border border-border/50">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base text-foreground leading-relaxed">Formation approfondie inspirée des meilleures prépas</span>
                </li>
                <li className="flex items-start gap-3 bg-background/50 p-3 md:p-4 rounded-xl border border-border/50">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base text-foreground leading-relaxed">Préparation concrète aux concours avec tests blancs et khôlles</span>
                </li>
                <li className="flex items-start gap-3 bg-background/50 p-3 md:p-4 rounded-xl border border-border/50">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base text-foreground leading-relaxed">Processus d'admission rigoureux (dossier, épreuve écrite, entretien)</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  )
}
