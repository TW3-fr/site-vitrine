'use client'

import { useState } from 'react'
import { Banknote, Check, Copy, CreditCard, HandHeart, Landmark } from 'lucide-react'

// Coordonnées bancaires de l'association (virement SEPA)
const RIB = [
  { key: 'nom', label: 'Bénéficiaire', value: 'TA3ALAMAWA3ALAMA' },
  { key: 'iban', label: 'IBAN', value: 'IE52SUMU99036511731064', display: 'IE52 SUMU 9903 6511 7310 64' },
  { key: 'bic', label: 'BIC', value: 'SUMUIE22XXX' },
  { key: 'motif', label: 'Motif', value: 'Don Escale Gala TW3' },
  { key: 'adresse', label: 'Adresse du bénéficiaire', value: '1 rue des Onchères, 69120 Vaulx-en-Velin, France' },
] as const

const ALL = RIB.map((r) => `${r.label} : ${r.value}`).join('\n')

async function copy(text: string) {
  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch {
    // repli pour les navigateurs sans API presse-papiers
    const ta = document.createElement('textarea')
    ta.value = text
    ta.setAttribute('readonly', '')
    ta.style.position = 'fixed'
    ta.style.opacity = '0'
    document.body.appendChild(ta)
    ta.select()
    const ok = document.execCommand('copy')
    ta.remove()
    return ok
  }
}

function CopyButton({ text, label, children }: { text: string; label: string; children?: React.ReactNode }) {
  const [done, setDone] = useState(false)
  return (
    <button
      type="button"
      onClick={async () => {
        if (await copy(text)) {
          setDone(true)
          setTimeout(() => setDone(false), 1800)
        }
      }}
      aria-label={done ? `${label} copié` : `Copier ${label}`}
      className={`inline-flex shrink-0 items-center justify-center gap-2 rounded-full border px-3.5 py-2 font-sans text-sm font-semibold transition-colors duration-300 ${
        done
          ? 'border-[#9fe0b4]/60 bg-[#9fe0b4]/15 text-[#c9f2d5]'
          : 'border-[#fffdd1]/25 bg-[#fffdd1]/5 text-[#fffdd1] hover:bg-[#fffdd1]/15'
      }`}
    >
      {done ? <Check className="h-4 w-4" aria-hidden /> : <Copy className="h-4 w-4" aria-hidden />}
      <span aria-live="polite">{done ? 'Copié' : children ?? 'Copier'}</span>
    </button>
  )
}

const card = 'rounded-3xl border border-[#fffdd1]/15 bg-[#391457]/50 p-5 text-left backdrop-blur-md sm:p-6'

export function WaysToGive({ donationUrl }: { donationUrl: string }) {
  return (
    <section aria-labelledby="donner" className="mx-auto mt-16 w-full max-w-4xl pb-6">
      <h2 id="donner" className="text-center font-serif text-3xl italic text-[#fffdd1] sm:text-4xl">
        Comment donner&nbsp;?
      </h2>
      <p className="mt-2 text-center font-sans text-sm text-[#fffdd1]/70">
        Quatre façons de soutenir l&apos;Escale, ce soir ou plus tard.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <div className={card}>
          <HandHeart className="h-7 w-7 text-[#e9c6e6]" aria-hidden />
          <h3 className="mt-3 font-sans text-lg font-semibold text-[#fffdd1]">Cagnotte en ligne</h3>
          <p className="mt-1 font-sans text-sm text-[#fffdd1]/75">
            Par carte, en quelques secondes, avec votre reçu fiscal envoyé automatiquement.
          </p>
          <a
            href={donationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#fffdd1] px-5 py-2.5 font-sans text-sm font-semibold text-[#391457] transition-shadow duration-300 hover:shadow-[0_6px_28px_rgba(255,253,209,0.35)]"
          >
            Ouvrir la cagnotte <span aria-hidden>→</span>
          </a>
        </div>

        <div className={card}>
          <CreditCard className="h-7 w-7 text-[#e9c6e6]" aria-hidden />
          <h3 className="mt-3 font-sans text-lg font-semibold text-[#fffdd1]">Carte bancaire sur place</h3>
          <p className="mt-1 font-sans text-sm text-[#fffdd1]/75">
            Pendant le gala, un membre de l&apos;équipe passe avec un terminal de paiement : sans contact ou avec code.
          </p>
        </div>

        <div className={card}>
          <Banknote className="h-7 w-7 text-[#e9c6e6]" aria-hidden />
          <h3 className="mt-3 font-sans text-lg font-semibold text-[#fffdd1]">Espèces</h3>
          <p className="mt-1 font-sans text-sm text-[#fffdd1]/75">
            À remettre à l&apos;équipe pendant la soirée. Laissez vos coordonnées si vous souhaitez un reçu fiscal.
          </p>
        </div>

        <div className={card}>
          <Landmark className="h-7 w-7 text-[#e9c6e6]" aria-hidden />
          <h3 className="mt-3 font-sans text-lg font-semibold text-[#fffdd1]">Virement bancaire</h3>
          <p className="mt-1 font-sans text-sm text-[#fffdd1]/75">
            Copiez chaque information puis collez-la dans votre application bancaire.
          </p>
          <a
            href="#rib"
            className="mt-4 inline-flex items-center gap-2 rounded-full border border-[#fffdd1]/30 px-5 py-2.5 font-sans text-sm font-semibold text-[#fffdd1] transition-colors duration-300 hover:bg-[#fffdd1]/10"
          >
            Voir les coordonnées <span aria-hidden>↓</span>
          </a>
        </div>
      </div>

      {/* RIB : une ligne par champ demandé par les applications bancaires */}
      <div id="rib" className={`${card} mt-4 scroll-mt-6`}>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h3 className="font-sans text-sm font-semibold uppercase tracking-[0.2em] text-[#e9c6e6]">Coordonnées pour le virement</h3>
          <CopyButton text={ALL} label="toutes les coordonnées">Tout copier</CopyButton>
        </div>
        <dl className="mt-4 divide-y divide-[#fffdd1]/10">
          {RIB.map((r) => (
            <div key={r.key} className="flex items-center justify-between gap-3 py-3">
              <div className="min-w-0">
                <dt className="font-sans text-xs uppercase tracking-[0.16em] text-[#fffdd1]/55">{r.label}</dt>
                <dd className="mt-0.5 break-words font-sans text-base font-semibold tabular-nums text-[#fffdd1] sm:text-lg">
                  {'display' in r ? r.display : r.value}
                </dd>
              </div>
              <CopyButton text={r.value} label={r.label} />
            </div>
          ))}
        </dl>
        <p className="mt-3 font-sans text-xs text-[#fffdd1]/60">
          Pour recevoir votre reçu fiscal, ajoutez vos nom et prénom à la suite du motif.
        </p>
      </div>
    </section>
  )
}
