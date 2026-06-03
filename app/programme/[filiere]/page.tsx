import Link from 'next/link'
import { FILIERE_LABELS } from '@/lib/constants'
import { PublicNavbar } from '@/components/PublicNavbar'
import { Footer } from '@/components/Footer'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { InfiniteScroller } from '@/components/InfiniteScroller'
import { ArrowLeft, Target, BookOpen, Heart, Link as LinkIcon, CalendarDays, ArrowUpRight, CheckCircle2 } from 'lucide-react'

const FILIERE_CONTENT: Record<string, { objectives: string[]; matieres: string[]; esprit: string; deadline?: string; ressources?: {label: string, url: string}[]; integrationSchools?: {name: string, url: string, logo: string}[] }> = {
  scientifique: {
    objectives: [
      'Intégrer les grandes écoles d\'ingénieurs (Polytechnique, Centrale, Mines)',
      'Préparer l\'ENS et les prépas scientifiques',
      'Excellence en mathématiques et physique',
    ],
    matieres: ['Mathématiques', 'Physique'],
    esprit: 'Rigueur scientifique, esprit d\'excellence et entraide. Formation dispensée par des professeurs agrégés, normaliens et polytechniciens.',
    deadline: '15 Septembre',
    ressources: [
      { label: 'Polycopié Louis-Le-Grand (WikiPrépa)', url: '#' },
      { label: 'Cahier de calcul', url: '#' },
      { label: '50 dérivées', url: '#' },
    ],
    integrationSchools: [
      { name: "X", url: "https://www.polytechnique.edu/", logo: "/logos/polytechnique.png" },
      { name: "ENS Lyon", url: "https://www.ens-lyon.fr/", logo: "https://commons.wikimedia.org/wiki/Special:FilePath/Logo_ENS_de_Lyon_2010.png?width=400" },
      { name: "Mines", url: "https://minesparis.psl.eu/", logo: "/logos/mines-paris.png" },
      { name: "Centrale", url: "https://www.centralesupelec.fr/", logo: "https://commons.wikimedia.org/wiki/Special:FilePath/Ecole_Centrale_Supelec_logo.svg?width=400" },
      { name: "IMT Atlantique", url: "https://www.imt-atlantique.fr/fr", logo: "https://commons.wikimedia.org/wiki/Special:FilePath/Logo_IMT_Atlantique.svg?width=400" },
      { name: "Le Parc", url: "https://lyceeduparc.fr/", logo: "/logos/le-parc.png" },
      { name: "LLG", url: "https://www.louislegrand.fr/", logo: "/logos/louis-le-grand.png" },
      { name: "H4", url: "https://lycee-henri4.com/", logo: "/logos/henri-iv.png" },
      { name: "Saint Louis", url: "https://pia.ac-paris.fr/serail/jcms/s1_2080084/fr/accueil", logo: "/logos/saint-louis.jpg" }
    ]
  },
  commerce: {
    objectives: [
      'Intégrer HEC, ESSEC, ESCP et les grandes écoles de commerce',
      'Préparer les concours ECG, ECT et D2',
      'Développer une culture économique et géopolitique',
    ],
    matieres: ['Économie', 'Mathématiques', 'Culture générale', 'Langues', 'Géopolitique'],
    esprit: 'Ouverture sur le monde, esprit d\'analyse et de synthèse. Formation par des professeurs de l\'ESSEC et de l\'ENS.',
    deadline: '15 Septembre'
  },
  'droit-sciences-po': {
    objectives: [
      'Intégrer Sciences Po Paris et les IEP',
      'Accéder aux meilleures formations de droit (Panthéon-Sorbonne, Assas)',
      'Développer la méthodologie, l\'esprit d\'analyse et de synthèse',
    ],
    matieres: ['Droit privé', 'Droit public', 'Sciences politiques', 'Langues'],
    esprit: 'Excellence humaniste, esprit critique et engagement. Formation par des professeurs de Sciences Po Paris, ENS et Panthéon-Sorbonne.',
    deadline: '22 Septembre',
    integrationSchools: [
      { name: "Sciences Po Paris", url: "https://www.sciencespo.fr/", logo: "https://commons.wikimedia.org/wiki/Special:FilePath/Logo_Sciences_Po.svg?width=400" },
      { name: "Panthéon-Sorbonne", url: "https://www.pantheonsorbonne.fr/", logo: "/logos/sorbonne.svg" },
      { name: "Panthéon-Assas", url: "https://www.assas-universite.fr/", logo: "/logos/assas.webp" }
    ]
  },
}

