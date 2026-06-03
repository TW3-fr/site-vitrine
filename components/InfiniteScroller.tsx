'use client'

import { motion } from 'motion/react'

interface School {
  name: string
  url: string
  logo: string
  className?: string
}

export function InfiniteScroller({ schools }: { schools: School[] }) {
  if (!schools || schools.length === 0) return null;

  return (
    <div className="w-full relative flex flex-col gap-6 pt-4 pb-8 border-b border-border/50">
      <h3 className="text-center font-sans font-bold text-muted-foreground uppercase tracking-widest text-sm px-6">Nos élèves ont intégré</h3>
      <div className="relative w-full overflow-hidden flex pt-2 pb-2">
        <div className="absolute inset-y-0 left-0 w-12 md:w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-12 md:w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>
        <motion.div
          className="flex gap-4 md:gap-6 w-max px-4"
          animate={{ x: ["-50%", "0%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
        >
          {[...schools, ...schools].map((school, i) => (
            <a
              key={i}
              href={school.url}
              target="_blank"
              rel="noopener noreferrer"
              title={school.name}
              className="inline-flex items-center justify-center shrink-0 group/logo mx-6 md:mx-10"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={school.logo}
                alt={school.name}
                className={`${school.className || "h-10 md:h-14"} w-auto max-w-[120px] md:max-w-[160px] object-contain group-hover/logo:scale-110 transition-transform duration-300 opacity-90 hover:opacity-100`}
              />
            </a>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
