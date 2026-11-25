'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

const GALA_START = new Date('2026-11-28T18:00:00+01:00').getTime()
const GALA_END = new Date('2026-11-28T23:00:00+01:00').getTime()
const DONATION_URL = 'https://www.helloasso.com/associations/ta3alamawa3alama/collectes/maison-etudiante'
const PROJECT_URL = 'https://tw3-fr.github.io/waqf-campus-tolbiac/'
const PHOTOS = Array.from({ length: 14 }, (_, i) => `/gala/bg-${String(i + 1).padStart(2, '0')}.jpg`)
const SLIDE_MS = 6000

function remaining(now: number) {
  const diff = Math.max(0, GALA_START - now)
  return {
    jours: Math.floor(diff / 86_400_000),
    heures: Math.floor((diff / 3_600_000) % 24),
    minutes: Math.floor((diff / 60_000) % 60),
    secondes: Math.floor((diff / 1000) % 60),
  }
}

export function GalaClient() {
  const [now, setNow] = useState<number | null>(null)
  const [slide, setSlide] = useState(0)

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
    <main className="gala relative min-h-[100svh] overflow-hidden text-[#fffdd1]">
      {/* Fond : fondu enchaîné des photos */}
      <div className="absolute inset-0" aria-hidden>
        {PHOTOS.map((src, i) => {
          const active = i === slide
          const near = i === slide || i === (slide + 1) % PHOTOS.length || i === (slide - 1 + PHOTOS.length) % PHOTOS.length
          return (
            <div
              key={src}
              className={`gala-photo ${active ? 'is-active' : ''}`}
              style={near ? { backgroundImage: `url("${src}")` } : undefined}
            />
          )
        })}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(122,52,119,0.55),rgba(57,20,87,0.88)_55%,rgba(20,6,32,0.97))]" />
        <div className="gala-sparkles absolute inset-0" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-5xl flex-col px-6 py-8 sm:px-10">
        <header className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 opacity-90 transition hover:opacity-100">
            <img src="/logos/logo-2026.png" alt="Institut TW3" className="h-11 w-11 rounded-full bg-[#fffdd1] p-1" />
          </Link>
          <span className="rounded-full border border-[#fffdd1]/30 px-4 py-1 text-xs uppercase tracking-[0.25em] text-[#fffdd1]/80">
            Gala 2026
          </span>
        </header>

        <section className="flex flex-1 flex-col items-center justify-center py-12 text-center">
          <p className="mb-5 text-sm uppercase tracking-[0.35em] text-[#e9c6e6]">Institut TW3 présente</p>
          <h1 className="font-serif text-6xl leading-none text-[#fffdd1] sm:text-8xl md:text-9xl">
            Le <em className="gala-shine not-italic">Gala</em>
          </h1>
          <p className="mt-6 max-w-2xl font-serif text-2xl italic text-[#fffdd1]/90 sm:text-3xl">
            Une soirée pour ouvrir Escale, la maison étudiante au rythme des prières.
          </p>

          <div className="mt-8 flex flex-col items-center gap-1 text-base text-[#fffdd1]/85 sm:text-lg">
            <span className="font-semibold">Samedi 28 novembre 2026 · 18h - 23h</span>
            <span>Salon Blanqui · 94 boulevard Auguste Blanqui, Paris 13e</span>
          </div>

          {/* Compte à rebours */}
          <div className="mt-10 min-h-[132px]">
            {live ? (
              <p className="font-serif text-4xl sm:text-5xl">C&apos;est ce soir, le gala a commencé.</p>
            ) : over ? (
              <p className="font-serif text-4xl sm:text-5xl">Merci d&apos;avoir été là. La collecte continue.</p>
            ) : (
              <div className="grid grid-cols-4 gap-3 sm:gap-5" role="timer" aria-live="off">
                {(Object.entries(t) as [string, number][]).map(([label, value]) => (
                  <div
                    key={label}
                    className="flex w-[72px] flex-col items-center rounded-2xl border border-[#fffdd1]/20 bg-[#391457]/55 px-2 py-4 backdrop-blur-md sm:w-28 sm:py-5"
                  >
                    <span className="font-serif text-4xl tabular-nums sm:text-6xl">
                      {now === null ? '--' : String(value).padStart(2, '0')}
                    </span>
                    <span className="mt-1 text-[10px] uppercase tracking-[0.2em] text-[#e9c6e6] sm:text-xs">{label}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Don */}
          <a
            href={DONATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="gala-cta mt-10 inline-flex max-w-full items-center justify-center gap-3 rounded-full bg-[#fffdd1] px-7 py-4 text-center text-base font-semibold sm:px-9 sm:text-lg text-[#391457] shadow-[0_0_40px_rgba(255,253,209,0.35)] transition hover:scale-[1.03] hover:shadow-[0_0_60px_rgba(255,253,209,0.55)]"
          >
            Faire un don pour la maison étudiante
            <span aria-hidden>→</span>
          </a>
          <p className="mt-4 text-sm text-[#fffdd1]/70">
            Votre don ouvre droit à une réduction d'impôt de 66 % : un don de 100 € vous revient à 34 €.
          </p>

          <a
            href={PROJECT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 text-sm text-[#e9c6e6] underline decoration-[#e9c6e6]/40 underline-offset-4 transition hover:text-[#fffdd1]"
          >
            Découvrir le projet Escale
          </a>
        </section>

        <footer className="text-center text-xs text-[#fffdd1]/55">
          Institut TW3 · association loi 1901 · <Link href="/" className="underline underline-offset-2">tw3.fr</Link>
        </footer>
      </div>

      <style jsx global>{`
        .gala {
          background: #140620;
        }
        .gala-photo {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          opacity: 0;
          transform: scale(1.04);
          transition: opacity 2.2s ease-in-out, transform 8s ease-out;
          filter: saturate(0.85);
        }
        .gala-photo.is-active {
          opacity: 1;
          transform: scale(1.12);
        }
        .gala-shine {
          background: linear-gradient(100deg, #fffdd1 20%, #f0c6ee 45%, #fffdd1 60%, #e9c6e6 80%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: gala-shine 6s linear infinite;
        }
        @keyframes gala-shine {
          to {
            background-position: 200% center;
          }
        }
        .gala-sparkles {
          background-image: radial-gradient(1px 1px at 20% 30%, rgba(255, 253, 209, 0.7), transparent),
            radial-gradient(1px 1px at 70% 20%, rgba(255, 253, 209, 0.5), transparent),
            radial-gradient(1.5px 1.5px at 40% 80%, rgba(233, 198, 230, 0.6), transparent),
            radial-gradient(1px 1px at 85% 65%, rgba(255, 253, 209, 0.6), transparent),
            radial-gradient(1.5px 1.5px at 10% 70%, rgba(233, 198, 230, 0.5), transparent);
          animation: gala-twinkle 5s ease-in-out infinite alternate;
        }
        @keyframes gala-twinkle {
          from {
            opacity: 0.35;
          }
          to {
            opacity: 0.9;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .gala-photo,
          .gala-shine,
          .gala-sparkles {
            animation: none;
            transition: opacity 0.5s;
            transform: none;
          }
        }
      `}</style>
    </main>
  )
}
