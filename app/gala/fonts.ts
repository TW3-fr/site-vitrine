import { Pinyon_Script } from 'next/font/google'

/**
 * Police calligraphique du gala.
 * Provisoire : Pinyon Script (gratuite) en attendant le fichier Sloop Script Pro Italic.
 * Pour passer à Sloop : déposer le fichier dans app/gala/ et remplacer par
 *   import localFont from 'next/font/local'
 *   export const galaScript = localFont({ src: './SloopScriptPro-Italic.woff2', variable: '--font-gala-script' })
 */
export const galaScript = Pinyon_Script({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-gala-script',
  display: 'swap',
})
