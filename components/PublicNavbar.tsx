'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronDown } from 'lucide-react'

export function PublicNavbar({ currentPage = 'home' }: { currentPage?: string }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const navLinks = [
    { 
      label: 'Programmes', 
      id: 'programme',
      href: '/programme',
      subLinks: [
        { href: '/programme/scientifique', label: 'Scientifique' },
        { href: '/programme/commerce', label: 'Économie & Commerce' },
        { href: '/programme/droit-sciences-po', label: 'Droit & Sciences Po' }
      ]
    },
    { href: '/rejoindre', label: 'Candidater', id: 'rejoindre' },
    { href: '/evenements', label: 'Événements', id: 'evenements' },
    { href: '/faq', label: 'FAQ', id: 'faq' },
    { href: '/contact', label: 'Contact', id: 'contact' },
  ]

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${isScrolled ? 'bg-background/90 backdrop-blur-md border-border shadow-xs py-3' : 'bg-transparent border-transparent py-4 lg:py-6'}`}>
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2.5 font-semibold text-xl text-foreground hover:opacity-80 transition-opacity" onClick={() => setMobileOpen(false)}>
            <Image src="/logos/logo-tw3.svg" alt="Institut TW3" width={36} height={36} className="lg:w-10 lg:h-10" />
            <span className="tracking-tight text-xl lg:text-3xl">
              <span className="font-sans font-extrabold">Institut </span>
              <span className="font-serif italic text-primary">TW3</span>
            </span>
          </Link>
          
          {/* Desktop nav */}
          <div className="hidden lg:flex gap-8 items-center bg-background/50 backdrop-blur-md px-6 py-2 rounded-full border border-border/50 shadow-xs">
            {navLinks.map((link) => (
              link.subLinks ? (
                <div key={link.id} className="relative group/navitem py-2">
                  <Link href={link.href} className={`text-sm font-medium transition-colors cursor-pointer flex items-center gap-1 ${
                    currentPage === link.id ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                  }`}>
                    {link.label}
                    <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover/navitem:rotate-180" />
                  </Link>
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover/navitem:opacity-100 group-hover/navitem:visible transition-all duration-200">
                    <div className="bg-background border border-border rounded-xl shadow-lg p-2 min-w-[220px] flex flex-col gap-1">
                      <Link href="/programme" className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-lg transition-colors">
                        Tous les programmes
                      </Link>
                      <div className="h-px bg-border my-1 mx-2" />
                      {link.subLinks.map(sub => (
                        <Link key={sub.href} href={sub.href} className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-colors">
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.id}
                  href={link.href!}
                  className={`text-sm font-medium transition-colors ${
                    currentPage === link.id ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {link.label}
                </Link>
              )
            ))}
          </div>

          
          {/* Mobile hamburger button */}
          <button
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-xl text-foreground hover:bg-accent/50 transition-colors relative z-[60]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          >
            <div className="relative w-5 h-5">
              <span className={`absolute left-0 block w-5 h-0.5 bg-current transition-all duration-300 ease-in-out ${mobileOpen ? 'top-[9px] rotate-45' : 'top-[3px] rotate-0'}`} />
              <span className={`absolute left-0 top-[9px] block w-5 h-0.5 bg-current transition-all duration-300 ease-in-out ${mobileOpen ? 'opacity-0 translate-x-2' : 'opacity-100'}`} />
              <span className={`absolute left-0 block w-5 h-0.5 bg-current transition-all duration-300 ease-in-out ${mobileOpen ? 'top-[9px] -rotate-45' : 'top-[15px] rotate-0'}`} />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setMobileOpen(false)}
      />

      {/* Mobile menu drawer */}
      <div
        className={`fixed top-0 right-0 z-45 w-[85vw] max-w-[360px] h-full bg-background border-l border-border shadow-2xl transform transition-transform duration-400 ease-out lg:hidden flex flex-col ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`}
        style={{ zIndex: 55 }}
      >
        {/* Spacer for nav height */}
        <div className="h-16" />

        {/* Navigation links */}
        <div className="flex-1 overflow-y-auto px-6 py-6">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link, i) => (
              <div key={link.id} className="flex flex-col" style={{ transitionDelay: mobileOpen ? `${i * 50}ms` : '0ms' }}>
                {link.subLinks ? (
                  <>
                    <Link
                      href={link.href!}
                      onClick={() => setMobileOpen(false)}
                      className={`flex items-center justify-between px-4 py-3.5 rounded-xl text-base font-medium transition-all duration-200 ${
                        currentPage === link.id
                          ? 'bg-primary/10 text-primary'
                          : 'text-foreground hover:bg-accent/50'
                      }`}
                    >
                      {link.label}
                    </Link>
                    <div className="pl-6 pr-4 py-2 flex flex-col gap-1 border-l-2 border-border ml-6 my-1">
                      {link.subLinks.map(sub => (
                        <Link 
                          key={sub.href} 
                          href={sub.href}
                          onClick={() => setMobileOpen(false)}
                          className="px-4 py-2.5 rounded-lg text-sm font-medium text-muted-foreground hover:text-primary hover:bg-primary/5 transition-colors"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    href={link.href!}
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3.5 rounded-xl text-base font-medium transition-all duration-200 ${
                      currentPage === link.id
                        ? 'bg-primary/10 text-primary'
                        : 'text-foreground hover:bg-accent/50'
                    }`}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Divider */}
          <div className="my-6 border-t border-border" />


        </div>

        {/* Bottom branding */}
        <div className="px-6 py-5 border-t border-border">
          <p className="text-xs text-muted-foreground text-center">
            © Institut TW3 {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </>
  )
}
