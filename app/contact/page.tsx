'use client'

import { PublicNavbar } from '@/components/PublicNavbar'
import { Footer } from '@/components/Footer'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'
import { Button } from '@/components/ui/button'
import { Mail, MapPin, ArrowUpRight } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <PublicNavbar currentPage="contact" />

      <header className="pt-20 pb-6 md:pb-8 border-b border-border bg-card/30 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background -z-10"></div>
        <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl relative z-10">
          <h1 className="flex flex-col mb-4 md:mb-6 items-center">
            <TextGenerateEffect words="Nous" duration={0.2} />
            <TextGenerateEffect words="contacter" delay={0.4} className="font-serif italic font-normal text-primary" />
          </h1>
          <p className="mt-3 md:mt-4 text-base md:text-xl text-muted-foreground leading-relaxed">Une question sur nos programmes ? Envie de devenir bénévole ? N'hésitez pas à nous écrire.</p>
        </div>
      </header>

      <section className="py-6 md:py-8 px-4 md:px-12 bg-background">
        <div className="container mx-auto max-w-5xl grid md:grid-cols-2 gap-8 md:gap-10">

          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-8 font-sans">Coordonnées</h2>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/30 rounded-full flex items-center justify-center text-primary flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div className="pt-1">
                    <p className="text-sm text-muted-foreground font-medium mb-1">Email</p>
                    <a href="mailto:mail@tw3.fr" className="text-lg font-medium text-foreground hover:text-primary transition-colors">mail@tw3.fr</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/30 rounded-full flex items-center justify-center text-primary flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div className="pt-1">
                    <p className="text-sm text-muted-foreground font-medium mb-1">Siège social</p>
                    <p className="text-lg font-medium text-foreground">Île-de-France, France</p>
                    <p className="text-muted-foreground mt-1 text-sm">Les locaux d'enseignement varient selon les stages.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 bg-card border border-border rounded-3xl relative overflow-hidden group hover:border-primary/50 transition-colors">
              <div className="absolute -right-8 -top-8 w-32 h-32 bg-primary rounded-full blur-3xl opacity-20 md:group-hover:opacity-40 transition-opacity"></div>
              <h3 className="text-xl font-bold mb-3 relative z-10 font-sans text-foreground">Soutenir TW3</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-8 relative z-10">Votre contribution nous permet d'organiser plus d'événements et d'accompagner plus d'élèves gratuitement. Vos dons sont déductibles des impôts à hauteur de 66%.

              </p>
              <Button asChild className="relative z-10 group/btn">
                <a href="https://www.helloasso.com/associations/ta3alamawa3alama/formulaires/1/" target="_blank" rel="noopener noreferrer">
                  Faire un don <ArrowUpRight className="ml-2 w-4 h-4 group-hover/btn:rotate-45 transition-transform" />
                </a>
              </Button>
            </div>
          </div>

          <div className="bg-card rounded-2xl md:rounded-3xl p-5 md:p-6 border border-border shadow-xs">
            <h2 className="text-xl md:text-2xl font-bold text-foreground mb-6 md:mb-8 font-sans">Envoyez-nous un message</h2>
            <form className="space-y-5 md:space-y-6" onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              const prenom = formData.get('prenom');
              const nom = formData.get('nom');
              const email = formData.get('email');
              const sujet = formData.get('sujet');
              const message = formData.get('message');

              const mailtoUrl = `mailto:mail@tw3.fr?subject=${encodeURIComponent(`[Contact] ${sujet}`)}&body=${encodeURIComponent(
                `${message}\n${prenom} ${nom}`
              )}`;

              window.location.href = mailtoUrl;
            }}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
                <div>
                  <label htmlFor="prenom" className="block text-sm font-bold text-foreground mb-2">Prénom</label>
                  <input type="text" id="prenom" name="prenom" required className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-foreground" placeholder="Jean" />
                </div>
                <div>
                  <label htmlFor="nom" className="block text-sm font-bold text-foreground mb-2">Nom</label>
                  <input type="text" id="nom" name="nom" required className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-foreground" placeholder="Dupont" />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-bold text-foreground mb-2">Adresse email</label>
                <input type="email" id="email" name="email" required className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-foreground" placeholder="jean.dupont@exemple.com" />
              </div>

              <div>
                <label htmlFor="sujet" className="block text-sm font-bold text-foreground mb-2">Sujet</label>
                <select id="sujet" name="sujet" className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all appearance-none text-foreground">
                  <option>Candidature élève</option>
                  <option>Devenir bénévole</option>
                  <option>Partenariat</option>
                  <option>Autre question</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold text-foreground mb-2">Message</label>
                <textarea id="message" name="message" required rows={5} className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none text-foreground" placeholder="Comment pouvons-nous vous aider ?"></textarea>
              </div>

              <Button type="submit" size="lg" className="w-full rounded-xl py-6 text-base">
                Envoyer
              </Button>
            </form>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  )
}
