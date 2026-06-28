import React from 'react'
import Link from 'next/link'
import { FILIERE_LABELS } from '@/lib/constants'
import { PublicNavbar } from '@/components/PublicNavbar'
import { Footer } from '@/components/Footer'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { InfiniteScroller } from '@/components/InfiniteScroller'
import { ArrowLeft, Target, BookOpen, Heart, Link as LinkIcon, CalendarDays, ArrowUpRight, CheckCircle2, Info } from 'lucide-react'
import { CollapsibleLevel } from '@/components/CollapsibleLevel'

interface RessourceGroup {
  niveau: string
  items: { label: string; url: string }[]
}

const FILIERE_CONTENT: Record<string, {
  objectives: (string | React.ReactNode)[];
  matieres: string[];
  esprit: string;
  deadline?: string;
  ressourceGroups?: RessourceGroup[];
  ressourceNote?: string;
  integrationSchools?: { name: string; url: string; logo: string; className?: string }[]
}> = {
  scientifique: {
    objectives: [
      'Accompagnement de la Seconde à la Spé',
      'Intégrer les grandes écoles d\'ingénieurs (Polytechnique, Centrale, Mines)',
      'Développer la méthodologie, l\'esprit d\'analyse et les automatismes',
      <span key="ast" className="inline-block bg-gradient-to-r from-primary/10 to-emerald-500/10 px-4 py-2 rounded-xl border border-primary/30 shadow-md shadow-primary/20 -mt-1.5">
        <span className="font-extrabold italic bg-clip-text text-transparent bg-gradient-to-r from-primary to-emerald-600 mr-2 animate-pulse inline-block">
          NOUVEAUTÉ SAISON 4 :
        </span>
        <span className="font-semibold text-foreground">
          Ouverture de la filière AST (Admissions Sur Titre) pour préparer aux concours GEI-Univ, CASTing (Centrale) et ENS.
        </span>
      </span>,
    ],
    matieres: ['Mathématiques', 'Physique', 'Anglais', 'Arabe'],
    esprit: 'Rigueur scientifique, esprit d\'excellence et entraide. Formation dispensée par des professeurs agrégés, normaliens et polytechniciens.',
    deadline: '15 Septembre',
    ressourceGroups: [
      {
        niveau: 'Seconde',
        items: [
          { label: 'Calcul algébrique 1 — Puissance, fraction, signe', url: '/ressources/calcul_algebrique_1_seconde.pdf' },
          { label: 'Calcul algébrique 2 — Distributivité et factorisation', url: '/ressources/calcul_algebrique_2_seconde.pdf' },
          { label: 'Calcul algébrique 4 — Racines', url: '/ressources/calcul_algebrique_4_seconde.pdf' },
          { label: 'Calcul algébrique 5 — Factorisation avancée', url: '/ressources/calcul_algebrique_5_seconde.pdf' },
          { label: 'Calcul algébrique 6 — Résolution d\'équations', url: '/ressources/calcul_algebrique_6_seconde.pdf' },
          { label: 'Seconde 7', url: '/ressources/seconde_7.pdf' },
          { label: 'Seconde 8', url: '/ressources/seconde_8.pdf' },
          { label: 'Contrôle 1 Seconde', url: '/ressources/controle_1_seconde.pdf' },
          { label: 'Examen Seconde TW3 (année précédente)', url: '/ressources/exam_seconde_tw3.pdf' },
        ]
      },
      {
        niveau: 'Première',
        items: [
          { label: 'Première 1', url: '/ressources/premiere_1.pdf' },
          { label: 'Première 2', url: '/ressources/premiere_2.pdf' },
          { label: 'Seconde avancée → Première', url: '/ressources/seconde_avancee_premiere.pdf' },
          { label: 'Première avancée → Terminale', url: '/ressources/premiere_avancee_term.pdf' },
          { label: 'Examen Première TW3 (année précédente)', url: '/ressources/exam_premiere_tw3.pdf' },
        ]
      },
      {
        niveau: 'Terminale',
        items: [
          { label: 'Terminale 1', url: '/ressources/term1.pdf' },
          { label: 'Terminale 2', url: '/ressources/term2.pdf' },
          { label: 'Terminale 3', url: '/ressources/term3.pdf' },
          { label: 'Terminale avancée', url: '/ressources/terminale_avancee.pdf' },
          { label: 'Première avancée → Terminale', url: '/ressources/premiere_avancee_term.pdf' },
          { label: 'Examen Terminale TW3 (année précédente)', url: '/ressources/exam_terminale_tw3.pdf' },
          { label: 'Feuilleter le Poly LLG corrigé (WikiPrépa)', url: 'https://wikiprepa.fr/poly-llg-corrige/' },
        ]
      },
      {
        niveau: 'Sup',
        items: [
          { label: 'Finir entièrement le Poly LLG corrigé (WikiPrépa)', url: 'https://wikiprepa.fr/poly-llg-corrige/' },
          { label: 'Finir entièrement le Poly Saint Louis corrigé (MPSI, PCSI, MP2I)', url: 'https://wikiprepa.fr/poly-saint-louis-corrige-transition-mpsi-pcsi-mp2i/' },
        ]
      },
    ],
    ressourceNote: 'Les ressources disponibles pour les 2nde sont supposées maîtrisées par les 1ères, et celles des 1ères par les Tles (qui peut le plus peut le moins). Par ailleurs, si des notions ne vous sont pas familières ou vous paraissent compliquées : apprenez-les et maîtrisez-les. N\'ayez pas peur d\'aller au-delà du programme, il ne faut pas s\'y enfermer. Nous évaluons également votre capacité à prendre des initiatives.',
    integrationSchools: [
      { name: "X", url: "https://www.polytechnique.edu/", logo: "/logos/polytechnique.png" },
      { name: "ENS Lyon", url: "https://www.ens-lyon.fr/", logo: "https://commons.wikimedia.org/wiki/Special:FilePath/Logo_ENS_de_Lyon_2010.png?width=400" },
      { name: "Mines", url: "https://minesparis.psl.eu/", logo: "/logos/mines-paris.png" },
      { name: "Centrale", url: "https://www.centralesupelec.fr/", logo: "https://commons.wikimedia.org/wiki/Special:FilePath/Ecole_Centrale_Supelec_logo.svg?width=400" },
      { name: "IMT Atlantique", url: "https://www.imt-atlantique.fr/fr", logo: "https://commons.wikimedia.org/wiki/Special:FilePath/Logo_IMT_Atlantique.svg?width=400" },
      { name: "Le Parc", url: "https://lyceeduparc.fr/", logo: "/logos/le-parc.png" },
      { name: "Ginette", url: "https://www.bginette.com/", logo: "/logos/ginette.png", className: "h-20 md:h-28" },
      { name: "LLG", url: "https://www.louislegrand.fr/", logo: "/logos/louis-le-grand.png" },
      { name: "H4", url: "https://lycee-henri4.com/", logo: "/logos/henri-iv.png" },
      { name: "Saint Louis", url: "https://pia.ac-paris.fr/serail/jcms/s1_2080084/fr/accueil", logo: "/logos/saint-louis.jpg" },
      { name: "Lycée Hoche", url: "https://lyc-hoche-versailles.ac-versailles.fr/", logo: "/logos/hoche.png" },
      { name: "Télécom Paris", url: "https://www.telecom-paris.fr/", logo: "/logos/logo-vectoriel-telecom-paris.webp", className: "h-20 md:h-28 !w-[110px] md:!w-[160px] !object-cover" }
    ]
  },
  commerce: {
    objectives: [
      'Accompagnement de la Seconde à la Spé',
      'Intégrer HEC, ESSEC, ESCP et les grandes écoles de commerce',
      'Développer la méthodologie, l\'esprit d\'analyse et les automatismes',
    ],
    matieres: ['Économie', 'Mathématiques', 'Anglais', 'Arabe', 'Géopolitique'],
    esprit: 'Ouverture sur le monde, esprit d\'analyse et de synthèse. Formation par des professeurs de l\'ESSEC et de l\'ENS.',
    deadline: '15 Septembre',
    ressourceGroups: [
      {
        niveau: 'Seconde',
        items: [
          { label: 'Calcul algébrique 1 — Puissance, fraction, signe', url: '/ressources/calcul_algebrique_1_seconde.pdf' },
          { label: 'Calcul algébrique 2 — Distributivité et factorisation', url: '/ressources/calcul_algebrique_2_seconde.pdf' },
          { label: 'Calcul algébrique 4 — Racines', url: '/ressources/calcul_algebrique_4_seconde.pdf' },
          { label: 'Calcul algébrique 5 — Factorisation avancée', url: '/ressources/calcul_algebrique_5_seconde.pdf' },
          { label: 'Calcul algébrique 6 — Résolution d\'équations', url: '/ressources/calcul_algebrique_6_seconde.pdf' },
          { label: 'Seconde 7', url: '/ressources/seconde_7.pdf' },
          { label: 'Seconde 8', url: '/ressources/seconde_8.pdf' },
          { label: 'Contrôle 1 Seconde', url: '/ressources/controle_1_seconde.pdf' },
        ]
      },
      {
        niveau: 'Première',
        items: [
          { label: 'Première 1', url: '/ressources/premiere_1.pdf' },
          { label: 'Première 2', url: '/ressources/premiere_2.pdf' },
          { label: 'Seconde avancée → Première', url: '/ressources/seconde_avancee_premiere.pdf' },
          { label: 'Première avancée → Terminale', url: '/ressources/premiere_avancee_term.pdf' },
        ]
      },
      {
        niveau: 'Terminale',
        items: [
          { label: 'Terminale 1', url: '/ressources/term1.pdf' },
          { label: 'Terminale 2', url: '/ressources/term2.pdf' },
          { label: 'Terminale 3', url: '/ressources/term3.pdf' },
          { label: 'Terminale avancée', url: '/ressources/terminale_avancee.pdf' },
          { label: 'Première avancée → Terminale', url: '/ressources/premiere_avancee_term.pdf' },
        ]
      },
      {
        niveau: 'Sup',
        items: [
          { label: 'Finir entièrement le Poly LLG corrigé (WikiPrépa)', url: 'https://wikiprepa.fr/poly-llg-corrige/' },
          { label: 'Finir entièrement le Poly ECG de LLG', url: '/ressources/cahier_ecg_llg.pdf' },
          { label: 'Finir entièrement le Poly Saint Louis corrigé (même pour ECG)', url: 'https://wikiprepa.fr/poly-saint-louis-corrige-transition-mpsi-pcsi-mp2i/' },
        ]
      },
    ],
    ressourceNote: 'Les ressources disponibles pour les 2nde sont supposées maîtrisées par les 1ères, et celles des 1ères par les Tles (qui peut le plus peut le moins). Par ailleurs, si des notions ne vous sont pas familières ou vous paraissent compliquées : apprenez-les et maîtrisez-les. N\'ayez pas peur d\'aller au-delà du programme, il ne faut pas s\'y enfermer. Nous évaluons également votre capacité à prendre des initiatives.',
    integrationSchools: [
      { name: "LLG", url: "https://www.louislegrand.fr/", logo: "/logos/louis-le-grand.png" },
      { name: "H4", url: "https://lycee-henri4.com/", logo: "/logos/henri-iv.png" },
      { name: "Saint Louis", url: "https://pia.ac-paris.fr/serail/jcms/s1_2080084/fr/accueil", logo: "/logos/saint-louis.jpg" },
      { name: "Lycée Hoche", url: "https://lyc-hoche-versailles.ac-versailles.fr/", logo: "/logos/hoche.png" },
      { name: "Panthéon-Assas", url: "https://www.assas-universite.fr/", logo: "/logos/assas.webp" }
    ]
  },
  'droit-sciences-po': {
    objectives: [
      'Accompagnement de la 2nd à la L3',
      'Intégrer Sciences Po Paris et les IEP',
      'Développer la méthodologie, l\'esprit d\'analyse et les automatismes',
    ],
    matieres: ['Droit privé', 'Droit public', 'Sciences politiques', 'Anglais', 'Arabe'],
    esprit: 'Excellence humaniste, esprit critique et engagement. Formation par des professeurs de Sciences Po Paris, ENS et Panthéon-Sorbonne.',
    deadline: '22 Septembre',
    ressourceGroups: [
      {
        niveau: 'Tous niveaux',
        items: [
          { label: 'Bibliographie TW3', url: '/ressources/Bibliographie_TW3.pdf' }
        ]
      }
    ],
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

      <header className="pt-28 md:pt-32 pb-6 md:pb-8 border-b border-border bg-card/30 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background -z-10"></div>
        <div className="container mx-auto px-4 md:px-6 max-w-4xl relative z-10 text-center">
          <Link href="/programme" className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-primary mb-6 md:mb-8 transition-colors group">
            <ArrowLeft className="w-4 h-4 md:group-hover:-translate-x-1 transition-transform" />
            Retour aux programmes
          </Link>
          <div className="flex flex-col items-center gap-3 md:gap-4">
            <div className="flex flex-wrap justify-center items-center gap-3">
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-accent/50 text-foreground text-xs font-bold uppercase tracking-wider rounded-full border border-border/50">
                Cursus d&apos;excellence
              </span>
            </div>
            <h1 className="flex flex-col">
              <TextGenerateEffect words="Filière" duration={0.2} />
              <TextGenerateEffect words={label} delay={0.4} className="font-serif italic font-normal text-primary" />
            </h1>
            <p className="mt-2 md:mt-4 text-base md:text-xl text-muted-foreground max-w-2xl leading-relaxed">100% gratuit – Formation d&apos;excellence</p>
          </div>
        </div>
      </header>

      <section className="py-4 md:py-8 px-4 md:px-12 bg-background">
        <div className="container mx-auto max-w-5xl flex flex-col md:grid md:grid-cols-3 gap-5 md:gap-12">

          {/* Candidature sidebar - shows FIRST on mobile */}
          <div className="order-first md:order-last md:col-span-1">
            <div className="md:sticky md:top-32 bg-card rounded-2xl md:rounded-3xl p-6 md:p-8 border border-border shadow-md">
              <h3 className="text-lg md:text-xl font-bold text-foreground mb-4 md:mb-6 font-sans">Candidature</h3>

              <div className="mb-6 md:mb-8">
                <p className="text-sm text-muted-foreground mb-2">Date limite d&apos;envoi des dossiers</p>
                <div className="flex items-center gap-3 text-emerald-600 font-bold bg-emerald-600/10 p-3 md:p-4 rounded-xl border border-emerald-600/20">
                  <CalendarDays className="w-5 h-5 md:w-6 md:h-6" />
                  {content.deadline ? content.deadline : 'Prochainement'}
                </div>
                <p className="text-xs text-muted-foreground mt-2 md:mt-3 leading-relaxed">Après cette date, les candidatures ne seront plus prises en compte.</p>
              </div>

              <Button asChild className="w-full rounded-xl py-5 md:py-6 text-base group">
                <a href="https://tw3projet.fillout.com/eleves" target="_blank" rel="noopener noreferrer">
                  Candidater
                  <ArrowUpRight className="ml-2 w-5 h-5 md:group-hover:rotate-45 transition-transform" />
                </a>
              </Button>
            </div>
          </div>

          {/* Content cards */}
          <div className="md:col-span-2 space-y-4 md:space-y-8">

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

            {content.ressourceGroups && (
              <Card className="border-border shadow-xs bg-card/50">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold flex items-center gap-3 font-sans">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary"><LinkIcon className="w-6 h-6" /></div>
                    Ressources de préparation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {content.ressourceGroups.map((group) => (
                      <CollapsibleLevel key={group.niveau} niveau={group.niveau} items={group.items} />
                    ))}

                    {content.ressourceNote && (
                      <div className="flex gap-3 bg-primary/5 border border-primary/20 rounded-xl p-4 mt-4">
                        <Info className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {content.ressourceNote}
                        </p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            )}

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
