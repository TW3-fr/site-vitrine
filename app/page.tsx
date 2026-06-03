'use client'

import Link from 'next/link'
import { PublicNavbar } from '@/components/PublicNavbar'
import { Footer } from '@/components/Footer'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'
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

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/20 selection:text-foreground">
      <PublicNavbar currentPage="home" />

      {/* ═══════════════════════════════════════════════════════════
          HERO SECTION
      ═══════════════════════════════════════════════════════════ */}
      <section ref={ref} className="relative w-full pt-24 md:pt-28 2xl:pb-12 pb-8 md:pb-10 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
          <div className="absolute -top-[10%] -left-[10%] w-[50vw] h-[50vw] bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-[20%] -right-[10%] w-[40vw] h-[40vw] bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute -bottom-[20%] left-[20%] w-[60vw] h-[60vw] bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        </div>

        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="flex flex-col max-w-5xl mx-auto gap-6 md:gap-8">
            <div className="relative flex flex-col text-center items-center gap-4 sm:gap-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/50 text-foreground text-sm font-semibold border border-border/50 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Inscriptions Ouvertes 2026
              </div>
              <h1 className="flex flex-col text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold">
                <TextGenerateEffect words="Apprendre et enseigner" />
                <TextGenerateEffect
                  words="l'excellence."
                  delay={0.8}
                  className="font-serif italic tracking-tight text-primary mt-2"
                />
              </h1>
              <motion.p {...bottomAnimation} className="max-w-2xl text-base md:text-xl text-muted-foreground mt-2">
                Une formation 100% gratuite pour accéder aux filières les plus prestigieuses.
              </motion.p>
            </div>
            <motion.div
              {...bottomAnimation}
              className="flex items-center flex-col md:flex-row justify-center gap-8 mt-4"
            >
              <Button asChild size="lg" className="relative rounded-full h-12 md:h-14 px-6 md:px-8 text-sm md:text-base group transition-all duration-500 overflow-hidden pr-14 md:pr-16">
                <Link href="/programme">
                  <span className="relative z-10 transition-all duration-500">
                    Découvrir nos programmes
                  </span>
                  <div className="absolute right-1.5 md:right-2 w-9 h-9 md:w-10 md:h-10 bg-background text-foreground rounded-full flex items-center justify-center transition-all duration-500 group-hover:right-[calc(100%-44px)] group-hover:rotate-45">
                    <ArrowUpRight size={18} />
                  </div>
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          VISION — VERSET CORANIQUE
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-8 md:py-16 bg-card/50 border-t border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="flex flex-col justify-center items-center mb-10">
              <TextGenerateEffect words="L'éducation comme" duration={0.3} />
              <TextGenerateEffect words="levier d'avenir." delay={0.5} className="font-serif italic font-normal text-primary" />
            </h2>

            <div className="relative max-w-3xl mx-auto">
              {/* Decorative quotes */}
              <div className="absolute -top-8 -left-4 text-primary/15">
                <Quote className="w-16 h-16 rotate-180" />
              </div>
              <div className="absolute -bottom-8 -right-4 text-primary/15">
                <Quote className="w-16 h-16" />
              </div>

              <div className="bg-background border border-border/60 rounded-2xl p-5 md:p-8 shadow-sm">
                <p className="text-xl md:text-3xl leading-relaxed font-serif text-foreground" dir="rtl" lang="ar">
                  ﴿ وَإِذْ قَالَ رَبُّكَ لِلْمَلَائِكَةِ إِنِّي جَاعِلٌ فِي الْأَرْضِ خَلِيفَةً ﴾
                </p>
                <div className="mt-8 pt-6 border-t border-border/50">
                  <p className="text-sm font-semibold text-primary tracking-wide uppercase">
                    Sourate Al-Baqara — Verset 30
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          ACCÈS À L'EXCELLENCE — Section enrichie & cliquable
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-8 md:py-16 bg-background border-t border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto group">
            <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:border-primary/40 transition-all duration-500">
              <div className="p-5 md:p-8">
                <div className="flex flex-col lg:flex-row gap-8 items-center">
                  {/* Left column: Title & description */}
                  <div className="lg:w-1/2 flex flex-col gap-6">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 bg-primary/10 rounded-xl text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-500">
                        <GraduationCap className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Nos programmes</span>
                    </div>

                    <h2 className="text-2xl md:text-4xl font-serif text-foreground leading-tight">
                      Accès à <span className="italic text-primary">l'excellence</span>
                    </h2>

                    <div className="space-y-5 text-muted-foreground leading-relaxed">
                      <p>
                        L'Institut TW3 propose une formation <strong className="text-foreground">à distance et en présentiel à Paris, 100% gratuite</strong>, dispensée par des étudiants et diplômés issus des meilleures formations françaises.
                      </p>
                      <p>
                        Nos élèves bénéficient d'un accompagnement pédagogique rigoureux qui représenterait <strong>environ 7 000 € de valeur</strong> s'il était commercialisé dans le secteur privé : cours particuliers, stages intensifs, entraînements aux concours et mentorat individuel inclus.
                      </p>
                    </div>

                    <Link href="/programme" className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-4 transition-all duration-300 mt-2 w-fit">
                      Découvrir tous nos programmes <ChevronRight className="w-5 h-5" />
                    </Link>
                  </div>

                  {/* Right column: 3 parcours */}
                  <div className="lg:w-1/2 flex flex-col gap-5">
                    {[
                      {
                        title: "Scientifique",
                        desc: "Préparation aux concours des grandes écoles d'ingénieurs et aux filières scientifiques sélectives : MPSI, PCSI, MP*, ENS, Polytechnique, CentraleSupélec, etc.",
                        icon: <Calculator className="w-6 h-6" />,
                        href: "/programme/scientifique"
                      },
                      {
                        title: "Économie & Commerce",
                        desc: "Préparation aux concours des grandes écoles de commerce et aux filières économiques sélectives : HEC, ESSEC, Prépa ECG, etc.",
                        icon: <TrendingUp className="w-6 h-6" />,
                        href: "/programme/commerce"
                      },
                      {
                        title: "Droit & Sciences Po",
                        desc: "Préparation aux licences et masters de Droit sélectifs, Sciences Po Paris et les autres IEP.",
                        icon: <Scale className="w-6 h-6" />,
                        href: "/programme/droit-sciences-po"
                      },
                    ].map((parcours, i) => (
                      <Link
                        key={i}
                        href={parcours.href}
                        className="flex items-start gap-5 bg-background p-6 rounded-2xl border border-border hover:border-primary/40 transition-colors duration-300 group/link block"
                      >
                        <div className="p-3 bg-accent/40 rounded-xl text-primary shrink-0 group-hover/link:bg-primary group-hover/link:text-primary-foreground transition-colors duration-300">
                          {parcours.icon}
                        </div>
                        <div>
                          <h3 className="text-lg font-sans font-bold text-foreground mb-1 group-hover/link:text-primary transition-colors">{parcours.title}</h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">{parcours.desc}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          CARTES D'ACCUEIL — Réseau, Évènements, International
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-6 md:py-12 bg-card/50 border-t border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 max-w-6xl mx-auto items-stretch">
            {/* Réseau intergénérationnel */}
            <div className="bg-background p-6 md:p-8 rounded-2xl shadow-xs border border-border hover:border-primary/50 transition-all duration-300 h-full flex flex-col group">
              <div className="w-12 h-12 bg-accent/30 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 font-sans">Réseau intergénérationnel</h3>
              <p className="text-muted-foreground leading-relaxed flex-1">
                Développement d'échanges et création de liens solides entre lycéens, étudiants et professionnels. Un réseau qui vous accompagne bien au-delà de vos études.
              </p>
              <Link href="/rejoindre" className="inline-flex items-center gap-2 text-primary font-semibold mt-6 group-hover:gap-4 transition-all duration-300 w-fit">
                Rejoindre TW3 <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
              </Link>
            </div>

            {/* Évènements inspirants */}
            <div className="bg-background p-6 md:p-8 rounded-2xl shadow-xs border border-border hover:border-primary/50 transition-all duration-300 h-full flex flex-col group">
              <div className="w-12 h-12 bg-accent/30 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <CalendarDays className="w-6 h-6" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 font-sans">Évènements inspirants</h3>
              <p className="text-muted-foreground leading-relaxed flex-1">
                Fédérer la communauté autour de forums de l'orientation, stages intensifs et conférences thématiques animées par des professionnels d'excellence.
              </p>
              <Link href="/evenements" className="inline-flex items-center gap-2 text-primary font-semibold mt-6 group-hover:gap-4 transition-all duration-300 w-fit">
                Voir les événements <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
              </Link>
            </div>

            {/* Portée internationale */}
            <div className="bg-background p-6 md:p-8 rounded-2xl shadow-xs border border-border hover:border-primary/50 transition-all duration-300 h-full flex flex-col group">
              <div className="w-12 h-12 bg-accent/30 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 font-sans">Portée internationale</h3>
              <p className="text-muted-foreground leading-relaxed flex-1">
                Une formation accessible à distance et en présentiel à Paris, qui rassemble des élèves et encadrants de France, du Maroc, de Suisse, du Luxembourg et d'ailleurs.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 text-primary font-semibold mt-6 group-hover:gap-4 transition-all duration-300 w-fit">
                Nous contacter <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          IMPACT & RÉSULTATS
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-10 md:py-24 bg-background border-t border-border overflow-hidden flex flex-col gap-8 md:gap-20">

        {/* Mentor Origins - Scrolling RTL */}
        <div className="w-full relative flex flex-col gap-6">
          <h3 className="text-center font-sans font-bold text-muted-foreground uppercase tracking-widest text-sm px-6">Nos mentors sont passés par</h3>

          <div className="relative w-full overflow-hidden flex pt-2 pb-2">
            <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>

            <DraggableScroller speed={0.8} reverse>
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

        {/* Center Stats */}
        <div className="container mx-auto px-4 md:px-6 text-center max-w-5xl">
          <h2 className="text-xl md:text-3xl lg:text-4xl font-sans text-foreground leading-relaxed mb-8 md:mb-12">
            Depuis 2023, l'Institut TW3 accompagne des élèves motivés vers les filières les plus prestigieuses.
          </h2>

          <div className="flex flex-row justify-center items-center gap-8 md:gap-16">
            <motion.div
              ref={impactRef}
              initial={{ y: 20, opacity: 0 }}
              animate={impactInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center"
            >
              <span className="text-5xl md:text-7xl font-serif font-bold text-primary leading-none">+100</span>
              <span className="text-base md:text-xl text-foreground font-semibold mt-2 md:mt-3">élèves accompagnés</span>
            </motion.div>

            <div className="hidden md:block w-px h-20 bg-border"></div>
            <div className="md:hidden w-px h-16 bg-border"></div>

            <motion.div
              ref={impactRef}
              initial={{ y: 20, opacity: 0 }}
              animate={impactInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col items-center"
            >
              <span className="text-5xl md:text-7xl font-serif font-bold text-primary leading-none">+70</span>
              <span className="text-base md:text-xl text-foreground font-semibold mt-2 md:mt-3">mentors engagés</span>
            </motion.div>
          </div>
        </div>

        {/* Integrations - Scrolling LTR */}
        <div className="w-full relative flex flex-col gap-6">
          <h3 className="text-center font-sans font-bold text-muted-foreground uppercase tracking-widest text-sm px-6">Nos élèves ont intégré</h3>

          <div className="relative w-full overflow-hidden flex pt-2 pb-2">
            <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>

            <DraggableScroller speed={0.8}>
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
          TÉMOIGNAGES — Structure prête (contenu à fournir)
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-8 md:py-16 bg-card/50 border-t border-border overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="flex flex-col justify-center items-center">
              <TextGenerateEffect words="Ils témoignent" duration={0.3} />
              <TextGenerateEffect words="de leurs parcours." delay={0.5} className="font-serif italic font-normal text-primary" />
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mt-4 md:mt-6">
              Élèves et mentors partagent leur expérience au sein de l'Institut TW3.
            </p>
          </div>

          {/* Testimonials Marquee */}
          <div className="relative w-full overflow-hidden flex flex-col pt-4 pb-4">
            <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-card/50 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-card/50 to-transparent z-10 pointer-events-none"></div>

            <DraggableScroller speed={1} reverse className="py-6">
              {[...testimonials, ...testimonials].map((testimonial, i) => (
                <motion.div
                  key={i}
                  animate={{ y: [0, -8, 0] }}
                  transition={{ repeat: Infinity, duration: 4 + (i % 3), ease: "easeInOut", delay: i * 0.2 }}
                  className="w-[300px] md:w-[400px] bg-background border border-border rounded-2xl p-6 flex flex-col gap-5 shadow-xs hover:border-primary/40 transition-colors shrink-0 pointer-events-none"
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
          CTA — Soutien & Newsletter
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-6 md:py-10 bg-background relative overflow-hidden border-t border-border">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-5xl mx-auto flex flex-col gap-5 md:flex-row md:gap-6 items-stretch">

            {/* Donate */}
            <div className="flex-1 bg-card border border-border rounded-2xl md:rounded-3xl p-5 md:p-8 flex flex-col items-center text-center justify-center shadow-sm">
              <h2 className="text-2xl md:text-4xl font-serif mb-3 md:mb-4">Soutenez l'excellence.</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Nos programmes sont 100% gratuits pour les étudiants. Votre générosité nous permet de maintenir et développer nos actions.
              </p>
              <Button asChild size="lg" className="rounded-full h-12 md:h-14 px-6 md:px-8 text-sm md:text-base font-medium group">
                <a href="https://www.helloasso.com/associations/ta3alamawa3alama/formulaires/1/" target="_blank" rel="noopener noreferrer">
                  Faire un don
                  <ArrowUpRight className="ml-2 w-5 h-5 group-hover:rotate-45 transition-transform" />
                </a>
              </Button>
            </div>

            {/* Newsletter */}
            <div className="flex-1 bg-accent/20 border border-border rounded-2xl md:rounded-3xl p-5 md:p-8 flex flex-col justify-center shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-10"></div>

              <h2 className="text-2xl font-bold mb-3 font-sans text-foreground">Newsletter</h2>
              <p className="text-muted-foreground leading-relaxed mb-6 text-sm md:text-base">
                Restez informé(e) de nos actualités, de l'ouverture des inscriptions et de nos événements inspirants.
              </p>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const email = (e.currentTarget.elements.namedItem('email') as HTMLInputElement).value;
                  window.location.href = `mailto:mail@tw3.fr?subject=Inscription%20Newsletter&body=Bonjour,%20merci%20de%20m'inscrire%20à%20la%20newsletter%20avec%20l'adresse%20:%20${email}`;
                }}
                className="flex flex-col sm:flex-row gap-3 mt-auto"
              >
                <input
                  type="email"
                  name="email"
                  placeholder="votre@email.com"
                  className="flex h-12 w-full sm:flex-1 rounded-xl border border-input bg-background px-4 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 shadow-sm"
                  required
                />
                <Button type="submit" className="h-12 rounded-xl px-6 font-medium shadow-sm">
                  S'inscrire
                </Button>
              </form>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
