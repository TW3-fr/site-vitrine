import localFont from 'next/font/local'

/**
 * Police calligraphique du gala : Sloop Script (utilisée pour « Gala »).
 * Attention : fichier récupéré sur fontsgeek, sans licence web officielle.
 * Pour la version sous licence (Font Bureau / Type Network), remplacer le fichier ci-dessous.
 */
export const galaScript = localFont({
  src: './SloopScript-Regular.ttf',
  variable: '--font-gala-script',
  display: 'swap',
})
