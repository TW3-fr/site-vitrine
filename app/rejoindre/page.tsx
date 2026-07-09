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
            <TextGenerateEffect words="TW3" delay={0.4} className="font-serif italic font-bold text-primary" />
          </h1>
          <p className="mt-3 md:mt-4 text-base md:text-xl text-muted-foreground leading-relaxed">Rejoignez l'aventure TW3, que ce soit pour transmettre votre savoir ou pour viser l'excellence académique.</p>
        </div>
      </header>

      <section className="py-6 md:py-10 px-4 md:px-12 bg-background">
        <div className="container mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-8 items-stretch">

          {/* Section Bénévole */}
          <div className="bg-card rounded-2xl p-5 md:p-8 border border-border shadow-sm flex flex-col hover:border-primary/50 transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>

            <div className="flex flex-col mb-4 md:mb-6 gap-4">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2 flex items-center gap-3 font-sans">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary"><Users2 className="w-6 h-6" /></div>
                  Devenir Bénévole
                </h3>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                  Rejoignez une équipe dynamique et engagée pour avoir un impact direct sur la trajectoire d'élèves motivés.
                </p>
              </div>
            </div>

            <div className="flex-grow">
              <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3 font-sans">Vos avantages en tant que bénévole/mentor</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2.5 bg-background/50 px-3 py-2.5 rounded-lg border border-border/50">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-sm text-foreground"><strong>Réseau d'étudiants</strong> des meilleures écoles</span>
                </li>
                <li className="flex items-center gap-2.5 bg-background/50 px-3 py-2.5 rounded-lg border border-border/50">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-sm text-foreground"><strong>Réseau professionnel</strong> (opportunités CDI/stages)</span>
                </li>
                <li className="flex items-center gap-2.5 bg-background/50 px-3 py-2.5 rounded-lg border border-border/50">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-sm text-foreground"><strong>Cours d'arabe</strong> <strong>gratuits</strong></span>
                </li>
                <li className="flex items-center gap-2.5 bg-background/50 px-3 py-2.5 rounded-lg border border-border/50">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-sm text-foreground"><strong>Possibilité de stage</strong> au sein de la structure</span>
                </li>
                <li className="flex items-center gap-2.5 bg-background/50 px-3 py-2.5 rounded-lg border border-border/50">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-sm text-foreground"><strong>Compte</strong> de paiement <a href="https://www.laymoon.fr" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2 hover:text-primary/80 font-semibold">Laymoon</a> à 0€</span>
                </li>
                <li className="flex items-center gap-2.5 bg-background/50 px-3 py-2.5 rounded-lg border border-border/50">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-sm text-foreground"><strong>Bourses étudiantes</strong></span>
                </li>
              </ul>
            </div>
            
            <div className="mt-6 pt-4 border-t border-border/50">
              <Button asChild size="default" className="rounded-xl px-6 py-5 text-sm group w-full">
                <a href="https://tw3projet.fillout.com/benevoles" target="_blank" rel="noopener noreferrer">
                  Je m'engage
                  <ArrowUpRight className="ml-2 w-4 h-4 md:group-hover:rotate-45 transition-transform" />
                </a>
              </Button>
            </div>
          </div>

          {/* Section Élève */}
          <div className="bg-card rounded-2xl p-5 md:p-8 border border-border shadow-sm flex flex-col hover:border-primary/50 transition-all duration-300 relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/5 rounded-full blur-3xl -z-10 -translate-x-1/2 translate-y-1/2"></div>

            <div className="flex flex-col mb-4 md:mb-6 gap-4">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2 flex items-center gap-3 font-sans">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary"><GraduationCap className="w-6 h-6" /></div>
                  Devenir Élève
                </h3>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                  Vous êtes motivé, rigoureux et visez les meilleures écoles ? Rejoignez nos filières Scientifique, Commerce ou Droit &amp; Sciences politiques pour bénéficier d'un accompagnement intensif par les étudiants des meilleures écoles vers les concours et formations d'excellence.
                </p>
              </div>
            </div>

            <div className="flex-grow">
              <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3 font-sans">Ce que nous vous offrons</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2.5 bg-background/50 px-3 py-2.5 rounded-lg border border-border/50">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-sm text-foreground"><strong>Formation approfondie</strong> inspirée des meilleures prépas</span>
                </li>
                <li className="flex items-center gap-2.5 bg-background/50 px-3 py-2.5 rounded-lg border border-border/50">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-sm text-foreground"><strong>Préparation concrète</strong> aux concours avec tests blancs et khôlles</span>
                </li>
                <li className="flex items-center gap-2.5 bg-background/50 px-3 py-2.5 rounded-lg border border-border/50">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-sm text-foreground"><strong>Processus d'admission rigoureux</strong> (dossier, épreuve écrite, entretien)</span>
                </li>
                <li className="flex items-start gap-2.5 bg-background/50 px-3 py-2.5 rounded-lg border border-border/50">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground"><strong>Bourses d'excellence</strong> (conditions déterminées par l'administration)</span>
                </li>
              </ul>
            </div>
            
            <div className="mt-6 pt-4 border-t border-border/50 flex flex-col sm:flex-row gap-3">
              <Button asChild size="default" className="rounded-xl px-6 py-5 text-sm group w-full sm:w-1/2">
                <a href="https://tw3projet.fillout.com/eleves" target="_blank" rel="noopener noreferrer">
                  Candidater
                  <ArrowUpRight className="ml-2 w-4 h-4 md:group-hover:rotate-45 transition-transform" />
                </a>
              </Button>
              <Button asChild size="default" variant="outline" className="rounded-xl px-6 py-5 text-sm group w-full sm:w-1/2">
                <Link href="/programme">
                  Nos programmes
                  <ArrowUpRight className="ml-2 w-4 h-4 md:group-hover:rotate-45 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  )
}
