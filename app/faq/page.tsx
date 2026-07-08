'use client'

import { PublicNavbar } from '@/components/PublicNavbar'
import { Footer } from '@/components/Footer'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'
const faqs = [
  { question: "L'Institut TW3 est-il vraiment 100% gratuit ?", answer: "Oui, tous nos programmes, stages et accompagnements sont entièrement gratuits pour les étudiants sélectionnés. Notre mission est de lever les barrières financières à l'excellence." },
  { question: "Qui peut postuler à vos programmes ?", answer: "Nos programmes s'adressent aux lycéens (de la Seconde à la Terminale) et aux étudiants du supérieur (Prépas, Universités) extrêmement motivés, travailleurs et souhaitant intégrer les filières les plus sélectives (Grandes Écoles d'ingénieurs, de commerce, Sciences Po)." },
  { question: "Comment se déroule le processus de sélection ?", answer: "La sélection se fait sur dossier puis entretien. Nous évaluons principalement la motivation, le sérieux, le potentiel de progression et l'adhésion aux valeurs d'entraide et d'excellence de l'Institut." },
  { question: "Où se déroulent les cours et événements ?", answer: "La plupart de nos événements, stages intensifs et forums se déroulent en présentiel à Paris ou en région parisienne. Un accompagnement en ligne (Discord, visioconférence) est également proposé de manière intensive." },
  { question: "Comment puis-je devenir bénévole ?", answer: "Nous sommes toujours à la recherche de profils brillants et motivés (étudiants en Grandes Écoles, professionnels) pour rejoindre notre équipe pédagogique ou administrative. Rendez-vous sur la page 'Rejoindre TW3' pour soumettre votre candidature." }
]

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <PublicNavbar currentPage="faq" />
      
      <section className="pt-20 pb-6 md:pb-8 px-4 md:px-12 bg-background">
        <div className="container mx-auto">
          <div className="flex flex-col gap-8 md:gap-12">
            <div className="max-w-2xl text-center mx-auto">
              <h2>
                <TextGenerateEffect words="Vous avez des questions ?" duration={0.3} />
                <TextGenerateEffect
                  words="Nous avons les réponses."
                  delay={0.5}
                  className="font-serif font-bold text-primary"
                />
              </h2>
              <p className="text-muted-foreground mt-4 md:mt-6 text-base md:text-lg">Trouvez toutes les réponses à vos questions sur l'Institut, nos programmes et notre fonctionnement.</p>
            </div>
            
            <div className="max-w-3xl mx-auto w-full">
              <Accordion className="w-full flex flex-col gap-6">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={`item-${index}`}
                    value={`item-${index}`}
                    className="p-6 border border-border rounded-2xl flex flex-col gap-3 bg-card shadow-xs"
                  >
                    <AccordionTrigger className="p-0 text-xl font-medium hover:no-underline group">
                      <h4 className="text-foreground text-left">{faq.question}</h4>
                    </AccordionTrigger>
                    <AccordionContent className="p-0 text-muted-foreground text-base pt-4">
                      <p className="text-base font-normal text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
