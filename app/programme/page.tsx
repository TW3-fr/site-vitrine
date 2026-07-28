'use client'

import Link from 'next/link'
import { PublicNavbar } from '@/components/PublicNavbar'
import { Footer } from '@/components/Footer'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'
import { FadeUp } from '@/components/ui/fade-up'
import { Card, CardHeader, CardTitle, CardContent, CardFooter, CardDescription } from '@/components/ui/card'
import { ArrowUpRight, Calculator, TrendingUp, Scale } from 'lucide-react'
import Image from 'next/image'

export default function ProgrammePage() {
  const parcours = [
    {
      title: "Scientifique",
      desc: "Intégrer le top écoles d'ingénieurs et ENS. Pour lycéens (2nde à Tle) et étudiants (prépas scientifiques). Destiné aux élèves motivés et travailleurs.",
      icon: <Calculator className="w-8 h-8" />,
      href: "/programme/scientifique",
      photo: "/photos/STG4681.jpg",
      svgIcon: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>,
    },
    {
      title: "Commerce",
      desc: "Intégrer le top écoles de commerce. Pour lycéens (2nde à Tle) et étudiants (prépas ECG, ECT et D2). Destiné aux élèves motivés et travailleurs.",
      icon: <TrendingUp className="w-8 h-8" />,
      href: "/programme/commerce",
      photo: "/photos/STG4716.jpg",
      svgIcon: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>,
    },
    {
      title: "Droit & Sciences politiques",
      desc: "Intégrer Sciences Po Paris ou les meilleures formations de droit. Pour lycéens et étudiants (facultés de droit et IEP).",
      icon: <Scale className="w-8 h-8" />,
      href: "/programme/droit-sciences-po",
      photo: "/photos/STG4722.jpg",
      svgIcon: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" /></svg>,
    },
  ];

  return (
    <div className="min-h-screen bg-background font-sans">
      <PublicNavbar currentPage="programme" theme="dark" />
      
      {/* Hero Header with photo background */}
      <section className="relative z-10 pt-24 md:pt-28 pb-16 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/photos/STG4638.jpg" 
            alt="Nos programmes" 
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-[#391457]/80 to-background"></div>
        </div>
        <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl relative z-10">
          <h1 className="flex flex-col mb-6 md:mb-8 items-center">
            <TextGenerateEffect words="Nos programmes" duration={0.3} className="text-white" />
            <TextGenerateEffect
              words="d'excellence."
              delay={0.5}
              className="font-serif italic font-bold tracking-tight text-tw3-accent"
            />
          </h1>
          <p className="text-base md:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto">
            Cursus <strong className="text-white">100% gratuits</strong> pour accéder aux filières les plus prestigieuses. Un encadrement sur-mesure par des professeurs issus des meilleures écoles.
          </p>
        </div>
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10"></div>
      </section>

      {/* Programme cards — Horizontal layout with integrated photos */}
      <section className="py-8 md:py-12 px-4 md:px-12 bg-background">
        <div className="container mx-auto max-w-6xl flex flex-col gap-6 md:gap-8">
          
          {parcours.map((p, i) => (
            <FadeUp key={i} delay={0.1 * (i + 1)}>
            <Link href={p.href} className="group block">
              <div className={`grid grid-cols-1 md:grid-cols-5 bg-card border border-border rounded-2xl md:rounded-3xl overflow-hidden hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-md ${i % 2 === 1 ? 'md:grid-flow-dense' : ''}`}>
                {/* Photo side */}
                <div className={`md:col-span-2 relative min-h-[200px] md:min-h-[280px] overflow-hidden ${i % 2 === 1 ? 'md:col-start-4' : ''}`}>
                  <Image 
                    src={p.photo}
                    alt={`Programme ${p.title}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover transition-transform duration-700 md:group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent md:bg-none"></div>
                </div>
                {/* Content side */}
                <div className={`md:col-span-3 p-6 md:p-10 flex flex-col justify-center ${i % 2 === 1 ? 'md:col-start-1' : ''}`}>
                  <div className="w-14 h-14 bg-accent/30 rounded-2xl flex items-center justify-center text-primary mb-5 md:group-hover:bg-primary md:group-hover:text-primary-foreground transition-colors duration-300">
                    {p.svgIcon}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold font-sans text-foreground mb-3 md:group-hover:text-primary transition-colors">{p.title}</h2>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">{p.desc}</p>
                  <span className="text-primary font-bold flex items-center gap-2 md:group-hover:gap-4 transition-all duration-300">
                    Découvrir le cursus <ArrowUpRight className="w-5 h-5 md:group-hover:rotate-45 transition-transform" />
                  </span>
                </div>
              </div>
            </Link>
            </FadeUp>
          ))}

        </div>
      </section>
      
      <Footer />
    </div>
  )
}
