"use client"

import { useEffect, useState } from "react"
import { motion } from "motion/react"

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", updateMousePosition)

    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
    }
  }, [])

  if (!isClient) return null

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 w-[600px] h-[600px] rounded-full z-[100]"
      style={{
        background: 'radial-gradient(circle, rgba(147, 51, 234, 0.15) 0%, rgba(147, 51, 234, 0) 50%)',
      }}
      animate={{
        x: mousePosition.x - 300,
        y: mousePosition.y - 300,
      }}
      transition={{
        type: "tween",
        ease: "backOut",
        duration: 0.1
      }}
    />
  )
}
