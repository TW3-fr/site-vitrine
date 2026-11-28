'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { AnimatePresence, motion, useReducedMotion, type Variants } from 'motion/react'
import { ArrowRight, Presentation } from 'lucide-react'
import { galaScript } from './fonts'
import { WaysToGive } from './WaysToGive'

const GALA_START = new Date('2026-11-28T18:00:00+01:00').getTime()
const GALA_END = new Date('2026-11-28T23:00:00+01:00').getTime()
// aperçu des états de la page : ?apercu=direct ou ?apercu=apres
const PREVIEW: Record<string, number> = { direct: GALA_START + 3_600_000, apres: GALA_END + 3_600_000 }
const DONATION_URL = 'https://www.helloasso.com/associations/ta3alamawa3alama/collectes/maison-etudiante'
// présentation détaillée pour le public (les slides simplifiées sont projetées en salle)
const PROJECT_URL = 'https://tw3.fr/escale-complet/'

// Anciennes (01-14) et nouvelles (15-29) photos alternées pour varier les ambiances.
const PHOTO_ORDER = [1, 15, 5, 16, 2, 17, 6, 18, 4, 19, 12, 20, 3, 21, 9, 22, 13, 23, 10, 24, 7, 25, 11, 26, 8, 27, 14, 28, 29]
const PHOTOS = PHOTO_ORDER.map((n) => `/gala/bg-${String(n).padStart(2, '0')}.jpg`)
const SLIDE_MS = 7000

const EASE = [0.22, 1, 0.36, 1] as const

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14, delayChildren: 0.25 } },
}
const item: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE } },
}

function remaining(now: number) {
  const diff = Math.max(0, GALA_START - now)
  return {
    jours: Math.floor(diff / 86_400_000),
    heures: Math.floor((diff / 3_600_000) % 24),
    minutes: Math.floor((diff / 60_000) % 60),
    secondes: Math.floor((diff / 1000) % 60),
  }
}

