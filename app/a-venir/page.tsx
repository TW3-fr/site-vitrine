import React, { Suspense } from 'react'
import { PublicNavbar } from '@/components/PublicNavbar'
import { Footer } from '@/components/Footer'
import { AVenirClient } from './AVenirClient'
import { Clock } from 'lucide-react'

export default function AVenirPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col font-sans">
      <PublicNavbar />
      
      <main className="flex-grow flex items-center justify-center pt-24 pb-16 px-4">
        <Suspense fallback={
          <div className="max-w-md w-full text-center space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="flex justify-center">
              <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Clock className="w-12 h-12 text-primary animate-pulse" />
              </div>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-foreground">À venir</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">Chargement...</p>
          </div>
        }>
          <AVenirClient />
        </Suspense>
      </main>

      <Footer />
    </div>
  )
}
