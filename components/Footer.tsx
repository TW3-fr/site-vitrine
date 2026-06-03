import Link from 'next/link'
import Image from 'next/image'

export function Footer() {
  return (
    <footer className="bg-background border-t border-border pt-10 md:pt-16 pb-6 md:pb-8 mt-12 md:mt-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-8 mb-10 md:mb-16">
          <div className="md:col-span-5 lg:col-span-4">
            <Link href="/" className="flex items-center gap-3 font-semibold text-xl text-foreground mb-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logos/logo-tw3.svg" alt="Institut TW3" className="w-11 h-11" />
              <span className="tracking-tight text-2xl md:text-3xl">
                <span className="font-sans font-extrabold">Institut </span>
                <span className="font-serif italic text-primary">TW3</span>
              </span>
            </Link>
            <p className="font-serif italic text-lg md:text-xl text-foreground/90 leading-relaxed mb-6 pr-4">
              Apprendre, enseigner, exceller.
            </p>
          </div>
          
          <div className="md:col-span-7 lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div>
              <h4 className="font-sans font-bold text-foreground mb-5 tracking-tight text-lg">Programmes</h4>
              <ul className="space-y-3 text-sm text-muted-foreground font-medium">
                <li><Link href="/programme/scientifique" className="hover:text-primary transition-colors">Scientifique</Link></li>
                <li><Link href="/programme/commerce" className="hover:text-primary transition-colors">Commerce</Link></li>
                <li><Link href="/programme/droit-sciences-po" className="hover:text-primary transition-colors">Droit & Sciences Po</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-sans font-bold text-foreground mb-5 tracking-tight text-lg">Documents</h4>
              <ul className="space-y-3 text-sm text-muted-foreground font-medium">
                <li><a href="/documents/Statuts_2025_TW3.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Statuts TW3</a></li>
                <li><a href="/documents/Reglement-interieur-TW3.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Règlement Intérieur</a></li>
                <li><a href="/documents/Charte_TW3.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Charte Éthique</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-sans font-bold text-foreground mb-5 tracking-tight text-lg">Institut TW3</h4>
              <ul className="space-y-3 text-sm text-muted-foreground font-medium">
                <li><Link href="/evenements" className="hover:text-primary transition-colors">Événements</Link></li>
                <li><Link href="/faq" className="hover:text-primary transition-colors">FAQ</Link></li>
                <li><Link href="/rejoindre" className="hover:text-primary transition-colors">Rejoindre TW3</Link></li>
              </ul>
            </div>
            
            <div className="col-span-2 md:col-span-1 mt-4 md:mt-0">
              <h4 className="font-sans font-bold text-foreground mb-5 tracking-tight text-lg">Contact</h4>
              <ul className="space-y-3 text-sm text-muted-foreground font-medium">
                <li><Link href="/contact" className="hover:text-primary transition-colors">Nous contacter</Link></li>
                <li>
                  <a href="https://www.helloasso.com/associations/ta3alamawa3alama/formulaires/1/" target="_blank" rel="noopener noreferrer" className="text-primary hover:opacity-80 transition-opacity inline-flex items-center gap-1">
                    Faire un don 
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                  </a>
                  <p className="text-[11px] text-muted-foreground mt-0.5 italic leading-tight">
                    Déductible des impôts à 66%
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground font-medium text-center md:text-left">© Institut TW3 {new Date().getFullYear()}. Tous droits réservés.</p>
          <div className="flex flex-wrap gap-4 md:gap-6 justify-center md:justify-end">
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium">Mentions légales</Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium">Confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
