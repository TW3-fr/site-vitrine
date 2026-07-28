'use client'

import Link from 'next/link'
import { PublicNavbar } from '@/components/PublicNavbar'
import { Footer } from '@/components/Footer'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'
import { FadeUp } from '@/components/ui/fade-up'
import { Button } from '@/components/ui/button'
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { ArrowUpRight, GraduationCap, Users2, Sparkles, MoveRight, BookOpen, CalendarDays, Globe, Calculator, TrendingUp, Scale, Quote, ChevronRight } from "lucide-react";
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
              className="flex flex-col sm:flex-row gap-4 justify-center mt-10 md:mt-12"
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
          BENTO FEATURES
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-background relative z-10">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-7xl mx-auto">
            
            {/* Card 1: Mentoring */}
            <FadeUp delay={0.1} className="md:col-span-2 h-full">
            <div className="bg-card rounded-3xl p-6 md:p-10 border border-border/50 shadow-sm flex flex-col justify-between group hover:border-primary/50 transition-colors relative overflow-hidden min-h-[300px] h-full">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-accent/40 to-transparent rounded-full -z-10 translate-x-1/3 -translate-y-1/3"></div>
              <div>
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                  <Users2 className="w-6 h-6" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold font-sans mb-3 text-foreground">Mentorat d'excellence</h3>
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-md">
                  Chaque élève est accompagné individuellement par un étudiant issu des filières les plus sélectives.
                </p>
              </div>
              <div className="mt-8 flex justify-end">
                <Button variant="ghost" className="rounded-full w-12 h-12 p-0 bg-background border border-border group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all">
                  <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
                </Button>
              </div>
            </div>
            </FadeUp>

            {/* Card 2: Gratuit */}
            <FadeUp delay={0.2} className="h-full">
            <div className="bg-[#391457] rounded-3xl p-6 md:p-10 shadow-sm flex flex-col justify-between group relative overflow-hidden text-white min-h-[300px] h-full">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/10 to-transparent"></div>
              <div className="relative z-10">
                <h3 className="text-4xl md:text-5xl font-bold font-sans mb-3 text-[#fffdd1]">100%</h3>
                <h4 className="text-xl md:text-2xl font-serif italic mb-3">gratuit.</h4>
                <p className="text-white/80 text-sm md:text-base leading-relaxed">
                  L'excellence ne doit pas être une question de moyens. Tous nos cursus sont financés par les dons.
                </p>
              </div>
            </div>
            </FadeUp>

            {/* Card 3: Photo block */}
            <FadeUp delay={0.3} className="h-full">
            <div className="rounded-3xl overflow-hidden relative min-h-[300px] group h-full">
              <img src="/photos/IMG_4834.jpg" alt="Panel TW3" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white font-bold text-lg md:text-xl">Inspirer la relève</p>
              </div>
            </div>
            </FadeUp>

            {/* Card 4: Académique */}
            <FadeUp delay={0.4} className="md:col-span-2 h-full">
            <div className="bg-card rounded-3xl p-6 md:p-10 border border-border/50 shadow-sm flex flex-col justify-between group hover:border-primary/50 transition-colors relative overflow-hidden min-h-[300px] h-full">
              <div>
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                  <BookOpen className="w-6 h-6" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold font-sans mb-3 text-foreground">Exigence académique</h3>
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-lg">
                  Nos stages intensifs et cours d'arabe reprennent les méthodes des meilleures classes préparatoires pour vous forger un mental de lauréat.
                </p>
              </div>
              <div className="mt-8">
                <Button asChild variant="outline" className="rounded-xl px-6 group/btn">
                  <Link href="/programme">
                    Découvrir nos filières
                    <MoveRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>
            </FadeUp>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          IMPACT — Stats + logos
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-12 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-[#f5f3f5] to-background -z-10"></div>
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
          PHOTO GALLERY
      ═══════════════════════════════════════════════════════════ */}
      <section ref={photoGalleryRef} className="py-12 md:py-20 bg-background overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto text-center mb-10 md:mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3 block">Nos événements en images</span>
            <h2 className="text-3xl md:text-5xl text-foreground">
              Une communauté <span className="italic font-bold text-primary font-serif">vivante</span>
            </h2>
          </div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <FadeUp delay={0.2} className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4 max-w-7xl mx-auto">
            {/* Image 1 */}
            <div className="break-inside-avoid rounded-2xl md:rounded-3xl overflow-hidden group">
              <img src="/photos/IMG_4815.jpg" alt="TW3" className="w-full object-cover transition-transform duration-700 md:group-hover:scale-105" />
            </div>
            {/* Text block instead of image */}
            <div className="break-inside-avoid rounded-2xl md:rounded-3xl bg-accent p-6 flex flex-col justify-center min-h-[160px] group border border-border/50">
              <Sparkles className="w-6 h-6 text-primary mb-3" />
              <p className="font-serif italic text-lg md:text-xl text-foreground font-bold">Un encadrement <br />sur-mesure.</p>
            </div>
            {/* Image 2 */}
            <div className="break-inside-avoid rounded-2xl md:rounded-3xl overflow-hidden group">
              <img src="/photos/STG4689.jpg" alt="TW3" className="w-full object-cover transition-transform duration-700 md:group-hover:scale-105" />
            </div>
            {/* Image 3 (Tall) */}
            <div className="break-inside-avoid rounded-2xl md:rounded-3xl overflow-hidden group">
              <img src="/photos/STG4716.jpg" alt="TW3" className="w-full object-cover transition-transform duration-700 md:group-hover:scale-105" />
            </div>
            {/* Image 4 */}
            <div className="break-inside-avoid rounded-2xl md:rounded-3xl overflow-hidden group">
              <img src="/photos/STG4653.jpg" alt="TW3" className="w-full object-cover transition-transform duration-700 md:group-hover:scale-105" />
            </div>
            {/* Image 5 */}
            <div className="break-inside-avoid rounded-2xl md:rounded-3xl overflow-hidden group">
              <img src="/photos/STG4681.jpg" alt="TW3" className="w-full object-cover transition-transform duration-700 md:group-hover:scale-105" />
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          TÉMOIGNAGES
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 bg-background overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
            <h2 className="flex flex-col justify-center items-center">
              <TextGenerateEffect words="Ils témoignent" duration={0.3} />
              <TextGenerateEffect words="de leurs parcours." delay={0.5} className="font-serif italic font-bold text-primary" />
            </h2>
          </div>
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
          CTA
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/photos/cta-bg.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-[#391457]/90 to-black/80"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4 md:px-6">
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
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          NEWSLETTER — Clean, focused section
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-12 md:py-16 bg-background border-t border-border">
        <div className="container mx-auto px-4 md:px-6">
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
        </div>
      </section>

      <Footer />
    </div>
  )
}
