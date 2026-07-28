'use client'

import { PublicNavbar } from '@/components/PublicNavbar'
import { Footer } from '@/components/Footer'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'
import { FadeUp } from '@/components/ui/fade-up'
import { MessageCircleQuestion } from 'lucide-react'

const faqs = [
  { question: "L'Institut TW3 est-il vraiment 100% gratuit ?", answer: <>Oui, tous nos programmes, stages et accompagnements sont entièrement <strong>gratuits</strong> pour les étudiants sélectionnés. Notre mission est de lever les barrières financières à l'excellence.</> },
  { question: "Qui peut postuler à vos programmes ?", answer: "Nos programmes s'adressent aux lycéens (de la Seconde à la Terminale) et aux étudiants du supérieur (Prépas, Universités) extrêmement motivés, travailleurs et souhaitant intégrer les filières les plus sélectives (Grandes Écoles d'ingénieurs, de commerce, Sciences Po)." },
  { question: "Comment se déroule le processus de sélection ?", answer: "La sélection se fait sur dossier puis entretien. Nous évaluons principalement la motivation, le sérieux, le potentiel de progression et l'adhésion aux valeurs d'entraide et d'excellence de l'Institut." },
  { question: "Où se déroulent les cours et événements ?", answer: "La plupart de nos événements, stages intensifs et forums se déroulent en présentiel à Paris ou en région parisienne. Un accompagnement en ligne (Discord, visioconférence) est également proposé de manière intensive." },
  { question: "Comment puis-je devenir bénévole ?", answer: "Nous sommes toujours à la recherche de profils brillants et motivés (étudiants en Grandes Écoles, professionnels) pour rejoindre notre équipe pédagogique ou administrative. Rendez-vous sur la page 'Rejoindre TW3' pour soumettre votre candidature." }
]

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <PublicNavbar currentPage="faq" theme="dark" />
      
      {/* Hero — Full-width photo with overlay */}
      <section className="relative z-10 pt-24 md:pt-28 pb-16 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/photos/STG4706.jpg" 
            alt="Élève et mentor TW3" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-[#391457]/80 to-background"></div>
        </div>
        <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl relative z-10">
          <h1 className="flex flex-col mb-4 md:mb-6 items-center">
            <TextGenerateEffect words="Foire aux questions" duration={0.3} className="text-white" />
            <TextGenerateEffect
              words="Des réponses claires."
              delay={0.5}
              className="font-serif italic font-bold text-tw3-accent mt-2"
            />
          </h1>
          <p className="mt-4 md:mt-6 text-base md:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto">
            Trouvez toutes les réponses à vos questions sur l'Institut, nos programmes et notre fonctionnement.
          </p>
        </div>
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10"></div>
      </section>
      
      <section className="py-10 md:py-16 px-4 md:px-12 bg-background relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl -z-10 -translate-x-1/2 translate-y-1/2"></div>
        
        <div className="container mx-auto">
          <FadeUp delay={0.1} className="max-w-4xl mx-auto w-full">
            <div className="flex items-center gap-4 mb-8 md:mb-12">
              <div className="w-12 h-12 bg-accent/30 rounded-xl flex items-center justify-center text-primary flex-shrink-0">
                <MessageCircleQuestion className="w-6 h-6" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold font-sans text-foreground">Questions fréquentes</h2>
            </div>
            
            <Accordion className="w-full flex flex-col gap-5">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={`item-${index}`}
                  value={`item-${index}`}
                  className="px-6 py-2 border border-border rounded-2xl bg-card shadow-sm hover:border-primary/40 transition-colors"
                >
                  <AccordionTrigger className="text-lg md:text-xl font-semibold hover:no-underline text-foreground text-left group">
                    <span className="group-hover:text-primary transition-colors">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base pt-2 pb-4 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </FadeUp>
        </div>
      </section>

      <Footer />
    </div>
  )
}
