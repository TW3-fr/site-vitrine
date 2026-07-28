'use client'

import { PublicNavbar } from '@/components/PublicNavbar'
import { Footer } from '@/components/Footer'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'
import { Button } from '@/components/ui/button'
import { FadeUp } from '@/components/ui/fade-up'
import { Mail, MapPin, ArrowUpRight } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <PublicNavbar currentPage="contact" theme="dark" />

      {/* Hero — Full-width photo with overlay */}
      <section className="relative pt-24 md:pt-28 pb-16 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/photos/STG4651.jpg" 
            alt="" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-[#391457]/80 to-background"></div>
        </div>
        <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl relative z-10">
          <h1 className="flex flex-col mb-4 md:mb-6 items-center">
            <TextGenerateEffect words="Nous" duration={0.2} className="text-white" />
            <TextGenerateEffect words="contacter" delay={0.4} className="font-serif italic font-bold text-tw3-accent" />
          </h1>
          <p className="mt-3 md:mt-4 text-base md:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto">Une question sur nos programmes ? Envie de devenir bénévole ? N'hésitez pas à nous écrire.</p>
        </div>
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10"></div>
      </section>

      <section className="py-8 md:py-12 px-4 md:px-12 bg-background">
        <div className="container mx-auto max-w-5xl grid md:grid-cols-5 gap-8 md:gap-10">

          {/* Left column — Info cards */}
          <FadeUp delay={0.1} className="md:col-span-2 space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6 font-sans">Coordonnées</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4 bg-card p-5 rounded-2xl border border-border">
                  <div className="w-11 h-11 bg-accent/30 rounded-xl flex items-center justify-center text-primary flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="pt-0.5">
                    <p className="text-xs text-muted-foreground font-bold uppercase tracking-wider mb-1">Email</p>
                    <a href="mailto:mail@tw3.fr" className="text-base font-medium text-foreground hover:text-primary transition-colors">mail@tw3.fr</a>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-card p-5 rounded-2xl border border-border">
                  <div className="w-11 h-11 bg-accent/30 rounded-xl flex items-center justify-center text-primary flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="pt-0.5">
                    <p className="text-xs text-muted-foreground font-bold uppercase tracking-wider mb-1">Siège social</p>
                    <p className="text-base font-medium text-foreground">Île-de-France, France</p>
                    <p className="text-muted-foreground mt-1 text-sm">Les locaux d'enseignement varient selon les stages.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Donate CTA card with photo background */}
            <div className="relative rounded-2xl md:rounded-3xl overflow-hidden group hover:border-primary/50 transition-colors min-h-[200px]">
              <img 
                src="/photos/STG4640.jpg" 
                alt="Intervenants TW3" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 md:group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-[#391457]/80 to-black/60"></div>
              <div className="relative z-10 p-6 md:p-8 flex flex-col h-full justify-end">
                <h3 className="text-xl font-bold mb-2 font-sans text-white">Soutenir TW3</h3>
                <p className="text-white/80 text-sm leading-relaxed mb-5">Votre contribution nous permet d'organiser plus d'événements et d'accompagner plus d'élèves <strong className="text-white">gratuitement</strong>. Dons déductibles à 66%.</p>
                <Button asChild className="group/btn bg-white text-primary hover:bg-white/90 hover:text-primary transition-colors w-fit">
                  <a href="https://www.helloasso.com/associations/ta3alamawa3alama/formulaires/1/" target="_blank" rel="noopener noreferrer">
                    Faire un don <ArrowUpRight className="ml-2 w-4 h-4 group-hover/btn:rotate-45 transition-transform" />
                  </a>
                </Button>
              </div>
            </div>
          </FadeUp>

          {/* Right column — Form */}
          <FadeUp delay={0.2} className="md:col-span-3 bg-card rounded-2xl md:rounded-3xl p-5 md:p-8 border border-border shadow-sm h-full">
            <h2 className="text-xl md:text-2xl font-bold text-foreground mb-6 md:mb-8 font-sans">Envoyez-nous un message</h2>
            <form className="space-y-5 md:space-y-6" onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              const prenom = formData.get('prenom');
              const nom = formData.get('nom');
              const email = formData.get('email');
              const sujet = formData.get('sujet');
              const message = formData.get('message');

              const destEmail = sujet === 'Partenariat' ? 'partenariat@tw3.fr' : 'mail@tw3.fr';
              const mailtoUrl = `mailto:${destEmail}?subject=${encodeURIComponent(`[Contact] ${sujet}`)}&body=${encodeURIComponent(
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
          </FadeUp>

        </div>
      </section>

      <Footer />
    </div>
  )
}
