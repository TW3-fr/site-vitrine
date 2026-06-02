'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('Erreur application:', error)
  }, [error])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg border border-gray-200 text-center">
        <h1 className="text-2xl font-bold text-tw3-primary-dark mb-2">Une erreur est survenue</h1>
        <p className="text-gray-600 mb-6">
          L&apos;application a rencontré un problème. Vérifiez que la base de données est initialisée.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={reset}
            className="bg-tw3-primary text-white px-6 py-2 rounded-lg hover:opacity-90"
          >
            Réessayer
          </button>
          <Link
            href="/auth/signin"
            className="border border-tw3-primary text-tw3-primary px-6 py-2 rounded-lg hover:bg-tw3-primary hover:text-white transition"
          >
            Page de connexion
          </Link>
          <Link
            href="/"
            className="text-gray-600 hover:underline"
          >
            Accueil
          </Link>
        </div>
        <p className="mt-6 text-sm text-gray-500">
          Si le problème persiste, exécutez : <code className="bg-gray-100 px-2 py-1 rounded">npm run db:reset</code>
        </p>
      </div>
    </div>
  )
}
