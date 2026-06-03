'use client'

import React, { useRef, useState, useEffect } from 'react'

export function DraggableScroller({ children, speed = 1, reverse = false, className = '' }: { children: React.ReactNode, speed?: number, reverse?: boolean, className?: string }) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [isTouch, setIsTouch] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  const hasDragged = useRef(false)

  useEffect(() => {
    let animationId: number;
    const scroll = () => {
      if (scrollRef.current && !isDragging && !isTouch) {
        if (reverse) {
          scrollRef.current.scrollLeft -= speed;
          if (scrollRef.current.scrollLeft <= 0) {
            scrollRef.current.scrollLeft = scrollRef.current.scrollWidth / 2;
          }
        } else {
          scrollRef.current.scrollLeft += speed;
          if (scrollRef.current.scrollLeft >= scrollRef.current.scrollWidth / 2) {
            scrollRef.current.scrollLeft = 0;
          }
        }
      }
      animationId = requestAnimationFrame(scroll);
    }
    animationId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationId);
  }, [isDragging, isTouch, speed, reverse]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    hasDragged.current = false
    setStartX(e.pageX - (scrollRef.current?.offsetLeft || 0))
    setScrollLeft(scrollRef.current?.scrollLeft || 0)
  }

  const handleMouseLeave = () => {
    setIsDragging(false)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return
    e.preventDefault()
    const x = e.pageX - (scrollRef.current.offsetLeft || 0)
    if (Math.abs(x - startX) > 5) {
      hasDragged.current = true
    }
    const walk = (x - startX) * 2 // Scroll speed multiplier
    scrollRef.current.scrollLeft = scrollLeft - walk
  }

  const handleClick = (e: React.MouseEvent) => {
    if (hasDragged.current) {
      e.preventDefault()
      e.stopPropagation()
    }
  }

  return (
    <div
      ref={scrollRef}
      className={`w-full overflow-x-auto flex gap-4 md:gap-6 px-4 cursor-grab active:cursor-grabbing ${className}`}
      style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      onClickCapture={handleClick}
      onTouchStart={() => setIsTouch(true)}
      onTouchEnd={() => setIsTouch(false)}
      onTouchCancel={() => setIsTouch(false)}
    >
      <style dangerouslySetInnerHTML={{ __html: `::-webkit-scrollbar { display: none; }` }} />
      {children}
    </div>
  )
}
