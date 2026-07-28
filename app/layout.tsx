import type { Metadata, Viewport } from 'next'
import { Instrument_Serif, Inter_Tight } from 'next/font/google'
import Script from 'next/script'
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

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export const metadata: Metadata = {
  title: {
    template: '%s / TW3',
    default: 'Accueil / TW3',
  },
  description: 'Institut TW3 - Apprendre, enseigner, exceller. L\'Institut TW3 accompagne des élèves motivés vers les filières les plus prestigieuses.',
  icons: [
    {
      rel: 'icon',
      url: '/favicon.ico',
      sizes: '64x64',
    },
    {
      rel: 'icon',
      url: '/favicon-32.png',
      sizes: '32x32',
      type: 'image/png',
    },
    {
      rel: 'icon',
      url: '/favicon-16.png',
      sizes: '16x16',
      type: 'image/png',
    },
    {
      rel: 'shortcut icon',
      url: '/favicon.ico',
    },
    {
      rel: 'apple-touch-icon',
      url: '/favicon.png',
    },
  ],
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${instrumentSerif.variable} ${interTight.variable} overflow-x-hidden w-full`}>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-3E72FV0C3R"
          strategy="beforeInteractive"
        />
        <Script id="google-analytics" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-3E72FV0C3R');
          `}
        </Script>
      </head>
      <body className="font-sans antialiased relative overflow-x-hidden w-full">
        {children}
      </body>
    </html>
  )
}
