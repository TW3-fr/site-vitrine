import { Metadata } from 'next'
import { PublicNavbar } from '@/components/PublicNavbar'
import { Footer } from '@/components/Footer'
import { Shield, Scale, FileText, Lock, Eye, Database, UserCheck, Mail, MapPin, Globe, AlertTriangle, Clock, ScrollText } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Mentions légales & Confidentialité',
  description: 'Mentions légales, politique de confidentialité et protection des données personnelles de l\'Institut TW3 (association Ta3alama Wa 3alama).',
}

function SectionTitle({ icon, title, id }: { icon: React.ReactNode, title: string, id: string }) {
  return (
    <div id={id} className="flex items-center gap-3 mb-6 scroll-mt-28">
      <div className="p-2.5 bg-primary/10 rounded-xl text-primary shrink-0">
        {icon}
      </div>
      <h2 className="text-2xl md:text-3xl font-bold text-foreground font-sans">{title}</h2>
    </div>
  )
}

function SubSection({ title, children }: { title: string, children: React.ReactNode }) {
  return (
    <div className="mb-6">
      <h3 className="text-lg md:text-xl font-bold text-foreground mb-3 font-sans">{title}</h3>
      <div className="text-muted-foreground leading-relaxed space-y-3">
        {children}
      </div>
    </div>
  )
}

function ArticleRef({ article, document }: { article: string, document: string }) {
  return (
    <span className="inline-flex items-center gap-1 text-xs font-medium text-primary/70 bg-primary/5 px-2 py-0.5 rounded-full border border-primary/10">
      <ScrollText className="w-3 h-3" />
      {article} — {document}
    </span>
  )
}

