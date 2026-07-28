'use client'

import Link from 'next/link'
import { PublicNavbar } from '@/components/PublicNavbar'
import { Footer } from '@/components/Footer'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'
import { FadeUp } from '@/components/ui/fade-up'
import { Button } from '@/components/ui/button'
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { ArrowUpRight, GraduationCap, Users, CalendarDays, BookOpen, Award, Sparkles, Quote, ChevronRight, Globe, Calculator, TrendingUp, Scale } from "lucide-react";
import { DraggableScroller } from '@/components/DraggableScroller'

export default function HomePage() {
  const ref = useRef(null);

  const testimonials = [
    {
      quote: "En rejoignant TW3, j'ai découvert le véritable sens de la transmission des savoirs. Elle ne se limite pas à l'apprentissage, mais vise aussi à créer une connexion entre nous, à renforcer notre cohésion.",
      author: "Mentor de l'ENS Paris Saclay",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      quote: "Après deux ans au sein de TW3, la différence dans mon travail se ressent à tous les niveaux : entre les entraînements aux colles et la bienveillance de nos mentors, TW3 fournit la recette pour progresser.",
      author: "Élève de MP* au Lycée Henri IV (Aujourd'hui mentor de l'ENS Lyon)",
      image: "https://randomuser.me/api/portraits/men/44.jpg"
    },
    {
      quote: "Les mentors de TW3 ont d'abord cru en moi et mes ambitions mais m'ont surtout permis de les atteindre à travers une formation rigoureuse et d'excellence.",
      author: "Élève de PC* au Lycée Saint Louis",
      image: "https://randomuser.me/api/portraits/men/22.jpg"
    },
    {
      quote: "Un projet ambitieux et intéressant, tant du point de vue des élèves que des mentors. TW3 est un tremplin pour la réussite de nos élèves.",
      author: "Doctorante à l'ENS Ulm",
      image: "/testimonials/veiled_student.png"
    }
  ];

  const mentorsSchools = [
    { name: "MIT", url: "https://www.mit.edu/", logo: "https://commons.wikimedia.org/wiki/Special:FilePath/MIT_2023_red_logo.svg?width=400" },
    { name: "HEC Paris", url: "https://www.hec.edu/", logo: "https://commons.wikimedia.org/wiki/Special:FilePath/HEC_Paris.svg?width=400" },
    { name: "EPFL", url: "https://www.epfl.ch/", logo: "https://commons.wikimedia.org/wiki/Special:FilePath/Logo_EPFL_2019.svg?width=400" },
    { name: "École Polytechnique", url: "https://www.polytechnique.edu/", logo: "/logos/polytechnique.png" },
    { name: "Stanford", url: "https://www.stanford.edu/", logo: "/logos/logo-stanford.webp", className: "h-16 md:h-24" },
    { name: "ENS Ulm", url: "https://www.ens.psl.eu/", logo: "https://commons.wikimedia.org/wiki/Special:FilePath/Logo_École_normale_supérieure_-_PSL_(ENS-PSL).svg?width=400" },
    { name: "Harvard", url: "https://www.harvard.edu/", logo: "https://commons.wikimedia.org/wiki/Special:FilePath/Harvard_University_logo.svg?width=400" },
    { name: "ESSEC", url: "https://www.essec.edu/", logo: "https://commons.wikimedia.org/wiki/Special:FilePath/ESSEC_Logo.svg?width=400" },
    { name: "Imperial College", url: "https://www.imperial.ac.uk/", logo: "https://commons.wikimedia.org/wiki/Special:FilePath/Imperial_College_London_new_logo.png?width=400" },
    { name: "Sciences Po Paris", url: "https://www.sciencespo.fr/", logo: "https://commons.wikimedia.org/wiki/Special:FilePath/Logo_Sciences_Po.svg?width=400" },
    { name: "ETH Zürich", url: "https://ethz.ch/", logo: "https://commons.wikimedia.org/wiki/Special:FilePath/ETH_Z%C3%BCrich_Logo_black.svg?width=400" },
    { name: "ENS Paris-Saclay", url: "https://ens-paris-saclay.fr/", logo: "/logos/ens-paris-saclay.png" },
    { name: "Oxford", url: "https://www.ox.ac.uk/", logo: "/logos/logo-oxford.svg", className: "h-16 md:h-24" },
    { name: "CentraleSupélec", url: "https://www.centralesupelec.fr/", logo: "https://commons.wikimedia.org/wiki/Special:FilePath/Ecole_Centrale_Supelec_logo.svg?width=400" },
    { name: "Panthéon-Sorbonne", url: "https://www.pantheonsorbonne.fr/", logo: "/logos/sorbonne.svg" },
    { name: "ENS Lyon", url: "https://www.ens-lyon.fr/", logo: "https://commons.wikimedia.org/wiki/Special:FilePath/Logo_ENS_de_Lyon_2010.png?width=400" },
    { name: "Panthéon-Assas", url: "https://www.assas-universite.fr/", logo: "/logos/assas.webp" },
  ];

  const integrationSchools = [
    { name: "École Polytechnique", url: "https://www.polytechnique.edu/", logo: "/logos/polytechnique.png" },
    { name: "Lycée Sainte-Geneviève (Ginette)", url: "https://www.bginette.com/", logo: "/logos/ginette.png", className: "h-20 md:h-28" },
    { name: "Lycée Henri-IV", url: "https://lycee-henri4.com/", logo: "/logos/henri-iv.png" },
    { name: "Sciences Po Paris", url: "https://www.sciencespo.fr/", logo: "https://commons.wikimedia.org/wiki/Special:FilePath/Logo_Sciences_Po.svg?width=400" },
    { name: "Lycée Louis-le-Grand", url: "https://www.louislegrand.fr/", logo: "/logos/louis-le-grand.png" },
    { name: "ENS Lyon", url: "https://www.ens-lyon.fr/", logo: "https://commons.wikimedia.org/wiki/Special:FilePath/Logo_ENS_de_Lyon_2010.png?width=400" },
    { name: "Lycée Hoche", url: "https://lyc-hoche-versailles.ac-versailles.fr/", logo: "/logos/hoche.png" },
    { name: "CentraleSupélec", url: "https://www.centralesupelec.fr/", logo: "https://commons.wikimedia.org/wiki/Special:FilePath/Ecole_Centrale_Supelec_logo.svg?width=400" },
    { name: "Lycée Saint-Louis", url: "https://pia.ac-paris.fr/serail/jcms/s1_2080084/fr/accueil", logo: "/logos/saint-louis.jpg" },
    { name: "Mines ParisTech", url: "https://minesparis.psl.eu/", logo: "/logos/mines-paris.png" },
    { name: "Lycée Le Parc", url: "https://lyceeduparc.fr/", logo: "/logos/le-parc.png" },
    { name: "Panthéon-Sorbonne", url: "https://www.pantheonsorbonne.fr/", logo: "/logos/sorbonne.svg" },
  ];

  const bottomAnimation = {
    initial: { y: "20%", opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 1, delay: 0.8 },
  };

  const impactRef = useRef(null);
  const impactInView = useInView(impactRef, { once: true, margin: "-10% 0px" });

  const integRef = useRef(null);
  const integInView = useInView(integRef, { once: true, margin: "-10% 0px" });

  const mentorsRef = useRef(null);
  const mentorsInView = useInView(mentorsRef, { once: true, margin: "-10% 0px" });

  const photoGalleryRef = useRef(null);
  const photoGalleryInView = useInView(photoGalleryRef, { once: true, margin: "-5% 0px" });

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/20 selection:text-foreground">
      <PublicNavbar currentPage="home" theme="dark" />

      {/* ═══════════════════════════════════════════════════════════
          HERO — Full-width immersive with photo background
      ═══════════════════════════════════════════════════════════ */}
      <section ref={ref} className="relative w-full min-h-[85vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background image — audience in amphitheatre */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/photos/IMG_4791.jpg" 
            alt="" 
            className="w-full h-full object-cover"
          />
          {/* Dark overlay gradient — cinematic feel */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>
          {/* Primary color overlay for brand identity */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#391457]/40 via-transparent to-[#7a3477]/20"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="flex flex-col max-w-4xl mx-auto gap-6 md:gap-8 text-center">
            <div className="relative flex flex-col items-center gap-4 sm:gap-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-white/90 text-sm font-semibold border border-white/20 backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                </span>
                Inscriptions Ouvertes 2026
              </div>
              <h1 className="flex flex-col text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white">
                <TextGenerateEffect words="Apprendre et enseigner" className="text-white" />
                <TextGenerateEffect
                  words="l'excellence."
                  delay={0.8}
                  className="font-serif italic font-bold tracking-tight text-tw3-accent mt-2"
                />
              </h1>
              <motion.p {...bottomAnimation} className="max-w-2xl text-base md:text-xl text-white/80 mt-2">
                Une formation <strong className="text-white">100% gratuite</strong> pour accéder aux filières les plus prestigieuses.
              </motion.p>
            </div>
            <motion.div
              {...bottomAnimation}
              className="flex items-center flex-col md:flex-row justify-center gap-4 mt-4"
            >
              <Button asChild size="lg" className="rounded-full px-8 py-6 text-base group bg-white text-primary hover:bg-white/90 hover:text-primary transition-colors">
                <Link href="/programme">
                  DÉCOUVRIR NOS PROGRAMMES
                  <div className="ml-3 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full px-8 py-6 text-base bg-transparent border border-white text-white hover:bg-white/10 hover:text-white transition-colors">
                <Link href="/rejoindre">
                  Candidater
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Bottom fade to content */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10"></div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          VISION — HADITH — Minimal, editorial
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 bg-background relative">
        <div className="container mx-auto px-4 md:px-6">
          <FadeUp delay={0.1}>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr,1.5fr] gap-8 lg:gap-16 items-center">
              {/* Left — Heading */}
              <div>
                <h2 className="flex flex-col mb-6 lg:mb-0">
                  <TextGenerateEffect words="L'éducation comme" duration={0.3} />
                  <TextGenerateEffect words="levier d'avenir." delay={0.5} className="font-serif italic font-bold text-primary" />
                </h2>
              </div>
              {/* Right — Quote card */}
              <div className="relative">
                <div className="absolute -top-6 -left-3 text-primary/10">
                  <Quote className="w-14 h-14 rotate-180" />
                </div>
                <div className="bg-card border border-border/60 rounded-2xl p-6 md:p-8 shadow-sm relative overflow-hidden group">
                  <img src="/photos/IMG_4815.jpg" alt="Communauté TW3" className="absolute inset-0 w-full h-full object-cover opacity-20 md:group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
                  <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-primary/5 to-transparent rounded-full -translate-y-1/2 translate-x-1/4 relative z-10"></div>
                  <div className="relative z-10">
                  <p className="text-xl md:text-2xl leading-relaxed text-foreground mb-4" dir="rtl" lang="ar">
                    « مَنْ سَلَكَ طَرِيقًا يَلْتَمِسُ فِيهِ عِلْمًا سَهَّلَ اللَّهُ لَهُ بِهِ طَرِيقًا إِلَى الْجَنَّةِ »
                  </p>
                  <p className="text-base md:text-lg leading-relaxed text-muted-foreground italic font-bold font-serif">
                    « Celui qui emprunte un chemin à la recherche d'un savoir, Allah lui facilite par cela un chemin vers le Paradis. »
                  </p>
                  <div className="mt-6 pt-4 border-t border-border/50">
                    <p className="text-sm font-semibold text-primary tracking-wide uppercase">
                      Hadith — Sahih Muslim (2699)
                    </p>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </FadeUp>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          IMPACT — Social proof with stats + logos
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-12 md:py-20 relative overflow-hidden">
        {/* Subtle gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-[#f5f3f5] to-background -z-10"></div>

        {/* Mentor Origins - Scrolling RTL */}
        <div className="w-full relative flex flex-col gap-2 md:gap-4 mb-12 md:mb-16">
          <h3 className="text-center font-sans font-bold text-muted-foreground uppercase tracking-widest text-sm px-6">Nos mentors sont passés par</h3>

          <div className="relative w-full overflow-hidden flex py-2">
            <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>

            <DraggableScroller speed={0.77} reverse>
              {[...mentorsSchools, ...mentorsSchools].map((school, i) => (
                <a
                  key={i}
                  href={school.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={school.name}
                  className="inline-flex items-center justify-center shrink-0 group/logo mx-6 md:mx-10"
                  onDragStart={(e) => e.preventDefault()}
                >
                  <img
                    src={school.logo}
                    alt={school.name}
                    className={`${(school as any).className || "h-12 md:h-16"} w-auto max-w-[120px] md:max-w-[160px] object-contain group-hover/logo:scale-110 transition-transform duration-300 opacity-90 hover:opacity-100`}
                    draggable={false}
                  />
                </a>
              ))}
            </DraggableScroller>
          </div>
        </div>

        {/* Center Stats — Prominent counter section */}
        <div ref={impactRef} className="container mx-auto px-4 md:px-6 text-center max-w-5xl mb-12 md:mb-16">
          <h2 className="text-xl md:text-3xl lg:text-4xl font-sans text-foreground leading-relaxed mb-10 md:mb-14">
            Depuis 2023, l'Institut TW3 accompagne des élèves motivés vers les filières les plus prestigieuses.
          </h2>

          <div className="flex flex-row justify-center items-center gap-8 md:gap-20">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={impactInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center"
            >
              <span className="text-5xl md:text-8xl font-bold text-primary leading-none tracking-tight">+100</span>
              <span className="text-base md:text-lg text-foreground font-semibold mt-3 md:mt-4">élèves accompagnés</span>
            </motion.div>

            <div className="hidden md:block w-px h-24 bg-border"></div>
            <div className="md:hidden w-px h-16 bg-border"></div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={impactInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col items-center"
            >
              <span className="text-5xl md:text-8xl font-bold text-primary leading-none tracking-tight">+70</span>
              <span className="text-base md:text-lg text-foreground font-semibold mt-3 md:mt-4">mentors engagés</span>
            </motion.div>
          </div>
        </div>

        {/* Integrations - Scrolling LTR */}
        <div className="w-full relative flex flex-col gap-2 md:gap-4">
          <h3 className="text-center font-sans font-bold text-muted-foreground uppercase tracking-widest text-sm px-6">Nos élèves ont intégré</h3>

          <div className="relative w-full overflow-hidden flex py-2">
            <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>

            <DraggableScroller speed={0.77}>
              {[...integrationSchools, ...integrationSchools].map((school, i) => (
                <a
                  key={i}
                  href={school.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={school.name}
                  className="inline-flex items-center justify-center shrink-0 group/logo mx-6 md:mx-10"
                  onDragStart={(e) => e.preventDefault()}
                >
                  <img
                    src={school.logo}
                    alt={school.name}
                    className={`${(school as any).className || "h-12 md:h-16"} w-auto max-w-[120px] md:max-w-[160px] object-contain group-hover/logo:scale-110 transition-transform duration-300 opacity-90 hover:opacity-100`}
                    draggable={false}
                  />
                </a>
              ))}
            </DraggableScroller>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          PROGRAMMES — Editorial bento layout with photo
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            {/* Section header */}
            <FadeUp delay={0.1}>
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-10 md:mb-14">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3 block">Nos programmes</span>
                <h2 className="text-3xl md:text-5xl text-foreground leading-tight">
                  Accès à <span className="italic font-bold text-primary font-serif">l'excellence</span>
                </h2>
              </div>
              <Link href="/programme" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-4 transition-all duration-300 group whitespace-nowrap">
                Voir tous les programmes <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
            </FadeUp>

            {/* Bento grid: Photo left, cards right */}
            <FadeUp delay={0.2}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 md:gap-6">
              {/* Large feature photo — panel discussion */}
              <div className="lg:col-span-5 relative rounded-2xl md:rounded-3xl overflow-hidden min-h-[300px] md:min-h-[500px] group">
                <img 
                  src="/photos/IMG_4834.jpg" 
                  alt="Panel de conférenciers lors d'un événement TW3" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 md:group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <p className="text-white/80 text-sm md:text-base leading-relaxed max-w-md">
                    L'Institut TW3 propose une formation <strong className="text-white">à distance et en présentiel à Paris, 100% gratuite</strong>, dispensée par des étudiants et diplômés issus des meilleures formations françaises.
                  </p>
                  <p className="text-white/60 text-sm mt-3">
                    Une valeur de <strong className="text-white/80">~7 000 €</strong> de formation offerte à chaque élève.
                  </p>
                </div>
              </div>

              {/* Right column — 3 parcours cards stacked */}
              <div className="lg:col-span-7 flex flex-col gap-4 md:gap-5">
                {[
                  {
                    title: "Scientifique",
                    desc: "Préparation aux concours des grandes écoles d'ingénieurs et aux filières scientifiques sélectives : MPSI, PCSI, MP*, ENS, Polytechnique, CentraleSupélec…",
                    icon: <Calculator className="w-6 h-6" />,
                    href: "/programme/scientifique",
                    gradient: "from-[#7a3477]/8 to-transparent"
                  },
                  {
                    title: "Économie & Commerce",
                    desc: "Préparation aux concours des grandes écoles de commerce et aux filières économiques sélectives : HEC, ESSEC, Prépa ECG…",
                    icon: <TrendingUp className="w-6 h-6" />,
                    href: "/programme/commerce",
                    gradient: "from-[#391457]/8 to-transparent"
                  },
                  {
                    title: "Droit & Sciences politiques",
                    desc: "Préparation aux licences et masters de Droit sélectifs, Sciences Po Paris et les autres IEP.",
                    icon: <Scale className="w-6 h-6" />,
                    href: "/programme/droit-sciences-po",
                    gradient: "from-[#7a3477]/5 to-transparent"
                  },
                ].map((parcours, i) => (
                  <Link
                    key={i}
                    href={parcours.href}
                    className="flex items-start gap-5 bg-card p-5 md:p-6 rounded-2xl border border-border hover:border-primary/40 transition-all duration-300 group/link relative overflow-hidden"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${parcours.gradient} opacity-0 group-hover/link:opacity-100 transition-opacity duration-500`}></div>
                    <div className="p-3 bg-accent/40 rounded-xl text-primary shrink-0 group-hover/link:bg-primary group-hover/link:text-primary-foreground transition-colors duration-300 relative z-10">
                      {parcours.icon}
                    </div>
                    <div className="relative z-10 flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-sans font-bold text-foreground mb-1 group-hover/link:text-primary transition-colors">{parcours.title}</h3>
                        <ArrowUpRight className="w-5 h-5 text-muted-foreground md:group-hover/link:text-primary md:group-hover/link:rotate-45 transition-all shrink-0" />
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{parcours.desc}</p>
                    </div>
                  </Link>
                ))}
                {/* "Pour qui?" callout */}
                <div className="bg-accent/30 p-5 md:p-6 rounded-2xl border border-border/50">
                  <h4 className="font-bold text-foreground font-sans mb-1.5 flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-primary" />
                    Pour qui ?
                  </h4>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    Nos programmes s'adressent <strong>aux lycéens (de la Seconde à la Terminale)</strong> ainsi qu'aux <strong>étudiants du supérieur</strong> (prépas, universités) désireux d'intégrer les filières les plus sélectives.
                  </p>
                </div>
              </div>
            </div>
            </FadeUp>
          </div>
        </div>
      </section>



      {/* ═══════════════════════════════════════════════════════════
          PILLARS — Asymmetric cards (NOT identical 3-column grid)
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#f5f3f5] via-background to-[#fffdd1]/20 -z-10"></div>
        
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            {/* Top row: Full width card */}
            <FadeUp delay={0.1}>
            <div className="mb-5 md:mb-6">
              {/* Wide card — Réseau intergénérationnel (with photo background) */}
              <div className="bg-card p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-sm border border-border hover:border-primary/50 transition-all duration-300 flex flex-col group relative overflow-hidden min-h-[250px]">
                <img src="/photos/STG4653.jpg" alt="Réseau intergénérationnel TW3" className="absolute inset-0 w-full h-full object-cover opacity-10 md:group-hover:opacity-20 transition-opacity duration-500" />
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 relative z-10 h-full">
                  <div className="flex flex-col h-full">
                    <div className="flex items-start gap-5 mb-4">
                      <div className="w-12 h-12 bg-accent/30 rounded-xl flex items-center justify-center text-primary shrink-0 md:group-hover:bg-primary md:group-hover:text-primary-foreground transition-colors duration-300">
                        <Users className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2 font-sans">Réseau intergénérationnel</h3>
                        <p className="text-muted-foreground leading-relaxed max-w-2xl">
                          Développement d'échanges et création de liens solides entre lycéens, étudiants et professionnels. Un réseau qui vous accompagne bien au-delà de vos études.
                        </p>
                      </div>
                    </div>
                    <div className="mt-auto pt-4">
                      <Link href="/rejoindre" className="inline-flex items-center gap-2 text-primary font-semibold md:group-hover:gap-4 transition-all duration-300 w-fit">
                        Rejoindre TW3 <ArrowUpRight className="w-5 h-5 md:group-hover:rotate-45 transition-transform" />
                      </Link>
                    </div>
                  </div>
                  
                  {/* The quote from the old photo card, placed elegantly on the right */}
                  <div className="hidden md:flex items-end justify-end p-4 border-l border-primary/10 pl-6">
                    <p className="text-foreground/60 font-serif italic text-lg lg:text-xl">"Apprendre, enseigner, exceller."</p>
                  </div>
                </div>
              </div>
            </div>
            </FadeUp>

            {/* Bottom row: two equal cards */}
            <FadeUp delay={0.2}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
              {/* Évènements */}
              <div className="bg-card p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-sm border border-border hover:border-primary/50 transition-all duration-300 flex flex-col group relative overflow-hidden">
                <img src="/photos/STG4706.jpg" alt="Session apprentissage TW3" className="absolute inset-0 w-full h-full object-cover opacity-10 md:group-hover:opacity-20 transition-opacity duration-500" />
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-12 h-12 bg-accent/30 rounded-xl flex items-center justify-center text-primary mb-5 md:group-hover:bg-primary md:group-hover:text-primary-foreground transition-colors duration-300">
                    <CalendarDays className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 font-sans">Évènements inspirants</h3>
                  <p className="text-muted-foreground leading-relaxed flex-1">
                    Fédérer la communauté autour de forums de l'orientation, stages intensifs et conférences thématiques animées par des professionnels d'excellence.
                  </p>
                  <Link href="/evenements" className="inline-flex items-center gap-2 text-primary font-semibold mt-6 md:group-hover:gap-4 transition-all duration-300 w-fit">
                    Voir les événements <ArrowUpRight className="w-5 h-5 md:group-hover:rotate-45 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Portée internationale */}
              <div className="bg-card p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-sm border border-border hover:border-primary/50 transition-all duration-300 flex flex-col group relative overflow-hidden">
                <img src="/photos/STG4689.jpg" alt="Portée internationale TW3" className="absolute inset-0 w-full h-full object-cover opacity-10 md:group-hover:opacity-20 transition-opacity duration-500" />
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-12 h-12 bg-accent/30 rounded-xl flex items-center justify-center text-primary mb-5 md:group-hover:bg-primary md:group-hover:text-primary-foreground transition-colors duration-300">
                    <Globe className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 font-sans">Portée internationale</h3>
                  <p className="text-muted-foreground leading-relaxed flex-1">
                    Une formation accessible à distance et en présentiel à Paris, qui rassemble des élèves et encadrants de France, du Maroc, de Suisse, du Luxembourg et d'ailleurs.
                  </p>
                  <Link href="/contact" className="inline-flex items-center gap-2 text-primary font-semibold mt-6 md:group-hover:gap-4 transition-all duration-300 w-fit">
                    Nous contacter <ArrowUpRight className="w-5 h-5 md:group-hover:rotate-45 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          TÉMOIGNAGES — Floating cards
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 bg-background overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <FadeUp delay={0.1}>
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
            <h2 className="flex flex-col justify-center items-center">
              <TextGenerateEffect words="Ils témoignent" duration={0.3} />
              <TextGenerateEffect words="de leurs parcours." delay={0.5} className="font-serif italic font-bold text-primary" />
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mt-4 md:mt-6">
              Élèves et mentors partagent leur expérience au sein de l'Institut TW3.
            </p>
          </div>
          </FadeUp>

          {/* Testimonials Marquee */}
          <div className="relative w-full overflow-hidden flex flex-col pt-4 pb-4">
            <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>

            <DraggableScroller speed={0.96} reverse className="py-6">
              {[...testimonials, ...testimonials].map((testimonial, i) => (
                <motion.div
                  key={i}
                  animate={{ y: [0, -8, 0] }}
                  transition={{ repeat: Infinity, duration: 4 + (i % 3), ease: "easeInOut", delay: i * 0.2 }}
                  className="w-[300px] md:w-[400px] bg-card border border-border rounded-2xl p-6 flex flex-col gap-5 shadow-sm hover:border-primary/40 transition-colors shrink-0 pointer-events-none"
                >
                  <div className="flex-1 whitespace-normal">
                    <Quote className="w-8 h-8 text-primary/20 mb-4 rotate-180" />
                    <p className="text-foreground leading-relaxed font-medium text-sm md:text-base">
                      « {testimonial.quote} »
                    </p>
                  </div>

                  <div className="flex items-center gap-4 pt-6 border-t border-border/50 whitespace-normal mt-auto">
                    <div className="w-10 h-10 rounded-full overflow-hidden border border-border shrink-0">
                      <img src={(testimonial as any).image} alt={testimonial.author} className="w-full h-full object-cover" draggable={false} />
                    </div>
                    <div>
                      <p className="font-semibold text-muted-foreground text-xs md:text-sm">{testimonial.author}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </DraggableScroller>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          CTA — Full-width immersive with photo background
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Background photo — audience clapping */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/photos/IMG_4775.jpg" 
            alt="" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-[#391457]/90 to-black/80"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <FadeUp delay={0.2}>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold text-white mb-6 leading-tight">
              Soutenez <span className="font-serif italic text-tw3-accent">l'excellence.</span>
            </h2>
            <p className="text-white/80 leading-relaxed mb-3 text-base md:text-xl max-w-2xl mx-auto">
              Nos programmes sont <strong className="text-white">100% gratuits</strong> pour les étudiants. Votre générosité nous permet de maintenir et développer nos actions.
            </p>
            <p className="text-white/60 text-sm italic font-bold mb-10">
              Vos dons sont déductibles des impôts à hauteur de 66%.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="rounded-full h-12 md:h-14 px-8 md:px-10 text-sm md:text-base font-medium group bg-white text-primary hover:bg-white/90 hover:text-primary transition-colors">
                <a href="https://www.helloasso.com/associations/ta3alamawa3alama/formulaires/1/" target="_blank" rel="noopener noreferrer">
                  Faire un don
                  <ArrowUpRight className="ml-2 w-5 h-5 md:group-hover:rotate-45 transition-transform" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full h-12 md:h-14 px-8 md:px-10 text-sm md:text-base bg-transparent border border-white text-white hover:bg-white/10 hover:text-white transition-colors">
                <Link href="/contact">
                  Nous contacter
                </Link>
              </Button>
            </div>
          </div>
          </FadeUp>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          NEWSLETTER — Clean, focused section
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-12 md:py-16 bg-background border-t border-border">
        <div className="container mx-auto px-4 md:px-6">
          <FadeUp delay={0.1}>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-semibold mb-3 md:mb-4 text-foreground tracking-tight">Restez informé</h2>
            <p className="text-muted-foreground leading-relaxed mb-8 text-sm md:text-base">
              Recevez nos actualités, l'ouverture des inscriptions et nos événements inspirants.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                const email = (e.currentTarget.elements.namedItem('email') as HTMLInputElement).value;
                window.location.href = `mailto:mail@tw3.fr?subject=Inscription%20Newsletter&body=Bonjour,%20merci%20de%20m'inscrire%20à%20la%20newsletter%20avec%20l'adresse%20:%20${email}`;
              }}
              className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
            >
              <input
                type="email"
                name="email"
                placeholder="votre@email.com"
                className="flex h-12 w-full sm:flex-1 rounded-xl border border-input bg-card px-4 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 shadow-sm"
                required
              />
              <Button type="submit" className="h-12 rounded-xl px-6 font-medium shadow-sm">
                S'inscrire
              </Button>
            </form>
          </div>
          </FadeUp>
        </div>
      </section>

      <Footer />
    </div>
  )
}