export default async function FilierePage({ params }: { params: Promise<{ filiere: string }> }) {
  const { filiere } = await params
  const content = FILIERE_CONTENT[filiere]
  const label = FILIERE_LABELS[filiere] || FILIERE_LABELS[filiere.toUpperCase().replace(/-/g, '_')] || filiere

  if (!content) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <p className="text-muted-foreground">Filière non trouvée</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background font-sans">
      <PublicNavbar currentPage="programme" />
      
      <header className="pt-20 pb-8 md:pb-12 border-b border-border bg-card/30 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background -z-10"></div>
        <div className="container mx-auto px-4 md:px-6 max-w-4xl relative z-10 text-center">
          <Link href="/programme" className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-primary mb-6 md:mb-8 transition-colors group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Retour aux programmes
          </Link>
          <div className="flex flex-col items-center gap-3 md:gap-4">
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-accent/50 text-foreground text-xs font-bold uppercase tracking-wider rounded-full border border-border/50">
              Cursus d'excellence
            </span>
            <h1 className="flex flex-col">
               <TextGenerateEffect words="Filière" duration={0.2} />
               <TextGenerateEffect words={label} delay={0.4} className="font-serif italic font-normal text-primary" />
            </h1>
            <p className="mt-2 md:mt-4 text-base md:text-xl text-muted-foreground max-w-2xl leading-relaxed">100% gratuit – Formation d&apos;excellence</p>
          </div>
        </div>
      </header>

      <section className="py-8 md:py-12 px-4 md:px-12 bg-background">
        <div className="container mx-auto max-w-5xl flex flex-col md:grid md:grid-cols-3 gap-8 md:gap-12">
          
          {/* Candidature sidebar - shows FIRST on mobile */}
          <div className="order-first md:order-last md:col-span-1">
            <div className="md:sticky md:top-32 bg-card rounded-2xl md:rounded-3xl p-6 md:p-8 border border-border shadow-md">
              <h3 className="text-lg md:text-xl font-bold text-foreground mb-4 md:mb-6 font-sans">Candidature</h3>
              
              <div className="mb-6 md:mb-8">
                <p className="text-sm text-muted-foreground mb-2">Date limite d'envoi des dossiers</p>
                <div className="flex items-center gap-3 text-emerald-600 font-bold bg-emerald-600/10 p-3 md:p-4 rounded-xl border border-emerald-600/20">
                  <CalendarDays className="w-5 h-5 md:w-6 md:h-6" />
                  {content.deadline ? content.deadline : 'Prochainement'}
                </div>
                <p className="text-xs text-muted-foreground mt-2 md:mt-3 leading-relaxed">Après cette date, les candidatures ne seront plus prises en compte.</p>
              </div>
              
              <Button asChild className="w-full rounded-xl py-5 md:py-6 text-base group">
                <a href="https://tw3projet.fillout.com/eleves" target="_blank" rel="noopener noreferrer">
                  Candidater
                  <ArrowUpRight className="ml-2 w-5 h-5 group-hover:rotate-45 transition-transform" />
                </a>
              </Button>
            </div>
          </div>

          {/* Content cards */}
          <div className="md:col-span-2 space-y-6 md:space-y-12">
            
            {content.integrationSchools && (
              <InfiniteScroller schools={content.integrationSchools} />
            )}
            
            <Card className="border-border shadow-xs bg-card/50">
              <CardHeader>
                <CardTitle className="text-2xl font-bold flex items-center gap-3 font-sans">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary"><Target className="w-6 h-6" /></div>
                  Objectifs pédagogiques
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {content.objectives.map((obj, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground leading-relaxed">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      {obj}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border shadow-xs bg-card/50">
              <CardHeader>
                <CardTitle className="text-2xl font-bold flex items-center gap-3 font-sans">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary"><BookOpen className="w-6 h-6" /></div>
                  Matières enseignées
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  {content.matieres.map((m) => (
                    <span key={m} className="bg-background border border-border text-foreground font-medium px-4 py-2 rounded-xl shadow-xs">
                      {m}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-border shadow-xs bg-card/50">
              <CardHeader>
                <CardTitle className="text-2xl font-bold flex items-center gap-3 font-sans">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary"><Heart className="w-6 h-6" /></div>
                  L'esprit TW3
                </CardTitle>
              </CardHeader>
              <CardContent>
                 <p className="text-muted-foreground leading-relaxed">{content.esprit}</p>
              </CardContent>
            </Card>
            
            {content.ressources && (
              <Card className="border-border shadow-xs bg-card/50">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold flex items-center gap-3 font-sans">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary"><LinkIcon className="w-6 h-6" /></div>
                    Ressources de préparation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {content.ressources.map((res, i) => (
                      <a key={i} href={res.url} className="flex items-center justify-between bg-background p-4 rounded-xl border border-border hover:border-primary/50 hover:shadow-xs transition group">
                        <span className="font-medium text-foreground group-hover:text-primary transition">{res.label}</span>
                        <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:rotate-45 transition-all" />
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  )
}

export function generateStaticParams() {
  return [
    { filiere: 'scientifique' },
    { filiere: 'commerce' },
    { filiere: 'droit-sciences-po' },
  ]
}