export default function MentionsLegalesPage() {
  const sections = [
    { id: 'mentions-legales', label: 'Mentions légales' },
    { id: 'editeur', label: 'Éditeur du site' },
    { id: 'hebergement', label: 'Hébergement' },
    { id: 'propriete-intellectuelle', label: 'Propriété intellectuelle' },
    { id: 'confidentialite', label: 'Politique de confidentialité' },
    { id: 'donnees-collectees', label: 'Données collectées' },
    { id: 'finalites', label: 'Finalités du traitement' },
    { id: 'base-legale', label: 'Base légale' },
    { id: 'duree-conservation', label: 'Durée de conservation' },
    { id: 'droits', label: 'Vos droits (RGPD)' },
    { id: 'cookies', label: 'Cookies' },
    { id: 'securite', label: 'Sécurité des données' },
    { id: 'engagement-ethique', label: 'Engagement éthique' },
    { id: 'documents', label: 'Documents officiels' },
    { id: 'modification', label: 'Modification de la politique' },
  ]

  return (
    <div className="min-h-screen bg-background font-sans">
      <PublicNavbar />

      {/* Hero */}
      <header className="pt-24 md:pt-32 pb-8 md:pb-12 px-4 md:px-12 bg-background border-b border-border">
        <div className="container mx-auto max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/50 text-foreground text-xs font-bold uppercase tracking-wider rounded-full border border-border/50 mb-6">
            <Shield className="w-3.5 h-3.5" />
            Informations juridiques
          </div>
          <h1 className="text-3xl md:text-5xl font-sans font-extrabold text-foreground leading-tight mb-4">
            Mentions légales &{' '}
            <span className="font-serif italic font-normal text-primary">Confidentialité</span>
          </h1>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Conformément à la législation française et européenne en vigueur, vous trouverez ci-dessous l&apos;ensemble des informations relatives à l&apos;identité de l&apos;éditeur, à la protection de vos données personnelles et à vos droits.
          </p>
          <p className="text-xs text-muted-foreground mt-4">Dernière mise à jour : 4 juin 2026</p>
        </div>
      </header>

      <div className="container mx-auto max-w-5xl px-4 md:px-12 py-8 md:py-16">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">

          {/* Sidebar nav */}
          <aside className="hidden lg:block lg:w-72 shrink-0">
            <nav className="sticky top-28 space-y-1">
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4 px-3">Sommaire</p>
              {sections.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="block px-3 py-1.5 text-sm text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-colors"
                >
                  {s.label}
                </a>
              ))}
            </nav>
          </aside>

          {/* Content */}
          <main className="flex-1 min-w-0">

            {/* ══════════════════════════════════════════════════════
                MENTIONS LÉGALES
            ══════════════════════════════════════════════════════ */}
            <section className="mb-12 md:mb-16">
              <SectionTitle icon={<Scale className="w-6 h-6" />} title="Mentions légales" id="mentions-legales" />
              <p className="text-muted-foreground leading-relaxed mb-6">
                Le présent site internet <strong className="text-foreground">tw3.fr</strong> est édité par l&apos;association <strong className="text-foreground">TA3ALAMA WA 3ALAMA</strong> (ci-après « l&apos;Association » ou « TW3 »), association régie par la loi du 1<sup>er</sup> juillet 1901 et le décret du 16 août 1901, conformément à l&apos;article 1 de ses statuts adoptés lors de l&apos;Assemblée générale du 5 mars 2025.
              </p>
            </section>

            {/* ÉDITEUR */}
            <section className="mb-12 md:mb-16 bg-card rounded-2xl border border-border p-6 md:p-8">
              <SectionTitle icon={<FileText className="w-6 h-6" />} title="Éditeur du site" id="editeur" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">Dénomination</p>
                    <p className="text-foreground font-semibold">TA3ALAMA WA 3ALAMA (TW3)</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">Forme juridique</p>
                    <p className="text-foreground">Association loi 1901</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">Objet social</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Actions d&apos;intérêt général dans les domaines de l&apos;éducation, de l&apos;enseignement, de l&apos;accompagnement et de l&apos;insertion des étudiants, ainsi que des actions humanitaires en faveur des personnes en situation de précarité. <ArticleRef article="Art. 3.1" document="Statuts" />
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">Siège social</p>
                    <p className="text-foreground flex items-start gap-2">
                      <MapPin className="w-4 h-4 shrink-0 mt-0.5 text-primary" />
                      1 rue des Onchères, 69120 Vaulx-en-Velin
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">Contact</p>
                    <p className="text-foreground flex items-start gap-2">
                      <Mail className="w-4 h-4 shrink-0 mt-0.5 text-primary" />
                      <a href="mailto:mail@tw3.fr" className="text-primary hover:underline">mail@tw3.fr</a>
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">Site internet</p>
                    <p className="text-foreground flex items-start gap-2">
                      <Globe className="w-4 h-4 shrink-0 mt-0.5 text-primary" />
                      <a href="https://tw3.fr" className="text-primary hover:underline">tw3.fr</a>
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">Directeur de la publication</p>
                    <p className="text-foreground">Le Président de l&apos;Association</p>
                  </div>
                </div>
              </div>
            </section>

            {/* HÉBERGEMENT */}
            <section className="mb-12 md:mb-16">
              <SectionTitle icon={<Globe className="w-6 h-6" />} title="Hébergement" id="hebergement" />
              <p className="text-muted-foreground leading-relaxed mb-3">
                Le site tw3.fr est hébergé par :
              </p>
              <div className="bg-card rounded-xl border border-border p-5">
                <p className="font-semibold text-foreground">GitHub Pages / Vercel</p>
                <p className="text-sm text-muted-foreground mt-1">
                  GitHub, Inc. – 88 Colin P Kelly Jr St, San Francisco, CA 94107, United States
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  Vercel Inc. – 340 S Lemon Ave #4133, Walnut, CA 91789, United States
                </p>
              </div>
            </section>

            {/* PROPRIÉTÉ INTELLECTUELLE */}
            <section className="mb-12 md:mb-16">
              <SectionTitle icon={<Lock className="w-6 h-6" />} title="Propriété intellectuelle" id="propriete-intellectuelle" />
              <p className="text-muted-foreground leading-relaxed mb-3">
                L&apos;ensemble des éléments constituant le site tw3.fr (textes, images, logos, graphismes, icônes, vidéos, logiciels, bases de données, mises en page, etc.) est protégé par les dispositions du Code de la propriété intellectuelle et par les conventions internationales en vigueur.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Toute reproduction, représentation, modification, publication, adaptation, totale ou partielle, de ces éléments, par quelque moyen ou procédé que ce soit, est interdite sauf autorisation écrite préalable de l&apos;Association.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Les documents et ressources pédagogiques fournis aux élèves par les mentors sont strictement réservés à un usage personnel. Toute diffusion ou partage de ces supports est interdite sans l&apos;accord préalable des enseignants concernés. <ArticleRef article="Art. 21" document="Règlement intérieur" />
              </p>
            </section>

            {/* ══════════════════════════════════════════════════════
                POLITIQUE DE CONFIDENTIALITÉ
            ══════════════════════════════════════════════════════ */}
            <div className="border-t border-border my-8 md:my-12"></div>

            <section className="mb-12 md:mb-16">
              <SectionTitle icon={<Eye className="w-6 h-6" />} title="Politique de confidentialité" id="confidentialite" />
              <p className="text-muted-foreground leading-relaxed mb-4">
                L&apos;Association TA3ALAMA WA 3ALAMA, en tant que responsable du traitement, attache une grande importance à la protection de vos données personnelles. La présente politique de confidentialité a pour objet de vous informer de la manière dont vos données sont collectées, traitées et protégées, conformément au :
              </p>
              <ul className="space-y-2 text-muted-foreground mb-4">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1.5">•</span>
                  <span><strong className="text-foreground">Règlement (UE) 2016/679</strong> du Parlement européen et du Conseil du 27 avril 2016 relatif à la protection des personnes physiques à l&apos;égard du traitement des données à caractère personnel (ci-après « RGPD »)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1.5">•</span>
                  <span><strong className="text-foreground">Loi n° 78-17 du 6 janvier 1978</strong> relative à l&apos;informatique, aux fichiers et aux libertés, modifiée (ci-après « loi Informatique et Libertés »)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1.5">•</span>
                  <span><strong className="text-foreground">Directive 2002/58/CE</strong> du 12 juillet 2002 concernant le traitement des données à caractère personnel et la protection de la vie privée dans le secteur des communications électroniques (directive « vie privée et communications électroniques »)</span>
                </li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                <ArticleRef article="Chapitre 7" document="Règlement intérieur" />
              </p>
            </section>

            {/* DONNÉES COLLECTÉES */}
            <section className="mb-12 md:mb-16">
              <SectionTitle icon={<Database className="w-6 h-6" />} title="Données collectées" id="donnees-collectees" />
              <p className="text-muted-foreground leading-relaxed mb-4">
                Dans le cadre de ses activités, l&apos;Association est amenée à collecter les catégories de données personnelles suivantes :
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    title: 'Données d\'identification',
                    items: ['Nom et prénom', 'Date de naissance', 'Adresse postale', 'Photographie (le cas échéant)']
                  },
                  {
                    title: 'Coordonnées',
                    items: ['Adresse e-mail', 'Numéro de téléphone', 'Adresse de correspondance']
                  },
                  {
                    title: 'Données académiques',
                    items: ['Établissement scolaire', 'Niveau d\'études', 'Résultats et bulletins', 'Filière ou cursus suivi']
                  },
                  {
                    title: 'Données de navigation',
                    items: ['Adresse IP (anonymisée)', 'Type de navigateur', 'Pages consultées', 'Durée de visite']
                  }
                ].map((cat) => (
                  <div key={cat.title} className="bg-card rounded-xl border border-border p-5">
                    <h4 className="font-bold text-foreground text-sm mb-3 font-sans">{cat.title}</h4>
                    <ul className="space-y-1.5">
                      {cat.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="text-primary mt-0.5">–</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* FINALITÉS */}
            <section className="mb-12 md:mb-16">
              <SectionTitle icon={<FileText className="w-6 h-6" />} title="Finalités du traitement" id="finalites" />
              <p className="text-muted-foreground leading-relaxed mb-4">
                Les données personnelles collectées sont traitées pour les finalités suivantes, conformément à l&apos;article 6 du RGPD :
              </p>
              <div className="space-y-3">
                {[
                  { title: 'Gestion des candidatures', desc: 'Instruction et suivi des dossiers de candidature des élèves et des mentors bénévoles.' },
                  { title: 'Gestion des adhésions', desc: 'Enregistrement, suivi et administration des membres de l\'Association conformément aux statuts (Art. 7 des Statuts).' },
                  { title: 'Accompagnement pédagogique', desc: 'Organisation et suivi des programmes éducatifs, attribution des mentors, évaluation de la progression des élèves.' },
                  { title: 'Communication institutionnelle', desc: 'Envoi d\'informations relatives aux activités, événements et actualités de l\'Association via les canaux officiels (Art. 17 du Règlement intérieur).' },
                  { title: 'Gestion des dons', desc: 'Traitement des dons et émission des reçus fiscaux, conformément aux obligations légales applicables.' },
                  { title: 'Obligations légales et réglementaires', desc: 'Respect des obligations comptables, fiscales et juridiques incombant à l\'Association.' },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3 bg-card/50 rounded-xl border border-border/50 p-4">
                    <span className="text-primary font-bold text-lg leading-none mt-0.5">›</span>
                    <div>
                      <p className="font-semibold text-foreground text-sm">{item.title}</p>
                      <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* BASE LÉGALE */}
            <section className="mb-12 md:mb-16">
              <SectionTitle icon={<Scale className="w-6 h-6" />} title="Base légale des traitements" id="base-legale" />
              <p className="text-muted-foreground leading-relaxed mb-4">
                Conformément à l&apos;article 6 du RGPD, chaque traitement de données personnelles repose sur l&apos;une des bases légales suivantes :
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 px-4 text-foreground font-bold font-sans">Traitement</th>
                      <th className="text-left py-3 px-4 text-foreground font-bold font-sans">Base légale (Art. 6 RGPD)</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted-foreground">
                    <tr className="border-b border-border/50">
                      <td className="py-3 px-4">Candidatures élèves/mentors</td>
                      <td className="py-3 px-4">Consentement (Art. 6.1.a)</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-3 px-4">Gestion des adhésions</td>
                      <td className="py-3 px-4">Exécution d&apos;un contrat (Art. 6.1.b)</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-3 px-4">Accompagnement pédagogique</td>
                      <td className="py-3 px-4">Intérêt légitime (Art. 6.1.f)</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-3 px-4">Communication institutionnelle</td>
                      <td className="py-3 px-4">Intérêt légitime (Art. 6.1.f)</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-3 px-4">Gestion des dons</td>
                      <td className="py-3 px-4">Obligation légale (Art. 6.1.c)</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Comptabilité et obligations fiscales</td>
                      <td className="py-3 px-4">Obligation légale (Art. 6.1.c)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* DURÉE DE CONSERVATION */}
            <section className="mb-12 md:mb-16">
              <SectionTitle icon={<Clock className="w-6 h-6" />} title="Durée de conservation" id="duree-conservation" />
              <p className="text-muted-foreground leading-relaxed mb-4">
                Conformément au principe de limitation de la conservation énoncé à l&apos;article 5.1.e du RGPD et conformément au Chapitre 7 du Règlement intérieur de l&apos;Association :
              </p>
              <div className="bg-card rounded-2xl border border-border p-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-bold text-foreground">Durée générale : 5 ans</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Les données personnelles recueillies au sein de l&apos;Association sont conservées pendant une durée maximale de <strong className="text-foreground">cinq (5) ans</strong> à compter de leur collecte ou de la dernière interaction avec la personne concernée. <ArticleRef article="Chapitre 7" document="Règlement intérieur" />
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-accent/50 rounded-lg flex items-center justify-center shrink-0">
                      <Database className="w-5 h-5 text-muted-foreground" />
                    </div>
                    <div>
                      <p className="font-bold text-foreground">Accès restreint</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Les données sont accessibles <strong className="text-foreground">uniquement aux membres gestionnaires</strong> dûment habilités de l&apos;Association.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-accent/50 rounded-lg flex items-center justify-center shrink-0">
                      <FileText className="w-5 h-5 text-muted-foreground" />
                    </div>
                    <div>
                      <p className="font-bold text-foreground">Documents comptables</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Les données nécessaires à la tenue de la comptabilité sont conservées pendant <strong className="text-foreground">dix (10) ans</strong> conformément aux obligations légales (article L123-22 du Code de commerce). <ArticleRef article="Art. 17" document="Statuts" />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* DROITS RGPD */}
            <section className="mb-12 md:mb-16">
              <SectionTitle icon={<UserCheck className="w-6 h-6" />} title="Vos droits (RGPD)" id="droits" />
              <p className="text-muted-foreground leading-relaxed mb-6">
                Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, vous disposez à tout moment des droits suivants concernant vos données personnelles :
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {[
                  {
                    title: 'Droit d\'accès',
                    desc: 'Obtenir la confirmation que des données vous concernant sont traitées et en recevoir une copie (Art. 15 RGPD).',
                    article: 'Art. 15'
                  },
                  {
                    title: 'Droit de rectification',
                    desc: 'Faire corriger des données inexactes ou compléter des données incomplètes (Art. 16 RGPD).',
                    article: 'Art. 16'
                  },
                  {
                    title: 'Droit à l\'effacement',
                    desc: 'Obtenir l\'effacement de vos données dans les cas prévus par la loi, dit « droit à l\'oubli » (Art. 17 RGPD).',
                    article: 'Art. 17'
                  },
                  {
                    title: 'Droit à la limitation',
                    desc: 'Demander la suspension du traitement de vos données dans certaines circonstances (Art. 18 RGPD).',
                    article: 'Art. 18'
                  },
                  {
                    title: 'Droit à la portabilité',
                    desc: 'Recevoir vos données dans un format structuré et couramment utilisé, ou les transmettre à un autre responsable (Art. 20 RGPD).',
                    article: 'Art. 20'
                  },
                  {
                    title: 'Droit d\'opposition',
                    desc: 'Vous opposer à tout moment au traitement de vos données fondé sur l\'intérêt légitime (Art. 21 RGPD).',
                    article: 'Art. 21'
                  },
                ].map((droit) => (
                  <div key={droit.title} className="bg-card rounded-xl border border-border p-5 flex flex-col">
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="font-bold text-foreground text-sm font-sans">{droit.title}</h4>
                      <span className="text-[10px] font-medium text-primary bg-primary/5 px-1.5 py-0.5 rounded border border-primary/10">{droit.article}</span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{droit.desc}</p>
                  </div>
                ))}
              </div>

              <SubSection title="Droit post mortem">
                <p>
                  Vous disposez également du droit de définir des directives relatives à la conservation, à l&apos;effacement et à la communication de vos données personnelles après votre décès, conformément à l&apos;article 85 de la loi Informatique et Libertés. <ArticleRef article="Chapitre 7" document="Règlement intérieur" />
                </p>
              </SubSection>

              <SubSection title="Exercer vos droits">
                <div className="bg-primary/5 border border-primary/10 rounded-xl p-5">
                  <p className="text-sm text-foreground mb-3">
                    Pour exercer l&apos;un de ces droits, adressez votre demande accompagnée d&apos;un justificatif d&apos;identité :
                  </p>
                  <div className="space-y-2 text-sm">
                    <p className="flex items-start gap-2">
                      <Mail className="w-4 h-4 shrink-0 mt-0.5 text-primary" />
                      <span>Par e-mail : <a href="mailto:mail@tw3.fr" className="text-primary font-semibold hover:underline">mail@tw3.fr</a></span>
                    </p>
                    <p className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 shrink-0 mt-0.5 text-primary" />
                      <span>Par courrier : TA3ALAMA WA 3ALAMA – 1 rue des Onchères, 69120 Vaulx-en-Velin</span>
                    </p>
                  </div>
                  <p className="text-xs text-muted-foreground mt-3">
                    L&apos;Association s&apos;engage à répondre à votre demande dans un délai d&apos;un mois à compter de sa réception, conformément à l&apos;article 12.3 du RGPD.
                  </p>
                </div>
              </SubSection>

              <SubSection title="Réclamation auprès de la CNIL">
                <p>
                  Si vous estimez, après nous avoir contactés, que vos droits ne sont pas respectés, vous avez la possibilité d&apos;introduire une réclamation auprès de la <strong className="text-foreground">Commission Nationale de l&apos;Informatique et des Libertés (CNIL)</strong> :
                </p>
                <p className="text-sm">
                  <a href="https://www.cnil.fr/fr/plaintes" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.cnil.fr</a> — 3 Place de Fontenoy, TSA 80715, 75334 Paris Cedex 07
                </p>
              </SubSection>
            </section>

            {/* COOKIES */}
            <section className="mb-12 md:mb-16">
              <SectionTitle icon={<Database className="w-6 h-6" />} title="Cookies et traceurs" id="cookies" />
              <p className="text-muted-foreground leading-relaxed mb-4">
                Le site tw3.fr est un site vitrine statique. À ce titre :
              </p>
              <div className="bg-card rounded-xl border border-border p-5 space-y-3">
                <p className="text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Aucun cookie publicitaire</strong> ni aucun traceur à des fins de profilage commercial n&apos;est déposé sur votre terminal.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Le site peut utiliser des <strong className="text-foreground">cookies strictement nécessaires</strong> au fonctionnement technique (préférences d&apos;affichage, session de navigation). Ces cookies sont exemptés de consentement conformément aux lignes directrices de la CNIL relatives aux cookies et traceurs (délibération n° 2020-091 du 17 septembre 2020).
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Si des outils d&apos;analyse d&apos;audience venaient à être intégrés, ils seraient configurés de manière à respecter les recommandations de la CNIL en matière d&apos;exemption de consentement (anonymisation des adresses IP, absence de suivi inter-sites, durée de conservation limitée).
                </p>
              </div>
            </section>

            {/* SÉCURITÉ */}
            <section className="mb-12 md:mb-16">
              <SectionTitle icon={<Shield className="w-6 h-6" />} title="Sécurité des données" id="securite" />
              <p className="text-muted-foreground leading-relaxed mb-4">
                L&apos;Association met en œuvre les mesures techniques et organisationnelles appropriées afin de garantir un niveau de sécurité adapté au risque, conformément à l&apos;article 32 du RGPD :
              </p>
              <ul className="space-y-2 text-muted-foreground">
                {[
                  'Chiffrement des communications via le protocole HTTPS (TLS)',
                  'Restriction d\'accès aux données aux seuls membres gestionnaires habilités',
                  'Obligation de confidentialité imposée à tous les membres ayant accès aux données (Art. 21 du Règlement intérieur)',
                  'Interdiction formelle d\'enregistrer des membres ou intervenants sans leur accord préalable (Art. 21 du Règlement intérieur)',
                  'Hébergement sur des plateformes respectant des standards de sécurité élevés',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <Shield className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* ENGAGEMENT ÉTHIQUE */}
            <section className="mb-12 md:mb-16">
              <SectionTitle icon={<AlertTriangle className="w-6 h-6" />} title="Engagement éthique et vie privée" id="engagement-ethique" />
              <p className="text-muted-foreground leading-relaxed mb-4">
                L&apos;Association s&apos;engage au respect strict de la vie privée de ses membres, élèves, mentors et partenaires, conformément aux dispositions de ses documents fondateurs :
              </p>
              <div className="space-y-4">
                <div className="bg-card/50 rounded-xl border border-border/50 p-5">
                  <h4 className="font-bold text-foreground text-sm mb-2">Respect de la vie privée <ArticleRef article="Art. 20" document="Règlement intérieur" /></h4>
                  <p className="text-sm text-muted-foreground">
                    Chaque membre doit respecter la vie privée des autres membres, intervenants ou partenaires de l&apos;Association. Toute utilisation d&apos;informations personnelles sans consentement est strictement interdite.
                  </p>
                </div>
                <div className="bg-card/50 rounded-xl border border-border/50 p-5">
                  <h4 className="font-bold text-foreground text-sm mb-2">Confidentialité <ArticleRef article="Art. 21" document="Règlement intérieur" /></h4>
                  <p className="text-sm text-muted-foreground">
                    Les discussions internes, décisions stratégiques ou informations sensibles partagées au sein de l&apos;Association doivent rester confidentielles. La divulgation de ces informations est strictement interdite.
                  </p>
                </div>
                <div className="bg-card/50 rounded-xl border border-border/50 p-5">
                  <h4 className="font-bold text-foreground text-sm mb-2">Neutralité politique <ArticleRef article="Art. 22" document="Règlement intérieur" /></h4>
                  <p className="text-sm text-muted-foreground">
                    L&apos;Association est apolitique. Toute forme de promotion d&apos;idéologies politiques personnelles ou d&apos;incitation des membres à adopter des opinions politiques spécifiques est interdite.
                  </p>
                </div>
                <div className="bg-card/50 rounded-xl border border-border/50 p-5">
                  <h4 className="font-bold text-foreground text-sm mb-2">Interdiction de divulgation <ArticleRef article="Charte" document="Charte" /></h4>
                  <p className="text-sm text-muted-foreground">
                    Toute divulgation d&apos;informations personnelles concernant les membres, mentors ou élèves sans leur consentement explicite est proscrite, conformément à la Charte de l&apos;Association.
                  </p>
                </div>
              </div>
            </section>

            {/* DOCUMENTS OFFICIELS */}
            <section className="mb-12 md:mb-16">
              <SectionTitle icon={<ScrollText className="w-6 h-6" />} title="Documents officiels de référence" id="documents" />
              <p className="text-muted-foreground leading-relaxed mb-4">
                Les présentes mentions légales et politique de confidentialité sont établies en conformité avec les documents fondateurs de l&apos;Association, consultables ci-dessous :
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { title: 'Statuts TW3', desc: 'Adoptés le 5 mars 2025', href: '/documents/Statuts_2025_TW3.pdf' },
                  { title: 'Règlement intérieur', desc: 'En vigueur depuis le 3 mars 2025', href: '/documents/Reglement-interieur-TW3.pdf' },
                  { title: 'Charte éthique', desc: 'Adoptée le 3 mars 2025', href: '/documents/Charte_TW3.pdf' },
                ].map((doc) => (
                  <a
                    key={doc.title}
                    href={doc.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-card rounded-xl border border-border p-5 hover:border-primary/50 transition-colors group block"
                  >
                    <FileText className="w-8 h-8 text-primary/50 mb-3" />
                    <h4 className="font-bold text-foreground text-sm font-sans group-hover:text-primary transition-colors">{doc.title}</h4>
                    <p className="text-xs text-muted-foreground mt-1">{doc.desc}</p>
                  </a>
                ))}
              </div>
            </section>

            {/* MODIFICATION */}
            <section className="mb-12 md:mb-16">
              <SectionTitle icon={<FileText className="w-6 h-6" />} title="Modification de la présente politique" id="modification" />
              <p className="text-muted-foreground leading-relaxed mb-3">
                L&apos;Association se réserve le droit de modifier la présente politique de confidentialité et les mentions légales à tout moment, notamment pour se conformer à toute évolution législative, réglementaire, jurisprudentielle ou technique.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-3">
                La date de la dernière mise à jour est indiquée en haut de la présente page. Toute modification substantielle sera portée à la connaissance des utilisateurs par une mention sur le site ou par tout autre moyen approprié.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Il est recommandé de consulter régulièrement cette page afin de prendre connaissance des éventuelles modifications.
              </p>
            </section>

            {/* DROIT APPLICABLE */}
            <div className="bg-accent/30 border border-border/50 rounded-2xl p-6 md:p-8">
              <h3 className="text-lg font-bold text-foreground mb-3 font-sans">Droit applicable et juridiction compétente</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Les présentes mentions légales et politique de confidentialité sont régies par le droit français. En cas de litige relatif à l&apos;interprétation ou à l&apos;exécution des présentes, et après échec de toute tentative de résolution amiable, les tribunaux français compétents auront juridiction exclusive.
              </p>
              <p className="text-sm text-muted-foreground">
                L&apos;Association rappelle qu&apos;en vertu de l&apos;article L.616-1 du Code de la consommation, le consommateur peut recourir gratuitement au service de médiation proposé par l&apos;Association. Le médiateur « droit de la consommation » ainsi proposé est disponible via les coordonnées de contact de l&apos;Association.
              </p>
            </div>

          </main>
        </div>
      </div>

      <Footer />
    </div>
  )
}
