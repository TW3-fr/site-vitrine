'use client'

import Link from 'next/link'
import { PublicNavbar } from '@/components/PublicNavbar'
import { Footer } from '@/components/Footer'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'
import { Card, CardHeader, CardTitle, CardContent, CardFooter, CardDescription } from '@/components/ui/card'
import { ArrowUpRight } from 'lucide-react'

export default function ProgrammePage() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <PublicNavbar currentPage="programme" />
      
      <section className="pt-24 md:pt-28 pb-6 md:pb-8 border-b border-border bg-card/30 relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background -z-10"></div>
        <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl relative z-10">
          <h1 className="flex flex-col mb-6 md:mb-8 items-center">
            <TextGenerateEffect words="Nos programmes" duration={0.3} />
            <TextGenerateEffect
              words="d'excellence."
              delay={0.5}
              className="font-serif italic tracking-tight text-primary"
            />
          </h1>
          <p className="text-base md:text-xl text-muted-foreground leading-relaxed">
            Cursus 100% gratuits pour accéder aux filières les plus prestigieuses. Un encadrement sur-mesure par des professeurs issus des meilleures écoles.
          </p>
        </div>
      </section>

      <section className="py-6 md:py-8 px-4 md:px-12 bg-background">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8">
          
          {/* Card Scientifique */}
          <Link href="/programme/scientifique" className="group h-full">
            <Card className="h-full hover:border-primary/50 transition-colors md:group-hover:shadow-md cursor-pointer flex flex-col justify-between">
              <CardHeader>
                <div className="w-16 h-16 bg-accent/30 rounded-2xl flex items-center justify-center text-primary mb-6 md:group-hover:bg-primary md:group-hover:text-primary-foreground transition-colors">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                </div>
                <CardTitle className="text-2xl font-bold font-sans">Filière Scientifique</CardTitle>
                <CardDescription className="text-base mt-4">
                  Intégrer le top écoles d'ingénieurs et ENS. Pour lycéens (2nde à Tle) et étudiants (prépas scientifiques). Destiné aux élèves motivés et travailleurs.
                </CardDescription>
              </CardHeader>
              <CardFooter className="pt-6 border-t border-border mt-6">
                <span className="text-primary font-bold flex items-center gap-2 md:group-hover:underline">
                  Découvrir le cursus <ArrowUpRight className="w-4 h-4 md:group-hover:rotate-45 transition-transform" />
                </span>
              </CardFooter>
            </Card>
          </Link>

          {/* Card Commerce */}
          <Link href="/programme/commerce" className="group h-full">
            <Card className="h-full hover:border-primary/50 transition-colors md:group-hover:shadow-md cursor-pointer flex flex-col justify-between">
              <CardHeader>
                <div className="w-16 h-16 bg-accent/30 rounded-2xl flex items-center justify-center text-primary mb-6 md:group-hover:bg-primary md:group-hover:text-primary-foreground transition-colors">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                </div>
                <CardTitle className="text-2xl font-bold font-sans">Filière Commerce</CardTitle>
                <CardDescription className="text-base mt-4">
                  Intégrer le top écoles de commerce. Pour lycéens (2nde à Tle) et étudiants (prépas ECG, ECT et D2). Destiné aux élèves motivés et travailleurs.
                </CardDescription>
              </CardHeader>
              <CardFooter className="pt-6 border-t border-border mt-6">
                <span className="text-primary font-bold flex items-center gap-2 md:group-hover:underline">
                  Découvrir le cursus <ArrowUpRight className="w-4 h-4 md:group-hover:rotate-45 transition-transform" />
                </span>
              </CardFooter>
            </Card>
          </Link>

          {/* Card Droit */}
          <Link href="/programme/droit-sciences-po" className="group h-full">
            <Card className="h-full hover:border-primary/50 transition-colors md:group-hover:shadow-md cursor-pointer flex flex-col justify-between">
              <CardHeader>
                <div className="w-16 h-16 bg-accent/30 rounded-2xl flex items-center justify-center text-primary mb-6 md:group-hover:bg-primary md:group-hover:text-primary-foreground transition-colors">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" /></svg>
                </div>
                <CardTitle className="text-2xl font-bold font-sans">Droit & Sciences Po</CardTitle>
                <CardDescription className="text-base mt-4">
                  Intégrer Sciences Po Paris ou les meilleures formations de droit. Pour lycéens et étudiants (facultés de droit et IEP).
                </CardDescription>
              </CardHeader>
              <CardFooter className="pt-6 border-t border-border mt-6">
                <span className="text-primary font-bold flex items-center gap-2 md:group-hover:underline">
                  Découvrir le cursus <ArrowUpRight className="w-4 h-4 md:group-hover:rotate-45 transition-transform" />
                </span>
              </CardFooter>
            </Card>
          </Link>

        </div>
      </section>
      
      <Footer />
    </div>
  )
}
