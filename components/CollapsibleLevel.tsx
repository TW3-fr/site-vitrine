'use client'

import { useState } from 'react'
import { ChevronDown, ArrowUpRight } from 'lucide-react'

export function CollapsibleLevel({ niveau, items }: { niveau: string; items: { label: string; url: string }[] }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border border-border rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-4 bg-background hover:bg-accent/30 transition-colors text-left"
      >
        <span className="font-bold text-foreground font-sans flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-primary shrink-0"></span>
          {niveau}
          <span className="text-sm font-normal text-muted-foreground ml-1">({items.length} ressources)</span>
        </span>
        <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
      </button>
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${open ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="p-4 pt-0 space-y-2">
          {items.map((res, i) => (
            <a
              key={i}
              href={res.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between bg-card p-3 md:p-4 rounded-xl border border-border hover:border-primary/50 hover:shadow-xs transition group"
            >
              <span className="font-medium text-sm md:text-base text-foreground md:group-hover:text-primary transition">{res.label}</span>
              <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 text-muted-foreground md:group-hover:text-primary md:group-hover:rotate-45 transition-all shrink-0 ml-3" />
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
