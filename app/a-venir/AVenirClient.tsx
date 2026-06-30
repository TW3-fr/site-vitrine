"use client"

import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Clock } from 'lucide-react'
import { FILIERE_LABELS } from '@/lib/constants'
import { useSearchParams } from 'next/navigation'

export function AVenirClient() {
  const searchParams = useSearchParams();
  const filiereSlug = searchParams?.get('filiere');
  
  let label = null;
  if (filiereSlug) {
    label = FILIERE_LABELS[filiereSlug] || FILIERE_LABELS[filiereSlug.toUpperCase().replace(/-/g, '_')] || filiereSlug;
  }

  const backLink = filiereSlug ? `/programme/${filiereSlug}` : '/';
  const buttonText = label ? `Filière ${label}` : "Retour à l'accueil";

  return (
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
          <Link href={backLink}>
            <ArrowLeft className="mr-2 w-5 h-5" />
            {buttonText}
          </Link>
        </Button>
      </div>
    </div>
  )
}
