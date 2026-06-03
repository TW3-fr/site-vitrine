'use client'

import { DraggableScroller } from './DraggableScroller'

interface School {
  name: string
  url: string
  logo: string
  className?: string
}

export function InfiniteScroller({ schools }: { schools: School[] }) {
  if (!schools || schools.length === 0) return null;

  const isStatic = schools.length <= 3;

  return (
    <div className="w-full relative flex flex-col gap-6 pt-4 pb-4 border-b border-border/50">
      <h3 className="text-center font-sans font-bold text-muted-foreground uppercase tracking-widest text-sm px-6">Nos élèves ont intégré</h3>
      
      {isStatic ? (
        <div className="w-full flex justify-center items-center gap-8 md:gap-16 py-6 px-4 flex-wrap">
          {schools.map((school, i) => (
            <a
              key={i}
              href={school.url}
              target="_blank"
              rel="noopener noreferrer"
              title={school.name}
              className="inline-flex items-center justify-center shrink-0 group/logo"
            >
              <img
                src={school.logo}
                alt={school.name}
                className={`${school.className || "h-12 md:h-16"} w-auto max-w-[140px] md:max-w-[200px] object-contain group-hover/logo:scale-110 transition-transform duration-300 opacity-90 hover:opacity-100`}
              />
            </a>
          ))}
        </div>
      ) : (
        <div className="relative w-full overflow-hidden flex py-6">
          <div className="absolute inset-y-0 left-0 w-12 md:w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-12 md:w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>
          <DraggableScroller speed={0.64}>
            {[...schools, ...schools].map((school, i) => (
              <a
                key={i}
                href={school.url}
                target="_blank"
                rel="noopener noreferrer"
                title={school.name}
                className="inline-flex items-center justify-center shrink-0 group/logo mx-6 md:mx-10"
                onDragStart={(e) => e.preventDefault()}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={school.logo}
                  alt={school.name}
                  className={`${school.className || "h-14 md:h-16"} w-auto max-w-[140px] md:max-w-[180px] object-contain group-hover/logo:scale-110 transition-transform duration-300 opacity-90 hover:opacity-100`}
                  draggable={false}
                />
              </a>
            ))}
          </DraggableScroller>
        </div>
      )}
    </div>
  )
}