function Digit({ value, ready }: { value: number; ready: boolean }) {
  const text = ready ? String(value).padStart(2, '0') : '--'
  return (
    <span className="grid font-serif text-3xl tabular-nums leading-tight sm:text-5xl">
      <AnimatePresence initial={false}>
        <motion.span
          key={text}
          className="[grid-area:1/1]"
          initial={{ opacity: 0, y: -6, filter: 'blur(2px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          exit={{ opacity: 0, y: 6, filter: 'blur(2px)' }}
          transition={{ duration: 0.45, ease: EASE }}
        >
          {text}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}

export function GalaClient() {
  const [now, setNow] = useState<number | null>(null)
  const [slide, setSlide] = useState(0)
  const reduce = useReducedMotion()

  useEffect(() => {
    const p = new URLSearchParams(window.location.search).get('apercu')
    const offset = p && PREVIEW[p] ? PREVIEW[p] - Date.now() : 0
    setNow(Date.now() + offset)
    const tick = setInterval(() => setNow(Date.now() + offset), 1000)
    const rotate = setInterval(() => setSlide((s) => (s + 1) % PHOTOS.length), SLIDE_MS)
    return () => {
      clearInterval(tick)
      clearInterval(rotate)
    }
  }, [])

  const t = remaining(now ?? GALA_START)
  const live = now !== null && now >= GALA_START && now < GALA_END
  const over = now !== null && now >= GALA_END

  return (
    <main className={`gala ${galaScript.variable} relative min-h-[100svh] overflow-hidden text-[#fffdd1]`}>
      {/* Fond : fondu enchaîné lent des photos */}
      <div className="absolute inset-0" aria-hidden>
        {PHOTOS.map((src, i) => {
          const active = i === slide
          const near =
            active || i === (slide + 1) % PHOTOS.length || i === (slide - 1 + PHOTOS.length) % PHOTOS.length
          return (
            <div
              key={src}
              className={`gala-photo ${active ? 'is-active' : ''}`}
              style={near ? { backgroundImage: `url("${src}")` } : undefined}
            />
          )
        })}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(122,52,119,0.62),rgba(57,20,87,0.88)_55%,rgba(20,6,32,0.96))]" />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#140620]/80 to-transparent" />
      </div>

      <motion.div
        variants={container}
        initial={reduce ? 'show' : 'hidden'}
        animate="show"
        className="relative z-10 mx-auto flex min-h-[100svh] max-w-5xl flex-col px-6 py-8 sm:px-10"
      >
        <motion.header variants={item} className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 opacity-90 transition-opacity duration-300 hover:opacity-100">
            <img src="/logos/logo-2027.png" alt="Institut TW3" className="h-14 w-auto drop-shadow-[0_2px_12px_rgba(20,6,32,0.5)]" />
          </Link>
          <span className="rounded-full border border-[#fffdd1]/30 px-4 py-1 font-sans text-xs uppercase tracking-[0.25em] text-[#fffdd1]/80">
            Gala 2026
          </span>
        </motion.header>

        <section className="flex flex-col items-center pt-8 text-center sm:pt-10">
          <motion.p variants={item} className="mb-1 font-sans text-xs uppercase tracking-[0.4em] text-[#e9c6e6] sm:text-sm">
            Institut TW3 présente
          </motion.p>

          <h1 className="leading-none text-[#fffdd1]">
            <span className="sr-only">Gala TW3</span>
            <span aria-hidden className="flex flex-wrap items-baseline justify-center gap-x-4 px-4 sm:gap-x-6">
              <motion.span
                className="gala-script text-[4.5rem] sm:text-[7rem] md:text-[8rem]"
                initial={reduce ? false : { opacity: 0, clipPath: 'inset(0 100% 0 0)', filter: 'blur(6px)' }}
                animate={{ opacity: 1, clipPath: 'inset(0 0% 0 0)', filter: 'blur(0px)' }}
                transition={{ duration: 1.8, delay: 0.5, ease: EASE }}
              >
                Gala
              </motion.span>
              <motion.span
                className="font-serif text-5xl italic tracking-wide text-[#fffdd1] sm:text-7xl md:text-[5.5rem]"
                initial={reduce ? false : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.1, delay: 1.7, ease: EASE }}
              >
                TW3
              </motion.span>
            </span>
          </h1>

          <motion.p variants={item} className="mt-3 max-w-2xl font-serif text-xl italic text-[#fffdd1]/90 sm:text-2xl">
            Découvrez l&apos;Escale, la première maison étudiante qui nous correspond.
          </motion.p>

          <motion.p variants={item} className="mt-3 font-sans text-sm text-[#fffdd1]/80 sm:text-base">
            <span className="font-semibold">Samedi 28 novembre 2026 · 18h - 23h</span>
            <span className="mx-2 opacity-50">·</span>
            Salon Blanqui, Paris 13e
          </motion.p>

          {/* Statut : compte à rebours avant le gala, puis simple bandeau (la place libérée profite aux dons) */}
          <motion.div variants={item} className="mt-6">
            {live || over ? (
              <span className="inline-flex items-center gap-3 rounded-full border border-[#fffdd1]/25 bg-[#391457]/60 px-5 py-2 font-sans text-sm font-semibold backdrop-blur-md sm:text-base">
                <span className="relative flex h-2.5 w-2.5" aria-hidden>
                  {live && <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#ff8fa3] opacity-75" />}
                  <span className={`relative inline-flex h-2.5 w-2.5 rounded-full ${live ? 'bg-[#ff8fa3]' : 'bg-[#e9c6e6]'}`} />
                </span>
                {live ? 'En direct : le gala a commencé' : 'Merci d’avoir été là. La collecte continue.'}
              </span>
            ) : (
              <div className="grid grid-cols-4 gap-2 sm:gap-3" role="timer" aria-live="off">
                {(Object.entries(t) as [string, number][]).map(([label, value]) => (
                  <div
                    key={label}
                    className="flex w-[66px] flex-col items-center rounded-2xl border border-[#fffdd1]/15 bg-[#391457]/45 px-2 py-2.5 backdrop-blur-md sm:w-24 sm:py-3"
                  >
                    <Digit value={value} ready={now !== null} />
                    <span className="mt-1 font-sans text-[10px] uppercase tracking-[0.2em] text-[#e9c6e6] sm:text-xs">{label}</span>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </section>

        {/* Les deux actions principales : donner, puis découvrir le projet */}
        <motion.div variants={item} className="mt-8 grid gap-4 md:grid-cols-5">
          <div className="flex flex-col items-center justify-center rounded-3xl border border-[#fffdd1]/30 bg-gradient-to-br from-[#fffdd1]/[0.14] to-[#391457]/40 p-6 text-center shadow-[0_20px_60px_-25px_rgba(255,253,209,0.35)] backdrop-blur-md sm:p-8 md:col-span-3">
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.3em] text-[#e9c6e6]">Faire un don</p>
            <h2 className="mt-2 font-serif text-3xl italic leading-tight text-[#fffdd1] sm:text-4xl">Chaque don pose une pierre de l&apos;Escale</h2>
            <a
              href={DONATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-6 inline-flex w-full max-w-sm items-center justify-center gap-3 rounded-full bg-[#fffdd1] px-7 py-4 font-sans text-base font-semibold text-[#391457] shadow-[0_0_30px_rgba(255,253,209,0.25)] transition-[box-shadow,transform] duration-500 ease-out hover:-translate-y-0.5 hover:shadow-[0_8px_40px_rgba(255,253,209,0.4)] sm:text-lg"
            >
              Donner en ligne
              <ArrowRight className="h-5 w-5 transition-transform duration-500 ease-out group-hover:translate-x-1" aria-hidden />
            </a>
            <p className="mt-3 font-sans text-sm text-[#fffdd1]/75">Un don de 100&nbsp;€ vous revient à 34&nbsp;€ après réduction d&apos;impôt.</p>
            <a
              href="#donner"
              className="mt-4 font-sans text-sm font-medium text-[#e9c6e6] underline decoration-[#e9c6e6]/40 underline-offset-4 transition-colors duration-300 hover:text-[#fffdd1]"
            >
              Aussi par carte sur place, virement ou espèces
            </a>
          </div>

          <a
            href={PROJECT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col overflow-hidden rounded-3xl border border-[#e5c77c]/60 bg-[#391457]/60 text-left shadow-[0_20px_60px_-25px_rgba(229,199,124,0.45)] backdrop-blur-md transition-[transform,border-color] duration-500 ease-out hover:-translate-y-0.5 hover:border-[#e5c77c] md:col-span-2"
          >
            <div className="relative aspect-[5/2] overflow-hidden md:aspect-[16/9]">
              <img src="/escale/assets/s1-bg.jpg" alt="" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
              <div className="absolute inset-0 bg-[#2a0f40]/60" />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="font-serif text-5xl italic text-[#fffdd1]">L&apos;Escale</span>
                <span className="mt-1 font-sans text-[11px] uppercase tracking-[0.25em] text-[#e9c6e6]">Maison étudiante · Paris</span>
              </div>
            </div>
            <div className="flex flex-1 flex-col p-5 sm:p-6">
              <p className="flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-[0.25em] text-[#e5c77c]">
                <Presentation className="h-4 w-4" aria-hidden /> La présentation
              </p>
              <h2 className="mt-2 font-sans text-xl font-semibold text-[#fffdd1]">Le projet en détail</h2>
              <p className="mt-1 font-sans text-sm text-[#fffdd1]/70">Le besoin, le local, le budget et la feuille de route.</p>
              <span className="mt-4 inline-flex items-center gap-2 self-start rounded-full bg-[#e5c77c] px-5 py-2.5 font-sans text-sm font-semibold text-[#2a0f40]">
                Feuilleter la présentation
                <ArrowRight className="h-4 w-4 transition-transform duration-500 ease-out group-hover:translate-x-1" aria-hidden />
              </span>
            </div>
          </a>
        </motion.div>

        <motion.div variants={item} className="flex-1">
          <WaysToGive />
        </motion.div>

        <motion.footer variants={item} className="mt-12 text-center font-sans text-xs text-[#fffdd1]/55">
          Institut TW3 · association loi 1901 · <Link href="/" className="underline underline-offset-2">tw3.fr</Link>
        </motion.footer>
      </motion.div>

      <style jsx global>{`
        .gala {
          background: #140620;
        }
        .gala-script {
          font-family: var(--font-gala-script), 'Instrument Serif', serif;
          font-weight: 400;
          padding: 0 0.12em 0.12em 0;
          text-shadow: 0 2px 30px rgba(20, 6, 32, 0.45);
        }
        .gala-photo {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center 35%;
          opacity: 0;
          transform: scale(1.02);
          transition: opacity 2.6s cubic-bezier(0.4, 0, 0.2, 1), transform 9s linear;
          filter: saturate(0.85);
          will-change: opacity, transform;
        }
        .gala-photo.is-active {
          opacity: 1;
          transform: scale(1.08);
        }
        @media (prefers-reduced-motion: reduce) {
          .gala-photo,
          .gala-photo.is-active {
            transition: opacity 0.6s;
            transform: none;
          }
        }
      `}</style>
    </main>
  )
}
