import type { Metadata } from 'next'
import { Instrument_Serif, Inter_Tight } from 'next/font/google'
import './globals.css'

const instrumentSerif = Instrument_Serif({
  weight: ['400'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-instrument-serif',
})

const interTight = Inter_Tight({
  subsets: ['latin'],
  variable: '--font-inter-tight',
})

export const metadata: Metadata = {
  title: {
    template: '%s / TW3',
    default: 'Accueil / TW3',
  },
  description: 'Institut TW3 - Apprendre, enseigner, exceller. L\'Institut TW3 accompagne des élèves motivés vers les filières les plus prestigieuses.',
  icons: [
    {
      rel: 'icon',
      url: '/logos/Logos 2025.jpg',
    },
    {
      rel: 'shortcut icon',
      url: '/logos/Logos 2025.jpg',
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${instrumentSerif.variable} ${interTight.variable}`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
