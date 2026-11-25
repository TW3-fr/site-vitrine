'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { AnimatePresence, motion, useReducedMotion, type Variants } from 'motion/react'
import { galaScript } from './fonts'

const GALA_START = new Date('2026-11-28T18:00:00+01:00').getTime()
const GALA_END = new Date('2026-11-28T23:00:00+01:00').getTime()
const DONATION_URL = 'https://www.helloasso.com/associations/ta3alamawa3alama/collectes/maison-etudiante'
const PROJECT_URL = 'https://tw3.fr/escale/'

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
    <span className="grid font-serif text-4xl tabular-nums leading-tight sm:text-6xl">
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
    setNow(Date.now())
    const tick = setInterval(() => setNow(Date.now()), 1000)
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

        <section className="flex flex-1 flex-col items-center justify-center py-12 text-center">
          <motion.p variants={item} className="mb-2 font-sans text-xs uppercase tracking-[0.4em] text-[#e9c6e6] sm:text-sm">
            Institut TW3 présente
          </motion.p>

          <h1 className="leading-none text-[#fffdd1]">
            <span className="sr-only">Gala TW3</span>
            <span aria-hidden className="flex flex-wrap items-baseline justify-center gap-x-4 px-4 sm:gap-x-6">
              <motion.span
                className="gala-script text-[5.5rem] sm:text-[8.5rem] md:text-[10.5rem]"
                initial={reduce ? false : { opacity: 0, clipPath: 'inset(0 100% 0 0)', filter: 'blur(6px)' }}
                animate={{ opacity: 1, clipPath: 'inset(0 0% 0 0)', filter: 'blur(0px)' }}
                transition={{ duration: 1.8, delay: 0.5, ease: EASE }}
              >
                Gala
              </motion.span>
              <motion.span
                className="font-serif text-6xl italic tracking-wide text-[#fffdd1] sm:text-8xl md:text-[6.5rem]"
                initial={reduce ? false : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.1, delay: 1.7, ease: EASE }}
              >
                TW3
              </motion.span>
            </span>
          </h1>

          <motion.div variants={item} aria-hidden className="mt-2 flex items-center gap-4 text-[#e9c6e6]/70">
            <span className="h-px w-12 bg-current sm:w-20" />
            <span className="font-serif text-lg italic">2026</span>
            <span className="h-px w-12 bg-current sm:w-20" />
          </motion.div>

          <motion.p variants={item} className="mt-6 max-w-2xl font-serif text-2xl italic text-[#fffdd1]/90 sm:text-3xl">
            Découvrez l&apos;Escale, la première maison étudiante qui nous correspond.
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-col items-center gap-1 font-sans text-base text-[#fffdd1]/85 sm:text-lg">
            <span className="font-semibold">Samedi 28 novembre 2026 · 18h - 23h</span>
            <span>Salon Blanqui · 94 boulevard Auguste Blanqui, Paris 13e</span>
          </motion.div>

          {/* Compte à rebours */}
          <motion.div variants={item} className="mt-10 min-h-[132px]">
            {live ? (
              <p className="font-serif text-4xl sm:text-5xl">C&apos;est ce soir, le gala a commencé.</p>
            ) : over ? (
              <p className="font-serif text-4xl sm:text-5xl">Merci d&apos;avoir été là. La collecte continue.</p>
            ) : (
              <div className="grid grid-cols-4 gap-3 sm:gap-5" role="timer" aria-live="off">
                {(Object.entries(t) as [string, number][]).map(([label, value]) => (
                  <div
                    key={label}
                    className="flex w-[72px] flex-col items-center rounded-2xl border border-[#fffdd1]/15 bg-[#391457]/45 px-2 py-4 backdrop-blur-md sm:w-28 sm:py-5"
                  >
                    <Digit value={value} ready={now !== null} />
                    <span className="mt-2 font-sans text-[10px] uppercase tracking-[0.2em] text-[#e9c6e6] sm:text-xs">{label}</span>
                  </div>
                ))}
              </div>
            )}
          </motion.div>

          {/* Don */}
          <motion.div variants={item} className="flex flex-col items-center">
            <a
              href={DONATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-10 inline-flex max-w-full items-center justify-center gap-3 rounded-full bg-[#fffdd1] px-7 py-4 text-center font-sans text-base font-semibold text-[#391457] shadow-[0_0_30px_rgba(255,253,209,0.25)] transition-[box-shadow,transform] duration-500 ease-out hover:-translate-y-0.5 hover:shadow-[0_8px_40px_rgba(255,253,209,0.4)] sm:px-9 sm:text-lg"
            >
              Faire un don pour la maison étudiante
              <span aria-hidden className="transition-transform duration-500 ease-out group-hover:translate-x-1">
                →
              </span>
            </a>
            <p className="mt-4 font-sans text-sm text-[#fffdd1]/70">
              Votre don ouvre droit à une réduction d'impôt de 66 % : un don de 100 € vous revient à 34 €.
            </p>

            <a
              href={PROJECT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 font-sans text-sm text-[#e9c6e6] underline decoration-[#e9c6e6]/40 underline-offset-4 transition-colors duration-300 hover:text-[#fffdd1]"
            >
              Découvrir le projet Escale
            </a>
          </motion.div>
        </section>

        <motion.footer variants={item} className="text-center font-sans text-xs text-[#fffdd1]/55">
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
