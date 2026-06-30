import React from 'react'
import Link from 'next/link'
import { PublicNavbar } from '@/components/PublicNavbar'
import { Footer } from '@/components/Footer'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Clock } from 'lucide-react'

export default function AVenirPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col font-sans">
      <PublicNavbar />
      
      <main className="flex-grow flex items-center justify-center pt-24 pb-16 px-4">
        <div className="max-w-md w-full text-center space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <div className="flex justify-center">
            <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Clock className="w-12 h-12 text-primary animate-pulse" />
            </div>
          </div>
          
          <h1 className="text-4xl font-bold tracking-tight text-foreground">
            À venir
          </h1>
          
          <p className="text-xl text-muted-foreground leading-relaxed">
            Entrainez vous sur les ressources disponibles sur le site !
          </p>

          <div className="pt-8">
            <Button asChild size="lg" className="rounded-xl">
              <Link href="/">
                <ArrowLeft className="mr-2 w-5 h-5" />
                Retour à l'accueil
              </Link>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
