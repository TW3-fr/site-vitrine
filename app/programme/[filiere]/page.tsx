import React from 'react'
import Link from 'next/link'
import { FILIERE_LABELS } from '@/lib/constants'
import { PublicNavbar } from '@/components/PublicNavbar'
import { Footer } from '@/components/Footer'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'
import { FadeUp } from '@/components/ui/fade-up'
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
  image?: string;
  objectives: (string | React.ReactNode)[];
  matieres: string[];
  esprit: string;
  deadline?: string;
  plaquette?: string;
  epreuve?: { url: string; dateARendre: string; label: string; instructions?: React.ReactNode };
  ressourceGroups?: RessourceGroup[];
  ressourceNote?: string;
  integrationSchools?: { name: string; url: string; logo: string; className?: string }[]
}> = {
  scientifique: {
    image: '/photos/STG4651.jpg',
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
    plaquette: '/ressources/Plaquette_filiere_Scientifique.pdf',
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
      { name: "Centrale Lyon", url: "https://www.ec-lyon.fr/", logo: "/logos/centrale-lyon.jpg" },
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
    image: '/photos/STG4689.jpg',
    objectives: [
      'Accompagnement de la Seconde à la Spé',
      'Intégrer HEC, ESSEC, ESCP et les grandes écoles de commerce',
      'Développer la méthodologie, l\'esprit d\'analyse et les automatismes',
    ],
    matieres: ['Économie', 'Mathématiques', 'Anglais', 'Arabe', 'Géopolitique'],
    esprit: 'Ouverture sur le monde, esprit d\'analyse et de synthèse. Formation par des professeurs de l\'ESSEC et de l\'ENS.',
    deadline: '15 Septembre',
    plaquette: '/a-venir?filiere=commerce',
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
      { name: "Panthéon-Assas", url: "https://www.assas-universite.fr/", logo: "/logos/assas.webp" },
      { name: "EM Lyon", url: "https://em-lyon.com/", logo: "/logos/em-lyon.png" }
    ]
  },
  'droit-sciences-po': {
    image: '/photos/STG4706.jpg',
    objectives: [
      'Accompagnement de la 2nd à la L3',
      'Intégrer Sciences Po Paris et les IEP',
      'Développer la méthodologie, l\'esprit d\'analyse et les automatismes',
    ],
    matieres: ['Droit privé', 'Droit public', 'Sciences politiques', 'Anglais', 'Arabe'],
    esprit: 'Excellence humaniste, esprit critique et engagement. Formation par des professeurs de Sciences Po Paris, ENS et Panthéon-Sorbonne.',
    deadline: '31 Juillet',
    plaquette: '/ressources/Plaquette_filiere_Droit_Sciences_Politiques.pdf',
    epreuve: {
      url: '/documents/epreuve-admissibilite-tw3.pdf',
      dateARendre: 'À rendre avant le 31 Juillet',
      label: 'Épreuve d\'admissibilité',
      instructions: (
        <div className="mt-2 text-sm md:text-base text-blue-900 dark:text-blue-100 bg-blue-500/10 p-4 rounded-xl border border-blue-500/20 shadow-inner">
          <span className="font-bold block mb-2 text-blue-700 dark:text-blue-300">⚠️ Important :</span>
          <ul className="list-disc pl-5 space-y-2">
            <li>L&apos;épreuve se fait de façon autonome <strong>JUSQU&apos;AU 31 JUILLET 2026</strong>.</li>
            <li>La durée de l&apos;épreuve est de <strong>cinq heures</strong>.</li>
            <li>Le rendu doit obligatoirement être au format <strong>PDF</strong> et est à déposer directement dans le formulaire de candidature.</li>
          </ul>
        </div>
      )
    },
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
      <PublicNavbar currentPage="programme" theme={content.image ? "dark" : undefined} />

      <header className={`pt-28 md:pt-36 pb-12 md:pb-16 border-b border-border relative z-10 overflow-hidden ${content.image ? 'text-white' : ''}`}>
        {content.image ? (
          <>
            <img src={content.image} alt="" className="absolute inset-0 w-full h-full object-cover -z-20" />
            <div className="absolute inset-0 bg-black/60 -z-10"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent -z-10 h-16 bottom-0 top-auto"></div>
          </>
        ) : (
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background -z-10"></div>
        )}
        <div className="container mx-auto px-4 md:px-6 max-w-4xl relative z-10 text-center">
          <Link href="/programme" className={`inline-flex items-center gap-2 text-sm font-semibold mb-6 md:mb-8 transition-colors group ${content.image ? 'text-white/80 hover:text-white' : 'text-muted-foreground hover:text-primary'}`}>
            <ArrowLeft className="w-4 h-4 md:group-hover:-translate-x-1 transition-transform" />
            Retour aux programmes
          </Link>
          <div className="flex flex-col items-center gap-3 md:gap-4">
            <div className="flex flex-wrap justify-center items-center gap-3">
              <span className={`inline-flex items-center gap-2 px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full border ${content.image ? 'bg-white/20 text-white border-white/30 backdrop-blur-md' : 'bg-accent/50 text-foreground border-border/50'}`}>
                Cursus d&apos;excellence
              </span>
            </div>
            <h1 className="flex flex-col">
              <TextGenerateEffect words="Filière" duration={0.2} className={content.image ? 'text-white' : ''} />
              <TextGenerateEffect words={label} delay={0.4} className={`font-serif italic font-bold ${content.image ? 'text-white' : 'text-primary'}`} />
            </h1>
            <p className={`mt-2 md:mt-4 text-base md:text-xl max-w-2xl leading-relaxed ${content.image ? 'text-white/90' : 'text-muted-foreground'}`}><strong>100% gratuit</strong> – Formation d&apos;excellence</p>
          </div>
        </div>
      </header>

      <section className="py-4 md:py-8 px-4 md:px-12 bg-background relative">
        {/* Subtle decorative background */}
        <div className="absolute top-1/4 -right-64 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
        <div className="container mx-auto max-w-5xl">

          {/* Top Full-Width Blocks: Schools */}
          <div className="flex flex-col gap-5 md:gap-8 mb-5 md:mb-8">

            {content.integrationSchools && (
              <FadeUp delay={0.15}>
                <div className="bg-card/50 border border-border rounded-2xl md:rounded-3xl p-5 md:p-6 shadow-sm overflow-hidden flex flex-col justify-center">
                  <InfiniteScroller schools={content.integrationSchools} />
                </div>
              </FadeUp>
            )}
          </div>

          {/* Main Grid: Content and Sidebar */}
          <div className="flex flex-col md:grid md:grid-cols-3 gap-5 md:gap-8">
            
            {/* Sidebar (Right on Desktop, Top on Mobile) */}
            <div className="order-first md:order-last md:col-span-1 space-y-5 md:space-y-6">
              <FadeUp delay={0.2}>
                <div className="bg-card rounded-2xl md:rounded-3xl p-6 md:p-8 border border-border shadow-md">
                  <h3 className="text-lg md:text-xl font-bold text-foreground mb-4 md:mb-6 font-sans">Candidature</h3>

                  <div className="mb-6 md:mb-8">
                    <p className="text-sm text-muted-foreground mb-2">Date limite d&apos;envoi des dossiers</p>
                    <div className="flex items-center gap-3 text-emerald-600 font-bold bg-emerald-600/10 p-3 md:p-4 rounded-xl border border-emerald-600/20">
                      <CalendarDays className="w-5 h-5 md:w-6 md:h-6" />
                      {content.deadline ? content.deadline : 'Prochainement'}
                    </div>
                    <p className="text-xs text-muted-foreground mt-2 md:mt-3 leading-relaxed">Après cette date, les candidatures ne seront plus prises en compte.</p>
                  </div>

                  <Button asChild className="w-full rounded-xl py-5 md:py-6 h-auto text-base group">
                    <a href="https://tw3projet.fillout.com/eleves" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                      <span className="text-center font-semibold leading-tight">Candidater</span>
                      <ArrowUpRight className="w-5 h-5 shrink-0 md:group-hover:rotate-45 transition-transform" />
                    </a>
                  </Button>

                  {content.plaquette && (
                    <Button asChild variant="outline" className="w-full rounded-xl py-5 md:py-6 h-auto text-base group mt-3 relative overflow-hidden border-primary/20 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300">
                      <Link 
                        href={content.plaquette} 
                        target={content.plaquette.includes('.pdf') ? "_blank" : undefined} 
                        rel={content.plaquette.includes('.pdf') ? "noopener noreferrer" : undefined}
                        className="flex items-center justify-center gap-2 px-2"
                      >
                        <BookOpen className="w-5 h-5 shrink-0 group-hover:scale-110 transition-transform text-primary" />
                        <span className="relative z-10 text-center font-semibold leading-tight">
                          Consulter la plaquette
                        </span>
                        <ArrowUpRight className="w-5 h-5 shrink-0 opacity-50 group-hover:opacity-100 md:group-hover:translate-x-1 md:group-hover:-translate-y-1 transition-all" />
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                      </Link>
                    </Button>
                  )}
                </div>
              </FadeUp>

              {content.esprit && (
                <FadeUp delay={0.25}>
                  <div className="md:sticky md:top-32 bg-card/50 rounded-2xl md:rounded-3xl p-6 md:p-8 border border-border shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-primary/10 rounded-lg text-primary"><Heart className="w-5 h-5" /></div>
                      <h3 className="text-lg font-bold font-sans">L'esprit de la filière</h3>
                    </div>
                    <div className="relative">
                      <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary/60 to-primary/10 rounded-full"></div>
                      <p className="text-foreground/90 leading-relaxed text-base italic pl-5 py-1 font-serif">
                        "{content.esprit}"
                      </p>
                    </div>
                  </div>
                </FadeUp>
              )}
            </div>

            {/* Main Content (Left on Desktop, Bottom on Mobile) */}
            <div className="md:col-span-2 space-y-5 md:space-y-8">
              
              {content.epreuve && (
                <FadeUp delay={0.3}>
                  <Card className="border-blue-500/30 shadow-xs bg-blue-500/5 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-5">
                      <BookOpen className="w-32 h-32 text-blue-600" />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-2xl font-bold flex items-center gap-3 font-sans text-blue-700 dark:text-blue-400">
                        <div className="p-2 bg-blue-500/20 rounded-lg text-blue-700 dark:text-blue-400"><BookOpen className="w-6 h-6" /></div>
                        {content.epreuve.label}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="relative z-10">
                      {!content.epreuve.instructions && (
                        <p className="text-sm text-blue-700/80 dark:text-blue-400/80 mb-4 font-medium">
                          {content.epreuve.dateARendre}
                        </p>
                      )}
                      {content.epreuve.instructions && (
                        <div className="mb-6">
                          {content.epreuve.instructions}
                        </div>
                      )}
                      <Button asChild className="rounded-xl py-6 px-8 bg-blue-600 hover:bg-blue-700 text-white border-0 shadow-lg shadow-blue-600/20 group relative overflow-hidden transition-all duration-300 w-full md:w-auto">
                        <Link 
                          href={content.epreuve.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          <BookOpen className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                          <span className="relative z-10 flex items-center justify-center font-semibold text-base">
                            Accéder au document
                            <ArrowUpRight className="ml-2 w-5 h-5 opacity-80 group-hover:opacity-100 md:group-hover:translate-x-1 md:group-hover:-translate-y-1 transition-all" />
                          </span>
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </FadeUp>
              )}

              <FadeUp delay={0.35}>
                <Card className="border-border shadow-sm bg-card/50 hover:shadow-md hover:border-primary/30 transition-all duration-300 group">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold flex items-center gap-3 font-sans group-hover:text-primary transition-colors duration-300">
                      <div className="p-2 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300"><Target className="w-6 h-6" /></div>
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
              </FadeUp>

              {content.ressourceGroups && (
                <FadeUp delay={0.4}>
                  <Card className="border-border shadow-sm bg-card/50 hover:shadow-md hover:border-primary/30 transition-all duration-300 group">
                    <CardHeader>
                      <CardTitle className="text-2xl font-bold flex items-center gap-3 font-sans group-hover:text-primary transition-colors duration-300">
                        <div className="p-2 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300"><LinkIcon className="w-6 h-6" /></div>
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
                </FadeUp>
              )}

            </div>
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
